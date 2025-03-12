# ADR001 - 526ez embedded 0781 Paper Sync Destructive Actions Decision Document
March 11, 2025 

### Status
Closed

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
Veterans may sometimes answer questions but later decide they no longer wish to provide those responses. To ensure their confidence, any changes they make should guarantee that the previously entered data will not be included in their submission. Our solution empowers users to modify their responses with the assurance that previously-saved data will be removed.

The proposed solution was to implement a modal that appears after the user has answered questions, later decided to go back and opt out of that part of the flow, and clicked the "continue" button on the opt out page. The modal would prompt the user to either confirm or cancel their decision to delete the data and skip that part of the flow. Upon confirmation, only the data associated with that flow would be deleted, and the user would proceed to the next page.

This solution posed several challenges that the team believed required further exploration, including identifying potential reliability/data integrity risks and assessing the level of effort involved.

### The problem
The standard Forms Library framework doesn't support the flow as we intended to use it. Most importantly, it doesn't by default support deleting data captured on pages other than the one the user is currently viewing. As the pages were already built using the standard Forms Library pattern, we would have had to do some unconventional/brittle code tricks to force this to work. Because this approach hadn't been taken before, it presented a lot of risk to maintainability, tech debt, and data integrity.

### Options Considered
Collboarating between team engineers, design, product, VFF team members, and engineers from other VABC teams, the team came up with some options for possible solutions, including both the pros and cons of each option to better inform OCTO and help support their decision making.

## Option 1a - [Confirm through modal prompt](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=17488-88727&t=mG6EsOEiWXdijIen-11) on a page built using the normal Forms Library pattern.
Description: This uses a modal to prompt the user to confirm if they want to opt-out of or remove answers already provided.

**Design Considerations**
- (+) Follows common patterns found in other platforms and digital experiences
- (+) Conforms to platform guidence surrounding how to handle destructive actions
- (+) Allows users to [change their responses at review and submit](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=17518-112797&t=8oelFOHVaNWUTIaM-11) through experience native to the forms library (modal appears in the prompt item in review)

**Technical Considerations**
- (+) Pages are already built
- (+) Forms Library is the default recommended approach to building any form page
- (+) Some technical research has already been conducted for this
- (-) Requires unconventional "hacks" to force to work with a Forms Library page
- (-) May be difficult to maintain, tech debt introduced 
- (-) Additional risk in utilizing/exploiting non-standard functionality
- (-) Not been done before, unknown unknowns likely exist


## Option 1b - [Confirm through modal prompt](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=17488-88727&t=mG6EsOEiWXdijIen-11) using [Custom Page](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-bypass-schema-form)
Description: This uses a modal to prompt the user to confirm if they want to opt-out of, or remove answers they already provided, on a page built outside of the typical Forms Library. These are called "Custom Pages" and they are an approach used by several teams in places where the Forms Library doesn't support advanced functionality by default.

**Design Considerations (same as 1a)**
- (+) Follows common patterns found in other platforms and digital experiences
- (+) Conforms to platform guidence surrounding how to handle destructive actions
- (+) Allows users to change their responses at review and submit through experience native to the forms library (modal appears in the prompt item in review)


**Technical Considerations**
- (+) Without being restricted by the Forms Library, this can be built using normal front end best practices
- (+) Less unknowns
- (+) Could be made to be more reusable than a hacked forms-library-only solution (could be scope-creep in doing so though)
- (-) Need to make page from scratch (not a huge lift, just additional effort, much of the work already done on the pages such as content is already done)
- (-) Would not benefit from built-in accessibility functionality (teams add this functionality themselves when building a Custom Page)
- (-) Sunk cost of existing efforts funneled into option 1a
- (-) Not using the Forms Library pattern is generally discouraged (but is widely used for more complex UX, including in ALL places we are currently using the VA Modal we would use here)


## Option 2 - [Confirm through on page alert](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=17488-88728&t=mG6EsOEiWXdijIen-11)
Description: Allows for the user to confirm their intent to proceed and delete content through an on-page warning alert.

**Design Considerations**
- (-) Does not follow common patterns found in other digital experiences
- (-) Controls living within the alert may cause confusion with page options and controls in the rest of the form page the alert shows up in
- (+) Allows for users to [change their responses at review and submit](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=17518-117359&t=8oelFOHVaNWUTIaM-11) in a way that feels compatible with the existing review and revise experience.

**Technical Considerations**
- (-) Requires additional technical discovery
- (-) May run into similar limitations as as we did with Option 1a


## Option 3 - [Confirm in separate injected page](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=17488-88729&t=8tz10BpOG3VvI7UE-11)
Description: This uses a new, conventional Forms Library page to prompt the user to confirm if they want to opt-out of and remove answers they already provided for part of the flow, instead of asking for this in a modal on the opt out page (Option 1a and 1b)

**Design Considerations**
- (-) Does not follow common patterns found in other digital experiences
- (-) Experience feels disruptive and tacked-on
- (-) Introduces complexity when changing [responses on the review page](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=17518-121972&t=8oelFOHVaNWUTIaM-11), requiring the injection of an additional item for review that requires “editing” to confirm the action (the injected page)

**Technical Considerations**
- (+) Appears easiest/quickest from an engineering standpoint
- (+) Uses 100% default Forms Library conventions


## Contractor Recommendation

It is our recommendation that we go with Option 1b - [Confirm through modal prompt](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=17488-88727&t=mG6EsOEiWXdijIen-11) using a custom page.

### Reasoning

This option allows us to accomplish the original design, as already approved, in both functionality and visual design. 

When comparing 1a vs 1b, we believe option 1b is able to be implemented in less time, and also has fewer unknowns. The flexibility of a custom page means we have more options available to solve any issues, whereas the rigidness of the Forms Library could potentially restrict us from being able to quikcly deliver option 1a (as it already has).

As noted above, Custom Pages are how most teams have tackled more complex UX designs that aren't baked into the Forms Library by default.

Additionally, the negatives described are not blockers in our opinion:

- (-) Need to make page from scratch (not a huge lift, just additional effort)

Most of the functionality required to build from scratch has already been done on several Custom Pages all throughout the app. Additionally, all of the content has already been created and would simply be copy pasted.
  
- (-) Would not benefit from built-in accessibility functionality

We belive this can be mitigated such that it is still accessibly built, as has been done on other Custom Pages, with a small bump in effort from our team to review/confirm accessibilty requirements are met. 
  
- (-) Sunk cost of existing efforts funneled into option 1a

Sunk cost is already sunk. We do not belive this is a compelling enough argument to require we continue with option 1a. Plus, we had to sink this effort already to arrive where we are now. It gave us a better understanding of the Forms Library and modal, and how they interact (or do not interact). It would make option 1b much easier than it would have been.

- (-) Not using the forms library pages / components is discouraged (however, many pages with VA modals are custom pages)

As mentioned in the bullet, there are many pages that are Custom Pages. It is not always a bad thing to use a Custom Page; the Forms Library pages have known functionality they cannot support, and in those cases a Custom Page is utilized. 

## Decision
03/11/2025 3:30 PM
[Slack](https://dsva.slack.com/archives/C04KW0B46N5/p1741722383243239)

OCTO confirmed in our meeting that they agree and accept the team's recommendation to go with Option 1b.  

Lisa confirmed that this will impact a total of 12 modal. Two of which are for the file upload to remove the document. This feature has not been solutioned yet and will need to be planned later. The other 10 modals includes the Review and Submit page, which the team has not had time to review if there will be any impact to adding modals to that page. There is a potential risk that adding modals to Review and Submit may not be as easily feasible.  

RE: 0781 upload opt out (includes remvoing the file)

We had a spike for this sprint to solution the removing the file in this use case. Unfortunately Kyle got pulled into other issues (production). We have to do the spike this sprint now. Which if done soon enough and we don't have any issues or risks, then maybe we can do the modal too. We just don't know yet.
