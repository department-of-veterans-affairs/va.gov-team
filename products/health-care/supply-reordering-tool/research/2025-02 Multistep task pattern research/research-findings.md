# Multistep task pattern Research Findings

**Office of the CTO - MHV Portal, Supply reordering tool**

Date: 2025-04-22

Authors: 
- Jina Ryu, jina.ryu@va.gov
- Robyn Singleton, Robyn.Singleton@va.gov

**Jump to:**
- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)

## Research Goals
Veterans often use the My HealtheVet (MHV) portal on VA.gov to complete quick, routine tasks—like ordering medical supplies and refilling prescriptions—as part of managing their health. These actions occur at key moments, such as when supplies run low or before an appointment, and Veterans expect a clear, efficient process. The lack of a standard pattern for tasks across MHV tools has led to inconsistent experiences, making routine actions harder to complete efficiently.

The purpose of this research was to compare the old (form pattern, prototype A) and new (task pattern, prototype B) versions of the medical supplies tool. Specifically, we wanted to understand:
- If the multistep task pattern will make completing routine and simple tasks faster and easier for Veterans.
- Veterans' expectations when completing routine tasks.

## Research Questions
1. Which pattern option enables Veterans to complete reordering medical supplies more quickly?
2. Which pattern option do Veterans find to be more intuitive and less difficult to use?
3. What are Veterans' expectations when completing routine tasks?

## Methodology
Unmoderated A/B prototype testing using Optimal Workshop's prototype testing feature. We published two tests:
- **Prototype A (form pattern)**: Form pattern
- **Prototype B (multistep task pattern)**: Task pattern

Both tests contained identical questions but were paired with different prototypes. SPSS was used for statistical analysis of results.

## Hypotheses and Conclusions

1. **The average time to complete tasks will be lower on the new pattern.**
   - **Definitely True**: Task completion times were significantly faster in prototype B, particularly for task 1 which showed a moderate-large effect size.

2. **The task success rate will be greater on the new pattern.**
   - **Definitely True**: Prototype B showed higher success rates across all tasks, with particularly strong effects in tasks 1 and 3 (Phi = -.410 and -.487 respectively).

3. **A higher proportion of Veterans will find the new pattern to be more intuitive and satisfying than the old experience.**
   - **Likely True**: Mann-Whitney tests showed statistically significant differences favoring prototype B, though practical differences were minimal.

4. **Veterans expect to complete routine tasks quickly and in one session, rather than expecting to leave and come back to the task.**
   - **Definitely True**: Pre-study data shows overwhelming preference for single-session task completion:
     * Test A: 95.3% (365 of 383) finished tasks in one session
     * Test B: 95.0% (364 of 383) finished tasks in one session
     * Combined results show 95.15% of Veterans (729 of 766) complete tasks in one session
     * Only 4.85% (37 of 766) reported leaving and returning to complete tasks
   - This strong preference for single-session completion was consistent across both prototype versions

## Key Findings

1. **Veterans completed tasks faster with the new pattern (Hypothesis 1)**
Labels: `design-patterns`, `interaction-pattern`
- Task 1 showed the largest time difference with moderate-large effect size
- Time differences diminished in subsequent tasks as users became familiar
- Supporting data from Task 1:
  * Test A average: 2m 45s
  * Test B average: 1m 32s
  * Effect size: Hedges's g showed moderate-large differences
- Statistical analysis showed:
  * Significant differences between prototypes for all three tasks
  * Task 1 showed biggest impact (moderate-large effect size)
  * Tasks 2 and 3 showed smaller differences as users became acclimated
  * Data wasn't normally distributed, hence use of Hedges's g
![image](https://github.com/user-attachments/assets/4523f0e8-b1fd-4095-8bb6-fa771f6e0d12)
![image (1)](https://github.com/user-attachments/assets/80b8d72a-883f-4dd2-a866-748aeb7a6d7c)


2. **Higher success rates in new pattern across all tasks (Hypothesis 2)**
Labels: `design-patterns`, `usability`
- Task 1: medium-large effect size (Phi = -.410)
- Task 3: similar effect size (Phi = -.487)
- Task 2: small-medium effect size (phi = .282)
- Success rates by task:
  * Task 1: A = 76%, B = 92%
  * Task 2: A = 82%, B = 89%
  * Task 3: A = 71%, B = 94%
- Statistical significance found in all tasks
- Most pronounced differences in Tasks 1 and 3

3. **Both prototypes were generally straightforward (Hypothesis 3)**
Labels: `usability`
- Task 1 Q3 "Were there any points during the tasks where you felt lost or unsure?":
  * Test A: 291 Veterans (76%) said no, 92 (24%) said yes
  * Test B: 299 Veterans (78%) said no, 84 (22%) said yes
- Post-Study Q1 "Is there anything you would add, remove, or change?":
  * Test A: 233 Veterans (61%) said no, 150 (39%) said yes
  * Test B: 247 Veterans (64%) said no, 136 (36%) said yes
- Mann-Whitney test results:
  * Prototype B showed statistically significant higher ratings for ease, confidence, and trust
  * Real-world differences were minimal (based on Rank-biserial correlation)
  * Non-normal data distribution required non-parametric testing

4. **Veterans want direct interaction with supplies (Hypothesis 4)**
Labels: `interaction-pattern`, `navigation`
- 28 users tried to click directly on items first
- 21 Veterans explicitly mentioned wanting to click item boxes directly
- 7 Veterans noted "Start Order" button wasn't prominent enough
- Common quote: "I thought I could just click on the first item on the 3 item list that appeared"
- Supporting Clickmap shows frequent clicks on item boxes instead of "Start Order" button
[Heatmap placeholder showing click patterns]

5. **Supply category separation needed**
Labels: `information-architecture`, `navigation`
- 32 users requested separation of CPAP and hearing aid supplies
- 23 Veterans mentioned confusion about mixed supply types
- 12 suggested category-specific views
- Impact on task completion:
  * 15% of errors related to category confusion
  * Average 30 seconds added to task time when dealing with multiple categories
- Common quote: "Mixing of the CPAP supplies with the hearing aid supplies made me pause"

6. **Veterans expect single-session task completion**
Labels: `user-expectation`, `task-completion`
- Pre-study question 2 results show most Veterans complete tasks in one go
- Strong preference for quick completion without navigation interruptions
- Recommendation: Optimize for single-session completion
- Avoid design patterns that encourage leaving the task flow

7. **Clearer handling of unavailable supplies needed**
Labels: `inventory-management`, `user-feedback`
- 45 users requested clearer instructions for unavailable items
- Common quote: "Make it easier to view and bullet/light up unavailable items or allow to back order items"
- High frequency of mentions across both test versions
- Users want clear visual indicators of item availability

8. **Enhanced order confirmation and cancellation needed**
Labels: `order-management`, `user-feedback`
- 27 users requested clearer status updates
- Common quote: "I think a final screen confirming the order has been successfully placed would be helpful"
- Specific requests for:
  * Order confirmation screens
  * Cancellation confirmation
  * Clear status indicators throughout process

## Details of Findings

**Finding 1: Veterans completed tasks faster with the new pattern**
Labels: `design-patterns`, `interaction-pattern`

Task completion times were significantly faster in prototype B, particularly for initial tasks.

> "The step-by-step approach made it much clearer what I needed to do" - P12

> "I didn't have to think about where to look - each step was obvious" - P34

**Finding 2: Higher success rates in new pattern**
Labels: `design-patterns`, `usability`

Statistical analysis showed significantly higher success rates across all tasks in prototype B.

> "The new layout made it impossible to miss steps" - P45

> "I liked how each step was clearly marked, couldn't mess it up if I tried" - P67

**Finding 3: Direct interaction preference**
Labels: `interaction-pattern`, `navigation`

Veterans consistently attempted to interact directly with supply items rather than using form controls.

> "Why can't I just click the items I want?" - P78

> "It would be more natural to click directly on the supplies" - P89

## Recommendations

* **Implement the new multistep pattern**
    * Supporting evidence: Significantly faster completion times and higher success rates
    * Priority: High

* **Enable direct item selection**
    * Supporting evidence: 28 users attempted direct interaction, 21 explicitly requested it
    * Priority: Medium

* **Separate supply categories**
    * Supporting evidence: 32 users requested category separation, 23 reported confusion
    * Priority: Medium

## Next Steps

1. Update prototype B based on feedback (Owner: Design team)
2. Implement category separation in next iteration (Owner: Development team)
3. Test direct item selection pattern (Owner: Research team)

## Further research needed

* Test with screen reader users - this demographic was underrepresented
* Investigate mobile usage patterns
* Research category organization preferences
* Test with Veterans who order multiple supply types regularly

## Appendix

[Research plan](link here)
[Conversation guide](link here)
[Interview transcripts](link here)

## Tools used for Synthesis
- SPSS for statistical analysis
- Optimal Workshop for A/B testing
- Mural for affinity mapping

## Pages and applications used
- Prototype A: [link]
- Prototype B: [link]
- Current production version: [link]

## Who we talked to

**Recruitment criteria**
We sought Veterans who:
- Order medical supplies through VA.gov
- Have ordered supplies in the last 6 months
- Represent diverse age groups and technical comfort levels

We talked to **383 participants.**

Audience segment:
* Veterans: 383
* Caregivers: 0
* Family members of a Veteran: 0

Gender:
* Male: 301
* Female: 82

Age:
* 25-34: 45
* 35-44: 89
* 45-54: 102
* 55-64: 98
* 65+: 49

Education:
* High school degree or equivalent: 87
* Some college (no degree): 92
* Associate's degree/trade certificate: 76
* Bachelor's degree: 89
* Master's degree: 39

Geographic location:
* Urban: 245
* Rural: 138

Disability and Assistive Technology (AT):
* Cognitive: 12
* AT users: 8
* Desktop screen reader: 3
* Mobile screen reader: 2
* Magnification/Zoom: 15
* Hearing aids: 45

## Underserved groups we haven't talked to

This research does not include the perspectives of the following marginalized Veteran groups:
* Screen reader users (only 3 participants)
* Veterans under 25
* Native American Veterans
