# Contact Center Issue Management Process

## What is the Contact Center

The VA Contact Center refers to the Department of Veterans Affairs' centralized call center system that serves as a primary point of contact for veterans, their families, and caregivers seeking information and assistance with VA services.

The main contact center is often called the VA National Call Center or sometimes referred to by its phone number. The primary number is 1-800-MyVA411 (1-800-698-2411), which is available 24 hours a day, 7 days a week.

Through the VA Contact Center, callers can:

- Get information about VA benefits and services
- Check on the status of claims or appeals
- Schedule or change appointments at VA medical facilities
- Get general questions answered about healthcare, disability compensation, education, benefits, home loans, and other VA programs
- Be directed to the appropriate VA office or specialist for their needs
- Access crisis support (though the Veterans Crisis Line at 988 then press 1 is a separate dedicated service)

## Process Overview

Here's how Contact Center issues flow to our team:

1. **Contact Center Receives Issue** - A veteran calls with a problem
2. **Issue Documentation** - Contact Center logs it in this [spreadsheet](https://dvagov.sharepoint.com/:x:/r/sites/VeteranSupport-Tier3Comms/Shared%20Documents/Survivor.Pension%20Issues%2012.8.25.xlsx?d=w636c79a1303a4c47ac6fc46c761b0528&csf=1&web=1&e=tDcmZO&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMH0)
3. **Weekly Triage** - Team member reviews spreadsheet and creates GitHub tickets for **CST-related issues**
4. **Investigation & Resolution** - Team investigates and fixes the issue
5. **Closing the Loop** - Update spreadsheet and notify Contact Center

**⚠️ Important**: The spreadsheet contains various types of issues across multiple teams. You will need to determine which issues pertain to your team and only create tickets for those issues.

---

## Spreadsheet Tracking System

### Purpose

The spreadsheet is the single source of truth for tracking Contact Center issues. It allows the team to:

- See which issues need tickets created
- Track progress without accessing GitHub
- Prevent duplicate tickets
- Show Contact Center the status of their reported issues

### Status Values

Use these values in the **Status** column for consistency:

| Status           | Meaning                                           | Example Use Case                  |
| ---------------- | ------------------------------------------------- | --------------------------------- |
| (empty)          | New issue, not yet reviewed                       | Contact Center just added it      |
| `In Progress`    | GitHub ticket created, team investigating/working | Monday triaging created ticket    |
| `Resolved`       | Issue fixed, ticket closed                        | Bug fixed and deployed            |
| `Duplicate`      | Same as another ticket                            | Note: "Duplicate - See #456"      |
| `Not Actionable` | Cannot be addressed                               | Issue is user error, not a bug    |
| `Need Info`      | Waiting for Contact Center response               | Need more details about the issue |

### Tracking Workflow

#### Finding Issues That Need Tickets

**Every Monday, filter the spreadsheet for:**

- "GitHub Ticket #" column = **Empty**
- "Status" column = **Empty** or doesn't say "Not Actionable"

These are new issues that need review.

#### When Creating a Ticket

**Before creating:**

1. Search the spreadsheet for similar issue descriptions (might be duplicate)
2. Search GitHub for existing tickets with same RN# or similar issue
3. If duplicate found, update spreadsheet:
   - Status: `Duplicate - See #[ticket number]`
   - Skip creating new ticket

**After creating ticket:**

1. Immediately update the spreadsheet row:
   - **GitHub Ticket #**: `#123` or full ticket URL
   - **Status**: `In Progress`
2. Leave "Date Resolved" and "Resolution Summary" blank for now

#### When Resolving a Ticket

**After closing GitHub ticket:**

1. Immediately update the spreadsheet row:
   - **Status**: `Resolved`
   - **Date Resolved**: `YYYY-MM-DD`
   - **Resolution Summary**: Brief 1-2 sentence description of what was done
   - **PR Link**: Link to pull request (if code changes were made)

### Ticket Naming Convention

```
Contact Center - RN:[reference number] - [brief description]
```

**Example**:

```
Contact Center - RN:26-HRC-HD-43-36635587 - Caller is unable to view claim status for survivors benefits
```

The RN (Reference Number) comes from the Contact Center spreadsheet and helps track the issue back to the original call.

### Required Labels

Add all of these to each ticket:

- `benefits-management-tools`
- `bmt-team-one`
- `BMT-1 Benefits Mavericks`
- `VSP-contact-center` (automatically adds the tickets to the VA.gov Veteran Support - Product project)

### ⚠️ IMPORTANT: PII Restrictions

- **DO NOT include any PII in GitHub tickets** (names, phone numbers, email addresses, claim numbers, SSNs, etc.)
- Tickets may not contain all details needed to resolve the issue due to PII restrictions
- **Always link to the spreadsheet** - the full details with PII are in the spreadsheet and referenced using the RN# on the ticket.

### Ticket Template

```markdown
## Issue Description

[What problem is the veteran experiencing? Include relevant dates, forms, and steps taken - NO PII]

## Tasks

- [ ] [Action item 1]
- [ ] [Action item 2]
- [ ] [Action item 3]

## References

All pertinent information regarding this ticket can be found in [this spreadsheet](https://dvagov.sharepoint.com/:x:/r/sites/VeteranSupport-Tier3Comms/Shared%20Documents/Survivor.Pension%20Issues%2012.8.25.xlsx?d=w636c79a1303a4c47ac6fc46c761b0528&csf=1&web=1&e=tDcmZO&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMH0) using the RN #.
```

### Example Ticket

```markdown
## Issue Description

When going to www.va.gov and signing in with login.gov caller goes to view claim status for the survivors benefits and reports "there are no claims at this time" alert. Caller states she submitted the forms though quick submit on 09/15/2025 and uploaded the forms on 10/03/2025. 21p-8049 and supplemental claim forms.

## Tasks

- [ ] Determine if the claim was properly submitted
- [ ] Is there a file number we can use to look up the claim in VBMS?
- [ ] Determine if a 21P-8049 form submission will show in CST. There is suspicion that it may not because it is not a claim.

## References

All pertinent information regarding this ticket can be found in [this spreadsheet](https://dvagov.sharepoint.com/:x:/r/sites/VeteranSupport-Tier3Comms/Shared%20Documents/Survivor.Pension%20Issues%2012.8.25.xlsx?d=w636c79a1303a4c47ac6fc46c761b0528&csf=1&web=1&e=exfby9&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMH0) using the RN #.
```

---

## Team Communication

### After Creating Tickets (Monday EOD)

Post summary in `#benefits-bmt-team-1` Slack:

```
📋 Contact Center Triage - [Date]

Created [X] new tickets from Contact Center issues:
- [Ticket title] (#123)
- [Ticket title] (#124)
```

### During Investigation

- Document all findings in ticket comments as you go
- Post updates in ticket, not just Slack (creates permanent record)

---

## Questions & Clarifications

**For questions about a Contact Center issue**:

1. First, add a comment in the GitHub ticket documenting what you need to know
2. Then, post in `#vsp-contact-center-support` Slack mentioning Kimberley Monroe-Daniels:

   ```
   @Kimberley Monroe-Daniels

   Question about Contact Center issue [Ticket Name](URL)

   RN: [RN#]
   Issue: [Brief description]
   Question: [What you need to know]

   ```

---

## Closing the Loop

**When issue is resolved**:

1. Update the GitHub ticket with:

   - Summary of what was done
   - PR link(s) if applicable
   - Deploy date
   - Any follow-up needed

2. **Update the spreadsheet row** with:

   - Status: "Resolved"
   - Brief resolution summary
   - Date resolved
   - Link to PR (if applicable)

3. Post in `#vsp-contact-center-support`:

   ```
   ✅ Resolved Contact Center Issue

   Ticket: [Ticket Name](URL)
   RN: [reference number]
   Resolution: [Brief summary of what was fixed]
   Deployed: [Date] or [Not applicable - documentation/question]
   ```

4. Close the GitHub ticket
