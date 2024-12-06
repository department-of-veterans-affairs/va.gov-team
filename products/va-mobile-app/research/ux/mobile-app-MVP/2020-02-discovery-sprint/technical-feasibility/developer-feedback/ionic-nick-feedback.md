# Ionic Technical Feasibility

## Instructions
- [x] Build a Hello, World app in Ionic using React. Take notes on the tooling required to install/configure. https://ionicframework.com/docs/react
- [x] Attempt to reuse a simple React component from VA.gov codebase
- [x] Deploy to Xcode Simulator
- [x] Deploy to Android Studio emulator
- [x] Deploy app as a PWA (Progressive Web App)

## Notes
- [ ] Don't worry about sign-in to VA.gov - this is complex and we will evaluate later
- [x] Install Xcode from App Store (you will need an Apple ID)
- [x] Install Android Studio from https://developer.android.com/studio
- [x] Work separately, but don't get stuck. Feel free to ask questions, screen share, etc

---

## Questions
### Tooling
List everything you needed to install

| Name | Time | Difficulty | Notes |
|---|---|---|---|
| Ionic CLI | 5 mins | easy | installed via NPM into project `devDependencies` |
| Xcode | 2 hours | easy | ~7gb download from App Store plus install time; had to plug in my iPhone to "sign" for my personal developer team that I also had to set up |
| Android Studio | 1 hour | easy | download from developer.android.com; had to add an entry into my computer's security preferences for Intel HAXM to finish installing |
| CocoaPods | 1 min | easy | installed via `gem install`; required for Xcode |
| Android Pixel emulator | 10 mins | easy | installed via Android Studio |
| iPhone X emulator | 0 mins | easy | shipped w/Xcode |


What were the challenges with tooling?

### What is the "reload/feedback loop" like?
In a day, I only managed to get the app set up on all platforms without diving into the full developer experience on the emulators. However, the hot-reload (change a file and see it reflected in your running application without restarting) in the browser was very fast. It seems to be leveraging [create-react-app](https://github.com/facebook/create-react-app) as its front-end toolkit, so the experience is pretty seamless for React devs use to working on websites. The Ionic module then provides some React components that I presume translate into native mobile components. I noticed there are commands to run hot-reload in emulators, but I haven't tested them yet.

### Did you notice any "clunkiness" with the UI?
I tried adding an `<AlertBanner/>` from the VA.gov design system into a page, and noticed it was covering the page title. However, this was due to me placing the banner in the component tree in a place where it didn't make sense. Once I moved it to a better place, it rendered correctly. So, my bad :smile: 

I think I need to do a deeper dive to say for sure, but as of now, I didn't notice any clunkiness and was actually really impressed. I think I'd have to add some more logic - maybe just a button that initiates a network request with a loading indicator - and try running that on a phone to see what experience ends up being like.

### What specific skills did you use to be successful with Ionic?
Example: HTML/CSS, JS

I think the iOS/Android-specific pieces are actually pretty well-handled by Ionic. Both project directories were scaffolded using the Ionic CLI, along with commands to open the corresponding platform-specific IDE, and then run the app. For native UI experiences, as long as you're able to stick with what Ionic provides as [native components](https://ionicframework.com/docs/native), I think you would be able to get away with just the standard web-dev skills -

- React/JavaScript - Devs must be strong on this, as React is the core logic of the project.
- CSS - Devs should be solid with this too. I think Ionic will have some weird CSS concepts for stylizing native components.
- HTML - There is a single HTML file for the root React component to bind to during startup. You'll likely only need to work with this when you're editing certain meta tags in the website `<head>`, but could be more extensive if you're emphasizing the app as a PWA.


### How reusable are VA.gov React components?
  1. no reuse at all
  1. needed to rewrite it significantly
  1. needed some edits
  1. needed just a couple edits
  1. worked out-of-the-box

> 5. worked out-of-the-box

Explain: The VA.gov React components are published in the form of [NPM modules](https://www.npmjs.com/package/@department-of-veterans-affairs/formation-react), so they are installed via NPM and registered into your project's `package.json`. They are already intended to be portable and edits are made using semantic versioning. This meant that all I had to do was install them via NPM, import the global CSS from Formation, then import the React components I want to use elsewhere in the project, via -

```
//@ts-ignore
import AlertBox from '@department-of-veterans-affairs/formation-react/AlertBox';
```

Ionic seems to scaffold the project as TypeScript, while the VA.gov design system components are JavaScript and do not have TypeScript declaration files. I remembered non-typed dependencies being a headache for me in the past, but that `//@ts-ignore` seemed to the error I was receiving at first. You can also just choose to not use TypeScript by changing the file extensions and remove the types.

### What is your feeling about Ionic as a framework?
1. hated it
1. disliked it
1. meh
1. it was ok
1. really enjoyed it

> 5. really enjoyed it

Explain: I really enjoyed it _so far_. I had low expectations and anticipated a lot of struggles getting set up with all platforms. However, the Ionic docs were some of the most well-written I've come across, especially since they cover so much ground. I emphasize "so far" because this was my first dive into it, so I haven't really gotten the full developer experience. Hybrid frameworks are also somewhat known for a less-snappy UX compared to native apps, so I would be curious what it would be like running on a physical device. I think hybrid frameworks have come a long enough way to be a pretty great UX, but still, I'd like to know that before committing.