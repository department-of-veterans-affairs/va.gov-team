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

- Profile patterns and technical implementation of reusable patterns / pieces
  - We have some reusable pieces of form ie: `ProfileInformationFieldController` but it isn't flexible, is tightly coupled to the single 'god' component, and only supports a limited set of fields. There is no support for the direct deposit form.
    - How can we make reusable pieces of code to enable users to integrate the user's profile information into forms, and know that those pieces exist.
    - Form page structure, size, and layout differ, so how do we make sure the reusable pieces fit into any form with minimal friction?
  - Address validation re-work. The address validation flow sucks, and we should make it better
