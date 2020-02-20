# DALC Weekly Meeting

## Agenda:
- Introductions
- Discussion around the following design questions:  
   -  What hearing aid items should Veterans be able to order online, across all Vets? Short term vs. long term?
   - What is the range of items (quantity) that Veterans could be eligible for in each category (domes, wax guards, misc) Ideally, we'll get an average and extreme cases from this question.
- Reorder API update | questions | timeline <Critical Blocker, Dev Team>
- Present current [prototype screens](https://vsateams.invisionapp.com/share/6MVTG94WNH5)

#### Attendees: 
Leah Keeler, Riley Orr, Becca Walsh, Amen Ra, Mahariel Rosario, Cameron Testerman, multiple DLC folks 

#### Background:
Our team, Benefits & Memorials 2, is working on modernizing the digital mechanism Veterans use to order medical devices. Practically, this means working with Veterans to design and launch a new ordering mechanism on the VA.gov platform.

#### Purpose:
These weekly syncs between BaM2 and the DLC are meant to discuss work currently in progress around the Medical Device Tool. The goal of this week's meeting is to get answers to critical questions that are blocking both design and development work.

#### Outcomes:
- The design team received information that will influence the accessory selection screen's design. They're now unblocked and can begin designing that portion of the form.
- The DLC's projected the API completion date: March 9th 
- The DLC had positive reactions to the current prototype and is interested in viewing the Invision screens outside of the meeting 

## Notes:
- **We will not be able to display category type in association with accessory items**
- Categories (disclaimer: **items are not mapped to categories**) 
   - Domes
   - Wax guards
   - Dryers (Drying agent / desiccant / dehumidifier) - #1 damage to hearing aids is moisture
      - Specific to different brands
      - Select that item each time they order
      - Rechargeable cases have desiccant capsules and they have generic dryers for older ones
   - Cleaning tools
     - Specific to types of hearing aids and brands
      - For in air hearing aids - wire loop to scrape off ear wax
      - Older aids have a tube - fishing line to clean it out
      - Some cleaning tools are labelled as wax guards
- Average of 2-5 accessory items ordered in the past 2 years
   - 10 could be possible but not common in a single request 
- Domes, wax guards, and dryers are most frequently ordered 
   - "Tools" were mentioned as next most common
- Categories cannot be traversed by item name because category name is not always containee within in the item's name 
   - Sent data will have a name like “C-Guard Cleaning Cloth” for each item

        
 ## Next Steps
- The design team will begin designing the _Accessories selection_ screen 
- The team will send the prototype's public link to the DLC
