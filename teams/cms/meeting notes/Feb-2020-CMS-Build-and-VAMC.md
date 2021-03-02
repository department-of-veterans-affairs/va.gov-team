# CMS Build + VAMC : what do we do?

Attendees: Chris Johnston, Dave Conlon, Dror Matalon, Jeff Barnes, John Hashimoto, Michelle Steigerwalt, Mike Chelen, Rachael Roueche

**Bolded text** = framework from the cal invite
Normal text = in-meeting notes.

---

**These past months, we’ve been in the weeds trying to forge a path forward for CMS and VAMC. It has been rocky and frustrating, and in this meeting we’re seeking input from the experts on the CMS and VAMC work so we can take a step back and think through – at a strategic level – what may be in the best interest of VA to do.**

**Background:**

-	**The CMS Build work has been taking months longer than expected, causing delays and frustrations for the VAMC (and Facilities) team(s)**
-	**No team owns the CMS Build as a product/service, but other teams have been stepping in to apply band-aids in order to unblock VFS initiatives**
-	**The CMS Build may actually need to be rearchitected in order to be successful long term**
-	**The current new VAMC sites have nav and a11y issues, those issues may be present in the templates so are at risk of being present in all future sites as well**
    - RR: for clarity, this is about standards issues w/breadcrumbs and parent/child nesting, not strategic IA things
    - DC: there are already updates to the templates in process, and the plan is to continue tackling iteratively
- **There aren’t many (any?) structural guardrails in the CMS authoring experience, which is already leading to some bad VAMC pages being published**
    - DC: we’re requiring training as a pre-req for authors, and we can’t make strategic decisions about how to change the IA approach until we have more use cases to draw from (instead of just one).
    - RR: Ok so really, it’s more like the current Platform (including the CMS) is not optimized for this type of audience, hundreds of VA content-writers. It’s optimized for OCTODE-led VFS teams.
-	**The VAMC timeline is aggressive, there’s not much (any?) room to iterate on templates or authoring functionality between sites**
    - DC: “aggressive” seems strong
    - RR (added this note post-meeting): ok point taken. Correction: The VAMC work has a timeline it would like to be able to execute against, and the CMS and other issues may put that at risk.

**Meeting Objective:**

-	**Hear thoughts from experts (Dror, Mike, Michelle, Jeff) to inform ideas on the ideal CMS Build approach short, medium, and long term**
-	**Hear thoughts from experts (Dave) on pressure behind VAMC timeline, and whether (given CMS Build approach question, and problems w/nav, a11y, and authoring experience) a different timeline may need to be considered**

**Meeting Agenda:**

-	**Review backgrounds statements**
-	**CMS: is headless the right approach, given what we’ve learned trying to implement it in this env?**
    - DM: Not a good inflection point to pivot to something quite different.
    - DM: Originally, when I saw the plan I thought the headless plan made sense. Would have to do more research to determine if was/is the right choice.
    - MS: this is not the time to have a convo about re-architecture, but it would be interesting to get together w/eng teams and think of greenfield perfect scenario. What might be best to resolve outstanding problems? May not actually start implementing that, but gives us a north star.
-	**CMS: given the needs of VAMC, will we be able to iterate on the existing architecture to support hundreds of authors and thousands of nodes?**
    - MC: How do we continue to iterate on implementation and architecture, given business requirements and team needs [of VAMC]? We want to be able to evaluate and improve the architecture as needed.
    - MC: there was no source of truth/reliable doc about what’s happening when. So I have collected anticipated capacity, so we can really say we can meet this capacity next week, 2 months from now, etc. So have been doing that. 
        - MC: here's where we are trying to record requested capacity from business: [https://docs.google.com/spreadsheets/d/1pa0EgHuOXINvool4QHjV3lIDyYf-p9JRr8z1AuW4HFE/edit#gid=0](https://docs.google.com/spreadsheets/d/1pa0EgHuOXINvool4QHjV3lIDyYf-p9JRr8z1AuW4HFE/edit#gid=0) 
        - MC: here’s a recent summary: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/20165](https://github.com/department-of-veterans-affairs/va.gov-team/issues/20165)
    - DC: original charter of the super team was capacity and publishing time. We can’t forget the publishing time part of this, bc committed to OPIA etc a 5 min publishing time. When we asked what can be achieved this quarter, after sever delays all of 2020… our goal now is 1 hr publishing time, which is a sales job for Dave and we still have a very unhappy partner.
    - MS: without a re-architecture, the publishing build time is linear and scales directly with the size of nodes.  A 20x increase in nodes will increase build time by 20x. If you double the nodes under the current system the build time will be two hours.
    - MC: The original experiment didn’t prove out. They in good faith believed this was deliverable, but in implementation they found out “there’s this gotcha, there’s this other problem” so that approach ended up not being realistic. Now we’re trying to levelset and say, it may not be the same thing that was incorrectly promised earlier, but we are going to deliver something real.
    - MC: short term, the FE and CMS teams are trying to hit the 1 hr deployment time and we feel we can realistically accomplish that. Then, also look at how to improve on that. We want to understand timeline-wise, at any given time, understand the node capacity bc that’ll determine whether CMS needs to pivot to focus on increasing capacity vs publishing time.
    - DM: 1 hour is realistic as of today, and we’re being conservative on purpose so we don’t disappoint you again (on my part). At the end of the day, the real long term strategy is to do incremental builds. For now we’re just doing a shot-gun approach where we just publish the whole thing.
    - CJ: Incremental builds is what I thought were working on already, twice before
    - MC: and we don’t know under the hood what incremental approach takes, and would need months to evaluate that, so want to not totally block Dave’s team(s) from publishing VAMC sites in the meantime.
    - DC: I can hopefully keep selling the 1 hour, and if we’re basing the node count on the 1 hour then great. But the wheels could fall off that bus quickly, bc a year ago these stakeholders were promised a different timeline.
    - JB: a year ago, Digital Service had 0 engineers who could think about this problem for us. We asked a super team “decoupled drupal is hard, what should we do?” and they weighed incremental builds vs transformers, and they picked the latter. We had no one to vet that, and here we are a year later and haven’t implemented this (what was supposed to be intermediary) step of 5 min build time (with later state of instantaneous). Want to take responsibility for that w/this group, have been aware of this problem, and we didn’t create the correct env btwn these teams for this to be done successfully, we always had other more pressing needs, never made the env possible for engineering teams to deliver on this. Haven’t provided correct resources, time, and ppl. Applaud Mike, Michelle, and Dror for having the courage to come in here and say this is a bad plan, this won’t work, and how to we make something out of this?
    - CJ: what does capacity mean? And nodes?
        - MC: the total amount of content that exists in the system, nodes are a drupal concept for a piece of content. one VAMC might be 500 nodes or something.
        - MC: capacity means how many we can process in a given time to publish a page. How many can it handle while still having build/deploy times of <1 hour
        - CJ: I thought the problem was more about the overall connectedness btwn build and content, not about the volume of nodes.
        - JB: we’ve been trying to solve this w/big bang transformers, but the size of the build has always been the problem. There are other ways to scale how many nodes we can build at a time.
        - MC: capacity and speed are at odds with each other
    - CJ: for some context. When we were just Vets.gov, DSVA owned all the content and it was just in GitHub [Jekyll]. There were ongoing battles btwn DSVA and business stakeholders, bc they wanted “control” over their content. Jenny H-L was fine bc she was fine just relying on Danielle to put it in GH, but other stakeholders didn’t feel the same. When we did WBC, one of the concessions we made was, they’ll get on board if we make it possible for them to have technical control over their content. We never intended to give up entire control over most precious content, but were fine w/ancillary content being owned by other people. No one on this team wants to be responsible for buying, building CMS but we think we need to for this WBC concession reason. When we first started, it was a Drupal team who was planning to build a nuts to bolts Drupal env. CJ had minor freak-out bc they’d be rebuilding stuff we already had like header, footer, sign-in, and that was a bad idea. Rachael had the concern of “necessary friction” and not wanting it to be easy for business lines to just create page after page. So we decided there was another way to solve this, and headless was the way. Robbie said yeah that seems reasonable. Now we’re in this weird stuck position where we promised business lines 2 years ago some stuff we’d give them and said it would be much better than what you have now, and still haven’t delivered on a fraction of that promise.
    - DM: have seen this scenario so many times. When you let ppl easily create stuff, you end up w/bad stuff. 
    - DM: I also want to share Jeff’s responsibility. Last summer, when I was told about CMS I said oh we can do that in a couple months. And then as I got into it more and more, there were a lot of things I hadn’t understood about the project. So my apologies again. When Nick came up with this new solution, it’s exciting, but feel bad  didn’t catch it myself. 
    - DM: in terms of moving forward, having Mike lead this is huge. Am confident we’ll make good progress moving forward. To some extent it’s shocking that we’re talking about 100,000 nodes being a problem, bc those are miniscule numbers when you think of the larger picture. But this is more than just a build, we check URLs and do a whole bunch of transformation, and we haven’t really started optimizing this. My main point is: we have quite a few opportunities to optimize significantly, but we need the time to dig into it.
    - MC: thanks for the history. It’s understandable that someone would have those expectations of being able to do a thing, and then digging in and realizing it won’t work as they like. So am glad that we recognize this now.
    - CJ: re:nodes, I concur w/Dror that these numbers of nodes are small, and there are other things that handle this way better – even TeamSite!! So that can’t be an excuse for the poor experience we’re delivering.
-	**CMS: what do we need in order for a team to own the CMS Build?**
    - DM: Having Mike here is great. The people who own the build should be on this CMS Build team. We need 2-3 people who know javascript and can do this
    - CM: one thing that’s helpful is defining the boundaries and scope for the teams. So Public Websites and Facilities can own their Graph QL queries, and CMS team can own the performance and infra that those queries are running on. I like the idea of getting more defined “content build process is owned by ____ team w/____ leadership”, bc otherwise coordinating btwn teams is difficult and lots of blocking each other, given they have other priorities than this.
    - CM: what we’re talking about is scaling content mgmt to an enterprise level, and we need to allocate resources appropriate to handle that. We’re also coming from position of there was a bunch of stuff implemented at different times for different reasons, and we’re inheriting that and needing to maintain it and interoperability w/other systems. We have a lot of different infra that we have to play nicely with.
    - JB: There’s a tidal wave of nodes coming. Saying VAMC needs to hold off only buys us like a couple months, bc the rest is coming. Sounds like we have 2 teams who have other priorities and have their attention split btwn this and other things as well. Is the goal to work on an interim and longer term solution in parallel so we can get to incremental builds? Do I need to find more $? Does VSP need to cut something out of their contract and make room for this?
    - MC: short term (next month or so), CMS Core App team can work on Drupal performance bc that’s right in our wheelhouse and we have skills for that. FE Tools team is working on deployment pipeline. Facilities + Public Websites can continue the content side and Graph QL. But we need to take more of content build responsibility into the CMS team (so need more CMS team capacity to manage the content build)…
    - JB: there aren’t any javascript engineers on CMS team currently, so we need to go and find those ppl if CMS team is going to own that piece of the puzzle. That can be done, or it means CMS drops some priorities and ppl so they can hire JS engineers, or it means adding $ to their contract so we can add JS engineers.
    - DM: The platform team [FE Tools team] has put a lot of effort into this [CMS Build] and as a result the content and app build separation work has been neglected. We do need to hire engineers on the CMS team. Skillset wise we’re looking for node.js engineers.
    - MC: If you want scaling but don’t need help with content modeling, then we can shift resources to match those business needs. If you want both, then we need more $ and ppl to be able to deliver all those things in parallel.
    - JB: so in order for Dave to continue shipping VAMCs, we don’t have to change anything right now. We can use the ppl we have today and the current teams to do small iterative improvements that will unblock him. But in order to make headway on the incremental approach, we need another team to be working on that in parallel.
    - RR: well, that’s only true if we continue deprioritizing the content build separation and code isolation (which are critical for autonomous VFS deployment) – bc the FE Tools team can’t keep supporting the CMS Build work and make headway on their original priorities.
    - MC: with the new approach, FE Tools will have a lot of stuff cut from their plate, they shouldn’t have the same load they do now.
    - DC: does the volume of content you’re taking into account include projected content for all VAMCs and all Vet Centers?
    - MC: I’m going off that spreadsheet, so have given node ranges for different quarters. If those include that, then yes.
    - JB: do we need more capacity on Dave and John’s teams to support this?
    - JB: can we definitely put content build separation on the roadmap, even if we need FE to still be involved in the next few months?
    - DM: need 3 node.js engineers for the CMS team.
    - CJ: is there any appetite to having them be part of our office/our contract team? That might be more effective than hiring ppl through contracts.
    - MC: the more ppl w/helpful skills the better, don’t care how we get them in. Would want to talk w/the team about what exactly those skillsets are based on the approaches we’d be trying to tackle. To Chris’s point, these small numbers shouldn’t create such strife, but the way it’s implemented right now (using metalsmyth, which maybe needs to be replaced) – and this is all part of the build process, it’s hwo the content gets from it’s source all the wayo ut the door, and looking at that whole process form e2e so wecan say hey this chunk here is really slow, and that might mean re-implementing templating system. That’s the challenge we’re facing: legacy chunks that may be slow, and we can’t make them that much faster w/o replacing or doing heave work.
-	**CMS: what should we do in the short / long term to balance unblocking VFS teams in short term, and getting to ideal solution long term?**
    - 3 ideas came up in the meeting (these aren’t transcribed notes but my summary)
        - FE Tools and CMS Core App team continuing on their new idea, however we need to know if this new approach really gets enough off the FE Tools team plate for them to focus on and achieve their other platform priorities.
        - Need to hire 3 node.js folks as soon as possible to join the CMS team and own the CMS Build and start discovery on incremental approach
        - OR need to evaluate whether there’s another CMS priority we can deprioritize, and have that contract pivot to cut a few team members and instead get node.js folks on board w/their current funding to focus on the CMS Build.
        - “it would be interesting to get together w/eng teams and think of greenfield perfect scenario. What might be best to resolve outstanding problems? May not actually start implementing that, but gives us a north star.”
-	**VAMC: value of getting these sites live quickly vs persisting nav, a11y, and authoring experience issues in the new sites**
-	**VAMC: what would be the impact of considering a different timeline, given these challenges? And what might that look like?**


