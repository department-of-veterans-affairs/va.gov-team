
# Release Cadence

There are two ways we can update our app:



* **Release:**  Releases are every 2 weeks and include new features, improvements, and bug fixes
* **Hotfix:**  Hotfixes are reserved for major issues/ urgent bug fixes requiring an off-cycle release

**Release Cadence**



* At the beginning of each sprint, a release branch is created, this will hold all code that will make it into the release occurring in 2 weeks
* Issues that are labeled as front-end and have been committed to the sprint are tagged with label ‘Target Release: XX/XX/XX’ (see table below for sprint to release date matrix)
    *  We modify as necessary during the sprint if an issue will not make the targeted release
* Once development/QA has been completed within the sprint, the issue will be updated with the Release date [using the Zenhub Release feature]
* Tickets which have been merged to the develop branch by 10:30 PM pacific time of the previous sprint end date will be part of the release 
    * Example:
        * Target Release Date 12/7/21
        * Sprint Start 11/10/21-11/23/21
        * Merged in dev branch by 11/23/21
* Thirteen days prior to the release, sign off activities begin (See Release Sign Off)
    *  Bot auto generates a release sign off ticket
    * The ticket is assigned to PM release lead, PO stakeholder, Design lead, & Engineering Lead to complete all tasks
* One week prior to the release sign off is due and the app is sent to the app store for review
* On release day, the app is submitted to the app store(s) with latest app version

Current Release Schedule (next 10 releases )


<table>
  <tr>
   <td>Sprint
   </td>
   <td>Start Date
   </td>
   <td>End Date
   </td>
   <td>Release Date
   </td>
   <td>QA Sign Off Due
<p>
Date
   </td>
   <td>Release Sign Off Due Date
   </td>
  </tr>
  <tr>
   <td>32
   </td>
   <td>11/10/21
   </td>
   <td>11/23/21
   </td>
   <td>12/7/21
   </td>
   <td>11/26/21
   </td>
   <td>11/30/21
   </td>
  </tr>
  <tr>
   <td>33
   </td>
   <td>11/24/21
   </td>
   <td>12/7/21
   </td>
   <td>12/21/21
   </td>
   <td>12/10/21
   </td>
   <td>12/14/21
   </td>
  </tr>
  <tr>
   <td>34
   </td>
   <td>12/8/21
   </td>
   <td>12/21/21
   </td>
   <td>1/4/22
   </td>
   <td>12/24/21
   </td>
   <td>12/28/21
   </td>
  </tr>
  <tr>
   <td>35
   </td>
   <td>12/22/21
   </td>
   <td>1/4/22
   </td>
   <td>1/18/22
   </td>
   <td>1/7/22
   </td>
   <td>1/11/22
   </td>
  </tr>
  <tr>
   <td>36
   </td>
   <td>1/5/22
   </td>
   <td>1/18/22
   </td>
   <td>2/1/22
   </td>
   <td>1/21/22
   </td>
   <td>1/25/22
   </td>
  </tr>
  <tr>
   <td>37
   </td>
   <td>1/19/22
   </td>
   <td>2/1/22
   </td>
   <td>2/15/22
   </td>
   <td>2/4/22
   </td>
   <td>2/8/22
   </td>
  </tr>
  <tr>
   <td>38
   </td>
   <td>2/2/22
   </td>
   <td>2/15/22
   </td>
   <td>3/1/22
   </td>
   <td>2/18/22
   </td>
   <td>2/22/22
   </td>
  </tr>
  <tr>
   <td>39
   </td>
   <td>2/16/22
   </td>
   <td>3/1/22
   </td>
   <td>3/15/22
   </td>
   <td>3/4/22
   </td>
   <td>3/8/22
   </td>
  </tr>
  <tr>
   <td>40
   </td>
   <td>3/2/22
   </td>
   <td>3/15/22
   </td>
   <td>3/29/22
   </td>
   <td>3/18/22
   </td>
   <td>3/22/22
   </td>
  </tr>
  <tr>
   <td>41
   </td>
   <td>3/16/22
   </td>
   <td>3/29/22
   </td>
   <td>4/12/22
   </td>
   <td>4/1/22
   </td>
   <td>4/5/22
   </td>
  </tr>
</table>


# Release Readiness Checklist

Who:  Product Manager, Design, Dev, QA, and VA POs

Purpose:  Define the scope of features, defects, enhancements that will be part of the release.  The process of working through the checklist helps uncover any remaining concerns before features go to production.  


<table>
  <tr>
   <td><strong>Product Management</strong>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>All committed issues have been coded and marked as closed in ZenHub 

<li>Communication and associate readiness tasks have been completed 
<ul>
 
<li>Call center documentation  
<ul>
  
<li>What call center documentation should be updated? Does the release warrant a demo to the call centers?
  
<li>Advance notification should be given to VEO or HRC for larger feature releases
  
<li>See Request <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/contact-center/request-contact-center-review.md">Contact Center Review</a> for directions on how to interact with VEO on product guide updates (see <a href="https://github.com/department-of-veterans-affairs/va.gov-team/issues/32766">#32766</a> as an example)
</li>  
</ul>
</li>  
</ul>

<li>QA/UAT review has been completed
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
    <strong>Development</strong>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>All development work has been completed and meets acceptance criteria

<li>All defects assigned to the release has been fixed

<li>All development documentation has been updated

<li>All unit test code has been updated

<li>All reviews have been completed
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>
    <strong>Quality Assurance</strong>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>QA plan and test cases have been updated

<li>Testing completed and features/issues that are part of the release have passed validation 
<ul>
 
<li>What has been developed, meets acceptance criteria
 
<li>Issues that have been identified are addressed with dev
 
<li>New issues that are found outside of acceptance criteria a ‘new’ ticket is created
 
<li>Full Regression  
<ul>
  
<li>In depth testing to ensure the existing functionalities haven’t been adversely affected. 
</li>  
</ul>
 
<li>Document findings in TestRail
</li> 
</ul>
</li> 
</ul>
   </td>
  </tr>
</table>



# Release Sign Off

Who:  Product Management, Design, Dev, QA, and VA POs

Purpose: Formal way of declaring the completion of development & testing and now the app is ready for release.  

Due: Release sign off is due 1 week prior to the release 

Release Sign off Ticket:  The release sign off ticket is generated 13 days prior to the release.  The following items are expected to be completed for the release sign-off milestone:


<table>
  <tr>
   <td>Release version
   </td>
   <td>Purpose:  To prepare the app for release, a release version is needed for the app store. 
<p>
Owner:  Engineering, the release version update is automated.  No action needed on the release ticket
   </td>
  </tr>
  <tr>
   <td>What’s New Content
   </td>
   <td>Purpose: Notes that let new and existing users know about any changes on the app. The updates should be made on the release sign off ticket and added to the repo here
<p>
Owner: Product Management
<p>
Template 1:  You can now [describe xyz new feature(s)]. We’ve also [enhanced or improved abc] and fixed a few bugs.
<p>
Template 2 (general messaging): We added general improvements and fixed a few bugs.
<p>
Procedures for adding What’s New Content to the repo here
   </td>
  </tr>
  <tr>
   <td>App Store Content Changes
   </td>
   <td>Purpose: The app store content provides a preview of the features, functionality, and user interface of the app.   App store content changes do not happen with every release; however when there are changes to be made we will need to update the repo with content updates and app image(s). 
<p>
The updates should be added to the repo and link X to the release sign off ticket
<p>
Owner: Design, Product Management
<p>
Update where: Release ticket and repo
<p>
Procedures for adding app images and content to the repo can be found here
   </td>
  </tr>
  <tr>
   <td>Severe bugs
   </td>
   <td>Purpose: A list of open Sev1 & Sev2 bugs.  An update on each of the bugs should be included in the notes section (indicate if they need review, if they are scheduled, or blocked, etc).
<p>
Owner:  Product Management to coordinate with engineering and QA  
   </td>
  </tr>
  <tr>
   <td>Sign-Offs
   </td>
   <td>QA:  Upon successful end to end testing QA will 
<ul>

<li>Update the release ticket with a snapshot of the test results from TestRail

<li>Update checkbox for sign off

<p>
Product Management:  Product Manager(s) should complete the following before signing off
<ul>

<li>Complete a high level validation of features that will be released.  Coordination with QA 

<li>Ensure app store content changes are added to the repo if applicable

<li>What’s new content is added to the repo

<li>Notify VA POs when sign off is ready

<li>Upon completion update checkbox for sign off

<p>
VA POs:  VA POs will 
<ul>

<li>Review and approve the repo updated changes for the release

<li>Update checkbox for sign off
</li>
</ul>
</li>
</ul>
</li>
</ul>
   </td>
  </tr>
</table>



# App Store Review

Purpose:  Prior to the release, an app review submission is sent to the App Store and Google Play.  As part of this process the app store(s) review the mobile app updates to determine its candidacy as a live component on the store (i.e. making sure it runs, rules are followed, no bugs, crashes, etc).  They typical turn-around time for feedback is 24-48 hrs

When: Submission for app review is 1 week prior to the release

Who: Engineering


# App Store Submission (Production Release)

Purpose:  New features, improvements, and bug fixes are released to the app store. 

When: App store release process is done through automation around 9:00 AM EST/10:00AM EDT (1400 UTC) on release day. 

Who: Engineering, 

 Post Release & Monitoring Activities


<table>
  <tr>
   <td><strong>Product Management</strong>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>Update release-summary.md with release highlights

<li>Check DSVA slack channel #va-mobile-build-alerts to confirm release success.  If failures check in with engineering 

<li>Close the release in ZenHub	

<li>Close Release Sign Off Ticket						
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Engineering</strong>
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>Monitoring:  To monitor successful build or failures; check DSVA slack channel #va-mobile-build-alerts on the DSVA 

<li> If the build fails, engineering will release manually	
</li>
</ul>
   </td>
  </tr>
</table>
