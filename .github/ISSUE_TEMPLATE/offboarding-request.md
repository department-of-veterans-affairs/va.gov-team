---
name: Offboarding request
about: To inform the Platform team when a team VSP or VFS team member has left and needs offboarding. 
title: Offboarding of [individual]
labels: vsp-product-support, operations, Offboarding, analytics-insights
assignees: ''

---

# Instructions
Fill out name of individual and *Description* section below.

# Description
- Please provide the name of the individual needing offboarded.
   > Janet Doe
- Please provide the name of their team, their role on that team, expected last day, and the name of the company they work for.
   > this adds context
- Please provide any type of access they may have and their GitHub username. 
  > ex: SOCKS, Pagerduty, Google analytics, ect.
  
 
## AC
 - [ ] Remove global/config.yml / SOCKS Access removed (if applicable) 
  > That file (global/config.yml) has a list of email addresses in groups. The email address in those groups is used to lookup their key. Keys are stored in files named with the user’s email address. So, you need to remove the file and their entry in that list to be finished.
 - [ ] AWS Access removed  (if applicable) 
  > Since there are multible accounts please ensure all are check ie test access.
 - [ ] DSVA Slack (if applicable) 
  > A comment on this ticket prefixed with `/request` (i.e. `/request FirstName LastName`) will send a message to the Slack admins automatically!
 - [ ] User removed from the VA GitHub Org
   > Fill out request found [here](https://github.com/department-of-veterans-affairs/github-user-requests/issues/new?assignees=moschette%2C+AprilPrimous%2C+KennethC19%2C+michelecmiller&labels=remove-user&template=remove-users-from-va-organization.md&title=REMOVE+USER+FROM+ORG+-+%5BUSERNAME%5D). 
 - [ ] Pagerduty access removed (if applicable) 
 - [ ] Sentry access removed (if applicable)
 - [ ] Google analytics, and Domo access removed (if applicable) 
 
 CC: @department-of-veterans-affairs/vsp-operations ,  @department-of-veterans-affairs/vsp-product-support , @department-of-veterans-affairs/vsp-analytics-insights, @KevinMHoffmanUSDS, @drorva  
