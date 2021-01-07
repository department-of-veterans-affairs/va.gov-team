# SiP data source

initial meeting on 1/7/2012 at 11am

Attendees:
Stephen Barrs
Dillo Raju
Mark Dewey

## Agenda

Talk about using a different data source for the Save in Progress (SiP) system.

## Problem

Currently we are using the "out of the box" SiP system to store users questionnaires that are in progress. This system is a known risk has its pros and cons.

Pros:

1. Its already built. No need for new development, just integration (more on that later)
2. The current team is not maintaining this system.

Cons:

1. Integration on both the front end and back end introduces complexity. Complexity can be managed, but can also lead to bugs
   1. Example: For the FE has to work around the SiP system to store multiple instances of the form per person.
   2. Example: For the BE. The query to get all the user's in progress forms has to reach to 3 different systems, one of those being the SiP system.
2. This system is a black box. We do not have direct access to the data. This data is encrypted.
3. We are not sure about the legally of storing health care related data in the Vets Api
4. Querying for an in progress form becomes harder.
5. We have a strong coupling with the Vets API.
6. The SiP is not really designed for what we are doing.

## Potential Solution

Instead of using the forms library SiP feature, we can utilize the `in_progress` status of a [questionnaire answer in the FHIR spec](https://www.hl7.org/fhir/valueset-questionnaire-answers-status.html). This would allow us to store partial answers in PGD and let external sources access those partial answers.

This would reduce our reliance on the existing system, but require us to create the features that we get "for free" with the SiP

Pros:

1. All a user's health data is being stored in a central location
2. API calls (as from external service such as PreVisit Summary and VA Notify) would go to PGD instead of trying to connect to the vets api
3. This reduces the number of systems we are talking to by 1. This will mean our querying and server work would be less complex
4. Using PGD is extension of the current PGD work and will not introduce much more work than is already needed
5. Could be used more easily for future 'in progress' use cases
  
Cons

1. Depending on implementation, we could have more to maintain.
2. We could have to re-create certain features

## Option 1: Updates to the current SiP System

### Idea

Can we point the existing FE code to a different endpoint for the SiP API calls. This would

### Good

- Should get much of the existing features for the SiP, just have to write some glue code to get things to work
- Resuse the API already being created for questionnaire responses

### Bad

Potential big upgrade to the existing SiP system

## Option 2: API modificatiopn

### The Good

- No (or little) changes to the front end code base.

### The bad

- More BE work
- More integration with a shared endpoint, would need to work with other teams to ensure nothing breaks.

## raw notes

- complexity with query
- only in vets api
- wipes data from API automatically (problem with healthcare data)

Could we use PGD as a tempory data store instead of the PGD

1. load the data
2. save the data

down stream access to partial data.

- work with team on that.

if there are many systems to complete questionnaire

- start it in VA gov. continue it in other systems

change that url to invoke an endpoint

figure out what endpoints are being called

legally, is there any issue with the persisting data into the user profile

Risk benefit:
seems like an extention of exisiting work
the issue is the front end, how was
decouple vets-api dependency
reduces the number of systems to care about
less of a black box
trying to not lose data \

-----

id - has faciilty/clinic/date time
