# Processing and Analyzing MHV Landing Page Medallia Feedback

## Overview

Each day, the VFS Analytics Team sends Medallia survey responses for the My HealtheVet (MHV) landing page to Cartographers’ VA email inboxes. These responses are also saved in our shared [Medallia feedback folder on SharePoint](https://dvagov.sharepoint.com/:f:/r/sites/HealthApartment/Shared%20Documents/General/Monitoring,%20Reporting,%20and%20Feedback/Medallia%20feedback?csf=1).

Our job is to regularly review this feedback, remove any personal information (PII), and add short, categorized notes by the end of each month. Keeping up with this work throughout the month makes it easier to spot trends and ensures we're ready to share insights with internal teams or clients when needed.

---

## Step-by-Step Process

### 1. Gather and Organize Feedback
- Download the latest CSV or Excel file from your VA email.
- Open the **MHV Landing Page** tab in the SharePoint spreadsheet.
- Paste the new responses into the sheet, matching the existing format.

### 2. Redact PII (Personally Identifiable Information)
Before analyzing any feedback:
- Scan each response for personal information.
- Remove or redact the following:
  - Full names
  - Email addresses
  - Phone numbers
  - Mailing addresses
  - Personal health information
- Replace sensitive content with `[REDACTED]`, but retain the original meaning where possible.

### 3. Add Cartographer’s Notes in Column A
For each survey response:
- Assign **one primary category** (see below).
- Write a **brief, clear summary** (1–2 sentences) in your own words.

---

## Available Categories

| Category          | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| Can't access MHV  | User cannot access the MHV platform at all                                  |
| Sign in issue     | User encounters trouble during login (e.g., verification loops, timeouts)   |
| Tool issue        | User is signed in but has issues using a specific feature or tool           |
| Error/bug         | System glitch, loading error, or technical malfunction                      |
| Complaint         | General frustration or criticism of the experience                          |
| Suggestion        | User offers an idea or feature request                                      |
| Positive          | User expresses satisfaction or successful experience                        |
| Navigation issue  | User is confused by page layout, link placement, or how to find something   |
| Unrelated         | Feedback unrelated to MHV or not actionable                                 |
| Not specific      | Feedback too vague or generic to categorize                                 |

---

## Example Cartographer Notes

| Primary Category   | Example Note                                                                 |
|--------------------|------------------------------------------------------------------------------|
| Can't access MHV   | User unable to log in after completing ID.me verification.                   |
| Sign in issue      | User caught in verification loop during login.                               |
| Tool issue         | User signed in but couldn’t refill prescriptions.                            |
| Error/bug          | User received a blank screen when accessing lab results.                     |
| Complaint          | Too many steps to access the desired feature.                                |
| Suggestion         | User requested contact info for pharmacy be visible.                         |
| Positive           | User had no issues and messaged doctor successfully.                         |
| Navigation issue   | User didn’t know where to find message center or how to reach refill tools.  |
| Unrelated          | Feedback about in-person care, not MHV-related.                              |
| Not specific       | Just says "this site is terrible" with no context.                           |

---

## Optional: Add Sentiment Ratings

If helpful, include a sentiment rating in a separate column:

| User Rating | Sentiment |
|-------------|-----------|
| 1–2         | Negative  |
| 3           | Neutral   |
| 4–5         | Positive  |

---

## Monthly Synthesis and AI Analysis

At the end of each month:

### 1. Final Review and Organization
- Ensure **Column A** has a clear category and summary for each entry.
- Sort the sheet by **Column A** so all notes within a theme are grouped together.

### 2. Use VA’s Beta ChatGPT Tool
Use VA’s ChatGPT tool to support synthesis. This approach helps generate faster, consistent summaries and sub-theme groupings.

#### AI Workflow

## AI Workflow and Sharing Insights

Use VA’s Beta ChatGPT tool to synthesize feedback and generate summaries for monthly reporting.

### Steps

1. Open [VA ChatGPT (Beta)](https://your-agency-url-to-chatgpt).
2. Focus on **one theme at a time** (e.g., all "Tool issue" notes).
3. Copy only the **Cartographer Notes** (no headers or extra formatting) for that theme.
4. Use the following prompt, and paste the notes directly below it in the chat:
5. Analyze the following Cartographer’s Notes from Medallia surveys for My HealtheVet.
***"Group the notes into sub-themes based on patterns in the feedback.
Highlight key insights or recurring challenges users mention.
Count how many notes fall under each sub-theme.Write a client-ready summary that describes major trends and user pain points for this category."***
6. Repeat this process **for each category** (e.g., "Complaint", "Tool issue", "Navigation issue").
7. Compare the AI-generated sub-theme counts with your sorted spreadsheet to validate accuracy.

> **Tip:** Running one theme at a time helps reduce AI hallucinations and ensures more focused, accurate analysis.

### Final Step: Share Insights
Once all themes are analyzed:
- Compile the sub-theme breakdowns and summaries into a **monthly report**.
- Share findings with internal teams or stakeholders as needed.
