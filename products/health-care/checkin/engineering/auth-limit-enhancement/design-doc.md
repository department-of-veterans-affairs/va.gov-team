<!-- markdownlint-disable no-duplicate-heading -->

# Authentication Limit Enhancement

# 1. Overview

As part of improving security for data cached in LoROTA, one of the requirements is to delete LoROTA data when the authentication attempt exceeds configured maximum retries. Also, currently maximum retries and retry attempt count are maintained in vets-website and users can easily reset the retry attempt count by closing & reopening the browser. 

This document consolidates the list of requirements around deleting LoROTA entry, incorporating strict restrictions on retry attempts with configurable maximum retries, and outlines the design.

# 2. Requirements

1. User data stored in LoROTA should be deleted if retry attempts exceed the maximum retry.
2. Users shouldn’t be able to retry (with the same UUID) when they have exceeded maximum allowed retry attempts. For Check In scenario, they will need to send the ‘check in’ text again to restart the process. For Pre Check In scenario, they will need to wait for the reminder text to be resent to them.
3. The maximum authentication retry limit should be configurable to avoid code deployment in case the limit needs to be changed.
4. Deleting user data based on retry attempts must be released as part of LoROTA Security Updates

# 3. Design

## 3.1. Lorota Entry Deletion

Currently, for both pre-checkin and day-of checkin, CHIP service creates an entry in LoROTA, and vets-api accesses the entry with `read.full` scope when the user authenticates on the login page. In current implementation, CHIP is configured with `delete.full` scope which allows it to delete the entries in LoROTA, and vets-api is not. Based on this and to avoid granting `delete.full` scope to vets-api, we decided to add an endpoint in CHIP to delete the entries.

As vets-api maintains the user session, the authentication retry limit will be configured in vets-api. If the Veteran exceeds the authentication retry limit, vets-api will make a call to the CHIP Delete endpoint and return an appropriate error to the website.

## 3.2. Retry Attempt Count

Retry attempt count is a counter for keeping track of the number of failed authentication attempts on the login page. The counter will be stored in Redis within vets-api as an enhancement to prevent user from resetting retry attempt count by restarting the browser. 

> We’ll use check-in namespace in Redis for caching data around retry counts with the expiry of 7 days (as pre-checkin reminder is sent on 7-day interval). Retry attempts will be stored under the key ‘authentication-retry-limit-<uuid>’.
> 

## 3.3. vets-api/vets-website SLA for deleted entry

As of now, vets-api returns HTTP status code 401 for sending an authentication error to vets-website. Vets-website verifies the retry attempt count against the maximum retry limit and throws an error message to ask a staff member for help. 

When retry attempts functionality gets moved to vets-api, vets-api will continue to return HTTP status code 401 until the retry attempt exceeds the maximum auth limit and HTTP 403 will be sent to notify the delete event.

## 3.4. Max Authentication Retry Limit

We will store the max authentication retry limit in AWS Parameter Store to avoid code deployment in case this property needs to be modified.

# 4. **Assumptions**

1. We will store the retry attempt count in Redis for 7 days as the pre check-in reminders are sent 7 days in advance. Retaining it for 7 days prevents users from going over the max allowed attempts.
2. Users can still retry by sending check-in text for day-of check in or waiting for the next pre-checkin reminder message. In these cases, a new entry in LoROTA is created.

# 5. Overall Design

![EnhanceAuthLimit.png](Authentication%20Limit%20Enhancement%20733885cad2f7400996d94137a68f9719/EnhanceAuthLimit.png)

# 6. Release Process

As the data deletion with retry attempt is a major feature, changes can be introduced behind the new feature flag check_in_experience_lorota_delete_entry under check_in_experience_lorota_security_updates_enabled feature flag. This avoids bulk release while flipping check_in_experience_lorota_security_updates_enabled feature flag and also makes LoROTA security update release incremental.

The overall release process for the feature will be,

- Turning on check_in_experience_lorota_security_updates_enabled to release authentication using DOB instead of SSN4
- Turning on check_in_experience_lorota_delete_entry to release data delete if retry attempt exceeds configured limit

# 7. Tasks

1. Paramstore configuration for Maximum Auth Limit - 2 Points
2. Retry limit implementation with caching in Redis - 5 Points
3. Delete implementation - 5 Points
