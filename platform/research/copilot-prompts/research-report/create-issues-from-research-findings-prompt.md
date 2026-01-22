# Create GitHub Issues from Research Findings Prompt

This prompt is designed to help researchers convert recommendations and next steps from completed research findings into actionable GitHub issues.  By automating the creation of well-structured issues, you can ensure research insights lead to measurable product improvements.

## Purpose

The purpose of this prompt is to:
- Transform research recommendations into actionable GitHub issues with clear descriptions and context.     
- Convert next steps into trackable tasks with appropriate owners and timelines.  
- Link issues back to the original research findings for traceability.  
- Apply appropriate labels, priorities, and metadata to facilitate project management.  

## Model Selection: Use Claude for Issue Creation

**IMPORTANT:** As of December 8, 2025, only **Claude models** (Claude Sonnet, Claude Haiku, and Claude Opus) in GitHub Copilot have access to GitHub's Issue Creation Tool, which allows direct creation of draft issues in the workbench.  Other models (GPT, Gemini, and Grok) cannot access this tool but can still generate issue text for manual copy-pasting.

### Recommended Models

- **Claude Sonnet** (Recommended for most use cases): Best balance of quality and speed for creating research issues
- **Claude Haiku** (Recommended for simpler research): Faster processing for straightforward recommendations with clear action items
- **Claude Opus** (Recommended for complex research): Best for complex research with multiple interdependencies or when creating epics with many related issues

### How to Select Claude Models in GitHub Copilot

1.    Open GitHub Copilot chat
2.  Look for the model selector (usually near the chat input or at the top of the chat panel)
3.  Click the model dropdown
4.  Select one of the Claude models:
   - **Claude Sonnet** (claude-3. 5-sonnet)
   - **Claude Haiku** (claude-3-haiku)
   - **Claude Opus** (claude-3-opus)

**Note:** If you use GPT, Gemini, or Grok models, you'll need to manually copy and paste the generated issue content into GitHub's issue creation form (see the [Fallback Method](#fallback-method-for-non-claude-models) section below).

## Important: Create Issues One at a Time

**Based on current tool behavior, the most reliable approach is to create issues ONE AT A TIME** rather than attempting to batch create all issues at once. 

### Why One-at-a-Time Works Best

- **More Reliable:** Significantly reduces the chance of issues not appearing in the workbench
- **Easier Review:** Allows you to carefully review each issue before moving to the next
- **Better Control:** You can adjust your approach based on how each issue turns out
- **Less Frustration:** Avoids the scenario where you request multiple issues but only some (or none) appear

### Recommended Workflow

1. **Use the prompt below:** It will automatically start with the first recommendation
2. **Review in workbench:** Wait for the draft issue to appear and review the content
3. **Consider code references:** Copilot will ask if relevant code should be included
4. **Adjust if needed:** Edit or ask for revisions
5. **Create the issue:** Save it from the workbench
6. **Respond to Copilot:** Tell Copilot to proceed to the next recommendation
7. **Repeat:** Continue this process until all recommendations and next steps are complete

This iterative approach takes slightly more time upfront but saves significant frustration and ensures all your research findings are properly converted to issues.

## Instructions for Use

1. **Complete your research findings report** using the [research-findings-template.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md)
2. **Ensure your Recommendations and Next Steps sections are finalized** with supporting evidence and clear action items
3.    **Open GitHub Copilot and select a Claude model** (Sonnet recommended for most cases)
4.  **Attach your research findings document:**
   - Click the **Copilot icon in the file toolbar** (not the global GitHub Copilot icon)
   - If your research report doesn't automatically attach to the chat, click the **"Add repositories, files, and spaces"** button (the + or paperclip icon)
   - Use the tree folder menu to navigate: **va.gov-team repository → your product or team folder → your study's research folder**
   - Select the checkbox next to your research findings report file to attach it to the chat
5. **Copy and paste the prompt below** - No customization needed!   It will automatically work through your recommendations one at a time
6. **For each issue Copilot creates:**
   - Check the workbench panel to see the draft issue
   - Review and edit the content as needed
   - Respond to Copilot's question about including relevant code references
   - Assign repository, project board, and assignees from the workbench interface
   - Create the issue by saving it from the workbench
   - Respond to Copilot's prompt to proceed to the next recommendation
7. **Repeat** until all recommendations and next steps have been converted to issues

## Troubleshooting: Issues Not Appearing in Workbench

If Copilot says it has drafted an issue but it doesn't appear in the workbench, try these steps in order:

### Step 1: Verify You're Using Claude
Check your model selection.    If you're using GPT, Gemini, or Grok, switch to a Claude model (Sonnet recommended).   

### Step 2: Prompt Copilot to Proceed
Copy and paste this follow-up message:
```
Proceed with drafting the issue in the workbench.  
```

This often resolves the issue and causes the draft issue to appear.   

### Step 3: Request Explicit Creation
If Step 2 doesn't work, try this more direct prompt:
```
I don't see the draft issue in the workbench.    Please explicitly create this issue as a draft in the workbench now using GitHub's issue creation tool.
```

### Step 4: Simplify the Request
If the issue is complex, try breaking it down:
```
Let's simplify this issue.    Please create a draft issue with just the core recommendation and basic acceptance criteria.  We can add more detail after it's created.
```

### Step 5: Restart with New Chat
Sometimes starting fresh helps:
1. Open a new Copilot chat session
2.   Reattach your research findings document
3.    Verify Claude model is selected
4.  Request just that specific issue again

## Fallback Method for Non-Claude Models

If you prefer to use GPT, Gemini, or Grok models (or if Claude is unavailable), you can still generate issue content for manual creation:

1. Use the prompt provided below
2.    Copilot will generate formatted issue content (title, description, labels, etc.)
3.   Manually create each issue:
   - Copy the title for each issue
   - Go to your repository's Issues tab
   - Click "New Issue"
   - Paste the title and description
   - Add labels, assignees, and project boards manually

**Note:** This method requires more manual work but still saves time in structuring and formatting your issues.

## Best Practices

- **Use Claude Models:** Ensure you're using Claude Sonnet, Haiku, or Opus for direct issue creation
- **Just Copy and Paste:** The prompt is designed to work automatically—no need to specify which recommendation to start with
- **Be Specific:** Ensure your recommendations include clear actions and supporting evidence before generating issues
- **Include Owners:** If known, specify who should be assigned to each recommendation or next step
- **Set Priorities:** Consider the impact and urgency of each recommendation to help with prioritization
- **Link Back to Research:** Always include a reference to the original research findings document for context
- **Use Appropriate Labels:** Apply relevant labels (e. g., `research`, `accessibility`, `usability`, `enhancement`) to help with filtering and organization
- **Review in Workbench:** Take advantage of the workbench interface to review each issue before creating it
- **Check Workbench Immediately:** After each prompt, look for the workbench panel right away to confirm the issue was created
- **Consider Code References:** When Copilot asks, think about whether including code snippets or file references would help developers understand and implement the issue
- **Respond to Copilot's Prompts:** When Copilot asks if you want to proceed, simply reply "yes" or "proceed to the next one"

By following these steps, you can ensure that your research insights are translated into actionable work items that drive product improvements.  

---

## Prompt (Copy and Paste - No Editing Required)

```
/create-issue I need to create GitHub issues from the Recommendations and Next Steps sections of this research findings report.  

**IMPORTANT: You MUST create these issues ONE AT A TIME.  After creating each draft issue in the workbench, STOP and ask me for feedback before proceeding to the next recommendation or next step.**

**Process to follow:**
1. Start with the FIRST recommendation or next step from my research findings
2. Create ONE draft issue in the workbench using GitHub's issue creation tool
3. After creating the draft issue, evaluate whether this issue would benefit from including relevant code references (such as specific files, components, or code snippets that would need to be modified to implement this recommendation)
4. Ask me: "I've created a draft issue for [recommendation title]. Please review it in the workbench. This issue involves [brief description of technical implementation if applicable]. Would you like me to search for and include relevant code references in this issue?  This could help developers identify exactly what needs to be changed."
5. Wait for my response about code references
6. If I say yes to code references, search for and add relevant code snippets or file references to the issue, then ask: "I've added code references to the issue. Please review the updated draft in the workbench.  Would you like me to proceed to the next recommendation, or would you like me to make any other changes to this issue?"
7. If I say no to code references, ask: "Would you like me to proceed to the next recommendation, or would you like me to make any changes to this issue first?"
8. Wait for my response before creating the next issue
9. Repeat this process for each recommendation and next step until all are complete

For each issue you create, please generate:

1. **Issue Title:** A clear, concise title that describes the action to be taken (following the format: "[Action Verb] [What] [Where/Context]")

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
   
   ## Relevant Code (if applicable and researcher approves)
   - File paths and code snippets that need to be modified
   - Components or functions that are related to this recommendation
   - Links to specific lines of code in the repository

3. **Suggested Labels:** Based on the content, recommend appropriate labels such as:
   - `research`
   - `accessibility`
   - `usability`
   - `enhancement`
   - `bug`
   - `documentation`
   - `content`
   - Priority level: `priority-high`, `priority-medium`, `priority-low`

4. **Priority Ranking:** Suggest a priority level (High/Medium/Low) based on:
   - Impact on user experience (from research findings)
   - Alignment with KPIs mentioned in the research
   - Effort to implement (if estimable from context)

5. **Related Issues or Epics:** If this issue should be grouped under an epic or is related to others, note these relationships.   

**Create each issue as a draft in the workbench** so I can easily:
- Review the issue before creation
- Assign the appropriate repository
- Add the issue to the relevant project board
- Assign team members
- Make any final adjustments to the title or description

**Additional Instructions:**
- Maintain traceability by linking back to the specific section of the research findings
- If further research is needed, suggest the `research-needed` label
- **ALWAYS use `- [ ]` checkbox syntax for all acceptance criteria items** to enable task tracking within the issue
- **Always consider whether code references would be helpful** for technical recommendations, but wait for researcher approval before including them
- **Remember: Create only ONE issue at a time and wait for my feedback before proceeding to the next one**
```

---

## Working with the Workbench

Once Copilot creates a draft issue in the workbench, you can:

1. **Review the Issue:** Check that the content accurately reflects your research findings
2. **Edit Content:** Make adjustments to titles, descriptions, or formatting as needed
3. **Assign Repository:** Select the appropriate repository for the issue (e.g., `department-of-veterans-affairs/va.gov-team`)
4.   **Add to Project Board:** Link the issue to your team's project board for immediate tracking
5.  **Assign Team Members:** Add assignees directly in the workbench interface
6. **Set Labels:** Adjust or add labels based on your team's conventions
7. **Create the Issue:** Save the issue to create it in GitHub
8. **Respond to Code Question:** Tell Copilot whether you want relevant code references included
9. **Respond to Copilot:** Tell Copilot "yes" or "proceed to the next one" to continue with the next recommendation

### Benefits of Using the Workbench

- **Time Savings:** No need to manually copy and paste content into GitHub's issue creation form
- **Consistency:** Each issue maintains consistent formatting and structure
- **Efficiency:** Quick operations for adding to project boards and setting metadata
- **Flexibility:** Make final adjustments before issues are created
- **Traceability:** All issues maintain links back to the research findings
- **Quality Control:** Review each issue individually before committing
- **Guided Workflow:** Copilot pauses between each issue, giving you control over the pace
- **Code Context:** Option to include relevant code references to help developers implement changes

### Locating the Workbench

The workbench typically appears as a panel on the right side of your GitHub Copilot interface. Look for:
- A panel labeled "Issue Drafts" or "Workbench"
- The issue title
- Options to edit, review, or create the issue

If you don't see the workbench panel, refer to the [Troubleshooting section](#troubleshooting-issues-not-appearing-in-workbench) above.  

---

## Example Output Format

After running this prompt with a Claude model, Copilot will create a draft issue in the workbench.   Each issue will be structured like this:

### Issue Example (Without Code References)

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
> "I'm not sure if my daughter counts as a secondary caregiver.    She helps out sometimes, but my spouse does most of the care." - P4

## Proposed Action
Revise the secondary caregiver section to:
1. Add clearer eligibility criteria before the form fields
2. Include examples of qualifying secondary caregivers
3. Add contextual help text for each field

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

### Issue Example (With Code References)

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
> "I'm not sure if my daughter counts as a secondary caregiver.   She helps out sometimes, but my spouse does most of the care." - P4

## Proposed Action
Revise the secondary caregiver section to:
1.  Add clearer eligibility criteria before the form fields
2. Include examples of qualifying secondary caregivers
3.  Add contextual help text for each field

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

## Relevant Code
The following files likely need to be updated to implement this recommendation:

**Form Component:**
- `src/applications/caregivers/components/SecondaryCaregiverSection. jsx` - Main component for secondary caregiver form section
- Lines 45-89: Form fields that need additional help text

**Content File:**
- `src/applications/caregivers/content/secondaryCaregiverContent.json` - Copy and help text for this section
- Add new fields for eligibility criteria and examples

**Schema:**
- `src/applications/caregivers/config/secondaryCaregiverSchema.js` - Form validation and structure
- May need to add optional help text fields
```

**Suggested Labels:** `research`, `usability`, `content`, `enhancement`, `priority-high`

**Priority:** High (directly impacts form completion rates and user satisfaction)

**Related Issues:** Consider creating a parent epic for "Form 10-10CG Improvements Based on [Study Name]"

---

## Tips for Using Generated Issues

1. **Use Claude Models:** Always select Claude Sonnet, Haiku, or Opus for the best experience

2. **No Customization Needed:** Just copy and paste the prompt—it will automatically start with the first recommendation

3. **Review Before Creating:** Always review the generated issue content in the workbench to ensure accuracy and completeness

4. **Consider Code References:** When Copilot asks about including code:
   - Say **"yes"** if the issue involves technical implementation (UI changes, functionality updates, bug fixes)
   - Say **"no"** if the issue is primarily about content, process, or research activities
   - You can always edit the code references in the workbench if they're not quite right

5. **Respond to Prompts:** When Copilot asks if you want to proceed, simply reply "yes," "proceed," or "next one"

6.   **Create an Epic:** If you have multiple related issues, consider creating a parent epic issue to group them together after all individual issues are created

7. **Add to Project Board:** Link issues to your team's project board directly from the workbench for immediate visibility and tracking

8. **Assign Immediately:** If owners are identified, assign issues right away in the workbench to ensure accountability

9. **Reference in Research Report:** After creating all issues, consider adding links back to them in your research findings document under the "Next Steps" section

10. **Be Patient:** Wait 5-10 seconds after each request for the draft issue to appear in the workbench before trying troubleshooting steps

11. **Take Breaks:** You don't have to complete all issues in one session—you can always return and continue where you left off

## Follow-up Actions

After generating and creating your issues:

- **Share with stakeholders:** Notify relevant team members about the new issues
- **Prioritize in backlog:** Work with your product manager to prioritize issues in the product backlog
- **Link related issues:** If you created an epic, link all related issues to it
- **Track progress:** Monitor issue completion and update the research findings document with outcomes
- **Close the loop:** When issues are resolved, consider documenting the impact in a follow-up research study
- **Review code references:** For issues with code references, have a developer verify the file paths and snippets are accurate

---

## Questions to Refine Issue Generation

If the initial output needs refinement, you can ask Copilot follow-up questions such as:

- "Can you break down this recommendation into smaller, more actionable issues?"
- "Can you suggest acceptance criteria that are more specific and measurable?"
- "Can you add more context from the key findings to strengthen the rationale for this issue?"
- "What dependencies exist for this issue that I should call out?"
- "I don't see the issue in the workbench. Can you try creating it again?"
- "Proceed with drafting the issue in the workbench."
- "Can you simplify this issue to focus only on [specific aspect]?"
- "Should this issue be split into multiple issues?"
- "Let's skip this one for now and move to the next recommendation."
- "Go back and create an issue for the recommendation we skipped."
- "Can you add more specific code references to this issue?"
- "Can you search for additional files related to [specific feature/component]?"
- "The code references aren't quite right. Can you search again for files related to [specific functionality]?"

By iterating with these questions, you can ensure that each issue is properly scoped and prioritized for maximum impact.

---

## Common Issues and Solutions

### Issue: Not using Claude model
**Solution:** Check your model selector and switch to Claude Sonnet, Haiku, or Opus.    Other models cannot access the issue creation tool.

### Issue: Copilot provides text output instead of a draft issue
**Solution:** 
- First, verify you're using a Claude model
- Then use the follow-up prompt: "Can you create this as a draft issue in the workbench using the GitHub issue creation tool?"

### Issue: Copilot creates multiple issues at once instead of one at a time
**Solution:** Remind Copilot: "Please create only ONE issue at a time and wait for my feedback before proceeding to the next one."

### Issue: Draft issue appears incomplete or malformed
**Solution:** Edit the issue directly in the workbench, or ask Copilot to regenerate the issue with more detail or specific improvements.

### Issue: Code references are incorrect or missing
**Solution:** 
- Ask Copilot: "Can you search again for files related to [specific feature]?"
- Manually edit the code references in the workbench
- Consult with a developer to verify correct file paths

### Issue: Copilot doesn't ask about code references
**Solution:** Manually prompt: "Should this issue include relevant code references?  If so, please search for and add them."

### Issue: Unable to assign repository in the workbench
**Solution:** This may be a permissions issue.  Verify you have write access to the target repository, or ask a repository admin for assistance.

### Issue: Workbench functionality not available
**Solution:** 
- Verify you're using a Claude model
- Try refreshing your browser
- If still unavailable, fall back to the [manual copy-paste method](#fallback-method-for-non-claude-models)

### Issue: Lost track of which issues have been created
**Solution:** 
- Check your repository's issues list to see what's already been created
- Ask Copilot: "Which recommendations have we already created issues for?"
- Reference issue numbers in your research document as you create them

### Issue: Want to skip a recommendation and come back to it later
**Solution:** Tell Copilot: "Let's skip this one for now and move to the next recommendation." You can always ask Copilot to go back to skipped items later.

---

## Model Comparison Summary

| Feature | Claude (Sonnet/Haiku/Opus) | GPT/Gemini/Grok |
|---------|---------------------------|-----------------|
| GitHub Issue Creation Tool | ✅ Yes | ❌ No |
| Creates draft in workbench | ✅ Yes | ❌ No |
| Generates issue text | ✅ Yes | ✅ Yes |
| Can search for code references | ✅ Yes | ✅ Yes (but can't add to workbench) |
| Requires manual copy-paste | ❌ No | ✅ Yes |
| **Recommendation** | **Use for issue creation** | **Use for other tasks or if Claude unavailable** |

**As of December 8, 2025, Claude models are the only option for direct issue creation through GitHub Copilot's workbench.**
