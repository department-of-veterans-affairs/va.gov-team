# Data Grid 2.0 PRD (Product Requirements Document)
<br>

## Pattern Outcome 
The Data Grid v2.0 pattern enables the product team to customize grid interactions. After interacting with the data, the user is able to synthesize the information and make decisions about next steps.<br/>
<br>

## Requirements in scope
1. exposing list of interactions
2. sticky column view (aka column stays in view during horizontal scrolling)
   - [see slack for this priority agreement ](https://dsva.slack.com/archives/C04DMDC3TS8/p1734548335437739)
   - important for a11y
3. adding, deleting, and editing rows
   - https://muhimasri.com/blogs/add-remove-react-table-rows/
4. cell editor for select
5. cell editor for date picker (aka date selection affordance)
6. visual tagging in the table
7. reordering columns (dragging and dropping columns)
   - https://tanstack.com/table/latest/docs/guide/column-ordering
8. quick filter (aka multi-selection filtering) (need to validate the variant)
   - https://borstch.com/snippet/implementing-multi-select-filters-in-react-tanstack-table
9. Meets accessibility scores by WCAG 2.1 (Section 508) (update to 2.2)
<br>

## Not in Scope



## Pilot Partners
### 1. Lung Cancer Screening (LCS)
The Lung Cancer System app’s outcome is to help the clinician review the patient’s profile at a glance so that the clinician can determine their next step.
<br>

**Desired Affordances**
- manually adding/deleting data
- manually adding/deleting/moving/selecting rows
- creating custom filters
- exporting state
- restoring state
- accessing client side filter
- accessing client side sorting
- accessing selected row(s)
- grid options changes (changing column definition array on the fly)
- get row by Id
- get all rows
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

**Desired Affordances**
- manually adding/deleting data
- manually adding/deleting/moving rows
- creating custom filters
- "control over the rows (saved states instead calling again with each )
- ability to remove or delete a row"
- ability to add rows from the app
- get data for row selection
- column definitions, what data they hold, column name, how the data is rendered
- print out all of the rows viewable in the screen
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
1. [#971 Data Grid 2.0](https://github.com/department-of-veterans-affairs/clinical-design-system/issues/971)
<br>

## Research
_(words words, lorem ipsum and link to mural?)_
<br>

## Design
- https://www.figma.com/design/PoOrLUAvo6SbIJbIJNAlM5/Datagrid?node-id=6246-3
- https://crispy-succotash-9k23jen.pages.github.io/?path=/docs/components-grid--docs
<br>
