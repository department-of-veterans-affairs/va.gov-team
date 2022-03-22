# Unified Sign In Page (USiP) Design Details
This section of our documentation covers the implementation details of all of our unified sign in pages. A unified sign in page (USiP) allows other VA services to utilize the va.gov sign in modal to allow users to login. The login flow starts on the services home page, the user clicks sign in, they are redirected to the va.gov sign in modal, the user selects a credential provider. After completing authentication they are redirected back through eauth, which allows for the establishment of an SSOe session, back through va.gov, and finally at the original calling location. Below is a list of services which utilize the USiP and their respective configurations. Any exceptions to how these services work are listed within their respective documentaion inside this folder.

# Current Services
- MyHealtheVet:
  - application=mhv
  - url:
  - [documentation link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Design%20Documents/Unified%20Sign%20In%20Pages/MHV_Unified_Sign-In.md)
- Cerner:
  - application=myvahealth
  - url:
  - [documentation link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Design%20Documents/Unified%20Sign%20In%20Pages/MHV_Unified_Sign-In.md)
- VAmobile app 
  - application=test123
  - url:
  - [documentation link]()
