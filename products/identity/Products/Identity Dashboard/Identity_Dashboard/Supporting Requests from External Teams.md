# Supporting Requests from External Teams

This document describes the internal processes the OCTO-Identity team will follow when fulfilling support requests from external teams for managing teams, users, and client configurations.

## Table of Contents

- [Teams](#teams)
  - [Adding a Team](#adding-a-team)
  - [Updating a Team](#updating-a-team)
  - [Removing a Team](#removing-a-team)
- [Team Users](#team-users)
  - [Adding Users to a Team](#adding-users-to-a-team)
  - [Updating a Team User](#updating-a-team-user)
  - [Removing a Team User](#removing-a-team-user)
- [Client Configurations](#client-configurations)
  - [Adding a New Client Configuration](#adding-a-new-client-configuration)
  - [Updating an Existing Client Configuration](#updating-an-existing-client-configuration)
  - [Removing a Client Configuration](#removing-a-client-configuration)
 
## Teams

Teams are the organization units responsible for managing client application integrations with Sign-in Service (SiS). Each team has users who belong to it and 
configurations for client applications integrated with SiS.

### Adding a Team

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
* Navigate to the `/admin/teams` page.
* Click the "New" button.
* Fill out the form using details provided.
  * Use your own email address for the admin email field.
* Submit the form.
* Verify the team was created.
* Navigate to the User Management interface for the team.
* Add each backend developer of the OCTO-Identity team to the newly created team.
  * Each backend developer should have the admin role for both the Admin Portal and Client Config dashboard apps.
* Create a new team user using the admin email provided in the request.
  * If the admin email does not correspond to a user loaded in Identity Dashboard, you will need to create one via Rails console.
* Inform the requestor the support request has been completed.

### Updating a Team

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
* Navigate to the `/admin/teams` page.
* Click the "Modify" button for the team specified in the request.
* Fill out the form using details provided.
* Verify the team was updated.
* Inform the requestor the support request has been completed.

### Removing a Team

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
* Navigate to the `/admin/teams` page.
* Click the "Delete" button for the team specified in the request.
* Confirm the action at the dialogue.
* Verify the team was successfully deleted.
* Inform the requestor the support request has been completed.

## Team Users

Teams contain users who have roles for managing teams and client application configurations. These roles provide granular access control for team members depending on their role.

For instance, team leads will likely need the ability to administer their teams (updating team information, adding new team users, etc.), but may not require full access to update the 
client application configurations for which their teams are responsible. Conversely, engineers will almost certainly need access to administer client application configurations, but are unlikely to require permissions for administering teams.

### Adding Users to a Team

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
* Navigate to the Identity Dashboard URL corresponding to the environment for the request.
* Navigate to the `/admin/teams` page.
* Click the "View" button for the team specified in the request.
* Navigate to the User Management interface for the team.

### Updating a Team User

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
* Navigate to the `/admin/teams` page.
* Click the "View" button for the team specified in the request.
* Navigate to the User Management interface for the team.
* Update the user's roles for the Admin Portal and Client Config dashboard apps.
* If necessary, update the user's other details via Rails console.

### Removing a Team User

**Please note that any request to remove a team user must be sent from a user who is an admin for that team.**

Follow these steps to remove a team user:

* Verify the requestor is an admin for the specified team. Requests from non-admins will be denied.
* Review request to ensure all required information has been provided.
  * The request should contain the following information:
    * The environment of the team and user.
    * The `email` corresponding to the team user.
    * The `name` for each team to remove the user from.
* Navigate to the Identity Dashboard URL corresponding to the environment for the request.
* Navigate to the `/admin/teams` page.
* Click the "View" button for the team specified in the request.
* Navigate to the User Management interface for the team.
* Click "Remove" to remove the user from the team.
* Confirm the action at the dialogue.
* Verify the user was successfully removed from the team.
* Inform the requestor the support request has been completed.

## Client Configurations

### Adding a New Client Configuration

### Updating an Existing Client Configuration

### Removing a Client Configuration
