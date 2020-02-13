
# Table of Contents

1.  [CMS Export Content Model Transformation Overview](#org295a7ae)
    1.  [Purpose](#orgb35279e)
    2.  [10,000ft view](#org6b062b2)
    3.  [Adding a new content model](#orgab7f362)
    4.  [Debugging](#org6571ded)
    5.  [Best practices](#org8861206)



<a id="org295a7ae"></a>

# CMS Export Content Model Transformation Overview

That&rsquo;s a mouthful, isn&rsquo;t it?


<a id="orgb35279e"></a>

## Purpose

To outline how content gets from the CMS to static HTML files.


<a id="org6b062b2"></a>

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


<a id="orgab7f362"></a>

## Adding a new content model

The transformer is the workhorse. Everything else is there to ensure it all
works together as expected. For more information on what each of these pieces
are, see [Transformation Process](transformation-process.md).

When adding a new content model, you&rsquo;ll need to add the following files to
`src/site/stages/build/process-cms-exports/`:

-   [Pre-transformation (raw) schema](transformation-process.md)
    -   Found in `schemas/raw/`
    -   Validates the [content from the CMS](transformation-process.md)
-   [Filters](transformation-process.md)
    -   Found in `transformers/` with the transformers
    -   Ensures [entity expansion](transformation-process.md) doesn&rsquo;t read a bunch of entities that won&rsquo;t end up
        in the transformed content
-   [Transformer](transformation-process.md)
    -   Found in `transformers/`
    -   Takes the content from the CMS and transforms it into the shape expected in
        the [Liquid templates](transformation-process.md)
-   [Post-transformation schema](transformation-process.md)
    -   Found in `schemas/transformed/`
-   Pre-transformation test entity
    -   And all child entities
    -   These go in `tests/entities/`
    -   A new entry will have to be added to `tests/entities/index.js` to associate
        this new test file with the new content model
-   Post-transformation test entity
    -   These go in `tests/transformed-entities/`

Once you&rsquo;ve added all those files and wrote your transformer to do what you want
it to, be sure to run the tests to catch any unexpected failures:

    yarn test:unit src/site/stages/build/process-cms-exports/tests/


<a id="org6571ded"></a>

## Debugging

See the [Debugging Field Guide](debugging-field-guide.md) for a reference manual on how to debug transformer
issues in the wild.


<a id="org8861206"></a>

## Best practices

See [Best Practices](best-practices.md).

