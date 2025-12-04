# Create GitHub Issues from Research Findings Prompt

This prompt is designed to help researchers convert recommendations and next steps from completed research findings into actionable GitHub issues.   By automating the creation of well-structured issues researchers can ensure that research insights are tracked, prioritized, and acted upon. 

## Purpose

The purpose of this prompt is to:
- Transform research recommendations into actionable GitHub issues with clear descriptions and context.  
- Convert next steps into trackable tasks with appropriate owners and timelines. 
- Link issues back to the original research findings for traceability. 
- Apply appropriate labels, priorities, and metadata to facilitate project management. 

## Instructions for Use

1. **Complete your research findings report** using the [research-findings-template.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md)
2. **Ensure your Recommendations and Next Steps sections are finalized** with supporting evidence and clear action items
3. **Open GitHub Copilot and attach your research findings document:**
   - Click the **Copilot icon in the file toolbar** (not the global GitHub Copilot icon)
   - If your research report doesn't automatically attach to the chat, click the **"Add repositories, files, and spaces"** button (the + or paperclip icon)
   - Use the tree folder menu to navigate: **va.gov-team repository → your product or team folder → your study's research folder**
   - Select the checkbox next to your research findings report file to attach it to the chat
4.   **Copy the prompt below** and paste it into your GitHub Copilot chat
5. **Check the workbench for draft issues** - Look for the workbench panel to see if draft issues were created
   - **If issues appear in the workbench:** Proceed to step 6
   - **If no issues appear:** See the "[Troubleshooting: Issues Not Appearing in Workbench](#troubleshooting-issues-not-appearing-in-workbench)" section below for next steps
6. **Review the generated draft issues in the workbench** - Copilot will create draft issues that you can review, edit, and customize
7. **Assign repository, project board, and assignees** from the workbench interface for each issue
8. **Create the issues** by saving them from the workbench, which will automatically add them to your specified project board

## Troubleshooting: Issues Not Appearing in Workbench

If Copilot says it has drafted issues but they don't appear in the workbench, try these steps in order:

### Step 1: Prompt Copilot to Proceed
Copy and paste this follow-up message:
```
Proceed with drafting the issues in the workbench.
```

This often resolves the issue and causes the draft issues to appear.

### Step 2: Request Explicit Creation
If Step 1 doesn't work, try this more direct prompt:
```
I don't see any draft issues in the workbench.  Please explicitly create each issue as a separate draft in the workbench now.   Make sure to use the GitHub issue creation tool to generate the drafts, not just text output.
```

### Step 3: Create Issues One at a Time
If batch creation isn't working, ask Copilot to create issues individually:
```
Let's create these issues one at a time.  Please create a draft issue in the workbench for the first recommendation only.
```

After each issue appears in the workbench, you can request the next one. 

### Step 4: Use Text Output as Fallback
If the workbench approach continues to fail, you can still save time by asking Copilot to format the issues for manual creation:
```
The workbench approach isn't working. Please provide the issue content in a format I can easily copy and paste into GitHub's issue creation form.  For each issue, clearly separate the title and description, and format the description in markdown. 
```

Then manually create issues by:
1. Copying the title for each issue
2. Going to your repository's Issues tab
3.   Clicking "New Issue"
4. Pasting the title and description
5. Adding labels, assignees, and project boards manually

**Note:** While this fallback works, it requires more manual effort.  The workbench approach is preferred when available.

## Best Practices

- **Be Specific:** Ensure your recommendations include clear actions and supporting evidence before generating issues. 
- **Include Owners:** If known, specify who should be assigned to each recommendation or next step.  
- **Set Priorities:** Consider the impact and urgency of each recommendation to help with prioritization. 
- **Link Back to Research:** Always include a reference to the original research findings document for context. 
- **Use Appropriate Labels:** Apply relevant labels (e.g., `research`, `accessibility`, `usability`, `enhancement`) to help with filtering and organization.  
- **Review in Workbench:** Take advantage of the workbench interface to review all issues together before creating them, ensuring consistency and completeness. 
- **Check Workbench Immediately:** After running the prompt, look for the workbench panel right away to confirm issues were created.

By following these steps, you can ensure that your research insights are translated into actionable work items that drive product improvements. 

---

## Prompt

```
I need to create GitHub issues from the Recommendations and Next Steps sections of this research findings report.  

**IMPORTANT: Please create these as separate and distinct draft issues in the workbench using GitHub's issue creation tool so I can review them, assign the repository, add them to the project board, and assign team members before creating them.   Do not just provide text output - actually create the draft issues.**

**If I tell you that no issues appeared in the workbench, you should:**
1. First, try again with explicit issue creation using the GitHub issue drafting tool
2. If that doesn't work, create issues one at a time, starting with the first recommendation
3. As a last resort, provide the content in a format I can copy and paste into GitHub's manual issue creation form

For each recommendation and next step, please generate:

1.  **Issue Title:** A clear, concise title that describes the action to be taken (following the format: "[Action Verb] [What] [Where/Context]")

2. **Issue Description:** Include the following sections in markdown format:
   
   ## Background
   - Brief context from the research study (study name, date, team)
   - Link to the full research findings document
   
   ## Research Insight
   - The specific finding or recommendation that led to this issue
   - Supporting evidence or quote from the research
   
   ## Proposed Action
   - Detailed description of what needs to be done
   - Expected outcome or success criteria
   
      ## Acceptance Criteria
   - Clear, testable criteria for completion
   - Specific user outcomes to achieve
   - **IMPORTANT: Format each acceptance criterion as a GitHub task list checkbox using `- [ ]` syntax (e.g., `- [ ] Criterion one`) so items can be checked off when completed**
   
   ## Additional Context
   - Related findings from the research
   - Potential blockers or dependencies
   - Suggested owner or team (if mentioned in Next Steps)

3. **Suggested Labels:** Based on the content, recommend appropriate labels such as:
   - `research`
   - `accessibility`
   - `usability`
   - `enhancement`
   - `bug`
   - `documentation`
   - `content`
   - Priority level: `priority-high`, `priority-medium`, `priority-low`

4.  **Priority Ranking:** Suggest a priority level (High/Medium/Low) based on:
   - Impact on user experience (from research findings)
   - Alignment with KPIs mentioned in the research
   - Effort to implement (if estimable from context)

5.  **Related Issues or Epics:** If multiple issues should be grouped under an epic or are related to each other, note these relationships.  

**Create these as separate and distinct draft issues in the workbench** so I can easily:
- Review all issues together before creation
- Assign the appropriate repository
- Add issues to the relevant project board
- Assign team members
- Make any final adjustments to titles or descriptions

**Additional Instructions:**
- If a recommendation has multiple supporting pieces of evidence, create separate issues for each distinct action item
- If a next step mentions a specific owner, include that in the issue description
- Maintain traceability by always linking back to the specific section of the research findings
- If further research is needed (from the "Further research needed" section), label those issues with `research-needed`
- **ALWAYS use `- [ ]` checkbox syntax for all acceptance criteria items** to enable task tracking within the issue
```

---

## Working with the Workbench

Once Copilot creates draft issues in the workbench, you can:

1. **Review All Issues:** See all generated issues in one place before committing to create them
2.  **Edit Content:** Make adjustments to titles, descriptions, or formatting as needed
3. **Assign Repository:** Select the appropriate repository for each issue (e.g., `department-of-veterans-affairs/va. gov-team`)
4. **Add to Project Board:** Link issues to your team's project board for immediate tracking
5. **Assign Team Members:** Add assignees directly in the workbench interface
6. **Set Labels:** Adjust or add labels based on your team's conventions
7.   **Create Issues:** Save each issue to create it in GitHub, or create all at once

### Benefits of Using the Workbench

- **Time Savings:** No need to manually copy and paste content into GitHub's issue creation form
- **Consistency:** Review all issues together to ensure consistent formatting and structure
- **Efficiency:** Batch operations for adding to project boards and setting metadata
- **Flexibility:** Make final adjustments before issues are created
- **Traceability:** All issues maintain links back to the research findings

### Locating the Workbench

The workbench typically appears as a panel on the right side of your GitHub Copilot interface. Look for:
- A panel labeled "Issue Drafts" or "Workbench"
- A list of issue titles
- Options to edit, review, or create each issue

If you don't see the workbench panel, refer to the [Troubleshooting section](#troubleshooting-issues-not-appearing-in-workbench) above.

---

## Example Output Format

After running this prompt, Copilot will create draft issues in the workbench.   Each issue will be structured like this:

### Issue 1

**Title:** Improve secondary caregiver section clarity based on usability findings

**Description:**
```markdown
## Background
- **Study:** [Study Name] Research Findings
- **Date:** YYYY-MM-DD
- **Team:** [Team Name]
- **Research Report:** [Link to findings document]

## Research Insight
Participants struggled with the secondary caregiver section on the form, with 7 out of 10 participants expressing confusion about eligibility requirements. 

**Supporting Evidence:**
> "I'm not sure if my daughter counts as a secondary caregiver. She helps out sometimes, but my spouse does most of the care." - P4

## Proposed Action
Revise the secondary caregiver section to:
1.  Add clearer eligibility criteria before the form fields
2. Include examples of qualifying secondary caregivers
3.   Add contextual help text for each field

**Expected Outcome:** Reduce confusion and form abandonment in the secondary caregiver section by providing clearer guidance. 

## Acceptance Criteria
- [ ] Updated copy for secondary caregiver section reviewed by content team
- [ ] Examples of qualifying caregivers added to the page
- [ ] Contextual help text implemented for each field
- [ ] Usability testing shows improved comprehension (follow-up study)

## Additional Context
- Related to Finding 3 in the research report
- May require collaboration with the Content team
- Should be coordinated with Form 10-10CG updates
- **Suggested Owner:** [Name/Team from Next Steps section]
```

**Suggested Labels:** `research`, `usability`, `content`, `enhancement`, `priority-high`

**Priority:** High (directly impacts form completion rates and user satisfaction)

**Related Issues:** Consider creating a parent epic for "Form 10-10CG Improvements Based on [Study Name]"

---

## Tips for Using Generated Issues

1.  **Review Before Creating:** Always review the generated issue content in the workbench to ensure accuracy and completeness. 

2. **Batch Creation:** Use the workbench to create multiple issues efficiently without manual copy-pasting.  

3. **Create an Epic:** If you have multiple related issues, consider creating a parent epic issue to group them together.

4. **Add to Project Board:** Link issues to your team's project board directly from the workbench for immediate visibility and tracking. 

5. **Assign Immediately:** If owners are identified, assign issues right away in the workbench to ensure accountability.  

6. **Reference in Research Report:** After creating issues, consider adding links back to them in your research findings document under the "Next Steps" section. 

7.  **Be Patient:** Sometimes it takes a few seconds for draft issues to appear in the workbench.  Wait 5-10 seconds before trying troubleshooting steps.

## Follow-up Actions

After generating and creating your issues:

- **Share with stakeholders:** Notify relevant team members about the new issues
- **Prioritize in backlog:** Work with your product manager to prioritize issues in the product backlog
- **Track progress:** Monitor issue completion and update the research findings document with outcomes
- **Close the loop:** When issues are resolved, consider documenting the impact in a follow-up research study

---

## Questions to Refine Issue Generation

If the initial output needs refinement, you can ask Copilot follow-up questions such as:

- "Can you break down [Recommendation X] into smaller, more actionable issues?"
- "Which of these issues should be grouped under a single epic?"
- "Can you suggest acceptance criteria that are more specific and measurable?"
- "How would you prioritize these issues based on the research impact described?"
- "Can you add more context from the key findings to strengthen the rationale for [Issue X]?"
- "What dependencies exist between these issues that I should call out?"
- "Can you regenerate these as draft issues in the workbench?" (if Copilot initially provided text output instead)
- "I don't see the issues in the workbench. Can you try creating them again?"
- "Proceed with drafting the issues in the workbench." (if issues were mentioned but didn't appear)

By iterating with these questions, you can ensure that your issues are properly scoped and prioritized for maximum impact. 

---

## Common Issues and Solutions

### Issue: Copilot provides text output instead of draft issues
**Solution:** Use the follow-up prompt: "Can you regenerate these as draft issues in the workbench?"

### Issue: Only some issues appear in the workbench
**Solution:** Ask Copilot: "I only see [X] issues in the workbench, but there should be [Y].  Can you create the missing issues?"

### Issue: Draft issues appear incomplete or malformed
**Solution:** Edit the issues directly in the workbench, or ask Copilot to regenerate specific issues with more detail.

### Issue: Unable to assign repository in the workbench
**Solution:** This may be a permissions issue.  Verify you have write access to the target repository, or ask a repository admin for assistance. 

### Issue: Workbench functionality not available
**Solution:** Fall back to the manual copy-paste method described in [Step 4 of the Troubleshooting section](#step-4-use-text-output-as-fallback). 
