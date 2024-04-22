_This document attemps to answer questions that have come up repeatedly during development of various features. It currently has an MHV focus but feel free to add additional information about other identifiers/identity questions._

_Please refer to other documents in the same directory for additional details._

# Table of Contents
1. [Can only veterans log in to VA.gov?](#one)
2. [Can only veterans identity proof/get an LOA3 account?](#two)
3. [Is being logged in with LOA3 necessary to use authorization-requiring features of VA.gov?](#three)
2. [Is being logged in with LOA3 sufficient to use authorization-requiring features of VA.gov?](#four)
2. [Are only veterans in MVI (the Master Veteran Index)?](#five)
2. [Are all VA.gov users in MVI?](#six)
2. [How do you tell if somebody is a veteran?](#seven)
2. [What's an ICN?](#eight)
2. [What can you tell from a user's ICN?](#nine)
2. [Does everybody in MVI have an ICN?](#ten)
2. [Are only veterans VA patients?](#eleven)
2. [Are only veterans in MHV?](#twelve)
2. [Are only VA patients in MHV?](#thirteen)
2. [How do you tell if somebody is a VA patient?](#fourteen)
2. [Does MVI contain any information about a user's MHV account level?](#fifteen)
2. [Can a user be in MHV but not in MVI?](#sixteen)
2. [What are the conditions for being able to use MHV/health features on VA.gov?](#seventeen)
2. [What are the conditions for being able to create an MHV account for a user who is not in MHV?](#eighteen)
2. [What are the conditions for being able to upgrade an MHV account for a user who has an MHV basic or advanced account?](#nineteen)


### Can only veterans log in to VA.gov?<a name="one"/>

No. Anybody can create a VA.gov account.

### Can only veterans identity proof/get an LOA3 account?<a name="two"/>

No. Anybody can identity proof their account and be logged in at LOA3.

### Is being logged in with LOA3 necessary to use authorization-requiring features of VA.gov?<a name="three"/>

Yes.

### Is being logged in with LOA3 sufficient to use authorization-requiring features of VA.gov?<a name="four"/>

No. LOA3 just states that you are who you say you are. Some features may require you to be a VA patient. Some features may require you to be a veteran. Some features may require both, or have other requirements. 

### Are only veterans in MVI (the Master Veteran Index)?<a name="five"/>

No.

### Are all VA.gov users in MVI?<a name="six"/>

No.

### How do you tell if somebody is a veteran?<a name="seven"/>

The eMIS service is the source of truth for whether somebody is a veteran. 

### What's an ICN?<a name="eight"/>

It's an identifier that i used to link identities across different systems. Its original purpose seems to be as a VistA (health) record primary identifier but it seems to have expanded to other uses.

### What can you tell from a user's ICN?<a name="nine"/>

The value itself does not mean anything. The part after the "V" in the value is a checksum of some sort.

### Does everybody in MVI have an ICN?<a name="ten"/>

Yes! 

### Are only veterans VA patients?<a name="eleven"/>

No. All kinds of non-veterans receive health care at VA facilities.

### Are only veterans in MHV?<a name="twelve"/>

No. All kinds of users have MHV accounts (health providers, staff, etc). Plus, all kinds of non-veterans receive health care at VA facilities.  

### Are only VA patients in MHV?<a name="thirteen"/>

No. Aside from the above, anybody can go and create an MHV account without ever receiving treatment at a VA facility.

### How do you tell if somebody is a VA patient?<a name="fourteen"/>

A user's MVI profile will contain multiple correlated identifiers. If the user has any correlated identifiers for which the identifier type = "PI" (patient identifier) and the assigning authority = "USVHA" and the assigning facility is in the range 358 – 758 (indicating a VAMC primary station), then the user is a VA patient. The user may have identifiers for multiple such treating facilities.

### Does MVI contain any information about a user's MHV account level?<a name="fifteen"/>

Not anything that can be used reliably. MVI does contain the MHV correlation ID but that does not imply anything about account level. MVI may contain a flag indicating In-person proofing (IPP) has occurred for a user, but that does not reliably correlate with account level.

### Can a user be in MHV but not in MVI?<a name="sixteen"/>

Yes.

### What are the conditions for being able to use MHV/health features on VA.gov?<a name="seventeen"/>

- The user must be logged in as LOA3
- The user must be in MVI (which implies that they have an ICN)
- The user must have an MHV correlation ID
- The user must have an MHV account of the appropriate level:
  - Secure Messaging: Premium
  - Prescriptions: Advanced
  - Health Records: Basic, but more content (e.g. VA Health Summary) is available to premium users

### What are the conditions for being able to create an MHV account for a user who is not in MHV?<a name="eighteen"/>

- The user must be logged in as LOA3
- The user must be in MVI (which implies that they have an ICN)
- The user must be a VA patient (see the logic above for determining patient status from VHA identifiers)
- (There is no requirement that the user must be a veteran. We will determine veteran status in order to pass that attribute to MHV during account creation, but we will not prevent non-veterans from creating accounts).

_Note that new MHV accounts created through VA.gov will be automatically upgraded to premium accounts._

### What are the conditions for being able to upgrade an MHV account for a user who has an MHV basic or advanced account?<a name="nineteen"/>

- The user must be logged in as LOA3
- The user must be in MVI (which implies that they have an ICN)
- The user must have an MHV correlation ID
- ??? (For existing users, are we going to enforce the "must be a VA patient" condition to allow them to upgrade? Seems like a business decision to be made in concert with MHV)
