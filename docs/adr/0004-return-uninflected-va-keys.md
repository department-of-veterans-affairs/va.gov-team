# 4. Return Uninflected VA Keys in vets-api

Date: 2020-10-30

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

To create a deprecation path, there will be a patch implemented for the olive_branch middleware that returns an uninflected version of keys containing `VA`.

## Consequences

- We will be returning additional keys in JSON responses using a `VA`-named key, so this will make payload sizes slightly larger, supporting both naming schemes (`VA`-named key and `Va`-named key)
- We are introducing a bit of tech debt in that we are patching an external gem.
  - The intent is that there is a deprecation phase and we can remove this patch when endpoints have started using the inflected key.
  - The olive_branch gem has had no changes in over a year, so it changing to break our patch is low risk.
