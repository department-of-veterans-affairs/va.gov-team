# pwsh C:\Users\vacodickss\ETL\scripts\ssoe-edl-splunk-client-v1.ps1 "C:\Users\vacodickss\ETL\1 extracted\IAM SSOe Data\TEST" List_of_Distinct_Users_by_CSP_Monthly_secid pwd

$baseFolder = $env:DOMO_WB_BASEPATH

# get information for log file name
$datetime   = Get-Date -F 'yyyyMMdd-HH-mm-ss'

# expexcting current process will always be pwsh.exe
$currentProcessId = $PID
$currentProcess = Get-WmiObject Win32_Process -Filter "ProcessId = $currentProcessId"

# expecting parent process to be domo when running job
$parentProcess = Get-WmiObject Win32_Process -Filter "ProcessId = $($currentProcess.ParentProcessId)"
$parentProcessName =  $parentProcess.Name.Substring(0, $parentProcess.Name.IndexOf('.'))
if ($parentProcessName -eq "WindowsTerminal") {
    $parentProcessName = "shell"
}
"Parent Process: $($parentProcessName)"

$scriptName = $MyInvocation.MyCommand.Name.Replace(".ps1", "")

$transLogFile = "$baseFolder\logs\$scriptName-$parentProcessName-$datetime.log"
"tail this log using:  Get-Content -Path $transLogFile -Wait -Tail 10"
Start-Transcript -Path "$transLogFile"

$outputPath = $args[0]
$queryName = $args[1]
# no longer using password argument, see README.md for configuring profile environment variables


#SHORT CIRCUIT - for Domo Workbench to upload a manually updated latest file
#Exit 0


$now = Get-Date
$todayDashes = (Get-Date).ToString("MM-dd-yyyy")
$todaySlashes = (Get-Date).ToString("MM-dd-yyyy")

$outfileLatest = "$($outputPath)\$($queryName)-latest.csv"
$outfileToday  = "$($outputPath)\$($queryName)-$($todayDashes).csv" 
$logFile = "$($outputPath)\$($queryName)-log.txt"


if (Test-Path $outfileLatest) {
  "removing latest file"
  Remove-Item $outfileLatest
}

Write-Host "Calling SSOe query: $queryName.  Up til now: $now Today: $todaySlashes"  -ForegroundColor Green
Write-Host "Output Target: $($outfileLatest)"

if (!(Test-Path $outputPath)) {
  "output directory does not exist"
#   New-Item -Path $logFile -ItemType File
}
"Output Target: $($outfileLatest)" >> $logFile

$uriHistory = "https://project-splunk-1-west-shc-nlb-2a90998e3472318c.elb.us-gov-west-1.amazonaws.com:8089/servicesNS/iam-api-3/iam_car/saved/searches/$($queryName)/history"
#$uriHistory = "https://project-splunk-1-west-shc-nlb-2a90998e3472318c.elb.us-gov-west-1.amazonaws.com:8089/services/saved/searches/$($queryName)/history"

"History URL: $($uriHistory)" >> $logFile

# curl.exe -s -k -u iam-api-3:<password> https://project-splunk-1-west-shc-nlb-2a90998e3472318c.elb.us-gov-west-1.amazonaws.com:8089/servicesNS/-/-/search/v2/jobs/export -d search="| savedsearch Availability_CPS" -d output_mode=csv -o TEST.csv
# curl.exe -s -k -u iam-api-3:<password> https://project-splunk-1-west-shc-nlb-2a90998e3472318c.elb.us-gov-west-1.amazonaws.com:8089/servicesNS/iam-api-3/iam_car/saved/searches/TEST2/history
 


"using splunk key $env:SPLUNK_USERNAME"
$pwdSecureString = ConvertTo-SecureString $env:SPLUNK_PW -AsPlainText -Force


if (! $pwdSecureString) {
    "ERROR: ConvertTo-SecureString call failed" >> $logFile
    "error occurred"
    Stop-Transcript
    Exit 1
}


try {
    $credential = New-Object System.Management.Automation.PSCredential($env:SPLUNK_USERNAME, $pwdSecureString)
}
catch {
    Write-Warning $Error[0]
    $Error[0] >> $logFile
    "error occurred"
    Stop-Transcript
    Exit 1
}

$uri = $uriHistory

try {
    $response = Invoke-WebRequest -Uri $uri -Credential $credential -Authentication Basic -SkipCertificateCheck
}
catch {
    Write-Warning $Error[0]
    $Error[0] >> $logFile
    "error occurred"
    Stop-Transcript
    Exit 1
}


$response.Content >> $logFile

$responseXML = [xml]$response.Content

$uriResultsBase = ""


# Be aware that EDL Splunk runs on GMT
# mult jobs may exist.  
Write-Host "Today: $($todayDashes)"
$responseXML.feed.entry | ? { [datetime]::parseexact($_.published.split("T")[0], 'yyyy-MM-dd', $null).ToString('MM-dd-yyyy') -eq $todayDashes } | % { $uriResultsBase = $_.id }
#$responseXML.feed.entry | ? { [datetime]::parseexact($_.published.split("T")[0], 'yyyy-MM-dd', $null).ToString('MM-dd-yyyy') -eq "10-03-2023" } | % { $uriResultsBase = $_.id }


if (! $uriResultsBase) {
    Write-Output $response.Content
    Write-Output "Results of Search Job with today's date not found."
    "error occurred"
    Stop-Transcript
    Exit 1
}


Write-Output $uriResultsBase
$uriResultsBase >> $logFile

$uri = "$($uriResultsBase)/results"

Write-Output $uri
$uri >> $logFile


$count = 50000
$offset = 0


$firstPass = 1
# following should be true based on call to history uri above
while ($response.Content) {

    Write-Output "count: $count offset: $offset"

    $postParams = @{
        "output_mode" = "csv"
        "count" = $count
        "offset" = $offset
    }

    $offset += $count

    try {
        $response = Invoke-WebRequest -Uri $uri `
            -Body $postParams `
            -Credential $credential `
            -Authentication Basic `
            -SkipCertificateCheck
    }
    catch {
        Write-Warning $Error[0]
        $Error[0] >> $logFile
        "error occurred"
        Stop-Transcript
        Exit 1
    }


    if ($response.Content) {
        if ($firstPass) {
            $firstPass = 0

            $outfile = $outfileToday

            # update outfile if output contains fromDate and toDate
            $row1 = $response.Content | ConvertFrom-Csv | Select -First 1

            $fromDate = $row1[0].("fromDate")
            $toDate = $row1[0].("toDate")
            if ($fromDate -and $toDate) {
                $fromDateObj = [DateTime]$fromDate
                $toDateObj = [DateTime]$toDate

                $fromShort = $fromDateObj.ToString("yyyyMMdd")
                $toShort = $toDateObj.ToString("yyyyMMdd")

                $outfile  = "$($outputPath)\$($queryName)-$($fromShort)-$($toShort).csv"
            }

            Write-Output "outfile: $outfile"

            $response.Content | ConvertFrom-Csv | Export-Csv $outfile -NoTypeInformation
        } else {
            $response.Content | ConvertFrom-Csv | Export-Csv $outfile -NoTypeInformation -Append
        }
    }
}

Copy-Item $outfile -Destination $outfileLatest

"success"
Stop-Transcript
Exit 0
