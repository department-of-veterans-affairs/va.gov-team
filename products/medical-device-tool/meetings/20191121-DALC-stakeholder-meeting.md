# DALC Stakeholder Meeting
## Agenda:

#### Attendees: 
Matthew Self, Nick Wygonik, Riley Orr, Rebecca Walsh, Amen Ra, Mahariel Rosario, Joseph Brothers, DALC Stakeholders

#### Background:
Our team, Benefits & Memorials 2, is working on modernizing the digital mechanism Veterans use to order medical devices. 
Practically, this means working with Veterans to design and launch a new ordering mechanism on the VA.gov platform.

#### Purpose:
We are meeting today to meet additional members of the DALC team and gain a greater understanding of how Veterans order prosthetic socks and hearing aid batteries online, by mail, through their provider, and through the two phone line options.

#### Outcomes:
We were introduced to additional DALC stakeholders that can interface with both the design team and the development team to answer questions that will influence the tool's design on VA.gov. Additionally, the stakeholders walked our team through the online ordering tool that currently exists and answered questions on both the user-facing and business-facing sides. Furthermore, the stakeholders provided a comprehensive workflow from the moment the Veteran is interested in reordering through the order being shipped through USPS. 

#### Structure:
- Introductions (3 minutes): All
- Project/Team Overview (3 minutes): Matt
- Medical Device Ordering Procedural Overview (40 minutes): DALC Team
- Open Q&A (10 minutes): BAM2 Team
- Next Steps (4 minutes): Matt

## Notes:
### Riley's Notes
Note: All questions/comments made by the BaM2 team are in **bold** 

**Are you able to connect to the meeting and present?**

Yes, Jim is in the meeting. If Jim can share on the Zoom session then we can go ahead and walk through 

**Do you mind giving background on Access VA?**

Well, what we can tell you is Access VA was stood up with the intentions of acting as a single access portal. This is pre-VA.gov days. It was thought that Access VA would be the entry point for different VA systems. It was invented to be a centralized portal for anyone to reach any of those resources

Thank you, appreciate it

You can see there’s a ROES button there. As I described the other day, it’s a bit of a misnomer because for the Veteran-facing application we don’t consider that to be the Veteran-facing application. For recognizability the button is named ROES. We usually refer to this as Veteran-online ordering entry point

**Okay, so even though this is labeled as ROES it’s going to take us to the eBenefits tool?**

It will take us to the applet that’s imbedded in eBenefits. 

*Loading new screen*

You can sign in with a DS Logon, CAC, or with a PIV. Since I am not a veteran I need to go in with a PIV. *logging in with PIV*

This is the initial page in our application. If they came into eBenefits it would drop them into this screen *clicks on link* 

There’s navigation on the side where they can order batteries, socks, FAQ’s, about us, etc. If I click on 'order batteries'… 

*navigating back to main page* 

So, when a Veteran logs in they will not get the page with the links. They will land on a page where they can order socks and batteries it takes their credentials and it checks to see if that information matches to the patient. If it can, they are automatically brought into the ordering page but if not then they need to provide name, ssn, etc. 

A Veteran cannot request batteries, for example, unless a clinician has requested it for them previously.

**Ideally, no one would try to access the system unless the clinician has given them that order in the past. Is there a scenario where the Veteran may try to order before speaking with a clinician?**

I suppose it could happen. But normally they would come here if they received information from us about online ordering or through their clinician. 

They will either need to put in their VA credentialing or it will bring them to the order screen. 

We’re looking for the DS Logon credential or potentially the My HealtheVet credential. 

**Or potentially the third one once we’re on the platform: ID.me**

So when I do click on order batteries, it displays what batteries they’ve had in the past and their last order date. If it’s within the past 5 months they can select which batteries they want, click submit, and they’re done 

The key here is the patient is using a hearing aid that has been issues by VA. We know what that hearing aid is, we know what types of batteries are compatible with that aid.

**Where is this data stored and sent to this screen?**

Well, it all comes from the source database that lies behind this that’s located here. Can’t really say it’s through APIs. It’s through a cache database. 

**Again, the only way this screen is populated is by the provider populating these. Is it a valid reason that someone could come to this page and the model listed here is not right for that user. How do they fix that problem and is that a valid scenario?**

Yeah that doesn’t really happen. The models that are represented in our records, because all hearing aid records come through the VA clinician or the VA. The use case you’re describing shouldn’t be valid. 

In order for them to get batteries if it’s a self purchase they would have to call Pat’s team (and someone else) to register that model. 

We prefer them contacting their clinician for that scenario. 

**So adding new types of models is not something we need to worry about. Is that fair to say?**

Correct

**Good to know**

We refer to these as authorized devices. So, if a Veteran is under VA care for a long period of time, 15 or 20 years, and they have successive hearing aids during that time but they can only have a limited number of authorized devices and the clinician is responsible for ensuring the aids used are authorized and they make old devices unauthorized. 

**That makes sense. Okay. Could questions for you: I kind of get the sense, or you have said explicitly that there is a 5 month order limit. Do you have a sense of how frequently people are ordering and how long those relationships last in general?** 

I would say that typically we would send a six month supply to a Veteran and if they need batteries prior to that we give them a month leeway but it’s typical we get a reorder contact every 6 months. After 5 months is allowed, anything before 5 months they need to talk with someone on the phone. 

**What happens in the applet if that happens?** 

It would grey out the checkbox. They wouldn’t be able to select the battery they want to order.

**Is there any guidance what they should do again?**

If they hovered over the checkbox, it would give them information why. It directs them to customer service and provides phone number. 

*Navigates to prosthetic socks page*

This is the message that would display if there are no prosthetic sock orders on record. This would be the same for hearing aid batteries.

**This is the scenario where the user tries to initiate an order without the provider establishing the order ahead of time?**

Correct.

I’ve got a PowerPoint that steps through how this is reached through eBenefits. If at some point you want to switch over and see the eBenefits navigation we can demonstrate a PowerPoint. 

We can provide the PPT after the presentation. 

*Showing PPT*

*Slide 1:* For a Veteran accessing eBenefits, they log in with DS Logon account. 

*Slide 2:* This page gives them help if they’re having trouble with DS Logon or credential. 

*Slide 3:* Still registration 

*Slide 4:* Now they are on eBenefits and navigate to “Manage your health” link. 

*Slide 5:* There is a link for Hearing aid batteries and socks

*Slide 6:* They have a choice whether they are an amputee, hearing aid user, or both because that happens too they can select the ordering for their respective items 

*Slide 7:* This is the page Jim was talking about if we don’t recognize that DS Logon credential then we will ask them to input this information (Last name, Last 4 numbers of SSN, DOB, and Email) to match to a patient

*Slide 8:* If there is a successful match, then they see the page Jim showed earlier where they can select what they’d like to recorder. In this case it says “*Recently ordered” so this is flagged and they are told via the error message at the bottom that they need to contact us. 

**That makes a lot of sense. I’m trying to think through and see if there’s any particular questions. It makes a fair amount of sense. Does anyone else have questions, comments, anything?**

**I think I saw you submit one of your orders.** 

I didn’t submit the order because it’s live data. When you do submit it, there’s a page that says the order has been submitted and it’ll be 7-10 days before it will be delivered. I’m trying to think what else it might say on there. 

**Is there an identifying confirmation number in case people want to make reference to their order?** 

I don’t believe we do show that. It’s probably something we could easily have. 
We could send them an email.
We try to get all their email addresses so we send nightly emails for any commodity order. 
We send them an email that the order is being processed in our system. 

**Where is the email address initially collected?** 

It could be that we collected it when the clinician ordered the hearing aids. It could be Justine collected it on a phone call. There are various ways. They can also provide it on the registration page. 

**What if they enter a different email than is provided by the clinician?**

I think it would go to the old email address. 
If they entered the correct one on the registration page then it would override the old one. 

**How are those emails being sent?** 

Yeah, so throughout the day orders are placed via ROES, customer service division, online ordering. Around midnight we go through all those commodity orders and we group them by Veteran and then we send them an email address saying, “your order is on the way, it will be here within 7-10 days, contact us here if you have questions”

**Is this an automated system?** 

It’s thousands a day so it’s an automated system.

**Is that connected to the DLC database?**

Yes, we use the VISTA mailman package. 

**If they call it in or mail in an order, do you still send a confirmation email?**

Yes, we do. That’s only if they have an email address on record. Some Veterans don’t like to provide email addresses. 

**Maybe switching gears a little bit, talk to me a little bit about what happens when an order is received. I know you batch them up. What is the business process handled from the time the order is received?**

So, what occurs is a Veteran has multiple options to place an order. One is a physical order card shipped with their resupply. When they’re ready to reorder they send it in and it is scanned within the system with an optical scanner. If the scanner recognizes the writing then it will process the order. It’ll batch a file at midnight and send it to our in-house warehouse for fulfillment. Typically the next day that will be shipped by USPS. If the scanner cannot read it, then there is a person who manually inputs it. 

The Veteran can also call and request a callback from the DLC, wait for an agent to pick up, or they can Press 1 to order batteries and it will take them through automated ordering. 

We also have eBenefits method as well. 

I’ll add a little bit to that. We have a warehouse distribution system. Theres probably a million batteries int he warehouse right now. As these orders come in then our staff in the warehouse is taking those orders that have been delivered to them this morning and are processing them to be shipped today. 

I’ll add one more note: we have different delivery categories. We have priority and emergency. If someone calls in the morning it will get processed at 9 am or noon and out the same day. 

**What makes something land on the priority train?**

If it’s lost in the mail we will receive a call from the Veteran and the order was returned to the DLC. Or if the Veteran says they are out of batteries then we will ship overnight with USPS. It’s not common but it happens throughout the day. 

Orders from online are regular orders. Priority/Emergency orders are always submitted by phone agents or medical providers. 

**The catalogue says that packages are sent second-day air. Where is the 8-10 range coming from?** 

Our goal is underpromising, over-delivering. It depends on where the shipping recipients lives. If it’s local then maybe it’s next day. If they’re up in Maine and we’re in Colorado and it’s snowing then we don’t want to over promise. 

**What is the average?**

Typically 2-3 days. 

**Tell me a little more about if someone is in eBenefits and someone hits the Submit button can you tell me what endpoints that data winds in? What is actually being sent? I get it if there’s a better way to provide that then that’s fine for a followup.**

The truth is, it’s really not something that is sent. When they hit submit it creates a record in our production system. That record represents the order that will flow through for fulfillment. 

When they’re in the application to order batteries they are on our VISTA system. They hit a submit, we take the stuff behind the HTML page and create an order. 

When I think of porting this from eBenefits to VA.gov I think of it in terms of, okay now VA.gov has a link that brings the user to this application. Are you thinking of something different?

**I’m thinking of it a little differently. On VA.gov we’re trying not to run any iFrames. We’re trying to build a more direct integration. You go to VA.gov, it looks like a VA.gov website and it looks like a form like any other forms on the website. Upon hitting submit it would actually send data to themselves. It’s a more complex implementation but it feels like the right one for the platform. Does that make sense?**

Yes, it feels like recreating something that’s already been created. 

**To your point it definitely is. We are re-architecting something in a way that is definitely more complex but more inline with the standards and best practices that align with the platform. Some of the features we’re porting from eBenefits is more upfront work than we’d normally pour into the feature. But to provide consistently across the platform we’re willing to do that investment. It’s more complex than running the iFrame in the browser so that’s something we’ll definitely need to have followup discussion so my engineering team can better understand how the logic is working.**

Yeah, if we just break it down into the credential piece, recent reorder piece, patient rematching, there’s probably a fair amount of chattiness. I guess we need to acknowledge that if that’s the direction this goes then we need to have a stream of messaging or transactions back and forth to accomplish he order. 

**I wouldn’t disagree with that. There’s gonna have to be some crosstalk. Okay, we’re coming to the end of our time. I want us to get some concrete next steps or followups. We definitely need the engineering team to dive in with whoever you think is the best on your team about how we would understand the structure of the data and if we ultimately want to get to a point where VA.gov would send a request. I think that we probably want to have the designers find time to understand a little bit more about what the different channels for ordering. People on my team do you have any followup questions, request for meetings, etc.**

**Anybody who is willing and wants to talk with us and how we do research or ideate on the design to help us understand the experience for the Veterans I would be grateful. The more we know from you experts on the application, the better start we get.**

**What explicitly would be helpful? Should we try to designate for 1-2 sessions next week?**

**Yeah, particularly anyone involved in the customer service side. I’d like to have a meeting next week if possible, I know it’s a holiday.**

**Would it be helpful to talk with a phone rep?**

Pat: I would be happy to share information if it’s appropriate. 

Kevin: As far as participants, probably Jim and myself and one other developer. I have some newer developers, so they may not have as much background but it will be good mentoring. 
