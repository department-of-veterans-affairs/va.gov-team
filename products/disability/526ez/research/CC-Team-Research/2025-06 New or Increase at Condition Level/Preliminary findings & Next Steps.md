# 2025-06 New/Increase at Condition Level: Topline Research Findings and Next Steps

**Date:** 07/22/2025

**Contacts:** [Kim Ladin](mailto:kimladin@navapbc.com), [brian.pianalto@aquia.io](mailto:brian.pianalto@aquia.io)

# Study description

One-hour remote usability study with 7 Veterans, testing a high-fidelity, functional prototype in Staging. Tasks (all in the same claim) included:

1. Add a new condition  
2. Request an increase for rated condition  
3. Request an increase for another rated condition  
4. Add a new condition with a secondary service connection  
5. Edit a condition  
6. Delete a condition

# Key findings

## 1\. The new design was very easy to use, and participants were successful in most core tasks.

Veterans were enthusiastic about how simple and easy the form was. Several asked “when will this be live?” and expressed confidence that they could file a claim themselves if this prototype was available. They also appreciated the brevity of the form, some so much that they were worried it was “too short.”

Most importantly, the new structure of asking questions, including new or increase, for each condition in turn, combined with the new list-n-loop pattern, was highly usable and well understood.

* Participants easily chose between “a condition I haven’t claimed before” and the rated conditions (except for the secondary condition task, as described below).  
* Participants understood what the list of rated disabilities represented  
* There was no confusion or concern about the list of rated conditions becoming shorter as they were added to the claim. Most participants noticed the list getting shorter and voiced appreciation for the used-up options being removed from the list.  
* All participants were easily able to use the list-n-loop structure with a continuation question on the last screen. One participant had a slight difficulty when trying to move on at the end, but they quickly figured it out.  
* Participants understood the purpose and appreciated the organization of the Review Conditions screen, noting it enabled them to go back and edit their information. 

We conclude that the new design will work well for users.

*Recommendation: Proceed with the new design*

## 2\. Participants had a hard time adding a condition that was secondary to a previously rated condition.

* 3 of 7 participants asked for an increase in the underlying rated condition rather than adding a new condition. This is concerning because it means the actual secondary condition might never be communicated to the VA.  
* Of the 4 who chose to add a new condition, 3 used free text to enter a “combo” condition like “Sciatica to the shoulder.” This pattern will reduce autosuggestion and classification coverage.   
* On the positive side, 3 of 4 who added a new condition found it easy to choose the correct cause option and then enter details. Unfortunately, the one person who chose correctly from the autosuggestion menu was then stymied trying to choose what caused their condition. 

*Recommendation: Further investigate impact and possible solutions.*

## 3\. The editing flow was difficult for 2 participants.

We asked participants to edit a detail about one of their conditions (either the date or the cause details, depending on the session). 

* 5 participants easily accomplished the task  
* 2 participants got stuck on the first screen in the Edit flow. They expected the information they wanted to edit to be available on the screen right after they clicked “Edit,” not realizing at first they would need to advance through all screens for the condition they were editing. Both eventually figured out they would need to click through to get to the right screen.

*Recommendation: We don’t recommend trying to restructure the standard editing pattern. It might, however, be worth considering whether some individual screens could be combined to shorten the click-through experience. This can happen sometime in the future.*

## 4\. We observed two problems with the autosuggestion menu

* The display on one participant’s phone screen was a problem. When they clicked into the text box, the phone keyboard almost completely obscured the autosuggestion menu.  
  * *Recommendation: Further investigate this issue to determine prevalence, then generate and evaluate possible solutions.*  
* The same participant was confused about how the autosuggestion menu would work. The on-screen instructions refer to a “list” they could choose from, but no list appears until the user starts typing.  
  * *Recommendations: Consider editing the instructions to clarify.*

## 5\. Autosuggestions were only partially used

4 of 7 participants entered free text into the new condition field, while 3 used an autosuggested term.

*Recommendation: Look at these cases in detail in the context of future work on the autosuggestion menu.*

## 6\. The four options on the Cause screen are not yet optimal

While most participants were able to make a selection, several had to think about it carefully. The fourth option (about an event while receiving VA care) was largely misunderstood.

*Recommendation: Discuss whether any further improvements could be made to this screen. Focus on improving the fourth option.*

## 7\. No one knows the dates their condition started or worsened.

* We heard emphatically that Veterans do not know the dates that their conditions started or worsened.   
  * One Veteran said the date was the most challenging part of the whole process.  
* It’s not just a matter of which day or month; it can be hard to remember the year if it was some time ago.   
* Veterans seem to be used to making guesstimates for dates.   
  * They use different strategies for guesstimating, some more accurate than others.   
* No one noticed that the date is not required  
* Only one person entered a month and year without the day.   
* Several noticed and appreciated the hint text about entering an approximate date.

*Recommendation: Remove the day field to reduce stress on Veterans.*

## 8\. Using condition as the page title supported orientation

* All participants were able to accurately report which condition they were working   
* They pointed to the \<h3\> page titles with the condition name as providing clear orientation

*Recommendation: Use condition as \<h3\> page title.*

## 9\. Instructions were helpful

* Most participants at least skimmed the instructions, or referred back to them when they needed clarification to complete a task  
* Participants commented positively about the instructions

*Recommendation: Only minor improvements to the on-screen instructions are needed.*

# 

# Next steps

### Move forward with current design

* Investigate whether implementing the new design will cause any issues for in-progress forms (Yurena to create ticket for this investigation)  
* If no issues found, finalize design (see Before Launch items below) and move toward implementation

## Before launch

1. ### Improve instructions

* Auto-suggestion instructions \- address the confusion around “list” wording

2. ### Improve wording on Cause page, particularly Option 4

* Re-work the fourth option about VA care to reduce confusion  
* Look for other ways to make the first three options more clear  
* Work with DBC content specialist  
* Ask for help in Midpoint Review

3. ### Prevent errors around date entry 

* If possible, make sure no part of the date is required, even if user starts entering a partial date.

4. ### Close the loop on the \<h3\> page title

* Since our solution is different from what the Accessibility team recommended, go back to the original thread and let them know what we found  
* To head off any potential concerns, include research results in Midpoint review package

## After launch

1. ### Work on Secondary conditions when we begin working on Supplemental claims

* Because we’re not making the secondary conditions situation worse with the new design, we’re comfortable moving forward on the new design without further addressing secondary condiitons  
* Secondary conditions and supplemental claims may both affect the Add a Condition screen, so it makes sense to work on them together

2. ### Discuss issues around editing in the one-thing-per-page model with Enablement team

3. ### Investigate problem with phone keyboard obscuring autosuggestion dropdown

* Leah spoke with Shannon about this and she said the data indicates the problem isn't as severe as we encountered. Follow up on this.  
* Create some backlog issues to continue working on improving this after we ship.  
  * One idea Leah had would be to build functionality similar to the way sites frequently offer to correct your mailing address (but as another step, not a pop up).

4. ### Look at specific autosuggestion results as part of larger work on autosuggestion menu

5. ### Improve date screens

* Try again for approval to remove Day field  
  * Open an issue and check in with Shannon's efforts to resolve this with VBA in a couple months.  
* Consider if helper text could be added or improved  
  * Add information about how the date will be used?  
  * Comment from Leah: I also was wondering if it would help them if we clarified how the date is used by VSRs. I actually think Shannon might be the best resource to answer this question. I'm imagining some helper language that helps them understand how it will be used, that conveys reviewers cast a very wide net (Shannon said they usually just request the whole file regardless of the date), but that the date can help them figure out where to start looking. But maybe that's revealing too much sausage-making?

6. ### Decide how to handle the list-n-loop continuation question

* Because the 0781 portion of the form uses a button instead of a question, we should consider how to treat “Do you have another condition to add?”  
* For now, we’ll stay with the question because it’s consistent with design guidelines.  
* Will look into this  with larger Disabilities design team in the future

## Related links
- [Synthesis Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1750211051134/251eaeb0b85999baff87a32f57458bb38ef12a08?sender=u4d4e38d44ebf2ff814f27828)
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-06%20New%20or%20Increase%20at%20Condition%20Level/Research%20Plan%20-%202025-06%20New%20or%20Increase%20at%20Condition%20Level.md)
- [Research notes & recordings](https://dvagov.sharepoint.com/:f:/s/vaabdvro/EjQYUkn11tpImChEXdN4ZucBrfefe_mu1h78BRkZXJGx2Q?e=HgX2SU)
