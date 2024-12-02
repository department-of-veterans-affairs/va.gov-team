# Architecture Intent - Questions and Meeting Notes
- This is a new Collaboration Cycle touchpoint for VFS teams, and the first time our team will be going through the review.
- Architecture Intent review meeting scheduled for Tuesday, 11/26/2024 at 1:30p ET/12:30p CT/10:30a PT

### Artifacts & Resources
- [Architecture Intent Checklist](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/10-10%20Health%20Apps-10-10CG-11-06-2024.md)
- [10-10CG Sequence diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/1010-health-apps/10-10cg-sequence-diagram-10072024.md)
- Preparation ticket [#95815](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95815)
- [More details on what will be discussed at the Architecture Intent meeting](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/collab-cycle/architecture-intent-meeting.md)
  

### What questions do we have for the Architecture Intent meeting?
- What is meant by "threat modeling"?
     - ANSWER: Consider the worst threat for the application, How could a hacker get to this information and what could they use it for.
- Question around PII for the lat/long and mapbox since those are in query params. That functionality already exists in the facility locator, but I wanted to double check
     - ANSWER: This exists today, there is no new risk here.  The 10-10 team will not be asked to do anything differently.
     - There may be a future initiative that would cover all applications that do this to improve risk here.

---

# Architecture Intent - Meeting Notes
- **MUST**: Update the GET to a POST
     - The PII cannot show up in URLs
     - That's why they want them in a post so it's in the body.
     - From **Adrian** via Slack:
          - can we ask about using https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/initializers/filter_parameter_logging.rb instead?
          - Feel free to loop me into any discussions. personally I really don't like doing re-work and moving away from standard API design patterns to solve this.
          - FWIW datadog is also moving to fedramp high in the near future, if datadog is the source of this concern
     - From **Adrian** via Slack:
          - another option could be to pass the lat/long params in http headers, if they are concerned about logging elsewhere in the stack (TIC/etc)
     - From **Adrian** via Slack:
          - Note: lighthouse accepts sensitive parameters in GET params (from memory, patient identifiers, probably other things) - we will be at this a long time if we try to change this pattern everywhere
     - From **Adrian** via Slack:
          - I convo'd with the @octo-health-engineers about the GET -> POST discussion, we generally agree that it feels wrong to say "just use POST". The most robust solution would be to use public key encryption to encrypt the parameters on the client side and decrypt them within vets-api. I took a quick look and don't see any prior art but ideally this would be done as a single shared util in each repo that other teams could take advantage of.
          - it could be cool to create a custom faraday middleware that automatically decrypted parameters matching some signature. of course then we would have to be careful not to have it low enough in the stack that the parameters got logged out
          - some mixin that can be added to controller classes might be better
          - so in the context of e.g. the [facilities api client](https://github.com/department-of-veterans-affairs/vets-api/blob/eff3d537d977c9b8086060929c6ac1df13ec3421/modules/facilities_api/app/services/facilities_api/v2/ppms/client.rb#L97) it could be something like
>     include VaGovParamDecryptor
>     
>     ...
>     
>     def base_params(params)
>       decrypted_params =
>     decrypt_params(params)
>       latitude, longitude, radius =
>     fetch_lat_long_and_radius(params)`
>  
- From **Adrian** via Slack:
     - Or putting lat/long in headers could potentially be an even quicker (or even permanent :zipper_mouth_face:) fix too
---
- **MUST**: Confirm that there is no PII being logged
---
- **SHOULD**: Add some sort of monitor for Lighthouse API
---
- **SHOULD**: Review response times for search results
     - Current acceptable limit standard is around 4 seconds
     - **Adrian** suggested via Slack: look into using https://github.com/mfrachet/cypress-audit
          - lighthouse has built in network and cpu limiting for the mobile tests. Would appreciate hearing back anything y'all find out
---
- **CONSIDER**: Adding 'distance from' to each location
     - Future Iteration?
- 
