# 21a Digital Accreditation

## Problem overview 

Before attorneys or claims agents can help Veterans with claims, they need to become accredited through VA. To become accredited, they need to submit [Form 21a](https://www.va.gov/find-forms/about-form-21a/), which the Office of General Counsel (OGC) uses to verify the applicant’s credentials and reputation. Claims agents then need to complete a written test verifying they have sufficient knowledge of the claims process. 

This form is currently a paper form. OGC would like to cut down on the time needed to process the form by digitizing it. In the digitization process, they would like to add additional questions that they would normally have to reach out to the applicant to ask. This should result in less back-and-forth with the applicant.

Current stakeholder pain points:
* OGC currently has to reach out to applicants to ask follow up questions, depending on how they respond to the questions in the standard form.
* OGC currently has a 2,000 applicant backlog. Their staff is massively overworked–they don’t have enough staff to process all the applicants they have.
* This backlog and lack of staffing resources means that applicants take several years to complete. (Note that a [PDF](https://www.va.gov/OGC/docs/Accred/HowtoApplyforAccreditation.pdf) linked to from the [OGC website](https://www.va.gov/ogc/accreditation.asp) says 60-120 days, but we’ve heard from a recently accredited claims agent that her process took 2 years.)
* From a process standpoint, OGC has been “burned” by working in an agile fashion before–teams have told them that they’ll build features in future versions, and it never gets done. They prefer to wait to release the digitized form until it has the entire set of features that they need to get their work done.

**For more information on the problem and the product we're building, view the [21a accreditation product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/product-info/21a-digital-accreditation-product-outline.md).**

## The end user

The end user is similar to our other projects, like [Contact Information Updating](https://docs.google.com/document/d/1jNf8Xa9HkDgWAfexjcttyGvsu3FOEVRG4qq6rcA0Og8/edit#heading=h.4xu2nqsuzjyi). However, our users have not yet become accredited, which means that they have a slightly different set of goals, needs, and pain points. We know from our research in August 2024 that applicants experience the below pain points during the accreditation process: 

* Little to no transparency from OGC about the status of their application
* Calling OGC does not result in more information
* They want to begin helping Veterans, but feel like they’re stuck in limbo for an indefinite amount of time

Applicants tell us that there are Reddit and Facebook where people share their experiences about the accreditation process. 

The below personas reflect the goals, pain points, and other information for _accredited_ users, some of which will be applicable to this project’s users:

* [Accredited attorney persona](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717533456497/60064424f651818203ff49ac43d6fb9f0f2bccac?sender=u8cf3f08a008c2b61ad621433) (Mural) - Representation of what we know about attorneys based on secondary research (previous studies, conversations with OGC), and primary research conducted with attorneys in August 2024.
* [Accredited claims agent persona](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718731869465/cf73b89eddb92c604d292554a31e503f7ce5d982?sender=u8cf3f08a008c2b61ad621433) (Mural) - Representation of what we know about claims agents based on secondary research (previous studies, conversations with OGC), and primary research conducted with claims agents in August 2024.

## Proposed next steps
* Continue to update the staging site so that it matches OGC's desired fields and functionality.
  * See Figma v5 (Future version) for the latest round of applied feedback.
  * Tickets capturing these changes compared to the current state can be found in the [project board](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/board?labels=arf-eng) and filtering by "Form 21a"
* Continue to collaborate with the GCLAWS team to update the schema for successful 21a submission.
  * GCLAWS is the database that the digitized Form 21a will ultimately submit to. It is under OGC's technical umbrella outside of OCTO, and the GCLAWS team we interface with is in charge of creating the API endpoints the form will need to submit to.
  * This team primarily communicates via Teams inside the VA network, using the `Accreditation Portal (va.gov)` channel.
  * Inside that Teams channel is a shared file directory. An [Excel spreadsheet](https://dvagov.sharepoint.com/:x:/r/sites/OITSPMGCLAWS-VBAIntegrations/Shared%20Documents/Accreditation%20Portal%20(va.gov)/21a%20Design%20Feedback/v5/ARF%20-%20GCLAWS%20alignment%20spreadsheet%20v5%20%5Ball%20new%20requested%20fields%5D.xlsx?d=wced87ea864214601b2e9b2de165ab100&csf=1&web=1&e=wPkYjc) has been used to track field parity between systems during development. If you cannot access that Sharepoint link, it can be found in the Teams channel: `Accreditation Portal (va.gov) -> Files -> 21a Design Feedback -> v5`
* Add schema validation to `vets-json-schema` for the vets-api controller before submission to GCLAWS
* (Optional) Push some of the repeated patterns from this form back to the Forms Library for easier re-use by other teams. Candidates for re-usable patterns could include:
   * the "still [working/attending/living] here" checkboxes associated with date ranges
   * internationalPhone pattern
   * date formatting for review pages
* Run usability testing to validate some of the design decisions about the digitized form. (Add link to plan once it's ready) See the [Future Research Activities Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718980793805/b1c89e3110a00b235ee30bc04bab3cc96a33c696?sender=u2a4240a640b257ce33545495) for more information on proposed research studies about 21a and other ARP features. 

## Project resources and links

* [21a paper/PDF form](https://www.va.gov/find-forms/about-form-21a/)
* [21a accreditation product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/product-info/21a-digital-accreditation-product-outline.md)
* [21a accredidation use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/product-info/21a-accreditation-use-cases.md)
* [Staging site](https://staging.va.gov/representative/introduction), where we have built out a portion of the digitized form. Use these [test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) to log into the staging site
* [21a Figma file](https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/ARF---Form-21a---Apply-for-Accreditation-(CA-%26-Attorneys)?node-id=616-23089&t=luaHQGKRIHwSK1V0-1); see the "About this file" page within the Figma file for more information about what the Figma file contains
* [Collaboration cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/91879) and [Midpoint review feedback](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1398)
* [21a Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1708633679899/c359f73dea37dac6c347714be00263a49cb1a0c4?sender=u2a4240a640b257ce33545495), created by our Enablement Team in the earlier stages of the project, but not updated since then
* Business logic trackers - These are rules documented by OGC that ARF inherited at the start of the project. (OGC had worked with a previous team in 2022 to attempt to digitize the form; these documents are from then.) In our work with OGC, some of these rules were changed. See the annotations in Figma for the latest descriptions of how the fields on the form should work.
  * [Business Logic - 21a - Agents.pdf](https://dvagov.sharepoint.com/:b:/s/vaabdvro/Eew_OdPLYRpBgW1I_WzgpbIB_aAWNGm0jjW52qDOv7wcEA?e=Jn6aiW) (Sharepoint)
  * [Business Logic - 21a - Attorneys.pdf](https://dvagov.sharepoint.com/:b:/s/vaabdvro/ERV-Dht0rKpLoMfwS-YDTpkBGyE_GVUdNxz7tsZ6sM23Cg?e=GmrajJ) (Sharepoint)
  * [List of jurisdictions, agencies, and courts.pdf](https://dvagov.sharepoint.com/:b:/s/vaabdvro/EdraCvW6JJtLia7Ju4uI4l0BYsEKE_ppHHmHI8fbHJ8kFw?e=WQMwpp) (Sharepoint)
* [GCLAWS Schema alignment spreadsheet](https://dvagov.sharepoint.com/:x:/r/sites/OITSPMGCLAWS-VBAIntegrations/Shared%20Documents/Accreditation%20Portal%20(va.gov)/21a%20Design%20Feedback/v5/ARF%20-%20GCLAWS%20alignment%20spreadsheet%20v5%20%5Ball%20new%20requested%20fields%5D.xlsx?d=wced87ea864214601b2e9b2de165ab100&csf=1&web=1&e=wPkYjc) (need to be on the VA network)

## Slack communications

Because this work involves so many teams (the ARF team, GCLAWS team, Forms Library Team, etc.) we found it helpful to track some of our Slack conversations: 
* [Slack thread (Ad Hoc workspace)](https://adhoc.slack.com/archives/CJUBKPJ30/p1720647636720869) asking about **military discharge statuses**
* [Slack thread in #veteran-facing-forms](https://dsva.slack.com/archives/C044AGZFG2W/p1721143394682439) asking about **min/max list loop validation**
* [Slack thread in #trauma-practice](https://dsva.slack.com/archives/C04F9JLSATE/p1721134803970459) asking about **trauma-informed methods to warn users about challenging questions**
* [Slack thread in #sitewide-content-accessibility-ia](https://dsva.slack.com/archives/C01K37HRUAH/p1720557581408929) asking **if/how to display raw links**
* [Slack thread in #veteran-facing-forms](https://dsva.slack.com/archives/C044AGZFG2W/p1720561869891279) asking about **progress within a step/progress bar** ([ARM also also tagged our team](https://dsva.slack.com/archives/C0643ADPP60/p1720614998814519), offering the same resources.)
* [Slack thread in #sitewide-content-accessibility-ia](https://dsva.slack.com/archives/C01K37HRUAH/p1719960829744819) asking **if we should use "Military history," "Service history," or "Military service history."** (No response)
* [Slack thread in #veteran-facing-forms](https://dsva.slack.com/archives/C044AGZFG2W/p1719871679682529) asking **if we should use "Military history," "Service history," or "Military service history."**
* [Slack thread in #sitewide-content-accessibility-ia](https://dsva.slack.com/archives/C01K37HRUAH/p1719531652111479) about office hours 
* [Slack thread in #platform-design](https://dsva.slack.com/archives/CQB4DP56V/p1721418955736989) about **design approach to min/max**
* [Slack thread in #design](https://dsva.slack.com/archives/C0NGDDXME/p1721433911257739?thread_ts=1720443623.691809&cid=C0NGDDXME) about the **progress bar** (see also the [feature request in Github](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70094) and their [Figma file](https://www.figma.com/design/PvD4V93eBOXyKwmBfIJk47/AVA-Component-library?node-id=264-14575&t=ziot6pGkpkBABoJq-1))
* [Slack thread in #veteran-facing-forms](https://dsva.slack.com/archives/C044AGZFG2W/p1723226324502029) about **expandUnder accessibility**
* [Slack thread in #trauma-practice](https://dsva.slack.com/archives/C04F9JLSATE/p1724110779946819) about **best ways to warn users and help them cope with difficult questions**
* [Slack thread in #sitewide-content-accessibility-ia](https://dsva.slack.com/archives/C01K37HRUAH/p1724676016296359) about **when to use terminal punctuation in error messages**
* [Slack thread in #veteran-facing-forms](https://dsva.slack.com/archives/C044AGZFG2W/p1725924253908929) about **jumping between sections and numbering questions**
* [Slack thread in #design](https://dsva.slack.com/archives/C0NGDDXME/p1725049384222299) asking about **international phone numbers** (not from our team, but relevant to us) 
