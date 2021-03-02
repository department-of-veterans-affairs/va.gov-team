## Event Architecture:

<img src="https://lucid.app/publicSegments/view/a9d4bc8b-defd-48f9-9053-ed8bffe8e602/image.png">


## Notification Architecutre:

<img src="https://lucid.app/publicSegments/view/889dab3d-e9c9-4c68-bc35-53335dc3685a/image.png">


## **Technical Requirements**



*   Ability to trigger on complex events including workflow transitions and user updates.
*   Audit log of every notification created and why it was created.
*   Ability to subscribe to content events.
*   Allow user to select how they would receive messages.
*   Custom templates for different types of notifications.
*   In-App notifications possible.
*   Extensive API to allow our custom workflow and behaviors.


## **Module Evaluation:**

The following modules were evaluated for a notifications framework. The selection is [danse](https://www.drupal.org/project/danse) with [push_framework](https://www.drupal.org/project/push_framework).

| Module                                             | Notes                                                                                                                                                                                                                                                                       | Flexibilty on Triggering Events                        | Channels configurable | Templates                                                                                                                                                                     | User level configuration | Flexible API |
|----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|--------------|
| https://www.drupal.org/project/courier             | Courier is an API allowing modules to send messages to people via a channel of their preference. There is not a built in event or trigger.                                                                                                                                  | No event triggers, only sending messages               | Y                    | Has a template API but currently only user level emails are setup.                                                                                                            | Y                        | Y            |
| https://www.drupal.org/project/govuk_notify        | Provides an Drupal API to interact with Notify API.  This can be used as a basis for a channel to VA Notify                                                                                                                                                               |                                                        |                      |                                                                                                                                                                               | N                        | N            |
| https://www.drupal.org/project/push_framework      | This is a framework which pushes notificaitons somewhere.  It requires plugins to be written                                                                                                                                                                               | No event Triggers, only sending messages               |                      | global template but uses display modes on entities to render content.  There are also templates for different Recipent plugins. There is a robust API which could be leveraged | Y                        | Y            |
| https://www.drupal.org/project/danse               | Event/audit framework.  This isn't specifically for notifications but a more general subscription framework with a few existing plugins.  We would use this as a base and build our own plugins or use existing plugins.  This includes interaction with sending notifications | Includes extensive triggers along with API to add more |                      | NA, this module is for events only, and not sending notifications                                                                                                             | Y                        | Y            |
| https://www.drupal.org/project/notification_system | This module combines some of the event handling and some of the notifications.  The code is clean but there isn't any auditability.  This is similar to DANSE but with less features.                                                                                      | Includes some triggers                                 |                      | Global                                                                                                                                                                        | Y                        | Y            |


## **Solution**

While evaluating the modules I came across https://www.lakedrops.com/en/blog/post/ultimate-subscription-and-notification-solution-drupal which aligns with our requirements. The rest of this document will contain details about how we implement this solution for the VA.


### **Events and Subscriptions**

Within Drupal, events are triggered from a variety of sources. The sources can include content updates, workflow changes or user changes. The DANSE (Drupal - Audit - Notification - Subscription - Event) module provides a plugin called `danse_content`, which will listen for any entity change, but there are a few downsides to the plugins. 



1. The content hooks into the entity forms instead of entity update hooks or events. https://www.drupal.org/project/danse/issues/3169702
2. No integration with `content_moderation`.

Custom plugins will need to be created to fulfill the MVP. Types of events/subscriptions needed for MVP. These plugins will be made in a way to be highly configurable and reusable.



*   Broken link integration. User will be subscribed to events, if allowed by their role, if content they author/update has broken links.
*   Content Update Subscriptions: User will be subscribed to events from content they create or edit if allowed by their role.
*   Manual Subscription: A User will be subscribed to events from content they manually subscribe to.
*   Subscribe to content/workflow events from a certain content type. 
*   Subscribe to content/workflow events from a certain content type based upon Office Taxonomy.
* UI for users to see their current subscriptions. DANSE provides a basic UI for users to turn on/off subscriptions based upon the plugins.  This will need to be evaluated to make sure it’s sufficient for MVP.  Future interactions would include ability to select delivery channel per subscription.

### **Notifications**

The [push_framework](https://www.drupal.org/project/push_framework) provides a robust API for multiple delivery channels and user level control over the channels. Notifications to be sent are pulled via plugins. The pulled notifications are then sent to the channels specified by configuration (or other plugins) and queues are used to send and ensure delivery.

Plugins to be created:

*   Integration with VANotify API. This includes a new VANotify module which can either patch or fork https://www.drupal.org/project/govuk_notify.
*   A plugin to pull notifications from custom DANSE plugins mentioned above.
*   Currently templates are created either on a global or display mode for an entity.  This needs to be updated to allow notification types with different templates.

Notifications are sent out using the Advanced Queue module.  The AdvancedQueue module provides delivery ensure and retry logic.  By default, the queue runs on cron but has integrations into near realtime queueing systems.
