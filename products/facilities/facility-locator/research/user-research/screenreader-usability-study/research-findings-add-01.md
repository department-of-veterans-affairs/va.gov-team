# Homepage research findings from [Facility Locator - Assistive Technology Discovery and Usability Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/user-research/screenreader-usability-study/research-findings.md)

## Table of Contents


* [Key Findings](#key-findings)
* [Additional Findings](#additional-findings)
* [Exhibits](#exhibits)
* [Recommendations](#recommendations)
* [Further research needed](#further-research-needed)
* [Appendix](#appendix)


## Key Findings

### 1. The homepage is difficult to use with screen readers

-   Different navigation methods produce inconsistent user experiences, page hierarchy and content perceptions of the VA.gov homepage. [see Case Study P1](#case-study-p1)

-   Browsing by heading - A lack of heading level hierarchy creates an inaccurate and confusing representation of the content available on the homepage. The user hears that there is one H1 (Access and manage your VA benefits and health care).  H2s are sometimes links and sometimes groups of links but there is no content categorization. A user hears that there are 80+ links but no way to know that over half of them are footer links that they might be able to ignore on a second listen.

-   Skip to content - using this method drops a user at the "Service member benefits" link, bypassing the "Top 4" boxes. This confused one user who later returned to the homepage, who proceeded to navigate by heading level and then experienced a completely different set of information. Leaving him convinced that he'd never been to the homepage before.

-   Regions - the lack of delineated regions means users perceive all footer links as part of the page content links forcing them to hear all 46 of them each time they navigate by 'reading the page', element by element which is already slow and cumbersome, but likely behavior when all else fails. Having to process all of these pieces of information without categorization adds uneccessary cognitive load when taking in the content of new and subsequent pages.  

-   Using global navigation menu - (Preface: Two desktop JAWS users in the study size down their browser viewports when navigating websites. This created a hybrid desktop/mobile experience for one user where they got the mobile version of the global menu button while on desktop. [See Figure 2](#figure-2)) This component was difficult to manipulate for both desktop and mobile users. It is unclear to them that this is a main global menu because it is not labeled as expected nor does it announce its current state consistently. States were also not clearly described.
     - [P1 while orienting himself within the global menu]
     > "Well, first of all, I wasn't even sure it was reading the menu because the screen will change. That's why I arrowed back up. It's usually helpful, if when I hit the menu and the menu dropped down, and I arrowed back up, it would at least say 'menu open' so I know when the menu started because right now I'm assuming this is under that menu but it doesn't really tell me, or say 'menu'."

-   Find - this method was more successful for users in this study. Some users easily found Find a VA Location when using a keyword like 'location', some locating it in the footer only.

-   Edit box - when arriving at the homepage, JAWS announces that there is "no edit box on this page". The expectation is that a search box would appear as an edit box. Most participants used the search box once they knew it was available including for location searches, even after having used Facility Locator in a previous task.

### 2. 4/7 Veterans had difficulty finding Facility Locator from VA.gov.

        
* P1 started by exploring the page with 'skip to content' which created confusion for the rest of the tasks. Ultimately, the participant explains that he wouldn't be looking for a Dermatologist from a location finder and instead thinks this would be found under healthcare.

   > ”Can I ask you a question. You asked me to find a dermatologist but can I do that on this page? I’m confused. You took me to find a location but you are actually asking me to find something specific. It’s confusing because it is about finding a VA location.”
   
* P2 fails at his first attempt when typing "L" for location within headings list. On his second attempt using 'Links list', he successfully finds "Find a VA Location" .

    > "So its 'Find a location.' So, first letter navigation [tried L] probably wouldn't help me too much because I would think of it as 'Locations' vs 'Find a Location'."

* P6 is an inexperienced Safari/iPhone user who had never been on VA.gov. P6 normally relies on Siri but was unable to during the session so instead used a mix of gestures and magic keyboard. Navigates by "Reading page" from top to bottom, finds the global search easily so uses that for his search.

    - Types in "Mental clinic" in global search which does not give him location related results.

* P10 was the only participant that knew of facility locator but decided to use Google to complete the task instead of going to VA.gov to look for it. Later in the interview she complains about how the volume of information on VA overwhelms her. It is possible, that this could be a reason she decided to try Google first.

    > “I know there’s a location finder… but I don’t know where that is. I don’t even know what that would be called. You’re hoping somebody labeled it right.” 
The participant tries to 'read the page'.  However, an issue with "VA Benefits and Health Care" in the global nav causes the screen reader to bypasses "Find a VA Location" and the user dead ends in a side navigation without ever hearing it. See step 12 in [Case Study P10](#case-study-p10)


### 3. 4/7 Veterans used global search to find a location or dermatologist. 
    
   > There's a search thing there so I would do that.
   - P9 proceeds to type 'va dermatalgist' into global search
   - <img src="https://user-images.githubusercontent.com/4960080/125820911-c30211db-acaa-4a7e-8b9b-fd25ab1310ec.png" alt="user types in 'va dermatalgist' into global search" width="35%" height="35%">

## Additional Findings

- For many Veterans, MyHealtheVet is their effective VA homepage. Some participants who had never been to VA.gov were very familiar with MyHealtheVet and overall have favorable opinions of it.  How does this health mental model affect how they approach other parts of VA.gov? Some participants didn’t think to look for a dermatologist within a facility locator tool but under health care or benefits. 

- ZoomText is magnification software that allows low vision users to enlarge anything they see on their desktop screen and control settings like contrast and color. Although we were not able to observe ZoomText over Zoom in this study, two of the low vision Veterans in this study rely on it heavily. Some parts of VA.gov are difficult to use with magnification software and more research is needed to understand this. However, P9 was able to describe in vivid detail how difficult it is to log into MyHealtheVet while using ZoomText. See [Case Study P9](#case-study-p9) for his description. The participant explains that layouts on VA.gov that are constrained within a smaller area (e.g. 700 width content column layouts) were easier to navigate.
    > "So if you got the screen big enough that you can read the stuff with your eyes, with the sight that you _do_ have, then you can’t see the other one until you move your cursor to it. If I have it small enough to see the whole page, then I can’t see the page." 

## Exhibits 

### Case Study P1

#### Completely blind participant navigating VA.gov homepage using JAWS

Three failed attempts created an unpredictable, confusing, and frustrating user experience. The linked figures below detail this user's wayfinding attempts and illustrate how difficult it was for this user to orient himself along the way. [**Note:** To understand how other navigation methods may or may not work for this user, the moderator directed the user for attempts 4 and 5]

P1 used ‘Skip to content’ on VA.gov homepage, on his first of three failed attempts to complete task number two (looking for a Dermatologist near you). The participant is taken to the ‘Service member benefits’ H2. From this point, the user was mentally stuck on trying to complete the task within a ‘benefits’ category that would apply to him. Notice the user’s scanning behavior, as he listens to elements on the page multiple times to understand where he is, what the page is about and where he should go next. This attempt took two minutes and fifteen seconds. On his third attempt, the participant tries to navigate by listening to the headings on the page from the top. Since he did not use ‘skip to content’, this time the homepage appeared to have completely different content than on his first visit.

   1. First, user tries "skip to content" on VA.gov homepage and is taken to the 'Service member benefits' H2 . From this point, the user was mentally stuck trying to complete the task within a 'benefits' section that would apply to him [[Figure P1-1](#figure-P1-1)] 
   2. Second, navigates homepage by headings from Service member benefits  [[Figure P1-2](#figure-P1-2)] 
   3. Third, navigates homepage by headings from the top of the page, and thinks that he is on a new page.  [[Figure P1-3](#figure-P1-3)]
   4. Moderator prompts user to try links list but still runs into issues [[Figure P1-4](#figure-P1-4)] 
   5. Moderator prompts user to try using the global nav menu  [[Figure P1-5](#figure-P1-5)]  This user experienced the mobile version of the menu and when he used JAWS 'Find' to type 'F' for 'Find a VA Location' he did not notice it until he repeated this method later while the global nav menu was in its expanded state.


#### Figure P1-1

<img src="https://user-images.githubusercontent.com/4960080/125805121-47859be1-8685-4e43-b876-c55377cc1310.png" alt="visual diagram of P1's first attempt using 'skip to content', highlighting where user listens and interacts" width="55%" height="55%">
![Figure 1 1 1]

##### P1, Attempt #1, Using 'Skip to content' on VA.gov homepage

[timestamp 20:30]

1\. Hears 'Skip to content', clicks.\
2\. Hears "Heading 2, Service member benefits"\
3\. Backs up, hears "Veteran portraits"\
4\. Advances, hears "Service member benefits"\
5\. Advances, hears "Family member benefits"\
6\. Advances, hears "Burials and memorials"\
7\. Backs up, hears "Family member benefits"\
8\. Backs up, clicks "Service member benefits"\
9\. Hears "enter alert, close alert, skip to content"\
10\.  Backs up, hears "Flag graphic"\
11\. Advances, hears "Alert, COVID 19...heading level 3"\
12\. Skips past COVID paragraph, "We continue to..."\
13\. Skips past COVID content link, "Find how to get..."\
14\. Advances, hears "Breadcrumb navigation"\
15\. Enters, hears "List of two items"\
16\. Advances, hears "Visited link home"\
17\. Advances, hears "single right click"\ 
18\. Advances, hears "Visited current link 'Service member benefits"\
19\. Advances, hears "list end"\
20\. Advances, hears "Breadcrumb navigation end"\
21\. Advances, hears,  "Main region, article"\
22\. Advances, hears, "Heading level 1 VA benefits for service members"\
23\. Advances, hears, "If you're serving on active duty ..."\
24\. Skips through intro, "...you may also..."\
25\. Skips through intro, "...required Transition..."\
26\. Advances, "Heading level 2, On this page"\
27\. Advances hears, "List of two items"

[22:45]... [moderator interrupts]

#### Figure P1-2

<img src="https://lh5.googleusercontent.com/fjeQ1iYLez4GaL-o5exjlTBPiHcXViBt7K5DVRCgFOvdtm_gEnMXnyjuAedrzguCU1wzDVQH6q6hM8lIpcdm9bpaBETH-8TsYFiMTQgo470_0LBS26aUWyzBS7dLFHV2rNWZNnLS"  alt="visual diagram of P1's second attempt using 'headings' from where he left off in first attempt, highlighting where user listens and interacts" width="55%" height="55%">

##### P1, Attempt #2, goes back to homepage, tries navigating via headings from where he left off

> "See its service member benefits. I'm not really a service member"

[Goes back to homepage]

1\. Hears 'Skip to content', clicks.\
2\. Hears "H2, Service member benefits"\
3\. Advances, hears "find out what you may be eligible for during service and which...", skips.\
4\. Advances, hears, "Heading 2, Family member benefits". 

> "So, you have family members..."

5\. Advances, hears "Heading 2, Burials and memorials"\
6\. Advances, hears "Heading 2, Careers and employment"\
7\. Advances, hears "Heading 2, Housing assistance"\
8\. Advances, hears "Heading 2, Pension"\
9\. Advances, hears "Heading 2, Life insurance"\
10\. Advances, hears "Heading 2, Education and training\
11\. Advances, hears "Heading 2, Records\
12\. Advances, hears "Heading 2, Health care\
13\. Advances, hears "Heading 2, Disability\
14\. Advances, hears "Heading 2, Born to battle"\
15\. Advances, hears "Celebrating 75 years"

> "So, you know, I'm jumping through there by heading and not once did I hear Veteran benefits"

**[Since 'Service member benefits' was the first H2 that was read out to him, P1 was mentally stuck trying to complete the task within a 'benefits' section that would apply to him ']**


#### Figure P1-3

<img src="https://lh3.googleusercontent.com/fW9ILsx-fn9rc7tCfYDhfeTYdFRez9n95LgMwCGuiN0SsUUHe7hFtkE0NjjRx28iOrUs0f0fkZIfHSdanvKRdND24OG-NzZmuotCEcmR4qb6KU7n_1hwGVI5mAggprAzSPXziAFg" alt="visual diagram of P1's third attempt using 'headings' from top of page, highlighting where user listens and interacts" width="55%" height="55%">

##### P1, Attempt #3, starts at the top of the page navigating via headings

[Moderator restates the task of finding a Dermatologist.  User explains that it would be a subset of health benefits. Starts to browse the page for the third time, using headings but this time from the top of the page. This time, he does not skip to content.]

1\. Goes to top, [its unclear what user clicked]\
2\. Hears "COVI..", skips\
3\. Advances, hears "Heading level 1, "Access and manage your VA benefits and health care"\
4\. Advances, hears, "Heading level 2, Health care".\
5\. Backs up , hears "Heading level 1, Access and manage your VA benefits and health care"\
6\. Advances, hears "Heading level 2, Health care".\
7\. Advances, hears "List of 5...", skips\
8\. Advances, hears "Refill and track your prescription"\

[User stops and sounds annoyed and confused]

  > "Now, I don't really know how I got here. OK? Because I have not changed the page, but I didn't hear this, at all, a while ago."

9\. Advances, hears "Send a secure message to your health care team"\
10\. Advances, hears "Schedule and manage health appointments"\
11\. Advances, hears "View your lab and test results"\
12\. Advances, hears "Apply now for your VA health care"\

  > "It's like it skipped me to myHealtheVet"

[stops]

  > "Do you understand one thing I said? I typed in VA.gov a while ago and this is not the page that it took me to. So, I went back a page. I don't know what you see but according to my screen reader, I haven't been to this page before. I didn't hear any of this stuff previously"

  > ... "Why in heaven's name did it take me to the middle of the page?"

#### Figure P1-4



##### P1, Attempt #4.

[User is prompted to use links list]

  > "I really dislike the lists link; it doesn't always put everything in the list. That's the last thing I would do... See, this particular way, right here, to me, maybe I don't do it because it's like a 'blind only' thing and I rather navigate the page like everybody else does."

<img src="https://user-images.githubusercontent.com/4960080/125809086-57494ad5-3413-47ce-a4cf-7ff6fd3821ca.png" alt="P1 pulling up list links" width="55%" height="55%">

[Does not find "Find a VA Location" in the list using 'F']

...

[Later, user opens links list while global menu is open and does encounter 'Find a VA location']

<img src="https://user-images.githubusercontent.com/4960080/125809977-9866595a-7741-474e-8713-b74574ad5a49.png" alt="view of list links while global nav is expanded" width="60%" height="60%">

  > "see, that links list thing doesn't work because it's in a menu."

#### Figure P1-5

<img src="https://lh5.googleusercontent.com/ML5Z0abgsawim478iQh2vdzt4H9rjrRnkZ8m4UBTmeEJMZDE8eIiR1xg_LAy3C1J6OMmj0UL-9D5xkhyraGqjx55LD_rSUvpKHHXCGFp_GZLmutfDoppAZd_aDD6IYmDTrplOw-z" alt="diagram of P1's fifth attempt using the global nav, highlighting what user hears and what he interacts with" width="60%" height="60%">


##### P1, Attempt 5.

[User is prompted to use global menu]

  > "menu button [can] be a great thing but its new that a screen reader will actually read it. On a lot of web pages that link will drive you crazy because..." 

[navigates to menu]\
1\. Menu button is focused\
2\. Hears, "Search button collapsed",  activates button\
[menu is now expanded]\
3\. Hears "Closed button"\
4\. Advances, hears "Search main"\
5\. Advances, hears "Contact us"\
6\. Advances, hears "Sign in"\
7\. Advances, hears, "Navigation region"\
8\. Backs up 4 times, hears "Closed..."\
9\. Backs up, hears "Visited link graphic VA.gov"\
10\. Advances, hears "Closed button"\
11\. Advances, hears "Search main"\
12\. Advances, hears "Contact us"\
13\. Advances, hears "Sign in"\
14\. Advances, hears "Navigation region"\
15\. Advances, hears "Visited link home"\
16\. Advances, hears "VA Benefits and Health care"\
17\. Advances, hears "About VA"\
18\. Advances, hears "Find a VA Location"

   > "Right there" 

[Mod:Tell me about that menu]

   > "Well, first of all, I wasn't even sure it was reading the menu because the screen will change. That's why I arrowed back up. It's usually helpful, if when I hit the menu and the menu dropped down, and I arrowed back up, it would at least say 'menu open' so I know when the menu started because right now I'm assuming this is under that menu but it doesn't really tell me, or say 'menu'."

[Later] 

> "Closed button collapsed. What does that mean?"

--- 

#### Figure 2

Two JAWS users, whose tech we were able to see and hear, shared a similar behavior of minimizing windows not in use and scaling down the size of their browser viewports. This can create a hybrid mobile/desktop experience for some users.

<img src="https://lh4.googleusercontent.com/0bo3thJR-Hukrjhj9VXlO6vwkKvxfCI_VMWYpesUFRJ8a2anLnu51XdpM7iAxQBiU6-vpvFP0_tY2LikOFEIgrcDBK2RdIdBBqIvUAHH5JAvbdyyHv_BpXO4VSB_5wU1TQNsTCQ9" alt="side by side screengrabs of JAWS users' desktops looking almost identical" width="60%" height="60%">

---

### Case Study P10

#### Low vision user, who cannot get her preferred ZoomText magnification software to work, switches to JAWS 

Using JAWS, P10 tries to find the VA nearest to her using Google. She clarifies if she should look for a va clinic or hospital. She is given the choice. She types in “VA facility near me… [erases 'me' and changes to] fairfield, texas"

<img src="https://user-images.githubusercontent.com/4960080/125942296-0fce677e-4e0a-47d5-aed7-d6d39744d9b8.png" alt="google search for facilities" width="60%" height="60%">

> "And yes, I usually take the first option it gives me."

but because she had run into a number of technical issues with JAWS ('Find' and 'list links' wouldn't work, something that can happen often from according to other JAWS users in the study) she was forced to 'read the page'. However, an issue with "VA Benefits and Health Care" in the global nav causes the screen reader to bypasses "Find a VA Location" and the user dead ends in a side navigation without ever hearing it.

<img src="https://user-images.githubusercontent.com/4960080/125941561-b9cab838-57c5-42ff-b837-8adb0f792107.png" alt="va page of texas facilities" width="60%" height="60%">

> "And then you get into this list of.. where are these places?"

> "Ok...  I know there’s a location finder, you can type in your address and it’ll do a little search somewhere… but I don’t know where that is. I don’t even know what that would be called. You’re hoping somebody labeled it right."

[User activates JAWS and hears:] 
1. "Search in facility directory, type in text"
2. Advances, hears "go button"

[M: If you want to find it, where would you go?]

> "I would tab through this entire page one by one to see… or I would check the links to see if there’s a link to.... I don’t even know what it’s called. So you’re hoping somebody labelled it right. *sighs* I don’t know. I guess I would listen to the whole thing… tabbing through or just check the links list."

[M: Want to try that?]

> "Ok… Am I on JAWS?..."

[user navigates between open windows to reorient herself and comes back to browser] 

3. hears "JAWS Texas dash locations em dash Mozilla Firefox
4. advances, hears "Banner region, here's how you know" button collapsed
5. skips, hears "talk to the Veter"
6. skips, hears "search"
7. skips, hears "contact"
8. skips, hears "sign in button"
> I’m trying to just insert + f7 to get my list links up 
[user is frustrated that her JAWS list links feature isn't working]

[navigates to GLOBAL NAV]

> "ok, I can tab through normally..."

9. “navigation region”
10. advances, hears "vah benefits and healthcare collapsed"
11. hears "vah benefits and healthcare collapsed"
12. hears "vah benefits and healthcare collapsed" 

[user tries activating VA benefits and health care, but it’s not working so skips to left nav]

> "yeah, its..."[trails]

13. advances, hears “I am a dot, dot, dot, combo box, select one, to change selection, use the arrow keys”
14. advances, hears “Locations home link" 
15. hears "Locations home link"
16. hears "Locations home link”

> [laughs] "yeah, I don't know what's going on with this thing"
 
[Moderator: What’s going on?]

> "I’m in the page!" 

17. advances, hears “vah facilities, link veterans health administration left par right pair"
18. advances, hears “vah facilities link veterans benefits adminis..."
19. skips, hears "NCA"


> "And I can tab easily through… but I can’t get a list of links for some reason. I don’t know why that’s happening. I want to pull it up so I don’t have to go through each one."

20. skips, hears "[inaudible] central office listing link"
21. advances, hears "vet centers link"

> "these are all links and maybe they were up and I didn't realize it"

22. advances, hear "PTSD program link"
23. advances, hears "SUD program link"

> "Like, what is sudprogram? I don't know". 

24. advances, hears "grav-eh-side locator new window"
25. advances, hears "facilities by state link"

> "I’m already ON facilities by state? Can’t it say like “facilities by state, you are here? so I don't have to hear it a second time? So maybe it’s probably the interactive US map?"

[moderator ends task]

### Case Study P9

#### Low vision user explains a recurrent issue with MyHealtheVet login when using ZoomText magnification software

<img src="https://user-images.githubusercontent.com/4960080/125962050-4137d43e-ad30-43f5-8454-b31207d565de.png" alt="woman-at-a-computer-using-zoomtext" width="60%" height="60%">

[ZoomText video demo on YouTube](https://www.youtube.com/watch?v=Xf6K5fyi6yc&t=7s)

When using magnification software like ZoomText, a user's viewable area is effectively shrunk to a small percentage of the total screen or window, depending on the level of magnification. This can make it difficult for users to locate items when navigating from page to page, especially when elements change their position on a page. P9 demonstrates how this is challenging when logging into MyHealtheVet.

<img src="https://user-images.githubusercontent.com/4960080/125967597-fdc97410-6563-4fd6-b231-c21fb6f67f73.png" alt="visual diagram of the zoomed in portion of the screen that this zoomtext user likely sees as he logs into MyHealtheVet" width="60%" height="60%">


1. “See sign in and register? I hit that” 
2. “and now that went away”
3. “and, see, now I gotta go way down here, and hit that”
4. [screen elements change position so they seem to dissappear]
5. “and then I gotta go way over here and accept”
6. “and then I gotta search for it.”
7. “here. To log into it.”


---

## Recommendations

1. Establish a page hierarchy for pages and ensure that top navigation methods follow it
   - Group links and content with logically ordered  heading levels to create an understandable hierarchy of the page that can be scanned more quickly instead of making all links on the page H2s which cause users to listen to everything and make sense of it.
   - For example, a user who ‘skips to content’ and then navigates by headings should be able to form the same general understanding for what the page is about and what they can do there.  
2. Create regions on every page so that users navigate quickly between areas
   - For example, footer links should be grouped into a footer region. Currently, users can’t distinguish between footer links and those that are part of the page content so they are forced to listen to 46 extra links each time they read a new page from top to bottom to orient themselves. 
3. Make sure ‘skip to content’ takes me to the main content on the page. Currently, it goes to the "Service member benefits" H2 and bypasses the Top 4 boxes section.
   - Skip to content on GOV.Uk takes a user to the H1 to announce the page and then following tab takes a user into the search edit box
   - <img src="https://user-images.githubusercontent.com/4960080/125671954-62d5e689-c0cf-42d5-a1fa-8b2b9c093582.png"  alt="[gov.uk 'skip to content' homepage example]" width="60%" height="60%"> 
4. Currently, screen readers announce that there isn't an edit box on the homepage. Consider expanding or exposing global search as its default state, making it more prominent so that screen reader users are alerted that there is, in fact, an edit box on this page. Participants perceived this to be the quickest and most obvious way to search for anything.
5. Consider updating the global nav menu to give mobile and desktop users the same access to the links within it. The mobile layout and how it functions today is problematic for screen reader users.
6. Assess keywords searches and ensure that buttons and links include the keywords that users are likely to search for like ‘menu’ and 'locations'. One user missed 'Find a VA Location' because he looked for 'locations' in an alphabetized links list and didn't think to look for it under 'F'. Another user was confused by the language 'Closed button collaped' not realizing that it was referring to the global menu.  
7. Assess the naming of component states, consider more descriptive and expected language like, ‘menu open’.
8. Work with Facilities team to assess and incorporate facility related keywords. Veterans didn’t think to look for a facility locator and are likely to use global search when looking for a facility. 
    - Assess keyword searches for top facility types on VA.gov and incorporate those terms into global search best bets
    - Experiment with patterns that exist within popular search tools like ‘hospitals near me’, ‘urgent care near me’ that could appear in type ahead global searches to connect users from the homepage to Facility Locator.
   


## Further Research Needed

In this study, we were not able to test the tasks with dictation nor magnification software. However, we learned that the VA provides Veterans with many of these dictation and magnification software (e.g. ZoomText, Fusion, hardware) technologies that the participants use. More research is needed to understand the technology breakdown so that teams can begin to test accordingly.  Likewise, more research is needed to understand how top tasks would fare using those technologies.

---

## Appendix
[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/user-research/screenreader-usability-study/research-plan.md)\
[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/user-research/screenreader-usability-study/conversation-guide.md)\
[Research Findings - Main Research Findings Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/user-research/screenreader-usability-study/research-findings.md)


