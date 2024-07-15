# Mobile prototype instructions


### Travel reimbursement app feature MVP

[Prototype link here](https://www.figma.com/proto/ZIHY63cFlD7pFjqQLA5rFN/%F0%9F%94%8D-Appointments-2.0---Working---VAMobile?page-id=1961%3A12220&type=design&node-id=2059-5269&viewport=502%2C402%2C0.12&t=aN3GY4b6VAjJC2La-1&scaling=min-zoom&starting-point-node-id=2059%3A5269&mode=design)

_In the VA Health & Benefits app, the user has navigated to the Health section. They have selected the Appointments feature within the section. They have toggled to view their list of Past Appointments._


#### 1. Appointments list: Claim Start



1. Scroll the Past Appointments list
2. Notice the blue tag that says **[20 days to file travel claim]** indicates any Past Appointments that are ready to file a Travel Claim. Since there are 30 days to file the claim, the blue tag copy is dynamic. Meaning, it will count down with each day (20 days to file, 19 days to file, 18 days to file, etc)
3. Click the Appointment Row with the blue tag


#### 2. Appointment detail



1. Scroll the screen to view the Travel Reimbursement Card. It displays information about the Travel Claim Type that will be accepted through the app. To start, the mobile app’s MVP will only support the Simple Claim process.
    1. There is a link to **[Find out…]** about Travel Claim eligibility. Click the link to view a Panel that explains Eligibility. Scroll down to continue to the web link. You will get a notice to explain **[You are leaving the app]** to open the VA.gov travel reimbursement eligibility page.
    2. Once done reviewing the information, return to the app by tapping Done. You will return to the app view. Scroll up and close the Panel to return to the flow.
    3. Click the blue button **[Start travel claim].** This will launch the 3 question flow.


#### 3. Travel reimbursement flow



1. Are you claiming only mileage?
    1. **[Yes]** to continue
    2. **[No]** to reveal results (i.e. unable to file this travel claim type via the app)
    3. **[Cancel]** to exit the flow
2. Did you travel in your own vehicle?
    4. **[Yes]** to continue
    5. **[No]** to reveal results (i.e. unable to file this travel claim type via the app)
    6. **[Cancel]** to exit the flow
3. Did you travel from your home address? (displays the Home address the user has on file)
    7. **[Yes]** to continue
    8. **[No]** to reveal results (i.e. unable to file this travel claim type via the app)
    9. **[Cancel]** to exit the flow
4. Review your travel claim
    10. **[Submit claim]** to continue
    11. **[Cancel]** to exit the flow

	


#### 4. Task validation



1. We’re processing your claim.
    1. Presented with a travel claim number and next steps
    2. **[Close]** to return to the Appointment detail view. The Travel Claim status populates once available.
2. We can’t file this type of claim in the app
    3. Presented as a result of a user selecting [No] to any of the questions. This serves as an indicator of an attempt to file something other than a Simple Claim.
    4. Presented with alternative strategies: BTSSS submission, VA Form 10-3542, and BTSSS call center.
    5. **[Close]** to return to the Appointment detail view
3. 3. We couldn’t file your claim
    6. Presented as a system error in case a Backend data error occurs at any moment while completing the flow. 
    7. Presented with alternative strategies: BTSSS submission, VA Form 10-3542, and BTSSS call center.
    8. **[Close]** to return to the Appointment detail view

	


#### 5. Appointment list: Claim Done



1. Once a Travel Claim is successful, the user routes to the Appointment Detail screen, from where they initiated the Claim. The Travel Claim status will populate In the Travel Reimbursement Card when it becomes available. 
    1. In this prototype, we’ve set up a sample view of a Denied Travel Claim. To access the sample Denied Travel Claim, click the Travel Reimbursement card that displays **[Claim status: status]**. To return, click the same area on the sample Denied Travel Claim view.
2. Click the Appointments back label in the top left of the screen. Scroll the list of appointments to reveal the one with an open Travel Claim. 


#### 6. To restart the flow, hit R on the keyboard, or click the Restart link in the bottom right of the browser.



1. Follow the steps outlined from Step 1-6

 ###
