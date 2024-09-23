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
- [Third party reps and alternate signers](#third-party-representatives-and-alternate-signers)

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

### Question 3: How can we present optional vs. required document uploads?
- Use "optional" and "required"?
- Use "It's your choice whether you want to [answer or upload]"?

### Other open questions:
- When to use "file" vs "document" vs "evidence" vs "records." Consider adding guidance to style guide describing each scenario. For example, "Records and documents turn into evidence when they're attached to a claim"

## Hint text
Form teams are adding hint text to form screens in varying ways, and VADS doesn't provide detailed guidance for when and how to use it.

Questions:
- What does VADS consider "hint text"?
- How can we better define which types of form questions require hint text?
- Do we need to define 2 distinct types: how and why? "How" hint helps user understand what to enter. "Why" hint helps user understand why VA needs the info.
- When should "why" hint text be an additional info component with header "Why we need this information"? When it's over a certain character count?

- "Why we need this" 

## Prefill alerts, save in progress, and updating info
VADS doesn't currently connect guidance for prefill alerts to the the ["Know how information is updated"](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated) pattern.

**Questions**
- Do we need alerts on the static page, within the form flow, or both?
- Should prefill alert **always** be paired with content stating how info is updated in VA profile?
- Forms that add or change questions in online version — how and where do we tell users with in progress forms about this?
    - Will users with saved in-progress forms be included in the incremental launch? Or will they be presented with the updated form only after it's released to 100% of users?
    - What happens for users who are completing an in-progress form when the updated form is released to 100% of users? Will they be able to submit the older version of the form?

**Case studies**
- 526EZ (for toxic exposure update)
    - Updated the online form to include optional questions
    - Didn't include alert on static page, since questions were optional
    - Dropped in-progress users into their last saved step
    - Presented an alert to in-progress users (prompting to answer new questions in an upcoming section or go back to answer new questions)
- 526EZ (for MST and PTSD updates)
- 527EZ
- 530EZ
    - "For the 530, they allowed those users to continue their form without interruption. But they initially wanted to show an error message that would prompt them to go back to the beginning. We also explored/talked about taking the form offline for a few hours before the updates went live, but we ultimately decided against that because of the larger amount of unauth users who use the form."
- 1010EZ

**Content recommendation**
> [Alert]
> 
> [Header] Your application is in progress and was last saved on [date] at [tine]
> 
> You should know that we updated our online form. **If you started applying online before [date],** we have some new questions for you to answer. And we changed some questions, so you may need to provide certain information again.
> 
> Select **Continue your application** to use our updated form, or come back later to finish your application.
>
> Your application with expire on **[date] at [time]**.
>
> [Button] Continue your application
> 
> [Link] Start a new application

**Design system recommendation**
- Maybe a pattern? Help users to understand how online form updates affect their in-progress form.

## Third-party representatives and alternate signers

**General questions**
- What are all the ways that people are currently filling out forms on behalf of someone else?
    - Signing in as the person and pretending to be the person
    - Signing in as yourself and telling the form that you're doing it on behalf of someone else
    - Filling out PDF and adding alternate signer info at the end
    - Not signing in to an auth-optional form and simply pretending to be the person

- What does a form need to do to support an alternate signer?
    - Collect their contact info, or only name?
    - Require them to submit supporting forms or have those forms already on file? (And how can we or the signer check if the correct form is on file?
    - Should they identify alternate signer up front and use it to split user flow, or only at the end of form?
        - Does need for tailored alternate signer experience depend on chance that person with the claim is dead or unable to sign the form?
        - For forms where this is not as likely, should we default to simple single user story with alternate signer questions at the end?
     
**Power of attorney and accredited reps**
- We recently learned that accredited reps have limited power of attorney for VA purposes
- Do "power of attorney" and "accredited rep" always have the same meaning in VA forms and pages? Which term should we use when talking about who is signing on behalf of a Veteran?

## Forms that update to new version when users already have saved in progress forms

Questions: 
- Is it a product decision whether we need to alert users with in progress forms that the changes are happening?
- How does this affect processing of the form on the backend, if we don't force people to start over?
- If the updates are optional questions but may affect the decision on the form, do we have to alert people?
- Maybe a general alert like "We're updating this form right now."
- Should saved in progress forms always start at the beginning if there was a substantive update?
- What counts as a substantive update to the form that would trigger this?
- Provide an option to skip full review of the form?

2 scenarios:
- Required new questions that affect the decision on benefits — always bring person to first page or otherwise force them to see and answer the new questions
- Optional new questions that may or may not affect decision on benefits — give user a choice on whether or not to review new questions


