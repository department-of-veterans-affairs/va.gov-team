# Front end sign in flow - deep dive of key finding 4, multi factor authentication difficulties
**Office of the CTO - Digital Experience (OCTO-DE), Sign in, Identity Team**
- Date: May 30, 2024
- Researchers
   - Clayton Zook clayton.zook@oddball.io

This in-depth review builds on [2024-04 FE Sign in Flows](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-04%20FE%20Sign%20in%20Flows/Front%20end%20sign%20in%20flow%20-%20discovery%20research.md) and takes a closer look at MFA related findings. See the [data sources section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-04%20FE%20Sign%20in%20Flows/Front%20end%20sign%20in%20flow%20-%20discovery%20research.md#data-sources) and the [literature cited section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-04%20FE%20Sign%20in%20Flows/Front%20end%20sign%20in%20flow%20-%20discovery%20research.md#Appendix-A-literature-review-sources) of the full discovery document to further understand the data this report is built from.  

## Key Finding 4, multi factor authentication difficulties
### Section A
Recent identity research has shown that the MFA methods most veterans choose are SMS text message or voice call<sup>1</sup>, both which heavily rely on cell phones. Also, even when veterans are comfortable with MFA and understand the need for MFA, they still often consider it a hassle<sup>2</sup>. The 2024 VA survey data further illustrates this, with negative responses on MFA being one of the main themes<sup>3</sup>. Flagship Mobile team App store reviews from 2023 reflect this as well<sup>4</sup>.
> "It’s too difficult to login. I have to remember a password and two text messages with codes. This is ridiculous." - Mobile app review from Dec 2023

Beyond being a hassle or causing minor frustrations, MFA has the potential to be a blocker. In VA recent research, an earlier concern was fear of misplacing the MFA device<sup>5</sup>. A recent MHV coordinator survey showed that the three most common problems they hear about and help veterans with are login, navigation, and MFA. Of note here is that MFA along with the more generic “login” make up the authentication process, meaning two of the top three issues MHV coordinators see are with veterans authenticating. To put it in numbers, 20 of the coordinators surveyed saw over 20 veterans with authentication issues in the prior month, or something more than 400 veterans. Worse, the coordinators reported that the impact of these issues is often that the veteran is unable to use/access VA.gov<sup>6</sup>. 

Looking specifically at screen reader users, a VA qualitative study found that signing in was the biggest navigation challenge and of the sign in issues MFA was the biggest challenge for this group<sup>7</sup>. This was a study about appointments, however authentication issues were so prevalent that it became a major finding of this study. Several of the screen reader participants took much of the study session trying to sign in and some weren’t able to get signed in at all. Several Medallia survey respondents point to not having access to their cell phone or to cell service during the work day, especially in DOD and high security environments<sup>6</sup>. Some folks just don’t have their cell phone with them at all times<sup>8</sup>. 

> "I work for DoD and find it difficult to log into my account after i verified with my CAC card. How am i suppose to receive a text or call by phone when no phones are aloowed in the building." - Medallia intercept survey, Mar 2024

While we didn’t readily collect data from VA studies to point to regarding folks with lower income, we can look to external scholarly studies to consider implications for this group. Based on the technology maintenance theory, even though lower income populations are more likely than in previous years to gain access to mobile devices and internet service through those mobile devices, they are also more likely to intermittently lose access due to malfunctioning devices, a lapse in service, or a theft of device<sup>10</sup>. 

This all highlights the potential for MFA to block some folks from gaining access to their account at specific times or possibly even at all, and presents an opportunity to dive deeper into what solutions could benefit certain groups of veterans facing hardships accessing their VA account.

> I said shoot, my phone is downstairs in the car. I have to go downstairs and get my phone, I have to power it on. Or it’s not charged - Participant 2 from 2023-12 VetStatus Use Case Discovery

MFA and usability can work against each other. Some folks feel that requiring MFA every sign in is excessive. It causes negative feelings and decreases satisfaction with authentication even with folks who understand its purpose<sup>3, 9</sup>. It increases the time for veterans to sign in, and especially so for those who are older, or with certain disabilities, sometimes creating an undue burden on the very folks who sign in to VA.gov most often.

#### **Recommendation 4A.1**
Alternative MFA methods like backup codes or a security key may alleviate pain points in some circumstances, understanding that most veterans are most comfortable with a phone call, SMS, or email (which is a method our CSPs don't offer).
#### **Recommendation 4A.2**
Not forcing veterans to do the MFA step for every authentication, like once a week or once a month, when signing in from the same device and IP, could help alleviate the negative feelings from those who find it an annoyance and reduce a hurdle for those who are blocked from signing in due to MFA.

### Section B
_Note: this deep dive skips section B, because it combines sections A and B from [the main findings document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-04%20FE%20Sign%20in%20Flows/Front%20end%20sign%20in%20flow%20-%20discovery%20research.md)._

### Section C
Some folks complain about getting two MFA codes<sup>3, 4</sup>. Identity team engineers say this is likely due to the ID.me wrapper for the legacy CSPs that forces MFA through ID.me. In addition, when folks initiate MFA separately with DSLogon that would give them a second MFA step to go through.
#### **Recommendation 4C.1**
Some options could be to deprecate and decommission use of DSLogon for VA, or have DSLogon force everyone to MFA and remove the ID.me wrapper. Other workarounds should be explored if these ultimately aren't available options.
 
### Section D 
On VA.gov (note: we didn’t look into the mobile app experience as part of this work) you must press a button for either Login.gov or ID.me, to send the MFA code. The button is at the bottom of the page, and for some screen sizes and at some screen zoom levels it requires a scroll down to see (ie “below the fold”). Folks who don't realize this, might have a slightly worse experience signing in after waiting a few moments for the MFA code only to realize they missed a step. While we can’t say for certain, it could be the cause of some folks complaining they never received an SMS MFA code<sup>4, 11</sup>.

> "Once I was able to finally get my password entered, the app never texted my phone” - Mobile app review from April 2023

> "Complete your sign in. I'm going to say text message. See. Nothing happens. Text message, see, nothing happens.” - Participant 6 from 2024-03 ARM findarep live usertest (note: this participant used MHV to sign in, at the MFA option selected text message, but then must select "Continue" button, which is below the fold. P6 misses the button and because of cognitive disability often continually forgets to scroll down the next time.



#### **Recommendation 4D.1**
Some health and financial institutions, especially on their app experiences, automatically send the MFA code as soon as you successfully submit UN/PW instead of requiring another button click that can be missed. We should explore this as an option to reduce clicks on the web experience. However, if we do decide we’d want to go that way, it’d then require convincing ID.me and Login.gov to change the way they serve MFA, since they own this part of the experience.


## Sources mentioned in this document:
1. [2023-03 Deferred Identity Proofing Round 1 Usability](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/discovery/research/2023-03-Deferred-Identity-Proofing-Round-1-Usability/research%20findings.md)
   - hypothesis 5 “most Veterans will choose to set up text or voice message as their multi-factor authentication method” found to be “definitely true”
2. [2023-04 Proactive CSP Migration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-04%20Proactive%20CSP%20Migration/2023-04%20Proactive%20CSP%20Migration%20research%20findings.md) 
   - finding 7 “Participants largely understand MFA, although several found SMS to be a hassle and a couple participants expressed extreme dislike of or anxiety around SMS MFA.”
3. Medallia intercept survey data - Jan 01, 2024 to April 30, 2024
   - The overall themes of these responses were issues with authentication (including MFA), issues with verification (including ID images), frustrations with complexity (mostly too many CSP options), technical issues (like error messages or complaints of sign in looping).
4. Mobile App Team - app store reviews, 2023
5. [2022-10 Login.gov Adoption Discovery Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/discovery/research/2022-10-Login.gov-Adoption-Discovery-Research/login.gov%20adoption%20discovery%20research%20findings.md)
   - finding 5 “Ingrained responsibility for government-issued property undermines the perception that a security key from the VA would an easy and low-stress MFA option.”
6. MHV coordinator's survey July 2023
7. [2023-03 Appointment list redesign screenreader research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2023-02-appt-list-usability-screenreader/research-findings.md)
   - finding 5 “Logging in was the biggest navigation challenge for participants”
8. [2023-12 VetStatus Use Case Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/f97a2589dd3ed8352bff4edf37401a583cb46897/products/veteran-status/Research/2023-12-VetStatus-Use-Case-Discovery/2023-12-Research-Plan.md)
9. [2023-12 Federal Header/Footer usability testing--Phase 1](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/header-footer/initiatives/2024-federal-standardized-header-footer/research/phase1-no-AT#:~:text=2%20months%20ago-,topline.md,-updated%203%20p%27s)
11. Gonzales, A. (2016). The contemporary US digital divide: from initial access to technology maintenance. Information, Communication & Society, 19(2), 234–248. https://doi.org/10.1080/1369118X.2015.1050438
12. [2024-03 ARM findarep live usertest](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/research/2024-03-ARM-findarep-live-usertest)
