
# Help Desk Service Level Agreement (SLA)

## Purpose

The Help Desk should operate according to a Service Level Agreement (SLA) which lays out the terms and conditions of Help Desk support efforts.

Under the SLA, "business hours" are from 9am to 5pm EST, and during these hours the Help Desk team commits to:

   * respond with a First Response to support requests within a set period of time (<90 minutes for all tickets); 
   * resolve tickets within a set period of time:
   * Within 24 business hours or 2 business days for any Priority 1 Ticket;
   * Within 4 weeks for Priority 2 Tickets with consideration that work will need to be planned within "Sprints"; 
   * All other Tickets will be categorized as Priority 3 and will be added to the GitHub Backlog where it will then be prioritized against other Tickets in the Backlog with a goal of resolving the Ticket within 2 weeks - consideration that work will need to be planned within "Sprints" is important for Priority 3 too.
   * Track Help Desk performance across key metrics (suggested: performance against SLA times for first response and resolution, displayed by priority level); 

# Criteria

## Priority 1

Reserved for the highest priority, indicative of a critical defect or issue, that has a larger scale of impact and blocking or preventing someone from doing their work. Support resources to stop their current work to focus on resolution immediately.

Resolution should be within 16 business hours or 2 business days.

Examples:

Broken link reporting (+10 breaks content release) - these need to be responded to within first 30 minutes due to impact for content release

Not having access to the Drupal CMS system as a result of an outage

Content not released within expected timeframes:

Regularly scheduled releases supported from 9am - 5pm ET

Manually releases supported from 8am - 9am ET, and 5pm - 8pm ET (banner alerts and triggered by an admin)

“Access Denied” messages

Operating statuses fail to go out

Entire section of site is missing (i.e. the “Spotlight” section isn’t loading on any VAMC system pages on VA.gov)

## Priority 2

This is the second highest priority pertaining to a specific section or facility. It is next in line in regards to urgency but not a show stopper and limited in scope. Support resources will communicate to the Product Owner within 5 business days, who will determine prioritization.

Resolution should be within 4 weeks once prioritized.

Examples:

Menu Links - enabling previously-disabled menu links, archiving old ones from archived pages (front-end issue requiring this as a workaround)

Accessibility errors

Site defect that isn’t a major blocker or showstopper, i.e. headings load at unexpected sizes

Transfer or provide appropriate contact to SharePoint or Google Analytics

User Administration - granting access to include training environment and deactivation once all know steps have been completed

## Priority 3

Reserved for lower priority issues that involve adding or altering a feature to improve the efficiency of the publishing and editing experience for users, "nice to haves", and for minor issues that do not interfere with User ability to publish content.

Resolutions could include development work and non-development work therefore, some resolutions may be added to the Product Backlog and planned several months out on a roadmap for future releases. Support communicates back to the user.

Examples:

Spelling and grammar errors in the UI (help text or labels)

Training feedback

# Help Desk Service Hours

Per the contract, the Help Desk will be staffed from 0800 to 2000 EST (0500 to 1700 PST) Monday through Friday.

# Tracking Performance

Per the contract, performance metrics shall be tracked and compiled by the Delivery Manager on a monthly basis, reviewed with the team, and submitted to the client.

SLA adherence will be tracked using the software’s built-in reporting.

# Federal Holidays

All federal government offices close on federal holidays.  Help Desk support will not operate during Business Hours on Federal Holidays and will stand down.

As a collateral duty, some Tier 2 engineer staff will be assigned and made available "on call" as part of Pager Duty to address critical issues impacting Veterans access to information.  

On Call and Pager Duty procedures are outlined here https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/OnCall

For urgent and important issues that require immediate attention, the OnCall Slash Commands for Slack should be made in the #oncall channel and are:

```
/pd trigger
/pd oncall 
```
For context, to mitigate potential issues automated deploys will be suspended.  Engineer-initiated deploys (e.g. to address a critical bug) are not suspended. 

The Help Desk stand down will occur during the following dates for 2022:

| Holiday                      | Observed Date |
|------------------------------|---------------|
| New Year's Day               | January 1     |
| Martin Luther King Jr. Day   | January 17    |
| George Washington's Birthday | February 21   |
| Memorial Day                 | May 30        |
| Independence Day             | July 4        |
| Labor Day                    | September 5   |
| Columbus Day                 | October 10    |
| Veterans Day                 | November 11   |
| Thanksgiving Day             | November 24   |
| Christmas Day                | December 25   |

