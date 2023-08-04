### Helpful Steps for Sending Requests to Receive Financial Information From the Enrollment System
1. Refer to <a href="https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/tutorials/record_vcr.md" target="_blank">Lihan’s documentation</a> for setting up RSpec in a review instance (you won’t need to add new tests in order to make requests. We can use the rails console instead.).
    - To SSH into the server, run `ssh dsva@#{instance name}`.
2. Once you’ve bashed into the container and moved to `~/projects/vets-api`, run `vi lib/hca/enrollment_eligibility/service.rb`. Press the `i` key to insert and add a `debugger` below where we set the `response` variable inside of the `lookup_user` method. Then, press the `esc` key and type `:wq` to save and quit. The request header details can be found by looking through the `build_lookup_user_xml` method in the service.
3. Start a rails console
   ```
   RAILS_ENV=test rails c
   ```
5. Load the service Class in
   ```
   require 'hca/enrollment_eligibility/service'
   ```
7. Create a new instance of the service Class with something like:
   ```
   ee_service = HCA::EnrollmentEligibility::Service.new
   ```
6. At this point, in order for the `lookup_user` method to work properly, you need the `icn` for whichever test user you plan on using for the requests. The most efficient way that I’ve found to do this is to, with SOCKS running:
    - Visit the <a href="https://tud.vfs.va.gov/" target="_blank">Test User Dashboard</a>.
    - Look for a user, sign in with that user’s credentials on <a href="https://staging.va.gov/" target="_blank">staging</a>.
    - Open a new browser window and visit <a href="https://staging-api.va.gov/v0/sign_in/introspect" target="_blank">https://staging-api.va.gov/v0/sign_in/introspect</a>. It should return a JSON object with some user data, including their `icn`.
    - If the endpoint returns an error, something like `JWT is malformed`, you'll need to choose a different test user.
7. Now that you have the `icn`, you can add it as the param for the `lookup_user` method. Call the method, and you should hit the `debugger` you placed earlier.

