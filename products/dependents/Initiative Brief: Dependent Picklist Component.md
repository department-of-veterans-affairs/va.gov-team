# Initiative Brief: Dependent Picklist Component

## Outcome Summary
Veterans can select known dependents from a picklist when verifying or removing dependents, rather than manually re-entering names. This reduces input errors, increases confidence, and enables more reliable downstream automation.

**Related/Associated product(s)**
- 686c/674 Remove Dependents Flow
- Dependent Verification MVP

## Problem
- Veterans are required to manually type in the names of dependents to remove or verify, even though these individuals are already on record with VA.
- Manual entry increases cognitive load for Veterans and opens the door to small but critical typos (e.g. “John A. Smith” vs “Jon Smith”), which can trigger downstream claim routing errors or prevent automation.
- Both usability and back-end reliability are being compromised by redundant and error-prone data entry.
- Veterans who need to reinstate an inactive dependent (for example, a spouse removed after divorce but now re-married to the Veteran, or a child who aged out at 18 and is being added back via Form 674 for school attendance) must currently re-enter all personal details from scratch; this adds friction and creates new opportunities for data mismatches.

## Desired User Outcomes
- Veterans can easily select existing dependents from a picklist and proceed with confidence that the information matches VA records.
- Veterans experience less frustration and avoid redundant data entry when removing or verifying dependents.
- Veterans can reinstate a previously inactive dependent by selecting the person—clearly marked as “inactive” with last-removed date—from the same picklist, avoiding any manual re-entry.

## Undesired User Outcomes
- Veterans make unintentional errors when typing names, leading to delays or incorrect processing.
- Veterans abandon the flow due to confusion or friction.

## Desired Business Outcomes
- Claims and form submissions that rely on dependent identification can be reliably processed without manual offramping.
- Decreased rate of claim errors due to name mismatches or unrecognized dependents.

## Undesired Business Outcomes
- Continued manual review and intervention for common, avoidable data mismatches.
- Increased call center traffic related to status checks or error resolution.

---

## Measuring Success

| KPI                                           | Baseline Value | Target Value         | Actual Value | Link to Data Source |
|----------------------------------------------|----------------|-----------------------|--------------|---------------------|
| % of submissions with name mismatch errors   | TBD            | ↓ measurable drop     |              |                     |
| Completion rate of remove/verify flows       | TBD            | ↑ post-implementation |              |                     |
| % of submissions that require manual routing | TBD            | ↓ post-implementation |              |                     |
| Avg. time on dependent selection step        | TBD            | ↓ post-implementation |              |                     |

---

## Discovery
### Assumptions/Risks
- The Veteran-facing name and the name stored in internal systems (e.g. RBPS, VBMS) are aligned well enough to drive picklist selection logic.
- Veterans will recognize and trust the list of names presented as their current dependents.
- We can build the picklist to degrade gracefully in edge cases (e.g. no known dependents, name mismatches, data freshness issues).
- Downstream systems will treat picklist-driven selections as more reliable than free-text input.

### Recommendations
- Conduct initial discovery and usability testing to assess viable approaches and define the scope of a Picklist MVP.
- Design and implement a picklist component for dependents, leveraging available data on file.
- Integrate this component into the Dependent Verification MVP as a fast follow after launch.
- In a second phase, expand integration into the 686c “remove dependent” flow.
- Define fallback paths when no known dependents are found or picklist data cannot be loaded.
- Instrument user selection and error patterns for ongoing refinement.

---

## Screenshots
TBD — wireframes or prototypes in development.

---

### Communications
- Team Name: Benefits Dependent Experience Team
- GitHub Label(s): dependents-benefits
- Slack channel: benefits-dependents-management
- Product POC: Jacob Worrell

### Stakeholders
- OCTO: Sanja Bajovic, Ben Guhin Delphine
- VBA: Kevin Schneider
- RBPS: Caleb Roberts
