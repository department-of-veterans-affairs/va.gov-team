# **How might we reduce overpayments by increasing eligible dependent REMOVALS?**

**Purpose of this doc:** To identify the different approaches we could take to reducing overpayments via a well-designed "remove" experience. Reviewing the pros/cons of the different approaches allows us to prioritize which effort to do first, and in what order.

**Why picklist?** Our hypothesis is that the primary reason users don’t remove dependents at the right time is that they don’t know which life events trigger dependent removals, or how quickly they need to report the removal. Or, they don’t remember which dependents are on their benefit, or that they have dependents on their benefit at all. 

We think the biggest driver of timely removals would be a communication campaign that relies on timely email/text/mail reminders, and perhaps a dependent widget on MyVA dashboard. Other teams own those experiences, and we've begun conversations with them, but these represent long-term plays.

The picklist approach is a secondary way to get at this problem, by surfacing for the Veteran all eligible removal reasons for their specific dependent, based on the dependent information we already have on file, within the existing form flows we have built (686c/674 combo and 0538\)

We could incorporate the picklist design element in a few different ways: 

## ***1\. COMPLEXITY ON THE VA: Add picklist to 686c only. In annual verification via the 0538, Veterans select “no changes” or “changes”, and if changes, we direct them into 686c***

### Pros

* Most removals are done using 686/674 (data needed) – tackling this first would lead to a bigger overall impact  
  * Since it’s a live form, other pages on [VA.gov](http://VA.gov) and print materials (assumption) link to this form; therefore, it has more traffic  
  * All programs (disability, pension, and survivor payments) use this form for adds/removals, rather than the 0538 (which is just for disability)  
* Almost all removal use cases are handled by the 686/674, whereas the 0538 only allows some removal types  
  * The only use case not handled in 686c is adding a parent or reporting a change in their finances ([VA Form 21P-509](https://www.va.gov/find-forms/about-form-21p-509/))   
  * 0538 handles divorces, but not parent deaths or changes in student status  
* The 686 can be auto-processed by RBPS (leading to faster processing and reducing overpayment due to delay), whereas the 0538 cannot  
  * This is with the caveat that our current digital form CANNOT be processed by RBPS, but we are planning to prioritize a back-end fix to that soon  
  * Dependent removals submitted using an 0538 are manually processed and, given the lower priority of EP130s in the manual queue, these claims could take months to process.

### Cons

* Risk for dropoff when transitioning between 0538 and 686  
  * It’s a hybrid form experience (more complex) because the 0538 needs to be submitted to capture the y/n, and then a 686 needs to be submitted to capture the removals.  
* Increased technical complexity (assumed), since we are attempting to change the VBA process to better align with veteran needs/expectations, rather than just digitizing the process as-is

### Design Level of Effort

* Medium \- The screens for 686c/674 will be the same or similar to those already designed for 0538\.   
  * All the removal pages collecting the information have already been designed, so they might need slight design and content changes after our picklist research.  
  * We would not need to design/maintain 2 sets of picklist removal flows for 0538 and 686 – just the one for 686\.

### Engineering Level of Effort

* TBD

### Iteration Sequencing Possibilities

1. Redo ‘remove’ flows w/ picklist in 686  
2. Redo add flows in 686  
3. Connect 0538 better to 686  
4. Allow 686 to populate and submit 0538  
   1. Ex: users indicate for EACH DEPENDENT whether they have changes or not, and we submit 686/0538s as needed  
5. Future \- Allow 686 to do diary stuff in the background, so no humans touch 0538 unless the veteran doesn't respond to the verification request

## ***2\. COMPLEXITY ON THE USER: Picklist in 0538 (Dependent Verification) and 686/674 (Add/Remove dependents)***

### Pros

* Because the 0538 has fewer use cases and has already been mostly designed.  
* This mirrors the current paper form experience – we don’t think this is a ‘pro’ for the veteran, but fits into the current VA processing ecosystem.   
  * By going in a different direction, we increase the risk of misunderstanding the processing experience and messing it up for VSRs  
* The MVP fulfills an administrative need, but not a user need. Adding picklist to this form would make it more useful for users. The MVP 0538 experience does not address the overpayment problem – users can only report ‘no changes’, which doesn’t impact overpayments, because they have no one to remove.

### Cons

* The 0538 only applies to the disability benefit – users on pension or survivor payments wouldn’t get any benefit from a picklist in this form  
* The 0538 does not capture as many removal use cases, so a Veteran may end up filling out the 0538 for some removal use cases and then still need to fill out a 686 for the remaining ones – there is risk of veterans not understanding this, and thus ending up with debt out of confusion.  
* Leveraging the 0538 rather than the 686 for removal of dependents will delay the processing of removals because the 0538 removal workflow is not automated  
  * Dependent removals submitted using an 0538 are manually processed and, given the lower priority of EP130s in the manual queue, these claims could take months to process.   
* Higher overall maintenance cost for our team  
  * The removal flow in the 0538 and the 686 are very similar, so the effort to implement and maintain is duplicative

### Design Level of Effort

* High \- design will need to build and maintain Figma files for two nearly identical (but not identical\!) dependent removal flows

### Engineering Level of Effort

* TBD

### Iteration Possibilities

1. Redo ‘remove’ flow w/ picklist in 686  
2. Redo add flows in 686  
3. Add remove flows to 0538  
4. Connect 0538 better to 686

---

**Questions for David:**

1. **Are there pros/cons we haven’t considered, are wrong, or should be weighted differently than they are described here?**

**Unknowns:**

- **How verification works for Pension / Survivor payment programs could impact the direction we decide to go in (or offer up things we haven’t considered yet)**  
- **ENG feasibility of generating 0538 after 686 submission**  
- **Design/ENG effort for connecting the forms in both options**

---

## Scope: Picklist in 686c Supporting Remove Flows (Iteration 1\)

## Goal

Make it easier and faster for Veterans to remove dependents on VA.gov by introducing picklist functionality in the 686c remove flows.

The outcome is fewer incomplete submissions, less Veteran confusion, and reduced risk of overpayment tied to delayed or missed removals.

## Success Metrics

* Primary: Conversion rate on 686c remove flows  
* Secondary: Average time to complete a removal submission

---

## In-Scope

1. Form Context  
* Picklist applied only to 686c remove flows   
* Applies only to dependents already on file in the Veteran’s award record  
2. Functionality  
* Surface removal reasons with a picklist based on dependent data we already know  
* Allow Veterans to select from clear, specific reasons (e.g., divorce, child turned 18 and not in school)  
* Eliminate redundant questions where answers are already implied by the picklist choice  
* Ensure each removal reason routes the Veteran to only the minimum required fields  
3. Data Handling  
* Dependents displayed are drawn from structured data in the Veteran’s award record  
* Picklist selections map directly to valid claim codes used by VBA intake systems  
* Output structured to support eventual RBPS auto-processing, though not implemented in this iteration  
4. UX and Content  
* Build on existing 0538 design work only where relevant for consistency  
* Align all interaction and visual elements with VA Design System  
* Simplify and clarify instructional content to minimize friction

---

## Out-of-Scope

* Add dependent functionality (any 686c add flows)  
* Use of VA Form 21-0538 for removals.   
* Complex or conditional removal logic, such as:  
  * Automatically removing stepchildren when a spouse is removed  
  * Handling dependent-level branching cases  
* Implementation of data structures that support additional RBPS automation beyond stored dependent data available via “Picklist”

---

## Dependencies

* Reliable access to dependent data in award records  
* Agreement with claims intake stakeholders on mapping picklist reasons to valid claim outcomes  
* Finalized design specifications for picklist interaction and remove flow content

