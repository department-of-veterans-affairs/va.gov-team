# How to opt in to Drupal as the source of truth for Cerner-related apps and widgets
## Background
Historically, VA Medical Centers have used an Electronic Health Records (EHR) system named VistA. The VA is now in the midst of a years-long transition to a new system named Cerner. During this time of transition, it is necessary to keep track of whether a VAMC system/facility is using VistA or Cerner.  

Up to this point of the EHR transition, this data point has been managed outside of Drupal. The management of the data point is now also transitioning, and this data point will eventually be managed exclusively by Drupal. During this transition, both data sources will be maintained, and app/widget developers can opt in to the new data source (Drupal). Eventually, the old data source will be deprecated, and apps/widgets will then be required to adopt the new "API".

### How this data point has been managed previously
Previously, this EHR data point has been maintained via a combination of: 
1. **Hard-coded data array.** Specifically, the `CERNER_FACILITY_IDS` array found in [this file](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/utilities/cerner/index.js). When a VAMC facility is cutting over from VistA to Cerner, a value representing that facility is added in this array.
2. **Flipper feature toggles.** When a value is added to the previously mentioned array in code, a corresponding feature toggle is added for that specific facility. Then, that toggle can be flipped in staging/prod as necessary to finalize the cutover to Cerner for the facility in question.

For more information: [How to set up a VAMC's Cerner integration within the VA.gov health care portals
](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/Cerner-Support/how_to_set_up_vamc_cerner_within_va_health_care_portals.md) documents the previous process and will eventually be deprecated.

_Note: While the EHR system is something that applies to an entire VAMC system, the data point that is managed in this approach is the main facility within that VAMC system. So, when working with this approach, the term "facility" is used to represent the entity that employs a certain EHR. In the new approach, the data point exists at the VAMC-System level. Importantly, this detail is not a critical distinction from the perspective of the app/widget developer. It's just noted here because it affects the language that is used to discuss the data point._

### How this data point is managed by Drupal
Now, the EHR data point is also managed by Drupal (and, again, at some point in the future will *only* be managed by Drupal). This data point has three possible values: 
1. VistA (`vista`)
2. Cerner (`cerner`)
3. Converting to Cerner (`cerner_staged`)

Before a VAMC system moves to Cerner, this value will be `vista`. When the system is scheduled to move to Cerner, this value will first be changed to `cerner_staged`, which indicates that in _non-production environments_ (e.g. staging.va.gov), the system in question will be considered to be using Cerner. In production, though, it will still be considered to be using VistA. This state allows for testing before the final cutover. When that final cutover is ready, this value will be changed to `cerner`.

## So, how do I use Drupal as the source of truth?
Various apps and widgets need to conditionally display certain elements based on the EHR system in use by a certain facility. One example of this might be a widget that shows a CTA to an authenticated user. If that user is associated with a VAMC facility that uses Cerner as its EHR system, the widget will display a CTA that deep-links to a Cerner portal. If the facility uses VistA, the deep link will go to a VistA portal. It is necessary, therefore, that app developers have access to the data points representing the EHR systems in use at various facilities.

Under the existing hard-coded solution, there are mechanisms in place that serve to provide this necessary data to app/widget developers. These mechanisms amount to a sort of "API" in the way of Redux selectors. The transition to using Drupal as the source of truth effectively boils down to two steps:
1. Connecting Redux to the Drupal-generated static data source:
    ```
    import { connectDrupalSourceOfTruthCerner } from 'platform/utilities/cerner/dsot';
    ...
    ...
    ...
    connectDrupalSourceOfTruthCerner(store.dispatch);
    ```
    
    [See an example here.](https://github.com/department-of-veterans-affairs/vets-website/blob/fc37c42addc87a150b13a8238776b77dc7fd2c7b/src/applications/static-pages/health-care-manage-benefits/get-medical-records-page/index.js#L10)
    
    
2. Updating calls to these selectors to use the new selectors from the `cerner-dsot` (Drupal Source of Truth) selectors file:

   ```
   import { selectPatientFacilities } from 'platform/user/selectors';
   ...
   ...
   ...
   const facilities = selectPatientFacilities(state);
   ```
   becomes
   ```
   import { selectPatientFacilities } from 'platform/user/cerner-dsot/selectors';
   ...
   ...
   ...
   const facilities = selectPatientFacilities(state);
   ```
   [See an example here](https://github.com/department-of-veterans-affairs/vets-website/blob/fc37c42addc87a150b13a8238776b77dc7fd2c7b/src/applications/static-pages/health-care-manage-benefits/get-medical-records-page/components/App/index.js#L47) that conditionally uses either the old source of truth or the new (Drupal) source of truth based on a Flipper feature toggle.
   
Here is a list of selectors that can be used with the Drupal source of truth (see [platform/user/cerner-dsot/selectors](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/user/cerner-dsot/selectors.js)):
- `selectCernerFacilities` Selects facilities that use Cerner as EHR.
- `selectCernerFacilityIds` Selects ids of facilities that user Cerner as EHR.
- `selectPatientFacilities` (from example above) Selects facilities associated with currently authenticated user.
- `selectPatientCernerFacilities` Selects facilities that user Cerner as EHR and are associated with currently authenticated user.
- `selectIsCernerOnlyPatient` Returns true if currently authenticated user is associated with only Cerner facilities.
- `selectIsCernerPatient` Returns true if currently authenticated user is associated with any Cerner facilities.


## This is an opt-in feature, but should be used for all new development
The opt-in approach is designed as a sort of new "API version" so that existing apps/widgets/functionality that are currently using `selectPatientFacilities`, for example, can update to the `cerner-dsot` version at a time that is convenient. That said, the old source of truth will eventually be deprecated. All new development should employ this new approach.


