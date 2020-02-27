# Building forms

| | | | |
| --- | --- | --- | --- |
|**Decision Made:**|Yes| **Decision Date:** | 01/2017 |
|**Revisit Decision:**| Yes | **Revisit Date:** | December 2017 |

**Revisit Criteria:** As of 9/2017, all our forms are using RJSF. We should regroup and take a look at how it's going a few months after that.

**Decision Makers:** @annekainicUSDS @jbalboni @ayaleloehr @aub


---

## tl;dr
When bringing lengthy paper forms to Vets.gov, we use react-jsonschema-form and the common code we've built on top of it.

A longer form [article on this decision](https://medium.com/the-u-s-digital-service/building-forms-faster-on-vets-gov-d8619f4e9db) can be found on the USDS Medium. The information below is meant to be a distilled version.

## History

We built two forms (10-10EZ and 22-1990) with a basic React/Redux approach. The 10-10EZ (HCA) took 5 months and the 1990 took 2 months. We also had numerous production bugs to fix around validation and incorrectly formatted data. Based on those two forms, we thought we had a stable set of patterns for long forms and could make better use of shared code to make development faster and more reliable. We evaluated a few different form libraries for React and settled on [react-json-schemaform](https://github.com/mozilla-services/react-jsonschema-form) (RJSF). We used that to build the 22-1995 form. We found that building the 1995 with RJSF was a big improvement and have been building forms with RJSF since then.

## Pros

- Almost all form specific information is in a single configuration file, and has less boilerplate than building forms with React components
- There's very little form-specific React code. Most form specific code are files that export configuration information, which is easy to modify and overwrite when necessary
- Forms are built using a JSON Schema file as a base and the backend uses the same file to validate submissions. So we're less likely to have schema errors than previously
- Building the config files is generally faster than building React components for each form

## Cons

- The application code for each form is very centralized, which makes it hard to use code splitting
- Overall form bundle size is still a little big (but generally smaller than before)
- Form-specific customizations that fall outside our expected patterns are more difficult to implement
- Handling different variations on our patterns means adding options to the config file, which can add noise to the form config files
- The shared code built on top of RJSF is complicated

## Example of an alternative approach

There are other React form libraries, most of which have you still building forms with React components ([redux-form](redux-form.com), [react-form](https://react-form.js.org/#/story/readme-documentation)). We could have gone with one of those, and put more effort into building reusable components, but we didn't feel like we would make as big of an improvement as with config file based approaches.


## Decision
Long paper forms on Vets.gov will use RJSF and the shared code built on top of it.
