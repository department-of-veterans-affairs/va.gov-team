# VistA appointments, facilities, and clinics

VistA appointments are held in VistA systems. They are made up of a a couple of different entities:

- The appointment itself.
- The site the appointment is in.
- The clinic the appointment is at.

## VistA systems

VistA systems are installations of VistA that exist throughout the US. These systems typically correspond to a physical VA medical center, but not always.  

Each appointment is stored in a particular VistA system which is indicated by a three digit code (sometimes called an ```sta3n``` code). This is not an indicator of the physical location of the appointment. Appointments aren't directly associated with a specific VA location; they're associated with a VistA site and a VistA clinic.

## The VistA appointment

The appointment itself includes:
- Time
- Length
- Status
- A ```type``` field that is not used by VAOS and is normally just ```REGULAR```. 

## VistA sites

There are typically multiple VA locations using a single VistA site. Generally, it's one VA medical center and a collection of smaller community outreach clinics, but there are also a handful of VistA sites that are "integrated" and contain multiple VAMCs, and therefore multiple separate VA health care systems. Sites are identified by the ```VistA site id```.

## VistA clinics

A VistA clinic is a scheduling bucket in a particular VistA system. Be careful not to confuse this use of clinic with the colloquial use of "clinic" as a VA location. It sometimes corresponds to a physical location at a VA hospital (like a specific room), but can also just be an abstract entity used for internal tracking purposes. 

VistA clinics can be uniquely identified across the VA by a combination of the ```clinic id``` and the ```VistA site id```. 

VistA clinics are associated with a specific VA location, identified by a 3 of 5 character id called a ```sta6aid code```.

VistA clinics include a lot of important information about an appointment:
- A primary and secondary ```stop code```, which is used to report on:
    - What kind of service a clinic provides.
    - Indicate modalities, like phone appointments.
- A regular name and a patient friendly name, which should indicate to the patient what kind of appointment it is.
- VistA clinics can be marked as hidden from patients, which means patients won't see appointments at those clinics in any patient facing system (like VAOS). 

### Clinic stop codes

VAOS uses clinic stop codes to derive what type of care will be provided at an appointment by maintaining a mapping of stop codes to a list of care types. Stop codes are reviewed and updated a few times a year by the Managerial Cost Accounting Office (MCO) group at VA. The current list of stop codes can be found on the [MCO site (VA Network)](http://vaww.dss.med.va.gov/programdocs/pd_oident.asp).






