# Tools we use

This document details the tools we use, why, and how we use them. The goal is for this to be helpful to new CAIA accessibility specialists, but also for folks on delivery teams hoping to do their own accessibility testing during design and development.

During an accessibility audit, accessibility specialists use multiple tools in their testing. While each tool provides insights into specific areas, no one tool will be able to identify all accessibility barriers. This is why it’s important to perform automated and manual testing combined with user research.  

## Automated Testing Tools
Although automated testing tools may only pick up on 20-30% of accessibility issues, they can be easy to use, provide immediate feedback, and help to find glaring accessibility issues. These tools are typically used when content is available in a live, coded environment that is viewable in a web browser.

### Browser Extensions
The benefit of tools that integrate into browsers is that they give you the capability of testing directly in a browser. 
* [Axe DevTools](https://www.deque.com/axe/devtools/) - an accessibility testing toolkit developed by Deque, that integrates with your browser of choice, to scan entire pages or individual components. This is typically a highly preferred automated tool across the board.
* *Additional tools* - while we rely on axe DevTools for most automated testing, here are some additional tools to consider:
  * [ArcToolkit](https://www.tpgi.com/) - a set of accessibility tools that aids developers in identifying accessibility problems and features for WCAG 2, EN 301 549, and Section 508
  * [WAVE](https://wave.webaim.org/) - a web accessibility evaluation tool developed by WebAIM.org. It provides visual feedback about the accessibility of your web content
  * [IBM Equal Access Accessibility Checker](https://www.ibm.com/able/) - an open-source tool for web developers and auditors that utilizes IBM's accessibility rule engine, which detects accessibility issues for web pages and web applications.
  * [Accessibility insights for web](https://accessibilityinsights.io/docs/web/overview/) - a tool, similar to Axe and WAVE, that evaluates a page's semantic elements and styling

## Manual Testing Tools
Manually interacting with content can help to fill in the gaps missed by automated testing. Included below is a good grouping of several different tools, so feel free to experiment with different combinations in your testing.

### Color and Contrast
Here, we take a look at contrast or the difference in brightness between foreground and background colors. This brightness difference is expressed as a ratio ranging from 1:1 (e.g. white on white) to 21:1 (e.g., black on white). It ensures people with moderately low vision can tell the colors apart and see the content. 
* [WCAG](https://www.w3.org/TR/WCAG21/#distinguishable) Level AA requires a contrast ratio of at least 4.5:1 for normal text, 3:1 for large text, and a contrast ratio of at least 3:1 for graphics and user interface components (such as form input borders). Level AAA requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.
* [Colour Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/) - color contrast checker tool that allows you to determine the contrast ratio of two colors by using an eyedrop tool.
* [WCAG Color Contrast Checker](https://chrome.google.com/webstore/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf) - tests the color contrast according to WCAG accessibility requirements. It evaluates the contrast on all elements of the page considering their computed style for the color and background-color CSS properties.
* [High-Contrast mode](https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph) - changes and inverts the color scheme of web pages with your choice of several high-contrast color filters designed to make it easier to read text. A helpful feature for users with vision-related disabilities. 
* [Colorblindly](https://github.com/oftheheadland/Colorblindly) - simulates different types of colorblindness in the browser
* [ChromeLens](https://github.com/chromelens/chromelens) - Visual impairment simulation and auditing tool to develop for accessibility.
* [Stark](https://www.getstark.co/) - connects the tools you already use in an end-to-end accessibility workflow. It includes a vision simulator to test a variety of vision types.

### Zoom/Magnification 
These types of tools might be useful to users with some form of sight loss. Both Android and Apple offer a magnification type setting, while most desktop browsers can accomplish zooming with shortcut keys or a browser extension.
* [Zoom Plus](https://chrome.google.com/webstore/detail/zoom-plus/ajneghihjbebmnljfhlpdmjjpifeaokc) - a tool for managing zoom for web pages. It allows you to set a precise zoom factor tailored to your preference.
* [Zoom](https://www.stefanvd.net/project/zoom/browser/) - helps you to zoom easily in and out on a web page using the zoom button and mouse scroll wheel.
Keyboard Navigation
Website features should be navigable solely via the keyboard. Keyboard users typically use the Tab key to navigate through interactive elements on a web page, including links, buttons, form fields, etc.
* [NerdeFocus](https://github.com/wizzyfx/nerdeFocusPlugIn) - a Developer Tools extension that allows you to debug focus problems when testing a page for accessibility issues. When activated, it will display the focus history with CSS selectors, and animate the focus ring.
* [ChromeLens](https://github.com/chromelens/chromelens) - (*previously mentioned*) includes in its suite of tools a tab-tracker that allows you to visually track the flow of navigation through a website.

### Architecture and Semantics
While automated testing may catch issues with semantics, it is a good idea to do a bit of manual checking. For example, verifying that labels are associated correctly with form field elements, verifying that radio button groups are within a proper fieldset element, ensuring that images have appropriate alt text, etc.
* [headingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) - this extension audits the heading structure of a web page and generates a document map of headings.
* [Web Developer](https://chrispederick.com/work/web-developer/) - a browser extension that adds various web developer tools that allow you to turn off images, turn off styling (CSS), disable JavaScript, and other actions to help test for accessibility.
* [What has focus](https://codepen.io/svinkle/pen/WgYRxq) - a bookmarklet that helps determine what element currently has active focus.
* [Highlight VA web components](https://codepen.io/briandeconinck/pen/gOqMEdX) - a bookmarklet that highlights web components from the VA design system. Useful for identifying known patterns.

### Screen Readers
These can help to convey content to blind people, and partially-sighted users and can even be helpful for people with reading disorders. Testing with these can aid in the evaluation of plain language and the overall experience of screen reader users.
* [VoiceOver](https://support.apple.com/guide/voiceover/welcome/mac) - the screen reader built into the Mac operating system. Braille output is also available.
* [JAWS](https://www.freedomscientific.com/products/software/jaws/) - the Windows operating system screen reader developed for computer users whose vision loss prevents them from seeing screen content or navigating with a mouse. JAWS provides speech and Braille output for the most popular computer applications on your PC.
* [NVDA](https://www.nvaccess.org/download/) - the Windows operating system screen reader (free)
