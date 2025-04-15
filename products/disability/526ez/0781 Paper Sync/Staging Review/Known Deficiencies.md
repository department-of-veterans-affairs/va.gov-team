# Known Deficiencies 
These are deficiencies that are non-blocking, in our opinion, but planned to be addressed prior to 100% release.

## Modal
We are missing a destructive action modal (alerts the user to a deletion of data that is a result of a choice that they are making/changing) in 1 area that was not identified in our original identification of areas needing destructive action modals. 
- [0781 PS] Scope change - Types of traumatic events destructive action modal	https://github.com/department-of-veterans-affairs/va.gov-team/issues/105411
- [0781 PS] Scope change - Review & Submit - Types of traumatic events destructive action modal	https://github.com/department-of-veterans-affairs/va.gov-team/issues/105555

## PDF Bugs
~~This has been addressed~~

## Content related
A handful of content changes to make a few verbiages more clear are desired and planned. 
- [0781 PS] Add conditional bullet content to MST modal	https://github.com/department-of-veterans-affairs/va.gov-team/issues/106550
- [0781 PS] Add info alert to the event cards for MST removed data	https://github.com/department-of-veterans-affairs/va.gov-team/issues/106728
- [0781 PS] Scope change - Review and Submit new content for 0781 destruction action alert	https://github.com/department-of-veterans-affairs/va.gov-team/issues/107406
- [0781 PS] Scope change - Review and Submit new content for Behavioral Change Choice destruction action alert	https://github.com/department-of-veterans-affairs/va.gov-team/issues/107407

## Soft delete 
[This](https://github.com/department-of-veterans-affairs/vets-website/pull/35670#pullrequestreview-2765117673) is an improvement planned to ensure no data the user does not want to send gets through to the submission record/PDF.

## Vets-json-schema update to match final version
- [0781 PS] Vets-json-schema to match the final version of our schema	https://github.com/department-of-veterans-affairs/va.gov-team/issues/103147

## Scheduled job for metric collection
The job to collect the data and send to datadog is made already, but we need a ticket to make a PR to schedule it to run.
- [0781 PS] Implement a periodic scheduled sidekiq job	https://github.com/department-of-veterans-affairs/va.gov-team/issues/107511



# Discovered Deficiencies
Mismatch between button across form
- No ticket yet

[Need protection for nils](https://github.com/department-of-veterans-affairs/vets-api/pull/21727) (Soft delete will also address) (found during regression testing in TestRail)

