# **Intent to File Comprehension: Research Findings**

**Office of the CTO \- Digital Experience (OCTO-DE), Pension and Burial Benefits Team**

Last updated: 12/2/2024

Elisabeth Chin [elisabeth.chin@coforma.io](mailto:elisabeth.chin@coforma.io), Daniela Jones [daniela.jones@coforma.io](mailto:daniela.jones@coforma.io) 

**Jump to:**

* [Hypotheses and conclusions](#Hypotheses-and-conclusions)  
* [Key findings](#Key-findings)
* [Recommendations](#Recommendations)
* [Further research needed](#Further-research-needed)
* [Who we talked to](#Who-we-talked-to)

## **Background**

Since relaunching the web-based version of VA Form 21P-527EZ in January 2024, the Pension team has shifted its focus to identifying opportunities to further improve the online filing experience for Veterans. One of these opportunities is adding intent to file (ITF) functionality to the online pension application to help Veterans maximize their potential benefits.

**What is an intent to file?**

An [intent to file](https://www.va.gov/resources/your-intent-to-file-a-va-claim/) tells VA that a Veteran plans to file a claim within a year, and it sets the effective date that a Veteran receives benefits from if they’re approved. The process enables Veterans to receive more back payments – dating back to the date VA was notified of their intent to file, rather than the date Veterans submit their claim.

The disability benefits form (21P-526EZ) and pension benefits form (21P-527EZ) on VA.gov automatically submit an intent to file for authenticated users, once they start their online application. Veterans can also complete a standalone intent to file form (21-0966) on VA.gov, by mail, or by phone.

**What has informed the intent to file experience on VA.gov so far?** 

The 526 disability team identified Veteran pain points through [extensive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/Intent%20to%20file%20Research/ITF%20Research%20Summary.md), learning about technical blockers that prevented Veterans from continuing their application if the ITF endpoint was unavailable. While these technical blockers were removed so that Veterans can continue working on their applications, the Pension team had an opportunity to build on their recommendations. 

We conducted a [baseline audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-05%20Intent%20to%20File%20Audit.md) of the Veteran’s intent to file experience across VA.gov. We validated that the benefits of intent to file are often described inconsistently, hard to find, or obfuscated by the complexity of their claims timeline. However, we still lacked the Veterans’ perspective to inform an ideal experience. 

This study aims to establish Veterans’ expectations and evaluate how content design might reduce confusion and instill confidence in their application journey. We hypothesize that these content-related learnings will be broadly applicable to the intent to file experience across VA.gov.

## **Research goals**

The key goals of this study are to:

1. Validate when and how intent to file messaging might be effective for Veterans and evaluate the usability of the proposed content and experience  
2. \[Secondary\] Understand Veterans’ expectations after an ITF is created  
3. \[Secondary\] Understand Veterans' existing mental model (if any) of ITF and their barriers to taking action to starting an application 

## **Research questions**

**Goal 1**

Validate when and how intent to file messaging might be effective for Veterans and evaluate the usability of the proposed content and experience

* When and where would information about the ITF date and its purpose be of benefit to Veterans?  
* What does a Veteran expect to see after starting their application \[clicks *Start the pension application*\]?  
* What aspects of the flow provide clarity or cause confusion?  
  * What questions or concerns do Veterans have about intent to file?  
  * What action do Veterans take (i.e. file an ITF or not) and what is their stated reasoning?  
* Is the call to action to start an application clear and compelling?   
* Do Veterans understand how the intent to file process impacts their potential benefits?

**Goal 2**

\[Secondary\] Understand Veterans’ expectations after an ITF is created

* What information, if any, are Veterans seeking about an ITF after one is created?

  * \[If they are seeking additional information\] Why?

* Where do Veterans expect ITF information to live after their intent to file is established? 

  * How might they troubleshoot if that information is not available?

**Goal 3**

\[Secondary\] Understand Veterans' existing mental model (if any) of ITF and their barriers to taking action to starting an application 

* Are Veterans familiar with the intent to file process? What are Veterans' perceptions of the ITF process?  
  * What information or experiences have shaped their perceptions of ITF and the ITF process?  
* What are Veteran perceptions of and exposure to intent to file?   
  * How is this similar and/or different for Veterans who have and have not filed a claim before?  
  * Do Veterans have clarity of the benefits and impact of ITF and how they might need to use the ITF date in the future?

### **Methodology**

We conducted hour-long moderated interviews with 7 Veterans over Zoom, from October 8 to October 11, 2024\.

We recruited for half of our participant pool to have filed a claim on VA.gov before, and half of our pool to not have filed a claim on VA.gov. Of the 7 Veterans we spoke to:

* 3 Veterans that had filed a claim on VA.gov before  
* 2 Veterans that started an application on VA.gov before but hadn’t submitted one before  
* 2 Veterans that had never filed a claim on VA.gov before

All participants walked through all 3 core scenarios below. In order to compare reactions to the scenarios that participants were first exposed to, half of the participants (3 participants) walked through the *Success* scenario first as seen in Flow A, and the other half (4 participants) walked through the *Processing* scenario first as seen in Flow B. We used [Figma prototypes](https://www.figma.com/design/9JKK5Eo43uJWEr66JPiebc/WIP---21P-527EZ---Pension-Benefits?node-id=2181-5007) with limited interactivity to facilitate the scenarios. 

**Core scenarios**

1. *Success*: An authenticated Veteran starts a new pension application; a new ITF is created.  
2. *Processing*: An authenticated Veteran starts a new pension application; the ITF endpoint is down.  
3. *Returning*: An authenticated Veteran returns to an in-progress pension application; they have an existing ITF. 

**Scenario flow A**

![Scenario flow A](../2024-10%20Intent%20to%20File%20Comprehension/images/scenario-a-flow.png)

**Scenario flow B**

![Scenario flow B](../2024-10%20Intent%20to%20File%20Comprehension/images/scenario-flow-b.png)

**Constraints**

* This was a moderated study, with some feedback prompted from questions. Participant feedback may not fully reflect a natural experience of going through the application.  
* We provided participants with the scenario that they were a Veteran that has already decided that they want to start a Veterans Pension application, and we also did not evaluate whether or not participants were eligible for Veterans Pension. As such, these findings are likely not representative of eligible Veterans' perspectives.  
* This study did not explore how an intent to file date might be applied and utilized within an application. Instead, we focused on how Veterans might be introduced to the intent to file process.  
* This study also did not evaluate all possible use cases for intent to file, including if a user’s prior intent to file had expired.

## **Hypotheses and conclusions**

1. Leading intent to file messaging with its benefits will encourage Veterans to start their application.  
   1. MAYBE TRUE: All participants understood that there was a benefit to starting their application process early and noted their first step as starting the application, but the majority of participants did not mention the CTA until prompted.  
2. The intermediary page after clicking "Start the pension application" will not hinder Veterans from continuing their application, after being introduced to intent to file on the introduction page.  
   1. LIKELY TRUE: Despite all participants mentioning that they expected to see the first page of the application, the status page did not hinder them from continuing on. All participants indicated that their next step would be to continue the application.  
3. The intent to file expiration will not cause significant concern from Veterans when described in proximity to action-oriented next steps.  
   1. LIKELY TRUE: We do not provide dates in the ITF *Processing* scenario. In the *Success* scenario, the mention of a deadline or expiry did not hinder participants from continuing their application.  
      However, when provided a due date, some participants raised questions around what the application burden entailed.  
      Some participants expressed that the date appeared to be a "good amount of time" and that it's "really good for someone who wants the directions spelled out for them", while others perceived it as potentially redundant.

## **Key findings**

1. Participants’ familiarity with intent to file and learning sources varied widely.

2. On the introduction page, participants did not engage with the intent to file content until prompted; they prioritized checking their eligibility. 

3. Participant questions largely centered around the application burden to get approved and how long it may take for VA to process their claim.

4. Although participants didn’t expect to be directed to the ITF status page after clicking ‘Start the pension application’, the page and its content was not disruptive to their application experience. 

5. Participants were confused by the term “potential start date" and had difficulty making sense of why the date wouldn’t be guaranteed.

6. Participants understood the consequences of their deadline when returning to their in-progress application, but it was unclear whether or not they grasped the financial impact.

## **Details of findings**

### **Finding 1: Participants’ familiarity with intent to file and learning sources varied widely.** 

Our participants had varied levels of familiarity of intent to file. Some had used intent to file and could describe how the process worked, one heard of intent to file but was uncertain of what it meant. While others, who hadn't filed a claim on VA.gov before, and heard of the backpay benefit before but did not associate it with intent to file. 

Their sources of learning also varied, including: from local Veteran centers, from family and friends that had received the benefits of intent to file, retroactively learning after personally receiving backpay, and proactive learning.

> P6: “I think it was accidental, honestly. This is way back when I filed my very first claim. That first time took over two years for me to get a rating. And when I got the rating finally, it was like I got all this back pay, and I was like, ‘What? What the heck is this?’”

> P7: “It's almost like a verbal thing. Like ‘Hey, I’m intending to file. I'm intending to go to Trader Joe's, I'm intending to join a gym’, whatever.”

### **Finding 2: On the introduction page, participants did not engage with the intent to file content until prompted; they prioritized checking their eligibility.** 

Most participants mentioned that they were unfamiliar with pension as a benefit, or that they were unaware that there were different types of pension. Relatedly, the same participants mentioned that the first thing they'd do on the introduction page would be to check their eligibility by clicking either, "Find out if you’re eligible for Veterans Pension benefits" or "Learn about the different types of pension". 

Most participants did not mention or engage with the ITF content at the bottom of the page. Once we prompted participants about the alert and its content, they reiterated the benefit of the intent to file process – that the sooner they start, the more payments they could get, and did not demonstrate any confusion or surprise from the content.

One participant mentioned that they thought the content was helpful, although they already knew how the process worked.

![ITF alert](../2024-10%20Intent%20to%20File%20Comprehension/images/finding-2-itf-content.png)

> P7: “Because that would be the smartest thing to do instead of filling out 20 pages in triplicate just to find out, hey you're not eligible anyway. It could take you immediately to, ‘Don't waste your time, wait till you're 65 to apply.’”

> P1: “‘How you get back payments\!’ Okay, so this one here says…in fact, after reading this, I think I probably ought to do this.”

> P5: “Yeah, that \[the alert\] seems normal. I think Social Security people do the same thing. They have a date that they file and a date they approve the application. And I just went through this process with a friend, that's why I know.”

### **Finding 3: Participant questions largely centered around the application burden to get approved and how long it may take for VA to process their claim.**

**Application burden**

Most participants were concerned with having to do more steps beyond what was described on the introduction page. This burden included having to schedule and go through with in-person appointments, and that they would need to complete those visits before their application deadline.

Given that the content in our prototype didn’t mention any potential appointments or visits to a VA location, participants’ experiences outside of this study (eg. prior claims filing experience, word-of-mouth, other VA content) likely contributed to these concerns. 

> P1: “What is the time commitment would be my biggest concern. I’m still sort of an active adult that’s not working, but I got a lot of things that I want to do. \[...\] That’s what I would want to know. What is the real commitment? What's the payoff?”

> P5: “There's going to be appointments and things I would have to go through throughout this process, I'm sure. So if I wasn’t able to get to one of those appointments, then what, do I have to start over?”

**Claims timeline**

Most participants interacted with the "What happens after you apply" dropdown on the introduction page, and some expected to see a more detailed estimate for how long it might take for VA to process their claim.

Some participants also noticed on the introduction page that we estimate the application taking about 30 minutes. They mentioned that it seemed short but were glad to have an estimate to benchmark the amount of time to complete it, ideally, in one session.

![Step 3 on the introduction page](../2024-10%20Intent%20to%20File%20Comprehension/images/finding-3-step3.png)

> P6: “Having it here \[Step 3\] just as a general, ‘Hey, overall from start to finish, these take about this amount of time.’ Because I was shocked how long it took when I first filed. I think it was over 2 years. \[...\] It was a nightmare.”

> P9: \[Anything else you expect to see here?\] "Maybe a general timeframe of how long applications are currently taking to process and what you expect for an average wait time depending on what you're filing. I know mental health is like 90 day requirements for evaluations. But when we have guys submit claims, we put it in, and they're calling back to the DAV and asking 2-3 months in, 6 months in, 8 months in, trying to follow up to see where in the process the claim is at.”

One participant in particular remarked that the information about intent to file makes more sense if Veterans are informed that the timeline for claims is long, and that the back payments are more substantial as a result. 

> P6: “This \[information about ITF\] makes sense, but it makes even more sense in the context of 'This could take 12 months'. If you didn't know that, you’d be like, what's the difference if I file now or next month, if it’s a 30 day process?"

### **Finding 4: Participants didn’t expect to be directed to the ITF status page after clicking ‘Start the pension application’, the page and its content was not disruptive to their application experience.** 

All participants expected to be brought to the first page of the application after clicking, ‘Start the pension application’.

![The first three screens of our prototype flow](../2024-10%20Intent%20to%20File%20Comprehension/images/finding-4-flow.jpg)

When they were directed to the status page instead, some participants perceived the page as "redundant" or "unnecessary" because it reiterated similar information from the introduction page.

> P3: "I would just continue. And hopefully it would go to the application...Cause if there’s another page, that’s when I’m going to start getting frustrated."

When first encountering the *Processing* scenario that did not display a date, some participants expected to see their application start date, or their saved effective date for benefits on the status page.

Whereas some who first encountered the *Success* scenario reacted to the status page positively.

> P9: “Alright, that's good there...that was information I was thinking for the previous page, but it makes sense to have it there, where you’re letting the Veteran know. And having it as its own page really emphasizes that these are the dates, and this is what’s happening with the intent to file and the back pay.”

Despite these varied reactions to the status page, participants were not hindered from continuing their application. 

Similarly, all participants expected to be directed to the last step they were working on after clicking “Continue your application”. The ITF status page was omitted from the *Returning* scenario, and participants did not identify any information they felt were missing. 

As a closing question, we asked participants how their experience impacted their understanding of intent to file. Some participants remarked that their experience with the prototype clarified their understanding of intent to file, while other participants that had submitted an ITF before described that the experience did not change their understanding.

> P5: “So I had a friend that I went through this whole process with, but I don’t ever remember seeing this whole intent to file thing. Maybe it was just me because I wasn't paying attention, but it seems like it should be. It seems like a good thing for people to know."

> P3: "I think it's the same. \[...\] It's like most of my experiences on VA.gov. It's pretty simple, self-explanatory, it walks you through the steps. There's not a lot of wording, it's fairly quick and easy."

### **Finding 5: Participants were confused by the term “potential start date" and had difficulty making sense of why the date wouldn’t be guaranteed.**

Specifically, the word "potential” in “potential start date" was confusing for most participants. They interpreted that their start date would not be guaranteed because the date depended on the Veteran’s circumstances, when VA ultimately approves their claim, or unknown factors. This perception differed from our intent of informing Veterans that their start date was dependent on whether or not they would be approved. 

![Highlights of qualifying language in our prototype](../2024-10%20Intent%20to%20File%20Comprehension/images/finding-5-language.jpg)

One participant referenced the Monday to Friday call center operating hour and considered that if they submitted their intent to file on a weekend, it would not be received by VA until the next working day. According to [38 CFR 3.110](http://ecfr.gov/current/title-38/chapter-i/part-3/subpart-a/subject-group-ecfr63da83ba671b92b/section-3.110), this policy may be true for intent to file submissions handled over the phone or by mail but needs to be confirmed with our VBA stakeholders.

> P3: “Well...I don't know why it uses the word 'potential.' I mean, to me, that just says a start date for your payments. Throwing in that ‘potential’, I guess that means that potentially they might not start on that date? But I don't know why.”

> P9: \[When do you think that potential date might be?\] "It could possibly be up to a week from filling out this form and doing the first save \[...\] Looking at it saying, ‘We’re here Monday through Friday’, if I’m filling this out on Saturday, I would suspect that the potential start date wouldn’t be until the Monday or Tuesday once it had a chance to be reviewed by somebody.”

However, even though participants did not know why their potential start date may not be the day they started their application, the wording didn't prompt them to stop or leave the application to seek out clarity. They reiterated that their next step would be to continue through application.

### **Finding 6: Participants understood the consequences of their deadline when they returned to their in-progress application, but it was unclear whether or not they grasped the financial impact.**

In the *Returning* scenario, most participants recognized that after the due date displayed, they would have to start a new application, and that they risked resetting their start date for benefits. The date displayed and its explanation did not raise concerns from participants. 

However, it was unclear whether or not all participants understood that less back payments was the consequence of a later start date.

![Alert when returning to an in-progress application](../2024-10%20Intent%20to%20File%20Comprehension/images/finding-6-date.png)

> P8: “They're basically saying, finish this application that you started on July 10, or you need to start a new application, and you're gonna lose your old potential start date. Your new start date will be when you start this new application.” 

> P9: “Also that last sentence too. Really lets the person know to get it complete by that date, otherwise it will financially impact you."

One participant incorrectly assumed that by starting a new application before it was due, their ITF date would still be reset. The existing logic on VA.gov ensures that an intent to file is active for one year, regardless of whether or not a user restarts a new application. 

### **Secondary Findings**

* When we asked participants how they expected to track their application/ITF deadline, participants indicated that they would track the date on their personal calendar. None explicitly expressed that they expected VA to notify them through other means.

  * One participant incorrectly assumed that they could find this due date again on the VA mobile app, when this date is only displayed on eBenefits or by contacting the call center.

* Some participants noted hesitancy to ask ITF-related questions by calling VA, due to unpleasant prior experiences, potential challenges getting someone on the phone, or preferring email. 

  * Some participants also mentioned a variety of ways to potentially troubleshoot further questions about intent to file: by asking VSOs, a resource at their senior center, looking for a contact email, visiting Reddit, and continuing the application in the hopes of more detail.  

  * The few participants that noticed and mentioned the option to call to confirm their potential start date also said that they wouldn’t bother to call. 

* None of the participants used the acronym "ITF", and instead referred to the process as their "intent to file".

## **Additional insights**

* Given that the provided scenario informs participants that they are already signed in, several participants expected prefilled user information as part of their application experience.

* None of the participants mentioned the loader or the text beneath it.

* Some participants joined research sessions from a different device than we had expected. In the future, identifying the specific type of mobile device (tablet, iPhone, Android) participants will use ahead of time can help us effectively troubleshoot any technical difficulties and help us determine the appropriate prototype to test with them based on their screen size.

## **Recommendations**

The messaging approach we tested was developed through close collaboration with CAIA and the best practices they provided. Given that our participants generally indicated comprehension of the intent to file process, we recommend implementing the flow as a foundation. 

However, because our Veteran participants did not focus on or provide direct feedback on our intent to file content, our recommendations are grounded in possible improvements that might set clearer expectations around application burden. 

1. Reframe qualifying language, such as “potential start date” to provide reasoning around why VA cannot make guarantees (eg. the saved benefits start date is dependent on getting approved).  
2. Avoid displaying the intent to file status page every time a user returns to an application so that Veterans are not disrupted from working on their application.  
3. Describe what happens after an application or intent to file expires to provide context around the dates we display.

4. Explore how we might set expectations for how long a claim might take to process, so that Veterans have the context to understand the benefits of the intent to file process (ie. more back payments over a longer stretch of time).  
5. Re-evaluate the time estimate under Step 3 on the introduction page to avoid misleading expectations.  
6. Clarify what channels Veterans can expect VA will communicate with them.

## **Next steps**

While this study didn’t yield surface specific problem areas, our team has an initial set of open questions to guide what we might achieve with our intent to file experience, and how to do so in the near future. These questions include but are not limited to:

**For Engineering**

* Following our learnings on Zero Silent Failures, what additional failures or edge cases have we not addressed for ITF?  
* If we find that a Veteran is missing a participant ID, is that missing for Pension specifically, or V0, or ITF, or across all applications?

**For VBA**

* In what scenarios might Veterans not get retroactive payments, even if they are approved for Pension benefits and submit within the ITF timeline?  
* Is creation or receipt of ITF impacted by weekends/holidays? Including electronic submission?  
* Is there flexibility in how we might display the respondent burden estimate?

**For CAIA**

* What existing standards, if any, might conflict with our recommended content changes?  
* In what cases would we want to encourage Veterans to start a new application?

In the immediate term, our team will prioritize:

1. Getting a shared understanding of what we've learned cross-functionally to refine our ITF goals  
2. Identifying where we need technical discovery, as we adapt our recommendations to more complex cases  
3. Sharing our learnings with other teams, including CAIA, 526, and Veterans Facing Forms, in an effort to shape a consistent experience sitewide

## **Further research needed** 

We recommend further evaluating the effectiveness of the introduction page and the ITF status page in our future study with pension-eligible Veterans, as well as any changes to the user experience that ties intent to file with the statement period that Veterans should reference to accurately complete their application.

In terms of additional use cases, we did not evaluate identity verification or other errors that may impact an intent to file, but VA.gov experiences could benefit from learning about Veterans’ comprehension of verified accounts and their relationship to intent to file.

## **Appendix**

* [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-10%20Intent%20to%20File%20Comprehension/research-plan.md)  
* [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-10%20Intent%20to%20File%20Comprehension/conversation-guide.md)  
* [Transcripts](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?newTargetListUrl=%2Fsites%2Fvaabdvro%2FShared%20Documents&viewpath=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FForms%2FAllItems%2Easpx&isAscending=false&id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2F0%20%2D%20Benefits%20Portfolio%20%2D%20General%2FResearch%20Recordings%20%2D%20Veteran%2DStaff%2DVSO%2F2024%2D10%20Intent%20to%20File%20Comprehension&sortField=Modified&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72)

## **Tools used for synthesis**

[MURAL](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1727466897798/418be4e4760965f98f1008eb07c92fd9020071f8)

## **Pages and applications used**

[Prototypes used in testing](https://www.figma.com/design/9JKK5Eo43uJWEr66JPiebc/WIP---21P-527EZ---Pension-Benefits?node-id=2181-5007)

## **Secondary research**

[527 Intent to File Audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-05%20Intent%20to%20File%20Audit.md)

[526 Intent to File Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/Intent%20to%20file%20Research/ITF%20Research%20Summary.md)

## **Who we talked to**

**Recruitment criteria**

We talked to **7 participants.**

Audience segment:

* Veterans: 7  
* Caregivers: 0  
* Family members of a Veteran: 0

Gender:

* Male: 6  
* Female: 1

LGBTQ+:

* Member of LGBTQ+: 1

Devices used during study:

* Desktop/laptop: 5    
* Tablet: 1  
* Smartphone: 1  
* Assistive technology: 0

Age:

* 25-34: 0  
* 35-44: 4  
* 45-54: 0  
* 55-64: 2  
* 65+: 1

Education:

* High school degree or equivalent: 0  
* Some college (no degree): 0  
* Associate's degree, trade certificate or vocational training: 4  
* Bachelor's degree: 1  
* Master's degree: 2  
* Doctorate degree: 0

Geographic location:

* Urban: 2  
* Rural: 5

Race:

* White: 6  
* Black: 0  
* Hispanic: 1  
* Biracial or multiracial: 0  
* Native: 0  
* Asian: 0

## **Underserved groups we haven’t talked to**

We have completed the \[VA Recruitment Checker for marginalized Veteran groups.\]

This research does not include the perspectives of the following marginalized Veteran groups:

* No degree  
* Immigrant origin  
* Other than honorable  
* Expat (living abroad)  
* Biracial  
* Asian  
* Native

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-10%20Intent%20to%20File%20Comprehension/images/who-we-talked-to.png" width=500>
