# Component Page Feedback Report  
*Date: September 2025*  

## Report Overview
This report synthesizes feedback from **four Design System users (Designers and Engineers)** who reviewed current component pages (example: [Button page](https://design.va.gov/components/button/)) and prototypes of the **component checklist**.  

The goal was to understand:
- What decisions users are trying to make when visiting a component page.  
- How well the current documentation supports those decisions.  
- How the component checklist (and maturity levels) are perceived and used.  

**Key themes include**: 
- Reliance on Storybook for engineers
- Reliance on search for designers
- Navigation complexity
- Content length
- Trust in maturity levels and checklists
- Accessibility of status indicators
- Lack of built-in feedback options
  
The report also provides **direct quotes** to highlight user voices, a **role comparison table** (Designers vs. Engineers), and **recommendations** for improvement.  

---

## 1. General Usage of Component Pages
- **Engineers default to Storybook rather than the doc site.** They see Storybook as the “one-stop shop” for examples, properties, and variations, while the documentation site feels secondary.  
  > *“Most of the time I just get right into the example, find the first Storybook link, and then I spend more time in Storybook than I do the actual doc site.”* – Engineer

- **Designers lean more on the documentation site.** They use it to guide developers, verify content patterns, and check accessibility, often skipping introductory sections to jump straight to usage.  
  > *“Usually if I’m coming in here, it’s for my developers honestly… I usually am skipping past all of this and going straight to usage.”* – Designer 

---

## 2. Navigation & Information Architecture
- **The navigation is seen as cluttered and overwhelming.** Designers reported that deprecated or “do not use” components make it hard to scan for what’s relevant.  
  > *“I find the navigation a little overwhelming, especially when there’s stuff in there we’re not supposed to use.”* – Designer  

- **Form components are hidden in ways that feel unintuitive.** Engineers pointed out that the collapsed “Form” grouping doesn’t match the way Storybook presents components, creating friction.  
  > *“In Storybook, forms are right there, easy to find. In the doc site it’s hidden away — I didn’t even know where to look.”* – Engineer
---

## 3. Content Prioritization & Layout
- **Design guidance should appear before code.** Designers felt strongly that content and usage rules should be surfaced first, with code samples further down.  
  > *“Content should be above the code use so that here’s all the design stuff first… then, oh hey devs, here’s your code.”* – Designer  

- **Pages are often too verbose and dense.** Some reported skimming or re-reading because of the amount of text.  
  > *“A lot of this is very verbose. I start glossing over and have to reread it… less is more.”* – Designer  

- **Code duplication adds to the bloat.** Engineers noted that including usage snippets in docs feels redundant when Storybook already provides them.  
  > *“Code usage feels like duplication because Storybook already covers that.”* – Engineer  

---

## 4. Accuracy, Currency, and Trust
- **Examples and screenshots are sometimes outdated.** This undermines confidence that the docs are current.  
  > *“A lot of the instances linked and shown are no longer relevant… or they’re old screenshots.”* – Designer 

- **Checklist completion is doubted.** Engineers worried the “x of y complete” indicators may not be maintained and therefore lose meaning.  
  > *“How closely is that tracked and how often is that updated? I feel like that can get lost in the abyss.”*  

- **Some classes and properties are undocumented.** This creates confusion, especially for new contributors.  
  > *“There are classes like `va-introtext` that aren’t documented anywhere. New people wouldn’t know what that is.”* – Engineer  

---

## 5. Component Checklist Feedback
- **The checklist is rarely consulted for decision-making.** Most users said they ignore it unless doing an audit or checking accessibility.  
  > *“I’ll be honest. Whether or not I use a component is at the very top: is it deployed, is it green? I’m good.”* – Designer  

- **Status indicators can be misleading.** Users were confused when maturity at the top said “green,” but checklist details showed gaps.  
  > *“What’s deceptive is it says at the top everything is green, but then at the bottom mobile isn’t even here.”* – Designer 

- **Icons are not accessible.** Red/green indicators without text alternatives fail for colorblind users.  
  > *“My devs who are red-green color blind would not be able to tell the difference.”* – Designer

- **Preferences for layout varied.** Some preferred compact accordions for less clutter, while others wanted a top-level summary with anchor links.  
  > *“For me I’d probably say accordions, because I don’t really care about the completion status.”* – Engineer :contentReference[oaicite:13]{index=13}  
  > *“I’d prefer just a compact list at the top with a link down if I need details.”* – Designer 

---

## 6. Maturity Levels and Checklist Alignment
- **Disconnect between maturity labels and checklist details.** A component might appear “green” overall but still have incomplete variants.  
  > *“It says green at the top, but then the checklist shows things missing. That’s confusing.”* – Designer  

- **Unclear criteria behind labels.** Users were unsure what “orange” or “caution” really meant in practice.  
  > *“Orange could mean a lot of things — maybe it’s new, maybe it’s buggy. It’s not clear what it actually means.”* – Engineer  

---

## 7. Designer Reliance on Search
- **Search is the main way designers find content.** Most skip the nav entirely and use search as their entry point.  
  > *“99% of the time when I’m looking for stuff, I just use search.”* – Designer 

- **But search results are unreliable.** Designers said it often fails to show relevant content, even when it’s clearly present on the page.  
  > *“Search doesn’t show relevant content even when it’s on the page.”* – Designer  

---

## 8. Feedback Gaps
- **Users want a clear way to provide feedback directly in the docs.** Right now, feedback usually happens in Slack, where it gets lost.  
  > *“Slack feedback gets lost. The page itself could ask for feedback.”* – Designer  

- **Lack of visibility discourages reporting.** Without a built-in channel, users aren’t sure if their feedback is seen, tracked, or acted upon.  

---

## 9. Additional Insights
- **Merging mobile and web adds complexity.** Having to present guidance for both platforms together makes pages longer and harder to parse.  
  > *“Pages are getting complicated now with mobile guidance, web guidance, and then a checklist for both.”* – Designer  

---

# Role Comparison: Designers vs. Engineers

| **Focus Area**        | **Designers**                                                                 | **Engineers**                                                                 |
|-----------------------|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **Primary Tool**      | Documentation site (usage guidance, accessibility, content)                   | Storybook (properties, variations, code examples)                             |
| **Navigation Method** | Heavy reliance on search due to cluttered navigation                          | Direct to Storybook links                                                     |
| **Content Needs**     | Usage first, content guidance prioritized before code                          | Properties and examples, less need for narrative guidance                     |
| **Checklist Use**     | Rarely used; more value in warnings/in-progress flags                         | Rarely used; may reference accessibility info during audits                   |
| **Status Indicators** | Want clarity on why maturity levels are assigned; need accessible indicators   | Look for maturity as shorthand, but trust accuracy less without dates         |
| **Frustrations**      | Outdated screenshots, inconsistent layouts, redundant content                  | Redundant code snippets in docs, unreliable property updates in Storybook     |
| **Feedback Channels** | Desire built-in feedback collection on component pages                         | Feedback usually happens in dev cycles or when bugs are encountered           |

---

# Recommendations

1. **Clarify Navigation**
   - Align doc site navigation with Storybook.
   - Default view: active components only; tuck deprecated/proposed under expandable menus.

2. **Streamline Content**
   - Lead with “Usage” and content guidance.
   - Collapse long/redundant sections (code, accessibility) for quicker scanning.

3. **Improve Trust & Accuracy**
   - Add “last updated” dates to checklists and maturity statuses.
   - Assign ownership for screenshot/example updates.

4. **Redesign Checklist**
   - Keep compact (accordion or summary-at-top with anchor).
   - Prioritize “warnings,” “in-progress,” and “caution” over “green/complete.”

5. **Clarify Maturity Levels**
   - Link top-level maturity directly to checklist items.  
   - Provide explanations for why a component is labeled green, orange, or red.  

6. **Support Web + Mobile Clarity**
   - Use clear tags/icons to distinguish “web,” “mobile app,” and “mobile web.”

7. **Enhance Search**
   - Improve search relevance (keyword and metadata driven).

8. **Add Feedback Mechanism**
   - Provide a simple, consistent way for users to leave feedback directly on component pages.  
   - Ensure feedback is tracked and visible to maintain trust and transparency.
