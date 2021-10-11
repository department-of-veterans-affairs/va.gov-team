# Mobile clinic design stakeholder feedback sessions - Research findings

## Office of the CTO - Digital Experience (OCTO-DE) and VSA, Search & Discovery

Date: 10/11/2021

Leyda Hughes [leyda.hughes@adhocteam.us]


## Goals:
The purpose of conducting these feedback sessions was to validate or invalidate the MVP design of the new schedule section for use by mobile clinic/MMU facility types.

  - Identify problems with design
  - Discover opportunities to consider for future iterations

[Here is a link to the design prototype used in the sessions.](https://preview.uxpin.com/20fd05cf8e86ce628f0c813166424d0a6ca38bfd#/pages/142038860/simulate/sitemap)

## Research Questions

1. Can the new schedule section design be used by content editors to effectively communicate location and services information?
2. Is there information that cannot be communicated effectively with the new design?
3. What are the drawbacks to using the new design?
4. How can the new design be improved to accommodate additional use cases?

## Methodology

We conducted video interviews over Teamsite. Prototypes were screen shared and discussed in context with the facilities actual use cases and needs.

## Hypothesis and Conclusion

Content editors will be able to use the current design to effectively communicate location and services information to Veterans.

  - **Somewhat true:** The current design will allow content editors to communicate location and services for each "stop" that an MMU makes. However, it make not be the most effective way for editors to present this information nor for Veterans to consume it. 

## Key Findings 

1. Some MMUs travel hundreds of times in a calendar making it inefficient to create a complete facility site for each stop.
2. Some MMUs travel to multiple addresses with a shared city and state. 
3. Some MMU medical services are offered without an appointment.
4. Maintaining data accuracy for a fluctuating number of websites may be impossible for some low-staffed locations. 
5. Content editors liked the option of a flexible, rich text, content section.


## Recommendations
Near Term:
- Reconsider if MMU location stops need to be listed in the left nav of the page. It may be more usable to not list any MMU locations in the short term.
  - see [Mikki's recommendations for v4](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29332)

Long Term:
- Consider a different parent child relationship between a VAMCs MMU services and their location/schedule information.
  - Consider decoupling a stop's location information from the services offered by the MMU if all stops share the same service offerings. Consider dedicating a separate page for schedule and location information. Revisit concepts [V2](https://app.mural.co/t/vsa8243/m/vsa8243/1631037297093/f42e9797d06d776f255651afcc64b977025d977a?wid=0-1631284163564&outline=open) and [V3](https://app.mural.co/t/vsa8243/m/vsa8243/1631037297093/f42e9797d06d776f255651afcc64b977025d977a?wid=0-1631291621464&outline=open)

## Details of Findings

1. Some MMUs travel hundreds of times in a calendar making it inefficient to create a complete facility site for each stop.

    - For example, for calendar year 2021, Palo Alto will travel to 206 sites, “stops”, 49 of them are unique locations, meaning they do 'repeat visits' to those 49 locations.

2. Some MMUs travel to multiple addresses with a shared city and state. 

    - For example, 5+ of Palo Alto's 49 unique locations are in “San Jose” alone so those 5 would show up as “Mobile clinic - Jan Jose, CA” with the current design iteration, indistinguishable, in the left nav but all would have unique addresses.

3. Some MMU medical services are offered without an appointment.

    - Palo Alto's MMUs travel to many Veteran communities who are either homeless, underserved or not yet enrolled, therefore their medical outreach model of healthcare is mostly walk-in.

    > "in general all of ours are walk-in, no appts.  So, we don’t know who’s coming ahead of time."

4. Maintaining data accuracy for a fluctuating number of websites may be impossible for some low-staffed locations. 

5. Content editors liked the option of a flexible, rich text, content section.
