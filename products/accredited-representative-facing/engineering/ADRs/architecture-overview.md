# Overview

The Accredited Representative Portal (ARP) is hosted on the VA.gov platform, with application code stored in the main vets-api and vets-website codebases. It will eventually live at representative.va.gov. ARP it is intended to be a separate product from a user-facing perspective while leveraging the same infrastructure, significant amounts of code, and many (but not all) of the VA.gov platform processes. Backend code lives in the vets-api monolith. Most of the portal lives in one micro-frontend — claims submission lives in a separate micro-frontend due to it being a port of the VA.gov "Simple Forms" product, and the 21a application also lives in a separate micro-frontend, since it is a complex standalone form.

### Dependencies
- MPI is used to fetch information on both the current user and on claimants. 
- Lighthouse APIs, including the Benefits Intake API and Benefits Claims APIs, are used as an interface between ARP and CorpDB, which is the system of record for power of attorney and claims information.
- GCLAWS is the system of record for accredited representative information. We use their Accreditation API , and separate ICN routes to associate ICNs with representatives.


### Identity
ARP uses VA.gov's SiS (sign in service) as our interface to identity providers. At launch time, Login.gov is the only identity provider, with ID.me ready to be implmeneted. MHV and DSLogon are considered deprecated and will not be added to ARP. We require representatives to add an email address on file with OGC to their Login.gov/ID.me account to gain access to the portal for the first time. Many representatives have PIV cards and would like to use them to access ARP. Currently, representatives cannot directly use their PIV card as an identity provider, but they can associate the PIV with their Login.gov account - doing so is somewhat similar to PIV login in that the card prevents you from having to input a password - but representatives would still have to gain initial access through adding an email address, and they need to have Login.gov/ID.me accounts.
