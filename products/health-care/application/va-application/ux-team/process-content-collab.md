
# [DRAFT] Process - Content Collab

Last updated June 14, 2024

----


This process document outlines what tickets to open in github, how to setup the Figma design files, notes and status Figma components used as well as CAIA collab process and tasks. 

---- 


## Tickets  

**CAIA side to initiate work**
- Open a content ticket if this is part of the Collab Cycle or not:
- [Sitewide Content, Accessibility, and IA Intake Form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=strelichl%2Ccoforma-terry&labels=sitewide+CAIA%2C+sitewide+content-product+support&projects=&template=sitewide-CAIA-intake-form.md&title=%5BCAIA+Intake%5D+%3CTeam+Name%3E%3A+%3CInitiative+Name%3E)
- NEW - Created end of April, Content (confirm this process - have not heard of use/updates)

**1010 Health Enrollment team board**
- Open a ticket on the 1010 project team board with the appropriate labels to account for the UX content work collab effort.



## [WIP] Process + Timeline 

- Open tickets - CAIA ticket and 1010 ticket
- Review at weekly 1010 Team + Content Sync on Fridays for a "kick-off" or if needed due to scheduling, setup a separate meeting to go over the request
- Set dates for the content phases
  1. initial content review + SME questions,
  2. SME answers + content impact,
  3. SME accuracy check,
  4. post-SME changes,
  5. complete + QA


### WIP Process: 

1. Designer setup Figma page with all components and notes to start content collab 
2. Designer/PM open CAIA ticket and ticket for 1010 team board
3. Designer walk through the request and the screens in Figma at a weekly Friday content sync meeting (or separate meeting if needed)
4. Content can adjust in content source of truth section Figma screens directly or post temporary questions in Figma comments
5. Capture any future state comments or content in the content status component note variant
6. Can change color of note or content components to call out SME questions and answers (chat as team on future direction)
7. When in Pending used details section to add reasoning why
8. Change to ready to development as pages are approved
9. Tag engineer in FE ticket once designs/content are approved




### Designer - Figma file setup OPTION
When an initiative needs to go through content collaboration process, the design file needs to be structured in a way to allow the content specialist to make edits directly in Figma. To prevent issues with changing variants of the main native components, create a set of content components just for this initative/ticket. 

1. Create the “Content Source of Truth” Section in Figma for the main content symbols
2. Create the frame and turn into a component each page/question needing content collaboration
3. Annotate and add notes and background to the components in the Source of Truth section area
4. Create a Section in Figma for using the VADS form step templates, add notes, annotations, and user flow notes or any other helpful context
5. For each screen/frame that needs to be reviewed place content status component(s) setting to "Ready for content review"
6. Flag with component and comment when engineers begin development for CAIA awareness

<img width="681" alt="Content-FigmaSetup" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/98367393/09d6c92e-e9f0-4087-bc8a-65bd75673e00">


### Designer - Figma file setup OPTION
1. Designer layout new updates and unattach all components fromn VADS library so there is a local working version for content
2. Ddd notes, annotations, and user flow notes or any other helpful context
3. Label section for content to review and make udpates in
4. For each screen/frame that needs to be reviewed place content status component(s) setting to "Ready for content review"
5. Flag with component and comment when engineers begin development for CAIA awareness



### Designer content collab
1. During the content review, the designer will pull out notes comments that need to be kept for design decisions and document that per the team standards and keep up on that documentation

### CAIA content colab

1. Where there are "red - ready to review" status components, on the section labeled Content Source of Truth.
2. Make edits directly in the main components
3. Use comments in Figma to ask an clarifying questions
4. If other changes are found and needed outside of the requested pages to review, call out in comments


### Content Status Component
This component was created by the 1010 team and lives in the library file **10-10 EZ & EZR Form Content**

Native component source: 
Figma File: 10-10 EZ & EZR FormContent  
Page: MISC > 
Component> Content Status


<img width="397" alt="Content Status Figma Component Variations" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/98367393/ad0a1b49-b530-4d89-9442-59bddcdcc5da">

￼

**Variants to use:**
- When ready for Content to review - RED
- When ready for Development - GREEN
- When pending - in process/SME questions/etc- YELLOW
- General notes: BLUE
- SME Questions: PURPLE

**Additional Notes Component**
Use the Notes component in VADS Web Annotation Kit 
- To label each screen / page name of the flow for review
- Callout any other changing elements like URLs/fields added or removed/specific changes





----



