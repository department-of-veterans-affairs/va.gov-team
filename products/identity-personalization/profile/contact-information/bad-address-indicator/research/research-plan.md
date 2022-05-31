Research Plan for Profile, Bad Address Indicator, May 2022
==========================================================

Background
----------

When mail is sent to a Veteran and then returned to the VA, the address is marked as "bad" in VA Profile. The address may very well be a real, valid address, but the returned mail implies that it is no longer the right address for the veteran for whom the mail was intended. Currently, 300K veterans have the bad address indicator flag on their mailing address in VA Profile.

This effort aims to encourage Veterans with flagged addresses to view and update or confirm their information.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/bad-address-indicator).

### OCTO Objectives

We're implementing alerts to indicate the Mailing address is bad and encourage Veterans to update their information. The addition of a bad address indicator should help fulfill our north star objective to increase the quality and reliability of VA services by allowing Veterans to view and update their information.

These additions also address the following [OCTO-DE goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):

-   Logged-in users can update their personal information easily and instantly
-   Logged-in users have a personalized experience, with relevant and time-saving features

### Veteran Journey

Since Veterans can have a flagged mailing address to view and update in their contact information at any time after establishing benefits with VA, this work impacts the Veteran journey from Starting Up and beyond.

Research Goals
--------------

### 1\. Validate that our proposed alert method successfully prompts Veterans to update their mailing address

-   Do users notice the alerts?
-   How urgent do Veterans consider the alerts?
-   Are users inclined to ignore or follow the alerts? 

### 2\. Validate that our alerts are easy to understand
-   Can users understand the instructions included in the alerts?
-   Do users understand how to update their address vs. confirm their address?

### 3\. Validate that Veterans can easily update or confirm their Mailing address by following these alerts
-   Can users easily navigate to the Contact information page from the Personal information page using the alert link?
-   Can users easily navigate to the Mailing address from the top of the Contact information page using the jump link?
-   Can users easily locate the smaller alert within the Mailing address field?

### Outcome

We'll use the findings from this research to update our alert content and inform our MVP designs.

### Hypothesis
-   Veterans will easily locate the main alerts
-   Veterans will use the alert links to reach the Mailing address field without difficulty
-   Veterans may have difficulty understanding the alert instructions
-   Veterans may have difficulty understanding how to update their address vs. how to confirm their address
-   We believe the design for the alerts will be effective at drawing attention to important information

Method
------

We'll conduct remote usability testing over Zoom using a prototype on production or in CodePen. This allows us to use a code-based prototype and be more inclusive with our recruiting approach. If testing on production, we will pause the recording as users log in.

### Research materials

-   Link to [conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/research/conversation-guide.md)

Recruitment
-----------

### Recruitment approach

We will recruit Veteran participants using a lean maximum variation strategy. We'll leverage Perigean's recruiting services to find our participants.

### Recruitment criteria

Schedule 16 Veterans for a minimum of 8 successfully completed sessions.

#### Primary criteria (must-haves)
-   must be LOA3 (identity verified) on VA.gov. Participants will likely not know what this means, so please confirm this prior to testing.
	-   This can be confirmed by having users sign into VA.gov with any of their credentials and having them go to the VA.gov profile.
	-   If they are prompted to verify their identity, that means they are LOA1 and they are not suitable for testing.
	-   If they can see any sections in profile other than Account Security, they are LOA3 and can participate in testing.
-   must be able to screenshare via Zoom. Prior to the session, please confirm:
	-   They're comfortable sharing their screen after they've logged into VA.gov. Information will be viewable to the moderator and any observers.
	-   They have Zoom downloaded prior to the session and they know how to screenshare.
	-   If they can not get Zoom working, there is no interview portion of this research and they will not be able to participate.
	-   Qualifier: Are you willing to share your screen with our moderator after you log in to VA.gov? The session will take you to a section of VA.gov where your Personal information will be viewable. (Answer should be yes to qualify)
-   must be comfortable providing the email address they use to sign into VA.gov. We need this information 2-3 days before the study begins in order to give participants access to the prototype in production.
-   50% of participants should be able to participate from a desktop device.
-   50% of participants should be able to participate from a non-desktop device (tablet or mobile phone).

##### Gender
-   8 women, 8 men

##### Inclusion
-   4 participants who use assistive technology (e.g. screen reader, magnification) - including 3 people who use assistive technology other than zoom magnification (such as screen readers, sighted keyboard users, hearing aids, or voice recognition). 
-   8 participants who identify as having a cognitive disability
-   8 participants who identify as other than white
-   3 participants who identify as other than straight/heterosexual
-   2 participants who identify as transgender, non-binary, or another gender identity other than cis-gender
-   8 participants age 55+
-   5 participants who do not have a college degree
-   4 participants who live in a rural area

#### Secondary criteria (nice-to-haves)

##### Inclusion:
-   At least 3 Veterans living abroad (please work with researcher to coordinate time zones)
-   At least 2 Veterans with other than honorable discharge
-   At least 3 Veterans who have an immigrant origin

##### Geographic distribution:
-   4 participants from the east coast
-   4 participants from the midwest
-   4 participants from the west coast

Timeline
--------

### Prepare

When will the thing you are testing be finalized?

-   TBD

Please indicate the date and name of a mock participant for a pilot session.

-   TBD

### Research sessions

What dates do you plan to do research?

-   TBD

### Length of sessions

-   Sessions will be 30 minutes

-   Schedule minimum of 30 minutes between sessions

### Availability

| Date       | Times (Eastern) |
| ---------- | --------------- |
| ?/??/2022 | 10am - 8pm |	
| ?/??/2022 | 10am - 8pm |
| ?/??/2022 | 10am - 8pm |
| ?/??/2022 | 10am - 8pm |

Team Roles
----------

Please list the people who will be serving in each role. Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker

-   Moderator: 
	-   Christina Gednalske, <christina.gednalske@adhocteam.us>
	-   Liz Lantz, <liz.lantz@adhocteam.us> Liz will facilitate sessions beginning before 12:00pm EST
-   Research guide writing and task development (usually but not always same as moderator): Christina Gednalske
-   Participant recruiting & screening: Perigean
-   Project point of contact: Christina Gednalske
-   Participant(s) for pilot test: TBD
-   Note-takers: Perigean
	-   Since we will need to pause the recording for the majority of the session, we will need verbatim notes.
-   Observers:
	-   <samara.strauss@va.gov>
	-   <liz.lantz@adhocteam.us>
	-   <sharon.kasimow@gcio.com>
	-   <mark.dewey@gcio.com>
	-   <adam.whitlock@adhocteam.us>
	-   <tom.harrison@adhocteam.us>
