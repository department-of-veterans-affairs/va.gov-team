YES to providing TERA information

```
<?xml version="1.0" encoding="UTF-8"?>
<form xmlns="http://va.gov/schema/esr/voa/v1" xmlns:ns0="http://jaxws.webservices.esr.med.va.gov/schemas">
   <formIdentifier>
      <type>101</type>
      <value>1010EZR</value>
      <version>2986360436</version>
   </formIdentifier>
   <summary>
      <ns0:demographics>
         <ns0:appointmentRequestResponse>false</ns0:appointmentRequestResponse>
         <ns0:contactInfo>
            <ns0:addresses>
               <ns0:address>
                  <ns0:city>Tampa</ns0:city>
                  <ns0:country>USA</ns0:country>
                  <ns0:line1>4049 S Dale Mabry Hwy</ns0:line1>
                  <ns0:state>FL</ns0:state>
                  <ns0:zipCode>33611</ns0:zipCode>
                  <ns0:addressTypeCode>P</ns0:addressTypeCode>
               </ns0:address>
               <ns0:address>
                  <ns0:city>Albany</ns0:city>
                  <ns0:country>USA</ns0:country>
                  <ns0:line1>314 N Jefferson St</ns0:line1>
                  <ns0:state>GA</ns0:state>
                  <ns0:zipCode>31701</ns0:zipCode>
                  <ns0:addressTypeCode>R</ns0:addressTypeCode>
               </ns0:address>
            </ns0:addresses>
            <ns0:emails>
               <ns0:email>
                  <ns0:address>eric@bishop.net</ns0:address>
                  <ns0:type>1</ns0:type>
               </ns0:email>
            </ns0:emails>
            <ns0:phones>
               <ns0:phone>
                  <ns0:phoneNumber>3034441122</ns0:phoneNumber>
                  <ns0:type>1</ns0:type>
               </ns0:phone>
            </ns0:phones>
         </ns0:contactInfo>
         <ns0:maritalStatus>U</ns0:maritalStatus>
         <ns0:preferredFacility>589</ns0:preferredFacility>
         <ns0:acaIndicator>false</ns0:acaIndicator>
      </ns0:demographics>
      <ns0:enrollmentDeterminationInfo>
         <ns0:eligibleForMedicaid>false</ns0:eligibleForMedicaid>
         <ns0:noseThroatRadiumInfo>
            <ns0:receivingTreatment>false</ns0:receivingTreatment>
         </ns0:noseThroatRadiumInfo>
         <ns0:serviceConnectionAward>
            <ns0:serviceConnectedIndicator>false</ns0:serviceConnectedIndicator>
         </ns0:serviceConnectionAward>
         <ns0:specialFactors>
            <ns0:agentOrangeInd>true</ns0:agentOrangeInd>
            <ns0:envContaminantsInd>false</ns0:envContaminantsInd>
            <ns0:campLejeuneInd>false</ns0:campLejeuneInd>
            <ns0:radiationExposureInd>true</ns0:radiationExposureInd>
            <ns0:gulfWarHazard>
               <ns0:gulfWarHazardInd>true</ns0:gulfWarHazardInd>
               <ns0:fromDate>01/1990</ns0:fromDate>
               <ns0:toDate>01/1990</ns0:toDate>
            </ns0:gulfWarHazard>
            <ns0:supportOperationsInd>true</ns0:supportOperationsInd>
            <ns0:toxicExposure>
               <ns0:exposureCategories>
                  <ns0:exposureCategory>Radiation</ns0:exposureCategory>
                  <ns0:exposureCategory>Occupational Hazards</ns0:exposureCategory>
               </ns0:exposureCategories>
               <ns0:fromDate>03/1998</ns0:fromDate>
               <ns0:toDate>04/1999</ns0:toDate>
            </ns0:toxicExposure>
         </ns0:specialFactors>
      </ns0:enrollmentDeterminationInfo>
      <ns0:financialsInfo>
         <ns0:incomeTest>
            <ns0:discloseFinancialInformation>false</ns0:discloseFinancialInformation>
         </ns0:incomeTest>
      </ns0:financialsInfo>
      <ns0:militaryServiceInfo>
         <ns0:dischargeDueToDisability>false</ns0:dischargeDueToDisability>
         <ns0:militaryServiceSiteRecords>
            <ns0:militaryServiceSiteRecord>
               <ns0:site>589</ns0:site>
            </ns0:militaryServiceSiteRecord>
         </ns0:militaryServiceSiteRecords>
      </ns0:militaryServiceInfo>
      <ns0:prisonerOfWarInfo>
         <ns0:powIndicator>false</ns0:powIndicator>
      </ns0:prisonerOfWarInfo>
      <ns0:purpleHeart>
         <ns0:indicator>false</ns0:indicator>
      </ns0:purpleHeart>
      <ns0:personInfo>
         <ns0:firstName>ERIC</ns0:firstName>
         <ns0:middleName>VICTOR</ns0:middleName>
         <ns0:lastName>BISHOP</ns0:lastName>
         <ns0:suffix>SR.</ns0:suffix>
         <ns0:ssnText>796169727</ns0:ssnText>
         <ns0:gender>M</ns0:gender>
         <ns0:dob>07/05/1963</ns0:dob>
      </ns0:personInfo>
   </summary>
   <applications>
      <applicationInfo>
         <appDate>2024-04-08</appDate>
         <appMethod>1</appMethod>
      </applicationInfo>
   </applications>
</form>
```

NO to providing TERA information (was only able to see the difference from above)
```
<ns0:specialFactors>
  <ns0:agentOrangeInd>false</ns0:agentOrangeInd>
  <ns0:envContaminantsInd>false</ns0:envContaminantsInd>
  <ns0:campLejeuneInd>false</ns0:campLejeuneInd>
  <ns0:radiationExposureInd>false</ns0:radiationExposureInd>
</ns0:specialFactors>
