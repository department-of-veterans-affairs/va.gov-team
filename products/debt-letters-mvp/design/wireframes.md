# Debt Letters Wireframes

## Jul 10
Following the discovery of some data constraints, including not being able to link specific VBMS letters to the DMC API's concept of a debt, we created a stepped design plan to release quickly while testing a design we know to be feasible, but requires some collaboration with stakeholders.

### Lowest-complexity for quick release:
This design includes:
- Unauthenticated landing page
- An uncategorized debt letter downloads table page, where a Veteran can see the subset of letters they can download in chronological order 

![v1.4.1 wireflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/debt-letters-mvp/assets/debt-letters-sketches-v1.4.1.jpg)

### Mid-complexity:
These two (stacked) design options include:
- Unauthenticated landing page
- **A debt summaries page with high level debt details (Type, date updated, balance, 'why' additional info, (potentially) next step)**
- An uncategorized debt letter downloads table page, where a Veteran can see the subset of letters they can download in chronological order 

![v1.4.2 wireflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/debt-letters-mvp/assets/debt-letters-sketches-v1.4.2.jpg)

### Full design:
This design includes:
- Unauthenticated landing page
- A debt summaries page with high level debt details (Type, date updated, balance, (potentially) next step) 
- **A debt details page with in-depth debt details (Content about why the debt exists, letter dates and summaries, more debt details)**
- An uncategorized debt letter downloads table page, where a Veteran can see the subset of letters they can download in chronological order

![v1.4.3 wireflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/debt-letters-mvp/assets/debt-letters-sketches-v1.4.3.jpg)


## Jun 10
Following checkin with DMC:
- Past debts removed from scope, as individual debts do not have unique identifiers, so new debts in the same category will overwrite previous debts.
- Included an additional information component to explain why letter content may differ from current record being shown on the debt detail page.
- Adjusted the language for 'Debt amount'

![v1.3 wireflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/debt-letters-mvp/assets/debt-letters-sketches-v1.3.jpg)

------

## Jun 1
Following design intent checkin:
- Content page includes left nav (tool location pending feedback from Mikki)
- H1s are distinct (actual page titles pending feedback from Mikki)
- Tabs included for current / past debts
- "Unresolved debts" and "Resolved debts" --> "Current debts" and "Past debts" to be more simpler language and more similar to VAOS.
- "View all of my debts" link added
- All phone numbers and emails are links

**Next steps**: Working with Mikki on IA, continuing to work with DMC to further define data and write content, discuss accessibility of PDFs and potential scope increases.

![v1.2 wireflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/debt-letters-mvp/assets/debt-letters-sketches-v1.2.jpg)

------

## May 28
Wireflow created for the purpose of sharing during Design Intent Checkin after [team ideation](https://app.mural.co/t/vsa8243/m/vsa8243/1590173930514/c0dcc29fddb240204b0e1f93cc0b1caf2c04f421), where we decided the following:
- [Debtman content page(s)](https://www.va.gov/debtman/) being replaced
- Despite the primary requirement being to provide letter downloads on VA.gov, tool should be debt-centric rather than letter-centric, as the data structures being sent to us support that upgrade easily
- Debt history _can_ include statuses that are not directly associated with the letters in our scope (e.g. 'Bad Address' statuses can be reported)
- Alerts could potentially be incorporated to bring attention to debts that have changed since the Veteran last viewed them
- Resolved debts seem helpful and can be incorporated

**Note:** content is hastily done and representative of content type rather than actual direction!

![v1.1 wireflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/debt-letters-mvp/assets/Debt%20Letters%20Flows%20-%20debt-letters-sketches-v1.1.jpg)
