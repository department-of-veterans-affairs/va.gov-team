## Sprint planning meeting notes

1. What are the buckets (blue and gray)? How can these be made clearer for users (e.g., refills ready, upcoming refills)
2. When is something in “active” vs “history”? Can a prescription be “active” but not have any pending refills? Is there a third bucket for “recently expired”
3. If we keep a checkout flow, can we use that page as a confirm & submit + “contact us” for address changes or questions.
4. Design brainstorming exercise: How could we streamline the process to request a refill so that the burden to the veteran isn’t increased if we require a user action for each prescription refill (i.e., no “select all/many” option)?

## Next Steps

- [ ] Make a version where you can add prescription refill individually
- [ ] Make a version where you can add multiple prescription refills at once
- [ ] Make version(s) with different options for active vs history vs. expired. 

## Mary Ann's Notes

Active vs. Ready for Refill

- Difference between Rx in the blue vs Rx in the grey? and the labeling of both of them? I'm not sure what active Rx means. How should the user be thinking about the ones that are blue vs. the ones that are grey.
- (This came up a number of times!)
- Add refill is on the active ones that aren't ready for refill yet -- maybe it could say the day that they become available. Something like "Refill available x day in the future"
- Ready for refill vs. upcoming refills
- Maybe a recently expired Rx that you need to take an action on should be blue as well - to show that you need to take an action on it.

"Medicines"

- Medicines feels awkward

Drug Descriptions

- Drug descriptions: I'm not sure that there are descriptions that are 2 words, and don't know where to get that info and if it's accurate?
- FDA?
- Don't think we can get that data
- Is an Rx prescribed by an actual doctor (yes.)

Sort:

- sort by refill expiration seems to only be for active medications -- how does that work?

Refill all:

- We would have to do multiple post requests -- there's not actually backend functionality to do refill all

Refill added

- would the user know that it's been added?

Cart

- Could we copy amazon and just have a cart? I think people are used to that.
- Batching things in a cart opens up a lot of edge cases on the backend. [Will need to talk about this.]

History

- What does history mean?
- How do i know the difference between current and history (from a data perspective?) What if there's a recently expired option?
- We could probably compute history using "expired" date

Random

- What if we look at putting the prescriptions in a grid and then have a "status" column
- What about refridgerated substances? WHat if i need to sign for it?
- Prescription expirations -- do I want to see a list of drugs that are about to expire?
- Warnings, Side Effects, and Interactions -- need to use VA data for this because it might be different than the rest of the VA.
- Somewhere it says dosage and somewhere else it says "dose" and "strength"
- Need to use provider, not doctor to account for nurse practitioners, etc.
- Checkout page feels like it's about reviewing and submitting, not checking out. Maybe we think of this in terms of reviewing and submitting.
- Currently address is not in the API

does the design team think the burden that will be passed to the veteran from moving to single refill from bulk refill is high/medium/low?
Some possible ways to answer that question:
-Brainstorm/sketch possible implementations to see how low the burden could be.
-Get user feedback.
-Something else I haven’t thought of.

Related to #40
