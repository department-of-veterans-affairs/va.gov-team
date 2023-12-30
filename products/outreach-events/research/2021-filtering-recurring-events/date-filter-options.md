# Outreach & Events Date Filter Design Options

### Cindy Merrill, VSA Public Websites team, Nov 12, 2021

## CURRENT DESIGN PROPOSAL

All upcoming (default) |
--- |
Next week (from Dec 5)
Next month (from Jan 1)
Custom
Past events

Design notes:
- *Need an "update filter" button to make the dropdown selection take effect*
- *For the custom option, shouldn't need to click "update filter" twice--Josh should clarify*

![image](https://user-images.githubusercontent.com/69914583/141523494-9a4608a4-435a-4ce7-b76d-9bf08033c66b.png)

Design notes:
- *Add instruction text: "Select the month and day when you want to see events"*
- *The year isn't editable but displayed in static text based on the month selection*
- *There will be a second set of optional month and date selectors; add labels for "Start date" and "End date"*
- *Month and Day are required for Start date but optional for End date*

![image](https://user-images.githubusercontent.com/69914583/141596571-fb0ab512-233b-4c85-aa25-1d6ab6971099.png)

Design notes:
- *The "filtered by" line should be below the dropdown*
- *How to specify which date filter has been selected after the text "filtered by":*
  - May 30, 2022 *(custom date)*
  - July 1-5, 2022 *(custom date range)*
  - All upcoming
  - Next week from Dec 5
  - Next month from Jan 1
  - Past events


PROS  | CONS
------|------
All options show different filtered event lists (resolves usability issue) | None?
Simple non-numeric options 
Provides ability to enter a custom date and date range per Dave's use cases |
Disambiguates "next week" and "next month" with specific start dates | 

<details>
<summary>Previous design work on the date filter dropdown (Click to show)</summary> 

## Previous Design
We planned to usability test the following new dropdown for date filtering in Outreach & Events. 

![image](https://user-images.githubusercontent.com/69914583/141374307-5076a41d-8aca-46a2-822e-f6a742d12b91.png)

When I started putting together sample event lists for each dropdown option, we encountered a major usabilty problem with the design.


PROS  | CONS
------|------
Design approved by Dave, Collab Cycle | Usability issue: **5 of 7 options will show the same filtered events lists** with all of today's events at the top (Today, Next 7 days, Next 30 days, Next 60 days, All times)
Filters by date (though have to paginate to see it) | **Hard to show the difference in design prototype screens** w/o requiring a LOT of scrolling/pagination by participants, or showing only a few events in the list
"This weekend" shows a different filtered list (though not many weekend VA events) | Missing opportunity for user feedback by showing a design we already know is problematic
. | Prototype has to be more complex with more screens to implement pagination (multiple screens of results for each dropdown option). If skip this, will be showing an unrealistically small number of events.



## Proposed Design Change
Cassandra Allen and I discussed the issue and shared our thoughts with Josh Kim, who had suggested the dropdown options as a more accessible alternative to a calendar date picker. We thought that seeing all upcoming events made more sense than the overlapping and confusing dropdown options we had. 
Without a way to select a date range in the future, showing all upcoming events in one list made the most sense to us. 

![image](https://user-images.githubusercontent.com/69914583/141374442-87e7cdad-a7b4-43c1-8169-81532c73a412.png)

PROS  | CONS
------|------
Usability issue resolved | Functionally similar to the toggle button on Production today
Upgrades functionality on Production to match the VA Design System for accessibility| Dave expects a new design for date filtering, which this isn't
Easy to show distinct event lists in design prototype | Need Design Intent approval, or not because it's the current view options on Production?
Will get user feedback on the 2-option design, which we don't have for the current O&E in Production
Easy for Cassandra to make this change in the prototype
Could easily add "This weekend" as a third option, if desired

## Input from Dave
- Supporting only the existing 2 options for date filters isn't acceptable
- Use cases for "Filter by date" or "Filter by date range" (to provide an alternative to paging through a list of ALL events):
  - As a Veteran I'd like to know what events are happening on Memorial Day (and that's not today) *[events on a specific date]*
  - I have some free time this weekend and I want to know if VA is offering any events of interest to me *[events this weekend]*
  - I'm planning a trip between Christmas and New Years and I want to know if there are any events that I would be interested in attending and plan my trip around that *[events in a date range]*
  - *(future)* What events are happening around Veterans Day in Washington DC? *[filter by date and location]*
    
## Design Heuristics
- Avoid numbers in dropdown options (e.g., 1-10 days from now, 11-30 days from now) because too much cognitive load for users 
- Want dropdown options to show different-looking event lists (i.e., not all starting with today's events, like All, Today, Next Week, Next Month) 



## More Ideas Generated

![image](https://user-images.githubusercontent.com/69914583/141520026-f387c05d-d029-4715-8051-3b4fae5de3a8.png)

![image](https://user-images.githubusercontent.com/69914583/141523494-9a4608a4-435a-4ce7-b76d-9bf08033c66b.png)

![image](https://user-images.githubusercontent.com/69914583/141596571-fb0ab512-233b-4c85-aa25-1d6ab6971099.png)

[See a draft of the interactions in Sketch](https://www.sketch.com/s/25f54f74-b1c5-400f-8869-e75633071149/a/dl7rO9L/play)

PROS  | CONS
------|------
Simple non-numeric options | 3 of 6 options (All, Today, This week) still show the same filtered event list at the top (i.e., today's events)
Provides ability to enter a custom date (day/month/year or month/year or year), per Dave's use case |
Disambiguates "next week" and "next month" with specific start dates | 


![image](https://user-images.githubusercontent.com/69914583/141516048-8c602c8a-1993-4b44-b112-8e1e3dc72d9f.png)

Below is some previous brainstorming with Josh Kim. Some designs have the same usability issue as above, and others seem too confusing/overwhelming for users with so many numbers.

![image](https://user-images.githubusercontent.com/69914583/141500204-f97baabf-5c2b-47af-8881-a39c39484244.png)

![image](https://user-images.githubusercontent.com/69914583/141500559-8605a112-ec55-4234-8e76-ca217d3c4842.png)

![image](https://user-images.githubusercontent.com/69914583/141500710-e1c91633-4b1a-4e90-8f28-d6095c7692ad.png)

</details>
