# Data Grid v2.0 PRD (Product Requirements Document)
<br>

## Pattern Outcome 
The Data Grid v2.0 pattern enables the product team to customize grid interactions. After interacting with the data, the user is able to synthesize the information and make decisions about next steps.<br/>
<br>

## Requirements in scope
1. Data Grid API
2. affixing column view (aka column stays in view during horizontal scrolling)
   - [see slack for this priority agreement ](https://dsva.slack.com/archives/C04DMDC3TS8/p1734548335437739)
3. quick filter (aka multi-selection filtering)
4. date picker (aka date selection affordance)
5. Meets accessibility scores by WCAG 2.1 (Section 508) (update to 2.2)
6. Compatible and _can_ be adopted by VADS and USWDS
    * https://design.va.gov
    * https://designsystem.digital.gov
<br>

## Pilot Partners
### 1. Lung Cancer Screening (LCS)
The Lung Cancer System app’s outcome is to help the clinician review the patient’s profile at a glance so that the clinician can determine their next step.
<br>

#### LCS Users
- Power user(s): 
- Other users:
<br>

#### LCS Data Values in Scope _(needs review)_
| Data Value  | Format Type |
| ------------- | ------------- |
| PatientName  | string  |
| Last4Ssn  | string  |
| Dob  | date  |
| Age  | number  |
| CanScore  | string  |
| Station  | number  |
| RadiologyProcedure  | string  |
| LatestLungRADS  | string  |
| LatestHealthFactor  | string  |
| HealthFactorDate  | date  |
| LatestExamDate  | date  |
| NextScanDate  | date  |
| LdctOrderStatus  | string  |
| LdctOrderStartDate  | date  |
| LdctOrderingProvider  | string  |
| PCP  | string  |
| Team  | string  |
| GroupAssignment  | string  |
| TPY  | number  |
| QuitLT15Years  | string  |
| SmokingStatus  | string  |
| NonLdctOrderDate  | date  |
| NonLdctProcedure  | string  |
| NonLdctOrderStatus  | string  |
| CommunityCarePatient  | string  |
| SCode  | singleSelect  |
| QuitLT15Years  | string  |
| AtbsAddedDate  | date  |
| DaysFromHfDate  | date  |
| DaysUntilRemovalFromAtbs  | number  |
<br>

#### LCS Data Schema for Testing
[LCS Data Schema](https://github.com/department-of-veterans-affairs/clinical-design-system/blob/main/src/lib/tests/mock/dataGrid/nestedData.tsx)
<br>

### 2. Task Manager (TM)
The Task Manager app’s outcome (will get this from confluence)
<br>

#### TM Users
- Power user(s):
- Other users:
<br>

#### TM Data Values in Scope
**1. ITask**
| Data Value  | Format Type |
| ------------- | ------------- |
| id  | number  |
| patientId  | number  |
| patientName  | string  |
| ssn  | string  |
| dob  | Date  |
| taskType  | string  |
| due  | Date, undefined  |
| status  | TaskStatus  |
| creator  | string  |
| owner  | string  |
| updated  | Date  |
| comments  | string, undefined |
<br>

**2. ITaskType**
| Data Value  | Format Type |
| ------------- | ------------- |
| id  | number  |
| taskType  | string  |
<br>

**3. ITeam**
| Data Value  | Format Type |
| ------------- | ------------- |
| id  | number  |
| teamName  | string  |
| facility  | string, undefined  |
| members  | string  |
| created  | Date  |
| isCurrUserInTeam  | boolean  |
<br>

#### TM Data Schema for Testing
_pending_
<br>

## Epics
1. [#971 Data Grid 2.0](https://github.com/department-of-veterans-affairs/clinical-design-system/issues/971)
<br>

## Research
_(words words, lorem ipsum and link to mural?)_
<br>

## Design
- https://www.figma.com/design/PoOrLUAvo6SbIJbIJNAlM5/Datagrid?node-id=6246-3
- https://crispy-succotash-9k23jen.pages.github.io/?path=/docs/components-grid--docs
<br>
