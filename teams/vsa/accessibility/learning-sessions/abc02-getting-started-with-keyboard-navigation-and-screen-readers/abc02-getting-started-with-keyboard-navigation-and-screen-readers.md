# Getting Started with Keyboard Navigation & Screen Readers
Friday, December 20, 2019, at 2 PM ET, Accessibility Beyond Compliance (ABC) Learning Sessions Series

## Points of Contact
* Trevor Pierce, VSP Accessibility Specialist
* Jennifer Strickland, VSA Accessibility Specialist

[View PDF of presentation, 223kb](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/learning-sessions/abc02-getting-started-with-keyboard-navigation-and-screen-readers/abc02-getting-started-with-keyboard-navigation-and-screen-readers.pdf) 
## Schedule
1. 5-minutes — Chat, wait for stragglers
2. 5-minutes — Introduction
3. 20-minutes — Content
4. 20-minutes — Q&A
5. 10-minutes — Wiggle room, or free for a bio break before next meeting

## Calendar of Learning Sessions
Jan 24 - Cognitive Considerations
Feb 21 - Web Performance Impact on UX & Accessibility
Then, we’ll evaluate how these learning sessions are going, to ensure this is a useful format.

### Previous Learning Sessions
[ABC01 Inclusive Design Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/learning-sessions/abc01-inclusive-design-best-practices/inclusive-design-best-practices.md)

## Table of Contents
* [Keyboard navigation overview](#keyboard-navigation)

* [Screen reader navigation overview](#screen-reader-navigation)

* [Accessibility API high points](#interpreting-the-page)

* [Semantic HTML](#semantic-html)

* [Live demo of keyboard and screen readers](#live-demo-time)

<blockquote>
  <strong>If you can’t navigate the keyboard,
    you won’t navigate the screen reader either.</strong><br/>
Keyboard navigation should be the first thing we test manually. It can be abstracted (somewhat) with automated tests, but ultimately we are responsible for finding the edges and the corners.
</blockquote>

## Keyboard Navigation

<blockquote>
  <strong>&ldquo;If I have to fill out your form with a mouse, you’ve already failed.&rdquo;</strong><br/>
  <attr>&mdash; Me, trying to fill out the orthopedist’s intake form</attr>
</blockquote>

### Basic keyboard commands
Navigation is primarily handled with these keys or chords (keys pressed together)

<table>
  <tbody>
    <tr>
      <th>TAB</th>
      <td> to move forward by one focusable element</td>
    </tr>
    <tr>
      <th>ENTER</th>
      <td>to register a click event on buttons or links, submit forms</td>
    </tr>
    <tr>
      <th>SPACE</th>
      <td>to open select menus, or register click events on buttons</td>
    </tr>
    <tr>
      <th>DOWN and RIGHT ARROW</th>
      <td>to cycle forward through a radio group with focus</td>
    </tr>
    <tr>
      <th>UP and LEFT ARROW</th>
      <td>to cycle backward through a radio group</td>
    </tr>
    <tr>
      <th>UP and DOWN ARROW</th>
      <td>to scroll the page up and down by small increments or interact with open select menus</td>
    </tr>
    <tr>
      <th>PAGE UP, PAGE DOWN</th>
      <td>to scroll the page by larger increments in the viewport</td>
    </tr>
    <tr>
      <th>SHIFT + TAB</th>
      <td>to move backward by one focusable element</td>
    </tr>
  </tbody>
</table>

### What is focusable? What is tabbable?

[Ally.js defines five states an HTML element can be](https://allyjs.io/what-is-focusable.html):
1. **Inert**: Element is not interactive, cannot take keyboard focus
2. **Focusable**: Element can be focused by JavaScript and possibly the mouse. Often focused with the JS element.focus() method.
3. **Tabbable**: Element is keyboard focusable, part of the sequential tabbing order
4. **Only tabbable**:  Element is only keyboard focusable, cannot be focused with scripting
5. **Forwards focus**: Element sets focus on another element instead of taking focus itself

### Why does keyboard focus matter?

Keyboard focus is an important piece of the user experience.
It *should*:
* Follow the natural reading order of the page
* Reset when users add, remove, or change things on the page
* Have a clear, easy to find focus state (halo)

It *should not*:
* Skip around or scroll far on the page, then jump abruptly
* Leave users to reorient themselves when the page changes

## Screen Reader Navigation

### How do users navigate with screen readers?

Generally speaking, there are two ways to navigate with a screen reader:
* Users can navigate focusable elements with TAB and SHIFT + TAB
* They also navigate by a second paradigm, called the virtual cursor.

<blockquote>
<attr><a href="https://tink.uk/understanding-screen-reader-interaction-modes/" target="_blank">Leonie Watson describes the virtual cursor</a>:
&ldquo;...by creating a virtual copy of the document, screen readers make it possible for blind people to interact with content in ways that would otherwise be impossible on the Windows platform. This happens because the screen reader intercepts most keypresses before they reach the browser, triggering an interaction with the virtual document instead.&rdquo;
</blockquote>

### Virtual cursor for the win

Screen readers generally have two interaction models for their virtual cursor:
* Virtual/browse mode
* Forms/focus mode

**Virtual/browse mode**:
* Pressing DOWN ARROW or Ctrl + Opt + RIGHT ARROW moves to the next text element
* Pressing UP ARROW or Ctrl + Opt + LEFT ARROW moves to the previous text element
* When users interact with text nodes, they are in virtual/browse mode and the screen reader generally just reads the text
  - If the text is a heading, it will read “Your text here, heading level <N>”
  - There are also shortcuts to move by headings, tables, links, forms

**Forms/focus mode**:
* When users interact with a form element like a text input or checkboxes, Windows screen readers switch to forms/focus mode
* JAWS announces Forms mode with an audible “click”
* NVDA announces the input label, and “Focus mode”
* At this point, users can type “Horse” or “How are you” and the screen reader will register those keypresses in the input
* VoiceOver on MacOS and iOS doesn’t have this dual interaction model. It explains what element has focus and how users can interact with that element.

## Interpreting the page

<blockquote>
  Screen readers are able to read the page and tell me what I’m interacting with. How is this possible?<br/>
  Through the magic of <strong>accessibility APIs</strong>!
</blockquote>

### Accessibility is built on understanding

If I have an HTML snippet:
```
  <h1 id=“heading-one” class=“va-heading va-heading-one”>
      Facility Locator
  </h1>
```

Screen readers can tell us a lot about it:
* This is a heading level one
* It has an ID of “heading-one”
* It has two classes, “va-heading” and “va-heading-one”. 
* CSS can change elements’ availability in the accessibility API.
* It has one child text node “Facility Locator”

## Semantic HTML

### What is it?

[Wikipedia defines semantics](https://en.wikipedia.org/wiki/Semantics#Computer_science) thusly: 
semantics refers to the meaning of language constructs, as opposed to their form ([syntax](https://en.wikipedia.org/wiki/Syntax_(logic))).
* Good HTML should look like a term paper outline
* My favorite example is a heading. It can be marked up two ways:
  - `<h1>This is the purpose of the page</h1>`  versus…
  - `<span class=“va-heading-one”>This is the purpose of the page</span>`<br/>
  These can look identical, but their meaning is very different
  - Sighted users see a “heading”. It’s the top of the visual hierarchy.
  - Screen reader users hear:
    - This is the purpose of the page, heading level one versus…
    - This is the purpose of the page
* The H1 has semantic meaning and good descriptive text
* The SPAN asks users to assign importance to the text

## Live demo time!

### Live demo URLs

Now, you try! Using VoiceOver or NVDA (links for more info on these screen readers in #resources) and your keyboard, experiment with the generic and semantic demos provided below. The third bullet is an article illuminating why taking the time for manual testing is critically necessary. 
* Generic demo, without semantic markup - [Any Corp Scranton - generic](https://codepen.io/tpierce_402/full/JjoWmvY)
* Semantically marked up demo - [Any Corp Scranton - semantic](https://codepen.io/tpierce_402/full/zYxZmaO)
* Example of a website that 100% passes an automated compliance check, but is also completely inaccessible - [Building the most inaccessible site possible with a perfect Lighthouse score](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/)

## Resources
* [WebAIM guide on keyboard navigation](https://webaim.org/techniques/keyboard/)

* [Ally.js - What does "focusable" mean?](https://allyjs.io/what-is-focusable.html)

* [Paciello Group - the tabindex attribute](https://developer.paciellogroup.com/blog/2014/08/using-the-tabindex-attribute/)

* [MDN: What is the accessibility API](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs)

* [Web Fundamentals - the accessibility tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree)

* [How accessibility trees inform assistive tech](https://hacks.mozilla.org/2019/06/how-accessibility-trees-inform-assistive-tech/)

* [A List Apart - semantics to screen readers](https://alistapart.com/article/semantics-to-screen-readers/)

* [Leonie Watson - Understanding screen reader interaction modes](https://tink.uk/understanding-screen-reader-interaction-modes/)

* [NVDA download](https://www.nvaccess.org/download/)

* [NVDA focus highlight plugin](https://addons.nvda-project.org/addons/focusHighlight.en.html)

* [WebAIM guide to using NVDA](https://webaim.org/articles/nvda/)

* [MacOS VoiceOver guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/resources/mac-voiceover-guide.md)
