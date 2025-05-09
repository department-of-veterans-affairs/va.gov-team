# `UserAudit` Module

## Version History

| Version Number | Author(s)                                              | Revision Date | Description of Change                                                                      |
|----------------|--------------------------------------------------------|---------------|--------------------------------------------------------------------------------------------|
|       0.1      | John Bramley |    5/01/25    | Initial creation                                                                           |

## Introduction

In order to improve auditability of sensitive user actions & events on VA.gov the Identity team has implemented a `UserAudit` Rails module. This module appends to the existing `SemanticLogger` class already present in `vets-api` in order to simplify usage & leverage its features.

## Implementation

### `UserActionEvent` Configurations

In order to create a user audit log for a new event, you will first need to create a `UserActionEvent` configuration record. This can be done by updating the `vets-api/config/audit_log/user_action_events.yml` YAML file with the desired event attributes.

```yml
# config/audit_log/user_action_events.yml
---
sign_in:
  event_type: sign_in
  details: Sign in on VA.gov
some-identifier: # the identifier you'll use to look up the UserActionEvent
  event_type: some-event-type # category for multiple related event types
  details: Some details about the event # human-readable description for display to end users
```

Once the YML file is updated running `rails db:seed` should populated the database with the new configuration. For more information on user audit log event naming see the [user actions content style guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/user-action-logs/User_Actions_List.md#user-actions-content-guide).

On cloud environments a Identity engineer is required to manually  implement a new `UserActionEvent` configuration.

### Invocation in `vets-api`

Once the appropriate `UserActionEvent`s have been created, the `UserAudit` module can be invoked to use them anywhere in `vets-api`. The module takes the following required arguments:

* `status`: defined as the final method call after `User.logger`, allowed values are `initial`, `success`, `error`
* `event`: the identifier tied to the log's `UserActionEvent`
* `user_verification`: the `UserVerification` model of the user whose account the action is being performed against

```ruby
UserAudit.logger.success(event: 'some-identifier', user_verification: @current_user.user_verification)
=> true

UserAudit.logger.error(event: 'some-other-identifier', user_verification: @current_user.user_verification)
=> true
```

## Log Types & Attributes

Invoking the `UserAudit` module to create logs for an event will generate two different types of logs in the same flow, `UserAction` & `Audit::Log` records.

### `UserAction` Records

`UserAction` records are maintained in the same `vets-api` environment that the `UserAudit` logger was called on, in the `user_actions` database table. These logs are maintained for one (1) year after creation.

 `UserAction` records hold the following custom attributes:

* `user_action_event_id` - relation to `UserActionEvent`
* `status` - the status assigned to the log at creation
* `subject_user_verification_id` - relation to the *subject* end user's `UserVerification`
* `acting_ip_address` - pulled from SemanticLogger
* `acting_user_agent` - pulled from SemanticLogger
* `acting_user_verification` - relation to the *acting* end user's `UserVerifiction` (usually the acting & subject end user are the same)

### `Audit::Log` Records

`Audit::Log` records are maintained in separate AWS infrastructure from the `vets-api` environment that the `AuditLogger` was called on. These logs are maintained for seven (7) years after creation.

`Audit::Log` records hold the following custom attributes:

* `subject_user_identifier` - CSP uuid for the *subject* end user, tied to their `UserVerification`
* `subject_user_identifier_type` - CSP type for the `subject_user_identifier` - `idme`, `logingov`, etc.
* `acting_user_identifier` - CSP uuid for the *acting* end user, tied to their `UserVerification`
* `acting_user_identifier_type` - CSP type for the `acting_user_identifier`
* `event_id` - related UserActionEvent `identifier`
* `event_description` - related UserActionEvent `details`
* `event_status` - the status assigned to the log at creation
* `event_occurred_at` - the creation timestamp of the log
* `message` - log payload, including `acting_ip_address` & `acting_user_agent` values

## Current & Planned Implementations

User actions that have logging implemented or are planned to in the future can be found on the [user actions list](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/identity/user-action-logs/User_Actions_List.md#user-actions-list).

The [UserAudit Logger Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/g3c-qu4-ick?fromUser=false&refresh_mode=sliding&from_ts=1746126916996&to_ts=1746130516996&live=true) tracks `UserAction` & `Audit::Log` creation by event description on the VA.gov production environment.