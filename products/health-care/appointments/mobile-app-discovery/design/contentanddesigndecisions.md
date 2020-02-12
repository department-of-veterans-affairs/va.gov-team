# The Problem (October 2017)
1. Users cannot find the online scheduling tool on any of the VA digital properties.
(A Veteran tried to figure out how to schedule online starting from Google and could not get there; her experience was relayed to senior staff.) <br />

2. Many of the digital properties at VA offer incomplete, inconsistent, or incorrect information on scheduling appointments. <br />
- Need to mention all of the business requirements for accessing the tool. (MHV Premium/DS Logon Premium; participating VA facility; Primary care appointment at that facility in the past 2 years; outpatient mental health/optometry/audiology appointment availability and business requirements vary by facility.) 
- Need to describe scheduling consistently across the VA. 
- Need to change perception of VAR as a mobile application instead of a website. VAR --> Online Scheduling Tool. 
- MHV calls their VA tools VA appointments which confuses the heck out of google and other search engines. 

3. User flows across VA properties don't match users' actual paths and often lead to a dead end. (e.g.  there was a page on MHV that basically told users too bad they couldn't get into the app.)

# Big Picture Content Strategy
Our primary content goal was to have consistent and correct content about scheduling appointments on all of VA's digital properties. Our second content goal was to have a clear call to action on pages that described scheduling content. Our third goal was to avoid dead ends, whereby Veterans find out they are not eligible for online scheduling but are not offered an alternative way forward to make an appointment. 

We wanted to meet Veterans where they are. Our research told us that some use EBenefits, My HealtheVet, secure messaging, while still others use search engines to find out about scheduling appointments. We audited the existing content on these digital properties to find all of the places that talked about online scheduling. In addition, we worked with an SEO team to identify different search phrases that Veterans might use to find out about appointments, and which pages were the most prominent ones that showed up. Some of the content we changed included: 
- VA.gov page on appointments
- VA.gov mentions of scheduling on other pages. 
- Top of every single VAMC page on appointments
- VA FAQ page
- My HealtehVet article on smartphones for mobile health (this showed up quite high in search results)
- My HealtheVet Keeping Up with Your VA Appointments page (the main link from homepage for non logged in users)
- My HealtheVet Logged in Homepage
- My HealtheVet Logged-In View My VA Appointments Page  
- My HealtheVet Scheduling Transition Page 
- My HealtheVet user error messages for basic/advanced users, users who are not eligible to use the tool, and other user case. 
- Vets.gov pieces of content on scheduling splattered across other pages redirected to a new full page of content. 
- Training content for MHV Coordinators. 
- Messaging to Veterans, VA staff, MHV staff, etc. 
- EBenefits Content. 

# Vets.gov strategy 
We wanted the Vets.gov page to be the "source-of-truth" page for Veterans. This page is written in a hybrid of Vets.gov and FAQ style and uses structured content code so that it will show up in Google's FAQ search result style. We presented 3 main options for Veterans looking to schedule online: phone (with a link to the facility locator); online (with the business requirements for accessing VAR spelled out and with links to (a) see which facilities are participating (b) enable Veterans to upgrade their DSLogon/MHV accounts as needed); and secure messaging. We chose to have phone first because that is the option that is available to all Veterans. We included the secure messaging option because it is the hack that many Veterans have figured out as a faster way to get an appointment; however, we did not want to push that option b/c secure messaging is not intended to be used in that way. For the online content, we specifically chose to exclude the other types of appointments that are available in the online scheduling tool for now because each facility determines which types they offer and which patients can schedule those types of appointments. At this time, we are not able to get a consistent list of those business rules; however, a desirable next-step would be to spend the time confirming this with facilities, finding a way to get this information on a regular basis, and incorporating this into the facility locator on vets.gov. The schedule button goes directly into the application, so as not to send users through a circuitous path. 

# VA.gov strategy
Jenny H-L at the VA coordinated the VA effort in collaboration with Vets.gov (Amy Behrens & Lauren Alexanderson). The VA now has one single-source-of-truth appointment page, with all other mentions redirected to this page. In addition, we moved Schedule an Appointment up in the VA's IA, so it was easier to find. We also added it to the megamenu and the front page content. We supported the team in the development of a blog that was also posted on the VA's homepage, blog, and on all of the VAMC pages. The content on Vets.gov very nearly mirrors the content on VA.gov. The changes between the two were made in response to user testing. 

In addition, we adjusted the scheduling content that shows up at the top of VAMC individual pages on appointments and moved the placement of scheduling up one level in the VAMC IA as well. The VAMC pages are an important access point for many Veterans looking to make appointments, and this content is now standardized across all of them. 

# EBenefits strategy
The user flow from EBenefits into VAR was messy, and testing showed that users were shown incomplete / inaccurate results about their appointments. We elected to redirect users through MHV, with conditional logic in place, so that logged in users would be dropped into a logged in state in the right place in the user flow. We updated the text of several links and redirected them to MHV. 

# My HealtheVet (MHV) strategy
We broke down the content and user flows on MHV by login state, type of account, and access to VAR. We felt strongly that we should not lead someone into the online scheduling tool if that user couldn't actually use it due to the *many* business rules for access. We also know from analytics that the majority of MHV users go straight to login from the homescreen, so the likelihood of someone encountering the same content in multiple places is low. 

*Logged Out* <br />
We updated the article called "Keeping up with All your VA Appointments", a page users come to when they click on Appointments from the MHV home page. This is also a page that showed up frequently in google search results for VA appointments. Because this page is visibile only in the logged-out state, we wanted users to first verify that they (a) had health benefits through VA; (b) had a MHV Premium account; and (c) were affiliated with a participating facility before leading them further into the app. We provided links to take action on a & b (if a user needed to apply for health benefits or upgrade an account); for (c) we provided a list of the facilities and offered the link to the facility locator, so users who weren't with an affiliated facility could still have a way forward to make an appointment. The original facility list was at the bottom of the mobile app store page, and we wanted to avoid sending traffic to that page at all. We weighed a few options: 1) Putting the facility list on a separate page; 2) putting the facility list in a dropdown menu to allow a user to select a state and find their facility; 3) Putting the facility list as an anchor link. Although 2 was our preferred option, we went with 3 because of time constraints. Lastly, we added in a clear "login to MHV to schedule an appointment" button, because our research showed that users needed a clear action step further down the page. 

*Logged In*<br />
Homepage:<br />
The UX for the logged in state varies by type of account and facility affiliation. Changes made to the MHV Homepage included:
- Updated language in the Appointments tile: changed "VA Appointments" to say "View My VA Appointments" - We made this minor change because we wanted to use action verbs and advise a user what they could do on that page (e.g. look at past/upcoming appointments, but not schedule one). 
- Added a "Schedule a VA Appointment" in the second link slot of the Appointments tile *only* for users who have premium accounts and are affiliated with a VAR-participating facility: We wanted "schedule" to be a clear action from the appointments tile. This link will not show up for users who do not have premium accounts. 
- Updated the grey button that used to say VAR Mobile Application to say "Schedule a VA Appointment". Both the grey button and the "Schedule a VA Appointment" button in the tile above would take a user to the same place. 

View my VA Appointments: <br />
This page is also only meant for premium users; however in the previous state, the error message about what users needed to do next was not clear. We updated this error message to tell people how to upgrade to Premium, and how to get to the facility locator in the meanwhile. 

For a Premium user, the page was covered in 3 different alert message boxes, and it was confusing which one a user was supposed to pay attention to. Additionally, the link to VAR was an app icon in the left navigation, which was not clear or direct. We reordered the content on this page to batch all of the reminders about VA appointments together, and added a clear "schedule a va appointment" button on the page below the list of upcoming/past appointments. User testing revealed that users were able to easily find the button to schedule, and felt that its placement at the bottom of the page made sense. 

Schedule Transition Page <br />
Users who were VAR eligible in a small test group could get to this page. However the previous instance of it was a page we were referring to as the #sorrynotsorry page because it told users they were leaving MHV and directed them to a random helpline if anything went wrong. Meanwhile the grey button from the home page took users straight to the mobile app store, but if they didn't have the credentials, they hit a dead end. We decided to make this page a review of what is needed to schedule an appointment, so users didn't continue into the application if they didn't have the credentials, and so users had a clear backup option too. Our original vision for this was to follow the subway map style used on vets.gov and have the dropdown list for facilities; however, we were advised to go with a simpler text-only change approach. This page also has the facility list because MHV account holders may only encounter it in this place. We also added a clear Schedule button as the next call to action.  

The content on this page was agreed upon across MHV, and mentions both PC appointments as well as the other types. Dr. Frisbee wanted to mention both, even though we could not give users any detailed information about availability of specialty appointments at their specific facilities. 

Lessons learned from the MHV process. <br /> 
We updated this page early in the sprint, and tread too cautiously because we weren't sure if the MHV team would be receptive to all of our changes and would have the bandwidth to do everything we wanted to do. Things we would still recommend changing: 
1) Make the facility list a dropdown menu that defaults to "show none", but would allow users to filter by state. Place the dropdown menu where the anchor links are currently. 
2) Make it clearer which facilities and affiliated clinics offer which types of appointments, possibly through an upgrade to the facility locator. 
