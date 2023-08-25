## September 23, 2022 CG Stakeholder Touchbase

### Notes

**Facilities question**
- Heather: Looking ahead at work for Facilities - thread
     - From < https://app.slack.com/client/T01G0063H29/C02MJCT59S7/thread/C02MJCT59S7-1663350479.052479>
     - We are starting to plan for after MuleSoft, and there was mention some months ago that we want to start on the Facilities selection page.  We have some questions around what the information is used for, How the business thinks it should work, and what possibilities there may be to systematically pull a facility based on location or something like that.
- Originally, we restrict the locations that Veteran can chose from when completing the 1010 CG to be the ones that have a CSC at them AND are the ones that CARMA has a queue for.
     - **AI Business** to talk internally and confirm path forward (eg same requirements, shift, etc.)
     - **AI OIT **to communicate if the Lighthouse API work is slotted for PI 9
- The goal originally:
     - To reduce the manual effort of updating the names of the facilities and where the CSC sits (which is updated in Lighthouse API)
     - Open up the drop down to allow the Veteran to list wherever and for behind the scenes to route to the correct VAMC queue
     - Required field on the form
     - Helps with the in person assessments and checks
     - Help application assigned to correct CSC and reduces processing times
     - Potentially opportunity – can we automate using ES? VistA? CERNER? CDW? Prepopulate and allow to change
- Facility data – has lots of data, but may not be very human friendly
 
**Special Character in the Middle Name**
- AI: Danny Reed to verify that the middle name field should accept an apostrophe – Closed
     - If the field does not accept an apostrophe, a VA-MPI service enhancement will be initiated
     - MPI does allow special characters. But Vista did not have it. So, CARMA reverted to MPI which had no “ ‘ “
- VA.gov added to backlog to have the special characters in the PDF

**Any content changes that might be needed on the CG form to inform users about the 10/1 eligibility changes?**
- Assume to be on the CSP website itself where it lays out who is eligible - AI Danielle -- Work in Progress
- It will be a special release on 10/1. AI Patrick to get exact time for the update on 10/1

**A small spike of MuleSoft errors (9/15) b/w ~340p ET and ~740p ET around same time as a service disruption**
- Slack Conversation: 1010CG controller error rate is above 10%
- All errors categorized as MuleSoft API Error
- AI: Looking to see if timing is the same or if due to something else
- May have been a Salesforce issue. **AI Rumen** to monitor the issue with the queues
