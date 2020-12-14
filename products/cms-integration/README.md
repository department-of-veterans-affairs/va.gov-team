Please see most recent [transformer developer guide](https://vfs.atlassian.net/wiki/spaces/VP/pages/637567205/Transformers+Development+Guide).


# Table of Contents

1.  [CMS Export Content Model Transformation Overview](#cms-export-content-model-transformation-overview)
    1.  [Purpose](#purpose)
    2.  [10,000ft view](#10000ft-view)
    3.  [Adding a new content model](#adding-a-new-content-model)
    4.  [Debugging](#debugging)
    5.  [Best practices](#best-practices)


# CMS Export Content Model Transformation Overview

That's a mouthful, isn't it?


## Purpose

To outline how content gets from the CMS to static HTML files.


## 10,000ft view

New content begins its life in the CMS. When it grows up, it gets published.
That process is out of scope for this document. We start our story after content
is published.

The Drupal CMS will bundle the CMS export into a tarball and make it available to
the build script for processing.

When the content build is run, it does a lot of things. The steps that are
pertinent to this document are:

1.  Pulling the CMS export tarball
2.  Transforming the CMS export content models to the template content models
3.  Applying the content models to the templates to generate static HTML


## Adding a new content model

The transformer is the workhorse. Everything else is there to ensure it all
works together as expected. For more information on what each of these pieces
are, see [Transformation Process](transformation-process.md).

When adding a new content model, you'll need to add the following files to
`src/site/stages/build/process-cms-exports/`:

-   [Pre-transformation (input) schema](transformation-process.md#input-json-schema)
    -   Found in `schemas/input/`
    -   Validates the [content from the CMS](transformation-process.md#cms-export-tarball)
-   [Filters](transformation-process.md#filter)
    -   Found in `transformers/` with the transformers
    -   Ensures [entity expansion](transformation-process.md#entity-expansion) doesn't read a bunch of entities that won't end up
        in the transformed content
-   [Transformer](transformation-process.md#transformer)
    -   Found in `transformers/`
    -   Takes the content from the CMS and transforms it into the shape expected in
        the [Liquid templates](transformation-process.md#liquid-templates)
-   [Post-transformation (output) schema](transformation-process.md#output-json-schema)
    -   Found in `schemas/output/`

Once you've added all those files and wrote your transformer to do what you want
it to, be sure to run the tests to catch any unexpected failures:

    yarn test:unit src/site/stages/build/process-cms-exports/tests/


## Debugging

See the [Debugging Field Guide](debugging-field-guide.md) for a reference manual on how to debug transformer
issues in the wild.


## Best practices

See [Best Practices](best-practices.md).

