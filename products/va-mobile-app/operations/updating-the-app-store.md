## Updating the content

The new App Store Images process has been streamlined to make the process easier and complete and navigate.  If a new image is required, steps need to happen in this order:
1. Data is made to [screenshot_data.ts](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/e2e/screenshots/screenshot_data.ts) as a block of code in the current file.  (Eplination of usage below)
2. If the screen does not have a function built to access it in [screenshot_utils.ts](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/e2e/screenshots/screenshot_utils.ts), a function will need to be created for detox to locate the screen.
3. When a PR is created and it detects changes to [screenshot_data.ts](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/e2e/screenshots/screenshot_data.ts), [screenshot_e2e.yml](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/.github/workflows/screenshot_e2e.yml) will automatically run creating the screenshots.
4. Once they are created, framed and updated, they will be copied to the folders where they are to go for the App stores.
5. These will be committed to your PR so they may be reviewed.
6. Once approved and merged, These screenshot updated will be pushed to the store on the next release of the app.

## Updating App Store Images

Explanation of files:

### `VAMobile/e2e/screenshots`

```bash
#va-mobile-app/VAMobile/e2e
├── detoxMapping.js
├── environment.js
├── screenshots
│   ├── screenshot_data.ts
│   ├── screenshot.e2e.ts
│   └── screenshot.utils.ts
└── setup.ts
```

#### [screenshot_data.ts](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/e2e/screenshots/screenshot_data.ts)

---

This file is the core of the update. The image names, devices and description is pulled from here to create the screenshots. When this file is modified and checked into a PR, A workflow will trigger, build the new images and add them to the PR.

#### [screenshot_utils.ts](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/e2e/screenshots/screenshot_utils.ts)

---

This file holds the setup functions that detox will run when it gathers the screenshots. They are named by screen and are added in [screenshot_data.ts](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/e2e/screenshots/screenshot_data.ts).

#### [screenshot_e2e.ts](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/e2e/screenshots/screenshot.e2e.ts)

---

This file is what detox runs when it grabs the images from the simulators. This file calls in data from [screenshot_data.ts](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/e2e/screenshots/screenshot_data.ts) to make grab the correct device type. It also calls in the functions from [screenshot_utils.ts](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/e2e/screenshots/screenshot_utils.ts) to access the correct screens.

### [.github/workflows/screenshot_e2e.yml](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/.github/workflows/screenshot_e2e.yml)

---

This is the new action that triggers when [screenshot_data.ts](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/e2e/screenshots/screenshot_data.ts) is updated. This will

- Run detox on ios
- Run detox on ipad
- Run detos on android

After detox runs and gathers all the images [move_screenshots.sh](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/.github/scripts/app-store-images/move_screenshots.sh) is run. This moves all the screenshots from there current folder `VAMobile/artifacts` to `.github/scripts/app-store-images/fastlane/screenshots/en-US`. Once they are moved [process_images.sh](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/.github/scripts/app-store-images/process_images.sh) is run. This will:

- Resize all images to the proper screenshot size for the device.
- Use `Fastlane FrameIt` to frame all the images with the correct device frames.
- Apply the VA blue gradient to all images
- Apply the description text from [screenshot_data.ts](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/e2e/screenshots/screenshot_data.ts) to the image in the VA chosen font.
- Resize the images to their final size
- Move the images from `.github/scripts/app-store-images/fastlane/screenshots/en-US` to `.github/scripts/app-store-images/framed-images`.

Each screenshot group is captured as an artifact in the pipeline in case it is needed for later use. The final framed images are also captrued as an artifact so they may be viewed. When the PR is merged, it will update the images in the image folders and once the app is released to the store, the images will be updated.

the proccess of getting the new images to the app store remains unchanged. when `upolad_app_store` is called from the the review lane, it will upload all screenshots in `ios/fastlane/screenshots/en-US` for ios and `android/fastlane/metadata/android/en-US/images/phoneScreenshots` for android screenshots.

### Upload_app_store definition

---

```ts
def upload_app_store
    deliver(
        submit_for_review: true,
        automatic_release: false,
        force: true,
        overwrite_screenshots: true, // This line is what updates the screenshots. It will overwrite what is currently in the store with what is in the above folders
        screenshot_processing_timeout: 300, # 5min
        run_precheck_before_submit: false,
        submission_information: {
          add_id_info_uses_idfa: false
        },
      )
  end

```

## Excerpt of [screenshot_utils.ts](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/e2e/screenshots/screenshot_utils.ts)

```javascript
import { by, element, expect, waitFor } from 'detox'

import {
  ...
  openMessages,
  openPayments,
  openPrescriptions,
  openProfile,
  openVAPaymentHistory,
} from '../tests/utils'

export const claimsId = {
  CLAIM_1_ID_BOX:
    'Compensation Received December 05, 2021 Step 1 of 5: Claim received Moved to this step on December 05, 2021',
}

// A collection of reusable setup functions for screenshot tests.
// Each function should navigate to a specific screen.
const utils = {
  goHome: async () => {
    await element(by.text(CommonE2eIdConstants.HOME_TAB_BUTTON_TEXT)).tap()
    await disableAF(undefined, 'WG_Home', undefined, undefined, 'skipAppInstall')
  },

  skipUpdate: async () => {
    try {
      await element(by.text('Skip this update')).tap()
    } catch (e) {}
  },
  ...

  appointmentDetails: async () => {
    await openHealth()
    await openAppointments()
    // NOTE: This is an example of specific navigation logic
    await waitFor(element(by.text('Vilanisi Reddy')))
      .toBeVisible()
      .whileElement(by.id(CommonE2eIdConstants.APPOINTMENTS_SCROLL_ID))
      .scroll(200, 'down')
    await element(by.text('Vilanisi Reddy')).tap()
  },
```

## Excerpt of [screenshot_data.ts](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/e2e/screenshots/screenshot_data.ts)

```javascript
export interface ScreenshotData {
  testId: string
  imageName: string | { ios?: string; android?: string; ipad?: string }
  description: string | string[]
  deviceType: ('ios' | 'android' | 'ipad')[]
  setupFunction: string | string[] // The name of the function to call in screenshot.utils.ts
  skipScreenshot?: boolean
}

export const screenshotData: ScreenshotData[] = [
  {
    testId: 'HomeScreen',
    imageName: {
      ios: 'iphone67-screen-1',
      android: '1_en-US',
      ipad: 'ipadPro129-screen-1',
    },
    description: ['Complete health care and', 'benefits transactions'],
    deviceType: ['ios', 'android', 'ipad'],
    setupFunction: ['goHome', 'skipUpdate'],
  },
  {
    testId: 'HealthScreen',
    imageName: {
      ios: 'iphone67-screen-2',
      android: '2_en-US',
      ipad: 'ipadPro129-screen-2',
    },
    description: 'Access health care tools',
    deviceType: ['ios', 'android', 'ipad'],
    setupFunction: 'healthScreen',
    ...
```

## Explination of data block in [screenshot_data.ts](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/e2e/screenshots/screenshot_data.ts)

```javascript
{
    testId: 'HomeScreen', // This is the name of the screen
    imageName: { // Image names per device
      ios: 'iphone67-screen-1', // default ios image name
      android: '1_en-US', // Default android image name
      ipad: 'ipadPro129-screen-1', // Default ipad image name
    },
    description: ['Complete health care and', 'benefits transactions'], // Text that is to be added to the image
    deviceType: ['ios', 'android', 'ipad'], // Devices that should be targeted by this screen update
    setupFunction: ['goHome', 'skipUpdate'], // Functions that are to be executed.
  },
```

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

