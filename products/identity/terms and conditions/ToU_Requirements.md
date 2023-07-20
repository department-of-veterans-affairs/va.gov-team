## Requirements

1. ToU page will be hosted on VA.gov
1. VA.gov Identity team will design the UI/UX of ToU, get approval from sitewide and collab cycle
1. The ToU interrupt/redirect will occur as part of the USiP login flow after a successful user login.
1. IAM will not attempt to perform ToU compliance for VA.gov
1. IAM eauth will not attempt to perform ToU compliance for any apps using USiP
1. If a user denies to accept the ToU, they will be redirected to a warning section or page, if they continue to deny, they will be logged out
1. Call the SuS API from the backend with the users ICN to record acceptance or denial of ToU
1. Determine if frontend needs a status endpoint for ToU
1. Create route for frontend to call to get the status of user ToU
1. If ToU is not available, allow user to login?

