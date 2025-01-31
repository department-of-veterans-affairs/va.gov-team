# Data Grid MVP PRD (Product Requirements Document)

## Data Grid Pattern Outcome 
The Data Grid pattern enables viewing and augmenting large data set. All data can be sorted, edited, and filtered. All data is viewable in a single view without navigating away from the data grid. After interacting with the data, the user is able to synthesize the information and make decisions about next steps.<br/>
<br>

## Requirements in scope
1. The Data Grid pattern will have affordances to present large data set on an entity
2. columns
3. rows
4. pagination
5. cell editors
    - sorting
    - filtering
    - ordering
    - pinning
    - selection
8. Meets accessibility scores by WCAG 2.1 (Section 508) (update to 2.2)
9. Compatible and _can_ be adopted by VADS and USWDS
    * https://design.va.gov
    * https://designsystem.digital.gov
<br>
  
## Not in Scope
Note: Prioritized as post-MVP iteration
1. quick filter (aka multi-selection filtering)
2. date picker (aka date selection affordance)
3. affixing column view (aka column stays in view during horizontal scrolling)
   - [see slack for this priority agreement ](https://dsva.slack.com/archives/C04DMDC3TS8/p1734548335437739)
4. expose the table state
<br>

## Pilot Partners
### 1. Lung Cancer Screening (LCS)
The Lung Cancer System app’s outcome is to help the clinician review the patient’s profile at a glance so that the clinician can determine their next step.
<br>

#### LCS Users
- Power user(s): LCS coordinator (RN, PA, NP)
- Other users: n/a
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
- Power user(s): co-located Teams (teams in a single site)
- Other users: n/a
- Out of Scope team: remote teams
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
1. [#603 Data Grid MVP](https://github.com/orgs/department-of-veterans-affairs/projects/1556/views/3?pane=issue&itemId=88937871&issue=department-of-veterans-affairs%7Cclinical-design-system%7C603)
2. [#874 Data Grid - Accessibility](https://github.com/department-of-veterans-affairs/clinical-design-system/issues/874)
<br>

## Research
- Design Discovery: https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1732294922350/bdc7dd116749c0c5b60c31c2e3544ecefe0b1b67
- Technical Discovery: https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1738345863261/30f1c468a1624514b5a9319a74a088609cbc4c18
<br>

## Design
- https://www.figma.com/design/PoOrLUAvo6SbIJbIJNAlM5/Datagrid?node-id=6246-3
- https://crispy-succotash-9k23jen.pages.github.io/?path=/docs/components-grid--docs
<br>
