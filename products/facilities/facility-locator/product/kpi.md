# VSA - Facility Locator: KPI Setting 

## Product Line
- Unauthenticated Experience
## North Star: TBD
## Product
- Facility Locator 
## High Level Objective
- Provide a single, consolidated place across VA.gov where Veterans and beneficiaries can easily find and understand high-level information about facilities offering priority VA benefits and services. 


## Objective 1: Improve Veteran search experience (as of December 6, 2019)

**Key Results**
- 100% of known (legacy) usability and accessibility defects are resolved by April 1, 2020.
- Search performance will be measurable by facility type and “category of care” by April 1, 2020. 
  - Future: Decreasing the time for delivering search results to <2-3s. 
- The rate of search refinements for VA Health will be 2% or lower by July 1, 2020.  
- A baseline rate for 5 star user satisfaction will be established by April 1, 2020. 

## Objective 2: Reform Community Care implementation (as of December 6, 2019)

**Key Results**
- The rate of search refinements for Community Care will be at parity with VA facility searches by July 1, 2020. 
- All urgent care searches will be performed using the modernized Facility Locator by February 2, 2020. 
- A baseline for the percentage of users searching for urgent care who download the benefit PDF will be established by March 15, 2020.
  - Future: increase % with future UX iterations 

## Objective 3: Improve data quality (as of December 6, 2019)

**Key Results**
- The number of missing expected data elements will decrease by 50% by July 1, 2020.

## "Assumed" Pain Points
- Finding a facility (with Facility Locator or outside of Facility Locator) is frustrating for Veterans. The process is lengthy and not always successful.
- Searching for a facility often requires use of more than one Facility Locator, resulting in inconsistent presentation of information and confusing navigation. 
- Search results can be incomplete and/or incorrect with high latency/timeouts
- Information presented can be easily misunderstood or incomplete, may not represent what is actually offered

## Hypotheses
- By reducing the bottleneck at the API gateway (Kong) and implementing other performance improvements, we expect search performance to be on par with private sector industry standards to deliver a best in class experience and been seen as a trusted, reliable source. 
- By incorporating Urgent care information into the Facility Locator, we expect Veterans to find, understand and utilize information for these services more quickly. 
- By implementing Health Services taxonomy, we expect Veterans to be able to search and identify the VAMC that provides the services they seek.  
- By conducting research, we can test our assumptions about user pain points.
