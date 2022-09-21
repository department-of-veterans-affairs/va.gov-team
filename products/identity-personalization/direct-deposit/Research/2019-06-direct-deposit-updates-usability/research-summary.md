# Background

### [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/usability-research/research-plan.md)

### [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/usability-research/conversation-guide.md)

### What We Did

We are in the process of adding direct deposit functionality for compensation and pension benefits to VA.gov. As part of this process, we conducted usability testing on our designs to assess the following:

- Is the profile the best place for direct deposit functionality?
- Do users know where to go to update this information? If they don't, what steps do they try to take to get there?
- Do users understand how to update their information when they get to the profile? 
  - Are they confused that we don't populate the edit modal with their information? 
  - Do they understand how to find/update their routing and account numbers?
- How confused are people that they have to go to eBenefits to update GI Bill info?
- What do they think of the direct deposit content page?

# Methods

### Dates

We conducted user testing between June 24, 2019 – June 28, 2019.

### Participants

We talked to **5 veterans**:

- All participants receive compensation benefits via direct deposit from the VA.
- 3 men; 2 women.
- 1 participant under 35; 2 participants 35 – 44; 2 participants did not diclose their age range
- 2 Army; 2 Marine Corps; 1 Air Force
- 3 Black or African American participants; 1 American Indian or Alaska Native participant; 1 white participant

### Tools

We conducted moderated remote usability testing testing via GoToMeeting and [staging](https://staging.va.gov). 

# Results & Takeaways

### We need to make it easier to find the direct deposit tool.

All of the participants had trouble finding the direct deposit functionality. 3/5 participants looked in Account Settings before looking in Profile. Some participants looked on the homepage and expected there to be a link to direct deposit in the top 20 tasks we have listed above the fold. Some participants checked the "View your payment history" link on the homepage, expecting to see information on direct deposit there (note: we do link to content on direct deposit from this page). For those who could not find the direct deposit functionality on their own, they were finally led there via Search, which turned up the direct deposit content page, which links to the profile.

**Recommendation**: Make the direct deposit functionality easier to find.

To do:
- Make sure eBenefits links to VA.gov once this functionality goes live. 
- Use the announcement banner on the homepage to promote this functionality once it goes live on VA.gov. 
- Add jump links to Profile, and update the "View your profile" description on My VA. 

Additionally, we should consider either moving the functionality to Account Settings or linking to Profile from Account Settings. Right now, we don't have editable forms in Account Settings, so this would set a new precedent if we move functionality there entirely. 

### "Connected Accounts" in Account Settings caused confusion.

A couple of participants assumed that direct deposit functionality would be found in the Connect Accounts section of Account Settings. However, they were confused when direct deposit wasn't there and when there was no clear way to connect an account on VA.gov. 

**Recommendation**: Given that people can only connect accounts to VA.gov from other sites (eg. USA Jobs),we should hide Connected Accounts in Account Settings unless there are accounts that have been connected.

### On the Profile, it is unclear that the "Bank name" field is updated by editting the routing number.

We had one participant point out that they were expecting to see a field named "Bank name" when they opened the direct deposit edit form. Instead, they saw the "Routing number" field, which is how we determine the bank's name. This is confusing and inconsistent. The edit form should be more consistent with the read-only state.

**Recommendation**: In the direct deposit edit form, make it clear that updating the routing number will update the bank name.

### The direct deposit form takes ~3 - 5 seconds to close, making it feel like the feature might be broken.

The direct deposit edit form takes a while to save. We gray out the "Update" button while this is happening, but don't show any other indication that we are processing this update. Some users started to get nervous the feature was broken because the update took so long. We probably can't do anything about how long this takes, but we can make it clearer that we are processing an update.

**Recommendation**: Instead of just graying out the "Update" button we should show the same spinner animation we show for other forms in the profile. 

### No one was confused by the edit form being blank.

Even if a Veteran has information entered for direct deposit, the direct deposit edit form does not show what's been filled in for security purposes. We had hypothesized that this would confuse participants, but no one seemed phased by it. Some even guessed on their own that we were doing this for security reasons.

**Recommendation**: No changes.

### No one was confused that they had to go to eBenefits to update their direct deposit information for the GI Bill.

Participants easily found the CTAs to update direct deposit info for the GI Bill on both the profile and the direct deposit content page. No one seemed confused that this functionality was on a separate site, likely because Veterans are accustomed to siloed experiences at the VA.

**Recommendations**: No changes, but we should move over direct deposit functionality for the GI Bill and other educational benefits if it's ever possible.

### Veterans want to be able to see what's available on a page without scrolling their browser window.

Everyone we talked to mentioned they don't want to have to sift through a lot of information, even headings, to see if the content they want is on a given page. While headings are a perfectly reasonable way to expect a user to browse for content, this audience group is perhaps extra sensitive to having to sift through information because the VA is so notorious for putting undue burden on Veterans to navigate this system.

**Recommendation**: At least for personalized pages — like My VA, Profile, and Account Settings — we should consider ways to make it easier to scan for content without having to scroll as much. This may mean jump links, tabs, or different groupings of information in order to make these utilitarian pages less long and heading-heavy. Also, this emphasizes a known need to revisit our content groupings across these three pages, which should be explored in future research.
