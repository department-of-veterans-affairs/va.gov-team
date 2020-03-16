# How to use Apple's Voice Over to manually check basic accessibility/usability issues

In addition to automated testing, all of Vets.gov should be manually checked by the sprint teams and then the 508 office.

Safari is recommended for assistive device testing with VoiceOver. Chrome on OSX sometimes generates false positive failures such as not reading labels for `<select>` menus. Safari and VoiceOver are both native Apple products, and are the best pairing for Mac-centric screen reader evaluation.

Also helpful:
  - [Apple Accessibility: VoiceOver Getting Started Guide](https://help.apple.com/voiceover/info/guide/10.12)
  - [Quick Guide to Using VoiceOver on Mac OS X](http://www.victortsaran.net/quick-guide-to-using-voiceover-on-mac-os-x/), by [Victor Tsaran](https://www.linkedin.com/in/victortsaran)

## Basic controls quick reference:
**VO** = `Control + Option`

Function | Keyboard command 
--- | --- 
turn on Voice Over | Command + F5 
move around the elements on the page | **VO** + arrows 
open VoiceOver rotor | VO + U (escape to close) 
open commands menu (to find other shortcut commands) | **VO** + H + H 
select something | **VO** + space 
Navigate by headings only | **VO** + command + H 
Read everything from the top of the page | **VO** + A 
Jump to next paragraph | **VO** + P 
Navigate to next focusable element | Tab
Navigate to previous focusable element | Shift + Tab
Select or deselect a checkbox or other control | **VO** + space 

**Helpful Tip**: To temporarily pause VoiceOver's audio, press the CONTROL key to stop the speech. To resume VoiceOver speech, either press the CONTROL key again or perform other actions on the keyboard.


## Step-by-step things you should do to assess

### For all page types

#### 1) Tab through the entire page

Every element that can have an action taken on it should accessible by just hitting the tab key. Every element should have a blue halo around it as you move through the page. The order that you move through the elements should match the visual hierarchy of the page (ie it shouldn't jump from main content to footer and skip past other important pieces).
    
- [ ] tab from beginning to end of page watching the focus and order

#### 2) Navigate by headings should be properly nested and labeled well 

Imagine you can't see the page and reading out headings was your only way to find the section you're looking for. Headings should be properly nested (no heading level is skipped) and labeled well enough to provide context when navigated outside the context of the page.
- [ ] open the rotor (VO+U) and arrow to the headings list
- [ ] navigate the page by headings (VO+command+H)

#### 3) Navigate by links

Link labels out of context of the rest of the page should be descriptive enough to indicate the destination (no "click here"!).
- [ ] open the rotor (VO+U) and arrow to the links list. 


### If applicable
#### 4) Check loading messages 

- [ ] loading messages should audibly indicate that something is happening.

#### 5) Check tabbed views, pop-ups, modal windows and other interactive elements
- [ ] activate any elements that result in a pop-up or modal to make sure they can be accessed and read correctly
- [ ] after using any interactive element, make sure that pressing tab moves to an element that is immediately after where you left off or to an element that’s unsurprising

#### 6) Make sure all elements that _look_ like form elements are coded as such
- [ ] use VO+U to open rotor and arrow to the form controls list – make sure all elements that look like form elements are on this list

#### 6) Make sure all form elements can be interacted with
- [ ] tab through all form elements to make sure nothing gets skipped over
- [ ] use enter key to access a drop down or buttons
- [ ] use VO+spacebar to select checkboxes/radio buttons
 

