# Testing auth redirect bug on older versions of Chrome on Android

Versions of Chrome on Android that are v99 and below cannot redirect a user back to the app after authenticating using JavaScript or a meta refresh.  The steps below outline how to reproduce this bug so that we can find a solution for users who have outdated devices.

## Setting up the emulator

1. Download and install [Android Studio](https://developer.android.com/studio)
2. After installing and following the initial prompts, create a new project and choose any of the templates when prompted. It doesn't matter which one you choose as we won't be doing anything with this project.
3. In your menubar, go to Tools > Device Manager
4. Click the "Create Device" button
5. Select Pixel 6a and click "Next"
6. Under "Select a system image", click the download icon next to Sv2. This will download the system image for Android 12L
7. Once the download is complete, click "Finish", then "Next", then "Finish"
8. You should now see the device listed in your Device Manager
9. Click the Play button to launch the emulator

## Getting the app running

By this point, you should have already received an invite email. If not, DM him and provide him with a Google email.

1. In the emulator, launch the Play Store and follow any instructions to sign in with the same Google Account you provided.
2. Launch Gmail, go to the invite email and click "Get started" **OR** in your desktop browser, copy the URL from the "Get started" button, and paste in the emulator's Chrome address bar
3. Sign in, accept the invite. You should see a list with a version of the test app you have access to. 2.7.0.RC (754). Tap the "Get started" button under "To download this release, you'll need to enable additional permissions".
4. Follow the instructions in the modal that pops up to turn on Internal app sharing
5. Once this is complete, you should be able to download, install and launch the version of the app that has Custom Tabs and is giving users issues

## Chrome Devtools

You can access developer tools and view the console as you normally would in the desktop version of Chrome so you can see the console and error messages

1. Once you've started the sign in process and the browser has launched, open Chrome on your desktop and go to `chrome://inspect#devices`. You should see your emulator's Chrome instance listed there.  Click "inspect" to launch the dev tools.

## Reproducing the issue

1. Sign in and choose ID.me and attempt to log in
2. After the MFA step, you'll be presented with a white screen instead of being redirected to the app
