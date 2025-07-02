# Args are hard-coded until they don't need to be
# pwsh domo-client.ps1


# example
# pwsh domo-client.ps1 "..\1 extracted\Domo Data\MHV Users with Modern Creds" "mhv-01272025" "68c58f8f-dc38-4634-a3de-41b70991821c"


$outputPath = $args[0]
$fileName = $args[1]
$datasetId = $args[2]

$clientID = "UPDATE"
$clientSecret = "UPDATE"


$today = (Get-Date).ToString("MMddyyyy")

#$fileName = "mhvdata-$($today)"
#$outputPath = "..\1 extracted\Domo Data\MHV Users with Modern Creds" 
#$datasetId = "28736674-a1e7-401d-b26b-ac1fd8e69056"  # test small dataset
#$datasetId = "0bf90b88-93c7-4b9f-a64f-9324de4561df"



$outfile = "$($outputPath)\$($fileName).csv"
$logFile = "$($outputPath)\$($fileName)-log.txt"


$strToEncode = $clientID + ":" + $clientSecret
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
