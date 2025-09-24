# Universal Research Synthesis Prompt for GitHub Copilot

## 🎯 Core Prompt Template

Copy and paste this prompt into GitHub Copilot Chat, replacing the placeholders with your specific context:

```
You are an expert UX researcher analyzing user research data. Please analyze the following [TRANSCRIPT/SESSION NOTES/RESEARCH FINDINGS] using multiple research methodologies.

Context:
- Product/Feature: [PRODUCT NAME]
- Research Question: [PRIMARY RESEARCH QUESTION]
- Participant Type: [USER GROUP/PERSONA]
- Session Date: [DATE]
- Method: [INTERVIEW/USABILITY TEST/SURVEY/etc.]

Content to Analyze:
[PASTE YOUR TRANSCRIPT/NOTES HERE]

Please perform the following analyses:

## 1. THEMATIC ANALYSIS
- Identify and categorize main themes
- Note frequency of theme occurrence
- Highlight unexpected or emergent themes
- Create a hierarchy of themes (primary, secondary, tertiary)

## 2. SENTIMENT ANALYSIS
- Overall emotional tone (positive/negative/neutral)
- Emotional journey throughout the session
- Pain points with emotional intensity ratings (1-5)
- Moments of delight or satisfaction
- Frustration indicators and triggers

## 3. AFFINITY MAPPING
Group related observations into:
- User needs
- Pain points
- Behaviors
- Mental models
- Expectations vs. reality
- Workarounds

## 4. THE 5 WHYS ANALYSIS
For each major pain point identified:
- Surface issue
- Why 1: [Immediate cause]
- Why 2: [Underlying cause]
- Why 3: [Deeper cause]
- Why 4: [Root cause area]
- Why 5: [Fundamental root cause]

## 5. USER JOURNEY INSIGHTS
Map observations to journey stages:
- Awareness/Discovery
- Consideration/Research
- Decision/Action
- Use/Experience
- Retention/Advocacy
Note: friction points, emotions, and opportunities at each stage

## 6. COMPARATIVE PATTERNS
If applicable, compare with previous sessions:
- Consistent patterns across users
- Unique/outlier behaviors
- Evolving user needs
- Demographic variations

## 7. TASK ANALYSIS
For usability sessions:
- Task completion rates
- Time on task observations
- Error points and recovery
- Help-seeking behaviors
- Abandoned workflows

## 8. QUOTE EXTRACTION
Pull out powerful quotes that:
- Illustrate key pain points
- Demonstrate user mental models
- Show emotional responses
- Support key findings
- Could influence stakeholders

## 9. OPPORTUNITY IDENTIFICATION
Based on the analysis:
- Quick wins (low effort, high impact)
- Strategic improvements (high effort, high impact)
- Feature ideas
- Process improvements
- Content/messaging opportunities

## 10. GAPS & FOLLOW-UP QUESTIONS
- What we still don't know
- Questions for follow-up research
- Assumptions to validate
- Areas needing quantitative validation

## OUTPUT FORMAT
Please provide:
1. Executive Summary (3-5 bullets)
2. Breakout for each analysis section
3. Key Insights (numbered list with evidence)
4. Prioritized Recommendations
5. Risk Factors or Concerns
6. Suggested Next Steps

Additionally, note any:
- Contradictions in the data
- Potential biases observed
- Methodological limitations
- Generalizability considerations
```
