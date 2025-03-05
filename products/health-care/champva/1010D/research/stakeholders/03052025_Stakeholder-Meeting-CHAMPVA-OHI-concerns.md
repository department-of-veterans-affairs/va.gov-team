# 3/5/25 Stakeholder Meeting: CHAMPVA and OHI

**Attendees:** Rogelio Cortez, Angela Cranmore, Jennifer Dortch, Jamie Fiore, Elizabeth Lightfritz, Andrea Merrill, Mike M., Michael Miller, Elizabeth Sauer, Premal Shah, Joy Shorts, Joie Trujillo, Angela Pinon, Renata Keck, Rachel Pope

## Walkthrough of CHAMPVA application online
- SSN and VA File Number
    - VA File Number is not needed for EEV applications and could cause confusion. Veterans know their SSN.
        - SSN used for lookup.
        - Applications have been received without SSN
    - Sometimes the VA File Number is the only thing in the system, so we can’t get rid of it altogether
        - Per Delaney, file number should not be on the form
    - Clarification:
        - Currently, the online application requires either SSN or VA File Number for the Sponsor to match what’s on the PDF. 
        - For the applicant, SSN is required. 
        - Previously, the appplication also had File number or SSN for the applicant, which is why some applications may have been received without SSN.
        - Asking for VA File Number for the sponsor can be revisited if it is causing confusion
- Yes to OHI
    - Applicants are told health insurance uploads are required, but they can bypass the upload, upload later, or mail in
        - EEV would prefer them not to have the ability to bypass the upload
        - Receiving the forms later causes a delay
    - Question about combining uploads in PEGA so there are less items to close out
        - This is being discussed in a separate conversation.
    - Question about whether uploads for adopted child are able to be bypassed.
        - All required uploads can currently be bypassed. We can iterate on this design as needed to help EEV.
        - Since these are being received now and causing processing issues, it’s imperative that this is fixed as soon as possible
- Can CHAMPVA application be processed without OHI uploads?
    - Yes, the bene would be put into the system
    - All claims submitted would be rejected because of the missing OHI
    - Better to get everything in one application
    - If OHI received separate from CHAMPVA application, it is considered a standalone in PEGA and goes to the OHI team
        - EEV team has no idea that it’s been received and can’t tie it to an application
- Explanation from Premal about why it was designed to bypass the uploads
    - Intended to reduce friction for the users
    - Assumption that it would work the same as a mailed-in application
    - Can iterate on the design to improve this for EEV processing
- Question about whether the prompt at the beginning of the form is still there to warn about delay in processing.
    - Were able to find this on the static page
    - Also on the confirmation page after submitting 

## OHI Form online
- Linked on static page for CHAMPVA
- Standalone for updating existing OHI

## Possible Solutions
- Reminder that it is not just OHI that is the problem.
    - There are other required uploads that will prevent processing the application
        - Medicare
        - School certification
    - Would like all required forms to be required to be uploaded with the application
        - School cert may need to be an exception because we have heard that the school may send this independently

## Potential Content Changes
- Use “deceased” instead of “dead”
    - Current language is the same language used across all VA forms.
    - Can check with content team on changing it.
- Use “gender” instead of “sex”
    - The current language is in compliance with the executive order.
    - Can’t be changed.
