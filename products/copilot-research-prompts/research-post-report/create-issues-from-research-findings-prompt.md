# Create GitHub Issues from Research Findings Prompt

This prompt is designed to help researchers convert recommendations and next steps from completed research findings into actionable GitHub issues.  By automating the creation of well-structured issues, researchers can ensure that research insights are tracked, prioritized, and acted upon. 

## Purpose

The purpose of this prompt is to:
- Transform research recommendations into actionable GitHub issues with clear descriptions and context. 
- Convert next steps into trackable tasks with appropriate owners and timelines. 
- Link issues back to the original research findings for traceability. 
- Apply appropriate labels, priorities, and metadata to facilitate project management.

## Instructions for Use

1. **Complete your research findings report** using the [research-findings-template.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md)
2. **Ensure your Recommendations and Next Steps sections are finalized** with supporting evidence and clear action items
3. **Open GitHub Copilot** for your research findings document (***TIP: Hit the Copilot icon twice to attach it to the chat.***)
4.  **Copy the prompt below** and paste it into your GitHub Copilot chat
5. **Review the generated issue content** and make any necessary adjustments
6. **Create the issues** in your repository using the generated content

## Best Practices

- **Be Specific:** Ensure your recommendations include clear actions and supporting evidence before generating issues.
- **Include Owners:** If known, specify who should be assigned to each recommendation or next step.  
- **Set Priorities:** Consider the impact and urgency of each recommendation to help with prioritization. 
- **Link Back to Research:** Always include a reference to the original research findings document for context.
- **Use Appropriate Labels:** Apply relevant labels (e.g., `research`, `accessibility`, `usability`, `enhancement`) to help with filtering and organization.  

By following these steps, you can ensure that your research insights are translated into actionable work items that drive product improvements. 

---

## Prompt

```
I need to create GitHub issues from the Recommendations and Next Steps sections of this research findings report.  

For each recommendation and next step, please generate:

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

4. **Priority Ranking:** Suggest a priority level (High/Medium/Low) based on:
   - Impact on user experience (from research findings)
   - Alignment with KPIs mentioned in the research
   - Effort to implement (if estimable from context)

5. **Related Issues or Epics:** If multiple issues should be grouped under an epic or are related to each other, note these relationships. 

Please format the output so that each issue is clearly separated and can be easily copied into GitHub's issue creation interface. 

**Additional Instructions:**
- If a recommendation has multiple supporting pieces of evidence, create separate issues for each distinct action item
- If a next step mentions a specific owner, include that in the issue description
- Maintain traceability by always linking back to the specific section of the research findings
- If further research is needed (from the "Further research needed" section), label those issues with `research-needed`
```

---

## Example Output Format

After running this prompt, you should receive output structured like this:

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
1. Add clearer eligibility criteria before the form fields
2.  Include examples of qualifying secondary caregivers
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

## Tips for Using Generated Issues

1. **Review Before Creating:** Always review the generated issue content to ensure accuracy and completeness.

2. **Batch Creation:** You can create issues in bulk by copying each generated issue into GitHub's interface or using GitHub's API.

3. **Create an Epic:** If you have multiple related issues, consider creating a parent epic issue to group them together.

4. **Add to Project Board:** Link issues to your team's project board for visibility and tracking.

5. **Assign Immediately:** If owners are identified, assign issues right away to ensure accountability. 

6. **Reference in Research Report:** After creating issues, consider adding links back to them in your research findings document under the "Next Steps" section. 

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

By iterating with these questions, you can ensure that your issues are properly scoped and prioritized for maximum impact.
