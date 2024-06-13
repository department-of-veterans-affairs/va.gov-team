# Managing Teams and Users

Applications that serve veterans in the VA.gov ecosystem can leverage Sign-in Service (SiS) to provide an authenticated user experience. To ensure the security of 
client application integrations, the OCTO-Identity team maintains a roster of development teams and team members; each team has ownership over their client application configuration, 
and team members have different permissions based on their team role. This document describes how requests to manage teams and users should be submitted for timely processing.

## Table of Contents

- [Teams](#teams)
  - [Adding a Team](#adding-a-team)
  - [Updating a Team](#updating-a-team)
  - [Removing a Team](#removing-a-team)
- [Team Users](#team-users)
  - [Adding Users to a Team](#adding-users-to-a-team)
  - [Updating a Team User](#updating-a-team-user)
  - [Removing a Team User](#removing-a-team-user)

## Teams

Teams are the organization units responsible for managing client application integrations with SiS. Each team has users who belong to it and 
configurations for client applications integrated with SiS.

### Adding a Team

Follow these steps to create a team:

* To create a new team, submit a request to the OCTO-Identity team by creating an issue in your integration's Github project.
* The request should contain the following information:
  * The environment to load the users in (staging or production.)
  * `name`: the human-readable name for the team.
  * `description`: a brief description of the team, including the systems, processes, or verticals the team supports.
  * Admin details, including:
    * `logingov_uuid`: The UUID associated with the admin's Login.gov account.
    * `email`: The email address associated with the admin's Login.gov account.
    * `first_name`: The first name for the admin.
    * `last_name`: The last name for the admin.
* The OCTO-Identity team will then create the requested team using the details provided.
   
### Updating a Team

**Please note that any request to update a team must be sent from a user who is an admin for that team.**

Follow these steps to update a team:

* To update a team, submit a request to the OCTO-Identity team by creating an issue in your integration's Github project.
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
* Prior to executing the request, the OCTO-Identity team will verify the requestor is an admin for the specified team. Requests from non-admins will be denied.
* The OCTO-Identity team will then update the specified team using the details provided.

### Removing a Team

**Please note that any request to remove a team must be sent from a user who is an admin for that team.**

**Removing a team is a dangerous operation as it will result in the deletion of any client configurations associated with that team.**

Follow these steps to remove a team:

* To remove a team, submit a request to the OCTO-Identity team by creating an issue in your integration's Github project.
* The request should contain the following information:
  * The environment of the team.
  * The `name` of the team.
* Prior to executing the request, the OCTO-Identity team will verify the requestor is an admin for the specified team. Requests from non-admins will be denied.
* If applicable, the OCTO-Identity team will inform the requestor of any client configurations that will be impacted by the removal of the team prior to executing the request.
* The OCTO-Identity team will then remove the specified team.

## Team Users

Teams contain users who have roles for managing teams and client application configurations. These roles provide granular access control for team members depending on their role.

For instance, team leads will likely need the ability to administer their teams (updating team information, adding new team users, etc.), but may not require full access to update the 
client application configurations for which their teams are responsible. Conversely, engineers will almost certainly need access to administer client application configurations, but are unlikely to require permissions for administering teams.

### Adding Users to a Team

**Please note that any request to add users to a team must be sent from a user who is an admin for that team.**

Follow these steps to add users to a team:

* To add users to a team, submit a request to the OCTO-Identity team by creating an issue in your integration's Github project.
* The request should contain the following information:
  * The team the user(s) should be added to.
  * The environment to load the user(s) in (staging or production.)
  * A list of users with the following information:
    * `logingov_uuid`: The UUID associated with the user's Login.gov account.
    * `email`: The email address associated with the user's Login.gov account.
    * `first_name`: The first name for the user.
    * `last_name`: The last name for the user.
    * Should the user be able to make requests to update the team or team roster? (yes or no)
    * Should the user be able to make requests to administer client application configurations? (yes or no)
* Prior to executing the request, the OCTO-Identity team will verify the requestor is an admin for the specified team. Requests from non-admins will be denied.
* The OCTO-Identity team will then create the requested team users using the details provided.
   
### Updating a Team User

**Please note that any request to update a team user must be sent from a user who is an admin for that team.**

Follow these steps to update a team user:

* To update a team user, submit a request to the OCTO-Identity team by creating an issue in your integration's Github project.
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
* Prior to executing the request, the OCTO-Identity team will verify the requestor is an admin for the specified team. Requests from non-admins will be denied.
* The OCTO-Identity team will then update the specified team user(s) using the details provided.

### Removing a Team User

**Please note that any request to remove a team user must be sent from a user who is an admin for that team.**

Follow these steps to remove a team user:

* To remove a team user, submit a request to the OCTO-Identity team by creating an issue in your integration's Github project.
* The request should contain the following information:
  * The environment of the team and user.
    * You may request the change apply to all environments if the user has changed roles and should be removed across all environments.
  * The `email` corresponding to the team user.
  * The `name` for each team to remove the user from.
* Prior to executing the request, the OCTO-Identity team will verify the requestor is an admin for the specified team. Requests from non-admins will be denied.
* The OCTO-Identity team will then remove the specified team user(s).
