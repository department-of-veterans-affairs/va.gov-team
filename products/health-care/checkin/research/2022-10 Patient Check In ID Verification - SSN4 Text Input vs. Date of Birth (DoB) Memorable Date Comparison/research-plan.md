# Research Plan - 2022-10 Patient Check In ID Verification - SSN4 Text Input vs. Date of Birth (DoB) Memorable Date Comparison

## Product brief

The Patient Check In (PCI) product is reimagining the ecosystem that allows a Veteran to check in for a VA medical appointment. The Modernized Check-In Experience Team created the portion of the ecosystem that enables a Veteran to utilize their mobile device to “check in” through VA.gov. I.e., letting clinic staff know that the patient has arrived for their appointment.

Improvements to Low Risk One Time Authentication (LoROTA), the authentication method for PCI, will be required based on feedback from VA Profile Team and VA security requirements. One of those security improvements is to remove the use of SSN4 (DSC: Text input) as an authentication variable and begin using Date of Birth (DoB) ([DSC: Memorable date](https://design.va.gov/components/form/memorable-date)), as soon as possible. 

### Technical security improvements

- Remove use of SSN and begin using DOB as prompted attribute
- Hash the SSN and DOB in LoROTA datastore
- Only populate LoROTA data when it is about to be presented to the Veteran. The initial LoROTA record creation will not contain any PHI/PII
- Proactively remove LoROTA entries as soon as possible – if the record needs to be retained until the time of the appointment, remove all unneeded PHI/PII
- Authentication attempts are currently limited to 3 tries – enhance this to delete the associated LoROTA entry when auth fails

## Release plan 

We are planning to release the memorable date component into Patient Check In next week (July 30, 2023). Our plan is to test the new memorable date component with 10% (~500 per day) of users initially, while the other 90% will verify their identification to Patient Check In using their last name, last 4 of their SSN, which does not use the memorable date component.

Here's how we intend to track success and performance:

- % failed of memorable date component for Pre Check In
- % failed of memorable date component for Check In
- % success of memorable date component for Pre Check In
- % success of memorable date component for Check In

And, we'll compare those same numbers to the existing identification method for the same date range.

Our plan is to check on this data hourly for the first day. If the new memorable date component's performance is significantly less than the existing method, then we'll stop using it and evaluate next steps.

However, if the performance is in a similar range compared to the existing method for 5-7 days, then we'll expand it to more users.

### Related artifacts

- [Update smartphone check-in R&S article to align with new identity verification method ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/44692)
- [Communication to VA DST](https://github.com/department-of-veterans-affairs/va.gov-team/issues/44383#issuecomment-1192815643)
- [Communication for % user rollout per date](https://github.com/department-of-veterans-affairs/va.gov-team/issues/44383#issuecomment-1204258067)

## Research goals 

Our goal is to ensure that the new identify verification method (e.g., memorable date) is as successful as the existing method (e.g., last name, last 4 SSN). However, it's worth noting that this "test" is an apple to oranges comparison since the data a Veteran uses to verify will be different. But, we think the comparison is still relevant.

## Research artifacts

- [Release notes with screenshots of component changes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/detailed-release-notes/lorota-security-updates.md)


