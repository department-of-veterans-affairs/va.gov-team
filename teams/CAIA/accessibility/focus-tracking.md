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

![VA Benefits and Health Care navigation menu open, with a meandering mouse path from Education and training to the Check your Post-9-11 GI Bill benefits link.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/e987be68-8993-4b4c-a157-8b78e6fd2d46)

Keyboard users often experience the page as a **discrete linear path**. Each interactive element---links, buttons, form fields, etc.---is available as part of an ordered sequence. To get to a specific link in the navigation menu, there's a minimum number of times you have to press [Tab], moving through each item in the sequence.

![VA Benefits and Health Care navigation menu open, with nine tab stops depicted traveling sequentially from Education and training to the Check your Post-9-11 GI Bill benefits link.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/5dde1ee8-6b5e-41ce-80d4-0121f9a25aa7)


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

![Collection of focus styles on different types of form inputs, links, and buttons and against light and dark backgrounds.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/e6c30bb7-4afb-4553-94ae-19152a352e79)

Until then, check out ["Developing a focus style for a themable design system"](https://adhocteam.us/2022/02/08/creating-focus-style-for-themable-design-system/ "https://adhocteam.us/2022/02/08/creating-focus-style-for-themable-design-system/") from Ad Hoc. It's a case study from a team working on default focus styles in a design system. It doesn't cover everything to know about focus styles, but it's a great deep dive to get you started!

### Tip #2: Can I anticipate where focus will go next?

The next time you press [Tab] shouldn't lead to any surprises! That means you should:

-   Group related things together.
-   Respect reading order conventions.
-   Ask for information in a natural order.
-   Don't depend on something that comes later in the focus order.

The current design for the [VA.gov](http://va.gov/ "http://VA.gov") homepage has a lot of links. For the most part, those links are organized to help you anticipate what's next in the focus order. Related links are grouped together, and the "top-left to bottom-right" reading order convention is followed.

![Links on the VA.gov homepage with the tab sequence illustrated. The tab order starts in the top-left, then goes to the top-right, then the bottom-left, and finally the bottom-right.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/18615cc6-2940-4cd1-b1dd-deb7f8144437)

When designing forms on [VA.gov](http://va.gov/ "http://VA.gov"), think about the order of questions. In the same way you publish information using plain language, request information in an order that would be most natural for a Veteran.

![Partially-completed form inputs with tab sequence indicated. Tab order goes First name, Last name, Date of birth - Month, Date of birth - Day, Date of birth - Year.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/4d832fb2-f31a-47e4-bfe5-73593243f50a)

Finally, make sure that you're never depending on something else that comes later in the focus order. Forcing people to [Tab] past something and then backtrack can be confusing, tedious, and frustrating.

As an example, imagine the form field "What kind of ice cream would you like?" and the additional information component "Important information about ice cream flavors." You probably want to read that important information before you make your decision! But if the additional information component comes after the question and its inputs, you'll have to [Tab] past the question and then [Shift] + [Tab] back to answer it.

![A question, What kind of ice cream would you like with radio buttons Chocolate and Vanilla, followed by a collapsed widget labeled Important information about ice cream flavors.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/8e6b7aff-d9e5-4c85-a079-343cec746fdd)

![Collapsed widget labeled Important information about ice cream flavors followed by the question What kind of ice cream would you like with radio buttons Chocolate and Vanilla.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/9e941c82-504a-447e-b7bf-a5687d8ddbbb)


### Tip #3: Do I need to manage focus?

**Focus management** is programmatically moving focus as a result of some trigger, like a user action or something internal happening in the application. Focus can even be set to non-interactive elements when appropriate.

Example situations where managing focus makes sense:

-   Opening a modal.
-   Error handling.
-   Navigation through a single-page application.
-   When content is added or removed from the page.

Consider the Veterans Crisis Line button in the [VA.gov](http://va.gov/ "http://VA.gov") header. When the button has focus, the next stop when you press [Tab] is the VA logo that links to the homepage.

![VA.gov header with focus order illustrated. The Talk to the Veterans Crisis Line now button is followed by the VA logo linking to the homepage.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/413ea31e-b1ac-4d2b-add6-36c5e23d8acd)

Now press the crisis line button. If we didn't manage focus, then the next [Tab] stop would still be the VA logo --- which sits behind the modal and is clearly where you wanted to go. Instead, we programmatically move focus into the modal and onto the first crisis line phone number link.

![VA.gov header and crisis line modal open with focus order illustrated. The Talk to the Veterans Crisis Line now button is followed by the phone number link in the modal.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/856a5aa4-4f37-4670-8b0a-9be320241dba)

### Tip #4: Annotate your prototypes

As you think about how Veterans will track focus through the page, take notes!

-   [Annotate your prototypes](https://design.va.gov/about/accessibility/accessibility-annotations), especially if managing focus is needed.
-   Share with us during Collaboration Cycle touchpoints!
-   Talk about expected keyboard behavior with engineers on your team!

Your annotations don't have to be anything fancy, and you don't need to annotate everything! But if you think there's going to be a tricky keyboard situation, write down what you think is going to happen so we can talk about it.

## Checklist

-   Make a list of all your interactive elements.
-   Check that the order make sense and is intuitive.
    -   Verify through user research!
-   Think about focus management (but not too much).
-   Annotate your prototypes.
