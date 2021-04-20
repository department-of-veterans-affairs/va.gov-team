# Add incremental builds to existing Content Build
Currently, the process we know as the Content Build generates the entire website - there is no ability to build only a single section or page. This means that when a CMS editor wants to publish a single page revision to the website, the entire website has to be rebuilt in the Content Build process.

Potentially, we could add support for "incremental builds" to the Content Build, which would mean to rebuild only a subset of the website. Ideally, an incremental build would determine and build only the pages of the website that have actually been edited since the previous incremental build. Alternatively, perhaps we could add support to rebuild only pages under `/pittsburgh-health-care/` when an editor with access to that area of the site issues a publish.

## Pros
- Conceptually just adds a feature to the existing Content Build rather than overhauling the project
- Still a static website

## Cons
- If the incremental rebuild is executed via Jenkins the same way as the full Content Build, we would need to address some of "overhead" tasks like Docker container setup, GitHub release, etc. that add roughly 5 minutes to a Content Release. 
- Many unknowns

## Unknowns
- Notoriously difficult to determine the "diff" in order to do an incremental build operation. For instance, when the process begins, how does fetch the CMS data representing only what has changed since the previous Content Build? And once it has that, how does it build the site using that data structure?
- We could consider options like doing incremental rebuilds by having the CMS pass a URL path to the Content Build as a build argument. For instance, `yarn build:content --website-section=pittsburgh-health-care`. This seems more feasible than determining a "diff." However, in the CMS, we would need to figure out the user flow behind a feature like this in order for section-wide publishes to be made available. There could be concerns around editor permissions.
