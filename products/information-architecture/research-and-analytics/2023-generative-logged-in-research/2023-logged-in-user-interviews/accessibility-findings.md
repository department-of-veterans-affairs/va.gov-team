# Accessibility Findings

## Coverage
This research fufilled 50% (3/6) of its original request. Given the limited amount and variety of types of screen readers, no conclusive behavioral patterns can be determined locally in this study alone. However, we can draw future research considerations and document caught accessibility issues.

**Original study request: 6**

> 6 participants should use a screenreader on a desktop or mobile device

**Participants who successfully completed sessions: 3**

- [1 desktop JAWS user (screen reader)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/session-notes/p2.md)
- [1 iOS VoiceOver user (screen reader)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/session-notes/p15.md)
- [1 desktop zoom text reader user (magnification, screen reader)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/session-notes/p1.md)

## Key findings and recommendations
1. **Conduct more research on ZoomText with VSOs, Rehab Centers, and Veterans** to be...
  - Strategic about inclusive research and design decisions (e.g. What zoom levels are most prevalent or have the most pain points? What compounded disabilities should we be accounting for?)
  - Mitigate and identify exclusion by scale in design system patterns and components (e.g. what patterns have/haven't been tested with ZoomText users?) 
3. y
4. z

## Details of findings and recommendations

### Conduct more research on ZoomText usage with VSOs, Rehab Centers, and Veterans
> [ZoomText Magnifier/Reader](https://www.freedomscientific.com/products/software/zoomtext/) is a fully integrated magnification and reading program tailored for low-vision users. Magnifier/Reader enlarges and enhances everything on your computer screen, echoes your typing and essential program activity, and automatically reads documents, web pages, email.

#### ZoomText is standardized as a provided technology by blind rehab centers
- In follow up conversations with a BVA (Blinded Veteran Association) rep, blind rehab centers provide training and equipment for JAWS and ZoomText which is the "standard issue."
- This _shouldn't_ be used to negate the need to test with other assistive technologies, which may still be utilized by caregivers, family members, or Veterans who have not gone through blind rehab center training.

#### Further discovery research could save time for and better empower future research efforts
In this study, the Veteran mentioned their own preferences being between 4-7x magnification and the preferences of other Veterans they knew being among higher magnitudes. 

**We don't have enough data or research to know...**
- If there are trends in usage between Veterans (e.g. common magnification levels or behaviors when switching between magnification levels)
- What are the upper limits/extremities of magnification usage ([ZoomText supports up to 60x zoom in Windows 8)](https://www.freedomscientific.com/products/software/zoomtext/)
- At what zoomtext magnification level(s) should we be testing components and patterns with
- What we don't know

**Possible next steps could include...**
- Conducting key informant interviews with BVA representatives and Blind Rehabiliation Center staff (e.g. this would be the equivalent of interviewing customer support to better understand where to dig deeper next)
- Tasking a11y specialists to conduct desk research on ZoomText on how to standardize it as a part of accessibility audits
  - While we currently support in browser magnification testing (which increases the size of all items on the screen), we do not support testing with ZoomText (which magnifies only a select portion of the screen)
- Collaborating with `research-ops` to track studies that include ZoomText users over time, this may include:
  - Encouraging usability testing to include a mix of screen reader users and ZoomText users
  - Write guidance on how to track data for ZoomText sessions (e.g. magnification levels, defects identified)
  - Create AT specific labels e.g. `ZoomText` to better track sessions over time
  - Hiring an a11y specialist specifically for research-ops to conduct generative research studies and/or analysis across multiple studies
- Updating the accessibility dashboard to segment usability testing by AT types (e.g. instead of one column, having seperate columns for different types of AT)
- Auditing past DST components and patterns to determine if they have been tested with ZoomText users (and at what magnification levels)

**Depending on what we learn in future research, we may...**
- Update how we conduct accessibility testing in platform and CAIA documentation
- Update testing standards for DST components and patterns
- Conduct remediative testing on existing DST components and patterns
- Update research strategy and recruitment guidelines for ZoomText users

## List of caught defects

### Within study's scope

### To be forwarded to relevant teams
