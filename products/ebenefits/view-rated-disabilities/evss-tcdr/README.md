# Accessing to the Total Combined Disability Rating in EVSS
**This is where we will describe our findings in gaining access and engaging with the Total Combined Disability Rating (`userPercentOfDisability`) via the `findRatingInfoPID` service in EVSS.**

The `findRatingInfoPID` service has been identified as the EVSS endpoint that will return the Total Combined Disability Rating and rated disabilities.

The endpoint is accessible in the EVSS dev (`INT`) and staging (`PINT`) environments and is not exposed outside of the VA network. (Please see the xml file referenced below for the full URL.) In addition to being on the VA network, security certificates are required for SSL.

All appropriate headers must be passed in the request, and the associated ID for the user must be passed in the body.  See the XML file referenced below for the required header and message content.  Also note that the ID passed in the body must match the ID information sent in the header as well, otherwise an error will occur.

## Considerations
- An example request has been provided and is located [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/VA-Systems/eBenefits-EVSS/FindRatingInfoService-evss-soapui-project.xml)

- From the [vets-api README.md](https://github.com/department-of-veterans-affairs/vets-api) there are [instructions](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/betamocks.md) on how to set up betamocks.

- An overview on mockdata can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-rated-disabilities/evss-tcdr/mockdata.md) in this folder.

- The `yml` recordings should be pushed to the [betamocks repo](https://github.com/department-of-veterans-affairs/vets-api-mockdata/tree/master/evss).
