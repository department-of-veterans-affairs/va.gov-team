# Research findings - Design validation (Mobile clinic design stakeholder feedback sessions) 

## Office of the CTO - Digital Experience (OCTO-DE) and VSA, Search & Discovery

Date: 10/11/2021

Leyda Hughes [leyda.hughes@adhocteam.us]


## Goals:
The purpose of conducting these feedback sessions was to validate or invalidate the MVP design of the new schedule section for use by mobile clinic/MMU facility types.

  - Identify problems with design
  - Discover opportunities to consider for future iterations

[Here is a link to the design prototype used in the sessions.](https://preview.uxpin.com/4f0991c7ec9db97d021d5bc6542a5492236522c4#/pages/142964759?mode=cvhidm)

## Research Questions

1. Can the new schedule section design be used by content editors to effectively communicate location and services information?
2. Is there information that cannot be communicated effectively with the new design?
3. What are the drawbacks to using the new design?
4. How can the new design be improved to accommodate additional use cases?

## Methodology

We conducted video interviews over Teamsite. Prototypes were screen shared and discussed in context with the facilities actual use cases and needs.

## Hypothesis and Conclusion

Content editors will be able to use the current design to effectively communicate location and services information to Veterans.

  - **Somewhat true:** The current design will allow content editors to communicate location and services for each "stop" that an MMU makes. However, it may not be the most effective way for editors to present this information nor for Veterans to consume it. 

## Key Findings 

1. Some MMUs travel hundreds of times in a calendar year making it inefficient to create a complete facility site for each stop.
2. Some MMUs travel to multiple addresses with a shared city and state. 
3. Some MMU medical services are offered without an appointment.
4. Maintaining data accuracy for a fluctuating number of websites may be difficult, if not impossible, for some low-staffed locations. 
5. Content editors liked the option of a flexible, rich text, content section.

## Details of Findings

1. Some MMUs travel hundreds of times in a calendar making it inefficient to create a complete facility site for each stop.

    - For example, for calendar year 2021, Palo Alto will travel to 206 sites, “stops”, 49 of them are unique locations, meaning they do 'repeat visits' to those 49 locations.

2. Some MMUs travel to multiple addresses with a shared city and state. 

    - For example, 5+ of Palo Alto's 49 unique locations are in “San Jose” alone so those 5 would show up as “Mobile clinic - San Jose, CA” with the current design iteration, indistinguishable, in the left nav but all would have unique addresses.

    > "I don’t think it would be helpful to have all of these different mobile clinics and locations given that, I mean we have 5 or 6 sites in San Jose alone. I’d hate for it to day San Jose, CA, San Jose, CA, San Jose, CA and have to click on each to see, ok this is the college." –PAO

    > "I think we’re going to have build different versions, because you’re right it would be confusing to see the city repeated, maybe in the short term, is zip code better." –webmaster

3. Some MMU medical services are offered without an appointment.

    - Palo Alto's MMUs travel to many Veteran communities who are either homeless, underserved or not yet enrolled, therefore their medical outreach model of healthcare is mostly walk-in yet highly efficient in that in a single meeting a Veteran and be registered, enrolled and complete their required first appt in order to get into the VA healthcare system. Venues targeted include: Homeless shelters, VFWs, colleges, senior centers.

    > "in general all of ours are walk-in, no appts.  So, we don’t know who’s coming ahead of time."

4. Maintaining data accuracy for a fluctuating number of websites may be difficult, if not impossible, for some low-staffed locations. 

    - Regarding 49 mobile location pages:

    > "I would have to go in maybe once a week, and verify the schedule and update it. It would not be like other locations. It wouldn’t be static. It would require alot of editing on our part."

    - Regarding being a 1-man-shop:

    > "I have 3 mobile health and two brick and mortar health clinics. It becomes very time intensive, that’s where having a webmaster, would be awesome. " 

5. Content editors liked the option of a flexible, rich text, content section. Even when the idea of editing multiple websites wasn't the ideal solution for the editors, hearing that the schedule section would allow rich text was received positively.

   > "that would work for us"

## Additional Findings

- MMUs can be pulled at any time for emergency response, such as disaster relief.

  > Laura: "Also used to deploy in emergencies. So us in California, its alot of wildfires so MMUs get deployed for that as well." 

  > Dr Lighthouse: "And sometimes the clinics will have power outages because they’re concerned about fires and we’ll deploy MMUs to those events. Other times we’ve deployed when Veterans have been devastated by fires and have lost their homes and their medication and teams have gone out to support those Veterans."

## Recommendations
Near Term:
- Reconsider if MMU location stops need to be listed in the left nav of the page. It may be more usable to not list any MMU locations in the short term.
  - see [Mikki's recommendations for v4](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29332)
  - Include an 'On this page' component for quicker access to: "Main locations", "Health clinic locations", "Other nearby VA locations", and a new "Mobile clinic locations".
  - Consider how to make the creation and upkeep of mobile clinic websites, with their volatile schedules, easier on content editors. Examples: 
    - Could pages be easily duplicated so that Palo alto can duplicate 1 page 49 times for the unique locations that they will visit in a single calendar year
    - Could new ways of updating website data be created? e.g. Could a spreadsheet be used to update location, dates and times externally vs having to go in and manually edit websites? This would allow other staff, like admin roles, to assist in the keeping information up to date.

Long Term:
- Consider a different parent child relationship between a VAMCs MMU services and their location/schedule information.
  - Consider decoupling a stop's location information from the services offered by the MMU if all stops share the same service offerings. Consider dedicating a separate page for schedule and location information. Revisit concepts [V2](https://app.mural.co/t/vsa8243/m/vsa8243/1631037297093/f42e9797d06d776f255651afcc64b977025d977a?wid=0-1631284163564&outline=open) and [V3](https://app.mural.co/t/vsa8243/m/vsa8243/1631037297093/f42e9797d06d776f255651afcc64b977025d977a?wid=0-1631291621464&outline=open)

- Consider how Events pages can work with Mobile clinic facilities. 
  - Could the information architecture evolve to create a closer relationship between a location and an event? Could they link between each other so that the facility page does the heavy lifting of communicating health services and logistics, while an events page(s) can lists 200+ locations? 
  - How could we surface events into Facility Locator?

- Begin work to address how an MMU communicates its services and availability during emergency response. 
   - See additional [emergency response use cases](https://app.mural.co/t/vsa8243/m/vsa8243/1627038564401/bdd84c5da65e1000f7d3d2f2d365d03839a1466e?wid=0-1634040246979&outline=open) detailed in the [discovery phase](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2021-vamc-vha-mobile-redesign/discovery/research-findings.md) of this research.


## Next steps

- Test live pages with Veterans. 
  - Understand how Veterans who have used MMU services in the past, found out about them. How would Veterans know to look for mobile clinic services if they didn't know they existed? Palo Alto's PAO said it well when she question:
   > I don’t know how many Veterans would do a search or know what a mobile clinic is, or what services are offered there. So, could we instead do the search by the service instead. For example, if they put in, and I don’t know where they could search, but if they put in “Flu”, the pop up would be, flu clinic schedules, and then if the outreach team, and I don’t know if its in the background somewhere, the outreach team had, had a flu fair or an offering, they would see both, and they could see what’s closest to them. So that they’re looking, and that’s why I kind of got stuck on this page, [refers to health system health services] otherwise, I don’t know how many people would be doing a search for that or would know what mobile clinics do
- Start recruiting efforts to learn from Cheyenne, WY Veterans who've used mobile clinic services in the past. Work with PAO (Samuel E House - Public Affairs Specialist) who is willing to distribute a call for participation email to a segment of Veterans in his database that fit this profile. 
   - Reach out to Palo Alto PAO as well - we did not discuss this during the session.
   -  Target 1-month out from start of testing to allow for Perigean to help recruit but not too much that Veterans get called on for other studies beforehand.

## Appendix

- [Design prototype used in this study](https://preview.uxpin.com/20fd05cf8e86ce628f0c813166424d0a6ca38bfd#/pages/142038860/simulate/sitemap)

- [Research Findings - VAMC VHA Mobile Redesign - Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2021-vamc-vha-mobile-redesign/discovery/research-findings.md)
