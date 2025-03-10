# ADR001 - 526ez embedded 0781 Paper Sync Destructive Actions

(from [template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/96040d545254651a83e3d1d2d28d2c41ee41f224/products/va-mobile-app/engineering/adr/_template.md?plain=1))

### Status
Pending


### Decider(s)
* Kyle Soskin @kylesoskin
* Emily Theis
* Sam Wiley
* Leah Keeler
* Shannon Ford
* Nathan Burgess
* Robin Garrison
* Ruben Sun
* Lisa Capaccioli

### Context
We have to support destructive actions in our new 0781 flow. This includes, allowing a user to opt-out of the flow entirely, or to decide against answering specific sub-componetns of the form flow. 
It is possible, the user could have already answered some of these questions, and then navigated back, to the area that asked if they wanted to answer the questions or not. If they change their answer after answering some of the questions, we have to delete that data, and make sure it does not make its way onto the form(s)/submission(s).

This is a destructive action that the user is initiating. VA guidance instructs to [prompt to confirm](https://design.va.gov/components/alert/#additional-reasons-to-consider-something-else:~:text=Destructive%20actions.%20If%20an%20action%20will%20result%20in%20destroying%20a%20user%E2%80%99s%20work%20(for%20example%2C%20deleting%20an%20application)%20use%20a%20more%20intrusive%20pattern%2C%20such%20as%20a%20confirmation%20modal%20dialogue%2C%20to%20allow%20the%20user%20to%20confirm%20that%20this%20is%20what%20they%20want.) before performing the destructive action. 

We are trying to decide, how to best accomplish that.

### Decision
TBD

### Consequences
TBD

### Options Considered
Here are the various options, with the pros and cons of each listed.

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
- (-) Requires refactoring/building around "hacking" the forms library — may be difficult to maintain
- (-) Not been done before


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
- Does not follow common patterns found in other patterns and digital experiences
- Experience feels disruptive and tacked-on
- Introduces complexity with changing responses on the review page, requiring the injection of an additional item for review that requires “editing” to confirm the action (the injected page)

**Technical Considerations**
- (+) Appears easiest/quickest from engineering standpoint
- (+) Uses 100% forms library known conventions


## Contractor Recommendation
### Recommendation
### Reasoning
