_Note, this file was migrated on 2/17/20 from https://github.com/department-of-veterans-affairs/va-sso/blob/master/SymmetricSSOAndUUIDs.md_
# RFC - SSO Symmetry and Identifiers

This document describes some known limitations with the VA.gov-SSOe integration approach and suggests ways we might mitigate them. Essentially, the question is "can we establish a VA.gov session from an existing SSOe session to facilitate full two-way session continuity?" 

## Current State
ID.me is the SAML identity provider for VA.gov. VA.gov receives identity traits from ID.me and uses these to establish an application-level session. 

SSOe is the SAML identity provider for all other VA properties (within the context of SSO). These other properties receive traits from SSOe and use them to establish an application-level session. 

(In both cases, ID.me and SSOe federate out to one of three credential providers for the actual username/password authentication - ID.me, MHV, DSLogon. But regardless of what credential is used, ID.me and SSOe are considered as the identity providers respectively.)

As part of the work currently under way, we are incorporating SSOe as a silent broker in the VA.gov authentication flow. This means that VA.gov can receive a combined set of traits from ID.me and SSOe. VA.gov can receive the same set of traits from ID.me (now indirectly via SSOe) as before. But along the way SSOe can establish an SSOe session cookie, allowing single sign-on at other SSOe-enabled VA properties.

![SSO Integration](diagrams/SSOAsymmetry.png)

## Asymmetry Problem
However, the situation is now asymmetrical: 
*  Navigating *from* VA.gov *to* another site will work as expected, because starting at VA.gov means the application session contains both ID.me and SSOe traits. 
* Navigating *from* another site *to* VA.gov will not work as expected because even if an SSOe session is present, it is not guaranteed to contain the additional ID.me traits that VA.gov expects. So, VA.gov is unable to establish a fully working application-level session.

## What's Missing?

The "Trait Analysis" section below contains a full breakdown of what traits VA.gov receives from ID.me and how they are used. 

The only really _essential_ trait that comes from ID.me is the ID.me UUID. This identifier has become a de factor user  identifier in some features of VA.gov. For example, records about some previously submitted forms, user preferences, and opt-in decisions are stored for a given user indexed on their ID.me UUID. So if we attempted to establish a session from SSOe and it didn't contain the ID.me UUID, VA.gov might present incorrect/unexpected behavior where it could not look up existing records for the user. 

There are some other traits unique to ID.me - authn_context, multifactor, loa_highest - that are attributes of the current authentication event or reflect previous authentication events. These would be _helpful_ for certain parts of the VA.gov UX, but they aren't _essential_. These traits aren't mapped to any stored information, so even if missing, VA.gov would not be omitting information for a user.

Finally, there are identifying traits like first/last/birth date/ssn that VA.gov preferentially uses from ID.me but are also available from SSOe/MVI. It's not essential that these come from an ID.me session, but it bears analysis how frequently these two sources of identifying traits have mismatches in data. Otherwise users could see frustrating behavior like their name or other pre-filled form data changing from session to session.

## Really no mapping?

VA.gov (Vets.gov at the time) backed into this dependency on ID.me UUIDs because it explicitly does not maintain a persistent user repository. Instead each time a user authenticates, VA.gov combines the incoming SAML assertion from ID.me with VA-internal information looked up from MVI and uses that to establish a transient user session. 

If VA.gov had maintained a persistent mapping between ID.me UUIDs and a stable VA identifier (such as ICN or IAM SECID), for all users, then today it could potentially map bi-directionally between those identifiers as needed. But, when Vets.gov started, ID.me was the both the sole identity provider and credential provider in use by the site, so this issue was not foreseen. 

### vets-api Account table
Later on, there was a partial attempt to abstract away from the ID.me UUID by establishing an "Account" table in the vets-api database, with a separate UUID. This maps from idme_uuid to a vets-api-specific UUID. It also maps the users ICN and EDIPI. This effort should be considered partial because:
* it was established after the fact and necessarily doesn't cover all users
* the vets-api-specific UUID was not adopted uniformly by all VA.gov features - so some records are still being indexed according to the ID.me UUID.
* It maps to ICN and EDIPI, but ICNs are not necessarily stable long-term, and not all users are guaranteed to have either of these identifiers.

Still, the account table might be helpful in moving forward, and should definitely be kept in mind in terms of associating the data that _is_ indexed using the vets-api-uuid. 

### MVI mapping
Finally, IAM does in fact maintain a persistent mapping from ID.me UUID to other identifiers, by storing the ID.me UUID as a correlated identifier in MVI. Problem solved? Not quite. This mapping is only present if a user has signed in with an ID.me credential to an SSOe-enabled site. The mapping would be missing for some classes of users:
* Users who had only ever signed in to VA.gov and had never used an ID.me credential on an SSOe site.
* LOA1 users who are not present in MVI. 

So, while there is no all-encompassing mapping, it's unclear the number of users affected by this issue.

## Path Forward
Assuming that the number of users for whom this  asymmetry would be a problem is non-neglible, then how can we proceed?

One way would be to fill out the mapping gaps. The most promising place to do this is in MVI. If we can establish the population of VA.gov users who don't have that mapping established, we could arrange for an ETL process where their traits and identifiers are used in bulk to populate MVI. 

Other ways?

## Investigation Needed
1. How many VA.gov users are in ID.me's user database that do not have a stored ID.me UUID in MVI? Ideally this should be broken down by credential type, and potentially bucketed by time since last login.
2. Of the affected users in (1), how many have any kind of stored data associated with their ID.me UUID in vets-api?
3. How complete is the vets-api Accounts table - should this additional vets-api-specific UUID mechanism be adopted further, or abandoned? If so should other features adopt the vets-api-specific UUID now? And what additional VA identifiers should be mapped? Likely not ICN, perhaps SECID?
4. For the data that is indexed using ID.me UUID, how essential is it to correct behavior of the site? Would ignoring it be merely inconvenient, or pose a real hazard to users?

## Appendix: Trait Analysis
Identity traits that are *only* available from ID.me:
```
uuid
email
loa (loa_current + loa_highest)
multifactor
authn_context
mhv_icn       # MHV credential only
dslogon_edipi # DSLogon credential only
```

Identity traits that are *preferentially* used from ID.me:
```
first_name
middle_name
last_name
gender
birth_date
ssn
mhv_correlation_id # MHV credential only
```

Uses of uuid in user model:
* mhvAccount lookup/creation
* In-progress forms
* MVI lookup caching
* (Flipper is instantiated on account_uuid (see below))

Lots of uses in db/schema.rb:
* async_transactions
* form526_submissions
* form526_opt_ins
* evss_claims (believe this is a cache)
* in_progress_forms
* mhv_accounts
* session_activities
* terms_and_conditions

Use of other traits:
* email - form526-opt-ins?
* email - id-card-announcement-subscriptions?

loa_current, multi factor, authn_context are attributes of current authentication event, not associated with any stored information. But are used in some of the account/profile pages to inform verification UX. loa_highest would also be helpful because it informs up-leveling and verification UX. 


## Appendix: Account Model - account_uuid
> Account's purpose is to correlate unique identifiers, and to remove our dependency on third party services for a user's unique identifier.
> The account.uuid is intended to become the Vets-API user's uuid.

Added august 2018 by Harry Levine, Keifer Furzland

Used by 
* user preferences
* profile
* notifications

Establishes new UUID
Can look up by idme_uuid
Associates to EDIPI, ICN

But, no provision for ICN changing over time
Allows null EDIPI/ICN, but because those may not be present, 

### Analysis Questions
* How many users are represented in the Account table vs. not?
* How many of each of those users do/do not have an ID.me identifier correlated in MVI
* Verify correlated ID.me identifier in MVI/SSOe session in staging.

