## Updating the content

### Product: Create the ticket

1. Create a new ticket for the app store updates.
2. Include content for the "What's New" section of the app stores.
3. If content changes are needed for the app store images themselves, include the necessary updates.
4. Request screenshots from engineering in the following sizes:

   - **iPhone**: 360 x 760 px (iOS Simulator or device using a 6.5” device such as iPhone 13 or 14)
   - **iPad**: 1040 x 1504 px (iOS Simulator or device using iPad Pro 12.9”)
   - **Android**: 180 x 380 px (Android Emulator or device using Pixel 4)

     - Make sure the corners are **not** rounded. Taking a screenshot using the camera icon in Android Emulator will result in rounded corners. To bypass this:

       - Go to View > Tool Windows > Logcat
       - In the panel that pops up, click the camera icon in the left toolbar to take a screenshot without rounded corners

       ![Screenshot of Android emulator](/img/app-store/android-emulator.png)

   - Engineering should then add the screenshots to [Google Drive](https://drive.google.com/drive/folders/1RdW9zwKs6savg8Eg96M556unwV_9fz8y) so that the designer can access them and the link should be added to the ticket.

5. Assign the ticket to a designer (typically Brea does the app store image updates)

### Designer: Update the app store images

1. Create a branch in the [Figma file](https://www.figma.com/file/UOTRHWoB1eNZE0M3P16Su2/%F0%9F%A7%B0-App-Store-Images---Resource---VAMobile%F0%9F%A7%B0?node-id=68%3A62&t=NFKdcdXC3Q52ZkTu-1)
2. Update the screenshots on the “Step 1: Update screenshots” page
3. Update images on the “Step 2: Update images” page according to the following image requirements:

| App Store                                                                                                    | Quantity | Category        | Image size     | Naming convention          |
| ------------------------------------------------------------------------------------------------------------ | -------- | --------------- | -------------- | -------------------------- |
| [iOS](https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications)                | 10       | iPhone 5.5      | 1242 x 2208 px | iphone55-screen-1.png      |
|                                                                                                              |          | iPhone 6.7      | 1290 x 2796 px | iphone65-screen-1.png      |
|                                                                                                              |          | iPad 12.9       | 2048 x 2732 px | ipadPro129-screen-1.png    |
|                                                                                                              |          | iPad 2nd gen    | 2048 x 2732 px | ipadPro2ndGen-screen-1.png |
| [Android](https://support.google.com/googleplay/android-developer/answer/9866151?hl=en#zippy=%2Cscreenshots) | 8        | Images          | 320 x 569 px   | 1_en-US.png                |
|                                                                                                              | 1        | Feature graphic | 1024 x 500 px  | featureGraphic.png         |

4. Export the images.

   - **Important:** Verify that both “ignore overlapping layers” and “include bounding box” are checked before exporting.

   ![Screenshot of Figma export options](/img/app-store/figma-export.png)

   - For **iOS**, images must not include a transparency/alpha layer. Figma does not have a way to remove this from your PNG export, but the [Export Opaque PNG plugin](https://www.figma.com/community/plugin/1052463252412045420/Export-Opaque-PNG) can be installed and used. Alternatively, you can [follow these steps](https://stackoverflow.com/questions/26171739/remove-alpha-channel-in-an-image) using the Preview app on Mac.
   - For **Android**, images should be exported at 4x and can be up to 8 MB per screen. The
     - The feature graphic should be exported at 1x and can be up to 1 MB.
   - Frames in Figma are currently named according to the app store requirements.

5. Optimize the images using [Imageoptim](https://imageoptim.com/mac).
6. Upload the images to the [Google Drive](https://drive.google.com/drive/folders/1t_WOjaZkJKNR9oXEMczjtIePAFef2ym6).
7. In the Github ticket, alert product that the images are located in the [Google Drive](https://drive.google.com/drive/folders/1t_WOjaZkJKNR9oXEMczjtIePAFef2ym6) and are ready for review.
8. After product approval, the branch can be merged into the main [Figma file](https://www.figma.com/file/UOTRHWoB1eNZE0M3P16Su2/%F0%9F%A7%B0-App-Store-Images---Resource---VAMobile%F0%9F%A7%B0?node-id=68%3A62&t=NFKdcdXC3Q52ZkTu-1).

## Product: Publish the content

All changes should be made to the files in the repo and not directly to the stores. Android files should be in the folders inside the images filter – not in the images directory itself.

- [iOS](https://github.com/department-of-veterans-affairs/va-mobile-app/tree/develop/VAMobile/ios/fastlane/screenshots/en-US)
- [Android](https://github.com/department-of-veterans-affairs/va-mobile-app/tree/develop/VAMobile/android/fastlane/metadata/android/en-US/images)

### VA App Store

1. Product should send the updated copy and images to the VA App Store team via email.
   - Current contacts:
     - Treva Lutes – [treva.lutes@va.gov](mailto:treva.lutes@va.gov)
     - Donna Rodriguez – [donna.rodriguez@va.gov](mailto:donna.rodriguez@va.gov)
     - Gwen McMillian – [gwendolyn.mcmillian@va.gov](mailto:gwendolyn.mcmillian@va.gov)

### What’s New Content

#### Android (Play Store)

1. Go to GitHub using your web browser.
2. Under the &lt;>Code tab, go to the develop branch and search for the latest release version: release/v1.X.0 (it’s usually at the bottom).
3. Go to the VAMobile folder and then select the ‘android’ folder.
4. Select the ‘fastlane’ folder.
5. Go to metadata/android/en-US folder.
6. Go to changelogs folder and then select the default.txt file.
7. To edit the "What’s New" content, select the edit icon.
8. Remove the old text and replace it with the new "What’s New" content.
9. Select "Commit Changes".
   - Add a brief description highlighting what has been changed (i.e. Updated android what’s new content) under the "Commit Changes" title.
10. If this is your first change for the release branch continue with step 12-15.
11. If this is **not** your first change being added to the branch, then follow steps 16-17.
12. Select option ‘Create a new branch for this commit and start a pull request’.
    - Update the branch name (try to be as descriptive as possible – i.e update-store-for-release-1.X.0)
13. Select "Propose Changes" and you will be taken to the Pull Request screen.
14. Update the title with what change has been made (i.e. Update What’s New Content)
15. Update the description to include details of what changes are being made (i.e Updating What’s New Content)
16. Select "Create pull request" button. Now, the pull request is tied to the release branch.

#### iOS (App Store)

1. Go to GitHub using your web browser.
2. Under &lt;>Code go to the develop branch and search for the branch previously created above in step 12 (it will have the release number in it).
3. Go to the VAMobile folder and then select the ‘ios’ folder.
4. Select the ‘fastlane’ folder.
5. Select the ‘metadata’ folder.
6. Select ‘en-US’ folder and then select the release_notes.txt file.
7. To edit the "What’s New" content, select the edit icon.
8. Remove the old content and replace it with the new "What’s New" content.
9. Select "Commit Changes" and update the title.
   - Add a brief description highlighting what has been changed (i.e. Update ios store what’s new content).
   - Select "Commit change directly to the branch" button. The branch that you previously created in step 12 above should be displayed (update-store-for-release 1.x.0).
10. Select "Commit Changes" and the change should be complete.

#### Validating your work

1. Go to ‘Pull Request’ in the top navigation bar.
2. You should see the pull request that was created (i.e. Update store content) and select it.
3. Select &lt;> Commits and you should see a list of the 2 commits that you made.
4. Select ‘File changed’ on the nav bar to verify the changes. You will see the old text highlighted in red and the new changes highlighted in green.

### Feature Description

#### iOS (App Store)

1. Go to GitHub using your web browser.
2. Under &lt;>Code, go to the develop branch and search for the branch previously created above in step 12.
3. Go to the VAMobile folder and then select the ‘ios’ folder.
4. Select the ‘fastlane’ folder.
5. Select the ‘metadata’ folder.
6. Select ‘en-US’ folder and then select ’description.txt’.
7. Select the edit icon to edit ’description.txt’.
8. Add or modify description text.
9. Select "Commit Changes" and update the title.
   - Add a brief description highlighting what has been changed (i.e. Update description text). You can add additional details in the optional extended description, as well.
   - Select "Commit change directly to the branch" button. The branch that you previously created in step 12 above should be displayed (update-store-for-release 1.x.0).
10. Select "Commit Changes" and the change should be completed.

#### Android (Play Store)

1. Go to GitHub using your web browser
2. Under &lt;>Code, go to the develop branch and search for the branch previously created above in step 12.
3. Go to the VAMobile folder and then select the ‘android’ folder.
4. Select the ‘fastlane’ folder.
5. Select the ‘metadata/android/en-US’ folder.
6. Select ‘full_description.txt’.
7. Select the edit icon to edit ’description.txt’.
8. Add or modify description text.
9. Go down to "Commit Changes" and update the title.
   - Add a brief description highlighting what has been changed (i.e. Update description text). You can add additional details in the optional extended description, as well.
   - Select "Commit change directly to the branch" button. The branch that you previously created in step 12 above should be displayed (update-store-for-release 1.x.0).

