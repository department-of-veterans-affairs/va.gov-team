# Spike: Automated Reporting
**Completed:** October 23, 2024  
**Contributors:** John Marchi, Steve Dickson  
**Jira Ticket:** [SIT-77](https://jira.devops.va.gov/browse/SIT-77)

## Situation  
The current process for generating monthly and weekly SSiT reports in Domo requires manual effort, particularly around data pulls and data processing. This investigation focused on identifying automation opportunities to streamline these tasks and simplify report distribution. 

## Findings
One of our primary goals in improving the data collection and transformation process for the Domo dashboard tracking SSiT metrics is to introduce automation where it can enhance efficiency and reduce dependencies in the current workflow. To help identify and communicate where these opportunities in the process could be, we first mapped the process out from the point the data is placed on a mounted drive to the final dashboard display into the following diagram:

[Current State | SSiT Report Generation in Domo](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sign-in-transition/Product/Data/Tech%20Spikes/Supporting%20Artifacts/Current%20State%20-%20SSiT%20Report%20Generation%20in%20Domo.png)

### Bottleneck: Manual Data Pre-Processing with Domo Workbench  
By mapping out the current state, we validated that the largest bottleneck occurs during the preprocessing step using Domo Workbench. This step involves hashing ICNs to comply with PII standards and de-duplicating incoming data before uploading it to Domo cloud. This step has become a bottleneck because it runs on a GFE laptop which requires a VPN connection, limiting the potential for automation. 

### Options for Automation
We identified four potential paths forward:

- **A)** Move the Domo Workbench operations from the GFE to a VM hosted within the VA network. This would remove the dependency on the physical hardware and the VPN, but because Domo Workbench is installed as a user application, we would still likely be restricted to one user’s Domo Workbench instance having the scheduled jobs enabled.
- **B)** Move Domo Workbench to a VM in the same way as Option A, but leverage the new Domo Workbench Enterprise 2.0 Beta to provide web based access to the Domo Workbench instance rather than logging into the VM directly. This would allow multiple users to view and maintain the instance of Domo Workbench. This option would require an evaluation of the Domo Workbench Enterprise 2.0 Beta and its current capabilities and timeline.  
- **C)** Distribute relevant pieces of the current Domo Workbench to the data providers to run before uploading data directly to the Domo cloud rather than uploading it to the network drive. This would mean the data provider teams become responsible for the data prep and managing of their instance of the workbench. We would provide guidance and make change requests where needed.  
- **D)** The provider team performs data prep without Domo Workbench and uploads data directly to the Domo cloud. This is the same as Option C, but the provider team would be responsible for their own process around removing PII rather than leveraging the current instance of Domo Workbench. 

These options break down to two main approaches: moving the Domo Workbench instance to a VM in the cloud, or allowing the data providers to do PII removal before uploading it to the Domo cloud directly, triggering any necessary processing to support the dashboard automatically.

### Pros & Cons

| Option    | Pros                                                                                                                                                     | Cons                                                                                                                                                           |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Option A** | • Removes dependency on GFE  <br> • Reduces dependency on VPN                                                                                         | • Dependency on shared drive remains <br> • Requires logging into VM to manage DW <br> • VM will need to be configured not to shut down on log off for automation <br> • Likely only accessible by one user per instance |
| **Option B** | • Removes dependency on GFE <br> • Allows web access to DW <br> • Allows multiple users access                                                         | • Dependency on shared drive remains <br> • VM will need to be configured not to shut down <br> • Domo Workbench Enterprise 2.0 is in beta and needs evaluation for effectiveness and cost |
| **Option C** | • Moves data prep responsibilities to data provider teams, eliminating manual pre-processing steps and GFE/VPN dependencies <br> • Leverages existing DW, reducing development for provider teams | • Less agile, requiring more work and cooperation from provider teams <br> • Dependency on DW remains |
| **Option D** | • Moves data prep responsibilities to data provider teams, eliminating manual pre-processing steps and GFE/VPN dependencies <br> • Removes DW from process entirely | • Provider teams responsible for data prep <br> • Requires coordination and work on provider side |

### Considerations: Timeline & Data Provider Readiness
Key considerations include the timeline and the data provider teams’ capacity or willingness to take on the current Domo Workbench steps. **If there is desire to support these dashboards long-term**, **we recommend Option D:** working with the data provider teams to remove the dependency on Domo Workbench and develop a process for them to upload directly to Domo. **For a short-term solution**, moving Domo Workbench to a VM within the VA network gives us options to remove the VPN limitations. Because Domo Workbench operates locally, we can add redundancy by setting up instances on other team members’ CAG Windows environments to manually run the preprocessing steps and uploading to the Domo cloud **(Option A)**.

### Key Takeaways / Next Steps
- **Review Meeting with Tom & Samara** (10/30): Reviewed automation options; Options C/D were dismissed due to the increased workload they place on provider teams.
- **Preferred Options**: Options A and B are prefererable, with Option A serving as a prerequisite to Option B.
- **Effort vs. Benefit Monitoring**: Continue to assess the level of effort versus benefits, especially given the finite timeline for credential deprecation. Identify quick wins and small improvements that can streamline the process without significant overhaul.
- **Immediate Action Items**:
  - John will configure Domo Workbench on his CAG instance to reduce the current dependency on Steve for report generation.
  - Team will submit provisioning requests to test the feasibility of Option A within the VA network.
