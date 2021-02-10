# Create a new CMS user account in prod (CMS team user admins only)


# Process Overview - Training Needed



1. Request comes in (via email/slack/jira widget)
2. We acknowledge the request
3. We make sure a Jira ticket exists
4. We find out their product owner, desired role, va email address, etc., if they have network access (if they’re a contractor), and what training they need, if any.
5. If they need training, pass this information to Jane by assigning the ticket to her in Jira.
    1. If they don’t have access, Jane can send them youtube training but we can’t give them training site access
    2. If they do have access, Jane sends them other training materials and instructions them to follow up with their product owner/approver when training is completed.
    3. Once Jane has their info, the initial ticket is DONE and can be closed.


# Process Overview - No Training Needed/Training Completed



1. Request comes in (via email/slack/jira widget)
2. We acknowledge the request
3. We make sure a Jira ticket exists
4. We find out their product owner, desired role, va email address, etc., if they have network access (if they’re a contractor), and what training they need, if any.
    1. If no training is needed per the product owner/approver, go to the next step.
    2. If training is needed, assign the ticket to Jane. This will follow the Training Needed process. The user will be instructed to follow up with their product owner/approver when training is completed.
5. We’ll link it to the previous training request ticket if possible
6. We’ll create the new user (per instructions section below) 
7. We’ll notify the new user and resolve the ticket.


# Prerequisites


## Access requested

Ideally, the user would have requested their account following the instructions at [https://prod.cms.va.gov/help/support/request-a-cms-account](https://prod.cms.va.gov/help/support/request-a-cms-account)



*   Verify the user’s role
*   Verify their request with product owner (DEPO POC)?
*   Verify the user’s need (what do they need to do in the CMS so we can assign the appropriate permissions)
    *   Reviewer - need to review and approve, but not edit content
    *   Editor - need to be able to make edits, but won’t be publishing content
    *   Publisher - need to be able to edit, review, and publish content 
*   Verify the user’s Section (see [https://prod.cms.va.gov/help/cms-basics/sections](https://prod.cms.va.gov/help/cms-basics/sections))
*   Verify VA email address
*   Verify VA network access or SOCKS proxy
*   Verify what training is needed, if any.

Questions for new user



*   What CMS-managed product will you be working on
    *   AKA: What VFS Product team are you on 
    *   AKA: what content do you need to edit ?
    *   This should tell us who their product owner is, and/or which list of criteria may apply to their getting an account. 
*   How quickly do you need access?
*   Do you have a va.gov email address? If yes, that probably means 
    *   1) you can access the network, 
    *   2) you are eligible for a prod CMS account for editing content (pending approval from PO)
    *   If no, 
        *   Are you a FE developer needing GraphQL access? This makes them eligible for a prod account without a VA.gov email address.  
        *   Do you actually need edit access to prod? Or do you just need access to a demo environment to understand more about the CMS (this could be true for members of VFS product teams, like product managers). 
        *   Do you have SOCKS access (so that they can access the network… although they may not know what SOCKS is, and we don’t want to support them with that). 

	

**Questions for Product owners** or someone responsible for content/user governance for a product. Some of these may already be part of the originating request, but need validation with PO. [The User administration view of the Product airtable](https://airtable.com/tblFDPzooEhiRdJZb/viwOAzxpLOz2hgOj8?blocks=hide ) contains relevant information for each product which may help guide these decisions. 



*   What Sections should the new user have access to? 
*   What Roles
    *   Editorial workflow: Should they have Content editor, Content reviewer, or Content publisher? 
    *   Content creation: What content creator roles should they have (this should be implicit based on the product(s) they are going to be working on)
    *   Content admin (only in very specific circumstances)
*   What training is needed? If training criteria for provisioning access is vague, should this be immediate? Pending training? Who is responsible for training the new user?


# Instructions for adding one user at a time

**Method 1 (they sign in with PIV, then we edit their roles and sections) **



1. Once prod account is requested and the request verified with product owner/approver, email them:
    1. Link to prod [https://prod.cms.va.gov/](https://prod.cms.va.gov/)
    2. Ask them to use PIV card login
    3. Ask them to reply by email when they have completed PIV card login
2. After receiving their confirmation of PIV card login, log in to prod.
3. In the top toolbar menu, click **Manage**.
4. Click **People**.
5. Enter their VA.gov email address in the **Name or email contains** field, then click **Filter**.
6. Find their name in the search results, then click **Edit**.
7. In the **Roles **list, check the box(es) next to the roles they should have.
8. Scroll down to the bottom of the page and click **Save**.
9. On the **People **page, in the results list, find the user again, go to the **Sections **column, and click **Edit**.
10. In the **Sections **list, click the checkbox next to the appropriate section(s).
11. Click **Save**.

**OR**

Method 2 (we create their account, then we edit their roles and sections, then we ask them to sign in) **



12. Log in to the production environment: [https://prod.cms.va.gov/](https://prod.cms.va.gov/)
13. In the top toolbar menu, click **Manage**.
14. Click **People**.
15. Click **Add user**.
16. On the **Roles** page, click the checkbox(es) next to the appropriate role(s).
17. After **Email address**, enter the user’s VA.gov email address. _Make sure this is the correct address, since if it differs, their PIV login will fail._
18. After **Username**, enter the user’s VA.gov email address. _See step above._
19. **Password** process: select a one-time password using three unrelated words, a number, a punctuation character. No one will need to be told this password, and the user will be prompted to create their own password immediately, but it’s good form not to use something that can be guessed in the meantime. 
20. Leave the **Status** as **Active** unless the account is pending some verification. In that case, click **Blocked**.
21. Check the box next to **Notify user of new account**. This will send the user an email and prompt the user to reset their password.
22. Leave the box checked next to **Enable this user to leverage SAML authentication**.
23. Skip **Password Expiration** for now. Currently there is no expiration period.
24. Click **Create new account. (**Will see account creation confirmation in green at the top of the screen)
25. In the top toolbar menu, click **Manage**.
26. Click **People**.
27. Find the user account you just created in the results list.
28. In the user account line, under the **Sections **column, click **Edit**.
29. Click the checkbox next to the appropriate section(s).
30. Click **Save**.


# Instructions for adding multiple users

Follow the Bulk User Import Procedure at https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/user_management.md
