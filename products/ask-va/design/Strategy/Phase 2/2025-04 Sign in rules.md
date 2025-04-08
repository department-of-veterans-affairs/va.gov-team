# Sign in rules

Last updated by @tygindraux: April 8, 2025

This document describes sign in rules and scenarios for Ask VA. We also plan to include key concerns with the current sign in process and potential remedies.

Jump to:
- [What we know about sign in rules for Ask VA](#what-we-know-about-sign-in-rules-for-ask-va)
- [Start of the form: Sign in scenarios](#start-of-the-form-sign-in-scenarios)
- [Key issues with sign in](#key-issues-with-sign-in)

## What we know about sign in rules for Ask VA

### A different user experience

#### Authenticated experience

- We can prefill some information and save a user time.
- After they submit, their inquiry is populated in their 'dashboard' or 'inbox,' where they can review all past inquiries that they submitted while signed in.
- From their 'inbox', they can communicate securely with VA.
- They still receive notifications via email, but not containing details from their submission or VA's response.

#### Unauthenticated experience

- People have the option to start asking a question without signing in.
- If a user chooses a category or topic that requires sign in, they will be interrupted and asked to sign in.
- If a user says their question is about 'myself' or 'someone else,' they will be interrupted and asked to sign in.
- Otherwise, they'll be able to carry on and submit their question while they're unauthenticated.
- They'll receive their response from VA and respond back to VA over email, rather than through their Ask VA 'inbox.'
- They will not have access to an 'inbox' while unauthenticated, and if they do sign in, they can only review inquiries in their 'inbox' that they submitted while they were signed in.

### Legacy portal sign in requirements

The legacy portal (ask.va.gov) required submitters to sign in if their question relates to a particular category and/or topic:
- `Education benefits and work study` required sign in for all questions.
- `Debt for benefit overpayments and health care copay bills` requires sign in for all questions.
- `Benefits issues outside the U.S.` required sign in for all questions if your topic is `Education benefits and work study`.

Otherwise, submitters could submit unauthenticated inquiries regardless of inquiry type. Inquiry type refers to whether they select, 'About me, the Veteran', 'For the dependent of a Veteran', 'On behalf of a Veteran', or a 'General question.'

The legacy portal supported sign in partners (through IAM), which (at the time) was, ID.me, Login.gov, DS Logon and My HealtheVet.

### Updated sign in requirements on VA.gov

When we moved to VA.gov, the sign in requirements became slightly more strict. 

We still require sign in for the same particular categories and topics:
- `Education benefits and work study` required sign in for all questions.
- `Debt for benefit overpayments and health care copay bills` requires sign in for all questions.
- `Benefits issues outside the U.S.` required sign in for all questions if your topic is `Education benefits and work study`.

We pull category and topic rules from the inquiries endpoint so it's regularly updating, because Ask VA Admins have the ability to change these rules at any point (including outside of a release schedule).

We also require sign in based on inquiry type. If an inquiry is about 'Myself' or 'Someone else', in other words, it's not a 'General question,' sign in is required. This rule was added because when there's the potential to exchange PII, we need them to authenticated so we know who we're communicating with and can disclose information to the right person.

VA.gov supports sign in partners (through IAM), which currently includes, ID.me, Login.gov and DS Logon. We only treat LOA3 credentials as authenticated, so if you sign in with an LOA1 account, you will be treated as if you are not signed in and prompted to verify your identity (to elevate your credential).

### Why the GI Bill team requires sign in 

For additional context on sign in rules, we asked the GI Bill team why sign in is always required for `Education benefits and work study` inquiries. They need to know they're communicating with the person that they say they are because they're exchanging PII. This also applies to SCOs or other business submitters who submit on behalf of Veterans. They they have to provide Veteran SSNs in order for the GI Bill team to answer their questions. 

They don't see sign in rules changing over time, "We’re moving away from any unauthenticated interactions with users." When they get unauthenticated inquiries, because an inquiry is re-routed to them, they ask the submitter to re-submit their question in order for them to answer it.

## Start of the form: Sign in scenarios

> [!NOTE]
> This illustrates 10 scenarios but is not comprehensive of all scenarios.

![key](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/2025-04-Start-the-form-key.png)

### Scenario 1

#### Land on Ask VA while authenticated with LOA3

![scenario-1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/2025-04-Start-the-form-scenario-1..png)

### Scenario 2

#### Land on Ask VA while authenticated with LOA1 and choose to verify identity before asking a new question

![scenario-2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/2025-04-Start-the-form-scenario-2.png)

### Scenario 3

#### Land on Ask VA while unauthenticated and ask a question that does not require sign in

![scenario-3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/2025-04-Start-the-form-scenario-3..png)

### Scenario 4

#### Land on Ask VA while unauthenticated and sign in to LOA3 before asking a new question

![scenario-4](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/2025-04-Start-the-form-scenario-4.png)

### Scenario 5

#### Land on Ask VA while unauthenticated and sign in to LOA1 then choose to verify identity before asking a question

![scenario-5](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/2025-04-Start-the-form-scenario-5.png)

### Scenario 6

#### Land on Ask VA while unauthenticated and sign in to LOA1 before asking a question that does not require sign in

![scenario-6](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/2025-04-Start-the-form-scenario-6.png)

### Scenario 7

#### Land on Ask VA while unauthenticated and ask a question that requires sign in because of the category

![scenario-7](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/2025-04-Start-the-form-scenario-7.png)

### Scenario 8

#### Land on Ask VA while unauthenticated and ask a question that requires sign in because of the topic

![scenario-8](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/2025-04-Start-the-form-scenario-8.png)

### Scenario 9

#### Land on Ask VA while unauthenticated and ask a question that requires sign in because of who your question is about

![scenario-9](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/2025-04-Start-the-form-scenario-9.png)

### Scenario 10

#### Land on Ask VA while authenticated with LOA1 and ask a question that requires sign in because of the category

![scenario-10](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/2025-04-Start-the-form-scenario-10.png)

## Key issues with sign in

This list captures potential user experience issues with the current sign in process on VA.gov.

1. **Some inquiries are not in your dashboard.** If you submit an inquiry while unauthenticated, it will never populate in your 'dashboard' or 'inbox.' If you authenticate in the future, it may not be clear why the inquiry is missing from your 'dashboard.'
2. **You feel deceived.** You might interpret that you don't need to sign in and then later feel deceived when you're required to sign in.
3. **Multiple clicks before you learn the rule.** If you start without signing in, it can take 2 to 4 pages before you learn you have to sign in.
4. **Start over.** You have to start completely over after signing in.
5. **You can choose general question incorrectly.** You can choose a general question incorrectly and move forward with submitting an unauthenticated inquiry, when you should have authenticated. Then an agent will (or should) require you to resubmit.
6. **Deciding between personal or general.** We don't have high confidence that people can make consistent decisions on whether their question is 'about myself or someone else' or is general.

## Ideas to solve key issues

We currently have 4 ideas to solve some of the potential user experience issues with sign in.

### Sub-task pattern

|Problem to solve|Will this approach solve this problem?|
|:--|:--|
|**Some inquiries are not in your dashboard**|This problem will persist but it is unlikely to get worse.|
|**You feel deceived**|Although you have to go through 2-4 pages in the sub-task pattern as well, you're not answering question that you would need to re-answer and/ or remember the answers to.|
|**Multiple clicks before you learn the rule**|Although you have to go through 2-4 pages in the sub-task pattern as well, you're not answering question that you would need to re-answer and/ or remember the answers to.|
|**Start over**|The sub-task pattern would mean you avoid needing to start over.|
|**You can choose general question incorrectly**|This problem will persist but it is unlikely to get worse.|
|**Deciding between personal or general**|This problem will persist but it is unlikely to get worse.|

We don't foresee this idea introducing new issues.

### Sub-task pattern with expedited general questions

### Sign in and technical issues is the only category that doesn't require sign in

### All questions require sign in

