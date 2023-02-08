# Accessible prototyping with CodePen
**Date:** February 2023

This document assumes a basic knowledge of what [CodePen](https://codepen.io/) is, and how it works. If you’re brand new to CodePen, you may find [these Google search results](https://www.google.com/search?q=how+to+use+codepen&rlz=1C5CHFA_enUS1035US1036&oq=how+to+use+codepen&aqs=chrome..69i57j69i64l3.1715j0j7&sourceid=chrome&ie=UTF-8) helpful.

## Getting set up with CodePen
- You’ll need to create an account.  Your username will be visible in your URLs, so pick something you won’t mind stakeholders or research participants seeing
- If you can get a paid account, it’s worth it for the ability to use **debug mode**, which:
	- removes ads 
	- takes the prototype out of an iFrame 
	- removes extraneous UI that isn’t relevant to your prototype

## A note on multiple page prototypes
If your prototype has more than 1 page, which most will, you’ll have to create a separate pen for each page. This is similar to creating separate art boards in tools like Sketch. It can be tedious to manage, but makes for a smooth experience as people check out your work.

Once you have your first pen built, you can fork your pen to create the second, third, and so on. When you fork a pen, it creates a new pen and URL with all the same code from your first one. Keeping this in mind as you build you first pen is helpful so you only carry over what you need.

## Start with HTML
1. You can create a new CodePen, or fork an existing one. I think it’s easier to create your own unless an existing pen has components you’ll definitely need.
2. Add any external style sheets in the CSS settings section. For VA.gov, there are two style sheets that will be super helpful to have from the beginning:
-  VA.gov styles:  `https://unpkg.com/@department-of-veterans-affairs/formation@7.0.4/dist/formation.min.css` as an external style sheet in the CSS section. 
- Font Awesome styles, if you’ll use any icons in your prototype: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css`
3. Next, start building the first page of your prototype in the HTML section of the pen.  **When testing with folks using assistive technology, it’s important that your HTML is semantic and accessible so that you don’t introduce any issues that would not be present on the actual website.**. 
- If you are totally unfamiliar with semantic HTML, ask your team’s Front End developer to help you.  It’s a fun thing to collaborate on together!
- If you know how to read and identify semantic HTML, but aren’t comfortable writing it yourself, you may be able to use the developer tools in your browser to pull from the DOM on VA.gov, and/or design.va.gov components to build your page. It’s important that you are able to identify whether or not aria attributes are present and correctly applied as you bring things over.
- Your mark up doesn’t need to be perfect but it does need to be accessible. Otherwise you might as well just use an image based prototype 😃
4. If your prototype has multiple pages, you may want to hold off on creating more pages until you add CSS, and any JavaScript needed on multiple pages, to your first page.

## Add CSS and JavaScript

## Linking multiple pens
## Using prototypes in research sessions
