# Managing Teams and Users

## Teams

Teams are the organization units responsible for managing client application integrations with Sign-in Service.

### Adding a Team

Follow these steps to create a team in Identity Dashboard:

* Submit request to the OCTO-Identity team to create a new team in Identity Dashboard.
* The request should contain the following information:
  * The environment to load the users in (staging or production.)
  * `name`: the human-readable name for the team.
  * `description`: a brief description of the team, including the systems, processes, or verticals the team supports.
  * Admin details, including:
    * `logingov_uuid`: The UUID associated with the admin's Login.gov account.
    * `email`: The email address associated with the admin's Login.gov account.
    * `first_name`: The first name for the admin.
    * `last_name`: The last name for the admin.
   
### Updating a Team

**Please note that any request to update a team must be sent from a user with an `admin` role for that team.**

Follow these steps to update a team:

* Submit a request to the OCTO-Identity team to update a team.
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

### Removing a Team

**Please note that any request to remove a team must be sent from a user with an `admin` role for that team.**

**Removing a team is a dangerous operation as it will result in the deletion of any client configs associated with that team.**

Follow these steps to remove a team:

* Submit a request to the OCTO-Identity team to remove a team.
* The request should contain the following information:
  * The environment of the team.
  * The `name` of the team.

## Team Users

Teams contain users who have roles for managing dashboard apps within Identity Dashboard. Currently, there are two dashboard apps: Admin Portal and Client Config.

The Admin Portal dashboard app allows users to configure and manage their teams within Identity Dashboard. Users with an `admin` role can create new teams and manage the users that belong to those teams along with their roles. Users with a `member` role are restricted to viewing the existing teams and their associated users.

The Client Config dashboard app allows users to manage their Sign-in Service integrated client applications. Each client config belongs to a single team who is responsible for managing the integration. Users with an `admin` role can create and manage client configs, whereas users with an `member` role can only view their teams' integrations.

### Adding Users to a Team

**Please note that any request to add users to a team must be sent from a user with an `admin` role for that team.**

Follow these steps to add users to a team:

* Submit request to the OCTO-Identity team to add users to a team.
* The request should contain the following information:
  * The team the users should be added to.
  * The environment to load the users in (staging or production.)
  * A list of users with the following information:
    * `logingov_uuid`: The UUID associated with the user's Login.gov account.
    * `email`: The email address associated with the user's Login.gov account.
    * `first_name`: The first name for the user.
    * `last_name`: The last name for the user.
    * The role(s) the user should have for the Admin Portal dashboard app (`admin`, `member`, or none.)
    * The role(s) the user should have for the Client Config dashboard app (`admin`, `member`, or none.)
   
### Updating a Team User

**Please note that any request to update a team user must be sent from a user with an `admin` role for that team.**

Follow these steps to update a team user:

* Submit a request to the OCTO-Identity team to update a team user.
* The request should contain the following information:
  * The environment of the team and team user.
  * The `name` of the team the user belongs to.
  * The `email` corresponding to the team user.
  * Any details that need to be updated for the user, which may include:
    * `logingov_uuid`: The UUID associated with the user's Login.gov account.
    * `email`: The email address associated with the user's Login.gov account.
    * `first_name`: The first name for the user.
    * `last_name`: The last name for the user.
    * The role(s) the user should have for the Admin Portal dashboard app (`admin`, `member`, or none.)
    * The role(s) the user should have for the Client Config dashboard app (`admin`, `member`, or none.)

### Removing a Team User

**Please note that any request to remove a team user must be sent from a user with an `admin` role for that team.**

Follow these steps to remove a team user:

* Submit a request to the OCTO-Identity team to remove a team user.
* The request should contain the following information:
  * The environment of the team and user.
    * You may request the change apply to all environments if the user has changed roles and should be removed across all environments.
  * The `email` corresponding to the team user.
  * The `name` for each team to remove the user from.
