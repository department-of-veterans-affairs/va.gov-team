# Why build an enterprise services taxonomy for VA.gov (and facilities websites)?
- Coordinated information and service offerings leverage the reuse (and not duplication) of relevant content
- Standardization leads to a predictable and familiar experience
- Consistent service names and cross linking to relevant content (types) across organizations help users know how to navigate them
- A taxonomy and related metadata can support programmatic cross-referencing capabilities via content types along with meaningful measurement

# How might we use a unified services taxonomy (use cases)?
## Internal organization use cases:

- A central office employee wants to map the Veteran-facing services taxonomy and related components in the CMS to the classifications in the Access to Care, and VA Online Scheduling (VAOS) systems (Dave Mazik's use case)
- A central office employee wants to enable a translation from the clinical services within the taxonomy to primary stop codes seen in the workload and used by DST for MISSION into a unified Veteran-facing service taxonomy (Dave Mazik's use case) 
-| Draft Mappings of Taxonomy to Primary Stop Codes, VAOS, and Acccess to Care Classifications here: <https://airtable.com/shr1qe5J2DmyKkPum>
- A central office employee wants to find services offered across the VHA enterprise and extend the capabilities of the facilities API to include wait times for an expanded list of services in the facility API.
- A facility employee wants to know what facilities offer a specific clinical service within a geographic area.
- A subject-matter-expert author tags authored descriptions with relevant conditions or procedures performed in the service so that cross-linking to health topics (licensed  or VA authored) can be surfaced programmatically and associated with that service.

## External/Customer use cases:

- A Veteran with hearing loss searching for a hearing test who can describe his symptoms but is not familiar with the clinical/formal names of the services that treats his symptoms or condition. 
- A medical student searching for residency programs in psychiatry finds applicable training programs that are linked to relevant Services at VA facilities that offer residency rotations or residency programs in psychiatry. 
- A caregiver who is searching to find services and programs applicable to their situation. purchase carry-on luggage and wants to filter results by price, color, and positive reviews.

## Discovery 

### Current state
Since each VA Health System is solely responsible for their websites, multiple issues arise

- There is no way to support standards due to the decentralized reporting structure
- Some facilities have more resources than others so some sites are more robust than others
- There is very little cross-facility/system/VISN communication regarding cross-linking needs
- There is no way to ensure consistency across how facilities describe their service offerings

### An audit of all A-Z Health Services across VA Facilities
The National VA (Health) Services list represents an audit and consolidation of existing VHA services classifications including:

#### External classifications
- All A-Z services listed across all 145 websites | <https://airtable.com/tblEvsCzOVX1ybpZg/viwUDT2SG29bLzEO1?blocks=bipenKkDclMfVPw9z>
- 12 Health Services included in the facilties API 
- VA Provider search service line listings | <https://www.accesstocare.va.gov/OurProviders/SearchResults#!#f=8&s=30&>
- Medical benefits package page services listings | <https://www.va.gov/healthbenefits/resources/publications/hbco/hbco_medical_benefits_package.asp>
- Specialty care services | <https://www.va.gov/healthbenefits/access/specialty_care_services.asp>
- Veterans Health Library topics | <https://airtable.com/tbln9CCnBhvF1dWpe/viw5vV0yyyOInxnWC?blocks=bipenKkDclMfVPw9z>

#### Internal classifications
- VHA Stop Codes | <https://airtable.com/tbl0Cdq8ngajAIUbx/viw5MICBjNRSMNK63?blocks=bipenKkDclMfVPw9z>
- Disability Benefits Questionnnaires (DBQs)| <https://airtable.com/tblu6wEmqyg1460D4/viwcXkbhWdZunEOMK?blocks=bipenKkDclMfVPw9z>
- VHA Treating Specialty Codes | <https://airtable.com/tblvGY8jsr2HLxcmQ/viwa7AeSIebq98V0m?blocks=bipenKkDclMfVPw9z>

The audit of A-Z Services pages on each of the 145 websites revealed that each facility website has it’s own unique A-Z Services List and there is significant variation in how each facility names and describes its services. 
- 2018 unique service names result when service names are aggregated
- ~ 1208 unique “Clinical” Service names (i.e., services that are directly related to clinical services -- have a stop code and/or represent the programs and services of clinical professionals and teams). 
- Excluded services like transportation, VSOs, facility services, canteen, service advocacy programs, residency programs, etc.)
- Little convention or consistency in naming and terminology of services across facilities websites
- The lack of consistency in how services are named creates confusion for users across the system
- Makes it difficult to reuse descriptive content about services across the ecosystem and crosslink it appropriately

## Files and documents
An Exploration of Healthcare (and other) Services across VA Facilities Websites: (Taxonomy Presentation) : https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/health-taxonomy/Exploration%20of%20Health%20Care%20Services%20on%20VA.gov.pptx



