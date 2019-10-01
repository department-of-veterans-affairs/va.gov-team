# RFC: API Documentation Workflow

### Background

The workflow for creating endpoint documentation for vets-api is time intensive. It also results in a lot of duplicate code. Currently we use a Ruby DSL [swagger-blocks](https://github.com/fotinakis/swagger-blocks) to generate docs that follow the swagger v2 spec. 

### Motivation

When the 'API Wars' ended Swagger won and became the basis for the OpenAPI Specification. It's currently at version 3.0.2. However swagger-blocks support for v3 [stalled in 2018](https://github.com/fotinakis/swagger-blocks/issues/110). 

The main issues with our current setup are:

*   Duplication with the JSON Schema files we use to verify contracts in specs. 
*   Although the DSL uses Ruby there's still a mental shift required when working with it.
New developers are learning the vets-api way of doing things (and sometimes Ruby/Rails). The DSL adds another thing to learn.
*   Being a Ruby DSL you can't take advantage of OpenAPI tools to design your API upfront. 
Nor can you use Editor/IDE plugins to assist writing docs.
*   The Swagger-UI renderer we use could be more intuitive and visually appealing... 

#### Better looking docs

Compared to the API docs that are held up as best in breed examples (e.g. [Stripe's](https://stripe.com/docs/api)) the design and layout of our docs 
fall a bit short. Currently the endpoints are presented in a single, albeit grouped, long list. There's no navigation 
or table of contents and models for response payloads are hidden and their fields have no descriptions. This is tangential to making writing docs better. Whatever solution we choose the final step should be rendering the documentation so that they don't look like government docs pushed through a default renderer.

## Design

### Just use JSON

We move away from swagger-blocks and write OpenAPI spec in JSON. This addresses the first three issues in motivation above.

*   We can reference ($ref) the JSON schema files we use in specs from OpenAPI path definitions. No more duplication.
*   It's JSON you can edit it in an Editor, IDE, or online. Examples can be copy and pasted without an extra step of 
translating into the Ruby DSL.
*   As a native OpenAPI format all the tools in the ecosystem will work with it. You can create contracts upfront and 
mock data before you write any service code.

Our current docs compile into JSON. Moving to JSON as source is a matter of extracting it into separate files so they're easier to manage. Docs for an extracted route looks like the following:

```js
"/v0/address/countries": {
  "get": {
    "responses": {
      "200": {
        "description": "Response is OK",
        "schema": {
          "$ref": "#/definitions/Countries"
        }
      },
      "401": {
        "description": "Not authorized",
        "schema": {
          "$ref": "#/definitions/Errors"
        }
      }
    },
    "description": "Get a list of the PCIU supported countries",
    "operationId": "getCountries",
    "tags": [
      "benefits_info"
    ],
    "parameters": [
      {
        "$ref": "#/parameters/authorization"
      }
    ]
  }
},
```

In the example above model schemas are OpenAPI definitions. As OpenAPI uses JSON schema as its base you can also reference those files directly. Schema definitions are larger than path definitions. So the bulk of the API documentation ends up being files we already use to validate our API contracts:

```js
"200": {
  "description": "Response is OK",
  "schema": {
    "$ref": "$ref": "https://raw.githubusercontent.com/department-of-veterans-affairs/vets-api/master/spec/support/schemas/countries.json"
  }
}
```

### Risks

The first risk is the time to convert the existing docs. It's mitigated by already having the existing JSON used for the docs. 
It's a giant JSON blob but we can pull it out into $refs pointing to separate files.

The second is that it's harder to write tests that check that an endpoint is documented correctly. That said our current 
specs validate endpoints only if the documentation exists. If it's missing the tests also pass. One could argue that 
documentation and specs should not be mixed. Specs are to ensure correctness of functional and technical requirements. 
Additionally specs can only check that docs exist not that they are easy for humans to understand. It's also debatable 
whether you should hold up development because documentation is missing. A potential solution is create a custom rspec 
matcher that checks for endpoints are documented once they are fully baked.

## Alternatives
### 1. Yard Extension or Custom Annotation (via Ripper)

In a very unscientific slack poll using annotations above controller methods was the clear winner. The main benefit is 
that documentation lives next to the code. Ruby does not have built in annotations and a brief survey found no existing libraries that allow API documentation via annotations (the closest lib found was for [generating routes via annotations](https://github.com/mmichael0413/annotate_controllers)). However, you can approximate annotations in code comments via yard. As we already use yard for the Ruby API we could write an extension that outputs REST API docs in OpenAPI Spec (or slate/custom markdown). The JSON Schema models from our specs could be still be pointed to from this method. Alternatively we could create a custom annotation lib independant of yard using the Ruby standard lib script parser [Ripper](https://ruby-doc.org/stdlib-2.5.1/libdoc/ripper/rdoc/Ripper.html). Documentation for an endpoint in either 
case could look like:

_(in this example the `@@` symbol denotes the start of API docs)_

```ruby
module V0
  class AddressesController < ApplicationController
    before_action { authorize :evss, :access? }

    # @@
    # GET '/v0/address/countries'
    #   Returns a users corp address
    # parameters
    #   Authorization
    #     in: header
    #     description: The authorization method and token value
    #     required: true
    #     schema: spec/support/schemas/address_response.json
    # @@

    def show
      response = service.get_address

      render json: response,
             serializer: AddressSerializer
    end
```

#### Risks

The main is risk for this solution is the amount of time it would take to implement. API documentation has a lot of variables and corner cases. Making our own lib could take potentially take a couple of sprints. Unless you implement your own rendering system you're also now in charge of insuring your lib is caught up with any changes to the renderer.

It also shares the same risks as option # 1 and compounds the rewrite risk as you can't copy and past existing JSON into $ref docs. As this is a custom solution we lose access to the OpenAPI ecosystem. 

### 2. Commercial Software

We buy an off the shelf solution such as:

*   [Postman](https://www.getpostman.com/)
*   [stoplight.io](https://stoplight.io/)
*   [readme.io](https://readme.io/)
*   [swagger.io](https://swagger.io/)
*   [Apiary](https://apiary.io/)

Of these Postman seems to have the best combination of price, features, and ease of use. Benefits are that minimal development 
time, aside from setup, is required.

#### Risks
The main risk is the cost which is tied to the number of users with access. As we add developers to the project the monthly price to use the software climbs higher. There's also a management cost of adding and removing users as they roll on or off the project. A secondary risk is that we're locked into a platform. Moving back to open source tools most likely would require a lot of effort in refactoring the documentation.

### 3. Markdown

Write docs in Markdown format and render them via [Slate](https://github.com/lord/slate). Slate is an open source project inspired by Stripe's API docs. Endpoints can be split across files much like $refs. The main benefit is that Markdown is easy to write and maintain with predictable output.

Regardless of whether we use Slate directly we can still use it as a renderer for OpenAPI Spec or a custom format. Tools such as [Windershins](https://github.com/Mermade/widdershins) can convert from OpenAPI Spec to Slate and could be inserted into a rendering pipeline when deploying the docs.

#### Risks
Downside to this solution is that the docs are completely removed from the code and the option to require specs. You lose access to the OpenAPI ecosystem. JSON schema files can not be reused so you have the model duplication problem again. And all our existing docs must be transfered over.
