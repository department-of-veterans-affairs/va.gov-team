##  August 11,2025 | Engineering Weekly Sync

* Notes
    * Josh Drumm sharing the Associations API details
        * [Enrollment system channel](https://dsva.slack.com/archives/C06FDF2EN0H) in DSVA slack (#octo-ves-healthcare-enrollment)
        * Staging goes to SQL
            * [SQA associates gateway service swagger doc](https://sqa.ves.va.gov/ves-associate-gateway-svc/swagger-ui/index.html) (VA network)
            * Required fields when you make a delete request
                * Role
                * givenName
                * familyName
                * deleteIndicator
                * relationType

         - <img width="722" height="522" alt="image" src="https://github.com/user-attachments/assets/e71b9f18-9ecb-4652-82c9-4a974862154b" />

        * Only in Prod will you need API key
            * In staging only need user user ICN
        * When recording cassettes, dont have to create review instance
            * Can record on local machine
            * [Recording VCR cassettes document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/Engineering/Recording%20VCR%20Cassettes.md) (GitHub)
                * Add ICN after “/person” on the terminal command (in the doc)
        * Git requests are pretty easy, only need ICN
            * API key is in the param store, 
                * If it changes, will need via email from Josh F.
                * Has not changed yet (as of today 8/11/2025)
            * [Link to all keys we have the param store](https://console.amazonaws-us-gov.com/systems-manager/parameters/?region=us-gov-west-1&tab=Table#list_parameter_filters=Name:Contains:veteran_enrollment_system) (VA Network)
                * Reminder, API keys only needed for Prod
        * VES - Enrollment system
            * [SQA.ves.va.gov/esr](SQA.ves.va.gov/esr) 
            * Need to request access to view it (VA Network)
                * Ask Josh F for access to it
                    * Needs Active Directory ID for the user (yourself)
                        * Steps for finding Active Directory ID:
                            * Go to Outlook and on the top right, click on the address book icon (person on the front of a book).
                            * Search for your name and then double-click on it.
                            * On the "General" tab (opens by default), you should see a field labeled "Alias". That's your AD ID.
                    * Josh F can give create & edit access in SQA env
                * Must be on VA network to access this

         - <img width="523" height="260" alt="image" src="https://github.com/user-attachments/assets/e5d4e5f6-5f42-4744-8afc-c88ccc73dfef" />

            * Used for to look at changes we make via Enrollment system API and Associations API
                * Example: EZR submitted, can find that EZR in UI (data, Priority group, etc)
                * Need ICN from user
                * Looks just like when Simone walked us through VES
                * Josh used it to see QA test results and confirm changes on EC/NOK 
            * Can create data in here
                * For a new Spouse/Dependent, you must start SSN with triple-6, for system constraints in SQA env
                * Avoid using obvious fake SSNs, 
            * Steps to see various data points
                * Check enrollment tab
                * View historical data to see EZR submissions (Change times field
                * View Data button will show old value & new value
                * Export button creates CSV file
                * Demographics tab has NOK/EC data
                    * Associates tab within Demographics tab
                * Open swagger UI to run tests with adding and removing
        * Reach out to Josh F for any questions
            * Can also reach out to Josh D (will still be in VA space)
* Action items
     - [ ] All engineers need to request access from Josh F for Enrollment system in SQA
