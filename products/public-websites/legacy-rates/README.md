## Product Outline

Situation
* Rates help Veterans understand payment changes. They might also use for tax purposes.
* We link to historic rates. It’s not a requirement and not sure why it’s necessary. Decided to keep 3 years worth of rates data (to coincide with requirements to keep tax data for 3 years)
    * For certain legacy years, we link to a legacy page on benefits.va.gov. These pages are not overridden and so we link out to these pages.
    * More recent legacy years, however, begin and end on VA.gov. And we overwrite legacy pages with new rate information so there is NO canonical legacy page
* Tier 1 content, which includes rates, is maintained by Public Websites
    

Draft Product Outline 

Current state
* Right now we get an email from a stakeholder who tells us the rates have been updated with new numbers 
* Or they update content on a legacy page and tell us ours is out-of-date

Complication
* Raw rate tables from stakeholders are not close to 1:1 to how we present rates information to Veterans
* Certain “new” legacy pages now live on VA.gov. But, we overwrite old pages with new rates and we no longer have a static page to link out to from legacy rates links
* Some rates are embedded in accordions whereas others are not, which makes it harder to PDF an entire page of rates

Questions
* How do we make the rates easier to maintain?
* How we provide Veterans and others access to rates information that's helpful?

Assumptions 
* Veterans and others actually need legacy rates
* There's no SEO impact of saving legacy pages [like benefits.va.gov does]

Solution Hypotheses
* Legacy rates: 
    * Create an “archive” of all legacy pages off the root with a new year e.g. rates/2019 that would be the old version of the page as it previously was. Involves cloning the older page in Drupal
    * Create a PDF of old rates pages to link out to
* On-going maintenance:
    * Drupal table field 
    * Massive spreadsheet for stakeholders to fill out broken out by worksheet within. Would be manual to incorporate those ourselves.  
    
Next Steps
* Think through problems/assumptions
* Noodle on potential hypotheses

