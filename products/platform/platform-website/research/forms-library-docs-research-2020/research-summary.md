# Forms documentation user interviews research summary

The VA.gov Forms System is a library for developers to create forms on VA.gov using a configuration-based approach. The Forms System has a documentation site ([here](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms/)) that provides guidance and instructions for how to use it. However, the documentation is incomplete in some places, isn't totally clear in others, which leaves engineers on VFS teams with unanswered questions. VSP has heard feedback that this documentation is the most useful when a team first sets up and gets started on a project, but its usefulness deteriorates as the engineers develop their teams' unique forms. These are things we know, that we will not be validating with this research.

At the same time, the Front-End Tools and Product Support teams are working on improving the Forms Library itself. One of the improvements includes a new type of supplemental documentation affectionately known as The Cookbook, where developers are provided a number of recipes that show how building blocks of code can be assembled in different ways based on what they need to do. This research will validate the effectiveness of this new documentation approach, as well as the existing and proposed contents of the new documentation.

We made a few assumptions that we believe are already validated, or are low-risk enough to not spend this research validating:
- In general, there are usability problems with forms library documentation provided by VSP.
- It aligns with a VFS user's mental model to organize all technical documentation related to building forms into a group
- It is appropriate to separate this technical documentation from other practices' forms-related documentation
- Engineers are aware of the forms system documentation and are able to find the general topic

Note that this product is a sub-product of VSP Content & IA's documentation site ([product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/documentation-site/product-outline.md)).

Related artifacts:
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/documentation-site/research/forms-library-docs-research-2020/research-plan-script.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/documentation-site/research/forms-library-docs-research-2020/conversation-guide.md)

## Method
The following research method was used.

### What We Did
We used a combination of methods during a scheduled block of time with each participant:
- Remote, directed interviews
- Unmoderated diary studies

The Cookbook that we tested was in a Google Doc. Each participant received a version of the document that contained an instructional layer (using the Google Docs comments feature) that asked the participant questions about their experience at specific points in the document. We combined this diary study method with directed interviews so that we could ask participants questions about their experience with the current documentation and introduce the activity in the context of the current forms system work, answer any questions, and debrief with the participant after they finished the activity.

Here is a single session's agenda:
- 15 minutes: Introduction, brief directed interview, provide instructions
- 30 minutes: Participant completes diary study activity independently
- 15 minutes: Post-activity directed interview with participant, wrap up

### Dates
We conducted interviews June 5, 2020 – June 12, 2020.

### Participants
We talked to 4 VFS engineers with a variety of forms experience. You can read the [interview notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/documentation-site/research/forms-library-docs-research-2020/interview-notes-raw.md).

### Tools
We conducted user interviews via Zoom and each participant had a version of the [Cookbook](https://docs.google.com/document/d/1CkWKyDG0BIi0eITA1Sh60vX8u15CqAs_1S5eXARIank/edit#heading=h.685csci95ki9) they could comment in and answer questions about using the Google Doc comment feature. We also performed a card sort based on participant comments and observations using [this Mural board](https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1592248768207/94da2cac3e765f649a775c90e127991c7cdfad07).

## Results & takeaways

We answered the following research questions.

### What parts or characteristics of existing forms documentation are effective and helpful?

The design system documentation is helpful as a reference for things like CSS classes, pixel numbers, class names. Users also looked for information about the naming system, setting up a web hook, uiSchemas, and schemas. Some users tend to look at the codebase first or go to [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) Slack channel for help, since the documentation doesn’t cover everything.

The forms documentation is relatively small, so it doesn’t cover the full breadth of the forms system. Users have gone through it several times to fill in the gaps and really get it.

### How effective is the Cookbook for helping developers make decisions? Is the concept of the Cookbook transparent and understandable?

The information seemed helpful, but was lacking context. It might be useful to provide a use case or reasons for performing the task. Existing information is good for beginners, but falls off at the more advanced level. 

### Is the recipe format clear and actionable?

For the most part, yes. However, the problems users run into are the complicated stuff the forms system isn’t designed to do, so the scenarios wouldn’t have been written about before. There aren’t reasons documented here for why to perform a task.

### Are the examples relevant to the developers' work?

For simple problems, yes, but not for complex tasks. 

### What questions do developers have after reading these recipes? 

Users think they were able to find the answer but are not totally sure. For instance, one said it was clear from the documentation how to "conditionally hide a group of fields; however, it doesn't tell me what scenarios hiding fields is useful for.” Another user said, “The subsection told me half of what I would need. It told me how to add a custom class, but I was able to surmise the other half which would be adding the CSS to style targeting that class.”

### What types of recipes are missing?

Full reference material, context for why you’d do something, and more advanced concepts. The idea of having a reference of example scenarios was not as useful on its own without more robust reference documentation where you can apply the concept of having common scenarios incorporated into the reference documentation, but not independent of more robust reference documentation. Having the cookbook without the corresponding reference information is kind of like having a cookbook without the corresponding ingredients. If you’re given a recipe for a specific scenario but yours is a little different, you need to have the ability to reference other documentation so you can adjust it for your purposes.

### What other resources do developers use to supplement the recipes if they still have questions?

Users refer to the React library docs (they really like the sandbox feature), US forms system docs, codebase, and other developers through Slack.

### What other resources should VSP provide to supplement The Cookbook?

Is it possible to build a sandbox feature? Is it possible to provide a complete API reference, including the full schema and options? We will provide a full IA analysis, comparing the existing docs to the other helpful resources referenced by users, as well as the new book and cookbook that CV and DS have worked on.

### Meta: Does this research method work effectively for testing the usability of documentation?

We think this research method was helpful; however, we think it will be more helpful in the future once we have completed the IA analysis and restructuring and can use an updated set of documentation for the user research. It was helpful to understand that writing scenarios for the cookbook was not going to solve the problem of the docs. Users are looking primarily for reference material and we can restructure and update the docs, as well as fill in the gaps with new information from the cookbook and book DS and CV have worked on. We will also consider whether we can provide a full API reference. 

### Other takeaways

- **Finding documentation (or not).** Users have bookmarked documentation and most interviewed found what they were looking for, but one user indicated that was the exception, not the rule. The documentation does not cover everything in the codebase and backend information is missing. They look at the codebase to find similar cases to theirs. Users would like quick links. They also rely heavily on other documentation, i.e. the React library and US Forms System. 
- **Getting manual support.** The [#vsp-platform-support](https://dsva.slack.com/channels/vsp-platform-support) channel has become the first choice for support. Other developers are extremely helpful.
- **Skepticism about creating exhaustive documentation.** Documenting everything will be almost impossible. Being able to identify/document all the issues will be impossible. Is there a way to document new features in the code and generate documentation that way?
- **Making something that doesn't exist yet.** Much of what users are working on hasn’t been developed yet. We need to figure out how to document how to create custom components.
- **Help needed for more complex/advanced tasks.** The documentation is good for new users but falls off at more advanced tasks. A sandbox would be helpful to test code changes immediately.
- **Participant thoughts, ideas, commentary, experience.** The problem we’re running into is the complicated stuff the forms system isn’t designed to do, so the scenarios wouldn’t have been written about before. An up to date list of components would be helpful. It would be helpful if the cookbook scenarios included more context, i.e. use cases or reasons for why you’re doing what you’re doing.
- **Confusion, lack of confidence (with docs in general).** The forms docs don’t cover the breadth of the forms system, so I can’t find the disparate parts of the functionality I’m looking for. 
- **Confusion, lack of confidence (with research exercise).** Users would like more context to understand why they’re doing what they’re doing. They think a quick reference like this works well if what you’re trying to do is simple.
- **Design system forms documentation.** The design system forms documentation is very useful and most users referenced it a lot.
- **Thoughts about the forms library itself (not documentation).** Was forked from a different library that someone else built. Patterns are helpful, but don’t always fit the scenarios users are building for.
- **Solving problems without documentation/not needing it.** You don’t need the documentation for simple tasks after doing your first form. Users reference the codebase and copy others’ styles.
- **Finding value in the Cookbook style of documentation.** This style of documentation seems helpful, but only as a supplement to more in-depth explanations and guides.
- **Other useful resources/docs.** [React library documentation](https://react-jsonschema-form.readthedocs.io/en/latest/), [US Forms System documentation](https://github.com/usds/us-forms-system/blob/master/docs/README.md), codebase, [/src/platform](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform), something like https://lodash.com/docs/4.17.15#merge to combine the config that comes out bankAccount.js with the customized element likes hideIfs in the uiSchema, [CodeSandbox.io](http://reactcommunity.org/react-transition-group/css-transition), etc.
- **How did you find what you needed to solve the problem?** Normally I just copy and paste code from other sources and go from there. They have prebuilt schemas you can pull in and don’t have to link to.
- ** Do you trust that docs are relevant, up-to-date?** I’ve run into links in the past — how does this work, is it still relevant, or is it outdated. I wanted to display a widget on the review page but I didn’t see that listed on the documentation so I had to look in the actual codebase to see how other people were going about that and then trial and error on my side to see if it worked.

## Potential updates based on feedback

- Add a "result" to the examples. Screenshots or a gif like JC described would be a great start, but adding a [CodeSandbox.io](http://reactcommunity.org/react-transition-group/css-transition) could be a really great way to pull both the code example and the result together in a way that also allows for easy experimentation.
- The fact that people toggle back and forth between the design system and the forms library indicates there might be opportunity to factor that relationship into our strategy. Perhaps include a link between the client app docs and the design system docs at the top of the screen?
- Include a code block of the form config object and then separately list out the type of property it is.
- Use some of the documentation site examples that participants mentioned to inform our organization/IA.
- In the forms library documentation, have a section talking about the formconfig option and how it works.
- Create a full API reference.
- Include more advanced examples. They still seemed more geared towards beginners.
- [Test a page configs example] "This example would be more complete if it showed all the necessary imports."
- [Indent or style fields using expandUnder example] "I use this pattern quite a bit. My issue is that it doesn't explain that the `expandUnder` must target 'field1' in this example. If you target 'field2' from 'field3' the field won't appear. Also there may be time when field2 is conditionally shown; so it becomes confusing as to which target to use."
- Include helpful bookmarks with orientation. Provide quick links to other helpful pages. 
- The [bookmarks] all start out "VA.gov design system." Remove this prefix, so bookmarks only use the page title. (Fixed)
 
## Next steps

Restructure and update the docs to provide more robust reference material, comparing and combining the following sources:
- Existing docs
- New docs that CV and DS have been working on
- Resources we learned about in research, i.e. React library docs, US Forms System docs
