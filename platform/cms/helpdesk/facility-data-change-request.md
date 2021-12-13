Moved to [Issue Template](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/.github/ISSUE_TEMPLATE/facility-data-change-request.md)

---

## Intake (assuming editor submission to helpdesk (HD))
- [ ] Submitter: <insert_name>
- Change type (select one)
  - [ ] VAMC new facility
  - [ ] VAMC facility closure
  - [ ] VAMC facility name
  - [ ] VAMC system name
  - [ ] Vet Center new facility
  - [ ] Vet Center facility closure
  - [ ] Vet Center facility name
- [ ] If the submitter is an editor, send them the link to the CMS Knowledge Base (KB) article on facility basic data for their product (VAMC or Vet Center). Let them know that facility changes can take between 75 days and 4 months after submitting a request, according to VAST administrators.
- [ ] If the change is a facility closure, send the editor a link to the operating status KB article and have them change the status to Facility notice and provide a description of the facility closure so that Veterans are aware of the future closure.
- [ ] Other stakeholders to include on updates, if any: <insert name>
 
## Acceptance criteria (delete all instructions except the set that applies to the change requested)
  
<details><summary>VAMC – new facility</summary>
  
- [ ] CMS team becomes aware that the new facility is now on the Facility API.
- [ ] CMS engineer updates the Section.
- [ ] CMS engineer updates the facility service nodes.
- [ ] CMS engineer bulk publishes nodes.
- [ ] HD notifies editor and any other stakeholders.
</details>
 
<details><summary>VAMCs - facility closure</summary>
  
- [ ] CMS team becomes aware that the facility is no longer on the Facility API.
- [ ] CMS engineer bulk archives the facility service nodes. (https://prod.cms.va.gov/admin/content/bulk?type=health_care_local_health_service)
- [ ] CMS engineer edits the facility node, add a revision log to cover who requested the change and change moderation state to archive.
- [ ] CMS engineer finds the menu for the system https://prod.cms.va.gov/admin/structure/menu and deletes the menu item for the closed facility.
- [ ] CMS engineer filters content by the health care system and scans for any events that might be taking place at that facility. Archive if any are found.
- [ ] CMS engineer removes the Section.
- [ ] HD notifies editor and any other stakeholders.
</details>

  <details><summary>VAMC – name change</summary>
    
- [ ] The H1 title change comes from Lighthouse to Drupal.
- [ ] CMS engineer makes bulk alias changes to facility service nodes. (https://prod.cms.va.gov/admin/content/bulk?type=health_care_local_health_service)
- [ ] CMS engineer bulk saves fixed titles to facility service nodes. (https://prod.cms.va.gov/admin/content/bulk?type=health_care_local_health_service)
- [ ] CMS engineer updates menu title.
- [ ] Front-end (FE) redirects are set up.
- [ ] HD notifies editor and any other stakeholders.
</details>
 
<details><summary>VAMC – system name change</summary>
  
- [ ] CMS team becomes aware of the new system name.
- [ ] FE redirects are set up.
- [ ] CMS engineer updates the Section.
- [ ] CMS engineer bulk alias changes all nodes within the system. (https://prod.cms.va.gov/admin/content/bulk)
- [ ] CMS engineer bulk saves to fix titles for all nodes within system. (https://prod.cms.va.gov/admin/content/bulk?type=health_care_local_health_service)
- [ ] CMS engineer renames the menu for the system accordingly.  (in the future, may need to rebuild the menu so that name and machine name match)
- [ ] HD notifies editor and any other stakeholders.
</details>

<details><summary>Vet Center – new facility</summary>
  
- [ ] CMS team becomes aware that the new facility is now on the Facility API.
- [ ] CMS engineer creates the Section.
- [ ] CMS engineer creates the nodes.
- [ ] CMS engineer bulk publishes the nodes.
- [ ] HD notifies editor and any other stakeholders.
</details>

<details><summary>Vet Center – facility closure</summary>
  
- [ ] CMS team becomes aware that the facility is no longer on the Facility API.
- [ ] CMS engineer bulk unpublishes the nodes.
- [ ] FE redirects are set up.
- [ ] CMS engineer removes the Section.
</details>

<details><summary>Vet Center – facility name change</summary>
  
- [ ] The H1 title change comes from Lighthouse to Drupal.
- Is the new official name plain language? 
  - If yes, go to next step. 
  - [ ] If no, update the common name (when #6955 Unlock title field on Vet Centers is handled).
- Is the facility published? 
  - If yes, go to next step. 
  - [ ] If no, update URLs for all content in that section by bulk operations.
- [ ] CMS engineer bulk updates node titles for services.
- [ ] CMS engineer updaes URLs.
- Was a Section created?
  - If no, skip to the next step.
  - [ ] If yes, it may need to be updated (pending some migration script updating).
- Is the Vet Center published? 
  - [ ] If no, HD notifies Michelle Middaugh to bulk publish.
  - [ ] HD notifies editor and any other stakeholders.
  </details>
