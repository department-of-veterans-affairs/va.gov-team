# Product Requirements Document (PRD)
## Integration of VADS Design Tokens into Clinical Design System (Clinical DS) 
- **Start Date:** 
- **End Date:** 
- **Status:** In Progress

## Overview
The Clinical Design System (Clinical DS) is importing the VA Design System (VADS) design tokens. This integration aims to streamline the design token management process by importing and utilizing VADS tokens, thereby reducing the need for creating redundant tokens within Clinical DS.

## Background


## Goals
- Assess and replace existing hard-coded design tokens within CDS with their corresponding VADS tokens
- Create a more unified and efficient design token system
- Contribute back to VADS by offering unique tokens developed within CDS

## Out of Scope
- none identified at this time


## User Story
As the Clinical Design System, I want to import VADS tokens so that I only need to create net new tokens.
#### Functional Requirements
1. Assess and replace the hard-coded tokens within Clinical DS with their VADS counterparts
  - 1.1 Replace typography tokens with those from VADS.
  - 1.2 Replace color tokens with those from VADS.
  - 1.3 Replace spacing tokens with those from VADS.
2. Identify and create new unique design tokens specific to CDS and offer them as a contribution to VADS.

#### Non-Functional Requirements
- **Performance:** The integration of VADS tokens should not negatively impact the performance of CDS
- **Scalability:** The token system should be scalable to accommodate future additions and modifications
- **Usability:** The replacement and integration of tokens should maintain or improve the current design consistency and user experience within CDS
- **Documentation:** Comprehensive documentation must be provided detailing the tokens replaced, the new tokens introduced, and the process followed

#### Acceptance Criteria

- Hard-coded tokens will be replaced with VADS imported tokens
- Tokens unique to the Clinical DS will be offered as contribution to VADS

## Epic
[#1717 Importing VADS tokens into Clinical Design System](https://github.com/department-of-veterans-affairs/clinical-design-system/issues/1717)


## Resources
[rough draft assessement of tokens](https://dsva.slack.com/docs/T03FECE8V/F097V2H04GG)
