### Date Definitions


| Date | Description | MHV/Tracking API Field | MHV Database | Vista Field? | Displayed on Web as | Displayed on Mobile as| Comment/Notes|
| :---| :-------------------------| :-----| :-------| :-------| :--------| :--------| :-----------------|
|~~**Last Fill Date**~~|~~This field is used to indicate the last date the prescription was filled. The dates in this field will be the date of the last renew from a previous rx, and any subsequent fills. VistA field name is FILL DATE.~~||||
|**Fill Date**| This date is the estimated RX fill date|refilldate|PRESCRIPTIONS.LAST_FILL_DATE|RX-52,FILLDATE(22), RF-52.1,REFILL DATE(.01), PR-52.2,PARTIAL DATE(.01) *shown in ICD as 'Last Fill Date' but that is inaccurate||Prescription History List& Details Screen: Fill date|
|**Expiration Date**|This date is the date on which the prescription is no longer fillable. VistA will always have an expiration date ( unless the RX is pending)|expirationDate |PRESCRIPTIONS.EXPIRATION_CANCEL_DATE|||Prescription History List& Details Screen: Expires on|
|**Dispensed Date**|This field will be used to show the actual date the medication was dispensed.|dispensedDate|PRESCRIPTIONS.RELEASE_DATE_TIME|||Currently do not show
|**Cancel Date**|This date is used to indicate when the medication was cancelled.( Value exists only if the medication was cancelled)||||
|**CMOP Date Shipped**|The date/time the prescription was shipped to the patient from the CMOP.|shippedDate? from tracking API|RX_TRACKING.COMPLETE_DATE_TIME|||Prescription Tracking Screen: Date Shipped
|~~**Issue Date/Time**~~|~~This is the date the Non-VA Med order was entered to the system. Date when doctor wrote prescription.~~||||
|**OrderedDate**|This is the date when the Prescription was initially ordered by a doctor|OrdredDate|PRESCRIPTIONS.ISSUE_DATE_TIME|Issue Date/Time||Ordered on
|**Refill Submit Date**|This is the date the MHV or RxR app user submitted the refill request|refillSubmitDate|PRESCRIPTIONS.LAST_REFILL_SUBMITTED_DATE|||Do not display

## Questions & Answers

<details>

  <summary>Q&A</summary>

## Last Fill Date
  
**Q1:** Need clarity around "filled." Is this related to a prescription status or a refill status?  How are Veterans using this date and do they have an accurate understanding of what it actually means?

**A:[Eric]: Both, see VistA Date Mapping tab** 
  
**Q2:** Does it mean the last time a prescription was ordered/renewed or last time it was refilled?
  
**A:[Eric]: neither, this date filled is ONLY for a refill status of 'Refill In Process (aka prescription status of 'Active/Suspended)**
  
**Q3:** How are Veterans using this date and do they have an accurate understanding of what it actually means?

**A:[Eric]: For years, MHV has displayed the following hover-over text for a 'refill in process' prescription "A refill request cannot be submitted at this time. Please review the prescription status and fill date. If you need more of this medication, please call the pharmacy phone number on your prescription label."**
 
**Q4:** What statuses would show an Estimated fill date? Active: Refill in Progress & Active:Submitted? 

**A: [Eric]: it should only be 'Active: Refill in Process' but MHV continues to show this date even after the prescription was 'released' (filled) which may occur before, on, or after the 'Fill Date' which can mislead users. I'm currently asking MHV to reevaluate the logic so that this is ONLY shown when in an 'Active: Refill In Process' status**
  
## Fill Date
  
Q: In consideration for field update, would it be fair to have logic: If RX Status = Refill In Process or Submitted display date as 'Estimated Fill Date'  

## Expiration Date

**Q5:** Does "no longer fillable" mean "renewable" or "refillable?" 
  
**A: [Eric]: neither; it means 'not fillable/refillable' and it may or may not be renewable. NOTE: MHV does not have a 'renewal request' path, only a user-initiated secure messaging that is not directly associated with the pharmacy module (we're working to create this experience).**

**Q5a:** What's the difference between fillable and refillable? (And these are different than renewable.)

**A: [Eric]: Fillable is related to the Parked status. That is when a provider writes a Veteran a prescription but it's not filled yet. It's on the Veteran to take action on it. That's why it's called fillable. Refillable is related to actually refilling a prescription that has previously been filled.**
  
**Q6:** Can we confirm this doesn't relate to the pills expiration use? 
  
**A: [Eric]: confirmed; MHV doesn't get the date in which the medication/pill expires, only the legal prescription expiration date**

**Q7:** Why would a prescription expire? Who determines this date (doctor, pharmacist)? 
  
**A [Eric]: the legal expiration date of a prescription is determined by the issue date, the days supply, and the legailty of the prescription (DEA Schedule (i.e. DEA Schedule II medications such as morphine do not have refills and will expire 30 days after being issued for a 30 day supply, which is the maximum days supply for a DEA Schedule II)**
  
**Q8:** Why is this date important to Veterans? How are they using this date? 

 **A: [Eric]: this date informs the user that regardless of the number of refills remaining, this prescription can no longer be requested once the legal expiration date is reached and will require a new prescription (renewal) to get more.**
  
## Dispensed Date
  
 **Q9:** 1) What does dispensed mean?
  
 **A: [Eric]: this is mapped to the 'released date/time' in VistA which is when the 'fill' or 'refill' was actually verified by a pharmacist and placed into a bag (either to the pharmacy window or mail) for dispensing. It is the closest date we have for showing when the medication was 'dispensed'**
  
**Q10:** Does it mean the date on which the pharmacist physically put pills in a bottle? 
  
**Q11:** Why is this date important to Veterans? How are they using this date? 

**A: [Eric]: see attached refill user guide**

Meko asked why we couldn't just call this field "Last fill date" on the UI but Eric mentioned that we already use the terms "Last fill date" in the "backend" or how the data is mapped and that would cause confusion.

  ## Cancel Date
   
**Q12:** Who cancels a prescription (doctor, pharmacist)? 
  
**Q13:** Why would a prescription be cancelled? 

**Q14:** Can we confirm this is related to a prescription and not a refill of a prescription? 
  
 **A: Eric]: yes, its prescription expiration, not refill expiration (which is not a 'thing')**

**Q15:** Why is this date important to Veterans? How are they using this date?
  
**A: [Eric]: This is the date in which no refill actions can be taken on the prescription; also called 'Order Refills By' on the VA prescription label)**
  
## CMOP Date Shipped
  
**Q16:** Does this actually mean a prescription was shipped (on the truck out for delivery)? Or does that mean a tracking label was created (prescription could still be sitting in the pharmacy bin waiting to be picked up, could also mean it is actually out for delivery, and could also mean it's already been delivered but we still have the tracking number assigned to it)? 
  
**A: [Eric]: please confirm whether this is coming from CMOP to API or VisTA b/c we should ONLY use data for shipping from CMOP, not VistA**

**Q17:** Why is this date important to Veterans? How are they using this date?
  
## Order Date
  
**Q18:** What is the difference between Issue Date and Ordered Date?  Why is this date important to Veterans? How are they using this date? 
  
**A:** [Eric] it the date the prescription was ordered by their doctor; gives them some inclination as to when to expect it
