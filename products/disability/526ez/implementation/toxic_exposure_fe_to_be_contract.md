# Toxic Exposure Front End/Back End Contract

Below is a collection of Toxic Exposure JSON schema and samples used to serve as a contract between the 526ez application front end and the back end.

NOTE: This is a first draft work-in-progress. More details regarding each individual section to follow, etc.

# JSON Schema & Samples

All the new toxic exposure related fields will be wrapped in a top-level JSON node called `toxicExposure`. Within this node, the following nodes (and ONLY these nodes) will be available as needed:

 - gulfWar1990
 - gulfWar1990Details
 - gulfWar2001
 - gulfWar2001Details
 - herbicide
 - herbicideDetails
 - otherHerbicideLocations
 - otherExposures
 - otherExposuresDetails
 - specifyOtherExposures
 - conditions

Example:

    {
      "toxicExposure": {
          "gulfWar1990": {
              "afghanistan": true,
              "bahrain": true,
              "egypt": true,
              "iraq": true,
              "israel": true,
              "jordan": true,
              "kuwait": true,
              "neutralzone": true,
              "oman": true,
              "qatar": true,
              "saudiarabia": true,
              "somalia": true,
              "syria": true,
              "uae": true,
              "turkey": true,
              "waters": true,
              "airspace": true,
              "none": false,
              "notsure": false
          },
          "gulfWar1990Details": {
            "iraq": {
              "startDate": "1991-03-01",
              "endDate": "1992-01-01"
            },
            "qatar": {
              "startDate": "1991-02-12",
              "endDate": "1991-06-01"
            },
            "kuwait": {
              "startDate": "1991-03-15"
            }
          },
          "gulfWar2001": {
              "djibouti": true,
              "lebanon": true,
              "uzbekistan": true,
              "yemen": true,
              "airspace": true,
              "none": false,
              "notsure": false
          },
          "gulfWar2001Details": {
             "airspace": {
                 "endDate": "1992-09-01"
             },
             "uzbekistan": {
                 "startDate": "1993-06-01"
             },
             "djibouti": {
                 "startDate": "1992-01-01",
                 "endDate": "1992-11-01"
             }
          },
          "herbicide": {
            "cambodia": true,
            "guam": true,
            "koreandemilitarizedzone": true,
            "johnston": true,
            "laos": true,
            "c123": true,
            "thailand": true,
            "vietnam": true,
              "none": false,
          },
          "herbicideDetails": {
            "cambodia": {
              "startDate": "1991-03-01",
              "endDate": "1992-01-01"
            },
            "guam": {
              "startDate": "1991-02-12",
              "endDate": "1991-06-01"
            },
            "laos": {
              "startDate": "1991-03-15"
            }
          },
          "otherHerbicideLocations": {
            "description": "other location 1, other location 2 etc",
            "startDate": "1991-03-01",
            "endDate": "1992-01-01"
          },
          "otherExposures": {
            "asbestos": true,
            "chemical": true,
            "mos": true,
            "mustardgas": true,
            "radiation": true,
            "water": true,
            "none": false,
            "notsure": false
          },
          "otherExposuresDetails": {
            "asbestos": {
              "startDate": "1991-03-01",
              "endDate": "1992-01-01"
            },
            "radiation": {
              "startDate": "1991-03-01",
              "endDate": "1992-01-01"
            },
          },
          "specifyOtherExposures": {
            "description": "Lead, burn pits",
            "startDate": "1991-03-01",
            "endDate": "1992-01-01"
          },
          "conditions": {
            "deviatedseptum": true
          }
      }
    }

- Additionally, some information at the disability level must be carried over for mapping purposes later (in the `Form526ToLighthouseTransformer` class)- namely the `cause` field. Note that secondary disabilities originally of type "SECONDARY" get changed to "NEW" by the FE's submit transformer and are mapped as primary disabilities by the backend.

      "disabilities": [
        {
          "name": "hepatitis B",
          "disabilityActionType": "NEW",
          "serviceRelevance": "Caused by an in-service event, injury, or exposure\\nasdf asdf asdf asdf ",
          "cause": "NEW"
        },
        {
          "name": "hepatitis C",
          "disabilityActionType": "NEW",
          "serviceRelevance": "Caused by an in-service event, injury, or exposure\\nSecondary to Hepatitis B\\nasdfg asdf asdf asdf",
          "cause": "NEW"
        }
      ]

- The `"none": false` field under gulfWar1900 and gulfWar2001 represent the "None of these" option from the front end. Presence of the `"none": true` field/value pair overrides any other location field/value pair in the collection and effectively renders this question on the form unchecked.
- The `notsure: false` field under gulfWar1900 and gulfWar2001 represent the "Not sure" option from the front end. This field is an artifact of the FE and used only as a guide to the user. In the back end, we filter this option out before any other processing, i.e. it is ignored

# Questions/Action Items/Notes (from 4/11/24 internal review)

## Action Items
- We need to agree upon new disabilities object pertaining to exposureOrEventOrInjury and  isRelatedToToxicExposure
- Shared map of keys to locations to show human-readable values to VSRs
- What does otherHerbicideLocations dates look like?
- Backend needs to map frontend HazardExposure Enum keys to LH  Frontend to send camelCased Enum values
- What does specifyOtherExposures really look like?

## Questions
- what do we send to lighthouse if these are all false? (re: `gulfWar1990`, `herbicide`)
  - Assumption: Veteran has to select "None of these locations" for us to send "NO" to LH in toxicExposure.servedInGulfWarHazardLocation
                if gw1990.noneOfThese == true
                  lh.te.gulfWarHazardService.servedInGulfWarHazardLocations = "NO"
-  Veteran has selected "None of these locations", but these were filled out in the form (left over artifact from filling out the form), none of these get into 15E
-  Do we drop the data that is not valid for the final state?

## Notes
- otherHerbicideLocations: LH validation is maxLength 5000 characters
- our "other" = LH "additional"
- The Veteran could fill out the entire Toxic Exposure section and then go all the way back to the beginning and uncheck all conditions 

# Developer Notes: Working with vets-json-schema
Read the [README](https://github.com/department-of-veterans-affairs/vets-json-schema) for info about full requirements when making changes to vets-api and vets-website. Below is more of a "rough guide" to schema development

## vets-json-schema
1. Make your change to `vets-json-schema` (in our case, it was `src/schemas/21-526EZ-allclaims/schema.js`)
2. Run the tests
> $ yarn test:coverage-app disability-benefits/all-claims
> $ yarn test
3. Build the schema (very important!)
> $ yarn build
4. Commit and push up feature branch
5. Check the [Actions page](https://github.com/department-of-veterans-affairs/vets-json-schema/actions) to see if your branch successfully built

## vets-api
1. Modified Aurora's magical [test harness](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/benefits/scripts/526/TREX/DEBUG)
```ruby
  def setup_submission
  # make a saved_claim
  debugger

  form_content = JSON.parse(File.read('spec/support/disability_compensation_form/submissions/with_toxic_exposure.json'))
  @saved_claim = SavedClaim::DisabilityCompensation::Form526AllClaim.from_hash(form_content)
  debugger
  @saved_claim.save ? log_success(@saved_claim) : log_failure(@saved_claim)
```
2. Modify `Gemfile` to point to remote vets-json-schema feature branch
```
gem 'vets_json_schema', git: 'https://github.com/department-of-veterans-affairs/vets-json-schema', branch: '79278-add-te-gulf-war-and-conditions-2'
```
4. Update to latest revision of feature branch
> $ bundle update vets_json_schema
4. Open a rails console
> $ bundle exec rails c
5. In the console, type
> 3.2.3 :001 > require './lib/TREX/DEBUG/form526_submit'
> 3.2.3 :001 > lhd = TREX::DEBUG::LighthouseForm526.new
6. Now, all breakpoints will be hit that were defined with `debugger` above. I typically would break within the `log_success` and `log_failure` to see if validation passed (and what error message occurred, if any)
   
## useful tools & links

- [JSON Pretty Print](https://jsonformatter.org/json-pretty-print)
- [JSON Schema Reference](https://json-schema.org/understanding-json-schema/reference)
- [JSON Schema Generation](https://www.jsonschema.net/)
- [Regular Expression testing](https://regex101.com/)
- [JSON Schema Validator](https://www.liquid-technologies.com/online-json-schema-validator)
