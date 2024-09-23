## Collab Cycle Submission Dates to meet the goal of a January 20th, 2025 Launch

### GA: 
Submit by October 15th (placeholder) to kick off requests and conversations

Mason, Oddball, will guide our team through this but will handle the bulk of the work. 
- Also include DOMO insights if needed and sync with GA
- Analytics Implementation Ticket: (https://github.com/department-of-veterans-affairs/va.gov-team/issues/90340)
- To request [GA4 Access](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=johnny-jesensky-adhoc%2C+Blivaditis&labels=access-request%2C+analytics-insights%2C+analytics-request&projects=&template=analytics-request-google-analytics-domo-access.md&title=Request+access+to+Google+Analytics+and%2For+Domo)
- **Expecations:**
  - we *expect* to have out of the box default tracking on page level views, devices, sessions, file uploads, etc. This should be viewable in staging, for those with GA4 access.
  - This is dependent on a tracking snippet being implemented in the code, which we can confirm by looking at the URL in GA4 staging (office hours week of Aug 10th) 
  - Once we confirm what default metrics are out there, we can continue convo on custom metrics and timeline. 

### Privacy, Security: (ASYNC)
Submit a request for review by December 20, 2024, and request a meeting on or around Jan 6th
[PSIR Readiness Ticket](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/1830)
- CRM team has to complete their testing wrapped up prior to us submitting a request for review. (@megan i will follow up on this with security folks - hopefully we can provide in advance) 
- Notes:
   - This occurs *after* staging review, however, if arch. is planned we can engage sooner to
   - Current Status:
     - Arch. Diagram Completed
     - [Initial Cyber Security Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/spikes/security-review-07-01-2024.md) Completed with documented potential risks 
    

### Staging: 
Submit a request for review by December 20, 2024, and request a meeting on or around Jan 6th
- CRM team has to complete their testing wrapped up prior to us submitting a request for review.
- Notes:
  - Staging can only occur after a code freeze and testing occurs. (We will want to confirm that we can go into staging review before or during CRM testing timeline) 
  - **Required:**
  -  **80% Test code coverage**
  - **All Scenarios documented and tested for E2E Testing**
     - Considerations:
     - Given the fast permutations of the form we have aligned *tentatively* on the following approach
     - We will be leveraging our Automated Testing for Unauth (Health & Life Insurance) and Authenticated users for Health.
     - We will be testing 120 permutations via a collection in a tool like insomnia or postman for confirming routing the Category/Topic/Subtopic to the correct queue.
  - **No Bugs:**
     - Considerations:
     - The team may go live with some non blocking issues, based on their severity and business justification.
     - Blocking issues are primarily accesibility based. CAIA/ Governance will determine the severity based on their own matrix. 
     - If a blocking issue is identified, then Governance will suggest an alternative fix.
     - If a non blocking issue is identified, together AVA and Governance will establish a timeline to correct the issue based on severity.
  - **Code Freeze**
     -  Code freeze must occur during and prior to the staging ticket being released.
  -  **All Requirements must be completed**
     - We can make a case that this is a larger release and we plan on having lean follow up releases where we will address additional features
   
  

 #### Product Guide: (for contact center use) 
      Start no later than November 25, 2024
      Complete by December 9th, 2024 for internal review
      **Next Steps:** Connect with Shelby for examples and what scenarios maybe expected. 

### Contact Center: (ASYNC)
4 weeks before launch - Submit by December 16th, 2024

### CAIA (contact us/redirect URL): 
2 weeks before launch, Submit January 3, 2025


Once good with VAPOs
Add to AVA calendar 
Add sprint 
Add to Epic as well 946
