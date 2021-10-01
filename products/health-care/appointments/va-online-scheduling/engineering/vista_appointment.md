# VistA appointments, facilities, and clinics

VistA appointments are made up of a a couple of different entities:

- The appointment itself
- The site the appointment is in
- The clinic the appointment is at

The appointment itself holds the time, length, and status. There's also a type field that is not used by VAOS and is normally just "REGULAR."

Each appointment is in a particular VistA site, which is indicated by a three digit code (sometimes called an sta3n code). It's important to note that this is not an indicator of the physical location of the appointment. VistA sites are installations of the VistA system that exist throughout the US. These sites typically correspond to a physical VA medical center, but not always. There are also typically multiple VA locations using a single VistA site. Generally, it's one VA medical center and a collection of smaller community outreach clinics, but there are also a handful of VistA sites that are "integrated" and contain multiple VAMCs, and therefore multiple separate VA health care systems. Appointments aren't directly associated with a specific VA location, they're associated with a VistA site and a VistA clinic.

A VistA clinic is a scheduling bucket at a particular VistA site. Be careful not to confuse this use of clinic with the colloquial use of clinic as a VA location. It sometimes corresponds to a physical location at a VA hospital, but might also just be an abstract entity used for internal tracking purposes. A VistA clinic is uniquely identified across the VA by a combination of the clinic id and the VistA site id. VistA clinics are also associated with a specific VA location, identified by a 3 of 5 character id (an sta6aid code).

VistA clinics include a lot of important information about an appointment. VistA clinics can be marked as hidden from patients, which means patients won't see appointments at those clinics in any patient facing system (like VAOS). Clinics are associated with a primary and secondary stop code, which is a code used to report on what kind of service a clinic provides. VAOS uses these stop codes to derive what type of care will be provided at an appointment, by maintaining a mapping of stop codes to a list of care types. Stop codes can also be used to indicator modalities, like phone appointments. Clinics have a regular name and a patient friendly name, which should indicate to the patient what kind of a appointment it is.
