|App|Standard Message|Nonstandard Message|Dependencies|vets-api Endpoints|
|---|---|---|---|---|
|Auth|✘|✘||GET `/user`|
|Beta enrollment|✘|[link](https://github.com/department-of-veterans-affairs/vets-website/blob/fbab127ac0fe745ef55bac6c9db98d718d264d61/src/applications/beta-enrollment/containers/BetaEnrollmentButton.jsx#L54-L66)||POST DELETE `/beta_registration`|
|Claims status|✘|[link](https://github.com/department-of-veterans-affairs/vets-website/blob/743159566f204870b25b30b2ac089513e862e521/src/applications/claims-status/containers/AppealInfo.jsx#L33-L43)||GET `/appeals`|
|dashboard/claims appeals|✘|[link](https://github.com/department-of-veterans-affairs/vets-website/blob/14024edab2c39545df267b742d93dcb433fe9eea/src/applications/personalization/dashboard/containers/ClaimsAppealsWidget.jsx#L100-L118)|mhv,appeals|GET `/evss_claims_async`|
|dashboard/dashboard wrapper|✘|[link](https://github.com/department-of-veterans-affairs/vets-website/blob/14024edab2c39545df267b742d93dcb433fe9eea/src/applications/personalization/dashboard/containers/DashboardAppWrapper.jsx#L35-L59)|mvi,mhv,appeals||
|dashboard/Manage Your VA Healthcare|✘|[link](https://github.com/department-of-veterans-affairs/vets-website/blob/14024edab2c39545df267b742d93dcb433fe9eea/src/applications/personalization/dashboard/helpers.jsx#L263-L282)|mvi, mhv|GET `/v0/prescriptions/`|
|Facility locator|✔|✘|argis|GET `/v0/facilities`,GET `/v0/facilities/va`,GET `/v0/facilities/ccp`|
|find forms|✘|✘|| GET `/forms`|
|forms/burials|✔|✘|icmhs|GET `/burial_claims/[GUID]`, POST `/burial_claims`|
|forms/disability benefits/all claims|✔|✘|evss,emis,mvi,vet360|GET `/facilities/suggested/`|
|forms/disability benefits/2346|✘|✘||GET `/in_progress_forms/MDOT`|
|forms/disability benefits/526EZ|✘|✘||POST `/v0/disability_compensation_form/submit`,GET `/ppiu/payment_information`,GET `/intent_to_file`,POST `/intent_to_file/compensation`,GET `/disability_compensation_form/submission_status/`,POST `/form526_opt_in`|
|forms/disability benefits/686c-674|✘|✘|||
|forms/disability benefits/0993|✘|✘||POST `/v0/education_benefits_claims/0993`|
|forms/disability benefits/0994|✘|✘||POST `/v0/education_benefits_claims/0994`|
|forms/disability benefits/1990|✘|✘||POST `/v0/education_benefits_claims/1990`|
|forms/disability benefits/1990e|✘|✘||POST `/v0/education_benefits_claims/1990e`|
|forms/disability benefits/1990n|✘|✘||POST `/v0/education_benefits_claims/1990n`|
|forms/disability benefits/1995|✘|✘||POST `/v0/education_benefits_claims/1995`|
|forms/disability benefits/5490|✘|✘||POST `/v0/education_benefits_claims/5490`|
|forms/disability benefits/5495|✘|✘||POST `/v0/education_benefits_claims/5490`|
|forms/disability benefits/feedback tool|✘|✘||GET `/gi/institutions/search`|
|forms/caregivers|✘|✘|||
|forms/hca|✘|[link](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/hca/components/DowntimeMessage.jsx)|es|GET `/health_care_applications/enrollment_status`GET `/notifications/dismissed_statuses/form_10_10ez`PUT `/notifications/dismissed_statuses/form_10_10ez`POST `/notifications/dismissed_statuses`|
|forms/preneed|✘|✘||POST `/v0/preneeds/burial_forms`, GET `/v0/preneeds/cemeteries`|
|forms/veteran representative|✘|✘||POST `/v0/vso_appointments`|
|forms/pensions|✔|✘|icmhs|GET `/v0/pension_claims/[GUID]`,POST `/v0/pension_claims`|
|Letters|✔|✘|evss|GET `/v0/letters`GET `/v0/letters/beneficiary`POST `/v0/letters/${letterType}`|
|Login Modal|✘|[link](https://github.com/department-of-veterans-affairs/vets-website/blob/1484646c0a1bff78ddc5cc8c55d8519e69a75f57/src/platform/user/authentication/components/SignInModal.jsx#L55-L64) [link](https://github.com/department-of-veterans-affairs/vets-website/blob/1484646c0a1bff78ddc5cc8c55d8519e69a75f57/src/platform/user/authentication/components/SignInModal.jsx#L92-L130)|idme,dslogon,mhv,mvi||
|GI Bill Comparison tool|✔|[link](https://github.com/department-of-veterans-affairs/vets-website/blob/b43dcb46199606b23bd0a62bd17f8946b1f9c9c5/src/applications/gi/components/ServiceError.jsx#L4-L11)||GET `/v0/gi`|
|personalization/account|✘|✘||GET `/mhv_account`|
|personalization/appointments|✘|✘||GET `/appointments`|
|personalization/connected accounts|✘|[link](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/user/authorization/components/RequiredLoginView.jsx)|appeals_status|GET `/profile/connected_applications`,DELETE `${grantsUrl}/${accountId}`|
|personalization/preferences|✘|✘||GET, POST `/user/preferences`GET `/user/preferences/choices/benefits`GET `/user/preferences/choices/benefits`DELETE `/user/preferences/benefits/delete_all`|
|personalization/profile 2|✘|✘|||
|personalization/profile 360|✔ (contact info)|[link](https://github.com/department-of-veterans-affairs/vets-website/blob/e9a8aa5e80fd38446135ddfee6b65cf44b13ae78/src/applications/personalization/profile360/components/DowntimeBanner.jsx#L7-L18) (Hero, Military Information, Personal, ProfileView, Payment Information)|vet360, emis, mvi, evss|GET `/profile/?`GET `/ppui/payment_information`|
|personalization/rated disabilities|✔|[link](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/user/authorization/components/RequiredLoginView.jsx)|appeals_status, evss||
|personalization/view dependents|✘|✘|||
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
