# Technical Architecture - Aging Content Notifications Framework

## Introduction

### Purpose of the Document
This document outlines the technical architecture of the Aging Content Notifications framework, which is a notification system designed to send CMS editors emails based on a cadence or schedule, depending on the age of CMS content. For more information, see the [product initiative](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/governance/aging-content-notifications).

### Scope
The Aging Content Notifications Framework is responsible for queuing, processing, and delivering emails at specified intervals. It ensures reliable and timely delivery of emails for notifications regarding content which have defined notification schedules. The first initiative with this framework is to address aging Full Width Banner content.

### Audience

This document is intended for software architects, developers, and stakeholders involved in the design, development, and maintenance of the Aging Content Notifications Framework.

## System Overview

###  System Purpose
The Aging Content Notifications Framework is designed to handle the scheduling, processing, and delivery of templated emails to users who have authored content which has expired or is expiring soon. The system can be used for other templated email notifications and isn’t limited to aging content, but the initial system will be based on expired content and the notifications surrounding it.

### System Architecture Overview

The architecture follows a modular and scalable design, separating components for scheduling, queuing, processing, and delivery to ensure flexibility and maintainability.

### Key Features
- Scheduled Email Queuing
- Scalable Processing
- Templated Messages
- Support for Any Notification Schedule

## Architecture Principles

The system is composed of modular components (scheduler, queue manager, processor, delivery service) with well-defined interfaces for easy maintenance and scalability. The architecture will afford us the flexibility to schedule notifications for virtually any reason, while avoiding collision with the existing [“Outdated Content” notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/product-outlines/VA-Directive-6102-Notifications.md) product. Furthermore, it allows the Outdated Content notifications to ultimately be moved into this new framework, if it is desired to do so in the future.

## System Components

### Overview of Components
- **Expirable content:** Manages content type expiration. _(Custom module)_
- **Orchestration:** Manages the scheduling of email messages. (ECA)
- **Queue:** Queues emails for processing. (AdvancedQueue)
- **Processor:** Processes queued emails at scheduled intervals. (AdvancedQueue)
- **Delivery Service:** Responsible for sending emails through designated providers. (Message, Message Notify)

### Expirable Content
In order to support being able to configure a content type to expire, we created the [Expirable Content](https://www.drupal.org/project/expirable_content) module. This module has no knowledge of any of the Aging Content framework, and itself does not perform any actions when the content reaches expiration. Instead, it merely captures the expiration and warning dates, allowing them to be used in Views.

Expirable Content Types can be configured in the Drupal Admin UI under [Structure > Expiring Content Types](http://cms.va.gov/admin/structure/expirable_content_types).

**Example:** For the first use case, we configured the Full Width Banner content type to **expire** 7 days after it was created or last updated and to **warn** users 3 days before the expiration date.

![image](https://github.com/user-attachments/assets/a9ce5425-8c5a-4cd0-8362-453ec52c04bb)

### Orchestration via ECA
The orchestration of processing events is handled by the Drupal [ECA](https://www.drupal.org/project/eca) module (Event Condition Action). The ECA module provides a framework for performing any Action (such as queue email) based on any Condition, triggered by an originating Event (such as cron). ECA has been extended with custom plugins to accommodate our mail queueing and delivery needs.

#### Process Summary
It might be helpful to walk through how the system works when sending Full Width Banner notifications:

- **Queueing phase:** Drupal cron runs, and the built in ECA-Cron **Event** is triggered. Each configured ECA event which is scheduled is executed. Assuming the _FWB: Expired_ ECA model is scheduled, the first action, _Views: Query Expired FWB Result_, is executed (there are no **Conditions** to first check). This is a built-in ECA **Action** that executes a View and returns a result into a token–in this case named ‘results’. The Views action calls its successor, the Trigger Custom Event: Queue Notification, Action, which takes the results from the View and passes each individual result to an **Event**: _Content Aware Event: Queue Email_. This **Event** triggers an **Action** for each result, _Queue Notification_, which is a custom **Action** we created. This Action takes a configured payload, and creates a new AdvancedQueue Job of a specified type, and queues it to a specified AdvancedQueue queue for later processing. We have created a custom Job Type plugin that handles sending mail for the Aging Content framework which will be discussed in the sending phase. This the end of the queueing phase.

- **Sending phase:** On a subsequent cron run, AdvancedQueue runs and processes all queued jobs. If present, our custom Job Type, [va_gov_aging_content_notification](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/docroot/modules/custom/va_gov_notifications/src/JobTypeMessageNotifyBase.php), assembles information necessary to create a new Message Template from the provided payload and sends the message using Message Notify.

#### Event

Using a built-in Event plugin from ECA, anytime Drupal cron runs (currently every 15 minutes), ECA is queried for any Events that are scheduled to run. The Event contains a field to define the schedule using a cron expression, eg: **5 4 * * ***

If the event is scheduled, all the ‘successors’ get executed in order.

#### Condition
Conditions are not a requirement for ECA models. The first implementations of this framework, for expiring and warning of Full Width Alerts, will not use a condition. However, we have planned for the future, and should we need one, a [Views condition has been developed](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/docroot/modules/custom/va_gov_eca/src/Plugin/ECA/Condition/ViewsResultCondition.php) and can be utilized by any future ECA model.

#### Action
A custom Action, [“Create an AdvancedQueue Job and optionally enqueue it”](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/docroot/modules/custom/va_gov_eca/src/Plugin/Action/CreateAdvancedQueueJob.php), is a custom Drupal Action we created which will take the results of a View and add each result to a configured AdvancedQueue queue. The action has a configuration form which accepts any payload, making it useful as a generic Drupal Action, rather than specific to the Aging Content Notifications framework. The payload entered as yaml, and is consumed later during mail templating and sending.

### Processor

Processing mail for Aging Content Notifications delivery will be handled by the Drupal [Advanced Queue](https://www.drupal.org/project/advancedqueue) (contrib) module. When Drupal cron fires, a new [AdvancedQueue Job Type](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/docroot/modules/custom/va_gov_notifications/src/Plugin/AdvancedQueue/JobType/AgingContentNotification.php) will process all Scheduled Notifications which have been queued up. The Job Type processing takes the payload and assembles a Message using a Message Template. The message is sent using Message Notify.

#### Payload
The payload for an Aging Content Notification message is entered in yaml format, and should contain several key value assignments in order to function properly. Tokens are supported.

- template_values: an array that contains two keys:
  - uid: The user id of the email recipient
  - template: the Message Template machine name to use for styling the Message
- values: an array of key values passes to the Message entity:
- restrict_delivery_to: blacklisted user ids
- Allow_delivery_only_to: whitelisted user ids

Below is an example of a payload for an expired FWB node, as configured [here](https://prod.cms.va.gov/admin/config/workflow/eca/aging_content_expired_fwb/action/create_advancedqueue_job/edit).

template_values:
    uid: "[node:author:uid]"
    template: aging_content_expired_fwb
restrict_delivery_to:
values:
    field_expired_date: "[node:expiration_date:date:html_date]"
    field_target_entity:
         target_id: "[node:nid]"
    field_target_node_title: "[node:title]"

### Delivery Service
The Drupal [Message](https://www.drupal.org/project/message) stack will handle the templating, and message notifications themselves.

## Security
Role based access controls for administrative tasks. We will define new Drupal permissions and roles as needed to maintain secure access to the tools provided by the framework.

## Appendices
### Glossary
- ECA - Event, Condition, Action. A Drupal module which orchestrates the scheduling of messages.

- Message -The Drupal [Message](https://www.drupal.org/project/message) and related contributed modules.

- Views - A Drupal Core module which is a query builder.

## Document Revision History

| Version | Date | Description | Author |
|-------------------|------------------|-------------------|-------------------|
| 1.0 | 1/23/24 | Initial creation | Daniel Sasser |
| 1.1 | 7/8/24 | Updates | Daniel Sasser |
| 1.2 | 7/15/24 | Updates | Dave Picket |









