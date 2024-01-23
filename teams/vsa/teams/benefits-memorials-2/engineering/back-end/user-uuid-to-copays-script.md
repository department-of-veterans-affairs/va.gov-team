# How to source VBS copay data for a given User UUID

## Script Example
```
sub = DebtsApi::V0::Form5655Submission.find("93b85b1bbedf4868965163e5f0821d02")
user_uuid = sub.user_uuid

verification = UserVerification.find_by(idme_uuid: user_uuid) || 
  UserVerification.find_by(logingov_uuid: user_uuid) || 
  UserVerification.find_by(backing_idme_uuid: user_uuid)
icn = verification.user_account.icn
mpi_profile = MPI::Service.new.find_profile_by_identifier(identifier_type: 'ICN', identifier: icn).profile
mpi_profile.class.module_eval { attr_accessor :va_treatment_facility_ids}
mpi_profile.class.module_eval { attr_accessor :uuid}
mpi_profile.uuid = user_uuid
mpi_profile.va_treatment_facility_ids = mpi_profile.vha_facility_ids # see user method for details

request = MedicalCopays::Request.build
request_data = MedicalCopays::VBS::RequestData.build(user: mpi_profile)
response = request.post("#{"/vbsapi"}/GetStatementsByEDIPIAndVistaAccountNumber", request_data.to_hash)
```

## Explanation
