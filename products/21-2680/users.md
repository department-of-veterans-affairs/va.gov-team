# Who are the people who have an interest in this form

The simplest version is that our user is someone who is entitled to VA benefits who needs a caregiver. 

* **User**: the person filling out the form on the webpage.
* **Veteran**: the person whose service qualified for VA benefits
* **Claimant**: The person who needs care
* **Caregiver**: a person giving care to the claimant (no info about the caregiver is necessary on the form)

Most often, the **Veteran** and **Claimiant** are the same person (To put it smiply, the Veteran needs a Cargiver for themself).

Sometimes the **Claimant** is the **Child**, **Spouse** or **Parent** of the **Veteran**. In these cases, it's possible/likely that the Veteran is deceased or has a disability that prevents them from being a caregiver to the claimant.

We know (by the nature of the form) that the **Claimant** is someone who needs assistance in personal care, due to a disability. Therefore, we should be especially cognicent of the challenges of this form. It's not unlikely that the Claimant is currently hospitalized.

## Assumptions Made
In our initial iteration of the form, we assumed that the **User** was the **Veteran**. However, [we received feedback](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127988) from our stakeholders that this should be changed.

## New proposal

### New Assumptions
(validate with stakeholders)
Both the **Veteran** and the **Claimant** (if the claimant is not the veteran) are likely (certain?) to have had previous contact with the VA. Because of this previous interaction, the Claimiant is likely in VA data sources like MPI (the master person index, where id's such as SSN and file number are stored) and VA Profile (the VA's central location for contact info such as addresses and phone numbers).


TODO: finish...
