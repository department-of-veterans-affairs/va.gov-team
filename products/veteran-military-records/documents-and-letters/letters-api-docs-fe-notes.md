## FE Notes on Letters EVSS API docs


### GET /letters/v1

```
LettersResponse {
  messages (Array[Message], optional),
  letters (Array[Letter]), Min. Items:1, Max. Items:10,
  letterDestination (LetterDestination, optional)
}
```

  * letter list array required and is never empty
  * letter destination may not be defined
    * but, strangely, if it exists, it has exactly one required field (address 1)
    * seems wrong (see notes below)

```
Letter {
  letterName (string),
  letterType (string) = ['benefit_summary', 'benefit_summary_dependent', 'benefit_verification', 'civil_service', 'commissary', 'proof_of_service', 'service_verification', 'medicare_partd', 'minimum_essential_coverage', 'certificate_of_eligibility'], stringEnum:"benefit_summary", "benefit_summary_dependent", "benefit_verification", "civil_service", "commissary", "proof_of_service", "service_verification", "medicare_partd", "minimum_essential_coverage", "certificate_of_eligibility"
}
```

  * both letter name and type are required

```
LetterDestination {
  foreignCode (string, optional),
  country (string, optional),
  militaryPostOfficeTypeCode (string, optional),
  addressLine1 (string),
  addressLine2 (string, optional),
  addressLine3 (string, optional),
  city (string, optional),
  state (string, optional),
  zipCode (string, optional),
  militaryPostalTypeCode (string, optional),
  fullName (string, optional)
}
```

  * why is addressLine1 the only required field?
    * and why is there a letterDestination.addressLine1.invalid if it's required?
    * question for BE to ask EVSS

### GET /letters/v1/letterBeneficiary

```
LetterBeneficiary {
  messages (Array[Message], optional)
  militaryService (Array[MilitaryService], optional), Max. Items:100
  benefitInformation (BenefitInformation)
}
```

  * military service may be undefined or be an empty array
  * benefit info may be undefined

```
MilitaryService {
  branch (string),
  characterOfService (string) = ['HONORABLE', 'OTHER_THAN_HONORABLE', 'UNDER_HONORABLE_CONDITIONS', 'GENERAL', 'UNCHARACTERIZED', 'UNCHARACTERIZED_ENTRY_LEVEL', 'DISHONORABLE'], stringEnum:"HONORABLE", "OTHER_THAN_HONORABLE", "UNDER_HONORABLE_CONDITIONS", "GENERAL", "UNCHARACTERIZED", "UNCHARACTERIZED_ENTRY_LEVEL", "DISHONORABLE",
  releasedDate (string, optional),
  enteredDate (string)
}
```

  * released date may be undefined; is that because the person may still be serving?
  * everything else is required
  * should branch be an enum?

```
BenefitInformation {
  serviceConnectedPercentage (integer, optional),
  awardEffectiveDate (string, optional),
  monthlyAwardAmount (number, optional),
  hasServiceConnectedDisabilities (boolean, optional)booleanDefault:false,
  hasNonServiceConnectedPension (boolean, optional)booleanDefault:false,
  hasSurvivorsPensionAward (boolean, optional)booleanDefault:false,
  hasSurvivorsIndemnityCompensationAward (boolean, optional)booleanDefault:false,
  hasIndividualUnemployabilityGranted (boolean, optional)booleanDefault:false,
  hasChapter35Eligibility (boolean, optional)booleanDefault:false,
  hasSpecialMonthlyCompensation (boolean, optional)booleanDefault:false,
  hasAdaptedHousing (boolean, optional)booleanDefault:false,
  hasDeathResultOfDisability (boolean, optional)booleanDefault:false
}
```

  * all fields are optional




