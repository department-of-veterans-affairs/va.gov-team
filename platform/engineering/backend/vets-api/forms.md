----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/integrations/Forms.721453145.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Vets API Forms

## Schemas

Form Schemas are utilized by both Vets-API and Vets-Website, and allow the two
systems to share the structure of a form. This involves specifying fields
and types. Schemas are maintained in the [Vets-JSON-Schema
Repository](https://github.com/department-of-veterans-affairs/vets-json-schema).
Schemas should be defined for integrations that will process a form presented
on Vets-Website.

## Model

```ruby
class SavedClaim::Burial < CentralMailClaim
  # id of the form, must be the same as the id in the directory name of the associated json schema
  # for example the path to this models's schema is vets-json-schema/src/schemas/21P-530/schema.js
  FORM = '21P-530'  
end
```

## Validation

```ruby
form = SavedClaim::Burial.new(form: {}.to_json)
form.valid? # => false
form.errors.messages[:form] # => ["The property '#/' of type Hash did not match one or more of the required schemas. The schema specific errors were:\n\n- anyOf #0:\n    - The property '#/' did not contain a required property of 'vaFileNumber'\n- anyOf #1:\n    - The property '#/' did not contain a required property of 'veteranSocialSecurityNumber'", "The property '#/' did not contain a required property of 'privacyAgreementAccepted' in schema 57d02bcd-7bbe-567e-bc7d-f6ee46bea309", "The property '#/' did not contain a required property of 'claimantAddress' in schema 57d02bcd-7bbe-567e-bc7d-f6ee46bea309", "The property '#/' did not contain a required property of 'veteranFullName' in schema 57d02bcd-7bbe-567e-bc7d-f6ee46bea309"]
```

## Processing

```ruby
class ClaimsBaseController < ApplicationController
  def create
    claim = claim_class.new(form: filtered_params[:form])
    unless claim.save
      raise Common::Exceptions::ValidationErrors, claim
    end
    # this will queue up a job to process the form and its attachments
    # and submit them to the central mail API
    claim.process_attachments!
    render(json: claim)
  end
end
```

<hr>

Back: [Vets API Documentation](documentation.md)

Next: [Vets API PDF Generation](pdf-generation.md)
