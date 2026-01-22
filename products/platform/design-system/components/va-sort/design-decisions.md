# va-sort Design Decisions
Last updated: 01-15-2026

- [ADR: 001 - Add a Filter and Sort variant to Search Filter component](#adr-001---add-a-filter-and-sort-variant-to-search-filter-component)
- [ADR: 002 - Swap position of Sort component and results description](#adr-002---swap-position-of-sort-component-and-results-description)
- [ADR: 003 - Remove mention of Sort in the results description](#adr-003---remove-mention-of-Sort-in-the-results-description)


## ADR 001 - Add a Filter and Sort variant to Search Filter component

### Status: Proposed
_Describe the status of the decision. Options are "proposed", "accepted", "rejected", "deprecated", "superseded"._

- Date issue raised: 01/13/2026
- Decision date: [DATE]

### Context
Some VFS teams would like to modify the Search Results template so that the Search Bar is more closely associated with the results. The problem is that the Sort component currently occupies that space. This team is proposing that we combine Filter and Sort to resolve this. Combining Sort and Filter could resolve the issue where focus skips Sort when Sort is used with Filter.

### Decision
_Describe the change we are proposing/doing._


### Consequences
_Describe the consequences of the decision. This could include positive and negative impacts, as well as any risks and how they will be mitigated._
- Contraindicated by original ticket (user must navigate through Filter options to Sort when they simply want to Sort)
- Filter is placed left-side rail which occupies a lot of horizontal space. Using this type of design for just Sort uses space inefficiently.


<br>

   

## ADR 002 - Swap position of Sort component and results description

### Status: ✅Accepted 

- Date issue raised: 01-15-2026
- Decision date: 01-15-2026, Design Sync (Derek, Barb, Jeana, Carol)

### Context
Current placement of Sort below the Filter creates an issue where its focus can be skipped if a filter is applied because guidance indicates that focus should move to the Results Description (which is after the Sort component). A SR user would have to navigate backwards to use the Sort. [Link to Discussion](https://dsva.slack.com/archives/C01DBGX4P45/p1768317611978929?thread_ts=1768243854.226399&cid=C01DBGX4P45)
- <img width="300" height="693" alt="image" src="https://github.com/user-attachments/assets/59a81281-275d-42e9-a4c6-19ea565c2d75" />


### Decision
Move Sort below Results description.
 - <img width="200" height="657" alt="image" src="https://github.com/user-attachments/assets/f70cc17b-7233-4cd3-8646-d8a994f2e59e" />
 This will likely manifest as an update to guidance for Sort placement.


### Consequences
- None identified by Accessibility
- None identified by Design
  - Data point: [Sutter Health](https://www.sutterhealth.org/find-provider-results?query=%22dermatology%22&verticalKey=healthcare_professionals) implements the same approach



## ADR 003 - Remove mention of Sort in the results description

### Status: ✅Accepted 

- Date issue raised: 01-15-2026
- Decision date: 01-15-2026, Slack Discussion (Derek, Jeana, Sarah Horton, Shawn Collins)

### Context
Current results description mentions the sort which is redundant (the component will announce sort state). It is also awkward to mention that results are being sorted in a particular way before the sort controls are shown (in the reading order). This was originally defined to maintain consistency with VA mobile app but mobile app is required to reflect sort state in results description because it is hidden in modal. Va-sort itself acts as the visual indicator.

### Decision
Remove mention of Sort in the results description.



