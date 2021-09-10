# High-level product decisions & stakeholder questions about VA Forms 21-22/22a (Appointment of Veterans Service Organization as Claimant's Representative)
**VSA eBenefits Team | September 2021 to present**

`September 10, 2021` 

---

## Purpose of this document

This is to help guide and memorialize decisions made about different functionalities and behaviors for the feature we are working with.  

- [VA Form 21-22](https://www.vba.va.gov/pubs/forms/vba-21-22-are.pdf): Appointment of Veterans Service Organization as Claimant's Representative  
- [VA Form 21-22a](https://www.vba.va.gov/pubs/forms/vba-21-22a-are.pdf): Appointment of Individual as Claimant's Representative (Attorney, Claims Agent, etc.)

## Questions for Stakeholders

**Things we are curious about for Representative stakeholders**  
  
1. Workflow for the form:
- Where does it originate? **Veteran or dependents, caregivers, etc.**
- Where does the Veteran send it? **The Veteran must complete the form (electronically or paper), and submit it to their chosen VSO.** 
- From there (**the intended rep**) it goes to **the VSO who will sign and send on to VA (often via a VA "upload portal").**
2. What system(s) is/are used to send now? **We heard there is an "upload portal" to send the 21-22; eBenefits was mentioned once, SEP came up.** What is expected? **VA receives the form, then allows the VSO open access to the veteran's health records and claims (minus and restrictions). That's pretty much the sum of what the form does: POA so the VSO can see what the Veteran sees.**
- Is there regular downtime on partner systems for things like scheduled maintenance?
- Is the Office of General Counsel responsible for managing the system/process? **OGC is responsible for accreditation of representatives. Unclear if they manage Representative selection or open access to Veteran files.**
3. What is the appointment process?
- Where or who set the rep in CorpDB for the Veteran
4. How long does that take?
5. How often is the list of accreddited reps updated?
- It seems that email address is preferred for initial contact (reaching out directly), is that collected and available? Or will it eventually? Is it a spam risk?
6. Is there a place to determine if the application is pending?
- Do we need to manage its status?
7. How does SEP play a role?  
- Is it just another portal for VSOs to use?  
- Can we get a walkthrough?  
- How many are using SEP?  
8. Is there anything on the form(s) that is not necessary?  (What is the minimum required fields for successul addition?  
9. How are reps removed? **Representative POAs can be terminated when the Veteran or Rep sends a letter to VA stating POA is revoked/terminated, or when a Veteran selects another representative by submitting another 21-22. There is no automatic expiration (death?).**
10. For VA use only, do we need to address this?    
<details>
  <summary>Click to see screenshot</summary>
  
  ![image](https://user-images.githubusercontent.com/53826255/132881760-e29a1be7-ca56-45dd-8d49-8ccbeefce464.png)
  
</details>

11. What are the largest pain points?   
- What would make things easier for the Veteran?   
- For VA?  
12. How does Direct Upload play a role in this application today?   
- Centralized Mail?   
- We have heard of SEP, Direct Mail Upload, CMP, Vets Pro, VBMS, CAG  
13. Is it necessary that the forms be PDF'd and uploaded to eFolder?  

**TL;DR - what does this mean?  what do we do next?**

## Tickets to write:

## Decisions

**June 17, 2021**  
Hold off on Save in Progress afor searching for a rep for now: too small to justifiy SIP on search POA
