# Testing 21-0538 Form in VA.gov Staging Environment

## Submission pathway
- The 0538 pdf gets sent from VA.gov through Lighthouse and into the Mail Automation System (MAS). The pension 21P-527EZ form takes the same pathway.

## Processing
- MAS has automation in place to "read" the y/n answer for the question, "Has the status of your dependent(s) changed?".
- MAS cannot process dependent removals that are provided on the 0538. Those are manually processed.
- MAS requires certain fields on the pdf:
   - ssn or file number
   - DOB
   - ?
   - Name, address, and email are not required


## PDF Overflow Behavior
- When the user enters information on VA.gov that does not fit within the designated spaces on the 0538 pdf, VA.gov enters "see add'l info" in the pdf fields and prints the entered information on an additional "overflow" page that is appended to the pdf.
- In some cases, MAS sees the "see add'l info" (or a truncated version of that) and off-ramps the claim for manual processing
- To avoide this, VA.gov customized the overflow behavior on the 0538 pdf to do the following:
   - If first name overflows, it is truncated to fit in the allowed spaces on the pdf and the full first name is printed on the overflow page
   - If last name overflows, it is truncated to fit in the allowed spaces on the pdf and the full last name is printed on the overflow page
   - If the email overflows, the field on the pdf is left blank but the email address is printed on the overflow page
   - If the any of the address fields overflow, ALL the address fields are left blank on the pdf but the entire address is printed on the overflow page

## Testing Process
- VA.gov submits test claim in staging environment (connected to VBA LinkTest envionment).
- VA.gov will provide the UUIDs to Timothy Wagner or Jacob Shepard so they can get it processed and placed into PreProd Centralized Mail Portal and provide PacketIDs.
- Tim or Jacob can provide the packetIDs to the MAS folks, they can review, and provide it to IBM if needed to review for potential automation issues.

MAS POCs:
- Alanna Fields, OBI Program Analyst
- Molly Mccabe, OBI Progam Analyst
- Jacob Shepard, OBI Progam Analyst
- Timothy Wagner, OBI Progam Analyst
- Katherine King, Senior OBI Progam Analyst

VBA POCs:
- David Reis
