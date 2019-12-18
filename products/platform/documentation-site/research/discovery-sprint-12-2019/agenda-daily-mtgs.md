## [Full Sprint Agenda Deck](https://docs.google.com/presentation/d/1DXom-pkgMgcIaY3dmuyz81ZirQUBB4i8S9mu0XLYKGQ/edit?folder=0AJ6yVhfytxhFUk9PVA#slide=id.p)

## Day Start Meeting Agenda
- Assign notetaker for this meeting
- Review goal and activities for the day
- (If applicable) Review scheduled interviews
  - Assign notetakers for today's interviews
  - Assign interviewers for today's interviews
  - Review housekeeping for interviews (Megan or Crystabel lead discussion, anyone can ask questions as relevant)

## Day End Meeting Agenda
- Assign notetaker for this meeting
- Roundtable of takeaways
- Revisit goal progress for the day
- Assign out necessary tasks to finish goal for the day
- Assign out notetakers and interviewers for interviews the next morning, if applicable

---

## Day 1 Start Meeting Notes
- Rachael is facilitator! She's here to help keep things moving along, the rest of folks are active participants. 
- Each day we have a goal and a tactical representation of what work should be complete to lead us toward that goal. Before today, our goal was to understand where we are with documentation and the research that has already been done. 
- Today, our objective is to prioritize what to focus on. Tangible goal: lean UX outline.
- Walked through schedule for week 
- Qs from Megan: rescheduling Jenny HL, and deciding attendees for 18F mtg Tues AM
  - Jenny HL rescheduled to Friday, will ask her to let us know if she's available earlier
  - 18F meeting Tuesday morning: Megan, Mikki, Crystabel
- All interview meetings notes should be taken in THE SAME markdown file
- Backend/infrastructure engineers — Megan moderate, Crystabel notetake 
- Frontend engineers - Crystabel moderate, Mikki notetake
- Question from Mikki: is the va.gov-team repo a solution that we're evaluating? Rachael: that can be a solution that we evaluate and recommend if we decide that is best!

## Day 1 End Meeting Notes 
- Roundtable takeaways
  - Differences btwn good documentaton culture and bad. Good = if you see the need take the lead. Figure out how to update something when there's a hole in it.
  - We barely talked about large file storage, which is something I have been thinking about a lot before this. Maybe the learning is that this isn't the biggest pain point that doc site needs to solve...
  - Ownership is going to be a really interesting challenge to figure out. When asked in interviews, no one indicated they feel responsible for updating documentation. "Maybe yeah, but I don't" type of answer.
  - Common thing around searchability. "I'd like to have the ability to query this thing when I need it in the moment"
  - Reason for not wanting product documentation in/near code: it muddies the search results when looking for technical things.
  - Off the shelf solutions wouldn't require an in-house engineer to maintain, support comes with it. Interesting option, preferred by VSP technical interviewees.
  - Trust. "Is this the source of truth? Is it valid? Has it been updated?"
  - How do we make updating documentation a priority. How can we make it easy? How can we make it clear what needs to be documented? Otherwise, it's not going to happen.
- 18F interview
  - They're not using the handbook for technical work/documentation, it's largely about onboarding folks to 18F and cover whole gambit of onboarding a person, how to engage, etc (a lot of overlap w/our needs). It kicked off at least 3 years ago w/a ton of user research into what we've laid out in our research too, they started w/just GitHub pages, now have a way to preview the page before submitting it. Could be interesting to ask them: what are the challenges to having a GH powered site, why did you add those preview capabilities? How much do you / would you recommend using this kind of thing for technical documentation? Is there overlap there? 
  - Can we also ask what worked well with the initial solution?
  - Who owns it? How is it kept up to date?
  - **Notetaker: Crystabel**
  - **Interviewer: Megan**
- KW interview
  - **Notetaker: Megan**
  - **Interviewer: Crystabel**
- Crystabel: set up deck for rapid sketching, update convo guides for future interviews
- Megan: update rational for personas and decision on priority, and hypothesis
- Bill and Dan: pros and cons of various techincal solution options
- Mikki: refine notes from first 2 interviews

---

## Day 2 Start Meeting
- Assign notetaker for this meeting: Rachael
- Review goal and activities for the day
- (If applicable) Review scheduled interviews
  - Kelly, pushed back 30 min, so overlaps w/retro. **Moderator: Megan, notetaker: Crystabel:** Might miss part of retro if Kelly goes over 30 min.
  - Brandon, **moderator: Crystabel, notetaker: Bill**
  - Assign notetakers for today's interviews
  - Assign interviewers for today's interviews
  - Review housekeeping for interviews (Megan or Crystabel lead discussion, anyone can ask questions as relevant).
  - Questions are staying largely the same, aside from changing "successful experiene" to "good / bad experience" with documentation? And who did you know it was good, what made it successful? (i.e. not leading with successful)

## Day 2 End Meeting
- Assign notetaker for this meeting: Rachael
- Idea of standards,and telling ppl what's expected of them. We have the assumption that VFS teams *know* they're supposed to document their own products.
  - Had a convo w/someone from CMS about how they should document their FE metalsmith templates. They said they can't, and there's no other documentation for any other templates on VA.gov, Platform FE templates never created for benefits hubs or the homepage, so I shouldn't have to either.
  - Is this a painpoint we need to add? "I don't know what I'm responsible for documenting"
  - We put it in our list of pain points, and it's a part of our model now
- Roundtable of takeaways
  - Everyone has different opinions, and everyone solves things differently. There's not going to be one right answer to everything. Example: one person thought dev and non dev docs shouldn't be in the same place.
  - Sometimes sprints move quickly, and if you think something is being forgotten, bring it up so it doesn't get missed as we move on.
  - Some interviews affirmed feature assumptions, like: people want to focus on what "their" content is supposed to be, and not waste time looking at everyone else's.
  - Importance of maintaining and making it as easy as possible to edit.
  - One person said they would volunteer opt to document something so engineers could move on to another ticket. Maybe the 'why' we can explore having product owners document, whereas technical thing it's something engineer should be responsible for documenting. If you don'tknow what an n+1 query is, then you shouldn't be writing the tech doc.
  - "Why's" for technical decisions is a good thing to document
  - More affirmation that crappy search is an absolute dealbreaker.
  - A lot of the folders in a repo (index.js) maybe throwing a readme.md in there int he source folder where we drop app.js for technical why's that make more sense to live next to the code (as opposed to the business value why). Esp as things are being built more modularly. Or TOC.
  - From 18f: super different. Others have said "need ownership" etc, but 18f said: let everyone contribute bc any contribution is a move in the right direction. Those ideas might conflict. Internal ppl think Wiki is too uncontrolled/wild west, but that wasn't the same vibe from 18F.
  - Search hurts my brain bc Google has set a high bar standard, there must be other aspects to find things, can't expect ppl to try 100% on search. we're not optimizing thousands of pages of help content to be indexed. Can't just rely on search.
  - 2 sides of finding documentation: I'm searching for a thing, I know what I'm looking for. Vs I discover something.
  - 18F found one of the most crucial things to keeping it maintained and fresh was reducing friction of making a change as much as possible. There's usually a good reason someone is making a change. Preference to merge first, edit after if necessary. They do have a lot of operations staff / traditional govt folks, so it's not just highly technically savvy people. Might be a slightly different scenario than ours, 300 ppl and not using it for coding/tech docs.
  - I feel like there were a lot of conversations specifically about on boarding documentation. Slack recently announced a new feature called Workflows. I’ve never used it personally, but Slack uses onboarding as a specific example for Workflows.
- Revisit goal progress for the day
- Assign out necessary tasks to finish goal for the day
  - Megan: add features from sketches into the paintpoints spreadsheet, ping others as needed
  - Dan and Bill: md file in our discovery folder w/potential technologies and pros/cons given the sketches today
  - Mikki + Crystabel: synthesize interviews and start mocking/wireframing the solution based on the sketches today
  - Optional: start putting together synthesis from interviews
- Assign out notetakers and interviewers for interviews the next morning, if applicable
- When do we synthesize interview feedback.

---

## Day Start Meeting Agenda
- Assign notetaker for this meeting: Rachael
- Review goal and activities for the day
- Learnings

## Day End Meeting Agenda
- Assign notetaker for this meeting
- Roundtable of takeaways
- Revisit goal progress for the day
- Assign out necessary tasks to finish goal for the day
- Assign out notetakers and interviewers for interviews the next morning, if applicable
