# React Native Technical Feasibility

## Instructions
1. Build a Hello, World app in React Native. Take notes on the tooling required to install/configure. https://reactnative.dev/
1. Attempt to reuse a simple React component from VA.gov codebase
1. Deploy to Xcode Simulator
1. Deploy to Android Studio emulator

## Notes
* Don't worry about sign-in to VA.gov - this is complex and we are evaluating
* Install Xcode from App Store (you will need an Apple ID)
* Install Android Studio from https://developer.android.com/studio
* Work separately, but don't get stuck. Feel free to ask questions, screen share, etc

---

## Questions
### Tooling
List everything you needed to install

| Name | Time | Difficulty | Notes |
|---|---|---|---|
| Xcode | 1hr | easy | download from App Store |
| Android Studio | 1hr | easy | Download from https://developer.android.com/studio, Install .dmg, Install Virtual Device (Pixel 3 Max, Android R), Install SD Build-Tools |
|Expo and related npm modules, latest Node|20m|easy|relatively straightforward|

What were the challenges with tooling?

No major challenges. Android studio runs slowly on OSX / takes a lot of memory. iOS emulator similarly large memory footprint but runs relatively quickly.

### What is the "reload/feedback loop" like?

relatively fast on iOS and web—3-5sec

### Did you notice any "clunkiness" with the UI?

UI responsive

### What specific skills did you use to be successful with React Native?

basic knowledge of iOS and understanding of iOS native and RN framework interaction, e.g. bridging concepts 
XCode set up
Read documentation 

### How reusable are VA.gov React components?
1. no reuse at all
2. needed to rewrite it significantly
3. needed some edits
4. needed just a couple edits
5. worked out-of-the-box

Explain:
1. no reuse at all. Styling needs to be done from mobile-first perspective and recreated for iOS.

### What is your feeling about React Native as a framework?
1. hated it
2. disliked it
3. meh
4. it was ok
5. really enjoyed it

Explain: 4, it was Ok. Tooling is good and docs are comprehensive. large developer community.

### Other Notes

### Risks/Concerns

Expo may provide tooling to allow for deploys outside of the app store release cycle, eg. real-time/continuous code pushes. This is worth exporting.