# Component Checklist Feedback Report  
*Date: September 2025*  

## About
This report brings together feedback from **four Design System users (2 Designers and 2 Engineers)** who were asked about the **component checklist** and how they use it to make decisions on the component page. More feedback about the component page can be found on the [component page feedback report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/design/research/component-page-feedback.md). 

### Prototypes shared
  1. [Accordion/Compact option 1](./images/component-checklist-layout-option-1.png)
  3. [Static/Expanded option 2](./images/component-checklist-layout-option-2.png)
  4. [Compact list option 3](./images/component-checklist-option-3.png)

### Executive Summary  
User feedback shows that the **component checklist** is not a primary decision-making tool and some improvements can be made. 

Key takeaways include:  
- **Low usage overall**: Designers and Engineers rarely use the checklist day-to-day, but see value during audits (especially accessibility).  
- **Trust depends on accuracy**: Users question whether statuses are updated; adding “last updated” dates could build confidence.  
- **Status clarity is needed**: Current maturity and color states are confusing; users want clearer definitions and phase-based statuses.  
- **Accessibility and layout matter**: Red/green icons are not inclusive; users had mixed preferences for accordion vs. summary-at-top layouts.

---
## Feedback

### 1. Awareness and Use  
- **Checklist is not a primary tool.** Many users said they rarely consult it, unless doing audits or checking accessibility.
  
  > *“I don’t think I’ve ever really looked at the checklist stuff… almost never actually.”* – Engineer

  > *“Whether or not I use a component is at the very top: is it deployed, is it green? I’m good.”* – Designer
 
  > *“I don’t really check it unless I need to for accessibility or if someone asks me about maturity.”* – Designer  

- **Value for audits and external reviews.** Some noted that it can still be useful for accessibility or demonstrating robustness to outside stakeholders.
  
  > *“The accessibility section could be crucial for auditing and for external government entities to assess maturity.”* – Engineer  

   > *“If I had to show someone outside the team that the system is solid, the checklist could be a good way to prove it.”* – Designer  

---

### 2. Accuracy and Trust  
- **Completion status is questioned.** Users were unsure how closely the checklist is maintained or how often it is updated.

  > *“How closely is that tracked and how often is that updated? That can get lost in the abyss.”* – Engineer
  
  > *“If no one is maintaining it, then it doesn’t mean much.”* – Designer  

- **Perception of staleness reduces reliance.** If the information does not feel current, users may skip it in favor of maturity indicators.
   
  > *“If it feels as stale as it does, I don’t even care about completion status. I’ll just go look at maturity.”* – Engineer
  
  > *“I’d rather just see a simple status at the top. If it’s old data, the numbers don’t matter.”* – Designer  

- **Proposed fix: show last updated date.** Adding timestamps was suggested as a way to make the checklist more reliable.
  
  > *“Maybe we could add a date so people know the accuracy.”* – Designer
  
  > *“Even just showing when the checklist was last reviewed would help.”* – Engineer  

---

### 3. Status Indicators and Clarity  
- **Disconnect between top-level maturity and checklist detail.** Some noticed that a component could be marked “green” overall, while details showed incomplete items.
  
  > *“It says at the top everything is green, but then at the bottom mobile isn’t even here.”* – Designer
   
  > *“It feels inconsistent when the overall maturity doesn’t match what’s in the checklist.”* – Designer  

- **Unclear meaning of caution/orange states.** Users said it wasn’t obvious whether “orange” meant new, incomplete, or something else.
  
  > *“Orange could mean a lot of things — maybe it’s new, maybe it’s buggy. It’s not clear what it actually means.”* – Engineer
  
  > *“Caution doesn’t tell me enough — I need to know if it’s because research is missing, or development isn’t done.”* – Designer  

- **Interest in phase-based statuses.** Several suggested distinguishing between design complete, development in progress, or research pending.
  
  > *“There needs to be some sort of differentiator — is the design done, development in process, or neither?”* – Designer
  
  > *“Breaking maturity into stages would make it way clearer than just a color.”* – Engineer  

- **Accessibility considerations.** Red/green icons alone were seen as insufficient for users with color vision deficiencies.
   
  > *“My devs who are red-green color blind would not be able to tell the difference.”* – Designer
  
  > *“It would be better to have an icon or label instead of just a color.”* – Designer  

---

### 4. Layout Preferences  
- **Mixed reactions to accordions vs. flat lists.** Engineers leaned toward compact accordions, while some Designers preferred an overview at the top.
  
  > *“I’d probably say accordions… I don’t really care about the completion status.”* – Engineer
  
  > *“I’d prefer just a compact list at the top with a link down if I need details.”* – Designer
  
  > *“I don’t mind if it’s long, as long as the most important stuff is at the top.”* – Designer  

---

## Proposed Improvements  
1. Reevaluate the component checklist is solving and how it could align with the maturity levels. 
2. **Add “last updated” dates** to increase trust.  
3. **Clarify status meanings** (e.g., design complete, development in progress).  
4. **Improve accessibility** of status icons with text labels or alternative markers.  
5. **Prioritize warnings/in-progress first**, instead of listing all completed items.  
6. **Offer flexible layouts** (accordion for compactness; summary at top for scanning).  
