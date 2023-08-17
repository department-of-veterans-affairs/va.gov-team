# Overview for moving Emergency contact and Next of kin fields 

## Purpose

We have been tasked with migrating **Next of Kin** (NOK) and **Emergency Contact** (EC) to VA.gov. This is a central place for notes, documents, and other information gathered (prior to discovery)

## Slack conversations/threads 

- [VA Profile and My VA (auth exp) teams to add emergency contact and NOK to My VA / VA.gov Profile and Cartography team](https://dsva.slack.com/archives/C7TE0PFTL/p1685998262690309?thread_ts=1685977200.921009&cid=C7TE0PFTL)
- [Slack thread on wording/explanation around "next of kin" language](https://dsva.slack.com/archives/C01K37HRUAH/p1687290331801719)

- [1010 Enrollment currently does not collect Next of Kin or Emergency Contact info](https://dsva.slack.com/archives/CMJ2V70UV/p1688153443697539) *

*[What they do collect](https://github.com/department-of-veterans-affairs/va.gov-team/blob/9d05b80f74385c2c5cd19c9ee3a4c18221ed5a93/products/health-care/application/va-application/10-10EZ%20Form/10-10EZ%20Online%20-%20Fields%20in%20production%20(as%20of%206-2023).md)
  
**Additional information/context around the 1010: 
   
![Screenshot 2023-08-02 at 11 08 03 AM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/58444931/e2c83c59-0f31-443c-96a8-412f86c4683c)

- [Check-in team provided plain language guidance on Next of Kin](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/gh/department-of-veterans-affairs/va.gov-team/59089) as of 8/23
  
## Background 

Liz Lantz (liz.lantz@adhocteam.us) and the Authenticated Experience team conducted research (April 2022) and provided recommendations on migrating the My HealtheVet (MHV) profile into the VA.gov profile. [See the full recommendations here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-05-MHV-profile-research/recommendations.md#in-case-of-emergency-section) 

## Relevant recommendations 

**MHV In case of emergency section**

We heard from stakeholders that the data in this field is strictly used to inform the printable health information wallet card, and isn’t accessible by VA staff in an emergency situation.

>We heard from users that it’s helpful to be able to manage this information because they expect it’s part of their health record and accessible by VA staff. This would be a helpful feature if it tied back to a VA database and updated emergency contact information within the health care system/ Since it doesn’t, it misleads and confuses users.

**Recommendation:** We shouldn’t bring this over to the VA.gov profile in its current state. It’s worth adding this item to the list of health-related profile items to discuss with the health modernization team. [Please see recommendations here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-05-MHV-profile-research/recommendations.md#in-case-of-emergency-section) 

<img width="972" alt="Screenshot 2023-08-04 at 10 58 09 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/58444931/104b829d-4185-4c1f-8246-cc7600e4f5ba">

## Check-in Experience team 

[Ticket to Add plain language statement to explain next of kin](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2022-05-MHV-profile-research/recommendations.md#in-case-of-emergency-section](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/gh/department-of-veterans-affairs/va.gov-team/59089)https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/gh/department-of-veterans-affairs/va.gov-team/59089)

Collecting NOK in Check-in experience. 

* If they click “no” what is the flow?  
    * For our pre-check-in process for in-person appts, if a Veteran answers "no" that NOK is incorrect, then they'll need to review that information with an MSA on the day of their appt in order to check in [Wireframe for confirmation page](https://www.sketch.com/s/231af204-0959-46b4-80f0-eebb94922744/a/YZJWVld). (It's a clinical ops business rule that pre-reg demo questions (contact, emergency contact, next of kin) have to reviewed ~7 days, which I think you're aware of.)
    * For day of check in for in-person appts, if a Veteran answers "no" that NOK is incorrect, then we don't allow them to proceed any further. They're taken directly to a confirmation page that tells them to see an MSA to update their next of kin with them. [Wireframe](https://www.sketch.com/s/231af204-0959-46b4-80f0-eebb94922744/a/27moxKp)
    * Pre check in and check in doesn't allow editing of NOK because our web app isn't full auth.
        * Maybe just restated from Kristen: 
    * Yes, check-in and pre-check-in just confirm that NOK and emergency contact are correct. We pull the data from VistA. We had discussions with VA Profile, but at the time that we built that part of the experience it wasn't possible to connect to there. We update the timestamp in (would need to confirm what all system we update) to show when a Veteran confirmed this information, but we do not allow Veterans to edit/don't send edits anywhere.
* Q: Is Check-in also collecting Emergency Contact? 
    * Emergency contact is similar. It's in VistA, which pre-check in and check-in only "read" and don't allow editing back to VistA. Wireframe for pre-check-in when Veterans answers "no" to emergency contact.
* Where is this being stored? 
    * NOK is stored in VistA (Check in doesn't push edits for NOK to VistA) 
* Additional info: 
    * Now, as far as the plain language for defining next of kin to help some Veterans understand how to fill out or review their next of kin, here is a working version that CAIA team is still reviewing. Will provide an update once it's been reviewed by them.
    * Our team started talking about using the form hint text component to show the next of kin definition, but that’s not really appropriate for our design since we’re not using a form field.

