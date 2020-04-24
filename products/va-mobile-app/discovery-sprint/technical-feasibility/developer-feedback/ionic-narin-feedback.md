# Ionic Technical Feasibility

## Instructions
1. Build a Hello, World app in Ionic using React. Take notes on the tooling required to install/configure. https://ionicframework.com/docs/react
1. Attempt to reuse a simple React component from VA.gov codebase
1. Deploy to Xcode Simulator
1. Deploy to Android Studio emulator
1. Deploy app as a PWA (Progressive Web App)

## Notes
* Don't worry about sign-in to VA.gov - this is complex and we will evaluate later
* Install Xcode from App Store (you will need an Apple ID)
* Install Android Studio from https://developer.android.com/studio
* Work separately, but don't get stuck. Feel free to ask questions, screen share, etc

---

## Questions
### Tooling
List everything you needed to install

| Name | Time | Difficulty | Notes |
|---|---|---|---|
| Xcode | 30m | easy | download from App Store |
| Android Studio | 45m | easy | Download from https://developer.android.com/studio, Install .dmg, Install Virtual Device (Pixel 3 Max, Android R), Install SD Build-Tools |

What were the challenges with tooling?

* iOS was very easy.  Just open Xcode and run
* Android studio had more steps
  * Initial .dmg install
  * Additional install once launched
  * Install build-tools
  * Install a virtual device + OS image

### What is the "reload/feedback loop" like?
Almost instant. I was also able to test Live Reload with the iOS simulator and it was a little slower but still pretty good.

Minor annoyance: Console says `Compiling...` on every file change, but there is no message when compiling is complete.

### Did you notice any "clunkiness" with the UI?
iOS simulator seems to have some stuttering in animations compared to Android emulator

### What specific skills did you use to be successful with Ionic?
HTML, JS, React, minor knowledge about iOS/Android IDEs

### How reusable are VA.gov React components?

Needed just a couple edits. Import CSS and need to tweak some alignment.

Successful components:

* AlertBox (needs alignment tweaks)
* AdditionalInfo (needs alignment tweaks)
* Modal (needs some container tweaks for shadow background effect)
* ProgressBar
* SortableTable

Unsuccessful components:

* `<CollapsiblePanel/>` did not work due to a bug that relies on `window.VetsGov`.  Also required the installation of `react-scroll`

### What is your feeling about Ionic as a framework?
5. really enjoyed it

**Explain:** Documentation has come a very long way since I tried Ionic 6+ years ago. CLI command were fairly quick as was Live Reload

### Notes

#### Installation, build, deploy

* TypeScript enabled by default
  * Easy to convert to JavaScript by renaming `.tsx` files to `.jsx`

* Installing formation-react:

  * Errors using node 10.15.3 (which is the default for `vets-website`)

    ```
    No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.

    No receipt for 'com.apple.pkg.DeveloperToolsCLILeo' found at '/'.

    No receipt for 'com.apple.pkg.DeveloperToolsCLI' found at '/'.

    gyp: No Xcode or CLT version detected!
    ```

  * Fixed by using latest node

* iOS/Android Simulation

  * iOS

    * Need to install CocoaPods

      `sudo gem install cocoapods`

    * Lots of warnings in Xcode, but ran successfully on simulator

    * Tried to run on personal iPhone but run into an error.  Quick google search shows that a paid Apple developer account is required

  * Android

    * Need to install virtual device, build-tools in Android Studio

* PWA

  * Good docs on deploying to Firebase.  Although had to create the project in the Firebase console website.  Creating via CLI didn't work (need to accept terms and conditions in browser)
  * Deploying was painless: https://adhoc-narin-ionic-spike.web.app/home

### Risks/Concerns

* Compiling and live reload seems quick with small codebase, but questionable as to how it would perform with a larger codebase
* Reusing `react-formation` was trivial, but the other parts of `vets-website` are not easily shareable/componentized.  I fear that if we were to try to recreate existing functionality such as forms and apps, we would have to maintain two copies of the codebase and they would diverge
  * One possible solution is to add Ionic to the existing `vets-website` codebase, and slowly rebuild some parts for the mobile app.  This would allow us to reuse a lot of the existing code.  However, it does not make for good separation of concerns, and would make `vets-website` an even bigger monolith. There is a short article on how to do that [here](https://dev.to/ionic/adding-ionic-react-to-an-existing-react-project-4kib), although I'm sure it would take a lot more work given how large and custom `vets-website` is.
