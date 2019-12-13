# AMA Form Data Fields

The three forms in scope are:
- (**HLR**) VA Form 20-0996 Request for Higher Level Review: https://www.va.gov/decision-reviews/forms/higher-level-review-20-0996.pdf
- (**SC**) VA Form 20-0995 Supplemental Claim Application: https://www.va.gov/decision-reviews/forms/supplemental-claim-20-0995.pdf
- (**NOD**) VA Form 10182 Notice of Disagreement: https://www.va.gov/decision-reviews/forms/board-appeal-10182.pdf

## Form Fields

### Identity and Case Structure

| Field Name                      | Field Type                    | SC  | HLR | NOD | Prefill* | Conveyed** | Note 
| ------------------------------- | ----------------------------- | --- | --- | --- | -------- | ---------- | ----
| Veteran's Name: First           | Text                          | X   | X   | X   | MVI      |            | MVI is authoritative for identity data, though variations do occur across systems; need to decide on MVI vs CorpDB for identity
| Veteran's Name: Middle Initial  | Text                          | X   | X   | X   | MVI      |            |
| Veteran's Name: Last            | Text                          | X   | X   | X   | MVI      |            |
| Veteran's SSN                   | Text                          | X   | X   | X   | MVI      |            |
| VA File Number                  | Text                          | X   | X   | X   | CorpDB   | X          | In theory MVI should have the CorpDB correlation, but in some cases it does not, in which case CorpDB should be used directly 
| Veteran's Date of Birth         | Date (mm/dd/yyyy)             | X   | X   | X   | MVI      |            |
| Veteran's Service Number        | Text                          | X   | X   |     |          |            |
| Insurance Policy Number         | Text                          | X   | X   |     |          |            |
| Claimant's Name                 | Text                          | X   | X   | X   | MVI      | X          | Conveyed to Caseflow Intake as the VBMS ID of the claimant, who must be in VBMS
| Claimant's Date of Birth        | Date (mm/dd/yyyy)             |     |     | X   | MVI      |            |
| Claimant Type                   | Checkboxes                    | X   | X   |     |          |            |
| Claimant Type Other Text        | Text                          | X   | X   |     |          |            |
| Mailing Address: Street 1       | Text                          | X   | X   | X   | Vet360   |            | Vet360 is authoritative for address, phone, and email. NB: The NOD has an open textbox for the entire address
| Mailing Address: Street 2       | Text                          | X   | X   | X   | Vet360   |            | SC and HLR call this "Apt./ Unit Number"
| Mailing Address: City           | Text                          | X   | X   | X   | Vet360   |            |
| Mailing Address: State          | Text                          | X   | X   | X   | Vet360   |            |
| Mailing Address: Country        | Text                          | X   | X   | X   | Vet360   |            |
| Mailing Address: ZIP +4         | Text                          | X   | X   | X   | Vet360   |            |
| I Am Homeless                   | Checkbox                      |     |     | X   |          |            |
| Telephone Number                | Text                          | X   | X   | X   | Vet360   |            | Vet360 stores 5 phone numbers; this one likely correlates to "home"
| Email Address                   | Text                          | X   | X   | X   | Vet360   |            |
| Representative's Name           | Text                          | X   | X   | X   |          |            | 
| Representative's Telephone      | Text                          | X   |     |     |          |            |

### Issues to be Reviewed, and Case Options

| Field Name                      | Field Type                    | SC  | HLR | NOD | VA SOR*  | Conveyed** | Note 
| ------------------------------- | ----------------------------- | --- | --- | --- | -------- | ---------- | ----
| Benefit Type                    | Checkboxes (limit 1)          | X   | X   |     |          | X          |
| HLR: Same Office                | Bool                          |     | X   |     |          | X          |
| HLR: Informal Conference        | Bool                          |     | X   |     |          | X          |
| HLR: Informal Conference Times  | Checkboxes (limit 2)          |     | X   |     |          |            |
| NOD: Board Review Option        | Checkboxes (limit 1)          |     |     | X   |          | X          |
| Opt In from SOC/SSOC            | Bool                          | X   | X   | X   |          | X          |
| Issues: Text                    | Text \*\*\*                   | X   | X   | X   | CorpDB   | X          | While the issue text will land in Caseflow, the issues that the Veteran can choose among should come from CorpDB/ VBMS when possible
| Issues: Date                    | Date (mm/dd/yyyy)             | X   | X   | X   | CorpDB   | X          | 
| Issues: Attach Addl Sheets      | Checkbox (limit 1)            |     |     | X   |          |            | 
| SC: New and Relevant Records    | Documents                     | X   |     |     |          |            | Claimant can upload multiple documents. Unclear the parameters and limitations here; more research is required
| SC: Agency Records Name         | Text                          | X   |     |     |          |            | Claimant can enter multiple "VA MEDICAL CENTER(S) (VAMC), VA TREATMENT FACILITIES, OR FEDERAL DEPARTMENTS OR AGENCIES THAT HAVE NEW AND RELEVANT EVIDENCE"
| SC: Agency Records Location     | Text                          | X   |     |     |          |            |
| SC: Agency Records Date         | Date (mm/dd/yyyy)             | X   |     |     |          |            |
| Signature                       | (Signature)                   | X   | X   | X   |          |            |
| Date Signed                     | Date (mm/dd/yyyy)             | X   | X   | X   |          |            |
| Alternate Signature             | (Signature)                   | X   | X   |     |          |            |
| Alternate Signature Name        | Text                          | X   | X   |     |          |            |
| Alternate Date Signed           | Date (mm/dd/yyyy)             | X   | X   |     |          |            |

### System Fields: Not Present on Forms

| Field Name                      | Field Type                    | SC  | HLR | NOD | VA SOR*  | Conveyed** | Note 
| ------------------------------- | ----------------------------- | --- | --- | --- | -------- | ---------- | ----
| Receipt Date                    | Date                          | X   | X   |X    |          | X          |
| VACOLS Issue to Close           | UUID?                         | X   | X   |X    |          | X          | If the claimant opts their legacy issues into AMA, the VACOLS record (usually identified by the Intake Professional) will be automatically closed. Research needed on how to handle this in an online flow.
| Issues: ID                      | UUID?                         | X   | X   |X    |          | X          | If the issue comes from VBMS via the EVSS service it will have an ID which should be conveyed. The Veteran can write anything in the free text box, however, and may write down a nonrated issue with no possible ID.

\* This is the System of Record for prefill purposes. In many cases CorpDB has a version of this field but in the best of all possible worlds we should check and standardize across systems. NB: Where SOR fields are blank either I'm not sure which systems is authoritative or there is no need to prefill this data. In any case, the authoritative system should be confirmed before proceeding.

\*\* Is the field represented in the Caseflow Intake interface (i.e. expected to be conveyed to the Caseflow DB)?

\*\*\* Claimant can enter multiple issues, with one issue date per issue

