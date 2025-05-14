# example
# pwsh datadog-client-v1.ps1 "C:\Users\vacodickss\ETL\1 extracted\VA.gov Data\Mobile Users" week 1

# 2/3/2025 Added support for new error type: "request_timeout(Request timeout)", "deadline_exceeded(The query timed out)"

$outputPath = $args[0]
$period = $args[1]
$periodsBack = $args[2]


$apiKey = "UPDATE"
$applicationKey = "UPDATE"


#SHORT CIRCUIT - for Domo Workbench to upload a manually updated latest file
#Exit 0

#TEST
#$outputPath = "C:\Users\vacodickss\ETL\1 extracted\VA.gov Data\Mobile Users" 


Write-Host "$period $periodsBack"
if ($period -eq "week") {
    $fromWeek = (get-date).AddDays(-7 * $periodsBack)
    $fromDay = $fromWeek.AddDays(0 - $fromWeek.DayOfWeek)
    $toDay = $fromDay.AddDays(7)
} elseif ($period -eq "month") {
    $fromMonth = (get-date).AddMonths(-$periodsBack)
    $toMonth = (get-date).AddMonths(-($periodsBack-1))
    $fromDay = $fromMonth.AddDays(0 - $fromMonth.Day + 1)
    $toDay = $toMonth.AddDays(0 - $toMonth.Day + 1)
} else {
    Write-Host "time period not supported " $period
    Exit 1
}


#TEST
#$fromDay = (get-date)
#$toDay = (get-date)

$from = $fromDay.ToString("yyyy-MM-ddT00:00-00:00")
$fromShort = $fromDay.ToString("yyyyMMdd")
$fromSlashes = $fromDay.ToString("MM/dd/yyyy")
$to = $toDay.ToString("yyyy-MM-ddT00:00-00:00")
$toShort = $toDay.ToString("yyyyMMdd")
$toSlashes = $toDay.ToString("MM/dd/yyyy")

#TEST
#$from = $fromDay.ToString("yyyy-MM-ddT00:00-00:00")
#$to = $toDay.ToString("yyyy-MM-ddT01:00-00:00")

Write-Host "$from $to"



$fileName = "mobileUsers-$($period)-$($fromShort)-$($toShort)"
$fileNameLatest = "mobileUsers-$($period)"
$query = "service:vets-api AND @message_content:*SignInController*callback" 
#$from = "2024-12-16T00:00:00-00:00"
#$to =   "2024-12-18T00:00:00-00:00"

#Write-Host $fileName


$limit = 1000

$icns = @{}

$globals = @{
    'totalFound' = 0
    'totalUnique' = 0
    'lastTimestamp' = ''
}


#$now = Get-Date
#$todayDashes = (Get-Date).ToString("MM-dd-yyyy")

$outfile = "$($outputPath)\$($fileName).csv"
$outfileLatest = "$($outputPath)\$($fileNameLatest)-latest.csv"
$logFile = "$($outputPath)\$($fileNameLatest)-log.txt"


function Process-Response {
    param (
        $json
    )
 
    $json.data | foreach {
        #$debugJson = ConvertTo-Json $_
        #Write-Host $debugJson

        $icn = $_.attributes.attributes.payload.icn
        $csp = $_.attributes.attributes.payload.type
        $ial = $_.attributes.attributes.payload.ial

        if (($ial -eq 1) -or (! $icn -or ! $csp)) {
             #$jsonString = ConvertTo-Json $_
             #Write-Host "Unexpected: " $jsonString

        } else {

            $icncsp = "icn$($icn)csp$($csp)"
            $timestamp = $_.attributes.timestamp


        
            if ($icncsp) {
               $globals['totalFound']++
               $globals['lastTimestamp'] = $timestamp
               if (! $icns.ContainsKey($icncsp)) {
                    $globals['totalUnique']++
                    $icns[$icncsp] = @{}
        	        $icns[$icncsp]['icn'] = $icn
                    $icns[$icncsp]['csp'] = $csp
               }

               #Write-Host "Found ICN: $($globals['totalFound']) $($globals['totalUnique']) $icn $timestamp"
            }
        }
    }
}





if (Test-Path $outfile) {
  Remove-Item $outfile
}


if (Test-Path $outfileLatest) {
  Remove-Item $outfileLatest
}


Write-Host "Calling DataDog query: $queryName.  From: $from To: $to"  -ForegroundColor Green
Write-Host "Output Target: $($outfile)"

"Output Target: $($outfile)" >> $logFile


$uri = "https://api.ddog-gov.com/api/v2/logs/events/search"
$headers = @{
    "DD-API-KEY" = $apiKey
    "DD-APPLICATION-KEY" = $applicationKey
}

#&cols=%40icn%2C%40payload.typestorage="flex_tier
# &cols=%40icn%2C%40payload.type
# query=signinservice signincontroller callback env:eks-prod @payload.client_id:vamobile @icn:*
#       signinservice signincontroller callback env:eks-prod @payload.client_id:vamobile @icn:*
#       service:vets-api AND @message_content:*SignInController*callback AND env:eks-prod 
# `"storage_tier`": `"online-archives`"
#     `"storage_tier`": `"flex_tier`"
$body =@"
{
  `"filter`": {
    `"indexes`": [
      `"*`"
    ],
    `"query`": `"$query`",
    `"from`": `"$from`",
    `"to`": `"$to`",
    `"storage_tier`": `"flex`"
  },
  `"page`": {
    `"limit`": $limit
  },
  `"sort`": `"timestamp`"
}
"@

#    `"storage_tier`": `"indexes`"
#    `"storage_tier`": [`"indexes`", `"online-archives`"]



Write-Host "calling DataDog API..." -ForegroundColor Green

try {
    $response = Invoke-WebRequest -Uri $uri `
        -Method Post `
        -Headers $headers `
        -ContentType "application/json" `
        -Body "$body"
}
catch {
    Write-Warning $Error[0]
    $Error[0] >> $logFile
    Exit 1
}


#$response.Content >> $logFile

$responseJSON = ConvertFrom-Json -InputObject $response.Content

Process-Response $responseJSON
$now = $((get-date).ToString('T'))
$log = "$now Found: $($globals['totalFound']) $($globals['totalUnique']) $($globals['lastTimestamp'])"
Write-Host  $log
$log >> $logFile

$cursor = $responseJSON.meta.page.after
#Write-Host "Cursor: $cursor"


$bodyWithCursor = ""
if ($cursor) {
    $bodyJSON = ConvertFrom-Json -InputObject $body
    $bodyJSON.page | add-member -Name "cursor" -value $cursor -MemberType NoteProperty
    $bodyWithCursor = ConvertTo-Json $bodyJSON 
    #Write-Host "updated body with cursor: " $bodyWithCursor
}

while ($cursor) {

    Write-Host "calling DataDog API..." -ForegroundColor Green

    try {
        $response = Invoke-WebRequest -Uri $uri `
            -Method Post `
            -Headers $headers `
            -ContentType "application/json" `
            -Body "$bodyWithCursor"
    }
    catch {
        Write-Host "DataDog did not return resultset..." -ForegroundColor DarkYellow
        Write-Warning $Error[0]
        $Error[0] >> $logFile

        # Note the $response object doesn't get updated apparently due to the error, so can't count on this, but we can use the last value of reset
        <#
        $rem = $response.Headers["X-RateLimit-Remaining"]
        $res = $response.Headers["X-RateLimit-Reset"]
        $summary = "Remaining (requests): $rem, Reset (sec): $res"
        Write-Host "$summary"
        #>

        # sample errors at end of file
        $responseJSON = ConvertFrom-Json -InputObject $Error[0]
        $err = $responseJSON.errors[0]
        $code = $responseJSON.code
        Write-Host "code: $code, error: $err"

        if (($err -eq "Too many requests") -or 
            ($err -eq "resource_exhausted(RateLimited: Too many pending queries)") -or
            ($err -eq "deadline_exceeded(Request timeout)") -or
            ($err -eq "request_timeout(Request timeout)") -or
            ($err -eq "deadline_exceeded(The query timed out)")) {
            Write-Host "Sleeping $rateLimitReset" -ForegroundColor DarkYellow
            $sleep = [double]"$($rateLimitReset).0"
            Start-Sleep -Seconds $sleep
            Continue
        } else {
            Write-Host "Unknown error. Exiting"
            Exit 1
        }
    }

    $rateLimit = $response.Headers["X-RateLimit-Limit"]
    $rateLimitPeriod = $response.Headers["X-RateLimit-Period"]
    $rateLimitRemaining = $response.Headers["X-RateLimit-Remaining"]
    $rateLimitReset = $response.Headers["X-RateLimit-Reset"]
    $rateLimitName = $response.Headers["X-RateLimit-Name"]

    # rateLimitName:  logs_public_search_api
    # rateLimit:      60 requests per period
    # ratLimitPeriod: 60 seconds
    #$summary = "Request Limit/Period: $rateLimit, Remaining: $rateLimitRemaining, Reset: $rateLimitReset, Name: $rateLimitName, Period (sec): $rateLimitPeriod"
    $summary = "Remaining (requests): $rateLimitRemaining, Reset (sec): $rateLimitReset"

    Write-Host "$summary"
    $summary >> $logFile

    #$response.Content >> $logFile

    $responseJSON = ConvertFrom-Json -InputObject $response.Content

    Process-Response $responseJSON
    $now = $((get-date).ToString('T'))
    $log = "$now Found: $($globals['totalFound']) $($globals['totalUnique']) $($globals['lastTimestamp'])"
    Write-Host  $log
    $log >> $logFile

    $cursor = $responseJSON.meta.page.after

    $bodyJSON.page.cursor = $cursor
    $bodyWithCursor = ConvertTo-Json $bodyJSON 
    #Write-Host "updated body with cursor: " $bodyWithCursor


    #$cursor = 0
}

$icns.Values | Select-Object @{Name='fromDate';Expression={$fromSlashes}},@{Name='toDate';Expression={$toSlashes}},* | Export-Csv $outfile -NoTypeInformation
#$icns.Values | Export-Csv -Path $outfile
Copy-Item $outfile -Destination $outfileLatest

Exit 0




<#
# can reproduce this with multiple clients
{
  "status": "error",
  "code": 429,
  "errors": [
    "Too many requests"
  ],
  "statuspage": "https://status.ddog-gov.com",
  "twitter": "http://twitter.com/datadogops",
  "email": "support@datadoghq.com"
}

{
  "errors": [
    "Too many requests"
  ]
}

{
  "errors": [
    "resource_exhausted(RateLimited: Too many pending queries)"
  ]
}

{
  "errors": [
    "deadline_exceeded(Request timeout)"
  ]
}

{
  "errors": [
    "request_timeout(Request timeout)"
  ]
}

{
  "errors": [
    "deadline_exceeded(The query timed out)"
  ]
}

#>