


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 0; ALERTS: 1.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>



# Appointment Scheduling/Request Kickoff


## KICKOFF


### Problem Statement

Other avenues for scheduling appointments including phone, secure messaging, reminder letters, and return to clinic orders can lead to clerical errors, miscommunications, and put a heavy burden on schedulers. These issues cause delays in scheduling care and are frustrating for Veterans. Overall, it’s been found that Veterans have a general negative sentiment towards calling VA on the phone and prefer to use digital channels when they can. 



* As a Veteran, I want to schedule my appointment online because calling the VA is cumbersome and inconvenient. 
* As a Veteran, I want to make an appointment request online so that the VA can call me back directly and I don’t have to wait on the phone. 


### Assumptions and Level of Confidence



* Users want to schedule appointments and make requests in the app  
* Facilities will leverage online scheduling (riskiest assumption)
* We know the current flow could use some updating and will make tweaks where we can/it’s appropriate 


### Any business goals we’re aware of?



* VAOS is in the process of being completely migrated to va.gov from MHV
    * Users can still see upcoming and past appointments on MVH. In the future, no appointments will be displayed on MHV. 


### Why should this feature be on the app?



* All research participants from the mobile IA study categorized ‘Scheduling Appointments’ as a very important feature ([Mobile IA Research, 2021](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1634908357710/58074b53d4942298679622026490db78c1ee8806?sender=uf0bfcbdeb88abc2073131412))
* Appointments were rated as a top priority for 4 out of 7 research participants and also discussed the importance of scheduling ([Mobile co-design, 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/prototype-testing/testing-summary.md#health-features-are-highly-useful-appointments-secure-messaging-and-rx-refill-are-the-most-useful-health-features))
* Including this will help in our objective for Veterans to quickly complete tasks across health and benefits
* About 35% of VAOS users initiate scheduling on a mobile device, suggesting a desire to access this functionality on a phone 
* There are opportunities for the mobile team to enhance the existing scheduling flows and influence broader redesign efforts 


### Recommended minimum feature set

Our recommended feature set is based on the Veteran experience, technical complexity, and what we know about how Veterans use the web scheduling tool today. 



* Display requested appointments (now)
* Appointment request flow (next)
* Appointment direct scheduling (later)

**Why?**



* The mobile app today does not display pending appointment requests, which would be a gap in the experience. If a user makes an appointment request on the app, they should be able to see that pending request in their list of appointments.
* Requests made up 90% of appointment activity from July- Sept 2021
* Few facilities have direct scheduling turned on because staffing is hard to predict
* Teasing out direct scheduling reduces complexity in order for us to ship an MVP faster

See more detail and estimates in the [appointment scheduling MVP](https://docs.google.com/document/d/13acRRliCywdUfN7VzRS9NnMU7CpOZULllMJnDsrgbzc/edit#) doc. 

**Questions**



* Should this include CC requests?
    * Estimates currently include CC
* Do people expect to see CC appointments? 


### Risks



* Much of the complex logic lives on the front end. It would preferable to have the data manipulation happen on the backend, but that is not how the web works today. 
    * Mitigation ideas: 
        * Could we lobby to have this work moved toward the BE services? 
        * We could dedicate a few of our BE developers to help make this happen
        * Need to understand the blockers first 
* We are assuming that requests and direct scheduling can be independent of each other (ie- we can do requests without having direct scheduling as a fast follow, or ever). This is deviating from the web strategy, their priority is to move as many Veterans through direct scheduling as possible with requests being secondary. 
* The follow-up process from VA once a Veteran has submitted a request is inconsistent and can take long periods of time (several weeks). This is a frustrating experience for Veterans and could be attributed to the app (potential poor ratings/reviews). 


###  Measuring success



* Appointment scheduling/request has a funnel-like structure and we can measure success by establishing milestones in the process and setting up metrics to capture where folks are falling off in the process 
* Examples: 
    * Successful submission/request conversion rate 
        * Number of successful requests/Number of requests started 
        * Number of successful new appointments/Number of new appointments started
    * Number of online transactions
        * Number of cancellations 
    * Pageviews (already track) 
        * Appointment list views
        * Appointment detail views 

_Additional Notes_____________________________________________________________________________________________________________________________


### Product Notes 


#### Product Overview



* VAOS is an online scheduling tool on va.gov that allows Veterans to schedule appointments directly or make a request for an appointment with their healthcare providers
* Veterans can schedule 4 different types of appointments
    * VA Direct
    * VA Request
    * Vaccine Direct 
    * Community Care Request
* There are a variety of types of care a Veteran can schedule/request ranging from Primary Care to Amputation Care
    * Primary care is often the first entry point for Veterans seeking care ([DSVA scheduling research, Feb 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/mobile-app-discovery/discovery/dsva-scheduling-research-20170701.pdf))
* User flows vary widely from the type of appointment and type of care a Veteran is seeking 


#### User Research 



* All research participants from the mobile IA study categorized ‘Scheduling Appointments’ as a very important feature ([Mobile IA Research, 2021](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1634908357710/58074b53d4942298679622026490db78c1ee8806?sender=uf0bfcbdeb88abc2073131412))
* Appointments were rated as a top priority for 4 out of 7 research participants and also discussed the importance of scheduling ([Mobile co-design, 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/prototype-testing/testing-summary.md#health-features-are-highly-useful-appointments-secure-messaging-and-rx-refill-are-the-most-useful-health-features))
* Geography is a primary factor for participants in scheduling and accessing health care ([Facilities/Personalization Research, Jun 2021](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/may-2021-facilities-personalization-research/topline-summary.md))
    * Participants expected to be able to edit their facility list by geographic factors other than home address; multiple participants talked about finding facilities based on their current location in VAOS and in their profile facility list. They felt this would be useful for travel.
    * In VAOS and profile, participants are expected to be able to manage facilities in their list by geographic radius.
* Personalization is expected in the scheduling flow 
    * Most participants saw value in being able to save facilities to limit their options in scheduling, sending secure messages, and for travel purposes ([Facilities/Personalization Research, June 2021](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/may-2021-facilities-personalization-research/topline-summary.md#most-participants-saw-value-in-being-able-to-save-facilities-to-limit-their-options-in-scheduling-sending-secure-messages-and-for-travel-purposes))
* There is a general negative sentiment towards calling the VA ([Facilities/Personalization Research, June 2021](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/may-2021-facilities-personalization-research/topline-summary.md#almost-all-participants-shared-a-negative-perception-of-calling-the-va))
    * Participants described calling as taking a long time and being inefficient. One participant described lining up multiple activities to do while on hold so they didn't get bored.
* The way facilities can configure appointments does not make sense to Veterans
    * Participants understood they needed to call to schedule because a facility didn't offer online scheduling, but it didn't make sense to everyone that some VA facilities could schedule online and others could not. ([Facilities/Personalization Research, June 2021](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/may-2021-facilities-personalization-research/topline-summary.md#participants-understood-they-needed-to-call-to-schedule-because-a-facility-didnt-offer-online-scheduling-but-it-didnt-make-sense-to-everyone-that-some-va-facilities-could-schedule-online-and-others-could-not))
    * One participant wanted to see this information sooner in the scheduling process; they understood once they saw the information but were mildly annoyed it took that long


#### Analytics 


* VA appointment requests are the majority of submissions
    * Appointment Types July- September 2021
        * VA Request- 90.5% (118,086)
        * VA Direct -  7.6% (9,949)
        * Community care request-  1.7% (2,232)
        * Vaccine direct- .2% (264)
* Conversion Rates by appointment type 
    * TBD
* Primary care and mental health care types are the most popular types of appointments

* Mobile devices make up about 35% of users who initiate scheduling online 
    * Desktop- 63.43% (174,574)
    * Mobile- 34.64% (95,351)
    * Tablet- 2.16% (5,946)
* [Analytics dashboard ](https://datastudio.google.com/u/0/reporting/2d972405-6655-4718-85d6-4bdd56c4e858/page/Y4AZC)
* [VA funnel](https://analytics.google.com/analytics/web/#/analysis/a50123418w177519031p176188361/edit/rzkj9em3Q1GY1hKiSbWgAw)
* [Vaccine funnel ](https://analytics.google.com/analytics/web/#/analysis/a50123418w177519031p176188361/edit/7ShSvYewSKu2FQpT-j5vjg)


### External team dependencies

* The VAOS team owns the web-based scheduling tool on va.gov 
    * Lauren Alexanderson, VA Product Owner
    * Lauren Ernest, VAOS PM
    * Peter Russo, VAOS UX
    * Corey Ferris, VAOS BE
    *


### Test accounts

* Testing plan: would like to test w/ MVH coordinators 
* Suggested test account:
    * [cecil.morgan@id.me](mailto:cecil.morgan@id.me)
* Other test accounts: 
    * [judy.morrison@id.me](mailto:judy.morrison@id.me) (has most permissions, so this isn’t necessarily representative of the average Veteran user) 
    * +998  is a test user that also has a Cerner facility 


### Launch Planning

* Timeline & targeted launch dates
    * The VAOS team are updating endpoints to include reschedule, and that work is scheduled to be launched in January 2022
* Contact center documentations
    * We will need to provide significant documentation to whichever call center supports this functionality 


### Questions

**Where does C&P exam fall? Is this in VAOS?**

* VAOS does not display C&P exam appointments, it displays everything it gets from MAS and C&P is an exclusion as determined by VAMF
* Specifically excluded

**Of people using va.gov, what percentage is using VAOS?**

* VAOS usage is ~1.5% of total VAgov users and ~5.5% of authenticated users

**Of people using MHV, what percentage is using VAOS? **
* Unknown - would have to ask MHV
* MHV notes:
    * MHV shows display the upcoming and past appointments and redirects to va.gov for scheduling
    * MHV  has a different path (uses a different endpoint) to the data source (Vista) 

**What is the success rate of mobile users?**

[VAOS Funnel- VA Flows](https://analytics.google.com/analytics/web/#/analysis/a50123418w177519031p176188361/edit/rzkj9em3Q1GY1hKiSbWgAw)

Desktop

* Start Scheduling Clicked: 174,574
* Submit/Request Clicked: 70,033 
* Desktop Conversation Rate: 40.12%

Mobile

* Start Scheduling Clicked: 95,351
* Submit/Request Clicked:41,312
* Mobile Conversion Rate: 43.3%


