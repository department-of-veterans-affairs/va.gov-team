# 2026-01 Dissatisfaction Discovery - Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Sign in, Identity**

**Date:** 01/2026

**Contacts:** Clayton Zook, Charlye Tran, Megan Driscoll

## Executive summary

Sign in is a critical gateway to VA online  services, benefits, and care. When sign in fails or creates friction, Veterans may be blocked from accessing earned benefits, support costs increase through call centers and escalations, and repeated failures erode trust in VA’s ability to reliably serve them.

In this work, we’re establishing dissatisfaction measures across several feedback channels. We analyzed and synthesized multiple data sources to assess the quality and availability of the data.  

The most promising measurements of user dissatisfaction that we've looked at are the Medallia intercept surveys for a numeric dissatisfaction value. For uncovering painpoints and for roughly quantifing if more or fewer veterans are being affected by painpoints compared to a previous period, then feedback surveys, call center data, and support data from credential service providers can be the most helpful. These represent feedback and support touchpoints where Veterans have given up on self-service and reached out for intervention.

### Dissatisfaction Score

We are starting with an MVP measure to assess how it works over time. We're giving a numeric value we can tract based off a negative sentiment score from the Medallia intercept survey. We'll also track a second number for volume, the number of responses for the Medallia feedback survey will point to how widespread disatisfaction might be.

- Dissatisfaction for Sept 2025 - 68.8%
   - This is lower than, or better than, preceding months - in otherwords less dissatisfaction
- Dissatisfaction volume for Sept 2025 - 458
   - This is lower than, or better than preceding months - in otherwords less volume of dissatisfaction

### Top themes

Among measurable sources of direct user feedback, we found these top themes for recent sign in dissatisfaction:

* Identity verification  
* Technical errors  
* Sign-in loop  
* MFA  
* Personal information and digital access  
* UX pain points

We mapped top themes to available topics, categories, and tags for quantitative data sets for the Q3 timeframe to establish a baseline scale of volume for each theme. 

In the full findings section, we layer additional insights and evidence from other qualitative and quantitative data sources to provide detailed findings about specific pain points contributing to dissatisfaction. We also make recommendations to iterate on dissatisfaction measures.

## Contents

* [Context and definitions](#context-and-definitions)  
* [Measuring sign-in dissatisfaction \- methodology and data sources](#measuring-sign-in-dissatisfaction---methodology-and-data-sources)  
  * [Quantitative Data Sources](#quantitative-data-sources)  
  * [Qualitative Data Sources](#qualitative-data-sources)  
* [Correlating data sources](#correlating-data-sources)  
* [Findings for sign-in dissatisfaction](#findings-for-sign-in-dissatisfaction)  
  * [Dissatisfaction score](#dissatisfaction-score)  
  * [Overall themes](#overall-themes)  
  * [Detailed findings of themes](#detailed-findings-of-themes)  
* [Recommendations](#recommendations)

## Context and definitions

Sign in is a foundational service used by almost any Veteran who is using another VA.gov product. Since more folks interact with sign in than almost any other digital product, it has high visibility. However, when sign in functions as expected, it tends to go unnoticed, resulting in limited positive feedback or survey scores across the many channels we looked to. Using standard VA satisfaction metrics like CSAT, the sign-in product has historically scored much lower than other digital products.

We see this when comparing how much positive vs negative feedback received on through the main survey channels \- overwhelmingly negative. But comparing how many individuals successfully signed in vs how much total feedback, we hear from only a very small percentage of voices \- about 3 million monthly active users vs thousands of qualitative and quantitative feedback points submitted across the various channels.

This makes sense. When someone faces an issue signing in, it often blocks their ability to complete any other task, so even issues that affect a relatively small number of users will generate complaints. This depresses satisfaction metrics, and doesn’t give us an accurate view from that angle.

We define dissatisfaction as people’s negative sentiment which is made up of measurable friction plus measurable failure during sign-in. 

* Friction — Unnecessary obstacles that make even simple tasks difficult \- like confusing navigation, outdated personal information needed to sign in, and technology requirements that exclude users without smartphones. These often increase cognitive load, mean hardships for certain communities, and drive more Veterans to seek support.  
* Failures — Breakdowns in flows where users cannot accomplish their goals despite correct actions. Some examples include verification loops that never resolve, sign-in processes that authenticate but still deny access, account linking that fails despite valid credentials. These block access, create uncertainty about system status, and cause Veterans to abandon sign in.

Dissatisfaction can be quantified using the sentiment of user feedback, the volume of Veterans reaching out through support channels, and known errors, issues, and outages. This incorporates user perception and feelings and the reality of known problems

## Measuring sign-in dissatisfaction \- methodology and data sources

Sign-in is a background service that’s rarely noticed when functioning correctly. Most feedback channels naturally skew negative because users don't stop to comment when authentication succeeds seamlessly. However, this negative skew makes these sources particularly valuable for identifying pain points, recurring failures, and moments where the experience breaks down.

The focus of this work is calendar Q3 (July, August, September) of 2025\. During this timeframe, there were between 2.9 \- 3.06 million active monthly users signing in on VA.gov and the VA mobile app. 

| Timeframe | Monthly active users | Total authentications |
| :---- | :---- | :---- |
| July 2025 | 2.92 million | 12.59 million |
| August 2025 | 2.91 million | 12.08 million |
| September 2025 | 3.06 million | 12.1 million |
| **Q3 2025** | 2.9-3.1 million | 36.77 million |

To understand dissatisfaction with sign-in, we analyzed multiple data sources individually, then triangulated patterns across datasets to identify cross-source themes and corroboration.

Our analytical approach involved:

* Individual dataset analysis — Examining each source's unique characteristics, scale, and limitations  
* Cross-source pattern identification — Identifying themes that appeared across multiple datasets  
* Mapping how those themes are captured in current data and mapping them to common tags  
* Data correlation — contextualizing top themes with additional qualitative and quantitative insights from other data sources in detailed findings  
* Sentiment analysis scoring — Calculating sentiment by theme and feedback channel using ML.

### Quantitative Data Sources

#### Intercept Surveys \- Medallia

* Volume of responses analyzed: 2,140 ( Q3 2025); 608 (Q2 2025). Also referred back to past data including 1,328 responses (Q1 2025); 1,109 (Q4 2024\)  
* Coverage: Randomized pop-up surveys on VA.gov pages related to identity and sign-in  
* Limitations: Difficult to capture successful sign-ins due to short dwell time on page, creating a negative skew; responses referencing sign-in often reflect problems or friction  
* Insights provided: High-quality, large-scale quantitative and qualitative feedback; overall satisfaction ratings and task completion data  
* Methodology: Pulled data from pages owned by our team or related to identity and sign-in products; used VA GPT to tag data; manually checked a portion; used "what is your overall satisfaction with this site" question to assess sentiment (scores of 4-5 counted as positive, 3 as neutral, 1-2 as negative)  
* Key themes: sign-in transition, undefined  errors, sign-in looping, MFA, verification

#### Feedback Surveys \- Medallia

* Volume of responses analyzed: 1,559 (Q3 2025); 1,819 (Q2 2025). Also referred back to past data including 793 (Q1 2025); 192 (Q4 2004\)   
* Coverage: User-initiated feedback via "feedback" button at bottom of VA.gov pages  
* Limitations: Shows much stronger negative sentiment than intercept surveys; attracts users who are highly motivated to share feedback, often due to frustration; not representative of all users  
* Insights provided: Qualitative responses valuable for highlighting the most painful sign-in issues; strong signal for dissatisfaction  
* Methodology: Pulled data from pages owned by our team or related to identity and sign-in products; used VA GPT to tag data; manually checked a portion; applied 44 tag options to organize entries (Q1), 39 tag options (Q4); used "Please rate your experience with VA.gov today" to assess sentiment (scores of 4-5 as positive, 3 as neutral, 1-2 as negative), with exceptions made when open field text didn't match the rating  
* Key themes identified: Undefined issues and errors, Terms of Use not showing a button, verification, issues signing into the mobile app, sign-in looping

#### Call Center Data \- HRC technical support

* Volume analyzed: 1,618 calls in Q3 2025; 84 calls in Jun 2025  
* Limitations: quantitative measure of support topics only, limited reporting available  
* Insights provided: Volume of support interactions categorized by topic and subtopic  
* Key themes identified: MFA, technical errors

#### Support Data from Credential Service Providers (CSPs)

##### Login.gov

* Volume analyzed: 28,080 cases from Q3 2025; that’s part of the over 90,000 calls from January to November 2025\. These made up the highest-volume topics and subtopics from overall support data  
* Limitations: CSP categorization must be reconciled with our tags  
* Insights provided: Captures downstream support demand related to authentication issues; reflects friction severe enough to require external support. Provides more granular data with a number of verify issues  
* Key themes identified: Verification; personal information, MFA, create account

##### ID.me

* Volume analyzed: 11,184 calls across 3 months, partially in Q2 2025 and partially in Q3 2025   
* Limitations: CSP categorization must be reconciled with our tags, topic granularity missing on some data we’re interested in  
* Insights provided: Offers topic granularity on some VA errors. Captures downstream support demand related to authentication issues; reflects friction severe enough to require external support, show that fewer than 20% of calls are escalated to VA  
* Key themes identified: technical errors

### Qualitative Data Sources

#### Medallia Free-Text Feedback

* Volume analyzed: All open-text responses from 1,386 feedback surveys and 767 intercept surveys  from Q3 2025; 223 intercept surveys from Q2 2025; and looked back on prior quarters as well  
* Insights provided: User perspectives on sign-in failures and friction; detailed qualitative context on failure states; language and terminology used by users  
* Methodology: Same tagging approach as quantitative analysis; researcher then manually reviewed a portion of responses to identify failure patterns

#### App Store Reviews

* Volume analyzed: 487 mobile app store reviews in Q3 2025; 218 reviews for Q2 2025  
* Limitations: Volume is relatively low; *reviews are only based on Veterans interactions with the VA mobile app which has limited functionality when compared to VA.gov*  
* Insights provided: Sentiment analysis and thematic review provide direct, explicit feedback tied to user complaints; reviews tend to be highly actionable and clearly express dissatisfaction related to sign-in failures or confusion  
* Methodology:   
* Key themes identified: Sign-in looping; MFA; verification technical errors; credential migration

#### Public Forums and VA News Comments

* Coverage: Posts from public message boards, social media forums, and VA news article comments from April 1 \- September 30, 2025  
* Limitations: Not statistically representative; skews heavily negative  
* Insights provided: Surfaces acute pain points, emotional impact, and real-world consequences of sign-in failures that may not appear in other channels  
* Methodology: Evaluated public online forums to identify and synthesize top dissatisfaction themes, analyzed negative sentiment with Claude  
* Key themes identified: Credential migration, identity verification, sign-in looping, MFA, technical errors, data mismatch between systems, access barriers for Veterans in rural locations (in-person proofing, cell service)

### Correlating data sources

Qualitative and quantitative data sources reviewed to provide context on dissatisfaction measurements and findings.

#### Frontend Error Reports \- Datadog and PagerDuty

* Coverage: Frontend authentication error logs, outage, and incident data  
* Limitations: Not a measure of sentiment, reporting on errors starts on November 21, 2025  
* Insights provided: Shows how often users encounter specific issues, errors, or failures across the site; helps quantify failure frequency and connect technical disruptions to pain points and spikes in complaints and support activity surfaced in other datasets  
* Key themes identified: Some issues generate a noticeable increase in sentiment responses across channels

#### Identity Metrics Dashboard \- Datadog

* Coverage: authentication metrics for any time period of interest  
* Limitations: Limited in surfacing sentiment or themes  
* Insights provided: Offers high-quality operational context for sign-in performance; helps frame dissatisfaction signals within broader usage and reliability trends  
* Methodology: Compared metrics to spikes in sentiment responses  
* Key themes identified: Adds perspective to how many Veterans are affected by a given issue; some issues generate a noticeable increase in sentiment responses across channels;

#### Past Identity Research

* Volume analyzed: 15 prior VA.gov studies with sign-in-related findings  
* Limitations: This data cannot be used to measure dissatisfaction at scale  
* Insights provided: Valuable for resurfacing long-standing pain points; validates whether current issues align with historical patterns  
* Methodology: Used GitHub Copilot to search through past research findings and recommendations relevant to identity and sign-in products; manually reviewed relevant transcripts to consider relevance of individual quotes even when study didn't include a full finding or recommendation toward identity or sign-in products  
* Key themes identified: Verification is difficult; MFA is a hardship for some Veterans


#### Call Center Data \- MyVA411

* Volume analyzed: 24,823 authentication-related calls (Q1 2025); 14,480 calls (Q4 2024\)  
* Coverage: Calls to the VA.gov help center related to authentication  
* Limitations: Data comes pre-classified with Category and Type that have some but not complete correlation to researcher tags; Subject data is limited but sometimes offers enough information for tagging; some minimal risk of PII in Subject field (open text added by call center representative); further ticket data available but would be highly likely to include PII; case categorization by representatives may not align with technical root causes  
* Insights provided: Represents users who were unable to resolve issues on their own; call volume and themes are strong indicators of breakdowns in sign-in experience  
* Methodology: Reviewed pre-classified Category and Type fields; researcher applied additional tags based on Subject lines; excluded entries that were clear duplicates or had no information  
* Key themes: identity verification, technical errors, MFA

#### Temporal Context

* Major Authentication System Changes  
  * MHV credential deprecation (January 31, 2025 deadline): Forced migration from legacy credential provided critical context for Q1 2025 data, which showed a 591.7% increase in intercept survey responses and 470.6% increase in negative responses compared to Q4 2024  
  * The Q4 2024 document noted: "The sign in experience has had major changes over the last 6 months, namely with the deprecation of 2 credential (sign in) options... While over the long run we believe this will increase satisfaction with sign in, in the near term it's no surprise that it decreased."  
* Correlated Data Analysis  
  * Incidents vs. Sentiment Responses  
  * Methodology: Compared PagerDuty incident metrics and Datadog Identity Metrics to spikes in sentiment responses  
  * Finding: Some issues generate a noticeable increase in sentiment responses across channels


## Findings for sign-in dissatisfaction

This section summarizes the key findings from our analysis of sign-in dissatisfaction across the data sources described above. The findings highlight recurring themes related to both user experience and system reliability, showing where and how dissatisfaction most often occurs. Rather than focusing on isolated incidents, this section surfaces patterns that consistently impact access and drive negative outcomes for veterans.

Negative sentiment fluctuates across time, and so does total responses, making both important metrics to consider when measuring dissatisfaction. For example in Q4 2024, 88.5% of feedback survey responses were negative, with 90.7% of users reporting they could not complete their intended task. Q1 2025 saw a dramatic surge during the MHV credential deprecation, with negative responses increasing 470% and total survey volume jumping nearly 600%.

### Dissatisfaction score

After considering many measurements we could take individually or combine together to come up with a dissatisfaction score for sign in, we decided to go with an MVP measure. This will allow us to see how it works over time. It also gives us, not just the permission, but the mandate to further refine and improve this score over time.  
For this reporting, we’ll use measures for negative sentiment from the Medallia intercept survey alongside the volume of survey responses for the intercept and for the Medallia feedback surveys. Negative sentiment from Medallia intercept seems to be the least biased metric as a single source for assigning a numeric dissatisfaction score. For now we’ll track volume or responses for both Medallia surveys to indicate how widespread dissatisfaction is.

* Medallia intercept negative sentiment score \- the lower the dissatisfaction % the better  
  * Sept 2025 \- 68.8% dissatisfaction sign in  
  * This is lower than the preceding months  
    * Aug 2025 \- 72.6%  
    * July 2025 \- 69.2%  
    * Average for Q2 2025 \- 77.9%  
  * Methodology note: this number is derived from   
    * tagging all intercept surveys as positive or negative sentiment (taking into account both the numeric score given by the respondent and open response text they gave)  
    * Dividing negative sentiment by total responses   
* Volume of responses \-  fewer responses implies fewer folks with feedback, so generally good. However\! Fewer responses could imply apathy, or feelings of not being heard  
  * Feedback survey, Sept 2025 \- 458  
    * This is lower than the preceding months  
      * Aug  2025 \- 572  
      * July 2025 \- 530  
      * Average for Q2 2025 \- 606  
    * Methodology note: this number is derived from taking a count of feedback surveys  for the question “were you able to do your task?” as this is the first question and so the most likely to be responded to, even when other questions are left unanswered  
  * Intercept survey \- Sept 2025 \- 895  
    * Aug  2025 \- 876  
      * July 2025 \- 369  
      * Average for Q2 2025 \- 202   
    * Methodology note: this number is derived from taking a count of intercept surveys with answers to the question “Please rate your experience with VA.gov” as this is the first question and so the most likely to be responded to, even when other questions are left unanswered

### Overall themes

From close analysis across multiple qualitative and quantitative data sources, we  identified several themes. Each theme contains specific issues contributing to dissatisfaction. Each theme represents a pattern of failure or friction — or both — that prevents Veterans and their caregivers from successfully accessing VA services. These are not isolated complaints but systemic problems evidenced across multiple data sources and persisting across multiple quarters.

Themes

* Identity verification  
* Technical system failures  
* Sign-in loop  
* MFA  
* Personal information and digital access  
* UX pain points

#### Measurement of top themes - Q3 2025 

We’re establishing benchmarks for these data sources with a focus on **Q3 2025 (July 1 \- September 30, 2025\)** following the completion of the secure sign-in transition initiative. 

Related topics and tags were mapped to these themes to calculate the scale and frequency these issues arise across various channels. This is the simplest way to move forward with an MVP. Future iterations of this measurement could track several numbers, choosing only one to follow, or coming up with a composite score and a method to weight several scores for combining.

| Note: [ID.me](http://ID.me) support data to be added |
| :---- |

| Theme | Feedback channel | Volume in Q3 2025 | Correlating data | Detailed findings |
| :---- | :---- | :---- | :---- | :---- |
| Identity verification | Intercept survey | 179 comments tagged | Return rates from /verify indicate drop-off Top theme in negative sentiment on public forums MyVA411 call center data from previous quarters illustrates \~50% cases tagged as identity verification Related to cases of verify loops where Veterans are asked to verify their identity again | Personal information not matching between systems Uploading identity documents Digital access (smartphone adoption) Identity verification looping creates high negative sentiment |
|  | Feedback survey | 201 comments tagged |  |  |  |
|  | HRC | Not captured |  |  |  |
|  | Login.gov support | 14,473 cases |  |  |  |
| Technical errors | Intercept survey | 225 comments tagged | Top case driver for HRC Top reason ID.me support cases are transferred to VA LG99 errors are a top support topic Data mismatch theme appears in public forum comments FE error logs established for future monitoring 007 errors | Personal information incorrect or mismatched in other systems (007 errors) Session timeout errors Client-side errors (400) can be resolved with clearing cache/cookies Incidents or outages lead to errors but may be caused by other services |
|  | Feedback survey | 145 comments tagged |  |  |  |
|  | HRC | 919  cases |  |  |  |
|  | Login.gov support | LG99 errors are [Login.gov](http://Login.gov) system errors \- 2,134 calls |  |  |  |
| Sign-in loop | Intercept survey | 106 comments tagged | Top theme from analysis on public forums Comments report being redirected to the sign-in page after completing the sign in process Topic flagged by Veteran Support team for further investigation | Redirects to sign-in page after MFA step Redirects to sign-in page after logging in Users prompted to repeat the identity verification process again |
|  | Feedback survey | 104 comments tagged |  |  |  |
|  | HRC | Not captured |  |  |  |
|  | Login.gov support | Not captured |  |  |  |
| MFA | Intercept survey | 87 comments tagged | Top theme in negative sentiment on public forums (after identity verification)  Mentioned in some sign-in loop comments Top theme in past identity research  | Losing access to MFA method requires completing identity verification again For [Login.gov](http://Login.gov) it requires creating a brand new account |
|  | Feedback survey | 30 comments tagged |  |  |  |
|  | HRC | 692 cases |  |  |  |
|  | Login.gov support | 987 cases |  |  |  |
| Personal information and digital access  | Intercept survey | 68 comments tagged | Recover account is a top subtopic for [Login.gov](http://Login.gov) in July and September Negative sentiment about data mismatch identified in public forums (Q2-Q3 2025\) Negative sentiment about cell phone requirement in public forums (Q2-Q3 2025\) High case volume for MyVA411 call center Q1 2025 | Losing access to email account and getting locked out of sign in account Data mismatched between different systems of record Missing personal information Older Veterans with lower technical literacy face hardship completing the identity verification process \- this is difficult to quantify the exact scale but it’s a consistent finding |
|  | Feedback survey | 38 comments tagged |  |  |  |
|  | HRC | Not captured |  |  |  |
|  | Login.gov support | 2273 cases (Not captured in August) |  |  |  |
| UX pain points | Intercept survey | 2 comments tagged | Feedback comments mention not being able to locate the button to accept terms | This topic is not likely to be raised in CSP support channels FE errors tracked for users who do not authorize VA |
|  | Feedback survey | 163 comments tagged |  |  |  |
|  | HRC | Not captured |  |  |  |
|  | Login.gov support | Not captured |  |  |  |


### Detailed findings of themes

#### Identity verification: verification looping

##### Symptoms

* Users verify their identity successfully but system continues to request verification  
* Repeated requests to scan/upload driver's license despite previous completion  
* Verification process creates circular flow between VA.gov and credential providers (ID.me/Login.gov)  
* System fails to retain or recognize completed verification status

##### Supporting Evidence

* Quantitative:  
  * Q3 2025: Verify loop was tagged in 5 intercept surveys and 13 feedback surveys  
  * Q3 2025: More generally verify remains a barrier with that tag showing up in 188 (8%) feedback surveys and 179 (17%) intercept surveys, and 69 (15%) app store reviews so having to verify again can be a particular hardship  
* Qualitative  
  * Q3 2025  
    * “Why do I have to keep completing ID.me? I’ve done it several times, and it still keeps asking me to do it again”  
    * “I logged in and it wants me verify again. Both options have issues. The same phone number VA has it won't allow for verification because I have not had it long enough. My mailing address is outdated due to homelessness”  
    * “I tried to sign in, but it wanted me to setup verification again.”

#### Technical errors: account linking failures

##### Symptoms

* Users have valid Login.gov or ID.me accounts but cannot link them to VA.gov  
* Accounts created for other government services (Social Security) won't work for VA  
* System rejects existing accounts claiming they don't exist or aren't recognized  
* Confusion about whether one credential works across government services

##### Supporting Evidence

* Quantitative:  
  * Q3 2025: 007 errors indicate SSN mismatch or missing personal information  
* Qualitative Patterns   
  * Q3 2025: “After the recent update I can’t login to the mobile app by ID.me, it’s giving me email and password incorrect” \- app store review  
  * Q2 2025: Trustpilot (Login.gov) 8/3: “It’s saying that it can’t match my addresses, so I can’t access necessary systems like those needed as a federal employee and the VA.”  
  * Q1 2025  
    * "I already have a login.gov account that I got via my Social Security. I can't find how to let VA know"  
    * "I have a .gov account set up for social security but after multiple tries it will not set up a VA account for me"  
    * "login.gov account has been established and the va account show as a connected account, but there is no way to connect to it"  
    * ID.me account linking failures despite years of use  
    * "I am established with ID.Me but the VA site will not accept the previously established connection"  
    * "I have already set up login.gov for ssa so why do i need to be varified again?"

#### Technical errors: system failures

##### Symptoms

* Timeout errors during authentication despite active use  
* 'Stay signed in' button non-functional, leading to forced logout  
* Pages fail to load (spinning wheel, blank screens)  
* Error codes (500, 4031, 403, 592\) blocking access  
* Mobile devices particularly affected

##### Supporting Evidence

* Quantitative:  
  * All time periods: Multiple error codes reported across datasets  
  * Q3 2025: 813 calls to ID.me call center classified as a VA error  
  * Q3 2025: 122 (5%) feedback surveys mentioned page load issues  
  * Q4 2024: 'Page load' issues tagged in 6.7% of intercept surveys


* Qualitative Patterns:  
  * Timeout issues with inactivity modal  
    * Q1 2025: "when the 'inactivity' screen pops up the option to 'Stay signed In' does not respond. The message blocks the screen so nothing can be done and it eventually logs me out"  
    * Q1 2025: "stop logging me out while I'm ACTIVELY USING this VA app\!\! It's ridiculous that while I'm actively browsing my claims information"  
  * Page loading failures  
    * Q3 2025: “just spinning and spinning and waiting and waiting”  
    * Q3 2025:  “App won’t load, just keeps buffering”  
    * Q1 2025: "It just spins never connects.. on going problem"  
    * Q1 2025: "Please wait while we load the application for you. But never loads"  
    * Q4 2024: "consistently long loading times or not loading"  
  * Unspecified technical issues  
    * Q3 2025: “Thanks for fixing the login issues with this app. I was finally able to log back in after uninstalling and reinstalling it” \- app store review

#### Sign-in loop

##### Symptoms

* Users complete authentication successfully but are redirected back to sign-in page  
* Multi-factor authentication (MFA) codes accepted but access still blocked  
* Brief flash of authenticated page before being logged out  
* Most commonly reported on prescription refill pages

##### Supporting Evidence

* Quantitative:  
  * Q3 2025: Sign-in loop was tagged in 106 (10%) of intercept surveys, 104 (4%) of feedback surveys, and 88 (20%) of app store reviews  
* Qualitative:  
  * Q3 2025:   
    * “I keep logging into my account and having to re log in again?”  
    * “Three times you sent me back to the ID.me sign in”  
  * Q2 2025:   
    * “Refill prescription. I can authenticate, before I can refill prescription it kicks me out to make me log in again” \- feedback survey  
    * “It accepts my username and password, sends me the 6-digit code, and once I input it, it accepts the code but loops me back to the login page.” \- app store review  
  * Q1 2025 Medallia surveys  
    * "When trying to log in, it takes you to your home account page temporarily, then it automatically logs out"  
    * "I enter the 6 digit code and I'm transferred to the VA site for about 5 seconds and then it goes back to the sign in page"  
    * "I briefly see the landing page to renew Rxs and then I land again at the login page"

#### MFA

##### Symptoms

* MFA codes sent to an old/incorrect phone number veterans cannot access  
* Veteran needs to use MFA at a time when they don’t have access to internet service or their phone

##### Supporting Evidence

* Quantitative:  
  * Q3 2025: MFA tagged in 692 (43%) HRC Call Center calls; 987 (4%) of Login.Gov Call Center calls; 87 (8%) of intercept surveys; 30 (1%) of feedback surveys; 8 (2%) of app store reviews  
  * Q1 2025 MyVA411: 5,670 calls categorized as 'Inability to Sign In'  
    * 72% of the call in this category were related to MFA  
  * Call centers seem to see this issue more acutely than other data sources we’ve looked at and MFA feedback is highly correlated with negative sentiment in survey responses  
* Qualitative Patterns:  
  * Q3 2025 Medallia surveys:   
    * “you want to send me a code to an old phone number”  
    * “My cell phone is a flip phone and I do not have reception in my area… I need to make arrangements to have someone with a phone with SMS abilities every time I attempt validation”  
    * “I changed my phone and numbers now I can not receive my code”  
  * Q1 2025 Medallia surveys:  
    * "they want to send verification to our old phone numbers. I put the new phone numbers into the boxes that asked but at the end it reverts back to the old phone numbers"  
    * "I need to change my password but when I do that it is sending an authorization code to a phone number that I no longer have"  
    * "When I try to get signed on under your new website you are trying to send me a code with old phone \#"

#### Incorrect personal information on file blocks authentication

##### Symptoms

* Email addresses on file don't match current email, blocking account creation or recovery  
* Veterans current phone number or address not matching current reality blocks verification  
* System won't allow users to update contact information without first authenticating  
  * Catch-22: need to sign in to update phone number, but can't sign in without phone number

##### Supporting Evidence

* Quantitative:  
  * Q3 2025: “Set up account” was tagged in 63 (3%) and “personal info” of feedback surveys  
  * Q3 2025 Login.gov support shows at least 840 “phone match” and at least 1,715 SSN or address issues blocking verification  
  * Q1 2025 MyVA411: 5,670 calls categorized as 'Inability to Sign In'  
    * 1,193 (21% of this category) related to confirmation email issues  
  * Q1 2025: 'Set up account' appeared in 20% of feedback surveys and 16.% of intercept surveys. That’s the second-highest tag after 'unable to sign in'  
    * 2nd most common issue in both intercept and feedback surveys   
  * Q1 2025: "kept receiving [E4031](https://help.id.me/hc/en-us/articles/4407193724951-Fix-ID-me-error-E4301-E4302-or-E4303-during-verification) message for ID.me"  
  * Q4 2024 MyVA411: 1,170 calls about ‘issues with personal information’, 482 which were more specifically about ‘Unable to Update Information’


* Qualitative Patterns:  
  * Q3 2025:   
    * “it says I already have account but it has my old email address that I changed to the new email address over 1 year ago”  
    * “Turns out I could not be identified due to clerical error in my name and address. Took all morning to update”  
    * “Can’t sign up for acct will not let me use my email address”  
  * Q1 2025: Email address conflicts  
    * "UNABLE TO SIGN IN DUE TO INCORRECT EMAIL ADDRESS THAT SHOULD HAVE BEEN CORRECTED"  
    * "I tried to create an account and because I use my email for my healthy vet. It won't let me use the email. Says already in use"  
    * "you can't use your email because it's still being used. I can't create any new way to access my V.A. healthcare records"  
  * Q1 2025: No path to update without authentication creates impossible situation  
    * "the phone numbers on hand were no longer active. The system did not me allow or give me a way to change the phone number to the new number"

#### Technology barriers and limited digital access

##### Symptoms

* Smartphone requirement for MFA excludes users without mobile devices  
* Photo ID upload fails due to camera quality, lighting, or dexterity issues  
* Age-related challenges with new technology processes  
* Caregivers managing accounts for Veterans face authentication barriers

##### Supporting Evidence

* Quantitative:  
  * Each quarter (Q4 2024, Q1 2025, Q2 2025, Q3 2025\) has several mentions across data sources about not having a smartphone or having accessibility challenges to signing in  
  * It’s likely that some issues with setting up account or MFA reflect some of the challenges  
* Qualitative Patterns:  
  * No smartphone \= no access  
    * Q3 2025: Trustpilot (Login.gov) 7/31: “For those of us who live where cell phone service is near nonexistent, the site is completely useless.”  
    * Q3 2025: A Veteran reported having nothing but stressful problems with the new sign-in, stating they do not have a smartphone nor want one, and the system refuses to return calls to their home phone, eventually giving up due to excessive stress [VA News](https://news.va.gov/press-room/va-begins-transition-to-simpler-online-sign-in-experience-for-veterans-account-access/)  
    * Q3 2025: Multiple veterans in September 2025 described older veterans getting lost in the shuffle and feeling the process is very confusing [VA News](https://news.va.gov/press-room/va-begins-transition-to-simpler-online-sign-in-experience-for-veterans-account-access/)  
    * Q1 2025:  
      * "I can NOT sign in. I have NO telephone\!"  
      * "there is no way I can register for IDME LOGIN.Gov without a telephone or camera"  
      * “With Parkingson’s smart phone and computers are difficult”  
      * I am legally BLIND and everything is extremely difficult to navigate”  
    * Q4 2024:  
      * "I don't have a smartphone and I don't do texts. I can't sign in"  
      * "I don't have a cell phone to get the text message. How can I sign into my account?"  
  * Photo ID upload technical barriers  
    * Q1 2025: "i had issues submitting my husband's photo ID, got frustrated and stopped"  
    * Q4 2024: "next to impossible to take a photo of drivers license"  
    * Q4 2024: "ID ME locks my phone camera when it wants to take a picture of my licenses and won't accept the upload"  
  * Age and caregiver challenges  
    * Q2 2025: Facebook 4/22: “These new systems are ridiculous—I don’t know how you think us older/non-tech vets (who are the majority) can understand it all. I had no problem with the way it used to be.”  
    * Q1 2025: Facebook 2/01: “I think the VA needs to have someone at each VA hospital and clinic who can help older veterans get setup on the website with the new login. Older vets really struggle with newer technologies and would benefit from a younger VA employee’s help.”  
    * Q4 2024: "I think doing this to a 99 year old veteran is awful" (from caretaker)  
    * Q4 2024: "All the signing in, for myself has been very confusing. It took 3 tries. I deal with Parkinson's and hands shake"  
    * Q1 2025: "I'm caregiver for a blind Korean War Vet. He doesn't have a computer or cell phone"


#### UX pain point \- Terms of Use

##### Symptoms

* On the terms of use page but not being able to move past after pressing accept  
* On the terms of use page but not seeing the button to accept  
* Actually being stuck of having the feeling of being stuck from signing in since can’t get past TOU

##### Supporting Evidence

* Quantitative:  
  * Q3 2025: 2 intercept surveys tagged for Terms of Use  
  * Q3 2025: 163 (7%) feedback surveys tagged for Terms of Use  
* Qualitative:  
  * Q3 2025 for accept button not working  
    * “I hit the accept button but your end would not take it”  
    * “It would not accept when I pressed button”  
    * “How long does it take to accept my accepting your terms and conditions? Been waiting over an hour”  
  * Q3 2025 for accept button not showing up  
    * “Agree to terms. There is not accept button”  
    * “It says to accept terms but no place to accept it”  
    * “There is no visible accept or Decline button”

#### UX pain point \- Authorizing VA after verify

Technical errors for users who don’t authorize VA to receive data from the CSP after identity verification  
This represents UX friction in understanding and completing required steps

##### Symptoms

* At the end of verifying, doesn’t authorize VA to receive data from CSP  
* May not want to share personal information, or may feel like VA already has it  
* Doesn’t understand that this step is required

##### Supporting Evidence

* Quantitative:  
  * Q3 2025:  
  * Q3 2025:  
* Qualitative:  
  * Q3 2025:

## Recommendations

We have broken down our recommendations into 2 primary buckets.

The first set of recommendations are directly related to how we’re measuring dissatisfaction and how to iterate on this work in the future. These recommendations will allow us to find ways to improve the process and better capture dissatisfaction the next time we take measurements. Recommendations 1-8 all fall in this category.

These initial recommendations will allow us to address the following:

* Critical data gaps (missing behavioral context)  
* Weak triangulation (we mention correlation but don't show systematic methods)  
* Inconsistent tagging across quarters (44 tags in Q1, 39 tags in Q4)  
* Limited ability to distinguish technical failures from user confusion  
* No established baseline to measure improvement against

We also recognize the need to address  the issues that are affecting dissatisfaction for Veterans.  Although the bulk of this discovery is centered around how we can continue to improve, monitor, and measure dissatisfaction, we will also want to explore solutions to alleviate these pain points which will require further discovery into the specifics about the issues Veterans encountered.   Recommendation 9 falls in this category.

### 1\. Address data gaps

* Consideration: Behavioral context is missing. Much data tells us users are frustrated but it’s not always evident WHERE in the flow they're encountering problems  
* Recommendations:  
  * Request funnel reports from ID.me and Login.gov to better understand drop-off points in the identity verification process  
  * Now that SiS is live for the vast majority of authentications, we can better pinpoint errors starting in Q4 2025\. We should plan to incorporate the DataDog error reporting dashboard as a data source going forward.

### 2\. Improve triangulation across data sources

* Consideration: Show systematic correlation with more visibility into backend logs from sign-in Service  
* Recommendations:  
  * Leverage data from back-end logs and call center volume to better understand technical errors  
  * Take a deeper look at error rates and spikes in call center/survey responses  
    * Track lag time between error spike and call/survey response spikes  
  * Medallia location \+ Issue type (to distinguish page-specific bugs from systemic issues)  
    * Map which pages generate which complaint types  
      * e.g.: Do prescription refill page surveys specifically mention sign-in loops more than other pages?   
  * CSP data \+ Call center categorization  
    * Cross-reference Login.gov/ID.me monthly reports with MyVA411 "verification" category  
      * *Identify if CSPs categorize issues differently than HRC*

### 3\. Enhance Qualitative Data Collection

* Consideration: Sentiment analysis on free-text could be further mined  
* Current approach: Mixes manual tagging with ML/AI tagging and has used different tags with different time periods and data sets  
* Recommendations:  
  * Rigorously validate VA GPT tagging accuracy  
  * Consider adding  a sentiment intensity scoring (eg frustrated vs angry vs defeated language)  
  * Track sentiment intensity over time (e.g. is frustration increasing even if volume is stable?)

* Consideration: App Store Review Mining (limited in scope; should consider how much time we want to spend on the app)  
* Current: This is the first time our team has analysed this data set  
* Recommendations:   
  * Set up automated scraping  
  * Track rating trends (eg if 1-star reviews are increasing)  
  * Flag new issues appearing in reviews that don't yet show in Medallia as an early warning system  
  * Cross-reference review dates with deployment dates to catch new bugs faster

### 4\. Establish robust baseline

* Consideration: When to Baseline  
* Recommendations:   
  * Don't attempt baseline until 6 months post deprecation of both MHV and DSLogon  
  * Collect 3-4 months of "steady state" data before declaring baseline; use this period to validate whether issues decreased or persisted  
  * Segment baselines by:  
    * User journey stage: new account setup vs returning user sign-in 
    * Device type: Mobile vs desktop (already seeing mobile has worse outcomes)  
    * CSP: Login.gov vs ID.me (already seeing Login.gov has 2x verification calls)  
    * Page context: Help pages (expect negative) vs feature pages (expect neutral/positive)  
        
* Consideration: Track Leading Indicators along with overall sentiment   
* Recommendations:   
  * track specific issue tags as KPIs:  
    * % of feedback mentioning "verification loop"  
    * % of feedback mentioning "can't find sign in"  
    * % of feedback mentioning "prescription refill"  
  * If these don't decrease post-transition, they're product issues requiring fixes.

### 5\. Strengthen Data Quality & Consistency

* Issue: Better align between call center classifications and researcher tags   
* Recommendation:  
  * Conduct alignment workshop with HRC representatives  
  * Review sample tickets together to understand why categorization diverges  
    * Example flagged: "Forgot Password" category containing "change phone number" subject  
  * Create shared taxonomy or crosswalk between HRC categories and research tags  
    * If HRC can't change categories, document mapping for consistent interpretation

* Issue: Q1 2024 used 44 tags vs Q4 2024 used 39 tags. Using different tags across quarters can make it hard to compare trends  
* Recommendation:  
  * Document tag definitions clearly (what qualifies as "verify" vs "set up account"?)  
  * Lock tag set for 12 months to allow year-over-year comparison  
  * If new tags needed, create additive approach (don't retire old tags mid-year)

### 6\. Consider Adding New Data Sources

* Consideration: more web analytics or metrics could prove useful  
* Issue: We can’t track the full funnel in GA due to redirects  
* Recommendation: Work in other metrics to evaluate UX  
  * Page-level bounce rates on sign-in flow pages  
  * Consider incorporating authentication timing as a proxy metric  
  * Collect device/browser breakdown for error rates

* Consideration: Accessibility-Specific Feedback is important to properly represent  
* Recommendations:  
  * Partner with accessibility team to recruit assistive tech users specifically  
  * Conduct quarterly accessibility-focused usability testing on sign-in flows  
  * Add accessibility-specific survey questions to Medallia (using assistive tech? which kind?)  
  * Track if accessibility issues show up in call center data (can HRC flag these?)

* Consideration: utilize other data sources we can readily access  
* Recommendation: Spend time to figure out if Ask VA or Chatbot data makes sense to incorporate

### 7\. Consider Looking at other aspects of current Data Sources

* Data source: Backend logs  
  * Current: Datadog mentioned but volume/methodology not specified  
  * Recommendations:  
    * Quantify error volumes (how many 500 errors? how many 403s?)  
      * Note: we’ll have access to this data in the future now that SiS is brokering authentications  
    * Investigate if we can determine how users recover after being served a FE error page on [VA.gov](http://VA.gov)  
      * Were they able to sign in successfully within a certain period of time?  
    * Break down by endpoint (is /verify endpoint failing more than /login?)  
    * Correlate success ratios to specific user complaints  
    * Identify if certain error codes correlate with specific user complaints

* Data source:  CSP call centers  
  * Current: Monthly SLA reports (with ID.me), but specifics unclear  
  * Recommendations:  
    * Request CSP verification success rates specifically for VA.gov users  
    * Request CSP "time to verify" metrics (how long does photo ID upload take on average?)  
    * Request CSP abandonment rates (how many start verification but don't finish?)  
    * Use this to pressure CSPs on specific improvements (barcode scanning, better instructions)

### 8\. Make Data More Actionable

* Regular Reporting Cadence  
  * Current: Quarterly analysis  
  * Recommendation:   
    * Monthly dashboard with key metrics (call volume by category, Medallia sentiment, top tags)  
  * Continue with quarterly deep-dive reports  
  * Schedule  weekly spot-checks during high-risk periods (transitions, major deployments)

* Stakeholder Sharing  
  * Recommendation:  
    * Share findings with CSPs monthly (especially Login.gov given their disproportionate burden)  
    * Present to call center quarterly (helps them anticipate issues, improve categorization)  
    * Brief leadership on trends (are things getting better/worse? what's driving volume?)  
    * Create public-facing transparency report (builds trust, shows VA is listening)  
* Automated Alerting  
  * Recommendation: spike to see if there’s a way to set up any this data with automation. Some ideas could include  
    * Set thresholds for when issues need immediate attention  
    * Create Slack/email alerts for threshold breaches

### 9\. Further Research Priority Themes

Further analysis of some themes will be needed to pinpoint issues where surveys don’t do a great job. We’d like to know more about the following, and consider them for prioritization with upcoming work 

1. Identity Verification Looping  
   * Usability testing: Recruit 8-10 users who experienced looping  
   *  Moderated sessions: have them show us exactly what happened  
   *  Goal: Understand if technical bug, communication failure, or user error in order to develop a solution

2. Technical Errors  
   * Technical spike: explore errors, when and where they occur  
   * Discover if there are any that we can better keep from occurring with BE or technical work  
   * Goal: reduce sign in errors

3. Technology barriers  
   * Usability study: Dedicated sessions with veterans in the 65+ age group  
   * Understand specific verify barriers beyond "photo upload is hard"  
   * Goal: Inform alternative verification pathway design. Requires collaboration with Login.gov/ID.me for solution implementation

4. MFA  
   * Usability study: recruit groups who feel that MFA is a hardship  
   * Understand specific verify barriers beyond "I hate MFA”  
   * Goal: understand if there are ways we can encourage folks to use alternative MFA methods that work better for their lifestyle or individual dexterity or technology levels

5. Terms of Use  
   * Technical spike: if this is possible from a technical perspective, when and how the button would not show up for folks  
   * Heuristics review: find out if there is a way folks are getting to the unauthed terms of use page, if this is the case, then a content or UI change might be needed  
   * Goal: keep TOU from being a blocker to entry, and/or keep folks from feeling stuck

6. Mobile App Sign-in Experience Audit  
   * Heuristics analysis: Test authentication flow on iOS and Android, various screen sizes  
   * Mobile sign-in makes up 14.8% of complaints, what unspoken pain points can we find  
   * Goal: Identify specific mobile-only issues vs desktop-and-mobile issues
