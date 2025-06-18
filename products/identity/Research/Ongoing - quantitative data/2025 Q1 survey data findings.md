# 2025 Q4 survey data findings

**Office of the CTO - Digital Experience (OCTO-DE), Sign-in Transition, Identity Experience Team**

- Researcher - Clayton Zook | clayton.zook@oddball.io

**Jump to:**

- [Key Data](#key-data-points)
   - [Medallia feedback survey](#medallia-feedback-survey---quantitative)
   - [Medallia intercept survey](#medallia-intercept-survey---quantitative)
   - [My VA411 call data](#MyVA411-call-data)
   - [Comparisons](#comparisons)
   - [Themes](#Themes-from-qualitative-data)
- [Recommendations](#recommendations)
- [Survey quotes](#Survey-quotes)

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


### MyVA411 call data
There were 24,823 calls related to authentication from the call center. This includes 6 categories of cases.
- Identity Verification Issues: 9,523 calls, with Login.gov being the most common issue (64.8% of these calls).
- Navigation Issues: 5,922 calls, primarily related to Account Sign in (73.9%).
- Inability to Sign In: 5,670 calls, with two-factor authentication being the main issue (72.2%).
- Forgot Password: 2,179 calls, with roughly equal issues for ID.me (42.8%) and Login.gov (43.6%). DS Logon had 8.7% of the forgot password calls, while it only had about 5% of total authentications during this time. This likely indicates that more DS Logon users are experiencing issues with passwords.
- Sign in and Technical Issues: 917 calls, mostly about signing into VA.gov and managing profiles (98.36%).
- Security Total: 612 calls, primarily about Account Sign in (98.37%).

|      Case Category               | # of Cases |                    Case Type                         | # of Types | % of Type to Category |
| ------------------------------ | --------: | -------------------------------------------------- | --------: | --------: |
|   Inability to Sign In           |   5,670    |   Two-factor authentication                          |   4,094    |   72.20%   |
|                                  |            |   Confirmation email issue                           |   1,193    |   21.04%   |
|                                  |            |   EVSS Errors                                        |   383      |   6.75%    |
|   Navigation Issues              |   5,922    |   Account Sign in                                    |   4,375    |   73.88%   |
|                                  |            |   Identity                                           |   53       |   0.89%    |
|   Forgot Password                |   2,179    |   ID.me                                              |   932      |   42.77%   |
|                                  |            |   Login.gov                                          |   951      |   43.64%   |
|                                  |            |   DS Logon                                           |   189      |   8.7%     |
|                                  |            |   My HealtheVet                                      |   107      |   4.91%    |
|   Identity Verification Issues   |   9,523    |   ID.me                                              |   3,024    |   31.75%   |
|                                  |            |   Login.gov                                          |   6,170    |   64.79%   |
|                                  |            |   DS Logon                                           |   171      |   1.80%    |
|                                  |            |   My HealtheVet                                      |   158      |   1.66%    |
|   Sign in and Technical Issues   |   917      |   Signing in to VA.gov and managing VA.gov profile   |   902      |   98.36%   |
|                                  |            |   Technical issues on VA.gov                         |   14       |   1.53%    |
|                                  |            |   No Case Type Provided                              |   1        |   0.11%    |
|   Security Total                 |   612      |   Account Sign in                                    |   602      |   98.37%   |
|   **Total**                      | **24,823** |                                                      | **23,319** |            |

### Comparisons

| Medallia intercept |  |  |  |  |  |
| :---- | ----- | ----- | ----- | ----- | ----- |
| **VAgov experience** | **Feb/Mar '24** | **Oct/Nov '24** | **Feb/Mar '25** | **Change from Oct/Nov '24** | **Change from Feb/Mar '24** |
| Negative | 171 | 170 | 970 | 470.6% | 467.3% |
| Neutral | 47 | 16 | 130 | 712.5% | 176.6% |
| Positive | 231 | 6 | 228 | 3700.0% | \-1.3% |
| **Total** | **449** | **192** | **1328** | **591.7%** | **195.8%**|
| % neg | 46.4% | 88.5% | 73.0% | \-15.5% | 26.6% |
| % neu | 10.3% | 8.3% | 9.8% | 1.5% | \-0.5% |
| % pos | 43.4% | 3.1% | 17.2% | 14.0% | \-26.2% |

VAgov's Medallia Intercept Data for February and March 2025 shows a significant increase in total responses over the same months in the prior year and over the previous period of October and November 2024

* Negative, neutral responses both increased  over prior periods  
* Positive responses remained relatively stable compared to February/March 2024\.  
* Negative responses increased by about 470% from both prior periods, a large increase during the final weeks of the MHV account deprecation.  
* Since positive responses remained about the same, while negative responses increased substantially, there is a net negative effect on the rating

| Medallia feedback |  |  |  |  |  |
| :---- | ----- | ----- | ----- | ----- | ----- |
| **Able to do task?** | **Feb/Mar '24** | **Oct/Nov '24** | **Feb/Mar '25** | **Change from Oct/Nov '24** | **Change from Feb/Mar '24** |
| No | 911 | 716 | 3517 | 391.2% | 286.1% |
|  |  |  |  |  |  |
| Yes | 157 | 73 | 416 | 469.9% | 165.0% |
| **Total** | **1068** | **789** | **3933** | **398.5%** | **268.3%** |
| % no | 85.3% | 90.7% | 89.4% | \-1.3% | 4.1% |
| % yes | 14.7% | 9.3% | 10.6% | 1.3% | \-4.1% |

VAgov's Medallia Feedback Data for February and March 2025 shows a significant increase in total responses regarding the ability to complete tasks compared over the same months in the prior year and over the previous period of October and November 2024

* Both the number of users reporting they were unable to complete their task and the number of users reporting they were able to complete their task increased substantially  
* The net result is that roughly the same percentage of people were able to complete there task, compared to the prior period, and that a slightly higher percentage of folks were able to complete based on the prior year.  
* This is a good sign that even though responses went up, task completion percentage remained the same, or was better than prior reporting periods.


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

## Survey quotes

### Sign in error

* "Login to my healthy vet using my ID me account, I get a error code 500 all the time and cannot login"  
* "I often get an error code "500". Other times I get into a loop that asks me to sign in. I get various failures due to an apparent system overload."  
* "kept receiving E4031 message for [ID.me](http://ID.me)."  
* getting error E:4031 "that's why I wasn't using ID.me in the first place"  
* "403 ERROR The request could not be satisfied. Request blocked. We can't connect to the server for this app or website at this time. There might be too much traffic or a configuration error. Try again later, or contact the app or website owner. If you provide content to customers through CloudFront, you can find steps to troubleshoot and help prevent this error by reviewing the CloudFront documentation."  
* "I ge error code04b714 and also "access denied." and a slew of computer garbage"  
* "my id me account received a message of error 592"  
* " Error 70: The SAML message could not be built Error Details FBTSML200E Unexpected exception: null An error occurred while processing your request. Please click here try to login again. If you need further assistance, please contact the HRC Helpdesk at 800-983-0937 7am-7pm Central Time. /sps/saml20sp/saml20/ \[date stamp append in CAG\]  
* “I have no issues signing into the Social Security Agency through login.gov. But whenever I try to enter VA, the authentication method always fails

### Account set up or linking issues

* "I tried to make my ID.me account today, but it says that I already have an account. I don't remember making an account yet"  
* "I am established with ID.Me but the VA site will not accept the previously established connection"  
* "I am trying to get my va account added to my login.gov account."  
* "login.gov account has been established and the va account show as a connected account, but there is no way to connect to it"  
* " I have already set up login.gov for ssa so why do i need to be varified again?"  
* "I already have an ID.me account for many years now but your system will not accept it."  
* "Synchronize my social security log in dot gov with my VA log in .gov account FROM what I understand you only need one"  
* "Can NOT connect my existing .gov account with my myhealthevet account."  
* "Log in using my existing Login.gov account (Originated for my social security access). I do not want to create two different   
* accounts for Login.gov. Why can't I directly access a sign in from My Healthy Vet"  
* “I have a .gov account set up for social security but after multiple tries it will not set up a VA account for me.”

### TOU issue 

* "you say I did not agree to terms. cant go back to agree to terms...wherever they are. keeps telling me I did not agree, so cant finish log in."

### Sign in loop

* Keep getting sent back to sign in page  
* "i've been trying to sign into my VA portal and it just keeps going around and around"  
* Rx page wont load  
* "I signed in through Login.gov. And I got in… but I am asked to sign in again or set up an account. Why do I need to sign in again?"  
* "I logged into MyHealthEvet... it required a 5 digit code... this was texed to me...I entered it: then it took me to a page to RE LOG IN" \[Survey taken on help article page about creating account, that is linked from the sign in page though we don't know if that was the path traveled in this case.\]  
* "your sign in just goes round and round.login with password and it goes right back to sign in page." \[Survey taken on help article page about creating account, that is linked from the sign in page though we don't know if that was the path traveled in this case.\]  
* verify loop? " login.gov keeps throwing you in a loop where you need to verify at the post office, on-line, etc."  
* "I have tried both LOGIN.GOV and IDME. It logs me out as soon as I have been logged in."  
* "Keeps going back to sign in."  
* "I put my password in and it just takes me back to the sign in page."  
* "Log in with ID ME acct, but the site keeps looping to sign in, get code etc.  without ever being to connect to site"  
* "pharmacy refill order.  When I log on using LOGIN.GOV and place an order, it never seems to be placed"  
* \[“verify” here is likely about MFA\] "Got into a loop of repeatedly verifying the same log in information with a code sent by text."  
* "Log in using numbers kept kicking back to log"  
* "I tried entering to My Vet using the app, I entered my email address, then password, it then takes me to Gov. Log in or I.D. Me, I enter email and password, then it starts all over again with sign in \!\!\!\!\!"  
* "signed in WITH password and went back to asking for password"  
* "I signed in several times only to be sent back to sign in"  
* \[this may be just signing in again at CSP to verify NOT a loop\] "I had to verify again. It said I already have an account but sent me back to sign in. Stuck in a loop"  
* "Site would not allow me sign onto my info AFTER I entered my one time 6 digit number. Kept returning to sign in page."  
* "I enter the 6 digit code and I'm transferred to the VA site for about 5 seconds and then it goes back to the sign in page."  
* "I log in with my login .gov password, and it just rolls right back to log in."  
* “My sign-in and dual authentication was used correctly and the application continues to ask me to sign-in repeatedly”  
* "I was trying to find my appointments. It will not let me sign in. I'm getting very fucking pissed off. Every time I submit the numbers it sends me back to sign in. I'm using ID ME"  
* "Tried login.gov and I.D Me. Got the authentication text number. Submitted it. Sight refreshed then immediately went back to login. Gov or I.D Me login."  
* "When trying to log in, it takes you to your home account page temporarily, then it automatically logs out."  
* "I just signed in and it wants me to again"  
* "trying to fill prescription. keeps asking to sign in when already signed in"  
* "Put in username and password, then put in code provided. Kicks me back to the beginning instead of going to access page for prescription"  
* \[after MFA\] "I briefly see the landing page to renew Rxs and then I land again at the login page."  
* "Repeatedly logged in, entered security code and was then logged off???"  
* "Login to refill prescriptions. It logs me in then kicks me directly back to login page. Will not keep page open"  
* "I get properly logged in using id me and the rx refill page starts to load but then it pops back to the login page. "  
* "Unable to sign in to va pharmacy. I've used all 3 sign in options & changed passwords, takes me back to login everytime. I have been trying this for a week, is there a problem with the va site?"  
* "I signed into ld.me, got the code & entered it It went right to the VA Rx site then right back to Id me login page. I did it 3 times with the same result."

### Timeout issue

* when the "inactivity" screen pops up the option to "Stay signed In" does not respond. The message blocks the screen so nothing can be done and it eventually logs me out.  
* I keep getting kicked off when I try to log in.  
* " the logged in screen would flash then kick me out. happened several times."  
* " stop logging me out while I'm ACTIVELY USING this VA app\!\! It's ridiculous that while I'm actively browsing my claims information"  
* "Get into my account but kept getting thrown out"

### Issue with personal information

* "UNABLE TO SIGN IN DUE TO INCORRECT EMAIL ADDRESS THAT SHOULD HAVE BEEN CORRECTED"  
* "Trying to get my fucking phone number changed."  
* "I no longer have this E mail makes it impossible to sign in"  
* "they want to send verification to our old phone numbers. I put the new phone numbers into the boxes that asked but at the end it reverts back to the old phone numbers."  
* "I need to change my password but when I do that it is sending an authorization code to a phone number that I no longer have."  
* "Tried to get account IDme and used wrong email. could not get corrected"  
* "THE PHONE NUMBER YOU HAVE FOR SENDING THE ONE-TIME CODE IS MY WIFES NUMBER. PLEASE CORRECT THIS IN THE SYSTEM"  
* " “you can't use your email because it's still being used." I can't create any new way to access my V.A. healthcare records."  
* " the phone numbers on hand were no longer active .The system did not me allow or give me a way to change the phone number to the new number"  
* "my phone number had changed and there was no other options but my phone number.”  
* “I tried to create an account and because I use my email for my healthy vet. It won't let me use the email. Says already in use . Help\!”  
* “I can't change my email address that's on your records”  
* “When I try to get signed on under your new website you are trying to send me a code with old phone \#”

### Verify loop

* IDme  
  * existing account “Tried to sign in thru MyHealth.va.gov using my existing ( and it works just fine for all my other govt agency access topics ) id.me account.. afterwards Id.me sends me back to VA, who says they are going to verify my details and they send me back to id.me, after about 4 iterations of this, i gave up.”  
  * "each time I try to login in, it requests that I go through the entire process of signing in, starting with my driver's license, etc."  
  * "Completed all steps and each time I try to log in, the system takes me back to the verification part of the process"  
  * \[has to verify multiple times\] "I have verified my va.gov steps 3x and uploaded all information (including drivers license), but every time I try to log in, it makes me do the steps again"  
  * "I've verified FIVE times and it keeps cycling back to verify. I had a message that it was successfully completed."  
  * "Login with id.me account and I was then asked to verify identity which has already been done to get the id.me account "  
  * "When I try to get the va account I am told to verify identity and get sent back to login and round and round I go. Infinite do loop."  
  * \[maybe the /verify page or the MHV notification?\] "i re-verified my identity on the id.me webpage; the webpage shared my identity with the va; going back to the va pages and it tells me i have to verify my identity."  
* LIG  
  * "Went thru the identity process, got to the end and was told I had to go thru it again."  
  * " every time I log into Login.gov, it requires that I re-scan & upload the front and back of my drivers license"  
* Unknown CSP  
  * "it just keeps asking me to verify who I am this is BS\!\!\!\!"  
  * "I have verified my Id 3 times today"  
  * "I identified myself and was told it was done and then they asked me to do it again."  
  * " I have done the required steps, downloaded my drivers license, and then logged in to the medical.  But every time I log in again, I have to do the same thing.  I don't want to be making multiple id lists."  
* At least one complaint of repeating verify process is “after having already done this for myhealthevet"  

### Digital access \+ a11y \+ caregiver

* Veteran mentioned getting access to a tablet through VA  
  * "I'm caregiver for a blind Korean  War Vet.  He doesn't have a computer or cell phone.  I've been the one to send messages and order prescriptions thru his MyVet.  I don't understand how to set up this new system for the 31st"  
  * " It will become impossible to access this feature… Surely I am not the only spouse/caregiver facing this situation."  
  * "I can't sign in. I have NO telephone\!"  
  * " i had issues submitting my husband's photo ID, got frustrated and stopped. I am now trying to complete the process. I am his caregiver."  
  * "I was trying to log in to my existing account by clicking on an email notification that I have a secure message. I went to this page instead of a log in page." \- https://www.va.gov/resources/creating-an-account-for-vagov/  
  * I do NOT have a smart phone and cannot receive codes.  
  * " there is no way I can register for IDME LOGIN.Gov without a telephone or camera."  
  * “You assume everyone has a smart phone.”  
  * “I can not sign in as I do not have a Smart pone” 

### Confusion about sign in changes

* "I already have an IDme account.  What more do I have to do?  I"m very happy with the way I log in now\!"  
  * "Why do I need to create a LOGIN.GOV account when I already have one?  
  * " I already have a login.gov account that I got via my Social Security. I can't find how to let VA know. ???"  
  * " I have an Id account. Do I need both?"

### Content and/or IA \- *where is this thing I want to do*?

* Other  
  * "I have been using IDme to sign in for a year now and it keeps telling me to create an account before March 4."  
  * " I am receiving messages that I will be cut off of the VA website even thought I have been using ID me to log in"  
* Where do I verify \- many of these are on page https://www.va.gov/resources/verifying-your-identity-on-vagov/  
  * "There is too much confusion in all of these instructions and never giving a link to do it just more confusing instructions.”  
  * "It's telling me I need to verify my identity, but when I follow where it tells me to go it just brings me to a page that tells me I need to verify my identity \- never takes me to the page where I can verify my identity"  
  * "no way to actually verify my id after the explanation of how to verify my id"  
  * "Verify my identity. I clicked on a link to do so and it took me to an explanation of what verifying my identity was. But no actual way to verify my identity."  
  * "But it won't take me to page to complete verify identity.  It only goes to instructions.  I know the instructions, I want the page to actually verify."  
  * "System tells me I need to verify my identity. There is not option to do so. System keeps going in circles with no option to enter information."  
  * “JUST TAKE ME TO THE FUCKING LINK THAT I NEED INSTEAD OF TAKING ME TO PAGES AND PAGES OF "HOW TO"  
* where do I sign in  
  * " it is not clear where to sign in with ID ME \-- it just says create ID ME accounts."  
  * "there's no option for me to sign in using IDME...only choice is to create an account"  
  * \[seems to be lost on ID.me or LIG page\]  "I have tried by gov.ID login and seem to get in, but there is no button to move towards order medications"  
  * \[wants to sign in with an existing account\] "Ive already made an IDme account I JUST WANT TO SIGN IN\! but there is no place to do it\!\!\!"  
  * "You didn't leave any place at all that would allow me to go ahead and get logged in." \[using LIG\]  
  * " I don't need to create accounts, I just need to know how to use them to log on?"  
  * "I sign into Login.Gov and it gives me the Account Page. Fine...but then there is no apparent way to get to the VA thru it...or apparently anywhere else in the .Gov universe\! "  
  * "I have the ID me already but don't see where to use it on the healthevet sign in page. It just says to create account."  
  * \[signed in at CSP, can't get to VA\]  
  * "you have section for people to create an ID.me account or Login.gov account, but no section for the people that already have one of those accounts"  
  * "Trying to Log on with ID.ME, but cannot find it on the website\!"  
  * \[Maybe signing in at CSP\] “I signed in to login.gov, but couldn't access myhalthyvet through my login.gov account”  
  * "Sign in to id.me. Can't find out how."  
  * \[Maybe signing in at CSP\] “I can sign in to Idme . Gov but it wont link to the VA site.”  
  * "Trying to login in myheathevet and can't figure out which site to use"  
  * \[Maybe signing in at CSP\]  "unable to retrieve message.  I go through the ID.me section and nothing."  
  * "no clear log in if you have an account\!"  
  * "created login.gov and signed in.  Now where do I go? I want to go to my VA to order prescriptions.  Very confusing "  
  * "Signed in with Login.gov but can not access VA Accounts from that Web Page.  Only contains information on my account \- no connection to other VA Sites."  
  * "Trying to sign in to va.gov. I have an ID.ME account.  I am signed in to id.me.  Then I select va.gov, it asks me to sign in through id.me.  How do I get to va.gov?"  
  * "This only tells me how to setup Login.gov. It doesn't tell me how having that ID gets me to MyHealthVet?"  
  * "looking for "Login.gov" log in. It's not there\!"  
  * "WHEN I GO TO LOGIN.GON.... THERE IS NO LINK TO VA.GOV SITES"  
  * "No links available except for the HealtheVet log in, which no longer works"  
  * "starting in login.gov and then trying to find where to go online was confusing and overly complicated."  
  * "I wanted to learn how to access my account. Your told me how to set it up again and again, but not how to access it\! My account has been set up for over a month, but I don't know how to get to it now.” took survey from this page \- https://www.va.gov/resources/signing-in-to-vagov/\#how-to-sign-in  
  * "id.me or login.gov would not take me to VA site"  
  * "already acquired the required new login. So why isn't there a place to USE IT?\!? This page appears only to offer choosing or creating the supposedly more secure login”  
  * "when I go to VA it takes me to a page that says log in or create an account and I have to look around to log in. This is confusing. All other non-va sites take you to a log in page and below the log in area it will ask if you want to create an account."  
  * "I don't need to learn how to create one. That's all your va.gov page shows. You should have a link that takes me to [login.gov](http://login.gov)."  
  * "I logon to ID Me but I cannot see where it should link me to  the VA and my account. I cannot request refills of my life saving medications\!"  
  * “I already have an ID.me account but can't find anywhere to log in, just instructions on how to create an ID.me account.

### Transition notification issues

* "I already have an ID.me account and I am just trying to get the notice off of my account that keeps telling me I am not ready for my healthy vet after jan 31st."  
* "Am signed into the login.gov and my idententity verified but am being told I have one more thing to do but I don't know what it is."  
* " I am currently logged in to this website via that account, yet your page still tells me that I have until January 31, 2025, to create that login, which I have already done."  
* Getting notifications that my sign in  isn't complete but no further instructions given  
* "System said I need to do one more task but won't identify the task."  
* "The page tells me I still need to do things to sign in after 1/25/2025 but doesn't say what to do."  
* "You keep telling me I need to complete one more step but you are not very explicit on what that step needs to be. "  
* " I keep getting that message that i need to complete one more task\!\!"  
* MHV message "You must complete 1 required task before January 31, 2025 If you don't complete all required tasks, you may have trouble signing in to My HealtheVet and other VA websites after this date. We noticed you are not ready for My HealtheVet VA sign in changes after January 31, 2025 Learn how to be ready for VA sign in changes I have already completed this task and continue to receive a message. Please advise."  
* "You say that I need to create a sign in \- for Login.gov, as "one more task". I already did that several months ago. Now, I'm confused."  
* "On my HealtheVet home page it says that I need to complete 1 task for the change to ID.me to be able to log in. I am using my ID.me account and have no idea what the issue is. It is not clear what I need to do."  
* "I had a notification that I had not created an ID.me account when, in fact, I already have and have been using it to log in for months already."

### Page load

* "It just spins never connects.. on going problem." (on USiP, using MHV site)  
  * "Please wait while we load the application for you. But never loads.” (on sign in page, using mobile device)  
  * "This site was FROZE Nothing seemed to work. :("  
  * " The app would not load on my iPhone but worked on my tablet"  
  * "Log in. I've deleted and reloaded the app numerous times and I just end up with a spinning loop saying we're trying to load the application for you  
  * " the site would not load with good cell service."

### Positive sentiment

* “This helps me to get started” about this page \- [https://www.va.gov/resources/creating-an-account-for-vagov/](https://www.va.gov/resources/creating-an-account-for-vagov/)  
* "This site is easy to navigate and I was able to find all the information that I was looking for in the site\!"  
* "Website easy to follow and all updates successfully submitted. Keep up the excellent work."  
* "This was informative enough to allow me to choose which one to use. Thank you" about this page \- [https://www.va.gov/resources/should-i-create-a-logingov-or-idme-account-to-sign-in-to-vagov/](https://www.va.gov/resources/should-i-create-a-logingov-or-idme-account-to-sign-in-to-vagov/)  
* "Opening my ID. Me account, and the operator guidance was excellent."	on this page \- [https://www.va.gov/resources/verifying-your-identity-on-vagov/?next=loginModal\&postLogin=true?next=loginModal\&postLogin=true](https://www.va.gov/resources/verifying-your-identity-on-vagov/?next=loginModal&postLogin=true?next=loginModal&postLogin=true)
