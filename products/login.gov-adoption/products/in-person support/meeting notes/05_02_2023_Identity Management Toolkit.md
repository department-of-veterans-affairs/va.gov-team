## Identity Management Toolkit
### Call with Alicia Ray, SME
### 05/02/23

#### Product:
*Who has access? All VHIC admins? Anybody with PIV?
User roles? (Confirm)*
    •    Admin
    •    Associate/Supervisor (normal user)
    •    Auditor & Read-only
*Training required?*
(Did not cover these topics)

*How it’s accessed:
via VA Desktop only? PIV required?*
Yes
(But other means of signing in: not widely supported. Had username/pw previously, it’s semi-available…in cases where PIV is not)
Authenticated through active directory and PIV access

*How it's being used today
Any KPIs or data around usage?*
Danny is the senior architect for IAM - he’s at the top of the food chain!

*Who owns the product?*
IAM - Overall program is authenticated source for identity information
Any identity proofing, validation has to be integrated with IAM
Even if you source it for your tool externally, would still need to go through IAM for integration
Any identity in VA: Veterans, dependents, caretakers
Every entity or person is proofed or verified through IAM

Yes, we have groups and teams that work with other groups for integrations
That would be the start point: initiate service request, or integration agreement?
Alicia could find the paperwork for that
We could pose what we’re doing, what we need from IAM to support that effort, they’d take it off from there
Work with our team to analyze: what type of interaction would be needed for integration agreement? On both sides
What comms, what they could provide, service calls to support that activity
We’re internal to IAM but we still go through them for our identity proofing
VHIC tool doesn’t house any of that info: we use Toolkit and web services with that team to support adoption of VIC card
For Veteran to get VIC card, must have minimum LOA2
Must be identity proofed, either in person
Documentation: driver’s license, passport, 2 others
All details must be validated with documentation
Then VHIC is able to issue health identification card
Our VHIC clerks/associates/supervisors/admins are granted access to the toolkit in order to do proofing
Not all users have card request capability
All users who create card requests are granted access to the Toolkit for proofing tasks

*Any roadmap that might exist
Is it being actively maintained? By whom?*
Yes!
Continuous development schedule, releases every 3 mos (minimum, can be more frequent)

*References MVI:
How/does this differ from MPI?*
Acronyms were renamed - VAMPI encompasses it all
VA Master Person Index
Within that: MPI (Master Patient Index), PSIM (? Where Vista-level info is stored)
Toolkit is an interface that pulls from primary view
Lots of rules exist for who can update what and how
So when integrations are developed, they have rules in place for what types of updates they’ll accept from which integration agreements
You aren’t locked out of making updates, but they go through an integration agreement so all parties know what transactions can transpire, what they’ll do (Add, Update certain fields - different arrangements with each integration partner)

#### Feasibility for IPP:
*1 piece of evidence required?
Is VHIC considered LOA2?
How does this map to IAL1 or IAL2?*
I believe so - they’ve gone through AAL to IAL
They do map up
There are levels above that
VHIC card looks for a minimum of 2: proofed, documentation was presented and verified

*Does Login.gov currently inherit VHIC credentials?*
Don’t know
Login.gov is used to sign into various tools on AccessVA
VHIC also has a counterpart now that provides self-service to the veteran through Access.gov
They log into that tool using ID.me (and Login.gov?)
Did Login.gov scale back?
One credential provided was being scaled back (DSL)
Alicia is not on that side of the house, but it’s all under IAM: SSoE, interface with identity management

*If not, why not?


Only accept these?:
Drivers License
Passport
Federal, State, or Local Government-issued ID containing full name*
(Did not cover these topics)

*No evidence captured (via photo or digital document)? Just attested to by VHIC associate?*
Most cases, yes
In some cases, they have to attach documentation: when there’s an attribute change (name change, or anything that can’t be validated, and they have supporting documentation to validate it. They upload that, it gets flagged for data quality folks to review & escalate. The proofer doesn’t process it, but they upload the documentation supporting it. VHIC associate validates all the attributes before approving/rejecting. That manual review process is tracked within Toolkit as well.)
Self-service does have the capability for Veteran to process VHIC card: upload their documentation, recent photo
We go through manual review of processing those self-service requests


====
#### NIST

IAL2
One piece of SUPERIOR or STRONG evidence depending on strength of original proof and validation occurs with the issuing source, or
Two pieces of STRONG evidence, or
One piece of STRONG evidence plus two (2) pieces of FAIR evidence

====

*No credential created?
No username/pw, right?

No MFA?*
(Did not cover these topics)

====


*Capture image - just for card itself?*
Yes

*Mailing address:
What about unhoused Veterans?
Any issues with how it does address validation? Ever encounter errors?*
(Did not cover these topics)

*Does it validate against an authoritative source?*
Right now, addresses are part of VA Profile
VA Profile is to be the authenticating source for all addresses within the VA
Although addresses are stored within Toolkit or
All validation is going through VA Profile going forward
Toolkit takes it addresses through enrollment, and enrollment only validates through VA Profile
They haven’t made it to production yet - have been trying to flip that switch for 3+ years!


