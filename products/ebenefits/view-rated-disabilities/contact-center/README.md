# Contact Center Docs
## Error Handling Notes
1. vets-api error mapping: https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/locales/exceptions.en.yml
_This is a comprehensive list of **all** expected exceptions within vets-api, not specific to rated disabilities._
2. Errors related to the disbaility compensation form (526) can be found here: https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/disability_compensation_form/service_exception.rb
_These get mapped to the exceptions.enyml file referenced above. The exceptions are handled in a linear/sequential fashion, meaning the first exception in the list that is encountered is the one that will be returned._
3. wss-form526-services-web: https://pint.ebenefits.va.gov/wss-form526-services-web-v2/swagger-ui/index.html?url=https://pint.ebenefits.va.gov/domain1/wss-form526-services-web-v2/rest/swagger.yaml#/
