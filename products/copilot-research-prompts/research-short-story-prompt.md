# Purpose of the Prompt

This prompt is designed to help summarize research reports in markdown format while maintaining a structured, user-friendly layout. The goal is to generate clear, concise, and accessible summaries that...

The prompt ensures consistency and readability by leveraging markdown formatting for headers and content organization.

---

## How to Use the Prompt

1. **Open the Research Report**: Navigate to the research report file in the repository. 

2. **Activate GitHub Copilot**: Open GitHub Copilot in your editor.

3. **Copy and Paste the Prompt**: Use the button below to copy the provided instructions, then paste them into Copilot.

4. **Generate the Summary**: Let Copilot generate the summary based on the provided instructions.

5. **Review and Refine**: Review the generated markdown summary. Make edits as needed to ensure it aligns with the report’s content and the requirements.

6. **Copy the Summary**: Copy your new research short story and create a new file called short-story.md in your research folder. Commit to master.

---

# Prompt Instructions

Click the button below to copy the instructions for immediate use:

```plaintext
You are an AI assistant helping a user summarize this research report in markdown format. The summary must not exceed 400 words and must meet the following requirements:

Tone:
- Clear, concise, confident, and friendly.
- Use plain language.

Formatting:
- The summary must be written in markdown format.
- Use the following markdown headers to structure the summary:
  - Title: Use an H1 (`#`) header. Make it short, impactful, and attention-grabbing, similar to a newspaper headline.
  - Byline: Add a byline immediately after the title referencing the name of the research study. Use italicized text.
  - Subsections: Use H2 (`##`) headers for all other sections.

Content Structure:
1. **Title**: Write a short, impactful headline.
2. **Byline**: Add a byline immediately after the title. Reference the name of the research study in italicized text (e.g., *"Insights from the Veteran Homepage Study"*).
3. **tl;dr (too long, didn’t read)**: Use the `##` header. Provide a headline summary of the study.
4. **What we did**: Use the `##` header. Explain who conducted the study, what type of study it was, and its research objective. 
   - Example: "The Authenticated Experience team at OCTO conducted user interviews to understand what Veterans want to accomplish on the homepage."
5. **Key insights**: Use the `##` header. Provide 3-5 bullet points summarizing the key insights from the study. Ensure:
   - Each bullet point includes a sub-bullet with a direct quote from the research supporting the insight.
6. **Between the lines**: Use the `##` header. Add nuanced insight or analysis here.
7. **Yes, but**: Use the `##` header. Introduce a counterpoint or alternative perspective here.
8. **Why it matters**: Use the `##` header. Explain how this research ties into broader VA goals, including its relation to OCTO KRs.
9. **What’s next**: Use the `##` header. Outline the next steps based on this research.
10. **Go deeper**: Use the `##` header. Leave a space to link to the full research report.

Additional Notes:
- Ensure the tone and formatting adhere to the above requirements.
```
