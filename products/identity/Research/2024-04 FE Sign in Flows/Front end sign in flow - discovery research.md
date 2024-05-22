# Front end sign in flow - secondary research

## Background
There is a lack of consistency across the site on content and IA related to sign in flows. There are also general IA and UX issues with sign in flows. OCTO Identity, this team, is stepping in as an owner to help manage the front end experience of sign in flows across the VA.gov. As a first step into this work, our goal is to become more familiar with it, some definite, and potential issues that we can research further and work on in future sprints. 

## Our Process
We pulled various data and had several discussions to help onboard to the current sign in flow experience, including interactions with other team’s products.

### Data sources
- Literature review
- Contact Center Data
 -Opt-in survey data
- Intercept survey data
- IA artifact review
- Existing error messages
- VA DS future state
- Stakeholder discussions
- OCTO IA
- Platform Content (CAIA)
- Identity team engineers
- Moving through flows first hand

### Literature review and Contact Center Medallia survey data
We combed through past VA research from our and other teams that relate to the sign in process and flows. Other teams often gather tidbits or even significant data about the sign in process while conducting research about their products. In some cases we were even able to access a study's raw data around this topic. We supplemented this with recent data from the Contact Center team, especially qualitative data from their opt-in and intercept surveys.

Most of this data spoke more generally to sign in and verification likely bringing up the most offensive issues folks face. Further, much of the data from these sources reinforce points that our team has long considered known. This data points to some long-term issues still existing, like:

- Some veterans prefer a balance that leans less towards security and more towards usability, while others appreciate a balance towards data security.
   - It’s going to be impossible to make everyone happy in this regard without offering individuals the ability to choose their own level of security, which is not likely a good situaction for VA
- Some veterans feel the account creation process, including verification, is cumbersome, overly confusing and fraught with issues.
   - Some veterans have significant issues verifying their identity for their modern CSP account. Some seem to be completely unable to verify with at least one of the modern CSPs.
   - The most cited issue is with the system accepting an image of their ID. However, incorrect phone number and address issues with living OCONUS are also brought up as blockers to verification.
- Some veterans feel authentication is overly confusing and cumbersome
   - Some veterans get confused by having so many CSP options
   - Some veterans are simply annoyed by any MFA while others have legitimate complaints
       - Many veterans would prefer not have MFA check with every single authentication
       - Some veterans have trouble with MFA due for accessibility reasons (like blindness, mobility, or cognitive disability)
       - Some veterans are unable to MFA due to not having access to their cell phone and or data/service during parts of the day.
       - Some of these folks may have an easier time if they use an MFA other than SMS or a phone call. A code generate app still requires service, so would not be a good alternative for some of these folks
- Legacy CSPs have their own issues
   - MHV is likely a root cause of confusion between some veterans understanding a CSP being a way to sign in vs a place to go
      - However another cause might be the way we present the sign in options on the USiP and our own support content around CSPs.
   - DSLogon causes issues with double MFA
   - DSLogon being difficult due to how often passwords need to be changed, and the length requirements
- Some veterans end up having to sign in multiple times as they move through using different tools and subsites
   - Some of this might be due to Single Sign On issues between certain subsites
   - Speculating, but some of this might also be when accessing certain sensitive parts of the site like Direct Deposit change that include the extra step for security and folks are understanding this as another sign in.
- Mobile authentication brings a whole host of its own issues, some of which our team doesn’t own, including biometric authentication. The parts which our team does own parallel the previously mentioned items
- Particular items of note in the Medallia survey data
   - We only pulled survey responses that included keywords or that originated on a page that had to do with authentication or verification
   - With 31,520,000 authentications over Jan to April and 548 respondents for the intercept survey, we get a margin of error of +/-4.5% with a confidence level of 95%
      - BIG CAVEAT: while this is technically statistically significant, folks who take surveys can be a particular type with particular feelings in the moment, so still may not be truly representative. The error rate or confidence doesn’t take this into account. This is especially true of opt-in surveys, so while we took account of the qualitative data for both, we’re only pulling out quantitative data for the intercept survey.
      - To illustrate this point of the 2077 respondents to the opt-in survey 1744 marked no to the question were you “able to do your task today” and an additional 27 left that blank but left a poor rating for “satisfaction with site” and also mentioned issues in another open comment field. On the other hand 165 were able to accomplish their task and another 134 left all open comment areas blank. The average rating from the opt-ins was 1.66 out of 5
      - The intercepted respondents saw a slightly different question “how would you rate your VA.gov experience.” Those folks selected an average of 2.47 out of 5, or almost 1% point higher than the opt-in experience rating.
- Just over 9% of respondents mentioned the words verify, verified, verification (keeping in mind that these were some of the key words we were looking for
- Almost 12% mentioned the words unable, can't, difficult, or error.
- The overall themes of these responses were issues with authentication (including MFA), issues with verification (including ID images), frustrations with complexity (mostly too many CSP options), technical issues (like error messages or complaints of sign in looping).
   - See IA artifact review for more information on looping
- Experience ratings for VA.gov intercept survey respondents were generally higher with mobile and generally higher with folks using Safari browser. Folks on mobile devices using Safari or Chrome gave the highest rating out of 5.
   - While of interest, there is an important caution that this may have limited actionability. This data does not establish a causal relationship. For example it doesn’t tell us if the experience comes across differently on mobile and/or for Apple products in a way that makes it more user friendly, or if folks using mobile and/or Apple products are more likely to have an easier time with authentication technology in general.


| Intercept segment | Average rating |
| --- | --- |
|Chrome on mobile | 2.91 |
|Safari on mobile | 2.91 |
|All intercepts | 2.47 |
|Safari on desktop | 2.43 |
|Edge on desktop | 2.29 |
|Chrome on desktop) | 2.18 |
|all other desktop | 2.06 |

### Error message review
We reviewed the existing error messaging our team owns as well as error messaging that we ran into and that IAM team owns. Authentication and verification issues can end up on any of these, so they are all important when considering the sign in experience.
- Identity team error message documentation
   - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/sign-in-error-handling.md
- Identity team documentation for troubleshooting error messages
   - https://github.com/department-of-veterans-affairs/va.gov-team/blob/a080cd1dd0794ad802780ea59cdf68c6cf8edadf/products/identity/Troubleshooting_logging/troubleshooting_signin.md
- Since IAM is outside our purview we didn’t gather a full list of their error messaging, but we did review some, including:
   - Error messages that could be seen when starting from VA.gov and USiP
      - https://eauth.va.gov/isam/sps/auth=fail&code=004
      - https://eauth.va.gov/isam/sps/saml20sp/saml20/login
         - This error also shows for signing into https://ssp.vetride.va.gov/app/ with SSO option
      - https://eauth.va.gov/isam/sps/auth
   - Other error messages we came upon, unrelated to the USiP
      - https://fed.eauth.va.gov/oauthe/sps/oauth/oauth20/authorize?
      - https://eauth.va.gov/isam/sps/oidc/rp/OIDC-RP/redirect/IDME_OIDC?state=IRhTDw5t6Hc6N2SJCEdPHN&error=access_denied&error_description=The+resource+owner+or+authorization+server+denied+the+request

### IA artifact review
Mikki Northus, as OCTO IA lead, and her team had put together an IA review of the various sign in flows. We looked through those along with moving through some of the flows ourselves for the firsthand experience. These artifacts offered much insight into the current situation of this product.
- Visual inventory in Mural
   - https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1707497060514/1b011002bf25fbfe1f1c832c0566296ed86c0bb9?sender=u2aba00c97ab77c6ec1573123
- Inventory list in Google Sheets
   - https://docs.google.com/spreadsheets/d/1p0LV9q0hv8RCE-6r6PuiA454RE8PqC-K1QIt8QNsduQ/edit?usp=sharing
- These artifacts show quite a bit of variation to how VFS teams implement the sign in or verification widgets, including color, content, placement on page, and placement within a flow.
- The artifacts show that folks can run into error messages that don’t make sense for the situation and/or don’t give enough information to get back on track.
- These artifacts highlight several sticking points with authentication and verification flows both on VA.gov and with our CSPs.
- These artifacts show a sign in loop from the disability form 256 page, an error that should be resolved as quickly as possible. (Note: I could not reproduce this loop, because I get an error that I need an EDIPI number or BIRLS ID before continuing)

### VA DS future state review
The Platform CAIA content team has been working on updates to the design system that should improve the consistency of language in the sign in and verify widgets across teams. The widgets are a subset type of the alert that the Platform Design System team has also recently updated the style of. Once this work is finalized, all teams will need to update their current use of this alert on their tools and pages.
- Current VA DS sign in alert and verify alert prompts
   - https://design.va.gov/components/alert#sign-in-or-tool-prompt

### Stakeholder discussions
We discussed the details of various artifacts and findings with a couple stakeholders to better understand the work they’d done and the artifacts they’d put together.

## Key findings paired with recommendations

### 1. Error messaging
   - A. VA.gov error messages should be updated or changed. In some cases they are not showing information that can be the most helpful, in at least one case an error may be routing to the wrong error page.
      - One example of where we can create better experience is when someone has an error verifying their account with the CSP, the VA.gov error page is error code 009 and the message is “we can’t sign you in.” and “you were unable to create an account.” This isn’t really relevant since the person was signed in and did have an account. Instead, messaging around “something went wrong with the connection between Login.gov and VA.gov” could provide more helpful context in this case.
      - **Recommendation 1A.1**: We should consider enhancing language on our existing error pages where needed.
      - **Recommendation 1A.2**: We should consider if adding additional error pages or simply fixing some routing will allow us to offer more context and better help to folks who experience an particular error
   - B. Some authentication related error pages are owned by IAM. All the ones we found could use a refresh. We’d first need to figure out our place in the work concerning IAM error messages. 
      - [In passing conversation](https://dsva.slack.com/archives/CSFV4QTKN/p1715953833418469?thread_ts=1715891776.195709&cid=CSFV4QTKN), it seems like they have some appetite for making changes. But we’d need to decide if we submit a request to them and how detailed that request should be, or if we go further to work directly with them in updating these error pages.
      - **Recommendation 1B.1**: Since we only looked at the ones we came upon, we should conduct a full inventory, if we are offering specific change requests or working closely with IAM to update these.
      - **Recommendation 1B.2**: Update these pages extensively, including following the most current VA design system guidance in UI and content elements (like using “sign in” over “log in”), and for error page best practices (like ensuring instructions are helpful and there are link(s) to get back on track).
      - **Recommendation 1B.3**: Consider eliminating links to the AccessVA page and replace those with VA.gov or the USiP pages. At at least add links to VA.gov or the USiP.

### 2. IA and technical issues 
   - A. It’ll be important to have the information from all the forms and tools pages. Mikki’s team had to focus on other work before finishing their audit, but she welcomed us to complete it if it was helpful for us.
      - **Recommendation 2A**.1: We should complete the IA audit. The forms tab only has about half of the forms audited
   - B. The AI audit findings suggest that there may still be an infinite sign in loop, specifically on the disability form 256 page and with Login.gov
      - **Recommendation 2B.1**: While other issues kept our researchers from reproducing this issue, we should confirm if it’s still happening on this form. Then if it is, make it a high priority to fix.
   - C. In two different locations “create account” doesn’t take folks where they might expect to go. On the VA.gov homepage, the “create account” button brings up the USiP. That page shows “sign in” front and center, when a user is likely expecting a create account option front and center. Then on USiP, the links to “create account” with a CSP actually link to sign in with the CSP instead. This is true for both the Login.gov and ID.me links. This is an issue that our team’s engineers have said must be corrected by the IAM team, and we’ve requested in the past. 
      - **Recommendation 2C.1**: For the “create account” button on the homepage, we could consider making a new modal, which I’ll call the UCAP (universal create account page). This page would list account creation options front and center.
      - **Recommendation 2C.2**: Update the links on the USiP so they take the user to where they expect to go. We should submit another request to AIM about this, and escalate to VA PO level if needed.
   - D. Some applications and tools are sending folks right to a verify screen if they are signed in with LOA1/IAL1 without any explanation.The header on this page is “Verify your identity” so there is potential for this to cause alarm in addition to veterans not knowing why they ended up here. Disability Compensation (Form 21-526EZ) is doing this 
      - **Recommendation 2D.1**: Dive deeper to see if other forms or tools are doing this, then work with them around showing better language before dumping folks to the verify screen
      - See also recommendations related to content enhancements in section 5 
   - E. When starting from a form, after going through the verification flow with Login.gov, users aren’t always taken back to the form they started from like they are with ID.me. This happens at least the Apply for VA health care (form 10-10EZ) and the Disability Compensation (Form 21-526EZ)
      - **Recommendation 2E.1**: Make sure the experience matches between CSPs on all forms and tools pages. It’s important to direct folks back to where they were when they signed in, especially if they are in the middle of a task.
   - F. Folks setting up an ID.me account for the first time, but who’ve used DSL or MHV will have an ID.me account due to the MFA wrapper. If they want to start using ID.me account with VA, they’ll have to reset their password first before being able to get into the account and set it up to use with VA.
This might be an issue better suited for the SST (fka LGA) team, but we could take on or either collaborate with them and CAIA on this as well.
      - **Recommendation 2F.1**: Either VA or ID.me should offer a warning to folks in this situation and better guide them to the unique steps that are best for them. Of course any content adds or changes on ID.me would require collaboration with ID.me
   - G. Some veterans are confused about there being so many ways to sign in to VA. This is further discussion in section 5 about content enhancements can decrease confusion around CSPs, but there is a solution on the IA side to list here.
      - **Recommendation 2G.1**: A solution that’s been most on our mind the last couple years as the best possible solution to decrease confusion is to decrease the number of CSP options. There does need to be balance for folks whose preferred option goes away.

### 3. Verification issues with CSPs
   A. The verification experience is still difficult and fraught with pain points. It may not be a surprise that the extra steps required to verify a modern account take a toll on the user experience. This is a long recorded problem with veterans, and VA teams have worked with Login.gov over the past several years in order to make their process better for our veterans. They recently implemented in person proofing. Still we expect this to continually be an issue with the LOA3/IAL2 requirements, although we can continue to press CSPs and work with them on easing this process.
   - Anecdotally, one of these researchers recently had their first images rejected from the Login.gov verification process and had to retake them. This happened while using a late model iPhone with upgraded image capture features. Then had the first phone number, which Login.gov had auto populated, rejected and had to try a different one.
   - **Recommendation 3A.1**: There are some issues around out of data personal information. With the survey data we have, it’s a bit unclear if these are with the CSPs or on the VA side. We may want to dive deeper into this to better understand if and when veteran information on file with the VA (or in the MPI) is out of date. Further, if there are difficulties with updating this information and if there is a need for veterans to update their information at more than one place with the VA, or if each part of the VA shares updates with others. 
Note: this may be a task better suited for the Secure Sign in Transition (SST) team (fka Login.gov adoption team) and/or the Authenticated Experience team

### 4. Multi factor authentication issues and complaints
   - A. Folks with limited cell phone or data access (like with DoD jobs), certain disabilities (like blindness, physical or cognitive disability) or who had recently changed phone numbers (but MFA still sending to wrong number), felt locked out of their account at least at those given times
      - **Recommendation 4A.1**: It may be helpful for folks who can’t access their phones while at work for VA to promote alternative MFA methods. While this may help in some cases it’s unclear if any other than backup codes will work in a situation where a veteran doesn’t have access to phone, data, or the ability to connect an external device to GFE.
      - **Recommendation 4A.2**: It may be helpful if we increase the time from when veterans have to MFA from every authentication to something longer, like once a month, when signing in from the same device and IP. 
         - This could manifest as a “remember this device” option.
   - B. Some folks feel that requiring MFA every sign in is excessive. It causes negative feelings and lowers satisfaction with authentication even with folks who understand it’s purpose. It lengthens the time for veterans to sign in, and especially so for those who sign in multiple times a week, are older, or with certain disabilities, sometimes creating an undue burden.
      - **See above recommendation**:
   - C. Some folks complain about getting two MFA codes. Identity team engineers say this is likely due to the ID.me wrapper for the legacy CSPs that forces MFA through ID.me. In addition some folks initiated MFA separately with DSLogon
      - **Recommendation 4C.1**: The only certain solution to this would be for DSLogon to force everyone to MFA, and then remove the ID.me wrapper, or to fully deprecate and decommission use of DSLogon, but we could potentially explore other workarounds..
   - D. On desktop (note: we didn’t look into the mobile app experience) you must press the button for either Login.gov or ID.me, to send the MFA code. The button is at the bottom of the page, and for some screen sizes it requires a scroll down to see. Folks who realize this, might have a slightly worse experience signing in after waiting a few moments for the MFA code only to realize they missed a step. While we can’t say for certain, it could be the cause of some folks complaining they never received an SMS MFA code.
      - **Recommendation 4D.1**: Some health and financial institutions, especially on their app experiences, do automatically send the MFA code as soon as you successfully submit UN/PW. We should consider this as an option. If we do decide we’d want to go that way, it’d then require convincing ID.me and Login.gov to change the way they serve MFA.
   - E. You can actually skip setting up MFA when setting up a LOA1/IAL1 ID.me account, even though we use the ID.me wrapper to enforce MFA for legacy CSPs.
      - No change is needed. After talking with Identity engineers, the consensus is that this isn’t a major issue for security.

### 5. Content enhancements can decrease confusion around CSPs
   - A. Some folks think the different CSP options will take them to different places and/or accounts. Some also feel like they are required to give too much personal information to verify, and feel like the VA should already know all this information about them. They feel put out by having to submit it all again - likely not realizing that the CSPs are a separate service from VA.This is reinforced by signing in on different pages and by MHV being both a CSP and a place to go. Having 4 CSP options seems to confuse and frustrate many veterans, even though many websites and apps do offer multiple ways to sign in, for example to sign in via your Facebook or Google or Apple account. Other than Recommendation xx above, the best solutions to these issues may be with content enhancements. 
      - **Recommendation 5A.1**: Update content on VA.gov around verification and especially around VA’s relationship with the CSPs could clarify this for veterans.. Some language across VA.gov can be updated to better reflect that these accounts are only how you sign in, but no matter how you choose to sign in that the VA is still managing your care and benefits.
Here’s one page where we could begin
         - https://www.va.gov/resources/creating-an-account-for-vagov/#what-type-of-account-should-i-
      - **See Recommendation 5A.2**: Update the USiP with language that better reflects the relationship. Example of how this might look below. We should work with this, further refine, usability test it, and then implement based on research findings.: https://www.figma.com/board/0YKeTCwBJKc47UU5WBliIL/Sign-in-experience?node-id=2-324&t=2VSxgH16vv8kKqxs-0
      - **Recommendation 5A.3**:  Encourage CSPs to add language that better explains this relationship

### 6. UI updates to the sign in and verification alerts
   - A. Many forms and tools use the yellow colored alert, and a couple use blue, for directing folks who are signed in with LOA1/IAL1 to verify their account.
      - **Recommendation 6A.1**: Make sure these are consistent across the site unless there is a substantial reason otherwise.
   - B. Forms and tools pages place the verification alerts in different locations on the page: top, middle, bottom. 
      - **Recommendation 6B.1**: We should consider whether there should be rules or guidelines about placement on page.
   - C. Some alerts on forms pages and on tools pages use different alert titles. 
      - **Recommendation CA.1**: If consistency of title isn’t being addressed in the DS updates, we should consider how we can contribute here.
   - D. Our team must plan how best to work with all these other teams around this work
      - See more in section 8
   - E. When folks need to sign in or have a verified account to access a form or tool, we can create a better experience by telling folks everything they need upfront. 
      - **Recommendation 6E.1**: In some cases we can better call out the need to verify before folks get into the form or tool for which verification is required. On some pages we may need to consider the best placement for sign in widgets, ie before the form is started.
      - **Recommendation 6E.2**: Work with Platform on this. If design standards exist for this, we can help call out divergences and/or enforce those. Otherwise we can help Platform come up with VA standards for this based on best practices and/or bespoke usability testing. 
      - **Recommendation 6E.3**: Consider if there is a way to better direct folks to verify their account when they sign up

### 7. AccessVA page likely causes confusion
   - A. AccessVA is an authentication page that sits on VA.gov but doesn’t even include a link to get back to VA.gov, or to sign in via the USiP. While we understand that this is likely to continue to exist for the near to mid term, we also consider it important to make sure veterans are able to get to VA.gov, the new front door for VA, and can easily get to the USiP, by name the “universal” sign in page. Some IAM error pages also point to the AccessVA page, even for folks who get to the error page from VA.gov
      - This page’s address is https://eauth.va.gov/accessva
      - **Recommendation 7A.1**: At minimum we or the team who owns this should spend a sprint or two to add links to VA.gov and to the USiP to this page

### 8. Considerations for how our team integrates into this work 
   - A. With this product, we’ll be working with many teams. We’ll also want to make sure that we are kept aware when other teams what to add or make changes to the sign in flows from their pages. 
      - **Recommendation 8A.1**: Figure out if we want to have MOU’s to delineate how our team works with other teams.
      - **Recommendation 8A.2**: Figure out how can integrate into the Collab Cycle to be present for meetings where sign in or verification information or flows are being changed. Or at least be able to async review in those circumstances.
      - **Recommendation 8A.3**: Figure out how we should or when we approach teams who aren’t following the new/updated version of the sign in widgets
      - **Recommendation 8A.4**: Better define how we work with IAM and CPSs where we have suggestions for them. Will that be different from how we work with other VA.gov teams?

## Appendix A literature review sources
 - Auth  Exp Team
    - 2024-03 onboarding generative research
    - 2024-03 onboarding generative research
    - 2024-01 Authenticated Menu Usability
    - New veteran onboarding research
    - Research Review
 - Accredited Rep Management Team
    - 2024-03 ARM findarep live user test
    - 2024-03 ARM find a representative live  user test
    - Various research quotes
 - Appointments FE team
    - 2023 Appointments list screen reader usability research
    - 2022-01 MHV and VAOS appts list discovery
 - Ask VA team
    - 04-2024 Progress bar
    - 01-2024 Submit an inquiry
    - Login.gov Adoption team
    - 2022-10 Login.gov Adoption Discovery Research
    - 2023-03 Deferred Identity Proofing Round 1 Usability
 - MHV and MHV on VA.gov team
    - 2024-01 Secondary Nav Comparison
    - MHV coordinator's survey July 2023
    - Medallia sign in feedback- Secure Messaging changes
    - VSignals survey research on MHV
 - Mobile App Team
    - Team-collected app store reviews from 2023
 - OCTO Identity team
    - 2023-04 Proactive CSP Migration
 - Sitewide team
    - 2023-12 Federal Header/Footer usability testing--Phase 1
    - 2023-03 Logged-in IA and Navigation Wayfinding
 - Veteran Status team
    - Veteran Status Use Case Discovery
 - Contact Center Data
    - Opt-in survey data - 2077 responses (Jan 1 to April 30, 2024)
    - Intercept survey data - 548 responses (Jan 1 to April 30, 2024)
    - Note - about 500 responses across both types were filtered out where no significant data was input into the survey (ie all options were left blank)



