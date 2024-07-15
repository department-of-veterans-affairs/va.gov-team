# MHV
MyHealtheVet implements its own credential and account management system, originally for use by its own site, but now federated elsewhere at VA. There are three tiers of account:

## Account Levels
### Basic
* Anybody can self-register for an MHV Basic account. 
* Self assert name, DOB, SSN, etc.
* Don’t need to be a Veteran or VA-affiliated person.
* Just a username and (weak) password. No 2FA, no identity proofing. 
* On MHV’s site, a basic account grants access to self-entered data only. 
* VA.gov treats this as a level of assurance 1 credential. 
* MHV doesn’t even validate the email address, so in some ways it’s not even an LOA 1 credential. 

### Advanced
* When somebody self-registers, MHV does a provisional query of the PII traits (name/DOB/SSN/gender) against MPI. If a match is found, MHV records the correlation to VA identity and marks the account as Advanced.
* Correlation consists of recording the MHV account identifier in MPI, and recording the ICN (MPI primary key) in the MHV account record. 
* Still no 2FA, but some measure of identity “proofing” via matching against a known datasource.
* On MHV’s site, an advanced account has access to additional features, mainly prescription refill. 
* VA.gov treats this as an LOA 1 credential. 

### Premium
* Historically, MHV users obtained a premium account by doing in-person identity proofing at a VAMC, by showing documents to an on site staff member known as an “MHV coordinator”. Rigor of this in-person identity proofing varies.
* There is/was also an upgrade path via VA.gov. If a user signs in to VA.gov with their MHV advanced credential and goes through ID.me online identity proofing to establish an LOA3 identity, VA.gov triggered an “account upgrade” API call to upgrade the MHV account to premium status. 
* MHV premium users have access to all features on the MHV site including secure messaging and appointment scheduling.
* VA.gov treats an MHV premium account as LOA3 (see “VA.gov authorization” below). Notably, an existing MHV premium account does not require 2FA to be considered LOA3 on VA.gov.
* Other parts of VA treat an MHV premium account as LOA2. 

### Composite MHV+ID.me Credential
* When MHV was added as a credential option on VA.gov, it was done by brokering that credential through ID.me.
* At mimimum, ID.me performs email validation on a low-level MHV credential. 
* A user can also add 2FA or perform identity proofing (provided by ID.me) to the MHV credential (username and password)
*  At this point such a user’s identity is a composite of information from MHV and ID.me. 
* The MHV credential is linked to a concept known as an ID.me “wallet”, which can have multiple credentials associated with it.
* It’s also possible to later detach a credential from an ID.me wallet.

## Account Creation Paths
* The most obvious way to establish an MHV credential/account is by registering through the form on the MHV site. Such an account may then be upgraded to Advanced, and if a user performs in-person or online identity proofing, can be upgraded to Premium.
* There was also a mechanism for VA.gov to _create_ an account, via a similar API integration to the “account upgrade” API. 
* VA.gov would trigger this creation if a user was LOA3, did not already have an MHV account, and was a VA patient. 
* The account would be created and immediately upgraded to premium. 
* VA.gov-created accounts were termed “alternate” or “uncredentialed” accounts; they were sufficient for API-level access to MHV data, but did not have a separate MHV username/password associated with them and thus could not be used to log in to the full MHV site.
* When a user with an uncredentialed MHV account navigates to MHV, MHV forces them to establish a username/password even if they are using a VA-supported credential like ID.me or DSLogon.
* Both the creation and upgrade API integrations were complex; in the course of the SSOe integration, we decided to stop invoking them. Instead, when a user is sent to the MHV site with an SSOe session, MHV can elect to perform account creation/upgrade based on the available traits in the SSOe session. 

## Other Notes
* Informally, the MHV team has expressed a desire to get rid of the Advanced account tier.
* _Editorializing:_ The fact that MHV records these account levels as permanent attributes of an account, rather than as attributes of a specific authorized session, is not great.
Specifically, an MHV account can be upgraded to premium by linking it to and ID.me wallet with 2FA and identity-proofing. But, if the MHV credential is later detached from the ID.me wallet, the MHV credential retains its premium status.

# DSLogon
DSLogon is a credential operated by DoD with a joint agreement for use by VA. It was the primary credential for accessing eBenefits. 

## Account Levels
### Level 1
* Lowest level account, no identity proofing or 2FA.
* As of late 2019, in response to various security incidents Level 1 accounts are no longer allowed to sign in; users with such accounts are prompted to perform identity proofing.
* When it was allowed, VA.gov treated this as a LOA1 credential.

### Level 2
* Sometimes also referred to as “DSLogon premium”
* Requires identity proofing via knowledge based verification (e.g. credit bureau questions)
* Nominally has 2FA - but via a security image (something you know and something you know?). 
* VA.gov treats this as a LOA3 credential.

### Level 3
* DSLogon supports authentication using CAC card (for current servicemembers/DoD employees).
* Presumably maps to IAL3. 

## Other Notes

# ID.me
ID.me is a third party identity and login provider that was originally the sole credential for Vets.gov. When MHV and DSLogon credentials were added, ID.me continued to broker those credentials, so in SAML terms it was the sole IdP for the Vets.gov application. (Until the addition of SSOe as an additional intermediate broker). 

## Account Levels
### LOA1
* Unproofed account. 
* Verified email address. 2FA enrollment is optional.
* Supports variety of modern 2FA methods.
* VA.gov treats this as LOA1.

### LOA3
* Identity proofed account.
* Can complete online identity proofing by scanning a government issued ID.
* Can also complete using knowledge based verification and demonstrating control of a known phone number (post Equifax breach). 
* 2FA required.
* VA.gov treats this as LOA3.

### IAL2
* ID.me has gotten certified for IAL2 identities verified online using a trusted referee. 

## Other Notes
* In the course of SSOe integration we’ve discussed how VA can adopt IAL/AAL instead of LOA, and have set some groundwork but not fully adopted same.
* During the time when ID.me was a sole Identity provider/broker for Vets.gov/VA.gov, a dependency on the ID.me account UUID crept in to various places in the VA.gov codebase. That dependency now poses problems for scenarios where ID.me is not in the picture, such as accepting an inbound SSOe session initiated on another site. 


# VA.gov Authorization
* Note above in MHV and DSLogon sections, where an MHV Premium and DSLogon Level 2 credential are treated as “LOA3” by VA.gov even though in NIST terms those credentials are more like LOA2.
* Essentially VA.gov only has two tiers of authorization, which for historical reasons are referred to in code as “LOA1” and “LOA3”.
* “LOA1” only allows access to a few features over and above an un-authenticated user. In particular an LOA1 user can save in-progress forms for later completion. This only grants them access to data that they entered previously, not lookups of existing VA records.
* “LOA3” allows full access to all existing data for the user. 
* Access to specific features is further gated by the presence or absence of the relevant VA identifier in MPI. E.g. if a user does not have a Corp identifier, then any benefits feature that requires resolving the user in CorpDB is disallowed.

# Terminology - Upleveling, Step-up, Upgrade, Identity Proofing etc 
There are several inter-related concepts around escalating a user’s level of access:

* *Identity Proofing* Is the process of establishing with high degree of certainty that a given credential is associated with a “real world” identity. Done to varying levels of rigor, either online by ID.me and DSLogon or in person by MHV.
* *Account Upgrade* This concept really only exists for the MHV credential/account with their multiple access tiers. An MHV account is only eligible to be upgraded if the user is first identity proofed.
* *Upleveling* This refers to the fact that in its integration with ID.me, VA.gov typically does two SAML round trips for LOA3 users. VA.gov first requests an LOA1 session. When ID.me responds, it includes an attribute indicating the “highest LOA” for the user, i.e. indicating if the user has previously completed identity proofing. If VA.gov sees that the user has a highest LOA of 3, it immediately performs a second SAML round trip to establish an LOA3 session. 
_Editorializing_ This mechanism is in many ways a point solution and maintaining session continuity across the multiple round trips has proven challenging when adding SSOe into the mix. 
* *Step up authentication* This is a more widely used concept where an application requests additional authentication (e.g. presentation of a second factor) only when specific actions are taken. This is different from up-leveling because in the up-leveling case, VA.gov requests the LOA3 session optimistically as soon as an eligible user logs in. 
