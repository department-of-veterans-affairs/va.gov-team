# Intent to File
## Keywords
Disability compensation, disability benefits, intent to file, ITF

## Resources
- [ITF directory](/Products/Disability/Disability%20526EZ/engineering/itf)

## Points of contact
See [Team](/Products/Disability/Disability%20526EZ/README.md#team).

## History
See the [Discovery documentation](/Products/Disability/Disability%20526EZ/engineering/itf/itf_discovery.md)

## Current status
`vets-website` uses an [ITF wrapper component](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/disability-benefits/all-claims/containers/ITFWrapper.jsx) to gate starting or continuing the form. The wrapper checks for current ITF status and, if an active ITF isn't found, makes the call to create a new one.

## How to test
See [the README](/Products/Disability) for the application URL and test users.

To test ITF, simply start or continue the form.

## APIs
### `vets-api` endpoints
- [`GET` `/v0/intent_to_file`](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/getIntentToFile)
- [`POST` `/v0/intent_to_file/compensation`](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/postIntentToFile)

### Endpoints `vets-api` calls

- [`GET` `/intenttofile/v1`](https://pint.ebenefits.va.gov/wss-intenttofile-services-web/swagger-ui/index.html?url=https://pint.ebenefits.va.gov/domain1/wss-intenttofile-services-web/rest/swagger.yaml#!/intenttofilev1/getAllIntentToFile)
- [`POST` `/intenttofile/v1/{type}`](https://pint.ebenefits.va.gov/wss-intenttofile-services-web/swagger-ui/index.html?url=https://pint.ebenefits.va.gov/domain1/wss-intenttofile-services-web/rest/swagger.yaml#!/intenttofilev1/createIntentToFile)
- [`GET` `/intenttofile/v1/{type}/active`](https://pint.ebenefits.va.gov/wss-intenttofile-services-web/swagger-ui/index.html?url=https://pint.ebenefits.va.gov/domain1/wss-intenttofile-services-web/rest/swagger.yaml#!/intenttofilev1/getActiveIntentToFile)


## Error handling
See the section in [`vets-website` error handling](/Products/Disability/Disability%20526EZ/Errors/vets-website.md#itf-fetch-error).
