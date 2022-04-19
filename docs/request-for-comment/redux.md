# Using Redux

| | | | |
| --- | --- | --- | --- |
|**Decision Made:**|Yes| **Decision Date:** | 08/04/2016 |
|**Revisit Decision:**| Yes | **Revisit Date:** | January 2017 |

**Revisit Criteria:** The JavaScript community changes very quickly. This decision is worth revisiting in in 6 months to determine if the landscape has shifted significantly. 

**Decision Makers:** @plusjeff @akainic @alexose @webinista @U-DON @ayaleloehr


---

## tl;dr
React applications will use Redux to manage state and data flow. 

## History
The Healthcare Application (HCA) began without Redux for the first ~2 months of development.  During this time, the team created a way for state to flow between components that worked, but it was hacky and as the application grew it became unmanagable. The decision was made to try Redux; the codebase retrofit to Redux was hard on both the person doing the retrofit (Albert) and the rest of the developers working on the codebase. 

Prescriptions began without Redux for the first ~1 week of development. This was done because prescriptions has a significantly simpler data model than HCA and the majority of the Prescriptions team was new to React, so the thought was learning both React and Redux at the same time was a burden that would decrease velocity. The team did well creating individual components during this week, but started to bump up against questions of how to make components talk to each other. That led to a meeting on 8/4/2016 to make this decision. 


## Pros to using Redux

- Established pattern for managing state for components.
- Easier to follow and maintain than a hacky solution.
- Redux is good for complicated state on the page.
- Team uses it in other areas.
- Development community seems to be coalescing around it (that is, as much as the JS community does around anything...)

## Cons

- Redux can be heavy. Why overengineer apps from the beginning if it might not be needed?
- Developer burden to learn (especially if also learning React). 

## Example of an alternative approach
To make the discussion more tangible, Alex Ose created a branch in the prescriptions repo showing how components could communicate without Redux, using the Observer Pattern. The repository where this was created has now been deleted, so this branch is no longer findable, but did once exist. 

## Decision
React applications will use Redux to manage state and data flow. 


---

Below is background written by Alex Ose in September 2016 when researching this decision:

# Woo, Redux!

There are lots of guides out there about how to do Redux.  This is more of a guide about _why_ to do redux.  Albeit, written by a Redux skeptic, who happens to think that HTML 1.0 was the pinnacale and it's been all downhill from there.

## My understanding of why this is a thing

Dan Abramov invented Redux by accident when he was messing around with another project.  He was trying to implement undo/redo (a.k.a "time travel"), when he concluded that the holy grail would be to record each successive state of the application as a javascript object.

This wouldn't work if the application decided to store data outside of that object— in the DOM, for instance— because he would lose track of the change.  It also wouldn't work if there were parts of the application writing and overwriting the object without any kind of oversight.  

Thus, he needed a thing to enforce that the application managed this state object (a.k.a "store") in a reasonable way.  Redux became that thing.

Also, per @jbalboni:  It’s helpful to know that Redux is a simplification of Facebook’s Flux architecture. That’s how they were suggesting you structure React apps, but it’s complicated and jargon-y, and Redux is a much simpler version of it. That’s one of the reasons it took off.

What's neat about his approach is that in trying achieve predictability, it reduces all of the app's functionality down to pure functions (i.e. functions that have zero side effects).  Not only does this make time travel work, and allow for some really interesting [DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) but it means that it's possible to write 100% comprehensive tests that test everything that your application can do.

## And now the bad stuff

While reducing everything to pure functions is extremely cool, it is very different than what we're used to as frontend engineers.  We are used to treating the DOM as the record of truth, and the DOM is a jerk, so we spend a lot of time mitigating weird unintended behaviors.

Redux throws a _lot_ of new jargon at you, and doesn't spend much time explaining why it's necessary to learn it.  On top of that, it assumes that you're up-to-date with a host of new tools and techniques that most people outside of the React world have never used.

Lastly, Redux (the react-redux package especially) makes heavy use of composability.  This is neat and elegant in theory, but it can make hard to debug with traditional tools*.  In this developer's opinion, its key functions are way too magical.

## In conclusion

Redux gives you some amazing capabilities at the expense of some boilerplate and lots of time spent hitting your head against your desk.  I am personally skeptical that the up-front cost is worth it for a small app, but there is no denying that the principles behind Redux are the future of UI development.

*This is also why people don't like D3, in my experience.

**Slack's UI is written almost completely in native jQuery and a special scrolling plugin.  Redux is not necessary to build a quality product that people use.
