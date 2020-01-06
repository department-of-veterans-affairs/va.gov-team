# Contact Center

### General

* All applications on the Veteran-facing Services Platform include a phone number Veterans can call to ask questions about the application's functionality.
* **Before applications (or new features) launch on the Veteran-facing Services Platform, all teams must file a Contact Center Review issue that includes a Product Guide and Product Video. The VSP Call Center will review these materials and pass along to the relevant contact centers to ensure that Contact Center Representatives are prepared to answer questions about the functionality.**
* **VFS teams should file a Contact Center Review issue...**
  1. When the complete and final build is on staging and they are confident it's ready to launch,
  1. After they've completed the [Prepare for Contact Center Review](#prepare-for-contact-center-review) steps and,
  1. At least *4 weeks* prior to the launch date for a brand new service **OR**,
  1. At least *2 weeks* prior to the launch date for a new feature in an existing service.

*If your team thinks it will have trouble meeting the outlined timeline, reach out to your Call Center POC to determine how to move forward.*

## Prepare for Contact Center Review

### Step 1: Create the Product Guide

*If you're building a brand new service*:

  1. Create a Product Guide that covers all the functionality, the main user flow(s), any error conditions, and how the user can resolve those errors.
  1. The Product Guide must be a Word document or a PDF.
  1. Create a new folder in your team's Product folder called ```Contact Center.``` Store the Product Guide there.

*If you're building new features for an existing service*:

  1. You'll need to update the existing Product Guide.
      * If you can't find the existing Product Guide on Github, ask your Call Center POC to find it for you.
  1. Store the updated Product Guide in its original location.

*Examples*:

[Example Product Guide 1](../Templates/sample-product-guide-1.pdf)

[Example Product Guide 2](../Templates/sample-product-guide-2.pdf)

### Step 2: Create the Product Video

*For new services and updates to existing services*:

  1. Create a Product Video (with audio) that steps through the primary user flows.
  1. Create a transcript of the audio from the Product Video. The transcript must be a Word document or a PDF.
  1. Remember your Product Video will be uploaded to the VA Youtube channel. It will be unlisted but visible to people with the URL.

## Request Contact Center Review

1. File an issue in ```va.gov-team repo```.
    * Title: ```Request Contact Center Review for [feature or service name]```
    * Labels:
      * ```call center```
      * ```external-request```
      * ```[your team's Github label]```, e.g., "BAH-526"
    * Assign the issue to: ```Chante Lantos-Swett```and ```Kimberley Daniels```
    * Comment: Include the following information.
      * **Context**: Provide a high-level description of the functionality for which you're requesting this review, for example:
        * ```Functionality adds a new dataset to the Facility Locator so users can search for and view non-VA health providers on the map, as well as in list and detail views.```
      * **Launch Date and Details**: ```summary or link to launch plans, including any communication happening prior to launch``` 
      * **URL**: ```link to your project on staging```
      * **Product Guide**: ```link to the Product Guide on Github```
      * **Product Video**: ```link to the demo video on Github``` *(If this file is too large to upload on github, the file can be emailed to the call center POCs)*
      * **Product Video Transcript**: ```link to the Product Video Transcript on Github```      

1. **Within 3 business days**, the call center POCs will review your Product Guide, Product Video, and Product Video Transcript. They will follow up with any questions or edits. After the materials have been finalized, the call center team will send the content to the Contact Center.
    * If you don't hear anything after 3 business days, reach out to your call center POC.
1. After sending your team's materials to the Contact Center, the call center team will close the Github issue.
    * Github will send the person who created the Github issue a notification. This is your team's signal that this pre-launch activity is complete.
