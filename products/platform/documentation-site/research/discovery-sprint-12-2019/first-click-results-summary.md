# Results Summary

## Background
As part of the documentation site discovery sprint, we wanted to evaluate a feature set against key tasks with users.  

## Goals

We wanted to answer the following questions:
- Are users able to find documentation when provided with a landing page that brings together all types of docs?
- What is our users' comfort level with markdown editors?
- Do users utilize features that allow them to help keep documentation up to date?


## Method
A Chalkmark (i.e. first click test) was utilized through Optimal Workshop.   Participants were given a scenario and asked to click where on the page they would look/go to complete or answer that scenario.  Mock-ups of a hypothetical documentation site were utilized. 


### Dates
The test ran from approximately 5pm ET Thursday, December 19 through 1pm Friday, December 20.
This timing allowed west coast individuals to complete the test in the latter half of their work day thursday and was available to east coast individuals in the early half of their day on Friday. 

### Participants
- A total of 43 people completed the study.
- Participant self-identified roles:
  - Enginneering & Ops - 12
  - Product Management - 9
  - Leadership - 8
  - Design & Research - 7
  - Other noted roles - 7 (included 2 Content and IA, 1 QA, 2 Analytics, 1 "a little bit of everything", and a VA stakeholder)
- Participant self-identified teams:
  - VSP - 15
  - VFS - 13
  - DEPO - 9
  - Other - 6 (identified themselves as 3 BAH, 1 CMS, 1 DEPO co-lead of VSP, and VHA)

### Task Results

Nbr | Task | Success Rate  | Notes
--- | --- | --- | ---
--- | Site Home Page Tasks |  | 
1 | You are new to your team and are working on getting your laptop set up so you can communicate with your team members. Where would you look to find information on getting your Slack workspace set up? |  49% | Of the incorrect responses, 23% chose "Onboarding" under Platform Resources and 17% chose "Getting started" under Technical Documentation.  Of the successful responses, 17% clicked into the search box. 
2 |Where would you click if you wanted to see design docs on the latest version of the health care application that your team is working on?	 | 43% | Of the successful responses, 53% clicked within the product documentation box, 15% clicked into the team documentation area, only 6% clicked into the search box
3 | Where would you go if you wanted to find out how to request a 508/Accessibility review?	| 46%  | Of the successful responses, 51% clicked within the platform resources box, 18% clicked in the technical documentation box, and 17% clicked into the search box.
4 | You are a new member of the Benefits Discovery team. Where would you look to find out what onboarding information is available?	| 74% | Of the correct responses, 100% of them selected the "Onboarding" link.  
5 | You are a writer, where would you go if you wanted to learn more about the content guidelines and best practices?	| 37% | About 50% of the participants clicked within the platform resources box.  Around 28% clicked "VA Content & Features" under product documentation.
6 | You're an engineer trying to find information on the GraphQL API, after typing your search term, where do you click next?	| 66%| Only 23% of participants clicked on the tech docs filter option, the rest of the successful responses just clicked "Search" button.  All incorrect responses were in the technical documentation area. 
--- | Content Detail Page Tasks |  | 
7 | If you were reading through this page of content and knew something was incorrect, what content or option on the page would help you ensure it gets updated?	| 94% | Of the successful responses, 74% clicked the edit icon/text. 
7-1 | Follow-up 1: How would you use that information/feature and what would you expect to happen? |  | A little over 50% indicated that they would at least be initiating the change, while the other 1/2 were looking to notify someone that it needed to be changed. 
7-2 | Follow-up 2: If you were not the owner or original author of this content page, but you knew what information needed to be corrected, how likely would you be to make an update to it yourself? |  | About 55% indicated they would be at least somewhat likely to make changes if they were not the owner.  
7-3 | Follow-up 3: Please explain why you would or would not make the changes to the page. |  | Reasons to not make the change revolved around wanting to verify the correct info, wanted to notify the owner first, or felt it was not their content to change.  Reasons cited for making the changes were around eagerness to get it done as it would be better off.  Some participants indicated that that they would make minor changes, but bigger changes need approval.  Also, version control was cited as a reason why it was ok to make a change, which allows it to be reverted if necessary.  
8 | If you had a follow up question about the information displayed here, click on the option or information that would help you get an answer. | 94% | All of the successful responses clicked on the "Ask a question" icon/text.
8-1 | Follow-up 1: How would you use that information/feature and what would you expect to happen? | --- | Most users indicated that they expected the interface would allow them to enter a question.  Some felt that after entering the question it would appear on the page like a comment, while others felt it would be sent as a message to someone who can answer it. 
---| Markdown editor example | | 
9 | How comfortable are you using a Markdown editor such as the one shown to make changes to content? | --- | 80% indicated they were at least moderately comfortable using a markdown editor.
--- | WYSIWYG editor example | |
10 | How comfortable are you using a Rich-text editor (WYSIWYG) such as the one shown to make changes to content? | --- | 89% indicated they were at least moderately comfortable using a markdown editor.

**Final follow-up Question**
The mock-up shown in this test included all types of documentation on a single homepage — technical, non-technical, platform-wide, team-specific. Do you think this model would help or hinder your ability to find the information you need?

88% of participants indicated they felt it would help their ability to find information. 

[Crystabel affinity map of open ended responses]




## Key Takeaways

- Although people indicated frustration with the inability to search within Github for documentation, the click test showed that when given a landing page with navigation options, the use of search was low. 
- "Technical Documentation" as a title could be confusing to users depending on their role.  Users may look there for tools and system info, not just developer documents.  The heading may need to be more specific if it is intended to be primarily engineering documentation.
- The buckets of documentation that were presented in the mock-up were generally successful in getting users to the right area, but some options and titles may need further refining to ensure they are understandable and can get users to deeper content. 
- Most study participants were motivated to at least ask questions or notify someone if they felt information in documentation was in question.  Providing users a way to either update or suggest an update could prove to be very helpful in keeping documentation up to date. 

## Recommendations

- Continue to explore a single landing page that provides access to multiple types of documents, regardless of where those documents may live.  This page should also include a robust search feature to ensure users can get to deeper content and find specific documents when needed. 
- While more individuals expressed comfort in using a WYSIWYG editor, many also indicated being comfortable with the existing markdown editor.  Recommend providing hands-on training and additional resources to get users up to speed on using markdown and PRs as part of the onboarding process to ensure users feel comfortable with the system/process and have a good understanding of the GH repo. 
- Implement a feedback loop so that documenation users can ask questions or notify someone if information is out of date. This could be done via information provided on each markdown file such as an owner/contact name and a communicated process for notifying owners/asking questions. 



## Other notes, questions, ideas, etc

