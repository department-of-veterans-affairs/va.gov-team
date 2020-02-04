
# Table of Contents

1.  [CMS Export Content Model Transformation Overview](#org452f1e3)
    1.  [Purpose](#orga07c918)
    2.  [10,000ft view](#orgaf4354e)
    3.  [Adding a new content model](#org77f88f4)
    4.  [Zooming in](#orgacd6399)
    5.  [Debugging](#org68c9208)
    6.  [Best practices](#orgc3b70c7)



<a id="org452f1e3"></a>

# CMS Export Content Model Transformation Overview

That&rsquo;s a mouthful, isn&rsquo;t it?


<a id="orga07c918"></a>

## Purpose

To outline how content gets from the CMS to static HTML files.


<a id="orgaf4354e"></a>

## 10,000ft view

New content begins its life in the CMS. When it grows up, it gets published.
That process is out of scope for this document. We start our story after content
is published.

The Drupal CMS will bundle the CMS export into a tarball and make it available to
the build script for processing.

When the content build is run, it does a lot of things. The steps that are
pertinent to this document are:

1.  Pulling the CMS export tarball
2.  Transforming the content from the CMS export content models to the template
    content models
3.  Applying the content models to the templates to generate static HTML


<a id="org77f88f4"></a>

## Adding a new content model

When adding a new content model, you&rsquo;ll need to add a handful of new files to
`src/site/stages/build/process-cms-exports/`:

-   Pre-transformation (raw) schema
    -   Found in `schemas/raw/`
-   Post-transformation schema
    -   Found in `schemas/transformed/`
-   Transformer
    -   Found in `transformers/`
-   Pre-transformation test entity
    -   And all child entities
    -   These go in `tests/entities/`
    -   A new entry will have to be added to `tests/entities/index.js` to associate
        this new test file with the new content model
-   Post-transformation test entity
    -   These go in `tests/transformed-entities/`

The transformer is the workhorse. Everything else is there to ensure it all
works together as expected. For more information on what each of these pieces
are, see [Transformation Process](transformation-process.md).


<a id="orgacd6399"></a>

## Zooming in

To dig deeper into how content is transformed from the CMS export content models
to the template content models (and what that even means), see [Transformation Process](transformation-process.md).


<a id="org68c9208"></a>

## Debugging

See the [Debugging Field Guide](debugging-field-guide.md) for a reference manual on how to debug transformer
issues in the wild.


<a id="orgc3b70c7"></a>

## Best practices

See [Best Practices](best-practices.md).

