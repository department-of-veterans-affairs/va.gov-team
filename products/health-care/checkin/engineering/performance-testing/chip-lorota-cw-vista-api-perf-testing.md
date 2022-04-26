
## CHIP/LoROTA/Clinician Workflow/Vista-api performance testing

![CHIP/CW/VistA API subsystem](./subsystems/subsystem_chip_cw_vista-api-container-diagram.png "CHIP/CW/VistA API subsystem")

### Test Environment


### Load Estimates


### Tools
We're currently looking into both [locust](https://locust.io/) and [K6](https://k6.io/open-source) for scripting and load generation. We will finalize the tool based on the ease of script creation, ease of setup/install in VAEC cloud and the ability to generate the desired load profile.

### Load Profile

### Test Data Generation
Shane has created a node script to generate test appointments in VistA: https://github.com/shanemelliott/createAppts

### Monitoring

We will use DataDog to monitor system performance and resource utilization during the load test execution.

VistA API dashboard (Dev): https://tevi.ddog-gov.com/dashboard/cim-s7k-5s5/vista-api-dev

VistA API dashboard (Staging):

VistA API dashboard (Prod): https://tevi.ddog-gov.com/dashboard/pa4-jzg-492/vista-api