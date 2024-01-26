# Veteran Support/Contact Center

You can request the Veteran Support/Contact Center review with [this issue template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=ATMiddleton%2C+Kimberley2023-CSM%2C+starlow00&labels=VSP-contact-center&projects=&template=request-contact-center-review-template.md&title=Contact+Center+Review+for+%5BTeam+Name+-+Feature+Name%5D).

## Overview

All applications on the Veteran-facing Services Platform include a phone number Veterans can call to ask questions about the application's functionality.

**Before applications (or new features) launch on the Veteran-facing Services Platform, all teams must file a Veteran Support/Contact Center Review issue that includes a Product Guide. Product Video is optional but encouraged.** The Veteran Support team (VSP-contact-center) will review these materials and share with the relevant contact centers to ensure that Veteran Support/Contact Center Representatives are prepared to answer questions about the new functionality.

**VFS teams should file a Veteran Support/Contact Center Review issue...**
  1. When the complete and final build is on staging and they are confident it's ready to launch,
  2. After they've completed the [Prepare for Veteran Support/Contact Center Review](#prepare-for-contact-center-review) steps and,
  3. At least *4 weeks* prior to the launch date for a brand new service **OR**,
  4. At least *2 weeks* prior to the launch date for a new feature in an existing service.

*If your team thinks it will have trouble meeting the outlined timeline, reach out to your Veteran Support/Contact Center POC to determine how to move forward.*

## Prepare for Veteran Support/Contact Center Review

### Step 1: Create the Product Guide

*If you're building a brand new service*:

  1. Create a Product Guide that covers all the functionality, the main user flow(s), any error conditions, and how the user can resolve those errors.
  2. Create a Table of Contents at the beginning of the Product Guide that includes clickable in-document links to each section and sub-section. 
  3. The Product Guide must be a Word document.

  
      [Template for creating a product guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/contact-center/self-service-product-guide-template.md)

*If you're building new features for an existing service*:

  1. You'll need to update the existing Product Guide.
      * If you can't find the existing Product Guide on Github, ask your Veteran Support POC to find it for you.
  2. Store the updated Product Guide in its original location.

*Examples*:

[Example Product Guide 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/templates/sample-product-guide-1.pdf)

[Example Product Guide 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/templates/sample-product-guide-2.pdf)

### Step 2: Create the Product Video (Optional)

*For new services and updates to existing services*:

  1. Create a Product Video (with audio) that steps through the primary user flows.
  2. Create a transcript of the audio from the Product Video. The transcript must be a Word document or a PDF.
  3. Remember your Product Video will be uploaded to the VA Youtube channel. It will be unlisted but visible to people with the URL.
  
     [Contact Center Product Demo Video Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/contact-center/product-demo-video-process.md)

## Request Veteran Support/Contact Center Review

1. File an issue in ```va.gov-team repo```.
    * Title: ```Request Contact Center Review for [feature or service name]```
    * Labels:
      * ```VSP-contact-center```
      * ```contact center```
      * ```external-request```
      * ```[your team's Github label]```, e.g., "BAH-526"
    * Assign the issue to: ```Anita Middleton``` ```Steven Tarlow```and ```Kimberley Daniels```
    * Issue Details: Include the following information.
      * **Context**: Provide a high-level description of the functionality for which you're requesting this review, for example:
        * ```Functionality adds a new dataset to the Facility Locator so users can search for and view non-VA health providers on the map, as well as in list and detail views.```
      * **Launch Date and Details**: ```summary or link to launch plans, including any communication happening prior to launch``` 
      * **Version Number**: ```Please provide version number of guide and/or video.  Please be certain to update version numbers as modifications are made and provide us with the most up to date version number.```
      * **URL**: ```link to your project on staging```
      * **Product Guide**: ```attached to the issue.```
      * **Product Video**: ```link to the demo video on Github```

2. **Within 3 business days**, the Veteran Support/Contact Center POC will begin to review your Product Guide, Product Video, and Product Video Transcript. They will follow up with any questions or edits. After the materials have been finalized, the contact center team will send the content to the Contact Center for their review.
    * If you don't hear anything after 5 business days, reach out to your Veteran Support/Contact Center POC.
3. After sending your team's materials to the Veteran Support/Contact Center team, they have 5 full business days to review the Product Guide and Product Video and send back any questions and/or feedback.  Once that has occured, the contact center team will follow up accordingly or close the Github issue.
    * Github will send the person who created the Github issue a notification. This is your team's signal that this pre-launch activity is complete.4
4. Requesting team members who participated in this collaboration, please complete brief [VSP Collaboration Cycle Feedback](https://adhoc.optimalworkshop.com/questions/20260uu8-0-0/questions/before) survey
