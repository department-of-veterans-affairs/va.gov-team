# My Healthevet Secondary Navigation Comparison Study

**Office of the CTO - Digital Experience (OCTO-DE), My HealtheVet on VA.gov, Cartography Team**

Date: 02/12/2024

Jonathan Nelson (jonathan.nelson@va.gov), Sara Sterkenburg (sara.sterkenburg@va.gov), Florence McCafferty (florence.mccafferty@adhocteam.us)

**Jump to:**

[Key findings](#key-findings)

[Findings details](#findings-details)

[Recommendations](#recommendations)

[Readout deck](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secondary-nav/Comparison-study/readout-deck.pdf)

## Important Context

### Past studies on wayfinding have uncovered: 

 * Users do not understand or experience My HealtheVet as a cohesive portal within VA.gov where they can complete all health-management related tasks.
 * As My HealtheVet on VA.gov is currently designed, most users expect to navigate the health portal using global navigation elements.  These direct them out of (not through) the portal, a UX that is frustrating and inefficient.  
   * “Some participants would be in MHV portal experience and return to Megamenu, Home page or Search. [...] These participants had to follow circuitous routes to accomplish the tasks and often indicated frustration or described VA.gov as complicated or confusing.”
   * “Once users leave MHV for the broader site of VA.gov, it is very challenging and frustrating to find their way back”

 * 37% of My HealtheVet users are on mobile devices, which further exacerbates the experience of trying to navigate to and between health tools; current examples of mobile secondary navigation menus are collapsed and appear to be missed by mobile users.

 * This has led us to wonder:
   * How might we create a secondary menu that provides a better navigational UX than is currently offered on MHV?

 * For a secondary nav to establish a more positive navigatory experience that users can benefit from, the design must:
   * Encourage users to go to the more local options first when seeking health-mgmt tools
   * Help users understand that they are in a container (patient portal) with a specific purpose (health mgmt)
   * Ideally, be just as easy to use on mobile as it is on desktop 

#### Sources:
 * [Health Wayfinding Study - Jun 2023](https://github.com/department-of-veterans-affairs/va.gov-team/tree/7f57cbccdb6a083c3281abd21e3fce0a5885a640/products/health-care/digital-health-modernization/mhv-to-va.gov/overall-content-IA/2023-06-health-wayfinding-study)
 * [My HealtheVet Secondary Nav Research - Oct 2023](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/overall-content-IA/2023-10-MHV-secondary-navigation-research)

## Research Goals

* Evaluate a new navigation strategy that prioritizes easy access to the four primary health tools only. Determine whether this strategy is successful in helping users find and complete most health-related tasks.
* Design the navigation to deliver a dual purpose of offering users a strong “sense of place” for My HealtheVet, to clarify that it is a comprehensive health portal within VA.gov.
* Determine whether we have solved known issues with VA.gov's collapsed navigation on mobile (the "in this section" component), or if Veterans require persistent, visible options to understand navigation.

## Research Questions

* Are participants able to find and complete healthcare tasks within the My HealtheVet portal using the proposed designs?
* How easily can users navigate to the four primary health tools that are prioritized by the proposed designs?
* Can participants navigate to health-related tools that are not specifically named within the secondary navigation designs?
* Is one design (Design A or Design B) more successful than the other at helping Veterans meet their needs?
* How do these designs impact participants' understanding of My HealtheVet as a portal, and where they are within the VA.gov ecosystem?

## Methodology 

We conducted 16 remote interviews with Zoom. The 16 participants interacted with two prototypes each, either viewing both on mobile or both on desktop, half viewing Prototype A first, and the other half viewing Prototype B first. 

### Links to Codepen prototypes
Note: Prototypes are responsive
 * [Prototype A (no icons)](https://000698568.codepen.website/results.html) 
 * [Prototype B (with icons)](https://codepen.io/figaro/project/live/AqoeoW)

### Mobile A:
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/106624475/30b080f5-2c99-4dfa-a22a-bfef8017a2d1)

### Mobile B:
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/106624475/fb9242d2-784d-4e38-a9fe-622d9fb607a6)

## Key Findings

1. The persistent link navigation was found to be successful in creating an improved UX
2. The navigation bar helps participants quickly understand where they are and what they can do there
3. Even with improvements, collapsed secondary nav elements continue to fail our mobile users
4. 8/8 mobile participants found the persistent link nav to be “easier” and/or more “direct” than the collapsed menu
5. Tools at the bottom of the landing page are not easy enough to find
6. Entering My HealtheVet through a side door was surprising to some participants


### Secondary Findings

7. Deep-linking participants into a tool's detail page revealed issues with current labeling.

8. My HealtheVet link text in the nav bar in prototype B (both desktop and mobile) is viewed as a label for the whole navigation bar, not a clickable link.

## Findings details 

### 1. The persistent link navigation was found to be successful in creating an improved UX
Note: Persistent-link nav was present on three versions of the two prototypes: Mobile B, Desktop A, and Desktop B. On Mobile A, there was a dropdown nav as opposed to persistent links. 


 * While using a version of the secondary nav that offered persistent links, all 16 participants were able to stay within the portal and complete tasks 1 and 2, which asked them to locate tasks or information within Messages, Appointments, and Medical Records:
   * P16: "The four major things that I'd use are right there."
   * P11: “"This is nice and easy. Much better than the current MyHealtheVet."
 
 * This is a strong departure from studies using other secondary navigation designs in which participants went to the mega menu first to navigate between pages within the health portal, a strategy that causes a frustrating, disorienting experience, ([Health Wayfinding Study - Jun 2023](https://github.com/department-of-veterans-affairs/va.gov-team/tree/7f57cbccdb6a083c3281abd21e3fce0a5885a640/products/health-care/digital-health-modernization/mhv-to-va.gov/overall-content-IA/2023-06-health-wayfinding-study), [My HealtheVet Secondary Nav Research, Oct 2023](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/overall-content-IA/2023-10-MHV-secondary-navigation-research)
 
 * We saw improved UX in participants’ behavior and also heard from participants directly that this type of secondary nav facilitates seamless movement between health tools:
    * P15: "In secure messaging, the way I do it now, or the way I have done it, in secure messaging, you're only in secure messaging. So then you have to exit secure messaging to get back to My HealtheVet where all the options are. So I like that I can just go straight from reading the email [message] and then okay, let me just go up here and click appointments. It's a lot more streamlined because it's right there. I don't have to go looking, okay now where do I find that again?"
     * P3: "I like that roaming bar that goes with you. I don't have to go backwards and forwards; I can just click on whatever I want; I can go from records to appointments to meds, and not have to go to a dropdown menu and scroll; there's also not as much scrolling."

### 2. The navigation bar helps participants quickly understand where they are and what they can do there
 
 * Past studies have indicated that participants seem unaware of My HealtheVet as a cohesive portal where they can manage their healthcare. [My HealtheVet Secondary Nav Research - Oct 2023](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/overall-content-IA/2023-10-MHV-secondary-navigation-research)
 
 * In this study, participants were able to understand quickly that they were within a container for health management, and the types of tasks they could complete there:
     * P9: “These are the options on the My HealtheVet page. I can see all my appointments, messages, medicines, and medical records and I can toggle in this little area for those features. And if they’re not, [...] I know it’s not in My HealtheVet.”

### 3. Even with improvements, collapsed secondary nav designs continue to fail our mobile users

 * Even with known problems corrected, all participants that started with the collapsed nav prototype gravitated towards the mega menu first (again, preferring global nav as a first step). 

   * When using mobile A first, all participants responded to task 1 by going to the mega menu (a strategy we’ve seen to be the given that most participants engage with in past studies). When using mobile B first, all participants started with the secondary nav within My HealtheVet.

### 4. 8/8 mobile participants found the persistent link nav to be "easier" and/or more "direct" than the collapsed menu

  ![Screenshot 2024-03-01 at 4 27 48 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/58444931/7eb76197-9f2a-486a-bfaf-00ce68ac07f9)

  * No participants hesitated or expressed any confusion around the abbreviations used within the mobile persistent link nav.
  
  * These abbreviations were designed to be seen only by those with the smallest screen sizes (under 400 px wide) but we used them in every mobile test to collect data on whether or not they are commonly known.

### 5. Tools at the bottom of the landing page are not easy enough to find 

 * It is not intuitive for participants to seek a landing page (they’ve never seen) for additional tools.

 * Of the 12 participants who saw the landing page - some guided by the moderator, some found it accidentally, a few sought it out: **Of those 12, over half struggled to find tools below the fold.**
   * P16: "Most people are not gonna scroll down all the way because you're not thinking you'll see that stuff right there. That's just me."
   * P9: Seemed to accidentally hit breadcrumbs while talking to the moderator; scrolls around the landing page. Moderator again asks her where she’d look for CPAP re-ordering: “I’m still thinking Medications.”
   
![Screenshot 2024-03-01 at 4 44 13 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/58444931/a793cd22-42bc-497f-b137-5abef7de6c3e)
  
 * Across all devices and prototype designs, almost all participants struggled with Task 3 in our study, which asked users where they would be able to re-order CPAP supplies or file for travel reimbursement (both requiring participants to find the landing page for the first time).
   * 13/16 participants thought they’d find CPAP re-ordering under Medications. When we asked them where else they might look, participants were unsure and most went to the mega menu as their second option.
   * This was both when participants were looking at the secondary nav and when they were looking at the landing page 
 
 * There are multiple factors at play that could all have contributed to this behavior:
   * Participants seem very committed to their assessment that CPAP would fall under Medications, to the point that they thought they'd find it in the Medications box (Link: refill) on the landing page (even though a clear CPAP re-ordering link is lower on that same page)
   * The clear links in the secondary nav pointing to the 4 main tools could be indicating to users that there are no tools or affordances besides those (although participants did say they'd search for CPAP)
   * Prototype B's secondary nav link to the landing page was viewed by most participants as a header for the secondary nav and not a clickable link.
   * The way the study was designed, participants did not see the landing page until they made their way to it on their own. Instead of bringing participants in through the front door (landing page), we deep-linked them to a message details page. If participants are unaware that the landing page exists, does this stand as an obstacle for them looking for / seeking out the landing page?

 * This is problematic. The BTSSS Travel team just identified in a tree-testing study that the My HealtheVet landing page has the highest signal as a destination where VA.gov users expect to be able to file for travel pay, [Status Visibility IA Study - Jan 2024](https://github.com/department-of-veterans-affairs/va.gov-team/tree/084b74d92d44f3170ab53fc4e53c002b4b105918/products/health-care/beneficiary-travel/research/2024-01-Status%20Visibility%20IA%20Study)
 * As more tools and features are added to the landing page, this problem is bound to grow unless we find creative ways to help participants go to or return to the landing page (outside of simply adding a link in the secondary nav).
  
### 6. Entering My HealtheVet through a side door was surprising to some participants

 * When explaining where they’d expect to land before the message screen, participants used the following words: dashboard, buffer, main landing page, menu, main hub, home screen, and home page.
   
   * Note: The way the study was set up, the prototyped experience of entering a message details page from a link in email lacked some more realistic details, e.g. the “email” was just a message on the participant’s screen and we asked participants to imagine it was an email in their inbox. 

![Screenshot 2024-03-01 at 4 48 35 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/58444931/6ad9e69d-5762-45af-8052-9ebb5661ef6b)

## Secondary Findings

#### 8. 100% of users exposed to the abbreviations in mobile prototype B knew what the abbreviations meant.
 * 12/12 participants correctly named the abbreviations and accurately identified what they would expect to fall under that tool
 * One participant took a moment to understand because he heard his screenreader say “APPS.” Once the abbreviation was spelled out to him, he immediately recognized it and knew what it meant.
 * We have already worked with accessibility to solve this issue; future iterations will be coded so that screenreader users hear the full word, “Appointments,” not “APPS.”

#### 9. Deep-linking participants into a tool's detail page revealed issues with current labeling.
 * Currently, tool detail pages do not reference the name of the tool they fall under. For example, a specific secure message detail page has an H1 that is the title of the message. In our prototypes, the message was “X-ray results” which was confusing for participants. 
 * Under the H1, the four buttons were equally confusing. Because participants did not immediately understand that they were looking at a message similar to an email, links like “Move” or “Print” were seen as especially strange.

#### 10. My HealtheVet link text in the nav bar in prototype B (both desktop and mobile) is viewed as a label for the whole navigation bar, not a clickable link.
   * P11: “I found it more confusing because I thought I was in My HealtheVet, so why would I be clicking on My HealtheVet? Did I go out of My HealtheVet?" 
   * P16: “Basically it’s  telling me the subject of what’s in that block.”

#### 11. Familiarity with a landing page provides a sense of place that helps participants gain their bearing when they feel lost.
 * Multiple participants named returning “home” as an important strategy in getting their bearings if they’re feeling lost on a site. The landing page can act as a sign post that allows participants to better understand where they are, and a familiar place to return to when lost.
   * P15: “If I just can't find something or I get too far into like the menu tree, if I just click on that, it'll take me back to like a start page or homepage.”
   * P1: "I see it as a way to get back to the beginning. Like, if you get caught up in some stuff you're not sure where you are."
  
## Recommendations

#### Implement a persistent link secondary nav bar on My HealtheVet including needed changes that were surfaced as part of this research

This is easy to do (or even a given) on desktop. The place where it is not a given or less expected is mobile, which is where it is also more necessary. 

Problems to address with the persistent link nav:
  * My HealtheVet link text did not appear clickable to participants
  * Screen reader pronounced abbreviations phonetically (already addressed through improved A11y coding)
  * During the study, participants could not use the nav bar to know where they currently are within My HealtheVet (this affordance or feature was not added to the prototypes)

#### Enable Veterans to more easily and quickly come across the harder-to-find health management tools
  * The landing page needs to surface hard-to-find content much higher on the page and de-prioritize tools that are repetitive to the links within the new secondary nav.
    
  * Other tool landing pages may need to offer cross-link references to those tools as well to make them easier to find when a Veteran is most likely to be looking for them.

We need to do some discovery work around: 
  * How best to surface tools / affordances that do not fit into the 4 primary tools 
  * Identifying opportunities to cross-link tools/tasks that are not named in the navigation bar
  * Uncovering tasks that are more difficult to find using this secondary nav strategy, and conducting research to understand where users would expect to find them


#### When it does not damage expectations and UX, help Veterans orient themselves by guiding them through a front door (such as a landing page)

 * Explore routing users through the My HealtheVet landing page or individual tool landing pages instead of deep-linking them into details pages as we did in this study
 * Reimagine tool landing pages as important entry points into each experience
 * Conduct additional research to understand the pros and cons of sending users to the MHV landing page instead of specific tool pages


## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secondary-nav/Comparison-study/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secondary-nav/Comparison-study/conversation-guide.md)

[Interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secondary-nav/Comparison-study/session-notes)

### Other studies mentioned

[Health Wayfinding Study - Jun 2023](https://github.com/department-of-veterans-affairs/va.gov-team/tree/7f57cbccdb6a083c3281abd21e3fce0a5885a640/products/health-care/digital-health-modernization/mhv-to-va.gov/overall-content-IA/2023-06-health-wayfinding-study)

[My HealtheVet Secondary Nav Research - Oct 2023](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/overall-content-IA/2023-10-MHV-secondary-navigation-research)

[Status Visibility IA Study - Jan 2024](https://github.com/department-of-veterans-affairs/va.gov-team/tree/084b74d92d44f3170ab53fc4e53c002b4b105918/products/health-care/beneficiary-travel/research/2024-01-Status%20Visibility%20IA%20Study)

### Tools used for Synthesis

[Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1705600081937/e5173396919d106abc42c3097d514d2d15f074f6?sender=ua13e567cb5c4221acaa14949)

### Pages and applications used

[Prototype A (no icons)](https://000698568.codepen.website/email.html)

[Prototype B](https://000698676.codepen.website/results.html)

## Who we talked to 

**Recruitment criteria**

We asked Perigean to create 4 groups of 4 participants each (16 total) with the following intention:
* Group 1 would see Mobile A first, then Mobile B.
* Group 2 would see Mobile B first, then Mobile A.
* Group 3 would see Desktop A first, then Desktop B.
* Group 4 would see Desktop B first, then Desktop A.

Audience segment:
* Veterans: 16 
* Caregivers: 0 
* Family members of a Veteran: 0

MHV Users (Requested 2 MHV users per group and 2 not MHV users but could be based on screener questions)
* 8 MHV users (split evenly among groups)
* 8 non-users (split evenly among groups)

Gender (split as evenly as possible among 4 groups):
* Male: 9 
* Female: 7 

LGBTQ+:
* Transgender: 0 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
* Gay, lesbian, or bisexual: 1

Devices used during study: 
* Desktop: 8  
* Smart phone: 8
* Assistive Technology: 1

Age (We requested that Perigean find 2 participants 55+ and 2 participants under age 55 for each group. This was true for 2 groups; the other 2 groups had 3 participants over age 55):
* 25-34: 1
* 35-44: 0
* 45-54: 5
* 55-64: 4
* 65+: 6
* Unknown: 0

Race:
* White: 11
* Black: 4
* Hispanic: 1

Cognitive disability (Requested at least 1 per group):
* Yes: 5
* No: 11 

Disability and Assistive Technology (AT) (Requested 1 screenreader user and 1 pinch-magnifier per group but another AT study wass running at the same time so expected to not meet that request):
* Cognitive: 5 (Requested at least 1 participant/group; this was met and 1 group had 2 participants with a cognitive disability)
* AT beginner: 1 (between beginner and intermediate)
* AT advanced user: 2
* Desktop screen reader: 1
* Mobile screen reader: 1
* Magnification/Zoom: 2




 * Past studies have indicated that participants seem unaware of My HealtheVet as a cohesive portal where they can manage their healthcare. [My HealtheVet Secondary Nav Research - Oct 2023](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/overall-content-IA/2023-10-MHV-secondary-navigation-research)
 * Ultimately, it appears that participants used whichever navigation strategy stuck out to them the most (in other words, the most visually salient option).
 * **As a result all 8 participants that interacted with mobile versions of the prototypes found Mobile B (with icons and persistent links) to be an easier and/or more direct navigation strategy.**






