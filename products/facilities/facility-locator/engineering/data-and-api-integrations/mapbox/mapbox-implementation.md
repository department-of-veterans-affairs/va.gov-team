# Mapbox Facility Locator implementation 

## Overview
- **Mapbox APIs that are used on VA.gov**: Temporary Geocoding V5, Map Loads for Web, Static Images, Matrix

We use Mapbox to render maps, most notably on the Facility Locator. In order to use Mapbox, an API key is required. One critical piece to understanding the architectural approach mapped out below is to understand that these Mapbox API keys are [visible to the public](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/462#issue-1205626603). Mapbox knows this and accounts for this by allowing (and suggesting) URL restrictions on the keys. So, for example, we can restrict our API keys to only work on API calls initiated from va.gov.

This is great, and works for our public-facing sites. But the problem grows in scope when we recognize that this will not work for some of our non-production environments (CI, local). In these cases, we are working without a typical URL, so we cannot use URL restriction. Luckily, in these cases, the front ends are not viewable by the world, so we don't need to worry about the key being viewable in that context. We simply need to ensure that the key is not in the source code.

So, we need [two separate keys](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/457#issuecomment-1513272716). A production key that is URL restricted and a development key that is not URL restricted. As noted above, keys that are not URL restricted must never be visible to the world, so it is imperative that we not store these values in our repository. So, the architectural challenge amounts to storing the value elsewhere, and then retrieving the value in an appropriate fashion.

## Architecture
### Key Storage
The keys are stored in AWS Parameter Store. Accessing and editing values in the AWS Parameter Store is not a matter that is specific to the Facilities products. Rather, it is available [throughout the VA ecosystem](https://vfs.atlassian.net/wiki/spaces/pilot/pages/1474595172/Store+a+secret+in+Parameter+Store).

### Key Retrieval
##### ❌ Option 1: Load the keys at run time (not implemented -- also not implemented on any other system) 
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
3. In the code where we actually want to reference this value, `process.env.MAPBOX_TOKEN` will be string-replaced by Webpack (in build):
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

## Facility Locator location search
In Mapbox there are `place_types`, and [their docs](https://docs.mapbox.com/api/search/geocoding-v5/#geographical-feature-types) spell out what each of these means in API terms. We currently (2/2025) limit `place_type` to matches on:

place_type | Mapbox definition
--- | ---
`place` | "Typically these are **cities**, villages, municipalities, etc. They’re usually features used in postal addressing, and are suitable for display in ambient end-user applications where current-location context is needed (for example, in weather displays)."
`region`| "Top-level sub-national administrative features, such as **states in the United States** or provinces in Canada or China."
`postcode`| "Postal codes used in country-specific national addressing systems."
`locality` | "Official sub-city features present in countries where such an additional administrative layer is used in postal addressing, or where such features are commonly referred to in local parlance. Examples include city districts in Brazil and Chile and arrondissements in France."  (Notably does not include LA parishes.)
`country` | "Generally recognized **countries** or, in some cases like Hong Kong, an area of quasi-national administrative status that has a designated country code under ISO 3166-1." Some territories are considered countries like Guam and Puerto Rico. We support the return of these locations and a few others where the VA has facilities (e.g. Philippines)


### Previous discovery / notes
- [March 2022: Mapbox Predictive Search Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/discovery/predictive-geolocation-discovery.md)
- [Questions & Answers about Mapbox (as of February 2020)](https://github.com/department-of-veterans-affairs/va.gov-team/products/facilities/facility-locator/engineering/archive/mapbox-info.md)
- Recently (3/2025) we added an alternative the the predictive search with an autosuggest field in the map view of the Facility Locator. Though this enables the Mapbox predictive search capacity in a text input, it is constructed differently than the predictive search method that was initially researched. The predictive search method requried that the field go through entire redux state and resolve before returning results. Unfortunately it was unresponsive and not functional to indicate feedback to the users. The alternative Autosuggest field also laid the framework for the Services Autosuggest. 

## Temporary Geocoding usage/cost (Q1 2025)
Historically, the Facility Locator uses the Temporary Geocoding API for address lookup but we have not historically used the autosuggest feature. 

In Q1 2025, location autosuggest was enabled ([#20241](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20241)). This will increase the Temporary Geocoding API usage by 5-7x previous usage levels, as we will send calls for user-typed data as they type, in order to return address suggestions. 

### PRICING
We have not currently locked in a pricing agreement for this increased usage, due to upcoming Sitewide end of period of performance, 3/31/2025. However: on the new Sitewide contract on SPRUCE, it would be advantageous to lock in pricing with Mapbox. Information from Mapbox sales / account rep:

> Q: 1. If we lock in for an annual commitment, for example, at 7.5MM calls, and we get additional traffic, is everything over the annual commitment billed at a per-call rate as we do today?
> 
> A: Yes, this would be processed through signing an annual contract via our Account Management team. I'm happy to assist with this whenever your timeline permits.
> The locked-in rates will be included in Exhibit A of the order form. We also offer an option to add credit to the annual agreement or early renewal to accommodate any additional growth.

> Q: 2. If we lock in for 7.5MM calls, and find we are consistently over that, is it possible to adjust the annual commitment for our baseline?
> 
> A. The early renewal process can be used to address this. If you sign a multi-year agreement, we can also add top-up credit to each year in case the initial estimate proves to be too low.

Options to pursue on new contract:
1. Lock in an annual rate with Mapbox.
2. See if VA can assume the Mapbox expense. (Through DOTS/Okta? Not sure.)

## Non-Sitewide Products That Use Mapbox

### Ask VA

As of 1/3/2025, this application is not yet in production.

- **Entry**: http://staging.va.gov/contact-us/ask-va-too
- **Code in vets-website**: https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/ask-va
- **API usage**: Geocoding V5

This application has a search box for entering a (city, state) or zip code. It is used in two different flows: one for finding VA facilities and the other for finding educational institutions. This tool has a "Use my location" feature and uses both forward and reverse geocoding for parsing Mapbox results. No Mapbox map is rendered in this tool.

### Caregivers

- **Entry**: https://va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/apply-form-10-10cg/introduction
- **Code in vets-website**: https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/ask-va
- **API usage**: Geocoding V5

This application has a search box for entering a (city, state) or zip code to get the nearest VA facilities for Veterans needing care. This tool does not have a "Use my location" feature, so only forward geocoding is used when performing the search. No Mapbox map is rendered in this tool.

### GI

- **Entry**: https://va.gov/education/gi-bill-comparison-tool
- **Code in vets-website**: https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/gi
- **API usage**: Geocoding V5, Map Loads for Web

On its "Search by location tab," this application has a search box for entering a (city, state) or zip code and renders a map after searches are performed. This tool has a "Use my location" feature and uses both forward and reverse geocoding for parsing Mapbox results.


### Representative Search

- **Entry**: https://va.gov/get-help-from-accredited-representative/find-rep
- **Code in vets-website**: https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/representative-search
- **API usage**: Geocoding V5

This application has a search form for accredited VSO representatives, attorneys and claims agents. You can enter a full address with a (city, state) or a zip code. This tool has a "Use my location" feature and uses both forward and reverse geocoding for parsing Mapbox results.
