
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
- [vic-v2](#vic-v2)
- vre
  - [chapter31](#vre-chapter31)
  - [chapter36](#vre-chapter36)
- [yellow-ribbon](#yellow-ribbon)

### vic-v2

#### Endpoints

- GET `/vic/vic_submissions/[GUID]`
- GET `/v0/vic/profile_photo_attachments/[ID]`
- POST `/vic/vic_submissions`

### vre chapter31

No non-global downtime notifications and no endpoints (?)

### vre chapter36

No non-global downtime notifications and no endpoints (?)

### yellow-ribbon

Not configured to use the `<DowntimeNotification>` component

#### Endpoints

- GET `/gi/yellow_ribbon_programs`

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

**dependencies**

- 

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
