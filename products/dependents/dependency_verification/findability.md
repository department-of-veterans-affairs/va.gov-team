# Dependent verification: Findability assessment

Designers: Fiorella Geedi, Ajia Wallace, Ruben Sun

## Background

The Dependents Experience team is working on an initiative to reduce the over $250 million that the VA overpays in dependents payments annually, burdening Veterans with debt. Currently, Veterans are mandated to verify their dependents only once every eight years. Our initiative would encourage Veterans to review dependents on their benefits annually and provide a path to verify or update on VA.gov. We hypothesize that more frequent review of dependents and easy paths to verify or update will result in more accurate dependent payments and reduce overpayments and debt. 

This initiative consists of two parts: 

- An annual notification email that would encourage Veterans to review and verify or update the dependents on their VA benefits on VA.gov
- A partial digitization of Mandatory Verification of Dependents [VA Form 21-0538](https://www.va.gov/find-forms/about-form-21-0538/) that will allow Veterans to verify that their dependents are correct on VA.gov (or direct them to update their dependents via our existing online tool if needed)

[Learn more about the verification initiative](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/dependency_verification)

[Go to verification MVP designs in Figma
](https://www.figma.com/design/bvj72inycD0iZkuCbjYTWL/Dependent-Verification-MVP?node-id=1574-12903&t=zqs6ZMV8Lfs9bYeD-1)

[Go to CAIA IA findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/ia-design-docs/verify-dependents.md)| [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=522-1737736233308)

## Findability assessment: Goals, methodology, and expected outcomes

### Goals
Our goals for this activity are to: 
- First, determine the entry points for the verification MVP, assess any usability issues, and, if necessary, create clearer and more usability-friendly paths to entry. 
- Second, ensure clear and usability-friendly entry points for all dependent's experience and dependent-related content. 

### Methodology

Our methodology included a heuristic analysis of the existing information architecture of VA.gov as it relates to dependents' experience and other VA.gov forms and benefits to determine how well the dependent's experience is aligned with its greater context. It also included a content analysis of our parent static page, [View or change dependents](https://www.va.gov/view-change-dependents/), and testing of the search engine for search terms related to dependents and dependent verification specifically. 

We will present these findings to CAIA on 12/18/24 and continue to consult with them on a solution through Q2 that will inform the design of the verification MVP.

Our team will conduct usability and concept testing with Veterans to determine whether Veterans can accomplish their goals with our verification MVP designs and our findability solutions and better understand the Veteran's mental model of dependent-related benefits on VA.gov, respectively. 

In the future, our methodology may include other types of testing, such as card sorting or tree testing, to determine how the dependents' experience as a whole could be represented on VA.gov in a way that more closely matches the Veteran's expectations.  

### Desired outcomes
- Veterans can easily find information about the verification of dependents and why it is important to verify
- Veterans can easily find where they can log in to view the dependents currently on their benefits


## Findability discovery

As a part of our initiative, our team did some discovery work to understand how Veterans might find information about the "verification of dependents." Part of our hypothesis is that Veterans with out-of-date dependents may be less engaged with the dependents' experience on VA.gov. Because these Veterans may be less familiar with navigating VA.gov, we want to pay extra attention to the ease of findability when designing our new verification MVP. More than this, we know how important it is that even Veterans who don't follow our happy path (the CTA in the annual notification email) are able to find information about dependent verification and how to verify independent of the email.

We want to ensure that Veterans can easily find information on dependent verification on VA.gov and also that they're presented with information on dependent verification in relevant spaces even when they don't know to search for it. 

We mapped out all the existing entry points in Mural, and through this exercise, we identified several content and information architecture issues. 

[Go to map of existing extry points in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689863079145/5b97ba9ea11077f983f3413167f6324f11aa04a8?wid=0-1733935267441)

## Findings

Through our discovery, we identified the following issues:

### Search results

Using the following phrases did not render the "About form" page for Verification of dependents:
- Verification
- Dependent verification
- Verification of dependent 

Only when using exact phrasing from the form title, "Verification of dependents," did we see the "About form" page for Verification of dependents in the search results.

#### Questions
- _HMW surface Verification information in the search results?_
- _What phrases should surface verification information?_
  
### Information and structure issues with the current parent page

A review of the parent "static page" for dependent pages revealed a few potential improvements.

[Go to View or change dependents](https://www.va.gov/view-change-dependents/)

- The paper form for VA Form 21-686c was not mentioned or linked on the parent page.
- The link to the online tool to add or remove dependents, 686c/674, was hidden behind a sign-in alert
  - Mikki Northuis has pointed out previously that having sign-in alerts on both the parent page and the introduction page for 686c/674 is not compliant with guidance
- The content is structured differently than other parent pages for VA.gov forms
  -  _Does it make sense to align with other forms' structures, such as showing the different options to apply?_
- We'll need to add information about verification of dependents to this page for the initiative launch
  - _Where does it make sense for this information to live?_
  - _HMW allow both authenticated and unauthenticated Veterans to find this information?_
- Improving navigation into dependents' information pages
  - Unauthenticated Veterans have to find the "View or change dependents on your VA disability benefits" page using the search functionality or under Disability in the main VA.gov menu
  - Only authenticated Veterans can find their dependents in the profile menu
  - _HMW make the Dependents information more discoverable on VA.gov?_
  - _HMW make the Dependents Verification information discoverable on VA.gov?_

## Context and priorities
We understand that these findings have far-reaching implications and that solving these issues takes time and further discovery. Our priorities for the scope of addressing these issues are listed here:

### The dependent verification MVP
Any improvements to findability should first focus on the dependent verification MVP. Our thoughts on what that must/should include are listed here, but we are open to further suggestions from our work with CAIA beyond the improvements we recommend.

#### Must haves
- A way for authenticated and unauthenticated Veterans to easily find information about verification of dependents
- A way for both authenticated and unauthenticated Veterans to easily find where they can view the dependents currently on their benefits
- Links to the new verification tool from the Mandatory Verification of Dependents About form page and other appropriate places
- A way to surface Verification information through search results

### Dependents experience
Beyond the verification MVP, our discovery revealed issues with the findability of content related to the dependents experience as a whole. After addressing issues related to the verification MVP, our next priotity would be to address potential improvements to the findability and structure of dependents-related content, potentially including but not limited to: 

- Restructuring of parent page content
- Aligning with other VA.gov forms

### VA.gov
Our discovery may have revealed issues with information architecture across VA.gov. This is our lowest priority but still important to our team. After the findability of the verification MVP, and other dependents' experience content, we would love to lend our efforts to potential improvements to information architecture across VA.gov and how the dependent's experience fits within VA.gov where possible. 

## Unknowns
This is a space to make explicit our unknowns regarding the verification MVP and its findability: 

- How will Veterans interact with the annual notification email
  - Will they engage with the annual notification email at all?
  - If so, will they click through the CTA to get to VA.gov or go to VA.gov via their own search?

 - Are Veterans informed of mandatory verification after they add their first dependent?
   - If not, is the 0538 request their first notification?
   - If so, we may be able to add that information to the flow of our online tool
   - Ajia will reach out to SMEs for more info on this
  
  - Will we be able to get the date-last-verified variable from VBMS?
    - If not, can we find that information in another algorithm in the Vets API?
    - If not, will we send annual notification emails to all Veterans with dependents on their VA benefits reglardless of date last verified?
  
  - What is the segmentation of Veterans responsible for dependent overpayments and Veterans with VA.gov accounts?
    - Are we missing an opportunity to relieve Veterans of debt by gating our efforts to Veterans with existing VA.gov accounts? 

## Suggested timeline
Based on our work with CAIA and their recommendations, we'll create a more solid timeline and strategy in early January, but we wanted to include a tentative timeline here to steer our efforts: 

- 12/18: Meet with CAIA to present findability discovery findings
- Early January: Receive recommendations from CAIA
- Early-mid January: Update designs, prototype, research plan, and other deliverables with recommended path
- Late January-early February: Recruit for and conduct research
- Mid February: Synthesis, finalize designs, package for handoff

Here is a link to our former preliminary timeline that we'll update as we further solidify our strategy: 

- [Go to design/research timeline](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692908527043/0da94b7ded52e8a943d798bcb8ae39697c2fb56f?wid=0-1736454562185)
- [Go to sprint planning timeline](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692908527043/0da94b7ded52e8a943d798bcb8ae39697c2fb56f?wid=0-1732119679400)
- [Go to preliminary timeline in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=0-1731513183944)

## CAIA's IA feedback
[View feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/ia-design-docs/verify-dependents.md)
