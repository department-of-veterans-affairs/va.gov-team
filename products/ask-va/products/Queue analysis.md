# Queue, rerouting, and response time analysis
Last updated by @beckyphung: August 29, 2024

This doc explains how we conducted an analysis to answer: 
-	Which queues solve the **most** and **least** inquiries Ask VA? 
-	Which queues solve inquiries the **quickest** and the **slowest**?
    
Jump to: 
-	[Summary](#Summary)
-	[Analysis](#Analysis)

## Summary
We looked at a sample of data with the following filters: 
-	Date: 1/1/24 to 8/21/24
-	Days: Excludes weekends, but includes holidays
-	Status: `Solved` or `Closed`
-	For analyzing rerouting: 
    - Reroute actions: `Re-Route` and `Re-Route & Assign`
    - Reroute reason: `Multiple Issues`, `Wrong Queue`, or `Issue Mismatch`
- Note: Inquiries sometimes have multiple Solve actions. For this analysis, we associated the final queue with the latest Solve action with the inquiry.

### Conclusion #1
Given the analysis, we feel confident that an AI model that returns an Ask VA queue given question text from a submitter **could** reduce days to solve.**
-	For 85% of rerouted inquiries, agents solved inquiries with no reroutes **in less days** compared to inquiries with one reroute
   - For example, agents in VBA ART solve inquiries with no reroutes in **2 days** compared to **3 days** for inquiries with one reroute.

![image](https://github.com/user-attachments/assets/cffebdc8-3c18-4e28-a3b2-4ac924d83150)

### Conclusion #2
However, reducing rerouting would have a relatively small impact on helping submitters get quicker responses. 
-	Only **7% of all inquiries** are rerouted at least once.

![image](https://github.com/user-attachments/assets/7a1f67f0-1dff-4a21-b7f4-bffbe916492f)

  
### Conclusion #3
Therefore, an AI model that returns an Ask VA queue given question text minimally impacts resolution time. The biggest impact this model could have is on the **submitter experience.**
- If we're able to accurately predict queue given question text, we could remove the cumbersome Category, Topic, and Subtopic questions a submitter has to answer. Answers to these questions currently determine routing of the inquiry.

## Analysis
- [View the Power BI report](https://app.powerbigov.us/groups/0946c35e-7703-4949-b964-f984467d9d62/reports/31d823a9-44a2-4ee2-81ef-dccadf6190c1/ReportSection)
- [View the Power BI file](https://dvagov.sharepoint.com/:u:/s/AskVA/EfLK9pz66wRBgHXQl7-eDvMBpTRr9sozxsAE8xdaOWjaSA?e=zqNpx8)
- [View the Excel file](https://dvagov.sharepoint.com/:x:/r/sites/AskVA/Shared%20Documents/General/Data/pbi-export-reroute-no-reroute-2024.xlsx?d=w0785ab96b63d429d8fe590fb0d1cf5cd&csf=1&web=1&e=2kAAls)
