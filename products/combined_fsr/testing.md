# VHA FSR:  Lower Environment Testing 

### Objective:
*Establishing the FSR for VHA will require multiple groups to come together. This is a test plan to ensure that the lower environments are set up and functioning as intended.*

### Participants :
*Participants from each group with the ability to ensure functionality will be required.* 
- **VODA Participants**
   - Denise Coveyduc
  - Scott James
- **VBS Participants**
  - Mike McDougall
-  **Huron Participants**
   - Matt Stuenkel
- **Sharepoint Participants**
  - Brian Fuller
- **VHA Revenue Operations Participants**
  - Mary Beth Nye
-  **DMC  Participants**
   - Jill Anderson
-  **Optional**
   - Mike Dewey
   - Jerry Battles
   - Matt Self


# Work Breakdown Structure:
*Summary of validation points across all systems*

- **VODA**
  - send Json file to VBS to confirm file transfer is established
  - send PDF file to SharePoint to ensure file transfer is established correctly
- **VBS**
  - validate file has been received Json file from VODA 
  - validate circular process to create csv file is working as expected
  - send .csv file to Huron server 
-  **Huron**
   - validate .csv file has been received from VBS endpoint 
   - validate file has been integrated into workflow and available for VHA Revenue operations to process
- **Sharepoint**
  - validate PDF has been received from VODA
  - validate routing process for PDF to document storage locations identified by VHA
- **VHA Revenue Operations**
  - validate FSR can be seen in Huron workflow process
  - validate FSR data is complete and available for review
-  **DMC**
   - validate VBA FSR has been received from VODA
   - confirm VBA FSR data is complete and accurate
   - validate VHA FSR has been received from Huron
   - confirm VHA FSR data is complete and accurate


# Visual Representation
<img width="1312" alt="Overview" src="https://user-images.githubusercontent.com/72393866/175319435-eb40f10c-229c-4c20-a749-cd4f6348bcef.png">
