## Product Outline

Situation
* Rates help Veterans understand payment changes. They might also use them for tax purposes.
* We link to historic rates. It’s not a requirement and stakeholders could not tell us why they provide rates going back many years, sometimes as much as 10+. 
* We decided to keep 3 years worth of rates data (to coincide with requirements to keep tax data for 3 years)
    * For certain legacy years, we link to a legacy page on benefits.va.gov. These pages are not overridden and so we link out to these pages.
    * More recent legacy years, however, begin and end on VA.gov. And we overwrite legacy pages with new rate information so there is NO canonical legacy page
* Tier 1 content, which includes rates, is maintained by Public Websites. (Note: rates may move to the mvp learning center/benefit support content. At that point, VA stakeholders will likely take over keeping rates updated.)


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
* We need to maintain legacy rate information, for 3 years prior
* There's no SEO impact of saving legacy pages [like benefits.va.gov does]

Solution Hypotheses/Bets:
* Legacy rates: 
    * Create an “archive” of all legacy pages off the root with a new year e.g. rates/2019 that would be the old version of the page as it previously was. Involves cloning the older page in Drupal
    * Create a PDF of old rates on legacy pages to link out to
* On-going maintenance:
    * Drupal table field 
    * Spreadsheet for stakeholders to fill out broken out by worksheet within. Would be manual to incorporate those ourselves. 
      * We'd start with a "template" for the spreadsheet that the stakeholders would fill out. We'd then upload it for them into Drupal.
      
    
Next Steps
* Think through problems/assumptions
* Noodle on potential hypotheses
* Make legacy rate pages into PDFs; link to the PDFs, hosted by us; redirect those 2 legacy years pages to our current rates page

## Status/Decisions

### 4/29/20
Outcome of call with Mikki, Danielle, and Meg - on disability redirects: 

- All historic disability rates (SMC, birth defects, DIC, etc.) – We will use same approach for cloning and PDFing plus all prior year rate pages will be redirected to the current year page. 



### 4/22/20
__This approach should be used for the other cloned historic rate pages.__

- Enable the menu.
- Treat the historic page as a level 4 (i.e., a child of the 2020 rates page).
- Make the menu/nav label shorter than the H1 (e.g., "Historic 2019 rates" in nav)
- See example of level 4 menu behavior: https://www.va.gov/health-care/about-va-health-benefits/dental-care/dental-insurance/ -- This is the desired pattern if these steps work and there are no menu bugs.

This approach is for the interim/short term; we will evaluate all L4+ nav behaviors more holistically during L4 work.
FYSA @DanielleThierryUSDSVA @johnhashva


__From Mikki:__
URL pattern for these historic rates pages, since they will be sitting as a child to the current rates, can be simplified and structured as: __/historic-rates-2019__

Full URL: /disability/compensation-rates/veteran-rates/historical-rates-2019

Reference ticket: https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/6937#issuecomment-617983344



