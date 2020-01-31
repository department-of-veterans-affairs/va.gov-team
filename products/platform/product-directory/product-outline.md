# This is not a current project or priority in any VSP team.

# Product Directory

## Communications
- Implementation Team: TBD
- GitHub Label: 
- Slack channel: 
- Product POCs: Alex Pappas
- Stakeholders: 

## The Problem
 Access
 
 The current way we are storing the mapping information is in a Google Sheet.  This poses multiple problems in terms of gaining access because by nature we can not share this publicly because of sensitive PII about members working on VA.gov.  New team members will either need to be a part of the VSP group (which should be achieved during the on boarding process) or request access at a later date.  With new members coming and going and it will be very difficult to ensure that all users that need access, have access.  Additionally, Google services are blocked on the VA network which means anyone at the VA will have difficulty accessing the document.
 
 Visually
 
 Because of the amount of data that is presented to the user in the form of a Google Sheet, it is difficult to navigate and find the information a user would be trying to find.  As this list grows, this problem will compound itself.  Because of the nature of a spreadsheet utilizing a series of columns and rows, it is impossible to group relevant data together making it challenging to users to find relevant data based off their initial search query.  Furthermore, because it is a shared document, any time a user filters the data, that filtered dataset is displayed to all users by default which is very confusing when first navigating the document.

### User Goals
- Easily find a current list of Parent Products and Features live (and in progress) on VA.gov and the platform
- Easily find relevant Point of Contacts (and business owner information) for specific features or products
- Easily understand, at a high level, what that product does and other predefined elements (access level, etc)

### Business Goals
- Allow all users on VA.gov (including the platform) to find product/features owners quickly so we can work efficiently as a team to pass along relevant information to the correct team(s)

## Assumptions
- This will be widely use across the platform & VSF teams.

## Questions
- How will we protect the information of the Point of Contacts and team members?
  - It shouldn't be publicly available, but does it need to be on the SOCK proxy, or can we create a login through GitHub to access it?
- What about historical ownership?  When a team leaves, and a new team starts working on a product that the old one was working on, how do we denote that historical ownership?


## Requirements
#### In Scope 
As of right now, only Feature/Parent Products mapping to their ownership (POC, Business Owner, Contact Information) is being considered.

#### Out of Scope
As of right now, a full blown org chart would be nice, but is currently out of scope until we have buy in.  This would be an additional set of requirements that would allow us to build (and maintain) a master org chart for all teams working on VA.gov (both VFS and Platform)

## Solution Approach
Build a UI leveraging a central source of data that allows the user to search, group and filter in many different ways in order to find features/Products they are lookking for.

One Example of this can be found here:
[Simple Prototype (test data only)](https://www.fluidui.com/editor/live/preview/cF9jQ2ZlNnd6VEtoSjBUejFyV1FnUm9sdk00dDJFN0hESg==)


## Value Propositions

Allowing all team members (Platform & VFS teams) the ability to identify ownership will eliminate confusion on which teams are currently working on what products of VA.gov, and reduce the time it takes for issues to get to the responsible parties.

## KPIs

---

# Implementation Info

## Status

## Technical Decisions

## Product Decisions

## Team

- VA Digital Strategist(s): 
- Product Manager: 
- Design Lead: 
- Eng Lead: 
- Engineers:
   
## Screenshots

### Before

### After
