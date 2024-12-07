# New Confirmation Page & Primary Path Received Email
Submission Experience 1.0


## Purpose
This document outlines Submission Experience 1.0, our first major release focused on helping Veterans feel more confident when submitting disability claims on VA.gov by making the process clearer and more reliable.


## Background
Veterans submit approximately 35,000 disability compensation claims monthly through VA.gov. Our Q1 2024 Veteran shadowing research revealed that after clicking "submit," Veterans experience confusion, lack of clarity, and gaps in information during the submission process.


## Problem or Opportunity
The current submission process creates uncertainty for Veterans at several key points. When clicking "submit," they encounter vague timelines about their application's progress. The confirmation page compounds this confusion with ambiguous messaging about submission status, sometimes displaying warning and error alerts that don't match what's actually happening with their claim. Making matters more complex, Veterans receive a "Received" email when ancillary jobs are still running, not when their Form 526 is actually established in the Veteran's eFolder. This premature notification can lead Veterans to believe their claim is fully received when it's still being processed.


## Proposed Solution
We're implementing key improvements to both the confirmation page and email communications. For the confirmation page, we're aligning with the VFF template by updating the submit button language to better match Veterans' expectations. The loading spinner will now clearly communicate "this may take up to 30 seconds," helping set accurate timeline expectations. Once submitted, Veterans will see a green success alert indicating "your submission is in progress", along with a clear process list and guidance on what to expect next. We're removing the potentially confusing yellow "taking too long" and red "We're sorry..." alerts, replacing them with more accurate status information. The confirmation page will use "date submitted" instead of "date initiated" to better match Veterans' mental model, and will improve the information hierarchy under the "what to expect" section for better clarity.

For email communications, we're making a fundamental change to ensure Veterans receive notifications when their 526 form is actually established in their eFolder. This provides a more truthful representation of submission success, building Veteran confidence in VA. These emails will use the VA Notify template and follow CAIA plain language guidance to ensure clear, consistent communication.

Key improvements include:

- Streamlined confirmation page following VFF standards
- Email timing aligned with form establishment in the eFolder
- Clear, consistent messaging across all touchpoints


## In Scope
We're focusing on specific, achievable improvements:

- Confirmation page updates aligned with VFF template
- Plain language & CAIA approved content updates
- Removal of incorrect warning and error alerts
- Loading page message updates
- Email timing optimization


## Out of Scope
To maintain clear boundaries for this release, we're not including:

- Changes to MyVA
- Changes to Claim Status Tool
- Changes to 526 and ancillary form processing
- Changes to total failure email workflow
- "Received" emails for backup path submissions
- "Submitted" emails


## Success
This first release focuses on three key outcomes that will improve the submission experience for Veterans:

1. Veterans will better understand their claim's status because we're communicating clearly about what's happening at each step. The revised confirmation page shows submission progress truthfully, and Veterans receive email confirmation only after their 526 appears in their eFolder.

2. We'll build greater confidence in the submission process by providing consistent messaging about next steps and timelines. When Veterans know what to expect and see those expectations met, it reinforces trust in VA.

3. Fewer duplicate claims may be submitted since Veterans will have accurate, timely information about their submission status. By removing confusing alerts and providing clear guidance about processing times, we help Veterans avoid the uncertainty that can lead to resubmission.

We'll track our progress through:

- Google Analytics tracking of submission events
- VA Notify email delivery rates
- Comparison of duplicate submission rates against our baseline


## Risks & Challenges
We've identified these challenges:

- Email delivery timing depends on eFolder document establishment
- Current infrastructure could fail to deliver a received email


## Plan
For this release, we're taking a careful, controlled approach to deployment. Version 1.0, "New confirmation page and primary path received email," will use feature flags to safely introduce changes to production.

We've engaged with the VA Collaboration Cycle, working closely with Platform stakeholders to validate our approach. Before launching, we'll go through Staging Review to ensure we meet all platform requirements and quality standards. We're implementing VFF template alignment, updating the confirmation page content and structure, and optimizing email timing based on VBMS establishment.

Our rollout will look like this:

- Platform quality checks through Staging Review
- 508 Compliance Review
- Initial deployment behind feature flags
- Controlled release to users
- Continuous monitoring of analytics and feedback

This approach gives us the flexibility to adjust quickly if needed while ensuring a stable, quality experience for Veterans.


## Guiding Principles
Our work adheres to established standards:

- VFF template standards for form UX
- VA Notify requirements for email communications
- CAIA plain language guidelines
- Standard VA.gov accessibility requirements
