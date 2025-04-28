# Recommendation to remove gender from Ask VA

Last updated by @tygindraux: April 28, 2025

## Current status as of June 2024

We have removed pronouns from Ask VA as of June 2024. The Change Control Board voted in favor of removing this field from Ask VA. You can also review the [detailed outcomes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/6-2024%20Change%20Control%20Board%20outcomes.md) of this vote.

## Past updates

### June 2024

The Ask VA Change Control Board will vote whether to remove gender or continue collecting this data. We will present this recommendation to the CCB.

We believe that we should not collect gender identity, because: 
- **It does not benefit the user experience** - We will still collect preferred `Pronouns`, which let agents know how to address the submitter and/or refer to the person who the inquiry is about.
- **It is not mandated by law** - Disaggregation by gender is only necessary if the data is collected in the first place.

### May 2024

In May 2024, we discussed this field with relevant stakeholders:
- [Meeting notes – May 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/5-2024%20Gender%20discussion%20with%20multiple%20stakeholders.md)
- [Meeting notes – May 6](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/5-2024%20Follow-up%20gender%20discussion.md)
- [Meeting notes – May 20](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/5-2024%20Second%20follow-up%20gender%20discussion.md)

We also considered other factors, like:

- **Cognitive load.** Submitters are frustrated that they have to provide information that seem irrelevant to asking VA a question. Even if the field is optional, people might think they have to answer it and may miss the “Prefer not to answer” option.
- **Trust in VA.** Some people don't want VA to know their gender. They’re concerned about what VA may do with the information.
- **Purpose of question.** Agents don't need to know a submitter's gender to answer their question. This question's purpose is solely for reporting and monitoring.
- **Form length.** Asking one less question makes the form shorter and faster to complete.There are already an unprecedented number of fields in this contact form. Other forms, like [the MHV contact form](https://www.myhealth.va.gov/contact-us), don't ask for gender.

We hypothesize that removing the gender identity question would have a positive impact on the submitter experience and a neutral impact on reporting needs for CWV:
- Submitters will experience less cognitive load to complete the form, they’ll have more trust in VA and Ask VA, and they’ll take less time to complete an already-lengthy form.
- For CWV reporting, because MPI already provides 99% of gender data, removing the gender identity question from the form would have a very marginal impact on the sample size that you have already to disaggregate inquiries by gender. 

### February 2024

After conducting usability testing in January 2024, we learned from Veterans.

Veterans didn’t understand why VA needed to know their gender identity to answer their question.

> A wee bit intrusive again. Somebody's gender identity shouldn't have any bearing on VA benefits.

> Again with gender identity. It's good to see it on the diversity level, but personal level, not necessary.

> I just don't see how that's relevant.

Most of the Veterans we talked to would choose the “Prefer not to answer” option.

> But again, here I would say, well, at least it has the option, prefer not to answer.

> I would probably answer it. But then again, maybe prefer not to answer.

> I would, if there was an option prefer not to answer. That's what I would [do].

### January 2024

The Center for Women Veterans (CWV) shared a [Federal law](https://www.govinfo.gov/app/details/PLAW-116publ315) with their understanding of why we must collect `Gender` information from submitters. However, after reviewing the law, we find that it only mandates collection of gender information when gender information is available in the dataset:

> "...disaggregate such data by gender, race, and ethnicity, **when the data lends itself to such disaggregation."**

We [met with the Center for Women Veterans](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/Business%20line%20engagement/Business%20lines/Center%20for%20Women%20Veterans/January%209%2C%202024.md) and recognize they need to have gender data for reporting on the number of women Veterans they’ve helped. 

This made us wonder what the response rate for gender in the current form is, so we analyzed inquiry data from November 2023 to January 2024.
- Data Insight 1: 38% of inquiries have gender data. Of these inquiries, MPI provides 99% of the data in CRM. Submitters provide less than 1% of gender data.
- Data Insight 2: We could require submitters to answer the gender question to get data for the other 62% of inquiries. But it’s likely that submitters will just choose the “Prefer not to answer” option.
