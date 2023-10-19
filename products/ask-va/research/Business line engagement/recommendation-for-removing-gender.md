# Recommendation for removing `Gender` collection from Ask VA

*Ask VA Integration team*

Last updated: October 18, 2023

We recommend not collecting `Gender` once we migrate Ask VA to VA.gov.

The [VA.gov Design System](https://design.va.gov/patterns/ask-users-for/gender) provides clear guidance to only ask for gender identity if it benefits the user experience: 
> **"Don’t ask if it does not benefit the user experience.** You should only ask users about gender when absolutely necessary."

We also reviewed this field with many Ask VA business lines to understand how they use it to respond to inquiries. We learned that it isn't necessary in order to deliver the service. For example:

> "**We don't use [gender] at all.** Especially if someone has pronouns. Most of our responses are auto-generated. We don't pull reports about this or anything like that. We don't use it." - Ask VA agent from VBA

The Center for Women Veterans (CWV) business line did share a [Federal law](https://www.govinfo.gov/app/details/PLAW-116publ315) with their understanding of why we must collect `Gender` information from submitters. However, after reviewing the law, we find that it only mandates collection of gender information when gender information is available in the dataset:
> "...disaggregate such data by gender, race, and ethnicity, **when the data lends itself to such disaggregation."**

When Ask VA migrates to VA.gov, we will continue to ask for preferred `Pronouns`. Pronouns more accurately describe how to address the submitter and/or refer to the person who an inquiry is about.

### We do not need to collect gender identity, because: 
- **It does not benefit the user experience** - We will still collect preferred `Pronouns`, which let agents know how to address the submitter and/or refer to the person who the inquiry is about.
- **It is not needed by agents, in order to answer inquiries** - Agents do not need to know someone's gender in order to answer their inquiry, which was confirmed from meeting with business lines.
- **It is not mandated by law** - Disaggregation by gender is only necessary if the data is collected in the first place.

Therefore, we recommend that this field is removed.
