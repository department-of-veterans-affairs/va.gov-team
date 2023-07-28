## 7/28/2023 - Confirmation on CARMA and ES handling non-english characters

### Slack message with Joshua Faulkner on Enrollment system and how characters with accents are handled for the 10-10EZ
- You're talking about database constraints;
- ES will support non english characters but they take up more than one byte in a varchar column, which is why you don't set the constraints to be the same as the input field length constraints if your database is using ISO charset. i.e. last name field can be 30 chars including extended character sets but the DB column is 100 bytes to allow for conversions.
- Haven't had any issues with it aside from some foreign addresses that were in German, couple years ago we had to extend the column to accommodate some of those.

### [TBD] pending conversation with CG team on how CARMA handles characters
