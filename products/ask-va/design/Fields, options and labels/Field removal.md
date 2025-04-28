# Field removal
Ask VA VA.gov Team

Last updated by @tygindraux: April 28, 2025

This document lists the fields we have removed or are removing from Ask VA.

Jump to:
- [Reason you're contacting us](#reason-youre-contacting-us)
- [Gender](#gender)
- [Pronouns](#pronouns)
- [VA employee](#va-employee)
- [Veteran's Service Start Date](#veterans-service-start-date)
- [Veteran's Service End Date](#veterans-service-end-date)
- [Veteran's Claim Number](#veterans-claim-number)

## Reason you're contacting us

This field required submitters to choose one of the following reasons for contacting VA:
- Compliment
- Question
- Service Complaint
- Suggestion
- Town Hall
- Other

### Current status

This field was removed from Ask VA in June 2024. The Change Control Board voted in favor of removing this field from Ask VA.

### Why we removed this field

- Many [business lines didn't use this information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Business%20line%20engagement/Feedback%20(initial)%20on%20form%20fields.md#tell-us-the-reason-youre-contacting-us-required).
- It was often answered incorrectly. For example:
  > This inquiry was submitted as a compliment.
  > 
  > "I need to obtain the transferred benefits my father gave me for college. EVERY attempt for the last [number] days has failed. I can’t even get an account for the VA.gov website. I have spoken to at least [number] people on the helpline to get the benefits and no one has helped me. There must be a way to get these benefits transferred to me so I can register for school. My father is literally about to kick me out of the house because he thinks I am not trying hard enough. Will somebody please help.”

  > This inquiry was submitted as a service complaint.
  > 
  > "Hypertension caused by Agent Orange exposure in Vietnam in [year]. Condition worsening. Would like to apply for benefits under new law.”
- Most people chose “Question". From a sample, we found that 84% of inquiries were 'Questions' and 10% were 'Other', with only 6% falling into the other 4 options.
- We heard this field may be important to certain stakeholders, particularly those who were involved in getting `Town Hall` added. However, Kathleen Reavy confirmed with Debi Bevins (Office of the Secretary) that they no longer need the `Town Hall` option.

## Gender

This field was optional and allowed a free-text response. The form asked for the submitter's gender and sometimes the dependents, too.

### Current status

This field was removed from Ask VA in June 2024. The Change Control Board voted in favor of removing this field from Ask VA. 

### Why we removed this field

- Veterans didn't understand why VA needed to know their gender identity to answer their question. Most of the Veterans we talked to would choose the “Prefer not to answer” option.
- 38% of inquiries have gender data (from Nov 2023 to Jan 2024 data). Of these inquiries, MPI provides 99% of the data in CRM. Submitters provide less than 1% of gender data.
- The AVA CRM already gets data from the Master Person Index (MPI) when there's a match with Veteran data. MPI is the authoritative identity service within VA for establishing, maintaining, and synchronizing identities for VA persons. When an analyst generates a report using the Advanced Find tool in CRM, it contains gender data from MPI.
- Gender for Veteran dependents are also not in MPI. However, in early March, we confirmed that we only need to know the Veteran's gender to meet the CWV's needs. So we don't need gender data for dependents.
- [Read more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Gender.md).

## Pronouns

This field was optional and allowed a one-character free-text response. The form asked for the submitter's pronouns.

### Current status

This field was removed from Ask VA in February 2025 in response to an [Executive Order](https://www.whitehouse.gov/presidential-actions/2025/01/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal-government/).

### Why we removed this field

- This [Executive Order](https://www.whitehouse.gov/presidential-actions/2025/01/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal-government/) required us to remove this field.
- However, we had previously recommended this field be removed, namely because Ask VA was one of few online VA forms that asked for pronouns and Veterans had negative reactions to this field.
- [Read more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Pronouns.md).

## VA employee

This field was optional and allowed a submitter choose between 'yes' or 'no,' with 'no' being default pre-selected. If a submitter selected 'yes,' then the inquiry was flagged as sensitive in CRM and the agent had to acknowledge that they're opening sensitive information before they could continue.

### Current status

This field was removed from Ask VA in early 2024. We confirmed with the CRM team that this field did not require a vote from the Ask VA Change Control Board.

### Why we removed this field

- Submitters think the answer to this question affects how agents will respond to them. It also seems irrelevant. See [findings from our research study in January 2024](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Submit%20an%20inquiry/Round%201/Findings.md#finding-1-veterans-past-experiences-and-trust-in-va-impacts-how-they-perceive-questions-and-what-information-theyre-comfortable-sharing)
> 'Are you a VA employee?' Why this is here? [...] Because it means if you're [an] employee, instead of waiting 6 months to get an answer then [they] answer you right away?
> 
> I don't know if you're precluded from being seen at the VA if you're an employee there, I don't know. Not sure on that one.
>
> I'm trying to get an appointment here for a hearing aid. A hearing test. What does that have to do with whether I work for the VA or not?
- We don't need this data from submitters. We can pull pull the ICN from our authentication partners. Then MPI (already integrated with PATS-R) will tell CRM if a submitter is an employee. We can display the "Employee" designation for the agent to see and acknowledge.
- This does not have a negative impact on level of service or reporting. No line of business is using Ask VA to report on sensitive record access.
- Unauthenticted users do not need to provide this field because we can't verify who the submitter is anyway.

## Veteran's Service Start Date

This field was optional and asked for the Veteran's service start date.

### Current status

This field was removed from Ask VA in early 2024. We confirmed this change with each business line individually.

### Why we removed this field

- We confirmed that [business lines don't need this information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/10-2023%20Feedback%20on%20military%20fields.md).

## Veteran's Service End Date

This field was optional and asked for the Veteran's service end date.

### Current status

This field was removed from Ask VA in early 2024. We confirmed this change with each business line individually.

### Why we removed this field

- We confirmed that [business lines don't need this information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/10-2023%20Feedback%20on%20military%20fields.md).

## Veteran's Claim Number

This field was optional and it asked for the Veteran's Claim Number.

### Current status

This field was removed from Ask VA in early 2024. We confirmed this change with each business line individually.

### Why we removed this field

- We confirmed that [business lines don't need this information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/10-2023%20Feedback%20on%20military%20fields.md).
