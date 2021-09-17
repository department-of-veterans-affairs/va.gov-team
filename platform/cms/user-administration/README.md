# How to create a new Drupal CMS account
*For Drupal account admins only*

## General process
1. **Receive** new account request
   - Make sure there's an existing JIRA ticket for the request, or create a new one.
3. **Acknowledge** request
4. **Evaluate** request if any of the below is missing or unclear:
   -  VA digital product and/or section
   -  Role: Editor, reviewer, publisher
   -  Do they have network access? (Folks who are remote/ or contractors will need CAG or some other means of accessing the network first).
   -  If they are requesting for themselves, need name of person who can verify the users's permissions and what training or other criteria must be met before the account is approved. If they don't have a verifier, see next section for verifiers by product.
   -  If they are requesting for others and they have a Drupal account, the new user may get an account with the same role(s) or section(s) only.
   -  If they are requesting for others and they don't have a Drupal account, see next section for verifiers by product.
5. **Investigate** by following up with the requester if any information is missing.
6. **Verify** request 
   - Contact verifier to approve the sections and roles.
   - Confirm the training or other criteria necessary to approve the account.
7. **Set up** verified account
   - If training is required: add user in prod but set account to *blocked*. The account permissions you create in prod will show up in the training environment, but they will be automatically set to active in that environment. 
   - VAMC accounts: create as blocked in prod with Content creator - VAMC and Content editor roles.
8. **Confirm** (or reject) CMS account request
  - Send confirmation that account was verified
  - Include next steps and training assignment (if applicable)
9. **Approve** the account. 
   - Once the user has completed training and passed any additional criteria, their account is considered approved.
   - Set the account to *active* in prod to complete
   - VAMC: Wait until Stan has given the OK (this usually occurs when the VAMC or VISN goes into dual-state or live), then add the publisher role and set to active in prod.
     
  
## CMS account verification

**VAMC**
- Person to contact for verification: Stan Gardner or Lisa Trombley
- How to reach them: Slack channel vamc-editor-support
- Training required for prod account activation? Yes.
- Reference: See Slack https://dsva.slack.com/archives/CPQFCQKEH/p1617304591199400

**Vet Center**
- Person to contact for verification: Michelle Middaugh or Dave Conlon
- How to reach them: Slack channel facility-support
- Training required for prod account activation?no, but encouraged
- Reference: See Slack https://dsva.slack.com/archives/CPQFCQKEH/p1617304591199400

**Benefits hubs**
- Person to contact for verification: Randi Hecht and Danielle Thierry
- How to reach them: Post in VA-sitewide-content Slack channel with @Randi Hecht and @Danielle Thierry for appropriate follow-up.
- Training required for prod account activation? No. (Public Websites team typically does their own training).
- Reference: See Slack https://dsva.slack.com/archives/C01K37HRUAH/p1617213202088200

----

## Onboarding - Training Needed

1. Request comes in via email, Slack or Jira.
2. We create a ticket if it hasn't been created.
3. Acknowledge the request and ask for any missing account info.
4. If they need training, pass this information to training by assigning the ticket to training in Jira.
    - If they don’t have VA network access, training can send them youtube video links but we can’t give them training site access
    - If they do have VA network access, create their account in prod following instructions below (defaults to blocked status), create their account in training environment (because prod account won't update training environment until the next training environment refresh).
5. Send training instructions.
   

## Onboarding - No Training Needed/Training Completed

1. Request comes in via email, Slack or Jira.
2. We create a ticket if it hasn't been created.
3. Acknowledge the request and ask for any missing account info.
    - If no training is needed per the product owner/approver, go to the next step. Note: Public Websites handles their own trainings so just create their account. 
    - If training is needed, assign the ticket to training. This will follow the Training Needed process. The user will be instructed to follow up with their product owner/approver when training is completed.
4. Activate prod account.
5. Send prod login instructions.



## Prerequisites


### Access requested

Ideally, the user would have requested their account following the instructions at [https://prod.cms.va.gov/help/support/request-a-cms-account](https://prod.cms.va.gov/help/support/request-a-cms-account) except for VAMC users who are sent by Stan.

*   Verify the user’s role. VAMC editors all get VACM content creator and content publisher
*   Verify their request with product owner (DEPO POC)?
*   Verify the user’s need (what do they need to do in the CMS so we can assign the appropriate permissions)
    *   Reviewer - need to review and approve, but not edit content
    *   Editor - need to be able to make edits, but won’t be publishing content
    *   Publisher - need to be able to edit, review, and publish content 
*   Verify the user’s Section (see [https://prod.cms.va.gov/help/cms-basics/sections](https://prod.cms.va.gov/help/cms-basics/sections))
*   Verify VA email address
*   Verify VA network access or SOCKS proxy
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
8. **Password** process: select a one-time password using three unrelated words, a number, a punctuation character. No one will need to be told this password, and the user will be prompted to create their own password immediately, but it’s good form not to use something that can be guessed in the meantime. 
9. Leave the **Status** as **Blocked**.
10. Check the box next to **Notify user of new account**. This will send the user an email and prompt the user to reset their password.
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

### Method 3 PIV login to prod (they sign in with PIV, then we edit their roles and sections) - Not currently recommended

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
2. Under Previews, find the environment with the title "Editor Training Environment" and click the title.
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

* Current spreadsheet of user list in training
https://docs.google.com/spreadsheets/d/13jx1rhF5oRLXJNky0ff0zBfE0yR_NUTiAB3oS5T2TpQ/edit#gid=1427489097
