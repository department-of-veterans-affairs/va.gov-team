# va-tags-colored Design Decisions
Last updated: 2025-05-08

- [ADR: 001 - Define the meaning for colored tags

## ADR: 001 - Define the meaning for colored tags

### Status: Accepted
- Date Raised: 2025-02-25
- Decision Date: 2025-04-08

### Context
We had a experimental design request submitted and approved by the Design System Council to add different color variations for the tag component. One of the main concerns the Design System Council raised was addressing the colors that would be added so that each color has specific meaning and intent. We did a discovery to audit the exisiting use of color in the design system, review how other design systems were using color, and make sure the colors aligned to our current use of color in the design system. 
- [Design System Council meeting notes](https://docs.google.com/document/d/1H8B989-PbHIqdrNZppsEGE-Oyxriuou3jryD0YRpJzA/edit?usp=sharing)
- [Discovery: Define the meaning for colored tags #3846](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3846)
- [Color discovery audit in Figma File](https://www.figma.com/design/5y1gpQBX0zZ83i8vsX9xCE/Colored-tags?node-id=0-1)

## Decision
We will be only applying colors to the tags that align with the current alerts in the VA Design System.
- Status (Default) - Used to show the status of a process.
- Informational - Used to provide helpful information or something that warrants a user’s attention. Not used for negative consequences.
- Success - Used to indicate success.
- Warning - Used to warn a user, such as when there are negative consequences, or when something has gone wrong.
- Error - Used when there is a problem or something destructive is about to occur.

### Consequences
Applying colors to tags can introduce a few different interaction issues that we will need to test for. 
- Colors can make tags look more like buttons.
- Making sure the colors are applied appropriately can be challenging. We will need to make sure guidance is added and tied to alerts.
- Color can communicate a priority when we don't mean it to. 
