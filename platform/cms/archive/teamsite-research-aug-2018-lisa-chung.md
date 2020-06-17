Teamsite-Research-Aug2018-LisaChung.md

## Overview

- Initial research (Jul 30 mtg)
- Follow-up discussions with TeamSite (Eric Lee, Kevin Reid, Stephen Walker)

### Initial research

Most of this was covered in Jul 30's "Why not Teamsite" mtg (snapshot).

1/ What version are we using?  
- v8.2.0.2
- will be upgrading to v16.4 (note: vendor jumped versions from 8 to 16)
- VA's TeamSite is heavily customized to cater to non-technical users/SMEs and does not have all the features that vendor’s website shows
- the limitations noted by users are often effects of VA admins locking down features
- COPE (create once, publish everywhere) - concern that this is not supported  
    * sample use case: megamenu   
    * shared components does seem supported at some level (from Eric Lee walkthrough Jul 31). Example in the responsive template, header, footer, used on VAMC sites

2/ How popular is TeamSite?
- market share: (TeamSite vs WP, TeamSite vs Drupal)  
- of the top 10k sites:  
  * TeamSite: 0.26%  
  * Drupal: 2.59%  
  * WordPress: 10.4%

- of the top 1M sites:  
  * TeamSite: 0.03%  
  * Drupal: 2.45%  
  * WordPress: 21.78%  

- (these figures are 1 week old)
- subsequent feedback from Kevin Reid: more informative would be to see the breakdown of sites using CMS at the enterprise level
- unstable ownership: developed by Interwoven, acquired by Autonomy (2009), in turn acquired by Hewlett-Packard (2011), and at the moment owned by OpenText (2016)
- negative outlook in [2017 Forrester assessment](http://go.bloomreach.com/rs/243-XLW-551/images/forrester-wave-web-content-management.pdf?tar=0&int=0&prd=none)
> TeamSite’s history of ownership and management changes cast doubt on the service partner and developer ecosystems, which could slow revitalization efforts.

- "unanticipated complexity", "lost momentum", rarely seen on shortlists, in [2017 Gartner assessment(https://www.gartner.com/doc/reprints?id=1-3ZYO9Y2&ct=170510&st=sb)
> OpenText TeamSite customers report unanticipated complexity, which requires product expertise that is increasingly hard to find. Organizations should pay careful attention to sourcing when undertaking WCM initiatives using TeamSite.  
>
> OpenText and its WCM [Web Content Management] products have lost momentum among its customers. Considering OpenText's breadth, global presence and WCM heritage, Gartner rarely sees OpenText on shortlists for new WCM and digital experience initiatives.

- low market share, high customer churn, frequent changes in ownership, cautionary tone of independent reviews: how confident can we be that TeamSite will be supported in 10 years?

3/ Can TeamSite handle Vets.gov templates?
- need more info  
- Vets.gov's modern framework (ReactJS) may pose issues
- [previous research]https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/cms/planning/CMS%20%26%20Teamsite%20research.md)

> Vets.gov React apps (including our application forms) cannot be moved to the current version of Teamsite

> To take the example of the education forms on Vets.gov — these (and all) application forms are React apps and as such could not be moved to the current version of Teamsite.

 - migration of Vets.gov content to TeamSite would likely require development work
 - Drupal at minimum offers [ReactJS as an official module](https://www.drupal.org/project/react); but would need evaluation
 - **TeamSite does not write to a database** - at least, this is true of the instance used at VA - and this might affect the ability to syndicate content

4/ Open Source in govtech
* open source often has a larger community  
  * more resources for documentation, fixes, and features; reduces burden for these in-house  
  * Drupal is open source, large community  
    * 1,000,000 passionate developers, designers, trainers, strategists, coordinators, editors, and sponsors working together (ref)
* TeamSite has open source components
  * JBoss/WildFly
  * OpenSSL
* open source powers some of government’s most prominent sites
    * whitehouse.gov using open source CMS since 2009
    * Case studies for [NASA](https://www.drupal.org/case-study/nasagov) and [US Dept of Energy](https://www.drupal.org/case-study/us-department-of-energy)
    * other [federal organizations using open source CMS](http://www.govtech.com/policy-management/Why-Big-Sites-Run-Drupal.html)
    * subsequent feedback from Kevin Reid: hard to find success stories for situations with VA's footprint - VA might be a niche.
> governments realize that Open Source does not pose additional risks compared to proprietary software, and furthermore, that by moving away from proprietary software, they are not being locked into a particular technology, and that they can benefit from the innovation that is the result of thousands of developers collaborating (ref)

* concern over dependencies using non-approved tech
Drupal is not supported inside the VA, but it is TRM approved  
  * Drupal defaults to MySQL db, and MySQL is not approved  
  * possibility of customizing to use approved tech (and plausible that the open source community has already created these integrations, eg [Drupal with Oracle](https://www.drupal.org/case-study/drupal-8-oracle-driver))
  * re: MySQL: sometimes a waiver can be obtained (the VA blog has a waiver), but it may have as much to do with licensing as with security concerns)

5/ Time matters  
* rebuild Vets.gov so that TeamSite can accommodate it? Or move to forward-looking CMS and migrate VA.gov content?

6/ Costs
* TeamSite infrastructure and support team exists at VA
  * $250k annually for licensing and maintenance for TeamSite.
  * major and minor upgrades are included with the license agreement
  * add-on modules exist
    * cost depends on the module
    * not all modules are included in the current license
    * some of the features in the modules may already be available w/o the module but have been locked down for workflow/approval reasons; or similarly, the features shouldn't be allowed for workflow/approval reasons (eg Drag and drop feature - do we really want to make that available? concern over disrupting L&F, and html inexperience)
  * Maintenance and sustainment activities are covered under the current support contract.
* Development is outside of the scope for the current contract. A new contract would needed for development work. That can take a fair amount of time and effort to get through the system (at least several months, usually)
> Use of the existing Teamsite instance would probably not incur any new costs unless development is needed (and as mentioned that would need to be on a separate contract)

> If Vets.gov was going to use TeamSite, the Vets.gov team would get TeamSite development resources to create their own TeamSite forms (or “templates”), design how they want their pages to look when generated (the web page “template”), and write the generation scripts that take what users enter into the TeamSite templates and place it into the web page layouts.

* would not need to be stand up a 2nd instance of TeamSite (although is an option)
* Is the existing infrastructure that big of an advantage? There will still be costs.

>It’s not clear how the cost to use the existing CMS would be an argument as there will be cost to use any solution. Standing up a new CMS will cost more than using an existing CMS. Cost to migrate content would be “roughly” the same, regardless of CMS

## Follow-up discussions with TeamSite
* Eric Lee (Jul 31, 75 minute phone call)
* Kevin Reid (Aug 7, 90 minute phone call)
* Stephen Walker (Aug 8, email thread)

General impressions:

* open to considering other options - "not wedded to teamsite"
* "if a decision gets made, we will work with it"
* cost is a concern, but it is not a blocker
* none of the options are without cost
* TeamSite minimizes the initial costs (deployment, support, user training)
* if we go down a path for a new CMS, we do need to look at the TOTAL cost of ownership
* TeamSite is generally tolerated by users
* seen as important: ability to lock down content - only certain fields/placeholders should be editable by users
* teamsite is workable for now
  * are there things we want it to do? "Teamsite can do it, you just need to invest in it"
* important that a move not be anticipated as just throwing a big lever, and the CMS will be cutover
  * this will take time
  * "anvils and hammers", or "anvils and a thousand hammers"
  * if we do move to a new CMS: port over one site at a time
* previous difficulties with CMS contracts - have been killed b/c dev work was being done on a sustainment contract
* Previous CMS difficulties - look up history with Peter Levin, Roger Baker
