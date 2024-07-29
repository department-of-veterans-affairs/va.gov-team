## Performance review research findings

### Usability Testing Feedback

[Link to Spreadsheet with comparison and summary of feedback](https://docs.google.com/spreadsheets/d/1oGzLXnS7PufMpmNSiJ1RFYktB3rt8gmKwXQxZ5jKUqA/edit?usp=sharing)

[Link to Presentation highlighting proposed changes based on feedback](https://docs.google.com/presentation/d/1FTTN1X-t6DfIk9G0GWPKbA92WgZ_SC7_WoaGX0gn_yI/edit#slide=id.g2d1d14c46c5_0_2)

Main takeaways/action items:



1. Clarify definitions and data parameters
2. Change some of content shown in graphs 
    1. High level benefit types instead of specific tools
3. Update metrics that are being shown
    2. Show total transactions in card
    3. Get rid of total search events
    4. Add in mobile metrics
    5. Add in amount of time it takes a user to complete activity
    6. Include top viewed pages
    7. Possibly show transactions by signed in users vs not signed in users
    8. Ensure that all metrics can be populated the majority of the time
4. Remove sorting functionality, it does not seem valuable
5. Remove the sparkline, it seems to be adding more confusion
6. Update storytelling
    9. Put in terms of users
    10. Tell what is normal/expected (benchmark)
    11. Show highlights of traffic, activity, and CSAT so they have the same importance (Reorder information priority)
    12. Clarify why we care about certain data points
    13. Tell people why they might want to care about more granular information
    14. Include snippets from the law that was passed for government in the summary
    15. Move usage details back to main page
7. Design so if additional metrics need to be added they could be


### Midpoint Review Feedback


#### Design Feedback | [Link to design feedback ticket](https://app.zenhub.com/workspaces/collaboration-cycle-reviews-61d89e9e5f4c120011a0ad37/issues/gh/department-of-veterans-affairs/va.gov-team/82268)



1.  Matt Dingee Must: You can use a radio button for "This year" and "This month".
2.  Matt Dingee Should: These circular buttons are not standard buttons, but I see why you are trying to make them different from the download/print. We did add a button icon that is intended for use within a card but it is tertiary, I'd rather you use that for download/share.
3.  Must: If you are using any icons be sure to use the "va-icon" instead of font awesome as we will be making that switch in June.


#### IA Feedback | [Link to accessibility ticket](https://app.zenhub.com/workspaces/collaboration-cycle-reviews-61d89e9e5f4c120011a0ad37/issues/gh/department-of-veterans-affairs/va.gov-team/82297)



1.  Must: If updating page name and URL, work with CAIA on link updates I like the new page name! If it does indeed ends up changing away from Performance Dashboard, the corresponding URL and link text to the product need to be updated as well across the site. Please work with CAIA who can help with updating the link in the sitewide footer (they own the component in Drupal) and for identifying and updating other entry points across the site.
1.  Should: Include a heading inside the Usage details tab, describing its content The Highlights tab contains an H2 doing this; the Usage details tab should, too.

Screenshot 2024-05-03 at 3 31 26 PM



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")




1.  Should: pursue filter-style design for time ranges As-is, the dashboard has two sets of controls (pill buttons and tabs) doing functionally similar things: toggling between views. I recommend keeping the tabs but/and changing the date filters from pill buttons to either a select or radio button toggle, which changes the model from toggle to filter and gives room to grow when the team can add more date options.
1.  Should: use realistic numbers/indicators for testing Not all the graphs will always go up. I recommend including some unsuccessful or red/declining indicators in the design so research participants can get a more rounded view of how the product might look in production.
1.  Consider: move date filters down into tabs content Right now, the date toggles are higher in the visual hierarchy for the page but it seems to me like the big stories here, and the primary ways the team is divvying the content, is actually the tabs, Highlights and Usage details. I would consider moving those date filters down into each tab - so that those tabs become the first choice users make, followed by date comparisons.


#### Accessibility Feedback | [Link to accessibility ticket](https://app.zenhub.com/workspaces/collaboration-cycle-reviews-61d89e9e5f4c120011a0ad37/issues/gh/department-of-veterans-affairs/va.gov-team/82596) 



1.  Engineering note: Follow the accessibility guidance provided by Chart.js, namely that each chart should have an accessible name set by either:
* Giving the canvas a role="img" and an aria-label; or,
* Placing accessible fallback content inside the canvas (eg. &lt;canvas ... >&lt;p>fallback&lt;/p>&lt;/canvas>).

Between these two options, I have a slight preference for role="img" plus aria-label, because I'm a little more confident in how screen readers will announce these. However, if you end up making any of the parts of the canvas interactive (eg. tooltips displayed on hover) then I'm not sure that role="img" is a good idea. If you go down that road, try the fallback content approach and then please ping me in Slack so I can do some tests and give you some interactive chart accessibility guidance.



1.  Must: Whenever possible, the accessible name of the canvas should describe the general trend of the data displayed in the charts you've designed. An example might be "Submissions increasing from 163,000 to 185,000 with month-to-month variation." If that kind of description isn't possible --- either because it's not programmatically determinable, or because the chart is too complex to describe concisely --- then the accessible name should describe what kind of information is in the chart, eg. "Bar chart showing logged in verified users by month, broken down into new and existing sessions" or something similar.
2.  Must: Whenever possible, provide a link immediately after the chart to the raw data to allow users to explore that data to better understand the information. Linking to a CSV file is acceptable here. Note that the link should be descriptive, eg. "Data set for signed-in verified sessions (CSV)" or similar. Definitely include the file type in the link text.
3.  Must: Don't use color as the only way of differentiating information. (Technically, exceptions exist for sufficiently different luminosities, but I think you'll have trouble achieving that with the number of colors you've got in some of these charts.) Two useful techniques for distinguishing between elements in the charts:
* Use patterns or textures, eg. lines, dots, etc. This should be sufficient for the bar charts in the prototype. Make sure that the chart's key includes that pattern in the color sample.
* Use shapes, eg. square, circle, triangle, etc. This should work for the satisfaction rating line chart. Likewise, make sure the key includes the shape.
1.  Must: Whenever you have arrow icons indicating up or down trends, those icons should have alt text (if coded as an img) or an aria-label (if coded as a span or i etc) --- or, instead, those icons should be hidden from screen readers entirely using aria-hidden="true" and you should include screen reader only text immediately after the icon (eg. &lt;i ... aria-hidden="true" />&lt;span class="sr-only">Increase of&lt;/span> 6.3%). All of these are basically equivalent, no strong preference from me on how you choose to do this.
2.  Should: I think your color choices for red and green text look okay, but double check them using the WebAIM contrast checker. Would be great to pass WCAG AAA, but must absolutely pass WCAG AA.
3.  Should: I think some additional context is needed for the Download PDF and Share Link buttons. As presented here, it's not clear what actually happens when you click Share Link, and it's not clear what the scope of Download PDF is (all data vs. data currently on screen). A little text explaining these buttons will go a long way.
4.  Must: When the Share Link button copies the link URL to the clipboard, some kind of feedback needs to be provided to indicate that the action has occurred. My recommendation would be a success alert (maybe a slim alert, though I'd check with @allison0034 on that usage), with the alert receiving keyboard focus so that it's announced immediately by screen readers. There are other options that could work here too --- happy to talk through any ideas you have.
5.  Should: I would highly recommend moving the Share Link and Download PDF buttons into the main column of content rather than where they are now, floating off to the right. Users with screen magnifiers (either software or physical devices on their monitors) typically focus on the main column of content and may not notice anything over to the right if there's not a clear visual indicator to draw their attention that direction.
6.  Must: I'll echo @erinrwhite's feedback --- Some additional headings could provide better structure to both the highlights and details tabs. Likewise, those headings should also describe the timeframe currently displayed.
7.  Must: Echoing @erinrwhite again --- I think a filter approach for timeframe would work better here than just toggling with radio buttons. Ideally, I'd like to see the "Show all benefit types" dropdown on the details tab to be grouped in with the timeframe filter. The actual filter action should be initiated by a button separate from the options, eg. &lt;button>Filter&lt;/button> or similar.
8.  Must: Sortable tables are tricky! My go-to resource here is from Adrian Roselli, Sortable Table Columns.
9.  Should: In the Benefit Type column of the details table, try to avoid truncating text as much as possible.
10.  Must: In the Sat Score column of the details table, each "Read reviews" link will need to have a unique accessible name so that they can be easily differentiated for screen reader users. Using an aria-label or sr-only text is fine here, eg. &lt;a href="...">Read reviews&lt;span class="sr-only"> for Disability - Check VA claim or appeal status&lt;/span>&lt;/a>.
11.  Must: The details table should have a caption element, which functions as the title of the table.
12.  Consider: Shane suggested zebra striping the table rows, and I think that's a great idea. If not striped, consider adding a bottom border to each row.

Whew! That's a lot! Please don't hesitate to ping me in Slack if you have anything you want to talk through (synchronously or async).


#### Content Feedback | [Link to content ticket](https://app.zenhub.com/workspaces/collaboration-cycle-reviews-61d89e9e5f4c120011a0ad37/issues/gh/department-of-veterans-affairs/va.gov-team/82283)



1. Highlights section - The user finds the following sentence: "The VA is committed to providing world class and timely healthcare..." There should be a hyphen: world-class. Please revise to: "The VA is committed to providing world-class and timely healthcare..."
2. Throughout the prototype: logged in versus signed in - There are several instances where the user finds "logged in" used instead of "signed in." According to the Style Guide, we use "sign in/sign out" instead of "log in/log out." Please revise to "signed in."
3. Usage details - The user finds the subheading "Total signed in sessions." There is a hyphen missing: "signed-in." Please revise to: "Total signed-in sessions."
