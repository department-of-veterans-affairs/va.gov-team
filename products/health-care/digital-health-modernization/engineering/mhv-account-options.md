# MHV Account Integration Options

This document describes the current integration requirements around the MHV account identifier when accessing MHV APIs from a system like VA.gov, and discusses options for how that integration may be changed.

## Terminology
* **Credential** - The username/password (currently one of ID.me/DSlogon/MHV, and soon to include Login.gov) that a user uses to log in to VA websites. 
* **MHV Account** - A record of a user within the MHV system. An MHV account is identified by a numeric MHV Account ID. This record includes other information about the user. It is usually, but not always, associated with an MHV credential. 
* **MPI** - Master Person Index - VA's central repository of VA-related persons; each person's record includes the correlated identifiers (such as the MHV Account ID) that map to the person in other VA systems. 
* **MHV Account Tier** - MHV accounts are classified in multiple tiers according to whether the user has been identity proofed. A user may self-register for an MHV `Basic` account, which only allows access to a few features like self-entered data. A user who has been identity proofed either remotely or in-person is upgraded to an MHV `Premium` account which allows access to all features. There is also an intermediary MHV `Advanced` account that is being deprecated. 
* **SSOe** - Single Sign On External - VA's central identity broker and single sign on provider. Both VA.gov and MHV are integrated with SSOe, though through different mechanisms. 

## Current user-facing behavior
* A user can sign in to VA.gov using any of the available federated credentials.
* A user can likewise sign in to MHV using any of the available federated credentials. If the user has an MHV account (again, separate from the MHV credential) and it is linked to the credential, then the user can access MHV as expected.
* However, if a user signs in to MHV and does not have an MHV account, MHV routes the user through an onboarding flow to establish one. The user is required to submit some biographic and contact information. _During this onboarding the user is also required to establish an MHV credential (username and password, plus security questions) even if they already have an otherwise VA-approved credential such as an ID.me credential._ 

## Current API integration mechanism
1. If an external system like VA.gov wants to interact with MHV's APIs on behalf of a user, it needs to establish a session token. To request a session token it needs the user's MHV Account ID. 
2. How does it get that ID? Ideally, the user already has an MHV Account ID and that ID has been linked in to MPI. In this case VA.gov resolves the user in MPI, determines their MHV Account ID, and can happily make API calls. 
3. However, the MHV Account ID is only stored in MPI for MHV Premium and Advanced users - because only high-assurance/identity proofed data is stored in MPI. So if there is no MHV Account ID in MPI, then either the user doesn't have any MHV account, or they have an MHV basic account.
4. VA.gov might be able to determine if there is a Basic account if the user used their MHV credential to sign in to VA.gov - there will be an MHV account identifier associated with the authentication event, but not one in MPI, so by inference, it is a Basic account.
5. If neither of these is true, VA.gov can only assume that the user does not have an MHV account, and has no information with which to establish an MHV API session.

### Account creation API
In 2017, Vets.gov (predecessor to VA.gov) implemented health features like secure messaging and prescription refill. To enable this, MHV provided an API mechanism by which Vets.gov could dynamically create an MHV account for a user, without any user interaction. 

For any user who signed in with a high-assurance credential, and was detected as being a VA patient, Vets.gov would present the user with terms of service, then use the MHV-provided APIs to first create an account, and then upgrade it to the Premium tier. At this point Vets.gov could use the newly-provisioned MHV account identifier to make API calls on behalf of the user. 

**Crucially, these accounts did not have an MHV username/password associated with them. They were known within MHV as `sequestered accounts`.** This is important to know because there is precedent for having successful API-based interactions with MHV systems when an MHV account is present, without requiring an MHV credential.  

During the Vets.gov-VA.gov consolidation effort, the health features were removed from VA.gov, in favor of linking users back to MHV (such as via the "My Health" link on VA.gov). At that point it seemed superfluous to invoke the MHV account creation/upgrade API, because the API interactions were reduced and because MHV had implemented the account linking/onboarding flow as described above. As soon as a user navigated to MHV, MHV could address any account creation/linking needs, and VA.gov could ignore this implementation complexity. 

(VA.gov does still invoke some MHV APIs - it obtains summary information about whether a user has unread secure messages or refillable prescriptions. But it does not proactively create or upgrade accounts, only uses existing MHV account information discovered in MPI). 

## Challenges with the current mechanism
### MHV credential/account linking

### State management for account creation/upgrade

### MHV account status spanning across credentials

## Options

## Recommendation
