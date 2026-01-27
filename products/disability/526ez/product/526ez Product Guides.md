# 526ez Product Guides

There are two product guides for the 526ez form - one for the original claim flow and one for the Benefits Delivery at Discharge (BDD) flow. This doc
provides instructions on how to keep these guides up to date.

Product guides are created or updated following the [Contact center review process](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/contact-center-review). 
The Contact Center team is the owner and source of truth for the guides, but anyone working on changes to 526 must update the guides when there is a 
new feature or significant change to existing features.

## Overview of the process
1. Disability team gets the latest version of the product guide<br>
If a guide has been updated recently and this doc has been kept up to date, most likely the latest version will be attached to a ticket linked here.
If there are any questions about the latest version of a product guide, reach out to the Contact Center team in DSVA slack in #vsp-contact-center-support<br><br>
2. Drafts of new versions are created and shared internally<br>
Make updates to the docs with [MS Word change tracker](https://support.microsoft.com/en-us/office/track-changes-in-word-197ba630-0f5f-4a8e-9a77-3712475e806a#:~:text=Click%20or%20tap%20at%20the,moves%20to%20the%20next%20change.) on. This will identify changes that have been made since the last version. Share with your product team for internal review via sharepoint in
[Disability Benefits Experience / 2 - Delivery / Product Guide Drafts](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FDisability%20Benefits%20Experience%2F2%20%2D%20Delivery%2FProduct%20Guide%20Drafts&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72).
This allows for better collaboration than uploading the docs to GitHub. Please add your proposed new version to the changelog below with an 'In Progress' note so other teams will know there is a new revision in progress. <br><br>
3. Submit drafts for Contact Center review<br>
Follow steps in [request-contact-center-review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/contact-center/request-contact-center-review.md)
to create a ticket. Update the change logs within the docs and on this page with ticket number. If updating both docs at the same time, a single ticket is ok.<br><br>
4. Contact Center team reviews the docs <br>
Make any requested changes and update in sharepoint. They will typically look through each change and approve or comment on the change.<br><br>
5. Complete!<br>Contact Center team attaches the approved version to the ticket.<br>Delete any drafts from sharepoint and update the change log below to remove 'In Progress'

## Some best practices and tips
- Both guides should be updated at the same time to keep them in sync, unless there is a change that impacts only one of the two flows.
- Follow a light version of [semantic versioning](https://semver.org/) with major version increment for significant changes (such as a new OMB version of the 526 form or multiple large changes to the doc and its format) and minor version increment for smaller changes
- Previously the product guides were duplicated here in github, but this caused syncing and collaboration challenges. Utilizing the already existing source of truth (docs in Sharepoint owned by the Contact Center) and ticketing process is preferable.
- Utilize the Word app on the CAG for editing and collaboration. This is easier and less risky than importing the docs in and out of google docs.

## 526 Product Guide Ticket History
|Date|Version|Ticket|Author|Feature Name|
|----|----|----|----|----|
|Unknown|1.0|||Initial Version|
|7/13/23|2.0|[#61945](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61945)|Disability Experience Team 1|Sync 526ez form with paper version|
|8/30/23|2.1|[#64605](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64605)|Employee Experience Team|Max Rating Education|
|12/15/23|3.0|[#59295](https://github.com/department-of-veterans-affairs/va.gov-team/issues/59295)|Disability Experience Team 1|Reformat with new template|
|4/17/24|3.1|[#81747](https://github.com/department-of-veterans-affairs/va.gov-team/issues/81747)|Employee Experience Team|Max Claims for Increase (CFI)|
|5/1/24|3.2|[#82085](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82085)|Disability Experience Team 2|Post-Submission Failure Emails|
|6/3/24|3.3|[#84315](https://github.com/department-of-veterans-affairs/va.gov-team/issues/84315)|Conditions Team|Improve conditions submission page|
|7/18/24|3.4|[#88765](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88765)|Disability Experience Team 2|Post-Submission Failure Email|
|7/26/24|4.0|[#89438](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89438)|Disability Experience Team 1|Toxic Exposure<br>2022 Version|
|8/22/24 |4.1|[#89173](https://github.com/orgs/department-of-veterans-affairs/projects/1263/views/2?filterQuery=&sliceBy%5Bvalue%5D=nnicholas7&pane=issue&itemId=72805124)|Disability Experience Team 2|Post-Submission Failure Email|
|8/28/24 |4.2|[#91656](https://github.com/orgs/department-of-veterans-affairs/projects/1263/views/2?filterQuery=&sliceBy%5Bvalue%5D=nnicholas7&pane=issue&itemId=76716622)|Disability Experience Team 2|0781 Post-Submission Failure Email|
|9/12/24 |4.3|[#89474](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89474) [89576](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89576)|Disability Experience Team 2|ITF and Missing Information Error Messages|
|10/11/24 |4.4|[#94161](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94161)|Disability Experience Team 2|526 Failure Email Message|
|11/25/24|4.5|[#97964](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97964)|Disability Experience Team 1|Submission Experience|
|12/10/24|4.6|[#98852](https://github.com/department-of-veterans-affairs/va.gov-team/issues/98852)|Disability Experience Team 1|5103 and Claim Certification|
|4/7/25|4.7|[#106893](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106893)|Disability Experience Team 2|0781 Paper Sync|
|8/26/25|4.8|[#117915](https://github.com/department-of-veterans-affairs/va.gov-team/issues/117915)|Disability Benefits Crew|4142 Form Update|
|10/2/25|4.9 • In Progress|[#119070](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119070) [#117916](https://github.com/department-of-veterans-affairs/va.gov-team/issues/117916)|Team High-Five|Product Guide Audit & Copy of Submission|
|11/19/25|5.0|[#123119](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123119) |Disability Benefits Crew, Conditions|Step 2 list and loop workflow update|


## 526 BDD Product Guide Ticket History
|Date|Version|Ticket|Author|Feature Name|
|----|----|----|----|----|
|Unknown|1.0|||Initial Version|
|6/1/23|2.0|[#59016](https://github.com/department-of-veterans-affairs/va.gov-team/issues/59016)|Disability Experience Team 1|BDD SHA|
|7/18/24|2.1|[#88767](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88767)|Disability Experience Team 2|Post-Submission Failure Email|
|7/26/24|3.0|[#89438](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89438)|Disability Experience Team 1|Toxic Exposure<br>2022 Version|
|8/22/24 |3.1|[#89173](https://github.com/orgs/department-of-veterans-affairs/projects/1263/views/2?filterQuery=&sliceBy%5Bvalue%5D=nnicholas7&pane=issue&itemId=72805124)|Disability Experience Team 2|Post-Submission Failure Email|
|8/28/24 |3.2|[#91656](https://github.com/orgs/department-of-veterans-affairs/projects/1263/views/2?filterQuery=&sliceBy%5Bvalue%5D=nnicholas7&pane=issue&itemId=76716622)|Disability Experience Team 2|0781 Post-Submission Failure Email|
|9/12/24 |3.3|[#89474](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89474) [89576](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89576)|Disability Experience Team 2|ITF and Missing Information Error Messages|
|10/11/24 |3.4|[#94161](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94161)|Disability Experience Team 2|526 Failure Email Message|
|11/25/24|3.5|[#97964](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97964)|Disability Experience Team 1|Submission Experience|
|12/10/24|3.6|[#98852](https://github.com/department-of-veterans-affairs/va.gov-team/issues/98852)|Disability Experience Team 1|5103 and Claim Certification|
|5/7/25|3.7|[#106893](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106893)|Disability Experience Team 2|0781 Paper Sync|
|10/2/25|3.8 • In Progress|[#119070](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119070) [#117916](https://github.com/department-of-veterans-affairs/va.gov-team/issues/117916)|Team High-Five|Product Guide Audit & Copy of Submission|
|1/27/26|3.9|[#119921](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119921) [#127049](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127049) |Core team|Add previously skipped questions to BDD flow|
