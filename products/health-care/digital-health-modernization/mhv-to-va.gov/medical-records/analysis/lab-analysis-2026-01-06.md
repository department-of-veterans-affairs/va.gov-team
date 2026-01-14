# Analysis: VA Lab Test Categories, Types, Allowed Codes, and Filtering (vets-api & vets-website)

---

## 1. All Possible Lab Categories for VistA and Oracle Health (Cerner/Oracle)

| Category Code | Category Name                | VistA? | Oracle? | Notes                                              |
|---------------|-----------------------------|:------:|:-------:|----------------------------------------------------|
| CH            | Chemistry                   | Yes    | Yes     | Routine blood/urine chemistry                      |
| HEM           | Hematology                  | Yes    | Yes     | CBC, platelets, ESR, etc.                          |
| MI            | Microbiology                | Yes    | Yes     | Cultures, sensitivities                            |
| SP            | Surgical Pathology          | Yes    | Yes     | Tissue/biopsy/histology                            |
| CY            | Cytology                    | Yes    | Yes     | Pap smears, aspiration cytology                    |
| EM            | Electron Microscopy         | Sometimes| Sometimes| Rare, subspecialty                                 |
| BB            | Blood Bank                  | Yes    | Yes     | Transfusion, antibody screen                       |
| CO            | Coagulation                 | Sometimes| Yes    | PT, aPTT, INR, D-Dimer                             |
| SER           | Serology                    | Sometimes| Yes    | Infectious, autoantibody, Hep, HIV, etc.           |
| PHA           | Pharmacology (Drug Levels)  | Sometimes| Yes    | Vancomycin, Digoxin, etc.                          |
| TOX           | Toxicology                  | Yes    | Yes     | Drug screens, ethanol, toxins                      |
| MISC/LAB      | Miscellaneous/Lab (default) | Yes    | Yes     | Other lab results                                  |
| PATH          | Pathology                   | Yes    | Yes     | Unified category, especially in OH                  |
| RADIOLOGY     | Imaging                     | Sometimes| Yes    | Not a lab, but can appear in crossmapping          |

- Most sites cover all major types, but “HEM”, “PATH”, “TOX”, etc., may be grouped under larger “LAB” in some systems.


---

## 2. Lab Types (“Tests”) Within Categories for VistA and Oracle Health

### Sample VistA Lab Types/Test Names

| Category   | Example Test Types                                                               |
|------------|----------------------------------------------------------------------------------|
| Chemistry  | Glucose, Creatinine, Cholesterol, BUN, Sodium, Potassium, Liver enzymes, A1c     |
| Hematology | CBC, Platelet, Hemoglobin, Hematocrit, ESR, Reticulocyte, Smears                 |
| Microbiology| Blood, urine, sputum cultures, AFB, Gram Stain, Sensitivity, MRSA               |
| Pathology  | Site-defined histology (prostate biopsy, colon polyp, etc.)                      |
| Cytology   | Pap smear, pleural/ascitic fluid cytology                                        |
| Electron Microscopy| Muscle biopsies, renal biopsies                                          |
| Blood Bank | ABO/Rh, Antibody screen, Crossmatch, Coombs test                                 |
| Coagulation| PT, INR, aPTT, Fibrinogen, D-dimer                                               |
| Serology   | HIV, HBsAg, RPR, Hepatitis, ANA, HCV                                             |
| Pharmacology| Vancomycin, Gentamicin, Lithium, Phenytoin, Digoxin                             |
| Toxicology | Drug screen panel, Acetaminophen, Ethanol, Salicylate                            |
| Misc       | Any site-defined test not mapped specifically                                    |

### Sample Oracle Health (Cerner) Lab Types

- Mostly matches above, but typically many more LOINC-mapped and SNOMED-mapped specialized tests.
- Test panels often more granular; often hundreds of codes per major category.

---

## 3. How vets-api and VA.gov/vets-website Filter Lab Tests

### vets-api Filtering:
- **Status**: Only results with allowed status (`final`, `amended`, `corrected`, `appended`) are passed to the front end.
- **Present Data**: Must have a `code` (LOINC/local) AND result data/observation.
- **No category-based filtering**: All types and categories pass through as long as above conditions are met.

**Excluded:**
- Any lab/test result with status: `preliminary`, `registered`, `partial`, `cancelled`, `entered-in-error`, `unknown`.
- Malformed/broken records (e.g., no code/no data).

### vets-website Filtering:
- Does **not** filter out specific lab categories or types. Shows whatever is available in data from vets-api.
- User can filter (date range, search term), but not by category or test type.


---

## 4. Enumerating “Allowed” Lab Test Codes

**Definition:** Allowed codes are those supplied for finalized/completed (“ready for patient”) results—that is, whatever appears as the code on labs/tests in VistA, Cerner/Oracle Health, or VA Unified Health Data, where:
- Record is in an allowed status;
- There is a non-empty `test_code` field (typically LOINC).

**How to enumerate:**
- Export the union of all LOINC codes and site/local codes used for finalized lab results from production FHIR, VistA, or Cerner test catalogs.
- Download [LOINC Lab Subset CSV](https://loinc.org/downloads/loinc/) for standard codes.
- For VA-specific codes, request a “VA LOINC mapping” table or extract from Unified Health Data adapters.

**Allowed test codes change as new tests are ordered/implemented, so the list is dynamically updated as EHRs evolve.**

---

## 5. Sample Allowed Lab Test Codes Table

| LOINC Code | Local Code | Category     | Test Name                  | System(s)                  |
|------------|------------|--------------|----------------------------|----------------------------|
| 4548-4     | VISTA-GLU-1| Chemistry    | Hemoglobin A1c             | VistA, Cerner, OH, LOINC   |
| 6299-2     | VISTA-K    | Chemistry    | Potassium                  | VistA, Cerner, LOINC       |
| 2345-7     |            | Chemistry    | Glucose                    | VistA, Cerner, LOINC       |
| 718-7      |            | Hematology   | Hemoglobin                 | VistA, Cerner, LOINC       |
| 600-7      |            | Coagulation  | PT (Prothrombin Time)      | VistA, Cerner, LOINC       |
| 58410-2    | CNR-MRSA   | Microbiology | MRSA by PCR                | Cerner, LOINC              |
| 16132-3    |            | Blood Bank   | ABO group & Rh             | VistA, Cerner, LOINC       |
| ...        | ...        | ...          | ...                        | ...                        |

_For more, see [LOINC Laboratory Codes](https://loinc.org/downloads/loinc/) and VA mapping internal docs._

---

## 6. FHIR Standard: Signature Field Support by Domain

| FHIR Resource                 | Native Signature Field? | Sign-off/Responsibility Field | Digital Signature via Extension? | Notes                                                   |
|-------------------------------|:----------------------:|------------------------------|:-------------------------------:|---------------------------------------------------------|
| DiagnosticReport (Labs)       | No                     | resultsInterpreter, performer| Yes                             | Status "final" = released; no built-in cryptographic sig|
| Observation (Vitals)          | No                     | performer                    | Yes                             | Responsibility only, no signature                       |
| AllergyIntolerance            | No                     | recorder, asserter           | Yes                             |                                                        |
| DocumentReference (Notes)     | No                     | author, attester             | Yes                             | Can embed signed PDF/doc; not default                   |
| Immunization                  | No                     | performer                    | Yes                             |                                                        |
| Condition                     | No                     | asserter                     | Yes                             |                                                        |
| MedicationRequest/Statement   | No                     | recorder, requester, informationSource | Yes                     |                                                        |

---

## 7. vets-website: Lab Category/Type Filtering Review

**Summary findings:**
- **No categories or test types are filtered out by vets-website**. All categories (chemistry, micro, path, radiology, etc.) defined in `labTypes` are rendered if present.
- The only filtering applied is:
    - what is supplied via vets-api (which is pre-filtered by status/data presence);
    - user-driven UI filtering (date, pagination, etc.).
- There is **no hard-coded business logic that excludes any lab category or type** on the client.

| Category / Type         | Filtered out in vets-website? | Condition            |
|-------------------------|:-----------------------------:|----------------------|
| Chemistry/Hematology    | No                            | Always included      |
| Microbiology            | No                            | Always included      |
| Pathology               | No                            | Always included      |
| Radiology               | No                            | Always included      |
| Specific test types     | No                            | Always included      |

**References:**  
- [`src/applications/mhv-medical-records/util/constants.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/mhv-medical-records/util/constants.js)
- [`src/applications/mhv-medical-records/util/pdfHelpers/labsAndTests.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/mhv-medical-records/util/pdfHelpers/labsAndTests.js)
- [`labsAndTests` reducer](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/mhv-medical-records/reducers/labsAndTests.js)

---

# Conclusion

- **All patient-appropriate and finalized lab categories and test types are rendered on VA.gov if they are present and permitted by status/data rules in vets-api.**
- **Filtering before the client/UI occurs only at the API layer** (status/content).
- **No digital signature is required or exposed for clinical lab records**—"final"/"complete" status is used as the readiness proxy.

---

*Prepared January 2026, for VA health modernization documentation needs.*
