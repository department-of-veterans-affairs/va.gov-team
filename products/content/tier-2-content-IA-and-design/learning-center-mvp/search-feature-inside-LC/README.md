
# Learning center search functionality

This folder is to document findings, requirements, and implementation, and other information related to configuring Search.gov as a tool inside the learning center. 

__Search product owner:__ ~John Hashimoto~ Per new decision during 1.1 phase, we decided RS/learning center search will remain with the public website team (rather than John's new search team. 



## 12/31: Summary of new filter & sort ranking logic, [per ticket #16915](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/16915)

See Kelson's Slack explanation for full thread details. [Reference Slack thread]: (https://dsva.slack.com/archives/C52CL1PKQ/p1609428369068400?thread_ts=1609428198.067300&cid=C52CL1PKQ) Currently the filtering and sorting logic is separated, the work I did was purely sorting.

__1/ Current filtering logic is:__

- Lowercase the article's title and split up into a list of words
- Check to see if any of the search term words match the beginning of any of the articles' title's words

__2/ Current sorting logic is:__

- Sort first by query word instances found in title descending
- Sort ties then by query word instances found in body text descending 
- Sort ties then by alphabetical descending

Note: Body text of article includes the intro text and the article body (and excludes global component layers such as VA benefits, Related information, Need more help)

If we were to modify the filtering logic above to include search query instances in both the title and the body text, and THEN sort, we could potentially bring back many more results, both relevant and irrelevant, though they would be sorted by relevance based on number of instances. 

For now, we decided we will go live with the current [#16915](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/16915) logic, and watch user search refinement behavior in RS data. It will also be helpful to see how the #16915 logic affects search with more content being added. 



## 10/30: Summary of decision to change to client-side search for 1.0

Nick Sullivan: 

Summary is that we went with a client-side search instead of a search.gov-powered one. Reasons for this -

Search.gov-powered search would have required many action items immediately post-launch to index the pages and test a brand new search tool. This carried with it many unknowns and became an increasing source of anxiety for engineering.

Search.gov's search response data carried with it several limitations - no article category/tag data, no ability to search by category/tag, ellipses scattered throughout the article description created an odd/inconsistent experience, etc.

MVP rollout was defined to include about 25 articles - this is a very limited set of pages, opening the door to a client-side-powered search.
Engineer realized the possibility of a client-side search after learning the MVP would be scoped to only 25 articles and exploring this strategy by generating a JSON file representing the entire LC search dataset. This was immediately actionable; had no unknowns; has data in sync with Drupal in terms of rollout (page data updates immediately once content is deployed) and has access to any Drupal fields, including article category; and opens the door for an instant lookup after the initial search is performed, as their are no external dependences or network requests sent from the browser (besides the JSON file on the page load.)

Ref

erence ticket: https://github.com/department-of-veterans-affairs/va.gov-team/issues/14288#issuecomment-718787849


## Summary of call with Search.gov on 9/18

https://dsva.slack.com/archives/C0173CAJ7A6/p1600459778011100?thread_ts=1600183994.185700&cid=C0173CAJ7A6

Recap:
1/ Yes, they can do a product level (specific directory) search. Dawn mentioned “Collections” search feature.

2/ RE content type labels that we want to display on results listings: they can’t do this now but they have some of this capability that they started which would involve including the content type labels as meta data for their search API. 

3/ Content tags (e.g., "women Veterans," "claims status," "service dogs," etc.): this would be done via the meta data “tag” field. Today, the search would bring back anything that was a) tagged with X as well as b) any article that used the word/phrase X on its page (even if it wasn’t specifically “tagged” with X.

For #2 and #3 - search.gov is close, but not ready. Dawn will review her team and backlog bandwidth and confirm/provide an ETA with John.


## WIP LC search findings

[Ticket #9937](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9937)

- **Can search.gov be configured for a product?**  Yes, [leveraging the existing directory indexing capability](https://search.gov/manual/domains.html), it is possible Search.gov could power this feature.

- **How do we configure search.gov for learning center product?**  Assuming learning center content is structured in the same index-able format as is VA.gov content, use the configuration manager via our Search.gov accoun to list the Va.gov/folderNote: this will include all sub-folders (if they exist).

- **What is the LOE to configure search.gov for the learning center?** At a high level, this looks like a fairly easy implementation/configuration -- e.g., can be completed in one sprint.

- **What kind/s of effort is needed - FE, BE, content?**   FE engineer can configure this via Search.gov admin panel.

_To validate our assumptions about implementation, we will need more details about Learning Center -- in particular the content and folder structure._
