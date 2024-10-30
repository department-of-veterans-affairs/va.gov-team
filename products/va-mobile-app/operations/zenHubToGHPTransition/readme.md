The VA Mobile team will be moving from ZenHub to use GitHub Projects to track daily tasks and tickets.  This transition will need to happen before **December 15th, 2024**.

WIP Board to replace our current ZH Board: https://github.com/orgs/department-of-veterans-affairs/projects/823/views/23

## Things the migration scripts need to handle:

New field in Mobile GHP added: Sprint Status 
* need to have mapped to an Issue's current status on the ZenHub Sprint Board

Epic-child relationship needs to be added
* Hopefully we can use whatever VA.gov creates for their migration scripts

Existing Team property in GHP could be assigned to tickets based on the team labels we currently use in ZenHub

## Open Questions:
* Who will write the migration scripts for our program?
* Should we wait to see how VA.gov handles things with their migration before doing ours?  Or just go for it on our own?
* Can we add some sort of automation to link updates between the Sprint Status and Kanban fields?
