VA will be removing their license for ZenHub and transitioning to use GitHub Projects (GHP) in December of 2024.  The VA Mobile program will be moving to GHP prior to that date.  

**NOTE:** Prior to any work in GHP, it will help if you close out any issues in your team's backlog in ZenHub that are no longer needed.  This will help to reduce the number of issues that need to be brought into GHP.

The VA Mobile program has it's own repos, and does not share with any of the VA.gov teams.  This means we will NOT be able to use the migration scripts that VSP has created to bring our issues into GHP.  VSP does have an [in-depth migration guide](https://dsva.slack.com/docs/T03FECE8V/F07TR9N5XRT) that could still be helpful.
There will be some manual work to bring our issues over and preserve some data.


### Manually bring Issues into GHP
You can add multiple issues and pull requests from your project and use filters, such as label:bug, to narrow down your search.

From the Sprint Board you can bulk add issues to a specific column by clicking the 'Add Item' button at the bottom of the column.  A row will appear at the bottom of the screen, click +, then 'Add item from repository'.

![Screenshot 2024-11-12 at 9 28 42 AM](https://github.com/user-attachments/assets/18740375-f1e6-45f2-baad-7eb333696691)

![Screenshot 2024-11-12 at 9 28 58 AM](https://github.com/user-attachments/assets/304c4b94-bc22-45eb-876c-ae770dacb996)

Ensure the va-mobile-app repository is selected in the dropdown.  All issues with the exception of Design System issues will be in this repo.
![Screenshot 2024-11-12 at 9 29 14 AM](https://github.com/user-attachments/assets/d000cda3-67be-45b9-895a-3ae1138ac6d2)

Filter the issues by pasting this into the filter input: **"is:issue label:[your team's label]"** 
NOTE: When searching by label, if your label is more than 1 word, you should surround the label text with quotation marks, i.e. label:"you team's label" instead of label:your team's label 
![Screenshot 2024-11-12 at 10 45 11 AM](https://github.com/user-attachments/assets/3b1869b0-d3ca-4d89-9067-e42454e5466a)

Unfortunately the filtering to remove Closed issues does not seem to work on this search, so you can either select all and include the Closed ones and then move them to the Closed Sprint Status, or not include them in the import to the Project by not selecting the checkbox next to any purple circle issues.
![Screenshot 2024-11-12 at 10 47 33 AM](https://github.com/user-attachments/assets/add13976-d220-4225-9a01-e42874ce76a4)

Once you have selected the issues to import, click 'Add selected items'.  
Also unfortunately, only 25 items can be added at a time, so you will have to go through this process multiple times to add all issues from your team.

See this [GHP guide](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project#bulk-adding-issues-and-pull-requests) for additional info on batch issue adding.

The issues will take a moment to be brought into GHP.  Once they are included, they will appear at the bottom of the column to which you added them.  You can then manually set the following values.
### The fields that will need to be manually set within GHP are:
- **Sprint Status** - the column the issue is in on the Board (New Issues = No Sprint Status, Icebox, Pending Handoff, ...)
- **Estimate** - the points assigned to the issue.  GHP has the points broken up by discipline.  If this causes a problem for how your team points issues, let Kelly know.
- **Team** - We have used labels in ZenHub to denote which team an issue belongs to.  This label WILL be preserved within GHP, but there is an additional field called 'Team' that we use for Quarterly Planning that can be set on the issues within GHP.  See the Batch Updating instructions below for this field.
- **Parent** - The Epic to child relationship currently lives only in ZenHub.  GHP has an equivalent, but it must be manually set within GHP.  An Issue can have only one parent in GHP.
- **Sprint** - There is a Sprint iteration property in GHP, but we are still figuring out if/how this will be used for our issues.  The current property is used for Quarterly Planning only right now.  More to come on this, it's up to you if you want to assign this property to your issues right now.
- **Release** - We are still deciding how we want to set this up in GHP.  More to come on this, there is nothing to set on your issues right now.

Once you have updated all issues for your team, double-check to make sure the GHP Sprint Work Board matches your ZenHub board.  You will have to manually re-order issues within a column as well.


### Batch updating issues once they are brought into GHP
It is possible to make batch updates to issues within GHP using the **'Batch Ticket Assigning'** tab.  See Step 7 of the [VSP guide](https://dsva.slack.com/docs/T03FECE8V/F07TR9N5XRT).
