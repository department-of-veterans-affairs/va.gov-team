# Putting Chief Complaint field into VistA

## APIs

VistaLink is the most flexible API that connects to VistA, it uses RPC calls. 

VaText, VDIF, VAMF, are Rest APIs with limited write capability. 
VAMF behind the scences uses wrappers for VIA and VistaLink.
VIA is an older SOAP based API that uses WebLogic. 

## Chief Complain Field

To import PDF files into VistA, VistaImage could be used
https://www.va.gov/health/imaging/

A better approach seems to be to use VistA Consult which is a text file that is stored in VistA that clinicians have access to through the CPRS gui. 
An example of a consult: http://wiki.laptop.org/go/File:Vista_monograph2005_06_html_m465fd7a.png
