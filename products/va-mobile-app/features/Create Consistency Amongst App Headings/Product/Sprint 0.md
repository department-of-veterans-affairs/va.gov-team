## App Headings
Updated: Dec 1, 2022
Link to Epic #4603
Problem Statement
Right now, our heading use is not consistent throughout the app, and many of the new features we're working on have few (if any) headings.


### Current Experience
Pretend that the only thing you could see when you landed on a page were the headings. Could you figure out 1) what information was on the page (is the thing I'm looking for on this page?) and 2) the fastest way to get to that information (to find X, I will look at the stuff under Y heading) - an example slideshow (currently in Google Docs for Ad Hoc as Github will not upload a PDF) 

### Pain Points
See above current experience. 
Assumptions and Level of Confidence
- Headings matter for screen reader users. There’s a lot of literature on this, including several WCAG success criterion and various web postings:
   -  From [WCAG](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html): Descriptive headings are especially helpful for users who have disabilities that make reading slow and for people with limited short-term memory. These people benefit when section titles make it possible to predict what each section contains.
   -  From an [A11y Project](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/) post (about websites, the principles apply to mobile): Headings are the backbone of the content of a page. A visitor should be able to scan the webpage using headings to get a good impression of its content. Heading levels have meaning, especially for screen reader users .... headings [represent] the page content similar to the index of a book: easily scannable and semantic. 


- Headings matter to the mobile team. A few relevant snippets from our current [accessibility standards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/testing/Accessibility%20Test%20Plan.md): 
   -  We will “programmatically specify ARIA level for all text headings in React Native.”
   -  “Screen reader should provide a breadcrumb like page read”
   -   “Headings and labels design should describe topic or purpose and be programmatically determined as such.”
### Risks
- We spend time & energy bringing current screens to a good standard, but fail to future-proof and end up in a similar place for new features in a year
- The modifications we make are up to our standards but don’t improve the experience for Veterans (screen reader users, etc).

### Business Goals
- Re-establish good heading usage across the app to assist Veterans
### OCTO Goals:
- Objective 1: Increase the accessibility, reliability, and security of Veteran’s digital services.
- Objective 2: Reduce the time it takes for Veterans to find, use, and receive VA services.
### Flagship Objectives 
- Objective 1: Veterans will use authenticated services that are highly personalized and valuable
- Objective 2: 100% of eligible Veterans can use health apartment “rooms” most applicable on mobile.
### Roadmap
V1
- Come up with clear guidelines for heading structure: What should have a heading (which sections) and how headings should be written (what content/style for headings)
- Do a full content audit of pages in the app and how they're currently using headings
- Determine if there needs to be any updates to the design library or if this will be a code only fix
- Write tickets for what changes should be made on which pages
- Implement the changes in those tickets
- Document in all the places (design library, documentation site)
- Socialize with the team
- Add automated checks for headings

V2 and beyond
- Ideally, have headings more ‘built-in’ to our design library and engineering components, so future us gets a really good basic approach to headings for free

### Technical Approach


### Measuring success 
- Internal: 
   -  QA team attests that app headings meet our accessibility standards
   -  % of screens with compliant headings (vs non-compliant headings) increases
- External: 
   -  Qualitative:
       -  Positive qualitative feedback in usability sessions and app store reviews
   -  Quantitative:
       -  % of eligible users can successfully complete a task with first attempt goes up on tasks where we implement the headings
       -  Quicker completion of task on tasks where we implement the headings (all users, screen reader users)
	
### Stakeholders
Martha Wilkes

### Important Links
- [Bug that started it all](https://app.zenhub.com/workspaces/va-mobile-blue-team-63483d4e9ff9282a04fef8a3/issues/gh/department-of-veterans-affairs/va-mobile-app/3860)
