# Product outline - COPE CMS FAQ library

_COPE (create once, publish everywhere)_

This is a summary of what's needed to expand the FAQs COPE ability. I.e., enabling content editors to `pull from the FAQs COPE library to display q/a texts in other content products` like benefit hub pages, CLPs, and/or VAMC pages.

Most (if not all) of the needed effort would be backend CMS effort.

Reference Slack thread: https://dsva.slack.com/archives/C52CL1PKQ/p1616516472181800

__Note:__ this is for expanding the pulling in ability, not the ability to create new q/a’s in the library. The ability to create new q/a's in the library is currently limited to RS content editors and we will keep it that way for 2021.

## To enable editors to pull existing q/a from the library and display it on non-RS pages, we need to:

1/ MVP: Build a CMS authoring exp interface to display a reusable q/a on a non-RS page.

- Basically adapting similar functionality used today to select and display a reusable alert on a page.

2/ Improvement of MVP: Build a CMS BE functionality and AX interface for sorting or filtering q/a’s by useful categories, so it’s easier for editors to search for the right q/a to pull from the library.

- e.g., sorting library q/a’s by benefit categories (“primary” and “other”), by intended audience, content tags…? 
- Currently these meta data are used only when a q/a is transformed into a RS article, and we would need to enable these meta data at the q/a level vs. the article level.

3/ Add permission restriction to the `Enable standalone RS article` checkbox - so that only RS content editor can specify if a q/a can be used for a standalone RS q/a article.


## Later/future  - to improve creating new q/a’s in the COPE library, we’ll want to: 

1/ TBD: Consider adding a `Make this reusable` functionality, similar to alerts - TBD - use case needs clarification.

- e.g., are there situations when certain q/a’s should NOT be reusable?
- Or should all COPE q/a's be reusable by default?
- I can’t think of a reason when we would want some q/a's to _not_ be reusable, but we should ask the content team. I can imagine if ppl add a lot of q/a’s that are not reusable, we’d end up forcing ppl to create duplicative q/a’s because they can't reuse an existing one that fits their need... 

2/ Build CMS functionality for checking duplicative content when an editor is pulling in an existing -- or creating a new -- q/a

- e.g., showing the editor a list of similar q/a’s that might already exist - based on question text? keywords? benefit category?

## Priorities of products to enable displaying COPE q/a's

1/ The first place for this would be in the benefit hubs - in 2021.

2/ CLPs would be another product that would benefit from being able to reuse existing COPE FAQs - less immediate need than the benefit hubs.

3/ TBD by Dave Conlon for VAMC products (if or when).
