# Processing and Analyzing MHV Landing Page Medallia Feedback

## Description

Medallia survey responses for the My HealtheVet (MHV) landing page are sent daily to the Cartographers' VA email accounts by the VFS Analytics Team, with feedback organized and stored in VA SharePoint for tracking and analysis. All feedback should be reviewed, any personal identifiable information (PII) removed, and responses documented by the end of each month to support complete and timely reporting. Keeping up with the data regularly helps keep things organized, simplifies trend analysis, and ensures insights are ready when needed for internal teams or client requests.

---

# Process for gathering and analyzing feedback

### 1. Collecting and Organizing Feedback
- Survey responses are sent daily by the VFS Analytics Team as CSV or Excel attachments.  
- Download the latest file and open the **MHV Landing Page** template stored in the [Medallia Landing Page feedback folder](https://dvagov.sharepoint.com/:f:/r/sites/HealthApartment/Shared%20Documents/General/Monitoring,%20Reporting,%20and%20Feedback/Medallia%20feedback?csf=1&web=1&e=RDfeSj) on VA SharePoint.  
- Copy the feedback from the CSV file and paste it into the **MHV Landing Page** tab in the SharePoint template, making sure each entry lines up with the correct columns and matches the existing formatting.

### 2. Redacting Personal Identifiable Information (PII)
- Carefully review all user feedback for personal details like:
  - Full names
  - Email addresses
  - Phone numbers
  - Mailing addresses
  - Personal health information
- Remove any personal information (PII) from the feedback by either deleting it or replacing it with “[REDACTED]”, making sure the overall meaning and context of the feedback stays intact.

### 3. Annotating Cartographer’s notes (Column A)

- In Column A (Cartographer’s Notes), review each user comment and add:
  - First, assign one primary category based on the issue:
    - **Access Issue** (e.g., unable to access MHV, LOA3 problems)
    - **Login/Authentication Problem** (e.g., stuck in verification loops, repeated sign-ins)
    - **Feature Access Issue** (e.g., trouble accessing pharmacy, appointments, messaging)
    - **Error or Bug** (e.g., system errors, page crashes)
    - **General Complaint** (e.g., confusing experience, too many steps)
    - **Request/Suggestion** (e.g., asking for a new feature or easier access)
    - **Success or Compliment** (e.g., completed task successfully, positive feedback)
    - **Unrelated** (e.g., unrelated to MHV platform)
  - Then, write a brief but clear description of the user’s issue in your own words. 
    - Start with the category, followed by a short summary of the problem or experience.
    - One or two clear sentences is plenty — include enough detail so similar feedback can be easily grouped and synthesized later.

**Example Cartographer’s notes:**
| Primary Category | Example Cartographer’s Note |
|:---|:---|
| Access Issue | Access Issue – User unable to log into MHV despite completing ID.me verification. |
| Login/Authentication Problem | Login/Authentication Problem – User stuck in a verification loop after signing in. |
| Feature Access Issue | Feature Access Issue – User logged in but unable to refill prescriptions. |
| Error or Bug | Error or Bug – User encountered a blank page when trying to view lab results. |
| General Complaint | General Complaint – User frustrated by the number of steps needed to access information. |
| Request/Suggestion | Request/Suggestion – User suggested adding pharmacy contact numbers to the dashboard. |
| Success or Compliment | Success or Compliment – User successfully logged in and messaged their doctor with no issues. |
| Unrelated | Unrelated – User submitted feedback about an in-person appointment experience not related to MHV. |

---

# Optional: Adding sentiment ratings

While optional, it is highly encouraged to assign a **sentiment rating** in Column (TBD) based on the tone of the user’s feedback and the overall score they provided (1–5 scale):

| User Rating | Sentiment |
|:---|:---|
| 1–2 | Negative |
| 3 | Neutral |
| 4–5 | Positive |

Adding sentiment ratings can help give a quick snapshot of overall user satisfaction.

---

# Monthly synthesis and reporting

At the end of each month:

1. Review all Cartographer’s Notes (Column A) to make sure each entry has a primary category and a brief, clear description.
2. Copy all completed Cartographer’s Notes from Column A in the SharePoint template (only the notes, no headers or extra formatting).
3. Open VA’s approved AI tool (such as [VA's Beta ChatGPT](https://dvagov.sharepoint.com/:u:/r/sites/oitchiefaiofficerteam/SitePages/github_copilot.aspx?csf=1&web=1&e=WSdB8V)).
4. In the chat window:
   - First, paste the Sample AI Prompt (provided below).
   - Immediately after the prompt, paste the full list of Cartographer’s Notes you copied from Column A.
   - Submit everything together as one message.

5. Use the following AI prompt to guide the analysis:

**Sample AI prompt:**
> Analyze the following Cartographer’s Notes collected from Medallia surveys for My HealtheVet. Group the notes into common themes based primarily on the provided categories and descriptions (such as access issues, login/authentication problems, pharmacy issues, messaging problems, appointment issues, general complaints, or suggestions).  
> If any new patterns or emerging themes are detected outside of the provided categories, note them separately.  
> Count how many notes fall under each theme.  
> Then, draft a short summary report that highlights the major trends, recurring issues, emerging themes, and key user challenges from this month’s feedback.  
> The summary should be clear, concise, and written in a way that is suitable for sharing with internal teams and clients.

6. Always review the AI output:
   - Double-check that the feedback is grouped according to the Cartographer’s original notes, and not influenced by any AI misinterpretations or "hallucinations."
   - Make sure the executive summary accurately reflects the main trends, issues, and any new emerging patterns.
   - Edit or refine the AI draft if needed to correct inaccuracies, clarify key points, or make the summary clearer for sharing with internal teams or clients.

7. Save and organize the final findings:
   - Copy the grouped themes summary from the AI output.
   - Paste this information at the bottom of the same MHV Landing Page feedback spreadsheet, so that the feedback and the monthly findings are stored together in one place.
   - (The file is automatically saved in VA SharePoint.)
   - **Process TBD:** Transfer monthly findings into a separate file for longer-term metrics reporting.

---

**Note:**  
Always manually review the AI-generated outputs to ensure they accurately reflect the Cartographer’s Notes and intended themes. AI should help accelerate analysis but final synthesis and presentation must be verified and refined by a human.

---

# Table of Contents
- [Description](#description)
- [Process for Gathering and Analyzing Feedback](#process-for-gathering-and-analyzing-feedback)
- [Optional: Adding Sentiment Ratings](#optional-adding-sentiment-ratings)
- [Monthly Synthesis and Reporting](#monthly-synthesis-and-reporting)
- [Best Practices](#best-practices)

---
