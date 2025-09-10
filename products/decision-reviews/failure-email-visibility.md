# 📧 Solution Brief re goal "VA employees have visibility into decision review failure emails sent by VA.gov"

VA employees have made it clear that in some scenarios they need the ability to see the exact contents and metadata from a "failure email" to better do their job.

## The problem

For all forms Veterans submit on VA.gov, when the form or evidence submission fails and 1) an end product (EP) or appeal record is not created in downstream systems or 2) the evidence is not uploaded to downstream systems, the teams that support these forms currently send a failure email to the Veteran. Based on error tracking for Benefits Portfolio forms this happens around 276 time a month (based on a median for _error_, _action needed_, and _failure_ emails). 

Today, claims processors, attorneys, judges, and other employees within VA don't have visibility into the details of the submission attempt, leading to the request that failure email contents and information be uploaded to the Veteran's eFolder.

## The request

The Veterans Benefits Administration (VBA) and the Board of Veterans' Appeals (BVA or the Board) have requested that the email contents, recipient email address, and relevant dates be available in the Veteran's eFolder.

### Why this is important

When a Veteran resubmits any form or evidence that was previously unsuccessful due to an error with the VA.gov submission, VA needs to decide

* what is the appropriate effective date for the requested benefit
* whether to docket appeals as timely, or
* whether to grant extension requests for appeals

> For example: the Board could use the failure email to verify whether the Veteran attempted to submit an appeal before the deadline, and VBA could use the original submission date as the effective date for benefits if they had visibility into the submission attempt.

VA will more easily be able to make this determination in a timely fashion with access to the exact information that was communicated to the Veteran, including time and date stamps. This also relieves the Veteran of the burden of locating and furnishing the VA-generated communication.

## The solution

> Note: This request has originated from both the VBA and the Board, and for the purposes of this analysis we have focused on the requirements suggested by the Board. 

The OCTO Decision Reviews team is investigating the feasibility of uploading the failure email to the eFolder. The Board has asked for these specific features, which we are reviewing as potential requirements by assessing level of effort vs. impact and reach.

### Must have

* the email address that the failure email was sent to is available
* the date the email was sent is available
* the date the Veteran attempted to submit the form or document(s) is available
* a precise copy of the contents of the email message is uploaded (The Board needs visibility into anything VA communicates to the Veteran, not just that the email was sent)

### Should do (better experience)

* the email is uploaded directly to the eFolder, not routed to the Central Mail Portal (CMP) for manual processing
* the solution can be adopted by all Benefits teams that send failure emails

### Not required

* no notice to the Board is necessary when the email is uploaded

## The technical challenge

There is no direct method for providing this functionality currently, and each potential method comes with challenges of one kind or another:

### Option 1: BCC-ing the Board's email

With the email alone, this approach would not provide the Board enough reliable Veteran identifiers to know which eFolder to upload the document to. Hence it's not a viable interim or long-term solution.

<img width="326" height="638" alt="image" src="https://github.com/user-attachments/assets/daf28972-3a47-4b86-b56b-f9ec7530e400" />
<img width="326" height="742" alt="image" src="https://github.com/user-attachments/assets/a4205ba9-4d7c-4652-8f31-123c5d02c58a" />

### Option 2: VA Notify generates a PDF of the email, VA.gov uploads document into the eFolder

This would depend on making a new request for functionality to **VA Notify** because the capability does not currently exist.
This would avoid requiring VA.gov to regenerate the email and it would benefits all teams within the Benefits Portfolio, but the following information would not be available in the PDF: 

* the email address the failure email was sent to
* the date the email was sent

This solution requires a method for supplying email address and relevant dates, such as bundling the PDF with a separate metadata text file or adding a “cover page” or “appendix” when uploading into the eFolder.

### Option 3: VA Notify generates a PDF of the email and uploads it into the eFolder

As with option 2, this would be depend on making a new request for functionality to **VA Notify** because the capability does not currently exist--neither the ability for VA Notify to generate a PDF of the email nor the ability for VA Notify to upload the email into the eFolder.
This would centralize the solution but has the same challenge as Option 2 with the same additional requirement to address it.

### Option 4: VA.gov "regenerates" the email with requested details into a PDF and uploads it to the eFolder

VA.gov doesn't currently generate PDFs of failure emails, so this would be new functionality for us.
In this method the must-have metadata (email address and date email was sent) could be available in the PDF.
We can design it so that it's a shared service within `vets-api` that could be extended or leveraged by multiple teams. It's likely that each team might have unique requirements but they should be able to build on our example easily to reduce the effort needed to regenerate a email sent with VA Notify and upload it to a Veteran's eFolder.
We have conducted an initial [spike](https://github.com/department-of-veterans-affairs/va.gov-team/issues/117742) to assess the [level of effort for this option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/engineering/2025_09_05_va_notify_failure_notification_email_copies_to_efolder.md).

### Option 5: Add a note to the Veteran's record indicating that a failure occurred

This fast solution would work for other teams, but the Board doesn't work in VBMS, would need to be prompted to check. This solution would meet VBA's needs but not the Board's requests.

Example of notes for a test user in the VBMS UAT environment:

<img width="2393" height="1515" alt="image" src="https://github.com/user-attachments/assets/9ee79c2e-266d-41aa-844a-9bbd32c5ab5b" />

## Our recommendation

We recommend that we implement Option 4 as a reference implementation and share with the other teams our approach after we have shipped it, so that they can easily adopt the same approach as soon as possible on their own roadmaps.
