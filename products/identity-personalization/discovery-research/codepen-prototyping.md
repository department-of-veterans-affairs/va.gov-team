# Accessible prototyping with CodePen

By Liz Lantz

**Last updated:** April 27, 2024

This document assumes a basic knowledge of what [CodePen](https://codepen.io/) is, and how it works. If you’re brand new to CodePen, you may find [these Google search results](https://www.google.com/search?q=how+to+use+codepen&rlz=1C5CHFA_enUS1035US1036&oq=how+to+use+codepen&aqs=chrome..69i57j69i64l3.1715j0j7&sourceid=chrome&ie=UTF-8) helpful.

## Getting set up with CodePen
- You’ll need to create an account.  Your username will be visible in your URLs, so pick something you won’t mind stakeholders or research participants seeing
- If you can get a paid account, it’s worth it for the ability to use **debug mode**, which:
	- removes ads 
	- takes the prototype out of an iFrame 
	- removes extraneous UI that isn’t relevant to your prototype

## A note on multiple page prototypes
If your prototype has more than 1 page, which most will, you’ll have to create a separate pen for each page. This is similar to creating separate art boards in tools like Sketch. It can be tedious to manage, but makes for a smooth experience as people check out your work.

Once you have your first pen built, you can fork your pen to create the second, third, and so on. When you fork a pen, it creates a new pen and URL with all the same code from your first one. 

Keeping this in mind as you build you first pen is helpful so you only carry over what you need.

## Using CodePen prototypes in research sessions
Here are a few tips that will help a research session go more smoothly when using a CodePen prototype:
1. If possible, get a paid account and use debug mode, for the reasons mentioned above.  Free accounts get limited use of debug mode, but not enough use to be useful in a study.
2. Name all your pens something that makes sense to your team, but doesn’t give clues or bias participants. The prototype name displays on the screen if you’re not in debug mode (we’re not sure whether or not they’ll see it in debug mode).
3. Test your prototype with an assistive technology being used by your participants. If you’re not sure how to do this, ask an accessibility specialist to help.  Leave yourself enough time to fix any issues before your first research session.
4. Be sure the URLs across your docs are for Full View Mode, and not Edit Mode (read the Linking More Pages section below)
5. Be prepared to email participants the URL to the prototype. In our experience, blind and low vision participants prefer to receive the link via email during the session.  For research on VA.gov, our recruiting partner can send the link once the participant has joined the session.
6. Add a few helpful notes to your conversation guide:
- If not in debug mode, give participants a heads up that you’re using a tool for the prototype, and they should disregard the related UI. You want them to  focus only on the content related to your study.
- You can also guide them to dismiss the ad in the bottom center of the screen if it becomes distracting.
- As with any other prototype, make sure you set the stage for people about what part of the website they’re entering, what they may have done ahead of time. eg “imagine you are logged into the VA.gov website and the information you see is your own.” 
- If you want to eliminate the “not their real data” factor from your research data, you could add a few minutes to your session to ask participants for relevant information, and populate the prototype accordingly before you get started.

## Building your prototype
### Start with HTML
1. You can create a new CodePen, or fork an existing one. I think it’s easier to create your own unless an existing pen has components you’ll definitely need.
2. Add any external style sheets in the CSS settings section ([CodePen docs to add external sources](https://blog.codepen.io/documentation/adding-external-resources/)). For VA.gov, there are two style sheets that will be super helpful to have from the beginning:
-  VA.gov styles:  `https://unpkg.com/@department-of-veterans-affairs/formation@7.0.4/dist/formation.min.css` as an external style sheet in the CSS section. 
- [VA-icon styles, if you’ll use any icons in your prototype](https://design.va.gov/about/developers/using-web-components#how-to-migrate-from-font-awesome-to-va-icon)
3. Next, start building the first page of your prototype in the HTML section of the pen.  **When testing with folks using assistive technology, it’s important that your HTML is semantic and accessible so that you don’t introduce any issues that would not be present on the actual website.**. 
- If you are totally unfamiliar with semantic HTML, ask your team’s Front End developer to help you.  It’s a fun thing to collaborate on together!
- If you know how to read and identify semantic HTML, but aren’t comfortable writing it yourself, you may be able to use the developer tools in your browser to pull from the DOM on VA.gov, and/or design.va.gov components to build your page. It’s important that you are able to identify whether or not aria attributes are present and correctly applied as you bring things over.
- **Your mark up doesn’t need to be perfect but it does need to be accessible.** Otherwise you might as well just use an image based prototype 😃
4. If your prototype has multiple pages, you may want to hold off on creating more pages until you add CSS, and any JavaScript you’ll need on other pages, to your first pen.

### Optional: add CSS and JavaScript
You might not need additional CSS or JavaScript for your prototype.  If not, skip this section.

If you need to add some polish to the presentation layer, you can add custom CSS in the CSS pane of CodePen.  This will be included with any new pens you create by forking this pen.

That also applies to JavaScript. JavaScript will be necessary for interactions that don’t take the user on a new page, like triggering an alert after clicking on something. This may be another opportunity for collaboration with a front-end engineer.

### Linking more pages (which are actually separate pens)
Once you’ve got your first page done (or close to it), you can start creating separate pens for the separate pages of your prototype.  

1. Fork the pen via the button on the bottom right portion of the CodePen UI. This will create an identical, new pen.
2. Name your new pen something that makes sense to your team, but doesn’t give clues or bias participants if you’ll be using it in a research study.
3. Update the HTML, and any CSS or JavaScript as needed.
4. Change the pen view to Full Page View from the view menu, in the upper right part of the CodePen UI. Note the URL change.
5. Grab that URL, and use that for the `href` value for any links in your first pen that need to point to this one.
6. Repeat these steps for as many pages as you need.


