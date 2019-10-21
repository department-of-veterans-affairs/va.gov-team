## Background
The call center uses systems such as IRIS and Salesforce to monitor and track user reported issues. When these issues are in need of further triaging, additional steps are required to report the data. The additional steps include exporting the reported tickets (usually a csv formatted spreadsheet), data manipulation (copy/paste), ticket grouping and creating a ZH issue. The goal is to further automate the reporting process.

## Motivation
The current IRIS & Salesforce exportation process involves manual copy/paste procedures which can be time consuming.  A tool or script could speed up the lengthly ticket reporting process from start to finish (CSV export ====> ZH issue)

## Design

### What we need
We need a more automated way to group the issues
	Ideas:  Possibly add a column to the spreadsheet which could be used to group tickets before creating a ZH issue

A reusable script for data parsing (parsing csv files) that can be applied to exported files coming from various reporting tools (Salesforce, IRIS, maybe ServiceNow?)
This script would then create ZH issues based off of groupings

A possible tool could run multiple times per day to check for new tickets in IRIS, Salesforce, etc. 

## Risks/Pain Points
IRIS currently only exports a truncated version of the ticket summary. Further investigation may be required, but you currently cannot customize which fields in a given ticket will be included in the export. 

The currently IRIS export steps are:
1. Export/Email the CSV
2. Manual copy and paste of the non-truncated ticket summary into the spreadsheet
3. Manual review of tickets for grouping purposes
4. ZH ticket creation

The Salesforce export needs some more testing and discovery into the exportation process 

New tickets that are similar to an existing ZH issue would be linked to that issue
New tickets that are NOT similar to an existing ZH issue would be created as a new issue

Current IRIS process documentation
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/triage/call-center/iris-process.md