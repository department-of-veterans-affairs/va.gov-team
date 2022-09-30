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
  - VBA and VHA debt requests are separated between systems
  - Assure delimiters are parsed out of JSON response
  - send Json file to VBS to confirm file transfer is established
  - send PDF file to SharePoint to ensure file transfer is established correctly
  - confirm that there are no rejections and files were transferred successfully 
- **VBS**
  - validate file has been received Json file from VODA 
  - validate the JSON structure matches what VBS expects
  - confirm naming convention is as expected
  - validate circular process to pull last window of requests from DB and build csv file is working as expected
  - send .csv file to Huron server via SFTP
  -  confirm VBA FSRs are not coming through; only VHA FSRs
-  **Huron**
   - validate .csv file has been received from VBS endpoint 
   - validate CSV structure matches what's expected
   - validate file has been integrated into workflow and available for VHA Revenue operations to process
- **Sharepoint**
  - validate PDF has been received from VODA
  - validate file name and formatting of PDF
  - validate routing process for PDF to document storage locations identified by VHA
- **VHA Revenue Operations**
  - validate FSR data has been received and is complete in Huron workflow process
  - validate FSR is available in Sharepoint and all data is viewable
  - confirmation that the data on the PDF from SharePoint and the csv from Huron is aligned
-  **DMC**
   - validate VBA FSR has been received from VODA
   - confirm VBA FSR data is complete and accurate
   - confirm VHA FSRs are not coming through


# Visual Representation
<img width="1312" alt="Overview" src="https://user-images.githubusercontent.com/72393866/175319435-eb40f10c-229c-4c20-a749-cd4f6348bcef.png">
