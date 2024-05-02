## Get copays for a given User UUID
```
def uuid_to_mpi(user_uuid)
	verification = UserVerification.find_by(idme_uuid: user_uuid) ||
	UserVerification.find_by(logingov_uuid: user_uuid) ||
	UserVerification.find_by(backing_idme_uuid: user_uuid)
	
	icn = verification.user_account.icn
	
	mpi_profile = MPI::Service.new
	.find_profile_by_identifier(identifier_type: 'ICN', identifier: icn)
	.profile

	# We flub the MPI Profile to behave like a User
	mpi_profile.class.module_eval { attr_accessor :va_treatment_facility_ids}
	mpi_profile.class.module_eval { attr_accessor :uuid}
	mpi_profile.uuid = user_uuid
	
	mpi_profile.va_treatment_facility_ids = mpi_profile.vha_facility_ids 
	
	return mpi_profile
rescue => e
	return false
end

def user_to_copays(user_uuid)
	mpi_profile = uuid_to_mpi(user_uuid)
	request = MedicalCopays::Request.build
	request_data = MedicalCopays::VBS::RequestData.build(user: mpi_profile)
	response = request
		.post("#{"/vbsapi"}/GetStatementsByEDIPIAndVistaAccountNumber",          request_data.to_hash)

	response.body.map(&:keys).flatten

rescue => e
	puts "error: #{e}"
	return false
end
```

## Get Debts for a given User UUID
```
def uuid_to_mpi(user_uuid)
	verification = UserVerification.find_by(idme_uuid: user_uuid) ||
	UserVerification.find_by(logingov_uuid: user_uuid) ||
	UserVerification.find_by(backing_idme_uuid: user_uuid)
	
	icn = verification.user_account.icn
	
	mpi_profile = MPI::Service.new
	.find_profile_by_identifier(identifier_type: 'ICN', identifier: icn)
	.profile

	# We flub the MPI Profile to behave like a User
	mpi_profile.class.module_eval { attr_accessor :va_treatment_facility_ids}
	mpi_profile.class.module_eval { attr_accessor :uuid}
	mpi_profile.uuid = user_uuid
	
	mpi_profile.va_treatment_facility_ids = mpi_profile.vha_facility_ids 
	
	return mpi_profile
rescue => e
	return false
end

def user_to_debts(user_uuid)
	ssn = uuid_to_mpi(user_uuid).ssn
	user = OpenStruct.new(ssn:)
	
	# service should have a file_number
	service = DebtManagementCenter::DebtsService.new(user) 
	service.get_debts
end
```
## MISC.
```
# Pull the most recent FSR submission
sub = DebtsApi::V0::Form5655Submission
.with_debt_type("COPAY")
.order(:created_at)
.last

# See the Form5655Submission scopes for more info
```