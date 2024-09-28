## FE Notes on GIBS EVSS API docs

### GET /education/chapter33/v1

```
Chapter33EducationResponse {
  messages (Array[Message], optional),
  chapter33EducationInfo (Chapter33Education, optional)
}
```

 * chapter33 info could be undefined

```
Chapter33Education {
  firstName (string),
  lastName (string),
  nameSuffix (string, optional),
  dateOfBirth (string, optional),
  vaFileNumber (string, optional),
  activeDuty (boolean)booleanDefault:false,
  veteranIsEligible (boolean)booleanDefault:false,
  regionalProcessingOffice (string, optional),
  eligibilityDate (string, optional),
  delimitingDate (string, optional),
  percentageBenefit (integer, optional),
  originalEntitlement (EntitlementType, optional),
  usedEntitlement (EntitlementType, optional),
  remainingEntitlement (EntitlementType, optional),
  enrollments (Array[Enrollment], optional), Max. Items:100
}
```

  * required fields: first name, last name, activeDuty, veteranIsElgible
  * optional fields: suffix, dob, va file #, regional processing office, eligibility date, delimiting date, percentage, original entitlement, used entitlement, remaining entitlement, enrollments
  * enrollments list could be undefined, or given and empty

```
EntitlementType {
  months (integer),
  days (integer)
}
```

  * both months and days are required

```
Enrollment {
  beginDate (string),
  endDate (string, optional),
  facilityCode (string, optional),
  facilityName (string, optional),
  participantId (string, optional),
  trainingType (string, optional) = ['UNDER_GRAD', 'GRAD', 'NON_COLLEGE', 'FLIGHT', 'OJT', 'APPRENTICESHIP', 'CORRESPONDENCE'], stringEnum:"UNDER_GRAD", "GRAD", "NON_COLLEGE", "FLIGHT", "OJT", "APPRENTICESHIP", "CORRESPONDENCE",
  termID (string, optional),
  hourType (string, optional),
  fullTimeHours (integer, optional),
  fullTimeCreditHourUnderGrad (integer, optional),
  vacationDayCount (integer, optional),
  onCampusHours (number, optional),
  onlineHours (number, optional),
  yellowRibbonAmount (number, optional),
  status (string, optional),
  amendments (Array[Amendment], optional), Max. Items:100
}
```

  * only the begin date is required; all else is optional
  * amendments array can be undefined, or exist and be empty
  * should these be enums? hourType, status

```
Amendment {
  residenceHours (number, optional),
  distanceHours (number, optional),
  yellowRibbonAmount (number, optional),
  type (string),
  status (string, optional),
  changeEffectiveDate (string, optional)
}
```

  * only the amendment type is required; all else is optional
  * should  status be an enum?

