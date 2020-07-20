
# Learning center search functionality

This folder is to document findings, requirements, and implementation, and other information related to configuring Search.gov as a tool inside the learning center. 

__Search product owner:__ John Hashimoto



## WIP LC search findings

[Ticket #9937](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9937)

- **Can search.gov be configured for a product?**  Yes, [leveraging the existing directory indexing capability](https://search.gov/manual/domains.html), it is possible Search.gov could power this feature.

- **How do we configure search.gov for learning center product?**  Assuming learning center content is structured in the same index-able format as is VA.gov content, use the configuration manager via our Search.gov accoun to list the Va.gov/folderNote: this will include all sub-folders (if they exist).

- **What is the LOE to configure search.gov for the learning center?** At a high level, this looks like a fairly easy implementation/configuration -- e.g., can be completed in one sprint.

- **What kind/s of effort is needed - FE, BE, content?**   FE engineer can configure this via Search.gov admin panel.

_To validate our assumptions about implementation, we will need more details about Learning Center -- in particular the content and folder structure._
