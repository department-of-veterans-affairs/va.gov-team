---
title: "Veteran Onboarding Modal Research Findings"
product: "Welcome to VA. gov Onboarding"
team: "Core Veteran Experience"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2025-11-24"
researchers:
  - "David Pearl"
research_goals:
  - "Understand how new Veterans currently approach VA. gov and what causes decision paralysis"
  - "Evaluate effectiveness and preference between modal design approaches (application-focused vs. exploration-focused)"
methodology:
  - "Comparative usability testing with preference ranking"
  - "Remote moderated sessions"
  - "45-minute sessions combining semi-structured interviews and prototype testing"
devices_used:
    desktop: 7
    tablet: 1
    smartphone: 8
    assistive_technology: 0
participants_total: 16
demographics:
  veterans: 16
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 3
    "35-44": 5
    "45-54": 4
    "55-64": 3
    "65+": 1
    unknown: 0
  education:
    high_school: 0
    some_college: 3
    associates: 2
    bachelors: 6
    masters: 5
    doctorate: 0
    unknown: 0
  location:
    urban: 11
    rural: 5
    unknown: 0
  race:
    white: 10
    black: 2
    hispanic: 3
    biracial: 0
    asian: 1
    native: 0
  disability:
    cognitive: 0
    AT_beginner: 0
    AT_advanced: 0
    screen_reader_desktop: 0
    screen_reader_mobile: 0
    magnification_zoom: 0
    speech_input: 0
    hearing_aids: 0
    sighted_keyboard: 0
    captions: 0
key_findings:
  - "14 of 16 participants (88%) preferred application-focused modal over action-focused"
  - "Veterans want comprehensive benefit discovery but current tool falls short"
  - "Eligibility is psychological prerequisite but dense pages overwhelm"
  - "Veterans want personalized, status-based content using existing profile data"
  - "Three core benefits (Healthcare, Disability, Education) validated universally"
  - "Veterans reject 'most people' framing and want personalized guidance"
  - "Show modal first time only but make re-accessible"
  - "Product tours universally rejected"
  - "Critical accessibility needs for TBI, PTSD, older Veterans"
recommendations:
  - "Implement application-focused modal as primary onboarding experience"
  - "Design fourth 'Discover Your Benefits' option with true personalization"
  - "Use About/How-to page formats with integrated eligibility context"
  - "Implement dynamic content based on user enrollment status"
  - "Ensure consistent structure across all benefit pages"
  - "Use personal framing not crowd-sourced language"
  - "Show modal on first login only with easy re-access method"
  - "Avoid multi-step product tours entirely"
kpi_alignment:
  - "Improve satisfaction with web and mobile products by 5 points (OCTO Objective 1, KR 1)"
  - "Increase successful benefit applications from new Veterans"
  - "Reduce time to first benefit application"
outcomes:
  user: "New Veterans can quickly navigate to and apply for the benefits they need during transition without confusion or overwhelm"
  business: "Increased benefit application completion rates and reduced support burden through clearer onboarding"
opportunity_areas:
  - "Personalized benefit recommendations based on profile data"
  - "Interconnected benefit discovery (e.g., disability rating unlocking healthcare)"
  - "Family/dependent benefit pathways"
  - "VA facility proximity checking before healthcare enrollment"
further_research_needed:
  - "Test dynamic content implementation with enrolled vs non-enrolled users"
  - "Validate fourth DYB option design with comprehensive benefit list"
  - "Assistive technology testing with screen readers and magnification"
  - "Non-English speaking Veterans"
underserved_groups_missing:
  - "Veterans using assistive technology (screen readers, magnification)"
  - "Veterans with documented cognitive disabilities"
  - "Non-English speaking Veterans"
secondary_research:
synthesis_tools_used:
  - "Mural"
  - "Excel for session notes"
  - "Affinity Mapping"
  - "Figma for affinity mapping"
---

# Welcome to VA.gov Onboarding Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Welcome to VA.gov Onboarding, Core Veteran Experience Team**

**Date:** 11/24/2025

**Contacts:** David Pearl

**[Research Readout (PDF)](https://docs.google.com/presentation/d/1YBPaLb_4fvdmGysZRSylun4yTH16RE8bUbzTeLN5n_I/edit?usp=sharing)**  
*Add a link to your research readout deck, if available.*

**Jump to:**
- [Hypotheses and conclusions](#user-content-hypotheses-and-conclusions)
- [Key findings](#user-content-key-findings)
- [Recommendations](#user-content-recommendations)
- [Product User and Business Outcomes](#user-content-product-user-and-business-outcomes)
- [Key Performance Indicators](#user-content-key-performance-indicators)
- [Next Steps](#user-content-next-steps)
- [Further research needed](#user-content-further-research-needed)
- [Appendix](#user-content-appendix)
- [Research participants](#user-content-research-participants)


## Research Goals

This research supports Veterans during the critical **Getting Out** and **Starting Up** phases of their journey, specifically addressing the moment when newly transitioned Veterans first access VA.gov and face decision paralysis about where to begin. 

[See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map. pdf)

**Key moments this tool supports:**
- First login to VA.gov after military separation
- Initial benefit discovery and eligibility assessment
- First benefit application decisions during transition period

**Desired outcomes:**
- Veterans can quickly identify and access their priority benefits
- Reduction in confusion and decision paralysis during first visit
- Increased successful benefit application completion
- Improved satisfaction with VA. gov as primary benefits portal

## Research Questions

This study aimed to answer the following questions from the research plan:

1. What are new Veterans' current experiences and pain points when first accessing VA.gov?
2.  How do new Veterans decide what to do first on VA.gov?
3. Which modal version (application-focused vs. action-focused) do new Veterans prefer and why?
4. What are the usability issues and pain points with each modal version?
5. How well do the modal options align with new Veterans' actual priorities and needs? 

## Methodology

**Comparative Usability Testing with Preference Ranking**

We conducted 60-minute remote moderated sessions via Zoom, combining:
- Semi-structured interviews (15 minutes) to understand current experiences with VA.gov
- Comparative usability testing (45 minutes) of two high-fidelity interactive modal prototypes

**Version Testing:**
- **Version A (Application-focused):** Three benefit application options - VA Health Care, VA Disability Compensation, and VA Education Benefits
- **Version B (Action-focused):** Three action options - My VA, My HealtheVet, and Discover Your Benefits Tool

**Iterative Approach:**
- Phase 1 (Participants 1-8, Oct 27-31): Tested "Get benefit" anchor link pages
- Phase 2 (Participants 9-16, Nov 1-4): Refined "About/How to" pages based on Phase 1 feedback

This iterative methodology allowed us to course-correct based on participant feedback about overwhelming page designs.

**Study Period:** October 27 - November 4, 2025

**Sessions:** 16 completed (target: 16)

**Duration:** 60 minutes per session

**Format:** Remote moderated via Zoom

## Hypotheses and Conclusions

**Hypothesis 1:** Both modal versions will result in higher satisfaction and task completion rates compared to no onboarding guidance. 
- **Definitely True**
- **Task completion rate:** 16/16 participants (100%) successfully navigated through both modal prototypes and understood their purpose
- **Preference rate:** 14/16 participants (88%) explicitly preferred the Apply-focused modal
- **Satisfaction evidence:** All 16 participants stated the modal "would have been helpful" when they first started using VA.gov
- **Supporting evidence:**
  - Multiple participants said the modal "would have been helpful" when they were first transitioning
  - Participants described current VA.gov as "overwhelming without guidance"
  - The modal concept was universally well-received as a helpful onboarding tool
  - 100% of participants could articulate what each modal option would help them accomplish

---

**Hypothesis 2:** Application-focused options (Version A) will be preferred by Veterans who know what they want to apply for, while action-focused options (Version B) will appeal to Veterans who are still exploring. 
- **Partially True**
- **Task completion rate:** 16/16 participants (100%) successfully understood both versions
- **Preference rate:** 14/16 (88%) preferred Version A (Application-focused), regardless of their level of certainty about benefits
- **Why partially true:** The preference wasn't dependent on whether Veterans "knew what they wanted"
  - Veterans who knew exactly what they wanted: Preferred Version A
  - Veterans who were uncertain/exploring: **Also preferred Version A**
  - Only 2 participants preferred Version B, and for specific reasons unrelated to "exploring options"
- **Supporting evidence:**
  - Even participants who stated they were "just browsing" or "seeing what's available" preferred the direct application paths in Version A
  - The hypothesis incorrectly assumed that exploration-focused users would prefer action-based navigation
  - Veterans want to explore **benefits** (what they can get), not **actions** (tools to manage things they don't have yet)

---

**Additional task success metrics:**

**Benefit identification task:**
- **Success rate:** 16/16 (100%) correctly identified which benefits each modal option would lead to
- **Time to understanding:** Average 5-8 seconds to scan and comprehend modal options

**Navigation task ("Where would you click first?"):**
- **Version A (Apply-focused):** 14/16 chose a benefit option, 2/16 chose "Not right now"
- **Version B (Action-focused):** 8/16 confused about "My VA," 6/16 clicked "Discover Your Benefits" expecting different experience, 2/16 chose healthcare

**Page usability task:**
- **Phase 1 "Get [benefit]" pages:** 8/8 participants expressed being overwhelmed; 6/8 couldn't locate eligibility information quickly
- **Phase 2 "About/How to" pages:** 8/8 participants found information more easily; 7/8 located eligibility context within 15 seconds

**Preference ranking task:**
- **Clear preference for Version A:** 14/16 (88%)
- **Clear preference for Version B:** 2/16 (12%)
- **Unable to decide:** 0/16 (0%)

## Key Findings

1. **Most Veterans preferred the application-focused modal (Version A)** showing Healthcare, Disability, and Education as direct paths to benefit applications
2. **Veterans want "Discover Your Benefits" but current tool falls short** - they expect comprehensive personalized lists, not questionnaires
3.  **Eligibility information is a psychological prerequisite before application** but must be contextually integrated, not a separate destination
4. **"About" and "How to" page formats with integrated eligibility work better than dense anchor link pages** that overwhelm with 10+ options
5. **Veterans expect personalized content** based on existing profile data and enrollment status, not one-size-fits-all experiences
6. **Three benefits (Healthcare, Disability, and Education) universally validated** as the core pillars Veterans need during transition
7. **Veterans reject "most people" framing** and want personalized guidance ("What would you like to do first? ")
8. **Show modal on first login only** but Veterans want easy way to re-access if needed
9. **Product tours are universally rejected** - Veterans have pop-up fatigue and immediately dismiss multi-step tours

# Details of Findings

---

### Finding 1: Most Veterans preferred the application-focused modal (88%)

14 of 16 participants preferred Version A (Application-focused modal) over Version B (Action-focused).  Veterans valued its direct pathway to the three core benefits they came to VA.gov to access during their transition period.

**Why Version A worked:**
- Direct connection to transition priorities (healthcare, disability, education)
- Clear benefit categories that matched Veterans' mental models
- Focused scope without overwhelming choices
- Data-driven approach ("most Veterans start with") resonated with some participants

**Why Version B failed:**
- "My VA" terminology confused new users who lacked context
- Healthcare-only focus in "Manage your healthcare" seemed limiting
- Perceived redundancy between "My VA" and "Manage your healthcare"
- Action-oriented language felt premature for users who hadn't enrolled yet

**Supporting evidence:**
- _"These are things that they need to get squared away as they're getting out...  there's so much going on during that time that some, you know, laser focus guidance on these are the most important things that you should be focusing on as you're transitioning." – P13_
- _"Having that direct path to that...  it would have saved me time, you know, and taking me directly (to) what I was looking for.  If you have data that says this is where the people go first, then give me that." – P14_
- _"I prefer the left overall quite a bit...  I'm here for those things, healthcare, disability, training.  So having those three there and then if I get to that, presumably I can get to the others through those." – P17_
- _"VA healthcare, disability and education...  That's what most people are gonna look for first." – P15_
- _"Broad enough overview without being too broad and without being too focused in." – P8_
- _"It's straight to the point, you have your health care, your, your disability compensation, the education and training benefit, you know, that's all right there.  You can click on each one of those." – P20_
- _"There is literally nothing more important than applying for benefits. That's why we're on VA.gov." – P1_

**Version B confusion:**
- _"I don't like it as much...  I feel like this assumes that you know a little more about the VA and my VA versus the healthcare stuff.  But I don't feel like that would be intuitive...  the first time I'm logging in, I'm not really sure what my VA is." – P13_
- _"Most people think of manage as like an ongoing thing, not like a first thing...  You put in your account for the first time, you have really no idea what this means, and then manage.  It kind of sounds weird." – P17_
- _"This one is focused on health care." – P3_
- _"Currently my health is in My VA.  I could see almost the same information.  So that one kind of cancel each other out...  You could see that in MyVA so it's kind of redundant...  You don't need two of them." – P11_

**Design implication:** Avoid using "My VA" in the onboarding modal. For new users who don't have established context, this terminology is too vague and assumes familiarity they don't yet have.  Use specific, descriptive benefit names instead.  Once users have experience with the platform, "My VA" becomes more meaningful. 

---

### Finding 2: Veterans want "Discover Your Benefits" but the current tool falls short

Many participants spontaneously requested adding "Discover Your Benefits" as a fourth option in the Apply modal.  However, their expectations reveal a critical gap between what Veterans want and what the current tool provides.  Veterans expected an instant, personalized list of benefits they're eligible for—not another questionnaire to complete.

**What Veterans expected from "Discover Your Benefits":**
- Comprehensive list of all VA benefits tailored to their profile
- Smart recommendations based on service history, disability status, and family situation
- Instant results without additional form-filling
- Clear eligibility indicators for each benefit
- Coverage of lesser-known benefits they might not think to search for

**What the current tool actually provides:**
- Another questionnaire ("Life events and benefits")
- No actual benefit list on landing page
- Requires additional clicking and form completion
- Disclaimer: "This tool is not an application for benefits"
- Sends users back to searching after answering questions

**Why Veterans wanted it added to the modal:**
- _"It's missing one.  I would like discover your benefits on that one. Like if you instead of three have four… That'd be the first one on the list because somebody that never been there, they don't know." – P4_
- _"I expect to see what I qualify for and all the benefits that VA has for Veterans… Yeah, I would want to know what I, you know, everything that I can get." – P21A_
- _"[I expect] any and everything that the VA has for us, the service person and things that we're not aware of." – P21B_

**What happened when they clicked through:**
- _"For people like me with PTSD and stuff like this.  You're just literally ticking me off…We need straightforward answers, not a bunch of stuff." - P19_
- _"'This tool is not an application for benefits.' It means I got to go out and start over and find, you know, find where I can apply, and that's where people would get.  You're sending people all over the place." – P4_
- _"Oh, now I'm confused because it doesn't even tell me what type of benefits these are...  Like, discover my benefits, find benefits I may want to apply for.  And I would want to see such as this, this, this, this." – P13_
- _"There's no long list of options. It just another click of asking a question of what you're here for." – P4_

**The personalization expectation:**
- _"Since you've already logged in with your profile, so they know who you are… use an AI strategy… to do a search to everything that you could possibly qualify for… since they know your family information, where you're eligible for." – P21A_
- _"I thought it was going to be kind of a list of health care, education, compensation, something like that. And then you can click that and then it lists kind of like go back to school, get a certificate..." – P8_
- _"I would expect a long list of things that I may or may not be eligible for." – P12_

**Alternative positioning suggested:**
- _"Discover your benefits could be nice on the left side, you know, like, as a less targeted option, you know, like more of like a tour thing." – P17_

**Design implication:** The "Discover Your Benefits" request reveals four deeper user needs: (1) a catch-all option for topics outside the top three categories, (2) comprehensive visibility of all available benefits, (3) personalized recommendations based on profile data, and (4) reassurance they're not missing hidden opportunities.  The current tool fails to meet these needs because it's another questionnaire, not the intelligent benefit finder Veterans expect.

---

### Finding 3: Eligibility information is a psychological prerequisite before application

Veterans consistently wanted to confirm eligibility before committing time to applications. They described feeling anxious about investing effort into something they might not qualify for.  However, they don't want to hunt for eligibility information on separate pages—it needs to be contextually integrated into their path forward.

**The psychological barrier:**
- _"I definitely think before any other information comes from that, it should go straight to an eligibility page. 110%… I wouldn't want to go into something, find something that I'm like, oh, my God, this would be great.  Come to find out I'm not eligible." – P3_
- _"I wouldn't want to go into something, find something that I'm like, oh, my God, this would be great. Come to find out I'm not eligible." – P3_

**Where eligibility fits in the journey:**
- _"I'm going to go to eligibility and then within eligibility I would want to see how to apply because once I see if I'm eligible, I don't want to have to click on another screen to apply." - P4_
- _"Maybe if eligibility down to apply online were kind of like the focus of what was on the main page… those are the main things I feel like people would come here for." - P8_

**The desire for upfront clarity:**
- _"If it's pulling my information, if I'm already logged in and it's got my information, I would like it to tell me if I'm eligible right off the rip or not, and then go from there." – P16_
- _"Here's what we think you're eligible for.  Here's some things you might not have known about that, you know, through your service you're eligible for from the VA." – P20_

**Design implication:** Eligibility shouldn't be a separate destination that requires extra clicks. It should be woven into the "how to apply" pathway so Veterans can self-qualify as they move toward application.  This reduces anxiety about wasted effort and creates confidence to proceed.  Consider dynamic eligibility indicators based on profile data where possible.

---

### Finding 4: "About" and "How to" page formats with integrated eligibility work better than dense anchor link pages

Phase 1 "Get [benefit]" pages with 10+ anchor links overwhelmed participants and created decision paralysis. Phase 2 "About" and "How to" pages with clearer hierarchy, nested menus, and progressive disclosure performed significantly better by reducing cognitive load and providing clearer pathways.

**Phase 1 pages tested (P1, P3, P4, P8, P12, P13, P14, P15):**
- "Get VA health care"
- "Get disability compensation"
- "Get GI Bill education benefits"

**Phase 1 feedback - Overwhelming:**
- _"There's so much info on VA.gov but sometimes it's too much so takes time to navigate through everything." – P1_
- _"I think there's too much on this page, I think it's too cluttered." – P4_
- _"There's a lot… sort of not what I'm looking for at first." – P3_
- _"First looking at it, you're just.  It's overwhelming." – P8_

**Phase 2 pages tested (P16, P17, P19, P20, P21A, P21B, P24, P11):**
- "About VA health care"
- "How to apply for disability compensation"
- "Get GI Bill education benefits" (unchanged from Phase 1)

**Phase 2 feedback - Clear and helpful:**
- _"I would be very pleased if I with this page and it would help tremendously as it's the.  At the beginning of my journey in familiar.  Familiarizing myself to the VA." – P21B_
- _"It actually explains like how to, explains what you need to do and then it assists you." – P20_
- _"This is very good too...  It tells you about VA health benefits that you might not know about.  What's covered, what's not covered, how to apply. Learn more about VA healthcare, what happens after you apply." – P16_
- _"It's helpful.  It tells you it's just straightforward.  Tells you what you need to apply.  There's the link." – P19_

**What made "How to" pages work better:**
- Action-oriented framing ("How to apply") vs. transactional framing ("Get")
- Clearer visual hierarchy with progressive disclosure
- Integrated eligibility context within the flow
- Focused content sections rather than long lists of anchor links
- Immediate pathway to action ("Apply online" prominently featured)

**Design implication:** Long pages with 10+ anchor links and dense information create cognitive overload, especially for Veterans experiencing stress during transition. Action-oriented "how to" pages with nested menus, clear hierarchy, and progressive disclosure prove more effective by creating clear wayfinding and reducing decision paralysis.

---

### Finding 5: Veterans expect personalized content based on enrollment status and profile data

Veterans consistently expressed desire for dynamic content that changes based on their account status, benefit enrollment, family situation, and service history. The current one-size-fits-all approach creates confusion and frustration when enrolled Veterans see beginner content or when the system ignores data it already has.

**The fundamental expectation:**
- _"If I do something personalized like this, I expect a personalized result." – P13_
- _"If it's pulling my information, if I'm already logged in and it's got my information, I would like it to tell me if I'm eligible right off the rip or not, and then go from there." – P16_

**Using data the VA already has:**
- _"Since you've already logged in with your profile, so they know who you are… use an AI strategy… to do a search to everything that you could possibly qualify for… since they know your family information, where you're eligible for." – P21A_
- _"I feel like the VA at this point...  they know about me.  I think by the point that I have this website access, it should know my military, my, I don't know, it doesn't know my service.  It knows my discharge status, it knows all of this stuff." – P21B_

**Tailoring to enrollment status:**
- _"I've already exhausted my GI, so this should be tailored to me...  this page, when you click it should be tailored to your experience...  The whole VA website should be tailored to the individual." – P24_
- _"This right here is what you're eligible for. Click on this, fill this out, and it'll send to everything that you're eligible for...  Just give me everything I'm eligible for.  Don't make me go hunting for it." – P19_

**Filtering out irrelevant content:**
- _"Personalized list rather than a full list that you're like I don't they're like be like oh, it'd be sweet to get into this and be like, oh, you have to be over like 60% or 50% disabled.  I'm like, well, I'm not.  So I can't do that." – P8_
- _"Depends on how much benefits that you have.  So my benefit might be different from somebody else's." – P1_

**Smart recommendations based on profile:**
- _"Here's what we think you're eligible for. Here's some things you might not have known about that, you know, through your service you're eligible for from the VA.  And if I looked at, you know, mine, and it was 10, 12 things, and half of them I'd never heard of, I think that would be pretty impactful." – P20_

**Design implication:** Every benefit area serves two distinct user groups—first-timers who need eligibility criteria, application processes, and foundational information versus existing enrollees who need status management, updates, and next-level benefits. Dynamic content that adapts to enrollment status, service history, disability rating, and family composition would dramatically improve relevance and reduce frustration.  Start with healthcare as the pilot: test directing users without healthcare to application pathways versus users with healthcare to management tools.

---

### Finding 6: Three core benefits (Healthcare, Disability, Education) universally validated as transition priorities

Veterans unanimously confirmed that VA Health Care, Disability Compensation, and Education Benefits are the right three core priorities for new users.  These align with both the "mental model" of what the VA does and the practical realities of what newly transitioned Veterans need to secure first.

**The "three pillars" mental model:**
- _"The VA does three things" – P3_
- _"VA does your healthcare, VA does your education, and VA does your disability.  Those are the three pillars of the VA." – P4_
- _"The disability, the health care and the education benefits, that one was very, just clear.  Like a broad enough overview without being too broad and without being too focused in." – P8_

**Transition priorities:**
- _"If I'm just starting the transition process… these are the things you should be focusing on as you're transitioning." – P14_
- _"I think it's got the three most important things people care about when you get out...  this is great as far as like especially getting out for first time." – P13_
- _"Those are like the top three things that I've used so far, really, in the VA and VA. gov." - P20_

**Personal experience validation:**
- _"For me, those are like the top three things that I've used so far, really, in the VA and my VA.gov." – P20_
- _"I like the three because it's not too many choices.  I wouldn't want to be inundated with a whole bunch of choices.  But I think, you know, these three are probably the most likely.  For me, the most common things." – P12_

**Comprehensive coverage:**
- _"I don't know what else there would be beyond that. So that makes sense that most people start with those." – P17_
- _"Because it's like those are, those are the topics, those are the things that the Veterans want to look for is getting started in healthcare, disability compensation and education benefits." – P21A_

**Priority ranking - Disability first:**
- _"Monetary over everything else" – P15_
- Multiple participants indicated disability compensation ranks as their top priority due to its financial impact
- Healthcare often comes second, especially for those who need immediate medical attention
- Education follows as longer-term investment

**The right number of choices:**
- _"I like the three because it's not too many choices. I wouldn't want to be inundated with a whole bunch of choices." – P12_
- Three options provide sufficient coverage without overwhelming
- Leaves room for a fourth "catch-all" option like "Discover Your Benefits"

**Design implication:** Disability compensation typically ranks as Veterans' top priority due to its monetary nature and status as the most common reason for creating a VA. gov account, followed by healthcare which many participants described as their second priority. Education rounds out the core three.  These should remain the primary modal options, with disability compensation positioned first to match user priorities.  The three-option approach prevents choice overload while covering the vast majority of initial needs.

---

### Finding 7: Veterans reject "most people" framing and want personalized guidance

Language framing content around "what most people do" or crowd behavior doesn't resonate with Veterans. They view it as evidence the system doesn't understand their unique situation and prefer direct, personalized framing like "What would you like to do first?"

**Negative reaction to crowd-sourced framing:**
- _"Most people.  Because that's not true. Most people don't do that." – P11_
- _"I don't really care much about what most people are doing. I know why I'm here," – P3_

**Preference for personal framing:**
- _"I prefer the wording of the second, so...  Welcome to VA.gov we verified your account.  You can now start exploring benefits. What would you like to do first via healthcare, via disability, via, you know, education, whatever." – P13_

**Why "most people" language fails:**
- Suggests the system doesn't know the individual user's needs
- Creates distance rather than connection
- Implies a one-size-fits-all approach
- Contradicts expectations for personalized experiences in logged-in environments

**Better alternatives:**
- "What would you like to do first?"
- "Get started with:"
- "Choose a benefit to explore:"
- "Where would you like to begin?"

**Design implication:** Veterans want personalized guidance based on their unique situations rather than crowd-sourced recommendations. Framing like "most Veterans start with" creates disconnect by suggesting the site doesn't understand individual circumstances. Use direct, action-oriented language that empowers individual choice rather than suggesting what others have done.

---

### Finding 8: Show modal on first login only, but provide easy re-access

Most Veterans want to see the modal only on their first login to avoid pop-up fatigue. However, they expressed anxiety about "losing" access to it after dismissing and want an easy way to retrieve it if needed later.

**Strong preference for first-time only:**
- _"Generally I'm not a big fan.  Too many pop ups. If it's any more than like two, I probably start getting annoying." - P14_
- _"I think most of the time when you're going, you're going for a specific purpose… I don't think people do multiple things at once… once you do your one thing, then you're done with that." – P11_
- _"My impression of it is that it's like, hey, you just signed up.  Like, here, this is what we can do for you. So in that regard, the first time I log in would make sense." - P17_
- _"That's fine the first time, but if it comes up every time, then I'll be annoyed...  I would probably exit the website if it kept on popping up." -P24_

**Anxiety about losing access:**
- _"If it comes up every time, I would not use it, but I think maybe the first couple times you log in, it comes up...  maybe that first week or something." - P17_
- Participants asked "How would I get back to this?" multiple times
- Concern about dismissing it accidentally and not being able to return

**Nuanced view based on modal type:**
- _"I wouldn't mind if that [Action modal] popped up every time because it gave me the three basic things that I would be doing in there personally.  This one [Apply modal] is for first time only." – P11_
- Suggests some Veterans might tolerate persistence for high-value, focused guidance
- But majority strongly prefer one-time display

**Design implication:** Display the modal once on first login to reduce pop-up fatigue, then provide persistent access via a "Getting Started" link in the main navigation, a help menu option, or profile settings. Consider a small dismissible prompt like "Need help getting started?  View onboarding guide" that appears for the first week, then disappears.  Analytics should track re-access rates to validate the need. 

---

### Finding 9: Product tours are universally rejected by Veterans

Veterans have strong negative reactions to multi-step product tours, walkthroughs, and persistent pop-ups. They view them as obstacles to get through rather than helpful guidance, and immediately dismiss them without engaging with the content.

**Immediate dismissal behavior:**
- _"How many countless tours I've been on.  You know what I do with those tours? I just click away.  Click, click." - P1_
- _"Stop with the damn pop ups." - P15_

**Why tours fail:**
- Pop-up fatigue from other websites and applications
- Tours assume users want to learn the whole system before taking action
- Multi-step format feels like forced training
- Veterans want to accomplish specific tasks, not learn the entire interface
- Tours interrupt goal-directed behavior

**What Veterans want instead:**
- Contextual help when they need it
- Direct pathways to specific tasks
- Just-in-time guidance, not upfront training
- Ability to skip and come back later

**Design implication:** The onboarding modal should be a single, focused moment that helps Veterans choose their first action—not a multi-step tour of the entire platform. Veterans experience pop-up fatigue and immediately dismiss tours without engaging. If additional guidance is needed, provide it contextually within specific workflows rather than as a forced walkthrough.

---

## Additional Insights

*Insights that do not represent patterns but are still valuable.*

**Trauma-informed design needs:**
- _"For people like me with PTSD and stuff like this.  You're just literally ticking me off…We need straightforward answers, not a bunch of stuff." – P19_
- This highlights critical accessibility needs beyond screen readers—Veterans with cognitive disabilities and PTSD require simplified, direct content that reduces cognitive load and frustration

**Family benefit gap:**
- _"Since they know your family information, where you're eligible for..." – P21A_
- Points to opportunity area for dependent/family benefit pathways that aren't currently surfaced in onboarding

**VA facility proximity checking:**
- Multiple participants mentioned wanting to know if there's a VA facility near them before enrolling in VA healthcare
- Suggests integration with facility locator during healthcare enrollment process

**Interconnected benefits:**
- Several Veterans mentioned that disability rating unlocks additional healthcare benefits
- Current experience doesn't surface these connections or guide users through sequential benefit enrollment

---

## Recommendations

1. **Recommendation:** Implement the Apply-focused modal as the primary onboarding experience
   - **Supporting evidence:** Finding 1 - 88% preference rate; Veterans want direct paths to core benefits during transition
   - **Supporting evidence:** Veterans described current VA.gov as "overwhelming" without this guidance

2. **Recommendation:** Design a fourth "Discover Your Benefits" option with true personalization—comprehensive benefit lists based on profile data, not questionnaires
   - **Supporting evidence:** Finding 2 - Veterans expected personalized benefit lists, not additional questionnaires
   - **Supporting evidence:** Current tool creates frustration: "You're sending people all over the place" – P4

3. **Recommendation:** Use "About" and "How to" page formats that integrate eligibility context naturally, rather than leading with dense standalone eligibility pages
   - **Supporting evidence:** Finding 3 - Eligibility is psychological prerequisite
   - **Supporting evidence:** Finding 4 - Phase 2 "How to" pages significantly outperformed Phase 1 "Get" pages

4. **Recommendation:** Implement dynamic content that changes based on user enrollment status and benefit eligibility
   - **Supporting evidence:** Finding 5 - Veterans expect personalized content based on existing profile data
   - **Supporting evidence:** "If I'm already logged in and it's got my information, I would like it to tell me if I'm eligible right off the rip" – P16

5. **Recommendation:** Maintain three benefit options, prioritizing disability compensation first since it consistently ranks as top priority
   - **Supporting evidence:** Finding 6 - Three benefits universally validated; disability described as "monetary over everything else" – P15

6. **Recommendation:** Replace "Most Veterans start with…" framing with "What would you like to do first?"
   - **Supporting evidence:** Finding 7 - "Most people" language doesn't resonate; "I don't really care much about what most people are doing" – P3

7. **Recommendation:** Display modal only on first login with easy re-access method (e.g., persistent "Getting Started" link or help menu option)
   - **Supporting evidence:** Finding 8 - Veterans want first-time guidance but express pop-up fatigue
   
8. **Recommendation:** Avoid multi-step product tours entirely
   - **Supporting evidence:** Finding 9 - Product tours universally rejected; "Stop with the damn pop ups" – P15

9. **Recommendation:** Implement trauma-informed design principles for Veterans with PTSD and cognitive disabilities
   - **Supporting evidence:** Additional Insights - straightforward content reduces frustration for Veterans with PTSD

## Product User and Business Outcomes

*Explain how findings and recommendations align with the product's goals.*

### Desired User Outcome

This research supports our desired user outcome by reducing confusion and decision paralysis for newly transitioned Veterans, enabling them to quickly find and apply for the benefits they need during the critical transition period.

**How this research supports the user outcome:**
- The strong preference (88%) for the Apply-focused modal validates that direct pathways to Healthcare, Disability, and Education align with Veterans' priorities
- Identification of eligibility as a psychological prerequisite informs how to structure content to reduce anxiety and increase application completion
- Discovery that "About/How to" pages work better than dense anchor link pages provides clear direction for improving benefit landing pages
- Understanding that Veterans expect personalized content reveals opportunities to leverage existing profile data to create more relevant experiences

**Expected user impact:**
- Reduced time to first benefit application
- Decreased frustration during initial VA.gov experience
- Increased confidence in eligibility and application processes
- Improved satisfaction with VA. gov as primary benefits portal

### Desired Business Outcome

This research supports our desired business outcome by increasing action toward benefit application, including learning about eligibility or how to apply.  When Veterans can navigate directly to benefits they need, application rates should increase while support burden decreases.

**How this research supports the business outcome:**
- Application initiation rates should increase due to clearer pathways
- Medallia satisfaction scores for first-time users should improve
- Time-to-first-benefit-application should reduce
- Support contacts about "where to start" should decrease

The strong preference for the Apply-focused modal provides clear direction for implementation, reducing risk of deploying an approach that doesn't resonate with users. The identification of the "Discover Your Benefits" gap creates opportunity for future enhancement that addresses a real user need.

**Expected business impact:**
- 15% increase in benefit application initiation within 30 days of first login
- 5-point increase in Medallia satisfaction scores for new users
- Reduction in support tickets related to navigation and "getting started"
- Decreased bounce rate from benefit landing pages

## Key Performance Indicators

*Explain how findings will support KPI measurement.*

This research supports measurement of OCTO-DE Objective 1, KR 1: "Improve satisfaction with web and mobile products by 5 points."

### KPI 1: Increase benefit application initiation rate

This research supports measurement of this KPI by validating that the Apply-focused modal provides direct pathways to the three benefits new Veterans prioritize (Healthcare, Disability, Education).  The high preference rate and strong qualitative feedback suggest this intervention will reduce barriers to application initiation.

**Baseline measurement approach:**
- Track application starts within 30 days of first login (current state)
- Compare against same metric after modal implementation

**Expected impact:**
- 15% increase in application initiation within 30 days of first login
- Reduction in time-to-first-benefit-application by 5+ days

**How research supports this:**
- 88% preference for direct application pathways
- Unanimous validation of three core benefits
- Strong evidence that eligibility clarity reduces abandonment

### KPI 2: Improve user satisfaction scores for new users

**Baseline measurement approach:**
- Monitor Medallia feedback specifically from users with accounts less than 30 days old
- Track "ease of finding information" and "overall satisfaction" metrics

**Expected impact:**
- 5-point increase in satisfaction scores for new users
- Reduction in negative comments about "overwhelming" or "confusing" experiences

**How research supports this:**
- 100% of participants said modal "would have been helpful"
- Phase 2 "How to" pages received consistently positive feedback
- Clear preference for simplified, action-oriented content

### KPI 3: Reduce bounce rate from benefit landing pages

**Baseline measurement approach:**
- Track current bounce rates from Healthcare, Disability, and Education landing pages
- Monitor specifically for users arriving from the modal

**Expected impact:**
- 10% reduction in bounce rate from these three pages
- Increased scroll depth and time on page for users who arrive via modal

**How research supports this:**
- Phase 2 pages performed significantly better than Phase 1
- "How to" format with integrated eligibility reduces confusion
- Direct pathways from modal create clearer user intent

## Next Steps

*Outline immediate actions based on findings, including owners.*

**Immediate (Week of Nov 25, 2025):**
1. Share findings with stakeholders (PO, Design, Content, Product, Engineering) - David Pearl
2. Prioritize recommendations with product team - Product Owner
3. Schedule design workshop to finalize Apply modal - Design Lead

**Short-term (Dec 2025):**
4. Finalize Apply modal design incorporating recommendations - Design team
5. Begin engineering assessment for modal implementation - Engineering Lead
6. Audit and redesign benefit landing pages using "How to" format - Content team
7. Assess feasibility of dynamic content based on enrollment status - Engineering Lead

**Medium-term (Q1 2026):**
8. Deploy Apply-focused modal to production - Engineering team
9. Implement analytics tracking for modal interactions - Analytics team
10. Monitor Medallia feedback and usage metrics - Product Owner
11. Begin research planning for "Discover Your Benefits" redesign - David Pearl

**Long-term (Q2 2026):**
12. Conduct follow-up research to validate modal effectiveness - Research team
13. Begin dynamic content implementation (enrolled vs non-enrolled pathways) - Engineering team
14.  Expand personalization based on profile data - Product team

## Further research needed

*Identify gaps in the current study and areas requiring additional investigation.*

1. **Assistive technology testing** - This study included no screen reader or magnification users; need to validate modal and page designs with AT users to ensure accessibility
2. **Non-English speakers** - All participants were English-speaking; need to validate experience for Spanish and other language speakers
3. **Dynamic content validation** - Test actual implementation of enrollment-based content with both new and existing benefit users to validate personalization approach
4. **"Discover Your Benefits" redesign** - Conduct dedicated research to design the comprehensive, personalized benefit finder that Veterans expect
5. **Cognitive disability testing** - Given the trauma-informed design needs identified, conduct dedicated sessions with Veterans who have documented cognitive disabilities or PTSD
6. **Mobile-specific testing** - While 8 participants used mobile devices, need deeper testing of modal behavior on various screen sizes and mobile contexts
7. **Re-access behavior** - After implementation, study how often Veterans return to modal and what triggers the need to re-access

## Appendix

### Research documents
- [Product Outline](link-to-product-outline)
- [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-onboarding/research/2025-study/research-plan.md)
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-onboarding/research/2025-study/conversation-guide.md)
- [Participant Transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-onboarding/research/2025-study/Onboarding%20Research%20Transcripts)
- [Session Notes Spreadsheet](https://miro.com/welcomeonboard/WE9SNlg0YWs5aHJOeWRNZk9hckNmdDE3WDRMV0doZWhkV3AvVUY1K1UrelFxYmtJV09oMkZNQ3JOMmVoa1F5MGJ1ZGFDVTlWWmtxY1podU9pMDNodFNZMGdMQThYN05va2pCVzNZcjRCcXRQdXZYOStYVlYrOGlLVGp1WVE9PQ==)

### Tools used for Synthesis

- Zoom (transcriptions)
- Excel (session notes organization)
- Miro (affinity mapping)
- Figma (affinity mapping)
- Copilot (AI review)

### Pages and applications used

**Figma prototypes tested:**
- Apply-focused modal (Version A)
- Action-focused modal (Version B)

**Benefit landing pages:**
- Phase 1: "Get VA health care," "Get disability compensation," "Get GI Bill education benefits"
- Phase 2: "About VA health care," "How to apply for disability compensation," "Get GI Bill education benefits"

**Additional pages tested:**
- My VA (complete state / empty state)
- My HealtheVet (complete state / empty state)
- Discover Your Benefits tool landing page

### Other supporting documents created

- Affinity map in Muro showing themes across all sessions
- Comparative analysis of Phase 1 vs Phase 2 page performance
- Participant quotes database organized by finding

### Secondary research

- Analytics data on top entry points for new VA.gov users
- Medallia feedback from Veterans in first 30 days of account creation
- Support ticket analysis for "getting started" questions

### Research participants

#### Recruitment criteria

We recruited 16 Veterans who had separated from military service within the past 5 years and had created a VA.gov account. Recruitment was balanced between:
- 8 participants testing on desktop devices
- 8 participants testing on mobile devices

Criteria was adapted based on Veteran availability, with focus on recent separations to capture the "new to VA.gov" experience authentically.

#### Demographics

We talked to **16 participants.**

Audience segment:
* Veterans: 16
* Caregivers: 0
* Family members of a Veteran: 0

Gender:
* Male: 9
* Female: 7

LGBTQ+:
* Transgender: 0
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
* Gay, lesbian, or bisexual: 0

Devices used during study:
* Desktop: 7
* Tablet: 1
* Smart phone: 8
* Assistive Technology: 0

Age:
* 25-34: 3
* 35-44: 5
* 45-54: 4
* 55-64: 3
* 65+: 1
* Unknown: 0

Education:
* High school degree or equivalent: 0
* Some college (no degree): 3
* Associate's degree, trade certificate or vocational training: 2
* Bachelor's degree: 6
* Master's degree: 5
* Doctorate degree: 0
* Unknown: 0

Geographic location:
* Urban: 11
* Rural: 5
* Unknown: 0

Race:
* White: 10
* Black: 2
* Hispanic: 3
* Biracial: 0
* Asian: 1
* Native: 0

Disability and Assistive Technology (AT):
* Cognitive: 0
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0

#### Underserved groups we haven't talked to

This research does not include the perspectives of the following marginalized Veteran groups:

* Age 55-64+
* Cognitive Disabilities
* No degree
* Other than honorable discharge
* Immigrant origin
* Expat (living abroad)
* Native Hawaiian or other Pacific Islander
* First Nations (Canada)
* Native, American Indian or Alaska Native
* Gay, lesbian, or bisexual
* Transgender
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman
* Assistive Technology (AT) users

<img width="1028" height="598" alt="ResearchOnboarding-UnderservedVeterans" src="https://github.com/user-attachments/assets/7f445a94-8389-45da-8c1c-4ad93663d778" />

[Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers.  Data available in the table below this image]

#### A more accessible version of the table in the above image

### Recruitment of underserved groups in Welcome to VA.gov Onboarding

| Category | Target % | Target # | # in Study | Target Achieved?  | p1 | p3 | p4 | p8 | p11 | p12 | p13 | p14 | p15 | p16 | p17 | p19 | p20 | p21a | P21b | p24 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| All participants | Total | 16 | 16 | n/a | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| Assistive Tech (AT) users | Total | n/a | 0 | n/a | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Age 55-64+ | General | 50% | 8 | 1 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| Cognitive Disability | General | 50% | 8 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Mobile user | General | 50% | 8 | 8 | yes | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| Rural | General | 25% | 4 | 5 | yes | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 1 | 0 | 0 |
| No degree | General | 25% | 4 | 3 | no | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Other than honorable | General | 21% | 4 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Immigrant origin | General | 17% | 3 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Women | General | 10% | 2 | 7 | yes | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |
| Expat (living abroad) | General | 4% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Black or African American | Race | 15% | 3 | 2 | no | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 1 |
| Hispanic, Latino, or Spanish origin | Race | 12% | 2 | 3 | yes | 1 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| Biracial | Race | 3. 9% | 1 | 0 | no | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| Asian | Race | 2.7% | 1 | 1 | yes | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| Native Hawaiian or other Pacific Islander | Race | . 3% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| First Nations (Canada) | Race | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Native, American Indian or Alaska Native | Race | 1.6% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Gay, lesbian, or bisexual | LGBTQ+ | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Transgender | LGBTQ+ | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman | LGBTQ+ | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Beginner AT User | AT | 50% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Experienced AT User | AT | 50% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Desktop Screen Reader (SR) | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Mobile Screen Reader (SR) | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Magnification/Zoom | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Speech Input Tech (Siri, Dragon) | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Hearing Aids | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Sighted Keyboard | AT | 10% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Captions | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Switch Device | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Braille Reader | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
