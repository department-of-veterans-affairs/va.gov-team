## Showing wait times for Veteran health appointments on VA.gov 

## Problem to be solved

As a Veteran, I want to know *as i am making my appointment* what the estimated wait time will be for that facility/clinic. I do not want to rely on the historical data from the Access to Care website, b/c it is not useful to me. 

Business use case: As the VA, we want to respond to Congress/media complaints that we are not being sufficiently transparent about wait times for appointments at VA. 

## Approaches Discussed

- IVC / OVAC wants to expose the actual clinic grids to Veterans in an unauthenticated and authenticated state, so that they can see when the next available appointment is. 
  - Concerns with this approach: Seeing the actual clinic grid, but not being able to schedule into it, actually introduces more pain points for Veterans. 
  - IVC seems primarily concerned with primary care and mental health; VAOS covers more types of care than that, in addition to community care. 
- OCTO pushed for keeping all personalizable appointment information within VAOS, and enabling Veterans to actually see this information as they are making their requests. 
  - This would require veterans to log in to get the information, but would present it to them in relevant context to getting an appointment. 
    - requirement for unauth version of this wait time info really seems to be for media/Congress/other parties. 
- There is a concept called "[third next available](http://www.ihi.org/resources/Pages/Measures/ThirdNextAvailableAppointment.aspx#:~:text=The%20%22third%20next%20available%22%20appointment,cancellation%20or%20other%20unexpected%20event.)" - *Average length of time in days between the day a patient makes a request for an appointment with a physician and the third available appointment for a new patient physical, routine exam, or return visit exam.*
  - How might we use third-next available in a solution here? 
- How might we use what we learned from open-slot management during the vaccine scheduling to help? 
- Is there an opportunity to do some machine learning forecasting to predict appointment availability? 
- How might we update the community care eligibility API to include wait time information? What needs to be true & available for that to happen? 
- Is the access to care site the right external facing source for this data for Veterans, or is the facility locator a better spot? 

## Next Steps

1. We need to find out the best / most accurate source of data / source of truth about wait time information. 

   1. Start with Steve Eaton's team? 
   2. Who else should we talk to here? 
 

2. OCTO health apps team to meet with Steve Eaton's team to confer and discuss other opportunities in this space along with preferred pathway & timeline. 

   1. Assume Steve will want to take this to the SPEC and weigh against other priorities. 

3. If we are able to find a source of truth on the data, we could consider a preliminary discussion with kimberly about ML opportunities. 

4. Together, Steve Eaton's team and the health aps team should meet with Mary after Memorial Day to:

   1. Demo VAOS
   2. Discuss opportunities 

5. If we think we need to demo this for community care too, we should talk to Dave M & team. 


## Context & Discussion

We would like to meet with you about a very important potential project which revolves around the VACAA legislation requiring transparency to VHA outpatient clinic availability. Do you have time today for a short call?[8:01 AM] Fields, Mary
And I am the director for access data operations and detailed to director of field support--IVC--Integrated Veterans Care office.
It’s about having a place on the My VA site where we might be able to have functionality to show Veterans the actual grids for clinics at their sites. Similar to VAOS but we aren’t ready for them to actually “schedule” appointments yet. If we can’t go this route, we have an ask to point to all request dates in our completed appt average wait times, which will be quite a challenge.

*Tell me more about: “we might be able to have functionality to show Veterans the actual grids for clinics at their sites What do you envision Veterans will be able to do with this informatiON?*

That’s a great question. The law says we have to provide transparency to how long it will take Veterans to get appointments. Multiple focus groups have revealed Veterans state the “average completed appt wait time” data doesn’t help them in any way to plan for their appt. The idea is the grid will show the Veteran where there are open slots into the future for the clinics where they are seeking care. It better satisfies the legislative ask and am not 100% sure what Vets will do with what they see.

*Got it - that is definitely something we would need to test extensively with Veterans. What i’m reading here is that you are looking for a way to Veterans to see availability for planning purposes, but you’re not ready for them to self-schedule into those clinics?*

Exactly. VAOS can still be used to the extent it is presently developed. We would like to further develop it to work for appropriately chosen additional services being represented on the ATC site.

_For [VA.gov](http://va.gov/) and the flagship mobile app, we need to have a single source of truth for appointments, which is the VA appointment tool on [VA.gov](http://va.gov/) (VAOS). I think we can look into the problem of “how do we make it easier for Veterans to understand the potential wait time for their appointment while they are in the process of making an appointment” but we’d need to make sure through user research that any solution we build actually solves this problem._
