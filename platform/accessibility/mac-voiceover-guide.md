# How to use Apple's Voice Over to manually check basic accessibility/usability issues

**Safari is recommended** for screen reader testing with VoiceOver. Chrome on OSX sometimes generates false positive failures such as not reading labels for `<select>` menus. Safari and VoiceOver are both native Apple products, and are the best pairing for Mac-centric screen reader evaluation.

Before you begin testing, **please read the [A11y Project's quick tip on keyboard navigation in MacOS](https://a11yproject.com/posts/macos-browser-keyboard-navigation/)**. Safari requires a few adjustments to handle links and form elements properly.

Also helpful:
  - [Getting Started with Keyboard Navigation & Screen Readers (ABC Presentation)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/learning-sessions/abc02-getting-started-with-keyboard-navigation-and-screen-readers/abc02-getting-started-with-keyboard-navigation-and-screen-readers.pdf)
  - [Apple Accessibility: VoiceOver Getting Started Guide](https://help.apple.com/voiceover/info/guide/10.12)
  - [Quick Guide to Using VoiceOver on Mac OS X](http://www.victortsaran.net/quick-guide-to-using-voiceover-on-mac-os-x/), by [Victor Tsaran](https://www.linkedin.com/in/victortsaran)

## Basic controls quick reference:

Function | Keyboard command 
--- | --- 
**VO** key chord | Control + Option
Turn on Voice Over | Command + F5 
Move to next element | **VO** + right arrow
Move to previous element | **VO** + left arrow
Open VoiceOver rotor | VO + U (Press Escape to close) 
Open commands menu (to find other shortcut commands) | **VO** + H + H 
Select something | **VO** + space 
Navigate by headings only | **VO** + command + H 
Read everything from the top of the page | **VO** + A 
Jump to next paragraph | **VO** + P 
Navigate to next focusable element | Tab
Navigate to previous focusable element | Shift + Tab
Select or deselect a checkbox or other control | **VO** + Space

**Helpful Tip**: To temporarily pause VoiceOver's audio, press the CONTROL key to stop the speech. To resume VoiceOver speech, either press the CONTROL key again or perform other actions on the keyboard.


## Step-by-step things you should do to assess

### For all page types

#### 1) Tab through the entire page

Every element that can have an action taken on it should accessible by just hitting the tab key. Every element should have a blue halo around it as you move through the page. The order that you move through the elements should match the visual hierarchy of the page (ie it shouldn't jump from main content to footer and skip past other important pieces).
    
- Tab from beginning to end of page watching the focus and order

#### 2) Navigate by headings should be properly nested and labeled well 

Imagine you can't see the page and reading out headings was your only way to find the section you're looking for. Headings should be properly nested (no heading level is skipped) and labeled well enough to provide context when navigated outside the context of the page.
- Open the rotor `VO + U` and arrow to the headings list
- Navigate the page by headings `VO + Command + H`

#### 3) Navigate by links

Link labels out of context of the rest of the page should be descriptive enough to indicate the destination (no "click here"!).
- Open the rotor `VO + U` and arrow to the links list. 


### If applicable
#### 4) Check loading messages 

- Loading messages should audibly indicate that something is happening.

#### 5) Check tabbed views, pop-ups, modal windows and other interactive elements
- Activate any elements that result in a pop-up or modal to make sure they can be accessed and read correctly
- After using any interactive element, make sure that pressing tab moves to an element that is immediately after where you left off or to an element that’s unsurprising

#### 6) Make sure all elements that _look_ like form elements are coded as such
- Use `VO + U` to open the rotor and arrow to the form controls list – make sure all elements that look like form elements are on this list

#### 7) Make sure all form elements can be interacted with
- Tab through all form elements to make sure nothing gets skipped over
- Use enter key to access a drop down or buttons
- Use `VO + Space` to select checkboxes/radio buttons
 

