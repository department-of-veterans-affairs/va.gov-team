
# VA.gov School Resources Page: Guidance for Content Editors  


<kbd>![Content Editor Guide](content-editor-guide-images/cover.png)</kbd>  


## Table of Contents


**[Introduction](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#introduction)**  
**[What is a github repository?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#what-is-a-github-repository)**  
**[Main page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#main-page)**  
     [What is considered main page content?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#what-is-considered-main-page-content)	  
     [How do I update content and links on the main page?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#how-do-i-update-content-and-links-on-the-main-page)   
          *[Main content considerations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#main-content-considerations)*	  
          *[Right rail considerations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#right-rail-considerations)*   
**[Announcements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#announcements)**   
     [What content appears in the "Latest announcements from VA" section?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#what-content-appears-in-the-latest-announcements-from-va-section)   
     [How do I add an announcement?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#how-do-i-add-an-announcement)   
     [When do announcements expire?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#when-do-announcements-expire)  
**[Events](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#events)**  
     [What content appears in the "Upcoming events" section?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#what-content-appears-in-the-upcoming-events-section)   
     [How do I add an event?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#how-do-i-add-an-event)   
     [When do events expire?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#when-do-events-expire)  
**[Useful resources](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/content/content-editor-guide.md#useful-resources)**   	 
 
## Introduction


This guide covers the process for updating content on the “Resources for Schools” page on VA.gov. The content of the “Resources for schools” page is managed in the VA GitHub Repository.  


## What is a GitHub repository?

A GitHub repository (GitHub repo) is a collection of files that are organized into branches.  There are Master branches and development branches.  

**Master branches**  
Master branches contain production-ready files that are ready for deployment or that have already been deployed.  The “Resources for Schools” webpage leverages two Master branches: vets-website and vagov-content.  

1. **vets-website:** The vets-website master branch contains 2 files that allow you to manage announcements and events (conferences, trainings, and webinars). The editable files in the vets-website master branch are:  

     * **announcements.json:** https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/static-pages/school-resources/constants/announcements.json  
  
     * **events.json:** https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/static-pages/school-resources/constants/events.json  

2. **vagov-content:** The vagov-content master branch contains a file that allows you to manage all main content on the “Resources for Schools” webpage, besides announcements and events. The editable file in the vagov-content master branch is:  

     * **school-administrators.md:** https://github.com/department-of-veterans-affairs/vagov-content/blob/master/pages/school-administrators.md  

**Development branches**  
Development branches store files that are being created and modified. 

     
## Main page

### What is considered main page content?

The following static content on the “Resources for Schools” page is considered main page content and is editable on the “school-administrators.md” page:  

* Page title
* Intro paragraph
* “On this page” links
* “Key resources for SCOs” links
* “Training and guides” content
* “Policies and procedures” content
* “Resources to support students” content
* Right Rail callouts 
    * “SCO Handbook” 
    * “Ask questions” 
    * “Average processing times” 
    * “Connect with us”  
    
**Note:** Announcements and events are considered dynamic content, as they expire automatically, and are edited in separate json files. Instructions for editing announcements and event appear below. 


### How do I update content and links on the main page?

To update content and links, follow the steps below:  

1. In GitHub, navigate to the main content page for the “Resources for schools” section.  

    **Page name:** school-administrators.md https://github.com/department-of-veterans-affairs/vagov-content/blob/master/pages/school-administrators.md  

**Note:** If you are just starting the edit, make sure you have the “Master” branch selected in the upper left corner of the page.  If you are returning to finish an edit you previously started, be sure you have the correct branch selected in the upper left corner of the page.  

![The school-administrators.md file with Master branch selected](content-editor-guide-images/01-master-branch.png)*Figure 1: The school-administrators.md file with Master branch selected*  

2. Click the edit button in the upper right corner of the page and begin editing.  

![Edit button](content-editor-guide-images/edit-button.png)

![The school-administrators.md file with Edit button highlighted](content-editor-guide-images/02-school-admin-file-edit.png)*Figure 2: The school-administrators.md file with Edit button highlighted*

#### Main content considerations  

* Where possible, content should be categorized beneath meaningful sub-headings to ensure the content is easy to find.
* If there are more than 10 links beneath a sub-heading, consider whether an additional sub-heading is needed.
* When vital documents such as informational letters are moved from announcements to the main content of the page, the publication date (MM/DD/YYYY) can be added to the end of the link name. 


#### Right rail considerations  

* **“SCO Handbook” promo:** Be sure to update the “Revision number” and the “Last updated date” as new handbooks are posted, so users can check to be sure they are using the latest version.
* **“Ask questions” callout:** SCOs appreciate the existing resources and the prominence of the Submit a Question feature.  This callout only needs editing if the links change.
* **“Average processing times” callout:** When updating the time, be sure to update the “Last updated date” so users can gauge the accuracy of the estimates.
* **“Connect with us” callout:** The content of this callout is expected to remain unchanged unless phone numbers or data changes. 

3. After you’ve made the necessary edits, scroll to the bottom of the page and confirm that the 2nd radio button (“Create a new branch for this commit and start a pull request”) is selected.  

![The school-administrators.md file with new branch option selected](content-editor-guide-images/03-commit-new-branch.png)*Figure 3: The school-administrators.md file with new branch option selected*  

4. In the branch name box above the green “Commit changes” button, use the auto-populated name, enter a custom name for the new development branch, or use an existing development branch, and then click the green “Commit Changes” to begin the process of initializing a draft pull request.  

![New branch name field and Commit changes button](content-editor-guide-images/04-commit-changes.png)*Figure 4: New branch name field and Commit changes button*  

The “Open a pull request” page appears.  If your changes are complete, skip to step 9 to create a real pull request.  Otherwise, continue to Step 5 to create a draft pull request.  

5. Add a description of the proposed changes (i.e., added new form) and add assignees if you’d like someone on the EDU team to review the edit.  

![Enter description of changes](content-editor-guide-images/05-enter-description.png)*Figure 5: Enter description of changes*  

6. Be sure that the green button in the lower right corner of the page is set to “Draft pull request”.  

![Enter description of changes](content-editor-guide-images/06-draft-pr.png)*Figure 6: Enter description of changes*  


## Announcements

### What content appears in the "Latest announcements from VA" section?

### How do I add an announcement?

### When do announcements expire?

## Events

### What content appears in the "Upcoming events" section?

### How do I add an event?

### When do events expire?

## Useful resources


