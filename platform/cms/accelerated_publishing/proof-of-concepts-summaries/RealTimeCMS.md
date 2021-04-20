# Real-time CMS
Two proposed strategies revolve around the concept of exposing the CMS for real-time public access. This means that when a user navigates to a page on the website, the CMS will process that request in order for the page to be rendered.

## Tech summary
Currently, the website exists as a static website, meaning the website is essentially a directory of files that are served from our web host to the user. This type of hosting environment is very fast because no calculations are required. However, in order to produce the website as a static website, a processed we know as the Content Build needs to be run. The files that result from that Content Build then need to be uploaded to the web host. End to end, we refer to this process as a Content Release.

Although once a Content Release is complete all is well, it becomes very difficult to optimize this process efficiently enough as to serve the publishing demands of a large team of CMS editors. For instance, at any given minute a CMS editor may want to publish to the website; then, at the next minute, another editor may want to publish. 

A typical database-driven CMS instance does not have a Content Build - instead, a page's HTML is computed at the time of the request by querying the database. This would mean that when a CMS editor wants to publish their page, they simply publish it in the CMS, and the next time a user navigates to that page, the page will be rendered fresh from the database to reflect the CMS editor's published revisions.

### Coupled vs. Decoupled
As mentioned, two strategies have been proposed where real-time CMS access to central to both. This section distinguished between them. However, the approaches are similar enough to share the key pros and cons in the next section.

1. __"Coupled" Drupal__ - After a user navigates to a page on the website, the CMS itself renders HTML by processing that request, performing any required database operations, then uses Twig PHP templates to render the page for the user. A key advantage of this approach is that it is the most conventional way for a Drupal instance to operate.
2. __Decoupled/Headless Drupal__ - After a user navigates to a page on the website, the user lands on React application, which then fetches data from the CMS and uses the response data to render the page. A key advantage of this approach is that it leverages React, a proven and popular tool for front-end engineering.

## Time estimate
Many sprints!

## Pros
- Ensures real-time publishing by eliminating the front-end build
- Presents opportunity to simplify the CMS integration of the project
- As a bonus, presents opportunity for real-time search experiences of CMS data. This would be useful for apps like Find a VA Form and Resources

## Cons
- Very large architectural change and project refactor
- No longer a static website - we now have to worry about downtime, maintenance, latency, infrastructure, etc.
- Page renders will not be as fast as current website
- ATO
