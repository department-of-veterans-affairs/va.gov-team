# example
# pwsh domo-client.ps1 "..\1 extracted\Domo Data\MHV Users with Modern Creds" "mhv-01272025" "216d211d-d5b3-439a-8d25-b4ddad182b7e"


$outputPath = $args[0]
$fileName = $args[1]
$datasetId = $args[2]

$today = (Get-Date).ToString("MMddyyyy")

if (-not $outputPath -or $outputPath -eq "") {
    "no outputPath parmeter specified, using default"
    $outputPath = "..\1 extracted\Domo Data\MHV Users with Modern Creds" 
}
"Output Path: $outputPath"
if ($outputPath.StartsWith(".")) {
    $outputPath = Resolve-Path "$(Get-Location)\$outputPath"
    "fixed up relative outputPath is $outputPath"
}

if (-not $fileName -or $fileName -eq "") {
    "no fileName parmeter specified, using default"
    $fileName = "mhvdata-$($today)"
}
"FileName: $fileName"

if (-not $datasetId -or $datasetId -eq "") {
    "no datasetId parmeter specified, using default"
    # The following guid represents dataset named "Users and Modern Creds (for export to CDW for MHV) v5"
    $datasetId = "216d211d-d5b3-439a-8d25-b4ddad182b7e"
}
"Dataset Id: $datasetId"


$outfile = "$($outputPath)\$($fileName).csv"
$logFile = "$($outputPath)\$($fileName)-log.txt"


"using DOMO Client ID: $($env:DOMO_CLIENT_ID)"

$strToEncode = $env:DOMO_CLIENT_ID + ":" + $env:DOMO_CLIENT_SECRET
$bytes = [System.Text.Encoding]::UTF8.GetBytes($strToEncode)
$base64authz = [Convert]::ToBase64String($bytes)

$scope = "data"

# Create Access Token
$accessTokenUrl = "https://api.domo.com/oauth/token?grant_type=client_credentials&scope=$($scope)"



$exportDataUrl = "https://api.domo.com/v1/datasets/$($datasetId)/data?includeHeader=true"


if (Test-Path $outfile) {
  Remove-Item $outfile
}

Write-Host "Output Target: $($outfile)"

#"Output Target: $($outfile)" >> $logFile



$headers = @{
    "Authorization" = "Basic $($base64authz)"
    "Accept" = "application/json"
}




Write-Host "Getting Domo Access Token" -ForegroundColor Green

try {
    $response = Invoke-WebRequest -Uri $accessTokenUrl `
        -Method Get `
        -Headers $headers `
}
catch {
    Write-Warning $Error[0]
    $Error[0] >> $logFile
    Exit 1
}


#$response.Content >> $logFile

$responseJSON = ConvertFrom-Json -InputObject $response.Content

$accessToken = $responseJSON.access_token

Write-Host "Access Token $($accessToken)" -ForegroundColor Green

$headers = @{
    "Authorization" = "Bearer " + $accessToken
    "Accept" = "text/csv"
}


Write-Host "Exporting Data from Domo" -ForegroundColor Green

try {
    $response = Invoke-WebRequest -Uri $exportDataUrl `
        -Method Get `
        -Headers $headers `
}
catch {
    Write-Warning $Error[0]
    $Error[0] >> $logFile
    Exit 1
}


#Write-Host $response

$file = [System.IO.FileStream]::new($outFile, [System.IO.FileMode]::Create)
$file.write($response.Content, 0, $response.RawContentLength)
$file.close()

#$icns.Values | Export-Csv -Path $outfile
#Copy-Item $outfileToday -Destination $outfileLatest

Exit 0
