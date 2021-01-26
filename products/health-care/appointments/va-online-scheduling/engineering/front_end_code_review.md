# Front end code reviewer guide (WIP)

This is a guide for people reviewing front end code for VAOS.

## Critical things to check

These are the most important things to check for a PR review, for easy reference. More detailed explanations are below.

- [ ] Are the changes fully explained in PR description and cover what is described in the linked issue?
- [ ] Are there screenshots showing the effects of style/cosmetic tweaks?
- [ ] Does the PR have tests that cover any functional changes that will be live in production?
- [ ] Are any changes to current tests clearly explained by the functional changes being made in the PR?
- [ ] As best you can tell, do the changes account for the different types of data we can receive from the backend?

If you as a reviewer can verify these things, then we as a team should be comfortable with the code being committed. Code quality or organization issues can always be fixed after the fact, and obscure edge cases missed by unit tests are unlikely to be caught in code reviews generally.

### Explanation

- Are the changes fully explained in PR description and cover what is described in the linked issue?
   - This one is probably self-explanatory, but as a reviewer, you should be able to understand why the changes are being made by reading the PR and issue descriptions
- Are there screenshots showing the effects of style/cosmetic tweaks?
   - Also self-explanatory, but screenshots are the equivalent of tests for cosmetic changes: proof that the author's change did what they said
- Does the PR have tests that cover any functional changes that will be live in production?
   - The most important way we avoid breaking things in production is by having good tests that cover the functionality being added
   - If the changes are behind a feature that isn't live yet, it may make sense to defer unit tests, though this shouldn't be a common occurence.
   - As a reviewer, you should verify that the the mock data in the test is a realistic reflection of the data we will get from the backend. You should be able to verify this with information in the PR description, issue description, or elsewhere in the codebase. If not, then the author needs to document why they are doing what they are doing.
   - Only style changes with complicated JS logic need unit tests
   - Having the Code Climate extension installed will show you uncovered code
- Are any changes to current tests clearly explained by the functional changes being made in the PR?
   - Tests should only change when the functional, user-facing behavior changes. Any changes to tests other than that should be carefully reviewed and verified that they are necessary.
- Do the changes account for the different types of data we can receive from the backend?
   - There's a lot of variety in the data that comes back, so we should try to verify that the changes handle different types of appointments/requests as well as potentially missing data.
   - For the appointment list page, this means:
      - VA or CC Requests
      - Video appointments (and the different video appointment variations)
      - In person or phone only VA appointments
      - Community care appointments
      - Community care appointments stored in VistA
      - Express Care requests
   - For the new appointment flow:
      - CC request flow
      - VA request flow
      - Direct schedule flow
      - Cerner sites flow

## Other things to consider

### Quality of user experience

- Are the appropriate html tags being used, rather than lots of generic divs and spans?
- If the PR involves making a backend api call, does the PR account for that call being slow or failing?
- If the PR is creating new UI elements and new state (Redux or component), is focus appropriately set after UI changes?
- Do links have appropriate and unique text for screen reader users?
- Can all functionality be accessed just by using the keyboard?

## Application structure

- If new Redux state/actions are added:
   - Is the state used across multiple pages? If not, component state might be better
   - Are the new state values defaulted in the `intitialState` object in the reducer file?
   - Does the reducer avoid mutating any data passed in from the action?
   - Are the action names past tense and reflect what action a user took, rather than what data is being changed in the state?
   - Can any logic in the action creator function be shifted to the reducer?
- Were the changes made in the right place for our architecture?
   - Services/transformers
      - These contain functionality related to fetching data from the backend, transforming it to FHIR, and pulling different types of information from FHIR formatted data
      - Generally, we want to use services to get VAOS data and to tell us information we need about that data
   - Redux action creator functions
      - These take user events from components, make the appropriate service calls, and dispatch Redux actions containing the resulting data
      - They're generally arranging functions
   - Redux reducers
      - Take action data and update the Redux state appropriately
   - Selectors
      - These are used to pull data out of the Redux store and transform it into a useful format for components
   - Components
      - These take data from the Redux or local component state and render the appropriate UI for users

### Code maintainability
- Look for confusing lines/groups of lines. Confusing bits of code need to be addressed in one of three ways:
   - Simplified by looking for ways to remove extraneous pieces or complicated constructs
   - Comments added to call out why something is happening
   - Or, if neither option above is feasible, the author needs to help the reviewer understand the code better through a comment or on a voice/video meeting
- Look out for duplicated code. Duplicated code isn't necessarily bad, but if if you see something duplicated more than 3 times, consider if it could be pulled into a separate function or component
- Look out for code that you don't know the purpose of. If you come across code that you know what it's doing, but you don't know why it's there, it can mean a few things:
   - The author made changes outside the scope of the PR/ticket description. This can be ok, but it can also mean there was a communication breakdown that needs to be fixed
   - The code is unnecessary and can be removed
   - The author didn't communicate the changes well enough in the PR description or inline comments and should help the reviewer better understand the code
   - The code is in an unfamiliar part of the codebase or takes advatanges of unfamiliar shared code, in which case the auther should help the reviewer understand that part of the code better
- Do the names of functions/components/variables make sense? This is one of the biggest pieces of making code understandable, making sure constructs are named clearly and accurately
- For any custom css, are there design system utilities that could be used instead?



