# VA Design System Focus Styles: Questions and Assumptions

## Questions

**Do teams use custom components outside of the design system that may require a more custom approach to focus styles?**

From Matt Dingee:

> That's not supposed to be the case, though the Design System does not include every component (notably header and footer; however those are quite stable). When a VFS team goes through the CollabCycle they are asked to either comply with the Design System or contribute back through the experimental process. Some teams may decide to ignore those recommendations but do so at their own peril and responsibility.

So this is less of a concern for an audit, but still worth looking out for when looking at the site.

**With the move to v3 of the USWDS Design System, would our link colors or other prominent colors change on the site in a way that would make us rethink focus style colors?**

From Matt Dingee:

> Yes colors will be shifting with the move to v3 but not anytime soon. I doubt they would cause a significant impact to the focus colors as the changes are mild shifts in tones rather than dramatic changes but, happy to share the color changes for you all to evaluate the impact.

One example Matt shared, the button color, was a very slight shift. Likely not an issue, but will still get the colors when it's time to start examining different color possibilities.

## Assumptions

- We'll need to use another focus style method other than the double box shadow for:
  - wrapping text links 
  - And some other possible use cases:
    - [Checkbox component](https://designsystem.digital.gov/components/checkbox/)
    - [Combo box (focus within selection items)](https://designsystem.digital.gov/components/combo-box/)
    - E.g. Search
    - [Radio buttons](https://designsystem.digital.gov/components/radio-buttons/)
    - Banners
- We're designing for the whole site, not just the design system components.
  - Header (not in design system)
  - Footer (not in design system)

## Requirements

- We're working from using the [double box shadow](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/654) as a starting point.
-  We'll need to select [colors from the USWDS Design System, V3](https://designsystem.digital.gov/design-tokens/color/system-tokens/).
- We need to consider the following states in combination with the focus state:
  - Resting
  - Hover
  - Active
  - Disabled
  - On both light and dark backgrounds

## Supporting documentation

- [Use double box-shadow for focus styling #654](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/654)
- A11y maturity plan [DRAFT] Double box-shadow focus styling (in progress, coming soon)
