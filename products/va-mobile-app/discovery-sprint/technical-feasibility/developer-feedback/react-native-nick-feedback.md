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

Already had Xcode and Android Studio installed from the Ionic evaluation. 

| Name | Time | Difficulty | Notes |
|---|---|---|---|
| CocoaPods update | 1.5 hours | medium | Received an error while running React Native command for starting a new project, `react-native init`, which would prevent me from building to an iOS emulator. Downgraded CocoaPods from 1.9.1 to 1.8.0 and ran `pod install` from `project-root/ios` to fix it, but not really any great help online.  |
| Watchman | 30 minutes | medium | Received a permissions error when installing via HomeBrew and had to run `chown` |
| Expo CLI and app | 15 minutes | easy | No errors, just make sure you're using a later version of Node during install |

What were the challenges with tooling?

I first installed by following the first page of the docs, which presented this command - `npx react-native init MyTestApp`. I ran into some install difficulties but nothing too bad. I didn't have any luck Google searching my errors - I ended up getting lucky by downgrading a dependency and running `pod install` again.

As I proceeded in the docs I landed on the Getting Started page, which then offered two ways of running the app - through React Native CLI Quickstart or Expo CLI. This is a little confusing. At first, I ran the app in an IOS emulator but got a stacktrace. From this, I determined not having Watchman installed was the issue. After installing Watchman, I got the app running in the emulator okay.

I was curious about the Expo CLI, so I tried that next. I to make an account on expo.io, download the Expo app to my phone, install the expo-cli globally on my computer as a Node module, and sign in from my terminal too. I then created a new project using `expo init AwesomeProject`. I ran that project with the Expo app open on my phone. First, my computer's browser opened http://localhost:19002/ with kind of a neat-looking debug page for the Expo stuff. On the Expo app on my phone, I saw the project listed as an app I can open. I opened it, and then it begins downloading and building the JavaScript from my computer. The app then begins running on my iPhone. Really cool. There's also a QR code on my localhost and in my terminal for devices to scan in order to start the app.

### What is the "reload/feedback loop" like?
Pretty much instant for just changing text, on the emulator and my phone.

### Did you notice any "clunkiness" with the UI?
Nope, very smooth, both on my phone and the emulator.

### What specific skills did you use to be successful with React Native?
Even though you're still writing code in React's extension of JavaScript, JSX, it is an entire framework, so your components are completely different than what you'd using during web development. Additionally, you define your style inside the JSX as opposed to CSS, so there is likely a learning curve there. It seems similar to CSS, but I need to learn more about it. [This](https://medium.com/mindorks/everything-to-know-about-styling-in-react-native-7e30aed53ad) seems to be a decent article.


### How reusable are VA.gov React components?
1. no reuse at all
2. needed to rewrite it significantly
3. needed some edits
4. needed just a couple edits
5. worked out-of-the-box

> 1. no reuse at all

Explain: I'm not certain about this as this is my first dive into React Native. But React Native compiles JSX into native code for iOS or Android, instead of using a hybrid app approach by using a web-wrapper of some sort like Ionic. This means the CSS written for the VA design system cannot be leveraged here, nor the HTML markup. React Native uses "component kits" to create global style. [This](https://medium.com/@ste.grider/component-kits-for-react-native-84eff4b321b9) is an article that help understand this.

### What is your feeling about React Native as a framework?
1. hated it
2. disliked it
3. meh
4. it was ok
5. really enjoyed it

Explain:

> 5. really enjoyed it

I can't really say this confidently at all because all I did was get it running and that was a little frustrating, but it was really exciting seeing Expo in action (especially running on my phone) and the reload loop was nice.

### Other Notes
Need to continue the tutorial to get a better grip on things.

### Risks/Concerns
It's likely that we'd need to do some heavy stylizing in React Native or create a VA component kit, because the web-based design system won't be reusable. React Native is also super cool, but I would wonder if Facebook sees it as an experiment or as a longterm investment. It's super popular on GitHub so I'm sure it has solid support for the foreseeable future though.