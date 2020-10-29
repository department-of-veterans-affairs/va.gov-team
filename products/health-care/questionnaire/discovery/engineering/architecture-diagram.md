# Architecture Diagram [WIP ]

![Diagram](assets/architecture.v2.png)

[link to draw.io diagram](https://app.diagrams.net/#G1fzAkVQ7snSI8eWeBemhIeCWT0TZKDQK1)

## Legend
### A : Communication with MAP to get Appointment details 

The Vets APi will use an exchange of JWT to create a secure connection. Using this connection, we can get access to an appointment's details based on on the AppointmentID. The questionnaire trigger will send us the appointment Id. 

This connection is how we are accessing VistA Scheduling data. 

This appointment will not be in FHIR format, but could be 

### B: Lighthouse 

Our preliminary idea is to use the Lighthouse Health API to access a vet's medical history. This API connects us to VistA health data. Not yet, but someday, we plan on using Lighthouse Health API to pull in items such as medications, allergies. and other important health information.

As of Sept 2nd, the Lighthouse team is looking into how to solve the Cerner integration problem. 

We have future plans (in pink) to use the FHIR abilities of Lighthouse. Lighthouse plans to have have read and write of FHIR data for appointments, questionnaires and other relevant healthcare information.  The APIs are not yet created, but we will start to utilize them when they are released. When the APIs are available in Lighthouse, we will decided when and if to move away from MAP. 

Check out more in out [tech doc](README.md)

### C: Writing Questionnaire data.  

*This is the most fuzzy for me and will need to most work*

The Vets APi will use an exchange of JWT to create a secure connection.

These endpoints use the FHIR spec to communicate. We plan on using the [questionnaire](https://www.hl7.org/fhir/questionnaire.html) to create [QuestionnaireResponses](https://www.hl7.org/fhir/questionnaireresponse.html) that will take the form of JSON Objects, that looks like this example object, note that not every field is required: 

```js
{
  "resourceType" : "QuestionnaireResponse",
  // from Resource: id, meta, implicitRules, and language
  // from DomainResource: text, contained, extension, and modifierExtension
  "identifier" : { Identifier }, // Unique id for this set of answers
  "basedOn" : [{ Reference(CarePlan|ServiceRequest) }], // Request fulfilled by this QuestionnaireResponse
  "partOf" : [{ Reference(Observation|Procedure) }], // Part of this action
  "questionnaire" : { canonical(Questionnaire) }, // Form being answered
  "status" : "<code>", // R!  in-progress | completed | amended | entered-in-error | stopped
  "subject" : { Reference(Any) }, // The subject of the questions
  "encounter" : { Reference(Encounter) }, // Encounter created as part of
  "authored" : "<dateTime>", // Date the answers were gathered
  "author" : { Reference(Device|Practitioner|PractitionerRole|Patient|
   RelatedPerson|Organization) }, // Person who received and recorded the answers
  "source" : { Reference(Patient|Practitioner|PractitionerRole|RelatedPerson) }, // The person who answered the questions
  "item" : [{ // Groups and questions
    "linkId" : "<string>", // R!  Pointer to specific item from Questionnaire
    "definition" : "<uri>", // ElementDefinition - details for the item
    "text" : "<string>", // Name for group or question text
    "answer" : [{ // The response(s) to the question
      // value[x]: Single-valued answer to the question. One of these 12:
      "valueBoolean" : <boolean>,
      "valueDecimal" : <decimal>,
      "valueInteger" : <integer>,
      "valueDate" : "<date>",
      "valueDateTime" : "<dateTime>",
      "valueTime" : "<time>",
      "valueString" : "<string>",
      "valueUri" : "<uri>",
      "valueAttachment" : { Attachment },
      "valueCoding" : { Coding },
      "valueQuantity" : { Quantity },
      "valueReference" : { Reference(Any) },
      "item" : [{ Content as for QuestionnaireResponse.item }] // Nested groups and questions
    }],
    "item" : [{ Content as for QuestionnaireResponse.item }] // Nested questionnaire response items
  }]
}

```

The MAP API supports FHIR Specs for questionnaires. When the VETS API sends data to the FHIR API on MAP using the above format. It will reference a Questionnaire that is designated per location

*initial thoughts with current understanding*

**Questions about FHIR**
- When and where is the `Questionnaire` initially defined and stored?
  - *Current Answer:* In PGD
  

## Outstanding Topics

- How are doing the triggering system? 
  - How do we know a questionnaire needs to be filled out
- How are integrating with a facility? 
- How are are setting up Appointment types? 
