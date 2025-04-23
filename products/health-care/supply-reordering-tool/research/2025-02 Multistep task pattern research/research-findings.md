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
- **Prototype A (form pattern)**: Form pattern (n=383)
- **Prototype B (multistep task pattern)**: Task pattern (n=383)

Both tests contained identical questions but were paired with different prototypes. SPSS was used for statistical analysis of results.

## Hypotheses and Conclusions

1. The average time to complete tasks will be lower on the new pattern.
   1. **DEFINITELY TRUE:** Task completion times were significantly faster in prototype B, particularly for task 1 which showed a moderate-large effect size. 

2. The task success rate will be greater on the new pattern. 
   1. **DEFINITELY TRUE:** Prototype B showed higher success rates across all tasks, with particularly strong effects in tasks 1 and 3 (Phi = -.410 and -.487 respectively). 

3. A higher proportion of Veterans will find the new pattern to be more intuitive and satisfying than the old experience. 
   1. **LIKELY TRUE:** Mann-Whitney tests showed statistically significant differences favoring prototype B, though practical differences were minimal. 

4. Veterans expect to complete routine tasks quickly and in one session, rather than expecting to leave and come back to the task. 
   1. **DEFINITELY TRUE:** Pre-study questionnaire data shows overwhelming preference for single-session task completion across both prototypes.  

## Key Findings
1. Veterans completed tasks faster with new pattern. (Hypothesis 1)
2. Veterans were more successful on tasks using the new pattern. (Hypothesis 2)
3. Veterans found the new pattern more intuitive and satisfying. (Hypothesis 3)
4. Veterans prefer single-session task completion. (Hypothesis 4)
5. 


## Details of Findings

**Finding 1: Veterans completed tasks faster with the new pattern.**

Labels: 

- There were statistically significant differences between the two prototypes (prototype 1 = A, 2 = B) in terms of time of task for all three tasks. Participants took consistently more time on prototype A when compared with B. ([analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/SPSS%20analysis/time.png))
- Task 1 showed the biggest impact, with Hedges's g (used instead of Cohen's d because the data wasn't normally distributed) reflecting a moderate-large differences. Tasks 2 and 3 were smaller differences. ([analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/SPSS%20analysis/time_impact.png))
- On average, it took participants **nearly double** the time to complete a task on prototype A vs. prototype B. For example, task 1 took group A around 250.68 seconds and group B 143.88 seconds (42.60% increase).
  
**Takeaway:** It took participants much longer to complete task 1 on prototype A when compared with prototype B. The difference is both statistically and practically significant. The practical significance of the differences between the two prototypes gets smaller as participants became acclimated and finished subsequent tasks more quickly. 


**Finding 2: Veterans were more successful on tasks using the new pattern.**

Labels: 

- On task 1, there was a statistically significant difference in task success rates between prototypes A and B. Participants were more successful on prototype B, with a medium-large effect size (Phi = -.410) ([analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/SPSS%20analysis/sucess1a.png))
- On task 2, the same, only with a small-medium effect size (phi = .282) ([analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/SPSS%20analysis/success2.png))
- On task 3, the same, but with a medium-large effect size (phi = -.487) ([analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/SPSS%20analysis/success3.png))

**Takeaway:** Participants on prototype B were directly or indirectly successful more often on all tasks, but it was most pronounced on tasks 1 and 3. The differences were statistically significant and pronounced.


**Finding 3: Veterans found the new pattern more intuitive and satisfying.**

Labels: 

- We ran a Mann-Whitney test because the data were non-normal (couldn't use t-tests) to assess the post test questions and questions about ease and confidence. All were significantly different, in that prototype B people reported more ease, confidence, trust, etc. than prototype A. ([analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/SPSS%20analysis/ease.png))
- However, this difference was pretty small (used Rank-biserial correlation to compute effect size - again, because the data were non-normal and variances weren't equal). ([analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/SPSS%20analysis/ease_mannwhitney.png))
- When we asked "Were there any points during the tasks where you felt lost or unsure of what to do next?" the majority of participants responded "no" (75.97% for A, 78.06% for B)
- When we asked "Is there anything you would add, remove, or change about this experience?" the majority of participants responded "no" (60.84% for A, 64.49% for B)

**Takeaway:** While there was statistically significant differences in CX metrics, they were minimal in real-world terms. 


**Finding 4: Veterans prefer single-session task completion.**

Labels: 

- Most participants complete MHV tasks in one session (95.3% for A, 95% for B) vs. leaving and coming back to finish the task. 




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

Research plan
Task scripts
Optimal Workshop test A
Optimal Workshop test B
Quantitative data spreadsheet 

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
