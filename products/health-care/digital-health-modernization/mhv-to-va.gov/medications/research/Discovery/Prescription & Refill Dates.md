Date|Description|MHV API Field|Displayed on Web as| Displayed on Mobile as|Comment/Notes|
|-------|-------|-------|-------|-------|-------|
|**Last Fill Date**|This field is used to indicate the last date the prescription was filled. The dates in this field will be the date of the last renew from a previous rx, and any subsequent fills. VistA field name is FILL DATE.||||
|**Expiration Date**|This date is the date on which the prescription is no longer fillable. VistA will always have an expiration date ( unless the RX is pending)|expirationDate |||
|**Dispensed Date**|This field will be used to show the actual date the medication was dispensed.|dispensedDate|||
|**Cancel Date**|This date is used to indicate when the medication was cancelled.( Value exists only if the medication was cancelled)||||Questions: Who cancels a prescription (doctor, pharmacist)? Why would a prescription be cancelled? Can we confirm this is related to a prescription and not a refill of a prescription? Why is this date important to Veterans? How are they using this date?
|**CMOP Date Shipped**|The date/time the prescription was shipped to the patient from the CMOP.||||Questions: Does this actually mean a prescription was shipped (on the truck out for delivery)? Or does that mean a tracking label was created (prescription could still be sitting in the pharmacy bin waiting to be picked up, could also mean it is actually out for delivery, and could also mean it's already been delivered but we still have the tracking number assigned to it)? Why is this date important to Veterans? How are they using this date?
|**Issue Date/Time**|This is the date the Non-VA Med order was entered to the system. Date when doctor wrote prescription.||||Questions: What is the difference between Issue Date and Ordered Date? Why is this date important to Veterans? How are they using this date?
|**OrderedDate**|||||Questions: What is the difference between Issue Date and Ordered Date? Why is this date important to Veterans? How are they using this date?

## Questions & Answers

<details>

  <summary>Q&A</summary>

<details>
  <summary>Last Fill Date</summary>
  
**Q1:** Need clarity around "filled." Is this related to a prescription status or a refill status?  How are Veterans using this date and do they have an accurate understanding of what it actually means?

**A:[Eric]: Both, see VistA Date Mapping tab** 
  
**Q2:** Does it mean the last time a prescription was ordered/renewed or last time it was refilled?
  
**A:[Eric]: neither, this date filled is ONLY for a refill status of 'Refill In Process (aka prescription status of 'Active/Suspended)**
  
**Q3:** How are Veterans using this date and do they have an accurate understanding of what it actually means?

**A:[Eric]: For years, MHV has displayed the following hover-over text for a 'refill in process' prescription "A refill request cannot be submitted at this time. Please review the prescription status and fill date. If you need more of this medication, please call the pharmacy phone number on your prescription label."**
 
 <details>

  <summary>Fill Date</summary>
  

**Q4:** What statuses would show an Estimated fill date? Active: Refill in Progress & Active:Submitted? 

**A: [Eric]: it should only be 'Active: Refill in Process' but MHV continues to show this date even after the prescription was 'released' (filled) which may occur before, on, or after the 'Fill Date' which can mislead users. I'm currently asking MHV to reevaluate the logic so that this is ONLY shown when in an 'Active: Refill In Process' status**
  
 <details>

  <summary>Expiration Date</summary>

**Q5** Does "no longer fillable" mean "renewable" or "refillable?" 
  
**A: [Eric]: neither; it means 'not fillable/refillable' and it may or may not be renewable. NOTE: MHV does not have a 'renewal request' path, only a user-initiated secure messaging that is not directly associated with the pharmacy module (we're working to create this experience).**
  
**Q6** Can we confirm this doesn't relate to the pills expiration use? 
  
**A: [Eric]: confirmed; MHV doesn't get the date in which the medication/pill expires, only the legal prescription expiration date**

**Q7** Why would a prescription expire? Who determines this date (doctor, pharmacist)? 
  
**A [Eric]: the legal expiration date of a prescription is determined by the issue date, the days supply, and the legailty of the prescription (DEA Schedule (i.e. DEA Schedule II medications such as morphine do not have refills and will expire 30 days after being issued for a 30 day supply, which is the maximum days supply for a DEA Schedule II)**
  
**Q8** Why is this date important to Veterans? How are they using this date? 

 **A: [Eric]: this date informs the user that regardless of the number of refills remaining, this prescription can no longer be requested once the legal expiration date is reached and will require a new prescription (renewal) to get more.**
  
   
 <details>

  <summary>Dispensed Date</summary>
  
 **Q9** 1) What does dispensed mean?
  
 **A: [Eric]: this is mapped to the 'released date/time' in VistA which is when the 'fill' or 'refill' was actually verified by a pharmacist and placed into a bag (either to the pharmacy window or mail) for dispensing. It is the closest date we have for showing when the medication was 'dispensed'**
  
**Q10** Does it mean the date on which the pharmacist physically put pills in a bottle? 
  
**A: [Eric]: this is mapped to the 'released date/time' in VistA which is when the 'fill' or 'refill' was actually verified by a pharmacist and placed into a bag (either to the pharmacy window or mail) for dispensing. It is the closest date we have for showing when the medication was 'dispensed'**

**Q11 Why is this date important to Veterans? How are they using this date? 

**A: [Eric]: see attached refill user guide**
