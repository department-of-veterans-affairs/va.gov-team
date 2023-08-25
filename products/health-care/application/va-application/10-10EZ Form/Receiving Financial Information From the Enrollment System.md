# Helpful Steps for Sending Requests to Receive Financial Information From the Enrollment System
## When the Test User Has the Necessary Financial Information
1. Refer to <a href="https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/tutorials/record_vcr.md" target="_blank">Lihan's documentation</a> for setting up RSpec in a review instance (you won't need to add new tests in order to make requests. We can use the rails console instead.).
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
7. Now that you have the `icn`, you can add it as the param for the `lookup_user` method. Call the method and you should hit the `debugger` you placed earlier.
8. Type `response` and hit `enter`. It should return the entire formatted response from the enrollment system.
9. If the test user has financial information in the enrollment system, we can access it via the following:
    ```
    response.locate('env:Envelope/env:Body/getEESummaryResponse/summary/financialsInfo/financialStatement')
    ```
    or simply
    ```
    response.locate("#{XPATH_PREFIX}financialsInfo/financialStatement")
    ```
    for short, where `XPATH_PREFIX` is a helpful constant inside of the service file.
## When the Test User Does Not Have the Necessary Financial Information
1. If the user does not have any financial information, or you can’t find the fields you need, you may need to update or add an whole new income test to their enrollment system record. Here are the steps to do so:
    - Via the intranet (CAG or GFE), visit the <a href="https://sqa.ves.va.gov/esr/" target="_blank">enrollment system dashboard</a>. If you can't access the page, please reach out to Joshua Faulkner via slack to request access.
    - Sign in using your PIV card.
    - You should get directed to the "Person Search" page.
    - Look for the "ICN" field, enter the `icn` for the test user, and then click "Find".
    - You should get directed to the overview of the user’s record. At the top, there should be a tab called "Financials". Click on it, change the "Income Year" at the top left to the previous year, and then click on the "View Data" link on the top right.
    - You should get directed to the "Edit Financial Details" page. If the user already has some existing information, you should just be able to update the form and click "Accept Changes" when you're done. If not, at the top right, click on the "Add Income Test" button.
    - From here, fill out any fields necessary. You can also add dependents via the "Dependents" link at the top right. Once finished, click "Accept Changes".
    - **Important Caveat**: The user must have an "Enroll Status" of something other than "Priority Group 1". You can find their status at the top right of the page in yellow.
