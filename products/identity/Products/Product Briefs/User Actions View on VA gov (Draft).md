# User Actions on VA.gov (Draft)

## Overview: 
A secure, user-facing audit log interface that allows VA.gov users to view and track their account activity, enhancing transparency, trust, and self-service capabilities while maintaining NIST standards and VA compliance.


## Problem Statement: 
Currently, Veterans have no way of seeing actions performed on their account.


## Relevant Documents:

## What's In Scope: 

## Compliance Requirements

**Retention Policy**
- Auto-delete events older than 12 months

**Access Control**
- Users view only their own account actions
- Users view only their actions taken on behalf of veterans (when applicable)

**Authentication & Authorization**
- Enforce proper access controls ensuring users see only their own logs

---

## Core Features

### Audit Log Display & Navigation
- Dashboard view with recent activity summary
- Paginated or infinite-scroll table/list view
- Sort and filter options (date, event type, etc.)
- Date range selector for custom time periods
- Search bar for finding specific events

### Event Details Modal
- Modal/expandable view for individual log entries
- Display: timestamp, event type, description, IP address, device
- Backend event ID mapped to user-friendly descriptions

### Technical Implementation
- API integration for fetching audit log data from the backend
- Error handling with user-appropriate messaging

### User Experience
- Accessibility - WCAG 2.2 AA compliant interface
- Responsive design across all devices
- Keyboard navigation and screen reader support
- Loading indicators during data fetch
- User documentation with tooltips (reference MHV documentation [here](https://www.myhealth.va.gov/account-activity-history-summary))

## Out of Scope: (for this iteration)
- Email/in-app notifications for significant changes (e.g., password updates)
- CSV export functionality
- Performance optimizations (lazy loading, browser caching)
- Real-time log updates

## Assumptions:
* Users want to see this information.

## Solution Approach: 
<img width="1262" height="798" alt="Screenshot 2025-12-08 at 10 37 56 AM" src="https://github.com/user-attachments/assets/8f49f4ab-f48e-4462-be6a-c00c6bea8422" />

  

## Measuring Success:
| KPI           | Notes         | 
| ------------- |:-------------:| 
| |               |


## Baseline KPI Values:
| KPI           | Notes         | 
| ------------- |:-------------:| 
|  |               |


## Milestones:
* Launch Dates


## Future Scope:
* 
