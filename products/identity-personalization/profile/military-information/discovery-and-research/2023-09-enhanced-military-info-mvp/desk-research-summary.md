# Enhanced military information MVP, desk research summary

October 2023

## Overall project goals and background
Legislation has been passed that requires us to increase Veteran’s access to their Individual Longitudinal Exposure Record \(ILER\). As VA leadership considered how to comply with the law, they identified an opportunity to improve the Veteran experience of applying for benefits by surfacing key data points about their military service.

In this MVP, our goals are to:
- Provide Veterans with access to a PDF of their ILER, so they can get this PDF anytime they need it.
- Make it easier for Veterans to apply for VA benefits by surfacing military service information that is requested in benefit application forms.

## Desk research goals
- Review information provided by stakeholders
- Review previous research conducted
## Summary

1. 8 key data elements about military service history have been identified by VEO stakeholders (and possibly DoD, VBA) as valuable to surface to help Veterans more easily apply to benefits they’re entitled do as a result of toxic exposures. 
2. In theory, adding these data elements to the VA.gov profile will help Veterans because the data will be available for pre-fill on VA.gov forms. This will make it easier for them to fill out these forms, since they won't have to look up the information.
3. Booz Allen Hamilton (BAH) completed 3 phases of work (pre-discovery, discovery interviews, and MVP designs) related to ILER and this exposure data, but it seems like it was much more focused on digitizing ILER than what we’re being asked to do.  
4. The BAH work highlighted some important things for us to consider as we approach our MVP.  It'll likely be useful to refer to this research throughout our process but a few things stood out for now:
   - **Veterans vary in their awareness and understanding of the PACT Act, its impacts to their benefits, and of terminology related to exposures.**
     *Implication*: we’ll need to be thoughtful about how we label this information, and also make it consistent with how it’s being asked for in application forms.
   - **Veterans expect to find their exposure record alongside related information, including their existing health records and through the Airborne Hazards and Open Burn Pit Registry sites. 12 of 15 veterans interviewed stated they expect to find their exposure record alongside their other VA health records.** 
     *Implication*: VA.gov's profile may not be the right place to surface this information. We need to learn more about that decision, and we should test whether or not it’s intuitive  coordinate with the health team to see if/how they’re thinking about including this info on their side
   - There is more information Veterans expect to see within their record than is currently included in ILER, including their actual exposures and their health information after separating from service.
     *Question:*Is this “more information” the 8 data points we’re surfacing?
   - The Discovery Research Summary suggests there is a specific format/known mental model that will be most helpful to Veterans in displaying this information. It specifically calls out “Displaying information longitudinally—across years, geographies and occupations—will aid in providing context.” And that interacting with the record will help Veterans: 13 of 15 interviewees expect the record to be interactive.
     *Implications:*
     - The data might be very complex and long, and a search or filter feature might be helpful.
     - We’ll need to talk to Veterans about this to really dig in and understand what is most useful in displaying this information.	
   - The MVP wireframes included content in addition to the 8 data points: presumptive conditions and intro content to explain ILER and set expectations regarding value, limitations, and health notifications. 
     *Implication:* We should consider whether or not we need to do this for our UX.
5. The team (below) that facilitated the research appears to still be around, at least via the VA Outlook directory. They may be available for conversation if needed.
   - Juhi Ghosh, BAH 
   - Meli Steele, BAH 
   - Tony Lee, BAH 
   - Melody Laishram, BAH

## Outstanding questions

### Military info data
1. Stakeholders have a hypothesis that surfacing 8 data points will improve the Veteran experience of applying for benefits. What is driving this hypothesis?
2. What do we already know about how Veterans are using those 8 data points identified?
3. How are veterans currently accessing the 8 data points identified when applying for benefits?
4. Which VA forms ask for the data points we’re surfacing? 
5. How do the forms ask for this data? 
6. If we’re adding these data points to our APIs, can we leverage them in other parts of the site (e.g. “Get” benefit pages) to personalize content and offer guidance on how to maximize benefits based on their exposure record?
7. The research summary states
> There is more information Veterans expect to see within their record than is currently included in ILER, including their actual exposures and their health information after separating from service. 
> 
Is this “more information” the 8 data points we’re surfacing?

8. Are there any other VA.gov teams we should be coordinating with for this work?

### The BAH Prototypes
1. How did stakeholders react to these?
2. Why was so much effort put into something that was never intended to be built?
3. What do stakeholders expect as next steps for these prototypes?

### Other topics
1. In the research summary, we saw that 12 of 15 Veterans interviewed stated they'd expect to find this information with their health records. How was it decided this should go in the VA.gov profile, which is counterintuitive based on the research, rather than on My HealtheVet, or MHV on VA.gov?
2. If we link to a PDF, is this going to be generated by something that we can control? It will have to be 508 compliant at a minimum, but ideally, usable. (508 compliance does not always equal usable)
3. How can we leverage the API owned by VA to generate the PDF version of the ILER?
4. Based on the documents we reviewed, it looks like the BAH team was handling this as recently as September 2023. Is this getting transferred to us simply because their contract ended, or is there more to the story?
