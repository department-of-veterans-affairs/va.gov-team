
# VSP Sentry Tagging Standards

## Background

Sentry allows adding [additional context](https://docs.sentry.io/enriching-error-data/context/?platform=ruby) to error events 

This document aims to offer best practices for the use of these features with the goal of consistency and reliability in searching/filtering Sentry events.

### Definitions

*Tags* are key/value pairs which generate breakdowns charts and [search filters](http://sentry10.vfs.va.gov/organizations/vsp/issues/?project=3&query=is%3Aunresolved+title%3A%22Common%3A%3AExceptions%3A%3ABackendServiceException%3A+Common%3A%3AExceptions%3A%3ABackendServiceException%22&statsPeriod=14d). You can see all tags for a given Sentry project at `/settings/vsp/projects/:project-slug/tags`, see an example [here](http://sentry10.vfs.va.gov/settings/vsp/projects/platform-api/tags/). Tags are also used in alerts sent to Slack.

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

If you add a new tag in a pull request, please make sure to explain the reason(s) for needing the new tag
so that it is easier to approve the change.

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
