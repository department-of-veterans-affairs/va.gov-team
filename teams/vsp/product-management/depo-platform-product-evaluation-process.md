# DEPO Platform Product Evaluation Process
https://github.com/department-of-veterans-affairs/va.gov-team/projects/21

## Purpose

The DEPO Platform has a large mission and thus has lots of things it could conceivably pursue and build. We often get ideas from customers and platform team members for new ideas or enhancements that would add value. The purpose of the product evaluation process is to leverage a [concrete set of criteria](https://docs.google.com/spreadsheets/d/1W5FVsMDI7gTxVkoFmJXZaLRGd8mmyJDXXejeBmscKo0/edit#gid=1904403801) to determine the objective value of these ideas as they come in, which then informs prioritization and roadmapping, and helps us report out Platform goings on to stakeholders.

## Structure

Our product board will follow Kanban-like principles. These include:

1. Fixed columns with clear descriptions.
1. Some columns have Work in Progress (WIP) limits to manage our workload and communicate realistically what we can get done.
1. All new cards must enter at the first column.
1. Cards may only move from one column to the next. Columns cannot be skipped, with the exceptions of the "On Hold" and "Not doing" columns.

Cards will be evaluated and moved bi-weekly at our platform product meeting.

## Column details

The columns on our product board will be arranged as follows:

**Intake columns**
- Not Groomed
- Decision Needed
- On Hold

**Active columns**
- Backlog
- Up Next (WIP)
- Current (WIP)
- Recently Complete

**Archive columns**
- Done
- Not Doing

(WIP) - These columns have Work in progress limits. The values are still TBD.

### Not groomed

**Acceptance criteria**: New cards begin in this column by creating a new epic issue in the /va.gov-team repo using the "VSP Initiative" issue template. At a minimum, the title and purpose should be filled in.

**Description**: This is where new work lands as individual cards. Work arrives in lots of different ways (e.g. something we're told to do; a gap we identify during other work; a suggestion from a customer) and if it fits with our DEPO Platform mission, it should be added to this column as a new card. Minimal detail is needed at this stage; just a title and purpose so it can be followed up on later. By creating a card in this column, you are not signing up to "own" the work and will not be held responsible for completing it. However, you will be expected to speak to it at our weekly product meeting until someone else takes over ownership. During this phase the DEPO owner needs to be identified and groom the card to fill out the rest of the issue template so this card can progress to the **Decision Needed column**.

### Decision needed

**Acceptance criteria**: Cards may only be moved to this column when some discovery has been done and the card issue template is filled out. A DEPO owner must be identified. We will dedicate a portion of each weekly product meeting to reviewing cards in the decision column.

**Description**: There is expected to be a good bit of grooming to a card that happens before a card is accepted into this column. The description of the problem should be fleshed out and refined and stakeholders identified. During the meeting we will run the initiative through our value matrix rubric to determine if this card moves forward into one of the columns: **On Hold**, **Backlog**, or **Not Doing**.

### On Hold

**Acceptance Criteria**: Cards are moved to this column after a decision. No additional grooming is required. Cards in this column do not need to be assigned to a team. 

**Description**: Cards in this column have been determined to align with DEPO Platform priorities, but are on hold and not planned for development. Reasons landing in this column include the need for additional stakeholder buy in or the work has a dependency on another product. Basically, the work has not "ripened" into something that we are able to consider taking on. If we find that lots of cards are piling up in this column, we should consider altering the acceptance criteria for the **Decision needed** so that cards are not prejudged before all the necessary elements are in place.

### Backlog

**Acceptance criteria**: Cards may only be moved to this column when a decision to pursue this work has been made during our weekly product meeting, the DEPO lead has been confirmed, and a team has been assigned.

**Description**: This column holds cards that we want to pursue, but cannot move into the **Up Next** column because the team assigned to work on this is at full capacity. While cards are in this column, the team responsible for them should prep the cards so that when capacity becomes available, the card will be ready to be moved. This includes ensuring the team has the necessary competencies to undertake the work, defining acceptance criteria for the work, and managing stakeholder expectations.

### Up next

**Work in progress limit**: 33 (this should equal 3x the number of teams we have available)

**Acceptance criteria**: The team assigned to take on the work has less than three cards in this column. Each team may have up to three cards in this column at any time.

**Description**: Cards in this column are assigned to an individual product team and are the next thing on that team's roadmap. This column communicates to the teams and our stakeholders our upcoming work.

### In progress

**Work in progress limit**: 22 (this should also equal 2x the number of teams we have available)

**Acceptance criteria**: Cards may only be moved to this column when the team assigned to take on the work has capacity to do so. All acceptance criteria for prior columns must be met and should be reconfirmed at this step, including the assignment of a DEPO lead, the definition and purpose of the work, the acceptance criteria of the work, understanding of stakeholder expectations, identification and assignment of a team, and alignment between team competencies and the work.

**Description**: Cards remain in this column until the acceptance criteria that has been defined for that card has been met. When the owner of a card believes work has been completed, the team will review at the weekly product meeting to validate whether all acceptance criteria has been met. There is no other way for a card to leave this column. This means we must be very careful about what cards actually end up here: if the **In progress** column becomes cluttered with too many zombie projects that are held up because of a foreseeable externality (e.g. DEPO lead is not actually available; funding is insufficient; team can't be organized; problem doesn't really exist; scope is too large; etc...), we will quickly hit our work in progress limit, clogging up the whole board.

### Recently complete

**Acceptance criteria**: Cards may only be moved to this column when the acceptance criteria for the work defined on the card has been review at our weekly product meeting and determined to have been satisfied.

**Description**: Self-explanatory. The promised land for all those young cards that started in the **Not groomed** column and grew up during their journey across the board. 

### Done

**Acceptance criteria**: Cards move to this column when they are no longer relevant from a roadmap perspective. This is an archive of completed work. Decisions about what should move into this column will be made at the weekly product meeting.

**Description**: Completed work, which grows over time like the world’s best resume.

### Not doing

**Acceptance criteria**: Cards may only be moved to this column when a decision to not pursue this work has been made during our weekly product meeting.

**Description**: Self-explanatory. Any cards that end up in this column have been considered at a weekly product meeting and determined to not be worth pursuing. Ideally the card will be updated with the reason for not pursuing when moved into this column, but that is not necessary. Once a card is in this column, it cannot leave. If similar work is identified in the future, a new card should be created and moved through the board from the beginning, rather than resurrecting a card that has landed in this column. 
