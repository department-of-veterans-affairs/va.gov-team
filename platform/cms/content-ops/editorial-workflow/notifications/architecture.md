**Purpose: Architect a solution to notifications and subscriptions as outlined here: https://docs.google.com/spreadsheets/d/1M0a4VBcuNxpYuhDDpARQdlpRXaeXG_K9JyVCV9xCu6c/edit#gid=0.**


## Technical Requirements

* Abilty to triggers on complex events including workflow transitions and user updates.
* Audit log of every notification created and why it was created.
* Ability to subscribed to content events.
* Allow user to select how they would recieve messages.
* Custom templates for differnt types of notificaitons.
* In App notificaitons possible.
* Extensive API to allow our custom workflow and behaviors.

## Module Evaluation: 

The following modules were evaluted for a notificaitons framework.  The selection is [danse](https://www.drupal.org/project/danse) with [push_framework](https://www.drupal.org/project/push_framework).



| Module                                             | Notes                                                                                                                                                                                                                                                                    | Flexibilty on Triggering Events                        | Channels conigurable | Templates                                                                                                             | User level configuration | Flexible API |
|----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|----------------------|-----------------------------------------------------------------------------------------------------------------------|--------------------------|--------------|
| https://www.drupal.org/project/courier             | Courier is an API allowing modules to send messages to people via a channel of their preference. There is not a built in event or trigger.                                                                                                                               | No event triggers, only sending messages               |                      | Has a template API but currently only user level emails are setup.                                                    | Y                        | Y            |
| https://www.drupal.org/project/govuk_notify        | VA Notify Modules                                                                                                                                                                                                                                                        |                                                        |                      |                                                                                                                       |                          |              |
| https://www.drupal.org/project/push_framework      | This is a framework which pushing notificaitons somewhere.  It requires plugins to be written                                                                                                                                                                            | No event Triggers, only sending messages               |                      | global template but uses display modes on entities to render content.  There is a robust API which could be leveraged | Y                        | Y            |
| https://www.drupal.org/project/danse               | Event/audit framework.  This isn't specifily for notificaiont but a more general subscription framework with a few existing plugins.  We would use this as a bas and build our own plugins or use exiting plugins.  This includes interaction with sending notificaitons | Includes extensive triggers along with API to add more |                      | NA, this module is for events only, and not sending notifications                                                     | Y                        | Y            |
| https://www.drupal.org/project/notification_system | This module combines some of the event handling and some of the notificaitons.  The code is clean but there isn't any audit ability.  This is similar to DANSE but with less features.                                                                                   | Includes some triggers                                 |                      | Global                                                                                                                | Y                        | Y            |

## Solution

While evaluating the modules I came accross https://www.lakedrops.com/en/blog/post/ultimate-subscription-and-notification-solution-drupal which aligns with our requiremnts.  The rest of this document will contain details about how we implment this solution for the VA.

### Events and Subscriptions

Within Drupal, events are triggered from a variety of sources.  The sources can include content updates, workflow changes or user changes.  The DANSE module provides a plugin called `danse_content` whichw will listen for any entity change but there are a few downsides to the plugins.  

1. The content hooks into the entity forms instead of enttiy update hooks or events.  https://www.drupal.org/project/danse/issues/3169702
1. No integration with `content_moderation`.

Custom plugins will need to be created to fullfil the MVP.  Types of events/subscriptions needed for MVP.  These plugins will be made in a way to be highly configurable and re-useable.

* `content_moderation` is updated for an entity.  User/role should be able to subscribe to transition of specific entity type and bundle.
  * Ex: As a user, who is subscribed to content, I want to be notified when the content is published
* `entity` is updated. User/role should be able to subscribe to updates based upon an entity field value. 
  * Ex: As a CMS user, who requested access to Section(s), I want to be notified when I'm granted access.
  * Ex: As a CMS user, who has been assigned to content, I want to be notified about the assignment."
* Broken link intergration.  User/role should be able to subscribe to events if content they author/udpate has broken links.
* Create Entity form block/widget to manually subscribe.  There is currently a UI which allow users to subscribe to a node if they have permissions.  This form

### Notificaitons

The [push_framework](https://www.drupal.org/project/push_framework) provides a robust API for multiple devlivery channels and user level control over the channels.  Notificaitons to be sent are pulled via plugins.  The pulled notifications are then sent to the channles specified by configuration (or other plugins) and a queues are used to send and ensure delivery.

Plugins to be created:

* Intgraion with VANotify API. This insluces a new VANotify module which can either patch or fork https://www.drupal.org/project/govuk_notify.
* A plugin to pull notificaitons from `contenet_moderation` DANSE plugin
