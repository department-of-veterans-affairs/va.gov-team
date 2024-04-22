# Mobile Web Accessibility Testing

[Analytics show](https://analytics.usa.gov/veterans-affairs) that nearly half of all traffic to VA.gov comes from mobile devices. As such, we feel that it is exceedingly important to do accessibility testing specifically for mobile devices. This document is written for and by The Sitewide Content, Accessibility, and Information Architecture (CAIA) team in the VA Office of the CTO (OCTO) accessibility specialists, but should be generally applicable to anyone interested in doing mobile web accessibility testing. This document provides guidance on how to perform manual mobile accessibility testing for web applications (as opposed to mobile apps).

This document doesn't seek to supplant any existing accessibility criteria like [the severity rubric](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric) the [platform experience standards](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/va-gov-experience-standards) or WCAG, but instead hopes to enhance them by providing folks interested in doing mobile accessibility testing with guidance for how to do so, and key areas to watch out for. **Our working assumption is that generally, all of the criteria laid out in WCAG should be applicable to a mobile web experience, too.**

## Assistive technology and mobile devices

Just like on desktop and laptop computers, the landscape of assistive technology and device combinations is enormous. That said, both Android and iOS provide first-party assistive settings and features. Our testing procedures will focus on using these. In the future we suggest that research be run with VA.gov users to determine if this is the correct call. We also recommend that, when possible, mobile accessibility testing be preformed using actual devices instead of simulators or emulators. While simulators and emulators can support *some* assistive features, we found that the experience of using these was mixed, and didn't have great parity with using real devices.

As of January, 2024 we recommend testing on both iOS and Android, in the future we suggest performing research with VA.gov users to understand their device usage habits and needs. For instance, does testing specifically on tablets make sense?

The sample devices used in this document:

- iPhone SE
- Samsung Galaxy S10e

Neither device needs to have a data connection for the purposes of this testing procedure -- WiFi will more than suffice. It is suggested that testers be able to plug these devices directly into a computer to pair with a browser's developer tools.

## Sample testing procedure

This is a generic testing procedure, when doing mobile accessibility testing you can use it as a starting point and modify as makes sense given the specific items being tested and the constraints that may be applied, such as time, device availability, etc.

<details>
    <summary>Minimal Sample Mobile Web Accessibility Testing Checklist</summary>

    ```markdown
    
    # TEAM NAME, PRODUCT NAME mobile accessibility test
    - NAME OF PERSON CONDUCTING TEST
    - DATE OF TEST
    
    ## Testing environment
    - TEST DEVICE
    - TEST DEVICE OPERATING SYSTEM VERSION 
    - MOBILE BROWSER USED FOR ACCESSIBILITY TESTING
    - Links to test environment: 
    
    ## User journey to be tested
    
    Describe the user journey being tested: 
    
    - Start: 
    - Tasks to be preformed: 
    - Success criteria: 
    EXAMPLE SUCCESS CRITERIA: 
        - All buttons are selectable
        - All links are selectable
        - All input fields can receive focus
        - When an input field receives focus, focus is visible or signaled (labels announced, etc)
        - etc.
    
    ## Dry run
    ### Portrait orientation
    - Were you able to perform all tasks defined in the user journey: yes/no
    - Were all success criteria met: yes/no
    - Notes and other information: 
    
    ### Landscape orientation
    - Were you able to perform all tasks defined in the user journey: yes/no
    - Were all success criteria met: yes/no
    - Notes and other information: 
    
    ## Zoomed in
    ### Portrait orientation at 200%
    - Were you able to perform all tasks defined in the user journey: yes/no
    - Were all success criteria met: yes/no
    - Notes and other information:
    
    ### Portrait orientation at MAX ZOOM%
    - Were you able to perform all tasks defined in the user journey: yes/no
    - Were all success criteria met: yes/no
    - Notes and other information:
    
    ### Landscape orientation at 200%
    - Were you able to perform all tasks defined in the user journey: yes/no
    - Were all success criteria met: yes/no
    - Notes and other information:
    
    ### Landscape orientation at MAX ZOOM%
    - Were you able to perform all tasks defined in the user journey: yes/no
    - Were all success criteria met: yes/no
    - Notes and other information:
    
    ## Screen reader
    - Were you able to perform all tasks defined in the user journey: yes/no
    - Were all success criteria met: yes/no
    - Notes and other information:
    ```

</details>

As of January 2024, at least in the US, iOS devices only support a single browser engine -- the technology used to compute and render a webpage -- regardless of the name of the browser downloaded, this means that on iOS testing can be safely confined to only Safari, because all other browsers use the same browser engine under the hood, WebKit. This said, in the future we suggest that research be done with VA.gov users to determine the validity of this statement.

Android devices, like more general purpose computers, support a wide plethora of browsers and browser engines, therefore it will be important to target a number of them. Many OEMs, like Samsung, ship their own browser as default. We suggest that research be done with VA.gov users to determine common browsers used on Android devices. Until that research is done, though, some recommended browsers for testing include: 

- [Google Chrome](https://play.google.com/store/search?q=Google%20Chrome&c=apps&hl=en_US&gl=US)
- [Firefox](https://play.google.com/store/search?q=Firefox&c=apps&hl=en_US&gl=US)
- [Microsoft Edge](https://play.google.com/store/search?q=Microsoft%20Edge&c=apps&hl=en_US&gl=US)
- [Samsung Internet Browser](https://play.google.com/store/search?q=Samsung%20Browser&c=apps&hl=en_US&gl=US)

### Identify the user journey and goal to be tested

Identify and document the user journey to be tested -- a user journey may sometimes cross multiple products, teams, and span many features. You don't need to map the entire journey, just flag important waypoints. You'll probably only be interested in actually testing, or providing results for a given part of this user journey, but identifying the whole user journey will help if anyone needs to reproduce any tests and with mapping dependencies that may impact the journey.

The user journey should include a starting point, and an action to accomplish some goal or set of goals.

Example: 

1. Start static burials page
2. Action login and complete burials form
3. Goal to apply for burial benefits

### Dry run

During the dry run, complete the user journey without any assistive settings or features enabled. This run through should be as close to the factory default settings of the device as possible. **Note: the dry run is meant to establish a usability baseline -- this is potentially problematic in that it assumes things about the tester's "normative" device settings and also that the product being tested functions as expected in this scenario.** The goal of the dry run is to establish the "lay of the land," so, when completing a dry run, attempt to complete the user journey as previously defined as you would outside of a testing scenario. This acknowledges that everyone's baseline is different.

Things to keep track of include: 

- target size
- target responsiveness (e.g. can you actually tap into all input fields, select buttons, highlight text, etc.)
- text contrast and legibility
- scroll behavior
- is anything obscured, running off the edges of the viewport, or unreachable

#### Portrait orientation

Complete the entire flow with the device locked to portrait orientation. 

#### Landscape orientation

Complete the entire flow with the device locked to landscape orientation.

**Note that some layout bugs are triggered on re-flow, when the browser redraws a webpage after resizing, or changing orientation.** During the dry run, if testing a form try switching the device's orientation after applying focus to an input field and after adding text to an input field. Ensure that the focus doesn't switch to a different element and that the text inputted isn't affected by the change.

### Zoomed in

[The foundational accessibility testing artifact](https://github.com/department-of-veterans-affairs/VA.gov-team/issues/new?assignees=briandeconinck&labels=a11y-testing&projects=&template=a11y-testing.yaml&title=Accessibility+Testing+for+%5BTeam+Name%2C+Product+Name%2C+Feature+Name%5D) requires that teams test at 200%, 300%, and 400% zoom levels. These zoom levels don't map perfectly to mobile accessibility testing. Zoom level can be controlled by a few factors on mobile, including the operating system, the browser's settings, and the device-level accessibility features. 

**We recommend testing zoom level by adjusting the browser settings.** These have the most direct impact on the rendered web content, whereas the operating system-level zoom settings tend to impact the applications more than rendered web content.

To update the browser zoom settings on iOS launch the settings application, select or search for "Safari" and scroll to the item labeled "Page Zoom." There, you can configure the browser's zoom level. 

To update the browser zoom settings using Chrome on Android go to settings in the Chrome application, and select the "Accessibility" option. There, you should find a slider where you can adjust the browser's zoom level. 

To update the browser zoom settings in the Samsung default browser launch the app and navigate to settings. In the settings menu select "Appearance." There, you should find an optione for "webpage text size." Selecting that will present a slider that allows you to adjust the browser's zoom level.

#### Portrait orientation

Complete the entire flow with the device locked to portrait orientation at 200% zoom.

Complete the entire flow with the device locked to portrait orientation at 300%, or whatever the maximum available zoom is.

#### Landscape orientation

Complete the entire flow with the device locked to landscape orientation at 200% zoom.

Complete the entire flow with the device locked to landscape orientation at 300%, or whatever the maximum available zoom is.

### Screen reader

Screen readers are used in a vast number of scenarios and are typically very configurable -- as such, there is an aphorism: *"if you've spoken to someone who uses a screen reader, you've spoken to one person who uses a screen reader."* Our testing cannot ensure that every configuration of every screen reader will work exactly the same, instead our goal is to ensure a certain level of usability is achieved across as many screen readers and configurations as we can realistically support.

To achieve this it is important that we have a strong mental model for how screen readers work, technically, and an even stronger understanding of how folks are using screen readers on VA.gov. As such, it is important that we continue to support assistive tech-focused user research sessions, and participate in pilot sessions, getting a feel for the technology and its nuances. 

#### iOS, VoiceOver

[Apple's documentation for enabling VoiceOver on iOS.](https://support.apple.com/guide/iphone/turn-on-and-practice-voiceover-iph3e2e415f/ios)

[Guide to VoiceOver gestures.](https://support.apple.com/guide/iphone/use-voiceover-gestures-iph3e2e2281/ios)

Complete the entire flow using VoiceOver's default settings.

#### Android, TalkBack

[Google's documentation for enabling TalkBack on Android.](https://support.google.com/accessibility/android/answer/6007100?hl=en)

[Guide to TalkBack gestures.](https://support.google.com/accessibility/android/answer/6151827?sjid=15946081337955240428-NA)

Complete the entire flow using TalkBack's default settings.

### The future, Voice Control and other alternative input methods

Currently, alternative input methods aren't well tested. In the future it is recommended that research be conducted to understand where VA.gov users needs are, and expand this testing guidance to support those findings.

## Tools and FAQ
### Useful tricks 

Many bugs that manifest when navigating a page with a screen reader have to do with how focus is managed. While there are many useful tools for visualizing focus, sometimes it is useful to generate a log of every componenet that receives focus durring a given time. The following code allows you to record just that! 

```javascript
let lastActiveElement;

setInterval(function() {
    const activeElement = document.activeElement;
    if (lastActiveElement !== activeElement) {
        console.log(activeElement);
        lastActiveElement = activeElement;
    }
}, 10);
```

To use this, before starting your test copy and paste the previous code snippet into the browser's console and evaluate it by hitting the <kbd>enter</kbd> or <kbd>return</kbd> key. Once it is running it will start to log every HTML element within the DOM that receives focus. 

### Mobile developer tools

If you don't mind navigating teeny tiny developer tools on your mobile device, [start by looking at this cross platform mobile developer tool bookmarklet.](https://dev.to/asaoluelijah/how-to-access-dev-tool-on-mobile-browsers-14nd) If that is too cumbersome proceed to pair desktop developer tools to your mobile testing devices.

#### Pairing iOS Safari with Desktop Safari’s developer tools

Safari on iOS doesn’t include [Developer Tooling](https://developer.apple.com/safari/), but you can connect desktop Safari’s developer tools to a running simulator or real iOS device. To do this you need to first enable “Developer mode” in Safari on your Desktop. Do this by launching Safari and navigating to preferences. From there select “Advanced” and then check the box near the bottom labeled “Show Develop menu in the menu bar.” This is a one-time action, and the selection will persist moving forward.

Once developer mode is enabled on desktop Safari you’ll have a new option in the menubar labeled “Develop.” Open a web page in Safari on the simulated device. Once you have opened a page in Safari on a device paired to your computer, click on the “Develop” menu and select your connected devices. This will launch a floating developer tools window focused on the device's Safari application; from here you can use dev tools as expected!

If you rely on plugins or bookmarklets to run automated accessibility scans, usually those won’t be available to you from the desktop to the device – you can use bookmarklets from the device, though. [Here is a collection of useful bookmarklets to save on mobile Safari for testing with.](https://pauljadam.com/bookmarklets/) They can be a bit difficult to configure on mobile, though. [Here are directions to help with that process.](https://www.cultofmac.com/500532/how-to-add-bookmarklet-mobile-iphone-safari/)

#### Pairing Chrome on Android with Desktop Chrome's developer tools

This is a less straightforward process than it is with iOS because of variability in Android devices. As such, only the most basic steps are provided: 

- On your Android device [enable Developer mode](https://www.samsung.com/us/support/answer/ANS00087642/)
- On your Android device, in the developer section of the settings application enable USB and WiFi debugging -- this will allow you to "pair" your phone and your computer
- Now, in Chrome on your computer configure the "[Chrome Remote Debugger](https://developers.google.com/cast/docs/debugging/remote_debugger)."

When completed, you will be able to use the DevTools from Chrome on your Desktop to debug and inspect a web content running in Chrome on Android. 
