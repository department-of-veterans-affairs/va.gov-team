# VSA 10-10CG facility selection hub

**Note:** These Transition Docs are "point in time" documents, and may not reflect current progress, deployments or upcoming efforts.

<br>


## Table of Contents
[Background](#feature-background)

[UX research and design](#ux-research)

[Engineering artifacts](#engineering-artifacts)

[Zenhub epics and Process milestones](#zenhub-epics)

[Team members](#team-members-that-worked-on-this)

<br>

## Feature background
The purpose of this enhancement is to improve the user experience of selecting a VA facility on VA Form 10-10CG (Caregivers) and solve problems related to maintain hardcoded facilities lists.

**Current Experience**
Currently, to select a facility, the user must select the state from a hardcoded dropdown list of states. Then they must select a facility name from another hardcoded dropdown list filtered by the state.

![Screen Shot 2022-03-18 at 9 32 09 AM](https://user-images.githubusercontent.com/80857940/159012003-3f0d2282-7efb-44e7-b6a0-d4a97ead799c.png)

**Problems with current experience**

1. Facilities names change often, which requires us to update code with the new name.
2. Those living near a state border may need to go to a facility in a different state

**Proposed Solution**
The proposed solution is to integrate with the Facilities API. This will allows us to do City, State, and Zipcode searches rather than using the hard coded state and facilities dropdown lists. It will also allow us to always pull the current Facility Name rather than having to maintain our own list.

The CARMA team is beginning work to technically "map" facilities with a Caregiver coordinator. When this is in place the user can select any VA facility rather than have to choose from a list of facilities that have a Caregiver coordinator- users are often confused as to why their usual facility isn't on the list.


**Outline of the Changes:**

- Replace current state dropdown list with a textbox allowing a City, State, or Zip search similar to the Facilities Search UI.
- Replace our hardcoded state and facility list with a call to the Facilities API
- Replace the current facility dropdown list with a dynamic list of facilities 

**Note:** This facility search functionality on the 10-10CG could then be reused for a similar set of facility questions on the [10-10EZ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/Transition%20hub/In%20progress%20features/Facility%20selection.md) (Health care application) form in a future enhancement.


## UX research 
In almost every 10-10CG usability research study we've conducted we have had multiple participants struggle with the functionality that is currently in production.

The design is ready, but because of the complexity of this feature, we plan to conduct usability research once in staging (rather than UXpin) to ensure proper functionality and accessibility. 

## UX design
There are currently two different proposed design directions. One is to have the user search and select their preferred facility. The other is to automatically route them to the closest facility based on their address postal code, but still allow for a manual edit/selection. 


This table includes links to the individual design work products.

| Screens | Links  
| :--- | :--- | 
| Search and select mockup | [Sketch 1](https://www.sketch.com/s/5a676881-7aa8-4054-9b6e-34d86ced43d8/a/GmY3qY5) and [Sketch 2](https://www.sketch.com/s/5a676881-7aa8-4054-9b6e-34d86ced43d8/a/7yEZv92)
| Selection states and Error | [Sketch](https://www.sketch.com/s/5a676881-7aa8-4054-9b6e-34d86ced43d8/p/2D75EEBD-40EB-4F19-A2F7-1EB7CCF35952) 
| Auto-populated mockup | [Sketch](https://www.sketch.com/s/5a676881-7aa8-4054-9b6e-34d86ced43d8/a/eK4Vlw0) 
| Exploratory Mockups | [Sketch](https://www.sketch.com/s/5a676881-7aa8-4054-9b6e-34d86ced43d8/p/D741171D-81BD-4CEF-A7A2-69A548C8D346) 



## Engineering artifacts
- 

## Zenhub epics
- [Improve Facility Selection on the 10-10CG](https://app.zenhub.com/workspaces/vsa---10-10-team-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/19433)


## Process milestones
Include notes about which Platform process was in use when this feature was in design and development.

- [Design intent](https://app.zenhub.com/workspaces/vsa---10-10-team-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/27066)



<br>

## Team members that worked on this
- Dené Gabaldón | dene.gabaldon@va.gov -- UX researcher/designer
- Mickin Sahni | Mickinjit.Sahni@va.gov  -- Product lead


<br>

---
