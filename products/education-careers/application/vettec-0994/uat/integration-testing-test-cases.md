# Integration Testing Test Cases

## Submission Tests
### Other education forms
- Submit without programs **(Completed by Rob on 2/12)**
- Submit with 1990 completed on the same day **(Completed by Rob on 2/12)**
- Submit with 1990 completed on a different day? 
   - Can we test this?
- Submit all education forms on the same day
   - 1995
   - 1990
   - 1990 E
   - 1990 N
   - 22-5490 
   - 22-5495
   - 0994
- Submit education forms on the same day **(Completed by Rob on 2/12)**
   - 1995
      - Submitted by Des on 02-12-2019 at 02:48PM. Confirmation #V-EBC-362. Uploaded results.
   - 1990
      - Submitted by Rob on 02-12-2019
   - 0994
      - Submitted by Rob on 02-12-2019
- Submit 1990 that will end up in the Eastern (Buffalo) Regional Office **(Completed by Rob on 2/12)**
   - EASTERN = CT DE DC ME MD MA NC NH NJ NY PA RI VT VA VI AA
- Submit 1990 that will end up in Central Regional Office: 
   - CENTRAL = CO IA IL IN KS KY MI MN MO MT NE ND OH SD TN WV WI WY
- Submit 1990 that will end up in Western Regional Office: 
   - WESTERN = AK AL AR AZ CA FL GA HI ID LA MS NM NV OK OR SC TX UT WA GU PR AP

### Varied Data
- Submit with Active Duty **(Completed by Ricky on 02/12)**
- Submit with no service **(Completed by Ricky on 02/13)**
- Submit with Reserve Duty
- Submit with response that 1990 completed (confirm button to complete 1990 does not appear) **(Completed by Ricky on 02/13)**
- Submit with response that 1990 not completed (confirm button to complete 1990 appears) **(Completed by Ricky on 02/13)**
- Submit with large number of characters **(Completed by Ricky on 02/15 confirmation V-EBC-375)**
- Submit with special characters in all text fields **(Completed by Ricky on 02/15 confirmation V-EBC-376)**
- Submit with dates that occur in the past **(Completed by Ricky on 02/15 confirmation V-EBC-375)**
- Submit without answer: 
   - "Do you anticipate you will go on active duty during the VET TEC program?" **(Completed by Ricky on 02/15 confirmation V-EBC-377)**
   - Highest level of education you've completed **(Completed by Ricky on 02/15 confirmation V-EBC-377)**
   - "Have you picked any programs you’d like to attend using VET TEC benefits?" **(Completed by Ricky on 02/15 confirmation V-EBC-377)**
   - Postal code for international address **(Completed by Ricky on 02/15 confirmation V-EBC-377)**
   - Bank account information **(Completed by Ricky on 02/15 confirmation V-EBC-377)**
- Submit with 
   - Alternate phone number (Contact information)**(Completed by Ricky on 02/15 confirmation V-EBC-379)**
   - International Address **(Completed by Ricky on 02/15 confirmation V-EBC-379)**
   - Address Line 2 **(Completed by Ricky on 02/15 confirmation V-EBC-379)**
   - Address Line 3 **(Completed by Ricky on 02/15 confirmation V-EBC-379)**
   - Only bank account type **(Completed by Ricky on 02/15 confirmation V-EBC-379)**
   - Only account number **(Completed by Ricky on 02/15 confirmation V-EBC-380)**
   - Only Routing number **(Completed by Ricky on 02/15 confirmation V-EBC-381)**
   - Long account number; account number with letters  **(Completed by Ricky on 02/15 confirmation V-EBC-380)**

## Summary Page Testing
- Test what happens when editing all fields on summary page **(Completed by Ricky 02/15)**
   - remove all content & save **(Completed by Ricky 02/15)**
      - Incrementally remove content section by section & save **(Completed by Ricky 02/15)**
   - add special characters & save **(Completed by Ricky 02/15)**
   - change content and then use the back button to navigate to confirm that the content was saved and is appearing as expected on the corresponding page **(Completed by Ricky 02/15)**

## Spool file Testing
- Confirm NAs appear on the Spool file for all questions not answered
- Confirm that only last four digits of bank account are displayed 
- Confirm that only last four of social are displayed
- Confirm that for applications where pre-filled data (bank or contact) was updated that the changes are reflected in the spool file

## Other
- Confirm that updates to address and contact information are updated throughout VA records
- Test character limits on all fields. 
- Test field validation based on special characters. 
