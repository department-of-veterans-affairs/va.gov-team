# EVSS Post-9/11 GI Bill and VA Letters - Engineering Assets

## How to set up OpenVPN

You need Open VPN in order to access the AWS CI (local dev) data.

### Windows Install/Setup
 
1. Go to URL: https://vpn.evss.srarad.com/?src=connect
2. Login via credentials you were provided for your VPN account (on this site, in the dropdown choose the 'login' option vs. 'connect')
3. Click Go
4. Click: OpenVPN Connect for Windows -Save file and install
5. Launch OpenVPN. this will put an Icon in the System Tray
6. Click on the Orange OpenVPN logo and click Connect

### MAC Install/Setup
 
1. Install Tunnelblick 3.6.0 or later: https://tunnelblick.net
2. Go to URL: https://vpn.evss.srarad.com/?src=connect
3. Login via credentials you were provided for your VPN account (on this site, in the dropdown choose the 'login' option vs. 'connect')
4. Download the client.ovpn configuration file. It's the last link on the URL mentioned above with anchor text "Yourself (user-locked profile)"
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

INT1
- AWS CI (Local dev) : https://csraciapp6.evss.srarad.com
- INT (Dev): https://int.ebenefits.va.gov:444/wss-education-services-web/rest/education/chapter33/v1
- PINT (Staging): https://pint.ebenefits.va.gov:444/wss-education-services-web/rest/education/chapter33/v1
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

### CI

| First Name | Last Name | Middle Name | Gender | DOB | $$N | Email | PW |
|---|---|---|---|---|---|---|---|
| Gary | Todd | | M | 11/12/1955 | 796066621 | vets.gov.user+277@gmail.com | Zm9ydHkgdHdv |
| Jean | Picard | | M | 10/01/1977 | 301010301 | vets.gov.user+278@gmail.com | Zm9ydHkgdHdv |
| Srikanth | Vanapalli | | M | 11/12/1955 | 796066620 | vets.gov.user+279@gmail.com | Zm9ydHkgdHdv |

### INT
 
| First Name | Last Name | Middle Name | Gender | DOB | SSN | Scenario | Email | PW |
|---|---|---|---|---|---|---|---|---|
| Mark | Webb |  | M | 10/4/1950 | 796104437 | Veteran - enrolled in Chapter 33 | vets.gov.user+228@gmail.com or vets.gov.user+229@gmail.com | Zm9ydHkgdHdv
| Dianne | Scott | B |F | 4/6/1969 | 796056674 | Dependent - enrolled in Chapter 33 | vets.gov.user+276@gmail.com | Zm9ydHkgdHdv
| Leona | Wilson |  | F | 9/28/1948 | 796066619 |  | vets.gov.user+298@gmail.com | Zm9ydHkgdHdv
| Jamie | Wood | | F | 5/24/1945 | 796060339 |  | vets.gov.user+299@gmail.com | Zm9ydHkgdHdv

## API docs

You must be connected to the EVSS OpenVPN (see above instructions) to try the following.

### Letters

[Swagger UI](https://csraciapp6.evss.srarad.com/wss-lettergenerator-services-web/swagger-ui/index.html?url=https://csraciapp6.evss.srarad.com/wss-lettergenerator-services-web/rest/swagger.yaml#/letters)

Swagger yaml: https://csraciapp6.evss.srarad.com/wss-lettergenerator-services-web/rest/swagger.yaml

### GI Bill Status

[Swagger UI](https://csraciapp6.evss.srarad.com/wss-education-services-web/swagger-ui/index.html?url=https://csraciapp6.evss.srarad.com/wss-education-services-web/rest/swagger.yaml#/educationchapter33)

Swagger yaml: https://csraciapp6.evss.srarad.com/wss-education-services-web/rest/swagger.yaml

## Connecting to EVSS CI for Local Development
Prerequisites:
- You have an EVSS OpenVPN account and are currently connected

### Steps
#### 1. Ensure the proper `EVSS CI` url in `config/settings.local.yml`
```
# Settings for EVSS
evss:
  url: https://csraciapp6.evss.srarad.com
```
#### 2. Turn MVI Mock On in `config/settings.local.yml`
```
mvi:
  mock: true
```
#### 3. Disable SSL verification in the base service. 
_As of 7-11-2017 This should no longer be necessary but it won't hurt_

In `/vets-api/lib/evss/base_service.rb` modify def ssl_options to read:
```ruby
def ssl_options
  return { verify: false }
end
```
#### 4. Manually connect using `rails console`:
```
bill@bill-VirtualBox:~/Github/vets-api > bundle exec rails console  
Running via Spring preloader in process 13573
Loading development environment (Rails 4.2.7.1)
irb: warn: can't alias context from irb_context.
2.3.0 :001 >   user = OpenStruct.new(
2.3.0 :002 >     loa: { current: 3 },
2.3.0 :003 >     first_name: 'abraham',
2.3.0 :004 >     last_name: 'lincoln',
2.3.0 :005 >     last_signed_in: Time.now.utc,
2.3.0 :006 >     edipi: '6138391549',
2.3.0 :007 >     participant_id: '2549502129',
2.3.0 :008 >     ssn: '796111863'
2.3.0 :009?>     )
 => #<OpenStruct loa={:c...
2.3.0 :010 > h = EVSS::AuthHeaders.new(user).to_h
 => {"va_eauth_csid"=>"D...
2.3.0 :011 > s = EVSS::Letters::Service.new(h)
 => #<EVSS::Letters::Ser...
2.3.0 :012 > pp s.get_letter_beneficiary
#<EVSS::Letters::BeneficiaryResponse:0x0000000703cee0
 @benefit_information=
  #<EVSS::Letters::BenefitInformation:0x0000000703ce90
   @award_effective_date=Thu, 06 Jun 2013 04:00:00 +0000,
   @errors_hash={},
   @has_adapted_housing=false,
   @has_chapter35_eligibility=true,
   @has_death_result_of_disability=false,
   @has_individual_unemployability_granted=false,
   @has_non_service_connected_pension=false,
   ...
   ...
```
#### 5. OR Run the EVSS User Lookup script
Git checkout the `evss-test-script` branch and run the script, e.g.
```
bundle exec rails r script/evss_user_lookup.rb --ssn=796066621 --skip-mvi-lookup
```
