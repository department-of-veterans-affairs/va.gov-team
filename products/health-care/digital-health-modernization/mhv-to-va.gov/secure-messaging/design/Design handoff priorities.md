# Secure messaging design handoff
This doc has a list of design priorities from the previous team.

Jump to: 
- [Now](#Now)
- [Next](#Next)
- [Later](#Later)

## Now
Minor updates we can start on right now to better understand the product. 

### Reply button/link + moving buttons down in details view 
- **Description**: See Figma file for more context and details 
- **Status**: Vetted by developers. Design approved by Kaitlin Fink. Has not entered the collab cycle yet. 
- [Figma link](https://www.figma.com/design/b5zVnuG5nXshAwnkYd7JBY/Z---SM-threads?node-id=359-13121&t=1cHrFQzDKtG6NVGL-4)  
- [Jira epic](https://jira.devops.va.gov/browse/MHV-68765) 

### VADS file input component 
- **Description**: Replacing the current homemade SM attachment upload component with the [VADS file input](https://design.va.gov/components/form/file-input) component 
- **Status**: Vetted by developers. Design approved by Kaitlin Fink. Has not entered the collab cycle yet. 
- [Figma link](https://www.figma.com/design/2k0wyYzd2nmoFMSNb8xmZJ/Z---Message-file-attachments?node-id=440-18596&t=eidjSe3olErSyiIb-4). Includes some historical context too.
- [Jira epic](https://jira.devops.va.gov/browse/MHV-68765)  

### Custom folder management 
- **Description**: Redesign custom folder interactions to not use modals 
- **Status**: Vetted by developers. Design approved by Kaitlin Fink. Has not entered the collab cycle yet. 
- Figma links:  
   - [Create new folder](https://www.figma.com/design/S0unbFz4j8oC4AY7iCd6KU/Z---Custom-folder-explorations?node-id=2443-8728&t=XLspFk8Pj17JDv5D-4) 
   - [Edit folder name](https://www.figma.com/design/S0unbFz4j8oC4AY7iCd6KU/Z---Custom-folder-explorations?node-id=2567-32861&t=7Klr1qBKNlNG9jAX-4) 
   - [Encouraging empty folder deletion](https://www.figma.com/design/S0unbFz4j8oC4AY7iCd6KU/Z---Custom-folder-explorations?node-id=2603-29335&t=7Klr1qBKNlNG9jAX-4) 
   - [Moving conversations](https://www.figma.com/design/S0unbFz4j8oC4AY7iCd6KU/Z---Custom-folder-explorations?node-id=2806-39926&t=7Klr1qBKNlNG9jAX-4)
- [Jira epic](https://jira.devops.va.gov/browse/MHV-68765) 
- Historical context:  
   - See above Figma files for more details.
   - [Slack conversation](https://dsva.slack.com/archives/C05CD3ECB44/p1750880969489089)

### Alerts: Replace `Link – Default` with `Link – Action` or `Link – Active` 
- Description:  Users shouldn't interact with `Link – Default` right now in an alert, according to [VADS guidance](https://design.va.gov/components/alert/#links-within-alerts). 
- Status: Not started yet.
- [JIRA ticket ](https://jira.devops.va.gov/browse/MHV-72659)
  
## Next
Work that requires more exploration, larger updates. 

### Oracle Health message pool names 
- **Description**: Understand Oracle naming convention and apply to VISTA triage group names 
- **Status**: Pending OCTO PO conversation with OCC partners 
- **Figma links**: [Alert to communicate change in care team names ](https://www.figma.com/design/uddjxccqvUyz5FSg1aD5wi/Z---Triage-Group-Flows?node-id=3131-31991&t=Y3Nb0pl5BEQX3iOM-4)
- **Context**: To send a message, users must select from a list of care team names. Names are hard to understand right now. We conducted a pilot with a new naming convention. However, due to the accelerated Oracle Health transition timeline, it may make more sense to align with the Oracle Health naming convention.  
- Potential ACs 
   - We understand the OH message pool naming convention 
   - We understand how pools are created (reach out to Dr. Shah and MHV coordinators at pilot sites)  
   - We know how the MHV admin portal needs to change to accommodate creating triage group names that align with the OH naming conventions 

## Later
Work we can decide to pick up later, or after all “Now” items are completed. 

### Backlog
- [Combine signature fields](https://mhv-69720:%20%20https://www.figma.com/design/x9YoKDPekIPiqlDiZdmjci/Signature--preferences--notifications?node-id=2374-46245&t=nPMh58xw58Iod2s2-1)
- [Explore enhancement request: make it clearer that patient portal messages are for non-urgent issues only (interstitial) ](https://jira.devops.va.gov/browse/MHV-69772) 
- [Provide better feedback and next steps for Veterans when a provider has left the VA ](https://jira.devops.va.gov/browse/MHV-69776)
- [Update filter and sort design to new health portal UX standards ](https://jira.devops.va.gov/browse/MHV-69767)
