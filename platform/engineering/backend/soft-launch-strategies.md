This document describes options available for how to launch a feature in production in less-than-general availability, for example for a period of demonstration or user acceptance testing.

### Option 1: Basic Auth
If your feature is a net-new frontend application and doesn't overlap with any already-launched URL path, then a simple option is to put the new application behind basic auth. Users needing to access the feature can be given the basic auth username/password. 

Generally when this has been done, the corresponding API endpoint has not been protected in any way beyond the normal authorization mechanism - i.e. non-beta/demo users could potentially discover the API endpoint and access the feature directly if they knew how to use their auth token to make an API request programmatically. This has been deemed an acceptable risk.

#### How to do it
- File a ticket to have basic auth enabled in the reverse proxy. Identify the path(s) that need to be behind basic auth. Tag the ticket with the `devops` label and indicate when this needs to be enabled. Mention your request in the `#devops` channel for visibility. 
- Users needing to access the site should be instructed how to differentiate between logging in to the site with their id.me credentials vs. entering the basic auth credentials that pop up in the browser modal.

### Option 2: Beta Enrollment
If your feature changes the behavior of an existing application, then it is probably not feasible to put the modified behavior behind basic auth. Instead you can use a beta enrollment mechanism. This records the identity of beta-enabled users on the backend, and works best if most of the feature differentiation can happen on the backend by changing what results are returned for API requests. Frontend code won't have a direct "is user enabled in beta" variable to work from, although if absolutely needed one could be added to the user's profile.

#### How it appears to users
- Users need to be given an enrollment link. Something like `www.vets.gov/health-beta`. When they visit this screen while logged in, they see a confirmation message indicating that they are enrolled in the feature beta. 
- Users can then go test the new functionality.

#### How to do it
- Create an API endpoint - the controller already exists, so you just need to add an app-specific route like so:
```
resource :beta_registrations, path: '/beta_registration/health_account', only: [:show, :create],
                                  defaults: { feature: 'health_account' }
```
This creates an API endpoint `v0/beta_registrations/health_account` to be invoked by the frontend.
- Create a vets-website application to enroll in the beta. Copy/paste the `health-beta` application, updating the name and path to whatever you want it to be called. Update the page contents if needed, and update the API call that it makes on page load to match the route you used in the API change above.
- Now once a logged-in user visits that page, their UUID will get recorded in the DB for the feature name used in the route (e.g. 'health_account' above). 
- Then, in your backend code you can use the module defined in `lib/beta_switch.rb` to check whether current_user is enabled for a beta of a given name, and return API results accordingly.
```
if beta_enabled?(current_user.uuid, 'health_account')
  // beta-specific features go here
end
```
- If you need to conditionalize code on the frontend, you could update the user serializer to include a temporary service name like "foo-beta" in the list of available services and then check against that in your frontend logic. In general it's best to minimize the number of places where you have to have such conditional logic, since it will be error-prone to remove it for general availability.

