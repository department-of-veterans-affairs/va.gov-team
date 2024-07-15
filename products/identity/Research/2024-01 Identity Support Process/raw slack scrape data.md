# Raw slack scrape data
- [Full spreedsheet](#full-spreedsheet) below, in this document
- [Google Sheets format](https://docs.google.com/spreadsheets/d/1f6fZjUplLmMvO7oqAMYjRa-GMsMNhPL6jaeLbAWqiFc/edit?usp=sharing) document holding this same data

## Notes after quick analysis	
- Our team gets or other responds to about 1 incoming request per work day (from these "intake" channels)	
- The vast majority of requests come to us from VSP-Identity channel - considering 91 represents only 4 months of data (Oct 23 - Jan 24) while all others represent a year lookback.	
	- Question - do we want to further push this as the place to ask questions and seek help from Identity?
	- Question - Is our ideal - that this is the only place we answer questions about identity?
	- Further consideration - We'll need a solution where we can easily punt things back and forth to or from other teams as needed.
- We get some requests from teams most folks probably don't - Platform - IDme - LIG	
	 - Further consideration - we should leave the idme-va-gov and va-login-partners channels open to questions ONLY from those cross-platform teams - if that's the best way for them to connect with us
- There are still many requests that our input is helpful for in the vfs-platform-support channel - possibly residual from when our team was a Platform team	
	- Question - Do we need an automation in this channel to direct identity questions to vsp-identitty?
	- Question - Is it too confusing - or should we combine back with Platform or in some way utilze this channel for fielding questions?
- In idme-va-gov the IDme team only had 3 requests or questions for our team - so the rest of the requests here were from other teams and 6 of those (half) were about test users	
	- Question - would it be worthwhile to redirect test user or mock auth questions out of this channel?
- In va-logingov-partners - all but 1 question came from LIG and required either our team or IAM to answer	
	- Question - Is there anything that needs to be changed with this usage pattern?
- The most request came from a OCTO - the chatbot team - or Platform team (49 total requests)	
	- Question - Are there any special considerations to taking care of these folks' needs/issues/questions?
	- Question - Since 12 of the 20 OCTO touches were general questions - we may not be able to alieviate random Slack messages for those?
- Considering all request types from all teams - bug requests came in the most () and then general questions (58) - again here we may not be able better route a substantial number of the general questions.	
	- Question - is it worth better classifying general questions?
- Most bug fix requests came from chatbot (11) unknown (8) and Lightouse (6) - while LIG - Mobile app - and OCTO folks each submitted 4 bug requests	
	- Question - Chatbot has needed to most help of any team - are there ways we can work with them differently to allieviate that?
	- Further consideration - Interestingly - many of the bug requests were not bugs we could fix or bugs in our code - but our team helped the requesting team correct their code related to authentication/MPI/etc - and so it ended up being more "help request"s even though that's not how they came into us
- Most requests or questions - we classified as "other" products. Outside of that category - the most requests we related to general authentication (30) and test users + mock auth (21) - there were also several requests related to CSP and MPI + veteran information - and then a long tail of other products mentioned	
	- Question - Would it be helpful to better breakout the classification of "other" here?
	- Question - Since quite a few requests are made about test users (or mocked auth) this might be a good use for an automated response
	- Question - What would we include in that automated response?
- Our team responded to the vast majority of these issues or questions that we "intook" even if we weren't specifically tagged. In some cases we only supplied some information and didn't resolve the issue	
	- Further consideration - How much does our team need to be scouring channels like #vfs-platform-support? If there isn't a path forward to combine with this intake - then we may want to bot it and stay away unless tagged.
- In 13 cases an issue was forwarded to us - in 12 we forwarded a case on to another team (usually IAM) - and in 10 cases another team jumped in to resolve	
	- Further consideration - The 10 cases that another team like IAM jumped in on and resolved will require our team to forward on if we intake a ticket that is directed to our team


## Full spreedsheet
| Slack Channel | Request - either raw or notes | Date of req | Team requesting | Request type | Product | Outcome | Consider stock response? | Notes | Possible Category Name for Request Type |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
idme-va-gov | accessibility test showed issues with IDme | Aug 2 | Lighthouse | bug fix | CSP | escelated to OCTO |  | Joe directed user to Tom - who would forward on to our team to figure out how best to work with IDme | 
idme-va-gov | Specific mock user - verification - benefits team | Oct 30 | Benefits | bug fix | mock/test user/auth | another team addressed |  | IDme dealt with the issue - noone from our team responded | User Access and Verification
idme-va-gov | Auth issue with test user account | Jul 27 | Education | bug fix | mock/test user/auth | another team addressed |  | IAM responded - working with IDme to resolve | User Access and Verification
idme-va-gov | prod sign in issue for MFA auth code (code generator) - benefits team | Sep 6 | Benefits | help request | mock/test user/auth | another team addressed |  | IDme dealt with the issue - noone from our team responded | Technical and Data Request
idme-va-gov | Staging MHV mock user cred - need help setting up MFA - mobile team | Jan 24 | Mobile app | help request | mock/test user/auth | our team responded | yes | setting up MFA for test user | User Access and Verification
idme-va-gov | need DSL test account creds | Sep 26 | IDme | help request | mock/test user/auth | our team responded |  | our team took to DM | 
idme-va-gov | need DSL test account creds - IDme team | Feb 2 | IDme | help request | mock/test user/auth | our team responded |  | our team took to DM | 
idme-va-gov | 503 errors when auth on staging - mobile app | Apr 10 | Mobile app | bug fix | other - descibe in notes | other result |  | message edited and noted resolved - no comments or replies | 
idme-va-gov | questions about vets API | Feb 18 | IDme | general question | other - descibe in notes | our team forwarded to another team |  | our team first responded - Lighthouse team stepped in | 
idme-va-gov | prev issue fix - PR still needed merge | Feb 10 | Sitewide public | PR review | other - descibe in notes | our team responded |  | our team reviewed ticket - requested approval from a VA PO | 
idme-va-gov | unable to sign in | Apr 14 | Benefits | bug fix | SSOe or IAM | our team forwarded to another team |  | Our team first responded - ended up with IAM | 
idme-va-gov | now needing to verify mock/test users - chatbot team | Oct 2 | Chatbot |  |  | other result |  | cross post from vfs-platform-support  | 
va-login-partners | specific user issue - claiming to have to reverify account - interested in how to cooperate to fix | Aug 8 | LIG | general question | account creation and verification | our team responded |  | our team worked with LIG - issue was closed - but never resolved | User Access and Verification
va-login-partners | accessibility test showed issues with LIG | Aug 2 | Lighthouse | bug fix | CSP | escelated to OCTO |  | Joe directed user to Tom - who would forward on to our team to figure out how best to work with IDme | Technical and Data Request
va-login-partners | "How should LIG contact center handle ""error 70"" can't authenticate (MFA)" | Jan 18 | LIG | bug fix | CSP | our team responded |  | Tom responded that it was a known issue | Technical and Data Request
va-login-partners | "How should LIG contact center handle ""error 70"" can't authenticate (MFA)" | May 5 | LIG | bug fix | CSP | our team responded |  | IAM responded that issue was resolved | Technical and Data Request
va-login-partners | Help on handeling a LIG call center case (about IPP) | Jan 31 | LIG | bug fix | other - descibe in notes | escelated to OCTO |  | our team's (former) PO tagged and responded | 
va-login-partners | How should LIG contact center handle a PE error? | Feb 3 | LIG | bug fix | other - descibe in notes | our team forwarded to another team |  | our team tagged IAM to resolve | 
va-login-partners | VA website question - one page directing user to IDme another similar directing to LIG | Sep 27 | LIG | general question | other - descibe in notes | another team addressed |  | Tom tagged - but IAM responded | 
va-login-partners | is MHV down? | Aug 10 | LIG | general question | other - descibe in notes | our team forwarded to another team | maybe | Tom/Joe tagged but then referred to IAM | Technical and Data Request
va-login-partners | question about VA lead researcher while Shane was on leave | July 20 | LIG | general question | other - descibe in notes | our team forwarded to another team |  | our team directed her to the proper contacts | Technical and Data Request
vagov-identity | question about user access and edit ability to their own info per verification level | Jun 5 | VA PO | general question | account creation and verification | our team responded |  | our team and PO discussed/answered | Technical and Data Request
vagov-identity | question about MFA | Jun 27 | LGA | general question | CSP | our team responded | yes | our team answered - what happens when user loses MFA method? | 
vagov-identity | questoin about uptime | Jun 12 | LGA | general question | logs | our team responded | maybe | our team answered | 
vagov-identity | questions about SiS implementation and SSOe deprecation | Jan 29 | VA PO | general question | SiS | our team responded |  | our team and PO discussed/answered | 
vagov-identity-product-team | question about the ID proofing help videos our team was working on | Sep 25 | LGA | general question | account creation and verification | our team responded |  | our team answered | 
vagov-identity-product-team | conducting secondary research on veteran sign ins | Feb 15 | VES | general question | CSP | our team forwarded to another team |  | forwarded to vsp-identity channel | 
vagov-identity-product-team | they saw a user help request for password help | Nov 27 | Sitewide public | help request | CSP | other result |  | LGA answered - then VA PO directed to VSP-identity channel | 
vagov-identity-product-team | help pulling ICN for mobile app users | Jan 16 | LGA | data request | logs | our team forwarded to another team |  | our team responded - forwarded to mobile app team first - then to DD | 
vagov-identity-product-team | add the ICN value of the logged in user to the userverifier log | Jan 19 | LGA | feature request | logs | our team responded |  | our team created a ticket | 
vagov-identity-product-team | Can we check if a LIG or IDme user has a premium MHV? | Jan 31 | MHV to VA | general question | logs | other result |  | information request - no one responded yet | 
vagov-identity-product-team | software use (Vercel) question to LGA | Jan 9 | Publishing team | general question | other - descibe in notes | another team addressed |  | direct to LGA - they answered | 
vagov-identity-product-team | question about work specific to LGA | Mar 2 | CAIA | general question | other - descibe in notes | another team addressed |  | related to CSP migration work | 
vagov-identity-product-team | removing site content encouraging DSL account creation | Feb 22 | CAIA | general question | other - descibe in notes | another team addressed |  | related to CSP migration work | Technical and Data Request
vagov-identity-product-team | Tracking down an experiemental design  | Jan 11 | Platform | general question | other - descibe in notes | our team forwarded to another team |  | our team was tagged and forwarded to LGA | Technical and Data Request
vagov-identity-product-team | requesting write access to vsp-infra-application-manifests repo | July 21 | unknown | other - specify in notes col | other - descibe in notes | other result |  | directed here from vfs-platform-support - no one responed in this channel - but was resolved on the support post | 
vagov-identity-product-team | need to allows representatives a way to sign in | Oct 11 | Representative | feature request | other authentication | other result |  | cross post in vsp-Identity | 
vagov-identity-product-team | question about accessing edu tools only with IDme or LIG accounts | Feb 8 | Education | general question | other authentication | another team addressed |  | LGA answered - but focus seemed to be on how it affected grandfathering | 
vagov-identity-product-team | rollback request for a code push | Apr 4 | Sitewide public | bug fix | USIP | our team responded |  | our team and LGA both responded - also crossposted in platform support | 
vfs-platform-support | Wanted to know who to talk with about authenticating a user and checking for user sessions | Oct 23 | Verify your enrollment | general question | logs | forwarded to our team |  | our team was tagged and addressed | Technical and Data Request
vfs-platform-support | Q on if mocked auth works with vets-api in docker | Sep 6 | Platform | general question | mock/test user/auth | forwarded to our team |  | our team was tagged - after some back and forth Platform team folks seemed to take back over and resolved | Technical and Data Request
vfs-platform-support | need to remove 5 records due to PII captured in DD and Sentry | Apr 19 | Forms | bug fix | MPI/MVI or user info | forwarded to our team |  | our team tagged - offered some info about DD | 
vfs-platform-support | user field returning nil | Mar 30 | Benefits | bug fix | MPI/MVI or user info | forwarded to our team |  | our team tagged and resolved | 
vfs-platform-support | ssl connect errors in my vets-api logs | Jan 9 | unknown | bug fix | MPI/MVI or user info | forwarded to our team |  | our team tagged and responded | 
vfs-platform-support | test data sync PR with staging MPI is causing significant test user issues  | Jan 17 | Lighthouse | bug fix | MPI/MVI or user info | our team responded |  | our team tagged and responded | 
vfs-platform-support | request is about sending user ids to DD to count unique users | Jan 26 | Secure Messaging | general question | MPI/MVI or user info | forwarded to our team |  | our team was tagged to ask how we track sessions and for advice | Technical and Data Request
vfs-platform-support | Needs MPI help trying to retrieve veteran name and info | Sep 14 | Benefits | general question | MPI/MVI or user info | forwarded to our team |  | our team was tagged and addressed | 
vfs-platform-support | code requires EDIPI - but at least one veteran didn't - so errored | Feb 3 | Benefits | general question | MPI/MVI or user info | our team responded |  | our team responded and addressed | 
vfs-platform-support | Increase in Sentry errors | Jan 11 | Lighthouse | bug fix | other - descibe in notes | forwarded to our team |  | our team tagged and responded | 
vfs-platform-support | a category of forms failing since vets.api update | Dec 18 | Platform | bug fix | other - descibe in notes | other result |  | Vets.api - our team chimed in without a public tag on the thread and offered info | 
vfs-platform-support | "Is dev down? Getting a ""error 500"" for attempting to sign in" | Dec 7 | Chatbot | bug fix | other - descibe in notes | other result |  | dev.api - our team chimed in without a public tag on the thread and offered info | 
vfs-platform-support | code merge issue | Jul 24 | LGA | bug fix | other - descibe in notes | other result |  | our team chimed in without a public tag | 
vfs-platform-support | concern with inability to reach an endpoint after a change | May 3 | Appointments | bug fix | other - descibe in notes | other result |  | our team chimed in without a public tag and helped resolve | 
vfs-platform-support | GIDS failed to deploy to staging | May 1 | unknown | bug fix | other - descibe in notes | other result |  | our team chimed in without a public tag | 
vfs-platform-support | merge on vets-api failed | Aug 30 | Mobile API | bug fix | other - descibe in notes | our team responded |  | our team responded and addressed | Technical and Data Request
vfs-platform-support | big drop off in user completion rate of ITF controlle | Aug 13 | VA PO | bug fix | other - descibe in notes | our team responded |  | controller issue - our team got paged - wasn't able to help directly - but offered info towards the issue | Technical and Data Request
vfs-platform-support | BGS <-> vets-api issue | Feb 2 | Benefits Management | bug fix | other - descibe in notes | our team responded |  | our team responded and addressed | Technical and Data Request
vfs-platform-support | needs to know where vaGov is pulling data from eMIS | Jul 25 | VA PO | general question | other - descibe in notes | other result |  | our team chimed in without a public tag with some info | Technical and Data Request
vfs-platform-support | test suite questions specifically for vets-api rspec tests | Aug 22 | Mobile app | general question | other - descibe in notes | our team responded |  | our team chimed in without a public tag and resolved | Technical and Data Request
vfs-platform-support | why was the betamocks repo archived? | Aug 21 | Benefits | general question | other - descibe in notes | our team responded |  | our team chimed in without a public tag and offered info | Technical and Data Request
vfs-platform-support | access request for vets.api | Sep 28 | Conention Classification | other - specify in notes col | other - descibe in notes | other result |  | our team chimed in first with an idea - but was ultimately addressed by Platform | 
vfs-platform-support | PR review | Nov 1 | Auth exp | PR review | other - descibe in notes | forwarded to our team | yes | Platform directed to @VSP-identity-group - but #vsp-identity would have been better | 
vfs-platform-support | PR review | Apr 17 | Chatbot | PR review | other - descibe in notes | forwarded to our team |  | our team tagged and resolved | 
vfs-platform-support | PR review | Jan 16 | Chatbot | PR review | other - descibe in notes | other result |  | our team was tagged - but not our team's code to review | 
vfs-platform-support | Access request to Argo EKS | Apr 20 | Chatbot | task request | other - descibe in notes | forwarded to our team |  | our team appeared to be DM'd and responded | 
vfs-platform-support | repo access request | Jul 24 | LGA | task request | other - descibe in notes | other result | maybe | repo access for LGA team member - our team called in - but it's an LGA repo not our team's | 
vfs-platform-support | unable to sign in dev with unverified IDme | Oct 2 | Chatbot | bug fix | other authentication | forwarded to our team |  | our team chimed in without a public tag on the thread and offered info - also referenced a vsp-identity thread with IAM | 
vfs-platform-support | Unable to authenticate on Review | Sep 29 | Secure Messaging | bug fix | other authentication | other result |  | referenceda thread in VSP-identity - where our team reccomended submitting a ticket here. Our team chimed in to add exrta clarity and info to this request | 
vfs-platform-support | sign in issue on staging - thinks its an oauth issue | Sep 21 | Conention Classification | bug fix | other authentication | other result |  | our team appeared to have gotten DM'd - and jumped in to resolve this | 
vfs-platform-support | Prod Oauth issue seeing SSL cert issue | Apr 17 | Lighthouse | bug fix | other authentication | other result |  | our team chimed in without a public tag with some info | 
vfs-platform-support | Sentry error clean up - specifically auth errors | Feb 22 | Mobile API | general question | other authentication | our team responded |  | our team responded and addressed | 
VSP-identity | data on new accounts | Oct 6 | Sitewide public | data request | account creation and verification | our team responded | maybe | our team linked DD screen shots | 
VSP-identity | anyone heard of VERA? | Oct 26 | Veteran Support | general question | account creation and verification | our team responded |  | using VERA to assist with identity verification | 
VSP-identity | certs giving alerts | Jan 12 | VA PO | task request | certs | our team responded |  |  | 
VSP-identity | IDme seems down on staging | Jan 10 | Forms | bug fix | CSP | our team responded |  |  | 
VSP-identity | "IDme signing not working on dev ""error 70""" | Dec 13 | Chatbot | bug fix | CSP | our team responded |  | our team already working on this issue with IAM | 
VSP-identity | Questions about CSPs and verification | Dec 20 | VA PO | general question | CSP | other result | yes | our team responded - along with the CSPs | 
VSP-identity | "MFA (""2FA"") question forward from another channel" | Oct 11 | Auth exp | general question | CSP | our team responded |  |  | 
VSP-identity | "mock user issues in staging (MHV vs va) - ""no MPI record""" | Jan 25 | Mobile app | bug fix | mock/test user/auth | forwarded to our team |  | IAM stepped in first but then forward to our team - after some back and forth across teams - issue was resolved | 
VSP-identity | test user issue on staging - it signed out without warning | Nov 27 | Auth exp | bug fix | mock/test user/auth | other result |  | first response was VA PO - and that this is likely not a bug | 
VSP-identity | Unable to ID verify a LIG mock user to use on staging | Jan 29 | Mobile app | bug fix | mock/test user/auth | our team responded |  | another q also asked in the back and forth | Technical and Data Request
VSP-identity | nil returning on certain test users | Dec 1 | Platform | bug fix | mock/test user/auth | our team responded |  | MVI issue on this test user | Technical and Data Request
VSP-identity | test user issues in dev | Nov 6 | Chatbot | bug fix | mock/test user/auth | our team responded | maybe | directed the team on how to set up mock data with MPI | Technical and Data Request
VSP-identity | mock user issue | Oct 24 | Secure Messaging | bug fix | mock/test user/auth | our team responded |  | our team responded but it was something that we couldn't help with | Technical and Data Request
VSP-identity | test user issues signing in with IDme | Oct 24 | unknown | bug fix | mock/test user/auth | our team responded |  |  | Technical and Data Request
VSP-identity | test user issue signing in locally | Oct 19 | unknown | bug fix | mock/test user/auth | our team responded |  | using actual mocked auth site - but realized it was an issue on their side | Technical and Data Request
VSP-identity | test user issue signing in locally | Oct 17 | unknown | bug fix | mock/test user/auth | our team responded |  |  | Technical and Data Request
VSP-identity | how to look up a test user based on PID | Oct 2 | VES | general question | mock/test user/auth | our team responded |  | our team responded with how to query MPI for needed info and recc'd other q's to IAM | Technical and Data Request
VSP-identity | needs a specific mock user for staging | Jan 29 | unknown | other - specify in notes col | mock/test user/auth | our team responded | yes | this could be a stock response | Technical and Data Request
VSP-identity | need documentions on creating a test user | Oct 16 | MHV to VA | other - specify in notes col | mock/test user/auth | our team responded | yes | linked documentation and answered a couple questions | Technical and Data Request
VSP-identity | Needs LOA1 test user on staging | Dec 28 | Auth exp | task request | mock/test user/auth | our team responded | yes | this could be a stock response | Technical and Data Request
VSP-identity | test user info on staging | Dec 4 | Auth exp | task request | mock/test user/auth | our team responded |  |  | Technical and Data Request
VSP-identity | DD monitoring alert | Jan 30 | OCTO watch officer | bug fix | monitoring | our team responded |  | Our team responded - we set up this alert isn't not critical - we're watching | Technical and Data Request
VSP-identity | DD monitoring alert | Dec 8 | VA PO | bug fix | monitoring | our team responded |  | our team and the VA engineer worked to fix an issue on the DD monitors | Technical and Data Request
VSP-identity | want approval to disable monitoring during upgrade | Jan 29 | Platform | other - specify in notes col | monitoring | our team responded |  | just a quick confirmation | Technical and Data Request
VSP-identity | failing POA submission in prod | Nov 13 | Lighthouse | bug fix | MPI/MVI or user info | other result |  | our team responded - after troubleshooting decided code other than ours or MPI was at issue - and recommended asking VBMS to resolve the issue | Technical and Data Request
VSP-identity | email not on file | Nov 17 | VA Notify | bug fix | MPI/MVI or user info | our team responded |  | guided team to source email from another call | Technical and Data Request
VSP-identity | test user issue on staging - MPI error | Nov 7 | Mobile app | bug fix | MPI/MVI or user info | our team responded |  |  | Deployment and Repository Issues
VSP-identity | user info (converting SSN to UUID) | Oct 24 | Verify your enrollment | feature request | MPI/MVI or user info | our team responded |  | our team and IAM responded | Deployment and Repository Issues
VSP-identity | questions about IAM toolkit and MPI | Nov 1 | LGA | general question | MPI/MVI or user info | other result | maybe | our team tagged IAM to respond | Technical and Data Request
VSP-identity | MPI q about field case | Jan 19 | MHV | general question | MPI/MVI or user info | our team forwarded to another team | maybe | MVI/MPI product question - IAM answered a precursor question - our team then answered on best option for solution | Research and Documentation
VSP-identity | wants a user's email address | Dec 4 | Chatbot | general question | MPI/MVI or user info | our team responded |  | lot of back and forth and code debugging or finessing of other team's code | Technical and Data Request
VSP-identity | error with IAM bulk load in SQA | Nov 16 | VA Notify | bug fix | other - descibe in notes | another team addressed |  | This was addressed to IAM - they responded | 
VSP-identity | MPI apostrphy in name | Dec 27 | Chatbot | bug fix | other - descibe in notes | other result |  | another VFS team linked doc - our team responded - and IAM responded | 
VSP-identity | chatbot error with state.user.profile.accountUuid empty needs to be null vs undefined | Oct 10 | Chatbot | bug fix | other - descibe in notes | our team forwarded to another team |  | forwarded requestor to Platform | 
VSP-identity | issues signing in to test vets.api locally | Jan 3 | unknown | bug fix | other - descibe in notes | our team responded |  | vets.api issue that was on vfs teams side | 
VSP-identity | getting errors with a line of their code | Dec 26 | Chatbot | bug fix | other - descibe in notes | our team responded |  | issues with requestor's code that our team helped find | 
VSP-identity | Trouble implementing LOA3 - also has some questions | Dec 7 | Forms | bug fix | other - descibe in notes | our team responded |  | I labeled it bug fix - cause there was a q - but the actual request ended with troubleshooting | 
VSP-identity | Our code update causing an issue elsewhere | Dec 5 | VA PO | bug fix | other - descibe in notes | our team responded |  |  | 
VSP-identity | q's around prod deploy fail | Oct 2 | Forms | bug fix | other - descibe in notes | our team responded |  | code referencing IDme that needed to be removed on that teams side | 
VSP-identity | Incident follow up | Jan 30 | VA PO | general question | other - descibe in notes | escelated to OCTO |  | Our team responded but our PO stepped in | 
VSP-identity | vet360 sidekiq question - who's responsible for a task | Jan 22 | Mobile app | general question | other - descibe in notes | escelated to OCTO |  | our team responded and forwarded to our VA PO | 
VSP-identity | increase in DSL casess: auth code - remote proofing - session stickiness issues | Oct 6 | Veteran Support | general question | other - descibe in notes | escelated to OCTO |  | this included multiple issues and products - our PO moved convo to DM channels | 
VSP-identity | question about prior work | Oct 26 | Platform | general question | other - descibe in notes | our team forwarded to another team |  |  | 
VSP-identity | GH question on our team repo | Jan 16 | Platform | general question | other - descibe in notes | our team responded |  |  | 
VSP-identity | questions about verification levels | Dec 21 | Forms | general question | other - descibe in notes | our team responded | yes | our team answered - but also rec'd talking with CSP to confirm our understanding | 
VSP-identity | question about PIA and needed data exchanges with MHV | Nov 30 | VA PO | general question | other - descibe in notes | our team responded |  |  | 
VSP-identity | and old controller is recieving traffic on dev and staging | Nov 8 | VA PO | general question | other - descibe in notes | our team responded |  | we removed the controller | 
VSP-identity | code ownership and if certain code is needed | Oct 31 | VA PO | general question | other - descibe in notes | our team responded |  |  | 
VSP-identity | PR review request | Jan 30 | Platform | PR review | other - descibe in notes | other result |  | no one has responded yet | 
VSP-identity | PR review request | Nov 21 | Platform | PR review | other - descibe in notes | other result |  | no public response on this post but our team did respond on the ticket | 
VSP-identity | PR review request | Dec 19 | MHV | PR review | other - descibe in notes | our team responded |  |  | 
VSP-identity | PR review request | Dec 13 | Platform | PR review | other - descibe in notes | our team responded |  |  | 
VSP-identity | PR review request | Dec 12 | Forms | PR review | other - descibe in notes | our team responded |  |  | 
VSP-identity | PR review request | Nov 22 | VA PO | PR review | other - descibe in notes | our team responded |  |  | 
VSP-identity | PR review request | Nov 20 | VA PO | PR review | other - descibe in notes | our team responded |  | turned out a product our team doesn't own | 
VSP-identity | set up new app with MAP team | Jan 11 | VAOS | task request | other - descibe in notes | our team responded |  | set up app with MAP team | 
VSP-identity | questions about verification levels | Dec 4 | Forms | task request | other - descibe in notes | our team responded |  | our team offered content suggestions and clarified identity concepts | 
VSP-identity | regular GET endpoint runs getting errors | Oct 4 | Mobile app | bug fix | other authentication | another team addressed |  | another VA PO replied first - need to file a req with serivce desk to get routed to TIC ops team | 
VSP-identity | intermittent issues on dev and local eauth timeouts | Dec 28 | Chatbot | bug fix | other authentication | other result |  | noone responded publicly before requestor commented that things seemed to stablized | 
VSP-identity | unstable sign in - with various errors | Jan 12 | Chatbot | bug fix | other authentication | our team responded |  |  | 
VSP-identity | Session stickiness not lasting 30 min in prod | Jan 3 | Secure Messaging | bug fix | other authentication | our team responded |  | no (publicly threaded) resolution | 
VSP-identity | issues signing in with verified user on localhost | Dec 13 | Education | bug fix | other authentication | our team responded |  | our team was already working on a potentially related issue | 
VSP-identity | issues signing in with verified user on localhost | Dec 5 | Education | bug fix | other authentication | our team responded |  | look to this post - to see several items needed before addressing the issue | 
VSP-identity | IDme signing not working on local | Dec 4 | Chatbot | bug fix | other authentication | our team responded |  |  | 
VSP-identity | error 70 for all sign in attempts | Nov 17 | unknown | bug fix | other authentication | our team responded |  |  | 
VSP-identity | error message on staging (during UX testing) | Nov 16 | MHV | bug fix | other authentication | our team responded |  | decided this was the teams code at fault | Research and Documentation
VSP-identity | error message on staging (about to have UX testing) | Nov 16 | MHV | bug fix | other authentication | our team responded |  | trouble shooting | Technical and Data Request
VSP-identity | short session expirations | Nov 2 | VA PO | bug fix | other authentication | our team responded | maybe | our team clarified differences in staging vs prod for keep alives | Technical and Data Request
VSP-identity | issue signing in to review instance | Oct 17 | unknown | bug fix | other authentication | our team responded |  |  | Research and Documentation
VSP-identity | setting up meeting/sync | Jan 18 | Representative | feature request | other authentication | our team responded |  |  | User Experience
VSP-identity | MHV linking to va.gov in various enviorons | Oct 31 | Secure Messaging | feature request | other authentication | our team responded |  | our team has ticket in backlog | User Experience
VSP-identity | can an external app use SiS or IAM? | Nov 6 | Benefits | general question | other authentication | other result |  | our team and IAM responded | Research and Documentation
VSP-identity | question/notification about drop in sign in activity over a time period | Jan 9 | VA PO | general question | other authentication | our team responded |  |  | Error Cleanup and Authentication
VSP-identity | Several questions about sign in - CSPs - UUID - etc | Dec 15 | AskVA | general question | other authentication | our team responded |  | a followup question was referred to another team | Technical and Data Request
VSP-identity | veteran UX participant described an issue this team wants to learn more about | Nov 3 | Benefits | general question | other authentication | our team responded |  |  | 
VSP-identity | Set up sync to discuss auth for Representatives | Oct 11 | Representative | general question | other authentication | our team responded |  | req for meeting/sync | 
VSP-identity | convo moved to this channel by our team RE MHV PHR refresh | Oct 6 | MHV | general question | other authentication | our team responded |  | this convo began somewhere else and was brought over to this channel | Error Cleanup and Authentication
VSP-identity | veteran having issues signing in - assuming this is call center | Dec 19 | Veteran Support | other - specify in notes col | other authentication | our team responded |  |  | 
VSP-identity | MHV kiosk sign in - status check | Jan 30 | VA PO | task request | other authentication | our team responded |  |  | Research and Documentation
VSP-identity | want a sync about setting up oAuth secret code - testing help | Oct 12 | Chatbot | task request | other authentication | our team responded |  |  | Research and Documentation
VSP-identity | signing in on USIP vs MHV's sign in page | Jan 31 | VA PO | general question | security | our team responded |  |  | Research and Documentation
VSP-identity | SiS for MAP JWT - need help to get ICNs and Client IDs | Oct 11 | Chatbot | data request | SiS | our team responded |  | req for help/info/tasking of identity team | 
VSP-identity | Question on how to implement SiS - how to get to ID Dash | Jan 30 | VSO fast track | general question | SiS | our team responded |  |  | 
VSP-identity | Question on using SiS vs existing SSOe for new Rep sign in page | Jan 24 | Representative | general question | SiS | our team responded |  | much discussion - resovled | Testing and Deployment
VSP-identity | Auth stickiness not lasting - SSOe | Dec 14 | Chatbot | bug fix | SSOe or IAM | our team responded |  | our team responded and mostly addressed - but IAM did come in and both them and our team worked to resolve | 
VSP-identity | testing use cases from MHV to deeplink VAgov - q are staging v prod and SSOe behavior | Oct 4 | VA PO | general question | SSOe or IAM | our team responded |  | quite a few follow-ups and back and forth | Testing and Deployment
VSP-identity | removing IAM sign in on mobile (for very old app versions) | Jan 25 | Mobile app | general question | USIP | our team forwarded to another team |  | our team responded - but after some discussion - decided that IAM needed to step in | Research and Documentation
VSP-identity | want flows for signing in | Jan 29 | Platform | general question | USIP | our team responded |  |  | Research and Documentation
VSP-identity | asking about approach to using USIP with representative sign in | Jan 26 | VSO fast track | general question | USIP | our team responded |  | lots of discussion to resolve request | Research and Documentation
VSP-identity | MHV sign in changes | Jan 16 | VA PO | general question | USIP | our team responded |  |  | Research and Documentation
VSP-identity | Authentication in staging vs prod - FE differences | Jan 5 | VSO fast track | general question | verify identity widget | our team responded |  | item asked about was in a VFS team's control - not ours - another question arose in the back and forth that was answered by our team | 
