# VSA - Facility Locator: KPI Setting (WIP)

## Product Line
- Unauthenticated Experience
## North Star: TBD
## Product
- Facility Locator 
## High Level Objectives
- Work with Veterans and beneficiaries to design and deliver the best digital experience in the federal government.
- Provide a single, consolidated place across VA.gov where Veterans and beneficiaries can easily find and understand high-level information about VA facilities and the benefits and services that are offered
- Design customer-focused, data-driven interactions to improve ease of use and comprehension 
- Integrate access to emergency/urgent care facilities
- Prepare Veteran for the visit: what are the obligations of this tool related to preparing for the visit?
## "Assumed" Pain Points
- Finding a facility (with Facility Locator or outside of Facility Locator) is frustrating for Veterans. The process is lengthy and not always successful.
- Searching for a facility often requires use of more than one Facility Locator, resulting in inconsistent presentation of information and confusing navigation. 
- Search results can be incomplete and/or incorrect with high latency/timeouts
- Information presented can be easily misunderstood or incomplete, may not represent what is actually offered
## Desired Outcomes (WIP)
- Driving Veterans into Benefit Hub (need to confirm intent with Andy)
  - could look at exit rates (assuming exit means they did not find what they were looking for)...how deep do we expect them to go? To Facility Detail page? To click the phone number or look at the map? May be facility-type specific (VHA vs Benefits vs Cemetery)
- Reduced time spent on finding facility information.
  - _I notice VSP has this:"90% of user requests are served in <1000 ms (latency)" or do we want to measure in "clicks"_fewer queries? less scrolling? Magnification? Search refinement? 
- Enhanced Veteran comprehension about available services, where to access the services and how they will be covered 
  - (_how can we measure this?_ _"did you find this useful? Did you find what you are looking for? Thumbs up/down?_
- Reduced number of calls regarding facilities and scheduling and satisfaction
  - (_Call center data about specific items, such as parking_) TBD
## Hypotheses
- By reducing the bottleneck at the API gateway (Kong) and implementing other performance improvements, we expect search performance to be on par with private sector industry standards to deliver a best in class experience and been seen as a trusted, reliable source. 
- By applying the appropriate level of information to be surfaced on external websites, we can serve the Veteran's basic search needs outside of the Facility Locator as well as within the application.
- By incorporating Urgent care services into the Facility Locator, we expect Veterans to find, understand and utilize information for these services more quickly. 
- By implementing Health Services taxonomy, we expect Veterans to be able to search and identify the VAMC that provides the services they seek.  
- By conducting research, we can test our assumptions about user pain points.
