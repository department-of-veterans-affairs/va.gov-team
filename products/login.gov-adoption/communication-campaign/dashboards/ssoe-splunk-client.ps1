
# Download the result set of a named query.  The splunk job needs to either be explicitly run or running on a schedule 

$outputPath = $args[0]
$queryName = $args[1]
$pwd = $args[2]


# $outputPath = "C:\Users\vacodickss\ETL\1 extracted\IAM SSOe Data\IDme MFA Users" 
# $queryName = "IDme_Users_By_CSPMethod_And_SECID_2years" 
# $queryName = "LastUsed by User and CSP"

# Sample command for ORGANIC (First run the query in splunk to get fresh resultset)
# pwsh C:\Users\vacodickss\ETL\scripts\ssoe-splunk-client-v1.ps1 "C:\Users\vacodickss\ETL\1 extracted\IAM SSOe Data\IDme MFA Users" "IDme_Users_By_CSPMethod_And_SECID_2years" password

# Sample command for REACTIVATION (First run the query in splunk to get fresh resultset)
# pwsh C:\Users\vacodickss\ETL\scripts\ssoe-splunk-client-v1.ps1 "C:\Users\vacodickss\ETL\1 extracted\IAM SSOe Data\All Last Used by CSP" "LastUsed by User and CSP" password



$now = Get-Date
$todayDashes = (Get-Date).ToString("MM-dd-yyyy")
$todaySlashes = (Get-Date).ToString("MM-dd-yyyy")

$outfileLatest = "$($outputPath)\$($queryName)-latest.csv"
$outfileToday  = "$($outputPath)\$($queryName)-$($todayDashes).csv" 
$logFile = "$($outputPath)\$($queryName)-log.txt"


if (Test-Path $outfileLatest) {
  Remove-Item $outfileLatest
}

Write-Host "Calling SSOe query: $queryName.  Up til now: $now Today: $todaySlashes"  -ForegroundColor Green
Write-Host "Output Target: $($outfileLatest)"

"Output Target: $($outfileLatest)" >> $logFile

$uriHistory = "https://vaazviamses100.vha.med.va.gov:8089/servicesNS/apicar/search/saved/searches/$($queryName)/history"

$username = "apicar"

$password = ConvertTo-SecureString $pwd -AsPlainText -Force

#$encryptedPassword = ConvertFrom-SecureString -SecureString $password

# TODO: This doesn't work when run by Domo Workbench
#$encryptedPassword = ""
#$password = ConvertTo-SecureString -String $encryptedPassword


if (! $password) {
    "ERROR: ConvertTo-SecureString call failed" >> $logFile
    Exit 1
}


try {
    $credential = New-Object System.Management.Automation.PSCredential($username, $password)
}
catch {
    Write-Warning $Error[0]
    $Error[0] >> $logFile
    Exit 1
}

$uri = $uriHistory

try {
    $response = Invoke-WebRequest -Uri $uri -Credential $credential -Authentication Basic -SkipCertificateCheck
}
catch {
    Write-Warning $Error[0]
    $Error[0] >> $logFile
    Exit 1
}

$response.Content >> $logFile

$responseXML = [xml]$response.Content

$uriResultsBase = ""


# mult jobs may exist. Getting the one with today's date
$responseXML.feed.entry | ? { [datetime]::parseexact($_.updated.split("T")[0], 'yyyy-MM-dd', $null).ToString('MM-dd-yyyy') -eq $todayDashes } | % { $uriResultsBase = $_.id }
#$responseXML.feed.entry | ? { [datetime]::parseexact($_.updated.split("T")[0], 'yyyy-MM-dd', $null).ToString('MM-dd-yyyy') -eq "10-03-2023" } | % { $uriResultsBase = $_.id }


if (! $uriResultsBase) {
    Write-Output $response.Content
    Write-Output "Results of Search Job with today's date not found."
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
        Exit 1
    }


    if ($response.Content) {
        if ($firstPass) {
            $firstPass = 0
            $response.Content | ConvertFrom-Csv | Select-Object @{Name='TO_DATE';Expression={$todaySlashes}},* | Export-Csv $outfileToday -NoTypeInformation
        } else {
            $response.Content | ConvertFrom-Csv | Select-Object @{Name='TO_DATE';Expression={$todaySlashes}},* | Export-Csv $outfileToday -NoTypeInformation -Append
        }
    }
}

Copy-Item $outfileToday -Destination $outfileLatest

Exit 0
