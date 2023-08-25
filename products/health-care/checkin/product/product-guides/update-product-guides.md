# Update Product Guides

## Prepare the product guides  

1. In the [Product Guides](https://drive.google.com/drive/folders/1LKriZDWFAYSsWx4dwt2E2-xRb2su1yAx) folder in Google Drive, create a new folder for the planned release. Name the folder in the following format: [Planned Release Name or Epic Name] [MM/DD/YYYY]. For example, Travel Pay 06/05/2023. The date isn’t representative of when the guides are published but more of when the update is created.
   
2. Navigate to the current published versions of the product guides and download the Word version of pre-check-in and check-in.
   
3. You can upload these same versions in the product guides folder in the drive. I do this so I always have the most current version while I’m working on the updates.
   
4. Make a copy of the current version and make the updates to the copy. To avoid confusion, I also title the new version with the current date. This gets removed when I’m finished with the updates.

## Edit the product guides

1. Update the **Last Modified** and **Version numbers** in the guide:
   
  ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/93271257/57802665-5cfb-47eb-8f92-57105e9f708e)
   - The version doesn’t always have to change. If it’s a small change (like adding the facility address to a screenshot) I typically don’t change the version. Use your best judgment for this - does the change or edit have a drastically different look or workflow for the Veterans? If not, I wouldn’t change the version. For new features, like Travel Pay, or for big updates, like alignment with VAOS, I add to the version, going up to .9 for each and then starting with a new integer - so 1.8, 1.9, 2.0, 2.1, etc.

2. Add a description of what you’re updating, adding, or removing in the **Revision History** table.
- If it’s a small edit, I don’t add a new description here. I only add a description if it’s a new feature or something similar in size, like alignment with VAOS. 
3. Add your new content, screenshots, and edits as needed.
- For new text, be sure to use the existing font and text format.
- For images, take screenshots from staging rather than design files. You can always right-click and inspect a section if you need to change the text. For example, in some clinics there is no demographic information - you can change this in the inspect pane to make the screenshot work for you.
   - The best station to use for staging screenshots is 500
   - Right click and inspect the image - then set your screen size to iPhone 12
- When adding images, try to focus the screenshot to only the referenced content. A Veteran doesn’t need to see the whole app screen when we’re talking about an error message - focus the screenshot on the message itself. You can do this by either just taking a screenshot of the message or by right clicking and using the crop feature in Word.
- If there’s a decision a Veteran must make, be sure to include that decision in your screenshot. For example, capture the Yes and No buttons on the demographics questions.

## Upload and publish the product guides in Git repo 
*Product guides shouldn’t be published until the feature is deployed nationally. There is a task in the release process ticket to account for publishing the product guides. You should publish the guides once that release ticket is pulled into the sprint.*

1. Navigate to the git repository and select edit.
   
2. Replace the existing files by uploading the new files. You can drag the new file from your local into the editing pane.
   
3. Maintain the file names as they are now
   
PATIENT.CHECK-IN_PRODUCT_GUIDE (PDF)
PATIENT.CHECK-IN_PRODUCT_GUIDE (Word)

PRE-CHECK-IN_PRODUCT_GUIDE (PDF)
PRE-CHECK-IN_PRODUCT_GUIDE (Word)

4. Update the Last uploaded date.
   
5. Select Preview to view the new files. Check for formatting, spelling, and make any changes that are needed.
   
6. Select Commit changes.
   
7. Upload the most recent files to the [Product guides folder](https://drive.google.com/drive/folders/1LKriZDWFAYSsWx4dwt2E2-xRb2su1yAx) in the folder you created.
- You previously added product guides to your folder; you can either keep those files with these new ones, or you can now delete those files and leave the latest versions of the product guides in there. If you choose to keep them, make sure you differentiate the older versions from the newer ones.
