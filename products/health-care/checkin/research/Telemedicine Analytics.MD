# Preliminary Analytics on Telemedicine

## Research Question
- What percentage of veterans have telehealth appointments scheduled on the same day as in-person appointments?

## Initial Findings
From CDW (corporate data warehouse, which is essentially a nightly copy of all of the data stored in every EHR instance from every facility). 
- Looking at Martinsburg for the month of November, there were about 38K unique patient/appointment date combos. Of those, about 14K featured multiple appointments, and of those, about 1K featured multiple appointments where at least one appointment was a telehealth appointment.
- So ~2.5% of the time a patient sees a provider, it is in a situation where the patient has multiple appointments on a single day and at least one of them is a telehealth appointment. at least in Martinsburg. during November 2021.
- Of the ~1K single patient, single day, multiple appointment occurrences, about 750 of them contained at least one non-telehealth appointment and one telehealth appointment.
- Big caveat: there is no official way of determining whether an appointment is telehealth or non-telehealth appointment. Telehealth status is inferred by the primary or secondary "stopcode" (basically care type) name of the clinic in which the appointment is made. these are managed at a facility/clinic level, so there is inevitably some variability across the system.
- Before the pandemic, about 3% of appointments were telehealth. In spring 2020, that spiked up to about 30%, but since has steadily declined to about 9% in November 2021.
See Patrick Bateman if there are additional telehealth-related (or just appointment in general ) data questions.
