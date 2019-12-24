# Design system

### Communication Channels
- Github Label: design-system
- Slack channel: #design-system
- Keywords: formation, jean-pants, design system

### Points of Contact
- DSVA Product Owners:
  - Lauren Alexanderson 
  - Leah Bannon 
  - Patrick Bateman 
- Ad Hoc Product Manager: Ryan Luu 
- Design POCs:
  - Jared Cunha 
  - Emily Waggoner 
- Engineering POCs:
  - Jared Cunha 
  - Jeff Balboni 
  
### Narrative

VA.gov is made up of a few separate systems (static content, healthcare applications, forms, etc.) that all have to look like and function as a single entity. When we make front-end, user-facing changes to one part of the site, that needs to carry over to every corner and application we have. When we design new products or components, it's important for the entire design and engineering team to understand what visual patterns are available, and how those should be coded. Prior to the design system, we didn't have a single source of truth for either the visuals or the code, and this introduces inconsistencies and conflicts. We then spent a lot of time and effort fixing those problems. Our existing codebase and documentation did not satisfy the need for a single source of truth.

#### History

1. Single Sketch file with all components, shared by designers
2. Fractal site and React components extracted from vets-website, in design-system repo, called Jean Pants
3. Changed title to Formation
4. Decided to separate the "design system" into several pieces:
   - Pattern and component usage documentation site ([design.va.gov](https://design.va.gov))
   - Formation npm module containing styles and plain JS for all patterns/components
   - Formation-react npm module containing React implementations of some design system componentshReact component documentation (https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design)

#### Current Status

The design system is undergoing active maintenance. VA.gov is being evaluated for components/patterns that are missing from the design system. The ability to use formation standalone without USWDS or React components is also being finalized.

### How to Access / Test

Design system documentation lives at https://design.va.gov. Source code for that site lives in the [vets-design-system-documentation](https://github.com/department-of-veterans-affairs/vets-design-system-documentation) repo.

Source code for the formation and formation-react modules, as well as the React component documentation site, lives in the [veteran-facing-services-tools](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools) repo.
