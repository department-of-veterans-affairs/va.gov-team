# Blameless Postmortems

## Why & What
_Language and approach based on [AdHoc's internal blameless postmortem process](https://adhoc.team/2023/01/31/engineering-chaos-a-guide-to-building-a-game-day/)_

> This process should seek to document, teach, and learn through a system's failure in a supportive environment, rather than hold individuals or parties accountable for something going wrong (hence "blameless"). Teams should learn from each other's incidents in a positive and collegial setting.

> When human error is a factor in an incident, the question should be: "what safeguards can we add to mitigate mistakes?" or alternatively "why did the system allow the user to take such an action?", recognizing that human error is inevitable at scale.

## How

For all sev-1 or sev-2 bug tickets that impact production, the QART team will run a blameless postmortem. (QART is the only subteam on the mobile platform currently running these; this process can be rolled into a larger team process whenever one is implemented.)

1. The tech lead will create a ticket for the postmortem, and do the initial investigation to figure out the underlying causes of the incident (if not already documented elsewhere)
2. The tech lead will bring the initial investigation to the QART team sync, where the full team will discuss
3. If the team decides follow-up actions should be taken (weighing likelihood, frequency, time/resources cost, etc), the tech lead will create those tickets in appropriate epics
 
