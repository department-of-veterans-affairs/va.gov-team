# Find a VA Form Executive Summary May 2021
## Current State of the Product
- 491 total forms
- 446 forms with at least a minimal detail page
  - the vast majority of these are published automatically with Name/Title, Subtitle, Related To, Form Last Updated, Download link and generic Helpful Links)
<img width="663" alt="Screen Shot 2021-05-03 at 2 51 37 PM" src="https://user-images.githubusercontent.com/63107147/116919407-39e1e000-ac1f-11eb-8471-8811d87e7fdb.png">

- 46 with detail pages containing maximum amount of content
- Average of X forms added per week - (**Note** - We need a means of obtaining a reliable count of newly-added records; we cannot rely on the *Issue Date*
 the forms managers enter. CMS modified dates are also unreliable because they update each time a form is changed (not just added).
- Out of those, we publish and average of X detail pages [*number??*]
- Our current model for Detail pages is: We only add custom content of any type for the detail page if the Form receives more than 200 queries per month on average.

## Search Improvements
- We're iteratively improving search - we have solved one of the biggest pain points, which is the way in which users format the form number.  In solving that, we've addressed 76% of searches.
- Now we're working on improving keyword-based matches and ordering them by relevance.  Inquiries without a specific form number account for 24% of searches.
- Our initial approach was to add logic to the front end in order to avoid creating additional dependencies on the Forms API.  While researching and designing this approach,  we encountered the following:
    - Multi-word search terms are broken apart within the Forms API logic and then searched by each individual word using "or" logic vs "and" logic.  This limitation prevents us from to conducting full-phrase searches such as "direct deposit" or "power of attorney" from the front end.
    - The fields in which terms were searched is pre-determined by the Forms API (Name and Title), and is unable to be influenced from the front end.  In order to search additional fields (such as *When to Use This Form* or *Administration*).

## De-couple from Lighthouse
- How Forms data processing works now: https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/migrations-forms.md
- We looked at it at and determined it was not the right solution -- at this time -- because…
  - Per Elijah Lynn: The CMS cannot technically accept any incoming public external traffic right now, because it is in a specific PROD network (vagov-prod vpc) that doesn't have an internet gateway (to allow the traffic in). We would need to move the CMS to a different VPC and change things up a bit, including public DNS and public TLS certificates (or passthrough with Lighthouse). That is non-trivial (not impossible though). A bunch more detail I haven't included, to keep this answer more brief. 
  - Per Nick Sullivan: It makes sense to me, but to restate, right now relying directly on the CMS for a data source is not technically feasible. If it were, we would've done it already (much simpler.) But in some of the restructuring we are considering in #content-release-engineering it could become possible
  - _Question for CMS/Tech team: What are the pros/cons of de-coupling FaF from Lighthouse and what is LOE?_
- Not now because it would involve CMS effort, and they don't have bandwidth
- Timing - searching solution can be made more efficient and scalable though Lighthouse since they have direct access to the database.
- Lighthouse can handle the load better and we can handle a more sophisticated search
    - Note from Nichole - No I did not reach out to Tina Skelly, thought maybe we could do that together since a decision really should be made for both the API external consumers and for the VA forms search (maybe the same decision).
Vet Pro is an application built by Panoramic Software, which is used by VSOs and Veterans to submit benefit claims. It includes a form search page which uses the LH forms API similarly to how the VA.gov search page does except that it is a little more integrated as a next step with submitting the forms for benefit claims immediately after. 

## Find a Form POC
- Brian McCarthy's gone
- Janel had little knowledge of the POC when we spoke with her
- We agreed to re-visit in the fall - Janel doesn't currently have bandwidth; Josh is taking extended OOO
- CMS doesn't have bandwidth; they are focused on other projects
- What would be the goals of the POC
    - System-enforced name formatting rules
    - Data hygiene
    - Give forms experts control of forms content
    - New keyword column would improve our ability to search by related words that may not appear in the form name
    - Extend beyond VHA, VBA, add NCA (National Cemetery Admin), others into the mix
    - Simpler troubleshooting with fewer systems in the mix
    - What is the value to the Veteran and their caretakers?
        - "One-stop shop" for all VA Forms regardless of Administration
        - Ability to conduct fruitful search with broader terminology
        - Streamlined forms management increases the liklihood that form data will be more accurate and up-to-date
