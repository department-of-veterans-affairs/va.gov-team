# Moving to a fork of RJSF

| | | | |
| --- | --- | --- | --- |
|**Decision Made:**|Yes| **Decision Date:** | 03/2018 |
|**Revisit Decision:**| Yes | **Revisit Date:** | July 2018 |

**Revisit Criteria:** As of 3/2018, we're just starting our fork. After using it for a couple months, we should revist and make sure it's still the best path.

**Decision Makers:** @annekainicUSDS @jbalboni


---

## tl;dr
We've diverged from the react-jsonschema-form functionality enough that forking the library is the best way to continue improving our form building process.

## History

We've been using a set of components built on top of RJSF for all of our longer forms. This has been working pretty well, but in the process of upgrading RJSF to work with a newer version of React, we've run into several issues. These issues, coupled with the fact that we use very little of the RJSF code currently, suggest that forking is the better option

## Breaking or suboptimal changes in the latest RJSF version

- Switched JSON Schema validators from jsonschema to ajv. The ajv validator is faster and has more detailed error output, but is also much larger. It nearly doubles the size of RJSF. We have not run into any major issues with jsonschema and one of our goals is to reduce the bundle size of our forms.
- Moved defaulting logic out of widgets. This means that all of our widgets now get form data that has empty records, which is contrary to how they were written. It makes it harder to determine when a field is actually empty vs. just defaulted.
- Maintains internal state for form data. This is not new, but it causes bugs in our application with autofill, because rapid onChange events can cause stale data to overwrite the current form info. This is a design choice, so it's not really a bug to fix in the library.
- There's a bug in how the default logic for arrays with minItems works. This is fixable in the library and we've submitted a PR, but since we can't update to the latest version due to the above issues, we can't pull it in.
- Similarly, we need the changes that have been made to support React 16, but those are post some of the above changes.

## Pros
- We have more control over the code for our forms, making it easier to fix bugs
- Forking addresses all of the above issues
- We can remove widget and field code that we don't use, making it easier for us to maintain. Eventually that may mean getting away from a separate library entirely.

## Cons

- We take on extra maintenance burden, since this is not code we initially developed. This could include things like security issues.

## Example of an alternative approach

We could attempt to move to the latest version and push for the above changes in the main repo, but it's not guaranteed that we could be successful, or even that all of our changes make sense for the main library.

## Decision
We're going to fork RJSF.
