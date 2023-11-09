# How to create a new Drupal CMS account
*For Drupal account admins only*

## General process
1. **Receive** new account request
   - Make sure there's an existing JIRA ticket for the request, or create a new one.
3. **Acknowledge** request
4. **Evaluate** request if any of the below is missing or unclear:
   -  What is the VA email for the new user?
   -  VA product (VA Medical Centers, Vet Centers, Outreach Hub, Benefits Hubs, Campaign Landing Pages, Resources and Support, etc.)
   -  If VA Medical Centers or Vet Centers, which Section? (VA Medical Center health care system or VISN, Vet Center or District)
   -  If they are new staff, do they have VA network access? Do they have a PIV card?
   -  If they are requesting for themselves, see next section for verifiers by product.
   -  If they are requesting for others and they have a Drupal account, the new user may get an account with the same role(s) or section(s) only.
   -  If they are requesting for others and they don't have a Drupal account, see next section for verifiers by product.
5. **Investigate** by following up with the requester if any information is missing.
6. **Verify** request, see next section
7. **Set up** verified account
   - Accounts generally need two roles: creator (for their specific product) and content (editor or reviewer or publisher,in order of least to most permissions). Currently, most new accounts get a creator role and content publisher (except Vet Center editors start with the creator role and content editor). 
   - Training is required for VAMC, Outreach Hub events, Campaign Landing Pages. Add to both training environment and prod. All accounts start as blocked in prod by default.
   - Training is not required for Benefits Hubs and Resources and Support (they do their own onboarding). Add these accounts to prod and change the status from blocked to active.
   - Training is recommended but not required for Vet Centers. Add these accounts to training and prod and change the status in prod from blocked to active. Vet Center editors start with the creator role and content editor.
8. **Confirm** (or reject) CMS account request
  - For verified users, confirm account creation and include next steps and training assignment (if applicable)
  - For unverified users (e.g., VA offices that aren't on Drupal yet), send information about why they aren't eligible for an account yet.
9. **Training completion** if required
   - Verify with instructional designer that required training is completed
   - If completed, set the account to *active* in prod and send prod login instructions
  
## CMS account verification

**VAMC**
- Person to contact for verification: VHA Digital Media
- How to reach them: Slack channel vamc-editor-support
- Training required for prod account activation? Yes.
- After editor completes training: in Prod, make sure the editor has the roles of Content Creator-VAMC and Content Publisher, and change their status to Active.

**Vet Center**
- Person to contact for verification: email jessica.schiefer@va.gov
- How to reach them: email
- Training required for prod account activation? no, but have Michelle send kick-off email with attachments

**Veterans Benefits Administration**
- Regional Office Pilot MVP will consist of editors from 7 selected offices. Their names come directly from VBA central, so no ad hoc requests should be coming in. If they do, please alert Michelle to discuss with VBA central.

**Benefits hubs**
- Person to contact for verification: Randi Hecht and Danielle Thierry
- How to reach them: Post in VA-sitewide-content Slack channel with @Randi Hecht and @Danielle Thierry for appropriate follow-up.
- Training required for prod account activation? No. (Public Websites team typically does their own training).

**Other products**
- Slack delivery manager or product manager in cms-team channel

----


### Access requested

Ideally, the user would have requested their account following the instructions at [https://prod.cms.va.gov/help/support/request-a-cms-account](https://prod.cms.va.gov/help/support/request-a-cms-account) except for Vet Center kick-offs, which are sent by Jessica Schiefer

*   Verify the user’s role. Vet Centers start with content editor until Michelle publishes their Vet Center and changes their role to content publisher. VAMCs may ask that a user only get content editor, otherwise most get content publisher.
*   Verify their request with product owner (OCTO POC)? 
*   Verify the user’s Section (see [https://prod.cms.va.gov/help/cms-basics/sections](https://prod.cms.va.gov/help/cms-basics/sections))
*   Verify VA email address
*   Verify what training is needed, if any.

## Instructions for adding one user at a time


### Method 1 (we create their account, then we edit their roles and sections, then we ask them to sign in) - Currently recommended

1. Log in to the production environment: [https://prod.cms.va.gov/](https://prod.cms.va.gov/)
2. In the top toolbar menu, click **Manage**.
2. Click **People**.
4. Click **Add user**.
5. On the **Roles** page, click the checkbox(es) next to the appropriate role(s).
6. After **Email address**, enter the user’s VA.gov email address. _Make sure this is the correct address, since if it differs, their PIV login will fail._
7. After **Username**, enter the user’s VA.gov email address. _See step above._
8. **Password** process: select a one-time password using three unrelated words, a number, a punctuation character. Nearly all editors login with PIV so the password usually doesn't need to be shared.
9. For new VAMC users, set **Status** as **Blocked**. They will be activated after training is completed.
10. Check the box next to **Notify user of new account**.
11. Leave the box checked next to **Enable this user to leverage SAML authentication**.
12. Skip **Password Expiration** for now. Currently there is no expiration period.
13. 14. Click **Create new account**. (Will see account creation confirmation in green at the top of the screen)
14. In the top toolbar menu, click **Manage**.
15. Click **People**.
16. Find the user account you just created in the results list.
17. In the user account line, under the **Sections** column, click **Edit**.
18. Click the checkbox next to the appropriate section(s).
19. Click **Save**.
20. Repeat in training environment if training is required, but leave the status as Active.

OR

### Method 2 bulk import (even for just one user) into training environment to automatically set their password to drupal8
Follow the Bulk User Import Procedure at https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/user_management.md

OR

### Method 3 PIV login to prod (they sign in with PIV, then we edit their roles and sections) - Not recommended

1. Once prod account is requested and the request verified with product owner/approver, email them:
    1. Link to prod [https://prod.cms.va.gov/](https://prod.cms.va.gov/)
    2. Ask them to use PIV card login
    3. Ask them to reply by email when they have completed PIV card login
2. After receiving their confirmation of PIV card login, log in to prod.
3. In the top toolbar menu, click **Manage**.
4. Click **People**.
5. Enter their VA.gov email address in the **Name or email contains** field, then click **Filter**.
6. Find their name in the search results, then click **Edit**.
7. In the **Roles** list, check the box(es) next to the roles they should have.
8. Scroll down to the bottom of the page and click **Save**.
9. On the **People** page, in the results list, find the user again, go to the **Sections** column, and click **Edit**.
10. In the **Sections** list, click the checkbox next to the appropriate section(s).
11. Click **Save**.

OR

### Method 4 To create a new user in a tugboat environment from the command line
1. Go to https://tugboat.vfs.va.gov/5ffe2f4dfa1ca136135134f6
2. Under Previews, find the environment and click the title.
3. You will see a table titled ‘Services.’
4. In the line starting with ‘php’, click the ‘Terminal’ link.
5. A command line terminal will pop up.
6. Paste the following command (Make sure to update the email address) and press return:
drush user:create Terri.Rorke@va.gov --mail="Terri.Rorke@va.gov" --password="drupal8"
7. You should see a message like the following:
  [success] Created a new user with uid 1803
  
  To just change a password to the default, enter the command: drush user:password user.name@va.gov "drupal8"

## External resources

* Instructions for adding multiple users
Follow the Bulk User Import Procedure at https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/user_management.md

* Process workflow on Mural
https://app.mural.co/t/vagov6717/m/vagov6717/1605735264080/64a23a4e0bcff45cafebd576db9a787d54127dbc

* Current spreadsheet of users who need training tracked in training runbook
https://docs.google.com/spreadsheets/d/13jx1rhF5oRLXJNky0ff0zBfE0yR_NUTiAB3oS5T2TpQ/edit#gid=1427489097
