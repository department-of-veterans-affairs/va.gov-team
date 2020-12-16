# 4. Return Uninflected VA Keys in vets-api

Date: 2020-12-14

Whom:
- Philip Becker
- Michael Fleet
- Lindsey Hattamer
- Dan Shank
- Chris Valarida
- Eric Boehs
- Travis Hilton

## Status

Accepted

## Context

Using the Rails 6 zeitwerk file loader requires strict naming conventions of files. So without a Rails inflection, `va_something` class files are expected to have the class name of `VaSomething`. With an inflection, that class name would be `VASomething`. `vets-api` uses a mix of `VA` and `Va` in class names. To make things consistent, as well as support instances of `humanize` outputing `VA` in caps as an acronym, the inflection will be introduced.

However, using this inflection has a downstream affect on json responses transformed into camelCase by the [olive_branch](https://github.com/vigetlabs/olive_branch) gem. Previously keys structured like `the_va_something` were transformed into `theVaSomething`, but with inflection they will now be `theVASomething`.

## Decision

Create a patch implemented for the olive_branch middleware that returns keys containing `VA` as if "VA" was not an acronym.

In the future vets-api should introduce a version that doesn't support olive_branch.

## Consequences

- We are introducing a bit of tech debt in that we are patching an external gem.
  - The olive_branch gem has had no changes in over a year, so it changing to break our patch is low risk.
  - Hopefully this code will remain fairly stable if we can move to a new version of vets-api that doesn't involve olive_branch.
