# Decision Records

Inventory of design-related decisions along with the rationale for the decision and a list of standards or other factors impacted by the decision.

Last updated: 27 Oct 2025

## Wayfinding

### Generic Page Titles

Use a generic title (```<title>```) for pages that could have Personally Identifiable Information (PII) or Protected Health Information (PHI) in the main page (```<H1>```) heading.

- 	**Rationale:** “Title tags can’t include Personally Identifiable Information (PII) or Protected Health Information (PHI). Pages with PII/PHI in H1s must genericize the title tag. This ensures the information isn’t tracked back in analytics or other logs through the page title. This does create an a11y infraction where there isn’t a unique title tag for each page, but there isn’t other meaningful data that can be exposed in the title tag to differentiate it. The VA 508 office approved this approach in these use cases.” Excerpted from from VADS [Privacy Guidance for Title tags](https://design.va.gov/content-style-guide/title-tags#privacy-guidance) 
- 	**Relevant standards:** [SC 2.4.2 Page Titled (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/page-titled): Web pages have titles that describe topic or purpose.
- 	**Last reviewed:** 27 Oct 2025
