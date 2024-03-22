# Custom Scripts

## Get Veteran information

```rb
def get_mpi_profile_with_user_uuid(user_uuid)
  mpi_service = MPI::Service.new
  idme_profile = mpi_service.find_profile_by_identifier(identifier: user_uuid, identifier_type: 'idme')&.profile
  logingov_profile = mpi_service.find_profile_by_identifier(identifier: user_uuid, identifier_type: 'logingov')&.profile
  idme_profile || logingov_profile
end

def get_mpi_profile_with_icn(icn)
  mpi_service = MPI::Service.new
  mpi_service.find_profile_by_identifier(identifier: icn, identifier_type: 'ICN')&.profile
end

def get_va_profile(mpi_profile)
  vet360_profile = VAProfile::ContactInformation::Service.get_person(mpi_profile.vet360_id.to_s)&.person
end

def retrieve_current_email(va_profile)
  current_emails = va_profile.emails.select { |email| email.effective_end_date.nil? }
  current_emails.first&.email_address
end

def build_common_name(mpi_profile)
  first_name = mpi_profile.given_names[0]
  middle_name = mpi_profile.given_names[1]
  last_name = mpi_profile.family_name
  suffix = mpi_profile.suffix

  [first_name, middle_name, last_name, suffix].compact.join(' ')
end

def get_bgs_person(mpi_profile)
  icn = mpi_profile.icn
  va_profile = get_va_profile(mpi_profile)
  email = retrieve_current_email(va_profile)
  common_name = build_common_name(mpi_profile)
  bgs_external_key = (common_name.presence || email).first(39)
  bgs_service = BGS::Services.new(external_uid: icn, external_key: bgs_external_key)
  
  participant_id = mpi_profile.participant_id
  ssn = mpi_profile.ssn
  bgs_service.people.find_person_by_ptcpnt_id(participant_id) || bgs_service.people.find_by_ssn(ssn)
end
```

## Check the status of an appeal submission

```rb
def get_status_of_appeal_submission(appeal_submission)
  lighthouse_appeal_model = {
    'NOD' => AppealsApi::NoticeOfDisagreement,
    'SC' => AppealsApi::SupplementalClaim
  }[appeal_submission.type_of_appeal]
  lighthouse_appeal = lighthouse_appeal_model.find(appeal_submission.submitted_appeal_uuid)
  status_updates = lighthouse_appeal.status_updates.order(id: :asc).map do |status_update|
    { from: status_update.from, to: status_update.to, ts: status_update.status_update_time }
  end
  {
    status: lighthouse_appeal.status,
    status_updates: status_updates
  }
end
```

## Check the status of an evidence submission

```rb
# upload_submission_guid is the "US GUID" from the Lighthouse email reports
def get_status_of_evidence_submission(upload_submission_guid)
  upload_submission = VBADocuments::UploadSubmission.find_by!(guid: upload_submission_guid)
  {
    status: upload_submission.status,
    status_updates: upload_submission.metadata['status']
  }
end
```

## Get InProgressForm data

```rb
# form_id: '10182' | '20-0995' | '20-0996'
def get_in_progress_form(user_uuid, form_id)
  in_progress_form = InProgressForm.find_by!(user_uuid: user_uuid, form_id: form_id)
  in_progress_form.data_and_metadata
end
```
