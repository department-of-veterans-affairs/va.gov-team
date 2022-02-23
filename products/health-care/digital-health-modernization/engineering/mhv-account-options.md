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
It's fine for the MHV backend to maintain the concept of a user account record with an identifier. However, the fact that the current onboarding flow requires the user to establish an MHV credential associated with that account, is sub-optimal.
* The MHV credential is being deprecated, so why require more users to establish one? 
* If a user primarily uses a different credential type, having a latent MHV username/password out there is a security risk.
* Since the onboarding flow only exists on MHV's site, there's no way for new VA patients to use health features on the mobile app without visiting MHV at least once. 

Given the previous implementation of sequestered accounts and the account creation API, we know it is feasible to establish MHV account records without establishing MHV credentials. 

_Open Question: What, if any, implementation challenges did sequestered accounts create within MHV? Are those still relevant if user-facing features are migrated to VA.gov?_

### State management for account creation/upgrade
The account creation API used in the Vets.gov days worked, but did introduce some complexity and state management for Vets.gov to consume it properly:
* The requirement to display terms and conditions, and the fact that creation and upgrade were separate operations, meant that Vets.gov had to maintain state about exactly where in the process the user was, in case of an error at any stage.
* Account creation introduces some latency. Vets.gov had to decide when to invoke the account creation process - upon login, upon loading any health tool, etc. to make as smooth a user experience as possible.  
* Terms and conditions might need updating and re-acceptance by the user.
* There was a corner case where an account might have been recorded as upgraded but subsequently been downgraded. 

Basically as soon as that state is maintained across multiple systems, there is the possibility that the state is out of sync. 

### No API for MHV account status
There is no direct API that a client can invoke to say "Given this MHV account ID, what account tier is it?" Instead, VA.gov invoked the blue button API and derived the account tier from the number of health record categories avialable (which numberr differs for basic/advanced/premium accounts). This seems like a brittle implementation. 

### Discoverability of basic accounts
Users can self-register for a low-assurance credential (either an MHV basic account or a non-identity-proofed ID.me or Login.gov credential), but in these cases no information is recorded in MPI. That means that when a user signs in with such a credential, a system like VA.gov has no way of determining if they have an MHV account record. If they use an MHV basic credential, then the credential carries an MHV account identifier with it, but e.g. there's no way to link a non-proofed ID.me credential to existing MHV self-entered data. 

### MHV account status spanning across credentials
Ultimately the MHV account tier determines what features and data the user is allowed to access, aka authorization. 

Because the MHV account record can be associated with multiple credentials, it introduces the possibility that a user signs in with a high-assurance ID.me credential, and their MHV account gets marked as "upgraded". They can then sign in with a lower-assurance MHV credential and the account is still upgraded, because the status is associated with the account, not the credential.  

In principle, authorization decisions should flow from the identity assurance and authentication assurance of the credential and/or the specific authentication event for a session, rather than being a permanent state of an internal account record. 

## Options
Given the above challenges, how might we address MHV account requirements for the API integration between VA.gov and MHV.

Assumptions:
1. For the immediate future, the account concept is too ingrained within MHV services to easily remove. _Check this assumption!_
2. Going forward, users should not need to create an MHV credential to interact with health features on VA.gov.
3. The system should work both for users who already have an MHV account record and users who don't yet have one.
4. The system should work for both high-assurance users (who will have full access to all health features) and low-assurance users (who will have limited access to health features). 

### 1. Resurrect the Account Creation API as-is
The code in vets-api to perform account creation and upgrade, while complex, was well-tested and functional. One option would be to continue using it as currently designed. Most likely it would be triggered upon first visiting any health feature that requires MHV API access. 

### 2. Resurrect the Account Creation API with modifications
Some potential simplifying modifications to the account creation API:
* Consider combining creation and upgrade into one operation.
* Determine whether terms and conditions acceptance is still required and figure out if that belongs in this API or as a seperate resource.
* Consider adding an API to determine account tier/allowed actions for a user, rather than deriving that from blue button or other information. 

### 3. Embed account creation in the session token API
Could account creation be done implicitly within the action of obtaining a session token from MHV? If so, this would entail updating the session API to accept an alternate identifier like an ICN, and then the session token API would either use an existing MHV account or create one. _Simpler for VA.gov, but perhaps overloading the intent of that API?_

### 4. Make authorization a function of current authentication context
Instead of recording account tier as a persistent state of the account, derive a set of allowed actions from the context of the presented credential and authentication event. This would likely be implemented within the session token API by returning some information about what actions were authorized for the current session. 

### 5. Figure out how to link information about low-assurance credentials 

## Recommendation


