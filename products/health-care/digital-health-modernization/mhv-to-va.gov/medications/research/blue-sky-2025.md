# My HealtheVet - Medications Blue Sky Ideation
In July-August 2025, the Horizon team UX practitioners took on a discovery effort around the Medications tool with the goal of reimagining what would be possible if we could re-create the appliation from scratch today, knowing what we know now from user research and identified problems. 

UX squad: 
* Cara Frissell
* Florence McCafferty
* Sara Sterkenburg

OCTO:
* Robyn Singleton
* Kay Lawyer

## On this page
- [Background](#background)
- [Resources](#resources)
- [Desk research](#dr)
- [Competitive analysis](#ca)
- [Design concepting](#dc)
- [Next steps](#next-steps)


## <a name="background">Background</a>
What this discovery process included: 
* **Desk research** -_what research has already been done related to Medications? What do we know already about user expectations and preferences, pain points, and things that are going well?_
* **Competitive analysis:**
  * VA tools
    * VHAB mobile app: _How does prescription management on the app compare/contrast to flows and interactions we have for this same tool on the web?_
    * My VA Health portal: _How do users complete tasks such as refilling a medication, renewing a prescription, or printing out their medications history list? Can they track statuses or get shipping information?_
  * Non-VA health care tools - _what navigation styles, interactions, and features are available on other major pharmaceutical apps and websites? How do those compare to what we have on VA.gov?_
* **Design concepting** - With inputs from desk research and competitive analysis, what ideas to we have for how this application might be structured at a very high level?

## <a name="resources">Resources</a>
* [Mural for Meds data modeling ideas](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1708968755045/4bdbe77c90fbcf529afa0cf7c05342f6357c7997) 
* [Mural for blue sky ideation kickoff w/ stakeholders](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1752761525013/e0bdc32816c2f619261c47d5e630bff2d145ca44)
* [Mural around anticipated challenges integrating with OH Pharmacy data](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1744383809110/b47783ed21564905d60e633357a472ec73cdf39b)
* [Mural for competitive analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1753109777210/ed231c31be061858c9047cfeb5fd861d6a86daaf)

## <a name="dr">Desk research</a>

### Previous studies

* [Discovery research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/Discovery)
* 2023
  * [Usability study round 1 - general users](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2023-07-medications-usability-testing-round1)
  * [Usability study round 2 - Assistive Technology (AT) users](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2023-11-medications-usability-testing-round2-AT)
* 2024
  * [Findability study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2023-11-medications-usability-testing-round2-AT)
  * [Usability study round 3 - AT users](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2024-05-medications-usability-testing-round3-AT)
  * [Medical Records, Messages, and Medications usability study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2024-11-MR-SM-RX-usability-study)
* 2025
  * [Filter metrics feedback study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2025-02-filter-metrics-feedback-study)
  * [In-product education (IPE) study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2025-02-filter-metrics-feedback-study)
  * [Medications metrics & feedback study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2025-06-IPE-ABC-testing)
  * [IPE ABC study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2025-06-IPE-ABC-testing) 

### Big picture questions
* Would Veterans who also order medical supplies benefit from combining supplies + medications into a single app space and being able to re-order and view all of their "order history" in one place?
* Would it make more sense to refer to this application as a "Pharmacy" (which was the language used on both the MHV Classic and the My VA Health portals)? How do users think about the name of this tool and the things they'll be able to do here based on that language choice?
* Is there a service blueprint of all the channels / ways medication refills or renewals can be requested?
  * VA.gov
  * Audiocare
  * In-person
  * Prescribed and filled while in-patient at a facility
  * Other? 
* What is the Meds by Mail flow, and how does that differ (if at all) from how Veterans use this application?
* How does billing work for co-pays? When and how do Veterans or Meds by Mail users get billed for medication refills? How can we learn more about that? 

### Known user problems / points of friction
* Online renewal is currently not possible
* Veterans may not understand that they need to select "apply" button in order to activate filters or sort functionality
* Findability: significant challenges finding the status of recently requested medications + shipping information
* The status of the requested refill is on the prescription card on the meds list (confusing - we are conflating multiple levels of data structure in those cards) after 15 days / it is not permanently available.
* Meds list page is overwhelming to most Veterans who only want to see the active meds they are currently taking (not a list of every medication they've ever had filled in their lifetime with the VA).
* Cannot receive status updates on the "full set" of refills that were placed in a bulk order. Those statuses have to be individually looked up on a medication by medication basis. 

### Possible "upcoming" user problems
* My VA Health patient portal did not distinguish between "refill" or "renew" - just used a "refill" call to action button to control for both. Is this confusing? Will users expect this on My HealtheVet on VA.gov?
  * The refill button does different things depending on whether any refills are remaining (either triggers a refill (if integer is `> or = 1` or triggers renewal form flow if count `= 0`)
* Tony Gavell says there are partial fills in OH (e.g. a user can have 1.5 amount of the prescription filled - so some non integer number containing a decimal must be allowed). In his discovery, he learned that currently we do not accept non-integer values for VistA meds. He fixed the FE on VA.gov to allow for decimal characters, but it's surprising that we don't get partial numbers for VistA. Is that right? How are partial fills handled differently for VistA vs. OH?
* Possible that the meds list appears incomplete to some Veterans who request refills via audiocare (we dn't get data from audiocare that would end up in the meds app) 

## <a name="ca">Competitive analysis</a>
[Mural here](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1753109777210/ed231c31be061858c9047cfeb5fd861d6a86daaf) 

### Top tasks to compare
* "Get more of the meds I'm currently taking" (e.g. refill and renewal flows)
* Monitor the delivery / availability of my meds
* Tell me what my medication is for and how to take it (including how often)
* Print out my list of active medications only

### Competitors analyzed
* VHAB mobile app (differences in flow / data and higher CSAT scores according to Robyn, so comparing length of flow + friction points) 
* Walgreens native app + web interface
* My Chart native app + web interface
* CVS
* Safeway pharmacy

## <a name="dc">Design concepting</a>
After exploring previous desk research and competitive analysis, some low fidelity concepts for alternate ways we might organize the product to make more sense to users were explored. These concepts took into account only the top tasks in the health tool for simplification / fast work, and explored the following ideas generated by research & competitive analysis. 

### Resources
* [Figma file with blue sky with design concepts](figma.com/design/oOH2mgfcAtiCyjnWuWVA1R/Medications---Blue-sky?t=CJOVbWQvKbVwVpxx-0) 

### Blue sky ideas
* Explore automatic refills (do not require Veterans to manually request)
* Explore automatic renwals (do not require Veteran to input data into a secure message, but pull that data dynamically, route to the correct triage group behind the scenes)
* Display co-pay costs to Veterans
* Display shipping address to Veterans
* Build out refill object in the data model
* Consider adding a landing page to Meds (not having list view be entry point to tool) - _this has been explored by Meds team previously & we should dig up their explorations in Figma_
* Consider adding an order history page to Meds app
* Remove functionality from the Meds list view page and simplify the purpose for this page

## <a name="next-steps">Next steps</a>
