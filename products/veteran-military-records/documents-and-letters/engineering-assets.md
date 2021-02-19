# Download VA Letters - Engineering Assets

## How to set up OpenVPN

You need Open VPN in order to access the AWS CI (local dev) data.

### Windows Install/Setup
 
1. Go to URL: https://vpn.evss.srarad.com/?src=connect
2. Login (via credentials you were provided for your VPN account) (on this site, in the dropdown choose the 'login' option vs. 'connect')
3. Click Go
4. Click: OpenVPN Connect for Windows -Save file and install
5. Launch OpenVPN. this will put an Icon in the System Tray
6. Click on the Orange OpenVPN logo and click Connect

### MAC Install/Setup
 
1. Install Tunnelblick 3.6.0 or later: https://tunnelblick.net
2. Login (via credentials you were provided for your VPN account) at https://vpn.evss.srarad.com/?src=connect
3. On this site, in the dropdown choose the 'login' option (not 'connect')
4. Download the client.ovpn configuration file. It's the last link on the URL mentioned above, e.g. Yourself (user-locked profile)
  a. If you are prompted to install OpenVPN Connect, download from the link provided and install. Then return to step 2.
  b. If the OpenVPN Connect installer won't open, right click it and selected Open
5. Create a new folder called TunnelblickConfig
6. Copy client.ovpn from step #4 into TunnelblickConfig folder
7. Rename the new folder by adding .tblk extension to the TunnelblickConfig folder name
8. Double click TunnelblickConfig.tblk so it'll load in Tunnlebrick and import your connection config
9. Navigate to your Applications/OpenVPN Connect folder and run the uninstaller to remove openvpn-connect if you installed it in step #4

NOTE:  You may need to suppress your security configuration and/or enter admin passwords on the Mac multiple times as the applications and config file aren't going to be trusted
 
https://csra-evss.atlassian.net/wiki/display/ST/WSS+CI+Dev+Env+-+AWS#WSSCIDevEnv-AWS-AWSVPN

## Endpoints

- AWS CI (Local dev) : https://csraciapp6.evss.srarad.com
- INT (Dev): https://int.ebenefits.va.gov:444/wss-lettergenerator-services-web/rest/letters/v1
- PINT (Staging): https://pint.ebenefits.va.gov:444/wss-lettergenerator-services-web/rest/letters/v1
- Prod: 

## 6 traits for ID.me for login and e2e testing are:

- First name
- Last name
- Middle name
- Gender
- Date of birth
- SSN
- **Email address ?**

## Timeline

- 06/07 – EVSS code available in INT ready for vets.gov Integration Testing
- 06/12 - Vets.gov P911GIBES code available for integration testing w/INT data
- 06/14 - Vets.gov P911GIBES integration testing complete (may continue tweaking UI and bug fixing)
- 06/16 - Vets.gov VA Letters code available for integration testing w/INT data
- 06/21 - Vets.gov VA Letters integration testing complete (may continue tweaking UI and bug fixing)
- 06/26 – EVSS code available in PINT, ready for additional testing by vets.gov on vets.gov Staging environment
- 06/29 - Vets.gov integration testing w/PINT data complete
- 06/30 – EVSS code available in Production
- 06/30 - Vets.gov code soft launch

## Test Users

- Passwords for test users are kept in the va.gov-team-sensitive repo and [can be looked up here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
### CI

| First Name | Last Name | Middle Name | Gender | DOB | $$N | Email |
|---|---|---|---|---|---|---|
| Gary | Todd | | M | 11/12/1955 | 796066621 | vets.gov.user+277@gmail.com |
| Jean | Picard | | M | 10/01/1977 | 301010301 | vets.gov.user+278@gmail.com |
| Srikanth | Vanapalli | | M | 11/12/1955 | 796066620 | vets.gov.user+279@gmail.com |

### INT

| First Name | Last Name | Middle Name | Gender | DOB | $$N | Scenario | Email |
|---|---|---|---|---|---|---|---|
| Greg | Anderson | A | M | 4/5/1933 | 796121200 | Veteran with all letters | vets.gov.user+1@gmail.com |
| Jerry | Brooks | M | M | 9/25/1947 | 796148937 | Veteran with all  letters | vets.gov.user+271@gmail.com  |
| Note: doesn't work; Olga | Fuller | Lee | F | 5/18/1984 | 796140261 | Veteran with totally and permanently disabled status due solely to service-connected disabilities | vets.gov.user+272@gmail.com |
| Vicki | Schmidt | | F | 12/24/1923 | 796164121 | Dependent - all eligible letters | vets.gov.user+273@gmail.com |
| Kathy | Rogers | | F | 7/26/1986 | 796086306 | CORP: Y BIRLS: N = No letters | vets.gov.user+274@gmail.com |
| Arthur | Thomas | Lee | Unknown | 2/22/1957 | 796330157 | CORP: N BIRLS: N = No letters | vets.gov.user+275@gmail.com |
