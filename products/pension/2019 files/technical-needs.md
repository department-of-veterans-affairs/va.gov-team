## Pension / Burial Technical Needs

### Business Need
- As a Veteran I need the ability to submit my form so that the VA can process my application for Pension benefits.
- As a Veteran I need the ability to upload documents so that I can include supporting information with my claim.
- As a widow/er, family member, or executor I need the ability to submit a form so that VA can process any Burial benefits.
- As a widow/er, family member, or executor I need the ability to upload documents so that I can include supporting information with my claim.

---------
### Option 1 - Connection to back end systems
### Option 2 - Connection to centralized mail portal
---------

### MVP Capabilities Needed for Option 1

**Submission**
  - Retrieve Person
  - Add Person (MVI, Corp, Birls)
  - Claims Establishment
  - PDF Creation
  - Date Stamp of PDF
  
**Document Upload**
  - PDF Conversion
  - Virus Scanning
  - Date Stamp of PDF
  
**In Flight Storage**

### Optional or Future Capabilities
  - Military Service Update
  - Load Veteran information
  
### Assumed Services needed (in progress) for Option 1

**VBMS**
  - VBMS eDoc Service v1
  - Claim Service
  
**MVI**
  - AddPerson
  
**BGS**
  - RetrievePerson
  - AddPerson
  - Benefit Claim Service
  - Award WebService [finds Veteran's Station of Jurisdiction or establishes it based on address]
  - Uploaded Document WebService
  - Military History Service (optional)
  - Standard Data Web Service
  - RORoutingService
  - DDEFTService (only for LOA3)
  
### Claims Establishment Specifics
- Establish Initial Live Pension
  - 180ORGPEN / 180ORGPENPMC
  - Payee Code: 00
- Potential Reopen for Pension
  - 120ILCP7 / 120ILCP7PMC
  - Payee Code: 00
- Burial
  - 160BUR / 160BURPMC
  - Others
  - Payee Code non-00


### Option 2 - Sending documents to Centralized Mail Portal
### MVP Capabilities Needed

**Submission**
  - PDF Generation
  - Date Stamp of PDF
  
**Document Upload**
  - PDF Conversion
  - Virus Scanning
  - Date Stamp of PDF
  
**In Flight Storage**
  
### Assumed Services needed (in progress) for Option 1
  - Centralized Mail Portal API (looking into if it exists/potential for creation)
  
 
