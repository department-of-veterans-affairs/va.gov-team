# Screen Reader Walk-through with Angela Fowler - Profile

Notes from the Profile portion of a screen reader walk-through with Angela and the Authenticated Experience My VA and Profile teams. Angela's suggestions in **bold**.

## Personal Information
- The expandable information in accordions (FAQs) makes sense.
- Liz asked “how do you know that that is an accordion?” Because of the “button collapsed” read out by the screen reader.
 
## Contact Information
- First heading it goes to is Profile, in the sidebar menu
- **Some changes are needed for the heading order in Addresses. For example, it would be better if Mailing address were H3, then paragraph text used for the hint text. Same applies to Phone numbers and other similar fields in Profile.**
- Samara had a question about the name tag on the top of the page element - currently showing on every page with a Veteran's full name, branch of service, disability rating, etc. We don't want it to read out on pages where it's not helpful, but we also don't want people to miss this. How do we handle that?
	- Angela’s response: Right now it’s hiding above the first heading, unless you're arrowing down the page (like a beginner screen reader user would) you wouldn’t catch this. Ironically, a beginner screen reader user probably would catch it by arrowing down. For example, Angela would skip and miss it.
	- She would consider this as almost “basic information.” **Could be displayed right below the H1 under an H2 heading that says “basic information.” Or for less priority, it could be at the bottom of the page. In order to make it visible to the screen reader, it would need to be under a new H2 heading under the H1.**
	- If we put it above H1, do we really need to display it on each page? Might not need to, as it could get redundant. **Maybe have that read out with Personal information only.**
	- This is something to come back to.
 
## Military Information
- H1 - Military information, which is good.
- Angela arrowed down because she didn’t yet know the page.
- Uses an unordered list as well.
- This is consistent behavior across Profile.
 
## Direct Deposit Info
- Angela pointed out that if you navigate through this with tab key - which is a common way to do this - it could be wonky because it goes first to edit. But Edit is nice because [the labels] it tells her everything she needs to know.
- The help phone number is ok for the screen reader, but 711 is not. **TTY is not part of the aria label and needs to be. Angela would put TTY prior to the 711 in actual link text.** Liz is working on this and has noted this suggestion.
 
## Notification Settings:
- You have H3 headings and then radio buttons - these are in different field sets and there's a reason for that. Basically completely separate forms.
- When the update is saved - it tells her two things: update was saved, and she doesn't need to go looking for an Update button to save.
- This is managing focus well except for it didn't jump up to the previous button when thought she would, but it sounds like this works ok because it leaves focus on the same radio button as it was - "so I know where I'm at"
- Liz and Angela worked on this radio button selection and “update saved” (alerts) a lot - nice little selection component.
 
## Account Security
- “If I'm navigating by heading, it's easy to skip all this” (main fields)
- “I would almost put security settings as an intervening H2, then ID verification as H3 even though there's so little info… but if you have a user that needs to edit, it's gonna make it a lot easier to find.”
- Samara: This page isn't very useful as an LOA3 user. Thoughts on how to make this not so painful, in terms of there's not much you can do here? Maybe move the sign-in email address up? If you haven't verified your identity yet, then it is useful, but a very different experience.
- Angela: **You can put the email address change at the top under H1 under an H2 and then another that says completed tasks (H2) -- or put the email part somewhere else and then get rid of the rest.**
 
## Connected Apps
- Puts focus on H1, which is convenient.
- Rather than go through the whole thing, Angela just went to H1 and hit number 2 to see if they were H2s -- but "there is nothing else on here." **Angela suggested having an H2 that says Connected Apps and the rest are H3.** So could easily skip down to Veteran programs and services. Structure seems to make sense but it could be helpful to have H2 connected apps and drop all the app names to H3.
- [Though it’s weird right now] The buttons do need to be like this.
- “If I don't have 20 page long app names, I've gone through a bunch of buttons that say disconnect and learn about, so the app names are more valuable than brevity.”

 
## General
- Anyway to get it to not say "My VAAAA"? — Not really, more trouble than what it's worth.

## Editing something in Profile

### Contact info - Edit Phone number
- Focuses on wrong thing with error - not keeping focus on update button. _(Note: this might need more looking into, I'm not sure what the specific focus needs are)_
- Also does not tell her about all the errors shown, just one.
- Angela's suggestion: **The best thing to do is to have a list of errors together.**
- For the "Are you sure?" Modal: Suggested considering the wording. Maybe instead of Continue and Cancel could be Are you Sure? with Yes/No. But as is might be better for those with cognitive disabilities. 

