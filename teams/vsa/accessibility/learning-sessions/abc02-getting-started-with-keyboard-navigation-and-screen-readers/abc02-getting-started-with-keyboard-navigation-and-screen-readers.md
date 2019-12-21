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
* Keyboard navigation overview
* Screen reader navigation overview
* Accessibility API high points
* Semantic HTML
* Live demo of keyboard and screen readers

### Resources
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
* [MacOS VoiceOver guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/mac-voiceover-guide.md)

<blockquote>
  <strong>If you can’t navigate the keyboard,
    you won’t navigate the screen reader either.</strong><br/>
Keyboard navigation should be the first thing we test manually. It can be abstracted (somewhat) with automated tests, but ultimately we are responsible for finding the edges and the corners.
</blockquote>

<blockquote>
  <strong>&ldquo;If I have to fill out your form with a mouse, you’ve already failed.&rdquo;</strong><br/>
  <attr>*mdash; Me, trying to fill out the orthopedist’s intake form</attr>
</blockquote>

## Keyboard Navigation

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
