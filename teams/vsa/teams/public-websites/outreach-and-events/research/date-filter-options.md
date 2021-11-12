# Outreach & Events Date Filter Design Options

### Cindy Merrill, VSA Public Websites team, Nov 12, 2021


## Current Design
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

## Other Ideas??
If we can come up with any more mutually-exclusive options for the dropdown, we could usability test those instead...
