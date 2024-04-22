
# Table of Contents

1.  [Transformation Process](#transformation-process)
    1.  [The actors](#the-actors)
        1.  [Content model name](#content-model-name)
        2.  [Content model](#content-model)
        3.  [CMS export content](#cms-export-content)
        4.  [Filter](#filter)
        5.  [Transformer](#transformer)
        6.  [Transformed content](#transformed-content)
        7.  [Liquid templates](#liquid-templates)
    2.  [The process](#the-process)
        1.  [Metalsmith pipeline](#metalsmith-pipeline)
        2.  [CMS export tarball](#cms-export-tarball)
        3.  [Input JSON schema](#input-json-schema)
        4.  [Entity expansion](#entity-expansion)
        5.  [Content model transformers](#content-model-transformers)
        6.  [Output JSON schema](#output-json-schema)
        7.  [Liquid templates](#liquid-templates)
    3.  [Digging deep](#digging-deep)
        1.  [Automatic schema imports](#automatic-schema-imports)
        2.  [Automatic `$id`](#automatic-id)
    4.  [Debugging](#debugging)


# Transformation Process

So you want to take a peek under the hood, eh? Please, step inside. I'll show
you how it works.


## The actors

The goal of the whole transformer system is to change all the content models
from one shape to another. In the end, it's just inputs (raw content), process
(the transformers), and outputs (transformed content).

Before we talk about how it all works, let's get some shared terminology first.


### Content model name

A content model has a two-part name, for the purposes of this integration:

1.  A base type
2.  A sub type

The **base type** is found in the first part of the name of the file in the CMS
export content directory. For a `node.<UUID>.json` file, its base type is
`node`. See the section [Raw content](#raw-content) below for context.

The **sub type** is found *inside* the entity, usually in its `type[0].target_id`
property.

To get the full name, simply separate them with a hyphen. Examples include
`node-page` and `paragraph-q_a_section`.


### Content model

Each content model name applies to two separate content models (shapes for the
data):

-   Raw content model
    -   The shape of the entity fresh from the [CMS export tarball](#cms-export-tarball)
    -   The [pre-transformation JSON schema](#pre-transformation-json-schema) says what this model actually is
-   Transformed content model
    -   The shape of the entity after it passes through the [transformer](#transformer)
    -   The [post-transformation JSON schema](#post-transformation-json-schema) says what this model actually is


### CMS export content

We start with the raw content as found in the CMS export tarball. When
extracted, this tarball creates a directory with a child `content/`. In *there*
are thousands of flat JSON files and a `meta/index.json`, but we can ignore that
one for now.

Each file is named like `node.<UUID>.json` where `<UUID>` is the UUID of the
entity.

The JSON objects in of each of these files should match exactly one [pre-transformation JSON schema](#pre-transformation-json-schema) which determines which raw content model it is
(and subsequently which transformer should be used on it).


### Filter

Filters are found in as a named export in a content model's [`transformer` file](#content-model-transformers).
They're used to filter out properties in the [raw content](#raw-content) before [entity expansion](#entity-expansion)
so it doesn't read more files than necessary.


### Transformer

When you boil down a transformer, all you find is a function that takes an
object and returns an object. The purpose behind the transformer is to simplify
using the content in the [templates](#liquid-templates).


### Transformed content

The [transformer](#transformer), converts raw content into transformed content. The resulting
data structure must match the content model's [post-transformation JSON schema](#post-transformation-json-schema)
and is what will be used in the [templates](#liquid-templates).


### Liquid templates

The final step before content is translated from an abstract content model to
full-fledged HTML files, the liquid templates are used to couch the content in
the necessary trappings of HTML.

For more information on the Liquid template language, see [Shopify's
documentation](https://shopify.github.io/liquid/).


## The process

Building the content is a step-by-step process which uses Metalsmith to manage
the pipeline. A high-level overview looks something like this:

-   CMS export is fetched and untarred
-   All `node` entities are fed into the entity tree assembler function
-   The following will be performed on each `node`
    -   The content model type (name) will be determined
    -   The entity will be validated against [pre-transformation JSON schema](#pre-transformation-json-schema)
    -   Certain properties will be kept based on the [filters](#filter) provided for the
        content model type
    -   The remaining properties will be scoured for references to other entities
        -   If found, it'll recurse with those new entities, [expanding](#entity-expansion) the child
            references
    -   The [transformer](#content-model-transformers) for the content model is run on the data
    -   The newly-transformed data is validated against the [post-transformation JSON
        schema](#post-transformation-json-schema)
    -   Finally, the transformed content will be applied to a [liquid template](#liquid-templates) to be
        transmogrified into HTML


### Metalsmith pipeline

A content build is kicked off by a node script: `yarn build --pull-drupal`

This script is responsible for a lot of things, but for now, **the important
parts** are:

1.  Pulling the CMS export tarball
2.  Running the content through the validation and transformation process
3.  Applying the transformed content models to the Liquid templates to generate
    static HTML


### CMS export tarball

Before we can *do* anything with the content, we need to actually fetch the
latest.

TODO: Once we know where the tarball will live after the CMS bundles the export
up, this section should say where the build fetches that tarball from.


### Input JSON schema

To ensure the **content model from the CMS** matches what the transformer expects in
the next step, we **check every untransformed entity** we get from the CMS
against a JSON schema. This is the first line of defense when content models get
updated.

Input schemas can be found in`src/site/stages/build/process-cms-exports/schemas/input/`.
**Each file in this directory is named after the content model it validates** (e.g. `node-page.js`).
Schemas from the `/process-cms-exports/schemas/common/` directory are used
heavily in these schemas for readability.

See [json-schema.org](https://json-schema.org/understanding-json-schema/) for a great introduction and reference for all things JSON
schema.


### Entity expansion

When the raw content for an entity contains a **reference to another entity**, the
entity tree assembler will **read the entity file and recurse**.

An entity reference is a property that looks like the following:

    "this_field_contains_a_child_entity": [
        {
            "target_type": "paragraph",
            "target_uuid": "<UUID>"
        }
    ]

The assembler will know to read the CMS export file with the name
`paragraph.<UUID>.json`.

**Note:** Because entity expansion happens recursively **before the transformer**,
all child entities will be fully expanded and transformed by the time the data
is passed to the transformer.


### Content model transformers

By performing some basic data transformations, we can take the raw data and **mold
it into a shape that the [templates](#liquid-templates) expect**.

Transformers can be found in
`src/site/stages/build/process-cms-exports/transformers/`. **Each file in this
directory is named after the content model it transforms** (e.g. `node-page.js`).
Common functions from `transformers/helpers.js` are used heavily in these
transformers for readability and consistency.


### Output JSON schema

After the content has been transformed, the entity tree assembler will validate
it against a post-transformation JSON schema found in
`src/site/stages/build/process-cms-exports/schemas/output/` to ensure
nothing unexpected happened during transformation.

These schemas are also **useful for debugging** what's going on in the templates
(see below). If you know what content model you're working with in a given
template, you can look at the schema to see what data you have access to and
what shape it takes.


### Liquid templates

This is where the magic happens. In the end, the content models are applied to
various templates to **generate the static HTML**. This happens after the content
model transformation in a separate Metalsmith step.


## Digging deep

There's some magic hidden behind the scenes to make adding new content models as
easy as possible.


### Automatic schema imports

Files in the **three schemas directories** are imported and used intelligently in
[schema-validation.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/process-cms-exports/schema-validation.js).


### Automatic `$id`

Schemas can be referenced in other schemas by their `$id`. For schemas which
have no explicit `$id`, **[validator.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/process-cms-exports/validator.js) automatically adds one**, prefixed with the
directory name. This allows us to re-use the schema for children of an entity
with `$ref`.

Example: `$ref: 'transformed/page-node'`

See [Structuring a complex schema](https://json-schema.org/understanding-json-schema/structuring.html) for more information on how to use `$id` and
`$ref`.


## Debugging

See the [Debugging Field Guide](debugging-field-guide.md) for a reference manual on how to debug transformer
issues in the wild.

