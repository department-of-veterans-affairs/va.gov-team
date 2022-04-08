# Unified Sign In Page (USiP) Design Details
This section of our documentation covers the implementation details of all of our unified sign in pages. A unified sign in page (USiP) allows other VA services to utilize the va.gov sign in modal to allow users to login. The login flow starts on the services home page, the user clicks sign in, they are redirected to the va.gov sign in modal, the user selects a credential provider. After completing authentication they are redirected back through eauth, which allows for the establishment of an SSOe session, back through va.gov, and finally at the original calling location. Below is a list of services which utilize the USiP and their respective configurations. Any exceptions to how these services work are listed within their respective documentaion inside this folder.

# Current Services
- MyHealtheVet:
  - application=mhv
  - URL: www.va.gov/sign-in?application=mhv
  - Required Params: `?application=mhv`
  - Optional Params: `to`
- Cerner:
  - application=myvahealth
  - URL: www.va.gov/sign-in?application=myvahealth
  - Required Params: `?application=myvahealth`
  - Optional Params: `to`
- Ebenefits
  - application=ebenefits
  - URL: www.va.gov/sign-in?application=ebenefits
  - Required Params: `?application=ebenefits`
  - Optional Params: `to`
- VA Flagship Mobile App
  - application=vamobile
  - URL: www.va.gov/sign-in?application=vamobile
  - Required Params: [See Mobile App Authentication](#mobile-app-authentication)
- VA OCC Mobile App
  - application=vaoccmobile
  - URL: www.va.gov/sign-in?application=vaoccmobile
  - Required Params: [See Mobile App Authentication](#mobile-app-authentication)

# Query Params Documentation
### ?application
Required for all VA services who utilize the USiP. Denotes which application is being authenticated for, and tells `vets-website` which authentication logic to utilize.

**Valid Values**
- `mhv`
- `myvahealth`
- `ebenefits`
- `vamobile`
- `vaoccmobile`

NOTE: If this parameter is not provided, or if the value does not exist within the array of valid values, the authentication attempt will be considered internal to `vets-website` and will result in the user being authentication and dropped onto va.gov

### ?to
Defines the relative path(without leading slash), in relation to the `?application` param, that the user should land on after successful authentication.

**Example**: va.gov/sign-in?application=mhv&to=home will land the user on https://eauth.va.gov/mhv-portal-web/home after successful authentication.

### ?OAuth=true
Toggles the usage of the new Sign-In Service logic. When `true` the authentication flow will utilize the Sign-In Service endpoints rather than the "V1 Sessions" endpoints. This is currently in testing and will be rolling out in phases.

Currently only works for the following `?application` types:
- `vamobile`
- `vaoccmobile`

# Mobile App Authentication
The Unified Sign-In page (va.gov/sign-in) is now available for use within the following mobile applications:

- Flagship Mobile (`?application=vamobile`)
- VA OCC Mobile (`?application=vaoccmobile`)

The authentication requests through the `vamobile` and `vaoccmobile` USiP use a non-standard initial authentication request to the backend (vets-api sessions controller). When a user clicks on one of the CSPs the frontend will call the sessions controller at a verified CSP route `<api>/v1/sessions/<csp>_verified/new` which forces all login requests through the `vamobile` and `vaoccmobile` USiP to return users who IAL2 or LOA3 verified users.

There are currently 2 ways to utilize the Unified Sign-In page for a mobile application:

1. With Sign-In Service disabled - default
2. With Sign-In Service enabled - `?OAuth=true`

### Default - Sign-In Service Disabled
This is currently the default method and requires the mobile application to implement the Unified Sign-In page as a "webview" within the application. The webview will act as a pass-through for all of the required params that are mobile specific.

**Implementation Details**
1. In-App Webview
  The webview url must include all of the following parameters:
  - application: `vamobile` or `vaoccmobile`
  - client_id: Provided by the mobile application
  - redirect_uri: Provided by the mobile application
  - scope: Provided by the mobile application
  - response_type: Provided by the mobile application
  - response_mode: Provided by the mobile application
  - code_challenge_method: Provided by the mobile application
  - code_challenge: Provided by the mobile application
  - state: Provided by the mobile application
2. `vets-website` will recognize when the `?application` type is one of the mobile application values, and will generate a `returnUrl` as `fed.eauth.va.gov/oauthe/sps/oauth/oauth20/authorize?<params>` where `?<params>` is all of the provided params.

NOTE: `vets-website` has no validation on the provided params, and is impartial to what it appends onto the eAuth url. We simply append whatever comes in via the Unified Sign-In page.

3. `vets-website` will handle authentication in our traditional sense utilizng the `vets-api -- v1/sessions` endpoints..

4. Upon successful authentication, the user will be redirected to the generated EAuth url with the params attached. From here, the users SSO session will be recognized and EAuth will handle parsing the params and redirecting the user back to the mobile applications with the necessary auth tokens required for mobile.

### Sign-In Service Enabled
Alternatively, Sign-In service is now in testing for mobile application authentication. It requires a very similar implementation to the default approach above, but with less params, and altered logic on the `vets-website|api` side. To enable and test this new logic, `vets-website` will look for the existance of `?OAuth=true`.

**Implementation Details**
1. In-App Webview
  The webview url must include all of the following parameters:
  - application: `vamobile` or `vaoccmobile`
  - OAuth: `true`
  - code_challenge_method: Provided by the mobile application
  - code_challenge: Provided by the mobile application
2. `vets-website` will recognize when the `?application` type is one of the mobile application values and when `?OAuth=true`. This will let `vets-website` know to utilize the Sign-In Service endpoints.
3. `vets-api` will handle the authentication via the Sign-In Service endpoints and will handle rdedirecting the user back to the mobile application with the tokens required for mobile authentication.

