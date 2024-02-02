# Topline Summary for Federal Header Authenticated Menu
February 2, 2024

This topline summary is a high level, top of mind summary of trends found in the sessions, but is **not the final result of working with the data discovered**. The information in this document may change following a deeper review and analysis of the data gathered. 

**The goal of this document is:**

* To make sure everyone who observed the study is in alignment with the perceived findings
* To gain insight from team/stakeholder/designers and determine specific directions to pursue as we analyze the data
* To jump start synthesis by quickly organizing high level themes.

## Notes about this study
- We talked to 12 participants in total
  - 4 participants evaluated the **desktop view of the header**. All used a form of assistive technology
  - 8 evaluated the **mobile view of the header**
- No one easily found the authenticated menu in the first 6 sessions. We wondered if it was because the first two tasks in our protocol asked them to find items that weren’t intuitive to find in a personal menu. **We changed the order of our tasks for the last 6 sessions,** so that the first task would be to find an item that is conventionally under a personal menu (profile).



## Initial Findings
### 8 of 12 participants struggled to find the authenticated menu.
#### Desktop view (4 participants total)
* 2 screenreader participants had to be guided to the menu button and completely missed the navigation elements on the page.
* 1 participant using CCTV noticed the menu immediately after signing in because the button label changed to their name
* 1 screenreader participant was completely unfamiliar with web pages and we did not ask them to try to find them menu.
#### On mobile (8 participants total)
* 3/8 did not find the menu without being guided by the moderator.
  > *Moderator guides participant to open main menu*.
  > 
  > M: Do you see the option that says [participants first name]?
  > 
  > P3: I do not see that. I see, oh god, oh I’m staring right at it. I’m sorry, I didn’t see that before...It’s in a different form than the rest of the page. If it were highlighted with a blue background like the other choices are, I probably would have clicked on it right away.

* 3/8 found the menu without being guided, but initially expected it to be in the upper right corner of their screen.
  * 2 did not notice the auth menu until the 3rd time they opened the main menu, when they were asked to complete a profile-related task.
  > I would expect, this, where it says [firstname], I think general convention, I'm used to seeing that in the top right corner. Most Google and many others have your profile in the top right coner. I was looking to the right of the dept of VA logo for my picture, my profile picture and my name. - P2


* 2 participants easily opened the menu for the first task, a profile related task.
  * For the subsequent task, find your disability rating, 1 of the 2 participants had to be guided back to the menu. They had not recalled seeing that option previously.

### 3 of 8 participants on mobile devices expected their name, and access to their profile, in the right corner of the header
- P1, P2, P16 for sure. Need to double check final number is 3
  > When I looked at the page, normally It has like my google symbol or something on the top right side. And it has my name, so I know that if I hit on my name then that's my profile. When I didn't see it, and it just says "sign out", I figured the U.S.A. government sign, that should take me to the home page which should also open the place for me to able for me to be able to go in and change my phone number. - P16

### The auth menu label button was unclear to some participants.
- When screenreaders read out “*[First name], button, menu*” or “*[First name], button, pop-up*”, participants weren’t sure what to expect. 
  > My name is there. But normally it would say first name, and then it would say last name. But it just says [my first name] What am I supposed to do with that? I don't understand.  - P4
- 3 participants guessed pressing the button would reveal profile information about themselves, like their name or contact information.
  > Thought when it said [first name] pop up that my information would pop up with my information and telephone number. - P8

- 1 participant renamed their authenticated menu to “My Profile” during our design exercise.
  >   P: Why wouldn't you consider just calling that [auth menu] "My profile”?…That's really clear to me. Otherwise it's just saying "we know who you are". That to me, my two cents is that just seems more clear there, on what to do with it. - P2

### 2 screenreader users missed the navigation entirely.
- 1 participant used shortcuts to navigate by headings or links, so they missed the `<button>` elements that open our menus.
- 1 participant with very little web experience used the “Skip to content” link to get to the main section of the site and skipped the navigation that way.
- The moderator eventually had to guide these participants to the header and navigation of the prototype.
- When asked, they stated that they did this to familiarize themselves with the page they were on, and they expected navigation links in a menu to be available through these methods.
### Most participants did not expect to find disability rating in their authenticated menu.
> It still wouldn’t have been in my thought process that disability and letters were there. This usually has things like settings, your email address, contacts and things like that. - P1

- Only 2 participants went straight to the auth menu to find the link. They had already seen the menu, and had recalled seeing it previously. 
- Reactions to having this link in their menu were mostly positive. 
  - 2 participants felt it was redundant if they could also see the rating on My VA or in their profile, and removed it from their menu during the design exercise.
  - 5 participants moved it higher up in their menu. There wasn’t a consistent ranking to where they placed it.

### X participants thought the label “Letters” was ambiguous.
- People who had not previously needed a proof of service or benefit letter were not sure where this link would go. Guesses included:
  - Records of correspondence to/from VA
  - Letters between themselves and their representative
  - Their DD214

> P4: What's Letters?
> M: That's a great question. What do you think it is?
> P4: It has no relevance to me at all. *Laughs.* Letters of what?

> Letters, the only thing is that it's ambiguous. Letters, what letters? Is that where I send a letter to the VA? Is that where I look for communication from the VA? But what about, is there where I get my specific letters, say like your eligibility rating, your COE? It's just vague. - P1

### There's a lack of understanding about My VA.
* 11 participants didn’t understand what My VA was until the moderator explained it. We heard a variety of guesses as to what would be shown if they clicked on the link:
  * Their VAMC facility information
  * A general page containing VA general resources on various topics such as health care, job listings, and how to work with VA.
  * Military information and a list of the VA websites they were a “member of” (had logins for).
  * A personalized place to get information about benefits they’re eligible for.
  * All personalized benefit information *except* health care.
* Even with explanation, one participant struggled to understand the difference between My VA and the user profile.
  > Why do you need both? Because that may be confusing to some people. You have My VA, you really wouldn't need both. You need one or the other. - P4
* In the design exercise, we asked people to order the menu items in order of importance to them. 2 people deprioritized My VA before they understood what it was.  Once they understood it, they moved it to the top of their authenticated menu. 
  > Had I known that [it was a dashboard], I’d rank it higher. I’d put it first. Above profile. - P8

### Participants were continuously drawn to the footer, sometimes more than the main navigation.
- X participants looked in the “Information for” and “More Resources” multiple times in their session to complete tasks.
- Some participants returned to the footer, even after they had been exposed to the main menu.
- It is possibly a factor of the short home page of our prototype causing people to encounter the footer quickly when scrolling down the mobile page. However, screenreader users navigating via headings and links also returned to the footer repeatedly while attempting to complete tasks.
- ## Other takeaways
- **2 participants accidentally tapped the sign out button as they were moving around the prototype.** 
  - We didn’t dig into why during the session, but hypothesize it is because they’re used to going to that space to access a menu.
  - Since we don’t currently have a sign out button exposed in the heading, this will be a big change for people and potential pain point given the challenges folks have signing into the site.
  - If we’re not already doing so, we should think about ways to prevent accidental sign out, and be sure we track interactions with the button. 
- '**7 links feels like a good maximum for the auth menu.** 
  - No one was overwhelmed by the number of options
  - At least 3 participants commented that any more options would be too many.
- **Participants expected to find proof of benefit letters in the benefit hub related to that benefit, or the reason they needed that document.** 
  - At least 2 expected it was not possible to get a proof of health care and disability benefits in the same letter, and that they’d need to go to different parts of the site.
  - Some participants went to “Housing” because the task was framed around needing a a document showing proof of service and benefits to get a property tax reduction.
- **People have low expectations of IA and personalization on government websites.** Multiple people made comments about how hard they expect government websites to be to navigate, and that they were pleasantly surprised by what they saw in our prototype.
- **Disability rating is extremely critical for some Veterans**. Some participants talked about how disability rating impacts everything at VA, and commented that they appreciated seeing it in their name tag, and in the auth menu. One participant got anxious when they saw mock-data for disability rating in the prototype
