# DLD Usability Testing Topline Summary


[Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2022-08-Decision-Letter-Download/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2022-08-Decision-Letter-Download/conversation-guide.md)

[Mural notes](https://app.mural.co/t/coforma8350/m/coforma8350/1662487211577/ab780c3bc19ef6985d5781a76de1ae23b056cd0d?sender=uf0ac39cb9487bbab2ebe3184) 


This topline summary is a high level, top of mind summary of trends found in the sessions, but is not the final result of working with the data discovered. The information in this document may change following a deeper review and analysis of the data gathered. 


**The goal of this document is:**

 - To make sure everyone who observed the study is in alignment with the perceived findings
 - To gain insight from team/stakeholder/designers and determine specific directions to pursue as we analyze the data
 - To jump start synthesis by quickly organizing high level themes 

- - - 

## Initial Findings


**Core task of accessing Decision Letters via the VA.gov homepage and Claim Status Tool was very succesfful**

- All participants were able to navigate from the VA.gov homepage to the Claim letters page and the decision letter with minimal confusion or usability issues
- A few participants were confused by the [On this page](https://design.va.gov/components/on-this-page) component on the Claim Status Tool detail page, although it was hard to assess how big of an issue this was for them given the prototype's limited functionality
- One participant in particular felt that it required "too many steps" to get to the decision letter, which supports our hypothesis that showing the letter earlier in the flow would be optimal if we can overcome technical constraints to doing so. 

> "Oh that's definitely a 5 (out of 5)...everything is self-explanatory." (P17)

> "I actually thought it moved along pretty quickly." (P19)

> "Nothing was missing, it was just too many steps to go through to get to (the decision letter)." (P12)


**The date and recency sorting in the Claim letters list was crucial for participants to understand which letter was their claim decision letter**

- In the prototype, the "closed on" date in CST and the letter in Claim letters had the same date (Sep 8). This was a key context clue for participants to be able to know which letter was their decision letter. In production, we can't always guarantee that this will be the case, so there is risk for some confusion there, but we can be confident that the date will be helpful in the absence of other contextual metadata.
- During UAT, let's double check to ensure that dates are meaningful with real user data.

> "We're talking about 8 September, and the ones below are different dates." (P8)

> _"Why did you click on that letter?"_ "Because it's the most recent." (P10)


**On the Download VA Letters page, the Claim Letters entrypoint was not discoverable enough**

- Some participants couldn't find a way back to the Claim Letters page from the Download VA letters page, because the Claim Letters entrypoint was below the fold and they didn't scroll to see it. 
- The participants who did scroll saw the Claim Letters entrypoint and understood easily what it was. 
- On desktop, many participants looked at the left nav when prompted to find their way back to the Claim Letters page


**Most participants had no problem with the distinction between benefit letters and claim letters pages.**

- Although they found it difficult to clearly articulate the difference, most participants weren't bothered by the separation of Benefit Letters and Claim Letters. They understood the different use cases for them both.
- A couple participants stated that they'd prefer to see all the letters on the same page.

> "The decision letters are letters from the VA to me, whereas (Benefit Letters) are letters...that the website is generating that supports me." (P19)

> "I would have put what I needed on the other page and combined them." (P12)


**Other findings/reflections**

- Most participants correctly guessed that Claim Letters page would include decision letters and development letters (other letters related to gathering evidence or updates about the claim).
- The main value proposition of the Claim Letters page for many participants was that it serves as an archive. They felt reassured knowing they could access critical documents in this one place whenever they needed, especially if/when they misplaced the physical copies.
- A couple participants mentioned the mobile app, one participant in particular (P12) said that he primarily uses the mobile app and would expect to be able to find this more easily there. We should connect with the mobile app team to ensure that this functionality is available wherever Veterans need it.
- Only one participant explicitly critiqued the design for having "too many steps" (P12). But it was clear from observing that a better user experience would involve fewer steps to get to the actual decision letter. Given technical constraints, this MVF approach works but we should continue to explore how we can overcome those constraints to provide an optimal user experience.
- A few participants mentioned that they would use the decision letter for an appeal (P19 mentioned that they would do this immediately). Beyond the MVF, we should explore how we might connect the Claim Letters page to the appeals flows in an intuitive and cohesive way.
