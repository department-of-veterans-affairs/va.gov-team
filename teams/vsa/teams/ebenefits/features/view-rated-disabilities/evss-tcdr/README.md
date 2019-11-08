This is where we will describe our findings in gaining access and engaging with the Total Combined Disability Rating (`userPercentOfDisability`) via the `FindRatinfInfoPID` service in EVSS.

The `findRatingInfoPID` service has been identified as the EVSS endpoint that will return the Total Combined Disability Rating and rated disabilities.

The endpoint is accessible in the EVSS dev (`INT`) and staging (`PINT`) environments and is not exposed outside of the VA network. (Please see the xml file referenced below for the full URL.) In addition to being on the VA network, security certificates are required for SSL.

All appropriate headers must be passed in the request, and the associated ID for the user must be passed in the body.  See the XML file referenced below for the required header and message content.  Also note that the ID passed in the body must match the ID information sent in the header as well, otherwise an error will occur.

An example request has been provided and is located here:  

https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/VA-Systems/eBenefits-EVSS/FindRatingInfoService-evss-soapui-project.xml
