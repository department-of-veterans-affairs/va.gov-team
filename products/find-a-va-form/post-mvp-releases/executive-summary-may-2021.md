# Find a VA Form Executive Summary May 2021
## Current State of the Product
- 491 total forms
- 446 forms with at least a minimal detail page
- 46 with detail pages containing maximum amount of content
- Average of X forms added per week - need reliable count from API records; we cannot rely on the dates the forms managers enter.
- Out of those, we publish and average of X detail pages
- Our current model for Detail pages is: We only add custom content of any type for the detail page if the Form receives more than 200 queries per month on average.

## Search Improvements
- We're iteratively improving search - we have solved one of the biggest pain points (representing what percentage of overall search queries?), which is the format of the form number.  In solving that, we've solved probably X? of the search issues [what is that number?]
- Now we're working on ranking matches and ordering them by relevance (what percentage of search queries does this impact?)
- Our initial approach was to add logic in the front end to avoid creating additional dependencies on the Forms API, and we encountered the following:
    - Multi-word search terms are "deconstructed" within the Forms API logic, making it impossible for us to pass in phrases such as "direct deposit" or "power of attorney".

## De-couple from Lighthouse
- How Forms data processing works now: https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/migrations-forms.md
- We looked at it at and determined it was not the right solution -- at this time -- because…
  - Per Elijah Lynn: The CMS cannot technically accept any incoming public external traffic right now, because it is in a specific PROD network (vagov-prod vpc) that doesn't have an internet gateway (to allow the traffic in). We would need to move the CMS to a different VPC and change things up a bit, including public DNS and public TLS certificates (or passthrough with Lighthouse). That is non-trivial (not impossible though). A bunch more detail I haven't included, to keep this answer more brief. 
  - Per Nick Sullivan: It makes sense to me, but to restate, right now relying directly on the CMS for a data source is not technically feasible. If it were, we would've done it already (much simpler.) But in some of the restructuring we are considering in #content-release-engineering it could become possible
  - _Question for CMS/Tech team: What are the pros/cons of de-coupling FaF from Lighthouse and what is LOE?_
- Not now because it would involve CMS effort, and they don't have bandwidth
- Timing - searching solution is better in Lighthouse 
- Lighthouse can handle the load better and we can handle a more sophisticated search
    - Note from Nichole - No I did not reach out to Tina Skelly, thought maybe we could do that together since a decision really should be made for both the API external consumers and for the VA forms search (maybe the same decision).
Vet Pro is an application built by Panoramic Software, which is used by VSOs and Veterans to submit benefit claims. It includes a form search page which uses the LH forms API similarly to how the VA.gov search page does except that it is a little more integrated as a next step with submitting the forms for benefit claims immediately after. 

## Find a Form POC
- Brian McCarthy's gone
- Janel had little knowledge of the POC when we spoke with her
- We agreed to re-visit in the fall - Janel doesn't currently have bandwidth; Josh is taking extended OOO
- CMS doesn't have bandwidth; they are focused on other projects
- What would be the goals of the POC
    - Content rigidity/data hygiene
    - Put the content back in the hands of the content manager
     - Extend beyond VHA, adding NCA (National Cemetery Admin), others into the mix
    - What is the value to the Veteran and their caretakers?
      - More forms are more findable 
