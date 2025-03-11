# ADR001 - 526ez embedded 0781 Paper Sync Destructive Actions Decision Document
March 11, 2025 

### Status
Pending

### Team members
* Kyle Soskin @kylesoskin
* Emily Theis
* Sam Wiley
* Leah Keeler
* Shannon Ford
* Nathan Burgess
* Robin Garrison
* Ruben Sun
* Lisa Capaccioli

## Background
Veterans may sometimes answer questions but later decide they no longer wish to provide those responses. To ensure their confidence, any changes they make should guarantee that the previously entered data will not be included in their submission. Our solution empowers users to modify their responses with the assurance that previously saved data will be removed. This gives them the confidence that their updated choices will reflect their intentions. 

The proposed solution was to implement a modal that appears after the user has answered questions, opted to change their responses to indicate they no longer wish to answer, and clicked the "continue" action. The modal would prompt the user to either confirm or cancel their decision. Upon confirmation, only the data associated with that specific question would be deleted, and the user would proceed to the next page as part of the "continue" action.

This solution posed several challenges that the team believed required further exploration, including identifying potential risks and assessing the level of effort involved.

### The problem
The standard Forms Library framework didn't support the flow as were intending to use it. Deleting data was generally restricted to only the pages the modal appeared on. Our solution was to delete data from within the 0781 flow. This meant customizing the Forms Library component. After careful deliberation and discussions, it was determined that to make this work it would mean "hacking" the form to do something that it was not originally intended for. ("Hacking" meaning the code is custom built, not likely to be reused by other teams, and may be a risk in the future to maintain.) 

### Options Considered
Collboarating between the team engineers, designer, product, VFF team members, and engineers from other VABC teams, the team came up with some options for possible solutions and included both the pros and cons of each option to help OCTO be more informed and to support their decision.

## Option 1a - [Confirm through modal prompt](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=17488-88727&t=mG6EsOEiWXdijIen-11) through native form library pages & components
Description: This uses a modal to prompt the user to confirm if they want to opt-out of, or remove answers they already provided, using the forms library pages and components.

**Design Considerations**
- (+) Follows common patterns found in other platforms and digital experiences
- (+) Conforms to platform guidence surrounding how to handle destructive actions
- (+) Allows users to change their responses at review and submit through experience native to the forms library (modal appears in the prompt item in review)

**Technical Considerations**
- (+) Pages are already built
- (+) Forms library is the default thing to use
- (+) Some technical research has already been conducted for this
- (-) Requires refactoring/building around "hacking" the forms library 
- (-) May be difficult to maintain, tech debt introduced 
- (-) Additional risk in utilizing/exploiting non-standard functionality
- (-) Not been done before, unknown unknowns likely exist


## Option 1b - [Confirm through modal prompt](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=17488-88727&t=mG6EsOEiWXdijIen-11) using custom page
Description: This uses a modal to prompt the user to confirm if they want to opt-out of, or remove answers they already provided, using the forms library components, on a custom/from-scratch page.

**Design Considerations**
- See above.

**Technical Considerations**
- (+) More flexibilty/less "hacking"
- (+) Less unknowns
- (+) Could be made to be more reusable than a hacked forms-library-only solution (could be scope-creep in doing so though)
- (-) Need to make page from scratch (not a huge lift, just additional effort)
- (-) Would not benefit from built-in accessibility functionality
- (-) Sunk cost of existing efforts funneled into option 1a
- (-) Not using the forms library pages / components is discouraged (but tons of pages with VA modals are custom pages)


## Options 2 - [Confirm through on page alert](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=17488-88728&t=mG6EsOEiWXdijIen-11)
Description: Allows for the user to confirm their intent to proceed and delete content through an on-page warning alert.

**Design Considerations**
- (-) Does not follow common patterns found in other patterns and digital experiences
- (-) Controls living within the alert may cause confusion with page options and controls in the rest of the form page the alert shows up in
- (+) Allows for users to change their responses at review and submit in a way that feels compatible with the existing review and revise experience.

**Technical Considerations**
- (-) Requires additional technical discovery
- (-) May run into similar limitations as as using native modal prompts


## Options 3 - [Confirm in separate injected page](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=17488-88729&t=8tz10BpOG3VvI7UE-11)
Description: This uses a new page, proceeding the choice to discard data, to prompt the user to confirm if they want to opt-out of, or remove answers they already provided, using the forms library pages and components, on a new page, instead of a modal.

**Design Considerations**
- (-) Does not follow common patterns found in other patterns and digital experiences
- (-) Experience feels disruptive and tacked-on
- (-) Introduces complexity with changing responses on the review page, requiring the injection of an additional item for review that requires “editing” to confirm the action (the injected page)

**Technical Considerations**
- (+) Appears easiest/quickest from engineering standpoint
- (+) Uses 100% forms library known conventions


## Contractor Recommendation

It is our recommendation that we go with Option 1b - [Confirm through modal prompt](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=17488-88727&t=mG6EsOEiWXdijIen-11) using custom page.

### Reasoning

This option allows us to accomplish the original design, as already approved, in both functionality and visual design. 

When comparing 1a vs 1b, option 1b we think is able to be done in less time, and also has less unknowns. The flexibility of a custom page, means we have more options available to solve any issues, where-as the rigidness of the forms library could potentially restrict us in being able to deliver quickly in 1a (as it already has). 

Additionally, the negatives described are not blockers in our opinion. 

- (-) Need to make page from scratch (not a huge lift, just additional effort)

This negative is not a huge deal. 
  
- (-) Would not benefit from built-in accessibility functionality

We belive this can be mitigated such that it is still accessibly built, just on a custom page, with a small bump in effort to review/confirm accessibilty. 
  
- (-) Sunk cost of existing efforts funneled into option 1a

Sunk cost is already sunk. We do not belive this is a compelling enough argument to make us keep with option 1a. Plus we had to sink this effort, to arrive at where we are now. It gave us a better understanding of the forms library, modal, and how they interact (or do not interact).

- (-) Not using the forms library pages / components is discouraged (but tons of pages with VA modals are custom pages)

As mentioned in the bullet, there are many pages that are custom pages. It is not always a bad thing to use a custom page, the forms library pages have known things they cannot support and in those cases using a custom page is utilized. 

## Decision
[Once the decision we'll add it to the document]
