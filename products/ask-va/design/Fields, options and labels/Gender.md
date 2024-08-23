# Recommendation to remove gender from Ask VA

Last updated by @tygindraux: July 8, 2024

---

## Jump to:
- [Decision – June 2024](#decision-june-2024)
- [Discussions – May 2024](#discussion-may-2024)
- [Proposal to remove Gender – February 2024](#proposal-to-remove-gender-february-2024)
- [Proposal to remove Gender – Fall 2024](#proposal-to-remove-gender-fall-2024)

## Decision – June 2024

In June 2024, the Change Control Board voted in favor of removing this field from Ask VA. Review [detailed outcomes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/6-2024%20Change%20Control%20Board%20outcomes.md).

## Discussions – May 2024

In May 2024, we discussed this field with relevant stakeholders:
- [Meeting notes – May 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/5-2024%20Gender%20discussion%20with%20multiple%20stakeholders.md)
- [Meeting notes – May 6](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/5-2024%20Follow-up%20gender%20discussion.md)
- [Meeting notes – May 20](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/5-2024%20Second%20follow-up%20gender%20discussion.md)

## Proposal to remove Gender – February 2024

### Insights from January 2024 usability testing
After conducting usability testing in January 2024, we discovered new insights from Veterans. 

- Insight 1: Veterans didn’t understand why VA needed to know their gender identity to answer their question.
> A wee bit intrusive again. Somebody's gender identity shouldn't have any bearing on VA benefits.

> Again with gender identity. It's good to see it on the diversity level, but personal level, not necessary.

> I just don't see how that's relevant.

- Insight 2: Most of the Veterans we talked to would choose the “Prefer not to answer” option.
> But again, here I would say, well, at least it has the option, prefer not to answer.

> I would probably answer it. But then again, maybe prefer not to answer.

> I would, if there was an option prefer not to answer. That's what I would [do].

### Insights from February 2024 data analysis
From our [previous conversation with the CWV team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/Business%20lines/Center%20for%20Women%20Veterans/January%209%2C%202024.md), we understand that they still need to have gender data for reporting on the number of women Veterans they’ve helped. 
This made us wonder what the response rate for gender in the current form is, so we analyzed inquiry data from November 2023 to January 2024.
- Data Insight 1: 38% of inquiries have gender data. Of these inquiries, MPI provides 99% of the data in CRM. Submitters provide less than 1% of gender data.
- Data Insight 2: We could require submitters to answer the gender question to get data for the other 62% of inquiries. But it’s likely that submitters will just choose the “Prefer not to answer” option.

### Our recommendation
Therefore, we hypothesize that removing the gender identity question would have a positive impact on the submitter experience and a neutral impact on reporting needs for CWV:
- For Submitters: They’ll experience less cognitive load to complete the form, they’ll have more trust in VA and Ask VA, and they’ll take less time to complete an already-lengthy form.
- For CWV reporting: Because MPI already provides 99% of gender data, removing the gender identity question from the form would have a very marginal impact on the sample size that you have already to disaggregate inquiries by gender. 

### Other considerations
We also considered other factors [in this Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1707951656741/bf6828f889eead9a838fa5f4e36749d0559ad015?wid=1-1708544576426).

- Cognitive load: Submitters are frustrated that they have to provide information that seem irrelevant to asking VA a question. Even if the field is optional, people might think they have to answer it and may miss the “Prefer not to answer” option.
- Trust in VA: Some people don't want VA to know their gender. They’re concerned about what VA may do with the information.

> I say I'm transgender and it means you're not going to see me because I'm transgender?

- Purpose of question: Agents don't need to know a submitter's gender to answer their question. This question's purpose is solely for reporting and monitoring.
- Form length: Asking one less question makes the form shorter and faster to complete.There are already an unprecedented number of fields in this contact form. Other forms, like [the MHV contact form](https://www.myhealth.va.gov/contact-us), don't ask for gender.

### Next steps
The Ask VA Change Control Board will vote whether to remove gender or continue collecting this data. We will present this recommendation to the CCB.

## Proposal to remove Gender – Fall 2024

We recommend not collecting `Gender` when we migrate Ask VA to VA.gov. 

### VA.gov Design System
The [VA.gov Design System](https://design.va.gov/patterns/ask-users-for/gender) provides clear guidance to only ask for gender identity if it benefits the user experience: 
> **"Don’t ask if it does not benefit the user experience.** You should only ask users about gender when absolutely necessary."

> "**We don't use [gender] at all.** Especially if someone has pronouns. Most of our responses are auto-generated. We don't pull reports about this or anything like that. We don't use it." - Ask VA agent from VBA

### Mandated by law?
The Center for Women Veterans (CWV) did share a [Federal law](https://www.govinfo.gov/app/details/PLAW-116publ315) with their understanding of why we must collect `Gender` information from submitters. However, after reviewing the law, we find that it only mandates collection of gender information when gender information is available in the dataset:
> "...disaggregate such data by gender, race, and ethnicity, **when the data lends itself to such disaggregation."**

When Ask VA migrates to VA.gov, we will continue to ask for preferred `Pronouns`. Pronouns more accurately describe how to address the submitter and/or refer to the person who an inquiry is about.

### We do not need to collect gender identity, because: 
- **It does not benefit the user experience** - We will still collect preferred `Pronouns`, which let agents know how to address the submitter and/or refer to the person who the inquiry is about.
- **It is not mandated by law** - Disaggregation by gender is only necessary if the data is collected in the first place.

### Next steps

Discuss with stakeholders and do usability testing.
