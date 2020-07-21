# Clipboard Technical Discovery [WIP]

[Insert team description/mission/north star]

The technical team sought to discover how we can integrate and leverage current systems and architecture. The team investigated two big ideas - the forms library, existing health APIs, and other minor ideas documented below.

This `README` serves as a high-level, non-technical intro to the research findings, including findings, successes, and missing steps.

- [Clipboard Technical Discovery [WIP]](#clipboard-technical-discovery-wip)
  - [Outstanding questions](#outstanding-questions)
  - [Forms Discovery](#forms-discovery)
    - [Current Forms System](#current-forms-system)
    - [Healthcare wizard](#healthcare-wizard)
  - [Health Data APIs](#health-data-apis)
    - [Developers.va.gov](#developersvagov)
  - [Mobile Experience Findings](#mobile-experience-findings)
  - [Creating an API Wrapper in the VA API](#creating-an-api-wrapper-in-the-va-api)

---

## Outstanding questions

[WIP]

- Where is the data going?
- Can we pull in data from an external API?

---

## Forms Discovery

- [technical findings](forms.md)

### Current Forms System

The VA uses [a fork](https://github.com/department-of-veterans-affairs/vets-json-schema) of the [React Json Schema Forms](https://github.com/rjsf-team/react-jsonschema-form). This JSON based approach allows for quick and simple forms. This library is something we leverage, even though there are some limitations.

Using this system, we can create forms that contain:

- create a simple form that includes drops, radios, and text fields (and others).
- Handle required fields and other validation; both hardcoded and dynamic logic
- Create custom Widgets

![captured (1)](https://user-images.githubusercontent.com/1793923/86625609-57103880-bf93-11ea-830a-477e91c1ac8f.gif)

[Full documentation here](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms/form-tutorial-basic/)

One of the north stars of the team is to make the clipboard process as frictionless as possible. For that reason, we undertook to answer a few key questions.

> Can we use the authenticated user's data in a form?

Yes, we can, if the user is logged in, we access basic demographic information.

> Can we force authentication on a form?

Yes. This feature is built into the existing forms system. We can custom the flow as well if need be.

> Can we suggest a user login part ways through a form?

This one was tricky, but by utilizing session storage, we can have a form that a user can start unauthenticated, then be prompted to be authenticated and then continue the form using the data for that user.

_warning: ~1 and a half minute gif_
![early-demo-1](https://user-images.githubusercontent.com/1793923/87829151-6bceb500-c84c-11ea-8c8d-f772f28dc8ca.gif)

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

### Healthcare wizard

As a team, we received a demo from a tool that demonstrated a wizard-style approached to creating a form experience. This demonstration was very insightful for a few reasons. A wizard, in this case, boiled down to a very dynamic form that recommended results based on a user's answers. The team that built the demo did not leverage the current forms system; instead, they opted for a fully customized solution. They did for two main reasons. They weren't building forms, but they were making what was more like a layer on top of a form. And two, and more interesting to the tech team, they found the form system was not that flexible once they started to step out of the box.

---

## Health Data APIs

- [technical findings](health-apis.md)

An inherent part of the problem that we are looking into how we can get veterans' health information. The technical team was the following APIs to research.

- [Developers.va.gov](https://developer.va.gov/explore/health)
- Cerner API
- VistA API

### Developers.va.gov

This API is the closest we have an internal API. This current project will eventually be the source of truth for veteran data. The existing va.gov website is using another part of this API, but not the Health API. In order to leverage this API, the current VA API will need a few tweaks.

This data is very rich and plentiful. According to the product manager(?), Dave Mazik, the information is coming from VistA.

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

---

## Mobile Experience Findings

The DEPO team is currently developing a brand new mobile experience for a veteran. The current experience is fragmented at best. The new app will act as a unifying experience, similar to the philosophy behind `va.gov.` After an interview with the product manager, Sophie Myers, we have learned quite a bit.

The promising parts are that this new app will be integrating with all the APIs we are looking to use, scheduling, reminders, and health data. As of the time of this commit, they plan on using React Native. That's good because we leverage some existing knowledge and components to help integrate easier.

All this promise comes with a slight hurdle. The mobile team is still in early discovery, so integration will not happen anytime soon. Maybe Q4 or 2020 or later at the earliest.

---

## Creating an API Wrapper in the VA API

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
