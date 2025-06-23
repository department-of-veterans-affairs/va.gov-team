# STS Certificates Notes

Recently we were contacted by the VA.gov identity team informing us that the STS certificates were being rotated. The identity folks mentioned that that we may need to update some hardcoded certificates if we rely on those rather than their own endpoint for validating (something like: `https://staging-api.va.gov/sign_in/openid_connect/certs`).

[Relevant Slack discussion](https://dsva.slack.com/archives/CSFV4QTKN/p1748892060748719?thread_ts=1748891737.990049&cid=CSFV4QTKN), and the text of that linked message (in case it is innaccessible in the future).

> @Joe Niquette:
> "We are in the process of updating our production STS certs, we will have support both the old and new certs until the expiration on 6/24
> Many of you may not have setup checks against our STS certs but I wanted to let you know just in case. Normally each of your teams would check our public certs endpoint here to validate the token we issue you is valid.
> Some have hard coded the certs, but some may have configured your code to check the URL (in which case you should not have to make code changes)."

Based on digging, it appears that we do not use hardcoded certs in the way mentioned above. This [document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/engineering/pega_jwt_gen_for_ivc_endpoint.md) illustrates how we interact with the authentication service when generating JSON Web Tokens (JWTs) for Pega to use when hitting our API.

## Pega Sign in Service (SiS)

[Pega uses an SiS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/readme.md) to connect to our API. The SiS was provisioned by Platform, and periodically the identity team will generate new certificates for use with the Pega SiS. When these certs are made available,
we need to make sure they are passed on to the Pega team, who then install the private keys on their system.
