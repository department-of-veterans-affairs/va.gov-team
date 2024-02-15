# Federal Standardized Header/Footer (Phase 2) Usability Testing -- Topline Summary

*Cindy Merrill, Sitewide Public Websites team, February 15, 2024*

- [Research plan](./research-plan.md)
- [Conversation guide](./conversation-guide.md)
- [Prototype](https://cdpn.io/pen/debug/rNRyVQZ/e1d277149ee531bde99e51cf2cbfcd8a)

This topline summary is a preliminary summary of research findings observed in the research sessions. The purpose is to share what was learned in the sessions before the full research report is complete.

## Introduction
The purpose of this research was to get user feedback on **wayfinding using the proposed Federal header and footer**, as well as Veteran sentiment on the proposed USA logo branding, **from Veterans using screen reader or screen magnifier assistive technology**. 

This research is one of three phases of user research on wayfinding with the proposed Federal header and footer:

Phase | Focus | Dates | Topline Summary
----- |------|-------|--------
1 | Non-assistive technology users doing unauth tasks + 1 auth task | Dec 15-21, 2023 | [link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/initiatives/2024-federal-standardized-header-footer/research/phase1-no-AT/topline.md)
2 | Assistive technology users doing unauth tasks + 1 auth task | Jan 29-Feb 5, 2024 | *THIS REPORT*
3 | Assistive and non-assistive technology users doing auth tasks only | Jan 29-Feb 1, 2024 | [link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/authenticated-menu-usability/summary.md)



## Participants
On January 29 - February 5, 2024, we talked over Zoom with **9 Veterans**--2 of whom were also family members of Veterans. 
- One third (3 of 9) saw the **mobile** version of the prototype
- Two thirds (6 of 9) saw the **desktop** version of the prototype 


## Preliminary Findings
### Usability Successes
1. The **page design was well received overall**. Participants  mentioned specifically liking the page layout, the links in the header and footer, the placement of the *Sign in* button in the top right, the simple font (Public Sans) with good color contrast, the menus that start out collapsed, and the ample spacing between touchable links on mobile devices. 
1. **Wayfinding seemed *not* adversely affected by the proposed header and footer**. Each participant completed 5-7 wayfinding tasks. 3 of 9 participants completed all of their tasks without any help, while others were challenged by a few of them. Tasks that were most difficult were FOIA information (for participants not looking in the federal footer area) and changing address (for participants who had trouble finding the Auth menu).
1. **None of the 9 participants mentioned missing the "VA" logo**. Everyone noticed the VA seal and the text "U.S. Department of Veterans Affairs", which was sufficient to participants to recognize the site as pertaining to the VA.
1. After opening the Auth menu, **all participants recognized and clicked on *Profile***, which was the correct navigation path. 

### Authentication issues
5. After signing in using the prototype, **one third of the participants (3 of 9, which was 2 on mobile and 1 on desktop) didn't recognize that they were actually signed in** because the user interface didn't change much. The subtle change of the "Sign in" button to "Sign out" (on mobile) or their first name (on desktop) wasn't enough for everyone to notice.
1. After signing in, ***ALL 3 of the mobile users* had difficulty finding the Auth menu**, which was located *under their name within the mobile header menu*. They didn't think to click on the *Menu* button because they were looking for their name or something like "My profile" at the top of the screen.
1. After signing in, ***2 of 6 desktop users* had difficulty finding the Auth menu** (by clicking on their name), while the other 4 found it easily. One participant's difficulty was because he didn't notice the triangle dropdown indicator to the right of his name (he was using a screen magnifier, and the shape was different from the carat symbol for dropdowns in the blue menu bar). The other participant's difficulty was due to confusion about what her screen reader said ("button menu"), and she wondered whether it was a button or a menu.


### Footer issues
8. **More than half of the participants (5 of 9 participants: 4 on desktop, 1 mobile) misperceived the bottom of the page and didn't notice any of the links in the black federal footer** until prompted by the moderator to scroll farther down. 3 of them *stopped scrolling at the blue VA footer*, and 2 *stopped at the white USA logo*. (One person in phase 1 also stopped scrolling at the white USA logo, so that's a total of 3 participants from both phases of research.)
1. **Three of 9 participants  (2 desktop, 1 mobile) interpreted the footer as only the black federal part**, and so when they were looking for links that they thought would be in the footer *(Careers, Contact us)*, they **looked only there and not in the blue VA part** of the footer. They interpreted the blue VA part of the footer as part of the page content, not part of the footer where they should be looking.
1. **Three participants (2 desktop, 1 mobile) looked for *Find a VA Location* in the blue VA footer**, which is not there in the prototype (but *is* there in Production). Two participants instead selected the *State Veterans Affairs Offices* link that enables you to pick a state and then go to that state's VA link (unmodernized page), which doesn't go to the Facility Locator. The third participant looked in 3 different columns of the blue footer before looking in the header instead. (*Note*: Research participants heard ALL user task prompts while they were at the top of one of the pages in the prototype, so the header and page content were visible but the footer was not, so they had to deliberately scroll down to the footer.)
1. **Two participants (both desktop) said that the blue VA footer is too large** and has too many links. (One person in phase 1 said the same thing, so that's a total of 3 people from both phases of research.)

### Accessibility issues to investigate 
The 9 participants that we talked with each used their assistive technology in different ways, depending on their experience level and their amount of visual perception. Their visual abilities ranged from impaired vision to low vision to completely blind. And assistive technology can have different versions that behave differently, so reproducing some of the issues has been challenging. **Because there was such variability in technology and visual ability, accessibility issues that affected even one participant are included here** to consider. All such issues for consideration are listed below, starting with the issues that caused difficulty while participants were doing tasks. Then we'll follow with other issues that came up during the post-task interview but hadn't interfered with completing tasks.

#### Issues that caused difficulty in doing tasks
12. Two screen reader users (desktop using JAWS and VoiceOver) had **difficulty using search in the desktop header**. It was unclear what happened after they activated the search button. Focus didn't appear to be in the search box when it opened, though both participants expected to be able to activate *Search* and type. 
     1. The JAWS user (p1) tried "enter" to open the search box but couldn't find it to type text. They expected to *right arrow* or *tab* to the right and expand the box, but that didn't work. They had to *arrow down* to get to the box. They were also unable to close the search box.
     1. The VoiceOver user (p10) had difficulty opening the search box and software keyboard. It didn't work at first, so they tried double-tapping but didn't expect to have to do that before typing their search string.   

1. For p1 (desktop using JAWS screen reader), **after signing in, only the page title was read on the landing page**--not any of the content.
1. p3 (desktop using MAGic version 14 screen reader and magnifier) **couldn't understand some pages and links because MAGic didn't read them** at all. He's accustomed to hovering with his mouse to get the screen reader to read the link aloud, and then clicking on the link to go there. For many links, he had to click on them to get them to be read, but others weren't read at all. MAGic is older screen reader technology for which support has been discontinued by Freedom Scientific, but p3 reported that it usually works. Below is a list of what didn't work in our prototype with his screen reader:

    1. *VA Benefits and Health Care* and *About VA* in header not read (but *Find a VA Location* was fine). 
    1. *US Department of Veterans Affairs* reads the page URL instead of "US Department of Veterans Affairs". 
    1. *Use the life insurance needs calculator* reads the URL before the link title.  
    1. *VA Benefits and Health Care* megamenu items not read with mouse hover as expected. He had to click on them to hear them read, but then it also took him there.
    1. *Contact us* page not read at all. The content and jump links say nothing. The *Ask VA* content says "blank blank blank...", so it was reading but none of the words or characters.
    1. *USA Government* on the *Contact* page not read (but this reads out correctly on the life insurance page).

1. p3 (desktop using MAGic version 14 screen reader and magnifier) **didn't notice the 4th column of footer links** with his magnified screen. When we discussed it later in the session, he said that there's a larger gap after column 3 than there is between the other columns, and so he assumed that there was nothing more to the right.
1. p10 (desktop using VoiceOver screen reader on an iPad) was **confused by navigation in the blue footer because he didn't perceive any columns but saw (with limited vision) the screen jump**, which happened every time he moved from the last link in one column to the first link in an adjacent column.
   > *"I'm down here at the lower part of screen. Now I'm back at the top of the screen, and...I think I did something wrong or something's going funky with the screen" (p10).*
1. p7 (mobile using VoiceOver screen reader on an iPhone) was **confused by the header buttons changing name**: search magnifying glass changed to *X*, and *Menu* changed to *Close*.
   > *"It isn't quite self-evident. You just kind of got to remember that. That's where the search icon used to be, and it is now replaced with just an X" (p7).*
1. p1 (desktop using JAWS screen reader) was confused about why the **screen reader said "button menu" for her name** (to open the Auth menu). She wondered if it was a button or a menu because they're two different things that you interact with differently. 

1. p10 (desktop using VoiceOver screen reader on an iPad) tried to click on the *Contact Us* column header in the blue footer. They **couldn't tell that it wasn't interactive** from what the screen reader said. This same participant also tried clicking on the *Get education benefits* header text on the *VA Benefits and Health Care > Education and training* page.

#### Issues discussed that *didn't* cause difficulty during sessions
20. p10 (desktop using VoiceOver screen reader on an iPad) changed his accessibility settings during the research session to **inverse/high contrast**. After he did that, the **"A" in the header *USA Government* disappeared, as did the entire USA white logo and seal** in the footer. 

1. p7 (mobile using VoiceOver screen reader on an iPhone) said that it's **difficult to differentiate a menu from the content underneath** when the menu background is the same color as what it's overlaying. In this way, it's hard for the participant to tell where the menu ends and the content resumes. 

1. p6 (desktop using ZoomText screen magnifier) said that the **VA Benefits and Health Care menu options aren't visible with her screen magnification**, but she knows to scroll horizontally to find the options because the arrows tell you which direction to look (to the right).

1. p11 (desktop with the font enlarged ~150%) said that they **preferred a larger font**, which they suggested doing by having less white space on the left and right sides of the content. 

### Content feedback to consider
24. See **Footer issue #10** above: Three participants (2 desktop, 1 mobile) **looked for Find a VA Location in the blue VA footer**.
1. See **Footer issue #11** above:  Two participants (both desktop) said that the **blue VA footer is too large**.
1. Two participants **didn't know what the "Business" link was** in the blue footer area. One wondered why they would need that and the "Researchers" link. The other participant thought the "Business" link might be for classes on having your own business.  
1. One participant said that the **"Privacy, policies, and legal information" and "Privacy Service" links seem redundant**. They wondered if they could be combined into one link.
1. One participant said that **"About VA" doesn't make sense in the black part** of the footer unless the VA link would be there for all federal agencies. All the other VA information is in the blue part of the footer.
1. One participant **wanted to see information specifically for seniors** or geriatrics since there are already so many other links for other kinds of Veterans. He would like to see information on activities for seniors (e.g., day programs, the Senior Olympics) and medical links (e.g., how to get tested for Alzheimers). He said *"I feel discriminated against" (p9).*
1. One participant **wanted the "Information for" footer accordion to be more descriptive**. She said that the items underneath were a mixture of individual identities, medical diagnoses, group events, and unknown information for "Business" and "Researchers".  
1. One participant noticed that the **mobile header close buttons are inconsistent**: *X* to close the search panel *vs.* *Close* for the Menu.
     > *"There's no standardization between the two...If I'm looking for an X, it should have the same function across the website" (p7).*

### Recognition as an official government website
7 of the 9 participants were asked how they recognize that this is an official government website (the other 2 participants were not asked due to lack of time). 

32. More than half of the participants (4 of 7) said that they would **look at the URL to see if it's *https* and *.gov*** because the words and graphics could be a fake copy. 
1. Participants also mentioned other features of the page:
     - **VA seal** (5 participants)
     - ***U.S. Department of Veterans Affairs* in the header** (4)
     - ***USA Government*** in header (2)
     - Blue menu bar, white background, and Veterans Crisis Line (1) 

### Feedback on the federal USA Logos
Only 6 of the 9 participants had enough vision that they were able to provide feedback on the USA logos. (The 6 participants were all Veterans, which isn't a representative sample of all US citizens.)  

34. **5 of 6 participants were concerned about the colored USA logo in the header** with varying degrees of sentiment: 
   - **Doesn't look like an official government website** (2 of 6 participants)
     > *"It doesn't look professional that it doesn't instill confidence in me...There's no uniformity, it's not basic enough. It looks too frilly...When you open that up, it looks like the Olympics. It doesn't look like any official government website. It doesn't look serious at all" (p4).*

     > *"Looks kind of legit with the blue and the red, maybe not the black" (p6).*
   - **The font of the "S" seems out of place** (2 of 6 participants)
     > *"The font is not the best--that S is a little too fancy" (p4).*

     > *"The fonts aren't consistent, so S is different than the U and A (p9).*
   - Looks **unfamiliar so seems fraudulent**
     > *"If I clicked and I got navigated to the web page and I saw this, I would just go, okay, this isn't it. And I would just close my web browser and start over...nothing about it says 'official'" (p11).*

   - **Not sure why it says "USA Government"** because things usually say "*U.S.* Government"

  - **Not sure why it says "USA"**  because VA is what matters
     > *"The VA part...is what I'm focused on--more than the U.S. I know the VA is part of the U.S. Government" (p3).*


35. Of the 5 participants who didn't like the colored USA logo in the header, **3 of the 5 said they liked the black/white USA logo in the footer better** because it's a single color and has the seal next to it instead of the word "government". 
      > *"The S is different than the U and A (the font), but...you don't see it as much because it's in all in the same color font so it doesn't stand out as much...The black and white makes it look pretty clean...It looks organized" (p9).*

      > *"It's USA and then you have the symbol [seal] right next to it--that looks more official...[The word] 'Government' seems more generic...The first thing that makes me think official is when I see the seal" (p3).*

1. Three of 6 participants had **feedback on the white VA seal to the right of the white USA logo**. 
    - 2 people had **difficulty seeing the details** of the white logo, noting that it's smaller than the colored version at the top of the page.
    - 1 person said that the **black and white coloring was wrong for the eagle**:
      > *"If I blow it way up, I can see that...the poor eagle has a black head. And that wasn't the case at the top because it was colored right and eagles don't have black heads. [They have] white heads" (p4).*
   - 1 person wondered why it was the VA seal and not a US seal.

## Preliminary Recommendations
There is more data synthesis to do, but in the meantime while design changes are in progress, here are a few preliminary recommendations to consider.
1. **For mobile, consider a different placement for the Auth menu** because underneath the Menu button wasn't intuitive for any of the mobile participants.
1. **Consider additional personalization after sign in** (e.g., incorporating the user's name on mobile, or changing the screen more significantly) because it was hard for some participants to recognize that they were signed in. 
1. **Revisit the large blue footer area in conjunction with the small black footer** area because participants were confused about where the bottom of the page was and where to find typical footer links.
1. **Review and investigate accessibility issues and whether/how to address**, especially the following:
     1. Difficulty using search in desktop
     1. Pages not being read by MAGic screen reader (can we test this on Production?)
     1. Spacing and arrangement of columns in the blue footer in desktop
     1. Mobile header menu and search buttons changing name
1. **Review the content and information architecture of the footer**, as well as mobile header close buttons.
1. **Share feedback on the two federal USA logos with OFCIO and GSA**.


## Next Steps
- Do more data synthesis
- Write full research report for Phases 1 and 2 together
