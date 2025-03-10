## Mar 10, 2025 
## EZ/EZR forms - Using Pending and Enrolled statuses to trigger comms to Veterans

### Notes

* We would like to talk through some possibilities to use VES statuses and info to kick off Welcome and Pending (need more info) emails/texts to send to Veterans.
* Looking to understand
    * What happens to the status of the record when an EZ that goes through automatic processing
        * System verifies eligibility, disability rating from VBA, and military info, Veteran status
            * If all good, They become auto-enrolled & PG is assigned
        * Are there further reviews of these records before being marked as Enrolled?
            * For Happy Path, no further review is done to change Enrolled status
        * Outbound calling workflows are kicked mostly for non-eligible Veterans
        * If initial decision can't confirm Veteran status or eligibility (no disability rating is found), a letter is kicked off after 5-days, instructed to call, mail in or use EZR to attach docs/fill out info.
            * Calls are tried to be done before the letter gets there, help get the info over the phone
            * VES could def onboard to VA Notify
        * What happens when a record is pending and an EZR is submitted with the new info
            * Member Svc CRM would create case/workflow for new EZR forms on Pending statuses
    * What happens to the status of the record when more info is needed
        * I know we have talked about this when discussing “means test” requirements
        * Is there a “reasons” or similar field that indicates what is needed from the Veteran?
            * Yes, Financials and Eligibility are the 'reasons'
            * Two different version of the "Need more info" Letters are triggered based on Pending status and this field
        * What kind of workflow does this prompt (such as Veteran outreach call)?
            * Calls are tried to be done before the letter gets there, help get the needed info over the phone
    * How can we use this to kick off a notification to the Veteran?
        * Onboard VES to VA Notify - best long-term solution
        * [x] Heather to share these details with Angela Fulton and assist in getting a Change Request created and prioritized with the business for VES to schedule.
        * 10-10 team to work with MyVA team to show statuses on MyVA
            * [x] Preliminary meeting scheduled with MyVA PM Travis Cahill to talk thru needs
