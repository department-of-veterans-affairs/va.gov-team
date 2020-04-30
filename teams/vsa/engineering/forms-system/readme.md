# VAFS/RJSF Recipes & Best Practices

The VA Forms System (VAFS) is built upon the VA fork of react-json-schema-form (RJSF). Here is VSA's set of internal guidelines and recipies for common yet more advanced forms you may need to create using VASF/RJSF. The recipies are organized by the form 'task' you are trying to achieve. 

## Style and Organization

- [Recommended Code Structure](./code_structure.md) - A way to organize your code so that it is easy to maintain.

- [Using a Constants File](./constants.md) - Using a central file for all the variables you will use over and over again.


## Implementation Patterns
These real-world implementation patterns are somewhat gnarlky in detail. In some situations we may be using the forms system beyond what it was originally designed for.

- [List Loop](./list_loop.md) - This is needed to build a form that allows a user to input a few items and a separate page for each of those items to enter more information about that respective item.

- [Custom React Component: Simple Case](./custom_component_simple.md) - Update form state with an onChange handler within a custom React component.

- [Custom React Component: Multiple/Complex](./custom_component_multiple.md) - Using a custom React component requires that you pass in the form's schema for that component (map a small slice of form state to the component). In this scenario, we use the same component twice and we pass in a different instance of the schema to each instance of the component. Since each instance only has access to its own individual schema/form state, we are using Redux in order for our instances to see each other's form state.

## Other Guidance

- [Official VA.gov Forms System (VAFS) Documentation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms/)

- [Getting Started With VA.gov Forms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/getting-started-with-va.gov-forms.md) - originally for VSA Designers, but also has [Tips for Developers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/getting-started-with-va.gov-forms.md#developers).

- Video: [Walkthrough of a JSON object for RJSF](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/va-forms-informal-for-designers.mp4).


## Known or Possible Issues

- [2020-03-forms-doc-feedback.md](./2020-03-forms-doc-feedback.md) - VSA front-end developers had an open discussion about issues they ran into while working with Forms. Here's the candid feedback. 
  
- [possible-issues.md](./possible-issues.md) - Our current (evolving) list of *possible* issues, things we may need to vet internally.

## Wish List
- Documentation on *formConfig* options such as *hideIf, hideOnReview, hideOnReviewIfFalse, updateFormData, updateSchema, expandUnder* (including limitations we have run into with HideIf, exapandIf, and why.)
- More HOW-TO guides mined from Slack conversations and the existing forms in source control. For example, forms 2346, 526EZ, 686, 686c-674, 996 are listed under [src/applications/disability-benefits](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/disability-benefits). Would like to have an empirical analysis that summarizes *all the forms* we have built in va.<span/>gov so far and identify what patterns we are using. Are 80% just out-of-the box, and 20% special cases? Would like to know which ones are special, and for those special cases, what implementation patterns were used.
- A visual design-oriented catalog that shows the forms components integrated on test pages (100% tracability).
- A live playground feature similar to the [one for the original RSFJ](https://rjsf-team.github.io/react-jsonschema-form/).
- Visible backlog of VAFS/RJSF items in VSP that VSA developers can see so that we have transparency into what is known and not known as far as defect, features, workarounds, etc. WHEN or IF we get any of these improvements is a totally different story, but we at least need to keep track of the issues so that we don't keep stepping into them. When we get into the how/solutioning, VSA developers would be expected to work with VSP (joint effort, not something that would be expected to be handed down).

## VSP POCs (as of April 30, 2020)

- Chris Valarida: has been helpful with assisting VSA on VAFS forms issues on Slack. So far has been the most technical, willing to dig into code.
- Dan Shank: considered the current tech lead for Forms system and other documentation efforts.
- Rian Fowler: VSP Front End Lead.
- Jeff Balboni: historical context. Name comes up in slack when searching for uiSchema and other forms-related keywords; also contributed to this 2017 article, "[Building Forms Faster on Vets.gov](https://medium.com/the-u-s-digital-service/building-forms-faster-on-vets-gov-d8619f4e9db)".
- Documentation: Megan Kelley, Kristina Gore, etc. Best to go through Dan Shank, Rian Fowler, and Chris Valarida first.

