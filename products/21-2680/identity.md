# Background:
## What we know about Authentication and Authorization:

### Starting with the most basic definitions 

Authentication - We know who the user is (to some extent)
Authorization - What the user is allowed to do, based upon what we know about them. 

There are two external identity providers https://id.me and https://login.gov/. For the most part, it doesn't matter which identity provider users choose. 

VA.gov data is tied to a person's identity, not their login method. On the back end the login providers are connected in the UserAccount table. That means I can do things like check the status of my claim when I log in through id.me, login.gov and alternate login methods as they see fit. 

When a person creates an account on id.me or login.gov the bare minimum needed to create an account is an email address, password, and email verification. That gives is a minimal Authentication.  We call this LOA1 (level of authorization 1).  Users don't have access to any personal information on VA.gov. They can't edit their contact info on their profile or see much/any personalized data.  They can start some forms (forms that choose to accept this level of authentication). No information will be prefilled for the user, but they can enter data, save the form and return to finish it later (InProgressForm in the code).

When a person creates an account on id.me or login.gov AND completes the identity verification steps, AND enables 2-factor authentication they are considered LOA2. We have confidence that they are who they say they are. At this point, they can complete almost any form. If the person who is logged in is a Veteran OR someone who has interacted with the VA before (education, healthcare or other benefits) we probably (but not certainly) can connect them with the data in the MPI. We may not find the person in the MPI database if it's been decades since they interacted with the VA or have a new name or something🔥. 

For the most part, what a user is allowed to do is a combination of "VA.gov accepts that level of authorization LOA1/2 for this action" and "We have enough data to proceed (we connected this user to data we have already)".  

Once a LOA2 user is logged in the api requests user data from a variety of sources 
Major ones are: VA Profile (email, addresses, phone), Identity provider (Date of birth, ssn), MPI (see 🙋‍♀️ below)

See the User model for user attributes. 
https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/user.rb


🙋‍♀️ MPI/MVI Has been renamed over the years as it scope grew.  Master Patient Index -> Master Veteran Index -> Master Person Index https://catalog.data.gov/dataset/master-veteran-index-mvi It's now the authoritative data source for any kind of person who interacts with the VA.

🔥 The 1973 National Personnel Records Center affects VA's veteran records

### UX
Some examples of how we progressively let people know they need to do more:

![LOA1](https://github.com/annaswims/va-docs/blob/main/images/form526_LOA1.png)
![form 526 unauth](https://github.com/annaswims/va-docs/blob/main/images/form526_unauth.png)
![VA Profile L0A1](https://github.com/annaswims/va-docs/blob/main/images/vaprofile_LOA1.png)
  
## Now what?
Our stakeholders have shown interest in validating that the logged in user is a health professional.  Id.me 

Id.me references:
[Verify with ID.me to Access Healthcare Services](https://www.id.me/individuals/healthcare-services)
[Secure Healthcare Identity Verification for Patients and Providers](https://network.id.me/solutions/industries/healthcare/)
[implementation details](https://docs.id.me/guides/learn-more/attributes-exchange/overview#medical-providers)

> 20% of the U.S. medical provider population already verified with id.me 
> 
## Open questions
What is the cost associated with id.me and who and who has the authority to authorize it?

What does the user expeirence look like in these senarios?
* Someone without an accont on VA.gov
* Someone with an identity-verified id.me account, that does not have the healthcare provider attribute from id.me
* Someone who logged into VA.gov with login.gov before they arrived at our form?
  

