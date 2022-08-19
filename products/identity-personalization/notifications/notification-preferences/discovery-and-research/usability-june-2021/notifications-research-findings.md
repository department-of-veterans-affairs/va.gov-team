# Profile Notification Settings Research Findings

VSA, Authenticated Experience

Liz Lantz (liz.lantz@adhocteam.us), 07/02/2021

View the [research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/usability-june-2021/notifications-research-plan.md) and [conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/usability-june-2021/notifications-conversation-guide.md).

## Research Goals

Through this research, we wanted to learn about the Veteran mental model around notifications, and evaluate our proposed design for a notification settings section of the VA.gov profile.  Specifically, we wanted to find out:

1. What expectations do Veterans have about discovering, receiving, and managing notifications?
2. Does our solution enable Veterans to manage notifications without encountering UX hurdles, especially when their profile is missing contact information?
3. What kind of static content support might make sense for this section of profile?

We're also working on improvements to our user experience for removing contact information from profile, so we included one task to evaluate that process.

## Research Methodolgy

We conducted remote, moderated sessions over Zoom.  Most sessions lasted 50 minutes. We started the session with an interview to learn more about expectations and experience with notifications, and then asked participants to complete 5 tasks ([read conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/notifications-conversation-guide.md)) in a hi-fidelity, desktop prototype hosted on UXPin.

As sessions progressed, we iterated on our conversation guide and prototype in the following ways:

- When asked to show us how they would set up a notification for updates on their medication, the first 3 participants immediately went to health related sections of the homepage.  We made the first task more general - "Show us where you would go to stop receiving text messages from VA" - to avoid leading participants into a specific benefit category.
- 4 of the first 5 participants unexpectedly experienced significant confusion in the contact email address section of profile (located at the bottom of the personal and contact information page). We created a second prototype for the remaining of participants to test whether or not reversing the order of content improved the user experience of that section.
  - [Personal and contact information page for participants 1-5](https://preview.uxpin.com/5ecec4de6ec34eddc9f095677a881be3646124ce#/pages/139106944/simulate/no-panels?mode=i)
  - [Personal and contact information page for participants 6-9](https://preview.uxpin.com/21c45602ef100852a3c63654bb8f5ad809487c5d#/pages/139696479/simulate/no-panels?mode=i)

### Who we talked to

We spoke to a diverse group of 9 Veterans:

- 3 women, 6 men
- 4 participants who identify as Caucasian, 3 participants who identify as Black or African American, 2 participants who identify as American Indian or Alaska Native
- Participants ranged in age from 34-74, with the most participants (3) falling into the 35-44 age range.
- Participants live in Florida, Pennsylvania, Maryland, Arkansas, Oklahoma, Ohio and Texas; 5 participants live in a rural area.
- 2 participants had identified cognitive considerations of PTSD and/or TBI.
- Education level ranged from high school/GED or equivalent to Master's degree, with the most participants (3) having completed some college (no degree). 



## Research questions

We designed our [conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/notifications-conversation-guide.md) based on the following research questions:

1. What expectations do Veterans have about managing notifications?
2. What kind of notifications do Veterans expect to be able to receive from the VA?
3. What words do Veterans use to talk about or search for notification content?
4. How do Veterans expect to be able to discover notifications they're not currently opted in to?
5. Does our solution enable Veterans to manage their notifications without encountering UX hurdles?
6. Are we providing sufficient contextual information through group and notification names?
7. Do Veterans expect to be able to update their contact info right here on the page?
8. If a Veteran has partial contact info (missing a phone or email from their profile), do they understand how to make updates so they can get notifications to that channel?
9. Does a Veteran with partial contact info they understand email/text is also available when they don't have a checkbox to click?
10. Do they know how to get back to notification settings once they add info?
11. What kind of static content support makes sense for this section of profile?
12. Do Veterans experience any usability hurdles when removing contact information from their profile?

## Key findings

1. It was not intuitive for participants to look in profile to manage notification settings, and most don't actively manage settings for notifications they currently receive.
2. Overall, our design provides a good solution for Veterans to manage notifications, but status messages and available notification channels were not clear to all participants.
3. Notification groups were clear to participants for the most part, but some wanted to see groups in a different order.
4. Some individual notification names would benefit from additional context. 
5. Many participants expected they'd be able to get all notifications by email *and* text. 
6. Leaving notification settings to add missing contact information caused confusion for participants. 
7. 5 of 9 participants experienced concerns and confusion about their sign-in vs contact email address. 
8. All participants easily understood how to remove contact information, but some wanted more information about the impacts of doing so.
9. Participants see value in notifications related to health care, claim status updates, applications-in-progress, and education benefits. 

### It was not intuitive for participants to look in profile to manage notification settings, and most don't actively manage settings for notifications they currently receive.

Our first task asked participants where they would go to either set up or turn off notifications.  Six participants first looked on the homepage under various sections such as health care and records.  We prompted them to see if there was anywhere else they would look; responses included using site search, the contact us link, and My Health eVet (MHV).

> Probably under health care. I would say under refill and track your prescriptions. or, I guess, the other thing I could do if I didn't find it there, I'd probably go up into the search block. - P3

Once guided to the profile menu options (My VA, My Health, Profile):

- 5 of 9 participants stated they would expect to find notification settings under My VA. 
- 2 said My Health
- 2 chose Profile.

Part of the disconnect between profile and notification settings could be due to the fact that the 6 of 9 participants stated they don't update settings for notifications they currently receive. A participant with TBI felt the concept of managing notifications was overwhelming:

> "Computers is a lot. You have to click on it. You probably have to go to their website. I have to figure out how you're [company website] going to do all of this. And I can't figure it out. Then I'd have to go on Google and watch a Youtube video. I leave it like how it is." - P2

Those that said they did update settings talked about updating email subscriptions via the unsubscribe links in the email itself, not logging into a website and going to a notification settings section. Two participants commented that they thought it was odd to see notification settings in profile and expected it to be under a section dedicated only to settings.

### Overall, our design provides a good solution for Veterans to manage notifications, but status messages and available notification channels were not clear to all participants.

The majority of participants found value in seeing contact information at the top of the page, were easily able to understand the notification groups and items, and could intuitively make changes to the settings. 

> "I think it seems organized pretty well. I do like that each of these is in their own box with their own header. It makes it easy to see what kind of notifications I'm handling here. And then I can hit edit." - P1

Participants found the status message under the notification name to be helpful, but it took 3 participants a long time to notice it.  They stated it was hard to see because it was too small and not bolded, in comparison to the other type on the page.

> "I didn't really in the beginning, see the "off" there. I believe it was lower case letters, not bolded or anything. I would do something there to enhance that so my eye would go to it. Even this right here reads "notify by text, on" - I would do something more noticeable that would bring my eye to it." - P9

*Below: screenshot of "Your health care" notification group, with status messages circled to highlight them.*

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/images/notification-settings-status-message-example.png)

Participants also verbalized expectations about being able to receive email and text messages for all notifications. Our design didn't make it clear which channels would be available for each notification.

### Notification groups were clear to participants for the most part, but some wanted to see groups in a different order.

Our prototype included 4 notification groups in alphabetical order:

- Applications, claims, decision reviews, and appeals
- Benefit payment and debts
- General VA information and updates
- Your health care

All participants clearly understood the notification groups. Four participants stated that health care notifications were the most important to them; 3 specifically said they would want to see the "Your health care" group first.  

> "The health care [notification group], I think that should come up at the top." - P3

Two participants commented that the "Applications, claims, decision reviews, and appeals" group wouldn't matter to them since they've already completed those processes

> "I already got my disability rating so I wouldn't need any applications or anything and since I have my rating, there is no need to appeal because I am at 100%. And do those two things [notifications within group]...I would skip right by this box." - P9

### Some individual notification names would benefit from additional context.

When talking through the individual notifications, participants made incorrect assumptions or weren't sure about what some notifications were.  

- 2 participants were unclear if text messages about active claims would be covered by either of the notifications in the "Applications, claims, decision reviews, and appeals group". 

- 3 participants didn't know what kind of payments would be included in the "Scheduled payments and debts" notification.

  > "Scheduled payment updates, I'm not sure exactly what that would be. I don't know if that would be benefit payments such as education benefits?" - P16

  Additionally, 2 participants didn't see the value in the "Scheduled payments and debts" notification; they perceive that it's not something that changes often.

  > "I don't know why that would exist because it is not something that changes often". - P10 

### Many participants expected they'd be able to get all notifications by email *and* text.

Our prototype didn't include a text message option for COVID-19 updates or appointment reminders; it took participants a while to understand that some notifications were only available via one channel.  Some needed to be explicitly told.

*Below: screenshot of "Your health care" notification group read mode (on left) and edit mode (on right). It wasn't clear to participants that appointment reminders are only available via email.*

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/images/notification-settings-your-health-read-edit.png)

Six participants expected notifications to be available by both text *and* email. Many didn't understand why they couldn't get a text message if their mobile number was on file, and didn't have a confident guess as to why that might be.

> *Moderator explains some notifications were only text and some only email* "That was not clear to me. I don't like that. If you are going to give me the option, give me the option - don't limit my options. " - P3

> "The VA just didn't make it an option on the website. I don't know why not. It seems like if they can do prescriptions [updates] and you get text or email option, you should probably get a text or email option on appointment reminders. " - P9

Participants shared various reasons for wanting to receive notifications by both channels. There was a slight preference for text over over the email.

- Text messages are received more immediately, and would be useful for time-sensitive notifications such as appointment reminders.
- Emails can be printed, easily searched, and use for reference later. 
  - This was especially important for participants with TBI.
  - Participants commented that emails are more helpful for notifications with a lot of information.

### Leaving notification settings to add missing contact information caused confusion for participants.

 [Task 4](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/notifications-conversation-guide.md#task-4-update-contact-information-and-sign-up-for-email-notifications---8-minutes) had participants to sign up for COVID-19 email notifications, which required them to add an email address on the personal and contact information page of our prototype. All participants understood the content telling them they needed to add a missing information, but leaving the notification settings page to do so caused confusion and a lack of confidence that the task had been completed.

- 2 participants thought the "contact email address" section wasn't the correct place to add their email because they were looking for something that said "COVID-19", since that was the notification they were trying to sign up for.

- 3 participants were confident they had completed the email sign up task simply by adding their email address.

  > "Your contact email address is showing, and that box is not empty no more, so I would assume it's done." - P14

- 3 participants were unsure whether or not they had completed the sign-up process.

  > "I have not a clue. Because all you've done is added your email, you don't know whether the notifications are coming or not" - P11

Six participants made comments that they prefer to add the email address directly on the notification settings page. When prompted, they stated they'd expect a pop-up window or something similar, rather than going to a new page.

> "It was confusing going back and forth between the contact section." - P3

> "It's a lot of button clicking and hunting to put your information in to get that piece of information sent to you. It would've been better if once you click on the edit button, and type your email address in right there, and click add." - P11

### 5 of 9 participants experienced concerns and confusion about their sign-in vs contact email address.

We asked participants to add, and later, remove their contact email address during the session.  It was clear that some people skipped right over the ID.me content in the contact email section, but others got confused or worried.

When adding their email address, 3 participants hesitated and did not understand there was a difference between their login and contact email addresses.

> It seems kind of dumb, if you just put it [email address] in there down below. It's kind of a conflict because it's saying you have to go there [[ID.me](http://id.me/)] to udpate your email address, but you've already got it down there. Maybe I'm missing a big point...If you're dealing with someone that has issues, mental, physical, this could really put a cog in the wheel - P6

*Below: screenshot of "Contact email address" section of profile after a participant added their email address.  Content referencing sign-in email address is above the contact email address edit function*.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/images/notification-settings-contact-post-email-addition.png)

The 2 participants with cognitive considerations thought they had to go to another website to add their email after reading the "Update sign-in email address with ID.me" link. 

>"I was trying to see something about COVID, and I didn't see it but then I remembered I clicked on email. So, I guess I have to be verified. Now that's a lot of work. Y'all are going to make me go to another website." - P2

Removing the contact email address revealed additional concerns and confusion. Two were worried they wouldn't be able to login anymore if they removed their contact email address.  

> "I don't like that. The only thing again is because I read about the VA gov/ID.me, and it says this will delete your email across many VA records - does that mean I won't be able to log into VA.gov anymore?"

As mentioned in the [research methodology section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/notifications-research-findings.md#research-methodolgy), we reversed the order of the ID.me and contact email content for the last 4 participants to see if it would improve anything. We saw equal amounts of confusion in both groups.

### All participants easily understood how to remove contact information, but some wanted more information about the impacts of doing so.

We tested one change not specific to notifications in this study: adding a remove button next to edit buttons on the personal and contact information page. Currently that functionality is nested within the edit function, and we'd like to offer more transparency about the ways Veterans can manage their contact information.

*Below: screenshot of current state of profile with remove functionality nested inside edit (left), and proposed change with remove and edit available from read view (right).*

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/images/notification-settings-contact-current-proposed.png)

This change tested well; participants were easily able to find and use the remove functionality.  Our team hypothesized that people would be overwhelmed by the amount of buttons on the page, or they'd accidentally click on button when they meant to click the other.  Both hypothesis were disproven in this study; no button confusion was observed and no participant expressed negative sentiments about the buttons.

However, some participants expressed concerns suggesting the content in the confirmation modal is insufficient.  One participant stated they would not remove their phone number because thought that meant their doctors would not be able to call them. Others commented the information was vague. They wanted to know more about impacted systems, and which notifications they would stop receiving if they removed their email address. 

> "*reads* You might not get some or all. That's kind of very vague to me. Because the VA covers a lot of areas, especially because when you get VA letters - what's happening at the VA, what's happening at your health care system - so if I remove my email will I no longer get updates on the [local] VA system here? " - P16

### Participants see value in notifications related to health care, claim status updates, applications-in-progress, and education benefits.

We asked participants which notifications they're already receiving from the VA.  Six participants are already receiving appointment reminders, and many of those also receive email notifications when their provider sends them a secure message through MHV.  The appointment reminders are particularly useful to those with cognitive considerations.

> "It is hard to remember all your appointments, or just basically sometimes anything, so those have been helpful" - P3

Other notifications participants are currently receiving from the VA are:

- COVID updates
- Claim appeal updates
- Newsletters from their local VA
- Newsletters from the VA related to women Veterans and "new research that the research branch puts out."

Multiple participants thought reminders for in-progess applications would be helpful. We asked what other notifications would be helpful from the VA that they are not currently receiving, and participants named:

- Updates on claim appeals  

- Appointment reminders 

- Education stipend payments

  > "It would've been nice to have a notification to say, hey by the way your next education stipend is only going to be 250 dollars [instead of $1100] so I can budget that, instead of all of a sudden just getting it. "

- Text notifications when a provider sends them a secure message (not just email).

- Prescription shipment notifications *including the name of the medication in the shipment*.

- Notification before someone from the VA calls and requests personal information over the phone.

## Recommendations

1. Make it easy for Veterans to manage notifications throughout their VA journey.
2. Provide a way for Veterans to update their contact information without having to go to a new page.
3. Consider making all notifications available by text and email.
4. Revisit the design for status messages and surfacing the channels through which Veterans can receive notifications.
5. Revisit the page IA to explore how we might better align with Veteran priorities.
6. Update profile content to improve clarity and comprehension.
7. Revisit the design and content around login and contact email addresses.
8. Move forward with moving remove functionality to the read mode of personal and contact information page.
9. Consider adding notifications participants mentioned to future versions of our notification engine.

### Make it easy for Veterans to manage notifications throughout their VA journey.

With our current authenticated IA, profile seemed like the most logical place for notification settings; it's common on websites to nest this under a personalized navigation. However, our research shows that profile wasn't the first, or even second place most of our participants thought to look. We should explore how we can make it more intuitive for Veterans to manage their notification settings through VA.gov.  Some avenues to consider are:

- Creating a separate settings section outside of profile.
- Surfacing notifications in My VA; many participants expected to find something about notifications there.
- Creating a static landing page to help Veterans that resort to using search when they can't easily find what they're looking for.

Our research shows that Veterans don't regularly manage notifications, and when they do, they do it at the notification level. Let's make it as easy as possible for them to update settings at the notification level. For example, allowing them to opt out of a text message by sending `STOP`, or clicking a link at the bottom of an email to unsubscribe.

We should also make it easier for Veterans to discover notifications at relevant touch points throughout their VA journey.  For example, making sure they're learning about appointment related notifications at their doctors office, or on relevant health pages throughout the site.  

### Provide a way for Veterans to update their contact information without having to go to a new page.

Participants expected a pop-up on the notification page to edit contact information. When we didn't meet that expectation, it caused confusion to the point that some participants wanted to leave the site entirely. 

We should provide a way for Veterans to update (add, edit, or remove) their contact information directly from the notification settings page.  We already have a modal solution in place that could be part of our MVP, depending on the timeline of our partners in this work.  

### Consider making all notifications available by text and email, and adding notifications participants mentioned to future releases.

Participants expect to be able to get notifications by the channel that works best for them, and shared valuable insights about notifications that would be useful. Teams that are sending notifications through VA Profile should consider:

- Making notifications available by text and email
- Adding notifications participants mentioned to the communication preferences engine (such as changes about education stipend payments, and claim status updates)
- Updating notifications to include additional relevant information (such as the medication name when confirming prescription shipments)

Additional research to build a more in-depth understanding around Veteran expectations and preferences for notifications would be useful to guide decisions in this area.

If we can't make notifications available by all channels, we need to be more specific about which notification channels are available. We may also need to provide information about why some notifications have one channel and others have a different option.

### Revisit the design for status messages and surfacing the channels through which Veterans can receive notifications.

Multiple participants struggled with small text in a regular type face in this study; we also heard comments from participants in another recent study looking at profile that the typography was too small.  Let's explore how we can make the status messages more clear, while maintaining the clean, uncluttered UI participants positively responded to.

We should also explore how we might make it more clear that all notifications are *not* available through email and text.  The current design doesn't explicitly state that, and it caused confusion.

### Revisit the page IA to explore how we might better align with Veteran priorities.

Our alphabetical order approach wasn't particularly useful to Veterans. Two participants stated the first group (Applications, claims, decision reviews, and appeals) would be useless to them, and 3 different participants explicitly stated the health care notification group would be most important. Health care notifications were most frequently mentioned when we asked participants the type of notifications they'd want to receive. 

This feedback aligns with what we've learned in previous research. During a June 2020 study Veterans told us that [health and disability benefits are a priority for them](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#health-care-and-disability-benefits-are-king), which supported findings from the [2018 VA brand consolidation research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#brand-consolidation). 

We should collaborate with our IA resources, and revisit VA.gov analytics to determine if there are ways we can better align the order of notification groups with Veteran priorities and surface the most relevant notifications first.

### Update profile content to improve clarity and comprehension.

Our prototype revealed a few opportunities to improve clarity through content:

- Be more specific about which notification channels are available, or offer some information about why some have one channel and others do not.
- Provide more context about individual notifications. We want to keep our copy succinct, but we also need to set expectations about the information Veterans will receive for certain notifications. A comparative analysis evaluating descriptions for notifications will be helpful here.
- Make content inside the remove contact info confirmation more explicit, so Veterans are clear on the ramifications of that action.

### Revisit the design and content around login and contact email addresses.

This was a major point of confusion for participants in our study. We already tried reversing the order of the content, and adding a small heading.  We need to further refine the approach and explore ways to make the distinction between these two email addresses. One idea could be to create an Email Address section (instead of Contact email address) follow the pattern in other sections of the page with both emails:

*Below: screenshot of updated email section of profile, showing a separate sign-in and contact email address section.*

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/images/profile-email-mock-up.png" width="50%" />

### Move forward with moving remove functionality to the read mode of personal and contact information page.

Adding a remove button next to edit on the personal and contact information page made it easy for participants to understand how to remove contact information.  No one got confused or mistakenly chose the wrong button. We should move forward with our plans to update this pattern in profile.

## Next steps

We identified next steps specific to notification settings, and others that have impacts in other areas of the authenticated experience

#### Notification settings

- [ ] **Share findings and recommendations with VA Profile and VA Notify teams for awareness.** 
  - This will ensure we all benefit from the knowledge gained in this study.
  - We don't have the expectation that all the notifications participants mentioned in our study will become available, or that in the short term we can make any notification available by any channel. 
  - Captured in issue [26913](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26913)

- [ ] **Develop an approach to orienting users to this new capability.**
  - Our research shows profile may not be the first place Veterans look to manage notification settings. 
  - Determine how to best introduce this new feature on VA.gov to Veterans so they manage their settings. Perhaps an onboarding approach?
    - Onboarding may also be useful in helping Veterans understand some notifications are only available through one channel.
  - Captured in issue [26946](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26946)
- [ ] **Consult with IA on the order of notification groups.** 
  - Based on what we heard in this study, we should follow up on [IA feedback in our midpoint review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25679) to consider ordering groups by importance/prevalence. 
  - Captured in issue [26921](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26921)
- [ ] **Revisit the design for status messages and notification channels** 
  - Explore ways to improve clarity and comprehension for 
    - notification status messages
    - the channels through which Veterans can receive notifications. 
  - Work with our content team to ensure alignment on VA voice and tone.
  - Captured in issue [25985](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25985)
- [ ] **Explore how we might enable Veterans to edit contact information within notification settings.**
  - Post-launch activity; we'll establish some KPIs around this to track accordingly.
  - We don’t think the existing modal solution offers the most intuitive or accessible UX for notification settings.  
  - We’ll explore how we might allow Veterans to edit in place, while considering other uses cases on VA.gov that could help make this a reusable component.
  - Captured in issue [26914](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26914)

#### Other areas of the authenticated experience

- [ ] **Move forward with changes to remove button in personal and contact information.** 
  - Design will update documentation and mock-ups for this for FE implementation. 
  - Captured in issue [23665](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23665)
- [ ] **Evaluate how notifications overlap with action items**
  - Regroup with Tressa + team to see where there is overlap (if any).
  - Captured in issue [26949](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26949)
- [ ] **Revisit how we are presenting login vs contact email address.**
  - Explore ways to improve clarity and comprehension for the difference between login and contact email address, through both design and content. 
  - Captured in issue [26950](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26950)

## Resources	

- [MVP definition](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-definition.md) 
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/usability-june-2021/notifications-research-plan.md)	
- [Convo Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/usability-june-2021/notifications-conversation-guide.md)		
- [Prototype](https://preview.uxpin.com/5ecec4de6ec34eddc9f095677a881be3646124ce#/pages/139049739/simulate/sitemap?mode=i)
- Synthesis: [Notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/usability-june-2021/session-notes) and [affinity map](https://app.mural.co/t/vsa8243/m/vsa8243/1623630550601/cbe1799b20d464ea6cedb4629d84851891d51e70?sender=lizlantz1528)
- Presentations:
  - [Complete findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/usability-june-2021/notification-settings-findings.pdf)
  - [Sprint demo](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research/usability-june-2021/notification-settings-findings-readout-sprint-demo.pdf) 
