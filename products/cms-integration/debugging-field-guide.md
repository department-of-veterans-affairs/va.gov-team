
# Table of Contents

1.  [Debugging Field Guide](#org2e3cfb5)
    1.  [JSON schema validation errors](#orgae0b4b9)
        1.  [Solution](#org322866b)
    2.  [Object doesn&rsquo;t deep equal object??](#org9a505f1)
        1.  [Solution](#org75ee4dd)
    3.  [Handling circular references](#org3dd19b5)
        1.  [Solution](#orgd30f084)
    4.  [My transformer isn&rsquo;t receiving a property that exists in the raw content](#org65ea096)
        1.  [Solution](#orgc5c9c05)



<a id="org2e3cfb5"></a>

# Debugging Field Guide

Oh no. Something broke, didn&rsquo;t it? Here, take this guide. I hope it helps.


<a id="orgae0b4b9"></a>

## JSON schema validation errors

Content is validated against two separate JSON schemas. Once before
transformation, and once after. When a validation fails, an error will be thrown
and a message like the following will be logged to the console:

    node.2bddb1a7-6fb1-4503-838d-9c2fcb51c46a (node-health_care_region_page) is invalid after transformation:
    {
      "keyword": "type",
      "dataPath": ".entity.fieldLinkFacilityEmergList",
      "schemaPath": "#/properties/entity/properties/fieldLinkFacilityEmergList/type",
      "params": {
        "type": "object,null"
      },
      "message": "should be object,null"
    }
    Data found at .entity.fieldLinkFacilityEmergList: []

From this message we can see the following:

-   The exact entity that failed validation
    -   `node.2bddb1a7-6fb1-4503-838d-9c2fcb51c46a`
-   Which content model it was
    -   `node-health_care_region_page`
-   Which schema failed
    -   &ldquo;invalid after transformation&rdquo; means the schema in question can be found in
        `schemas/transformed/node-health_care_region_page.js`
    -   &ldquo;invalid before transformation&rdquo; would mean the schema could be found in
        `schemas/raw/node-health_care_region_page.js`
-   The field that failed validation
    -   Look in the `dataPath`
-   The schema rule that was violated
    -   `schemapath` tells us what rule it was, `params` tells us what the valid
        options were
        -   Technically, it tells us what the parameters were for that particular rule
    -   In this case, we can see it was the `fieldLinkFacilityEmergList`&rsquo;s `type`
        which was supposed to be either an object or null
-   The exact error message returned from [AJV](https://github.com/epoberezkin/ajv)
    -   Look in `message`
    -   This is the easy way to figure out what the error was, but it&rsquo;s sometimes
        still mystifying
-   What the actual data was that failed the validation
    -   In this case, we can see `.entity.fieldLinkFacilityEmergList` was an empty
        array
    -   The schema expected it to be either an object or null, so this failure makes
        sense


<a id="org322866b"></a>

### Solution

Armed with this information, we can crack open the transformer and see what&rsquo;s
going on.

**Note:** If a validation error occurs while running the unit tests, you may have
to scroll up quite a ways to see the actual validation error output. Just look
for the yellow / gold writing.


<a id="org9a505f1"></a>

## Object doesn&rsquo;t deep equal object??

Ideally, we&rsquo;d catch all the validation errors locally, but that won&rsquo;t always be
the case. Unfortunately, the error output from Mocha is sometimes limited in
Jenkins. As such, when the unit test encounters an error, it logs the entire
test file and the output of the transformation for manual comparison.


<a id="org75ee4dd"></a>

### Solution

Open the full logs in Jenkins to find the error output. Search for

    Transformed entity in the test JSON file:


<a id="org3dd19b5"></a>

## Handling circular references

Typically, it&rsquo;s best to leave child entities alone in the parent transformer,
but sometimes this causes a circular reference. For example:

    {
        "$id": "Foo",
        "type": "object",
        "properties": {
            "barChild": { "$ref": "Bar" }
        }
    }
    
    {
        "$id": "Bar",
        "type": "object",
        "properties": {
            "fooChild": { "$ref": "Foo" }
        }
    }

If this happens, AJV, the underlying JSON schema validator, will fail with the
following error:

    TypeError: Converting circular structure to JSON


<a id="orgd30f084"></a>

### Solution

Return only part of a content model. See [`node-vamc_operating_status_and_alerts`](https://github.com/department-of-veterans-affairs/vets-website/blob/5015d231a1391c542b2bd4637500afd6296cc649/src/site/stages/build/process-cms-exports/transformers/node-vamc_operating_status_and_alerts.js#L18-L25)
for an example. Once this is done, the [schema will need to be updated](https://github.com/department-of-veterans-affairs/vets-website/blob/5015d231a1391c542b2bd4637500afd6296cc649/src/site/stages/build/process-cms-exports/schemas/transformed/node-vamc_operating_status_and_alerts.js#L23-L28) so it
doesn&rsquo;t expect the missing pieces.


<a id="org65ea096"></a>

## My transformer isn&rsquo;t receiving a property that exists in the raw content

You&rsquo;ve verified that the property *does* exist in the content model and it&rsquo;s
present in the actual entity on file, but when you try to use it in the
transformer, it just plain isn&rsquo;t there? Sounds like it needs to be added to the
content model&rsquo;s `filter`.


<a id="orgc5c9c05"></a>

### Solution

Make sure the content model&rsquo;s [`filter`](transformation-process.md) includes the property you want to use in
the transformer.

