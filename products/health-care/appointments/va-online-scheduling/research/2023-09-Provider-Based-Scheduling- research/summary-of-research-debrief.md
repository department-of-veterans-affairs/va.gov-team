# Research Debrief: Appointment Scheduling Processes at Cerner and VistA Sites

## Purpose
This is a high-level overview of the appointment scheduling processes at Cerner and VistA sites, compiled from our visits two facilities that use VistA and one that uses Cerner. 

While we don't believe two visits were enough to fully understand all the nuances between the two scheduling systems, the takeaways that follow cover some of the key similarities and differences that we heard. We'll be looking in detail at these findings in our full report. 

## VistA vs. Cerner

The main difference is that appointments in VistA are tied to a [clinic](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/feature-reference/vista-appointments-facilities-clinics.md), and selecting a provider is not required to schedule an appointment, where in Cerner the appointment is tied to a resource. This is usually a provider, but may also be a:

- A generic name to indicate multiple providers may service Veteran.
- A piece of equipment.
- A clinic name.

Other key differences:

| **Area**                                              | **Cerner**                                                          | **VistA**                                                            |
|-------------------------------------------------------|---------------------------------------------------------------------|----------------------------------------------------------------------|
| **Veteran Scheduling**                                | Veterans do not have online scheduling; they must call, email, secure message, or visit in person. | Veterans can directly schedule appointments online or request them.  |
| **Staff Appointment Creation Process**                | MSAs directly create appointments without a request process.        | MSAs create requests and convert them into appointments.             |
| **Clinic Selection for Appointment Availability**      | MSAs select resources (usually providers) for appointment availability. | MSAs select [clinics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/feature-reference/vista-appointments-facilities-clinics.md) for appointment availability.                   |
| **Provider Selection for Appointment Availability**    | Providers create "requests" similar to VistA's Return to Clinic orders. | Selecting a provider is not required to schedule an appointment.    |
| **Standby Request Queue**                              | MSAs can add Veterans to the Standby Request Queue to be scheduled sooner than their appointment time.       |      May be similar to Open Slot Management in VEText              |
| **Return to Clinic Orders**                             |  Providers create "requests" that are sent to MSAs                    |        Need to follow-up with VistA facility    |


## Aspects Working Well

In both Cerner and Vista sites efficient, compassionate, and collaborative MSA teams are aware of everything happening in their clinic, with their providers and patients. This helps challenging, complex systems run. 

MSAs at both facilities noted that VA standard appointments are 30/60 minutes, exceeding the industry standard of 20/40 minutes, giving providers more time with their patients.

At Cerner specifically, MSAs benefit from working with a reduced number of software systems. 

??? > Additionally, MSAs do not need to cancel appointments when changing their times, as they can simply modify the existing "encounter" order. @Melissa, is this true? Elsewhere we said "When changing an encounter, the appointment is canceled, and a new one is scheduled, with patients not automatically notified."

## Pain Points
At both Cerner and Vista sites systems, various pain points were surfaced by MSAs:

- Overbooking issues.
- Concerns about PII security.
- Lack of error prevention mechanisms in scheduling software.
- Patient communication and notification issues.
- Appointment modifications require canceling and rescheduling.

## Next steps
- Contact staff at both sites we visited to get clarification and ask follow up questions. 
- Write a full research report with key findings.
- Create supporting documents to add to the GH research folder and include in the appendix: flow chart for the scheduling process at both, terms and definitions used in both systems, a spreadsheet of contacts to follow up with in the future, collect VistA and Cerner training documents and add them to GH with a link to them in the appendix. 
