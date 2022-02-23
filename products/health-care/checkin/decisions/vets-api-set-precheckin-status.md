
## Background

As part of [vets-api/36847](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36847) and [chip/542](https://github.com/department-of-veterans-affairs/chip/issues/542), we're implementing a CHIP endpoint that sets the pre check-in started status in VistA, and making changes in vets-api to call that endpoint when the Veteran completes low-risk authentication. This change will help in accurately comparing the `pre check-in started` to `pre check-in completed` metrics. Currently `pre check-in started` is being set when the pre check-in text is sent to the Veteran.

Currently, vets-api doesn't have any special handling for downstream errors, which means that any response it gets other than a HTTP 200 gets translated into a generic HTTP 400 error by the middleware in vets-api. If vets-api returns this error to vets-website and it shows the error to the Veteran, it will stop them from completing the pre check-in process and result in a bad user experience.

## Additional Considerations

Some of the points that were discussed by the team:
1. The likelihood of this issue happening is low, and if this CHIP endpoint returns an error response it could be indicative of a larger issue that requires an urgent response.
2. An error in this CHIP's endpoint means that the status in VistA will not be set correctly, which can result in staff confusion over the status.
3. Since the CHIP endpoint to set the status is called within the same vets-api controller method that calls LoROTA to get the token, vets-api is the right place to handle this error, rather than returning the error to vets-website. This consideration was made to keep the vets-website from having to figure out how to handle the error appropriately.
4. It is important to provide a great user experience to Veterans so we continue to build confidence in the product.
5. The discrepancy in staff facing app will be short-lived since the status will be updated to **pre check-in complete** when the Veteran completes pre check-in.

## Decision

We decided to have vets-api handle any downstream (CHIP) error in setting pre check-in status and not throw an error back to the website. However, vets-api will log this error in Sentry, which will trigger appropriate alerts and will be investigated and responded to by the team. The code execution will continue normally and return a HTTP 200 back to vets-website, which will allow the Veterans to continue the pre check-in process.