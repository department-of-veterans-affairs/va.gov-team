
# Learning center search functionality

This folder is to document findings, requirements, and implementation, and other information related to configuring Search.gov as a tool inside the learning center. 

__Search product owner:__ John Hashimoto



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
