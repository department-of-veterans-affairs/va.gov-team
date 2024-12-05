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
| Xcode | 30m | easy | download from App Store |
| Android Studio | 45m | easy | Download from https://developer.android.com/studio, Install .dmg, Install Virtual Device (Pixel 3 Max, Android R), Install SD Build-Tools |
| Expo CLI | 5m | easy | `npm i -g expo-cli` |
| Expo app on iOS | 5m | easy | Download from App Store |

What were the challenges with tooling?

I didn't run into any challenges with tooling.  Running their "beginner" app showed several warnings in the console but app was completely functional.

### What is the "reload/feedback loop" like?

1-2sec tested on iOS Expo app and on browser

### Did you notice any "clunkiness" with the UI?

None when testing on phone or in browser

### What specific skills did you use to be successful with React Native?

React.  Although the styling and JSX are a bit different, having used React extensively makes RN very familiar to use.

### How reusable are VA.gov React components?
1. no reuse at all
2. needed to rewrite it significantly
3. needed some edits
4. needed just a couple edits
5. worked out-of-the-box

Explain: 1. no reuse at all

Styling and JSX components are different from web React. Each component from `formation-react` would have to be re-written.

### What is your feeling about React Native as a framework?
1. hated it
2. disliked it
3. meh
4. it was ok
5. really enjoyed it

Explain: 5. developer experience is very nice, especially with Expo.  Ability to develop/test on device, simulator, and browser allow for a lot of convenience and fleixibility.

### Other Notes

Lots of warnings in console related to `react-navigation` package.  Seems to be a known issue, but not really an encouraging thing to see when you are first starting out.

### Risks/Concerns

1. Code reuse between `vets-website` and React Native would be a lot less than Ionic, especially when it comes to UI.  Some business logic found in reducers/actions and API calls could potentially be reused if they are extracted and packaged in NPM packages.
2. Expo is designed to make development very quick and easy, but it has [limitations](https://docs.expo.io/versions/latest/introduction/why-not-expo/) with both it's "managed" and "bare" workflows. Depending on what native features we envision, we may want, we might want to start with the "bare" workflow.  Even then, React Native has some downsides compared to fully native apps:
   1. **Keeping up with OS updates** - devs would have to wait until Facebook makes updates to RN to access latest OS features.  This isn't likely to be a big problem for the VA since we aren't doing anything too cutting edge
   2. **Performance** - Definitely will feel more fluid than Ionic, but since JavaScript has a single device thread, any heavy computation lifting may not be performant.  Again, probably not something we need to worry about for our use case.
   3. More discussion about RN limitations [here](https://medium.com/@ronak8036/limitations-of-react-native-704094f6e299)


