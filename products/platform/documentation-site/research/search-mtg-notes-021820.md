# Algolia Search Regroup Meeting 

2/18/20

## Meeting Recap 

- Move forward on all non-search portions of documentation site MVP recommendation — _full speed ahead!_
- Plan to launch MVP without search
- Continue info gathering on Algolia
  - Connect with Algolia (sales?): would the Pro tier work for us?
  - Connect with Kevin re: price, approval, VA approval (?) 
- We **assume** that a documentation site MVP without search will not be sufficient to solve the majority of the pain points that we discovered. We still plan to launch our MVP without search to validate that assumption and gather other valuable info before determining next steps. 
- Prioritize measuring pain points and implementing KPI tracking in order to better determine next steps (after a searchless MVP)
- On another topic ... broken Gatsby build should be fixed as part of documentation MVP

---

## Goals 
- Determine whether we are moving forward with Algolia
  - Algolia is no longer part of MVP phase 1, but we will continue info gathering in anticipation of future implementation
- If yes, what are the next steps for implementation? 
  - Info gathering
- If no, what are the next steps for documentation homepage MVP (may be out of scope of this mtg)? 
  - Finalize design and contents of homepage
  - Fix broken Gatsby build
  - Audit and standardize docs set
  - Other discovery sprint recommentations
- Can we move forward with the MVP without search? 
  - Yes

## Agenda
- Review core desired search feature set (Megan)
- Review hypothesized value, assumptions, risks (Megan)
- Review level of technical effort (Bill)
- Review alternatives (Megan & Bill) 
- Discuss 

## Artifacts 
_not a complete set of final artifacts, but certainly enough to get the conversation going_
- Design doc PR: https://github.com/department-of-veterans-affairs/va.gov-team/pull/5248
- Design doc: https://github.com/department-of-veterans-affairs/va.gov-team/blob/4293320d2ae184d959fd52d1d94ba6cc6bdb6dc6/products/platform/documentation-site/research/search-design-doc.md
- Feature list/user stories (use filter view `Homepage & Search / Must have & nice-to-have` for the current priorities!) https://docs.google.com/spreadsheets/d/1ayY6B9d6APLkXKaV2ZlV2w0IAcJ-fMX2km-g5FJWD2U/edit#gid=0
- User flow (draft): https://dsva.slack.com/archives/CL181NRJQ/p1582033438083000
- Brainstormed hypothesized value, assumptions, risks: see below

### Value, assumptions, risks
**What is the level of effort to deploy Search Must Have List?** 
- What does that include? 
  - A public search UI … 
  - where I as a user can search through documentation contents ...
  - from multiple public docs sources …
  - without seeing github branches/prs/issues …
  - and with results that are updated at least daily.
- Technical level of effort — from Bill

**What is the hypothesized value of the Search Must Have List?**
- Users can search public documentation contents without having to remember where the docs are stored
- Users can actually find relevant content using search (unlike GitHub search)

**What is the level of effort to deploy Search Nice to Have List?** 
- What does that include?
  - Everything listed above, where I as a user can also identify the source of the doc from the preview before I click through to it … 
  - (and maybe even search by that source?) … 
  - seeing results that are very basically weighted by what the popular content is …
  - and without seeing certain buckets of content from those sources that are irrelevant.
  - Also, I as a docs maintainer, I can see what users are searching for.
- Technical level of effort — from Bill

**What is the hypothesized value of the Search Nice to Have List?**
- Users can more effectively search public documentation contents without having to remember where the docs are stored
- Source preview will allow users to weed out irrelevant content and more quickly/feasibly find what they’re looking for
- Any level of search insights will allow us to identify what people are looking for, dive into pain point prioritization. and better evaluate whether our tool is successful

**What are our assumptions for Search? What do we need to validate?** 
- Search will be basically functional (desired results will appear)
- Users will know enough about what they’re looking for to be able to enter an accurate search term
- Docs will exist for what users are looking for

**What does success look like for Search?** 
- Adoption — if people are using it, that is success 
  - 20% of VFS using search within 1 month? 
  - What metrics will we be able to get from Algolia/will this all be qualitative?

**What is the risk of launching our solution without search?**
- Puts more weight on the homepage Table of Contents to “get it right”
- Puts adoption at risk
  - Users are less likely to be able to find what they need (leads to high burden of manual support, may lead to VA.gov products not meeting VSP standards)
  - The homepage Table of Contents on its own may not provide enough new value to drive adoption

**If we went with alternate solutions, would we also be facing these same hurdles?**
- Depends on the alternate solution. Anything we build ourselves or buy as a search-only tool, yes. 
