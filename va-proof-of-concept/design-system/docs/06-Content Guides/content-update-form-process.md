1. Submitter sends the CURF

  Content Team receives automated email; Submitter receives a receipt of submission email.

2. Content Team member slacks nebula channel: We got the request!

  Content Team member (CTM) assigned to CURF submissions posts a note in the slack nebula channel that we received a CURF submission and are working on it. This is just an FYI for others who also receive notifications that we're on it.

3. Content Team member assesses CURF

  CTM assigned to CURF submissions (Kelly) assesses update request.
    - If update is not appropriate (the request is too big/complex to be submitted through this form or doesn't appear to be accurate) or cannot be completed for some other reason, CTM contacts the Submitter.
    - If update is appropriate, CTM forwards the CURF submission (auto-email) to Jenny in VBA or Jeff in VHA as an FYI. Note would be something like: "The Content Team just received this request to update the number of days to complete a disability claim. We just wanted to let you know we'll be addressing it today."

4. CTM creates an issue in Zenhub for this task

5. CTM opens branch and pull request

  Use this naming convention: `Content/wip/name-of-update`

6. CTM completes the content update.

  - Edit and commit the changes.
  - Preview to make sure it all rendered.
  - Add Content Team proofreader (Peggy) as a reviewer.
  - Once proofreader has signed off, add as a reviewer someone who can merge the file to master for you.

  **Note:** For the monthly update to the number of days to complete a disability claim, there are two files to update:

  - `/disability-benefits/apply/`
  AND
  - `/disability-benefits/after-you-apply/`

7. CTM sends a staging link to SME, if necessary

  Send to Jennifer or Jeff for approval, if necessary.

  **Note:** This is not generally necessary. You'd do this only for bigger or more complex changes that should have more layers of approval. No need to do this for the monthly update to the number of days to complete a disability claim. <br>

    - If approved, CTM can proceed to step 8.
    - If not approved, the update goes back to Content Team or Submitter, depending on the issue and who is needed to resolve it.

8. CTM coordinates with Content Team merger (Sophia or Nick or Bob) to push the update to production

9.  CTM emails the Submitter

  CC Mina, Amy, and Beth--as well as Jeff or Jennifer, depending on the type of content being updated--acknowledging receipt of the request and noting when we expect the update to reach the live site (see sample email below) based on whether the merge made it into that day's build (and live late afternoon the same day) or will be in the next day's build (and live by "tomorrow afternoon").

10. CTM replies-all to the above email when the update is live

  Let the Submitter, Mina, Amy, Beth, and Jeff or Jennifer know the update is live (see sample email below), and include a link to the page or pages that have been updated.


  **Sample email:**

  **1st: Ackowledge receipt** (cc: Amy, Mina, Beth, Peggy) <br>
  Subj.: Update to number of days to complete a disability claim <br>
  Hi Jennifer, <br>
  We received your request, incorporated the new info, and you should see these changes live by the end of the day. I'll let you know when the update appears on the live site. <br>
  Best, <br>
  Kelly Kennedy <br>
  Senior Writer <br>
  Vets.gov Content Team
  

  **2nd: Notify submitter that the update is live** (you can just reply all to the original mail above) <br>
  Hi Jennifer,<br>
  The update is live: <br>
  https://www.vets.gov/disability-benefits/apply/ <br>
  https://www.vets.gov/disability-benefits/after-you-apply/

  Thanks very much! <br>
  Kelly
