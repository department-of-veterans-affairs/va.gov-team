# Form 526 Ancillary Jobs - Current Architectural Summary and Problem Recommendations

_Note: It may be beneficial to create a flow chart for this, I can work on once I've summarized the problems with this process_

## Summary

After a Form 526 Submission is completed by a Veteran and we submit that information to EVSS (or soon, Lighthouse), a number of follow-up processes get enqueued to provide supplemental documentation for a claim to EVSS and clean up data in our system we don't need anymore.

At a high level, the process works like this:

1. A Veteran submits their Form 526 claim, along with any additional documents they provided (doctor's notes, supplemental forms etc.)
2. We send the main Form 526 data to EVSS via a "submit claim" job to initiate the claim.
3. After that job runs, we check if we marked it a "success" (sort of - will explain more in the problems section). 
4. We then queue up several ancillary jobs that run _concurrently_:

- Submit Form 0781/a: Generates and submits PDF PTSD forms to EVSS if the Veteran completed these parts of the Form 526 application. If this fails we retry it TBD HOW MANY TIMES? MARK FOR OTHERS TOO

- Submit Form 4142: Generates and submits a PDF Form 4142 (medical records consent form) to EMMS (Central Mail)

- Submit BDD Instructions: Submits a static PDF page with instructions to EVSS we always send with Form 526 submissions. This is to make the claims process easier for the person who reviews the claim in VBMS. This page never changes; it gets sent by us for every Form 526 submission to EVSS.

- Submit Upload: This is a job that runs once for every supplemental document the Veteran uploaded as part of their claim, and submits that document to EVSS.

- Update "Flashes" for Veteran: this "tags" the Veteran with certain characteristics in BGS (for example, "Vietnam - Agent Orange Exposure"). These tags come from the metadata in the Form 526 submission (unclear where that information comes from originally, presumably the Veteran selects them in the form UX)

- "Cleanup": this job does two things: 1. Delete the "In Progress Form" record now that they've finished the form, and 2. Delete the Intent to File record (includes a call to EVSS)

5. Once the above jobs "complete" (again, it's more complicated than that, will explain more in the problem section), run a final job that 1. Sends a successful notification email to the Veteran that their claim was submitted successfully, or 2. If there was a problem, sends an email saying it failed.

## Problems With This Architecture

WORK IN PROGRESS
