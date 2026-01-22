# Can we infer the state of the checkboxes (intended expense types) from claim details?

## BLUF:
No, we cannot. We can mitigate this with UX, with varying degrees of expectation management.

## Problem
There are complexities with "select your intended expense types" checkbox feature that we need to address. Mostly - how to preserve what has been checked so we can efficiently return the user to their workflow.

## Approach
We would avoid having to use local storage or another option to save the checked expense types by simply not saving the checked expense types and using the claim's details to determing where to put the user back into the workflow. 
The only viable option is to place the user at the ["review your claim"](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=7896-19055&t=6eROr23nirFn4vDa-4) page. On this page, they will be able 
to see the expense types they've added, the expenses they've added, and have the option to go back and select more expense types.

## Benefit
By doing it this way we avoid having to store any superfluous data like the selected checkboxes in local storage or more robust storage.

## Drawback
The user has an expectation that the application knows what they want to add because they've selected it up front. They may be disappointed to learn they have to reselect their additional expense types in order to continue. Other options ([option 3](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=8024-21712&t=6eROr23nirFn4vDa-4)) don't have this expectation up front.

## Diagram
<img width="1072" height="420" alt="image" src="https://github.com/user-attachments/assets/0b7a67b0-b861-4abb-b687-d87bafdc6ef4" />
