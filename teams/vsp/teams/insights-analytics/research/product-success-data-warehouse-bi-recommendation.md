### Data Warehouse Recommendation

#### Problem
Insights is not able to extract historical data from Prometheus, which houses data for only 2 weeks to 1 month, and the accuracy and availability of stored data depreciates over time.
Based off of our front end proof of concept, there are multiple metrics that we will need to spend a significant effort to retrieve, can’t access accurately, or can’t access at all.
Whether our ultimate tooling solution is creating our own custom front end, obtaining a BI tool, or manually pulling charts ourselves, we would be missing out on crucial data points to evaluate product success without a data warehouse solution.
Click here to see which success metrics we can’t access without a data warehouse & why.

#### Goal
Obtain and maintain a data warehouse so that we can consolidate our data sources into a common infrastructure, increase opportunity for automation and scalability, and operate as a single source of truth for VFS data solutioning.

#### Risks
_For obtaining a Data Warehouse_

- Variable Costs: Storage and processing costs are determined by the amount of data stored and the frequency by which they are refreshed to the BI tool. The structure and volume of Call Center and PA&I is currently unknown.
- Technical Maintenance: Depending on the data warehouse chosen, building and maintaining a data warehouse can result in high overhead.

_For not obtaining a Data Warehouse_
- Scalability: Cannot efficiently and scalably pull data from various tools into reports.
- Historical Data: Data aged longer than 2 weeks-2 months from backend sources, such as Prometheus, would not be available or would be deprecated.
- Accurate, Trustworthy, & Valuable Data: Google Analytics data would be sampled and calculated data (such as % difference from baselines to targets, the time it takes for VA.gov users to complete forms) would be a high effort to produce and would lose data integrity without a data warehouse.

### Proposed Solution
BigQuery has the best out of box integration for the data that we currently have access to with the least amount of effort for production and maintenance. 

[Cost Benefit Spreadsheet](https://docs.google.com/spreadsheets/d/1tYzIGe3bWug8Ryy0MuaJ3ubNhPrYxSIxW_hGXEw0FYI/edit#gid=0)

#### FAQ
_Why can’t we just use a BI tool to store the data?_
While it is possible that some BI tools offer data storage services, in general, Business Intelligence tools handle the front end or the view that connects to a data source. A BI tool, as with a custom Front End solution, still requires querying to retrieve that data.

_What is the difference between a database, a data warehouse, and a data lake?_

All three are designed to store data, but in different ways:
- A database is not optimized for computing analytics, and is optimized to monitor real time data. Examples: Salesforce and Prometheus.
- A data lake is not optimized for computing analytics, and is optimized to store a lot of data since it is best for unstructured data (not needing to clean and prepare the data for storage). 
- A data warehouse is optimized for computing analytics; it can create a layer dedicated to and optimized for analytics on top of a database or multiple databases. The main advantage is that a data warehouse contains many sources and potentially many databases while being the one place to analyze them all, thus being one source of truth for data. For example, a data warehouse would integrate relevant data from the Prometheus and Salesforce databases as well as other static data into one source of truth.

_Why isn’t everything out of box functionality?_

- In order for the data to be meaningful, the data is fairly custom: varying data sources and specific metrics that need to be calculated separately from the tools that capture them. No solution that we have researched so far offers a perfect solution for out of the box functionality for every data source we have.

_Why is there still implementation work involved with out of box functionality?_

- Even without of box functionality, the various metrics (such as calculating submission errors and user time to complete VA forms from Google Analytics) will still need analysis before being shared. The point and click out of box functionality pulls raw data from Google Analytics, which still requires additional calculation before bringing into a BI Tool. 

_What does effort for set up look like?_

With any 3rd Party tool, the main efforts would be:
- Reading through documentation to understand how it can be used
- Defining how we are going to use it to suit our technical needs
- Connecting and ETL for dataset sources
- Connecting the warehouse to the front end solution (either the custom front end or a BI tool) to lead to data visualization

_Why are we using batch instead of streaming data?_
-  Our mission is to facilitate management of targets and metrics on a monthly basis over time. Reviewing this information sprintly or monthly will help inform the direction of the product and measure the success and failure of our goals. 
- Live data is not a planned feature of this tool as it would be added effort that distracts from encouraging long-term product decisions based on short-term data.
- Streaming data would present additional out-of-pocket costs and technical resources to manage and would require a data engineer to monitor the pipelines
- We do not recommend starting with streaming processing for our current project because of the mismatch in intended use and technical overhead.

_What type of values will be stored in the data warehouse?_

- Google Analytics:
   - Client ID: Anonymous, randomized browser ID used to stitch together users, sessions, pageviews, and events within Google Analytics. More information can be found on https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId; Sample value is “702334865.1537978921” 
   - Hit Timestamps: The individual date-time of each pageview and event, which helps calculate frequency and engagement of content and interactions; Sample: hits.hour=15 and hits.minute=30
   - Pages: The URL and page title and the total pageviews generated; Sample: https://www.va.gov/pittsburgh-health-care/
   - Events: Name and frequency of user interactions; Sample: Navigation - Zone One - ->/health-care/refill-track-prescriptions
   
- Prometheus: Metrics to capture percentage of downtime for backend systems
- Foresee and Medallia Customer SatisfactionQuantitative and qualitative customer feedback scores; Sample data:Quantitative: 1 out of 5; Qualitative:  I can't rate the site when I don't know about it. 
- Salesforce: Frequency of call types organized by category, without personal information; in MVP Analytics-Insights will be mapping to more specific product areas; Sample data:Call type=General Information

### Business Intelligence Platform Recommendation

#### Problem
VFS teams do not have a holistic way of accessing and analyzing data about their products to make timely and informed decisions. 

Based off of our front end proof of concept, a dedicated Analytics-Insights front end engineer will need to continue to build, clone, and maintain the Product Success Tool. The tradeoff between a custom solution vs. a paid tool is the resource investments of building a tool vs. purchasing licenses to an enterprise BI solution that is already on the market.

#### Goal
Select a business intelligence platform that will allow for easy access to accurate and timely data and will scale as we introduce new data sources.

#### Risks

_For developing a custom tool_

- Speed to Market: A custom visualization platform by the Analytics-Insights team’s frontend engineer would require time to continue connecting to data sources, building out visuals, and tailoring targets to each product team which could take several sprints
- Scalability: As new VFS product teams are onboarded or product targets evolve, the frontend engineer would need to create and/or overhaul the tool

_For purchasing a paid tool_
- Cost: Purchasing a paid tool would be an out-of-pocket investment for VSP and technical overhead would then spread the work from the frontend engineer to other members of the Analytics-Insights team to build the charts
- Not Fully Customized: Many of the platforms allow embedding of visuals in a custom website, but the chart types and styles will not completely match the visuals designed in the Gray Sky prototype
- Authentication: Depending on the platform, this may require an additional authentication point for VFS teams

#### Proposed Solution
Domo has the best native connections to BigQuery and other data sources, powerful visualizations, and data transformation capabilities that will allow the Analytics-Insights team to scale the Product Success Tool.

#### FAQ

_What were the main criteria in selecting a paid tool?_

BigQuery integration: Supports integration with proposed data warehouse solution  
Alignment with Gray Sky Visuals: Ability to visualize targets and percentage-difference from target tables
Authentication: Provides options to control authentication on a dashboard and/or chart-level
Embeddability: Ability to insert charts into an internal domain, if we choose to present the charts in a VSP-managed website

The full feature list can be found on Product Success Tool - Solutioning.

_What were the runners-up in the process?_

- Tableau Online: Powerful visuals but does not allow for embedding into other sites; we would need to manage licenses for each viewer. Worth noting would be a lower out-of-pocket costs than Domo.
- Custom Built JavaScript Solution: Complete alignment with Gray Sky visuals and research; Higher resource cost to maintain

_What platforms did not make the final list?_

- Tableau Server: This would place a heavy reliance on the Analytics-Insights team to maintain Tableau server whether hosted on-premises or within Google Cloud Platform
- Looker: Powerful self-service data exploration and custom SQL-like language but not comparable in visualization creation, also poses Safari browser issues unfavorable to Mac users
- PowerBI: Used in other areas of VA, however, editor access available through Windows only
- Google Data Studio: Free platform for connecting to Google Analytics and BigQuery, but setting product targets is non-existent
- Data Dog: Monitoring service intended to analyze backend systems, but not intended to power digital analytics data like Google Analytics or BigQuery
- QlikView: Report creation is not user-friendly

_How does a paid tool like Domo connect to the data sources?_
Domo and the other platforms we researched offer native connectors to BigQuery and other data warehouse
Other native integrations to Google Analytics and Salesforce, in the event that a data warehouse decision is not immediate in the near-term

_Can we place the Domo charts in other VSP-managed websites or in other formats?_
- Domo allows for embedding charts, at an additional cost, into a custom website
- Exports to PDF or PowerPoint are possible within Domo
- Dashboards can also be scheduled
