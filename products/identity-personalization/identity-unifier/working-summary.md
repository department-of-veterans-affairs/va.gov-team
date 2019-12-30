## Overall
Veterans since the 1980s are pretty reliably recorded by DoD. Veterans before that would have to have been specifically recorded somewhere else, probably by trying to access some kind of service and then submitting (or having someone else retrieve) their DD214. These are called legacy Veterans.

For legacy Veterans, there are broadly four different sources where definitive Veteran records could come from:
* VBA
* VHA
* Records administration (NARA)
* Other VA or near-VA (e.g. VIC, AAFES, etc.)

There are two main databases that contain authoritative Veteran information in the VA:
* MVI - authoritative source for _identity_
* VADIR - authoritative source for military service

Unless something changes, these both need to have _everybody._ Neither one is much good without the other.

**The key thing here is then to make sure that all identity information is in MVI (and new identity information is updated into MVI) and that all military record information is in VADIR (and new military record information is updated into VADIR).**

Our current understanding is that identity is being _pretty_ well bundled up in MVI, but it's less clear if military service information is being reliably bundled up into VADIR.

## VADIR ([main notes](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/VA-Systems/vadir))
+ Replicated copy of DEERS, from DMDC.
+ DEERS is missing Veterans before 1983(?) and missing Guard/Reserve.
  + DEERS also appears to systematically be unreliable on the day field of birthdates.
  + DEERS does not reliably get updates to discharge statuses if they are upgraded or corrected.
+ VADIR has gotten dumps of BIRLS data in 2009, 2013, and November 2017, so it should have more than DEERS does.
+ All access is via custom-built services, which include eMIS. These are built (slowly) by VADIR development team.
+ Includes demographics and military service.
+ Unclear what type of searches exist.

## MVI ([main notes](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/VA-Systems/mvi))
+ VA's chosen source for identity.
+ Contains only demographics and correllation IDs.
+ Original source is the Master Patient Index, so this primarily includes all Vetearns known to VHA.
+ MVI got a BIRLS dump in September 2013, and was working on another in 2016 but the effort stalled.
+ MVI has a fuzzy search
  + Sometimes it will return more than one Veteran; in this case vets.gov returns a 'Not Found'
  + This occurs for 0.24% of queries on vets.gov. There are spikes up to 2.5% but these do not seem to be correllated withh anything else.

## BIRLS (VBA)
+ Ultra-legacy system for VBA identity, running on a mainframe.
+ Can only be accessed via services and is highly over-taxed; team is skeptical of setting up any more applications to use BIRLS, as they hope to have it retired soon.
+ Most data should be in VADIR or MVI, given recent data dumps.
+ Monthly dumps to PA&I and OPP.
+ Contact: Marsha Cilino

## NARA/NPRC
+ DoD data with very limited number of fields; basically just notes if person was ever in military, without discharge status, military record, etc.
+ Data after Vietnam era is online; other data is checked manually.
+ Not clear if the online NARA data differs from DMDC/DEERS.
+ OBPI is trying to get a copy of this data to plug into VBMS.

## VetVerify
+ Service created by AAFES to conclusively determine Veteran identity.
+ Checks DMDC/DEERS and then checks NARA.
+ Veterans who are missing discharge status data or (extremely few) who are missing entirely are invited to upload documentation of their status. VetVerify runs a new system to keep track of this data. They've received document uploads from 75,000 Veterans as of June 2018, since their May 2017 launch.

## Corp (VBA)
?

