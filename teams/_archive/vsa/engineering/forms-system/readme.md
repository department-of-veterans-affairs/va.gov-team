# THIS FILE IS DEPRECATED AND WILL NO LONGER BE ACTIVELY MAINTAINED. FOR ALL UP TO DATE FORMS LIBRARY DOCUMENTATION, PLEASE VISIT - https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Forms-Library-Overview.2085355587.html

# VAFS/RJSF Recipes
The VA.gov Forms System (VAFS) [[doc](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms)][[src](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system)] is built upon the VA fork of react-json-schema-form (RJSF) [[src](https://github.com/department-of-veterans-affairs/react-jsonschema-form)][[npm](https://www.npmjs.com/package/@department-of-veterans-affairs/react-jsonschema-form)]. Here is VSA's set of internal guidelines and patterns for common yet more advanced forms you may need to create using VASF/RJSF.

## Contents

### Patterns
Page | Category | Rating* | Description
--- | --- | --- | ---
[code_structure.md](./code_structure.md) | Style | Recommended | **Recommended Code Structure**. A way to organize your code so that it is easy to maintain.
[constants.md](./constants.md) | Style | Optional | **Using a Constants File**. Central file for all the variables you will use over and over again.
[list_loop.md](./list_loop.md) | Implementation | Recommended | **List Loop**. Needed to build a form that allows a user to input a few items and a separate page for each of those items to enter more information about that respective item.
[custom_component_simple.md](./custom_component_simple.md) | Implementation | Workaround | **Custom React Component: Simple Case**. Update form state with an onChange handler within a custom React component.
[custom_component_multiple.md](./custom_component_multiple.md) | Implementation | Workaround | **Custom React Component: Multiple/Complex**. Using a custom React component requires that you pass in the form's schema for that component (map a small slice of form state to the component). In this scenario, we use the same component twice and we pass in a different instance of the schema to each instance of the component. Since each instance only has access to its own individual schema/form state, we are using Redux in order for our instances to see each other's form state.

  *&nbsp;Rating scale: **Recommended**: encouraged practice. **Optional**: encouraged but optional (judgment call). **Workaround**: gnarlky or hackish real-world implementation due to design limitations of the Forms system. Workarounds may have side-effects, bend/break best practices, or may be difficult to follow or maintain. They may become obsolete if the Forms system improves; however, we are capturing these today because it may be necessary in order to use the Forms system. **Obsolete**: don't do this any more (might be in the code base but don't start anything new using this pattern). **Avoid**: don't ever do this.

### Issues
Page | Description
--- | ---
[2020-03-forms-doc-feedback.md](./2020-03-forms-doc-feedback.md)&nbsp; | VSA front-end developers had an open discussion about issues they ran into while working with Forms. Here's the candid feedback. 
[possible-issues.md](./possible-issues.md) | Our current (evolving) list of *possible* issues, things we may need to vet internally.
[wishlist.md](wishlist.md) | Improvements we would like to become items in a visible backlog.

## External Links

- [Official VA.gov Forms System (VAFS) Documentation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms/)

- [Getting Started With VA.gov Forms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/getting-started-with-va.gov-forms.md) - originally for VSA Designers, but also has [Tips for Developers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/getting-started-with-va.gov-forms.md#developers).

- Video: [Walkthrough of a JSON object for RJSF](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/va-forms-informal-for-designers.mp4).

## VSP POCs (as of April 30, 2020)

- Chris Valarida: has been helpful with assisting VSA on VAFS forms issues on Slack. So far has been the most technical, willing to dig into code.
- Dan Shank: considered the current tech lead for Forms system and other documentation efforts.
- Rian Fowler: VSP Front End Lead.
- Jeff Balboni: historical context. Contributor to the [VA fork of RJSF](https://github.com/department-of-veterans-affairs/react-jsonschema-form), co-authored 2017 article, "[Building Forms Faster on Vets.gov](https://medium.com/the-u-s-digital-service/building-forms-faster-on-vets-gov-d8619f4e9db)".
- Documentation: Megan Kelley, Kristina Gore, etc. Best to go through Dan Shank, Rian Fowler, and Chris Valarida first.

