# Output emails for Reactivation segment based on MPI data, i.e. users with either DSL or MHV and IDME or LGN.  DSL or MHV was used last.
# SSOe transaction data is also parsed to fill gaps in MPI dataset with respect to whether an ID.me credentials used as MFA for MHV or DSL
# More info at https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products[…]doption/discovery/deferred-identity-proofing/data-dictionary.md

# pwsh parseiam-reactivation.ps1 "..\1 extracted\IAM Data\CSPID_ACTIVE_20240103\CSPID_ACTIVE_20240103.CSV" "..\\1 extracted\IAM SSOe Data\All Last Used by CSP\LastUsed by User and CSP-01-07-2024.csv" "..\..\email campaigns\emails-reactivation-mpi20240103-ssoe20240107.csv"

$Headerv3 = 'secid', 'icn', 'firstName', 'lastName', 'cspid', 'status', 'lastUsed', 'ial', 'aal', 'fal', 'cspMethod', 'recordCreatedDate', 'vaEmail', 'externalEmail'

$ssoeHeader = 'toDate', 'secid', 'csp', 'lastUsed'

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

    $reactivationSegment = @{}
    foreach ($row in $allIds.Values.GetEnumerator()) {

        if ($row.containsKey('DSL') -or $row.containsKey('MHV')) {
 #       if ($row.containsKey('DSL')) {
            #Write-Host "Found" $row.id -ForegroundColor Green

            if ($row.containsKey('LGN') -or $row.containsKey('IDM')) {
#            if ($row.containsKey('IDM') -and ! $row.containsKey('LGN')) {
#            if ($row.containsKey('LGN')) {
                 #Write-Host $row


                if ($row.containsKey('DSL')) {
                    $dslDate = get-date $row.item('DSL')
                } else {
                    $dslDate = $1970
                }
                if ($row.containsKey('MHV')) {
                    $mhvDate = get-date $row.item('MHV')
                } else {
                    $mhvDate = $1970
                }
                if ($row.containsKey('IDM')) {
                    $idmDate = get-date $row.item('IDM')
                } else {
                    $idmDate = $1970
                }
                if ($row.containsKey('LGN')) {
                    $lgnDate = get-date $row.item('LGN')
                } else {
                    $lgnDate = $1970
                }


                if ( ($dslDate -gt $idmDate) -and ($dslDate -gt $lgnDate)) {
                    $reactivationTarget = $true
                } elseif (($mhvDate -gt $idmDate) -and ($mhvDate -gt $lgnDate)) {
                    $reactivationTarget = $true
                } else {
                    $reactivationTarget = $false
                }

                if ($reactivationTarget) {
                    if (! $row.containsKey('secid')) {
                        Write-Host "Unexpected: " $row
                        return
                    }

                    $reactivationSegment[$row.secid] = $row
                    $segmentCount++
                }
            }
        #} else {
            #Write-Host "Filtering" $row.id -ForegroundColor Green
        }
    }

    $allIds = $reactivationSegment

    # TODO: need to find a add cols to the first row sent to Export-CSV so it picks up the columns.  Too expensive and too much resources to put columns in every hash

    Write-Host "Adding Columns" -ForegroundColor Green
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
    $recordCreatedDate = $_.recordCreatedDate
    $cspMethod = $_.cspMethod
    $email = $_.externalEmail
    $firstName = $_.firstName
    $lastName = $_.lastName


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

    # MPI lastused is not reliable
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

    # lastUsed in MPI was not reliable, so using recordCreatedDate and then using SSOe data below for last use within past 2 years
    if ($allIds[$secid][$cspKey]) {
        $allIds[$secid][$cspKey] = '1/1/1970'

        if ($recordCreatedDate) {
            $allIds[$secid][$cspKey] = $recordCreatedDate
        }
    }


}




############################################################################################################
# SSOe -  Needed to determine if any IDM MFA related credentials exist which are not in MPI dataset. And to correct lastUsed data
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
    if ($count -eq 1000000) {
        Output-All
        exit
    }
    #>

    #Echo $_

    $secid = $_.secid
    $lastused = $_.lastUsed
    $csp = $_.csp



    if ( ! $allIds.ContainsKey($secid) ) {
        return
        #$allIds[$secid] = @{}
        #$allIds[$secid]['secid'] = $secid
    }

    $credCount++

    $cspKey = ""
    if ($csp -eq 'MHV') {
        $cspKey = 'MHV'
    } elseif ($csp -eq 'DSL') {
        $cspKey = 'DSL'
    } elseif ($csp -eq 'IDME') {
        $cspKey = 'IDM'
    } elseif ($csp -eq 'LOGINGOV') {
        $cspKey = 'LGN'
    } else {
        Write-Host 'Unknown CSP: ' $csp
        return
    }

    if (! $outputCols.containsKey($cspKey)) {
        $outputCols[$cspKey] = 1
    }


    $allIds[$secid][$cspKey] = $lastused


}

Output-All





