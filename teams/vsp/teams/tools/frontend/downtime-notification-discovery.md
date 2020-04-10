
## Apps 

- Auth
- beta-enrollment
- [burials](#burials)
- caregivers
- claims-status
- disability-benefits
  - [all-claims](#disability-benefits/all-claims)
  - 2346
  - 526EZ
  - [686](#disability-benefits/686)
  - 686c-674
  - 996
- discharge-wizard
- edu-benefits (each app)
- facility-locator
- find-forms
- gi
- [hca](#hca)
- letters
- login
- [pensions](#pensions)
- post-911-gib-status
- pre-need
- proxy-rewrite
- public-outreach-materials
- search
- static-pages
- terms-and-conditions
- validate-mhv-account
- vaos
- verify
- veteran-id-card
- veteran-representative
- vic-v2
- vre

## Non-forms apps

### yellow-ribbon

Not configured to use the `<DowntimeNotification>` component

#### Endpoints

- GET `/gi/yellow_ribbon_programs`
- yellow-ribbon
- yellow-ribbon

## Forms apps

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

### disability-benefits/686

Displays a [custom <SystemDownView />](https://github.com/department-of-veterans-affairs/vets-website/blob/472df4983b0f83df93be1f68c059bce496b9a168/src/applications/disability-benefits/686/components/AuthorizationMessage.jsx#L32) when there's an error retrieving profile records 

**dependencies**

- `evss`

#### Endpoints

- None?


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

Uses default `<DowntimeNotification />` message. 
Uses `<RequiredLoginView />`.

**dependencies**

- mvi
- emis

#### Endpoints

### appointments

**dependencies**

- 

#### Endpoints

### connected-accounts

**dependencies**

- 

#### Endpoints

### dashboard

**dependencies**

- 

#### Endpoints

### preferences 

**dependencies**

- 

#### Endpoints

### profile-2

**dependencies**

- 

#### Endpoints

### profile360

**dependencies**

- 

#### Endpoints

### rated-disabilities

**dependencies**

- 

#### Endpoints

### view-dependents 

**dependencies**

- 

#### Endpoints

## Other components 

### [`<RequiredLoginView />`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/user/authorization/components/RequiredLoginView.jsx)

Displays a [custom `<SystemDownView />`](https://github.com/department-of-veterans-affairs/vets-website/blob/472df4983b0f83df93be1f68c059bce496b9a168/src/platform/user/authorization/components/RequiredLoginView.jsx#L80) when `va_profile` is unavailable. 

Used where noted above. 

**dependencies**

- appeals_status 
