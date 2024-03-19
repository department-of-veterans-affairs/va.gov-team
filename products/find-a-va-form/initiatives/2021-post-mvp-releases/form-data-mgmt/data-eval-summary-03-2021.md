# Known Find a VA Form Data-Related Issues, March 2021
Note that some items included in counts may be forms that will be purged, but currently appear in Forms API

| Problem Description    | No Forms (Appx)          | Source of issue |
|---------|-------------------|-------------------|
| "Ghost" records in Forms API resulting from forms deleted  prior to use of "deleted" field | 90  | Lighthouse Postgres database |
| Duplicate records resulting from forms being renamed in VA Database while LH was using name as the primary key | 10 | Lighhouse Postgres database |
| "Related To" info on search page different from detail page | TBD | Find a VA Form front end - fix currently on Staging  |
| Forms using inconsistent naming conventions - ex SF39 vs SF-85 | All forms should be reviewed  | VA Forms Database  |
| Issue/Revised date does not match date on PDF | TBD | VA Forms Database
| *Last Revised On* date before *Issue Date* | 300 | VA Forms Database |
| Missing *First Issued Date* | 93 | VA Forms Database |
| *First Issued Date* > 10 yrs | 93 | VA Forms Database |
| *Last Revised On* date > 10 yrs | 146  | VA Forms Database | 
| Dates on Forms API do not match with Find a VA Form | TBD | Forms API (needs to use same logic as Find a Form app if data cannot be fixed at source)|
| Some SF (Standard Forms) have a form_type of "non-va" and others have null values | TBD | VA Forms Database |
# Notes
- Sense of urgency is coming from Mark - seems he wants to do the cleanup
- We think we are good to go with removing the ghost records (unless LH needs to retain that data for other users)
- ACTION ITEM: Ask Kayce about the naming differences
- ACTION ITEM: Find out about dates from Kayce
- Lighthouse API should be using the same date logic we are.
- We need to compile this using images
