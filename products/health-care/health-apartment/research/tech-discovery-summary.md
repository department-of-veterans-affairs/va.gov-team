**--DRAFT--**

# Technical Discovery Research Findings 

**Health Apartment, VFS**

Date: 10/14/2021

[Nadya Primak] [nprimak@pluribusdigital.com], [Jared Cooke] [jared@mostudio.com]

[Research Report PDF] (link here)

<br>

**Jump to:**

[Hypotheses and conclusions](insert link to section)

[Key findings](insert link to section)

[Recommendations](insert link to section)

[Who we talked to](insert link to section)

[Further research needed](insert link to section)

<br>

# Research Goals
_First, set the context of this research by explaining how it fits into the Veteran’s journey. Explain what a Veteran might do before and after using this tool. What moments does this tool live in? Are there moments that matter to keep in mind? What are Veteran’s familiarity with tools like this? (do they use tools like this, or is this something new)._
_[See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)_

_Then, describe your goals for this research_

_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#research-goals)_


Figuring out what we need to know from a technical perspective to validate that it is feasible to build the health apartment MVP. 


# Research Questions

_Research questions here_

_[See an example ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#research-questions)_


* How familiar are you with the health apartment concept? (Show POC Mural here)
* Background on [organization/system]
* Any resources (diagrams, anything that simplifies the process of explaining this to the non technical folks on our team)
* What are the major challenges that you think we may run into when moving MHV functionality into VA.gov?
* Are there any repos or relevant systems that are important for us to be familiar with?
* People we need to talk with?
* Considerations regarding technical capabilities needed to deliver the health apartment?
* Is there anything I should have asked you that I did not ask you?

# Methodology 

_Brief description of method chosen_

_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#methodology)_

30 min to 1 hour zoom meetings with individuals who have deep subject matter knowledge of VA.gov and MHV architecture as well as front end/ back end integration. 

Conducted planning sessions prior to each meeting as well as debrief sessions for synthesis of notes and compiling key takeaways and action items. 


# Key Findings

_The 5-10 top findings from your study should be listed here. Write your findings so that if someone reads only these bullets they can leave feeling they got useful information and the study was worthwhile. Examples might be "Most participants used the Search field to find the form, and searched for the term 'veteran health'" or "Most participants struggled with the secondary caregiver section on the form"._


We will be a consumer vs producer in Drupal - it will act like a database 



Need more clarification on Cerner piece

Most of our work in vets api and vets website

Need to figure out how to fetch MHV data and integrate with their API

Frontend primarily uses React and Redux

Important to engage security early and often 

Ruby on Rails is an important capability to add to the team.

May need to make multiple API requests to get the required data 

May run into issues getting access to MHV APIs, red tape may cause delays.

Stick to what is already supported on the platform code-wise (Rails, React / Redux)

MHV profile and VA.gov profile may pull from different sources.

More discovery needed for MHV APIs (integration, scope, access, endpoints)

Must proactively communicate our projected start dates and when we will need analysis and tech support from MHV so we can be made a priority (and not make people grumpy)

Most of the business logic and intensive processing is handled by MHV’s APIs.

Concerned with the transition from MHV to VA.gov: “How do we get from the appointments experience in MHV to something that's being exposed through VA.gov?”



# Details of Findings 

_For each finding, list details with supporting quotes and images when possible. Please **add relevant keywords/labels to your findings** selected from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc). Adding keywords/labels to your findings will help others find research relevant to their work._

_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#details-of-findings)_

_To add images: ![text](link - add image to github folder and link here with .png)_

Barry Eggbert: 

"Key aspect / thing I want to communicate is as we’re contemplating transition — I just don’t want duplicated effort, duplicated code. If we can leverage MHV’s existing APIs, it will make things faster for the health apartment team."

Mike Chelen: 

“If MHV has a prescription page that somebody goes to –is  there a backend component to that? Is that backend component a RESTFUL API that we can integrate with directly or can they make it a RESTFUL API? What are the standards/specs for any of those API’s? “

“What does it take to actually get connected to that system? Is it easy, is it difficult – do we need to ask MHV to make changes? Do they have a sandbox version of that API? “

“If an MHV service doesn’t have an API, who’s responsible for making that api? Who’s responsible for addressing those issues?”



**Finding 1**

Labels: label 1, label 2 

_List all labels that apply to this finding from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc)._

Brief description

> _Supporting data: Quote here_

> _Supporting data: Quote here_



# Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._

Public website team has limited bandwidth - need to go through PM’s

Possibility we might need React widget(s)

Clearly communicate expected dates with other teams

Concerns about duplication. Does not want duplicated effort or code and suggested we leverage MHV’s existing APIs to make things easier and quicker.

The Developer Portal should be available by the end of 2021 and will affect the process of how we interface with MHV regarding APIs.

Porting from a portlet to a mobile app or to a new tech stack (health apartment) on top of React should be a fairly light lift migration.

MHV currently uses a postman project to provide API “documentation” and guidance regarding the operations that we intend to use. (This will change once the Developer Portal is available)


# Next Steps

_Next steps here. Include owners if appropriate._

Follow-up with Barry regarding MHV Github access for Jared and Nadya (Jared)

Meet with the Flagship Mobile App team to gather their insights and lessons learned when leveraging MHV existing APIs.

Follow-up on the progress / availability of the Developer Portal (Jared)

Collaborate with the Identity Working Group around Identity UX to stay in the loop.

Follow-up with Barry regarding the 100 page system design document (Jared) 

Patrick Vinograd (massive amount of knowledge on how systems integrate)

Allister Dawson, staff software engineer for mobile team, Ad Hoc

Meet with Identity Team PM (Nick S) to get documentation and links around identity.

Meet with Damian Ginther to learn about DevOps and determine if we want individual pieces to have their own build and deploy pipeline and what that would look like (should contact PM Jesse House first) 

Communicate with Drink and Jeff about rails skillset, and systems integration

Determine if we need to meet with FE and BE teams in addition to the platform orientations.

Figure out if MHV APIs are integrated 

Add key questions to discovery mural(s)

Create discovery folder structure in Box and upload all materials



# Further research needed

_If there are demographics that were not included in this study or you discovered that more research should be done, make note of that here._

Should all the people we still want to meet with get added to this section? Or maybe delete this section



# Appendix

[Note-taking template](link here)

[Zenhub Tech Discovery Board](link here)



## Tools used for Synthesis

Mural Board: 
https://app.mural.co/t/innovationboards1199/m/innovationboards1199/1632428592685/ffaecacbe4dbed4518a918630fc15c282e8d9403?sender=cc0958d7-589b-4e75-8e6c-a0c34e0f0198



## Other supporting documents created

e.g. user flows, personas, etc.


## Who we talked to 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#who-we-talked-to)_


Barry Eggbert, MHV Application Architect

Mike Chelen, VA.gov Architect

David Conlon, Public Websites Crew Chief

Cory Trimm, VA.gov Engineering Practice Lead


