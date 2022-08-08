# VA Mobile App R1 Usability Testing Summary

September 15, 2020



## Background and goals

Research done from March - May 2020 determined that Veterans desire a VA mobile app, they desire authenticated features most in a mobile app, and the features that are most include claims, appointments, profile, and smoother sign in. This round of research focused on usability testing a high-fidelity iOS prototype of the MVP mobile app. 



## Participant summary

- 5 women, 3 men
- Located across the country in 5 different states. 6 classified as Urban or Major City, 3 classified as Rural. 
- 8/8 had experience with the VA claim and appeal process
  - 4 participants were going through the appeals process
  - 4 participants were going through the claims process
  - Participants were at different stages in these processes, some were planning to file but hadn't begun, others were preparing to file, others were awaiting a decision 
- 6/8 used VA health care benefits
- Range of ages: (1) aged 25-34, (2) aged 35-44, (2) aged 45-54, (3) aged 55-64

  

## Research goals
- **Assess the effectiveness and clarity of the app IA and navigation UI**
  - Identify obstacles to navigating around the app using the bottom toolbar and homescreen CTAs
  - Identify obstacles to locating Personal & Contact Information, Direct Deposit, VA Letters and Documents, Settings, Claims
- **Assess the desired content on Profile, Direct Deposit, Letters and Documents, and Settings**
  - Understand what information Veterans respond well to and what else they would like to add
- **Assess the home screen design**
  - Determine if including multiple CTAs to the same feature is confusing
- **Assess the desired content on the mobile app Claim Status Tool**
  - Understand what information Veterans respond well to and what else they would like to add
- **Assess Veteran perception of the MVP app overall**
  - Determine if participants are satisfied or unsatisfied with MVP app features


## Findings

**Goal: Assess the effectiveness and clarity of the app IA and navigation UI**

### For the most part, participants easily and successfully found what they were looking for.

Most participants used the bottom navigation bar successfully, and most participants seemed to gravitate more towards the in-page CTAs on the homescreen over the bottom navigation. I say "most" here because the bottom navigation bar was cut off by the participant's browser in one session. All participants were able to successfully locate the major sections of the app: Profile, Claims, and Appointments and responded positively to the simplicity and focus of the app.

> "With VA websites today, I wander around, I figure it out, it's like a puzzle. I would say [the app] is user friendly, so easy...it is simple. It isn't cumbersome like some of the other websites."

Every participant found the main menu items in Profile easily and quickly when prompted with specific tasks like updating their mailing address or downloading a letter. In a few instances, a participant looked somewhere else first before finding the information they were prompted to find (for example looking for Military Information under Personal & Contact Information), but only one stumbling block was a pattern across sessions: locating Settings. Participants did not look in the upper right corner and those that did eventually find Settings took awhile to find it. 

**MVP implications:**

- Remove the icon-only approach for Settings and use words. Include Settings in the main Profile menu. Stay away from most icon-only treatments for navigation items.  



### We should lessen the prominence of Facility Locator and heighten Contact VA.

Facility Locator was interesting to participants, but not something most would frequently use. Most participants weren't familiar with Facility Locator, but almost all participants voiced they would use this only primarily when travelling. 

When prompted to locate where they could get help from VA, all participants navigated back to the homescreen and most said they would go to Coronavirus FAQs or Find a VA Location to find out how to contact VA to get help with a question. Because participants overwhelmingly navigated to the homescreen to find help and expressed wanting to see a clear way to get in touch with VA should they need to, we should add a clear CTA for how to contact VA there. 

> "I would put help a number on the first screen - a button to call VA." 

**MVP implications:**

- Remove Facility Locator from the bottom navigation, include as a link within the homescreen.
- Include Contact VA as help link on the homescreen.

  

### Participants didn't stumble on the 4 click flow to retrieve a letter.
Every participant found letters when prompted to download a letter and no participants stumbled to navigate through the 4 screen flow to actually view a letter. All participants understood the share icon in the upper right and expected that when they clicked it they would see their phone's default activity sheet.


----


**Goal: Assess the desired content in the Profile section**

### Overall, participants were satisfied with the content they saw in our prototype. We got consistent feedback on what else participants would like to see in Profile past what we showed. 

It tracks that information in the Profile screens tested well since designs for the MVP app are aligned closely with the recent Profile 2.0 redesign. 

When asked if they had ever visited their profile on VA.gov and if so what they did there, about half of participants said they were "just checking" to make sure VA had the correct information on file for them. Offering a more frictionless, mobile-friendly way to do this simple task would be useful to many people and a strong start. 

> "Based on what you've given me, this is wonderful."

When asked what information they'd like to add, the following items emerged as patterns across the sessions and will be added as backlog tickets:

- **DD214:** Half of participants brought up their DD214 as a valuable document they would like to see in the app.

  > "People always ask for [DD214] for a variety of reasons...I need it for everything."

- **View disability rating and related information:** 2 participants said they'd like to see their disability "breakdown"; this is also something the Logged In Homepage team is considering including and prioritizing in their designs. 

  > "I would add a breakdown of disabilities: current disabilities, current rating, service-connected percentage amount, and permanance." 

- **View and edit dependents:** 2 participants brought up dependents as the reason they had most recently visited their VA.gov profile and said they'd like to be able to do that in the app. 

- **View and edit emergency contact information:** 2 participants said they would like to add emergency contact information. 

- **View recent payments from VA:** 2 participants said they'd like to see recent payments.

- **Resources for female Veterans:** 1 participant said she would like to see this in the app, and this aligns with what we heard in earlier discovery interviews with female Veterans.  



### The major change we should make to Profile for MVP is clarifying how the app relates to VA.gov.

Across sessions, participants asked how this app related to VA.gov and if updates they make here to Personal and Contact Information and Direct Deposit would be reflected elsewhere. One participant also asked if he would be able to manage his username and password via the app. Although we're not offering that and are using VA.gov in a webview for authentication, we should consider adding a section in Settings that clarifies where users can go to update the credentials they use to sign in to the app.

**MVP implications:**

- Add explainer text within Profile to clarify that updates made in the app will be reflected on VA.gov
- Add "Manage account" item to Settings to clarify that the credentials used to sign into the app can be managed on whichever site the Veteran uses to sign in - ID.me, DS Logon, or MHV.  

 
----

**Goal: Assess the home screen design**

### Participants liked the simplicity of the home screen and multiple CTAs to the same feature weren't confusing or frustrating.
Participants have reacted positively to the simplicity of the homescreen. In reviewing the home screen all participants understood the functions of the app from the home screen. No one brought up feeling the duplicative content on the homepage. Participants liked being able to understand what the app included and select where to go next. 

**MVP implications:**
- Keep it simple for MVP and focus on delivering a simple list view of what the app offers. Integrate a personalized homescreen design post-MVP, and when doing so align with the Logged In Homepage team.  


### The home screen is a central place to "reset" and a good place to house secondary navigation items.
People returned to the home screen often and a few participants described it as a "reset" were they ever to get lost. Given this, let's house secondary CTAs to information like Coronavirus information within the homecreen rather than nesting them within Settings.

> "Home has everything -- it gets you back to a central location."


### Icons add more confusion than clarity.
2 participants thought the Veterans Crisis Line dial pad was a menu, and a third participant specifically said she liked the lack of icons in the app's design because she finds icons on other VA sites confusing. 

**MVP implications:**
- Remove all icons outside the bottom navigation. 

### Be crystal clear about what is VBA related and what is VHA related.
About half of participants asked if the Appointments section would include their Claims appointments as well. 

**MVP implications:**
- Add text to the homsecreen clarifying Appointments are only VHA appointments.


----

**Goal: Assess the desired content on the mobile Claim Status Tool**

### Including a claim status tool in the mobile app has a high chance to bring Veterans who don't engage with VA into more regular contact with VA.
Some participants (especially ones who has been in the claims or appeals process longer) voiced they were not managing their claim or appeal as actively as they thought they should be and expressed discontent and frustration at the drawn out process: 

> "I check on my claim every 6-9 months now. I just have lost faith in VA. This app is a lot better than the way VA is doing it now. Now, it is out of sight out of mind. It is an emotionally depressing experience so I don't do it...OMG I would rather clean the toilets than [deal with my claim]."

When asked if they thought the Claim Status Tool within the mobile app would change how they interacted with VA about their claims and appeals, people overwhelmingly said that the app would cause them to be more engaged in the claims process: 

> "Yes, it would change how I interact with VA - I would have information updates right at my fingertips."

> "[With this app], I wouldn't be dragging my feet to get my claim done...It's just real convenient."


### For MVP, we should forge a path as the mobile claim status tool by aligning fairly closely with the data on VA.gov and streamlining words and interactions where we can.
Overall, participant feedback focused on wanting as much information as possible and as much clarity as possible when it comes to what VA needs from them. To that end, we should rethink the UI to prioritize these needs and strip out or deprioritize unnecessary information. 

**MVP Implications:**
- Allow users to view a description of steps 1-5 of the claims process no matter what step they're currently on. 
  > "I want to be able to see a description of each step - I like to know what is happening in my life."
- Prioritize actions a user needs to take to move their claim through the pipeline on a claim's status screen by moving the CTA to upload files to status tab and removing the files tab.
  > "I just want to see next steps: what do I need to, where to take action."


### That being said, information is king. Post-MVP, we should investigate where we can offer more granular information and consider adding more in the app even before it rolls out on VA.gov.  
Today, when a claim closes, the decision letter does not display on VA.gov. However, that is something Veterans would like to see. 
> "When your disability claim closes, it would be nice to see your rating."

We should investigate what data beyond what is displayed on VA.gov today that our app might be able to display to the user. We should be careful to not depart from the Claim Status Tool on VA.gov too much. Doing so might create confusion between how the two Claim Status Tools relate to each other. However, we should consider offering additional information where we can technically do so and where we think it will offer high value to users. 

**Post-MVP Implications:**

- Stay in touch with the team redesigning the Claim Status Tool on VA.gov, share research findings back and forth.


----


**Goal: Assess Veteran perception of the MVP app overall**

### We knew Veterans were interested in a moblie app with authenticated features from VA, and continued to hear high interest in downloading.
We knew from prior research that Veterans were interested in a mobile app with authenticated features from VA, but it bears repeating that high-fi prototype testing garnered positive reactions from all participants. The main reasons cited for why folks were excited about the app echo the reasons we have heard in prior research: more convenience, saving time, and more efficiently managing their VA benefits and health care.
> "This is wonderful, I'm glad VA is going this route. I'm all about apps, they're so much easier. This is wonderful and it's been a long time coming...I think it will be tremendous."

> "If this is something where you dont have to put any footwork into VA, why wouldn't I use this? It saves me waiting on the phone, waiting to talk to somebody."


### We knew getting sign in right was big, and continued to hear that.
We knew this from prior research, but this bears repeating because of just how big of a positive biometric sign in will be for users. Although sign in might seem simple, it's a huge win and a strong cornerstone of why our MVP app will provide high value even if the feature set seems limited compared to all the features other VA sites offer. 
> "[With this app], it's great - you don't have to jump through hoops to log in. It's incredible the amount of steps I have to take to log in, and it times out every 10 minutes."

> "Since I can use touch ID, I would pop in once a day If I had an active claim or appeal. It would make things a lot easier (to have the app)."


### There is some dissatisfaction with features that are not available in the MVP (e.g. cancelling and scheduling appointments). We should clarify that more is coming in the future, but do so carefully and sparingly.
As we hypothesized, people would like to see more: filing a claim or appeal via the app, canceling appointments, scheduling appointments, and accessing more health features like Secure Messaging and Rx Refill were brought up by participants multiple times. About half of participants also said they would like to know that VA is going to add more: 
> "If you can't schedule it would be a little frustrating...I would still download it without everything, knowing there is going to be more added later -- I'd like to know if the app is going to add more."

> "If you tell me, 'we're going to add more capabilities', it lets me know this isn't all that VA is giving me and something else is coming later on. It would be nice to know that this isn't it for the app"

Knowing that users feel this way, we should clarify the MVP's limitations and be straightforward about the app's scope. However, since we know there may be a lack of trust between VA and our app users, we shoud do this sparingly as part of the app onboarding and not overpromise any dates or features, rather generally say that VA is working to expand the app.

**MVP Implications:**

- **Add an onboarding flow:** When a participant visits the Claims and Appointments sections of the app for the first time, we should surface a message that can be dismissed that explains the app's features.'

  
### Even though more features were desired, participants expressed there is enough to still make the app useful. Our feature set is a strong and useful MVP.
> "It would still be helpful if this app just let you view claims and not make appointments. I would say - It's a good app, you just can't do certain stuff on it. You can still view your appointments and see what you've claimed already. Which is good still."

----

### Things we didn't cover
- We did not test notifications and no participants brought up notifications.
- We did not test the upload file flow for claims. 
- We did not test the flow to select content for the Benefit Summary and Service Verification Letter.

### What's next?
We should consider testing the Test Flight prototype with Veterans next, around or even after the November Test Flight release. 
- As we define what notifications look like for MVP, we should be led by technical feasibility and internal UX decision making. 
- As we define what other COVID-19 related features we might include for MVP, we should be led by technical feasibility and internal UX decision making. 
