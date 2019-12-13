# Synthesis: Letters v.3 and v.4

Laura Cochran<br>
May 22, 2017

## Test Objectives

Determine usability problem areas within the download letters user interface. Potential problem areas: 

- Navigation: Is it clear how to locate key functions, excessive keystrokes to complete a function, failure to follow screenflow. 

- Presentation: Is it clear how to locate and properly act upon desired information in screens. Are the labels clear? Is the language right?

- Control usage: Are the text fields and buttons used properly?

## Methodology

The unicorns team conducted usability testing on [Prototype A](https://marvelapp.com/290dhhg/screen/27986148) and [Prototype B](https://marvelapp.com/290f207/screen/27988114) using this [Discussion Guide](../discussion-guide-051617.md) via gotomeeting with 5 veterans. [Interview Notes](../interviews/may-participants-051717.md) were captured on github. Session were recorded as well. 

## Findings

### User Stories

- As a user, I want to know what types of letters I can download here and where I can find other documents, such as award letters, so that I can also get that information.
   - There is a disconnect for most people when looking at this interface becasue they are looking for award letters but this has eligibility or verification letters. The people we spoke with were not familiar with this section or the letters in it. 
   - “All I can think of [with VA letters] are the awards letters…all of these letters are…verification letters.”
   - Two people mentioned the DD214. Two mentioned Post 9/11 GI Bill letter.
- As a user, I want to know what address is going to appear on the letter so that I can update it if I chose to do that.
   - Confirming your address each time seems exhausting and annoying. It should be recognized but not feel like a blocker.
- As a user, I want to know what information is in a letter so that I can pick the right letter to prove I am eligible.
   - Nobody recognizes the letter by its name nor do they care what it is called. They just need to know what is in it.
- As a user, I want to slowly reveal information about each letter so that I am not overwhelmed with information all at once. 
   - The accordion component worked well here because it allowed the user to be in the driver seat when it came to finding information about each letter. The scenario for the test was "Imagine you were told you needed to get a letter to verify you were eligible for benefits." This is the typical use case for this page. A veteran comes here because they were told they need to get a verification letter in order that they get benefits or discounts.
   
### Recommendations

- Move Adobe Reader information to help sidebar.
- Make descriptions of letters more robust. Include what is in the letter and what it can be used for. 
- Make address verification an information share instead of a blocker.
- Use accordions to slowly reveal information about each letter and what benefits it can unlock.
- Add section directing people to other documentation they might be looking for. 
- Make it clear what letters can be downloaded here and how they can obtain other letters.
- Test one page interface.
- Speak with engineers about what is possible for the download interaction

### HMW's

- How might we help people find other letters when they do not find their letter in the list?
- How might we help people understand the importance of the address and let them see if their address is correct without it feeling like a blocker to progress?
- How might we help people understand what letters can help them do without overwhelming them with information?

## Next Steps

- Create one page interface
- Review interface with design standards owner
- Review interface with design team
- Review interface with engineering and product
- Test again if deemed necessary



********** ********** ********** ********** ********** ********** ********** ********** ********** ********** **********   


# Raw Notes with Script Below

### [Prototype A](https://marvelapp.com/290dhhg/screen/27986148) (https://marvelapp.com/290dhhg/screen/27986148)

#### Task 1: Verify your address. [Page](https://marvelapp.com/290dhhg/screen/27986148)

Script: Take a second to look at this page. What do you think this page is for? 

Imagine you were just asked to provide a summary of your benefits, what would you do first on this page?

_Questions_

- If unsuccessful, the user will be asked what they were looking for. 
- If successful, the user would be asked were there any surprises? What’s missing?

_Take notes on these areas_

- Do users find anything about the language confusing? 
   - One thought the Adobe info was a warning and wanted to close it. It was the first thing the participant noticed. PDF warning, navigation then intro text.
   - One was looking for the term "Awards." _“All I can think of [with VA letters] are the awards letters…all of these letters are…verification letters.”_
   - One wanted to find his DD214 through Letters. Also mentioned Post 9/11 Award Letter
   - One completely overlooked the letter page sans awards.
   - Two said “They’re usually claim-related letters.”
- Did the person ask what happens if address is incorrect? If the user clicks on "no" the address is incorrect, do they find the process for correcting it satisfactory?
   - Two asked to not make the veteran confirm the address every time he visits letters -- every six months or so is ok
   - Three overwhelmed by content on page one
   - Four distinguishes awards as "things I'm receiving" and the letters here as things I'm eligible for
 


#### Task 2: Select the Letter. [Page](https://marvelapp.com/290dhhg/screen/27986149)

Script: Take a second to look at this page. 

_Questions_ 

- Does anything standout or seem confusing? 
   - Generate didn't seem instant. Download did.
   - Disability rating is what people are looking for
- What do you want to do next? 
- What do you expect to see on the next page?
   - Based on generate, he expected to enter some information next. 

_Take notes on these areas_

- Do the CTA's "Generate Letter" and "Download Letter" make sense to the user?
   - One: Generate gave the impression it wasn’t an instant or quick process
   - Two Would expect the same behavior whether the buttons says “generate” or “download”
- Do they say they would select "Generate Letter?"
- Do they mention any of the descriptions? What did they say? 
- Does it seem like the names of the letters are familiar or do they need to read the descriptions to understand what is going on here?
   - Three liked the explanations. It helps explains things a little better (seeing the explanatory text right away)
   - Nobody recognized the names of the letters. Two mentioned DD114. Two mentioned Post 9/11 GI Bill award letter.



#### Task 3: Select Options, Download the Benefits Letter. [Page](https://marvelapp.com/290dhhg/screen/27987493)

Script: Take a second to look at this page. 

_Questions_ 

- What can you do on this page?
- Does anything standout or seem confusing?
- What do you expect to see on the next page?
- Show me what you would do next.

_Take notes on these areas_

- Is the hierarchy right on this page?
- Is it clear why they would select options or what the options section purpose is?
- Do they try to click anything before getting to download letter?
- How do they expect the letter to download?
   - Participant One looked for a button to download the letter.
   - “A prompt would be nice” as opposed to automatic download “because then you know it’s doing it.”
   - three wasnt sure if it actually downloaded when it just opened in the window
   - four would expect that he might see an option to either get it digitally or have it mailed to him.


### [Prototype B](https://marvelapp.com/290f207/screen/27988114) (https://marvelapp.com/290f207/screen/27988114)

#### Task 1:

- Two said this I could see being any kind of communication VA has with me…just seeing a bunch of documents. I think I could get any of that here as well as things like the healthcare [form]…so I don’t have to have healthcare because I have it through VA, so I can avoid the ACA tax.
- Two: “The verify address…that’d annoy me, doing it multiple times every single times. I’m already logged in…that process is annoying enough. 

#### Task 2: Select the Letter. [Page](https://marvelapp.com/290f207/screen/28041212)

Script: Take a second to look at this page. 

_Questions_ 

- Does anything standout or seem confusing? 
- What do you want to do next? 

_Take notes on these areas_

- Do they click on the (+) sign? Are they surprised to find the "Download" button there? Do they read the text?
   - One immediately started clicking and wanted to reveal things.
   - Having all of the info on this page was "more efficient" for One.
   - Four asked if he should click the (+) sign. He said he would click the title (like a button).
- Does it seem like the names of the letters are familiar or do they need to read the descriptions to understand what is going on here?
   - Names were not familiar. 


#### Task 3: Download the Benefits Letter. [Page](https://marvelapp.com/290dhhg/screen/27987493)

Script: Now, I want you to download the benefits summary letter. 

_Questions_ 

- What can you do in this section?
- Does anything standout or seem confusing?
- What do you want to do next?

_Take notes on these areas_

- How is the user managing the scroll? Are they scrolling up and down a lot? Write any observations about the usability of the information in the accordion.
- Is it clear why they would select options or what the options section purpose is?
- Do they try to click anything before getting to download letter?
- How do they expect the letter to download?






General Feedback:

Tell us one way you would improve this process.
   - Participant One wanted more information about everything. 

Tell us what most excites you about this.
   - Convenient and fast.




