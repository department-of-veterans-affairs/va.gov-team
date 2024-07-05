### 5103 work documentation
[Collab Cycle ticket
](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82160)
[Collab Cycle Milestone Tickets
](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1295)
[Figma File
](https://www.figma.com/design/igOOQi5BOTgQQJYA9X2G3M/5103-equivalent-language?node-id=5648-4028&t=QtR7M1gOAuXcQiFj-1)

**To Do:**

- [ ] [Midpoint Content feedback (mostly about formatting the text)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/85923)
- [ ] [Midpoint Accessibilty feedback ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/85925)
- [ ] [Midpoint IA feedback](https://github.com/department-of-veterans-affairs/va.gov-team/issues/86002)


## Chronological DBEX Notes:

**5/30/24**
[Slack thread detailing update post-chat with VBA](https://dsva.slack.com/archives/C053UDWMH7U/p1717107943719489)

________________________________________________________________________________________________

**5/30/24**
[VBA Sync meeting
](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/disability-experience/team-meetings/VBA-syncs.md)

5103 Claim Certification
- We want to try revising some of the claim certification piece to put it into more plain language. Is there a team within VBA (Office of policy of oversight?) that we could work with on approving this?
- top paragraph: is it possible to plain-language this, or does it need to be verbatim from paper form?
- Matt: it makes sense to adjust content with page number, but very hesitant to change from what's on the paper form. Think it should match.
- Andrew: agree, since it's a legal certification. Don't want to present different content online versus in paper form.
- Alternative approach to the bottom paragraph could be to dynamically populate the content shown there regarding evidence (figma) (skipped this)

________________________________________________________________________________________________
**5/24/2024**
[Dbex design meeting canvas notes
](https://dsva.slack.com/docs/T03FECE8V/F068SQT00MC?focus_section_id=temp:C:fcI14f2cdbf06e340fc924eeb1ae)

5103 Claim certification Update
- Can we plain language any of the certification piece?
- if so, we would like to work with CAIA on that
- Note: CAIA is going to be a longer process, decided if that’s where we want to be spending our energy vs just getting out this piece into the form as soon as possible.
- If we can’t plain language any of it (especially the clauses on the bottom part), can we dynamically populate what appears there based on what the select in the FDC question?
- Alternative approach to the third clause as well
- Meeting notes:
- Given that we have to change part of the form, we could try to change it into plain language and see what vba says, send it over to Office of policy of oversight, business side of vba we work with. General inbox we could send it to, get someone to review it for them.
- Action item: Check with David on Tues, we want to try revising this, see where David could direct us to team to work on within vba.
- Action item: Show david what it would look like with dynamic form populated.
- Action item: More opportunity to slim down entire text, parts that repeat in text and in the checkbox section

________________________________________________________________________________________________


**5/16/24**
[Dbex Design meeting notes](https://dsva.slack.com/docs/T03FECE8V/F068SQT00MC?focus_section_id=temp:C:fcIaa9f7522840e4620bdfa30d39)

_Convo where we discovered the issue with the FDC question_

**Discussion**

- Review the alert component as is right now (worked with caia to simplify content)
- Take this to collab cycle on its own and split out the signature/certification component to it’s own collab cycle. Yes
- Note section is that clear enough for now? No.
-- Action Item: Kate
--- **Continue revising the content on the alert component**
--- Can push back on v3 component
-- Action Item: Kate
--- **How long that cost would be to implement? Team 2 help**
--- Thomas was going to get an estimate for that and circle back
--- Could EE help if not?

- Signature component/Certification is connected to Box 1
- **Open question:** Keep language as is? Is that required from a policy perspective
- DR Keep language as is
- 5103 puts us most at risk for problems.
- Could put 5103 out quickly, and then do box 1 to form
- Would chop off the certification after the Download PDF
- Cant put language in about box 1 if we haven’t asked them about their evidence.

- Confirmation to prioritize adding box 1 as well, start this next sprint.
- Standard claim t/f on JSON currently
- - From an app submitted in nov. standard claim says false, fdc is checked.
- - Are we checking FDC for everyone right now? Appears so.
- - There was an earlier decision made to remove FDC from form since it wasn’t being used anymore. Can we add that PR back into the form? Yes
- - Would that qualify as box 1? Yes
- - Spring of 2023, was when we may have taken it out.
- - Can we check within the most recent application and see if anything is being checked as FDC or standard claim?
- - If nothing is being checked, If we’re checking fdc as default while also not providing 5103 notice, we have to get 5103 up or stop checking fdc.
- - Impacts VSR time
- - Fastest thing to do is stop checking FDC on the backend. Until we get the new Box 1
- - Box 1 and Certification are essential and can be combined together
- - But in the interim we can stop the fdc selection in that box.
- - Do we need IDES on there? No
- - David, check with those folks who use IDES as claim? A VBA Employee
- - We can determine BDD without asking, so would it be similar with IDES? David to find out.
- - If it’s not actually possible for someone to submit an IDES on va.gov then we shouldn’t
- - IDES forms can not be submitted on VA.Gov


- 5103 done asap (alert)
- - if waiting till July, get box 1 and signature/certification together
- - if not together, do certification second without the language about box 1 and then do box 1

- V3 components
- -Jared is working on getting an estimate from team 2 about their timeline for updating v3 components, we may want to override the Must feedback from collab cycle if that is going to delay us to implement

- Timeline for this kind of work, in order to make more informed decisions.
- - checking fdc, not giving them awareness of what their certifying, not giving them 5103 information. Understanding the cost of that implementation at the same time of TE.

** Action item:**
- Schedule quick call with Christine, people who took it out?
- Is it easier to stop checking box, or put the question back in as is? FDC question.
- Previous FDC Question
- Adding claim certification, mirrors what we’re signing in paper form
- paper form still referenced FDC as part of certification
- we found we removed this previously, but now theres a dependency on it.
- After we took this FDC off the form, the backend is still checking the fdc on the pdf
- Would we put the question back on or change the schema to stop filling it out? eventually the question will have to go back on. What’s the interim solution?
- We could add it back in for now, would still be hooked up to standard claim t/f in schema.
- Adding question back in, how long for timeline estimate?
- a little more than a day, at least a sprint to put the question back in,
- To uncheck the box on backend? at least a day or two?
- Is standard claim apart of the question we need to add in? Yes
- Where in the flow would the FDC question go? After training pay waiver and screen, and retirement pay
- Only shows up if it’s not a BDD.
- Do you want to submit using a FDC? If no, submits as Standard claim? Yes
- Where is the visual on this?
- old mural IA for image (pre-team 2 revision)

- No Box 1 on digital form, so certification would need some work.
- We might be able to get away with not linking to pdf on certification if we get in the FDC question right before.

- Next steps
- now - Christine to add FDC question back in to 526
- Kate to sync with Thomas on getting 5103 alert in (implementation timeline)
- Kate continue working on alert content
- July - add claim certification, revise content in FDC/evidence question as needed
- Kate to schedule midpoint for alert component, revising content to claim certification, and FDC question. 
________________________________________________________________________________________________


**5/15/24** 
[Slack Thread around open questions
](**url**)
________________________________________________________________________________________________

4/26/24

[Bi-weekly Design Sync
](https://dsva.slack.com/docs/T03FECE8V/F068SQT00MC?focus_section_id=temp:C:fcI05cb4f424649474ba2195b57a)

(Kate) 5103 link addition

- Taking a pass at editing the copy in accordance with the design system rules about links (show option)
- Do we need to take them to the page to download the 526 pdf or just let them download the pdf directly from this link?
- Seems like this would be an exception to the rule about not opening links in new tabs (at least for the evidence intro page) so the Veteran doesn’t lose their place in the flow.
- confirm with caia in office hours
- On review page, check in with pension and burial form who just implemented this pattern. Where they are placing this pattern on their forms?
- May be an argument for putting it after the review page, have it be it’s own page. the final step they’re agreeing to. prior to the final submit button.
- David might want the full paper form legalese, something to add to our solution. 
________________________________________________________________________________________________

**4/24/24**

[Slack thread initial kickoff with Shannon
](https://dsva.slack.com/archives/C04KW0B46N5/p1713990479971919)



__________________________________________________________________

**5/9/24**
[Slack thread about v3 component upgrade for the intro page process list
](https://dsva.slack.com/archives/C053UDWMH7U/p1715279353041569)
