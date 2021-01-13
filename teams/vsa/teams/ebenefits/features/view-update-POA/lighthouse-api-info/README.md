# Lighthouse Notes on OGC Data
`Monday January 11, 2021 | eBenefits Team`

## Feature Background
Veteran views their representative on the View your VA representative page, and is presented with options to remove or change that representative, if present, by going to the Search for a VA representative page.

If no representative is present, the Veteran is also invited to utilize the search tool to find a representative.

Within the search tool, once the Veteran finds the potential representative, they can select them and that rep's info is picked up and joined with the Veteran's info (if logged in) and the request is sent to the representative using the form 21-22a, hopefully with only minimal requirements for submission.

In the event that the Veteran is not logged in, they will need to enter more information in a form schema to capture the required fields in order to send a request to the representative with two potential outcomes:
- Sending a 21-22 to a potential rep who can accept electronic requests
- Sending a 21-22 to a potential rep who can not accept electronic requests, they get a PDF in the mail by the Veteran

The over all process does not complete with the request submission but with the representative accepting the request and responding.

Note: need to check on how much auth will be needed for this process as we may want to protect the OGC list of reps as well as the appointment process for only auth'd Veterans. Search is currently not auth'd on EBN.

## Objective
Lighthouse has done some work in this space and may have a solution that might be able to share with the eBenefits Team as they approach this work and rebuild the View, Search and Manage the VA Representative for Veterans on VA.gov.

## General API Notes
The Lighthouse API does not expose the actual users themselves but the 2122a is processed through their endpoints.

There is also an "active" endpoint where a rep or a Veteran can get a return for the active representative.

OGC data is sourced from the public OGC data on their website (https://www.va.gov/ogc/apps/accreditation/) and can be downloaded, but LH already does that.

The link to the API documentation (https://developer.va.gov/explore/benefits/docs/claims?version=current) references 1.0.0 which is a bit of a misnomer, there is also another within the dropdown called 0.0.1 and, while its marked as the previous version and functionally pretty much the same, the current version is uses OAuth and supports both representative auth as well as Veteran auth where the "internal" version (0.0.1) uses an API key and can be done because consumers are internal.  External consumers, like GDIT, would use 1.0.0.

Currently OAuth tokens for VA.gov will not work within Lighthouse's OAuth scope.  That may change as work gets done to allow for that but not yet.  Veterans, after logging in, should be able to leverage 0.0.1 to pass data through.

**SK's Question:** During the SEP demo we learned that the OGC database holds both accreditation information and pending requests for accepting or rejecting representation. In other words, a Veteran submits a 21-22a online, that request gets added to the OGC DB (which I think is GLCAWS?). Then when the POA logs into their own software or SEP, that request is retrieved and presented to the POA for accept/ reject. Question is whether there is an endpoint to access those requests now or on the horizon.
**Answer:** We have no data on future access at the moment.  We only see anyone who is currently accredited publically.    

## OGC Data and How to Get It
It was requested for an API to be created by OGC for better management of their data and a SAleforce implementation was considered but that never came to fruition.  Representative data on the OGC accreditation site (https://www.va.gov/ogc/apps/accreditation/index.asp) is simply downloaded based on parameters selected.  THese files are initally downlaoded as *.asp files but can be opened in Excel.

In total there are at least 30,000 entities.

Lighthouse is pulling this data down daily.

## Potential Implementation
To get the Veteran's current representative: 
1. EBN Team could use the 0.0.1 version with machine credentials
1. Send in some id from Veteran 
1. Representatives are scoped to Veteran (user)

No current API to expose this data externally, but `vets-api` is where this claims API lives.  

Access to the list is there, just need to go through their (LH) API

## Managing the Representative
There was a discrepency on where the conclusion of the appointment occured: with the Veteran on requesting the rep, or when the rep approves the request.  Both EBN and LH need to confirm this.

Michael Tillman(?) might be a good person to check with.

## Overview
1. Viewing the active representative - LH service will do this, as well as the previous representative (as part of the payload)
1. Modifying the representative - LH's 21-22a service will do this
1. Search for a representative - LH does not have this, but users would be exposed in a list format and get the POA list code.

Consider that there might eventually be two search pages at the end of this.

## Next Steps
1. Request access to the 0.0.1 version of the LH API

