# Background

### [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/research/user-testing/mar-2019/research-plan.md)

### [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/research/user-testing/mar-2019/conversation-guide.md)

### Goals & What We Did

Currently, 50% of health care applications submitted via VA.gov are duplicate applications. In October of 2018, we [conducted interviews with veterans](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/hca%202.0/research/oct-2018) and we learned that duplicate applicants often weren't aware of the decisions that had been made about their original applications.

In January of 2019, we began working on updates to the health care application flow that aimed to increase veterans' awareness of their health care status by surfacing that information on VA.gov.

In March 2019, we conducted user testing on our initial design updates. This research aimed to assess veteran's overall understanding of the flow, comprehension of content, and frustration level.

# Methods

### Dates

We conducted user testing between March 6, 2019 – March 11, 2019.

### Participants

We talked to **9 veterans**:

- 6 men; 3 women.
- 5 participants 55+; 4 participants between 25 - 44.
- 6 participants identified as white; 3 participants identified as black or African American.
- 5 Army; 2 Marine Corps; 1 Navy; 1 Air Force.

### Tools

We conducted moderated remote usability testing testing via GoToMeeting and [this InVision prototype](https://adhoc.invisionapp.com/share/6DQRJWOWAJY#/screens/349571526_1-_Intro_Screen). 

# Results & Takeaways

## New Sign In Prompt

![Sign in prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/research/user-testing/mar-2019/screenshots/logged-out-proposed-hca-intro-page-update.png)

### The new sign-in prompt tested well. People understood it and reported they'd be likely to login in real life.

On the health care application introduction page, we added a prompt that more strongly encouraged signing in to fill out the application and deemphasized the option to proceed from a signed out state. People understood the benefits of signing in based on the copy in the prompt and reported that they would be likely to do so in real life.

## ID Page

For context, we added a page prior to the health care application where we asked users to enter their name, birth date, and SSN so we could scan for existing records in the health care enrollment system (ESR). If records are found, this means that a user has applied for VA health care before, and they need to sign in and verify their identity so we can communicate their current health care status.

Unfortunately, we can not tell users the intent of this page because of security concerns around revealing who has and has not previously applied for VA health care.

![New ID page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/research/user-testing/mar-2019/screenshots/logged-out-id-page.png)
![New ID page with sign in prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/research/user-testing/mar-2019/screenshots/8.-logged-out-id-page-please-sign-in.png)

### People thought the ID page was part of the health care application, not separate from it.

The ID page asks for people's name, birthdate, and SSN, which made users think this page was just the first page of the application. They ignored the info box at the top of the page that said the page was to help us figure out which version of the application was right for them, or they didn't understand what the copy in that box was trying to communicate.

**Recommendation**: More clearly differentiate the ID page as separate from the health care application.

### After filling out the ID page, people did not understand that they were being asked to sign in and verify their identities to review information we wanted to share with them (ie. their health care status).

For people for whom the ID page finds a record in the health care enrollment system (ESR), they are asked to sign in and told this is because we have some information for them to review (their health care status). However, despite copy explaining this, users thought they were being asked to sign in because the VA thought they already had an account on VA.gov, or because the VA wanted them to go through extra steps to confirm their information matched what they had entered into the ID page.

**Recommendation**: Make messaging more clearly communicate that people need to sign in and verify their identity to review information.

### Participants were frustrated that they were initially offered a path to fill out the health care application in a signed out state only to be asked to sign in later.  

Only signed out users need to go to the ID page, so for the purposes of testing, we had users proceed in a logged out state so they would see the ID page. However, the prototype always "found" people in the enrollment system, which resulted in a prompt for users to sign in so we could have them review their status. Naturally, people did not understand why they would initially be allowed to proceed from a signed out state if we were only going to tell them to sign in later. This is perhaps because we did not communicate clearly that they needed to sign in to review information, but it also was an important reflection on people's feelings on signing in. Users would rather be forced to sign in at the beginning of a flow if it would ultimately make things easier.

**Recommendations** 
- For logged out path, clarify that people need to sign in to review information. 
- Consider requiring all signed in users to be LOA3 instead of LOA1 or LOA3 to access the health care application so fewer people have to interact with the ID page and we can more quickly and easily communicate people's health care statuses to them.
- Add a prompt to the HCA intro page that says something like "Do you think you have applied for VA health care before?" that will lead users down a path to sign in/verify their identity so fewer people interact with the ID page.

## Health Care Status Page

We added a health care status to the HCA introduction page for users who were found in the ESR _and_ who were LOA3. Depending on the circumstances, a status might communicate that someone is already enrolled in VA health care, has been found ineligible for VA health care, has an existing application, or had an application expire and close.

![Health care status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/research/user-testing/mar-2019/screenshots/20.-logged-in-loa3-user-in-esr-ineligible.png)

### The health care statuses we tested were easily understood by participants. 

We showed participants five different potential outcomes that someone might see for a health care status. These statuses also included potential next steps based on the circumstances. Participants found these statuses to be straightforward and easy to understand, and they appreciated that we gave them different avenues on how to proceed. For the most part, participants reported they would or would not reapply in line with what we expected based on the status.

### It was not clear to participants that their health care status was based on a previous application. Most people thought this status was based on the information they entered in the identity verification flow.

Someone's health care status is based on the determination made on their original health care application. However, this wasn't at all clear to users despite us listing the date of the previous application. Participants assumed that the determination of their health care status came from when they entered their name, birth date, and SSN on the ID page and when they went through the ID.me identity verification flow earlier in testing.

**Recommendation**: Update copy so it's clear that the status is based on the decision for a previous application.

### Ultimately, people were very grateful to see their health care status even though they had to go through a long flow to get there. They appreciated the transparency and follow-up steps included in the status.

We had hypothesized people would be very frustrated when they got to the end of a long flow only to see that we'd determined that they were ineligible for health care. While participants weren't thrilled with this potential outcome, they were very grateful to have this information and some options on how to proceed. 

### Most people did not understand the "Reapply for VA health care" link would open up the application. They assumed it would take them through the identity verification process again.

Since people thought their health care status was based on the identity verification flow, they thought that clicking "Reapply for VA health care" would take them through the identity verification flow instead of the 10-10EZ. From what we could deduce, in their mind, the identity verification flow was essentially acting as the application for health care in the flow they'd just walked through, so it makes sense they would think clicking "Reapply for VA health care" would take them through the same flow and not to a different form.

**For consideration**: We could potentially update the copy of this link to something like "Start the application for health care (10-10EZ)," but people may still be confused. Ultimately, people who really want to apply for health care again despite our warnings are going to do so, so they will likely at least click "Reapply for VA health care" even if they are unsure of exactly what it will do.

### Additionally, some people found the "Reapply for VA health care" CTA to be confusing if the copy above it strongly discouraged reapplying or implied ineligibility.

We have to offer an opportuntiy to access the health care application for people who have previously applied even in scenarios where we strongly discourage it. Any veteran could walk into a VA hospital and fill out an application in person, and we also can't account for every single edge case where someone was determined to be ineligible but might actually be eligible in the future due to different circumstances.

However, this caused some confusion since people didn't understand why we were telling them not to reapply but then offered that as an option. This is understandable, but it is unlikely that we'll make any changes based on this finding since we still have to give everyone access to the application.

## Overall Refelections

Overall, this tool tested better than we thought it would given that we were walking participants through a particularly frustrating use case. Veterans were willing to sign in and verify their identity to get to the health care application, and they very much appreciated seeing a health care status on the HCA introduction page.

The most confusing and frustrating page users encountered was the ID page. While the form is simple itself, participants didn't understand it's purpose or why they were asked to sign in from this page when they were initially offered a path to fill out the application without signing in. Unfortunately we can't entirely eliminate this page — we need to offer people a path to complete the application from a signed out state, and we need to scan for previous health care records to reduce duplicate applications — but we can try to reduce the amount of people that interact with this page.

To decrease interaction with this page, it was proposed to our team that we require all logged in health care applicants to be LOA3, but that we leave a logged out path to the HCA for users not found in the ESR. We understand how important it was to the original HCA team to have the path to the application be as low-friction as possible, which is why we've decided to keep a logged out flow. However, knowing now that 50% of health care applications are duplicates is a serious problem, especially when considering some people apply multiple time for years with no communication from the VA. It is absolutely imperative we be able to communicate people's current health care statuses to them so they can act on this information. It is because of this that we think requiring all health care applicants to be LOA3 is the simplest way for us to scan for existing ESR records and to get duplicate applicants their health care statuses. While this creates some additional work for LOA1 users who would not have otherwise had to go through the identity verification flow to get to the HCA, we believe the benefits outweigh the costs for these users in terms of feature access.

Additionally, another thing that made this flow especially confusing for users on the ID page is that we couldn't tell them that we were scanning for previous health care applications for privacy reasons, so users had no idea why they were being asked to do certain things. However, one path we had not originally considered is that we can ask users to self identify as people who have applied before. By putting a call-out on the logged out HCA introduction page that says something like "Do you think you may have applied before?" and suggesting those people sign in and identity verify (note: 60% of HCA applicants are already LOA3), people can self select into a flow that will ultimately lead them to their health care status without having to go through the extra step of starting with the ID page.

## Final list of changes

1. Require signed in LOA1 users to be LOA3 before accessing the HCA
2. HCA intro page
  - Add prompt that says something like "Think you've applied for health care before?" and tell users to sign in if they have
3. ID page updates
  - Consider changing the title of the page.
  - Remove mention of eligibility from the explanation box.
  - Remove info on how long the HCA will take, and maybe the "Need help?" info
  - Make it clear that we need people to sign in to review information
4. LOA3 status page
  - Make it clearer that the health care determination was based on their previous application.
5. LOA1 prompt
  - List benefits to verifying identity
