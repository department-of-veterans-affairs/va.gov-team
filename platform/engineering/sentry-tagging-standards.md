
# VSP Sentry Tagging Standards

## Background

Sentry allows adding [additional context](https://docs.sentry.io/enriching-error-data/context/?platform=ruby) to error events 

This document aims to standardize our use of these features for consistency and reliability in searching/filtering Sentry events.

### Definitions

*Tags* are key/value pairs which generate breakdowns charts and [search filters](http://sentry.vfs.va.gov/vets-gov/platform-api-production/?query=is%3Aunresolved+backend_service%3Aevss). You can see all tags for the given Sentry project [here](http://sentry.vfs.va.gov/settings/vets-gov/projects/platform-api-production/tags/). Tags will also be used in the Sentry alert sent to Slack.

*Extra* context is unstructured and difficult to use as a search/filter metric. Use sparingly.

### Automated tagging in `vets-api`

- every controller action in `vets-api` that inherits from ApplicationController is tagged with:
 
```ruby
 def user_context
    {
      uuid: current_user&.uuid,
      authn_context: current_user&.authn_context,
      loa: current_user&.loa,
      mhv_icn: current_user&.mhv_icn
    }
  end

  def tags_context

    {
      controller_name: controller_name,
      sign_in_method: sign_in_method_for_tag
    }
  end

  def extra_context
    {
      request_uuid: request.uuid
    }
  end
```

- Sidekiq jobs are automatically tagged by code in `lib/sidekiq/error_tag.rb` with the job's class name.

### Manually tagging in `vets-api`

The following tags are available and encouraged for use in your code.

Generally it is advisable to provide warrants if adding a new tag not seen here in a given PR.

`feature`
  - Represents a specific, pre-defined feature. E.g., `pension_burial` or  `vic`
  - The current approach is to follow the `SentryTag` template as seen in [`lib/vic/tag_sentry.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/vic/tag_sentry.rb)

`external_service` 
  - Name of an backend/external service, i.e. `evss` or `search`
  - Currently, this is used in multiple ways, we should standardize on `external_service`
      - This one would be great to extract to common class it's better implemented in the `evss` module as external services, with sub-classes
 
`validation` 
  - This tag represents a validation failure in a given controller/transaction.
  - The current approach is to include this as a tag if a validation error occurs. See [example](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/gi_bill_feedbacks_controller.rb)
