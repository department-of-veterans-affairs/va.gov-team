## 526 File Claim User Stories (Historical)

These user stories were written in possibly late 2016 and filed in early 2017 in hopes of beginning work on the 526 disability compensation claim after claim status launched.

The issues were closed and there doesn't seem to be any other doc capturing these, so storing them here for posterity.

### Veterans can start a new benefits claim

Users of vets.gov should be able to start a new benefits claim. If the user is logged in when they start a new benefits claim, they can return at any time before the claim has been submitted to resume the claim.

This feature does not have any external dependencies.

TBD: does the user need to be logged in to start a new claim?

### Veterans can submit a new benefits claim

After completion of all the information required for a new claim for benefits, a Veteran can submit that information to vets.gov.

Submitting the claim kicks off the backend process to officially file the claim with VA.

This feature is dependent on the new endpoint that EVSS is building for submitting a claim.

Submission of the claim to EVSS should account for that system's varying availability.

### API clients can submit a claim

### API clients can store a partially completed claim

### API clients can create an Intent to File for a Veteran

An API client, given identifying information about a Veteran, can establish an Intent to File in the CorpDB.

This uses the VDC shared service called CreateCompensationIntentToFile.

TBD: what is used to identify a veteran.

### API clients can retrieve a Veteran's military service record

An API client, given identifying information about a Veteran, can retrieve a Veteran's military service record.

This will require integration with VIERS to get the information from VADIR.

TBD: what are the parameters for this to identify a veteran.

### API clients can retrieve a Veteran's address

An API client, given identifying information about a Veteran, can retrieve a Veteran's current address as it is listed in CorpDB.

This will use the VDC Shared Service or Claims Service to get the data. Or, this information might come from the session/profile on vets.gov.

TBD: what parameters does this require to identify the veteran.

### API clients can retrieve a Veteran's benefits and percent ratings

An API client, given identifying information about a Veteran, can retrieve a Veteran's disabilities and percent ratings.

TBD: what are the parameters for this call?

This will call out to the VDC RatingsInformationService

Plan B: go straight to BGS for this.

### Veterans can view their benefits and percent ratings

A Veteran should be able to view their existing benefits, and the percent disability rating for each of those benefits.

This feature is dependent on an external system to return that information.

TBD: where does this information come from?)

### Veterans can edit or enter their current disabilities

When creating a new benefits claim, a Veteran must list all of their disabilities, both service-connected and those that are not service-connected.

This information can be retrieved from EVSS REST services.

This feature has an external dependency on EVSS REST services.

TBD: which EVSS REST Services provide the list of all disabilities (both service-connected and non-service-connected).

### Veterans can edit or enter their current address

When creating a new benefits claim, a user is required to specify their home address. In eBenefits, this is retrieved from the Corporate Database, and presented to the user to confirm or edit if incorrect. In vets.gov, this information will come from either:

the session (either from ID.me or the Vets.gov platform API)
via EVSS REST services
or it will be specified by the user.

This feature is possibly dependent on ID.me integration or EVSS REST services.

TBD - which EVSS REST services can provide the Veteran's address?

NOTE: in eBenefits, once a user has entered in their address an "intent-to-file" is created in an eBenefits table. TBD: does vets.gov need to create anything in a special table to record an "intent-to-file" and is there an EVSS REST service that does this?

### Veterans can edit or enter their military service record

As part of creating a new benefits claim, a user must enter their military service record. In some cases, vets.gov will be able to retrieve some or all of the user's military service record from a VA enterprise system and present it to the user for editing. In that case, the user can either edit, add to, or correct their military service record.

This feature is optionally dependent on vets.gov having access to a system that provides a Veteran's military service record. Currently, military service records are retrieved from VADIR. There is another system called eMIS that may possibly have a more complete service record to pull from.

TBD: can the military service record be accessed via the EVSS REST services? If so, which ones?

### Veterans can continue an in-process benefits claim

If a user had previously started a benefits claim while logged in, and navigated away from the claim, and then later returns to their vets.gov account, they should be able to find the in-progress claim and resume it where they left off.

This feature does not have any external-to-vets.gov dependencies.

### 
