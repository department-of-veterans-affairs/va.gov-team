# Mapbox Facility Locator implementation 

## Overview
We use Mapbox to render maps, most notably on the Facility Locator. In order to use Mapbox, an API key is required. One critical piece to understanding the architectural approach mapped out below is to understand that these Mapbox API keys are [visible to the public](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/462#issue-1205626603). Mapbox knows this and accounts for this by allowing (and suggesting) URL restrictions on the keys. So, for example, we can restrict our API keys to only work on API calls initiated from va.gov.

This is great, and works for our public-facing sites. But the problem grows in scope when we recognize that this will not work for some of our non-production environments (CI, local). In these cases, we are working without a typical URL, so we cannot use URL restriction. Luckily, in these cases, the front ends are not viewable by the world, so we don't need to worry about the key being viewable in that context. We simply need to ensure that the key is not in the source code.

So, we need [two separate keys](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/457#issuecomment-1513272716). A production key that is URL restricted and a development key that is not URL restricted. As noted above, keys that are not URL restricted must never be visible to the world, so it is imperative that we not store these values in our repository. So, the architectural challenge amounts to storing the value elsewhere, and then retrieving the value in an appropriate fashion.

## Architecture
### Key Storage
The keys are stored in AWS Parameter Store. Accessing and editing values in the AWS Parameter Store is not a matter that is specific to the Facilities products. Rather, it is available [throughout the VA ecosystem](https://vfs.atlassian.net/wiki/spaces/pilot/pages/1474595172/Store+a+secret+in+Parameter+Store).

### Key Retrieval
##### ❌ Option 1: Load the keys at run time (not implemented)
Noting this option here because it was discussed in [at least one place](https://vfs.atlassian.net/wiki/spaces/FTT/pages/2139783260/MapboxToken+Conversion+Guide+Proposal+draft) throughout the discovery process. Ultimately, this did not make sense. The option below was much more feasible.

##### ✔️ Option 2: Load the keys at build time (implemented)
**First, a caveat**: This problem space is interesting because, contrary to what we're likely conditioned to think, our prod API key is not sensitive information but our dev key is sensitive. This is because our prod key can be URL restricted while our dev key cannot be. Prior to this exploration, the prod key was hard-coded into the browser-run javascript. That's not problematic, at least from a security perspective, so, at least for now, that solution remains. For the other environments where the dev API key is needed, we load that key at build time and package that with the javascript code that is sent to the browser. For now, that's fine, but it's likely useful to consider whether the two keys should eventually be [handled in the same way](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/13336).

So, the process by which the keys are fetched from AWS Parameter Store and ultimately packaged in the browser code is outlined below:
1. Fetch from AWS Parameter Store in required workflows (e.g. [continuous-integration](https://github.com/department-of-veterans-affairs/vets-website/blob/8de1ed2fa5b6a462323c2c482e6e2115ac666556/.github/workflows/continuous-integration.yml#L61), [e2e-tests](https://github.com/department-of-veterans-affairs/vets-website/blob/8de1ed2fa5b6a462323c2c482e6e2115ac666556/.github/workflows/e2e-tests.yml#L104))
```
      - name: Get Mapbox Token
        uses: department-of-veterans-affairs/action-inject-ssm-secrets@d8e6de3bde4dd728c9d732baef58b3c854b8c4bb # latest
        with:
          ssm_parameter: /dsva-vagov/vets-website/dev/mapbox_token
          env_variable_name: MAPBOX_TOKEN
```
Notice that this is loading the _dev_ API key (`/dsva-vagov/vets-website/dev/mapbox_token`). The result of this process is that this value is now stored in an environment variable called `MAPBOX_TOKEN`. We can access that in the next step.

2. Tell [Webpack about the environment variable](https://github.com/department-of-veterans-affairs/vets-website/blob/8de1ed2fa5b6a462323c2c482e6e2115ac666556/config/webpack.config.js#L416). Webpack will then perform a string replacement in all places in code.
```
        'process.env.MAPBOX_TOKEN': JSON.stringify(
          process.env.MAPBOX_TOKEN || '',
        ),
```
3. In the code where we actually want to reference this value, `process.env.MAPBOX_TOKEN` will be string-replaced by Webpack:
```
export const mapboxToken =
  process.env.MAPBOX_TOKEN ||
  'pk.eyJ1IjoiYWRob2MiLCJhIjoiY2wyZjNwM3dxMDZ4YjNjbzVwbTZ5aWQ1dyJ9.D8TZ1a4WobqcdYLWntXV_w'; //prod key is fallback
```
will become:

👇 This is what is sent to the browser.
```
export const mapboxToken =
  {injected_dev_api_key} ||
  'pk.eyJ1IjoiYWRob2MiLCJhIjoiY2wyZjNwM3dxMDZ4YjNjbzVwbTZ5aWQ1dyJ9.D8TZ1a4WobqcdYLWntXV_w'; //prod key is fallback
```
☝️ This is what is sent to the browser.


### Previous discovery / notes
- [March 2022: Mapbox Predictive Search Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/discovery/predictive-geolocation-discovery.md)
- [Questions & Answers about Mapbox (as of February 2020)](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/facility-locator/engineering/archive/mapbox-info.md)
