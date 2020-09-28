# Clipboard Technical Discovery [WIP]

- [Clipboard Technical Discovery [WIP]](#clipboard-technical-discovery-wip)
  - [Problem Statement](#problem-statement)
  - [Introduction](#introduction)
  - [Proposed Solutions](#proposed-solutions)
  - [Outstanding questions](#outstanding-questions)
  - [Forms Discovery](#forms-discovery)
    - [Current Forms System](#current-forms-system)
    - [Healthcare wizard](#healthcare-wizard)
    - [Pro and Con Summary](#pro-and-con-summary)
  - [Health Data APIs](#health-data-apis)
    - [Developers.va.gov](#developersvagov)
    - [VistA API](#vista-api)
  - [Mobile Experience Findings](#mobile-experience-findings)
  - [Creating an API Wrapper in the VA API](#creating-an-api-wrapper-in-the-va-api)
  - [CMS Integration](#cms-integration)
  - [Auth vs Unauthed](#auth-vs-unauthed)
  - [VA Online Scheduler (VAOS)](#va-online-scheduler-vaos)
  - [Putting Chief Complaint into Patient Generated Data](#putting-chief-complaint-into-patient-generated-data)
  - [When is an Encounter and ID created](#when-is-an-encounter-and-id-created)
  - [VEText Integration](#vetext-integration)
  - [Analytics Investigation](#analytics-investigation)
  - [User Whitelist](#user-whitelist)
  - [VA Gov research using vets-web frontend](#va-gov-research-using-vets-web-frontend)
  - [Outstanding issues and unknowns](#outstanding-issues-and-unknowns)
  

## Problem Statement

Veterans are unable to consistently share and update current health status and medical history that is leveraged in their care across the VA and community providers

[Read more about our North Star](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md#measure-success)

## Introduction

Our goal is to improve the in-person and online pre- and post-appointment experiences for Veterans, contribute to physical distancing efforts in VA facilities, and better integrate Veteran-provided data in VA workflows by providing Veterans with a digital option to complete pre- or post-appointment questionnaires and screeners.

The technical team sought to discover how we can integrate and leverage current systems and architecture. The team investigated two big ideas - the forms library, existing health APIs, and other minor ideas documented below.

This `README` serves as a high-level, non-technical intro to the research findings, including findings, successes, and missing steps.

What guided the research was "what all is possible". Since this is a new team with a team product and new direction. There are plenty of fuzzy edges and no defined product as of this commit. That has allowed the tech team to research and understand what all can be possible so when design and UX has a solution, we can give proper feedback and support.

## Proposed Solutions

Can we build a simple, pre-populated form, that sends data to cliniations in a timely manner.

---

## Outstanding questions

- Data
  - Where is the data source that we are going to writing to?
  - How can we pull in data from multiple sources?
  - What is our source of truth for health data?
  - Where is the profile information coming from?
- Forms
  - Can we pull in data from an external API in a form?
  - Can we create something to make the question text be set not in code?
  - How can we control the forms?
- Verify results
  - What analytics do we need?
  - What should be the KPI for the engineering team?
- Scheduling
  - Understand the data flow.
  - How can we successfully integrate with VAOS?

## Forms Discovery

- [technical findings](forms.md)

### Current Forms System

The VA uses [a fork](https://github.com/department-of-veterans-affairs/vets-json-schema) of the [React Json Schema Forms](https://github.com/rjsf-team/react-jsonschema-form). This JSON based approach allows for quick and simple forms. This library is something we leverage, even though there are some limitations.

Creating a form on va.gov is a relatively straight forward process, the existing forms on the site all use pre-built React components on the front-end that submit to an API endpoint set up on the back-end. The back-end API endpoints are required for allowing the user to sign in and use the 'save in progress' functionality so if we want to take advantage of that we will need API endpoints set up on the back-end. Depending on the functionality recommended by design and UX we should be able to use the pre-built React components since they are 100% compliant with our pattern library and have already been UX tested for the most part for other projects.

Using this system, we can create forms that contain:

- create a simple form that includes drops, radios, and text fields (and others).
- Handle required fields and other validation; both hardcoded and dynamic logic
- Create custom Widgets

![captured (1)](https://user-images.githubusercontent.com/1793923/86625609-57103880-bf93-11ea-830a-477e91c1ac8f.gif)

[Full documentation here](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms/form-tutorial-basic/)

One of the north stars of the team is to make the clipboard process as frictionless as possible. For that reason, we undertook to answer a few key questions.

> Can we use the authenticated user's data in a form?

Yes, we can, if the user is logged in, we access basic demographic information.

This information is coming from ???? and we have the following data for a user today:

- Name
- Addresses
- Gender
- MyHealthyVet Account meta data
- Phone Numbers
- Associated Facilites
- Vet Status
- How the user Signed in

> Can we force authentication on a form?

Yes. This feature is built into the existing forms system. We can custom the flow as well if need be.

> Can we suggest a user login part ways through a form?

This one was tricky, but by utilizing session storage, we can have a form that a user can start unauthenticated, then be prompted to be authenticated and then continue the form using the data for that user.

This does in fact use the Save in Progress featured.

_warning: ~1 and a half minute gif_ ![early-demo-1](https://user-images.githubusercontent.com/1793923/87829151-6bceb500-c84c-11ea-8c8d-f772f28dc8ca.gif)

This demo is just an early prototype and still has some limitations:

- Only text field questions can be used before sign in
- Each field on the Authentication-recommended page is a new custom widget

The next steps for this prototype would be:

My desired next steps if I were to continue down this route:

- I would want to create some yes/no questions to be answered pre-sign in
- Have pre-sign in data affect form dynamics post sign in
- I want to pull in data from some other API
- I would refactor the Authentication-recommended page.
- Create unit tests

Currently, the only way the update the form content, both the structure and the text the user sees, is through a pull request to the code base. This is a technical process, that is built for developers. This might be a very high level to get this to work properly.

> What is session storage and what are its limits?

Session storage is a client side, temporary data store that is perfect for short term storage. The data lives client side in the browser window until the window is closed. This allows a user's old answers to be stored when the user navigates away and saved when the user navigates back.

This idea breaks down when if the vet leaves the site and and comes back, all unauthenticated. If we care to save the data, we could build aa system that allows saving of non-authenticated users data. We can do this by saving an instance of the form filling out with a unique id and saving the answers related to that unique id, until and if the user logs in. There are security and other considerations that need to be flushed out.

### Healthcare wizard

As a team, we received a demo from a tool that demonstrated a wizard-style approached to creating a form experience. This demonstration was very insightful for a few reasons. A wizard, in this case, boiled down to a very dynamic form that recommended results based on a user's answers. The team that built the demo did not leverage the current forms system; instead, they opted for a fully customized solution. They did for two main reasons. They weren't building forms, but they were making what was more like a layer on top of a form. And two, and more interesting to the tech team, they found the form system was not that flexible once they started to step out of the box.

### Pro and Con Summary

After exploring the forms library, and for the sake of knowing our options, we have to look at the pros and cons of using this already built library vs building our own

> Pros for using the library

- Out of the box functionality for simple forms
- Save in Progress for Authenticated users
- Validation logic
- Dynamic Forms
- Support of other teams

> Cons for using the library

- Once we try to step outside the built in blocks, things get hairy
- We are constraint to relatively simple forms
- Adding features to the core system would need collaboration with other teams
- We could incur longer development time if we want to do something that is not intended

> Pros for custom tooling

- We are in 100% control of everything
- We only build what we need
- We can extend the system to meet our own use cases

> Cons for custom tooling

- We are in 100% control of everything
- We cannot leverage the existing features (Save in progress, Validation, etc) without some finagling
- We could incur longer development time because we are re-inventing the wheel

---

## Health Data APIs

- [technical findings](health-apis.md)

An inherent part of the problem that we are looking into how we can get veterans' health information. The technical team was the following APIs to research.

As part of this effort, we are building out an [architecture diagram](https://drive.google.com/file/d/1pXB0mH5COT6Hbssk6WBb3zYRNCkwySll/view?usp=sharing)

![Diagram](assets/architecture.v2.png)


To make edits, there is a [png](./assets/Questionnaire%20System%20Diagram.png) that can be uploaded to [draw.io](http://draw.io/). 

- [Developers.va.gov](https://developer.va.gov/explore/health)
- Cerner API
- VistA API

### Developers.va.gov

This API is the closest we have an internal API. This current project will eventually be the source of truth for veteran data. The existing va.gov website is using another part of this API, but not the Health API. In order to leverage this API, the current VA API will need a few tweaks.

This data is very rich and plentiful. According to the product manager(?), Dave Mazik, the information is coming from VistA.

There is one big limitation, there is not write for data associated with this system. All the endpoints and functionality available are read only.

With knowledge, the tech team was able to build an isolated, throw away prototype located at [https://tranquil-eyrie-84225.herokuapp.com/](https://tranquil-eyrie-84225.herokuapp.com/)

Using the Lighthouse Health API, the team was able to display the following:

**Medications**

- [x] Dose
  - _NOTE_: it's in the name as `"note": "Hydrochlorothiazide 6.25 MG",` so it's there, but we have to parse it out
- [x] Frequency
- [x] Prescribing Physician
  - _NOTE_: There is a `_prescriber` field, but for the sample data sets I have seen, it is all `unknown.`
- [x] Status:

**Allergies**

- [x] Reactions
- [x] A predefined list of allergies

**Health issues/Conditions/Chronic Problems**

- [x] List of known Health Issues
- [x] Onset Date

**Procedures or surgeries**

- [x] Procedure or Surgery
- [x] Approximate Date

**Immunizations**

- [x] Immunization Name
- [x] Approximate Date
- [x] Comments

**Other Items**

- Diagnostics and test panels (Lab results)

The full code base [is here](https://github.com/mdewey/VetsApiTest).

We, in theory, could and should use this a primary source of data. There are a few hurdles we will have to get over before we do, however.

First, since this data is secured and sensitive, to get it, we must use a more strict authentication manner, called OAuth, to talk to the lighthouse library. Currently, the VA API does not use that authentication schema to connect to Lighthouse. It is not a hard enhancement, but it is non-trivial. This is a risk that we will need to incur.

Next, we may need to store a few temporary values, such as tokens, states, or other cryptographically secure information. More details are in the technical findings.

For more information: https://github.com/department-of-veterans-affairs/va.gov-team/issues/10715

There is a Rails sample client application for accessing va.developer.gov:
https://github.com/department-of-veterans-affairs/vets-api-clients/tree/master/samples/oauth_rails/vethealth

**Rails sample client app for developer.va.gov**

We have not yet determined how vets-api will be updated to interact with lightouse but
there is a rails sample app that may be useful since vets-api is also a rails app.
The application is found here but it is not working:
https://github.com/department-of-veterans-affairs/vets-api-clients/tree/master/samples/oauth_rails/vethealth
A forked version of the app that works can be found here:
https://github.com/massrb/vets-api-clients/tree/master/samples/oauth_rails/vethealth


**Other FHIR based clients**

Lighthouse is FHIR based

There is a rails FHIR client which also supports DSTU2:
https://github.com/fhir-crucible/fhir_client

This client easily works with this publicly available FHIR sandbox:
https://www.logicahealth.org/solutions/fhir-sandbox/

However, getting it to work with lighthouse is a different problem because lighthouse uses an Open ID Connect layer above OAuth 2 for authorization whereas these tools use just OAuth 2

With regards to FHIR, this list seems useful for a high level look at the resources that FHIR defines
https://www.hl7.org/fhir/resourcelist.html

### Lighthouse health api compatability with va.gov

The health data in lightouse is secured and sensitive. To get the data we must
use a more strict authentication manner. The lighthouse health API has a open ID connect layer on top of OAuth 2.
Currently, the VA API does not use that authentication schema to connect to Lighthouse. It is not a hard enhancement,
but it is non-trivial. This is a risk that we will need to incur. 

 The lighthouse team has been having meetings and discussions to solve this problem which is not a short term problem. We have needed to continue to monitor the slack discussions in lighthouse and to look for updates from Dave Mazik. Shawnee Petrosky and Beau Grantham have also provided some updates. 

### Lighthouse team is working on a solution. 

 As mentioned above, there is an authentication incompatability between VA.GOV and lighthouse. The lighthouse team is working on this

 on 9/15, Shawnee Petrosky indicated that there will need to be some updates needed from the vets-api team and IAM. 
 Lighthouse is currently working on things from their end, and at some point they will need to reconvene with both the vets-api 
 engineering teams and IAM. The expected timeline is Q1 and she said that Amanda or our team could reach out to coordinate update meetings as needed.
 
 Here is a Mural board where the lighthouse team has tried to diagram out some of the complexity of the VA.gov -> Health API use case, and for a general discussion of what authZ methods to support.
 https://app.mural.co/t/adhocvasu2804/m/adhocvasu2804/1596560328863/3afc3bdff2efd491ca56e22e3ce7ac7d81e59318


---

### VistA API

VistA is the core of where a veteran's health data is store. This is a old system writtne in MUMPS that is thankfully hidden behind layers of abstractions. The tech team has a great meeting with Stephen Barrs to start to deep dive into what VistA is and how we can leverage VistA for this project.

During this meeting we explored the layers of abstraction as well as current implementations of reaching (both reading and writing) VistA data. In order for us to link to, we can take advantage of the VA Mobile Framework. This will allow us to use the same RESTful APIs that the suite of existing mobile and web applications use to commination with VistA. This framework of apis is a really good find.

After a brief exploration, there where endpoints that look useful related to medications and scheduling. We did not deep dive into this yet, but once we get settled on a base level product we will do a deep dive in that direction.

The biggest hurdle of this API is the lack of documentation. Its lightly documented at best, and the knowledge base is in current working knowledge. For example, this is the [list of services](https://veteran.apps.va.gov/metadata/v1/services). It works, but there is no way to tell what services actually do.

The best finding from this meeting is that some of these APIs, also pull data from MyHealthyVet.

Concerning scheduling, there are endpoints available for us to get details around the appointment, such time, location and reason.

## Mobile Experience Findings

The DEPO team is currently developing a brand new mobile experience for a veteran. The current experience is fragmented at best. The new app will act as a unifying experience, similar to the philosophy behind `va.gov.` After an interview with the product manager, Sophie Myers, we have learned quite a bit.

The promising parts are that this new app will be integrating with all the APIs we are looking to use, scheduling, reminders, and health data. As of the time of this commit, they plan on using React Native. That's good because we leverage some existing knowledge and components to help integrate easier.

All this promise comes with a slight hurdle. The mobile team is still in early discovery, so integration will not happen anytime soon. Maybe Q4 or 2020 or later at the earliest.

---

## Creating an API Wrapper in the VA API

For some context, integration with a external system can be a challenge. There are many considerations to take into account. Security, availability, analytics are a few problems. Using API Wrapper allows us to address those problems and more in an eloquent way.

The Vets-API uses a faraday to wrap external requests. Our design pattern is to have a Client class that pulls in Configuration from a Config class and a Response class to handle any data conversion before handing the data back to Rails.

The classes that a developer needs to be aware are:

- [Common::Client::Base](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/base.rb)
- [Common::Client::Configuration::REST](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/configuration/rest.rb)
- [Common::Client::Configuration::SOAP](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/configuration/soap.rb)
- [Common::Base](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/models/base.rb)

Examples can be found in the lib directory, [Lighthouse Client Example](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/lighthouse/facilities)

After getting the API's data, we need to use a model to represent the data inside Rails. Using the Lighthouse Facilities Client as an example, we can see an example of a model [Lighthouse::Facilities::Facility](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/facilities/facility.rb).

To present the data to the frontend, the data needs to be serialized into JSON. The tech team recommends using the newer serializer in the system,`FastJsonApi`. The controller
[Lighthouse::Facilities::FacilitySerializer](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/serializers/lighthouse/facilities/facility_serializer.rb) uses the newer and faster serializer.To note, [some controllers](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/serializers/messages_serializer.rb) are still using the older, slower serializer. Though not providing any current issues, this slower serializer should not be used as the team is in the process of converting over to the new serializer.

To better understand how to add a new controller, we have gathered these resources:

- [video tutorial for new external services](https://www.youtube.com/watch?v=V_i8JLXk5rg)
- [slides from video](https://hackmd.io/@z9SepQsSSlu0NKymVGnXTA/r1ZdSNJmr#/)
- [code example linked from video](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/supporting_code)

## CMS Integration

> What does the current CMS step up look like?

Currently the CMS is being used for static webpages and static content. On build, the website is rebuilt from a Drupal instance on every deployment. Currently this looks to fall outside of our needs and scope.

> Can we leverage a CMS for form wording?

Currently no, the Forms team has indicated this is not a feature and to update anything its on someone to create a pull request. This is not on the Forms team road map.

This could be a scalability issues with how many forms and facilities we would to include.

---

## Auth vs Unauthed

We are currently comparing the differences in approach in restricting a user to logging in or not. 

[Full explanation](auth-vs-unauthed.md)

## VA Online Scheduler (VAOS)

VAOS is a new system that is a update to how veterans schedule appointments. This feels naturally close to the problems we are looking to solve so it is worth investigation. The team had a demo of the system. There seem to be some tie in points.

After the initial demo, we have found a list questions that need to be answered.

> Where does the pre-filled data on the contact page come from

> Where does this data end up? And can we call it back, specifically, the reason for coming in.

> Which system does the user data come from?

> For upcoming appointments screen, what would it take to integrate a form link there?

[VAOS details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/vaos.md)

[VAOS data fields returned](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/data%20from%20VAOS.md)

[Status indicators and states of an appointment](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/data%20from%20VAOS.md#status-indicators-and-states-of-appointment)

[Contact Info saved to VAOS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/data%20from%20VAOS.md#contact-info-saved-to-vaos)

---

## Putting Chief Complaint into Patient Generated Data

[See here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/chief%20complaint%20field%20v2.md)

## [When is an Encounter and ID created](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/data%20from%20VAOS.md#an-encounter-with-an-id-is-created-in-vista-here)

---

## VEText Integration

VETText is a push notification system used for reminding veterans of upcoming appointments. Currently this is text format.  Eventually this will be integrated with the [mobile app](#mobile-experience-findings), but for now its currently texted message based.  

Currently this system is still in the early stages.  There is no decision tree, not replying and centered around a more robust delivery system. 

This system could be a strong integration once we get our proof of concepts running. For the team to send a message, with a custom text, link and/or data there is an API available that will send a message to the vet at that time. This means we can schedule messages to go out, if we build our own reminder service. 

Currently, VEText is listening and sending 10, 7, 3 and 1 days out and if we wanted to integrate with that existing system, the team is open to collaboration. 

Their current data integration is via VistALink. They have a direct link into the VistA systems via each thing. After chatting with Shane Elliot, their could be a way to create a Appointment event system. The way their system works is that, using VistALink, they are checking every day (pulling data) for new appointments and creating reminders based on that. 

When more concrete use cases start to form, the team can reach out to Shane for further answers

## Analytics Investigation

From a technical perspective, we can tie in to Google Analytics(GA) to record data. This data includes 2 fields, `payload`, and a `key`. The key is a unique identifier to what happened. For example, `CLIPBOARD_STARTED` would be a key to an event in our system.A `payload` is a JSON object that can contain unstructured data into what we are tracking. This is flexible and up to us. 


Technically, there are utilities already found in `src/platform/monitoring` to help aid in faster development. A good example is located at `src/applications/disability-benefits/all-claims/content/incidentDate.jsx`

When the team is ready to track data points in GA, we need to reach out to the analytics team, headed by Joanne Esteban to get more details specifics. 

As far as post appointment survey. There is currently no unified system that does this. Certain clinics are doing there own surveys. These surveys are not through the va.gov, but a different system. This could also be a good form to start with, using the form system, because this could tie into the notification system and other systems that we are looking at.    


## User Whitelist 


Using Flipper, the feature toggle system currently place in the Vets API, we can restrict features using a 4 different ideas. 

1. Just a cross cutting on/off toggle. This toggle will turn the feature in questions on and off completely 
2. Whitelist users; This list allows us to set a list of users that we want the feature to show for only those users
3. `% of time`; This would allow us to set how often a feature is enable. For example, setting a value of `25%`, means the feature will be available `25%` to all users
4. `% of users`; This allows to set a percentage of users that will see the feature. This acts as a whitelist that is based on the number of users. 

Configure looks simple - just using the flipper admin panels in staging and production. The system already has feature toggles set ups and this is already integrated. We get this for almost free. The only work required here is on the front end to wrap the features in the appropriate feature flags. 


## VA Gov research using vets-web frontend

The vets-web front end mocks some of the data, that is it has
fake data that it uses locally. This may is important to note when using the
the front end to research the functionality of VAOS or other backend functionality.
The same thing may be happening in the staging environment. There are some settings in vets-web that can
turn of mocking where in the code there is a USE_MOCK_DATA constant

## Outstanding issues and unknowns

- Stephen Barrs indicated that a script would be used to create the FHIR based questionnaire on the MAP PGD which would occur on the MAP side. If there is a desire to update the questionnaire or use it to define a dynamic form then it should be noted that a resource that has access to the internal MAP would be needed to change that. 
- If the front end needs to access MAP through vets-api to obtain derrive a form layout based on data in the FHIR based questionnaire, then keep in mind that if that connections fails then the front end may not be able to display the form correctly unless that is cached etc.
- It has not been worked out how to associate a given veteran with a questionnaire response, typically a ICN number is used in the URLs but it also has to be known what record id's in the fhir data or otherwise would be part of that association


