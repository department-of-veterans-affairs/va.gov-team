# Cerner Integration (Mobile Cheat Sheet)


**Mobile integration with Cerner data on Health services**
What features will be expected to incorporate Cerner data? 



* Appointments
* Secure messages, 
* Health Records 
* Medications

**Timeline:**

Web's goal to integrate Cerner data is in the next year. 

Example using medications:

•**By Fall 2023:** A small group of trusted users can try out the new medications on [VA.gov](http://va.gov/) experience (VistA data only)

•**By Spring 2024:** All Veterans can try out the new medications on [VA.gov](http://va.gov/) experience (VistA data only)

•**By Summer 2024:** Cerner data integrated into medications on [VA.gov](http://va.gov/).

•**By October 2024:** All Veterans fully using the new medications on [VA.gov](http://va.gov/) experience.


---


# Mobile’s Role

**How will mobile consume/integrate with the new data?**

Will the data be available in the existing endpoints?

1. Pulling in data (new or existing) and merging it into the existing **MHV/VAOS** API schemas for Secure Messages, Medications (RXs), and appointments would be ideal for mobile.

**Pro:** This would mean web/mobile wouldn’t need to do much, or any additional work, other than testing, for the Cerner data to start showing up



2. Adding new endpoints specifically for Cerner data, mobile will have to integrate with these new apis.
    1. Ensure mobile is aware of the new api’s and timing of when they are avail to consume
    2. Mobile will need development time to integrate with the new service(s).  Understanding if there will be Cerner specific APIs ( i.e will there be a service to call for VISTA vs. Cerner) and determine how that will factor in UX design. 
    3. We will need to determine how we will want to handle old versions of the app (include new Cerner data or not)

Mobile Service Map:   [https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/BackEnd/Architecture/Services](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/BackEnd/Architecture/Services)
