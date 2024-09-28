# **Product**
<details>
  <summary>Product</summary>

- **Research Use Cases**
  - When does Veteran / Dependent use the form 
  - Why does the Veteran / Dependent fill out the form 
  - What are the next steps after they fill out the form 
  - Is this form a part of another process or form 
  - Does the form expire at a certain time 
  - Check to see if there are multiple forms with same OMB, maybe can do them at the same time 
  - [Content / Sitewide Checklist](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/UX/content-consideration-checklist.md)

- Identify Stakeholders  
- User Story & Workflow 
- [X] Product Outline- github
  - Create a new folder for each new form 
  - Add Product Outline to the folder
- Create Issue templates for developer in our repository
</details>


# **Design**

<details>
  <summary>Design</summary>

- **Wireframes/Sketch File**
    - Walk through wireframes with the devs
    - Follow the forms library patterns
    - Note any knowns about the form in the sketch files
- Source of Truth
  

</details>

# **Collab Cycle Kick off**
<details>
  <summary>Collaboration Cycle Kickoff</summary>

- [Link to Plaform Page](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/collaboration-cycle-kickoff)
- **When to start the process:** 
  - After Sketch files & Source of Truth have been completed
- [Create Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=collab-cycle-review%2Ccollaboration-cycle%2CCC-Request&template=collaboration-cycle-request.yml&title=Collaboration+Cycle+for+%5BTeam+Name%2C+Product+Name%2C+Feature+Name%5D)
    - Add label: forms-audit-digitize so it shows up on our board
    - Assign Product Manager and Designer to ticket
    - [X] Notify vfs-platform-support with the ticket number
        - Governance Team
        - Collab Cycle
- Product Outline
- Governance Team will update the ticket with the next steps
</details>

# **Design Intent**
<details>
  <summary>Design Intent</summary>
  
- [Link to Plaform Page](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/design-intent)
- **When to start the process:** 
  - After Platform updates the collab cycle ticket
- **Schedule a meeting** invitation for Design Intent include the following users
    - Product Manager
    - Product Owner
    - Designer
- **Link the following Documents 2 days prior to meeting**
    - Wireframes
    - Source of Truth
 - Implement Must Have Feedback for Design Intent
  - **Responsible**: Designer
</details>

# **SiteWide Intake Form** 
<details>
  <summary>Sitewide Intake</summary>
  
- [Link to Platform Page](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/sitewide-content-and-ia-intake-request)
- [X] [Create intake issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=Sitewide+Content%2C+RLHecht&labels=sitewide+content%2C+sitewide+content-product+support&template=sitewide-content-intake-form.md&title=%3CType+of+Request%3E+from+%3CTeam%3E)
- **When to start the process:** 
  - After Platform updates the collab cycle ticket
- **Link the following documents**
  - Product Outline
  - Sketch Files
  - Source of Truth
- #Ping sitewide-content.ai
- Implement feedback & breadcrumbs
</details>

# **QA**
<details>
  <summary>QA</summary>
  
- [Link to Platform Page](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing)
- - **When to start the process:** 
  - After Midpoint / Content Review
- Manual Browser Test Plans in Test Rails
- Unit Tests
  - Backend Developer creates the Unit Tests
- End to end Tests Cypress
- QA test cases 
- Regression Test Plan in Test Rails
</details> 


# **Midpoint Review**
<details>
  <summary>Midpoint Review</summary>
  
- [Link to Platform Page](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/midpoint-review)
- **When to start the process:** 
  - After Designer implements changes from design intent & content
- Schedule Meeting, use original Collab Cycle Ticket
  - Notify vs-platform-support meeting was scheduled and link to issue
- Link the following artifcats
- Finalized Prototypes
 - Add Accessibility Annotations
- Source of Truth
- Link to Sitewide Intake Ticket
</details>

# **Analytics Review**  (asynchronous)
<details>
  <summary>Analytics Review</summary>
  
- [Link to Platform Page](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/analytics-request)
- **Responsible:**  Product - after coding is completed
- [Create analytics ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban&labels=analytics-insights%2C+analytics-request%2C+collaboration-cycle%2C+collab-cycle-review%2C+gtm&template=analytics-implementation-and-qa-request-template.md&title=Analytics+Implementation+or+QA+Support+for+%5BTeam+Name+-+Feature+Name%5D)
  - **Add the following artificats**
     - Product Outline
      - Authenticated Test user Log ins
      - Staging URL
      - Document Page URL, interactions [Example](https://docs.google.com/spreadsheets/d/1krS0RLSjrT6VGmYk1sNF3GlypOSkXh9kJGKoCqUaFy4/edit#gid=0)
- **Create a DOMO Dashboard Reuest** [KPI DOMO Dashboard request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban&labels=analytics-insights%2C+analytics-request%2C+kpi-dashboard&template=analytics-request-kpi-dashboard.md&title=Analytics+KPI+dashboard+request+for+%5BTeam%5D)

</details>

# **Staging Review**
<details>
  <summary>Staging Review</summary>
    
- [Link to Platform Page](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/staging-review)
- **When to start the process:** 
  - After coding & QA is completed
  - Update original Collobration Cycle Ticket with the following:
    - Staging URL
    - [Staging User logins](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/26-4555/test%20accounts.md)
      - Create a github page with test users
    - IA Intake Ticket linked
    - Regression Tests [Example](https://dsvavsp.testrail.io/index.php?/milestones/view/1159)
    - End to end Tests (Cypress) FrontEnd Dev [Example](https://github.com/department-of-veterans-affairs/vets-website/pull/23501)
    - Unit Tests Back End [Example](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/forms_api/spec)
    - Test Plan [Example](https://dsvavsp.testrail.io/index.php?/milestones/view/1154)
- Accessibility Tests- [Open ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=briandeconinck&labels=a11y-testing&template=a11y-testing.yaml&title=Accessibility+Testing+for+%5BTeam+Name%2C+Product+Name%2C+Feature+Name%5D)
    - Assign Issue to Designer
    - Add label forms-audit-digitize so it shows up on our board
    </details>

# **Contact Center Review**  (asynchronous)
<details>
  <summary>Contact Center Review</summary>

- [Link to Platform Page](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/contact-center-review)
- **When to start the process:** 
  - After Midpoint & Content Review and sketch files are stable, you can create the product guide off the sketch files
- [Create a Contact Center Reivew Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jwoodman5%2C+kimberley2019&labels=contact+center%2C+collaboration+cycle%2C+collab-cycle-review&template=request-contact-center-review-template.md&title=Contact+Center+Review+for+%5BTeam+Name+-+Feature+Name%5D)
- Product Guide [Example](https://docs.google.com/document/d/1P8ReFnSNLd9qI3lgx1daHwwshqRl87s71NUxfkohBeo/edit)
- Product Guide needs to be in Word
- Send Guide 2 weeks prior to launch
    </details>

# **Privacy Readiness Review** (asynchronous)
<details>
  <summary>Privacy Readiness Review</summary>

- [Link to Platform page](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/privacy-security-infrastructure-readiness-review)
- **When to start the process:** 
  - When form is in Staging, QA Artifacts are completed and testing is complete
- [Sample Ticket](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/867)
  - [Create ticket](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/new?assignees=gary-fallon&labels=security-review&template=privacy-and-security-review.md&title=Readiness+Review+%5BTeam-Name%2C+Feature-Name%5D)
 - Product Outline - Product
- Architecture Diagram
    *   We chose to reuse the standard pattern of the forms library to build on top of the works of others. In addition we are submitting to Central Mail since we know that is an established process that works for forms today. We also are not storing any PII for security.
*   [Release Plan]([https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/26-4555/Release%20Plan.md](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/26-4555/Release%20Plan.md)) sample
    *   Responsible:  Product
*   [Sequence Diagram]([https://www.sketch.com/s/55cd7fae-eca1-4515-b460-0779f54eff60](https://www.sketch.com/s/55cd7fae-eca1-4515-b460-0779f54eff60))
*   Incident Response Plan
    *   The application points of contact are listed in the Product Outline linked below. We anticipate that any vulnerabilities etc that are found will follow the same process as any other application on VA.gov in terms of support ticket creation and escalation.
*   Data Flow Diagram
    *   The data flow is accurately portrayed by the architecture and sequence diagrams above. The data flows from the front end, through the back end, to Central Mail. No data is stored in VA.gov
*   API EndPoint Documentation
    *   POST /forms\_api/v1/simple\_forms [api doc](https://github.com/department-of-veterans-affairs/vets-api/blob/forms_api/26-4555-api-docs/modules/forms_api/app/swagger/forms_api/v1/simple_forms.rb)
    </details>
    
# **Release Plan** (Internal)
<details>
  <summary>Release Plan</summary>
    
- **Create a ticket in our repo to Notify the following users /channels**
  - Veteran-facing-forms 
  - Victories
  - Stakeholders
  - vsp-contact-center-support
  - OCTO Team
  - Melissa Rebstock (VEO)
  
- Notify VA Notify Team New Form is being released to implement Notification Confirmation Email

- Create go no go in github page under the form number [Example](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/26-4555/go%20live%20plan.md)
  - Set up a 10 min meeting with the team prior to launch
  
 - Update the react widget ticket with the form flipper code name from the developer
  - Notify sitewide-content-ai when you plan to release the form
  
- After launch, [request an accessibility audit from the VA 508 Office](https://depo-platform-documentation.scrollhelp.site/developer-docs/request-support-from-the-va-508-office#RequestsupportfromtheVA508office-AuditRequest). This is required even if no accessibility issues were found during the Staging Review.
  
 </details>

# **Monitoring** (Internal)
<details>
  <summary>Monitoring</summary>
  
  - **Monitor the form via** 
    - Analtyics
    - Domo Dashboard
    - DataDog
- Update veteran-facing-forms daily with updated submissions and errors
  - Open a ticket for developer to research errors
  </details>

# **Miscellaneous**
<details>
  <summary>Miscellaneous</summary>
  
- VetText discovery 
  [Github ticket](https://app.zenhub.com/workspaces/ivc-forms-652da2d3f0ae4c0016bfb109/issues/gh/department-of-veterans-affairs/va.gov-team/67829)
- Product directory update
- Public websites/content migration initiative alignment [Github ticket](https://app.zenhub.com/workspaces/ivc-forms-652da2d3f0ae4c0016bfb109/issues/gh/department-of-veterans-affairs/va.gov-team/67834)
</details>
