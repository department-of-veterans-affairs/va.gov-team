# Sign in rules

Last updated by @tygindraux: April 10, 2025

This document describes sign in rules and scenarios for Ask VA. We also plan to include key concerns with the current sign in process and potential remedies.

Jump to:
- [What we know about sign in rules for Ask VA](#what-we-know-about-sign-in-rules-for-ask-va)
- [Sign in scenarios](#sign-in-scenarios)
- [Key issues with sign in](#key-issues-with-sign-in)
- [Ideas to solve key issues](#ideas-to-solve-key-issues)
- [Recommendation](#recommendation)

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

## Sign in scenarios

> [!NOTE]
> This illustrates 10 scenarios but is not comprehensive of all scenarios. It only illustrates the start of the form.

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
3. **You feel deceived.** You might interpret that you don't need to sign in and then later feel deceived when you're required to sign in.
4. **Multiple clicks before you learn the rule.** If you start without signing in, it can take 2 to 4 pages before you learn you have to sign in.
5. **Start over.** You have to start completely over after signing in.
6. **You can choose general question incorrectly.** You can choose a general question incorrectly and move forward with submitting an unauthenticated inquiry, when you should have authenticated. Then an agent will (or should) require you to resubmit.
7. **Deciding between personal or general.** We don't have high confidence that people can make consistent decisions on whether their question is `about myself`, `about someone else` or is `a general question`.

## Ideas to solve key issues

We currently have 4 ideas to solve some of the potential user experience issues with sign in:

- [Idea 1: Sub task pattern](#idea-1-sub-task-pattern)
- [Idea 2: Sub task pattern simplified for general questions](#idea-2-sub-task-pattern-simplified-for-general-questions)
- [Idea 3: Sign in and technical issues is the only category that doesn't require sign in](#idea-3-sign-in-and-technical-issues-is-the-only-category-that-doesnt-require-sign-in)
- [Idea 4: All questions require sign in](#idea-4-all-questions-require-sign-in)

### Idea 1: Sub task pattern

An authenticated user lands on the home page. From the home page, they choose whether they have a `personal` or `general` question and click continue. If they choose `personal`, the next page requires them to sign in. If they choose `general`, the next page asks whether their question is about `Education benefits and work study` or `Debt for benefit overpayments and health care copay bills` or `Other`. If they choose `Education` or `Debt`, the next page requires them to sign in. If they choose `Other`, the next page suggests that they sign in and describes the benefits, but they can continue without signing in. 

> [!NOTE]
> This [prototype](https://www.figma.com/proto/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form---Phase-II-exploration?node-id=590-11102&t=hW7qcyMKpPVw4dG5-9&scaling=min-zoom&content-scaling=fixed&page-id=335%3A15380&starting-point-node-id=590%3A11102&show-proto-sidebar=1) illustrates this behavior.

#### Does this idea solve key issues?

|Problem to solve|Does this idea solve this problem?|
|:--|:--|
|**Some inquiries are not in your dashboard**|This problem will persist but it is unlikely to get worse.|
|**You feel deceived**|This would solve this problem because they will not be asked to stop and sign in.|
|**Multiple clicks before you learn the rule**|Although you still have to go through 2-4 pages, you're not answering questions that are part of your submission. You would not need to re-answer any of these questions and/or remember your answers.|
|**Start over**|This would solve this problem because you avoid needing to start over.|
|**You can choose general question incorrectly**|This problem will persist but it is unlikely to get worse.|
|**Deciding between personal or general**|This problem will persist in the form but happen up front and we think it is unlikely to get worse.|

#### Does this idea introduce new issues?

Sometimes a submitter would have to re-answer 'Who is your question about?' and/or their category after they sign in.

#### Does this idea require approval from business lines?

It would not require business line approval.

### Idea 2: Sub task pattern simplified for general questions

This idea is very similar to [idea 1](#idea-1-sub-task-pattern), however, it simplifies the path for general questions.

An authenticated user lands on the home page. From the home page, they choose whether they have a `personal` or `general` question and click continue. If they choose `personal`, the next page requires them to sign in. If they choose `general`, they start the form on the `Category` page.

> [!NOTE]
> This [prototype](https://www.figma.com/proto/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form---Phase-II-exploration?node-id=591-12291&t=pfHHzpjdyZdD9c89-9&scaling=min-zoom&content-scaling=fixed&page-id=335%3A15380&starting-point-node-id=591%3A12291&show-proto-sidebar=1) illustrates this behavior.

#### Does this idea solve key issues?

|Problem to solve|Does this idea solve this problem?|
|:--|:--|
|**Some inquiries are not in your dashboard**|This problem will persist but it is unlikely to get worse.|
|**You feel deceived**|This would solve this problem because they will not be asked to stop and sign in.|
|**Multiple clicks before you learn the rule**|You only have to go through 1 page before you learn that you need to sign in or you go straight into asking a general question.|
|**Start over**|This would solve this problem because you avoid needing to start over.|
|**You can choose general question incorrectly**|This problem will persist but it is unlikely to get worse.|
|**Deciding between personal or general**|This problem will persist in the form but happen up front and we think it is unlikely to get worse.|

#### Does this idea introduce new issues?

Sometimes a submitter would have to re-answer 'Who is your question about?' after they sign in.

You won't be able to submit general questions while authenticated. We would also expect a slight increase in unauthenticated inquiries, because we'd be allowing for unauthenticated `Education` and `Debt` now.

#### Does this idea require approval from business lines?

It requires business line approval from `Education` and `Debt` to allow unauthenticated general inquiries.

### Idea 3: Sign in and technical issues is the only category that doesn't require sign in

An authenticated user lands on the home page. From the home page, they need to sign in to ask a question, unless it's about `Sign in and technical issues.` If they choose to ask a question about `Sign in and technical issues`, they start on the topic page and they are not prompted to sign in. The `Who is your question about?` page is hidden from this path. If they choose to sign in, they can still ask a question about `Sign in and technical issues` as well as all other categories.

> [!NOTE]
> This [prototype](https://www.figma.com/proto/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form---Phase-II-exploration?node-id=597-17332&t=pfHHzpjdyZdD9c89-9&scaling=min-zoom&content-scaling=fixed&page-id=335%3A15380&starting-point-node-id=597%3A17332&show-proto-sidebar=1) illustrates this behavior.

#### Does this idea solve key issues?

|Problem to solve|Does this idea solve this problem?|
|:--|:--|
|**Some inquiries are not in your dashboard**|This problem will persist but it is unlikely to get worse.|
|**You feel deceived**|This would solve this problem because they will not be asked to stop and sign in.|
|**Multiple clicks before you learn the rule**|You go straight into asking a question (either after signing in or without).|
|**Start over**|This would solve this problem because you avoid needing to start over.|
|**You can choose general question incorrectly**|Although people could choose to use the Sign in category option to ask about something else, this feels much less likely.|
|**Deciding between personal or general**|It would be simpler to choose whether your question is about `Sign in and technical issues` or something else, compared to choosing between `personal` or `general`. And this problem will persist in the authenticated version of the form, because we still need to know what information to ask for based on their response, but it is unlikely to get worse.|

#### Does this idea introduce new issues?

You can no longer ask a general question without signing in, unless it's about `Sign in and technical issues`. Also, people may submit unauthenticated inquiries that are about `Sign in and technical issues` but involve sensitive information. 

#### Does this idea require approval from business lines?

It requires business line approval to only allow authenticated inquiries from all business lines, apart from `Sign in and technical issues`.

### Idea 4: All questions require sign in

An authenticated user lands on the home page. They are prompted to sign in to begin.

> [!NOTE]
> This [prototype](https://www.figma.com/proto/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form---Phase-II-exploration?node-id=597-15844&t=Dv9q7gqeTeBTbMLP-9&scaling=min-zoom&content-scaling=fixed&page-id=335%3A15380&starting-point-node-id=597%3A15844&show-proto-sidebar=1) illustrates this behavior.

#### Does this idea solve key issues?

|Problem to solve|Does this idea solve this problem?|
|:--|:--|
|**Some inquiries are not in your dashboard**|This would solve this problem.|
|**You feel deceived**|This would solve this problem.|
|**Multiple clicks before you learn the rule**|This would solve this problem.|
|**Start over**|This would solve this problem.|
|**You can choose general question incorrectly**|This would solve this problem.|
|**Deciding between personal or general**|This problem will persist in the form, because we still need to know what information to ask for based on their response, but it is unlikely to get worse.|

#### Does this idea introduce new issues?

If you're having trouble signing in and have a question about `Sign in and technical issues`, you're stuck.

#### Does this idea require approval from business lines?

It requires business line approval from all business lines apart from `Education` and `Debt`.

## Recommendation

We recommend implementing [idea 3](#idea-3-sign-in-and-technical-issues-is-the-only-category-that-doesnt-require-sign-in), because:

- It doesn't take multiple clicks to learn whether or not you need to sign in.
- You don't need to start over at any point and therefore you don't have any repeating questions such as 'Who is your question about?' or 'Category' after sign in.
- It's simpler to explain the difference between a sign in related question or otherwise; compared to the difference between personal or general questions.
- People will are less likely to feel deceived or confused about when they should sign in or not.
- Although people could choose to use the `Sign in and technical issues` category option to ask about something else, this workaround feels much less likely.

This requires business line approval to only allow authenticated inquiries from all business lines except `Sign in and technical issues`.

### Back up strategy

If it's not feasible to pursue business line approval right now, then we recommend [Idea 1: Sub task pattern](#idea-1-sub-task-pattern) as it's the only option that does not have this constraint. We also think it's worth exploring the technical feasibility of temporarily storing responses so that a submitter doesn't have to repeat steps after sign in. We also recommend analyzing production data to understand whether people are consistently choosing the right option for 'Who is your question about?'
