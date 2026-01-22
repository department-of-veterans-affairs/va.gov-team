# Frontend Documentation: Results Page 2.0 (WIP)

### Background
This document serves as the written blueprint for build purposes - outlining specs for each feature, components used, and specific content.

### Design specs
The Figma working file includes additional documentation and specs for handoff to dev.
- [Introduction](https://www.figma.com/design/fRuATIubZQNSeQmnvxzqKY/%F0%9F%92%A1-Working-file--Transition-experience-?node-id=1612-39613)
- [Filter & Sort](https://www.figma.com/design/fRuATIubZQNSeQmnvxzqKY/%F0%9F%92%A1-Working-file--Transition-experience-?node-id=1612-18660)
- [Benefit cards](https://www.figma.com/design/fRuATIubZQNSeQmnvxzqKY/%F0%9F%92%A1-Working-file--Transition-experience-?node-id=1612-36383)

## Introduction
The intro content is:

_Based on your answers, we’re recommending programs and benefits for you to explore. You can go back and update your answers if you need to._

_[Go back and update your answers](https://www.va.gov/discover-your-benefits/review-and-submit)_

_Remember to check your eligibility for each program or benefit before you apply. Some are available to both you and your dependents. And some are only available for certain amounts of time._

_**Benefits for transitioning service members**_

_We can help guide you as you transition from active-duty service or from service in the National Guard or Reserves. Some benefits are only available while you're still serving. And some benefits are only available for a certain amount of time after you separate._

_[Learn more about VA benefits for service members (opens in a new tab)](https://www.va.gov/service-member-benefits/)_

## Results
The Results page follows the [Search Results](https://design.va.gov/templates/search-results) template.

### Filters
The filter functionality uses the [Search Filter](https://design.va.gov/components/search-filter) component. It includes facets to filter by recommended vs all benefits, when someone can apply, and the type of benefit.

By default, "Recommended for you" is selected when the page loads and when they "Reset filters".

### Sort
The sort functionality uses the [Select](https://design.va.gov/components/form/select) component. It includes options to sort by expiration date, name, and type of benefit.

By default, "Expiration date (soonest first)" is selected when the page loads.

### Benefit cards
The benefit cards are displayed in the search results. They use the [Card](https://design.va.gov/components/card) component.

The card content includes:
- Tag: Recommended for you
- Eyebrow: Benefit type
- H3: Benefit name
- Body: Description about the benefit
- H4: When to apply
- Body: Details about when someone can apply
- Link: Learn more

-----

#### After launch
- [ ] Update this documentation.
- [ ] Update content.
- [ ] Update links to Figma production file.
- [ ] Update product [documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/vet-transition-support/fe-documentation.md) as needed.
