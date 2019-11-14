## 686
- BGS
- VBMS
- EVSS

686_Retrieve_Response.json 

```
{"submitProcess": {
   "application":    {
      "acceptWarnings": false,
      "appStatus": "Open",
      "bnftClaimType": "EBENDEPENDENCY686c",
      "createdDate": 1532964430650,
      "documents": [],
      "expirationDate": 1564500430650,
      "has30Percent": true,
      "modifiedDate": 1532964435282,
      "validUser": true
   },
   "rbps": true,
   "vaFaxNumber": "",
   "vaOffice":    {
      "addressLine1": "Regional Office",
      "addressLine2": "PO Box 1437",
      "addressLine3": "",
      "addressLocality": "DOMESTIC",
      "city": "St. Petersburg",
      "country":       {
         "dropDownCountry": "USA",
         "textCountry": ""
      },
      "postOffice": "NONE",
      "postalType": "NONE",
      "sharedAddrsInd": "N",
      "state": "",
      "zipCode": "33731",
      "zipLastFour": ""
   },
   "vaOfficeCode": "317",
   "vaOfficeName": "St. Petersburg",
   "veteran":    {
      "address":       {
         "addressLine1": "16494 West High Pway",
         "addressLine2": "Suite 204",
         "addressLine3": "Apt 278990",
         "addressLocality": "DOMESTIC",
         "city": "Charlottesville",
         "country":          {
            "dropDownCountry": "USA",
            "textCountry": ""
         },
         "postOffice": "NONE",
         "postalType": "NONE",
         "sharedAddrsInd": "N",
         "state": "VA",
         "zipCode": "20171",
         "zipLastFour": ""
      },
      "children": [],
      "corpPtcnpntId": 13367440,
      "countryOfBirth":       {
         "dropDownCountry": "",
         "textCountry": ""
      },
      "dateOfBirth": -607284000000,
      "dateOfBirthFromCorp": false,
      "edipi": "1013590059",
      "emailAddress": "email@address.com",
      "firstName": "MARKWEBBVERYLONGNAME",
      "hasNoFileNumber": false,
      "hasNoSsn": false,
      "lastName": "WEBB",
      "marriageType": "MARRIED",
      "married": false,
      "middleName": "M",
      "personTypeNm": "Veteran",
      "previousMarriages": [],
      "primaryPhone":       {
         "areaNbr": "444",
         "phoneNbr": "222-8989",
         "phoneType": "DAYTIME"
      },
      "rlsnIds": [],
      "secondaryPhone":       {
         "areaNbr": "444",
         "phoneNbr": "222-8989",
         "phoneType": "NIGHTTIME"
      },
      "spouse":       {
         "address":          {
            "addressLine1": "",
            "addressLine2": "",
            "addressLine3": "",
            "addressLocality": "DOMESTIC",
            "city": "",
            "country":             {
               "dropDownCountry": "",
               "textCountry": ""
            },
            "postOffice": "NONE",
            "postalType": "NONE",
            "sharedAddrsInd": "N",
            "state": "",
            "zipCode": "",
            "zipLastFour": ""
         },
         "cityOfBirth": "",
         "corpPtcnpntId": 600140899,
         "countryOfBirth":          {
            "dropDownCountry": "",
            "textCountry": ""
         },
         "currentMarriage":          {
            "country":             {
               "dropDownCountry": "",
               "textCountry": ""
            },
            "dependentStatus": "UNKNOWN",
            "endCountry":             {
               "dropDownCountry": "",
               "textCountry": ""
            },
            "exSpouse": false,
            "marriageTerminationReasonType": "NONE"
         },
         "dateOfBirth": -315511200000,
         "dateOfBirthFromCorp": true,
         "dependentStatus": "NOTONAWARD",
         "emailAddress": "",
         "firstName": "JANE",
         "hasNoFileNumber": false,
         "hasNoSsn": false,
         "lastName": "WEBB",
         "married": false,
         "middleName": "M",
         "previousMarriages": [],
         "primaryPhone": {"phoneType": "DAYTIME"},
         "proofDepncyInd": false,
         "rlsnIds": [],
         "sameResidency": true,
         "secondaryPhone": {"phoneType": "DAYTIME"},
         "ssn": "222-88-3214",
         "ssnFromCorp": true,
         "stateOfBirth": "",
         "tempDataId": {},
         "uniqueIdentifier": "156973794",
         "veteran": false
      },
      "ssn": "796-10-4437",
      "ssnFromCorp": false,
      "tempDataId": {},
      "uniqueIdentifier": "1121739521",
      "vaFileNumber": "796-10-4437"
   }
}}
```

686_Submit_Request.txt 
```
<submit686Request>
	<submitProcess>
		<application>
			<acceptWarnings>false</acceptWarnings>
			<appStatus>Open</appStatus>
			<bnftClaimType>EBENDEPENDENCY686c</bnftClaimType>
			<draftFormId>198465</draftFormId>
			<createdDate>2018-07-23T12:36:11.471-04:00</createdDate>
			<expirationDate>2019-07-23T12:36:11.471-04:00</expirationDate>
			<has30Percent>true</has30Percent>
			<modifiedDate>2018-07-23T12:36:11.471-04:00</modifiedDate>
			<validUser>true</validUser>
		</application>
		<rbps>true</rbps>
		<vaFaxNumber></vaFaxNumber>
		<vaOffice>
			<addressLine1>Regional Office</addressLine1>
			<addressLine2>PO Box 1437</addressLine2>
			<addressLine3></addressLine3>
			<addressLocality>DOMESTIC</addressLocality>
			<city>St. Petersburg</city>
			<country>
				<dropDownCountry>USA</dropDownCountry>
				<textCountry></textCountry>
			</country>
			<postOffice>NONE</postOffice>
			<postalType>NONE</postalType>
			<sharedAddrsInd>N</sharedAddrsInd>
			<state></state>
			<zipCode>33731</zipCode>
			<zipLastFour></zipLastFour>
		</vaOffice>
		<vaOfficeCode>317</vaOfficeCode>
		<vaOfficeName>St. Petersburg</vaOfficeName>
		<veteran>
			<address>
				<addressLine1>16494 West High Pway</addressLine1>
				<addressLine2>Suite 204</addressLine2>
				<addressLine3>Apt 278990</addressLine3>
				<addressLocality>DOMESTIC</addressLocality>
				<city>Charlottesville</city>
				<country>
					<dropDownCountry>USA</dropDownCountry>
					<textCountry></textCountry>
				</country>
				<postOffice>NONE</postOffice>
				<postalType>NONE</postalType>
				<sharedAddrsInd>N</sharedAddrsInd>
				<state>VA</state>
				<zipCode>20171</zipCode>
				<zipLastFour></zipLastFour>
			</address>
			<corpPtcnpntId>13367440</corpPtcnpntId>
			<countryOfBirth>
				<dropDownCountry></dropDownCountry>
				<textCountry></textCountry>
			</countryOfBirth>
			<dateOfBirth>1950-10-04T12:36:11.471-04:00</dateOfBirth>
			<dateOfBirthFromCorp>false</dateOfBirthFromCorp>
			<edipi>1013590059</edipi>
			<emailAddress>email@address.com</emailAddress>
			<firstName>MARKWEBBVERYLONGNAME</firstName>
			<hasNoFileNumber>false</hasNoFileNumber>
			<hasNoSsn>false</hasNoSsn>
			<lastName>WEBB</lastName>
			<marriageType>MARRIED</marriageType>
			<married>false</married>
			<middleName>M</middleName>
			<personTypeNm>Veteran</personTypeNm>
			<primaryPhone>
				<areaNbr>444</areaNbr>
				<phoneNbr>222-8989</phoneNbr>
				<phoneType>DAYTIME</phoneType>
			</primaryPhone>
			<secondaryPhone>
				<areaNbr>444</areaNbr>
				<phoneNbr>222-8989</phoneNbr>
				<phoneType>NIGHTTIME</phoneType>
			</secondaryPhone>
			<spouse>
				<address>
					<addressLine1></addressLine1>
					<addressLine2></addressLine2>
					<addressLine3></addressLine3>
					<addressLocality>DOMESTIC</addressLocality>
					<city></city>
					<country>
						<dropDownCountry></dropDownCountry>
						<textCountry></textCountry>
					</country>
					<postOffice>NONE</postOffice>
					<postalType>NONE</postalType>
					<sharedAddrsInd>N</sharedAddrsInd>
					<state></state>
					<zipCode></zipCode>
					<zipLastFour></zipLastFour>
				</address>
				<cityOfBirth></cityOfBirth>
				<corpPtcnpntId>600140899</corpPtcnpntId>
				<countryOfBirth>
					<dropDownCountry></dropDownCountry>
					<textCountry></textCountry>
				</countryOfBirth>
				<currentMarriage>
					<country>
						<dropDownCountry></dropDownCountry>
						<textCountry></textCountry>
					</country>
					<dependentStatus>UNKNOWN</dependentStatus>
					<endCountry>
						<dropDownCountry></dropDownCountry>
						<textCountry></textCountry>
					</endCountry>
					<exSpouse>false</exSpouse>
					<marriageTerminationReasonType>NONE</marriageTerminationReasonType>
				</currentMarriage>
				<dateOfBirth>1973-10-10T12:36:11.471-04:00</dateOfBirth>
				<dateOfBirthFromCorp>true</dateOfBirthFromCorp>
				<dependentStatus>NOTONAWARD</dependentStatus>
				<emailAddress></emailAddress>
				<firstName>JANE</firstName>
				<hasNoFileNumber>false</hasNoFileNumber>
				<hasNoSsn>false</hasNoSsn>
				<lastName>WEBB</lastName>
				<married>false</married>
				<middleName>M</middleName>
				<primaryPhone>
					<phoneType>DAYTIME</phoneType>
				</primaryPhone>
				<proofDepncyInd>false</proofDepncyInd>
				<sameResidency>true</sameResidency>
				<secondaryPhone>
					<phoneType>DAYTIME</phoneType>
				</secondaryPhone>
				<ssn>222-88-3214</ssn>
				<ssnFromCorp>true</ssnFromCorp>
				<stateOfBirth></stateOfBirth>
				<tempDataId />
				<uniqueIdentifier>722007731</uniqueIdentifier>
				<veteran>false</veteran>
			</spouse>
			<ssn>796-10-4437</ssn>
			<ssnFromCorp>false</ssnFromCorp>
			<tempDataId />
			<uniqueIdentifier>653196986</uniqueIdentifier>
			<vaFileNumber>796-10-4437</vaFileNumber>
		</veteran>
	</submitProcess>
</submit686Request>	
```
