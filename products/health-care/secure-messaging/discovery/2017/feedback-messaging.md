# Secure messaging feedback messaging

_**Note:** See [sitewide messaging guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/design/design-system/guidelines/error-handling) for content and UX guidance and standard messaging scenarios/content._

## System messaging

_Add scenarios here_

## Engagement messaging

_Add scenarios here_

## Access messaging

### Non-VA patient with MHV account tries to access secure messaging after June 2017

(After June 2017 only VA patients, defined as a patient who has been treated at a VA facility at least once, can access health tools)

> Vets.gov health tools are only available for patients who’ve received care at a VA facility. If you think you should be able to access these health tools, please call the Vets.gov Help Desk at 855-574-7286 (TTY: 800-829-4833). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. (ET).

| Actions | Component | State | Location | MHV error code | Vets error code |
| ------- | --------- | ----- | -------- | -------------- | --------------- |
|         |           |       |          |                |                 |

### User is not found, blocked, or not valid

> **[Message title]**
>
> [Message description]

| Actions | Component | State | Location | MHV error code | Vets error code |
| ------- | --------- | ----- | -------- | -------------- | --------------- |
|         |           |       |          | SM151          |                 |

### MHV user is not a Premium MHV user

Invalid user permissions (invalid user type for resource requested)

> **[Message title]**
>
> [Message description]

| Actions | Component | State | Location | MHV error code | Vets error code |
| ------- | --------- | ----- | -------- | -------------- | --------------- |
|         |           |       |          | 111            |                 |

### General error

> **Something went wrong on our end**
>
> Please refresh this page or try again later. You can also call the Vets.gov Help Desk at 1-855-574-7286, Monday - Friday, 8:00 a.m. - 8:00 p.m. (ET).

| Actions | Component | State | Location | MHV error code                           | Vets error code |
| ------- | --------- | ----- | -------- | ---------------------------------------- | --------------- |
|         |           |       |          | "900 - Mailbox Service Error", "117 - A data integrity issue was encountered" |                 |

### Message not found or expired

> **Message or folder not found**
>
> If you think this is an error, please call the Vets.gov Help Desk at 1-855-574-7286, Monday - Friday, 8:00 a.m. - 8:00 p.m. (ET).

| Actions | Component | State | Location | MHV error code                           | Vets error code |
| ------- | --------- | ----- | -------- | ---------------------------------------- | --------------- |
|         |           |       |          | "115 - Entity not found", "SM130 - Unable to reply because the source message is expired" |                 |

### Invalid parameters

- 120 - The Page Number must be greater than zero
- 121 - The Page Size must be greater than zero
- 133 - PageSize exceeds the maximum allowed limit
- 125
  - To create a folder the name is required
  - The folder already exists with the requested name
  - The folder name should only contain letters, numbers, and spaces
- 124 - The attachment file size exceeds the supported size limits
- 100 - The message body cannot be blank
- 116 - The Folder must be empty before delete
- API response from our API: These should be caught by mostly with client side validations, so likely this is already taken care of, but wanted to leave here just in case there are specific error messages we want to show.

> **[Message title]**
>
> [Message description]

| Actions | Component | State | Location | MHV error code                    | Vets error code |
| ------- | --------- | ----- | -------- | --------------------------------- | --------------- |
|         |           |       |          | 100, 116, 120, 121, 124, 125, 133 |                 |

### User isn't assigned to this health care team anymore (triage error) or team does not exist anymore

- Notes from Kam: This would happen if a veteran is on a triage team, but has messages in his or her inbox from the past, when they were on a different triage team.These messages can be viewed, but they can no longer be replied to. Use this error text for case where triage team doesn't exist anymore too.
- API response from MHV:
  - 129 - Unable to reply because you are no longer associated with this Triage Team
  - code: 'SM119', detail: 'Triage team does not exist', status: <http status code you want rendered (400 or 422)>

> **No longer assigned to this health care team**
>
> You can't reply to this message because you're not assigned to this health care team anymore. If you think this is an error, please call the Vets.gov Help Desk at 1-855-574-7286, Monday - Friday, 8:00 a.m. - 8:00 p.m. (ET).

| Actions | Component | State | Location | MHV error code | Vets error code |
| ------- | --------- | ----- | -------- | -------------- | --------------- |
|         |           |       |          | 129, SM119     |                 |

### User isn't assigned to any health care team (triage error)

> **Currently not assigned to a health care team**
>
> We're sorry, it looks like you don't hav ea VA health care team linked to your account in our system. To begin sending secure messages, please contact your health care team, and ask them to add you into the system. If you need more help, please call the Vets.gov Help Desk at 1-855-574-7286, TTY: 1-800-877-8339, Monday - Friday, 8:00 a.m. - 8:00 p.m. (ET).

| Actions | Component | State | Location | MHV error code | Vets error code |
| ------- | --------- | ----- | -------- | -------------- | --------------- |
|         |           |       |          | 129, SM119     |                 |

## Feedback messaging

### Unable to move message

> **Couldn't move this message**
>
> Please try again.

| Actions | Component | State | Location | MHV error code | Vets error code |
| ------- | --------- | ----- | -------- | -------------- | --------------- |
|         |           |       |          | 114            |                 |

### Message service errors

> **Couldn't send this message**
>
> Please try again.

| Actions | Component | State | Location | MHV error code                           | Vets error code |
| ------- | --------- | ----- | -------- | ---------------------------------------- | --------------- |
|         |           |       |          | 903 - Send Message Service Error, 904 - Message Service Error |                 |
