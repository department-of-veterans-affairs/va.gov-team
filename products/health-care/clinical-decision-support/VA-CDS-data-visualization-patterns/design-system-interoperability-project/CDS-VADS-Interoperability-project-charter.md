### Project Charter
#### Project Title
**Phased Approach to Enhance Interoperability between Clinical Design System (Clinical DS) and VA Design System (VADS)**
#### Project Sponsor
Amanda Klausmeier

#### Project Purpose
Creation of web components during the Data Viz contract period for newly created components and patterns is being deprioritized in favor of a phased approach to achieve better interoperability between the Clinical Design System (Clinical DS) and the VA Design System (VADS). This strategy aims to create a foundation that empowers the Clinical DS to move towards the long-term vision of utilizing VADS web components and enables increased opportunities to contribute back to the VA Design System.

#### Scope Statement
The project will:
1. Implement a phased approach to consuming and contributing design tokens between Clinical DS and VADS
2. Replace duplicate React components within Clinical DS with VADS React-binding components
3. Assess the feasibility of converting Clinical DS-specific React components into web components

#### Requirements
1. **Phased Approach:**
    - **1. Consume design tokens from VADS**
      - a. Contribute design tokens back to VADS that are Clinical DS-specific
      - b.Replace any hard-coded USWDS (U.S. Web Design System) values with VADS tokens
    - **2. Replace any React component in Clinical DS that is duplicative of a VADS component with the VADS version (React binding version):**
      - a. Begin with an experiment – import one component that currently does not exist in Clinical DS from VADS, in collaboration with the VA design system team. Communications should include Matt Dingee and Amanda Klausmeier before and during this phase.
      - b. Next experiment - import one component that currently exists in Clinical DS from VADS, in collaboration with the VA design system team. Communications should include Matt Dingee and Amanda Klausmeier before and during this phase. (amended Sep 4, 2025)
      - c. If the experiment is successful, incorporate additional components and replacements.
        - If unsuccessful, create a feedback loop to collaborate on how to unblock issues
    - **3. Convert any Clinical DS-specific React component to a web component, where feasible:**
      - a. **ON HOLD** – As stated in the Data Viz contract, the team is blocked from moving forward until Phase 1 and 2 are completed and deemed successful by OCTO. All parties are aware that achieving this within the current contract period of performance is unlikely.

#### Acceptance Criteria
1. Provide a synthesis of the process and the final results of each phase.

#### Communication Plan
- **Key Stakeholders:**
   - Amanda Klausmeier
   - Matt Dingee

- **Communication Methods:**
  - Regular updates via Slack channel (#vads-vacds), email, and/or team meetings
  - Documentation and reporting on the process and findings
  - Collaborative sessions with the VA design system team

#### Project Timeline
- **Phase 1: Consuming Design Tokens from VADS**
  - Expected Start Date: July 23, 2025
  - Expected End Date: October 27, 2025
- **Phase 2: Replace React components in CDS that is duplicative of a VADS component with the VADS version (the React binding version)**
  - **Experiment 1: Importing a net new component**
    - Expected Start Date: August 11, 2025
    - Expected End Date: _TBD_
  - **Experiment 2: Importing a component currently in Clinical DS and in use by product teams**
    - Expected Start Date: [Date, contingent on the success of Phase 2, Experiment 1]
    - Expected End Date: _TBD_
- **Phase 3: Converting React Components to Web Components**
  - Expected Start Date: [Date, contingent on the success of Phases 1 & 2]
  - Expected End Date: _TBD_

#### Risks and Issues
- Potential delays due to dependencies between phases
- Risk of unsuccessful experiments requiring additional iteration and collaboration
- Constraints within the current contract period of performance
  - including the delivery of minimum patterns/components as the highest priority and over this project

#### Assumptions
- All stakeholders will be available for necessary collaboration and communication
- Successful completion of each phase is required before progressing to the next phase


#### Document History
- Created on: Sep 4, 2025
- Last Updated on: Sep 4, 2025










