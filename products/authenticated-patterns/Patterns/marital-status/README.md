# Product Outline: Marital Status Pattern

## Outcome Summary  
The **Marital Status pattern** will help Veterans clearly understand what marital status information VA needs, why it's needed, and how it affects their benefits and claims. This reusable design pattern will improve consistency across VA forms and ensure a supported, accessible, and clear experience when updating or confirming marital status.

## Problem Statement  
Veterans are often asked for marital status during benefits applications, dependency claims, and other workflows. However, the way this question is presented is inconsistent and confusing across forms. Key issues include:
- Lack of clarity about why the information is needed or how it’s used
- Poorly labeled or formatted response options that lead to errors
- Inconsistent or unclear instructions for uploading documentation
- Varying experiences across web and mobile

These issues lead to form abandonment, data errors, and increased support inquiries from Veterans.

## Desired User Outcomes  
- **Clarity and Confidence**: Veterans understand why they’re being asked for this information and how it affects their benefits.
- **Reduced Errors**: Improved design and content decrease the likelihood of form submission mistakes.
- **Equity and Inclusion**: Pattern reflects diverse relationship types and family structures.
- **Ease of Use**: Veterans can easily complete this section with clear, actionable guidance.

## Desired Business Outcomes  
- **Reduced Support Burden**: Fewer calls or support requests related to marital status questions.
- **Improved Data Quality**: More accurate and complete information submitted on forms.
- **Streamlined Development**: Designers and developers have a reusable resource for implementing this question.
- **Policy Alignment**: Supports consistent application of VA eligibility rules and data requirements.

## Discovery  
Our discovery phase will include:
- Auditing VA.gov forms that currently ask for marital status
- Reviewing documentation and policies that guide how this information is used
- Gathering input from VFF, VBA, and policy stakeholders
- Surfacing usability issues from Veteran feedback and support channels

## Assumptions and Risks  
- **Policy Constraints**: Legal or policy language may limit how options are worded or presented.
- **Technical Limitations**: Some backend systems may not support more flexible or inclusive data models.
- **Inconsistent Use Cases**: Not all teams may implement the pattern consistently without strong governance.
- **Varying Expectations**: Different teams may have conflicting views on the amount of instruction or documentation to include.

## Alignment with OCTO 2025 OKRs  

### O1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.
- **O1.1:** Improves satisfaction with forms by removing ambiguity and confusion.
- **O1.2:** Reduces time spent navigating or correcting marital status sections.
- **O1.3:** Ensures accuracy by guiding Veterans to complete the field correctly.

### O2: OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA.
- **O2.4:** Provides a reusable, standards-compliant component for non-OCTO teams.

### O3: OCTO teammates are empowered with the knowledge and resources they need to make sustained impact.
- **O3.3:** Supports teams with clear, consistent documentation and component guidance.

### O4: OCTO positively influences VA's ability to deliver software products and services faster, safer, and with higher quality.
- **O4.1:** Adds a reusable pattern that improves delivery practices across forms.
- **O4.3:** Enables teams delivering dependency or eligibility workflows to build with greater confidence and speed.

## What We’re Building  

### In-Scope  
- **Marital Status Pattern**
  - Design guidance and UI examples for capturing marital status
  - Content recommendations for help text, conditional logic, and documentation instructions
  - Figma design assets VA.gov and VA Mobile
  - Coded component for VADS storybook
- **Documentation**
  - VADS pattern page with usage guidelines, accessibility notes, and code snippets
- **Governance**
  - Guidance on when and how the pattern should be implemented

### Out-of-Scope  
- Changes to backend data models or eligibility logic
- Full redesign of existing forms unless partnered with owning teams
- Building upload functionality or redesigning the documentation process
- Conducting validation research (product teams will validate pattern usage when they adopt it)

## Measuring Success  

### Business Metrics  
- Increased pattern adoption across VFS forms  
- Reduced support tickets related to marital status questions  
- Higher percentage of forms submitted with complete and accurate marital status data  

### User Metrics  
- Improved clarity and comprehension in usability testing  
- Shorter completion time for marital status sections  
- Fewer error corrections or missing info on form submissions
