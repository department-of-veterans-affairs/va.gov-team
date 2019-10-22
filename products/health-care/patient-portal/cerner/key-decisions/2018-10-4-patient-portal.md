 
# My HealtheVet – Cerner Patient Portal Convergence Agenda
October 4, 2018

## Purpose:
- Devise a plan for the migration of My HealtheVet (MHV) backend capabilities to Cerner’s patient portal backend capabilities.  The following backend capabilities will be the primary focus:
- Retrieve health data, including images
- Prescription Refill and Tracking
- Secure Messaging
- Schedule, Request and view Appointments
 
## Assumptions:
- The VA will control the UI for the VA’s Health Portal through the VA.gov website. 
- Backend components of the VA’s Health Portal will be powered by either Cerner or a combination of Cerner and MHV.
- VA.gov will route patient to the appropriate Cerner or Vista portals.

## Information needed to Inform Discussion:
- MHV and Cerner teams – please provide documentation that describes the technical architecture of each of the four focus capabilities

## Discussion:
- Retrieve health data, including images (Blue Button):
- When will the VA’s data (from all VA sites) be flowing into the Cerner HealtheIntent database?
- What domains of data will be sent from VA to HealtheIntent (e.g. images, labs, meds)?
- What is the frequency of the flow of data?
- Does Cerner have a HealtheIntent test system, populated with VA test data domains, that MHV can use to develop a solution that replaces its current data cache with the HealtheIntent data?
 
## Prescription Refill and Tracking:
- Does Cerner already have a Task Order to build a Prescription Refill capability into their millennium system?  If so what is the scope of this task order?
- Can MHV describe the prescription refill and tracking function? For example:
1. Display medication information for a given patient (HealtheIntent provide?)
2. Allow patient to request refills
3. Message the Vista System to refill the prescription (Can Cerner Task Order include messaging Cerner and Vista backend systems?)
 
## Secure Messaging:
- The Primary Care Management Module (PCMM) is used by MHV SM to associate a patient with a primary care team.  What is the Cerner equivalent?
- What is Cerner’s mechanism for attributing RVUs to a provider for secure messaging?
- What are the interfaces that are used by Cerner to enable a provider to secure message their patients? If it is only Power Chart – then is there a way to create a stand-alone interface managing secure messages?
- What would be required for Cerner (e.g. LOE/Cost) to create a stand-alone system for secure messaging that would replace VA’s secure messaging application?
 
## Scheduling:
- Does Cerner have the capability to electronically request that an appointment be scheduled for them by the VA scheduling team?
- Does Cerner have the capability to provide a resource-based scheduling system that would sit on top of Vista systems – equivalent to the EPIC Cadence product that VA is piloting at Columbus VA.  If so what would be the cost and delivery schedule?
- Please see attached documentation on VA’s enterprise Scheduling Service, could Cerner use this service to display both Vista and Cerner appointments? 
- Does Cerner have an equivalent scheduling service that VA could use to display both Vista and Cerner appointments?
