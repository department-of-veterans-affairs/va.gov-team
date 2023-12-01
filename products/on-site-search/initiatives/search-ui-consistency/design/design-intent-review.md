# Design Intent Review - Search UI Consistency 2021-04-20

| Attendees |   |
-- | -- |
| John Hashimoto, PO | Trevor Pierce, Accessibility
|  Marci McGuire, PM | Noah Gelman, Accessibility
|  Brian Lloyd, PM | Josh Kim, Accessibility
|  Denise Coveyduc, PM |Mikki Northius, Information Architect
| Megan Gayle, Designer | Naomi Marcussen
| Cassandra Allen, Designer
| Shira Goodman | Kevin Hoffman
| Ryan Thurlwell | Allison Christman

## Notes
- Megan presented the spreadsheet of the different elements and styles (search bar, pagination, etc.)
- Cassandra presented Find a VA Form
    - Search bar stayed the same, but the input is no longer bold
    - Talked with Josh about the header link having an underline for accessibility
    - Using Bitter font
    - Need feedback to confirm they are using the correct styling, size, etc.
    - Added action link for the Online Tool
    - Added action link for PDF download
    - Question about action link on focus/hover - outline/gray falls outside the grid
    - Mobile is pretty much the same
- Cassandra presented the Resources & Support page
    - Noticed that the search button is disabled until someone types in 3 characters. 
    - Removed the gray background so that all the search bars were consistent
    - On mobile - the search bar area was hidden under a menu on R&S so they talkd to Josh about it and he wrote up his recommendations
- Megan presented the Global Search page
    - Wasn't really using the style guide at all
    - Left the green text (non-clickable) consistent with the rest of Search.gov
    - Question on mobile - currently there is a right rail to be discontinued, but in the meantime, should we keep the right rail and fix the media queries.

## Answers to Questions/Feedback
- Ryan - You were showing search results, but we were changing the search bar.  Have you considered what those look like before you see results? For instance, on R&S, one reason they collapsed on mobile, when you switch pages, you wouldn't see the H1 change and realize that you'd changed pages.
- Cassandra - they weren't sure because it wasn't collapsed on the other two search pages, so they tried to make it consistent.  Josh tested it and found it wasn't working from a screen reader perspective.  Not sure if it was tested. 
- Ryan - Not sure how detailed we want to get.  He's trying to seperate between search results vs. how you search. 
- Mikki - she's kind of on the same page.  She has high-level thoughts on the different tools and how they differ.  Global search doesn't have an initial state.  
- Cassandra - it's more look and feel, but then they did run into that one difference on R&S, so they weren't sure how to handle it.
- John asked Josh how serious is this accessibility issue for R&S? 
- Josh - wrote some comments earlier.  A) Search is usually a common landmark on a page.  If it's housed in an accordion, navigating would take them to the accordian and not the actual search.  He will be happy to provide additional notes after this meeting.
- If we focus just on the aesthetics for this scope, is that OK? 
- Ryan is more familiar with R&S 
- Mikki is concerned that there is enough variations that we may start to bump into 
- Ryan - leave the functionality of search alone for R&S, because search was not the primary focus vs. Find a VA Form.  Also in terms in scope, what are the plans to research the plans.
- Ryan also asked if there were plans to test these with Veterans.  I stated that we cannot test a limited rollout because these are all unauthorized tools.  Ryan said that we could test with comps.
- John - can we do the UI consistency pieces without testing? 
- Is there any way we can differentiate between the smaller items 
- Kevin is curious if there is a plan to observe Veterans using these main search tools to see if there are parts of the UX that can be focused on.  It would be good to have some qualitiative data.  When we observed Veterans using this particular form - like when the button doesn't become
- Cindy's basic task orientation won't get to that level
- Kevin - in the interest of guiding the presentation, you could make a goal to determine how you might determine which parts to make consistent first.  
- Megan - they did a usability study with the search tool and users were focusing on the link header. It is informed by usability studies and following the style guide.  Those results are in the research history.
- Feedback about the right rail? Ryan's off-the-cuff opinion is to leave it and explore.  A future sprint might be deciding what to do with the content in that rail since it's going away. 
- Kevin - If it is doing a (UX) job, I would suggest leave it, but I’d be curious to see in research what Veteran’s use it for.
- Kevin - was the search study done just on Global search?  Megan - it was done on several tools.
- Kevin - did you observe people moving from Global search to Find a Form search?  Yes. One or two times they were able to see the link, but otherwise they used global search to type in the form name.   Kevin would like to know more about how people move from the general to the specifics.
- John - we have analytics that show the right rail is used very little
- Mikki - there were questions about the font on the heading.  Cassandra - all their questions are listed in the ticket.
- Mikki - make sure you're using the blue action links if there are multiple action links.  There should only be one one green action link on a page.
- Josh - most of the feedback for accessibility has been included in the ticket. Trevor and Noah agreed with Josh's assessments.
- Ryan will write up the differences between the search features.
- Cassandra reiterated that all of her questions are in the ticket, and Crystabel has answered them.

## Decisions

## Action Items
