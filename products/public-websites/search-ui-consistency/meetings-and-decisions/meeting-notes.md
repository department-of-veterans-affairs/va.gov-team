# Meeting Notes

## 2021-05-11 Design Office Hours - Attending to Clarify Design Pattern Request
### Attendees
- Ryan Thurlwell
- Shawna Hein
- Marci McGuire
- Megan Gayle
- Cassandra Allen 
- Allison Christman
- Rebecca Walsh
- Riley Orr
- Naomi Marcussen

### Notes
- Marci showed a screen shot with the components she believes should be included in the pattern (image is shown below)
- Ryan advised that is exactly what would be included
- Ryan provided additional context around the difference between styles and patterns with a real-world example
- We are creating the "single source of truth" for search
- We are creating a "base" pattern with possible extensions like sub-headers
- Ryan typically creates a minimal version and a maximum version
- Minimum version has all required components that *must* be there
- Maximum version has additional components that are optional if they apply to a particular tool
- It's not necessary to include details like specific spacing, but you should give a particular order that the components must appear in
- Ryan also shared an example with us, and said we could also look at the ones already in the [Design System design.va.gov](https://design.va.gov/patterns/)
- A good example to look at is [Pages](https://design.va.gov/patterns/pages) to see how required and optional pieces are documented
- We can also look at [Form Templates](https://design.va.gov/patterns/form-templates) for usability guidance examples
- Answer every question that a brand-new designer who knows nothing about your pattern would possibly ask
- For the first draft, we don't need to get into the Search.gov typography since it's an anomoly
- Make a generic example for your most bare-bones search results page and strip out everything specific to Search.gov (green type, top recommendations, right rail)
- Take a stab at documenting accessibility, then ping Josh to review and make any recommendations on edits
- Designers are not expected to provide code recommendations
- We don't need to have a developer add the code as part of this exercise.  Storybook is where the code will be kept.


### What Should be Included in the Pattern
- Breadcrumbs
- Title
- Instructions
- Form fieldset
- Search field/button
- Result count
- Sorting (if applicable)
- HRs above/below/between results
- Result information "chunks"
- Pagination
- Division between search component and any content that appears after it (like Frequently Used VA Forms)
- Above components are highlighted in the screen shot below

![image](https://user-images.githubusercontent.com/73354907/117873042-5c05de80-b26d-11eb-8311-f0a1d75a4ed1.png)



### General Notes

## 2021-05-03 Discuss opening items remaining from Design Intent Review
- Horizontal rule placement
    - Cassandra mockups showing how some results have HRs
    - Does anyone have a recommendation?
        - Global has the top recommendations section, the others do not
        - Ryan was purposely not prescriptive; leaving it up to the designers to be consistent.  
        - Solution - They can just get rid of them except where there's a top recommendation and to split the results apart from pagination
        - Josh said he would actually recommend the opposite. A) different treatment of the top recommendation or B) remove the body paragraph information above the link. 
        - Per Megan they wanted to be subtle with the treatment so that peope wouldn't think it was an ad and ignore it
        - Ryan asked if we have full CSS creative control of the search results (we do), and then we make a decision about how important the top recommendations are. 
        - 
- Treatment of headings in search results
    - Consistency of the titles - more of a content thing. "Find a VA Form" - per Ryan that's added because it's a SEO thing.
    - Designers should specify that something is an H1, H2, H3 - just a representative result set
- Form number in front of the link (or not)
    - Josh will follow up on the ticket - we should leave the form number out of the result and just have it above.
- Reducing amount of content above search fields
    - Some have verbose instructions and some don't.
    - Ryan - we're getting into the UX aspect; we will table it for this discussion.
- When/how we should address the search field itself:
    - Having a magnifying glass on button (global search, R&S) vs. not (Find VA Form)
    - Inconsistent spacing between text field & button
         - Spacing in Find a VA form will be different because it has sort option that the others don't.
    - R&S button that stays inactive until three characters are entered, others are always active
    - Ryan is fine making the search consistent, but not removing the gray box because it directly affects the mobile experience on Resources & Support - he'a also fine with making the button fully active on R&S. 
- The collaspsed search at the top - Josh asked Ryan if that could possibly be managed by focus control.  
- Gray box around field - we're going to try it out.
    - It's helpful for the developers to say "this should be x many spacing units to the user's eye"
 - H1s and breadcrumbs - Mikki saw there were some changes from the last time.
    - One thing to be cautious of - in R&S, you are going to get the search results on a separate page. Global search redirects back to the home page. 
    - On Find a VA Form, parameters are added, but the H1 never changes.  Josh and Mikki will discuss later.
        - On mobile it should only show Home

## 2021-04-15 Review Comp Updates

### Topic
Review comps Cassandra updated for Find a VA Form, Resources & Support prior to next week's design intent review

### Attendees
- John Hashimoto, PO
- Marci McGuire, PM for Decision Tools Team
- Brian Lloyd, PM for Public Websites Team
- Cassandra Allen, Designer for PW/DT

### Notes
- Cassandra reviewed the updates she made
- They are posted in inVision now.

### Action Items
- Cassandra and Megan will compile a list of questions and include that in the ticket so the reviewers can see ahead of time
- Marci will insert the inVision links into the body of the ticket


## 2021-04-15 Internal Design Review

#### Attendees
- John Hashimoto, PO
- Denise Coveyduc, PM for Search & Discovery Team
- Marci McGuire, PM for Decision Tools Team
- Brian Lloyd, PM for Public Websites Team
- Cassandra Allen, Designer for PW/DT
- Megan Gayle, Designer for S&D Team

#### Notes
- Megan & Cassandra will show their spreadsheet in the design intent review to set stage for why this is needed
- Megan doesn't have all of the states in her comps yet
- Megan & Cassandra will point out the differences in the elements that they observed
- Megan will share her comps first since it's global search
    - They are not showing the right rail because it's being discontinued
    - The green link text is consistent across Search.gov and cannot be modified.
- Cassandra will share next
    - Josh Kim confirmed that the underline should be added to any title hearder links.
    - Cassandra will add the sorting element and number of results back before they attach the link
    - I'll be curious of Josh's feedback on the hover.
    - Cristabell provided the icons.
    - Cassandra purposely picked the longest link 
    - Search term is one of the smallest thing on the page. Any latitude to make the title link smaller so it's not so overwhelming?
    - Cassandra will change the label to "Go to Online Tool"
    - Point out that the online tool button shifts on hover
- There is opportunity for these changes to be applied to Yellow Ribbon and other tools as teams have capacity/prioritize
   - Button on YR is green, doesn't have a search icon
- Form intro inconsistency -  need feedback from Design review - should those be re-displayed when the results are shown?
- Also point out lack of consistency in collapsing elements into a menu on mobile
- Intro text should still be displayed on Resources & Support when you initially land on the page
- R&S Beta banner will display until it hits a certain level of content (75-80% search success rate)

#### Action Items
- Add the sorting element to Find a VA Form
- Add number of results to Find a VA Form
- Change the online tool button label textto "Go to Online Tool"
- Add intro text to Resources & Support when you initially land on the page
- Designs will be uploaded to inVision and attached as artifacts to the Design Intent Review ticket. https://github.com/department-of-veterans-affairs/va.gov-team/issues/22885

## 2021-04-09

#### Topic
- Design intent review
- Overview of project scope
- Current status of each design
- Date for design intent review
- Documents needed

#### Notes
- Brief scope overview
- Cassandra's update
    - Headers do need to be updated to have a link underneath per Josh Kim's feedback
    - There will be a separate ticket for R&S mobile per John to make it match the other mobile

- Megan's update
    - Adding an underline as well
    - Has also noticed there's a width difference

- Leyda's update
    - They did an audit for link styles and buttons
    - They did a review of the Facility Locator - font style differences; pretty minor
    - They probably align the least we well for some of the layout stuff.  Don't use the same form library

- Design Intent Review Timing
    - I have not put the request in yet; they ask for a date and time. 
    - Leyda needs probably another week
    - Early the week after next.

- Michelle - questions, concerns?
    - Are VAMC pages in scope?  
    - Leyda identified all the buttons that needed to be changed
    - Link styles - gets a little muddy. It's a decision we need to make. Do they want to update all the VAMC pages?
    - Marci asked if it would it be reasonable to just do a representative page for VAMC with the various pieces that could potentially appear.
    - Facility locator input field is currently bold.  Style guide is to unbold.

#### Decisions
- Implementation of the UI changes will be done as each team prioritizes and has bandwidth to roll them into their products. 

#### Action Items
- Complete Product Outline (Marci)
- Schedule design intent review (Marci)
- Gather design artifacts (Marci, Cassandra, Megan, Leyda)
