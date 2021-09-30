# Introduction to BAM2 / Debt Resolution Products

**Last updated: September 30th, 2021**

## Team resources

OCTO-DE PO: Matthew Self

### Team functional links:

* [Zenhub Scrum Board](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vsa-benefits-2&notFullScreen=false&repos=133843125&showPipelineDescriptions=false)

### Documentation

* [Debt Resolution / BAM2 Team Page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/benefits-memorials-2)

* [VSA Product Management Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/product)
* [VSA Research Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/vsa-research-process.md)
* [VSA Org Chart](https://docs.google.com/drawings/d/1_OmxooPQXRwUjb08DoaMoEvw1-2Gq9e_wYLunMzEsxE/edit)

## Debt Resolution Tools

### Debt Letters MVP / "Debt Portal" Project:

Authenticated VA.gov tool to view VA Education, Compensation, and Pension debts.

* [UXPin Mockups Link](https://preview.uxpin.com/067dc9cad4c5966bc8a5f3a400cf10206e6a51d4#/pages/132263526/simulate/no-panels?mode=i)
* [Staging product link](https://staging.va.gov/manage-va-debt/)
* [Debt Letters Product Outline and Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/debt-letters-mvp)
* [Debt Letters Research Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/debt-letters-mvp/research)

#### Notes about this project:

* Debt Portal is a product that responds to the Veteran Fair Debt Notice Act; it shows a subsection of the most common debts and their letters.
* Debt Portal shows the status of a debt through the 'diary code' being sent to us (e.g. "awaiting payment," "your compromise offer was accepted," "on hold," etc.) and tells a Veteran what their next steps are.
* The stakeholder group for this is VBA's Debt Management Center (Jill's group)
* The types of debts shown in the product currently are the ones whose PDFs that are available through VBMS, but we are able to pull data for those other debts.

#### Intended Improvements:

* Debt history table to replace 'debt letter history' table
* Incorporate payment data / Update 'Next step' cards with new design
* Incorporate all benefit debt types
* Allow for simpler payment pathway by connecting to pay.va.gov
* (Long-term goal) combine portal with medical copayments portal so all money owed is visible
* (Long-term goal) provide sitewide notifications to alert authenticated Veterans of a debt 

### Financial Status Report (FSR):

Authenticated VA.gov form to apply for financial help for Education, Comp, and Pension debts.

* [UXPin Mockups Link](https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/133701647/simulate/sitemap?mode=i)
* [Staging product link](https://www.va.gov/manage-va-debt/request-debt-help-form-5655/introduction)

* [FSR Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Financial-Status-Report/FSR-Product-Outline.md)
* [FSR SME Research Study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/Debt%20Resolution/Financial-Status-Report/research/oct-2020)
* [FSR Usability Study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/Debt%20Resolution/Financial-Status-Report/research/mar-2021)

#### Notes about this project:

* This is a follow-on feature based on the Debt Portal work 
* Veterans can currently use this form to request a payment plan, waiver, or compromise offer for their VBA debts 
* The form's purpose is to capture a monthly snapshot of the Veteran's financial situation
* Through research we learned that Veterans often incorrectly fill out the paper form

   * They duplicate their expenses in multiple sections 
   * They miscalculate section totals which impact the total of leftover income that DMC reviews to assess whether or not to approve a request

* It's in the Veteran's best interest to provide all their expenses so the DMC has an accurate view of their finances; we sought to support that through the new list loop component 

   * Veterans struggled to use the component during usability testing; they would type letters to see what appeared in the dropdown, didn't realize the input field was freeform, and would continue to the next page without saving 

* Veterans are anxious about questions in the form related to household assets (homes, cars, additional assets) 

#### Intended Improvements:

* Download completed FSR as PDF
* Combined FSR (bringing in copay debts)
* Improved wizard (one question per page)
* List loop improvements
* Resubmit form / prefill functionality
* Credit card improvement to installment contracts and other debts section
* (Long-term goal) exploring ways to reduce forcing Veterans within certain financial thresholds from filling out the entire form (i.e. unemployed for the past 2 years, cars under a certain value, etc.) 

### Medical Copayments Enhancement (MCP):

Investigating incorporating medical copayment bills into the VA debt experience (into the existing Debt Portal tool, an evolution of it, or a new tool altogether).

* [UXPin Mockups Link](https://preview.uxpin.com/16e8675a9898914d5615d6ea2d23e310b7d8dfaa#/pages//simulate/sitemap?mode=i)
* [Staging product link](https://staging.va.gov/health-care/pay-copay-bill/your-current-balances/)
* [MCP Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/Product_Outline_Medical_Copays.md)
* [MCP Research Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/Debt%20Resolution/Medical_Copays/research)
* [Ideation Miro Board](https://miro.com/app/board/o9J_lFg6K9s=/) (pw: vsadesign)

#### Notes about this project:

* Shows active balances for facilities and allows for downloading statements from the past six months.
* NOT real-time; our balances only update when new statements are generated monthly
* Built out separately for a few reasons, primarily IA/Auth Exp concerns, but would ideally be combined so that all debt is foundtogether.
* Infrastructure / data support is much weaker for copays than benefit debts

#### Intended Improvements:

* Charges / payments table (trimmed from MVP)
* Showing facilities with $0 balances and their respective bills from the past 6 months
* Extending data past 6 months
* Improving to (more) real-time data
* Payment agreement data / FSR status
* Status (currently unsupported with their systems)
* (Long-term goal) combine with debt portal so all money owed is visible

## Additional tools

### Medical Device Reordering:

Providing Veterans eligible for hearing aid battery and/or accessory resupply the ability to order available items through an end-to-end online ordering process.

* [UXPin Mockups Link](https://preview.uxpin.com/9fb3b46e7fc67c772e75b55c7d836e1b55afe102#/pages/127751367/simulate/sitemap?mode=i)
* [Staging product link](https://staging.va.gov/health-care/order-hearing-aid-batteries-and-accessories/)
* [MDT Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/product-outline.md)
* [MDT Research Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/medical-device-tool/research)
* [Ideation Miro Board](https://miro.com/app/board/o9J_kv3bibg=/) (pw: VSAdesign)

#### Notes about this product:

* The Denver Logistics Center (DLC) is a warehouse that distributes hearing aid batteries, hearing aid accessories, and prosthetic socks to qualifying Veterans
* An online ordering tool already existed, but only allowed Veterans to order batteries

   * A significant amount of Veterans need to order accessories as well, so the online ordering tool had a low usage rate because they'd need to call or mail an order card to order the rest of their items anyway 

* The project was originally slated to include all of those items, but we quickly found out that prosthetic socks only account for ~1% of all orders

   * As a result, we decided to focus on bringing hearing aid accessories into the online ordering experience to increase engagement 

* Veterans can order items once every 6 months, so it's entirely possible for items to be on different ordering cadences 

* We only display items that have been ordered within the past 2 years 

* We originally had hearing aid batteries + accessories items on separate pages with a gatekeeping question asking whether or not they needed to order those items, but post-usability we put all items on one page

   * Due to the form system's constraints, we're unable to make item selection required; Veterans can theoretically submit an empty order but we show an alert if this happens

* After this tool launched our team pivoted to working on the Debt Portal and have since expanded to focus on the wider VA Debt experience

#### Intended improvements:

* None at this time
* The DLC reached out for us to add prosthetic socks and CPAPs to the online ordering ecosystem, but that work currently isn't captured on the roadmap
