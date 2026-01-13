# va-sort Design Decisions
Last updated: 11-10-2025

- [ADR: 001 - DECISION LABEL](#ADR-XXX---Decision-Label)
- [ADR: 002 - DECISION LABEL](#ADR-XXX---Decision-Label)
- [ADR: 003 - DECISION LABEL](#ADR-XXX---Decision-Label)


## ADR 001 - (TBD) Allow two sort components--one standalone, one combined with Filter

### Status: TBD
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

### Open Questions

<br>

   

## ADR 002 - Current placement of Sort creates an issue where 
_Copy an ADR section for each decision made_

### Status: [STATUS]
_Describe the status of the decision. Options are "proposed", "accepted", "rejected", "deprecated", "superseded"._

- Date issue raised: [DATE]
- Decision date: [DATE]

### Context
Current placement of Sort below the Filter creates an issue where its focus can be skipped if a filter is applied because guidance indicates that focus should move to the Results Description (which is after the Sort component). A SR user would have to navigate backwards to use the Sort.
- <img width="300" height="693" alt="image" src="https://github.com/user-attachments/assets/59a81281-275d-42e9-a4c6-19ea565c2d75" />



### Decision
_Describe the change we are proposing/doing._
- Option A: Combine filter and Sort
- Option B: Move Sort below Results description.
 - <img width="200" height="657" alt="image" src="https://github.com/user-attachments/assets/f70cc17b-7233-4cd3-8646-d8a994f2e59e" />




### Consequences
_Describe the consequences of the decision. This could include positive and negative impacts, as well as any risks and how they will be mitigated._



### Open Questions
_Include any open questions that may still be lingering_

