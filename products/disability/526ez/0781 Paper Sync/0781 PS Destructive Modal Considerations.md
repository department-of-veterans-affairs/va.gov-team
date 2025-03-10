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

This is a destructive action, that the user is initiating. VA guidance (find link, insert here) is that we should alert the user and make them confirm, before doing a destructive action. 

We are trying to decide, how to best accomplish that.

### Decision
TBD

### Consequences
TBD

### Options Considered
Here are the various options, with the pros and cons of each listed.

#### Option 1 - UX modal using forms library to do so.
Description: This uses a modal to prompt the user to confirm if they want to opt-out of, or remove answers they already provided, using the forms library pages and components.

Pros:
- Sticks to original planned design
- Pages are already built
- Forms library is the default thing to use
- Some technical research has already been conducted for this

Cons:
- Requires refactoring/building around "hacking" the forms library, in an new/unconventional way
- Not been done before
- Design potentially doesn't like modals



#### Option 2 - UX modal using custom page
Description: This uses a modal to prompt the user to confirm if they want to opt-out of, or remove answers they already provided, using the forms library components, on a custom/from-scratch page.

Pros:
- Sticks to original planned design
- This is how modals are done elsewhere
- More flexibilty/less "hacking"
- Less unknowns
- Could be made to be more reusable than a hacked forms-library-only solution (could be scope-creep in doing so though)

Cons:
- Need to make page from scratch (not a huge lift, just additional effort)
- Design potentially doesn't like modals
- Not using the forms library stuff is probably discouraged somewhat or not prefered from forms library team (but tons of pages with VA modal are custom pages, so not a huge con)


#### Options 3 - New page 
Description: This uses a new page, proceeding the choice to discard data, to prompt the user to confirm if they want to opt-out of, or remove answers they already provided, using the forms library pages and components, on a new page, instead of a modal.

Pros:
- Appears easiest/quickest from engineering standpoint
- uses 100% forms library known conventions
- Is not a modal

Cons:
- Potentially unknown UX experience
- (Ruben are there any to add here??)


#### Options 4 - On page alert (Ruben, any additions????)
Description: 

Pros:
- Is not a modal

Cons:
- Seems clunky

## Contractor Recommendation
### Recommendation
### Reasoning
