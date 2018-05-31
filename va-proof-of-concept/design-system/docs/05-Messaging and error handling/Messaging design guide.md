**General guidelines**
- [Use cases](#use-cases)
- [States](#states)
- [Actions](#actions)

**Components**
- [Alerts](#alerts)
- [Modals](#modals)
- [Plain text](#plain-text)
- [Inline validation](#inline-validation)

## General guidelines

### Use cases

Messaging will generally follow these UI patterns based on the intent of the message:

|            | Alert | Modal | Plain text | Inline |
| ---------- | ----- | ----- | ---------- | ------ |
| System     | x     | x     | x          |        |
| Engagement | x     | x     |            |        |
| Access     | x     | x     | x          |        |
| Feedback   | x     | x     |            | x      |

**System messaging:** Alerts the user of important system-related issues or status. It’s initiated by the system and it’s not a result of the user’s actions.

**Engagement messaging:** Nudges the user to enter or update data in the system. It can be initiated by either the system or another user.

**Access messaging:** Appears when the user tries to access an item that’s not available to them. It may be because the record has been deleted, the user doesn’t have access, etc. etc.

**Feedback messaging:** The application’s response when the user is interacting with it. The majority of create, read, update, delete (CRUD) actions will result in feedback messaging.

See the [Messaging dictionary](/docs/messaging-and-error-handling/messaging-dictionary) for specific examples of each type of messaging.

### States

For **alerts**, **modals**, and **inline validation**, the visual state should match the message's intent or level of severity:

#### Informational

<img src="{{ assetPath }}img/docs/state-info.png" width="208">

##### When to use

- To surface system-related feedback not initiated by the user (e.g. status updates).
- Providing information that helps set the user's expectations for their experience (e.g. SiP available).

##### When to consider something else

- If indicating the successful or unsuccessful outcome of an action, use a success, warning, or error alert.
- If indicating the user will be unable or limited in their ability to proceed, use an error or warning alert, respectively.

#### Success

<img src="{{ assetPath }}img/docs/state-success.png" width="208">

##### When to use

- As a confirmation that a user-initiated action was completed successfully.

#### Warning

<img src="{{ assetPath }}img/docs/state-warning.png" width="208">

##### When to use

- An action was unsuccessful, but the user can still proceed.
- Some parts of the user’s experience may be limited that normally wouldn’t be (e.g. system is down and records are accessible but outdated).

#### Error

<img src="{{ assetPath }}img/docs/state-error.png" width="208">

##### When to use

- A user action was not completed and must be resolved to proceed.

### Actions

Actions dictate if and what a user needs to do in response to a message.

#### Dismissible (alerts and modals)

<img src="{{ assetPath }}img/docs/alert-action-dismissible.png" width="480">

##### When to use

- The messaging doesn't require an explicit action from the user.
- Indicating the outcome of a user-initiated action, typically CRUD tasks (create/read/update/delete).

#### Single button

<img src="{{ assetPath }}img/docs/alert-action-single.png" width="480">

##### When to use

- The user must take an action to proceed with the task indicated by the message.

#### Binary button

<img src="{{ assetPath }}img/docs/modal-warning.png" width="816">

##### When to use

- The user must choose between two actions to proceed with a task, or to confirm an important action.

#### Accordion (alerts only)

<img src="{{ assetPath }}img/docs/alert-action-accordion.png" width="480">


##### When to use

- Providing information of an opt-in nature that isn't critical to perform the task at hand. The title should serve as a call to action for a user to expand the alert.

## Components

### Alerts

Alerts keep users informed of important and sometimes time-sensitive changes.

<img src="{{ assetPath }}img/docs/alert-info.png" width="480">

<img src="{{ assetPath }}img/docs/alert-success.png" width="480">

<img src="{{ assetPath }}img/docs/alert-warning.png" width="480">

<img src="{{ assetPath }}img/docs/alert-error.png" width="480">

#### When to use

- As a notification that keeps people informed of the status of the system and which may or may not require the user to respond. This includes errors, warnings, and general updates.
- As a validation message that alerts someone that they just did something that needs to be corrected or as confirmation that a task was completed successfully.

#### When to consider something else

- If an issue not caused by the user's actions prevents them from proceeding with a task, use plain text (e.g. application unavailable or no data found).
- On forms, always use in-line validation in addition to any error messages that appear at the top of the form.
- If an action will result in destroying a user’s work (for example, deleting an application) use a more intrusive pattern, such as a confirmation modal dialogue, to allow the user to confirm that this is what they want.

#### Locations

##### Above page title

<img src="{{ assetPath }}img/docs/alert-location-above-title.png" width="1152">

Indicates the outcome of a user-initiated action, typically CRUD tasks (create/read/update/delete).

##### Below page title

<img src="{{ assetPath }}img/docs/alert-location-below-title.png" width="1152">

Conveys important status information or calls to action related to the page or application as a whole.

##### Above component

<img src="{{ assetPath }}img/docs/alert-location-above-component.png" width="1152">

Conveys important status information or calls to action related to a specific component.

##### Below component

<img src="{{ assetPath }}img/docs/alert-location-below-component.png" width="1152">

Conveys lower importance status information related to a specific component.

##### Replaces component

<img src="{{ assetPath }}img/docs/alert-location-replace-component.png" width="1152">

- Indicates the system's inability to display the affected component due to transient access issues such as downtime or connection loss, **or**
- Replaces the component due to a change in its status, e.g. saved application

##### Banner

<img src="{{ assetPath }}img/docs/alert-location-banner.png" width="1152">

Communicates important system- or business-related information to users, such as emergency alerts

### Modals

Modals perform a similar function to alerts, but should be used when it is particularly critical for a user to actively engage with a message.

#### When to use

- If an action will result in destroying a user’s work (for example, deleting an application) to allow the user to confirm that this is what they want.
- Alerting users to important system-related issues and updates that affect their access to a service or ability to complete a task.
- Providing supplemental information related to a task (for example, a glossary definition)

<img src="{{ assetPath }}img/docs/modal-plain.png" width="816">

<img src="{{ assetPath }}img/docs/modal-info.png" width="816">

<img src="{{ assetPath }}img/docs/modal-success.png" width="816">

<img src="{{ assetPath }}img/docs/modal-warning.png" width="816">

<img src="{{ assetPath }}img/docs/modal-error.png" width="816">

### Plain text

Plain text messaging is used primarily to communicate system status in access scenarios.

#### When to use

- Providing status for widespread access issues (for example, system downtime)
- Providing explanation for unexpected but not technically wrong outcomes, such as lack of data

#### Locations

##### Replace page content

<img src="{{ assetPath }}img/docs/plain-text-replace-page.png" width="1152">

Shown when an entire application or page is unavailable

##### Replace component

<img src="{{ assetPath }}img/docs/plain-text-replace-component.png" width="1152">

Shown when a component is unavailable due to access issues or lack of data

### Inline validation

Inline validation provides feedback to user input within a form component

#### When to use

- Indicating inadequate or incorrect input in a field

<img src="{{ assetPath }}img/docs/inline-error.png" width="368">
