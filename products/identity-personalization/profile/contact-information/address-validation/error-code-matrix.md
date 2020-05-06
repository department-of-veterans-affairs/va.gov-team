| Overridable Error Codes              | Business Case | Error Key and Text Returned | VA.gov experience/outcome |
| -----------------------:|-------------:| ---------------------------:| -------------------------:|
| ADDRVAL108 or ADDRVAL112 |USPS does not recognize a valid record for this address in VA Profile database| CandidateAddressNotFound= No Candidate Address Found|VA.gov shows the user the message "We couldn’t confirm your address with the U.S. Postal Service. Please verify your address so we can save it to your VA profile. If the address you entered isn’t correct, please edit it or choose a suggested address below"|
|ADDRVAL109 |The VA Profile database does recognize this address. It doenst mean its not a valid address, but it is not shown in the database VA Profile uses. | AddressCouldNotBeCorrected=The Address could not be corrected | Message shown to user We couldn’t confirm your address with the U.S. Postal Service. Please verify your address so we can save it to your VA profile. If the address you entered isn’t correct, please edit it or choose a suggested address below" |
|ADDRVAL110 |The VA Profile database isn't licensed to validate this country. (This error hasn't occured since Sept 2019)|CountryNotSupported=The Address Country is not supported at this time | message shown to the user |
|ADDRVAL111 | Not a vaild dual address (not commonly seen)|DualAddressError=This dual address is not in the proper format, please make sure the street address and PO box are valid for the 5 digit zip code entered | Message shown to user |
|ADDRVAL207 |VA Profile database doesn’t  have the data necessary to validate this address in that country | MissingReferenceData=The Address Validation API does not have the databases necessary to validate this address completely | Message shown to the user
|ADDR305 |Va Profile database cannot confirm that the delivery has been successfully made | deliveryPointNotConfirmed=Validation Failed: Delivery Point is Not Confirmed for Domestic Residence | Message shown to user |
|ADDR306|Va Profile database cannot validate a high enough confidence based on user input|lowConfidenceScore=Validation Failed: Confidence Score less than 80| Message shown to user|
|ADDR307|non address related contrent provided by useer. (i.e. information not necessary for mailing purposes)in the VA Profile database|additionalInput=Validation Failed: Additional Input found please review |Message shown to user


| Non-Overridable Error Codes              | Business Case | Error Key and Text Returned | VA.gov experience/outcome |
| -----------------------:|-------------:| ---------------------------:| -------------------------:|
|ADDRVAL101|A malformed request was sent to the VA Profile database. (i.e. something was going on with the system on the VA.gov side potentially when this error is happening)|InvalidRequestError=The request was invalid|Message sent to user or VA.gov?
|ADDRVAL102|VA profile database is not available if this error is sent|SpectrumServiceError=The Spectrum Service returned an error| Message sent to user?
|ADDRVAL104|VA profile database is not available if this error is sent|CountryLookupServiceError=The Country Lookup Service returned an error| Message sent to user|
|ADDRVAL105|VA profile database is not available if this error is sent|AddressValidationServiceError=Address Validation Service Error|Message sent to user|
|ADDRVAL106|To many characters from user input on front end VA.gov |requestCountry.countryName.Size.code=|Message sent to user|
|ADDRVAL107|To many characters from user input on front end VA.gov|stateProvince.name.Size.code=|Message sent to user|
|ADDRVAL113|This is related to "get city state province " -The US postal code entered is not in our reference table and could not be found|UnrecognizedPostalCode=Postal code entered could not be found|VA.gov does not use this service|
|ADDRVAL114|VA profile database is not available if this error is sent|CountryLookupUnavailable=The Country lookup service could not be reached|Message sent to user|
|ADDRVAL201|ystem entrance error in VA Profile database - The formatting of this request caused this error|InvalidRequestCountry=Only one of either country name or country code is required|Message sent to user|
|ADDRVAL202|System entrance error in VA Profile database - The formatting of this request caused this error|InvalidRequestState=Only one of either state name or state code is required|Message sent to user|
|ADDRVAL203|Missing information from user on front end VA.gov|InvalidRequestStreetAddress=One of addressLine1, addressLine2 or addressLine3 must be provided|Message sent to user
|ADDRVAL204|Missing information from user on front end VA.gov |InvalidRequestNonStreetAddress=The request needs at least one address line and one non-address line field populated in order to process the request|Message sent to user
|ADDRVAL205|System entrance error in VA Profile database - The formatting of this request caused this error|InvalidRequestPostalCode=Only one of either zipCode5 or international postal code is required|Front end should prevent this
|ADDRVAL206|User didn’t make proper selection required on front end VA.gov|MultipleAddressError=Multiple matches found for this address|Message sent to user
|ADDRVAL208|missing information from user on front end VA.gov|InsufficientInputData=Insufficient data provided for validation process|Message sent to user|
|CORE103|Person does not exist in VA Profile database - Profile has to be created on front end VA.gov| (need to update error key and message returned|Message sent to user
