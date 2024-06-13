# VA content brief for forms

Created by the sitewide content team for teams working on digitizing VA forms. This brief will capture content variations in online form patterns and components that don't meet the use case for an experimental design or that we aren't yet ready to propose in the [experimental design process](https://design.va.gov/about/contributing-to-the-design-system/experimental-components-and-patterns).

**Have questions or feedback on this brief or want to add something?**
- Send us a slack in #sitewide-content-ia.

## Sections

- [Overview](#overview)
- [Labels and errors to standardize](#labels-and-errors-to-standardize)
- [Upload screens](#upload-screens)
- [Hint text](#hint-text)
- [Prefill alerts and updating info](#prefill-alerts-and-updating-info)

## Overview

Speaking plainly, compassionately, and consistently across VA helps us build trust with Veterans, service members, and their family members. As we continue to move toward an omnichannel experience and multilingual content, consistency becomes even more important.  

This brief will help forms teams create content that aligns with the VA.gov voice and content standards and that uses consistent language for content that appears in multiple forms. It will also help us all track content decisions so we can all stay aligned from discovery through post-launch iterations. This is a living document. 

[Read our top 10 plain language standards in the VA.gov content style guide for more](https://design.va.gov/content-style-guide/content-principles/plain-language)

## Labels and errors to standardize
Sitewide CAIA is creating a list of form field labels with related hint text and error messages. We're starting with the fields in the mock patterns library. We'll collect additional fields here to standardize in the future.

## Upload screens
Form teams are using several different approaches to a file upload pattern. 
VADS components and patterns:
- [File input component](https://design.va.gov/components/form/file-input)
- [Ask for files pattern](https://design.va.gov/patterns/ask-users-for/files)

### Question 1: Ask for files mid-flow vs. at the end of the form?
Examples of mid-flow **and** end of flow file upload: 
- [530 burial allowance](https://www.figma.com/file/jpJQSCKiGegacdW4RH5uQB/Burial-530-2024-Updates-MVP?type=design&node-id=0-3489&mode=design&t=jg5rnADWwfXSZwQS-0) asks for DD214 mid-flow and all other files at the end
- [1010D CHAMPVA](https://www.figma.com/file/HVQQBvkS9DJlNVehCwva4m/10-10d-Midpoint-Review?type=design&node-id=0-1&mode=design&t=nxuvEX0dZ9CSwBQe-0) asks for all files twice — once mid-flow after related questions, and again at the end of the flow
- [example] asks for all files at the end

**Research readout from 526 shadow study**
- Participants didn't have the docs prepared before they started, and said they would want to gather them first.
- Form didn't let them continue past mid-flow doc upload screens to answer the rest of the questions, and this led to form abandonment.

**Suggested approach to discuss:** 
- List required documents on the static entry page and form intro page to help people gather what they need before starting the form.
- Ask for all documents at the end of the form flow. Don't interrupt the form questions with required document upload screens.
- If an answer triggers the need for another document, tell the user that we'll ask for that document at the end, but don't require upload until the end.
- When you ask for documents at the end, dynamically request only the documents each user needs to provide, based on their answers.

### Question 2: One-file-per-page upload screens vs. multi-file upload screens?

### Other open questions:
- How to handle optional files
- When to use "file" vs "document" vs "evidence" vs "records." Consider adding guidance to style guide describing each scenario. For example, "Records and documents turn into evidence when they're attached to a claim"

## Hint text
Form teams are adding hint text to form screens in varying ways, and VADS doesn't provide detailed guidance for when and how to use it.

Questions:
- What does VADS consider "hint text"?
- How can we better define which types of form questions require hint text?
- Do we need to define 2 distinct types: how and why? "How" hint helps user understand what to enter. "Why" hint helps user understand why VA needs the info.
- When should "why" hint text be an additional info component with header "Why we need this information"? When it's over a certain character count?

- "Why we need this" 

## Prefill alerts and updating info
VADS doesn't currently connect guidance for prefill alerts to the the ["Know how information is updated"](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated) pattern.

**Questions:**
- Should prefill alert **always** be paired with content stating how info is updated in VA profile?

## Alternate signer

Questions:
- What are all the ways that people are currently filling out forms on behalf of someone else?
- Signing in as the person and pretending to be the person
- Signing in as yourself and telling the form that you're doing it on behalf of someone else
- Filling out PDF and adding alternate signer info at the end
- Not signing in to an auth-optional form and pretending to be the person

- What does a form need to do to support alternate signer?
- Collect their info
- Require to submit or have on file an alternate signer or accredited rep form?
- Should they identify alternate signer up front or at the end of form?

- Does need for tailored alternate signer experience depend on chance that person with the claim is dead or unable to sign the form?
- For forms where this is not as likely, should we default to simple single user story with alternate signer questions at the end?
