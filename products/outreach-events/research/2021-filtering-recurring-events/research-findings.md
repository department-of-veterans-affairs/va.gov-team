# Outreach & Events Usability Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE) and VSA, Public Websites**

Date: 12/16/2021

Cindy Merrill [cindy.merrill@adhocteam.us]

<br>

**Jump to:**

[Hypotheses and Conclusions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/research-findings.md#hypotheses-and-conclusions)

[Key Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/research-findings.md#key-findings)

[Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/research-findings.md#recommendations)

[Further research needed](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/research-findings.md#further-research-needed)

[Appendix with screenshots](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/research-findings.md#appendix)

[Who we talked to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/research-findings.md#who-we-talked-to)

<br>

# Research Goals

The purpose of this research was to get user feedback on the following **2 new design features** for Outreach & Events:
1. Filtering by date
2. Viewing recurring events together 

# Research Questions
1. How intuitive is our design for filtering by date range? 
    1. What do Veterans think about the options for date range? 
    2. What do Veterans think about filtering by a specific date and a date range?
3. How intuitive is our design for recurring events? Do Veterans understand that the event is repeating?
    1. Are Veterans able to register for individual events in the series of recurring events?
4. How do Veterans expect to look for VA events?
5. What kind of location information for events do Veterans want to see in the list of events? (e.g., virtual/in-person, city, address)
    1. For in-person events, what specific information is expected? (i.e., is "city" enough information, or also want street address?)

# Methodology 
We conducted hour-long remote moderated research sessions via Zoom on **December 1-6, 2021**. Research participants were asked about their experiences with VA events, and then they were given tasks to do using a mobile design prototype in UXPin. 

We talked to **7 Veterans and 1 Caregiver** and asked them each to interact with the mobile prototype on their smartphone. 

# Hypotheses and Conclusions
1. Veterans will understand how to use date filters to find events they are interested in.
    1. MOSTLY TRUE: Participants understood how to the use the date filters, though there was some confusion about the meaning of the _Next week_ and _Next month_ options.
1. Filtering events by date will enable Veterans to find events that fit in their schedules.
    1. MAYBE TRUE: Participants were comfortable using the date filter, but that's not how they wanted to look for events, especially when they didn't know when specific events might be. They preferred to filter first by location, type of event, and/or keyword (search).
3. Seeing which events are recurring will enable Veterans to register for all events they're interested in.
    1. PARTLY TRUE: Participants found the button to register, but there was some confusion about _which one_ of the occurrences they were registering for. Two participants expected to register for multiple occurrences at the same time by checking off which one(s) they wanted, which wasn't supported by the prototype.

# Key Findings

## Usability Successes
1. Recurring events
2. Location information in the event list
3. Use of the _Apply filter_ button (for accessibility)
4. Date entry via dropdowns

## Usability Issues
1. _Next week_ and _Next month_ options for the date filter
2. Registration for recurring events--which occurrence(s)?
3. Scrolling through the flat list of events
4. Date filter wasn't enough because wanted to filter by location, type of event, and keyword search

# Details of Findings 
Note: None of the research participants had ever seen the Outreach Events page on VA.gov before, and only 4 of them had ever attended a VA event. Of those 4, one signed up in person at the VA, one was signed up by their therapist, one signed up through Facebook, and one doesn't remember because it was years ago.

## Usability Successes
1. All participants understood the concept of **recurring events** in the prototype. One participant specifically called out how much they liked seeing all the occurrences on the event detail page.
> _"It was good to have all of the classes listed there [on the event detail page] and hyperlinked so that I could click through them instead of going back and forth [to the event list]" (p4)._
2. All participants appreciated the **location information** provided in the event list--city and state or "online event".
    1. When asked what location information should be displayed in the event list, all 8 participants said they wanted city and state (as shown in the prototype). A few people had additional suggestions, which could be in the event detail page and possibly also in the event list (space-permitting): street address (3 participants), phone number or email address (2 participants), name of facility or building if applicable (1 participant).
    2. One pilot participant suggested adding a "get directions" link that calculates the travel time and distance to the event from the user's current location (as Google Maps does).
3. All participants who used the date filter (which was 7 of 8 participants) had no difficulty using the ***Apply filter* button** (recommended for accessibility so the button changes the view, not the selection of a dropdown option). One person didn't use it at first but then did when they saw that the event list didn't change after they selected a dropdown option.
6. **Date entry via dropdowns** in the _Specific date_ and _Custom date range_ options worked well for everyone. When asked initially what the dropdown options would do, one participant said they expected a calendar to open so they could pick a date, but they didn't mention it later when they selected dates with the dropdowns provided.
> _"You can search for specific dates and customize it" (p1)._
5. Participants found it easy to **navigate from an event detail page to the event list** by using the browser back button (6 participants), the breadcrumbs (1 participant), or *In this section menu > Outreach events* (1 participant). 

7. Six of 8 participants said that they would use the **_Add to calendar_ link** after they registered for the event.
    1. On the same event detail page, 3 of 8 participants said they would share on Facebook, and no one said they would share on Twitter. One of the people who said they would share on Facebook said they would do so to pass along the event to other Veterans, who are friends with him on Facebook.

## Usability Issues
1. Participants generally understood how to use the date filter and its options, except there was some **confusion about the meaning of the _Next week_ and _Next month_** options. These two options were intended to help filter the events displayed from _All upcoming_ to smaller timeframes and thus shorter lists of events, but there were design challenges. If _Next week_ showed events from today through the next 7 days, and _Next month_ showed from today through the next 30 days, then the event lists resulting from selecting _All upcoming_, _Next week_, and _Next month_ would all be exactly the same at the top--today through the next week--which might suggest that the filter isn't working. In order to differentiate the options more, we chose to make _Next week_ begin with the following Sunday and go through Saturday, and _Next month_ to be the entire next calendar month, and that's what the prototype showed.
    1. 6 people understood the _Next week_ and _Next month_ options as is, but 2 people found them confusing because they didn't include the current week/month, which isn't standard usage. Some people tried using the _Custom date range_ option to specify exactly the timeframe they wanted, but the prototype with its limited functionality didn't support that use case.
    1. One participant didn't use the date filter at all because they thought it didn't work. They just scrolled through the _All upcoming_ event list to complete all tasks. 
    4. There were 3 other participants who left the default _All upcoming_ filter for the task that required looking for an event coming up soon, which is a reasonable approach.
    2. Everyone who opened the date filter dropdown readily understood the _Specific date_ and _Custom date range_ options and shared use cases for each:
        1. _Specific date:_
            1. Find an event on Halloween
            1. Find a Veterans Day event
            1. See what's going on in Washington when I'll be there on January 5
            1. What's happening next Wednesday on my day off?
            1. Schedule something else on the day of an existing appointment
            1. I heard about an event happening tomorrow
            1. Wednesday the 12th is open on my calendar
        1. _Custom date range:_
            1. Find an event on Memorial Day, but I'm not sure what date that is, so try May 22-30
            1. Take a course between March 1 and April 30
            1. I'm going to be in Washington for a trip. Is there a blood drive going on while I'm there?
            1. Find events during my vacation time on the week of Christmas
    6. Two participants forgot about _Custom date range_ and tried to use _Specific date_ to enter a date range but found it didn't work. Then they found _Custom date range_ and used that instead--one participant figured this out on their own, and the other first needed a hint from the moderator.
    7. There were mixed reactions to _Past events_. Two participants said it would be useful to see what you missed so you can catch it next time it happens, but two other participants said they'd never look at them.
> _"No one cares about past events" (p2)._

2. All participants readily used the **_Register for this event_ button** to sign up for events they wanted to attend, but for recurring events, there was some **confusion about which occurrence(s) they were registering for**. 
    1. Seven of 8 participants understood that they were registering for only one occurrence. 
    2. Two of the 7 participants weren't sure which occurrence they were registering for but guessed correctly that it was the one at the top of the page.
    3. Two participants expected to register for multiple occurrences at the same time by checking off which dates/times they planned to attend. They both expected the _Register_ button to open a list of all occurrences with a checkbox in front of each one.

3. Most participants had **little patience for scrolling through a flat list of events**. Two participants said that the event list was not welcoming because it's **too plain and boring-looking** with bland colors. Two participants said that it was too much undifferentiated white on the events list, and one of them suggested making it easier to read by shading alternate events in the list (like the default table formatting in Powerpoint).

> _"Too much of everything with random events--like a classified section" (p2)._
    
> _"Just black and white...scroll scroll scroll. Kind of like all other pages. There's nothing that draws your attention to it. Just blue, black, white...page after page after page of just words and information...it just gets boring" (p1)._

> _"I wouldn't have a clue on this site how to look that up. I would probably end up looking under 1, 2, 3, and Next. You'd probably end up having to go through every cotton-pickin' one and press page 2, look, look, page 3, look, look because there's no way to break it down. You'd have to look at every single page and read every one to see if you could find it" (p1)._

4. Seven of 8 participants had **strong negative reactions to finding events with only the date filter** we provided, which is not how they wanted to look for events, particularly when they didn't know when specific events might be. They didn't want to scan down multiple pages of events in the default _All upcoming_ date filter. 
    1. Seven participants instead **wanted to filter by location** (i.e., their state). Two participants wanted an option (i.e., checkbox) to filter online events, too. One participant expected all online events to show for all locations. One pilot participant wanted to see events "near me", from their current location or their home address (if logged in).
    1. Four participants **wanted to type words to search for** (e.g., "yoga", "Veteran jobs", "Memorial Day").
    1. Three participants **wanted to filter by type of event** (e.g., career, health/exercise, social, Veteran _vs._ Caregiver).
    
> _"I wouldn’t filter by date because I don’t know when it is" (p10)._

5. No one mentioned the **"Up to 12 months in advance" limitation** on the two date entry screens, so participants perhaps either ignored it or understood it. One pilot participant was confused by what it meant. One participant expected to enter a year, which isn't needed because of the 12 month limitation. Everyone was able to enter dates correctly without difficulty.
5. On event detail pages, the **navigation link _See other outreach events_** (same as _See all events_ on Production) **blends into the event information** and so is difficult to see. This was pointed out by one of our pilot participants.
6. There were several **confusions with terminology** used in the interface, each of which was mentioned by only one participant:
    1. The **Outreach** heading sounds like charity (i.e., handing out food, clothes to those who need them).
    1. Didn't recognize **G.I.** in the event list because they were looking for the more commonly used word "Veteran" instead.
    2. Didn't think to scan for **career** when looking for an event about jobs.
8. To find VA events, 2 participants said they would **use Google instead of this Outreach Events page** on VA.gov. Other responses were VA.gov (3 people), Facebook (2 people), and email from the VA, MyHealtheVet, or another organization (2 people).
9. One pilot participant expected that all event times would **show in their own time zone**, which would be more intuitive for them than seeing event times in all different time zones.


## Feedback for other teams

1. Two participants said that the **descriptions of events on the event detail page read like ads but were missing important logistical details** needed to help decide whether to register. Examples:
    1. For the yoga event: What type of yoga? What props do I need?
    2. For the career event: Where do you create your profile and what information is needed to do that? What companies will be there? What type of jobs are these companies looking to fill? Where are these jobs located? Should you show up with your resume, or will the event help you put one together? 
    3. How many people are expected to be there, especially if it's a support group? One participant, who's a caregiver for her Veteran husband, said that it makes a big difference for him with his PTSD. Similarly, people with anxiety might want to know how many people to expect and decide whether to attend based on this information.
1. **Some events in the event list didn't have a description**, or what was there duplicated the event title or was too vague to understand anything about the event ("Presented by American Red Cross"). 
2. One participant was concerned about the ease of coming back to register for additional occurrences of a given event and **hoped that their information would be saved so they wouldn't have to enter it every time**. Can we save the information entered previously? Or can we pre-populate the user's contact information if they're currently logged into VA.gov?
3. One participant said they didn't like the **American flag shown in the top left corner** next to "An official website of the United States government" because it's not accurate with the stars not lined up the way they are in the real American flag. Below _(left)_ is the flag on VA.gov with 3 rows of stars that form a  different shape from the stars in the real American flag _(below right from Wikipedia)_ with 9 rows that form a rectangle. (CURRENTLY BEING WORKED ON)

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/images/Amer-flag-VAgov.png"> <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/images/Amer-flag-wikipedia.png" width="10%" height="10%">

# Recommendations
The recommendations for MVP have been discussed with the Public Websites team, and the status and next steps are documented in CAPS.
## For MVP (near term)
1. **Remove the _Next week_ and _Next month_ options from the date filter** because they were confusing for some participants, and the functionality can be supported more clearly and directly using the _Custom date range_ option instead. (DONE)
3. **Remove the "Up to 12 months in advance" text** on the date entry screens because it doesn't seem to be needed. (DONE)
4. **Visually differentiate the navigation link _See other outreach events_** (_See all events_ on Production) from the event description on the event detail page so it's easier to recognize as navigation rather than part of the event description. (DONE. SHOULD MONITOR KPIs AND ANALYTICS TO SEE IF PEOPLE ARE USING THIS LINK TO GO BACK TO THE EVENT LIST OR BOUNCING ELSEWHERE.)
1. Content editors should be encouraged to **include more information about each event**, including the following:
    1. For the event list, include a **meaningful short description that is a concise descriptive overview of the event**. Don't leave this blank, repeat words from the event title, or just say who's presenting the event. 
    1. For the event detail page, provide **logistical details about the event that enable Veterans to decide whether to register**, including an overview of the event, what (if any) preparation is required, what you need to bring/have to attend the event, what you'll learn from the event or do at during the event, and a rough estimate of how many people might be there. 
    1. For the event detail page, if applicable, consider providing the name of the building or facility (e.g., fairgrounds, airport, VA hospital), and a phone number or email for more information.
    - (THESE HAVE BEEN SHARED WITH CMS FOR EVENT EDITOR ONBOARDING. WE SHOULD WRITE AN ARTICLE ABOUT THESE SUGGESTIONS, AND CMS COULD POINT EVENT EDITORS TO IT.)

## For future iterations
5. Consider enabling users to **register for multiple occurrences of an event at once**. (WE HAVE NO CONTROL OVER REGISTRATION SO CAN'T DO THIS NOW. COULD DO DISCOVERY RESEARCH AROUND REGISTRATION EXPERIENCES WE'VE PROVIDED TO VETERANS.)
5. **Add location information to each event in the event list** (i.e., city and state for in-person events or "This is an online event"). (START BY REQUIRING EVENT EDITORS TO ENTER LOCATION FOR EVERY EVENT. COULD DO DISCOVERY RESEARCH AROUND END-USER EXPERIENCE AND EVENT EDITOR EXPERIENCE.)
6. Provide **filtering by location (i.e., state), event type, and search** to better support how participants wanted to look for events. 
    1. In location filtering, show the option of whether to include online/virtual events.
    1. Consider adding the ability to **see events "near me"**, per the user's home address (if they're logged in) or current location (via smartphone).
8. Consider **making the event list more delightful to browse** by incorporating more engaging visual elements; e.g., colored text, shaded alternate rows, meaningful symbols/icons. 
10. Consider including a **"get directions" link** on event detail pages that calculates the travel time and distance to the event from the user's current location (as Google Maps does).
11. Consider **displaying all event times in the user's time zone**.


# Next Steps

With the above recommendations, support the ongoing MVP implementation effort as well as future design iterations.

# Further research needed

We would like to test these design features with participants who use screen readers, which will have to wait until we have a "working prototype" on the Staging server or have launched to Production. 

# Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/conversation-guide.md)

[Interview notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/outreach-events/research/2021-filtering-recurring-events/notes)


## Tools used for Synthesis

- [Synthesis spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/analysis/Outreach%20%26%20Events%20notes%20%26%20data%20analysis.xlsx)

## Pages and applications used

### Prototype in UXPin

[Mobile prototype](https://preview.uxpin.com/18c7e081f0105ed7f34e1b597567279bf74ffc2d#/pages/144514555/simulate/no-panels?mode=cvhidmf)

### Screenshot of Event List
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/images/event-list.png" width="30%" height="30%">

### Screenshot of the Date Filter options
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/images/date-filter.png" width="30%" height="30%">

### Screenshot of Date Entry via dropdowns
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/images/date-entry.png" width="30%" height="30%">

### Screenshot of Event Detail for a recurring event
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/images/event-detail-top.png" width="30%" height="30%">
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/images/event-detail-bottom.png" width="30%" height="30%">

# Who we talked to 
We talked to **8 participants.**

Audience segment:
* Veterans:   7
* Caregivers: 1

Gender:
* Male:   3
* Female: 5

Devices used during study: 
* Mobile phone: 8

Age:
* 18-24: 0
* 25-34: 1
* 35-44: 2
* 45-54: 2
* 55-64: 1
* 65-74: 1
* Unknown: 1

Education:
* High school degree or equivalent: 2
* Some college (no degree): 1
* Associate's degree, trade certificate, or vocational training: 1
* Bachelor's degree: 1
* Master's degree: 1
* Unknown: 2

Geographic location:
* Urban: 5
* Rural: 3

Race:
* White: 4
* Black: 3
* Hispanic: 0
* Biracial: 0 
* Asian: 0
* Native: 0
* Unknown: 1

Disability and Assistive Technology:
* Cognitive disability: 2
* Screen reader: 0


## Underserved groups we haven’t talked to 

This research may not include the perspectives of the following underserved Veteran groups:
* Identify as Hispanic, Biracial, Asian, Native, or LGBTQ+
* Other than honorable discharge
* Immigrant origin
* Expat (living abroad)
* Users of Assistive Technology

<br>

![recruitment-checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/images/recruitment-checker.png)
