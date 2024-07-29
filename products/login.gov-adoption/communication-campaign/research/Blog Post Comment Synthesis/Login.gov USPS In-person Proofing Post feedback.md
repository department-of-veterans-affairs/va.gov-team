# VA login.gov Post Comment Findings 

**Office of the CTO Digital Experience (OCTO-DE), Identity**

Date: 08/16/2023

Carl Dickerson - Carl@themostudio.com or Carl.Dickerson@va.gov


**Jump to:**

[Key Analysis Points](#key-analysis-points)

[Take-aways](#take-aways)

[Appendix](#appendix)

## Background
VA posted an article on July 21, 2023 about Login.gov's new option for verifying your Identity in-person through the USPS titled [Login.gov offers new in-person identity verification for Veterans](https://news.va.gov/122499/login-gov-offers-new-in-person-identity-verification-for-veterans/). The post details how a Veteran may choose this in-person option and step-by-step what to expect a their appoint. The sole focus is awareness for this program and to encourage Login.gov adoption without mention of other VA sign in options going away. The post generated a total of 6 comments in the feedback section and an additional 10 comments from the post being shared on Facebook.

VA is in the process of requiring all user accounts to have a high identity verification level. The VA seeks to use the standard established by The National Institute of Standards and Technologies (NIST). These standards are verified by credential service providers (CSP). VA offers two CSPs for account login that have an option for high identity verification. One, ID.me currently uses an older NIST standard called Level of Assurance (LOA). LOA level 3 is considered a verified account beyond a reasonable doubt. The other CSP, login.gov, uses a newer NIST standard called Identity Assurance Level (IAL). IAL level 2 means there is evidence that proves a real person’s identity is correctly represented by an online account. While LOA3 and IAL2 are similar, they use different rules for classifying accounts.

> NOTE: In this report we'll use the phrase “verified account” to refer to both LOA3 and IAL2 accounts.

## Analysis Goals
Building upon the work started by researchers on the Identity team in February of 2023, [VA login.gov Post Comment Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-02%20Desk%20Research/Findings%20from%20VA%20login%20post%20comment%20analysis.md) We seek to better understand Veterans’ opinions and/or frustrations with the VA.gov sign in process, to include sign in account creation, identity verification, the actual sign in process and the need to change CSP if they aren't already using login.gov or ID.me.


## Methodology 

Some Veterans use the comment section of FaceBook and VA news (or blog) posts to express their feelings on that particular topic. The comments were posted publicly on a publicly accessible page of VA.gov. This is potentially valuable data, as long as we understand the limitations of this data source. Consider, this source *isn’t statistically significant*, nor does it adequately represent the Veteran population, as only those who read the post and then are most vocal or stirred to write about it will leave a comment.
   
The particular post of consideration is [Login.gov offers new in-person identity verification for Veterans](https://news.va.gov/122499/login-gov-offers-new-in-person-identity-verification-for-veterans/).


## Key Analysis Points

Although the categories listed here don’t claim to be exhaustive or exclusionary of other possible categories, during analysis we sorted the comments into the following categories:

**1. Change management & frequency of changing tools**
- These comments relate to lack of understanding why VA keeps changing/adding new sign-in options and the pace/time given for adjusting to new systems.
- “I see absolutely no reason to keep changing or adding new log-ins.”
- “The online keeps changing. Just when you get comfortable... Most of us do not use this system daily so it seems to change almost every time we try.”

**2. Access to required documentation to verify account**
- These comments relate generally to frustration with documents needed to verify accounts and technological (and otherwise) barriers to receiving and uploading those documents.
- “I uploaded a copy of my drivers license, their system kept saying it could not read it...”
- “If, a veteran is registered to get VA Health Care and has been issued an [VHIC] for those benefits. Why is there not an option to use the [VHIC] for verification by Login. gov?”
- "...they [ID.me] couldn't identify me even after I sent copies of my 214, social security, birth cert, drivers license, and VA card so I just said I'm done with this BS and I'll continue to use in person services."

**3. Platform difficulties**
- These comments appear to be issues with the CSP platforms and technology in and of themselves, with Veterans having issues signing in with either option or across all of the options.
- “The VA should demand that both organizations fix their software or else withdraw from the contracts...”
- “Login.gov is the hardest site I have ever tried to use. I gave up trying to access anything VA related.”
- “When are you going to get rid of my healthy vet and get a system that works? You keep no information safe, and the vet center has access to VA records and the VA doesn’t.”

**4. Necessity for in-person services**
- These comments point to frustrations that arise over being asked to do things online and not only a preference of doing things in-person that some Veterans may have, but also for some such as the unhoused, it being a necessity.
- "The system is too difficult for homeless, near homeless, or rural living vets without transportation. Add to that older Vets and those less technology savvy."
- “...these new log-ins... none of them work!!! I am old and prefer in person contacts not online on the computer nor video!”
- "It was certainly easier when I lived 3 blocks from the Philly regional office."

**5. Distrust because of perceived neglect**
- Some comments in this area are unrelated to sign-in, but there is a general sentiment of distrust amongst some Veterans that VA will do what it says that it's going to do and that they have Veterans best interest at heart.
- "You people have made damn sure veterans aren’t welcome and you can’t be bothered with the human interactions and contact we need."
- “AND MILLIONS STILL CAN'T GET TREATMENT OF SERVICE CONNECTED DISABILITIES.”
- “ It is difficult but there is no excuse for it. We took care of them and our great USA now it's time.to wake up and help us.”

## Take-aways

- Findings were consistent with feedback analyzed in post comment findings from February of 2023, [VA login.gov Post Comment Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-02%20Desk%20Research/Findings%20from%20VA%20login%20post%20comment%20analysis.md)
- Some Veterans who do not agree with or understand the need to change their Credential Service Provider (CSP) may become averse to doing so.
- Some Veterans have issues with their current CSP, whether it's MHV, DS, login.gov, or ID.me
   - Some veterans having issues with their CSP attribute that to a VA issue, even when the CSP is not owned by VA
- Some Veterans may have a physical barrier (e.g. unhoused or physical disability) or technological proficiency barrier to creating an account with a more secure CSP or accessing VA websites online at all.
   - Many other veterans stick up for those even when they have physical or technologcial barriers themselves

Not Identity team related
- Some veterans post their needs or frustrations with or seek information from the VA on these posts, even when it's a completely unrelated topic.
   - Some of those seem to expect a response from the VA, while others seem to be moreso screaming into the void.

## Further research possibilities

Some areas that might benefit from further research based on this analysis of comments:
- What tools and resources might help to better explain the difference between CSPs and help Veterans understand why change is happening/manage change?
- How might we combat general distrust for the VA so that messaging is well-received and Veterans do not feel that they are being taken advantage of?
- For those who have a negative impression of the newer CSP (login.gov and ID.me), is their any information or explination that would change their mind of the need to switch CSP?
- How can the VA best ensure Veterans understand that these CSPs are not managed by VA, so for example if they experience issues creating an account or signing in, they understand where in the process an error occurred (CSP, VA, technology) and also how and where to best seek help.


## Appendix

### Tools used for Synthesis

- [Mural Board](https://app.mural.co/t/innovationboards1199/m/innovationboards1199/1691603761695/5512258f43d142875f249edfce9c8cec996092c6?sender=uf884d122b7055bc310de5524)


### Public comments came from [VA’s login.gov blog post](https://news.va.gov/122499/login-gov-offers-new-in-person-identity-verification-for-veterans/)
