# SSOi - Login with PIV

## Value Statement
**As a** VA employee or contractor<br>
**I want to** log into VA Notify with PIV <br>
**So that** I can seamlessly access the site without creating new credentials<br>

**As** VA Notify<br>
**I want to** securely manage access to the Self Service UI<br>
**So that** we can enforce MFA and adhere to offboarding procedures within the VA<br>

VA Notify's Self Service UI is behind the VA Network. SSOi (login with PIV) enforces a secure method of account management, authentication, and offboarding.

## User Flow

### Production
When you access our Self Service site at https://notifications.va.gov, simply click the Login with PIV button. You will be redirected to a site where you can click the option to sign in with PIV. Enter your credentials and continue. You will be redirected into your VA Notify account. Service access will be assigned by VA Notify. Please reach out if you need help!

### Staging
The process will be slightly different in Staging. You must self register for SSOi Applications in Lower Environments. In production this process is automated to ensure all VA users are known, but all users are not loaded in the lower environments. Please follow the directions [here](https://dvagov.sharepoint.com/sites/OITEPMOIAM/playbooks/Pages/SSOi/SSOi%20Setup.aspx) or ask VA Notify for help.

Once that is complete, follow the same instructions as above at https://staging.notifications.va.gov.

Please note, if you have not completed the self registration process for SSOi, upon logging in, you will receive a blank page or an error page.
