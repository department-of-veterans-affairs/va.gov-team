# Mocked Authentication, research findings

Office of the CTO - Digital Experience (OCTO-DE), Sign in, Core/Surge Identity Team

Date: 9/15/2023

Clayton Zook | clayton.zook@oddball.io \
Amanda Porter | ajohnson@clarityinnovates.com \
Charlye Tran | charlye@bluetiger.digital

Jump to:



* [Key findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-06%20Mocked%20Authentication/Mocked%20Authentication%20research%20findings.md#key-findings)
* [Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-06%20Mocked%20Authentication/Mocked%20Authentication%20research%20findings.md#recommendations)
* [Who we talked to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-06%20Mocked%20Authentication/Mocked%20Authentication%20research%20findings.md#who-we-talked-to)
* [Further research needed](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-06%20Mocked%20Authentication/Mocked%20Authentication%20research%20findings.md#further-research-needed)

## Research Goals

Mocked auth allows devs to iterate and work on their code in a more local way without actually having to sign in to an authorized account.. This simplifies the development for devs who aren't in the Identity realm, and this allows them to work even without an internet connection since there are no "external calls." This also makes it more consistent.

With this research, we wanted to: 

* Test the usability of the current Mocked Authentication product
* Find solutions for the current known issues around error messages
* Develop product backlog

## Research questions

1. What changes should be made before broad use of this product?
2. What changes can be put in the backlog for a possible future iteration?

## Methodology

We conducted remote usability testing to evaluate how engineers on VA.gov will interact with the Mocked Authentication Dashboard prototype. We tested prototypes tailored to desktops. As part of the usability testing, we observed how users interacted with the homepage, the page following the selection of a CSP, as well as how users navigated the documentation for creating a mocked auth user.

## Key Findings

1. All of the participants were more likely to use ID.ME or Login.gov as a secondary credential provider.
2. When tasked with selecting a Mocked User Profile, all of the participants already had a test user account in mind. 
    * They would scroll the list and select a test user that they knew would meet their testing needs.
3. All of the participants pointed out information that could better assist them in selecting a mocked user. 
    * They looked for attributes such as UUID, ICN, additional mocked data (e.g., claims, appeals)
4. Participants desired a back button or the ability to return to the previous screen (Select a Profile Screen) when encountering errors after selecting a Mocked Auth user.
5. Participants expressed interest in creating new users if existing users did not meet testing criteria, but they found it confusing to use the provided documentation for this purpose.

## Details of findings

1. **All of the participants were more likely to use ID.ME or Login.gov as a secondary credential provider.**

Labels:  `AUD: Staff`, `HDW: Desktop`, `HDW: Laptop`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Usability`, `RESRCH: Remote`

Related to: Question 1, Question 2

Participants selected these credential service providers out of habit or convenience. Recent requirements on the chatbot team will require them to start testing with MHV in the future. 

> _“I would pick ID.ME but Login.gov, either and I’m happy. I tend to go with my password manager and the first option that it gives me. But I tend to sign in with ID.ME usually out of the four but here I would be lazy and go with the one that’s already available because that's one that we use also. It takes and extra two clicks to get to ID.ME” - Participant 2_



2. **When tasked with selecting a Mocked User Profile, all of the participants already had a test user account in mind.**

Labels:  `AUD: Staff`, `HDW: Desktop`, `HDW: Laptop`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Usability`, `RESRCH: Remote`

Related to: Question 1, Question 2


Most of the engineers perform their tests with their desired test users in mind. These user accounts will often be recommended to them by other team members and have additional attributes that they need for a particular test. 

> _"There will be some test users who have claims; some might have decision letters but not claims. We don’t know which one it is; so most of the time, we end up signing in using each of them and then figuring it out. For example in this case, I know that user 12 has some decision letters. So I’ll come here and then continue with the sign-in process.” - Participant 1_



3. **All of the participants pointed out information that could better assist them in selecting a mocked user.**

Labels:  `AUD: Staff`, `HDW: Desktop`, `HDW: Laptop`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Usability`, `RESRCH: Remote`

Related to: Question 1, Question 2

Engineers looked for attributes such as UUID, ICN, additional mocked data (e.g., claims, appeals), and information about the development environment. In the drop-down menu, they searched for the names of the test accounts as opposed to the email addresses.

Certain user attributes allow developers to test certain user flows that are important in testing new features; development teams are responsible for “hard coding” these attributes currently and even share certain profiles across teams. 

> _“As of now, when it is not mocked, if I am trying to test in the dev.va.gov for virtual agent at that time this user: number 12 won't work in dev environment because of the ICN or related information of this user was set up for staging environment. This user will error out in dev environment, but since it's a mocked authentication, it should be usable in all environments." -Participant 1_

> _“I would love to see the names as well I know user 228 for example is also Mark. One that we use often… It’s easier to remember the name than it is to remember the number so I would love to see the name next to it”- Participant 2_



4. **Participants desired a back button or the ability to return to the previous screen (Select a Profile Screen) when encountering errors after selecting a Mocked Auth user.**

Labels:  `AUD: Staff`, `HDW: Desktop`, `HDW: Laptop`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Usability`, `RESRCH: Remote`

Related to: Question 1, Question 2

Engineers were confused about how to correct an error state for a mocked auth user they had selected. They assumed that if the user didn’t work, they would simply click the back button and select another user in order to continue on with their task.
> _“If one user is not working, I should be able to hit back once and select another, not go all the way back to the first page” - Participant 2_



5. **Participants expressed interest in creating new users if existing users did not meet testing criteria, but they found it confusing to use the provided documentation for this purpose.**

Labels:  `AUD: Staff`, `HDW: Desktop`, `HDW: Laptop`, `PRDT: Login`, `RESRCH: Evaluative`, `RESRCH: Usability`, `RESRCH: Remote`

Related to: Question 1, Question 2

Engineers would rather create a new user instead of going through a lengthy trial-and-error process to find the users that meet the criteria they need in the provided list. There was some confusion about how to use the provided documentation on the Mocked Auth Dashboard in order to create a new user. 

Participants were more familiar with following the steps that are in the mocked data repo. Although the link was provided it was overlooked and took additional time to locate the necessary information. 

> _“[Mocked Authentication document link] I haven’t been to this repo. Because I would have gone to the actually mocked data repo. [Vets-api Mocked Data repo] I would like I would have um maybe even earlier because someone like me I like to explore” -Participant 2_


## Additional insights


  **User Authentication Indication:**

1. Participants noted a lack of indication regarding which CSP (Credential Service Provider) they had selected once they transitioned to the "Select Profile" screen. 

  **Authentication Method Clarity:**

2. Users found it helpful to know whether a user is being authenticated using OAuth or SAML. 

  **URL Transition Clarity:**

3. One participant experienced confusion when the URL changed from dev.va.gov to va.gov after clicking "contact us." 

## Recommendations

1. Enhanced User Profiles:
    * Provide detailed attributes, including UUID, ICN, additional mocked data, and information about the development environment in the user profile dropdown.
2. Error Handling:
    * Implement a back button or a way to return to the previous screen when errors occur after selecting a Mocked Auth user.
3. Documentation Improvement:
    * Enhance the documentation to cover mocked data comprehensively, including clear instructions on how to create new users within the Mocked Authentication Dashboard.
4. Authentication Method Clarity:
    * Clearly indicate whether a user is being authenticated using OAuth or SAML.
5. URL Transition Clarity:
    * Ensure consistency in URLs to prevent user confusion during navigation.
6. User Education:
    * Consider providing brief tutorials or tooltips within the dashboard to help users understand how to use various features.

## Further research needed

* Regular User Testing:
    * Continue to conduct regular user testing to gather feedback and iterate on the dashboard's design and functionality.

## Appendix


[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-06%20Mocked%20Authentication/Mocked%20authentication%20research%20plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-06%20Mocked%20Authentication/Mocked%20authentication%20conversation%20guide.md)

[Session notes](https://app.mural.co/t/oddballinternal7486/m/oddballinternal7486/1687797193913/7b19[…]ebe023ddd7c71fa303cd335a571e4?sender=u6c46f747a0483ea836054483) 


## Tools used for Synthesis

[Mural Board](https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1689911286113/cc811d25bf05b5d5135a8e3f28d8dd489e797dad?sender=ue8da07808969ffbb6a970518)


## Pages and applications used

[Website Prototype](https://dev.va.gov/sign-in/mocked-auth)


## Who we talked to

* 3-4 VFS developers/engineers who are likely users of this product
