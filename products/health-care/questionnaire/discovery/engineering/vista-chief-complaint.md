# Putting Chief Complaint field into VistA

[Information about VAOS](#VAOS) 

## APIs

VistaLink is the most flexible API that connects to VistA, it uses RPC calls. 

- VaText, VDIF, VAMF, are Rest APIs with limited write capability. 
- VAMF behind the scences uses wrappers for VIA and VistaLink.
- VIA is an older SOAP based API that uses WebLogic. 

## Chief Complaint Field

- To import PDF files into VistA, VistaImage could be used https://www.va.gov/health/imaging/

- A better approach seems to be to use VistA Consult which is a text file that is stored in VistA that clinicians have access to through the CPRS gui.  
  - An example of a consult: http://wiki.laptop.org/go/File:Vista_monograph2005_06_html_m465fd7a.png

## Discreet Fields

VistA has many thousands of different record types but adding a new record type is non trivial and involves an extensive review process. 

- Since the consult record type is free flowing text, it is quite common to store field values in this text that can be parsed out and this is already being done.
- This simple approach seems to make sense as long as one veteran record is processed at a time. There would be no query like functionality to find all veterans with certain field values etc

## Connecting to VistALink

- There is a Ruby Gem for connecting to VistALink. It has not been updated for 9 years https://github.com/michaelcham/vistarpc4r. Since VistA is an old system, perhaps not much has changed and that doesn't matter.
- There may be Ruby packages for using RPC
- VistALink is accessed using RPC. Java may have libraries for RPC
- JRuby can also run on the Java JVM and should be able to access the same Java RPC libraries
- There is a VistALink sandbox that requires using Azure Commercial Cloud https://github.com/WorldVistA/VistA-in-the-Cloud

## VAOS

- VAOS uses VAMF (VA Mobile Framework)
- VAOS is essentialy the VAOS Rails engine/Gem in vets-api that lives in the modules/vaos directory and has it's own set of Rails Routes. 
- VAOS connects to VAMF through veteran.apps.va.gov, however in the development and other environments there is no key to connect.
- The vets-website in dev and other environments actualy does not connect to VAOS but has fake mock data.
- The VAOS team is sensitive about other teams piggybacking or using their API as it effects their metrics and Paul Short is aware of this. 
- VAOS is not part of the VA platform support but are more of a services team. 
- VAOS suggested forking their code but this also has reusability concerns. 
- More information about the VAMF api specifically would be useful to understand how VAOS data is obtained.


