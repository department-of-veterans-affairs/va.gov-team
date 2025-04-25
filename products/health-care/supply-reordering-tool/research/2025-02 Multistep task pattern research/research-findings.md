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

---

## Hypotheses and Conclusions

1. The average time to complete tasks will be lower on the new pattern.
- **DEFINITELY TRUE:** Task completion times were significantly faster in prototype B, particularly for task 1 which showed a moderate-large effect size.
- There were statistically significant differences between the two prototypes (prototype 1 = A, 2 = B) in terms of time of task for all three tasks. Veterans took consistently more time on prototype A when compared with B. ([analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/SPSS%20analysis/time.png))
- Task 1 showed the biggest impact, with Hedges's g (used instead of Cohen's d because the data wasn't normally distributed) reflecting a moderate-large differences. Tasks 2 and 3 were smaller differences. ([analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/SPSS%20analysis/time_impact.png))
   - Group B completed task 1 in an average of 143.88 seconds, which was **43% faster** than Group A’s average time of 250.68 seconds.
- **Takeaway:** It took veterans much longer to complete task 1 on prototype A when compared with prototype B. The difference is both statistically and practically significant. The practical significance of the differences between the two prototypes gets smaller as veterans became acclimated and finished subsequent tasks more quickly.  

2. The task success rate will be greater on the new pattern. 
- **DEFINITELY TRUE:** Prototype B showed higher success rates across all tasks, with particularly strong effects in tasks 1 and 3 (Phi = -.410 and -.487 respectively).
- **Task 1:** There was a statistically significant difference in task success rates between prototypes A and B. Veterans were more successful on prototype B, with a medium-large effect size (Phi = -.410) ([analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/SPSS%20analysis/sucess1a.png))
   - Group B's success rate (72%) was **140% higher** than Group A's (30%).
- **Task 2:** the same, only with a small-medium effect size (phi = .282) ([analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/SPSS%20analysis/success2.png))
   - Group B's success rate (64%) was **88% higher** than Group A's (34%).
- **Task 3:** the same, but with a medium-large effect size (phi = -.487) ([analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/SPSS%20analysis/success3.png))
   - Group B's success rate (70%) was **268% higher** than Group A's (19%).
- **Takeaway:** Veterans on prototype B were directly and indirectly successful more often on all tasks, but it was most pronounced on tasks 1 and 3 (order a supply, find unavailable supplies). The differences were statistically and practically significant.


3. A higher proportion of Veterans will find the new pattern to be more intuitive and satisfying than the old experience. 
- **LIKELY TRUE:** Mann-Whitney tests showed statistically significant differences favoring prototype B, though practical differences were minimal.
- We ran a Mann-Whitney test because the data were non-normal (couldn't use t-tests) to assess the post test questions and questions about ease and confidence. All were significantly different, in that prototype B people reported more ease, confidence, trust, etc. than prototype A. ([analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/SPSS%20analysis/ease.png))
- However, this difference was pretty small (used Rank-biserial correlation to compute effect size - again, because the data were non-normal and variances weren't equal). ([analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/SPSS%20analysis/ease_mannwhitney.png))
- When we asked "Were there any points during the tasks where you felt lost or unsure of what to do next?" the majority of veterans responded "no" (75.97% for A, 78.06% for B)
- When we asked "Is there anything you would add, remove, or change about this experience?" the majority of veterans responded "no" (60.84% for A, 64.49% for B)
- **Takeaway:** While there was statistically significant differences in CX metrics, they were minimal in real-world terms. 

4. Veterans expect to complete routine tasks quickly and in one session, rather than expecting to leave and come back to the task. 
- **DEFINITELY TRUE:** Pre-study questionnaire data shows overwhelming preference for single-session task completion across both prototypes.
- Most veterans complete MHV tasks in one session (95.3% for A, 95% for B) vs. leaving and coming back to finish the task.
- Out of the 37 veterans who responded that they left and came back, the most common reasons were needing additional information (43.2%) and encountering technical issues (40.5%). Other reasons included interruptions (16.2%) and unclear instructions (18.9%).
- **Takeaway:** Veterans typically complete MHV tasks in one session, suggesting that components like the MHV secondary navigation and cancel/save later options may not be as relevant within the task flow.

---

## Key Findings
1. Veterans frequently clicked on the list view cards to initiate their tasks, rather than using the "Start Order" action link.
2. Most Veterans (95.3%) felt confident they successfully submitted their supply order, but some felt the confirmation alert lacked necessary details.
3. Around half of Veterans (55%) successfully canceled their in-progress orders using the cancel button, but many misunderstood the process or missed the button entirely, highlighting a gap between perceived and actual task completion.
4. While 70% of Veterans successfully located their unavailable supplies using the segmented bar control, only 50% of clicks were directed toward the "Unavailable" tab.
5. Veterans generally understood when to click out to other tools to complete their tasks, but some requested reducing steps by integrating direct links for smoother navigation.
   
---

## Details of Findings

### 1. Veterans frequently clicked on the list view cards to initiate their tasks, rather than using the "Start Order" action link.

When tasked with reordering hearing aid batteries, only 26% of clicks were directed at the "Start Order" link. The majority of clicks were distributed across the list view cards, suggesting that Veterans expected to start the task directly from the list view page. ([clickmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/Clickmaps/Task%201%20B%20_%20Landing%20page%20a%20heatmap.png))

Veterans provided feedback expressing dissatisfaction with the additional step of navigating to another page to start their order:

> "Why go to a second page to order the supply? Why not just be able to click on it/select it and order from the first page? Skip the step of starting the order. Why else would I be on that page if it wasn’t to order more? Even if I was checking on the list/name of items, I can read those whether they are selectable or not."

> "No, but it is your system and not a user’s way of ordering. Why add an extra layer to the ordering process? Double click on what needs to be ordered and be done."

**Recommendation:** To better align the system with user expectations and reduce unnecessary steps, consider making the list view cards clickable, enabling veterans to directly initiate their tasks.

---

### 2. Most Veterans (95.3%) felt confident they successfully submitted their supply order, but some felt the confirmation alert lacked necessary details.

The confirmation alert was generally effective in communicating order submission. However, a small subset of Veterans expressed concerns about the clarity and completeness of the alert. Suggestions to improve the confirmation alert included:

**Adding Specific Order Details:**  
Some Veterans wanted more detailed information in the confirmation alert, such as item names, quantities, and expected delivery dates.

> "No... but I would have felt better if it told me exactly what I ordered rather than listing everything again and saying my order was complete."

> "Your order of xxxxx was accepted and should be shipped on mm/dd/yyyy."

**Providing Clearer Acknowledgment of Completion:**  
A few Veterans indicated that the alert could more clearly communicate that their order was successfully submitted.

> "Once order has been submitted, it would be nice to have an acknowledgment of receipt of the submission (ie., 'Thank you for your order')."

**Recommendation:** Display the exact details of the items ordered, including names, quantities, and shipping information. Example: "You ordered 2 packs of hearing aid batteries. Expected delivery: 04/30/2025." Use a clear heading in the confirmation alert to indicate task completion and that VA received the Veteran’s order, such as "We got your order."

---

### 3. Around half of Veterans (55%) successfully canceled their in-progress orders using the cancel button, but many misunderstood the process or missed the button entirely, highlighting a gap between perceived and actual task completion.

Several factors contributed to the gap between successful completion and user confidence in canceling orders:

**Misinterpretation of Study Instructions:**  
5.74% of veterans stopped their task after seeing the cancellation modal, possibly misunderstanding the instructions to stop once they saw the modal, rather than clicking the “Confirm Cancellation” button.

**Click Behavior Insights:**  
The heatmap showed that only 18% of clicks were on the "Cancel" button/link. ([Clickmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/Clickmaps/Task%204%20B%20_%20Select%20supplies1%20heatmap.png)) 
The majority of the remaining clicks were on the pre-selected item card, suggesting that some Veterans interpreted unchecking the box as canceling the order, potentially due to unclear study instructions.

**Missed Cancel Option and Scrolling Behavior:**  
Some Veterans did not scroll to the bottom of the page, likely missing the cancel button entirely.

> "There should be a simple cancel button."

**Post-Order Cancellation Expectations:**  
A few veterans attempted to find cancellation options after order submission, highlighting a desire for greater visibility and flexibility in managing orders.

> "The order cancellation task wasn't very clear. I created an order with the expectation that when the order was submitted that I would have an opportunity to cancel... I'd suggest a true means of canceling an order that's been placed, perhaps in the confirmation email or as part of a status tab in the app itself."

**Recommendation:** Remove the in-task cancel button as it tested poorly and incorporate exit modals that warn veterans about losing progress if they navigate away. Enhance post-order management by introducing options to cancel orders after submission.

---

### 4. While 70% of Veterans successfully located their unavailable supplies using the segmented bar control, only 50% of clicks were directed toward the "Unavailable" tab.

The majority of remaining clicks were directed toward the “Start Order” action link, indicating that some Veterans expected unavailable supplies to appear in the main order flow. Feedback also highlighted that the segmented bar control may lack sufficient visual distinction, making it easy to overlook. ([Clickmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/Clickmaps/Task%203%20B%20_%20Landing%20page%20a%20heatmap.png))

> "The unavailable supply order not very evident. Make background bold or a different color."

> "I would choose a different color than gray for the available/unavailable buttons, perhaps green for the available and red for the unavailable."

> "The way that 'Available' and 'Unavailable' were highlighted was initially somewhat confusing. I'd like to have the non-selected item be blurred out or something like that to make it very clear I've selected the right tab. I have some macular degeneration going on and would like more than one indication that I've selected what I intended to select."

Additionally, some Veterans found separating available and unavailable supplies into distinct views counterintuitive. They preferred to search for the item first and determine availability afterward:

> "The 'Available' and 'Unavailable' is counterintuitive. If I am looking for supplies, I want to see the list of items FIRST. Why would I look for unavailable items? Just like shopping online at any merchant, you first find your item and THEN it will tell you availability."

**Recommendation:** Combine available and unavailable supplies into a unified list view with filter and sort options. Use page navigation only when it aligns with veterans’ mental models, such as distinguishing between past and future appointments.

---

### 5. Veterans generally understood when to click out to other tools to complete their tasks, but some requested reducing steps by integrating direct links for smoother navigation.

On the unavailable supply view, 86% of clicks were directed toward links instructing Veterans to contact their provider or navigate to their messages using the My HealtheVet (MHV) secondary header. This demonstrates that veterans mostly understood the next step based on the existing content. However, some veterans expressed frustration with the multiple steps required and suggested clearer cross-tool linking to reduce task friction. ([Clickmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/Clickmaps/Task%203%20B%20_%20Landing%20page%20b%20heatmap.png))

> "For those who use cellphones a lot, I found the pages a little difficult to size in order to view all material. I use iPhone 16. Most of us wish to avoid having to call VA for assistance; the long messages are horrible and wait times can be long. Most older vets hate automated answering due to the long explanations of options. Couldn’t there be a button for unavailable supplies that linked to a message platform? Messages are a more appropriate and succinct method of communication and provide a readable record."

> "For unavailable - you shouldn't have to contact your provider. When you hit reorder, it should send a message to your doctor immediately and then they can refill it that way. You should also be able to click on the unavailable supply icon to pre-order it."

**Recommendation:** Standardize cross-tool linking flows by adding direct links for unavailable supplies to streamline messaging and reduce navigation steps.

---

## Recommendations
1. **Make List View Cards Clickable:** Enable direct task initiation from list view cards to reduce unnecessary navigation steps.
2. **Enhance Confirmation Alerts:** Include detailed order confirmation information (e.g., item names, quantities, expected delivery dates) and a clear acknowledgment of successful submission.
3. **Remove Cancel Button:** Remove in-task cancel buttons, improve post-order cancel options, and use exit modals to warn user when they attempt to navigate away from a task
4. **Remove MHV secondary nav during at ask flow:** Knowing most veterans finish a task in one session, consider removing this component during a task flow
5. **Unify Supply Lists:** Combine available and unavailable supplies into a single list view with filtering and sorting options to align with user expectations.
6. **Streamline Navigation Flows:** Add direct links for unavailable supplies to reduce steps and improve cross-tool linking.

### Next Steps
1. Refine [design pattern guidance](https://www.figma.com/design/KFSP8a93vQCIAuOna67qIh/Multistep-task-pattern?node-id=619-25050) based on research findings and recommendations (sketched out [v0 prototype](https://kzmgnjsd5whk5jypofvm.lite.vusercontent.net/))
2. Share out findings with MHV portal teams as part of portal UX standardization work


## Further research needed

- Test how this pattern will work on other MHV tools

## Appendix

- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/researchplan.md)
- [Task scripts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2025-02%20Multistep%20task%20pattern%20research/taskscript.md)
- [Quantitative data spreadsheet](https://dvagov-my.sharepoint.com/:x:/r/personal/jina_ryu_va_gov/_layouts/15/doc2.aspx?sourcedoc=%7BB4A9C1A7-3BE5-4DB4-A75A-05BC9FE533EE%7D&file=240909_SM%20results%20for%20SPSS%20import%20-%20Copy.xlsx&action=default&mobileredirect=true) 
- [Affinity map mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745010858431/ac4af6a06b51b80f65a8981d8bb16373eadef4db)

## Tools used for Synthesis
- SPSS for statistical analysis
- Optimal Workshop for A/B testing
- Mural for affinity mapping

## Pages and applications used
- [Prototype A](https://www.figma.com/design/KFSP8a93vQCIAuOna67qIh/Multistep-task-pattern?node-id=955-52320&t=LFebsPrx4Q0zW0J5-1)
- [Prototype B](https://www.figma.com/design/KFSP8a93vQCIAuOna67qIh/Multistep-task-pattern?node-id=951-12529&t=LFebsPrx4Q0zW0J5-1)

