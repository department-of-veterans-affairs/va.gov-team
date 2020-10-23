# Save in Progress notes

## Currently

Currently there is a simple save in progress (SIP) system in place. The current system allows for a user to start a form, leave and resume their progress.

This resuming of progress starts the user right where they left off, with their information pre-filled. 

The users data is save in a postgres database in the vets-api. This data is cleared when 1 of 2 use cases are met; the form is submitted or its past the expiration date

Currently the expiration date is set per form, and is defaulted to 60 days.

## Problem

The expiration date for a form is set per form, not per form instance. For example, in the current system, all questionnaires will have a expiration day of 60 days in the future from when the user starts the questionnaire. We could change that 60, but it always be 60 for all questionnaires.

This static expiration date does not coincide with our use cases of how long a veteran has to fill out the questionnaire. A veteran has from the time the appointment was created till the appointment to fill out hte questionnaire. At that point the questionnaire expires. This means that our questionnaire's expiration date is not static and dynamic for user. 

## Possible solution

The tech team has identified a possible solution by seeing if we can pass the appointments time to the SIP endpoint and use that as the expiration date. This would lead the possibility of dynamic, per user expiration date. A tech spike with a prototype is needed to test for that.