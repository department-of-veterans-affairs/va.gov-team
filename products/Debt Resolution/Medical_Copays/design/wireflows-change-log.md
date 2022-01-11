**Wireflows change log**
----

## Wireflow V2.1

![V2.1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/design/Screen%20Shot%202022-01-11%20at%204.11.49%20PM.png)

# Notes

* Removed the transaction table due to data constraints 
* Removed the wizard due to not having VHA-supported FSR at the time of the MVP's launch
   * The content that would be found within the wizard was incorporated into the details page  
* Incorporated status updates into the overview and details pages 

## Wireflow V1.2

![V1.2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/design/Screen%20Shot%202021-06-16%20at%204.41.41%20PM.png)

## Notes

* Transactions:

* Transaction dates were previously removed because veterans weren't sure if they were the date of the service or charge
* Transaction dates for payments will be appreciated by Veterans though
* We may not be able to be as specific with the payment received section --- likely does not matter to the veteran where the payment originated and CSRs can look it up if needed by using the receipt prefixes.

* Suggested data for payments: payment amount, date, and billing reference number

* Cash payments should also be accounted in VISTA

* **Add in account number, which is a 16-digit number that is assigned to each veteran by each facility**
* Cerner Millennium sites vs. VISTA sites

* Currently only Spokane is running Millennium, but they are expanding
* Veterans who visit the Millennium sites receive two bills
* OEHRM - heading communication for those Veterans, they have been or will be sending out communication to let Veterans know about the transition and statement situation when moving from VISTA to Millennium 
* CCPC will have information regardless of which system they're on
* It's possible that a Veteran won't get a statement if they pay at the facility after their services
* CDW (Corporate Data Warehouse) should have charge and payment data from both VISTA and Millennium sites and will be the most real-time

* **Add in the 'Date/Time last Updated' content on the facility detail pages**

* **Change 'Learn more about how to pay' to something more like 'Pay your bill'**
* **Add in Rights and Responsibilities disclaimer**

* This is a matter of fulfilling the legal regs: the Congressional Mandated Reporting (CMR) responds to the requirements for PL 115.407

## Wireflow V1.1

June 11, 2021 

![V1.1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/design/Screen%20Shot%202021-06-11%20at%201.55.58%20PM.png)

### Questions we had

* Is there a concept of a "resolved" copay bill, or is it a rolling balance, like a credit card?
* What happens when a set of charges are referred to DMC for collection?
* Can a Veteran still pay off their full balance, including the referred amount?
* Do charges just fall off of a balance when they are being collected on? 
* If full balance is paid on [Pay.gov](http://pay.gov/) after referred to DMC, does the balance go to $0?
* Does it happen that it's offset and the Veteran pays and they need a refund?
* When asking for financial help, is the full balance for a facility always considered?
* What do balances vs debts look like to CSRs?
* What is the thinking around minimum payments?
* What happens when a part of a Veteran's debt is sent off to DMC for collection?


### SME introductions

**Brandon**
   * Expert in revenue office, where information is coming from, etc

**David**
   * Revenue offices CPAC 
   * Policy analyst for veteran services, accounts management functions + efforts,
   * Smattering of knowledge about VISTA's interaction with other systems, but primary expertise is first party account management

**Ernie**
   * Program analyst within the revenue operations office, 
   * 16 years of experience with DMC, TOP; manages those programs for VHA

**Vonda**
   * Director for CPAC operations, 
   * Almost 30 years of knowledge, started as a biller for VA medical care,
   * Worked with the consolidation of CPAC over 10-15 years

**Mari Beth**
   * Started in CPAC for cash management, OPAC for accounts management 
   * Is a SME for veterans services

**Daniel** 
   * 11 years work with first party; started with the admin services department, now veteran services as lead, supervisor, etc. 
   * Knowledge about medical care followup 
   * 3 years ago became assistance with revenue office group helping David
   * Became a policy analyst for facility revenue 6 months ago to help understand laws
   * If veteran needs help with bill they talk to facility revenue

### Design presentation

* Credit card statement assumption per facility?
  * Brandon - Veterans going to the same medical center primarily
* Included payments so it's similar to a credit card bill where you rack up charges and the bill goes down
  * David - fairly straightforward. The art board would see it on the left, they'd select one of those, and the next screen is the art board of each station. That said, what is the intent for 'your transactions'? Every transaction or a full history? Could be a large file - we could respond to that
  * Can Veterans have ability to click on multiple to go further and get more details?
  * We're unsure what happens if someone goes to a facility 3 months in a row and didn't pay anything, next month does only the first statement drop off the balance?
    * The DMC would probably have to refer them right back to us because DMC doesn't manage the debt, they can only take action or manage debt referred to them. the medical centers maintain abilities at DMC. Might not be the case for debt going to treasury
    * When one has debt referred to collection, it could have followed one or both collection streams
    * Does it matter in the UI, or is it that they need to take action before a certain date before being referred to treasury?
      * If I wanted to give somebody advice to say 'take action before x date' the only time that'd be applicable would be debt not in collection at one of the two collection agencies
  * Items go to collection per encounter of care?
    * Statements compile multiple charges, or bills
    * There is no such thing as a 1:1 bill statement association
    * Statements go out the window with this discussion
    * Bills are referred to collection,  single episode of care level
    * Each encounter has a bill compiled into statements
    * A bill that remains unpaid, after a certain time is referred to collection. First stop is DMC that will establish a collection account, 30-60 days later it's sent to treasury for collection
  * Whether or not they can set an account is automated pulled from benefits or letters to manually set up a payment plan?
    * Both. If the DMC is able to set up an account, it means they do have VA benefits that are eligible for offset. Part of the process is getting letters
  * The date something gets referred to DMC is from the date from encounter or statement?
    * Date of the bill, which is most often associated with the date of service (but not always)
  * Example: Month 1 they have a service and get first statement, 30 days later they get a second statement reflecting $50 beginning balance, $50 new activity, now $100, the next month is the third statement which reflects $100 balance forward, $50 new activity, $150 total balance, 30 days after that debt reached an age of 90 days delinquent is referred to DMC
  * If there are benefits available for offset they establish an account and communicate with the Veteran. If they cannot, they return it to us and 60 days after that it's sent to treasury
* What do you do after it's not collectable by DMC within that 60 days
  * We don't do anything. All the first party billing is designed to be no touch except by exception due to billing error, retroactive action, or a veteran initiating an inquiry for that debt
  * First party billing is automated except for those activities
  * There is no human activity from letters being sent through TOP
* When asking for financial help, is the full balance for a facility always considered?
  * Need not be other than the full balance
  * David - We most often take care of whatever debt the Veteran has at the time
* Does it happen that it's offset and the Veteran pays and they need a refund?
  * Often
  * Is that payment from DMC shown as 'payment from Veteran' included in this table?
    * Yes it would be included in the transactional history
    * If the DMC collects money and sends that money to us, it's sent and posted to the veterans account and shows up as a payment to the bill applied. There are some characteristics that let us know it was from DMC vs Veteran
* Do charges just fall off of a balance when they are being collected on? 
  * If referred to treasury, it would drop from payable balance
  * If referred to DMC, it would still be included in that balance
* If full balance is paid on [Pay.gov](http://pay.gov/) after referred to DMC, does the balance go to $0?
  * Yes, and the DMC will update them on the debt they have
  * That doesn't hold for treasury
  * If they owe money to treasury,  they could call treasury (primary option) but rare instances where debt can be recalled from treasury but once it's at treasury it's sticky

### SME Questions

* How many transactions?
  * Data consideration needs to take place
* Do Veterans have the ability to click on individual pieces in the table and view more details?
  * More detail?
    * Description column could say whatever is available
    * Date of service might not always align with date of charge (one of many examples)
    * We're intending to pull in the same data as on the paper statements, I don't know if there's more data than in the statements but we can add and remove as needed
    * Is the data supposed to come from the veteran patient file?
      * Unsure, we don't know what the source of data is
  * Any surveys about how much detail they'd want to see?
    * We will be validating
  * We can add search or filtering functionality
* Is the intent for the last 12 statements to be included?
  * Last 6 months of statement limitation is related to CRM, Justin Carver is working with that group to see if the limitation can be lifted
  * Might be legislation that has a time requirement for the statements, Leah will refer to notes
  * A requirement was added so customer service reps can can see
  * David: We must not do it in an isolated silo from the project Justin is working on so they're aligned
* Transactions: Might want to title it to "Your VHA payment transactions", we could have a lot of line level transactions, if that data was mixed with payments then it would be hard to show from an accounting perspective. Would love to know more recent payment transactions, and down below is patient statements
  * Any payment that the veteran has made would be in a single table?
    * Yes, and/or payments cleared from a VISTA system. Could only be [pay.gov](http://pay.gov/) payments, would make most sense to only show payments cleared within VISTA system
    * Veterans call often to ask if payment was cleared at a specific station
    * We're looking to extract the data from the PDFs
* When one clicks on 'resolve your copay bill' it goes to the third panel?
  * Why isn't there a panel for pay your bill and that goes to a screen where it's not mingled with financial relief options and is a screen where they can pay their bill, and a second option that says 'request help', resolve is a little wordy. 'get help with my bill', it would be wise to keep the payment and get help payment mechanisms separate
  * Motivation for splitting them out? For the user?
    * For the clarity and specificity and action they want to take
    * Repayment plans can be set up after the due date, so long as it isn't referred to cross services

### Next steps

* We will make adjustments to the wireflows based on SME feedback
* Coordinate a design workshop with SMEs to promote collaboration
* Learn more about the data available within backend systems based on UX goals
