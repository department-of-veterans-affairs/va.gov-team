# Field removal
Ask VA VA.gov Team

Last updated by @beckyphung: June 25, 2024

## List of fields to remove
- [Reason you’re contacting us](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20removal.md#reason-youre-contacting-us)
- [Gender](#gender)
- [VA employee](#va-employee)
- [Veteran's Service Start Date](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20removal.md#veterans-service-start-and-end-dates)
- [Veteran's Service End Date](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20removal.md#veterans-service-start-and-end-dates)
- [Veteran's Claim Number](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20removal.md#veterans-claim-number)

## Reason you're contacting us
This field is currently required. It asks, 'Tell us the reason you're contacting us?' and submitters can choose from a list of options: Compliment; Question; Service Complaint; Suggestion; Town Hall; Other. 

We recommend removing this field because:
- We learned that many [business lines don't use this information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Business%20line%20engagement/Feedback%20(initial)%20on%20form%20fields.md#tell-us-the-reason-youre-contacting-us-required).
- From a cursory analysis of past inquiries, we think it's often answered incorrectly. For example:
> Submitted as a compliment:
> "I need to obtain the transferred benefits my father gave me for college. EVERY attempt for the last [number] days has failed. I can’t even get an account for the VA.gov website. I have spoken to at least [number] people on the helpline to get the benefits and no one has helped me. There must be a way to get these benefits transferred to me so I can register for school. My father is literally about to kick me out of the house because he thinks I am not trying hard enough. Will somebody please help.”

> Submitted as service complaint:
> "Hypertension caused by Agent Orange exposure in Vietnam in [year]. Condition worsening. Would like to apply for benefits under new law.”
- Most people choose “Question". From a sample, we found that 84% of inquiries were 'Questions' and 10% were 'Other', with only 6% falling into the other 4 options.
- The Platform/Governance team has given us feedback that this field is confusing in the context of Ask VA:
> Brian, Accessibility Lead: "I was a thrown off with the phrasing of the options in the "Tell us the reason" radio buttons. Everything else on the page says "Your question" and "What's your question," then there's this follow-up question that suggests you could be providing something that's not actually a question. It seems like a strange way to present it and might lead to confusion.
- We heard this field may be important to certain stakeholders, particularly those who were involved in getting `Town Hall` added. However, Kathleen Reavy confirmed with Debi Bevins (Office of the Secretary) that they no longer need the `Town Hall` option.

### Next step
- The CCB voted to remove this field. See the results [in this GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/6-2024%20Change%20Control%20Board%20outcomes.md).

## Gender
This field is currently optional and allows a free-text response. The form asks for gender from submitters and sometimes dependents.

We recommend removing this field because:
- Veterans didn't understand why VA needed to know their gender identity to answer their question. Most of the Veterans we talked to would choose the “Prefer not to answer” option.
- 38% of inquiries have gender data (from Nov 2023 to Jan 2024 data). Of these inquiries, MPI provides 99% of the data in CRM. Submitters provide less than 1% of gender data.
- The AVA CRM already gets data from the Master Person Index (MPI) when there's a match with Veteran data. MPI is the authoritative identity service within VA for establishing, maintaining, and synchronizing identities for VA persons. When an analyst generates a report using the Advanced Find tool in CRM, it contains gender data from MPI.
- Gender for Veteran dependents are also not in MPI. However, in early March, we confirmed that we only need to know the Veteran's gender to meet the CWV's needs. So we don't need gender data for dependents.

View our complete recommendation, which includes findings from January 2024 usability testing, [in this GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Gender.md).

### Next step
- The CCB voted to remove this field. See the results [in this GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/6-2024%20Change%20Control%20Board%20outcomes.md).

## VA employee
This field is currently optional, but it has a default prefilled "No" response. It isn't asked for "About Me, the Veteran." It also allows a "Yes" answer. If an inquiry is flagged as a sensitive record because they answered "Yes" to the employee question, then the agent sees a modal that asks them to acknowledge that they're opening sensitive information.

We will remove this field because: 
- Submitters think the answer to this question affects how agents will respond to them. It also seems irrelevant. See [findings from our research study in January 2024](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Submit%20an%20inquiry/Round%201/Findings.md#finding-1-veterans-past-experiences-and-trust-in-va-impacts-how-they-perceive-questions-and-what-information-theyre-comfortable-sharing)
> 'Are you a VA employee?' Why this is here? [...] Because it means if you're [an] employee, instead of waiting 6 months to get an answer then [they] answer you right away?
> 
> I don't know if you're precluded from being seen at the VA if you're an employee there, I don't know. Not sure on that one.
>
> I'm trying to get an appointment here for a hearing aid. A hearing test. What does that have to do with whether I work for the VA or not?
- We don't need this data from submitters. We can pull pull the ICN from our authentication partners. Then MPI (already integrated with PATS-R) will tell CRM if a submitter is an employee. We can display the "Employee" designation for the agent to see and acknowledge.
- This does not have a negative impact on level of service or reporting. No line of business is using Ask VA to report on sensitive record access.
- Unauthenticted users do not need to provide this field because we can't verify who the submitter is anyway.

### Next step
- We will remove this field, and it does not require a vote from the Ask VA Change Control Board. We confirmed this with the Ask VA business team.

## Veteran's Service Start and End Dates
These fields are currently optional. They ask for the Veteran's Start and End Dates.

We recommend removing these fields because [business lines don't need this information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Business%20line%20engagement/Feedback%20on%20military%20service%20fields.md#claim-number)

### Next step
- We will remove these fields. We [confirmed with business lines individually](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Business%20line%20engagement/Feedback%20on%20military%20service%20fields.md#when-business-lines-say-they-need-or-dont-need-military-service-information).

## Veteran's Claim Number
This field is currently optional. It asks for the Veteran's Claim Number.

We recommend removing this field because [business lines don't need this information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Business%20line%20engagement/Feedback%20on%20military%20service%20fields.md#claim-number)

### Next step
- We will remove these fields. We [confirmed with business lines individually](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Business%20line%20engagement/Feedback%20on%20military%20service%20fields.md#when-business-lines-say-they-need-or-dont-need-military-service-information).
