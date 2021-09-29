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
  > ex: SOCKS, Pagerduty, Google analytics, etc.
  
 
## AC
 - [ ] Remove from [VFS Team Roster](https://docs.google.com/spreadsheets/d/11dpCJjhs007uC6CWJI6djy3OAvjB8rHB65m0Yj8HXIw/edit?folder=0ALlyxurHpUilUk9PVA#gid=0)
 - [ ] Remove global/config.yml / SOCKS Access removed (if applicable) 
  > That file (global/config.yml) has a list of email addresses in groups. The email address in those groups is used to lookup their key. Keys are stored in files named with the user’s email address. So, you need to remove the file and their entry in that list to be finished.
 - [ ] AWS Access removed  (if applicable) 
  > Since there are multible accounts please ensure all are check ie test access.
 - [ ] DSVA Slack (if applicable) 
  > A comment on this ticket prefixed with `/request` (i.e. `/request FirstName LastName`) will send a message to the Slack admins automatically!
 - [ ] User removed from the VA GitHub Org
   > Fill out request found [here](https://github.com/department-of-veterans-affairs/github-user-requests/issues/new?assignees=&labels=remove-user&template=user-remove.yml&title=Remove+User+from+Org%3A+%5Busername%5D). 
 - [ ] Pagerduty access removed (if applicable) 
 - [ ] Datadog account disabled (if applicable)
 - [ ] Sentry access removed (if applicable)
 - [ ] Google analytics, and Domo access removed (if applicable) 
 - [ ] Bot user GitHub account(s) YubiKey(s) removed
   > Typically only applies to Operations team members
   
   > Refers to the `va-bot`, `va-vfs-bot`, and `va-vsp-bot` users
   
   > Documentation for this process can be found [here](https://vfs.atlassian.net/wiki/spaces/OT/pages/1908932642/Remove+YubiKeys+of+Offboarded+Operations+Team+Members)
 
 CC: @department-of-veterans-affairs/vsp-operations ,  @department-of-veterans-affairs/vsp-product-support , @department-of-veterans-affairs/vsp-analytics-insights, @mchelen-gov
