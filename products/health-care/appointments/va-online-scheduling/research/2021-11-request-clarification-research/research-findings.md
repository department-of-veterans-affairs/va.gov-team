# Requests discovery - report

## Background

* [Product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/product/vaos-product-guide.pdf)
* [Research plan](research-plan.md)
* [Prototype](https://va-scheduling.invisionapp.com/console/share/EW35S0RT8V)
* [Synthesis doc](Participant%20notes%20-%20requests%20clarification.xlsx)
* [Synthesis affinity map](Synthesis%20-%20requests%20clarification.pdf)

### OCTO-DE Objectives

[OCTO-DE objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme) this research supports:

-   Increase: Veteran satisfaction with VA.gov
-   Decrease: 
    -   Call center volume, wait time, time to resolution
    -   Time to successfully complete and submit online transactions

## Participants

| Participant | Role                             | Gender | Ethnicity                 | Age         | Education                                                    | Branch       | Location |
| ----------- | -------------------------------- | ------ | ------------------------- | ----------- | ------------------------------------------------------------ | ------------ | -------- |
| P1          | Veteran, Veteran's family member | Male   | White or Caucasian        | 55 - 64     | High school diploma or equivalent (for ex: GED)              | Navy         | LA       |
| P2          | Veteran, Veteran's family member | Female | Black or African American | 35 - 44     | Bachelor's degree                                            | Air Force    | CA       |
| P3          | Veteran                          | Male   | White or Caucasian        | 45 - 54     | Bachelor's degree                                            | Army         | FL       |
| P4          | Veteran                          | Female | Black or African American | 55 - 64     | Master's degree                                              | Navy         | NC       |
| P6          | Veteran                          | Male   | White or Caucasian        | 75 or older | Some college (no degree)                                     | Navy         | NC       |
| P7          | Veteran                          | Male   | White or Caucasian        | 55 - 64     | Associate's degree / trade certificate / vocational training | Army         | OK       |
| P8          | Veteran                          | Male   | White or Caucasian        | 35 - 44     | Master's degree                                              | Marine Corps | NC       |
| P11         | Veteran, Veteran's family member | Male   | Black or African American | 35 - 44     | Some college (no degree)                                     | Navy         | VA       |

## Hypothesis 1

We believe that requests are confusing *during scheduling* because there is no indication when a self scheduled appointment becomes a request. If we clearly show when this transition happens, and offer alternative options to making a request, Veterans will be able to make choices about how to schedule their appointment that better fit their needs.

### How we tested this

We asked participants to run through tasks in a prototype of the scheduling flow that included:

* A new page that tells the Veteran that an appointment can't be self-scheduled so it has to be requested
  * Alternatives to requesting an appointment included calling or secure messaging
* Clarified "request" language on the request calendar, best times to call, confirmation, and review pages
* A separate "best times to call" page with no contact information fields or instructions
  * Contact information editable from the review page

![RC-request](https://user-images.githubusercontent.com/2536801/144463414-7d069828-ae37-4fc6-857b-2ff133f71de7.png)

*Scheduling options screen that indicates the transition to a request flow*

### Findings

#### 7/8 participants understood that they were requesting an appointment.

We asked participants to react to a new page in the request flow with three options as alternatives to self-scheduling:

* Have the facility call them back to schedule
* Send their provider a secure message
* Call the facility

7/8 participants expected they were requesting an appointment after they saw the new page.

P7 expected that he would be given the option to self-schedule at some point during the flow, and was disappointed when this didn't happen.

It generally took participants longer to read this page than other pages in the flow. 

4/8 participants indicated frustration when they saw that the facility "doesn't allow self-scheduling online." After reading further, all realized they could still complete the process online. This reduced frustration for 3 of them - the other participant (P2) previously had a bad experience requesting appointments through VAOS and hadn't used the tool since then.

##### Recommendations

* Add the new page that asks Veterans to choose scheduling options at points in the flow when an appointment can only be requested.
* Remove the "doesn't allow self-scheduling online" content from that page. It's confusing, too much information, and doesn't help Veterans the decision posed by this page.
* Consider clarifying the content of the phone option to indicate what's coming next, i.e. "I'll call this facility, show me their contact information."

#### Most participants chose "have the facility call me back" as their preferred option

By the end of the test, 4/8 participants said that, of the options presented, they would prefer requesting an appointment online. 

One participant (P7) initially said he preferred the request option, but was frustrated by the end of the test. He expected to be able to self-schedule at some point in the flow. After finishing the task, he said he would have preferred to call the facility.

> I would have just called and been on hold for a little. When I got off the phone I would have the date/time to my choosing. - P7

No other participant indicated a preference for calling the facility to schedule. Participants reported the same pain points around wait times and navigating the phone tree that we've heard in other studies.

3/8 participants said they would prefer to schedule via a secure message. 

3/8 said they had used secure messaging before but had to send multiple messages before they received a response, if they received one at all. None of them chose secure message as their preference.

3/8 expected to be able to send a message directly after selecting the option. The link to secure messaging was especially frustrating to P2:

> [On seeing the SM link] "Once again it’s just invoking rage, my issues are now starting to stair climb. I tried to schedule and you wouldn’t let me so you gave me this option and now you’re giving me the run around. " - P2

3/8 participants indicated they would have preferred the option to self-schedule over all the other options presented.

2/8 wanted an indication that an appointment could only be requested earlier in the flow.

##### Recommendations

* A clunky experience navigating to Secure Messaging will add frustration if it is encountered after reaching a dead end in online scheduling. The transition from VAOS to Secure Messaging needs to be smooth to keep frustration with the process at a minimum. Consider ways to work out potential kinks in this transition:

   * Testing the scheduling options page with and without the SM option and comparing abandonment rate, time on page, and next steps OR,
   * Working out the flow to Secure Messaging at a less critical point in the process (such as adding it as an option to the VAOS home page) before adding it to the request flow. 

* Consider adding helpful information about the facility to the "call" page. Participants suggested:

  * Hours of operation, so they know if someone will be there when they call. 
  * Direct clinic extension based on their chosen type of care.

* Continue to explore ways to call out that an appointment can only be requested, vs. self-scheduled, earlier in the scheduling flow.

#### Participants need feedback that their request was received, and expect a call back within 1-2 days

All participants expected that a scheduler would contact them within 24-48 hours of the request being made. If they heard nothing in a short time, they would call the facility. 

> If it wasn't VA I'd expect [the response time after making a request] to be same day or next business day. No more than that. With VA...it's anyone's guess. It could be tomorrow, or it could be lost forever. If it took more than a day I'd go back to calling and never use the system again. - P3

P4 explained how this isn't only frustrating, but tied it directly to Veteran's mental health:

> I called VA [for an appointment] 3 weeks ago and still haven’t heard back from them. I don’t give up but I wait until I have the patient/time to deal with them. It hasn’t just happened to me. I know of other Veterans that it has happened to as well. They went off. They basically let them know where they stood, they got angry. The VA forgets that **our mental health is important just like our physical and how we are treated at times deteriorates the mental health**. - P4

2/8 participants had previously used VAOS and abandoned it for other scheduling methods after bad experiences with appointment requests. 

> The last few times I scheduled online it didn’t go through or confusion so I typically call to schedule with the VA. Last time I scheduled online I put in the date/time and they said they would call me to confirm. They never contacted me and when I called they didn’t have a record of the appointment. - P11

P2, who had indicated a preference for secure messaging at first, explained that she'd be comfortable requesting an appointment if it went smoothly:

> Seeing that everything else went smoothly, I feel better about [requesting]. But if I went through all this, and no one still called, or they said they never received the request and had to start over, [I'd be frustrated]. - P2 

P3 (who said earlier he would not use VAOS again if he didn't receive a prompt response) also indicated that he would be happy with the process if it worked:

> [After sending the request I'd expect] someone to call me to confirm it -- or better yet, send a text message to confirm it. If they can't meet my request then have them call me and tell me my options.  **It is always more efficient when a scheduler calls me.**  - P3

##### Recommendations

* Requests currently represent the vast majority of appointments scheduled through VAOS. We believe that the lack of consistency in response time to requests is one of the biggest impediments to a positive experience with VAOS. Other than offering self-scheduling universally, we believe that one of the most impactful ways improve Veterans' experience with VAOS is for VA to ensure requests are responded to quickly and accurately.

* The VAOS team should review the content and cadence of email notifications sent out after a request for clarity and accuracy.

## Hypothesis 2

We believe that, once an appointment is requested, Veterans expect to see them listed with their existing appointments. If we call out their requests alongside other appointments, Veterans will be able to more easily understand what requests are, and how to find details about them.

### How we tested this

We added a CTA on the home page to view requests. This showed after participants had requested an appointment.

![RC-home-plus-req](https://user-images.githubusercontent.com/2536801/144464076-1ae473be-d990-4105-b892-eb3dd2bd3770.png)

*Home page with requests CTA*

### Findings

#### Most participants found their requested appointments in the status dropdown.

5/8 clicked the dropdown when prompted to find information about the appointment they had just requested. 

3/8 clicked the CTA to view requests. The others gave no indication that they saw this CTA.

This may have been biased by the beginning of the test, where most participants attempted to click the status dropdown, which wasn't connected to any other screens at that point. 

##### Recommendations

* Consider a solution that will expose all statuses at once, without an additional click. For example, we removed tabs during the VAOS home page refresh project due to a lack of an existing tab solution that was able to display more than two options on mobile devices. 

* Make the CTA for opening requests stronger than what was presented in the prototype, by putting it on the same visual hierarchy as a regular appointment card.

## Appendix: additional findings

Along with requests, we used this test for initial discovery around data needs, navigation, and additional appointments. 

### Appointment list and details pages data

We wanted to validate what information would help Veterans better understand their appointments. We asked this question when we showed participants the VAOS home page, and examples of the details pages for a request and a direct scheduled appointment. 

Appointments list top requests:

* Type of care - 5/8
* Whether appointment was for labs - 4/8
* Clinic name - 3/8
* Clinic location - 3/8

One mentioned that facilities can have different names, so it would be helpful to see all the alternate names.

Details page top requests:

* Clinic name - 4/8
* Whether appointment was for labs - 3/8
* Labs instructions - 3/8

### Appointment list and details pages navigation

We wanted to explore ways to clarify the navigation between appointment list and detail pages. In the prototype we removed the breadcrumb from the detail pages, and replaced it with a single "back" link. 

Requested appointment detail page:

* 6/8 clicked the "back" link  
* 2/8 used the back button on their browser 

Upcoming appointment detail page:

* 4/8 clicked the "back" link  
* 2/8 used the back button on their browser 
* 1 skipped this step

We did not remove the breadcrumb from the confirmation page. While most participants were able to easily understand this page, 2/8 weren't able to find the "View your appointments" link without help, and 1 was able to after a short amount of time. This interaction had the lowest success rate of all shown in the test.

#### Recommendation

Consider removing the breadcrumb from this and the other detail pages and replace with a single link, to reduce noise/distraction.

### Related appointments section

We wanted to learn what information Veterans would find useful about labs and x-rays associated with their appointments. We asked them for thoughts on a new "Related appointments" section added to the details page of an upcoming appointment. 

Most participants were pleased to see their related appointments in this context.

Along with wanting to see instruction for labs and x-rays, participants said it would be helpful to see:

* 3/8 - appointment type
* 3/8 - time
* 3/8 - clinic location

### Contact and best times to call pages

While reviewing data around how Veterans update their communication preferences ([dashboard](https://analytics.google.com/analytics/web/#/dashboard/5fRiv2AeT8WoN0VB21KpLg/a50123418w177519031p176188361/)), we found that most don't update their prepopulated email and phone number. We hypothesized that a separate "best times to call" page would be easier to understand. So we presented "best times to call" in the flow, and contact information only in the review page. We asked participants to modify both.

* 7/8 participants easily understood and completed the best times to call page.
  * One thought they were indicating best times to call on the request calendar, so found the page to be redundant.
* 8/8 participants reviewed the contact info page 
  * 4/8 expected their info would be updated across all VA systems if updated here.
  * 1 said he would prefer the option to do both.

#### Recommendations

* Separate best times to call and contact info into new pages.
* Consider making contact info editable from the review page if we have contact info on file.
* Update the contact info page content to clarify the difference between updating this information just for VAOS vs. in the profile.

### Review and submit page

We added clarifying content to the "review" page, and stronger headers to the sections. 

2/8 participants indicated that they thought the form was submitted when they reached this page. Both realized after they edited contact info and saw the "submit request" button that there was more to do. Analytics indicate that the drop-off rate for this page was 2% YTD (as of 11/15/21). There is an alert that fires if the user attempts to navigate away from this page, so some abandonment may be due to clicking an edit link to return to another section.

* One participant clicked an edit link and was frustrated at having to walk through the whole form again to get back to the submit page.

#### Recommendations

* Review content and UI of the review and submit page. Consider condensing the data on desktop views to increase the likelihood that the submit button will be within the viewport.
