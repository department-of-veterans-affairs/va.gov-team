This section of our documentation covers the implementation details of all of our unified sign in pages. A unified sign in page (USiP) allows other VA services to utilize the va.gov sign in modal to allow users to login. The login flow starts on the services home page, the user clicks sign in, they are redirected to the va.gov sign in modal, the user selects a credential provider. After completing authentication they are redirected back through eauth, which allows for the establishment of an SSOe session, back through va.gov, and finally at the original calling location. Below is a list of services which utilize the USiP and their respective configurations. Any exceptions to how these services work are listed within their respective documentaion inside this folder.

MyHealtheVet - application=mhv
Cerner - application=myvahealth
VAmobile app - application=test123
