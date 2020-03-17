# Risk Analysis Matrix Template

## Instructions
1. Create a list of risks in the table of risks and number each.
1. Place the reference number for each risk in the matrix below given your assessment of its impact and probability
1. Use the guidance in the risk rating table to assess how serious each risk is
1. Use brainstorming to examine possible risk mitigations
1. Use brainstorming to examine possible challenges to risk mitigations

---

| Table of Risks |             |             |                            |
|----------------|-------------|-------------|----------------------------|
|Reference       |Risk Rating  |Description  |Realized Risk Consequences  |
|1               |      15     | Incorrect information (static content) could be displayed on a facility's information page. | Veterans are misinformed |
|2               |      16     | Bad markup could break the daily build process. (Example: pasted from Word with formatting) | CI/CD pipeline is broken for entire platform |
|3               |      6      | Poorly formatted input from editors could break widgets. | Certain facility's information is rendered improperly by broken widgets |
|4               |     20      | Editors publish inaccessible content to VA.gov | Veterans with accessibility issues are unable to get the information that they need |
|5               |     20      | Misplaced confidence in automated testing tools may create false negative results that allow undected escaped defects | Veterans are presented with unusable or incorrect facility information |

---


| Matrix |                   |             |              |              |            |             |
|--------|-------------------|-------------|--------------|--------------|------------|-------------|
|        |                   | Probability |
|        |                   | (1) Rare    | (2) Unlikely | (3) Possible | (4) Likely | (5) Certain |
| Impact | (1) Insignificant |             |              |              |            |             |
|        | (2) Minor         |             |              |       3      |            |             |
|        | (3) Significant   |             |              |              |            |      1      |
|        | (4) Major         |             |              |              |     2      |             |
|        | (5) Severe        |             |              |              |     4,5    |             |

---

| Risk Rating  | Description                                                                                                      |
|--------------|------------------------------------------------------------------------------------------------------------------|
| 1-3          | Low: May require consideration in any future changes to the work area or processes, or can be fixed immediately. |
| 4-9          | Moderate: May require corrective action through planning and budgeting process.                                  |
| 10-19        | High: Requires immediate corrective action.                                                                      |
| 20-25        | Extreme: Requires immediate prohibition of the work process and immediate corrective action.                     |

---

## Proposed risk mitigations
1. Give editors a checklist of self-QA activities to perform prior to publishing
1. Create a peer review process for editors to check each other's work
1. Staff up QA personnel for the changes made by these editors 
1. "Red team the CI/CD pipeline" -- Send broken code / markup / content through the pipeline to ensure that all automated quality checks correctly complain


## Expected challenges to risk mitigations
1. CI/CD flow prevents QA activities fo CMS changes outside of production environment
1. The volume of proposed changes will be challenging for even dedicated QA personnel to keep up with
