# 2022-09-07 Initial Rollout Discussion with Public Websites & Sitewide Content

## Attendees
- Dave Conlon
- Danielle Thierry
- Jasmine Yohannan
- Marci McGuire

## Agenda
- Review HA prototype https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/prototype/a/B6287764-D9E3-45D1-9CE0-76CF97335BF9
- Review SM prototype
- Review roadmap; give high-level description of what we’ll need from them
- Review timeline Mural & team’s presumed tasks
- Are there other team dependencies for their tasks?
- Lead time for requests
- Add/remove/update and adjust timing to best of their knowledge
- Best point of contact for their team
- Their team’s GitHub tags and workspace
- Team channel on Slack
- Do they already have a request template?
- If there is a template, what is it called?
- If no template, how do we assign tickets to them/what tags
- Questions, concerns they have

## Notes
- MyHealth is only there when a Veteran is logged in - Authenticated Experience
- They've gotten some feedback that its redundant to have two things next to each other in the header before you're logged in.
- They have not had research results indicating that this should take over the Health Hub
- We'll have some form of deep linking
- Dave is not thrilled with the links right now.  We would not want to have them necessarily hit a landing page to get to a tool
- All of the manage online links deep link into Cerner
- Will there be an agnostic view for MHV vs. Cerner
- Having an agnostic view would have some implications for VAOS.  They will have to update their current link
- Same would apply for the log in widget for the Health Hub -- that would need to point to the new location
- We want to add the landing page content to our content request.   That will be dynamic based on Cerner/Not Cerner - Danielle's team will coordinate with 
- What would be the path for UAT - they've run into a hiccup with 1095-B team.  We need to think through the unauth into auth.  Dave would want to work through that with Public Websites devs on the call so they understand the user expectation. 
- In unauth, they can't restrict to a certain percentage, so that if we're doing a slow rollout, they can tweak the React framework
- We will probably need to have a checkin with Mikki - we need to understand what content is in Drupal and what is not; particularly 
- All Health Hub pages are static HTML; it is not pulling JSON to product a left nav.  Navigation in and of itself is going to be tricky if we are mashing up technologies.
- Most of the nav in other non-Drupal apps don't have a left
- Next quarter and the following - we should create a repeatable process.  Middle of next quarter we'd like to start talking through what those user flows would look like.  We need to wait for the research so we know what we need to do.
- Danielle - it would good to have a regular sync up with the content team vs. office hours.  Danielle can set up a regular content/design checkin.
- Dave thinks thinks will be a Q1 2023 priority for Public Websites.  We will need to think about the log in person.  
- What's making Dave nervous is that we don't know if this timeline is even achievable because we don't have any engineers to tell him what is involved. 
- It also says that a lot of the work that their team is working on will need to be put on the back burner.
- They're on the hook to deliver a new home page Nov
- This is potentially a dedicated front-end developer 
- Do we have the use cases for each of the rollout stages - particularly the unauth to auth experience
- They need to know how many versions of secure messaging.  Right now they have unauth, MHV and Cerner.  
- What versions are we going to have to prevent having a frustrating experience
- Current versions
	- Unauth - page talks about MHV, says
	- Auth, MHV talks about MHV and the sign in says
	- If you're Cerner, the page actually switches and talks about Cerner.  Sign in widget tells them to go to Cerner 
- It's the opt-in, opt-out experience - what additional things would they need to capture
- If they are opting out that old experience is the bifurcated experience.  What is the path back for someone who is registered at two different systems so we don't have a Veteran get into a new funky loop. 
- If you're only MHV probably makes sense.
- If you're Cerner only, kind of make sense.
- If you're one MHV and one Cerner, that's going to be be a hot mess.  What type of usability do we need to do around this? 
- A team had developed that whole Cerner approach while Danielle was not present.  If the Content and Product team also need to be involved to talk through the mechanics of it.
- Content needs to lead this.  Wes or Jill could participate initially and then figure out if we need to get an engineer involved.  
- I'll take a first crack at an activity diagram it to give people something to react to.
- The page lives lives in Drupal.  The intro to the page is in Drupal, and everything else is in React, and Public Websites owns that.
- The only way to change the language within the widget is within a site deploy.  It is not a content deploy. 
- Ideally this would be the first thing they would build using the content API, but they don't yet have a content model
- Future state would be supporting all this content in Drupal.
- Maybe it's a "tool" content type.  Danielle will create a ticket 
- Dave - why is the breadcrumb OK in Mobile, but not in desktop?  
