|App|Standard Message|Nonstandard Message|Dependencies|vets-api Endpoints|
|---|---|---|---|---|
|find forms|✘|✘|| GET `/forms`|
|forms/burials|✔|✘|icmhs|GET `/burial_claims/[GUID]`, POST `/burial_claims`|
|forms/disability benefits/all claims|✔|✘|evss,emis,mvi,vet360|GET `/facilities/suggested/`|
|forms/disability benefits/2346|✘|✘||GET `/in_progress_forms/MDOT`|
|forms/disability benefits/526EZ|✘|✘||POST `/v0/disability_compensation_form/submit`,GET `/ppiu/payment_information`,GET `/intent_to_file`,POST `/intent_to_file/compensation`,GET `/disability_compensation_form/submission_status/`,POST `/form526_opt_in`|
|forms/caregivers|✘|✘|||
|forms/preneed|✘|✘||POST `/v0/preneeds/burial_forms`, GET `/v0/preneeds/cemeteries`|
|forms/veteran representative|✘|✘||POST `/v0/vso_appointments`|
||✔|✘|||
||✔|✘|||
||✔|✘|||
||✔|✘|||
| post 911 gib status|✔| [link](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/post-911-gib-status/utils/helpers.jsx#L158-L168)|evss|GET `/backend_statuses/gibs`, GET `/post911_gi_bill_status`|
|public outreach materials|✘|✘||
|search|✔|✘|search|GET `/search`|
|static pages|✘|✘||GET `/facilities/va`, GET `/facilities/va/[ID]`|
|terms and conditions|✘|✘||GET `/terms_and_conditions/[TERMS_NAME]/versions/latest`,GET `/terms_and_conditions/[TERMS_NAME]/versions/latest/user_data`,POST `/terms_and_conditions/[TERMS_NAME]/versions/latest/user_data`|
|validate mhv account|✘|✘|||
|vaos|✘|[link](https://github.com/department-of-veterans-affairs/vets-website/blob/7ff9874b2da7eef36997a9033ee96c043c5a915f/src/applications/vaos/components/NoRegistrationMessage.jsx#L6-L29)|mvi, vaos|GET `/vaos/appointments`,GET `/vaos/appointment_requests`,GET `/vaos/appointment_requests/[REQUEST_ID]/messages`,GET `/vaos/facilities`,GET `/vaos/systems/[SYSTEM_ID]/direct_scheduling_facilities`,GET `/vaos/community_care/eligibility/[TYPE_OF_CARE]`,GET `/vaos/facilities/[FACILITY_ID]/visits/[DIRECT_OR_REQUEST]`,GET `/vaos/facilities/[FACILITY_ID]/limits`,GET `/vaos/systems/[SYSTEM_ID]/clinic_institutions`,GET `/vaos/facilities/[FACILITY_ID]/clinics`,GET `/vaos/systems/[SYSTEM_ID]/pact`,GET `/facilities/va/vha_[STAGING_ID]`,GET `/facilities/va`,GET `/vaos/community_care/supported_sites`,GET `/vaos/facilities/[FACILITY_ID]/available_appointments`,GET `/vaos/facilities/[SYSTEM_ID]/cancel_reasons`,PUT `/vaos/appointments/cancel`,PUT `/vaos/appointment_requests/[REQUEST_ID]`,POST `/vaos/appointment_requests`,POST `/vaos/appointments`,POST `/vaos/appointment_requests/[REQUEST_ID]/messages`,GET `/vaos/preferences`,PUT `/vaos/preferences`|
|verify|✘|✘|||
|veteran id card|✘|✘|vic|GET `/id_card/attributes`,POST `/id_card/announcement_subscription`|
|vre chapter 31|✘|✘|||
|vre chapter 36|✘|✘|||
|yellow ribbon |✘|✘||GET /gi/yellow_ribbon_programs|
||✔|✘|||
||✔|✘|||
||✔|✘|||
||✔|✘|||


## Apps 

- letters

### yellow-ribbon

Not configured to use the `<DowntimeNotification>` component

#### Endpoints

- GET `/gi/yellow_ribbon_programs`

## Forms apps

### Caregivers 

No downtime in form config. No submit behavior 

### pre-need

No downtime behavior or listed dependencies

The `submitUrl` is `/v0/preneeds/burial_forms`

#### Endpoints

- GET `/v0/preneeds/cemeteries`

### veteran-representative

No downtime notification behavior or listed dependencies.

The `submitUrl` is `/v0/vso_appointments`

---

<!-- use `rg "downtime:" src/applications/` -->

These are the forms apps (and their listed dependencies) that use downtime notifications by setting the `downtime` property on their form config.

### burials

**dependencies** 
- `icmhs` (Intake, conversion, & mail handling services)

#### Endpoints

- GET `/burial_claims/[GUID]`
- POST `/burial_claims`

### disability-benefits/all-claims

**dependencies**

- `evss`
- `emis`
- `mvi` (Master Veteran Index)
- `vet360` 

#### Endpoints

- GET `/facilities/suggested/`

### disability-benefits/2346

No downtime specified

#### Endpoints

- GET `/in_progress_forms/MDOT`

### disability-benefits/526EZ

No downtime specified 

#### Endpoints

- POST `/v0/disability_compensation_form/submit`
- GET `/ppiu/payment_information`
- GET `/intent_to_file`
- POST `/intent_to_file/compensation`
- GET `/disability_compensation_form/submission_status/`
- POST `/form526_opt_in`

### disability-benefits/686c-674

No downtime specified

#### Endpoints

- `/v0/api`

### disability-benefits/996

No downtime specified

#### Endpoints

- none

### disability-benefits/686

**dependencies**

- `evss`

#### Endpoints

- None?

### education-benefits/0993

No downtime specified 

### Endpoints

- POST `/v0/education_benefits_claims/0993`

### education-benefits/0994

No downtime specified 

### Endpoints

- POST `/v0/education_benefits_claims/0994`

### education-benefits/1990

No downtime specified 

### Endpoints

- POST `/v0/education_benefits_claims/1990`

### education-benefits/1990e

No downtime specified 

### Endpoints

- POST `/v0/education_benefits_claims/1990e`

### education-benefits/1990n

No downtime specified 

### Endpoints

- POST `/v0/education_benefits_claims/1990n`

### education-benefits/1995

No downtime specified 

### Endpoints

- POST `/v0/education_benefits_claims/1995`

### education-benefits/5490

No downtime specified 

### Endpoints

- POST `/v0/education_benefits_claims/5490`

### education-benefits/5495

No downtime specified 

### Endpoints

- POST `/v0/education_benefits_claims/5495`

### education-benefits/feedback-tool

No downtime specified

#### Endpoints

- GET `/gi/institutions/search`


### hca

Custom messaging using [`<DowntimeMessage>`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/hca/components/DowntimeMessage.jsx)

**dependencies**

- `es` (Enrollment services)

#### Endpoints

- GET `/health_care_applications/enrollment_status`
- GET `/notifications/dismissed_statuses/form_10_10ez`
- PUT `/notifications/dismissed_statuses/form_10_10ez`
- POST `/notifications/dismissed_statuses`

### pensions

**dependencies**

- `icmhs` (Intake, conversion, & mail handling services)

#### Endpoints

- GET `/v0/pension_claims/[GUID]`
- POST `/v0/pension_claims`

## Personalization 

### account

**dependencies**

- 

#### Endpoints

- GET `/mhv_account`

### appointments

No downtime message 

**dependencies**

- ???

#### Endpoints

- GET `/appointments`


### connected-accounts

Uses `<RequiredLoginView />`

**dependencies**

- ???

#### Endpoints

- GET `/profile/connected_applications`
- DELETE `${grantsUrl}/${accountId}`


### preferences 

- No downtime 

**dependencies**

- ???

#### Endpoints

- GET, POST `/user/preferences`
- GET `/user/preferences/choices/benefits`
- GET `/user/preferences/choices/benefits`
- DELETE `/user/preferences/benefits/delete_all`

### profile-2

No downtime 

**dependencies**

- ???

#### Endpoints

- ???

### profile360

- Displays default `<DowntimeNotification />` for contact information 
- Displays [custom `<DowntimeNotification />`](https://github.com/department-of-veterans-affairs/vets-website/blob/e9a8aa5e80fd38446135ddfee6b65cf44b13ae78/src/applications/personalization/profile360/components/DowntimeBanner.jsx#L7-L18) for Hero, Military Information, Personal, ProfileView, Payment Information,


**dependencies**

- vet360
- emis
- mvi
- evss

#### Endpoints

- GET `/profile/?`
- GET `/ppui/payment_information`

### rated-disabilities

- Displays default downtime message 
- Uses `<RequiredLoginView />`

**dependencies**

- evss

#### Endpoints

### view-dependents 

No downtime message 

**dependencies**

- ???

#### Endpoints

- GET `/dependents_applications/show'

## Other components 

### [`<RequiredLoginView />`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/user/authorization/components/RequiredLoginView.jsx)

Displays a [custom `<SystemDownView />`](https://github.com/department-of-veterans-affairs/vets-website/blob/472df4983b0f83df93be1f68c059bce496b9a168/src/platform/user/authorization/components/RequiredLoginView.jsx#L80) when `va_profile` is unavailable. 

Used where noted above. 

**dependencies**

- appeals_status 

## dashboard

### ManageYourVAHealthCare

Uses `<DowntimeNotification />` to render a [custom message](https://github.com/department-of-veterans-affairs/vets-website/blob/14024edab2c39545df267b742d93dcb433fe9eea/src/applications/personalization/dashboard/helpers.jsx#L263-L282).

**dependencies**

- mvi
- mhv

#### Endpoints

- GET `/v0/prescriptions/`

### ClaimsAppeals

Uses `<DowntimeNotification />` to render a [custom message](https://github.com/department-of-veterans-affairs/vets-website/blob/14024edab2c39545df267b742d93dcb433fe9eea/src/applications/personalization/dashboard/containers/ClaimsAppealsWidget.jsx#L100-L118)

**dependencies**

- mhv
- appeals

#### Endpoints

- GET `/evss_claims_async`

### DashboardWrapper

Uses `<DowntimeNotification />` to render a [custom message](https://github.com/department-of-veterans-affairs/vets-website/blob/14024edab2c39545df267b742d93dcb433fe9eea/src/applications/personalization/dashboard/containers/DashboardAppWrapper.jsx#L35-L59) when the downtime is approaching and the default message when the app is down. 

**dependencies**

- mvi
- mhv
- appeals

#### Endpoints

## Facility locator 

Uses `<DowntimeNotificaiton />` to render standard message. 

**dependencies**

- arcgis 

### Endpoints

- GET `/v0/facilities`
- GET `/v0/facilities/va`
- GET `/v0/facilities/ccp`

## GI Bill Comparison tool

Uses `<DowntimeNotification />` to render standard message.
Shows custom [`<ServiceError>`](https://github.com/department-of-veterans-affairs/vets-website/blob/b43dcb46199606b23bd0a62bd17f8946b1f9c9c5/src/applications/gi/components/ServiceError.jsx#L4-L11) when backend returns error. 

**dependencies**

- none listed

### Endpoints

- GET `/v0/gi`

## Auth

No downtime notification.

**dependencies**

???

### Endpoints

- GET `/user`

## Beta enrollment

Show custom [`<AlertBox />`](https://github.com/department-of-veterans-affairs/vets-website/blob/fbab127ac0fe745ef55bac6c9db98d718d264d61/src/applications/beta-enrollment/containers/BetaEnrollmentButton.jsx#L54-L66) when there's an error calling its end point.

**dependencies**

### Endpoints 

- POST, DELETE `/beta_registration`

## Claims Status

Uses [custom down message](https://github.com/department-of-veterans-affairs/vets-website/blob/743159566f204870b25b30b2ac089513e862e521/src/applications/claims-status/containers/AppealInfo.jsx#L33-L43)

**dependencies** 

???

### Endpoints

- GET `/appeals`

## Login Modal

Displays a [custom alertbox](https://github.com/department-of-veterans-affairs/vets-website/blob/1484646c0a1bff78ddc5cc8c55d8519e69a75f57/src/platform/user/authentication/components/SignInModal.jsx#L55-L64) when backend service is down. 

Downtime messaging is [based on service that is down](https://github.com/department-of-veterans-affairs/vets-website/blob/1484646c0a1bff78ddc5cc8c55d8519e69a75f57/src/platform/user/authentication/components/SignInModal.jsx#L92-L130)

**dependencies**

- idme
- dslogon
- mhv
- mvi

### Endpoints

- No endpoints but redirects to external sites 

## Letters 

Displays standard downtime message 

**dependencies**

- evss

### Endpoints

- GET `/v0/letters`
- GET `/v0/letters/beneficiary`
- POST `/v0/letters/${letterType}`
