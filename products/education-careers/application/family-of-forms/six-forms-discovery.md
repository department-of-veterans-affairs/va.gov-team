## Challenges

- Form numbers are obtuse.
- Form names do not clearly describe the use case for each form.
- Using plain language to describe which form is applicable to whom is a complex nest of if-this-than-that.
- Some Veterans are guided by experts to look for a specific form number
- We currently have a 'this or that' model for directing users to stay on our site or go to eBenefits
  - This becomes ever more complex as we launch each new application and will need to be rewritten/reconsidered each time
  - If we present multiple paths, not just two, this complexity gets multiplied

### Main User types

1. A veteran wants to apply for or manage an existing education benefits, but does not know exactly which form they need to use.
2. A veteran has consulted with a VSO or a representative from their school's VA office and has been told to fill out form X. They arrive on [vets.gov](http://vets.gov) seeking out that specific form.

## Goals

- Add enough to be helpful but not so much that less knowledgable visitors have to deal with **analysis paralysis**.
- Choose simplicity over power-user options.
- Turbotax > This is it!

## Recommended approach

We propose a single path approach. In the image of Turbotax, Veteran's will be asked simple and relevant questions that will help us help them to apply for Education Benefits Application in a way that will output the correct form into the backend system.

For Veterans that are looking for the specific form number that they have been advised to fill out, we will affirm throughout the application that this process will satisfy that requirement.

### This will manifest as such:

1. Veterans will be able to make the choice to Apply for Education Benefits or Manage Their Benefit via multiple paths. (On a static page with basic information or through the new navigation)
   1. If they make this choice on /education/apply-for-education-benefits, they will be presented with context for which OMB forms each decision (Apply or Manage) will satisfy.
   2. If they arrive directly through navigation, they will see which OMB forms that particular process will satisfy.
2. After choosing which path they need (apply or manage), a Veteran will be presented with a process map for that particular process. (This is a copy-edited version of the familiar subway process map.)
   1. A Veteran selects 'get started' and begins their application.
3. The first questions (2-3) ask Veterans familiar identity-framing binary questions. E.g. Are you a veteran?
4. The rest of the form is completed based on the appropriate OMB form for them and submitted to our partners to correlate with the correct form number.
   1. The form number is placed on the page once it has been determined through the first three questions to reinforce the choice for Veterans in the know.

### Example of questions

*These are a work in progress, but no individual path asks more than 3 questions. [Full question flow diagram.](multi-form-entry-flow.png) | [Prototype of questions in mobile](https://app.moqups.com/greg@adhocteam.us/P9RbKRUs1t/view)*

- Are you a veteran eligible due to your own service? yes/no
  - **If Yes:** Did you enter through National Call to Service? yes/no**
    - **If No:** The rest of the form (**22-1990**)
  - **If No:** Is your sponsor Veteran deceased, permanently disabled, MIA, or a POW? yes/no**
    - **If yes:** The rest of the form (**22-5490)**

## Notes

- We are working under the assumption that we will be removing the subway map that currently confuses Veterans. (They think it's navigation.) Removing this also solves a functionality discrepancy between large screen and small screen devices.
- We are designing for two groups of people, those who find many forms confusing and those that know exactly what they're looking for. Our design is preferential to the former, but accommodates the latter.
- This solution is marginally more frustrating during the transition period when we are adding forms one at a time without an easily understandable rubric for which form is where.
  - There is a small group of people that will experience a bump in the road as they are routed to eBenefits, but that sacrifice is temporary and we think it is worth it for the betterment of the whole. 
  - Once 1995 has launched, we will be serving 81% of applications on vets.gov.
  - That group are individuals that know exactly what form they need, but will be asked 2-3 identity questions before they get redirected to eBenefits.
  - This problem will decrease over time.

**Extras**

- We think this is a net win for most people.
- We are hesitant to add extra infrastructure that will muddy the waters for the already-confused user.
- Testing for this is hard. Adding a clickable list of direct links later, if we need to, is easy. But designing extra infrastructure for a hypothetical does not seem like the best design decision.
- Searching for any of the education forms on [vets.gov](http://vets.gov) should direct them to the apply or manage page based on the form number.

## Context

### VONAPP statistics

*FY 2016 projected to annual numbers* [Full VONAPP statistics](form-usage-stats.md) | [Form relationships](form-relationships.png)

**Total** **applications**: ~399,000 applications

**1990**: ~226,740

**1995**: ~98,213

**1990E**: ~36,252

**5490**: ~27,661

**5495**: ~8,116

**1990N**: ~2097

At launch of 1995, we will be serving 324,953 of 399,000 (**81%**) annual applicants within vets.gov.

### Research

- When presented multiple complex options in our testing, users frequently asked, "Can you give me a helping hand here?"
- When testing this flow with Veterans at the VAMC in Baltimore, we received no resistance to answering the basic identity-framing questions.
  - No one was observed searching for form numbers
  - No one audibly mentioned noticing the form number we did include.
  - Veterans were more distracted by the message about 'not saving progress', the language for Certificate of Eligibility, and the process content.
  - We did not test with any Veterans that are currently stressed about getting their application submitted.
