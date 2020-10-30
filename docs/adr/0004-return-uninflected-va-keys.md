# 4. Return Uninflected VA Keys in vets-api

Date: 2020-10-30

Whom:
- Philip Becker

## Status

Accepted

## Context

Using the Rails 6 zeitwerk file loader requires strict naming conventions of files.  So without a Rails inflection, `va_something` class files are expected to have the class name of `VaSomething`.  With an inflection, that file would be the expected `VASomething`.  Using this inflection has a downstream affect on json responses transformed into camelCase by the [olive_branch](https://github.com/vigetlabs/olive_branch) gem.

## Decision

To create a deprecation path, there will be a patch implemented for the olive_branch middleware that returns an uninflected version of keys containing `VA`.

## Consequences

- We will be returing additional keys in JSON responses using a `VA`-named key, so this will make payload sizes slightly larger.
- We are introducing a bit of tech debt in that we are patching an external gem.
  - The intent is that there is a deprecation phase and we can remove this patch when endpoints have started using the inflected key.
  - The olive_branch gem has had no changes in over a year, so it changing to break our patch is low risk.
