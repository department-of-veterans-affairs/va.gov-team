# Trigger / Association

## Use Case

As a veteran, 
I should know when I have a questionnaire for an upcoming appointment (regardless of notifcation type), 
so that I can fill out the form for the med staff.

## Problem

For user to have a questionnaire to fill out, they have to have an appointment that made at a clinic or a facility that has enabled our questionnaire service. 

## Considerations

- Reduce storing duplication of data
- Long term must be Scalable (both in process and techincal), short term is focused on MVP
- Should be focused as "Questionnaire as a Service" that is pulled from, not listening.
- Follow FHIR best practices. 



## Option 1 : Association in FHIR spec

This should be plan A. The idea here is that would store the association in a searchable field inside the FHIR spec for a questionnaire. First idea is that we could have the  the `identifier` (id) field be a combination of the above fields

For a parsable formatted structure. the `identifier` (id) would look something like this : `questionnaire:v{version number}:facility:{facility code}:clinic:{clinic id}:stop_code:{stop code}`. For example: `questionnaire:v1.0:facility:983:clinic:848:stop_code:323`

Just to note, this doesn't have to be the final form of the id, just an example of what this could look like.

For this solution, we can even leave off a few feilds if need be to allow for a more generic form. For example, if we had a had a questionnaire for an entire facility, we can use only the stop code and facility id, would look something like: `questionnaire:v{version number}:facility:{facility code}:clinic:{clinic id}:stop_code:{stop code}`. For example: `questionnaire:v1.0:facility:983:stop_code:323`

### Enabling the questionnaire

To enable the questionnaire per clinic/facility. We would need to add the Questionnaire FHIR spec to a facility's PGD.

The high level process would be to submit a ticket to the MAP team and they add the Questionnaire.

### FHIR spec

[Sample FHIR Questionnaire](assets/questionnaire.json)

## For the determination 

To determine if a user has upcoming questionnaires. When the user lands on the questionnaire manager, the vets api will pull the upcoming appointments and checks each appointment against the availible FHIR specs, via quering PGD using the search endpoint `/smart-pgd-fhir/v1/Questionnaire?id={questionnaire-id}` to first see if a questionnaire is there. Depending on implement of the search, there might be some multiple queries to find all the availible questionnaires. This would come into play if the there is a questionnaire with the id of `questionnaire:v1.0:facility:983:stop_code:323` and
 one with `questionnaire:v1.0:facility:983:clinic:848:stop_code:323` (notice the specificity of the clinic being added). The team would have to determine how we would handle multiple questionnaires found.

 After the determination of the if there is an questionnaires, the vets-api would then use the endpoint for `/smart-pgd-fhir/v1/QuestionnaireResponse?subject={the questionnaire subject}` to determine if the questionnaire has been completed and would also check the Save in Progress feature to determine if the user has started the form or not.

This would them be returned the the front end to display the correct information.

### Diagram

![Sequence Diagram](assets/trigger.mvp.png)

[draw.io link](https://drive.google.com/file/d/1jM5Wc3-jWCfylWVqn8CbMshw_3T2yYs0/view)



### Questions

- [ ] For a FHIR expert, does this sound reasonable to use the identifier in such a way? [The docs](https://www.hl7.org/fhir/questionnaire.html) suggest we can do this, and its even encouraged in the examples.
- [ ] How many facilities/clinics do we plan to roll this out to over time (MVP, beta, full rollout, etc)
- [ ] Are there a base set of questions that all appointments will need, or are all questions going to be specific to appointment type/facility/clinic?
- [ ] Where, specifically is our clipboard being rolled out to first and for what time of appointments? Primary Care in Loma Linda?

## Option 2: Vets-API

Our safety net for storing information is using the database (postgres) in the existing Vets-api. This would allow the most flexibility and control, but that leads to overhead in managing the the association. Which isn't a bad thing, but something that needs to be considered.

### Database structure

I defer to the backend engineering team to make that call.

### Managing the Questionnaires

To update and add questionnaires the process will be a ticket, fulfilled by someone on the Healthcare Questionnaire team. 


### Quesitons

