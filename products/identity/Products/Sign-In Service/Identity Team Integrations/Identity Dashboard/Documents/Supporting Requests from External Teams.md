# Supporting requests from external teams

This document describes the internal processes the OCTO-Identity team will follow when fulfilling support requests from external teams for managing teams, users, and client configurations.

## Table of contents

- [Teams](#teams)
  - [Adding a team](#adding-a-team)
  - [Updating a team](#updating-a-team)
  - [Removing a team](#removing-a-team)
- [Team users](#team-users)
  - [Adding users to a team](#adding-users-to-a-team)
  - [Updating a team user](#updating-a-team-user)
  - [Removing a team user](#removing-a-team-user)
- [Client configurations](#client-configurations)
  - [Adding a new client configuration](#adding-a-new-client-configuration)
  - [Updating an existing client configuration](#updating-an-existing-client-configuration)
  - [Removing a client configuration](#removing-a-client-configuration)
- [Service account configurations](#service-account-configurations)
 
## Teams

Teams are the organization units responsible for managing client application integrations with Sign-in Service (SiS). Each team has users who belong to it and 
configurations for client applications integrated with SiS.

### Adding a team

Follow these steps to create a team:

* Review request to ensure all required information has been provided.
  * The request should contain the following information:
    * The environment to load the users in (staging or production.)
    * `name`: the human-readable name for the team.
    * `description`: a brief description of the team, including the systems, processes, or verticals the team supports.
    * Admin details, including:
      * `logingov_uuid`: The UUID associated with the admin's Login.gov account.
      * `email`: The email address associated with the admin's Login.gov account.
      * `first_name`: The first name for the admin.
      * `last_name`: The last name for the admin.
  * If the request is missing any information, reach back out to the requestor to request corrections.
* Navigate to the Identity Dashboard URL corresponding to the environment for the request.
  * *TODO: Add actual URL's once Identity Dashboard environments are live.*
* Navigate to the `/admin/teams` page.
* Click the "New" button.
* Fill out the form using details provided.
  * Use your own email address for the admin email field.
* Submit the form.
* Verify the team was created by confirming the success message is displayed.
* Navigate to the User Management interface for the team.
* Add each backend developer of the OCTO-Identity team to the newly created team.
  * Each backend developer should have the admin role for both the Admin Portal and Client Config dashboard apps.
* Create a new team user using the admin email provided in the request.
  * If the admin email does not correspond to a user loaded in Identity Dashboard, you will need to create one via Rails console.
  * ```ruby
    User.create!(
      email: "<email address from the request>",
      logingov_uuid: "<logingov_uuid from the request>",
      first_name: "<first_name from the request>",
      last_name: "<last_name from the request>"
    )
    ```
* Inform the requestor the support request has been completed through a threaded Slack response to the original support request.

### Updating a team

**Please note that any request to update a team must be sent from a user who is an admin for that team.**

Follow these steps to update a team:

* Verify the requestor is an admin for the specified team. Requests from non-admins will be denied.
* Review request to ensure all required information has been provided.
  * The request should contain the following information:
    * The environment of the team.
    * The `name` of the team.
    * Any details that need to be updated for the team, which may include:
      * `name`: the human-readable name for the team.
      * `description`: a brief description of the team, including the systems, processes, or verticals the team supports.
      * Admin details, including:
        * `logingov_uuid`: The UUID associated with the admin's Login.gov account.
        * `email`: The email address associated with the admin's Login.gov account.
        * `first_name`: The first name for the admin.
        * `last_name`: The last name for the admin.
* Navigate to the Identity Dashboard URL corresponding to the environment for the request.
  * *TODO: Add actual URL's once Identity Dashboard environments are live.*
* Navigate to the `/admin/teams` page.
* Click the "Modify" button for the team specified in the request.
* Fill out the form using details provided.
* Verify the team was updated by confirming the success message is displayed.
* Inform the requestor the support request has been completed through a threaded Slack response to the original support request.

### Removing a team

**Please note that any request to remove a team must be sent from a user who is an admin for that team.**

**Removing a team is a dangerous operation as it will result in the deletion of any client configurations associated with that team.**

Follow these steps to remove a team:

* Verify the requestor is an admin for the specified team. Requests from non-admins will be denied.
* Review request to ensure all required information has been provided.
  * The request should contain the following information:
    * The environment of the team.
    * The `name` of the team.
* Before you process the request, inform the requestor of any client configurations that will be impacted by the removal of the team.
* Navigate to the Identity Dashboard URL corresponding to the environment for the request.
  * *TODO: Add actual URL's once Identity Dashboard environments are live.*
* Navigate to the `/admin/teams` page.
* Click the "Delete" button for the team specified in the request.
* Confirm the action at the dialogue.
* Verify the team was successfully deleted by confirming the success message is displayed.
* Inform the requestor the support request has been completed through a threaded Slack response to the original support request.

## Team users

Teams contain users who have roles for managing teams and client application configurations. These roles provide granular access control for team members depending on their role.

For instance, team leads will likely need the ability to administer their teams (updating team information, adding new team users, etc.), but may not require full access to update the 
client application configurations for which their teams are responsible. Conversely, engineers will almost certainly need access to administer client application configurations, but are unlikely to require permissions for administering teams.

### Adding users to a team

**Please note that any request to add users to a team must be sent from a user who is an admin for that team.**

Follow these steps to add users to a team:

* Verify the requestor is an admin for the specified team. Requests from non-admins will be denied.
* Review request to ensure all required information has been provided.
  * The request should contain the following information:
    * The team the user(s) should be added to.
    * The environment of the team and team user.
    * A list of users with the following information:
      * `logingov_uuid`: The UUID associated with the user's Login.gov account.
      * `email`: The email address associated with the user's Login.gov account.
      * `first_name`: The first name for the user.
      * `last_name`: The last name for the user.
      * Should the user be able to make requests to update the team or team roster? (yes or no)
      * Should the user be able to make requests to administer client application configurations? (yes or no)
* Check each user to ensure that they already have a user record created.
  * If a user record has not yet been created, create one by inserting a new record via Rails console:
  * ```ruby
    User.create!(
      email: "<email address from the request>",
      logingov_uuid: "<logingov_uuid from the request>",
      first_name: "<first_name from the request>",
      last_name: "<last_name from the request>"
    )
    ```
* Navigate to the Identity Dashboard URL corresponding to the environment for the request.
  * *TODO: Add actual URL's once Identity Dashboard environments are live.*
* Navigate to the `/admin/teams` page.
* Click the "View" button for the team specified in the request.
* Navigate to the User Management interface for the team.
* Enter the user's email address into the "Email" field.
* Select the user's roles for the Admin Portal and Client Config dashboard apps.
* Click "Add".
* Verify the user was successfully added to the team by confirming they have been added to the team roster with the appropriate roles.
* Inform the requestor the support request has been completed through a threaded Slack response to the original support request.

### Updating a team user

**Please note that any request to update a team user must be sent from a user who is an admin for that team.**

Follow these steps to update a team user:

* Verify the requestor is an admin for the specified team. Requests from non-admins will be denied.
* Review request to ensure all required information has been provided.
  * The request should contain the following information:
    * The environment of the team and team user.
    * The `name` of the team the user belongs to.
    * The `email` corresponding to the team user.
    * Any details that need to be updated for the user, which may include:
      * `logingov_uuid`: The UUID associated with the user's Login.gov account.
      * `email`: The email address associated with the user's Login.gov account.
      * `first_name`: The first name for the user.
      * `last_name`: The last name for the user.
      * Should the user be able to make requests to update the team or team roster? (yes or no)
      * Should the user be able to make requests to administer client application configurations? (yes or no)
* Navigate to the Identity Dashboard URL corresponding to the environment for the request.
  * *TODO: Add actual URL's once Identity Dashboard environments are live.*
* Navigate to the `/admin/teams` page.
* Click the "View" button for the team specified in the request.
* Navigate to the User Management interface for the team.
* Remove the user from the team by clicking the "Remove" action.
* Enter the user's email address into the "Email" field.
* Select the user's roles for the Admin Portal and Client Config dashboard apps.
* Click "Add".
* Verify the user was successfully added to the team by confirming they have been added to the team roster with the appropriate roles.
* If necessary, update the user's other details via Rails console.
  * ```ruby
    user = User.find_by(email: "<email address from the request>")
    user.update(
      email: "<email address from the request>",
      logingov_uuid: "<logingov_uuid from the request>",
      first_name: "<first_name from the request>",
      last_name: "<last_name from the request>"
    )
    ```
* Inform the requestor the support request has been completed through a threaded Slack response to the original support request.

### Removing a team user

**Please note that any request to remove a team user must be sent from a user who is an admin for that team.**

Follow these steps to remove a team user:

* Verify the requestor is an admin for the specified team. Requests from non-admins will be denied.
* Review request to ensure all required information has been provided.
  * The request should contain the following information:
    * The environment of the team and user.
    * The `email` corresponding to the team user.
    * The `name` for each team to remove the user from.
* Navigate to the Identity Dashboard URL corresponding to the environment for the request.
  * *TODO: Add actual URL's once Identity Dashboard environments are live.*
* Navigate to the `/admin/teams` page.
* Click the "View" button for the team specified in the request.
* Navigate to the User Management interface for the team.
* Click "Remove" to remove the user from the team.
* Confirm the action at the dialogue.
* Verify the user was successfully removed from the team by confirming the user is no longer displayed in the team roster.
* Inform the requestor the support request has been completed through a threaded Slack response to the original support request.

## Client configurations

Client configurations are used to integrate a client application with SiS. This section describes how to manage client configurations through Identity Dashboard.

For manually creating client configurations via Rails console directly in SiS, refer to the documentation [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/configuration/client_config.md#creating-a-new-client-config).

### Adding a new client configuration

**Please note that any request to add a new client configuration must be sent from a user who is an admin for that team.**

Follow these steps to add a client configuration:

* Verify the requestor is an admin for the specified team. Requests from non-admins will be denied.
* Review request to ensure all required information has been provided.
  * Refer to the in-depth [client config guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/configuration/client_config.md#client-config-attributes) for details about each field.
* Navigate to the Identity Dashboard URL corresponding to the environment for the request.
  * *TODO: Add actual URL's once Identity Dashboard environments are live.*
* Navigate to the `/admin/client_configs` page.
* Click the "New" button.
* Fill out the form using the information provided in the request.
* Click "Create" to create the client configuration.
* Verify the client configuration was successfully created by confirming the success message is displayed.
* Verify the client configuration was successfully synced to SiS by using the Rails console to check that a new record has been added to the SiS database.
* Inform the requestor the support request has been completed through a threaded Slack response to the original support request.

### Updating an existing client configuration

**Please note that any request to update an existing client configuration must be sent from a user who is an admin for that team.**

Follow these steps to update an existing client configuration:

* Verify the requestor is an admin for the specified team. Requests from non-admins will be denied.
* Review request to ensure all required information has been provided.
  * Refer to the in-depth [client config guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/configuration/client_config.md#client-config-attributes) for details about each field.
* Navigate to the Identity Dashboard URL corresponding to the environment for the request.
  * *TODO: Add actual URL's once Identity Dashboard environments are live.*
* Navigate to the `/admin/client_configs` page.
* Click the "Modify" button corresponding to the client config from the request.
* Fill out the form using the information provided in the request.
* Click "Save" to update the client configuration.
* Verify the client configuration was successfully saved by confirming the success message is displayed.
* Verify the client configuration was successfully synced to SiS by using the Rails console to check that the record has been updated in the SiS database.
* Inform the requestor the support request has been completed through a threaded Slack response to the original support request.

### Removing a client configuration

**Please note that any request to remove a client configuration must be sent from a user who is an admin for that team.**

Follow these steps to remove a client configuration:

* Verify the requestor is an admin for the specified team. Requests from non-admins will be denied.
* Review request to ensure all required information has been provided.
  * Refer to the in-depth [client config guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/configuration/client_config.md#client-config-attributes) for details about each field.
* Navigate to the Identity Dashboard URL corresponding to the environment for the request.
  * *TODO: Add actual URL's once Identity Dashboard environments are live.*
* Navigate to the `/admin/client_configs` page.
* Click the name of the client configuration corresponding to the client config from the request.
* Click "Delete" to remove the client configuration.
* Verify the client configuration was successfully removed by confirming the success message is displayed.
* Verify the client configuration was successfully removed from SiS by using the Rails console to check that the record has been removed from the SiS database.
* Inform the requestor the support request has been completed through a threaded Slack response to the original support request.

## Service account configurations

Service Account configurations are used to integrate a service account application with SiS. Service accounts are not managed through Identity Dashboard yet.

For manually managing service account configurations via Rails console directly in SiS, refer to the documentation [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/configuration/service_account.md).
