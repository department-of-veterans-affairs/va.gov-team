# Toxic Exposure Front End/Back End Contract

Below is a collection of Toxic Exposure JSON schema and samples used to serve as a contract between the 526ez application front end and the back end.

NOTE: This is a first draft work-in-progress. More details regarding each individual section to follow, etc.

# JSON Schema & Samples

All the new toxic exposure related fields will be wrapped in a top-level JSON node called `toxicExposure`. Within this node, the following nodes (and ONLY these nodes) will be available as needed:

 - gulfWar1990
 - gulfWar1990Details
 - herbicide
 - herbicideDetails
 - otherHerbicideLocations
 - otherExposures
 - otherExposureDetails
 - specifyOtherExposures
 - toxicExposureConditions

Example:

    {
      "toxicExposure": {
          "gulfWar1990": {
            "iraq": true,
            "kuwait": true,
            "qatar": true
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
          "herbicide": {
            "cambodia": true,
            "guam": true,
            "laos": true
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
          "otherHerbicideLocations": "freeform text field. holla.",
          "otherExposures": {
            "asbestos": true,
            "radiation": true,
            "mustardgas": false
          }
          "otherExposureDetails": {
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
          }
          "toxicExposureConditions": {
            "deviatedseptum": true
          }
      }
    }

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
```
        def setup_submission
        # make a saved_claim
        debugger

        form_content = JSON.parse(File.read('spec/support/disability_compensation_form/submissions/with_toxic_exposure.json'))
        @saved_claim = SavedClaim::DisabilityCompensation::Form526AllClaim.from_hash(form_content)
        debugger
        @saved_claim.save ? log_success(@saved_claim) : log_failure(@saved_claim)
```
2. Modify `Gemfile` to point to remote feature branch
`gem 'vets_json_schema', git: 'https://github.com/department-of-veterans-affairs/vets-json-schema', branch: '79278-add-te-gulf-war-and-conditions-2'`
3. Update to latest revision of feature branch
> $ bundle update vets_json_schema
4. Open a rails console
> $ bundle exec rails c
5. In the console, type
> 3.2.3 :001 > require './lib/TREX/DEBUG/form526_submit'
> 3.2.3 :001 > lhd = TREX::DEBUG::LighthouseForm526.new
6. Now, all breakpoints will be hit that were defined with `debugger` above. I typically would break within the `log_success` and `log_failure` to see if validation passed (and what error message occurred, if any)
   
