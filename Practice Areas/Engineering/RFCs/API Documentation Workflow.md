# RFC: API Documentation Workflow

## Background

The workflow for creating endpoint documentation for vets-api could be better. Currently we use a 
Ruby DSL [swagger-blocks](https://github.com/fotinakis/swagger-blocks)
to generate docs that follow the swagger v2 spec. 

## Motivation

When the 'API Wars' ended Swagger won and became the basis for the OpenAPI Specification. It's currently at version 3.0.2 
and swagger-blocks support for it [stalled in 2018](https://github.com/fotinakis/swagger-blocks/issues/110). The main issues with our current setup are:

*   Duplication with the JSON Schema files we use to verify contracts in specs. 
*   Although in Ruby there's still a mental shift required when working with it. OpenAPI -> DSL -> Ruby. 
New developers are learning the vets-api way of doing things (and sometimes Ruby/Rails). The DSL adds another thing to learn.
*   Being a Ruby DSL you can't take advantage of OpenAPI tools to design your api upfront. 
Nor can you use Editor/IDE plugins to assist writing docs.
*   The Swagger-UI renderer we use could be more intuitive and visually appealing. 

### Better looking docs

Compared to the API docs that are held up as best in breed examples (e.g. Stripe's) the design and layout of our docs 
fall a bit short. Currently the endpoints are presented in a single, albeit grouped, long list. There's no navigation 
or table of contents. And models for response payloads are hidden and their fields have no descriptions. This is tangential 
to making writing docs better. Whatever solution we choose the final step should be rendering the documentation so that 
they don't look like government docs pushed through a default renderer.

## Design

### Option # 1: Just use JSON

We move away from swagger-blocks and write OpenAPI spec in JSON. This addresses the first three issues in motivation above.

*   We can reference ($ref) the JSON schema files we use in specs from OpenAPI path definitions. No more duplication.
*   It's JSON you can edit it in an Editor, IDE, or online. Examples can be copy and pasted without an extra step of 
translating into the Ruby DSL.
*   As a native OpenAPI format all the tools in the ecosystem will work with it. You can create contracts upfront and 
mock data before you write any service code.

#### Risks

The first risk is the time to convert the existing docs. It's mitigated by already having the existing JSON used for the docs. 
It's a giant JSON blob but we can pull it out into $refs pointing to separate files.

The second is that it's harder to write tests that check that an endpoint is documented correctly. That said our current 
specs validate endpoints only if the documentation exists. If it's missing the tests also pass. One could argue that 
documentation and specs should not be mixed. Specs are to ensure correctness of functional and technical requirements. 
Additionally specs can only check that docs exist not that they are easy for humans to understand. It's also debatable 
whether you should hold up development because documentation is missing. A potential solution is create a custom rspec 
matcher that checks for endpoints are documented once they are fully baked.

### Option # 2: Yard Extension or Custom Annotation (via Ripper)

In a very unscientific slack poll using annotations above controller methods was the clear winner. The main benefit is 
that documentation lives next to the code. Ruby does not have built in annotations but you can approximate annotations 
in code comments via yard. As we already use yard for the Ruby API we could write an extension that outputs REST API docs 
in OpenAPI Spec (or slate/custom markdown). The JSON Schema models from our specs could be still be pointed to from this 
method. Alternatively we could create a comment annotation lib independant of yard using the std lib script parser [Ripper](https://ruby-doc.org/stdlib-2.5.1/libdoc/ripper/rdoc/Ripper.html). Documentation for an endpoint in either 
case could look like:

_(the `@@` symbol denotes the start of API docs or AT-AT the lib would be full of Star Wars $refs)_

```ruby
module V0
  class AddressesController < ApplicationController
    before_action { authorize :evss, :access? }

    # @@
    # get '/v0/address/countries'
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

This shares the same risks as option # 1 and compounds the rewrite risk as you can't copy and past existing JSON into $ref docs. As this is a custom solution we lose access to the OpenAPI ecosystem. Upside it that it can work exactly how we want it to.

# Alternatives

## Commercial Software

We buy an off the shelf solution such as:

*   [Postman](https://www.getpostman.com/)
*   [stoplight.io](https://stoplight.io/)
*   [readme.io](https://readme.io/)
*   [swagger.io](https://swagger.io/)
*   [Apiary](https://apiary.io/)

Of these Postman seems to have the best combination of price, features, and ease of use. Benefits are that minimal development 
time, aside from setup, is required. Downside is the cost and being locked into a platform.

## Markdown

Write docs in Markdown format and render them via [Slate](https://github.com/lord/slate). Slate is an open source project inspired by Stripe's API docs. Endpoints can be split across files much like $refs. The main benefit is that Markdown is easy to write and maintain with predictable output. Downside to this solution is that the docs are completely removed from the code and the option to require specs.

Regardless of whether we use Slate directly we can still use it as a renderer for OpenAPI Spec or a custom format. Tools such as [Windershins](https://github.com/Mermade/widdershins) can convert from OpenAPI Spec to Slate and could be inserted into a rendering pipeline when deploying the docs.
