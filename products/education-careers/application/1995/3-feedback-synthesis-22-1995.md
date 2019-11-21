# 22-1995 feedback synthesis

## Goals
We’re looking for points of confusion or errors in logic for the form.

## Summary

- Generally form strikes people as clear, but...
- Context is helpful if it’s concise. (Why is this question important)
- Examples help with free-form fields
- Some labels need to be more specific, especially when on a screen where the headline my be scrolled off. For example, "Address" can be vague when the "Your new school..." headline is not visible.

## What worked well
- Good response to overall approach. “it’s simple”, etc.

## What didn’t work well
- A couple questions seem to hang people up. Usually either “I don’t know what that is” (NCS) or “Does that include...” (Other assistance). Similar questions with examples fare better.
- Taller pages sometimes lose context.

## Methodology
This was three remote feedback sessions. Participants stepped through the 1995 form via screenshare and rendered feedback. Participants came from SVA outreach.

## Raw feedback

### Chapter 1 – Veteran Information

#### K L

- Why do we need the whole SSN instead of just the last 4
- Can't find the suffix he was looking for
- Took a little while to understand the error messages, but eventually went back to correct the mistakes and was able to do so on his own
- Entered both his SSN and checked the "I don't have a SSN" checkbox
  (stray click on page load had checked the box)
- "File number...is hard to locate. Might put a little information bubble [tooltip] for finding this." Went by SSN when was first injured; didn't use the file number very much.
- Reads error message. Took "you can put anything in there" literally; validation failed because he used "-----" as a placeholder. Recognizes the red validation failure goes away when the field is valid. 

#### D C

- “I like the overall layout of the page. It’s pretty clear…this page is pretty self-explanatory.”
- Would go right down he line and fill them out; knows the VA  has all the info anyway so is comfortable giving it. “That’s the thing about the military; our information is already there.”

#### E O

- [prototype breaks on SSN, which shouldn’t trip on dashes but did.]

#### TAKEAWAY

**Generally good shape, but validation messages are important. It's good to give context where practical**

### Chapter 2 – Benefit Selection

#### K L

- "I'm not sure what [the different benefits] are." Q from mod: "What do you think this question is asking you? Is there more information you'd like to see there to make that clearer?" A: "...too hard for the system to be intelligent enough to know what I'm currently using." Suggests more content at the prompt and acknowledges that people don't read. 
- Benefit selection: understands the question to be "what benefit I'm currently using that I want to change to a new institution"
- It would be nice if the system were intelligent enough to be able to know what he was using
- People don't want to read too much; probably good we have explanation brief

#### D C

- Scans benefits; clicks Post-9/11 GI Bill. Tries to look at it through the eyes of someone who isn’t familiar with the types of benefits.”
- “Learn More” is not working as expected. “Would that open in a new tab, or a popup, or in this window?…I would prefer a new tab or popup window” to reduce the risk of losing the information and having to start over. 

#### E O

- “This doesn’t have Voc Rehab….unless it’s post-9/11? Nope, Chapter 33 is different…” 

#### TAKEAWAY



### Chapter 3 – Military history

#### K L

- Navigates military history input with no questions -- but doesn't know what "add another" means. Another branch of service, another enlistment? Q: What would you expect it to be? A: Another branch or another enlistment. "That's interesting, just not in my universe." 

#### D C

- “For branch of service, would you want IL Army Nat’l Guard, Nat’l Guard, or Army”? First instinct is to put Army Nat’l Guard; doesn’t know that the state would matter — designates not active duty + Army branch of nat’l guard.
- “Just for fun, can we see what ‘add another’ looks like?” Was curious about how it would come up on the screen. Clicks continue.

#### E O

- “I’m confused if it wants my military history or new service [because it says both].” 

#### TAKEAWAY



### Chapter 4 – School Information

#### K L

- **New School** Missed the "you WANT to attend" instruction and had to return.
- On address: "Is this the institution, or my address?"
- Suggests adding "In addition to your VA benefits, are you expecting to get..." on the more money question.
- **Old School** "What if I'm still there taking classes, just getting ready for the move?" Q from mod: "What would you do in that scenario?" A: "I guess I'd pre-date it." Puts date in the future.
- On the "why did you stop...." suggests: you might add some parenthetical info: "e.g. moving your residence."
- Got a little stuck on what the "address" was for on the school selection page: the school's address or his?
- Confused about what benefits he's expecting to get (sounds like he might be getting additional benefits from the last question on the new school selection page)
- Examples for "Why did you stop taking classes" question would be useful
- Useful to autofill address information based on zip

#### D C

- Curious as to whether there’s an explanation of what the drop-down options are for type of education — i.e., what category would police academy fall under? “I’m not sure how many Veterans that would apply to, though.”
- Likes the examples of ‘education or career goal’
- Not sure if he would be a yes/no for “Are you getting….any money…” question. “I’m not quite sure what that means.” Ultimately goes with no. “As far as getting money from the Armed Forces or public health services….” “Do they give me money? Is that out there? Are there programs out there that I’m not aware of? Does this include my drill pay? For active duty they have a slew of other benefits that I”m not aware of. I’m just not sure why I would be receiving money from [these sources] in regards to going to college.”
- If he didn’t have the school address memorized, would go to Google and get the address. 
- “For ‘when did you stop…’ would you want a date, or the plain text description, or does it matter?” Expects exact date, guesses that VA would want specific dates. “Hey, look at that!” when he sees error message upon entering plain text. This is probably supposed to be a date field

#### E O

- **New School** Not sure if the form is asking for the last school she went to. “It doesn’t seem like it’s set up [for people who aren’t currently in school and want to restart benefits.]”
- **Old School** When did you stop taking classes: “I wonder if they want the quarter, month, date?” [this is an existing error in the form; should be a date field]
- “Why did you stop taking classes…”: “This question is phrased as though I’m not continuing…this wording is negative…it could even be ‘or have you graduated’….” Has no other suggestions for wording.
- “I didn’t stop; I finished!”

#### TAKEAWAY

**Other benefits questions are still somewhat confusing**

**What address are you asking for? Losing context of headline after scroll.**

**Examples can reduce anxiety**

### Chapter 5 – Contact details

#### K L

- Likes that we give an indiciation of how far you've got to go (progress bar)
- Might be useful to separate statements on children being under or over 18, it's a lot of information in a big block
- Only show account and routing information if they're indiciating "start" for using direct deposit
- Contact info "Self-explanatory." "If you put the ZIP first, it could populate city and state...if you're streamlining things and spending all this money to do it, that'd be great...the more you can fill out for people, the better." "I don't have a scroll bar." [result of the browser].
- On the "do you have any children" question: "Just for readers' sake, it might be nice to separate these statements [re: different conditions]." Bulleted list.
- Re: direct deposit: "I know what that is. If someone doesn't know what that is...?" Suggests a tooltip. Q: Particular words, for clarity? A: "I guess it's so common now these days, it might be less of an issue. But...y'know that's fine." On account & routing numbers: might be good to give info on where they can find those numbers, + an image.
- Q: What do you think the purpose of this screen is? A: "I'd be continuing [to use direct deposit]. It's sad that I have to put it in and tell what kind of account if I'm continuing."

#### D C

- “Pretty self-explanatory.” “To make things soldier-proof, I assume you’re wanting our personal address here?” “Since it says ‘personal information’ I would probably say ‘home address,’ if that’s the desired outcome.” 
- Would enter the same phone number for primary and mobile phone — “my cell is my primary.”
- Hesitates on direct deposit — “is there another option? for this scenario I’m already receiving benefits…my direct deposit would already be set up. Do I need to update it, or is it the same?” Q: How would you like it to work? A: “I’d like to start it or stop it, update makes sense if I were changing banks. For me personally, I don’t need to do any of those, so I’d like a ‘no change’ option, so I don’t have to go through and re-enter [the same information] that’s on file.”
- Likes form validation on the routing number 

#### E O

- “I’m not really sure why [the questions about children] is relevant, but they’re asking for it, so I’m going to click it.”
- On direct deposit: “Do I have to click one of these? I want to continue using the same method I’m already using…there’s no option to continue using my current method.” Fills out nothing and wants to click on continue, which works at the moment.
- “What’s the reason for the dependent information?” [Answer: because you answered ‘service before 1978’ it can affect the actual benefit — the dependents you have.]

#### TAKEAWAY

**Context again (direct deposit and dependent info)**

**Address confusion less here, but still noted**

**Continue/Update/Etc. is a little confusing**

### Chapter 6 – Review

#### K L

-  "I know what these plusses mean, but people might not know what they mean; you might want to put parenthetical "click the plus sign...""
- Nice that the edit button is inline. "You might also have an expand all button. Again someone with a disability like mine...I have to go through and click all of these, and sometimes it's hard to aim, particularly if you're someone with a mobility impairment and you're using a pointing device or a mouth stick." Does not use an assistive device, but uses StickyKeys on the Mac.
- "Why isn't the submit button working?" 

#### D C

- expects each accordion to be expandable. Would click through each one. Likes the inline edit. Would click again to collapse before expanding the next accordion. Curious as to whether clicking edit opens inline or bounces you back; looks for save/update at the bottom of the page. 
- “I don’t know if people actually read [privacy policies.]”

#### E O

- No feedback here

#### TAKEAWAY

**Minimal feedback**

## General Feedback

### Landing page

#### D C

- “My first instinct would be to click ‘apply on eBenefits, because I’m currently receiving the GI Bill at one university and want to change it to a different university. Though I’d probably bite myself, because I didn’t read the prep steps below…got click-happy instead of reading everything.” It seems logical that he’d already have the COE.
- Looking at it through the lens of the average soldier, I would want to know what “education and military history” and “basic information about school…” means — do I need transcripts, or a DD2-14, or what kind of military history? What does “basic information about the school or training facility” mean. An 18 or 19-year-old student might feel a little overwhelmed by this going through it this first time. I’m not sure how detailed — would appreciate short examples of what might be needed.
- For section 4, “when I saw ‘COE’ I had to stop and think about what that meant — I don’t recall seeing that abbreviation on this page previously.” [He had, but then forgot when he got further down the page.]

### General VA Feedback

#### K L

- "With the myhealthevet site, there is secure message your provider(s), but they generally list your physicians, and it's not necessarily the providers you're working with. It's tough sometimes to contact people. If anyone you're involved with, if their names could show up in those lists, that'd be great...at least in the N. Cal healthcare system, it's so unfriendly trying to get an appointment...you get stuck into some 800 number talking to someone that doesn't know you and doesn't know even the doctors you work with, and it's just...when I go to my dentist, I call my *dentist's office*...it's just much more friendlier...specifically, if I wnat to get an appointment at the clinic in Chico, I have to call an 800 number in Sacramento, and they want...all this information, and then they send you to this advice nurse to do all that information again...but my point was make the e-mail system a little more friendly, so I can talk to the provider that I want to, tell them what I need, and start there."
- Would call the helpdesk for help with this, having found the number in the footer. Thinks a provider list is a culture change, to get the providers to use these technologies better. Frustrated that there's so much need in the VA right now. "It's hard to get the service that you need." "These systems are working against themselves."

#### D C

- “Marketing, promotion — letting Veterans know that these are out there, for them to use. When I first started…and when I returned from deployment, it can be overwhelming because there are so many things to do and make sure you get submitted…housing, textbooks…applying for benefits, when you’re getting back from deployment any kind of health or disability appointments. It can be overwhelming. Lots to keep track of. knowing that these tools are out there is very important — this will make things a lot easier.” 

#### E O

- At one point was trying to figure out eligibility she had left; counselor was locked out of the program, and tried to determine this online but couldn’t. Wasn’t able to get the info until she got the hard copy in the mail once she’d been re-certified for the next quarter. 
- Has had misfortune with MyHeatheVet. Never has any information in the system. It suggests that she’s signed up, but has no old information. Record of one flu shot. “Whoever I was seeing wasn’t putting stuff into it, or it wasn’t connected…”

#### TAKEAWAY

**Wishes to directly contact providers with secure messaging.**

**Frustration with repeating information at each step**

**Wants to understand status without involved process**

**Systems don't seem to know about each other**
