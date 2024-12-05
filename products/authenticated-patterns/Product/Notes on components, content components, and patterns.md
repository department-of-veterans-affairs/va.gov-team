# Notes on components, content components, and patterns
This doc gives more details on the difference between components, content components, and patterns. 

- View current documentation on the differences in the VA design system (VADS) [in this section]( https://design.va.gov/patterns/#what-is-the-difference-between-components-templates-and-patterns).
- View [this related Slack thread](https://dsva.slack.com/archives/C07909N7U8Z/p1722536645517829) in #tmf-auth-exp-design-patterns

Jump to: 
-	[Key takeaways](#key-takeaways)
-	[Content components vs. components](#content-components-vs-components)
-	[Content components vs. patterns with a single component](#content-components-vs-patterns-with-a-single-component)
-	[Recommendations for VADS team](#recommendations-for-vads-team)
## Key takeaways
-	Don’t create more content components 
-	It’s okay, but not ideal, for patterns to contain a single component
## Content components vs. components
Content components are when we have an instance of a component for which CAIA has defined very specific, locked down content INSIDE of the component instance. There are currently 2 content components in VADS:
-	[Autosave](https://design.va.gov/components/form/autosave)
-	[Prefill](https://design.va.gov/components/form/prefill)

In Object-Oriented programming, or OOUX, the Object is the Component and the Instance is the Content component. For example, with Autosave:
-	Component (AKA object): Alert
-	Content component (AKA instance): Autosave

**We don’t want to create more content components than we need right now.** Content components are a stopgap until we have content modeling, in which different content is structured in a database allowing for easier maintenance. The VADS team is hoping to pilot content modeling this year.

## Content components vs. patterns with a single component
There are some examples of patterns that only contain a single component: 
-	[Race, ethnicity, or origin](https://design.va.gov/patterns/ask-users-for/race-ethnicity-or-origin)
-	[Relationship to Veteran](https://design.va.gov/patterns/ask-users-for/relationship)

Currently, it would take more effort than it’s worth create to create components from these patterns.

## Recommendations for VADS team
-	[ ] Add explanation of content component vs. component to the **What is the difference between components, templates, and patterns?** section on the [Patterns page](https://design.va.gov/patterns/) 
