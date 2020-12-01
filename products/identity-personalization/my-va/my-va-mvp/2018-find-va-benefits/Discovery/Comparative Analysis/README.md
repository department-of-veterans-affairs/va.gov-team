# Personalized recommendations: comparative analysis

## Overall trends and considerations

### Location

Recommendations are often located in one of two places in an online product:
- Interspersed within a feed or dashboard of other personalized content.
- In a separate area, e.g. "Notifications" or "Recommendations".

In all examples, recommendations were easily findable but unobtrusive. Users can interact if they so choose, but none of the recommendation placements we saw take the user out of their intended flow.

### Disclosure

In examples where recommendations are in the form of paid advertising, there is often additional content the user can access that discloses (A) the fact that it is an advertisement/sponsored content, and (B) why it's being shown to them (e.g. "You've shown an interest in [x]"). 

We might consider a similar pattern to explain to users why we're recommending a particular benefit to them, or how we know they're eligible (e.g. what data we used to determine this).

### Display controls

Many interfaces give users the option to hide a recommendation. This is often paired with the option to bring it back, and/or give feedback about why they want to hide it (not relevant, offensive, etc).

Both GMail Boomerang and Slack have functionality that allows you to be reminded about a message at later time, and they both allow you to choose when you would like to be reminded. We should consider whether we need to incorporate functionality like this into the benefits recommendations tool.

This brings up larger questions about recommendation preferences. What kind of settings do we need? Where do they live?

### Wizard

NerdWallet is a good example of an interface that knows _some_ things about you (credit score, financial trends), but needs to ask a few more to give you recommendations for a particular type of product. We may leverage a similar pattern depending whether we have a data gap in major eligibility factors for a particular benefit.

### Potential future functionality 

These would likely be out of scope for an MVP, but the following are potential future capabilities of a recommendation system that may be worthwhile based on what we've seen elsewhere:

* **Recommendations based on what you've done on Vets.gov** — Amazon makes recommendations based on what you've purchased or looked at. Are there recommendations we can make based on someone's actions on Vets.gov in addition to the data we gather about them from elsewhere in the VA? An example might be recommending other dependent-related benefits because they applied for education benefits for their dependent.
* **Lifecycle from recommendation to receiving a benefit** — Financial sites like Minted and Nerdwallet show recommendations that correspond with information you would track in the tool. Example — they recommend credit cards that, were you to apply for them, you could track your spending and use of that credit card with their tool. Personal Capital shows you your financials over time. For recommendations, it might be nice to consider the full lifecycle like these products do and track the process from recommendation to application to actually receiving a benefit.

## Notes by product

### Amazon

* Recommendations are out of the way. They don't get in the way of the main action (eg. buying something) or main feedback (eg. purchase confirmatons).
* Open question: Are there recommendations we can make based on something someone has done on Vets.gov? Example: You applied for X dependent benefit. Here are other benefits for dependents.
  * Recommendations may be a multi-level approach. That's fine, but we need to figure out how to do that without being overly obstrusive.
  
### Facebook

* Facebook has a page explaining how they decide what ads to show. This is great in terms of transparency and something we should take into consideration for recommendations. My prediction prior to user research is that people may feel like recommendations feel a little too much like magic and they might be wary of where that information is coming from without some additional transparency and clarity.
* Recommended/sponsored content is called out in a visually different way. This may be a good idea for recommendations so users are clear on what we have generated vs. what content in their account has to do with an action they've taken.
* Facebook also gives you the option to remove/report content. If we do something like this, we should be smart about what we do with that information. Can people hide something temporarily? Forever? And what do we do with those analytics over the long term?
* In a "Why am I seeing this?" box, there is a clear link to preferences. (1) What preferences do we need for benefits recommendations? (2) Whatever they are, we should make them easily accessible.

### GMail Boomerang

* Among other features, boomerang lets you receive reminders to follow up on an email or task. You can pick what day you'd like to be reminded of said email/task.

### Minted

* Mint has a whole separate section for its recommendations, and then those recommendations are divided into different categories. Some of the categories have filters within them to further refine results. This is an approach to consider for our recommendations — instead of having a block on the dashboard, having a separate section where people can view and search through recommendation based on what they need that day.
* Recommendation blocks are clear, large, easy to scan, and have clear calls to action. Of course, the size of these blocks can make lists of recommendations long, but additional filters could help with scanning through longer lists.
* Some of their recommendations include a "What you get" and "What you may like" blurb. Short and sweet, but helps to answer some of the question "why are you showing this to me, and why should I care?"


### Nerdwallet

* Nerdwallet recommendations require that some additional information be shared with the site before making recommendations. We'll have to work closely with development to figure out where there may be gaps in our knowledge in order to be able to provide accurate recommendations.
* Nerdwallet gives recommendations ratings. Open question — would it be worth it to have user-generated ratings based on our recommendations (eg. 100 users found this recommendation helpful)? Or would something like that be more worth it for us internally to further hone our recommendations approach?
* Nerdwallet can provide estimates of savings to people based on their current circumstances and what they might save if they use a particular product. It would be cool in the future if we could provide estimates of what people might receive for a certain benefit (eg. people with similar circumstances usually receive X from the VA per month).

### Personal Capital

* Personal Capital provides a dashboard of what you have now. It might be cool to pair recommendations with a view of what people already have and show the life cycle from recommendation --> application --> receiving the benefit.


### Pinterest

* Pinterest has a similar approach to Facebook in that it provides the ability to understand why you are seeing a recommendation and to hide that recommendation. More importantly, they are smart about that information and learn from it to further tailor the user experience in the future.
* A longer FAQ explaining recommendations may be a good idea.

### Slack

* Slack has functionality that allows you to be reminded about a message at later time. You can choose at what interval you would like to be reminded.

### Twitter

* Twitter takes a similar approach to Pinterest and Facebook re: clarifying and hiding recommendations.




