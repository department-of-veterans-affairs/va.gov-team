## Add or Remove Dependents VA Form 21-686c: Design Readme

### Initiatives 2022 - 2025
1. 686c/674 Updates
     - [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/form_updates/Initiative-Brief-686-674-Form-Updates.md)
     - Goals:
          - Online form parity with the paper form
          - Update components from v1 to v3 (latest at this time)
          - Accessibility, IA, and flow enhancements.[See Design System components breakdown](#) | ([See findability assessment](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/findability.md)) 
     - Flows (Mural)
          - [Existing](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1687976281975/2a9c6ca9ea6d955afa7977c777bbb72b15280903?wid=143-1731689779797)
          - [Proposed](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1687976281975/2a9c6ca9ea6d955afa7977c777bbb72b15280903?wid=0-1737739883303) 
     - [Proposed designs](https://www.figma.com/file/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?type=design&node-id=8%3A9&mode=design&t=AcIv03oHGZlFDriH-1) (Figma)
  
2. Digitalization of Verification of Dependents (VA Form 21-0538)
     - [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/initiative-brief-dependent-verification-tool.md)
     - Goals:
          - Digitize VA Form 21-0538
          - Enhance IA and findability ([See findability assessment](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/findability.md)) 
          - Conduct user research ([See 2025 Verification research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/research/2025-02-dependents-verification-mvp-research/2025-02-dependents-verification-mvp-research-findings.md))
          - 
     - Flows (Mural)
          - [Proposed flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=0-1716382766670)
          - Dependents IA strategy: [Our discovery](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=91-1737736233308) | [CAIA'S Feedback](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=522-1737736233308)
     - [Proposed design](https://www.figma.com/design/bvj72inycD0iZkuCbjYTWL/Dependent-Verification-MVP?node-id=6-990&t=J5l70J8VIMYLrm4q-1) (Figma)
3. 
   








### Design System Components

|Component Name|Version|Version Live|Page|Owner|Notes|
|--------------|-------|------------|----|-----|-----|
|[Breadcrumbs](https://design.va.gov/components/breadcrumbs#default)|V3|V1||Platform||
|[Alert](https://design.va.gov/components/alert)|V3|V1| |Platform|default (info), success, sign in or tool prompt|
|[Button](https://design.va.gov/components/button/#examples---v3)|V3|V3||Platform| |
|[Checkbox-single](https://design.va.gov/components/form/checkbox#examples---single---v3)|V3|V1 |Platform| |
|[Checkbox-tile group](https://design.va.gov/components/form/checkbox#tile-1)|V3|New addition|Step 1|Platform|New design from Platform recommendations|
|[Additional info](https://design.va.gov/components/additional-info#default)|V3|Unclear-no changes||Platform|Identical to V1, does not exist in USWDS |
|[Radio button](https://design.va.gov/components/form/radio-button#default)|V3|V1| |Platform| |
|[Privacy statement](https://design.va.gov/components/form/privacy-agreement#examples---v3)|V3|V1|Review Page|Platform||
|[Memorable date](https://design.va.gov/components/form/memorable-date#month-select)|V3|V1||Platform|Month select|
|[Text input](https://design.va.gov/components/form/text-input#examples---v3)|V3|V1| |Platform| |
|[Select](https://design.va.gov/components/form/select#examples---v3)|V3|V1| |Platform| |
|[Progress bar segmented](https://design.va.gov/components/form/progress-bar-segmented#default)|V3|V1||Platform|Default|
|[Process list](https://design.va.gov/components/process-list#examples---v3)|V3|V1|Intro Page|Platform| |
|[Accordion](https://design.va.gov/components/accordion#examples---v3)|V3|V1||Platform||
|[Card](https://design.va.gov/components/card#default---white-with-border)|V3|V1|[List&Loop](https://design.va.gov/patterns/ask-users-for/multiple-responses#how-to-design-and-build---single-page)|Platform|Not a card exactly, but we should use the white with border style; gray backgrounds cause contrast issues with hint text|
|[File input](https://design.va.gov/components/form/file-input#accepts-only-specific-file-types)|V3|V1|Spouse, Child under 18|Platform| |
|[Address block](https://design.va.gov/components/address-block#examples)|V3|New addition|Spouse, Child under 18|Platform| |
|[Number input](https://design.va.gov/components/form/number-input#hint-text)|V3|New addition|674|Platform|Identical to V1, does not exist in USWDS|
|[Conditionally revealed fields](https://design.va.gov/patterns/ask-users-for/relationship#conditionally-revealed-fields)|V3|V1|Radio buttons "Other" answers|Platform|[VADS pattern in Figma](https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?type=design&node-id=2988%3A24492&mode=design&t=pfavvPC0uZ0kM5nE-1)|
|[Information on file](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated#communicate-information-that-is-on-file)|V3|V1|Veteran info|Platform|This is a pattern but I don't see the info component referenced elsewhere|
|[Statement of truth](https://design.va.gov/components/form/statement-of-truth#examples---v3)|V3|New addition|Review Page|Platform||
