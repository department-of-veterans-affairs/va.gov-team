# Desk Research Report 


## Component - Critical Information component


## Authenticated Experience Design Patterns Team - March, 2025

Christine Steiffer - Design Lead

Kristen Faiferlick - Senior UX Designer

Lynn Stahl - Product Manager

**Jump ahead to:**

* [About the pattern](#about-the-pattern)
* [Conducting the research](#conducting-the-research)
* [Supportive findings](#supportive-findings)
* [Recommendations](#recommendations) 


### About the pattern

A variety of products across the VA.gov ecosystem have some kind of important information that needs to be communicated to users regarding time-sensitive tasks. Currently this need is filled by a variety of existing components, such as variations of the action link and alerts. However, many action links do not actually take users to an active task. Furthermore, alerts are overused across the site, leading to alert fatigue reported across many different studies, including a [November 2024 study about prefilled information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-09-Research-Initiative-Two-Update-Prefill/Update%20Prefill%20Research%20Report.md). This calls for the creation of a new component that is a unique object notifying users that an action is needed in a time-sensitive manner. This will surface the most important information on a page to the users first, making it easier for Veterans to access and maintain their benefits and other services on the site. This aids us in our overall portfolio goal to create products and services that are trauma-informed and to make the process of interacting with VA.gov as seamless and positive as possible for Veterans.

The idea for this component was presented to the portfolio during the [Blue Sky presentation](https://dsva.slack.com/archives/C07SD9P7XB9/p1734111940363469?thread_ts=1734108245.226369&cid=C07SD9P7XB9) series by Ryan Thurwell in January 2025. 


### Conducting the research


#### Capturing the use case ‘In the Wild’

We wanted to find real use cases for this component in the VA ecosystem. In this [‘In the Wild’ mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1741024323022/18a74ad2ec39d2929bf751d5b3f14e1d314053d3), the team captured examples across VA.gov that told users about some important action they needed to take. Here are a few examples we found:

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/Critical-Information/Images/image.png" width="300"/> <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/Critical-Information/Images/image(1).png" width="300"/>

In the **Claims Status Tool**, an [Action link](https://design.va.gov/components/link/action) within a [Warning alert](https://design.va.gov/components/alert/#warning-alert) lets users know they need to provide more information for their claim.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/Critical-Information/Images/image(2).png" width="300"/> <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/Critical-Information/Images/image(3).png" width="300"/>

In the **Debt portal**, a colored [Feedback icon](https://design.va.gov/foundation/icons#feedback) and an [Active Link](https://design.va.gov/components/link/#when-to-use-an-active-link) convey that the user owes a balance that needs to be paid by a certain date. A [Action link](https://design.va.gov/components/link/action) within a [Warning alert](https://design.va.gov/components/alert/#warning-alert) on the details page tells users to make a payment on their debt.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/Critical-Information/Images/image(4).png" width="300"/> 

The **Prescriptions list** currently lets people know with plain text if they have no refills left, and give them a link that helps them figure out how to renew their prescription.

 <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/Critical-Information/Images/image(5).png" width="300"/>

For **Appointments**, users see a [Card](https://design.va.gov/components/card#default) with an [Action link](https://design.va.gov/components/link/action) inside of it telling them to ‘Check in now’. 


#### Relevant Labels in GitHub

Based on what we were seeing across VA.gov, we started thinking about what kind of labels could potentially have research results relevant to our component concept. In order to limit the scope of our research, we only reviewed studies that were published within the last two years (after January of 2023). We reviewed the [research repository in GitHub](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues?q=is%3Aissue) for relevant studies and found results under the following labels:



* [Claims Status](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/Claims%20Status) (4)
* [DSC: Accordions](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/DSC%3A%20Accordions) (4)
* [DSC: Button](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/DSC%3A%20Button) (2)
* [DSC: Card](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/DSC%3A%20Card) (5)
* [DSC: Experimental](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/DSC%3A%20Experimental) (1)
* [DSC: Form controls](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/DSC%3A%20Form%20controls) (1)
* [DSC: Link - Action](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/DSC%3A%20Link%20-%20Action) (5)
* [DSP: Ask users for multiple response](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/DSP%3A%20Ask%20users%20for%20multiple%20responses) (1)
* [DSP: Notifications](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/DSP%3A%20Notifications) (2)

We also reviewed results from the following labels but did not see any relevant findings for our research: ‘DSC: Alert - Expandable’, ‘DSC: Alert Boxes’, ‘DSC: Table’, ‘DSP: Content Presentation’, ‘DSP: Error message style guide’, ‘DSP: Help users to recover from errors’, and ‘DSP: Ask users for a single response’.


#### Quotes in EnjoyHQ
We also searched EnjoyHQ for relevant insights. While GitHub makes it easy to search for content by relevant label and see a summary of findings when you open the ticket, EnjoyHQ was better for keyword searches that looked at key phrases users have said related to this component. Some of the things we searched for in EHQ included:

* “Take action”
* “Alerts”
* “Notifications”
* “Time-sensitive actions”
* “Due date”

### Supportive Findings
Through a detailed review of relevant studies, we found some interesting insights related to alerting users to critical actions needed across a variety of products in our portfolio. The insights fell into a few key themes detailed below. 

#### Theme 1 - Veterans want to see the most important information surfaced to them, including due dates and actions needed.
There are many examples of this type of messaging used across VA.gov, and in many different studies we heard Veterans validate the need for this type of information. When the Claims Status Tool team set out to understand pain points of the current experience, one of the findings that surfaced was a general desire to see requests framed as:

* What is needed?
* Who is it for?
* When is it needed?


> “I would want to see if there was something else I needed to do, or if everything I’ve submitted is sufficient for them to make a decision.” - P14[^1] 

Travel reimbursement claims also require time-sensitive notifications for users. Users need to know remaining days to submit a claim for reimbursement of travel expenses related to a healthcare appointment. Participants of one study specifically asked for more prominent notifications when a claim is blocked by a pending user action[^2].

> “...it’s totally on me to have to keep going back every day to check to see if it’s pending and to hope that I happen to see before day 29 that they’re missing information because nothing dings me… I get no notification.” - P4 

In another study on travel reimbursement claims, users thought the most important information on the card related to their claim was the expiration date for filing a claim and the action link itself that allows them to start the process[^3].

When it comes to the My VA homepage, it was easy for users to understand that a claim needed some further information from them through an alert displayed in that card[^4]. The research team recommended that this type of time-sensitive, critical information be surfaced to the top of this page, which aligns with our vision of stacking all CI components together at the top of this page rather than showing them individually inside of the cards on the page.

#### Theme 2 - Action links do better when tied to real actions, rather than passive ones.
A variety of products across the portfolio are using the action link component to navigate users toward either an active or passive task[^5]. Active tasks could be things like paying a bill, checking in for an appointment, or filing a claim. Passive tasks, on the other hand, include going to your inbox, reviewing your information, or checking details. While different content and style choices are used across different products in these instances, one study on the Appointments tool showed the action link working well for active tasks like checking in for an appointment. Same visual treatment was confusing for passive tasks like reviewing information[^6].   

> "[After reviewing passive task content] What to do next isn't super clear. I don't think it's too much information, but maybe just a wording issue. But, with screen readers, sometimes the headings are repetitive and I'm getting repetitive information on the next page." - P5

A few studies on the Medications tool featured an action link on the intro page of the tool with passive language (‘Go to your medications’)[^7]. On the medications list page, users said they wanted to see which ones they could get refilled right away. The active language (styled in a button) of ‘Request refills’ tested stronger and gave users a clear understanding of how to move forward with what they wanted to do[^8]. 

#### Theme 3 - Error messages make Veterans unclear on if there is a system error or something they need to correct.
Alerts provide critical information to Veterans across VA.gov, and sometimes include a nested action link inside of them[^9]. One flaw of this format is that it is used across the site to communicate both system outages as well as user errors. For example, an alert could say something like, “We’re sorry. There was a problem with our system. We couldn’t process this form.” that indicates an issue with the site itself, and an alert could also say something like, “We noticed you didn’t add new evidence.” which is a call for the user to take an action. Because both of these types of messages get utilized in alerts, especially when visually impaired users arrive on a page with red alerts, users can be unclear if they made an error due that needs to be corrected or if there is a system issue they can’t fix[^10].

> “Why - what did I do wrong? For me, being visually impaired, trying to find what part of the form is filled out wrong is kind of difficult.” - P10

While alerts are helpful in getting user attention, the overuse of the component across the site has led to alert fatigue that leads users to skipping over reading the message or jumping to conclusions about its content without fully understanding it. 


### Recommendations 
1. Create a unique component to notify users of urgent, time-sensitive information to help them to understand what they need to do to take action on their account.
2. The language used in this new component should describe an active task that takes the user to a detail page when they click it. 
3. Ensure that this component always describes actions that the user must take rather than any kind of task that will be resolved by VA or the site itself. 

<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:
     [Initial Decision Claims Status Tool](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/244) - March 2023

[^2]:
     [Travel Claim Status Language Generative Study](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/559) - June 2024

[^3]:
     [Past Appointments Travel Reimbursement Generative Usability Study](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/442) - November 2023

[^4]:
     [Dot Indicator/Slim Alert Usability Study](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/491) - March 2024

[^5]:
     [Benefits Decision Review, Supplemental Claims, PACT](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/220) - January 2023; [Unified Check-In Experience Usability Study](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/317) - May 2023; [Medications Usability Testing Round 1](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/338) - July 2023; [Secure Messaging on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/370) - September 2023; [Medications Usability Testing Round 2](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/429) - November 2023; [Past Appointments Travel Reimbursement Study](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/442) - November 2023; [Ask VA: Dashboard](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/540) - May 2024; [VHA Debt Portal Payment History Study ](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/684)- September 2024

[^6]:
     [Unified Check-In Experience Usability Study](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/317) - May 2023

[^7]:
     [Medications Usability Testing Round 1](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/338) - July 2023; [Medications Usability Testing Round 2](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/429) - November 2023; 

[^8]:
     [Rx on VA.gov Findability Study](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/476) - February 2024

[^9]:
     [Benefits Decision Review, Supplemental Claims, PACT](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/220) - January 2023; [VFF and MyVA Form Submission Research](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/554) - May 2024

[^10]:
     [VFF and MyVA Form Submission Research](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/554) - May 2024
