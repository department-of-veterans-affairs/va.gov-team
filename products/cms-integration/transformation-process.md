
# Table of Contents

1.  [Transformation Process](#org3d51180)
    1.  [The actors](#org742210c)
        1.  [Content model name](#org5d30ede)
        2.  [Content model](#org0c2b21d)
        3.  [Raw content](#org28b6201)
        4.  [Filter](#orga60e353)
        5.  [Transformer](#org2c9bdf4)
        6.  [Transformed content](#orgb2e5ea4)
        7.  [Liquid templates](#org6f052af)
    2.  [The process](#orga5401ec)
        1.  [Metalsmith pipeline](#orgf0c5512)
        2.  [CMS export tarball](#orgffc87ba)
        3.  [Pre-transformation JSON schema](#orgd4903ba)
        4.  [Entity expansion](#orgf48d43f)
        5.  [Content model transformers](#org0b354f8)
        6.  [Post-transformation JSON schema](#org2a89c43)
        7.  [Liquid templates](#org5a3177e)
    3.  [Testing](#org43964c1)
    4.  [Digging deep](#org6a46c23)
        1.  [Automatic schema imports](#org8ff8e44)
        2.  [Automatic `$id`](#orgfdcff70)
    5.  [Debugging](#orgd20bc34)



<a id="org3d51180"></a>

# Transformation Process

So you want to take a peek under the hood, eh? Please, step inside. I&rsquo;ll show
you how it works.


<a id="org742210c"></a>

## The actors

The goal of the whole transformer system is to change all the content models
from one shape to another. In the end, it&rsquo;s just inputs (raw content), process
(the transformers), and outputs (transformed content).

Before we talk about how it all works, let&rsquo;s get some shared terminology first.


<a id="org5d30ede"></a>

### Content model name

A content model has a two-part name, for the purposes of this integration:

1.  A base type
2.  A sub type

The **base type** is found in the first part of the name of the file in the CMS
export content directory. For a `node.<UUID>.json` file, its base type is
`node`. See the section [Raw content](#org28b6201) below for context.

The **sub type** is found *inside* the entity, usually in its `type[0].target_id`
property.

To get the full name, simply separate them with a hyphen. Examples include
`node-page` and `paragraph-q_a_section`.


<a id="org0c2b21d"></a>

### Content model

Each content model name applies to two separate content models (shapes for the
data):

-   Raw content model
    -   The shape of the entity fresh from the [CMS export tarball](#orgffc87ba)
    -   The [pre-transformation JSON schema](#orgd4903ba) says what this model actually is
-   Transformed content model
    -   The shape of the entity after it passes through the [transformer](#org2c9bdf4)
    -   The [post-transformation JSON schema](#org2a89c43) says what this model actually is


<a id="org28b6201"></a>

### Raw content

We start with the raw content as found in the CMS export tarball. When
extracted, this tarball creates a directory with a child `content/`. In *there*
are thousands of flat JSON files and a `meta/index.json`, but we can ignore that
one for now.

Each file is named like `node.<UUID>.json` where `<UUID>` is the UUID of the
entity.

The JSON objects in of each of these files should match exactly one [pre-transformation JSON schema](#orgd4903ba) which determines which raw content model it is
(and subsequently which transformer should be used on it).


<a id="orga60e353"></a>

### Filter

Filters are found in as a named export in a content model&rsquo;s [`transformer` file](#org0b354f8).
They&rsquo;re used to filter out properties in the [raw content](#org28b6201) before [entity expansion](#orgf48d43f)
so it doesn&rsquo;t read more files than necessary.


<a id="org2c9bdf4"></a>

### Transformer

When you boil down a transformer, all you find is a function that takes an
object and returns an object. The purpose behind the transformer is to simplify
using the content in the [templates](#org6f052af).


<a id="orgb2e5ea4"></a>

### Transformed content

The [transformer](#org2c9bdf4), converts raw content into transformed content. The resulting
data structure must match the content model&rsquo;s [post-transformation JSON schema](#org2a89c43)
and is what will be used in the [templates](#org6f052af).


<a id="org6f052af"></a>

### Liquid templates

The final step before content is translated from an abstract content model to
full-fledged HTML files, the liquid templates are used to couch the content in
the necessary trappings of HTML.

For more information on the Liquid template language, see [Shopify&rsquo;s
documentation](https://shopify.github.io/liquid/).


<a id="orga5401ec"></a>

## The process

Building the content is a step-by-step process which uses Metalsmith to manage
the pipeline. A high-level overview looks something like this:

-   CMS export is fetched and untarred
-   All `node` entities are fed into the entity tree assembler function
-   The following will be performed on each `node`
    -   The content model type (name) will be determined
    -   The entity will be validated against [pre-transformation JSON schema](#orgd4903ba)
    -   Certain properties will be kept based on the [filters](#orga60e353) provided for the
        content model type
    -   The remaining properties will be scoured for references to other entities
        -   If found, it&rsquo;ll recurse with those new entities, [expanding](#orgf48d43f) the child
            references
    -   The [transformer](#org0b354f8) for the content model is run on the data
    -   The newly-transformed data is validated against the [post-transformation JSON
        schema](#org2a89c43)
    -   Finally, the transformed content will be applied to a [liquid template](#org6f052af) to be
        transmogrified into HTML


<a id="orgf0c5512"></a>

### Metalsmith pipeline

A content build is kicked off by a node script: `yarn build --pull-drupal`

This script is responsible for a lot of things, but for now, **the important
parts** are:

1.  Pulling the CMS export tarball
2.  Running the content through the validation and transformation process
3.  Applying the transformed content models to the Liquid templates to generate
    static HTML


<a id="orgffc87ba"></a>

### CMS export tarball

Before we can *do* anything with the content, we need to actually fetch the
latest.

TODO: Once we know where the tarball will live after the CMS bundles the export
up, this section should say where the build fetches that tarball from.


<a id="orgd4903ba"></a>

### Pre-transformation JSON schema

To ensure the **content model from the CMS** matches what the transformer expects in
the next step, we **check every untransformed (raw) entity** we get from the CMS
against a JSON schema. This is the first line of defense when content models get
updated.

Pre-transformation (raw) schemas can be found in
`src/site/stages/build/process-cms-exports/schemas/raw/`. **Each file in this
directory is named after the content model it validates** (e.g. `node-page.js`).
Schemas from the `/process-cms-exports/schemas/common/` directory are used
heavily in these schemas for readability.

See [json-schema.org](https://json-schema.org/understanding-json-schema/) for a great introduction and reference for all things JSON
schema.


<a id="orgf48d43f"></a>

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


<a id="org0b354f8"></a>

### Content model transformers

By performing some basic data transformations, we can take the raw data and **mold
it into a shape that the [templates](#org6f052af) expect**.

Transformers can be found in
`src/site/stages/build/process-cms-exports/transformers/`. **Each file in this
directory is named after the content model it transforms** (e.g. `node-page.js`).
Common functions from `transformers/helpers.js` are used heavily in these
transformers for readability and consistency.


<a id="org2a89c43"></a>

### Post-transformation JSON schema

After the content has been transformed, the entity tree assembler will validate
it against a post-transformation JSON schema found in
`src/site/stages/build/process-cms-exports/schemas/transformed/` to ensure
nothing unexpected happened during transformation.

These schemas are also **useful for debugging** what&rsquo;s going on in the templates
(see below). If you know what content model you&rsquo;re working with in a given
template, you can look at the schema to see what data you have access to and
what shape it takes.


<a id="org5a3177e"></a>

### Liquid templates

This is where the magic happens. In the end, the content models are applied to
various templates to **generate the static HTML**. This happens after the content
model transformation in a separate Metalsmith step.


<a id="org43964c1"></a>

## Testing

Testing the transformers is designed to be as straightforward as possible by
**automatically ensuring that each new transformer is tested** without any extra
wiring needed.

The unit test will:

-   Look in `transformers/` for all transformers
-   Ensure each transformer has a matching file in `tests/transformed-entities/`
-   Ensure each transformer has a matching entry in `tests/entities/index.js`
    -   This file acts as a sort of map, pointing to an example of each content
        model
-   Run each above entry through its transformer and validate that it exactly
    matches the entry in `tests/transformed-entitites/`


<a id="org6a46c23"></a>

## Digging deep

There&rsquo;s some magic hidden behind the scenes to make adding new content models as
easy as possible.


<a id="org8ff8e44"></a>

### Automatic schema imports

Files in the **three schemas directories** are imported and used intelligently in
[schema-validation.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/process-cms-exports/schema-validation.js).


<a id="orgfdcff70"></a>

### Automatic `$id`

Schemas can be referenced in other schemas by their `$id`. For schemas which
have no explicit `$id`, **[validator.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/process-cms-exports/validator.js) automatically adds one**, prefixed with the
directory name. This allows us to re-use the schema for children of an entity
with `$ref`.

Example: `$ref: 'transformed/page-node'`

See [Structuring a complex schema](https://json-schema.org/understanding-json-schema/structuring.html) for more information on how to use `$id` and
`$ref`.


<a id="orgd20bc34"></a>

## Debugging

See the [Debugging Field Guide](debugging-field-guide.md) for a reference manual on how to debug transformer
issues in the wild.

