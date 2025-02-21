# Data Grid 2.0 PRD (Product Requirements Document)
<br>

## Pattern Outcome 
The Data Grid 2.0 pattern will have more interaction capabilities. The consumer of this pattern will be able to customize interactions for their user experience.
<br>

## Requirements in scope
- **P1:** prioritized into scope. Must have. 
- **P2:** not in scope. Next in priority. Can be explored for smaller scope. Otherwise, can be contributed back by product teams
- **P3:** not in scope. Lowest in priority. Can be explored for smaller scope. Otherwise, can be contributed back by product teams

| Affordance  | Requirement | User Story  | Priority Level  |
| ------------- | ------------- | ------------- | ------------- |
|   | Meets accessibility scores by WCAG 2.2 (Section 508)  | When consuming the Data Grid pattern, I want to enable accessibility affordances so that all user types are able to interact with my product.  | P1  |
| Table state  | exporting state  | As a Data Grid user, I need to access the current state of the table and return its value so that I can use it.  | P1  |
| Table state  | importing state  | As a Data Grid consumer, i need to restore the grid to a previous state so that I can return to the desired grid state.  | P1  |
| Selecting _one_ row  | client side selecting row  | As a data grid user, I need to be able to select one row so that I can interact with it  | P1  |
| Selecting _one_ row  | programmatically select a row  | As a data grid developer, I need to able to programmatically select a row so I can interact with it directly  | P1  |
| Selecting _multiple_ rows  | expand select row to select rows  | As a data grid user, I need to be able to select multiple rows so that I can interact with it  | P1 or P2  |
| Selecting _multiple_ rows  | accessing selected row(s) programmatically  | As a data grid developer, I need to able to programmatically select multiple rows so I can interact with it directly  | P1 or P2  |
| Edit row  | client side add edit  | As a data grid user, I need to be able to edit an entire row's data so that I can change all fields inside of a given row.  | P1  |
| Add a row  | client side add row  | As a data grid user, I want to add rows to the table so that I can add new information.  | P1  |
| Add a row  | programmatically insert row in the data set  | As a data grid developer, I want to programmatically add rows to the table so that I can interact with it directly.  | P1  |
| Delete a row  | client side delete row  | As a user of the data grid, I need to be able to delete a row so that I can delete existing data  | P1  |
| Filter  | accessing client side filter  | As a data grid developer, I need to be able to use filters function from the toolbar so that I can interact with the table  | P1  |
| Sorting  | custom sorting in the columns  |   | P2  |
| Managing errors UI  | showing errors UI   | As a data grid user that makes an incorrect input or interaction, I want to receive feedback so that I know to make the necessary update  | P1  |
| Managing the column definition  | data Grid onChange logic at the column definition level  | When using the Data Grid, I want to have a function to save data at the cell level so that I can retrieve information about the data that has changed.  | P2  |
| Managing the column definition  | grid options changes (changing column definition array on the fly)  |   | P2  |
| Cell editor enhancements  | date picker cell editor  |   | P2  |
| Cell editor enhancements  | add type checks to cell editor  |   | P3  |
| Managing columns  | Client side moving column  | As a user of the data grid, I need to able able to drag and drop columns so I can reorganize columns in a different order  | P3  |
| Managing columns  | making columns sticky  | When a column is pinned, I want that column to stay on the page so that I continue to reference it as I am horizontally scrolling.  |   |
| Header row  | sticky header as a default view  | As a data grid user, I want the header row to be always sticky so that I can reference it as I scroll vertically.  | P3  |
| A11y for search  | indicate that the search "autocompletes" for Screen Reader  | As a user using a Screen Reader, I need an indication that Search "autocomplete" upon typing so that I know what to expect when using the search field.  |   |
| Colors for metadata tagging  | Tagging & colors in Data Grid  | As a data grid user, I want to a reliable color system so that the information is easily and consistently conveyed.  |   |
|   | Data grid Figma component - toolbar  |   |   |
| Toolbar enhancement  | quick filter (aka multi-selection filtering)  |   |   |
<br>

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
