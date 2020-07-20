# Clipboard Technical Discovery [WIP]

[Insert team description/mission/north star]

The technical team sought to discover how we can integrate and leverage current systems and architecture. The team investigated two big ideas - the forms library, existing health APIs, and other minor ideas documented below.

This `README` serves as a high-level, non-technical intro to the research findings, including findings, successes, and missing steps.

- [Clipboard Technical Discovery [WIP]](#clipboard-technical-discovery-wip)
  - [Outstanding questions](#outstanding-questions)
  - [Forms Discovery](#forms-discovery)
    - [Healthcare wizard](#healthcare-wizard)
  - [Health Data APIs](#health-data-apis)
    - [Developers.va.gov](#developersvagov)
  - [Mobile Experience Findings](#mobile-experience-findings)

---

## Outstanding questions

[WIP]

---

## Forms Discovery

- [technical findings]('./forms.md)

### Healthcare wizard

As a team, we received a demo from a tool that demonstrated a wizard-style approached to creating a form experience. This demonstration was very insightful for a few reasons. A wizard, in this case, boiled down to a very dynamic form that recommended results based on a user's answers. The team that built the demo did not leverage the current forms system; instead, they opted for a fully customized solution. They did for two main reasons. They weren't building forms, but they were making what was more like a layer on top of a form. And two, and more interesting to the tech team, they found the form system was not that flexible once they started to step out of the box.

---

## Health Data APIs

- [technical findings]('./health-apis.md)

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

## Mobile Experience Findings

The DEPO team is currently developing a brand new mobile experience for a veteran. The current experience is fragmented at best. The new app will act as a unifying experience, similar to the philosophy behind `va.gov.` After an interview with the product manager, Sophie Myers, we have learned quite a bit.

The promising parts are that this new app will be integrating with all the APIs we are looking to use, scheduling, reminders, and health data. As of the time of this commit, they plan on using React Native. That's good because we leverage some existing knowledge and components to help integrate easier.

All this promise comes with a slight hurdle. The mobile team is still in early discovery, so integration will not happen anytime soon. Maybe Q4 or 2020 or later at the earliest.
