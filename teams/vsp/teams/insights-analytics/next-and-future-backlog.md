## Google Analytics Next + Future

### Context
- These are items that the Analytics and Insights team should consider pulling into future sprints as we continue our progression to become more of an all-encompassing 
data platform for VA.gov
- With Google Analytics still serving as the primary data source for our KPI Dashboarding, it is imperative we continuously analyze and strategize means for 
improving our data collection, quality, and integrity in the short and long term

### Items to Consider

- [ ] Completely deprecate our OPIA Property 
- [ ] Delete all remaining test production views
- [ ] Continuously iterate on standardizing more design system components and making adjustments as new props for existing components are introduced
- [ ] Further expand standardized analytics according to liquid templates -- design data layer around the purpose of each template and components within
- [ ] Develop content grouping around structured data models -- i.e Schema.org
- [ ] Expand and update cross domain tracking according to most necessary domains
- [ ] Completely eliminate "Product Used" custom dimensions and repurpose for more generalized universal purposes
- [ ] Create Google Analytics views for family member benefits and careers and employment
- [ ] Collect data directly from Search.gov backend into BigQuery
- [ ] Implement globalized GTM tracking for browser language translation -- standardize language ingestion
- [ ] Identify and determine most common query parameters on VA.gov and determine their feasability --> work to pahse-out in order to simplify our cardinality over time
- [ ] Discovery around heat mapping and session recording tools to supplement what GA is not great at
- [ ] Integrate Google Search Console and Bing Webmaster Tools into BigQuery
- [ ] Investigate why we’re still seeing pages with UTM parameters within URLs with anchors -- allowAnchor is enabled by default yet we’re still seeing `utm_campaign` within some page URLs

