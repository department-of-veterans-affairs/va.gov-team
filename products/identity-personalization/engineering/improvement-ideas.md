# Engineering Improvement Ideas

- React router upgrade
  - How do we upgrade to the current version and not break existing applications?
  - Within the current experiments in TypeScript could we use a different router like Tanstack Router
  - What are the benefits from a different router / updated router?
    - Data loaders for streamlining API calls on route change
    - Error handling integrated into the data loaders, and pre-fetching data when possible
    - Actions to create data mutations / updates can be integrated into the routes instead of living in a redux action creators or in app logic.
   
- Type safe applications
  - When applications scale, having type safe code provides benefits from less bugs, better documentation in code, and stonger contracts between apis and frontend applications
  - Where can we infer type data to create safer applications that are easier to write
  - JSDoc types, doc annotations used within the platform to indicate types in vanilla JS
  - Typescript base and how can we build types into those experiments so that platform could progressively get typing added to core
  - How do we help engineers get familiar with TypeScript and utilize types
  - What kind of guard rails do we put in place for types? no any? Tslint / Tsconfig and how do we handle PRs with typing issues? Is it on the reviewers to look at all typing and making sure new types are only created when needed, and that if shared types are used that they consistent. Handling breaking changes in type declarations is going to be tough
  - Where do shared types come from?
    - TRPC style? Use server code to generate types in some way. A clent sdk is generated from the ruby based types if possible, or maybe from the vets-json-schema
    - Openapi client generator? The openapi docs for vets-api

- State management modernization
  - The way that the vets-website FE works with application state is very dated
  - The official react redux docs point towards using redux toolkit (RTK), along with managing async state with RTK query
  - Is this the best way to support application state within our applications?
    - What are the pain points with state management now? Managing feature toggle state, form state, authentication, profile state usable by forms, other application state that could auto-fill form data to reduce burden by users submitting a form.
    - Can some state be abstracted into a better mechanism. Everything doesn't belong in redux and our state store can be pretty bloated with duplicated data.
    - When is a state store too large? How do we slice state and what proctices do we encourage to scale our applications when needed
  - `react-redux` currently at 7.2.6 released Oct 25, 2021. Current version is 9.1.1
    - using the updated version in a discovery branch along with redux toolkit as a MVP of updated setup

- Finite state machines for application state tracking - XState
  - https://stately.ai/docs/xstate
  - There are many states that the Profile can be in and corresponding UI that is unique to those states.
  - A finite state machine is used to track the  one particular 'state' that an application can be in at one time (saving, errored, blocked due to fiduciary, etc)
    - because only one state can be represented at a time, all these application states can be mapped and represented in ways that non-engineers can understand quickly, and this can be used to document and application and it's various lifecycles.
  - not only can the various 'blocked' states be represented for the profile, but the states of all the toggles could be represented and documented, and I think this could help in making the logic clear and the coding less 'bottom up' in nature, and easier to test overall.
  - Not something that is the easiest for engineers to grasp and would require some buy in. A state machine for a singular toggle or a low amount of states probably doesn't lend much benefit, but for complex situations like the Profile, there is a benefit from having clears paths that occur for states of the application.  

- Profile patterns and technical implementation of reusable patterns / pieces
  - We have some reusable pieces of form ie: `ProfileInformationFieldController` but it isn't flexible, is tightly coupled to the single 'god' component, and only supports a limited set of fields. There is no support for the direct deposit form. I woudldn't necessarily suggest that the Direct Deposit form should be added to this component, but a more modular way of rendering a field's data should be worked on to allow easier integration of new / existing profile data with form apps.
    - How can we make reusable pieces of code to enable users to integrate the user's profile information into forms, and know that those pieces exist.
    - Form page structure, size, and layout differ, so how do we make sure the reusable pieces fit into any form with minimal friction?
    - Decouple the form fields from the single controller component. Make reusable hooks for the api calls, form schema creation, and other pieces of the FE logic so that they can be easily reused or dropped into a form to be part of the flow.
    - Making sure the current profile data is easily pulled in directly from the profile to fill out a users form fields and the common components are used in all forms. This would be working with forms teams to make sure that they are not re-inventing the wheel in their forms.
    - _Some_ forms are using our shared components: APPEALS - 10182, 995, 996 and LETTERS, but that is it so far. We should audit all the forms and see where the profile data could be used to pre-fill the form fields.

- Not using the form library for the forms on the Profile
  - The developer docs specifically call out CRUD applications as a place not to use the form system, because it fits into the multi-page form paradigm better.
  - https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-overview#VAFormsLibraryOverview-WhatisnotaForm?
  - If we still wanted to integrate into other forms though we would need to provide some sort of getter / setter for a decoupled profile field solution so that this data could be used for a multi-page situation. 

- Address validation re-work. The address validation flow sucks, and we should make it better
  - Current validation service does not validate military base addresses, and will always prompt the users to confirm their address since no matches were found. Maybe this step could be removed when the user indicates living on an overseas military base, or it could be improved in some way.
  - Live address suggestion? Lots of web applications use a live search feature that pulls in the correct address as someone types, that would be a better user experience I think that waiting for a suggestion after submitting the form. There would probably be accessibility concerns that would need to be accounted for, but the current flow is admitedly less than idea. 

- Developer Tools / Powertools for working locally or in non-prod environements
  - Easily manipulate feature toggle values on the fly and see the results in the UI immediately
  - Change the state of a user (LOA1/3, MFA status, login service, branch of military, etc)
  - Provide a secondary functionality where a plugin or module could be provided to the devtool and it would render in a tab, that way a specific app team could make thier own mini set of tabs or functionalities to use in their app if they wanted.
  - Would need to mount the devtools on the root of the app or in the startApp function so that it could be provided to the entry point of the application.
