# Drupal CMS Feature Launch Coordination

When Sitewide teams modify CMS-driven products, our changes affect existing Editors. We are required to coordinate launch activity and change management with stakeholders from any affected Editor groups, based on product and administration. 

## CMS product portfolio mapped to product teams and business partners
This mural displays stakeholder administration for each CMS-driven product: 
https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1686789362540/fb8f73b8d536f088e56bd3e38f0e37141560f62a?sender=u0b235d03cbd64f7f93673243

The process below has so far only been applied to VAMC editors under VHA DM, but could be applied to VEO, RCS, NCA, or VBA editors in future.

## Soft launches
Sitewide POs have a vision of soft launching features to a limited group of Editors before full launch, much like FE features can be shipped using vets-website flippers. 

[CMS Feature Toggles](https://prod.cms.va.gov/admin/config/system/feature_toggle) can be harnessed for this purpose. Beta editor groups can be decided by product teams in partnership with stakeholders, based on: 
* Drupal role
* Functional role (e.g. editor at a specific VAMC)
* Individual (by Drupal UID)

# Launch planning process

## 1. Define the launch (Product Team) 

* Determine scope of the feature that is being added / changed 
* Establish probable timeline for beta testing 
* Create / update training materials, as needed. These will be shared with Stakeholders to be included in Editor comms for launch / soft launch. 
  * Screenshots to be included in any email outreach to Editors. 
  * Write new KB articles, or draft updates to existing KBs.

## 2. If soft launching: Define pool of Beta editors (Stakeholders + Product Team) & get signoff
Work with stakeholders to determine which Editors will participate in the soft launch, and whether by Role, or some other criteria. Ensure that Stakeholders are aware of any technical limitations to extending the pool of soft launch Editors. (E.g., if defining the list by individual UIDs, any new soft launch Editors will need to be provided to the Product team, in order to include them in the feature toggle list.)

### If by Individual rather than Role / Section: Provide a user list
Stakeholders do not have access to the "People" area of Drupal. In order to finalize an explicit list of soft launch Editors as individuals, the Product Team will need to provide Drupal user data to stakeholders for review. For example, if VHA DM wants Editors from specific VAMCs to participate, Product Teams must provide a list of Editors are associated with those VAMC sections, in order for VHA DM to finalize the list.

Export a CSV of the relevant users (all, by role, by Section, etc.) based on stakeholder criteria & provide via a method that protects PII. 

### Work with stakeholders on recruiting
In some cases, experienced Editors might not be the optimal beta testers, and we may want to solicit Editors from a variety of skill levels. 

Work with stakeholders to socialize the ask or use Editor office hours to advertise the feature and get volunteers / provide context.  


## 3. Beta Launch & Comms (Stakeholders & Product team) 

* Product team provides email copy to Stakeholders to describe the change. 
* Product team ships the change to Prod, exposed behing feature toggle to only the decided list of beta Editors or to the decided Role. 
* Stakeholders send email to beta Editors to provide feature description, training materials, etc.
* Editors provide feedback via email to Stakeholders.
* Stakeholders forward feedback email to Product team for response / mitigation. 
* Product team implements any necessary changes. 

## 4. Hard launch (Product Team) 
* Product Team + Stakeholders decide to Go / No Go for hard launch based on feedback / changes. 
* When it’s a go, Product Team + Stakeholders agree on date for hard launch when Stakeholders will be available to communicate to Editors.  
* Product Team ships product update, including KB updates/additions. 
* Stakeholder sends messaging re: launch to all Editors. 



## Notes for future:  

As we do more incremental launches, want to make sure all teams stay aware of the asks on Editors, if there are multiple pilots running at one time. 
