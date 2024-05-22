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









