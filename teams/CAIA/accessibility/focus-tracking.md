# Focus Tracking
- Brian DeConinck
- May 23, 2022

## Introduction

**Focus** determines where keyboard events go on a page at any given moment.

When an element **has focus**, it has a **visible focus indicator**. Some examples of elements that receive focus include:

-   Links
-   Buttons
-   Form inputs

Use your keyboard to move focus between interactive elements.

-   [Tab] to move forward
-   [Shift] + [Tab] to move backward
-   [Up arrow] and [Down arrow] to move between radio buttons, dropdown list items, some other form controls.
-   [Enter] to activate a link
-   [Enter] or [Spacebar] to activate a button

## Why does focus tracking matter?

Sighted mouse users often experience the page as a **continuous plane**. Imagine the path that your mouse takes as you're scanning the page looking for what you want. It's probably not a straight-line efficient path! Your mouse might wander, hover over something as you decide whether or not to click, or change directions in any direction.

Open lGzK3jbL7tj8HdhJvBs9JWKyNO--99N-nxJbmRBxrEb7kdby33UMhpeo3o2bLWU4phheXkI8lMgo9kdwm4OW62mApt8UBakgJ8MuRBCl4NnYjkIs7nPR1RpeHYaOjGs9jeebDdsDTJZDdlBe

![VA Benefits and Health Care navigation menu open, with a meandering mouse path from Education and training to the Check your Post-9-11 GI Bill benefits link.](blob:https://vfs.atlassian.net/def2a727-905d-48b2-80b0-86587f512f2e#media-blob-url=true&id=57d3698e-d59f-4caf-8368-7538f3a33e70&collection=contentId-2206531715&contextId=2206531715&width=1570&height=849&alt=VA%20Benefits%20and%20Health%20Care%20navigation%20menu%20open%2C%20with%20a%20meandering%20mouse%20path%20from%20Education%20and%20training%20to%20the%20Check%20your%20Post-9-11%20GI%20Bill%20benefits%20link.)

Keyboard users often experience the page as a **discrete linear path**. Each interactive element---links, buttons, form fields, etc.---is available as part of an ordered sequence. To get to a specific link in the navigation menu, there's a minimum number of times you have to press [Tab], moving through each item in the sequence.

Open GwwSBMrijDmcZTpsXBOWst_20hrxPuCwdxtccAjLDjg5cDTTFKohgryn2ZwNifP2fnHPOVxQOraoCl0uTQAnutvtFzD8bQyk1qtVPDJuMGdwuLwD7C40kQwA7d24p67IQK64u8cIvQ8nEd5o

![VA Benefits and Health Care navigation menu open, with nine tab stops depicted traveling sequentially from Education and training to the Check your Post-9-11 GI Bill benefits link.](blob:https://vfs.atlassian.net/fe4e9af8-e3bc-492f-86f2-10ea28023d35#media-blob-url=true&id=e8255bd2-6ed8-483c-b8a0-934b39ed0ea9&collection=contentId-2206531715&contextId=2206531715&width=1567&height=850&alt=VA%20Benefits%20and%20Health%20Care%20navigation%20menu%20open%2C%20with%20nine%20tab%20stops%20depicted%20traveling%20sequentially%20from%20Education%20and%20training%20to%20the%20Check%20your%20Post-9-11%20GI%20Bill%20benefits%20link.)

When you experience content linearly, **tracking focus as you move through the page** is important!

-   Focus jumps when you press [Tab] --- so you need some intuition about where to jump, too.
-   Pressing [Tab] over and over can be tedious --- so you want to know it will lead you somewhere, not be a confusing dead end.
-   Big changes to page content can move and hide interactive elements --- so when that happens you want your focus to be somewhere useful, not hidden behind a modal.

## How do we help users track focus?

As you work, ask yourself:

-   Can I always tell what has focus?
-   Can I anticipate where focus will go next?
-   Do we need to manage focus?

### Tip #1: Can I always tell what has focus?

Interactive elements should always have a visible focus style. This is essential for helping your users identify what has focus and build intuition about where focus will go next. Focus indicators are important enough to get their own presentation... and they will, in a future week!

Open 1yHq3ph1uRgopmD7DxAiZoCM5kCbpkDh0G8MVgXqwoxRVNMmOrfwEOFWkOw_93dVODW9g_thwT3keaPXyKX6MXywvkBguHEAEKwDQLJhTQL6nqgZKG7Q1VQ4JprVUdZo5ZJfFe3FxSblfVKZ

![Collection of focus styles on different types of form inputs, links, and buttons and against light and dark backgrounds.](blob:https://vfs.atlassian.net/417080bc-42ae-4f9b-827e-7f95499c0ebf#media-blob-url=true&id=3dddbb7a-0080-4ee6-9cfb-dc90c9c6edb0&collection=contentId-2206531715&contextId=2206531715&width=791&height=810&alt=Collection%20of%20focus%20styles%20on%20different%20types%20of%20form%20inputs%2C%20links%2C%20and%20buttons%20and%20against%20light%20and%20dark%20backgrounds.)

Until then, check out ["Developing a focus style for a themable design system"](https://adhocteam.us/2022/02/08/creating-focus-style-for-themable-design-system/ "https://adhocteam.us/2022/02/08/creating-focus-style-for-themable-design-system/") from Ad Hoc. It's a case study from a team working on default focus styles in a design system. It doesn't cover everything to know about focus styles, but it's a great deep dive to get you started!

### Tip #2: Can I anticipate where focus will go next?

The next time you press [Tab] shouldn't lead to any surprises! That means you should:

-   Group related things together.

-   Respect reading order conventions.

-   Ask for information in a natural order.

-   Don't depend on something that comes later in the focus order.

The current design for the [VA.gov](http://va.gov/ "http://VA.gov") homepage has a lot of links. For the most part, those links are organized to help you anticipate what's next in the focus order. Related links are grouped together, and the "top-left to bottom-right" reading order convention is followed.

Open mDadxPu1Ie4sPCBMsJTBkxNXYBvvBRPWmHSGckDiJ1LQ0yzxrCuAk4E8heGsa7Q9NiSIbZ1lzN3rTlloDnMH5OGkTUIyCZD_8FNo901OZ6bcwAOwm5OJDTnDEubD5Fm5bF7duYv0mqX-063A

![Links on the VA.gov homepage with the tab sequence illustrated. The tab order starts in the top-left, then goes to the top-right, then the bottom-left, and finally the bottom-right.](blob:https://vfs.atlassian.net/2f60837e-8b27-486f-a2c3-32173fef0348#media-blob-url=true&id=d5cae671-05af-422e-927e-e330ee112e52&collection=contentId-2206531715&contextId=2206531715&width=1233&height=855&alt=Links%20on%20the%20VA.gov%20homepage%20with%20the%20tab%20sequence%20illustrated.%20The%20tab%20order%20starts%20in%20the%20top-left%2C%20then%20goes%20to%20the%20top-right%2C%20then%20the%20bottom-left%2C%20and%20finally%20the%20bottom-right.)

When designing forms on [VA.gov](http://va.gov/ "http://VA.gov"), think about the order of questions. In the same way you publish information using plain language, request information in an order that would be most natural for a Veteran.

Open W0Xe1YMXYwF24FPDMkj-YR_pmHWdeChpEgx5YnojJQuuMFGnD1Qy5MsoqRB4iry1Gy9i-nIXtel0oFeWSbByLaooQm2uwCaR6fysAJ23shUTvW8nYMwpIi7GgJ0A7rXLGE2odKS7uUXCR7lj

![Partially-completed form inputs with tab sequence indicated. Tab order goes First name, Last name, Date of birth - Month, Date of birth - Day, Date of birth - Year.](blob:https://vfs.atlassian.net/a819c89e-f1c4-4649-8cfb-8d59e1a77363#media-blob-url=true&id=61f06391-40e5-43c6-a4e5-7c7fac247c96&collection=contentId-2206531715&contextId=2206531715&width=724&height=482&alt=Partially-completed%20form%20inputs%20with%20tab%20sequence%20indicated.%20Tab%20order%20goes%20First%20name%2C%20Last%20name%2C%20Date%20of%20birth%20-%20Month%2C%20Date%20of%20birth%20-%20Day%2C%20Date%20of%20birth%20-%20Year.)

Finally, make sure that you're never depending on something else that comes later in the focus order. Forcing people to [Tab] past something and then backtrack can be confusing, tedious, and frustrating.

As an example, imagine the form field "What kind of ice cream would you like?" and the additional information component "Important information about ice cream flavors." You probably want to read that important information before you make your decision! But if the additional information component comes after the question and its inputs, you'll have to [Tab] past the question and then [Shift] + [Tab] back to answer it.

Open JUbPtQ2TBPNxAbOwWSzqQNwMYj89RcC-MbDUx2k98ifHZQv3xwOTjk1YdS1ONudU4IgVd0hiiHYzwWj6XL34H202s4KbrXP8Z5l5VOTa4P1RGJnhgeg1572X6Kdv1E0Pg7upMspuZTjrmcwL

![A question, What kind of ice cream would you like with radio buttons Chocolate and Vanilla, followed by a collapsed widget labeled Important information about ice cream flavors.](blob:https://vfs.atlassian.net/9b7ca241-4e2e-44c9-a805-0763dbbe508a#media-blob-url=true&id=7e66ccac-772a-4288-b922-282487549824&collection=contentId-2206531715&contextId=2206531715&width=513&height=236&alt=A%20question%2C%20What%20kind%20of%20ice%20cream%20would%20you%20like%20with%20radio%20buttons%20Chocolate%20and%20Vanilla%2C%20followed%20by%20a%20collapsed%20widget%20labeled%20Important%20information%20about%20ice%20cream%20flavors.)

Open YHtpilyMD6qcC9lKUsMqTtjkk9GHJhQAS-0BA7UGVpfrx7avWLVepi1WjucF85ChNFj7HqmgLxN36SMCGnFjRhrEgFSpp6711TfLFNnWNK6efZuXAyM0OdHFGJBjgiWB83c7AnC6G4mXJdXC

![Collapsed widget labeled Important information about ice cream flavors followed by the question What kind of ice cream would you like with radio buttons Chocolate and Vanilla.](blob:https://vfs.atlassian.net/9daef3af-c2ab-458e-a2f2-17db337aa186#media-blob-url=true&id=a75828d2-0f73-4b9b-8751-a2ea4426e90b&collection=contentId-2206531715&contextId=2206531715&width=520&height=225&alt=Collapsed%20widget%20labeled%20Important%20information%20about%20ice%20cream%20flavors%20followed%20by%20the%20question%20What%20kind%20of%20ice%20cream%20would%20you%20like%20with%20radio%20buttons%20Chocolate%20and%20Vanilla.)

### Tip #3: Do I need to manage focus?

**Focus management** is programmatically moving focus as a result of some trigger, like a user action or something internal happening in the application. Focus can even be set to non-interactive elements when appropriate.

Example situations where managing focus makes sense:

-   Opening a modal.
-   Error handling.
-   Navigation through a single-page application.
-   When content is added or removed from the page.

Consider the Veterans Crisis Line button in the [VA.gov](http://va.gov/ "http://VA.gov") header. When the button has focus, the next stop when you press [Tab] is the VA logo that links to the homepage.

Open CDPbZTqhtI1eXl311hAovWOEHtHsqYgygC6Xn6ENRkETpZcoUKMFh-TLCxerVkrWvo36jSIoNHwcAyzlCh4eekHzbApBUby_4qRpP5T4qaSczOUGS-KhZTC638PZZkr-BxFT9dmj73Yu5IV-

![VA.gov header with focus order illustrated. The Talk to the Veterans Crisis Line now button is followed by the VA logo linking to the homepage.](blob:https://vfs.atlassian.net/268f70d5-71a0-4258-bc5b-9a9a6e2fdd33#media-blob-url=true&id=4af322a4-752c-4a4d-9128-af14a199930f&collection=contentId-2206531715&contextId=2206531715&width=990&height=175&alt=VA.gov%20header%20with%20focus%20order%20illustrated.%20The%20Talk%20to%20the%20Veterans%20Crisis%20Line%20now%20button%20is%20followed%20by%20the%20VA%20logo%20linking%20to%20the%20homepage.)

Now press the crisis line button. If we didn't manage focus, then the next [Tab] stop would still be the VA logo --- which sits behind the modal and is clearly where you wanted to go. Instead, we programmatically move focus into the modal and onto the first crisis line phone number link.

Open THmWSh57gbyemcdakxSZEr61izToiev4aOg3Tfrc11DWEiyTHC2upyk-UOarksDhsBr9QPu3edPkTf8QXzDVXLhTph1k3Jf61bV7NmXpZHcYtOsP4jIyetjMsd3oj0bt9l3MwfXy1i0tuoSA

![VA.gov header and crisis line modal open with focus order illustrated. The Talk to the Veterans Crisis Line now button is followed by the phone number link in the modal.](blob:https://vfs.atlassian.net/493c2d03-c76d-4aa6-88cb-4160f96c3b33#media-blob-url=true&id=12d3d85d-97d6-44f0-b14a-29eb77565d47&collection=contentId-2206531715&contextId=2206531715&width=1003&height=574&alt=VA.gov%20header%20and%20crisis%20line%20modal%20open%20with%20focus%20order%20illustrated.%20The%20Talk%20to%20the%20Veterans%20Crisis%20Line%20now%20button%20is%20followed%20by%20the%20phone%20number%20link%20in%20the%20modal.)

### Tip #4: Annotate your prototypes

As you think about how Veterans will track focus through the page, take notes!

-   Annotate your prototypes, especially if managing focus is needed.
-   Share with us during Collaboration Cycle touchpoints!
-   Talk about expected keyboard behavior with engineers on your team!

Your annotations don't have to be anything fancy, and you don't need to annotate everything! But if you think there's going to be a tricky keyboard situation, write down what you think is going to happen so we can talk about it.

## Checklist

-   Make a list of all your interactive elements.
-   Check that the order make sense and is intuitive.
    -   Verify through user research!
-   Think about focus management (but not too much).
-   Annotate your prototypes.
