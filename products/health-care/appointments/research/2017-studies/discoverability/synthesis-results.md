# Discoverability Research Synthesis
We used [Reframer](https://www.optimalworkshop.com/a/adhoc/reframer/projects/11571) to analyze the results of this research.

## Task I: Introduction & Current Process

**Takeaways from the current process** <br />
1. 4 of 5 Veterans described many painpoints in their current process for trying to get an appointment at the VA. One of the users interviewed noted that she has not even tried to get an appointment at the VA because she has heard such horror stories. Many were very receptive to the idea of online scheduling; however, it is important to note that none actually made it to the tool to test it. 
- [ ] Next step: Conduct accessibility testing to see if expectations of scheduling tool match experience.

2. All 5 Veterans approached scheduling in different ways depending on which VA sites they were most comfortable using. This underscores the value of having correct, current, and consistent content about eligibility to use online scheduling at different touchpoints throughout the VA's digital spaces. However, it is important to limit the number of pages where source-of-truth content is visible, so we don't wind up in the situation we were in when we started this process (lots of inconsistent, incomplete, incorrect content in too many places). 

3. The Veterans we talked to all emphasized painpoints using the phone option to schedule appointments at the VA. For those who cannot yet use VAR, the alternative that we have presented (phone) may still be perceived as a dead end, even though technically it is the only way that will work for all Veterans. A potential compromise would be to help Veterans get to the scheduling numbers they need for their facilities, rather than sending them on a wild goose chase through their main VAMC lines. 
- [ ] Next step: Explore how we might better utilize the Vets.gov Facility Locator to help Veterans (a) determine if their facility/clinic is participating in VAR, (b) which types of appointments are offered at that facility, and (c) provide the scheduling phone number(s). 

4. Three of five Veterans interviewed reported using secure messaging to schedule appointments at the VA because someone is required to respond to the message. Although this is not how secure messaging is intended to be used, nor is it something the VA wants to encourage, it is a hack that Veterans seem to know about and use. We made sure that this option was listed on the Vets.gov scheduling page and the VA.gov scheduling page, even if we were advised not to put it in other spaces too. 
- [ ] Next step: Not sure this is possible, but it would be interesting to monitor if the # of appointments scheduled through secure messenger decreases as accessibility to VAR increases.

## MHV: Keeping Up With All Your Appointments

**Takeaways: Content**<br />
1. Most of the users felt that the content was clear, and that it was well laid out with instructions of what they needed to do. One reported that the content was a little bit wordy. 
- [ ] Next step: Have content team review to see if we can streamline this at all. Possible to remove the bit about what you can do with the MHV VA Appointments section.

2. The word "premium" suggested to one user who did not have a MHV or DS Logon Premium account that she would have to pay the VA to upgrade. The word Premium in commercial sector signifies an account upgrade, at cost.
- [ ] Next step: Add the word 'free' wherever we discuss upgrading to Premium, so that users know that they do not have to pay. This has been done on Vets.gov as of 11/15. Should be done on VA.gov and MHV too.

3. One user felt very conflicted about our use of the word 'many' in "There are many options...". Because we do not stress the secure messaging option in the MHV content flows, there are actually only two options presented here, whereas on VA and Vets.gov there are 3. 
- [ ] Next step: Revise language on MHV flows to avoid use of 'many'.

4. There was some confusion about whether we need to tell users on MHV that they need health benefits and that they need a Premium account. Some users really appreciated having that repetition (and suggested that Veterans expect repetition of information because they are used to order and steps from their time in the military). Others felt it was repetitive. A possible contributing factor to Veterans reporting that the content felt repetitive was that they saw 3 different user flows in succession during the test. A user typically would not see all three. <br />

**Takeaways: Facility List (also on Scheduling Transition page)**
1. We need to revisit the user experience for Veterans whose facility is NOT currently VAR eligible. For 3 of the Veterans we talked to, their facility was participating; for 2, their facility was NOT participating. However, for those two users, they still felt that they could use the tool. This may be an issue with question phrasing, as both of those users seemed to interpret the moderator's question as whether they themselves were physically able to use it, not whether they were eligible to use it. 

2. The facility list covers the facilities at a macro level, but not the regional clinics that may be affiliated with that facility. We need to make it clearer to Veterans not only if their facility is participating, but if their clinic is too. 
- [ ] Next step: Revisit the design challenge of "how might we help Veterans understand if their facilities are participating in online scheduling?". This may be something we can accomplish with the design wizard.

3. The facility list may be something that users check only one time. If their facility is listed, they wouldn't have a need to check again. Veterans who do not find their facility may be turned off of the idea of online scheduling for good. 
- [ ] Next step: Tackle the design challenge of "how might we deliver the facility list to Veterans when they need it?" This would be accompanied by a design challenge of "how might we notify Veterans that their facility is now participating?".

4. Some Veterans expected to be able to click on the facility name when they found theirs in the list. This reflected a confusion about how online scheduling works. Veterans semed to expect that they would be interfacing with a VAMC-specific interface. 
- [ ] Next step: Revisit if a dropdown menu with language to the effect of "Check to see if your facility / clinic offers online scheduling" would be more helpful to users. 

**Takeaways: Call-to-Action**
1. Users were able to find the "Login to Schedule an Appointment Online" button without issue. 

2. Users expected that logging in would take them directly to a tool that would allow them to pick facility, doctor, or time. Although we cannot go directly into VAR from here, we can shorten the path. 
- [ ] Next step: Ask MHV team to redirect users post-authenticated login to the Scheduling Transition page so they can go into VAR directly from MHV. 

## MHV: Logged-In Flow (Includes MHV Logged-In Dashboard, Scheduling Transition Page, View My VA Appointments)

**Takeaways: Content**
1. On the View My Appointments View, users were able to easily follow the content, and confirmed that this was the content they expected to find on the page. 

2. Many users were confused by the "Update in Progress" status in the appointments table. This is a status that MHV set, which I believe is a test-case only from fake data. This is not really relevant to VAR or scheduling appointments, but might confuse users about the status of existing appointments. 
- [ ] Next step: Confirm if active users can see the "update in progress" status in their appointment table and share results of research with MHV team. Encourage them to update this language to something more user-friendly. 

3. Users reported that the updated text on the scheduling transition page was straightforward and easy to follow. Users interviewed were able to understand the requirements for continuing into the tool. Users appreciated the step-by-step approach, noting that this emulated their expectations and experiences from military days, which made it easier for them to follow. 

4. Two users expressed concern about the text that explained that they needed to have a primary care appointment at that facility in the past two years to use the tool. Both had specific questions for their particular cases (e.g. I have moved recently, can I still use my old facility?). The business rules around type of appointment and time since last appointment are not straightforward, nor are they consistent by facility or type of appointment.  
- [ ] Next steps: Because we cannot spell out business rules that are universally applicable to every single Veteran, there may be opportunities in the future with the Vets.gov profile or with the Facility Locator to help Veterans understand their specific eligibility for scheduling types of appointments at certain facilities. 

5. Questions about repetition of information came up again. Likely, this was a flaw in the organization of the research; we showed them three different pages [Keeping Up With article; Scheduling Transition Page; Vets.gov page] with the same content in back-to-back tasks. Although some users expressed a preference for the repetition because they are used to that from their days in the military, in theory, a user would only encounter one of those three pages, depending on login status and access point. 
- [ ] Next step: Confirm user paths and ensure that a user will only encounter information once. Minimize number of clicks into tool. 

**Takeaways: Call-to-Action**
1. On MHV Dashboard, users quickly were able to find the Schedule a VA Appointment button. On the View My VA Appointments, users were easily able to find the schedule button. On the Scheduling Transition page, users were easily able to find the button. This suggests that the buttons have clear CTA text and are easy to spot. 

2. Users did expect that once they clicked on the button from any of the three pages, they would be taken directly into the tool to a page to pick facility, time preferences, type of appointment, etc. While we feel that it is important that logged in users see the Scheduling Transition page to confirm that they are eligible before they continue, if they have been asked to click too many times, they may skip over this information, and click on the button to go directly into the tool. There are still several clicks once a user reaches the tool before they can actually schedule [ULA for first time users, home page, schedule a new appointment, etc.] but we cannot really shorten that further. 
- [ ] Next step: Explore if we can shorten ULA or other steps into tool.
- [ ] Next step: Explore if we need to / should make it clearer that users are going into a VA-wide tool to facilitate expectations of functionality. 

**Takeaways: Facility List**
(See above: Keeping Up With All Your Appointments)

## Vets.gov Scheduling Page

**Takeaways: Content**
1. Several users found the content straightforward and reported that they appreciated that steps to schedule were clearly spelled out. 

2. Two users commented that they found the Vets.gov contenet more confusing than the My HealtheVet content and wanted steps and ways to schedule more clearly spelled out. 
- [ ] Next steps: (complete) Lauren worked with content team, Sophia, and Robbie to update this page's content and structure. Lauren also reviewed the page with an SEO expert. The three ways to schedule are more clearly spelled out with "how to schedule online" headers; content has been reviewed and regrouped to make it more accessbile and user friendly; and extraneous information has been deleted. This page is also using structured coding to make it show up in Google's FAQ lists. Page content can be retested. 

**Takeaways: CTA**
1. Users were easily able to identify the green schedule button. 

2. Users expected the green schedule button to take them directly into the scheduling tool. 
- [ ] Next steps: (complete) Originally the link took users to MHV. The link has been since redirected to the home page of the online scheduling tool. 
- [ ] Next step: (in progress) Include ID.me as a way for Vets.gov users to login to VAR. 
