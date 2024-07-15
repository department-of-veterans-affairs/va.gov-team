## Updating local DB with income limit tables for testing streamlined waiver locally:
### Problem: 
GMT data doesn't fetch properly when running locally because the database for the zip code and other dependencies is from a third party and only gets updated once a year, it also probably takes up alot of space. 

If we try to run it as is there is an invalid zip code error that triggers and the SW path is negated because there's no gmt data to validate against. 

The current workaround involves uncommenting some code in `src/applications/financial-status-report/actions/geographicMeansThreshold.js` that targets the gmt data staging endpoint but that breaks save in progress because of some security rules and hitting another domain.

  - - - -

### Steps to update
**Note before continuing:** This process can take upwards of 20 minutes and needs to be run every time the container starts running.
1. In vets-api directory `make up` to get container running
2. `docker ps` in another terminal to see running processes and keep note of container name for `vets-api_gibberish`
3. `docker exec -it <container-name> bash`; You’ll now have a bash terminal of the docker container
    * **_Note:_** Not necessary for this, but helpful in some cases: You can run `tail -f log/development.log` to see verbose API docker logs
3. Open rails console with `rails console`
4. Run import jobs for each file in `app/workers/income_limits` (roughly in order of longest to shortest run times)
    1. `IncomeLimits::GmtThresholdsImport.new.perform` _(takes a while to run)_
    2. `IncomeLimits::StdZipcodeImport.new.perform` _(takes a while to run)_
    3. `IncomeLimits::StdCountyImport.new.perform`
    4. `IncomeLimits::StdIncomeThresholdImport.new.perform`
    5. `IncomeLimits::StdStateImport.new.perform`

  - - - -

  ### Alternate workaround
  [This is a faster solution](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials-2/engineering/front-end/the-wrong-way.md#local-gmt-data-issues) geared towards hard coding gmt data values for local testing
