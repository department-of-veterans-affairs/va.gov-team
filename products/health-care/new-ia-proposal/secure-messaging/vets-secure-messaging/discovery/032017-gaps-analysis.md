## Gaps Analysis: 
### How does Vets.gov's Secure Messaging compare to that of MHV?

#### Contents 

1. Summary
2. Side-by-side feature comparison

### Summary

SM on Vets.gov was built to eventually replace that system on MHV, and as such should match functionality feature for feature. This document covers features on Vets.gov and gaps between the two sites as they stand in March 2017. All the core features of Secure Messaging have been implemented on Vets.gov, to the extent that there is no substantive difference in features between Vets.gov and MHV. 

Secure Messaging on Vets.gov represents a marked improvement in design and user experience over MHV. All of the design choices that make Vets.gov a better experience carry into Secure Messaging: the interface follows best design and user experience practice, and is uncluttered and intuitive to use. Moreover, Vets.gov is fully mobile-responsive, whereas MHV is not.

### Side-by-side feature comparison

See [this pdf](secure_messaging_gaps_v1.pdf) for visuals.

#### Access & login

Access and login is functionally the same. Once a user has credentialed appropriately on the site, Secure Messaging becomes available from multiple points in the interface. Vets.gov has an advantage here in that it requires one fewer click to access.

#### Inbox

There are a few minor gaps visible from the Inbox of Vets.gov's Secure Messaging:

* A user cannot batch-select messages for an action. This is an API limitation.
* Help / Technical Support are not options from Vets.gov's interface. However, help for the site is broadly available from the footer. Moreover, in the use cases where something unusual is happening (like a Vet's care team has changed), a blue information box appears with further clarifications and a help desk phone number.

Otherwise, Vets.gov's inbox is functionally the same as MHV's. In fact, Vets.gov improves on MHV by allowing message threading both in the Inbox and in Folders.

#### Compose Message

Functionality for message composition on Vets.gov is functionally the same as on MHV, with significant UI/UX improvements.

#### Sent Message

API limitations means Vets.gov doesn't have batch-selection of messages (see above).

#### Attachments

No functional difference between MHV and Vets.gov. Vets.gov is limited by the API in that a user cannot save a draft message with an attachment, nor will the system auto-save a draft. 

#### Drafts folder

API limitations means Vets.gov doesn't have batch-selection of messages (see above). Otherwise, no functional difference between MHV and Vets.gov.

#### Draft message 

No functional difference between MHV and Vets.gov.

#### Folder management

No functional difference between MHV and Vets.gov.

#### Appointments

Both MHV and Vets.gov (staging, at least) have the capacity to allow appointment requests via secure messaging, but it’s not at all obvious to someone new to the system where this function lives. However, this feature is less an appointment-booking feature than it is an e-mail inquiry with a particular subject line. An open-ended e-mail format allows a lot of room for error or missing information when making an appointment request. How much harder does this make the process, both for the Vet and the provider? 

Improving this functionality is on the radar, but is constrained by technical limitations.

#### Search

No functional difference between MHV and Vets.gov. Vets.gov here shows a marked improvement over MHV's search with a more intuitive interface that allows more fine-grained advanced searches. 

#### Tech support / help

Does not exist as such on Vets.gov, but help for the site on the whole is called out in the footer.

#### Preferences

MHV's preferences page contains the following fields: 
* New message notification
* Opt-in/opt-out of secure messaging
* E-mail signature

At the time this feature was developed on Vets.gov, there was a technical limitation which resulted in these features not being implemented. 

This means that users of Secure Messaging on Vets.gov do not have the option to set new-message notifications, to opt-in or opt-out of SM from this interface, or set an e-mail signature. These features do not impinge on a Vet's ability to message a health team.

Worth noting that the initial technical limitation has been lifted; per @Kam, MHV is working to streamline their API so that these might be implemented on Vets.gov in the future.
