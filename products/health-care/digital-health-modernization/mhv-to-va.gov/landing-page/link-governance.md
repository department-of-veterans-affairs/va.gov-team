# Link governance | MHV on VA.gov health portal landing page

# Current state (10/26/2023)

* Health tools (boxes on landing page)
  * Link text updates can come from one of two directions:
    * The teams request link text updates from the cartography team
    * The cartography team solicits feedback / reaches out to identify if any changes should be made as tools progress into further phases.
* Additional links (3 columns at bottom of page)
  *  My VA health benefits
  * More resources and support
  * Spotlight links
    * Right now, update requests to our spotlight links come via email request to PO Patrick Bateman and are pushed into the team's backlog as tech debt.
    * Seems to happen on quarterly basis
    * These links are populated via an engineer or technical-minded person editing mhv/landing-page/utilities/data/index.js, where the landing page links are defined. Back in March 2023, there was no identified method to gather these automatically (the content is not created via RSS), hence the manual update process.
