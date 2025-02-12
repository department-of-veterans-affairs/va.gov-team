# **Submission Experience**

## **Ideation Workshop**

Conducted Aug 26, 2024

### Reference

1.  [[Mural from
    workshop]](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1723818200733/9de0161485d4f357e604dd9e4c7f4dc3e8a9473e?sender=u2d8a66f6d38755bd8c4c6218)

2.  Zenhub ticket: [[Synthesize insights & refine ideas : Submission
    Record and Tracking
    #87032]](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/87032)

We split into two breakout groups and generated solution ideas on two
topics, which each align with one future epic in the [[Submission
Experience
initiative]](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/feature-briefs/Submission%20Experience.md#5-delivery):

1.  Reduce Resubmission Burden

2.  Submission Record and Tracking

### Reduce Resubmission Burden

How might we make the evidence resubmission process easier and faster
for Veterans?

#### Key Themes

Workshop group 1 generated key ideas:

1.  Online Resubmission

2.  Optimize Backend

3.  Update Claim Status Tool

4.  Simplify Resubmission

--------
1. **Online Resubmission:** Introduce support for resubmitting forms
    online to streamline the process.

-   **Quick Submit:** Email claimants a link to a one-time-use upload
    page or code for indexing and tracking.\*\* Provide alternative
    support options to avoid full resubmission. For instance, users can
    use their Claim ID to track progress and upload documents in
    real-time, minimizing the need for complete resubmission. This
    process will be split into two steps: 1) Submit the application to
    generate the Claim ID, and 2) Upload documents separately.

-   **Edit Review Page:** Allow returning users to navigate back to the
    review page and make direct modifications to their application.
    Resubmission should update only the specific section that was
    modified, rather than submitting the entire claim again.

-   **Pre-population:** Automatically generate and prefill failed forms
    for resubmission using data from the claimant's MyVA profile.

2.  **Optimize Backend:** Eliminate the need for resubmission by
    addressing technical errors and backend processes more effectively.
    Improve backend systems to reduce submission failures and
    redundancies, ensuring that fewer veterans need to resubmit their
    forms.

-   **Monitored Uploads:** Revamp the submission loading process to scan
    files and manage failures in real-time. Equip adjudicators with
    tools to retrieve missing files directly from S3, or request them
    promptly if they are unavailable. Would require support for virus
    scanning adjustments to the Lighthouse endpoint. (per Jared and Lisa, DBEX Team 2 discovered that our systems are not currently able to validate files in real time) 

-   **Strengthen Backup Flow:** Minimize resubmission and reduce
    duplicate applications by establishing a more robust backup process.
    Automate the handling of individual evidence failures by stamping
    each piece with the veteran's name, associated claim, a memo, date,
    and filename, then redirect it to a centralized mail system. Notify
    the adjudicator when additional evidence is en route to central
    mail.

-   Automate the merging of duplicate applications. Clearly label failed
    evidence with a memo, date, and filename, and redirect it to a
    centralized mail system. Notify the adjudicator when additional
    evidence is on its way to central mail.

3.  **Update Claim Status Tool.** Allow users to view unmasked PII and
    visually track the status of their uploads.

-   **Email Bumpers:** Failure notification emails guide claimants to
    the next step in the Claim Status Tool, which offers a more
    detailed, transparent view of what went wrong.

-   **Submission Errors:** Claimants should see a visual display of the
    claim's submission errors in the claim status tool.

-   **Manage Files:** Access, download, print, reupload files from the
    claim status tool. Show full file names and provide instructions on
    how to avoid recurring file upload issues. Print mailing
    instructions on printouts. Look up instructions on how to prevent
    the

4.  **Validation:** Offer more detailed information about what failed
    and how users can resolve the issue. Support a wider range of
    failure edge cases.

-   **Loading Screen:** dynamically display what's happening on the
    back-end in real time (e.g., file size checks). This allows users to
    correct issues in real-time before completing the submission.

-   **Error Copy:** Expand messaging to cover a broader range of
    technical errors.

-   **Instructive Text:** Provide clear, step-by-step instructions for
    resolving each specific error.

-   **Contact Links:** Include clear calls to action (CTAs) within error
    messages, guiding users to the most appropriate form of customer
    support for each specific error type.

5.  **Simplify Resubmission:** Optimize the efficiency of the existing
    resubmission experience.

-   **White Glove Resubmission:** The VA support desk will contact you
    directly to assist with resubmission. The VA will manage the
    resubmission process on your behalf as a full-service solution.
    Shift the responsibility of resubmission from claimants to
    adjudicators and claims assistants. Provides concierge printing and
    mailing services if needed.

-   **1-Click Resubmission:** Break claimants out of looping
    resubmission cycles by emailing a VBA monitored inbox. Claims
    Assistants could manually move submitted files into an e-folder and
    respond directly to claimants via email.

-   **Templates:** Guide Veterans through the evidence resubmission
    process by providing coaching on the types of evidence needed to
    support their disability claim.

-   **Checklist:** Use a visual checklist to manage resubmission tasks,
    making it clear when the claimant has completed the required actions
    and when that information has been received by the VA adjudicator.

-   **Email & SMS Updates:** Notify claimants of the VA's request via
    email or text message instead of traditional mail.

### **Submission Record and Tracking**

*How might we give Veterans a copy of their submission information?*

Workshop group 2 key takeaways from discussion about submission record
and tracking.

1.  **Give Veterans immediate access to the generated pdf from the
    confirmation page.**

    a.  Send Veterans an email w/ a deep link to CST/MyVA where they can
        download their submission record

    b.  We discussed how Review and Submit is another place to show
        Veterans a printable preview of their form (with a watermark)--
        but there are risks.

        i.  Veterans could try to print and mail in without submitting
            online or create duplicates
        
        ii. If Veterans change answers then their form won't be
            accurate.

2.  **CST/MyVA is the natural home for the record long term since claim
    status and records go hand-in-hand.**

    i.  Add download/print button to make record access easy.

    ii. Consider recreating the 526 confirmation page in CST/MyVA so
        that Veterans have a consistent experience.

    

    a.  Currently VA.gov holds pdfs for 60 days.

        i.  Discuss ways that VA could still retain that data in case of
            an emergency.
        
            1.  After 60 days could there be a way to go deeper into
                corpDB to get a copy or maybe even reach into eFolder
        
        ii. Notify Veterans when the availability window is closing.

3.  **The generated pdf is an immediate and accurate copy of the
    submission record, but isn't accessible and lacks ancillary
    form/evidence information.**

    a.  An accessible HTML copy of the data will be important in
        addition to the generated PDF

    b.  Continue feasibility conversations around including copy of
        ancillary forms and evidence file names.

        i.  Generated pdf would not have these things included-- those
            jobs may not have run yet-- so we could not provide the
            record for 526 + ancillary+evidence synchronously at this
            time.

    c.  The raw generated pdf could be confusing for Veterans since the
        form asks questions that don\'t directly map onto the pdf, so we
        would need to audit the pdf for understandability.

    d.  Ensure consistency across time/places Veterans can download a
        copy of their submission. We don't want to confuse them with
        different formatting/data points of the record throughout their
        journey.

**Questions from engineers to address in future conversations:**

1. Should we provide access to the pdf even if it didn\'t make it to the efolder?
2. Do we need a TTL for how long to store submissions and uploads?
3. I wonder if providing the option *before* submission could cause significant increase in time to complete the form
4. Is there a policy reason why the Veteran can't download their filled out copy of the 526 today?
5. Does the copy of 526 pdf **have** to be the one from their eFolder? 
