# Family and Caregiver Benefit Hub Implementation Plan

## Next steps
- Document scope and design decisions based on research
- Finalize IA design
- Identify any additional research needed
- Audit VFS products impacted by design approach and identify changes needed
- Establish a roll-out approach for the overall structure and individual hubs
- Identify key stakeholders
- Define a communications plan

## Product impacts

### Product teams
- Identify all products impacted by this effort that will require content, design, development, URL changes, and/or redirects
  -   Health care:
      - **Caregiver form (10-10CG)** is in family member, but will have to move so will have a URL change.
      - **CHAMPVA** form is in development. We'll need to make sure the form launches at the URL it will live at or will be able to move post-launch.
      - There will be more health care forms, but this work should be done before they launch.
  - Disability:
      - DIC: No live forms. Check with benefits on timing for forms and coordinate URL. This will be a tricky one because it's the 534-EZ which is for DIC, Pension, and Accrued benefits. There's also a 535-EZ for parent pension. There's another form for Accrued benefits. And there's a supporting form.
  - Education:
      - **DEA (22-5490) (also for FRY):** Form will move into the family member hub and will require a URL change.
      - **Use transferred benefits (22-1990E):** Form will move into the family member hub and will require a URL change.
      - STEM: Won't move because it's for both Veterans and family members.
  - Careers
   - PCPG (25-8832): Won't move because this is for Veterans and dependents.
  - Pension
    - Same form as DIC.
  - Housing
    - Surviving spouse COE: Forms are not online at this time. Will need to connect with benefits as forms get digitized.
    - Life insurance
      - No forms live on VA.gov at this time.
    - Burials
      - Pre-need: Form won't move because it's for Veterans and family members.
      - None of the memorial item forms are online at this time.
      - **Burial allowance:** This should move into family member hub, but we may need to have more conversation about it.

### Benefit hub and navigation 
- Primary nav, home page, benefit hub pages, side nav, search
- Research, design, dev, CMS?
- Top nav
  - Do we want to implement a flyout menu? There isn't one now. Let's revisit the conversation about the 2 column headers for hubs that don't necessarily map to "Get"/"Manage" (like this one and records). Will revisit this. We can do the discovery around the technical lift and then will decide if we try to include this in the launch.
- Homepage: Nothing needed for launch.
- Hub page
  - For tasks: Don't use teaser text
  - Future: Exploration around adding actual tags pulled from CMS (vs. our "pseudo" tags that are there now) and making them interactive to impact display.
- Benefit detail pages
  - Future: Exploration around dynamically pulling in top Q&As or top R&S pages.
- Left nav:
  - We'll need to implement this. We'll need to determine what we want to call the spokes.
  - How do we want to handle the references to family member programs in the benefit hubs? We don't want to remove those, but we also don't want to have duplicative pages in both the benefit hubs and the family member hubs. We may have duplicative landing pages for family member benefits for a bit.
- Footer:
  - Add "Family member" link in the audience column for footer.
- Search
  - No changes needed at this time. CAIA to determine any best bet changes.

### Resources and support
- Ability to select more than 1 audience - Complete
- Review audience tags and look at potential for subtags (like survivor)
- Landing page design: We'll want to add a family member topic section. This isn't a launch blocker.

## Roll-out approach

Benefits hub pages/forms/tools will be roll-out hub by hub in the following rough approach:

1. Top-level hub and landing pages
2. Health care (Health care and disability in family member hub)
4. Education
5. Disability
6. Pension
7. Life insurance
8. Careers
9. Housing
10. Burials

- Establish the overall structure needed in the new family member hub and build out appropriate landing pages and links
  - Is it possible to publish this structure with links pointing at the existing placement of all content? Yes.
  - Do we only publish the structure supporting a single hub as we work on it or can we launch the full structure? Answered above. We're going to build out the hub and top level landing pages and then built out by hub.
- Build out new content and modified Veteran content as needed to support and gain stakeholder approval as needed
- Complete any design and development work needed to support moving forms/tools to their new location
- Move any existing content pages
- Implement redirects

Hub | Order | Work start
--- | --- | ---
Health care | 1 | 
Disability | | 
Education | | 
Careers | | 
Pension | | 
Housing | | 
Life insurance | | 
Burials and memorials | | 
Records | | 

## Stakeholders

#### OCTO stakeholders
- Portfolio leads:  Chris Johnston, Lauren Alexanderson, Zach Goldfine

#### OCTO Product stakeholders


#### Health and benefits stakeholders
- VHA Digital Comms: Jenny Hieland-Ludke


## Communication plan
- Communication to OCTO stakeholders
  - 1.11.24 team meeting
  - Upcoming OCTO Monday design meeting (Mikki to schedule)
  - Share with OCTO benefits colleagues in next benefits/content/IA check in
  - Share with Chris
  - Share with health portfolio
  - CAIA deep dive
- Initial communication to all impacted stakeholders
  - Present to the survivor group (Danielle to reach out to Melissa R to schedule)
  - Share in next 1:1 with Jenny H-L from VHA digital media
  - Share with IVC program office
  - Share in kickoffs with each administrative group
  - Share in digital media syncs
  - Share with OPIA as a follow up to earlier meetings
  
- Ongoing communication with stakeholders during roll-out

## Implementation next steps

- Danielle and team to build out landing page drafts in Drupal
- Mikki to finalize the IA structure


