# EVSS Post-9/11 GI Bill and VA Letters - Engineering Assets


## Endpoints

INT1

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
Test user account passwords can be found [in the va.gov-team-sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)

### INT
 
| First Name | Last Name | Middle Name | Gender | DOB | SSN | Scenario | Email |
|---|---|---|---|---|---|---|---|
| Mark | Webb |  | M | 10/4/1950 | 796104437 | Veteran - enrolled in Chapter 33 | vets.gov.user+228@gmail.com or vets.gov.user+229@gmail.com |
| Dianne | Scott | B |F | 4/6/1969 | 796056674 | Dependent - enrolled in Chapter 33 | vets.gov.user+276@gmail.com |
| Leona | Wilson |  | F | 9/28/1948 | 796066619 |  | vets.gov.user+298@gmail.com |
| Jamie | Wood | | F | 5/24/1945 | 796060339 |  | vets.gov.user+299@gmail.com |

## API docs

You must be connected to the VA network to try the following.

### Letters

[Swagger UI](https://int.ebenefits.va.gov/wss-lettergenerator-services-web/swagger-ui/index.html?url=https://int.ebenefits.va.gov/wss-lettergenerator-services-web/rest/swagger.yaml#/letters)

[copy](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/index.html?url=https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/veteran-military-records/swagger-va-letters.yaml)

### GI Bill Status

[Swagger UI](https://int.ebenefits.va.gov/wss-education-services-web/swagger-ui/index.html?url=https://int.ebenefits.va.gov/wss-education-services-web/rest/swagger.yaml#/educationchapter33)

Swagger yaml: https://int.ebenefits.va.gov/wss-education-services-web/rest/swagger.yaml

[copy](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/index.html?url=https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/education-careers/statement-of-benefits/engineering/swagger-education-services-schema.yaml)

## Connecting to EVSS CI for Local Development
Prerequisites:
- You have an EVSS OpenVPN account and are currently connected

### Steps
#### 1. Ensure the proper `EVSS CI` url in `config/settings.local.yml`
```
# Settings for EVSS
evss:
  url: https://int.ebenefits.va.gov
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
