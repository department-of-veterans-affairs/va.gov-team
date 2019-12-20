# Reproducing the Current Secure Messaging Experience With the API
This document analyzes the ability of the MHV API to reproduce a veteran's current secure messaging experience. Based on the particular use case, the API both facilitates and enables the current experience, while in others it merely enables the experience or fails to support the experience at all.

## Introduction
Currently, the veteran is required to (1) be enrolled at a VA healthcare facility, and (2) be registered in MyHealtheVet with a Premium Account. This will provide the veteran with a correlation id that enables the use of secure messaging. The correlation id will presumably be accessible following authentication.

Once authenticated, the correlation id is used to establish a session that assigns a session token that is required as a parameter for all API calls. If the session token expires, a new session must be established. However, session requests will fail unless the user has accepted the "terms and conditions" prior to the session request. This is not within the scope of the MHV API.

## Overview of API Support of Current Experience
The secure messaging API directly supports much of the **current experience**, however, it does not directly support:
- Setting email alerts.
- Opting in/out of secure messaging.
- Electronic signatures.
- Sorting and filtering of messages.
- Pagination metainformation such as total messages in folder.
- Searching of messages by any field (from, subject, date, ...)
- Renaming of folders.
- "Next Message" functionality.
- Contacting technical support.

Bear in mind that several of these deficiencies can be handled within the gem/front end.

## Reproducing the Inbox
### Preferences
The **current experience** allows vets to set up alerts when new email arrives, to opt out of secure messaging, and to provide an electronic signature. None of these abilities are supported by the current API.

### Messages
#### Sorting and Pagination
The current inbox displays a folder's messages in a table with the following sortable information:

- From
- Subject
- Date

The API (via the *folders* resource) as currently designed does provide this information, but cannot reproduce sorting. Messages are retrieved by the API on a page by page basis. Additionaly, the API does not inherently provide support for back end sorting, and therefore, only subset of messages may be sorted at a time. Moreover, metainformation regarding the total number of messages is not supplied - so providing visual page 1 of n type pagination is difficult.

Given the current design, the unpleasant reality is that all pages of a folder's messages must be requested to sort all messages. This would also alleviate the issue of proper pagination, filtering, and searching (see below).

##### Creating
The **current experience** allows vets to create a message and provide attachments to a message. This functionality is supported by the API's *message* and *triage team* resources. The *message* resource supports attachments and drafts, while the *triage team* resource provides a list of recipient names and ids.

##### Drafts
The API's *message* resource provides direct support for the creation and editing of a draft. However, the **current experience** documentation illustrates support for filtering drafts based on read/unread attributes. This does not seem to make sense - an draft cannot be read because has not yet been sent.

Deleting a draft as provided by the **current experience** is directly supported by the API using the *message* resource.

##### Filtering
The **current experience** supports filtering by read/unread attributes. The neccessary information is provided by the API when a message is retrieved by both the *folders* resource and the *messages* resource. However, as with sorting and pagination, all messages must be retrieved in order to present consistently sized filtered message sets.

##### Deleting
The **current experience** supports message deletion. Message deletion is supported by the API via the *messages* resource on a message-by-message basis (i.e., bulk message deletion is not supported).

##### Searching
The API provides the necessary information to support searching, as provided by the **current experience**. However, since the *folder* resource provides only paginated access to a folder's messages, we can only search through the messages we have retrieved. Therefore, to provide a consistently sized and paginated search results set, we would have to retrieve all a folder's messages.

##### Reading and Message History
The API supports reading a message's contents on a message-by-message basis via the *message* resource. 

This same resource can retrieve a list of messages that belong to the same history (thread) as does the message being read (by message id). Naturally, duplicating the **current experience** of moving to the next message in the thread, would be accomplished within the gem or front end. The API does not provide "next message" functionality within a thread.

##### Moving
The **current experience** allows messages to be moved from one folder to another. The API facilitates the moving of messages from one folder to the other via the *message* resource. However, messages are moved on a message-by-message basis (i.e., bulk message moving is not supported).

### Folders
The current inbox provides panels for system folders (Drafts, Sent, Deleted) as well as personal folders. Both system folders and personal folders are obtained via the *folders* resource.

#### Editing
According to the **current experience** document, the current experience allows a vet to "edit" his personal folders.

##### Renaming
Currently, the API does not facilitate the renaming of a folder. To accomplish this, we would need to

1. Create a new personal folder with a new name (*folders resource*).
2. Move messages from the old folder to the new folder (*messages resource*).
3. Delete the older folder (*folders resource*).

##### Adding
Both the **current experience** and the API allow creating a personal folder. Personal folders are created via the *folders* resource.

##### Deleting
Both the **current experience** and the API allow veterans to delete a personal folders. However, what becomes of the messages attached to the deleted folder is less clear. No mention of the fate of a folder's messages is made either in the **current experience** document or the secure messaging API. 

*NOTE: We cannot move messages do to issues with the gem and API, therefore at the current time we cannot experiment to see what happens to a message when its folder is deleted.

## Session Expiration
The **current experience** requires the vet to log back in when his session expires. However, the secure messaging gem obtains a new session token whenever a request is made if the current session has expired.

## Technical Support
The secure messaging API does not have provisions for contacting technical support.
