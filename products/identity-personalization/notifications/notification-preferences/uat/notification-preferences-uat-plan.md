# Research Plan for Authenticated Experience, Notification preferences UAT, October 2021

`draft`

## Background

The VA is ramping up their digital communications efforts, specifically through email and text. As a result, Veterans need to be able to opt in or out of communications and customize through which channels they prefer to be contacted. To meet these organizational and user needs, the VA Profile team is building a communications permissions engine that will integrate with the VA.gov profile frontend and allow veteran-managed settings to be saved and shared across systems at the VA.

See our [MVP definition](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-definition.md) for more details.

### OCTO-DE Objectives 

1. Logged-in users have a personalized experience, with relevant and time-saving features
2. Veterans can manage their health services online
3. Logged-in users can update their personal information easily and instantly

### Veteran Journey

Our MVP includes notifications related to health care and appeal hearings, which are part of multiple stages throughout the Veteran journey:

- Starting up
- Taking care of myself
- Retiring
- Aging

## Research Goals	

The primary goal of our UAT is to confirm that our MVP functionality works as expected.

As a secondary goal we would like to validate that our solution works well on mobile devices and no major usability hurdles have been introduced during the iterations that have occurred since our last usability test.

### Outcome

Based on the outcome of this research study, we will either release our MVP to production, or update our design to correct any significant usability hurdles people encounter.

### Research questions

- Are people are able to successfully set their notification preference?
- Are people are able to add a mobile number to their profile from the notification settings page?
- Are people are able to easily return to the notification settings page after adding a mobile number?
- Are the backend systems supporting those actions are functioning as expected?
- Is our solution is easy for people to use on mobile devices?
- Do people understand the auto-save functionality?
- Do people understand the [experimental input message pattern](https://design.va.gov/experimental-design/input-message)?

### Hypothesis

- Our MVP will work as expected
- We'll discover some bugs we didn't know about
- We have not introduced any major usability hurdles since we last tested our MVP

## Method	

User acceptance testing (UAT)

### Location

Remote via Zoom

### Research materials

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/uat/notification-preferences-uat-convo-guide.md) 

## Recruitment	

Our intended audience for this research is Veterans or caregivers who log into VA.gov. We'll use Perigean to recruit them.

We'll focus our inclusive recruitment criteria on the marginalized groups we didn't speak with during our first study (see below).

### Recruitment criteria

Please recruit 12 participants for 6 completed sessions.

**Primary criteria (must-haves)**

- All participants must be LOA3 (identity verified) on VA.gov. 
  - **Participants will likely not know what this means**, so please confirm this prior to testing. This can be confirmed by having users sign into VA.gov with any of their credentials and having them go to the VA.gov profile. 
  - If they are prompted to verify their identity, that means they are LOA1 and they are not suitable for testing. 
  - If they can see the profile, they are LOA3 and can participate in testing.
  - **Please provide the participant's login email address prior to sessions so we can turn on the notification settings feature to them.**
- Participants must be able to screenshare via Zoom on a mobile device other than a tablet. 
  - Prior to the session, please confirm:
    - They're comfortable sharing their screen after they've logged into VA.gov.  Some personal information will be viewable to the moderator and any observers.
    - They have Zoom downloaded prior to the session and they know how to screenshare. 
  - **If they can not get Zoom working, there is no interview portion of this research and they will not be able to participate.**
  - **Qualifiers:**
    -  Are you able to join a Zoom session from a mobile device other than a tablet, such as a Samsung Galaxy or iPhone? (Answer should be yes to qualify)
    -  Are you willing to share your screen with our moderator after you log in to VA.gov? The session will take you to your VA.gov profile so some personal information will be shared. (Answer should be yes to qualify)
- We need a mix of participants who currently receive VA health care:
  - 50% of participants must currently receive VA health care
  - 50% of participants must not currently receive VA health care
- We need a mix of participants who are and are not registered at specific VA Medical Center sites:
  - At least two participants should be registered at a VAMC in Denver, CO or Asheville, NC
  - At least two participants should NOT be registered at a VAMC in Denver, CO or Asheville, NC
  - **Qualifier:** Are you registered with a VA health facility in Denver, CO or Asheville, NC?

**Secondary criteria (nice-to-haves)**

Gender:

- At least 3 women

Inclusion:

- At least 6 people with cognitive disabilities
- At least 3 people over 55+ (not more than 8)
- At least 6 people who use assistive technology (such as screen readers, keyboard magnification, hearing aids, or voice recognition)
- At least 3 transgender Veterans
- At least 3 Veterans living abroad

Geographic distribution:

- 3 participants from the east coast
- 3 participants from the mid-west
- 3 participants from the west coast

## Timeline

If you are using Perigean to recruit please submit 1 FULL week prior to the start of research for remote research, 2+ weeks for in person. 

### Prepare

When will the thing you are testing be finalized? 

10/20/2021

Please indicate the date and name of a mock participant for a pilot session. 

* Pilot participant email: mark.huber@adhocteam.us
* Date and time of pilot session: 
  * Please schedule 45 minutes to allow for extra time
  * 10/22 12pm EST, or
  * 10/25 2pm EST

### Research sessions

What dates do you plan to do research? 

10/27-10/29

### Length of sessions

Sessions will be 30 minutes with 30 minutes in between sessions.

### Availability

| Date       | Times (Eastern) |
| ---------- | --------------- |
| October 27 | 8:30am - 7pm    |
| October 28 | 9:30am - 7pm    |
| October 29 | 8:30am - 4:30pm |

​	

## Team Roles	

Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	

- Moderators: 
  - Liz Lantz, liz.lantz@adhocteam.us
  - Tressa Furner, tressa.furner@adhocteam.us
- Research guide writing and task development (usually but not always same as moderator):	Liz Lantz
- Participant recruiting & screening:	Perigean
- Project point of contact:	Liz Lantz
- Participant(s) for pilot test:	TBD
- Note-takers:	TBD
- Observers:	
  - samara.strauss@va.gov
  - ana@adhocteam.us
  - erik@adhocteam.us
  - lihan@adhocteam.us
  - taylor.mitchell@gcio.com
  - maria.becker@thoughtworks.com
  - paras@docme360.com
  - beverly.nelson@va.gov
