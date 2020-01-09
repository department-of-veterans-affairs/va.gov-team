# Navigating Google Anaytics

VA.gov has a premium Google Analytics 360 *account* which houses all of the data for VA.gov. In this resource document, you'll find information on how Google Analytics is structured and when you should engage with Analytics-Insights. 

Within the account, it is broken out into a structure called properties. The properties that VFS teams should use are:

- VA.gov Production Property
- VA.gov Non-Production Property

Each property has its own unique ID, and we route lower environment traffic from our dev, staging, and other non-production environments into a different Property called the VA.gov Non-Production property. We use these environments to QA analytics data before your product is pushed live. 

### Accessing the Properties

In the onboarding process, your PM should request Google Analytics access for you. If you don't see the Production and Non-Production properties available, please reach out to us for further assistance. 

### Views

Within each property, Google Analytics slices information further into Views. These views help us organize data into meaningful sections of the site. 

#### Which view should I use? 
Top-level sections of VA.gov are organized into Views. Here is an overview of how data is aggregated within each view:

- The All VA.gov Production View includes all VA.gov content, including Modernized tools and content, eBenefits, and MHV. 
- The WBC is the Web Brand Consolidation View that houses all of the Modernized tools and content for veterans. 

For Product teams, each Modernized product area has its own view, indicated by a naming convention like "Education Modernized View". Other major parts of the site like MyHealtheVet and eBenefits also have their own views. These views are filtered by subdirectory or subdomain and interactions on these subdirectories or subdomains are then routed to the right view. 

#### When should I reach out to Analytics-Insights for my product's view(s)?

Product Teams should work with Analytics-Insights when there are major changes to the URL structure. For example, if the subdirectory `/health-care` became `/healthcare`, we would work with your team to adjust this before these changes occur. Here are other situations where you will need to submit a ticket: 

1. Your product area might also span another area of the site with a different URL structure. 
1. A new search application has been added to your view (this is rare but might happen)
1. A new product will be launching, and you need to define a goal funnel. 



