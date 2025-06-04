# 2025 Q4 survey data findings

**Office of the CTO - Digital Experience (OCTO-DE), Sign-in Transition, Identity Experience Team**

- Researcher - Clayton Zook | clayton.zook@oddball.io

**Jump to:**

- [Key Data](#key-data-points)
   - [Medallia feedback survey](#medallia-feedback-survey---quantitative)
   - [Medallia intercept survey](#medallia-intercept-survey---quantitative)
   - [My VA411 calls](#MyVA411-calls) - section to be added
   - [Comparisons](#comparisons) - section to be added
- [Discussion](#discussion) - section to be added
- [Recommendations](#recommendations)

## Background
This research considered the Medallia intercept survey, Medallia feedback survey, and the MyVA411 Call Center data from October 1, 2024 to November 30, 2025. This is part of our team's regular checkin with quantitatitve data.


## Methodology 

We requested survey data for January thru March the Contact Center Team in April. This time we did not analylize call center data in depth, but only used readily accessible data from DOMO. We used 44 tag optionsto organize each entry. Entries that were clear duplicates or had no information in them are excluded.

* Medallia feedback survey - folks get to this by pressing the "feedback" button at the bottom of a page on VA.gov
  * We pulled data from surveys that were started on pages that are owned by our team or related to identity and sign in products, especially including resource pages
  * To assess sentiment, we primarily used the question “Please rate your experience with VA.gov today.” We mostly rated scores of 4 or 5 as positive, scores of 3 as neutral, and scores of 1 or 2 as negative.  
  * There were some exceptions made where the open field question “why did you select this rating” didn’t match. Since the goal here is to capture sentiment of sign in products, if a higher score was given but sign in was mentioned negatively in the open field, then the sentiment was adjusted down, and so forth. Another exception was in a couple of cases when no rating was left on the experience question, but open text data and the other questions were rated in a way that offered insight on the person’s sentiment. In those few cases we added a sentiment rating to match the other survey questions.
* Medallia intercept survey - folks get to this by seeing a pop-up on screen
    * We pulled data from surveys that were started on pages that are owned by our team or related to identity and sign in products 
    * To assess sentiment, we only used the question “what is your overall satisfaction with this site.” With scores on the 5 point scale, 4 and 5 were counted as positive, scores of 3 were rated neutral, and scores of 1 or 2 were rated negative.  
  * We gave no research finesse to this or other data on this survey data.
* MyVA411 data  
  * This data comes to us pre-classified with a Category and Type. These have some relevance for our team and do correlate with the researcher tags added. The Subject data we get for each record is limited, but sometimes offers enough information that the researcher applied tag doesn't follow the Category or Type.
  * In this way, some Category or Types have a more correlation to researcher tags than others.  
  * Because the Subject is open text added by the call center representative, there is some althogh minimal risk of PII.
  * There is further ticket data that we could ask for, but it would be highly likely to include PII so this would be a special request. Also with over 14,000 tickets it is already a lot of data to parse even without this.

## Key data points

### Medallia feedback survey - quantitative
* 6,506 total entries reviewed and 11,488 total tags applied  
* Top tags: unable to sign in, set up account, CSP transition, verify, CSP - IDme, CSP - LIG
  
**Top Tasks (Feedback Survey)**  
| Task Tag               | Count | % Responses |
|------------------------|-------|---------|
| Unable to sign in      | 2207 | 33.9%    |
| Set up account         | 1288 | 19.8%    |
| CSP transition         | 1263 | 19.4%    |
| Verify                 | 879  | 13.5%    |
| CSP - ID.me            | 401  | 6.2%     |
| CSP - Login.gov        | 282  | 4.3%     |

### Medallia intercept survey - quantitative
* 1328 total entries were reviewed and 1992 total tags applied  
* Top tags: CSP transition, set up account, unable to sign in, verify, CSP - IDme, CSP - LIG
      
**Top Tasks (Intercept Survey)**  
| Task Tag               | Count | % Responses |
|------------------------|-------|-------------|
| CSP transition         | 389   | 29.3%       |
| Set up account         | 213   | 16.0%       |
| Issue - unable to sign in | 212 | 16.0%       |
| Verify                 | 164   | 12.3%       |
| CSP - ID.me            | 92    | 6.9%        |
| CSP - Login.gov        | 54    | 4.1%        |

### Comparisons

### Themes from Qualitative Data

#### Account Setup and Verify Issues
- Wrong or shared email address
- Verification fails due to new or unverified phone number
- Caregivers setting up accounts for Veterans
- Photo ID upload issues (e.g., no ID, digital access limits)
- Accessibility needs (vision, dexterity)

#### Verify Loop
- Users feel stuck in a verification cycle
- Some verified multiple times but system asks again
- Triggers include the `/verify` page and MHV prompts
- Described as repeated license scans or failure to retain verification status

#### Technical Issues
- Timeout problems
- “Stay signed in” button not working
- Kicked out on Rx page (sign-in loop)
- Sign-in page won’t load (“spinning wheel”)
- Most common on mobile or MHV-related pages
- Biometric login issues, especially mobile

### Content and UI Flags
- Uncertainty around:
  - Linking new accounts to VA
  - Where to sign in
  - Whether account is valid for March 4
- Confusion from:
  - Incomplete redirect from CSP to VA
  - Content showing “create account” but not “sign in”
- Users want to “verify” but are routed to “learn more” articles
- Terminology issues (e.g., "MFA" unclear)


## Recommendations

**Account Setup and Verify Issues**
- Consider additional research
- Collaborate with CSP partners

**Verify Loop**
- Continue monitoring for perceived loops
- Spike to investigate and resolve technical causes

**Technical Issues**
- Investigate timeout problems
- Monitor Rx page behavior as transition completes
- Identify ISP/device-specific issues

**Content and UI**
- Share insights with platform content team
- Improve wayfinding to sign-in related actions
