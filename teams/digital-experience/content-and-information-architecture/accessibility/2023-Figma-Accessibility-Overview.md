# Figma Accessibility
This information was taken from a comparison done in the Summer of 2023 between Sketch and Figma. 

## General Product Information

### Grids and Page
“**Frames**” in Figma

### Symbols and Components
“**Components**” in Figma

- These are powerful graphics that can be reused dynamically on multiple mock-ups.
- A close to a tie, but the components on Figma open up many possibilities.
- The strength of Figma’s Components lies in the power of its variants and the new “component properties” that were introduced in 2022, with more flexibility and easier library organization.


### Vector Tools
- Neither of these applications has such advanced vector tools as Adobe Illustrator.
- They are perfectly adequate for most UX and UI design requirements.

### Plug-ins

- Your favorite Sketch plugin is probably a Figma plugin, too. You can search and install a plugin from within Figma. No more hunting for plugins on the World Wide Web. 
- Plus, Figma plugins are always up-to-date and never break (because we are in the cloud). Over 3,400 designers are already using the axe for Designers to build more inclusive experiences in Figma.
- Axe for Designers is a free accessibility plugin from Deque, the de facto leader in digital accessibility. Now even easier with the Auto-Annotation Beta. Close the design/development understanding gap with clear, consistent accessibility guidance and annotations.

### Collaboration and Sharing
Figma has real-time collaboration (browser-based), along with "multiplayer" that allows multiple people to edit files and watch someone work.

### Code
- You can choose how collaborative you want to be within Figma's design tool.
- Just like Google Docs, files are private unless you choose to share them with others.
- Sharing Figma files gets you instant feedback via comments directly in your design,

### Prototyping and Automation
- Figma shares prototypes with a simple link.
- Figma is all-in-one.
- Figma now offers [accessible prototyping](https://help.figma.com/hc/en-us/articles/7810391964695-Accessible-prototypes-in-Figma) (desktop only as of 7/27/2023).

### Bugs
Figma on the other hand, is smooth and accessible. Figma Branch system effective.

 ### Migration
 - Migration can be a pain. That’s why Figma built a feature that enables you to import Sketch files into your Figma account. 
 - The importer keeps your layers intact and even brings over your symbols as components.

 ### Platform
- Figma is accessible on both Windows and Mac and there is a web version. 
- You can access Figma via the browser. 
- Files can also be shared and accessed more easily, as long as you have a good connection.

## Accessibility Tool Comparison

### Accessible Prototypes
**While in accessibility mode, Figma design elements are translated to HTML or HyperText Markup Language.**
- **Screen readers** interpret HTML tags to understand the content and sections of a document, as well as which elements are available for a user to interact with on a page.
- **Semantic HTML tags** also allow a screen reader to communicate content that may be highlighted visually to a user.
However, this is for non-mobile prototypes only - hopefully, mobile is not too far behind in beta. 
- **Accessible prototypes are only available in the desktop browser** and on the Figma desktop app. 
- **Accessibility mode does not work for mobile or mobile web prototypes.**
- [Learn more about browser and OS requirements.](https://help.figma.com/hc/en-us/articles/360039827194-Figma-browser-requirements) 

**Words of caution** from [someone who tried it (ref. article)](https://bootcamp.uxdesign.cc/i-tried-the-prototype-screen-reader-in-figma-beta-ceda511d715a) Build your prototype with HTML in mind. Evaluate your user flow carefully. Try it yourself. 

[Content Source: Accessible Prototypes](https://help.figma.com/hc/en-us/articles/7810391964695-Accessible-prototypes-in-Figma)

### A11y Focus Order

This plugin allows designers to annotate their designs for indication of where and in what order the browser should change the focus to. It’s crucial for input types that aren’t cursor based, including swipe-to-focus capabilities on Android and iOS, and any keyboard navigation on a computer. With this plugin, you can select an element and use the plugin to create a focal point. If you need to change the order of the focus, you can do it all in the plugin UI by dragging to change their order and Focus Orderer will take care of renumbering them all on canvas. You can also use the plugin to test and tab through all the elements as well. This is a great way to treat accessibility as a first-class citizen during your design to implementation process.

[Content Source: A11y Focus Order](https://www.figma.com/community/plugin/731310036968334777/A11y---Focus-Orderer)

### A11y

A11y is the the abbreviation for accessibility. Aptly named, the A11y plugin for Figma is one of the most popular plugins. It ensures text is readable for users by adhering to Web Content Accessibility Guidelines (WCAG) and you can also check the contrast ratio of your entire Figma artboard to preview what it will look like on your website or app.

[Content Source: A11y](https://www.figma.com/community/tag/a11y/plugins)

### Able
Able is a plugin designed to check color contrast. It analyzes the color of two objects that you have selected and it updates as you change your selection. The plugin also takes your colors and gives you a text/background preview and an option that enables you to simulate what those colors will look like through the lens of different types of color blindness. You can also swap the colors between the text and background color.

[Content Source: Able](https://www.figma.com/community/plugin/734693888346260052/Able-%E2%80%93-Friction-free-accessibility)

### Color Blind
Color Blind is a plugin designed to help you preview color schemes from the perspective of people with varying degrees of color blindness. By viewing your designs in the 8 different types of color vision deficiency, you can see how each one would change to suit a person with that type of color blindness.
One of the unique things about this plugin is that it generates visuals on canvas based on whatever elements you have selected. The plugin will create duplicates of your design and change the colors to reflect each type of vision in an appropriately named group.

[Content Source: Color Blind](https://www.figma.com/community/plugin/733343906244951586/Color-Blind)

### Contrast Checker
This plugin checks the color contrast ratio of all visible text in a frame, and it provides feedback on whether it meets WCAG’s AA and/or AAA level compliance. It also provides color sliders that allow users to adjust the colors and understand how the corresponding contrast ratio changes in real-time.

[Content Source: Color Blind](https://www.figma.com/community/plugin/733159460536249875/A11y---Color-Contrast-Checker)


### Hemingway
This Figma plugin serves as a rough barometer for knowing if the content is on the right track and is available in the Hemingway app.

[Content Source: Hemingway](https://www.figma.com/community/plugin/760035865558407437)


### Include - Accessibility Notations
Include is a tool built to make annotating for accessibility (a11y) easier—easier for designers to spec and easier for developers to understand what is required. The intent is to have accessibility considerations included during the design phase of any project, and to help with the designer-developer collaboration. Ultimately creating digital experiences that anybody can use!

[Content Source: Accessibility Annotations](https://www.figma.com/community/plugin/1208180794570801545/Include%3A-an-accessibility-annotation-tool/Include%E2%80%94Accessibility-Annotations)

### Stark
Stark includes a set of integrated tools that allows you to inspect contrast levels in your designs with Contrast Checker, discover AA and AAA passing color alternatives with Smart Color Suggestions, experience your design through another’s eyes with Vision Simulations, dig deeper into your project’s colors with Vision Generator, evaluate changes on the fly with our Chrome extension and simplify handoffs with sequences built in Focus Order.

[Content Source: Stark Plugin](https://www.getstark.co/)

### Text Resizer
Text Resizer allows you to precisely understand how the design of your digital content functions when text is adjusted. Text size modification is a common change made by a majority of people irrespective of visual impairments. Allowing the user to adjust text size is a WCAG requirement and is supported by all OS and browsers if implemented correctly.

[Content Source: Text Resizer](https://www.figma.com/community/plugin/892114953056389734#:~:text=Text%20Resizer%20is%20a%20must,are%20legible%20for%20your%20users.)

<hr> 

### Informational Sources

#### Ticket References
- [User Research with Figma Ref. Ticket #62359](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62359#issuecomment-1652769970) 
- [Evaluate Figma's accessibility features per request of the design leads #57911](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57911)

#### Sources Used
- https://www.digitala11y.com/accessibility-tools-and-resources-for-designers/#accessibility-tools-for-figma 
- https://www.sketch.com/vs/figma/ 
- https://medium.com/leboncoin-engineering-blog/sketch-vs-figma-874d8242fa55# 
- https://www.figma.com/figma-vs-sketch/ 
- https://help.figma.com/hc/en-us/articles/7810391964695-Accessible-prototypes-in-Figma

#### Additional Resources
- [Accessible Prototypes in Figma](https://help.figma.com/hc/en-us/articles/7810391964695-Accessible-prototypes-in-Figma#:~:text=Accessible%20prototypes%20in%20Figma%20allow,install%20a%20supported%20screen%20reader.)
- [Accessibility Tools for Figma](https://www.digitala11y.com/accessibility-tools-and-resources-for-designers/#accessibility-tools-for-figma)
- [Figma Plugin List](https://www.figma.com/community/tag/accessibility/plugins)
- [Axe for Designers in Figma](https://www.deque.com/axe/design-beta/)
- [Article: Why Figma Wins](https://kwokchain.com/2020/06/19/why-figma-wins/)
- [Figma Blog Post: The future of design systems is accessible (5/9/2023)](https://www.figma.com/blog/the-future-of-design-systems-is-accessible/)
