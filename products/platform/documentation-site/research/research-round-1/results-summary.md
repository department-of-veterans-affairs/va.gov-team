# Results Summary

## Background
The Platypus Tools team has been working to organize, improve, and categorize the wide range of documentation that we have amassed to enable teams to design and build products for VA.gov using the Veteran-facing Services Platform (VSP).

Up to this point, we have heard that our documentation is extensive but it can be difficult to know where to start. We anticipate that the master table of contents we've built will help teams have an understanding of what is available, and point them in the right direction. We planned to use these usability sessions to test that hypothesis.

## Goals

We wanted to answer the following questions:

- Can members of a cross-functional product development team with no prior experience working on VA.gov find the information they need to deliver successful products on VA.gov?
- If a contractor has a question, can they find the answer in the documentation?
- In your practice area, what is something you would do on your first day?

We gave participants the following scenario: 

We are going to pretend that you are a member of a new contractor team coming to work on the VSP. This project has been going on for years, and your team is taking over for the previous contractor. The team you are joining is working on the [APIs; tools; infrastructure; experience; identity] components of the VSP. Your team is currently working on [expanding the APIs to access a new internal VA resource; updating the design system incorporate the latest USWDS release; updating guidelines for GA usage; adding a new identity provider].

Instead of asking them to react to the tables of contents as planned, we pivoted to the more realistic task of having them start at the vets.gov-team repo main readme, and talk us through how they would get a lay of the land.

## Method

### Dates

March 28-29, 2019

### Participants

We had 9 participants from the USDS and 18F organizations who work in the following practice areas:
- Procurement
- Content strategy
- Back-end engineering
- Analytics
- Product management
- Devops
- Design

Out of the 9 participants, 4 were women and 5 were men. Some were familiar with the Vets.gov/VA.gov project. Two participants had intimate knowledge of it because one was a previous DSVA member, and one is a current DSVA member.

### What we did

We conducted nine 15-45 minute in-person interviews and moderated usability testing sessions using the vets.gov-team repo.

Sessions' audio were recorded.

[The conversation guide can be found here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/documentation-site/research/research-round-1/conversation-guide.md)

[Synthesis notes with quotations can be found here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/documentation-site/research/research-round-1/synthesis.md)

## Key Takeaways

### Many people, but not all, who are onboarding onto a new project/program are motivated to learn the work practices, tools, and current status of the project.

Many of our participants described that they would spend time reading detailed meeting notes, post-mortems, training materials, and github comments in order to get a sense of the project. New folks want to be able to use the tools, and want to gain an understanding of where the project left off.

Not all participants are interested in past decisions and practices, however. As one of the participants stated: 

>It's good to be ignorant because you challenge decisions. It either reinforces decisions or provides opportunities to improve.

### It helps to have an onboarding buddy to guide them through the process.

There is a wide variety of onboarding experiences that our participants have had. Some more structured, and many less structured. One constant that improves the experience is people. Being able to freely ask questions and have someone as your go-to onboarding buddy can make a big impact.

### Many people joining new teams want to begin making meaningful contributions as quickly as they can.

Folks joining a new project with the government, especially a project that has meaningful impact on people's lives, want to get to work as quickly as possible. Many of the participants started looking for open issues or tickets that they could start contributing to.

### People who are onboarding to a new project and familiar with Github look for clues that indicate the health of the repo, which helps form their impression of the overall project.

Many participants would scan the dates of when documents were last updated and use that to get a sense of how well-maintained the project is. Some folks also described how they would look for post-mortems because they are juicy and give lots of information about what is going well and what the needs are in the project. One person also mentioned that a well-developed readme is a good sign of a healthy project.

### People who are onboarding want to get a sense of the overall, big picture before going deeper.

Almost all of the participants demonstrated that they want to understand the mission and the why of the project. They looked for the main readme to answer, "What is this project all about, and why does it matter?"

### When they are ready to go deeper, they want to find information about their specific practice area. They want to find where they fit in.

Once a participant has that broad sense of the mission, most participants demonstrated that they would seek more documentation on their particular practice area. They are looking for information that is relevant to them personally so they can figure out how to begin contributing.

### People want to know who they can turn to if they need help.

>I'm trying to create a map of the system as well as a map of the people

We observed that documentation, and the organization of the documentation, will often leave someone with questions. Even if there is a document that answers their question, someone might not know where to find it. All participants indicated that if they couldn't find the answer quickly to their questions, they would ask a colleague to help.

### A person's familiarity with Github can have a big impact on their onboarding experience

Some of the participants indicated that as part of previous onboarding processes, they had to learn to use Github. They described being slowed down by not understanding how the interface works or how to find things and contribute in Github. Conversely, the participants who had Github expertise were able to easily scan different directories and make quick judgments about whether it was the right place for them.

### Other notable insights

- USDS/18F folks are motivated to create a culture of working in the open.
- Sometimes, when people lack guidance for information specific to them, they create their own reading list by opening links they think might be important in new tabs.
- For some folks, documentation doesn't fit with their learning style and they may ignore it entirely.

### Tips from Sherri (P2)
- Link directly to Readme to avoid all of the folders up top
- ALWAYS a getting started, breaks down by day vs. first couple weeks
- Tasked based titles telling them the details - "this is where I am"

## Recommendations
- Audit the main readme in the vets.gov-team repo and move some of the more detailed content out of it, include main TOC underneath
- Create directories for each practice area, and a readme that contains a brief description and table of contents for each one
    - Add points of contact in practice area readmes
    - Recommend contacting specific people with certain topic areas
- Consider creating a standardized format for readmes in each product folder that contains a brief description of the product and links to the product outline and relevant research, design, and engineering documents
- Consider creating an onboarding buddy system for contractors coming onto VA
- Consider creating an issue template of action items for the mentor and mentee to work through

## Notes and ideas
- Is it possible to consider documentation a product and dedicate a team to it? Pie in the sky!
- More narrative-style table of contents
- Is it possible to provide guidance to reading materials that become relevant over time? (Read this in the first week, read this in the second week, etc)

## Resources recommended by participants
- [Federal Election Commission main repo](https://github.com/fecgov/FEC)
- [FEC API repo](https://github.com/fecgov/openfec)
- [Cloud.gov documentation site](https://cloud.gov/docs/)
- [USDS Forms System repo](https://github.com/usds/us-forms-system/tree/master/docs)
