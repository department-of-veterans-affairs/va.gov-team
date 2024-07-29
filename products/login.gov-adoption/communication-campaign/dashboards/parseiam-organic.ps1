# Output emails for Organic segment based on MPI data, i.e. users with either DSL or MHV. Doesn't have IDME or LGN)
# SSOe transaction data is also parsed fill gaps in MPI dataset with respect to whether an ID.me credentials used as MFA for MHV or DSL
# More info at https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products[…]doption/discovery/deferred-identity-proofing/data-dictionary.md

# pwsh parseiam-organic.ps1  "..\1 extracted\IAM Data\CSPID_ACTIVE_20240103\CSPID_ACTIVE_20240103.CSV" "C:\Users\vacodickss\ETL\1 extracted\IAM SSOe Data\IDme MFA Users\IDme_Users_By_CSPMethod_And_SECID_2years-01-07-2024.csv" "..\..\email campaigns\emails-organic-mpi20240103-ssoe20240107.csv"


$Headerv3 = 'secid', 'icn', 'firstName', 'lastName', 'cspid', 'status', 'lastUsed', 'ial', 'aal', 'fal', 'cspMethod', 'recordCreatedDate', 'vaEmail', 'externalEmail'
$ssoeHeader = 'toDate', 'secid', 'cspMethod', 'recordCreatedDate', 'lastUsed'



#all keys for the children of all the secids will output as fields in the csv, e.g. 200DOD, 200DOD-CSPMethod
$allIds = @{}
$outputCols = @{
    'secid' = 1
    'icn' = 1
    'email' = 1
    'firstName' = 1
    'lastName' = 1
}

$csps      = @{}
$count     = 0
$userCount    = 0
$newUserCount = 0
$dupsCount      = @{}
$segmentCount = 0

$anomalies = @{}


$firstRow=1

$inputFile = ""
$outputFile = ""

$newCorrelationFound = $false

$1970 = Get-Date "01-01-1970"

$cspsToExport = @{
    '200PIV'  = 0
    'DSLogon' = 1
    '200DOD'  = 1
	'200VIDM' = 1
	'200VLGN' = 1
    '200PUSA' = 0
    '200MH'   = 1
    '33'   = 0
    'idme'   = 0
    '200PROV'   = 0
    'VACSP'   = 0
    'Symantec'   = 0
    '200VSYM'   = 0
    'FCCX'   = 0
}



function Output-Summary {
    #Echo displays as pretty print

    Write-Host "Credential Count by CSP"
    Echo $csps
    Write-Host ""

    Write-Host "Duplicate Count by CSP and CSP Method"
    Echo $dupsCount
    Write-Host ""

}


function Output-All {
    Write-Host "$($count) $($allIds.Count) $((get-date).ToString('T'))" -ForegroundColor Green

    $organicSegment = @{}
    foreach ($row in $allIds.Values.GetEnumerator()) {

        if ($row.containsKey('DSL') -or $row.containsKey('MHV')) {
            #Write-Host "Found" $row.id -ForegroundColor Green

            if (! $row.containsKey('LGN') -and ! $row.containsKey('IDM')) {
                 #Write-Host $row

                
                $organicTarget = $true

                if ($organicTarget) {
                    if (! $row.containsKey('secid')) {
                        Write-Host "Unexpected: " $row
                        return
                    }
                    $organicSegment[$row.secid] = $row
                    $segmentCount++
                }
            }
        }
    }

    $allIds = $organicSegment

    # TODO: need to add cols to the first row sent to Export-CSV so it picks up the columns.  Too expensive and too much resources to put columns in every hash

    #Write-Host "Adding Columns" -ForegroundColor Green
    #foreach ($colName in $outputCols.GetEnumerator() ) {
    #    Write-Host $colName.Key
    #     $allIds.Values | Add-Member -Name $colName.Key -Value '' -MemberType NoteProperty
    #}

    # this little hack assumes that the Values will pull the objects in the same order each time, so we need only the column headers to the first row only
    foreach ($row in $allIds.Values.GetEnumerator()) {

        foreach ($colName in $outputCols.GetEnumerator() ) {
            if (! $row.containsKey($colName.Key)) {
                Write-Host "adding       : " $colName.Key
                $row | Add-Member -Name $colName.Key -Value '' -MemberType NoteProperty
            } else {
                Write-Host "already there: " $colName.Key
            }
        }
        break
    }
   
    Write-Host "Outputting CSV: $($outputFile) $((get-date).ToString('T'))" -ForegroundColor Green
    $allIds.Values | Export-Csv -Path $outputFile
    
    Write-Host "$($count) $($userCount) $($segmentCount) $((get-date).ToString('T'))" -ForegroundColor Green
}




Write-Host "$($count) $($userCount) $((get-date).ToString('T'))"  -ForegroundColor Green
$inputFile = $args[0]
$ssoeFile = $args[1]
$outputFile = $args[2]

$Header = $Headerv3

Write-Host  "Input format: " $Header


Import-Csv $inputFile -Header $Header | ForEach-Object {
    #header is on 2nd line, so following will skip it
    #if ($_.secid -eq "" -or $_.secid -eq "SECID") {
    if ($count++ -lt 1) {
        return
    }

	if ($count % 250000 -eq 0) {
        #Output-Summary
		Write-Host "$($count) $($userCount) $((get-date).ToString('T'))"  -ForegroundColor Green
	}

	if ($count % 1000000 -eq 0) {
		Output-Summary
    }

    <#
    if ($count -eq 3000000) {
        Output-All
        exit
    }
    #>

    #Echo $_

    $secid = $_.secid
    $icn = $_.icn
    $cspid = $_.cspid
    $lastused = $_.lastUsed
    $cspMethod = $_.cspMethod
    $email = $_.externalEmail
    $firstName = $_.firstName
    $lastName = $_.lastName

    # input format v2
    $recordCreatedDate = ""
    if ($outputFormatVersion -eq 2) {
        $recordCreatedDate = $_.recordCreatedDate
    }

    if ($secid -eq $null) {
        #Write-Host "skipping null secid"
        return
    }

    $csp = $cspid.Split("_")[0]
    $cspKey = $csp


    if ( ! $csps.ContainsKey($csp) ) {
    	$csps[$csp] = 1
    } else {
    	$csps[$csp]++
    }

    if ($csp -eq $null) {
        Write-Host "anomaly (malformatted CSP ID): $($_)"
        $anomalies[$count] = @{
            'anomalyType' = 'malformatted CSP ID'
            'secid' = $secid
            'icn'   = $icn
            'cspid'  = $cspid
            'lastused' = $lastused
        }
        return
    }

    if ($cspsToExport[$csp] -eq $null) {
        Write-Host "anomaly (unknown csp id):  $($_)"
        $anomalies[$count] = @{
            'anomalyType' = 'CSP ID not recognized'
            'secid' = $secid
            'icn'   = $icn
            'cspid'  = $cspid
            'lastused' = $lastused
        }
        return
    }

    #TODO filter if not active (all records currently are active though)

    if ($cspsToExport[$csp] -eq 0) {
        #Write-Host 'ignoring csp: ' $_
        return
    }




    if ($csp -eq '200VIDM') {
        if (($cspMethod -eq '') -or ($cspMethod -eq 'IDME')) {
            $cspKey = '200VIDM-IDME'
        } else {
            $cspKey = '200VIDM-' + $cspMethod
        }
    }

    # MPI lastUsed is unreliable.
    if (($cspKey -eq '200DOD') -or ($cspKey -eq 'DSLogon')) {
        if (! $lastused) {
            return;
        }
    }

    if (($cspKey -eq '200DOD') -or ($cspKey -eq 'DSLogon') -or ($cspKey -eq '200VIDM-IDME_DSL')) {
        $cspKey = "DSL"
    }

    if (($cspKey -eq '200MH') -or ($cspKey -eq '200VIDM-IDME_MHV')) {
        $cspKey = "MHV"
    }

    if (($cspKey -eq '200VLGN')) {
        $cspKey = "LGN"
    }

    if (($cspKey -eq '200VIDM-IDME')) {
        $cspKey = "IDM"
    }

    if (($cspKey -ne 'DSL') -and ($cspKey -ne 'LGN') -and ($cspKey -ne 'IDM') -and ($cspKey -ne 'MHV')) {
#    if (($cspKey -ne 'DSL') -and ($cspKey -ne 'LGN')) {
        return
    }


    if ( ! $allIds.ContainsKey($secid) ) {
        $allIds[$secid] = @{}
        $userCount++

    }


    if (! $outputCols.containsKey($cspKey)) {
        $outputCols[$cspKey] = 1;
    }


    #Write-Host 'adding id: ' $secid
    $allIds[$secid]['secid'] = $secid
    $allIds[$secid]['icn'] = $icn

    if ($email) {
        $allIds[$secid]['email'] = $email
    }

    if ($firstName) {
        $allIds[$secid]['firstName'] = $firstName

        if ($lastName) {
            $allIds[$secid]['lastName'] = $lastName
        }
    }

    $allIds[$secid][$cspKey] = "M"


}


############################################################################################################
# SSOe - Primarily needed to determine if any IDM credentials exist not in MPI dataset
$count = 0
$credCount = 0

Import-Csv $ssoeFile -Header $ssoeHeader | ForEach-Object {

    $count++

	if ($count % 250000 -eq 0) {
        #Output-Summary
		Write-Host "$($count) $($credCount) $((get-date).ToString('T'))"  -ForegroundColor Green
	}

	if ($count % 1000000 -eq 0) {
		Write-Host "$($count) $($credCount) $((get-date).ToString('T'))"  -ForegroundColor Green
    }

    <#
    if ($count -eq 3000000) {
        Output-All
        exit
    }
    #>

    #Echo $_

    $secid = $_.secid
    $lastused = $_.lastused
    $cspMethod = $_.cspMethod;

    if ($secid -eq $null) {
        Echo $_
        Write-Host "skipping null secid" -ForegroundColor Orange
        return
    }


    if ( ! $allIds.ContainsKey($secid) ) {
        return
        #$allIds[$secid] = @{}
        #$allIds[$secid]['secid'] = $secid
    }

    $credCount++

    #Write-Host 'adding id: ' $secid

    $cspKey = 'IDM'
    if ($cspMethod -eq 'IDME_DSL') {
        $cspKey = 'DSL'
    }
    if ($cspMethod -eq 'IDME_MHV') {
        $cspKey = 'MHV'
    }

    if (! $outputCols.containsKey($cspKey)) {
        $outputCols[$cspKey] = 1
    }


    $allIds[$secid][$cspKey] = "S"


}

Output-All






