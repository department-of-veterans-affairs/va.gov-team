# Putting Chief Complaint field into VistA

[Information about VAOS](#VAOS) 

## APIs

VistaLink is the most flexible API that connects to VistA, it uses RPC calls. 

- VaText, VDIF, VAMF, are Rest APIs with limited write capability. 
- VAMF behind the scences uses wrappers for VIA and VistaLink.
- VAMF is able to access the Patient Generated Data (PGD). 
- VAMF can have a proxy where it is able to write data on behalf of a veteran where staff authorization would otherwise be needed
- CPRS does not access PGD
- VIA is an older SOAP based API that uses WebLogic. 


## Chief Complaint Field

- To import PDF files into VistA, VistaImage could be used https://www.va.gov/health/imaging/
- A better approach seems to be to use VistA note which is a text file that is stored in VistA that clinicians have access to through the CPRS gui. 
- Staff permissions are needed to write to VistA using VAMF so the best approach currently to investigate is to write to PGD using VAMF and a proxy.
- PGD is FHIR based, which means that you can not just add fields but have to use the definitions in FHIR.

## Discreet Fields

VistA has many thousands of different record types but adding a new record type is non trivial and involves an extensive review process. 

- Since a VistA note record type is free flowing text, it is quite common to store field values in this text that can be parsed out and this is already being done.
- VistA note records can be modified after they have been signed
- This simple approach seems to make sense as long as one veteran record is processed at a time. There would be no query like functionality to find all veterans with certain field values etc.
- Currently however, we have no means of writing to VistA due to permissions/authorizations and are exploring writing to PGD

## Connecting to VistALink

- There is a Ruby Gem for connecting to VistALink. It has not been updated for 9 years https://github.com/michaelcham/vistarpc4r. Since VistA is an old system, perhaps not much has changed and that doesn't matter.
- There may be Ruby packages for using RPC
- VistALink is accessed using RPC. Java may have libraries for RPC
- JRuby can also run on the Java JVM and should be able to access the same Java RPC libraries
- There is a VistALink sandbox that requires using Azure Commercial Cloud https://github.com/WorldVistA/VistA-in-the-Cloud
- These notes regarding VistaLink are academic until actual means of writing to VistA become available, which possibly they will not.

## VAOS

- VAOS uses VAMF (VA Mobile Framework) to obtain veteran scheduling information.
- VAOS is essentialy the VAOS Rails engine/Gem in vets-api that lives in the modules/vaos directory and has it's own set of Rails Routes. 
- VAOS connects to VAMF through veteran.apps.va.gov, however in the development and other environments there is no key to connect.
- The vets-website in dev and other environments actualy does not connect to VAOS but has fake mock data.
- The VAOS team is sensitive about other teams piggybacking or using their API as it effects their metrics and Paul Short is aware of this. 
- VAOS is not part of the VA platform support but are more of a services team. 
- VAOS suggested forking their code but this also has reusability concerns. 
- More information about the VAMF api specifically would be useful to understand how VAOS data is obtained.

## Screen shots

- [RFV-Chief Complaint Whiteboard](https://drive.google.com/file/d/1wgXiIbyiUzT4vJmzobL6o3z7buRs2hwJ/view?usp=sharing)


