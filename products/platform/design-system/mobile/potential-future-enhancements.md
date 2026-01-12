# Potential Mobile Component Future Enhancements

This is a document to keep track of big picture future enhancements around the mobile components that are not yet concrete enough to have an initiative/epic/tickets to track. 

As of the creation in January 2026, this is comprised of ideas carried over from the prior mobile design system team when it was part of the VA Mobile App contract before being rolled into the VA Design and Forms Systems contract. That may change over time.

Note: VAHB stands for "VA Health and Benefits" AKA the flagship mobile app.

General template of potential projects:
>* #### Project title
>   * Summary: A brief explanation of what it intends to do
>   * Justification: A brief explanation of why it should be done
>   * Ticket(s): Any ticket(s) associated with the work including: old tickets for it that were closed, the ticket that originated the potential future enhancement, etc.

### List of technical debt/targeted efforts (in no particular order):
* #### Explore Improved Components Package Publish Config
   * Summary: The components package has a messy try/catch logic to determine if it's being loaded from our Storybook sandbox environment or a consuming app--this effort would fix that
   * Justification: This is a very simple change for significant improvement, but was not implemented for one reason: Yarn is bugged, posting about having it fixed was ignored, and 2 years later it still is believed bugged--if the bug is ever fixed by Yarn to work correctly (or we move to pnpm where it does work), this is a no brainer to do
   * Ticket(s) below: 136
* #### Document type, variable, and function naming conventions
   * Summary: Expand [documentation for naming conventions](https://github.com/department-of-veterans-affairs/va-mobile-library/blob/main/documentation/namingConventions.md) to include types, variables, and functions in addition to the props it already has
   * Justification: Good practice to establish naming conventions as product matures for consistency and communication; this maybe should be combined to some degree with web--an effort that would likely require significant reconciliation between the two
   * Ticket(s) below: 508, 529
* #### ESLint Rule to Separate Local and External Imports
   * Summary: Explore ESLint rule to enforce external package imports (e.g. `react`, `react-native`) appear in a separate alphabetical list above local imports (e.g. custom `utils` folder)
   * Justification: Good practice used by the VAHB app that is [often a source of styling mishaps](https://github.com/department-of-veterans-affairs/va-mobile-library/pull/503#discussion_r1779005218) due to how VS Code adds new imports automatically--believed VAHB is using an ESLint rule to automate it and the components should too
   * Ticket(s) below: 509

### List of new components/full projects (in no particular order):
* #### Component search and statistic gathering
   * Summary: Create a tool to determine component usage by consumers of the mobile components
   * Justification: Tooling exists for web components, is a gap that it doesn't for mobile components
   * Ticket(s) below: 56, 243
* #### Evaluate Patterns
   * Summary: Determine how mobile wishes to handle patterns (in components package? separate package?)
   * Justification: One pattern-like behavior was noted around the Link component where almost every instance of a phone number in the VAHB app is accompanied by the TTY number--two Link's stacked together
   * Ticket(s) below: 83
* #### Native Components/Functionality
   * Summary: Explore implementing native iOS/Android (non-React Native) components or functionality
   * Justification: We already encountered one case with the Link's add to calendar variant which in VAHB uses native code/functionality to determine the user's default calendar app and then pull it up prefilling the details; in an ideal world the components are platform-level logic that would/could handle such platform-level operations so app teams wouldn't have to
      * In theory, it's ideal for the components to pull out such functionality to streamline using components for consumers
      * In practice, it's technically challenging (potentially not possible) because native code needs to be integrated with the build process of the app and it's not readily clear if/how that might work for logic being pulled in via an NPM package--at the very least, it'd require special app-level config
      * As long as VAHB is the only consumer of the components, this is a lesser priority because they already have the native code for any current uses and components can just provide a passthrough
      * There's an argument to be made such native code doesn't belong in the components themselves since it's likely more business logic than UI
         * Potentially if we ever did this, it should be a new package for sharing the core business logic--used by default in the components, but living separately and also accessible by consumers separately
   * Ticket(s) below: 124, 169, 192, 204, 514 (potentially--it's possible React Native adds support for custom focus style functionality eventually)
* #### Link Post-MVP Improvements
   * Summary: Improvements identified for the Link component during creating it or during implementation in VAHB
   * Justification: Simply items that were determined out of scope for incorporation in the Link MVP implementation for one reason or another
   * Ticket(s) below: 169, 172, 186, 211, 214, 221, 225, 315, 571
* #### Inline Link Component
   * Summary: Tied to above Post-MVP items, but intended to be part of MVP until running into technical hurdles and only having one use case in VAHB
   * Justification: A nice-to-have companion to the Link component
   * Ticket(s) below: 186, 203
* #### Create Paragraph component
   * Summary: Proposed component to handle paragraphs of text including embedded links, styling (italics, bold, etc.), and other behavior in a more intuitive way than the React Native Text component (need to apply unique styles manually with nested Text's) and the Text component (just a convenience function to leverage typography tokens, doesn't handle more robust behavior)
   * Justification: Tied to Link Post-MVP and Inline Link, created around shortcomings of Inline Link behavior and other challenges with general styling with React Native that is baked into browsers for web--component would ideally deliver a more web-like experience with just simple wrapping functions within what's sent to the Paragraph component
   * Ticket(s) below: 214, 571
* #### Require Components Integration Test Pass to Publish
   * Summary: Proposal to require the "Check Component Integrations" action to pass before a package update is published to NPM
   * Justification: In theory a good idea as a safeguard we aren't adding breaking changes for VAHB by running their unit test suite against the changes prior to publishing, but see details below on Ticket 230 for challenges with the concept that justified this being a potential future enhancement instead of planned to be done anytime soon
   * Ticket(s) below: 230


The source material from [a comment on Ticket 5344](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5344#issuecomment-3687644923) that went through the old board:
>Close: to be tracked 
>
>* [Ticket 56](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/56); epic  
>   * Component search and statistic gathering:  
>   * Still a relevant project to automatically gather usage stats similar to web, but of limited relevance with a single app consuming the mobile components and challenging to accurately track with some components being wrapped (e.g. "used" once in the app, but then the wrapping component is used many places)  
>* [Ticket 83](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/83); epic  
>   * Evaluate Patterns:  
>   * As yet we have no mobile patterns, but depending on where mobile file upload goes it could be? Regardless this is a good general item to have on our radar to consider when a component becomes a pattern and if we want to do anything special if/when we encounter one  
>* [Ticket 124](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/124); engineer  
>   * Investigate the possibility of packaging native (not React Native) components:  
>   * Still a relevant open question, but a very low priority one at this time--likely years down the road if ever  
>   * \#NATIVE  
>* [Ticket 136](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/136); engineer  
>   * Explore Improved Components Package Publish Config:  
>   * A great improvement to the package structure by removing an ugly workaround, but blocked by a yarn bug that hasn't been addressed in nearly 2 years and is unlikely to be  
>* [Ticket 169](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/169); engineer  
>   * Link \- Add support for link to add to calendar:  
>   * Involves native code to handle which would require separate research to do within a component; may no longer be valid soon as there was recent debate on if "Add to Calendar" should be a Link or Button component  
>   * \#NATIVE  
>   * \#LINKPOSTMVP  
>* [Ticket 172](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/172); engineer  
>   * Link \- Improve "Get directions" behavior:  
>   * Post-MVP enhancement to the Link component to adjust from using non-a11y-compliant default OS alerts in favor of an action sheet for the Directions Link variant before navigating to the maps app; potentially not possible without figuring out native integration, would require building a custom Action Sheet (itself potentially a separate component)  
>   * \#LINKPOSTMVP  
>* [Ticket 186](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/186); engineer  
>   * Inline Link component:  
>   * The mobile Link component was at one point intended to contain an "inline" component separate from the base Link component due to how React Native functions where the normal Link component was built normally (and behaves nicely as a standalone link), but also there was a separate Link variety that would embed nicely within a paragraph of text (using RN's Text component)--this variant encountered various problems especially around the inclusion of the icon and breaking formatting with the surrounding text. There was (still is?) only one use of proposed Inline Link, secure messaging to parse any links added within the message content by patient or provider. The existing Link component exhibits the same (not ideal) behavior as the app had before the Link component in the specific scenario.  
>   * Effectively: we should track potentially adding Inline Link sometime in the future and retain the knowledge shared on this ticket, but it is not a priority item because it turned into a can of worms with many technical issues the first time--thus closing for now and just documenting as a "maybe, someday" item  
>* [Ticket 192](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/192); engineer  
>   * Determine how many components require native functionality:  
>   * A ticket generated by 169 above to come before it--yet another exploration around options for native iOS/Android (not React Native) componentization; still a relevant open question, but a very low priority one at this time--likely years down the road if ever  
>   * \#NATIVE  
>* [Ticket 203](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/203); engineer  
>   * Bug with Inline Link component on iOS only:  
>   * Tied to ticket 186 above--with the removal of the Inline Link it is a bug that no longer manifests, but wherever we track the potential creation of Inline Link we should document this as a bug to be cognizant of testing/fixing during working on it  
>* [Ticket 204](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/204); engineer  
>   * Text Input \- technical discovery:  
>   * A ticket noting a flaw with the VAHB text input components not using native mobile capabilities (e.g. autofill) and looking to evaluate it as part of creating the Text Input component; unsure if VAHB ever fixed that, the Text Input component was never built but previously was the next component to be built; should keep track with both Text Input creation and native functionality to have on our radar if/when we look into either  
>   * \#NATIVE  
>* [Ticket 211](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/211); epic  
>   * Link Component Post MVP:  
>   * An epic tracking Link component enhancements determined outside the scope of the MVP  
>   * \#LINKPOSTMVP  
>* [Ticket 212](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/212); epic  
>   * Snackbar Component Post MVP:  
>   * An epic tracking Snackbar component enhancements determined outside the scope of the MVP  
>* [Ticket 214](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/214); epic  
>   * An epic proposing a Paragraph component:  
>   * This was the determined direction to handle various issues with paragraph formatting--creating a Paragraph component. Also included the ticket for Inline Link. This should stay on our radar: this is handled by default in web browsers, but can be a pain in React Native when doing special formatting within a paragraph of text so this could provide real value for consumers. That said, it's also a pretty amorphous component that would be tricky to do in a sensible way.  
>   * \#LINKPOSTMVP  
>* [Ticket 221](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/221); engineer  
>   * Link \- Action sheet refinements:  
>   * A design request on the behavior after tapping phone variety Links; current behavior uses the default iOS/Android OS handling of phone numbers--I am not sure this is possible, but if it is it may relate closely to Ticket 172 above with regards to a custom action sheet for the Directions variant of Link  
>   * \#LINKPOSTMVP  
>* [Ticket 225](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/225); engineer  
>   * Link \- Consider additional sizes:  
>   * A design request for optionally smaller icon than the default 24x24 for Links and typography; technically this could be easily done if desired--in fact, for icon sizing, checking the component this can be done today by consumers by them simply choosing to send a size override via maxWidth or height/width props to the Link's icon prop which takes an object; typography would need additional changes  
>   * \#LINKPOSTMVP  
>* [Ticket 230](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/230); engineer  
>   * Publish should depend on components integration passing:  
>   * In theory a good idea, but in practice it has a fundamental problem: any breaking changes would make the components integration fail which would in turn make the publish flow fail and we could never publish a package again without manually overriding it; additionally of the visible history going back to October 2024, the components integration test has run 37 times and failed all but 5 despite working in the app that entire period  
>   * Put in to be tracked by other means category because in theory it could be made to work under the following:  
>     * We fix the flakiness of the test--most recently the failures appear related to having an outdated/invalid auth token to build the app which is unsurprising, we'd need to figure out the auth and potentially other problems  
>     * Should only apply to patch versions pre-version 1.0.0, minor versions can contain breaking changes until we officially "release" the components  
>     * Should only apply to patch/minor versions after version 1.0.0, major versions can contain breaking changes and would expectedly fail the test  
>* [Ticket 243](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/243); engineer  
>   * Discovery \- Component search and statistic gathering:  
>   * Still a relevant project to automatically gather usage stats similar to web, but of limited relevance with a single app consuming the mobile components and challenging to accurately track with some components being wrapped (e.g. "used" once in the app, but then the wrapping component is used many places); same as Ticket 56 above  
>* [Ticket 315](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/315); engineer  
>   * Determine if we want to add ClickToCallPhoneNumber and AttachmentLink helper utils to Link:  
>   * AttachmentLink part duplicative with Ticket 184 above; other portion a valid post-MVP Link enhancement but entails determination if it'd be a pattern or separate component  
>   * \#LINKPOSTMVP  
>* [Ticket 504](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/504); epic  
>   * Changes for v1.0.0:  
>   * Epic for tracking breaking changes being targeted for the "official" release 1.0.0 of the mobile components; this should be on our radar but given the general hiatus of working on mobile components at present it's unclear if/when this is relevant--given the relative lack of mobile focus, I think we should continue using minor increments and feel free to make breaking changes if necessary  
>* [Ticket 508](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/508); epic  
>   * Document type, variable, and function naming conventions:  
>   * Not sure about the general ticket here, but arose originally from [a PR comment here](https://github.com/department-of-veterans-affairs/va-mobile-library/pull/503#discussion_r1779005218) suggesting there was a way we could potentially configure our eslint to automatically separate library imports and local project imports to automatically enforce a structure used in all mobile components  
>* [Ticket 509](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/509); epic  
>   * Look into eslint rule to separate local and external imports:  
>   * This looks like the ticket that was meant to be linked above instead of 508  
>* [Ticket 514](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/514); epic  
>   * Custom Focus Styles:  
>   * [Ticket 466](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/466) conducted research into mobile focus styles and there was no mechanism to do them with React Native circa Sept 2024 and it's unclear it was possible with native iOS/Android; this would be good to keep on our radar if it becomes (more) feasible in the future though; note: keyboard use is likely very low with the mobile app and users can change the color with the their mobile device settings if desired (not per app, global)  
>* [Ticket 517](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/517); design  
>   * \[Design Tokens\] Border Radius: Determine design requirements:  
>   * Ticket specifics don't seem pertinent, but the idea of having border radius tokens does; this could be a good post-MVP enhancement to the ongoing token work since it does not appear that web has border radius tokens either, but both some web and mobile components use border radius; USWDS does have border radius  
>* [Ticket 518](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/518); design  
>   * \[Design Tokens\] Border Width: Determine design requirements:  
>   * Ticket specifics don't seem pertinent, but same as prior item  
>* [Ticket 529](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/529); engineer  
>   * Documentation: Add variable, function, and type naming conventions:  
>   * Engineer companion ticket to 508 above--tracked by whatever that is  
>* [Ticket 535](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/535); epic  
>   * Design Tokens \- Borders:  
>   * Epic containing Tickets 517 and 518 above--tracked by whatever does those  
>* [Ticket 571](https://github.com/department-of-veterans-affairs/va-mobile-library/issues/571); engineer  
>   * Technical discovery for Paragraph component:  
>   * See Ticket 214 above for more details; track with rest of Paragraph component proposal  
>   * \#LINKPOSTMVP

Notes: 
* Ticket 212 (Snackbar post-MVP items) actually did not need to be tracked since both items were fairly targeted and carried forward individually as nearer term work
* Ticket 504 (v1.0.0 publication/breaking changes) actually did not need to be tracked since both items were fairly targeted (even if breaking) and carried forward individually as nearer term work
   * Additionally, the general idea of publishing v1.0.0 at some point is naturally on our radar depending on reprioritization of more mobile component work, but with the current (January 2026) lull in favor of more general shared web/mobile efforts it is not a near term priority
* Tickets 517, 518, and 535 were no longer appropriate to keep with mobile enhancements due to [in progress work to combine web/mobile tokens](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4648) and will instead be tracked with that
