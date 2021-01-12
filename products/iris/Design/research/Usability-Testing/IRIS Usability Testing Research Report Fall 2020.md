# IRIS Usability Testing Research Report Fall 2020

IRIS (Inquiry Routing & Information System) Redesign project

Rachel M. Murray, January 12, 2021

View the [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/iris/Design/research/Usability-Testing/IRIS%20Usability%20Testing%20Research%20Plan%20Fall%202020.md)

## Research Goals 

IRIS is the Inquiry Routing & Information System at https://iris.custhelp.va.gov/app/ask. Because of mounting operating costs VEO has kicked off an initiative to migrate to more modern technologies, improve the experience for end users of IRIS and GI Bill through using the VA Design System and backed by data from user research. The ThoughtWorks team has been working with VA SMEs and our product owner since mid-July 2020 with an anticipated launch in Summer 2021. The goal of this usability study was to evaluate whether the redesigned IRIS product is successfully addressing pain points in the current experience. While some of the content for the topics of inquiries (i.e. options on the drop down menus) is still being revised the team conducted usability testing to get feedback on work so far to ensure the core functionality of how we’ve structured the product was valid (ie. use of chapters, review page etc.). The research questions to address if we’ve been successful in our product included the following (in alphabetical order):

* Content strategy: 
  * Do users understand the content in the form (especially the drop down menus) and how to fill in each field (the right content in the components?)
  * Do users find having a ‘Review the form’ page valuable?
  * Do users find merging the GI Bill form and the IRIS form into one form acceptable?

* Information design: 
  * Do users find having chapters valuable, and if so, are the form’s chapters the right number and right content on each chapter 
  * Do users feel the form’s fields are organized on each chapter in an inuitive manner?

* Interaction design: 
  * Do users login to use the application?
  * Do users understand how the information is displayed in a clear and understandable manner (the right UI controls in the components)? 
  * What do users think will happen after they’ve submitted and what do they want to happen (and what kind of information to see)?
  * Would users use the form on their mobile device - why or why not?

* Navigation/Information architecture
  * Are users able to navigate through the form easily and complete the form?


## Research Methodology 

A task-based usability study was conducted remotely with GoToMeeting between Dec. 14th to 18th, 2020. A remote moderator began with an introduction on the purpose of the session, and participants completed one main usability task - to submit a question about their eye glasses tied to their local VA in Allentown PA for themselves using the redesigned IRIS experience on staging.va.gov. Both Web and mobile versions were tested, and participants were asked a series of questions afterward as tied to the research questions below. Remote observers and note takers were also in attendance.

The research assessed the form’s ability to support users on one main task, the ability of a user to fill out the form (navigating screen by screen, understanding the language on the form, etc.). 8 of 8 participants were able to successfully submit the form. For full details of the sessions please see the transcripts of the sessions.

## Hypotheses

Prior to the study, we hypothesized that users will be able to complete the form but may have issues with the following:
- Ability to understand the language used in the drop down menus 
- Frustration with the length of the form (the fields in the form) and anything that seemed to extend the experience (i.e. the Review page)

Specifically:

We know that users felt the current experience using the drop down menu was difficult and the overall experience felt antiquated.
We believe that using the VA Design System’s use of drop down menus, chapters and review page...
For users of the form (i.e. Veterans, family members, general public etc.)…
Will result in forms being completed and people expressing positive feedback on the experience.
We’ll know we’re right if the form is successfully submitted and we receive positive feedback.
 

### Participants

* 8 Veterans

* Gender
  * 5 women
  * 3 men
  
* Geographically diverse: 
  * CA, FL, GA, MN, NC, PA, TN, TX

* Age range of our participants:
  * 3 participants 35 - 44
  * 3 participants 45 - 54
  * 1 participant over 65
  * 1 participant no age stated


## Key Findings

These are in no particular order of priority - numbers 1-5 highlight what worked, and number 6-8 are findings that require further action

1. Participants were able to successfully submit the form 
2. The form has the right number of chapters 
3. The review page is useful to keep so people are able to review their entries before submitting
4. The confirmation message is useful to keep so people know the system received their message
5. Combining GI Bill and IRIS into one form will simplify life for Veterans
6. The content was confusing for some participants
7. The number of options in some of the drop down menus are extensive which makes the list hard to navigate
8. The number of fields was excessive for some participants

## Details of Findings

**1. Participants were able to successfully submit the form** 

- All 8 out of 8 participants were able to navigate across the multiple chapters in the form and were able to fill in each field (i.e. select options in the drop down), meeting the success criteria of in the usability test of submitting the form and seeing the confirmation message screen.
- Participants noted this was an improvement because the modern experience made it feel consistent to the rest of the va.gov experience.


**2. The form has the right number of chapters** 

Chapters can be a way to ‘chunk’ content in a form so that a user can cognitively switch between different types of content and know the section they’ve completed won’t need to be revised. Chapters are built into the VA Design System, and in the case of IRIS we divided the chapters into a inquiry related chapter, a Veteran info related chapter and a contact info related chapter. Some team members hypothesized that multiple chapters would seem to extend the experience and make it seem ‘long’.

Participants validated that the number of chapters wasn’t excessive, and that the content on each chapter was intuitively organized.

- Participant #8: “Yes like if my husband was filling this out and doesn’t have the patience, knowing what step of what, is helpful. For other veterans or spouses who need to know, I’m on step 1, I have 3 more steps to go. That is extremely helpful”

Additionally participants validated that the fields on each chapter were intuitively laid out in the right order within each chapter.

*Implication:*

Information chunking allows people to feel like they are interacting with certain types of content and when they move onto the next chapter they’re one step closer to completing their task. This will also be key as more conditional based logic for UIs per lines of business will play a role in the future.

*Action:*

none required - the chapter page is built into the redesigned IRIS experience.


**3. The review page is useful to keep so people are able to review their entries before submitting** 

The review page has accordions the user can expand to view and edit the data they have entered on the previous chapters. Upon clicking on the 'edit' button, the user can add edit or delete content, save and eventually submit the form. Some of the team had hypothesized that this was adding an unnecessary step in the flow and that the form was already too lengthy compared to a traditional Contact Us Form, and queried if we should remove the page.

Participants validated that the review page was worth keeping especially since it is a commonly found design pattern on other forms on VA.gov (and in general outside of public sector sites), and because it’s important for users to be able to review content they may have entered earlier on another page but not remember. This is especially a consideration with a population that may be experiencing cognitive challenges.

- Participant #3: “I like how you could click the little crosses or hashes to review what you have in there”
- Participant #7: “Useful to review your information, because I tend to mistype when I’m in a hurry”

_Implication:_

Wherever possible, users want to be able to review what they’ve entered on a form if it is lengthy and especially if broken up across multiple screens, and the Review page is one way of empowering users to ensure the data they’re entering is accurate and that they can change content as necessary.

_Action:_

None required - the review page is built into the redesigned IRIS experience.

**4. The confirmation message helps people know the system received their message** 

In the current IRIS product, users get a confirmation message when their message has been successfully submitted. While this is part of the current IRIS experience, some team members hypothesized that the extra step with this confirmation message many not be necessary, so we wanted to validate that the confirmation message functionality was valuable, and if there was particular content to add - for example, a copy of their message as well as a confirmation number.
Participants validated that the confirmation message was useful, and the content could be minimal - confirmation that the message was successfully sent, that it was emailed to the participant and that they have a confirmation number.
Some participants noted they liked having the number to follow up with and would write those types of pieces of data down separately to follow up

- Participant #1: “Am I going to get an email with this number too? Otherwise you’re relying on me taking a screenshot here”
- Participant #8: “That content is perfect, if I needed to reach somebody about that message. If I don’t hear back I can say hey I sent this on Dec. 17th and nobody got back to me and here’s the number”

_Implication:_

Users benefit from having confirmation that the system has performed properly and the form was submitted, and getting the confirmation number to help with follow up as needed

_Action:_

None required - the confirmation page is built into the redesigned IRIS experience.
 
**5. Combining GI Bill and IRIS into one form will simplify life for Veterans**

The project initially started with a hypothesis that we would combine IRIS, MyHealtheVet’s (MHV) contact us form and the GI Bill Contact form all in one. After analysis it was found that MHV was running its own system and separating the form from their secure messaging would be difficult. We also determined that combining IRIS and GI Bill’s contact pages had no such obstacles. 

We combined the GI Bill’s drop down values in the new IRIS page and asked participants if this felt like an intuitive solution or if they preferred the forms separate - was there anything specific to the content in the GI BIll that merited it being its own drop down menu or its own page.

Participants supported the idea of combining the two forms.

- Participant #7: “Yes, it is useful for GI Bill and the main Contact Us to be combined”
- Participant #10: “Yes, that is SO necessary, since there are so many competing fiefdoms. If you go on VA.gov, they have 57 different sub-degradations. What in the world was anybody thinking! It's all 1974 internet yak! It's embarrassing!”

_Implication:_

Centralizing the ways users can contact the VA means saving time having to look for Contact Us forms, and allowing users to have a seamless experience.

_Action:_

None required (the forms have been combined in the version on Staging)
 
**6. The content was confusing for some participants** 

We can think of content in the form in two broad buckets - the supporting text content of the form itself, and the content in the drop down menus tied to the various Lines of Business within the VA. The options in the drop down menu were being finalized at the time of testing but we hypothesized that we could validate the work to date and the design pattern use of multiple drop down menus. We observed how participants interact with the separate drop down menus to validate their use and to validate the content so far. As the full list of options is finalized, usability testing before launch to validate that the content is sufficiently streamlined but also to validate that people aren’t looking for options that have been deleted should occur. 
Participants questioned some of the supporting text (‘‘respondent burden’’) and some participants struggled with the copy in the drop down menus. Additionally, because of the structure of drop downs, it’s not intuitive necessarily where things ‘live’ naturally (information hierarchy) without a user having to interact with the menus and ‘learn’ the hierarchy

- Participant #4: “Closest would be medical devices but the I don’t feel accurately describe my glasses, if I had to pick one, I’ll use “Prosthetics” - it’s not correct, but I will choose that”
- Participant #11: “Would glasses be considered Medical Devices? I’ll try that since it doesn’t really fit in anything else”

_Implication:_

If people select the ‘wrong’ option the inquiry may need to be rerouted manually by a contact center agent, thus adding extra time for an inquiry to be resolved. Users may default to picking up the phone or alternative methods of contact rather than using IRIS, or become frustrated, thus lowering the perception of the VA in the mind of users.

_Action:_

- Standardize the content to fit VA content strategy 
- Removing acronyms and ampersands from the drop down menus can help, etc. as these can prevent the ability to clearly understand something. Card (#141) captures some of the content strategy to explore and there are other stories later in this report that details more concrete actions to take.
- Revise the drop down language to eliminate duplication - for example revise ‘Home Loan Guaranty/All VA Mortgage Issues’ to ‘Home Loan Guaranty/Mortgage’ - we don’t need ‘issues’ or ‘VA’ in the option. Another example is the use of ‘Home Loan Mortgage’ as a Level 2 drop down option.

- Explore having a glossary - perhaps utilizing the ‘additional info’ component (https://design.va.gov/components/additional-info) as a way to provide a reference people have handy to learn what the options in the menus are

- Add a sentence introducing what information is captured (‘we’ll asking you about your question, then capture your information - this should take about 10 minutes’) at the very top of the form to explain what respondent burden is to help users feel aware of the process and understand the terminology

**7. The number of options in some of the drop down menus are extensive which makes the list hard to navigate.** 

When a user selects ‘Health and Medical Issues and Services’ then Medical Issues at a Facility from the drop down menus, they’ll get a list of Medical Centers. The existing IRIS has approximately 230 entries and the redesigned IRIS is using the medical facilities list on VA.gov (ref: Form 10-10EZ) with approximately 1040 entries. The list of locations (cities, towns) is currently almost alphabetical by default - if you’re in the drop down and type the first letter of your location (‘W’) it will go down to the ‘W’s but it’s still a little cumbersome if users are unaware of if that functionality works.

- Participant #1: “This dropdown of the medical facilities is a lot to go over, not my favorite way of looking at it. f you have a weird VA in the chunky middle (of the list of locations) it might be harder to find”
- Participant #8: “Can’t I just type? It would make it easier if while I was in that box, I could type a few letters to start the search”
- Participant #11: “Start with state so [I] don’t have to find [my] way through Ohio and PA to find his clinic in VA”

_Implication:_

Users will become frustrated by the experience of having to navigate through this many options. Not having modern search functionality may affect user’s perception of the VA brand.

_Action:_

- Add copy that says ‘type first letter of your location to go to that selection’ above the drop down menu as help text
- Explore alternative design options - a dropdown menu with states that has some type ahead functionality of a search box at the top of the menu
- Alphabeticalize the Medical Center list to help with readability
- Many of the Medical Centers are all caps - make them Sentence Case instead to help with readability. Do we need to sort by type of center as well?

**8. Some felt the number of fields was excessive**

The IRIS form captures the inquiry, Veteran info and contact information about the person submitting. We started with the existing set of fields, simplified it and asked participants if any fields seemed irrelevant or if any fields were missing that they expected to see. Many fields affirmed that fields felt ‘extra’ and quickly started to look for required fields in order to do the bare minimum to submit the form.

- Participant #1: “I think they need to let go of all this asking for your SSN, the DoD has stopped asking for it, I’m over it, stop asking for my full social”
- Participant #4: “Why do I have to add my service start date for [submitting a question about] my glasses?”
- Participant #11: “The page with all the non-mandatory fields feels like superfluous information. Do you need it to narrow down who this person is? Last 4 of social also works. [On Branch of Service being a required field]: “Why is that significant in this setting? Is there a Marine desk that will work with me?”

_Implication:_

As time required to fill out the form increases, so does frustration by users who can feel this experience stands in the way of them receiving help. This will be a key area to watch as additional content will be added from Lines of Business (the ‘conditional logic’ work ahead).

_Action:_

- Reevaluate which fields are absolutely necessary by a) looking at what lines of business actually require to take action on and b) what data we have in Oracle to understand which fields are actively being filled out. 

- Reconsider how much is made required especially as Lines of Business are requesting to make more conditional logic and required fields a new standard for the form. As these more conditional logic decisions shape the UI, more usability testing before launch should be mandatory to ensure user frustration doesn’t translate into people not filling out the form and calling instead.


## Additional Insights

We also asked participants about their expectations for secure messaging and authentication, as well as about the Contact Us landing page experience, where we shared a wireframe of that team’s work. We asked questions about the content on that wireframe and sought to understand if there was a set order of how they would engage with tools like FAQs and chatbots. There appeared to be no consensus on the order of how people interact with Get Help products, but the wireframe was positively received. As both secure messaging and authentication will shape the future work for IRIS we will likely require validation in usability testing to get a better sense of how our design approach will work. Additionally, some of the stories to address problems highlighted in this study were not yet played at the time of usability testing - these cards have been tagged in Github on our board as ‘must have’ and are critical to ensuring we deliver a consistent product, including [Add Help Text](https://github.com/department-of-veterans-affairs/orchid/issues/97), [Address UX Debt](https://github.com/department-of-veterans-affairs/orchid/issues/32&sa=D&ust=1610472428477000&usg=AOvVaw1WqYaEbojlx11FXfetjuvf), [Clarify content questions](https://github.com/department-of-veterans-affairs/orchid/issues/141), [Incorporate 'should have' feedback from VA SMEs](https://github.com/department-of-veterans-affairs/orchid/issues/85).

## Results of Hypotheses

We validated that while users were able to complete the form, some users still struggled with the content of words in the drop down menus in particular. 

We validated that some users were frustrated with the length of the form, i.e. they expressed concerns that the number of fields seemed excessive.

## Next Steps 

- Share findings with SRA team who will be taking over IRIS to determine actions for the backlog
- Share findings with stakeholders to determine actions for the backlog


## Appendix

- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/iris/Design/research/Usability-Testing/IRIS%20Usability%20Testing%20Conversation%20Guide%20Fall%202020.md)

- [Session notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/iris/Design/research/Usability-Testing/Transcripts)

- [Pages tested](https://staging.va.gov/ask-a-question )
