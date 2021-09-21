# VAOS Engineering

## What is VAOS?

VAOS is VA online scheduling, the veteran facing component of the VA's online scheduling suite. Sometimes VAOS refers to the front end of the app (i.e. the code on va.gov) or the suite of tools.

## VAOS suite of tools

Online scheduling at the VA works across three end user tools

- VAOS front end
- VA Toolset (VATS)
- Scheduling Manager (SM)

There are other tools and services VAOS interacts with, but typically these three are considered the VAOS suite.

### VA Toolset

VATS is a tool that allows users at VA locations to configure what types of care, types of scheduling, and rules are used for specific VA locations. This data is saved in a database and exposed to VAOS through the Mobile Facility Service.

### Scheduling Manager

SM is a tool that schedulers are VA sites use to process appointment requests. It also contains a list of booked community care appointments, though this list is not in sync with the systems of record for community care.

SM is intended to be deprecated soon, and replaced with a combination of VSE GUI and access to HSRM.

## Important systems

See [depedency diagram](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/engineering/architecture) for how VAOS interacts with other systems.

### VistA

VistA is the VA's electronic health records system. All appointment information is stored in VistA.

### CDW

CDW is Clinical Data Warehouse, a database exposed through a service that contains VistA clinic and provider information, which VAOS uses at different steps. Even though CDW is a data warehouse, VAOS uses it as live data source.

### VSE GUI

VSE GUI is a tool that allows schedulers and providers to schedule appointments in VistA and manage appointment requests. It will eventually replace Scheduling Manager.

### HSRM

HSRM is the task management tool for community care. HSRM is the VA's system of record for community care request and appointment data. Currently VAOS does not interact with it directly; schedulers enter information into it from Scheduling Manager. In the future, VAOS will directly interact with it.

### PPMS

PPMS is the data source for community care providers. VAOS uses this to allow Veterans to choose community providers they would like to have an appointment with.

