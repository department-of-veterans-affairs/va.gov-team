# Problem

From the [product outline](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/MVP%20Product%20Outline.md)

Veterans have trouble navigating the VA to discover the full scope of services and benefits that might be available to them because of a lack of proactive education, low discoverability of resources, the sheer volume of information in the VA universe, and complicated benefits materials that are not written in plain language. This can result in veterans going without benefits they need, want, and deserve for months, years, or indefinitely.

Furthermore, even when veterans know about a particular benefit, they have trouble determining their own eligibility and may (incorrectly) assume they are ineligible for something for which they are actually eligible.

# What We Did

- Synthesized existing research findings on benefits discovery [#10383](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/10383)
- Conducted stakeholder research with Explore VA team around their Veteran research and analytics [#10386](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/10386) 
- [Comparative analysis](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Personalization/Recommendations/Discovery/Comparative%20Analysis) of personalized recommendation experiences [#10384](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/10384) 
- Formative research with Veterans on benefit discovery & recommendations [#10385](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/10385) 
- Discussed which benefits would benefit most from recommendations? [#11049](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11049)
- Technical discovery (4 ways we could personalize recommendations):
   - Interest [#11748](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11748)
   - Enrollment [#11713](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11713)
   - Eligibility Technical discovery [#11462](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11462)
   - Expiration [#11751](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11751)

# Important Takeaways

### Initial User Research

[Research summary here](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/User%20Research/Research%20Summary.md).

**TL;DR** — Main problem is around surfacing benefits, not necessarily around people trying to figure out their eligibility.

### Technical Discovery

We explored three directions:

- Elevating benefits by eligibility.
- Elevating benefits based on current enrollment.
- Elevating benefits based on user interest.

Only the "interest" approach seemed technically viable in a more immediate timeline. 

### Vetting "What are you interested in?" flow

We'd explored eligibility in our user research, but we hadn't explored asking people what benefits they might be intested in learning about and then surfacing content based on that. So, we decided to do some light user testing/interviews based on some sketches we already had.

You can [read about that research here](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/User%20Research/August%202018%20DDS%20research/Results%20Summary.md).

**TL; DR** — Overall, our proposed approach for the benefits recommendation MVP is a viable direction.

# Proposal

Elevating benefits based on user interest. It might work something like this:

1. A new user signs up for Vets.gov (VA.gov), or an existing user signs in for the first time after we launch this feature. They might see a modal like this:

![What are you interested in? modal](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Design/MVP%20Design/Sketches/8.6.18_%22What%20are%20you%20interested%20in%3F%22%20modal.jpg)

2. We show them content on the dashboard based on what they have selected. 

We could take a simple approach and just link over to corresponding benefit overview pages for the benefits they have selected.

![Simple approach](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Design/MVP%20Design/Sketches/8.6.18_Dashboard%20with%20short%20list%20of%20benefits.jpg)

Or we could do something more comprehensive, like this:

![Getting Started 1](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Design/MVP%20Design/Sketches/8.6.18_Dashboard%20with%20larger%20Getting%20Started%20section.jpg)

![Getting Started 2](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Design/MVP%20Design/Sketches/8.6.18_Dashboard%20with%20Getting%20Started%20section%20collapsed.jpg)

3. Someone would be able to customize what they could see on the dashboard. We might house dashboard preferences in account settings.

![Acct settings](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Design/MVP%20Design/Sketches/8.6.18_Account%20Settings%20with%20Dashboard%20Preferences.jpg)

# Discussion

1. Questions/thoughts/concerns?
2. Do you think this approach solves the problem we set out to solve?
3. Does this approach provide value?

# Next Steps

Assuming everything looks a-ok:

1. Work with content team to figure out the right content to elevate for each benefit and how to pose the "What are you interested in?" question.
2. Create wireframes.
3. Work with FE to start setting up a framework for this functionality.
4. Test with users!
