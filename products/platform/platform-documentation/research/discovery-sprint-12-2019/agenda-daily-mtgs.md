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

## Day 3 Start Meeting
- Assign notetaker for this meeting: Rachael
- Review goal and activities for the day
- Learnings

## Day 3 End Meeting
- Assign notetaker for this meeting: Rachael
- Roundtable of takeaways
  - Not every problem needs to be solved with a feature or piece of technology to solve. Some could be solved with a process or a slight change in a habit - which can be extraordinarily difficult to ask. But there's a difference btwn users knowing a behavior is there and not doing it, vs simply not knowing about it. Could be a communication issue.
  - Significance of havingt the original author. In code I've rarely thought "who wrote this originally", but rather "who touched it last". Illuminated perceptual difference about not caring about past vs recent, whereas from non-technical perspective, sometimes original/initial context can be just as / sometimes more important.
  - VA.gov products meet VSP standards goal: in my mind we can put out all the docs in the world, and we can make a really fancy system, but we don't have the culture of ppl referencing it and using it yet. And we can't control how well they follow it. This goal may not be something we can control, what we do may not have a 100% direct impact on how well ppl design and code their stuff. It'll take a lot of time to get teams into it and using it, and sort of changing mindset and culture ppl have today, which is we throw an md file out there and never look at it again.
  - "You can lead a horse to water, but you can't make it drink"
  - There are 2 worlds: all the tools, and the journey/discovery of those tools. How do you get someone to go on that path on their own w/o guidance?
  - There are little or no features that can directly cause a cultural change. Maybe some processes could do that, or general socialization of something, or attitudes, etc. But when we get back to the features, nothing that we've talked about really changes the culture. It's all a pre-req to changing the culture. The thing has to be easy to use, but that's not going to change their behavior on its own. What we're doing is a pre-req to our goal of getting VFS teams to meet VSP standards, but docs alone won't help products meet our standards. Does that make it not one of our goals? But still our goal, but knowing we don't have complete control over it?
  - If a VFS team asks "what's in it for me" what would be our elevator pitch? We're going to make sure there is documentation, that it's accurate, that you can point out when it's inaccurate or missing, and that it's discoverable. It'll help you become less dependent on, or blocked by, a person on VSP to get your job done.
  - Could we brainstorm the culture of documentation and ideas, outside of the feature set, to increase adoption
- Revisit goal progress for the day
- Assign out necessary tasks to finish goal for the day
  - Crystabel and Mikki: decide what to prototype and how, to validate criticality of our top priority features and our hypothesis for user-friendly HIGH LEVEL ia
  - Dan and Bill: continue technical discovery focused on top priority features / requirements  
  - Megan: consolidate our workshop work into a cohesive product narrative (product outline and discovery sprint readout) look at samples from James, from [VSP overall strategy](https://docs.google.com/presentation/d/1-8LlD8jljlv-C9IIQO1fHDC4ok0NzpJF3nLfwnx5610/edit), and from discovery sprint folder.
- Is prototyping only Crystabel? Similarly, what do we use to prototype and how do we test, given that it might not be possible to configure on OOB solution within our sprint timeframe?
  - Goal of upcoming user testing: (based on 1. People can find what they need without having to ask, 2. Documentation is always up to date and canonical (and thus is trusted): 
    - can ppl find things easily?
    - can people update it easily?
    - do ppl need to contribute to their team's docs, and access how/why Platform usage docs in the same space?
    - do people capture technical product documentation at all today?
    - do people use Lighthouse documentation to understand how to integrate with our APIs?
    - with Advanced Search, does having technical and non-technical documentation in the same spot make it too hard to find technical stuff?
    - Does DEPO (and thus the VFS Teams they lead) know that they are responsible for their own product documentation? And are thus responsible for keeping it up to date?
    - Stretch: see if people can actually add missing docs or edit docs using the prototype
  
  - Additional problem to solve: how to we find out documentation is missing, and how do we rectify it? (potential solution: tickets that make it into teams' sprints?)
  - Additional problem to solve: how do we incentivize a culture of documentation, outside of the feature set, to increase adoption?
  - Additional problem to solve: how do we make editing process/approvals flow easier?
  - Additional problem to solve: don't know what technical docs I'm responsible for creating or maintaining

## Day 4 Start Meeting Agenda
- Assign notetaker for this meeting: Rachael
- Review goal and activities for the day: 
- Updated Product Outline, interesting assumption that we haven't really validated yet: that ppl need to contribute/collaborate on their own docs, and access Platform How To / Why docs frrom the same place.
- Started discovery readout
- Got thoughts together about what we've done, 
- Recommend "consolidated homepage with search, navigation, and insights"
- Insights dashboard not critical to prototype and test in this sprint
- File changelog, important for accountability of misinformation. Actually embedded on the file? Or linked to from the file? TBD what the design of it is, but let's include it.
- "Date last reviewed" this wouldn't be on every file, but might still be worth testing to see whether that's valuable/whether the concept makes sense since we don't have that concept yet. 
- Differentiation btwn technical and non-technical team members, and friction is one of the biggest things that'll prevent adoption. Is friction different for those 2 groups? Like GitHub is friction for non-tech ppl, but NOT GitHub is friction for tech ppl. 
- Do we give a team the autonomy to document as they see fit, and make sure it's searchable and stuff? LIke a dev building a reeadme and us being able to pick it up and convert it presentably w/gitbook? And in reverse, if you put something in through a wiziwig and our crawler picks it up?. As a dev, I don't care if it's in confluence or something else, I just want it to be there and presentable.
- Validate the need for a wysiwyg. We heard in 18F user interviews that md isn't that hard and non tech ppl will figure it out.
- Tech: tried to answer outstanding questions about gitbook and map back to features we've prioritized. It can sync repos, it has analytics, table of contents and sidebars for pages, has interpage navigation and intra-page TOC for the page. Files uploaded through gitbook seem to be stored on their CDN (not our repo), so that's good. But do you need a separate book for each repo? Has rating option for pages, that's cool.
- Prototype: for edit experience, maybe we need another screen. A page in md, w/a tab to edit in rich text.
- Algolia: higher level search. Doc search will only work for a specific subset of things they allow, has to be public, etc. Not sure if it'll be the best all-encompassing umbrella solution. If not that, could we still use indexing and search capabilities? If no, what do we do to search across multi repos?

## Day 4 End Meeting Agenda
- Assign notetaker for this meeting: Rachael
- Roundtable of takeaways
  - Discovery sprints in general: have only done sketching and straight to prototyping, but even though yesterday was long and difficult, I'm glad we did it bc more informed way of deciding what to design today
  - It's Day 4 and found out VA Network doesn't provide access to GitBook, may have been something to consider earlier on. Could have shaped the options we consider. Might not change recommendation, but may have been something to be aware of from the start.
  - We've been trying to come up w/a solution that works for both tech and non tech users, maybe for MVP we should have prioritized one group over another and solve first for a segment that has more of a problem. Vs both in one MVP.
  - Coming out of yesterday w/a list of features was a more carefully thought-through list of features, and that is almost the core of our recommendation and informs so much of what we will end up reporting out. Still need more on how to actually implement, but often have just come up w/set of MVP fearures by thinking ppl need this or don't, and excited to see what happens w/carefully thought-through wysiwyg question.
  - How are we going to actually get this test out? Get results? Analyze the results? Make a rec? All in Friday.
- Revisit goal progress for the day
- Assign out necessary tasks to finish goal for the day
  - Megan: schedule 30 min to pick Rian and Jeff's brains.
  - Mikki: send test to vfs-all-teams and other channels, let Leah, Patrick, Kevin know so they can encourage ppl to fill it out
  - All: continue other work in progress
- Assign out notetakers and interviewers for interviews the next morning, if applicable
  - JHL, **notetaker: Dan (or Crystabel if there's a conflict), moderator: Megan**
  - Rian, **notetaker: Megan, moderator: Bill**

---

## Day 5 Start Meeting Agenda
- Assign notetaker for this meeting: Rachael
- Review goal and activities for the day
- Updates
  - Slab: seems like it might have things we want, but it's expensive. Doesn't seem to have discounted pricing options for open-source/govt. Some of the features we ID'd as critical, if they're deal-breakers, that limits our options. So need to determine the deal-breakers -- like searching across repos.
  - Algolia through doc scraper: seems promising. can we customize the look and add in other little things? UI widget for dropping in the search and auto-complete needs research. Otherwise, we could always intercept the results and drop into our own custom widget.
  - Just closed the study out, 80% of ppl at least somewhat comfortable w/markdown. 42 ppl. 90% comfortable w/wysiwyg. Content detail pages, ppl were successful w/them. for 'what would you do w/an error' 74% clicked "Edit".
  - Making affinity map of qualitative things finding from comments, a lot of UX improvements.
  - Spot checked some other things to see if there was an obvious answer we were missing, but it seems like no. Every blog post asking question similar to our conundrum and there's no standard answer. In convos w/ppl at other companies, a lot of ppl take the strong search approach first, and then if you still need to provide more help go after consolidated homepage etc.
  - Let's meet back up at 3 to discuss the recommended solution approach and agree/align.
- (If applicable) Review scheduled interviews
  - Assign notetakers for today's interviews
   - JHL, **notetaker: Dan (or Crystabel if there's a conflict), moderator: Megan**
   - Rian, **notetaker: Megan, moderator: Bill**
  - Assign interviewers for today's interviews
  - Review housekeeping for interviews (Megan or Crystabel lead discussion, anyone can ask questions as relevant)

## Day End Meeting Agenda
- Assign notetaker for this meeting: Rachael
- Roundtable of takeaways
- Revisit goal progress for the day
- Technical Discovery
  - Bill: add background to tech discovery doc
  - Dan: add Algolia notes to tech discovery doc
  - Dan: copy in the "marketing table" of the features vs tools evaluation from Google Sheets
  - Megan: finish deck (doesn't have to be perfect!)
  - Crystabel: link to mocks in figma, affinity maps, crazy 8 doc, from discovery folder
  - Mikki: add research synthesis to discovery folder
  
