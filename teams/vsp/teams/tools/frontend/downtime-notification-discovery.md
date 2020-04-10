
## Apps 

- Auth
- beta-enrollment
- [burials](#burials)
- caregivers
- claims-status
- disability-benefits
- discharge-wizard
- edu-benefits (each app)
- facility-locator
- find-forms
- gi
- hca
- letters
- login
- pensions
- personalization
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

**dependencies**

- `evss`

#### Endpoints

- None?


- hca
  - dependencies: `es` (Enrollment services)
  - custom messaging using [`<DowntimeMessage>`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/hca/components/DowntimeMessage.jsx)

- pensions
  - dependencies: `icmhs` (Intake, conversion, & mail handling services)
