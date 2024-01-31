`WIP DRAFT`

# Mobile Accessibility Testing

[Analytics show](https://analytics.usa.gov/veterans-affairs) that nearly half of all traffic to VA.gov comes from mobile devices. As such, we feel that it is exceedingly important to do accessibility testing specifically for mobile devices. This document is written for and by CAIA accessibility specialists, but should be generally applicable to anyone interested in doing mobile accessibility testing. This document provides guidance on how to perform manual mobile accessibility testing for web applications (as opposed to mobile apps).

This document doesn't seek to supplant any existing accessibility criteria like [the severity rubric](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric) or WCAG, but instead hopes to enhance them by providing folks interested in doing mobile accessibility testing with guidance for how to do so, and key areas to watch out for.

Our working assumption is that generally, all of the criteria laid out in WCAG should be applicable to a mobile web experience, too.

`NOTE, because of device availability, for the time being, this document only includes specific guidance for iOS settings. In the future the document will be updated to include specific guidance for Android, too.`

## Assistive technology and mobile devices

Just like on desktop and laptop computers, the landscape of assistive technology and device combinations is enormous. That said, both Android and iOS provide first-party assistive settings and features. Our testing procedures will focus on using these. In the future we suggest that research be run with VA.gov users to determine if this is the correct call. 

We also recommend that, when possible, mobile accessibility testing be preformed using actual devices, instead of simulators or emulators. While simulators and emulators can support *some* assistive features, we found that the experience of using these was mixed, and didn't have great parity with using real devices.

As of January, 2024 we recommend testing on both iOS and Android, in the future we suggest performing research with VA.gov users to understand their device usage habits and needs. For instance, does testing specifically on tablets make sense?

The sample devices used in this document:

- iPhone SE
- Samsung Galaxy S9

Neither device needs to have a data connection for the purposes of this testing procedure -- WiFi will more than suffice. It is suggested that testers be able to plug these devices directly into a computer to pair with a browser's developer tools.

## Sample testing procedure

This is a generic testing procedure, when doing mobile accessibility testing for real you can use it as a starting point and modify as makes sense given the specific items being tested, and the constraints that may be applied, time, device availability, etc.

High-level info that is important to record:

```plaintext
# TEAM NAME, PRODUCT NAME mobile accessibility testing plan
- Name of person conducting test
- Date of test

## Testing environment: 
- Test device
- Test device operating system version
- Notes on test device accessibility settings
- Browser used for accessibility testing
- Link to test environment, or procedure for running locally if you didn't test this in dev., staging or production.
```

As of January 2024, at least in the US, iOS devices only support a single browser engine, the technology used to compute and render a webpage, regardless of the name of the browser downloaded -- this means that on iOS testing can be safely confined to only Safari, because all other browsers are using the same browser engine under the hood, WebKit. This said, in the future we suggest that research be done with VA.gov users to determine the validity of this statement.

Android, like more general purpose computers, support a wide plethora of browsers and browser engines, therefore it will be important to target a number of them. Many OEMs, like Samsung, ship their own browser as default. 

### Identify the user journey and goal to be tested

Identify and document the user journey to be tested -- a user journey may sometimes cross multiple products, teams, and span many features. You don't need to map the entire journey, just flag important way points. You'll probably only be interested in actually testing, or providing results for a given part of this user journey, but identifying the whole user journey will help if anyone needs to reproduce any tests and with mapping dependencies.

The user journey should include a starting point, and an action to accomplish some goal or set of goals.

Example: 

- Start static burials page
- Action login and complete burials form
- Goal to apply for burial benefits

### Dry run

During the dry run, complete the user journey without any assistive settings or features enabled. This run through should be as close to the factory default settings of the device as possible. 

Things to keep track of include: 

- target size
- target responsiveness (e.g. can you actually tap into all input fields, select buttons)
- text contrast and legibility
- scroll behavior
- is anything obscured, running off the edges of the viewport, or unreachable

#### Portrait orientation

Complete the entire flow with the device locked to portrait orientation. 

#### Landscape orientation

Complete the entire flow with the device locked to landscape orientation.

Note that some layout bugs are triggered on re-flow, when the browser redraws a webpage after resizing, or changing orientation. During the dry run, if testing a form try switching the device's orientation after applying focus to an input field and after adding text to an input field. Ensure that the focus doesn't switch to a different element and that the text inputted isn't affected by the change.

### Zoomed in

[The foundational accessibility testing artifact](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=briandeconinck&labels=a11y-testing&projects=&template=a11y-testing.yaml&title=Accessibility+Testing+for+%5BTeam+Name%2C+Product+Name%2C+Feature+Name%5D) requires that teams test at 200%, 300%, and 400% zoom levels. These zoom levels don't map perfectly to mobile accessibility testing. Zoom level can be controlled by a few factors on mobile, including the operating system, the browser's settings, and the device-level accessibility features. 

We recommend testing zoom level by adjusting the browser settings. These have the most direct impact on the rendered web content, whereas the operating system-level zoom settings tend to impact the applications more than rendered web content.

To update the browser zoom settings on iOS launch the settings application, select or search for "safari" and scroll to the item labeled "Page Zoom." There, you can configure the browser's zoom level. 

#### Portrait orientation

Complete the entire flow with the device locked to portrait orientation at 200% zoom.

Complete the entire flow with the device locked to portrait orientation at 300%, or whatever the maximum available zoom is.

#### Landscape orientation

Complete the entire flow with the device locked to landscape orientation at 200% zoom.

Complete the entire flow with the device locked to landscape orientation at 300%, or whatever the maximum available zoom is.

### Screen reader
#### Android, TalkBack
#### iOS, VoiceOver

## Tools and FAQ
