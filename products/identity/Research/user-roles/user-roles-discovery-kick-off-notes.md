# User roles kick-off meeting

9/2/2021

Attendees: Ana Jackabcin, Kevin Hoffman, Liz Lantz, Tressa Furner, Cory Trimm, Cody Reinold

[Existing documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/sprint-objectives/samara-leave-planning.md#vagov-profile-user-roles--permissions-1)

## Project background

VA.gov wasn't designed to be a multi-user experience. Getting there will be a series of steps, and this meeting kicks off some of the very first steps.  There's some middle ground that we want to discover between launching a siloed UX for dependents, and a fully integrated UX. The research our team will do will determine how far we want to go between those two.

### What has VSP Identity been up to?

Team has been looking at trying to engage with the right leaders from eBenefits to bring in dependents as the first new user goal onto VA.gov.

They recognize VA.gov was built for veterans, so there are going to be rather grandsweeping changes that will need to occur from a code perspective to serve the people who serve our veterans in those support systems.It seemed like dependents (vs caregivers or something else) was the first easy step forward.

Some other users roles in the future would be

- caregivers
- POA
- Etc, etc

VSP identity team is only tasked with relaying information back to consuming applications, not what the experiences look like.

- Cory sees a lot of overlap between the our two groups (VSP identity and Auth experience) in deciding how does this info get displayed on profile or My VA.
- They've engaged with eBenefit stakeholders to bring relationship data into MPI. A lot of it is within corpDB and (some other acronym)
  - Likely not any research so far
- They're working on bringing all of that relationship data into MPI but at the same time trying to bring dependents benefit letter onto VA.gov

Identity team has built an attraction layer to infer how someone is related to someone else, but that goes to all these different sources.  Ideally, when relationship data gets pulled into MPI, it's one call.

## What we know so far

### Timeline

- EOY is the goal - at a minimum by the end of year we need to say where we are in reaching our goal
- Goals were set at the beginning of the year with the realization that we won't meet all the goals
- VSP Identity team sees Auth Experience team doing this discovery long-term (not just for this initial MVP)

### Non-Veteran roles at VA 

- eBenefits, The Veteran Delegtation tool built by VHA, and *maybe* MHV already have non-Veteran roles and features
  - You can assign delegates in the veteran delegation tool
- To have a shared definition of "What is a dependent" across all 3 administrations will be hard to do
- There's a **rumor** that dependents can log in with their Veterans log in and get their own dependent letters. PO believes that is a capability that exists. 
  - There has never been a non-Veteran thing intentionally put on VA.gov
  - May be using the Veteran credential to create their own ID.me account

### Dependent priorities and benefits

[Information about benefits dependents are eligible for](https://www.va.gov/family-member-benefits/#benefits-for-spouses,-dependents,-and-survivors)

Here's what we know far about dependents' top priorities?

- There's a middle ground on clarity.  
- Different administrations (VBA/VHA) will tell you a different answer.
- Dependents letters has come up because it's a relatively low lift - we just need to "auth" a person, everything else is set up.

### Other partners

eBenefits

- Unclear if the eBenefits team has put any of this on their roadmap. 
- There's some dependent verification work but that is not dependent facing.
- Talking to Jason and Matt Self would be a good idea to determine what their end state looks like.  They're tasked with retiring eBenefits but we don't know what all will be moved over. 

## Stakeholder goals

- By the end of this year, we need to launch *an* experience. Does not need to be a fully baked dependent UX.
- Going forward, dependents have their own ID.me account and credential, and the relationship is managed in MPI

- VSP identity really wants to know WHERE the button lives for the dependent to get their benefits letter
  - Our team should able to take a position on Cory's question, and we can answer that as a first step in answering the larger question of "how do dependents want to find *anything* on VA.gov"
- Learn how do we translate the eBenefits UX on VA.gov
- Our team should able to take a clear position on "how big of a scope of a question do you want to ask" for research.  
  - E.g. entire dependent journey vs usability of finding a benefit letter. 
  - We can't do one study that does all of those things.

### Possible deliverables

#### Near term

- Understanding what dependents may (or may not?) need from VA.gov. _There is a big assumption that dependents are logging in to get benefit letters, but is that true?_
- Understanding whether or not dependents are just using VA.gov as a shopping list where they sign in and download a letter once a year and that's it?
- Defining where on VA.gov it makes sense for dependents to be able to download their benefit letter
- Some basic dependent-specific functionality within their account (e.g. seeing their name, personal info, etc)

#### Long term

- We just don't know what that user journey looks like for non-Veterans

- There are a lot of different personas we can create and determine what is their ideal journey on VA.gov

- Prioritizing how we can provide value to non-Veterans (maybe this is something more near term?)

## Possible approaches to research

### Open ended usability to learn about dependents and their benefit letters:

- Have you used a dependent letter? 
- What did you use it for? 
- What was that experience like? 
- How do dependents get their benefits letters?
  - do they go to VA.gov, and can they get their letters there?
  - Take them to VA.gov and let them show you where they would find it
    - If they say something like I would log in but I wouldn't know if I could log in:
      - Don't guide them 
      - Ask, *if you could log in, what would you do?* 
      - Ask, *What would you expect to happen?*
- What other kinds of things do they hope to find on VA.gov?

### Come at it from a users perspective, look at it from their journey

- What is valuable to dependents? 
- What we can do to meet those needs within the ecosystem of.  
- Are there existing business processes for Veterans that we can tap into that would be a logical handoff for a dependent? 

## Outstanding questions

1. Why does VA believe this user role needs to exist on VA.gov?

2. Other than eBenefits, the VHA Veteran Delectation tool, and maybe MHV, where else do user roles exist in the VA digital ecosystem?

3. Why is it a priority for VA in 2021?

4. What are the specific qualifications that make someone a dependent? 

5. How does someone get correlated as a dependent in the VA ecosystem?

6. In the below statement, is Samara saying we should have dependents log in and go through the site as we observe them to learn this, or is there an internal VA way to understand this? Feels like there is a risk of missing something if we only specify "dependents" as criteria without knowing what other parameters might influence what dependents can/can't see on VA.

   >  We'll likely also want to quickly look into dependents' VA.gov accounts to asses what data they can already see and what they can't.

6. Who can help us figure out where else on the site are dependents' already able to view data (eg. benefit letters, other edu info, etc.)?
7. What do dependents already do online to manage their relationship with VA?
8. Where do they do this?

Product related questions
1. Is there a product outline for this? (user roles)

2. Prioritization and timeline - what is the timeline and how does this fit into our existing priorities?

3. What is success for this initiative?

4. We understand that the ask is to perform research. Is the intent of the research to prove (or disprove?) that the benefit letter download is _the_ thing to build, or is the research intended to discover _what_ we should build, beyond the possibility of download benefit letters feature?  

## Next steps
1. Create project outline that documents with what _we_ think they're asking for and share with them to make sure we're on the same page
2. Track down answers to questions where possible
