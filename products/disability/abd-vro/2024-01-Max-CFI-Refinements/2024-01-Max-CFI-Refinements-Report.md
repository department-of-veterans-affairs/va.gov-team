
Max CFI Refinements Research Findings

**Office of the CTO - Digital Experience (OCTO-DE), Benefits Delivery, Employee Experience Team**

Date: 02/21/2024

Researchers: Christine Rose Steiffer christine.steiffer@agile6.com, Kim Ladin kimladin@navapbc.com, Carolyn Dew carolyn@navapbc.com, Andrea Murchie andreamurchie@navapbc.com 

## Background
The VA receives many claims for increase (CFIs) for conditions where a Veteran is already at the maximum rating for that condition. In most cases, the condition will be “confirmed and continued” (denied) by a claims processor. We’d like to reduce the amount of time claims processors spend on these contentions by reducing the number of CFIs that Veterans file in this situation. Our initial work has focused on Tinnitus because it represents by far the largest category of CFIs where the Veteran is already at the maximum disability rating (over 20,000 such claims in FY2022). Tinnitus is also a good test case because it is virtually never granted over 10%.

We focused on the Rated Disabilities page within the online 526EZ application flow, adding language to inform Veterans when they’re already at the highest rating for Tinnitus. A first round of concept testing with 9 Veterans showed promise for the idea. The team then launched a live pilot on VA.gov, in which 50% of target users saw the added language in the 526 application, while 50% did not. Based on the results so far, the added language is dissuading about 20% of Veterans from filing a CFI compared to the group that didn’t see the new language.

Having seen some success in real cases, we turned our attention to improving on the initial solution. We aimed to provide Veterans with better information about what a maximum rating means and how it might affect their claim. The prototypes we tested in this round focused on what information to provide and how best to provide it within the context of the online 526EZ. This report documents our overall learnings.

### Concepts tested
We tested two concepts during this research that offered additional explanations around the concept of maximum disability ratings. The first concept [Yellow prototype](https://codepen.io/team/a6it/live/rNRMePN) highlighted those explanations within three accordion components at the bottom of the Rated Disabilities page. This allowed participants to click on the question they were interested in and skip anything they weren’t. This also allowed them to remain on the same page while reading the content. 

| Scenario Yellow | Scenario Purple |
| --- | --- |
| ![Figure 1 - Yellow prototype](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2024-01-Max-CFI-Refinements/Images/Figure%201%20-%20Yellow%20Prototype.png) | ![Figure 2 - Purple prototype](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2024-01-Max-CFI-Refinements/Images/Figure%202%20-%20Purple%20Prototype.png ) |

| Purple Education Page |
| --- |
| ![Purple Education Page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2024-01-Max-CFI-Refinements/Images/Figure%203%20-%20Purple%20Prototype%20Education%20Page.png) |  

The other concept we tested [Purple prototype](https://codepen.io/team/a6it/live/oNVzOBa) provided a link for more information in the same section at the bottom of the 526EZ flow. This link opened in a new tab and offered some additional, contextual information as well as more generic resources for support at the bottom of the page. This page offered more content, but also forced the participants to navigate back to the previous tab to keep moving forward with the form. 

### Project context

This work supports [OCTO Priority 7](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md): Fast-track disability claims, starting with PACT Act claims, and it fits into the [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) in the Living Civilian Life phase. It’s related to the Moment That Matters called “Managing primary care and chronic health issues.”

#### Benefits to Veterans: 

- Avoid unnecessary administrative burden for claims that would only get denied. Other claims can be processed more quickly by reducing the number of CFIs already at the maximum. 
- Help Veterans understand additional methods for getting benefits.

## Research Goals

### Project Goals:

  **Goal 1:** Assess usability of the refined design, especially for people who use assistive technology
  
  **Goal 2:** Determine which of two different designs is more effective for presenting education content around maximum standard ratings. 

  **Goal 3:** Assess how well the explanatory content works for Veterans.

### OCTO Goals:

  **Goal 1:** Provide accurate and timely information to Veterans.

  **Goal 2:** Empower Veterans to make informed decisions over their disability claims.

## Methodology

- Five completed remote 1:1 interviews with Veterans conducted over Zoom. One of those sessions was with an Assistive Technology (AT) participant. We had an additional session begin with an AT participant, but they asked to leave the test shortly after it began. We are not counting that participant as a complete.
  - Despite many attempts at rescheduling and recruiting new participants, we did not reach our recruiting goal of six total participants, with three being AT participants.

- Accessible HTML prototypes with Codepen allowed us to test with AT users.

- Two prototypes were tested
  - The Yellow prototype featured additional explanatory text for maximum disability ratings behind three accordion boxes at the bottom of the page.

   - The Purple prototype featured a link at the bottom of the page that led participants to a new tab with additional explanatory text for maximum disability ratings.

  - For both prototypes, we used the same task-based scenario

  - We swapped the order of the prototypes in each session

## Key Findings

1. Veterans focused on the possibility of getting an extra-schedular rating and did not always understand how unlikely their chances were. Both prototypes seemed to encourage a majority of veterans to apply for a CFI.

2. Organizing the educational content in multiple accordions instead of a single clickable link significantly improved content discoverability and usability for participants.

3. Participants seemed to have an aversion to long-form text when interacting with the educational content. They focused more on headers and would often skip details in the full text.

4. When participants realized one condition was at the max rating, some would submit a CFI for other conditions with the hope of receiving a higher rating.



## Detailed Findings

### Finding 1: Veterans focused on the possibility of getting an extra-schedular rating and did not always understand how unlikely their chances were. Both prototypes seemed to encourage a majority of veterans to apply for a CFI.

While we hoped some parts of either intervention would discourage Veterans from applying for an extra-schedular rating, it appeared that the educational content in both prototypes actually made them feel hopeful that they might be the exception to the rule. 

With the purple prototype, we saw many participants skim or not read the long-form content provided on a separate page. For the yellow prototype, we noticed that the final question in the accordions had an effect of encouraging participants to file when they previously were not considering it. The question from that accordion read as follows: “How do I apply for a rating that’s higher than the maximum standard rating?” The phrasing of this question seemed to plant the idea in the participant’s mind that they **should** apply because they **can** apply. 

**Before reading the intervention**

_“Basically the VA is saying don’t put in for Tinnitus because I’m not going to get anymore for that.” (P5)_

**After reading the intervention**

_“Sounds like if I want a higher rating for Tinnintus I’m going to have to submit more information based off that third little box… I would select migraines and tinnitus if I feel that I should get more for that.” (P5)_

While the purple prototype dissuaded more participants from filing in comparison to the yellow prototype, there were still more participants who would file after reading the educational intervention than would refrain from filing. 

**Effectiveness of each prototype in dissuading Veteran from filing**
|  | Yellow Prototype | Purple Prototype |
| ----------- |  ----------- |  ----------- |
| Dissuasion **before** explanation
How many participants were dissuaded from filing before they read the explanatory text.| 40% | 60% | 
| Dissuasion **after** explanation
How many participants were dissuaded from filing after they read the explanatory text. | 0% | 40% |

Just as in our previous round of testing, we noticed a spectrum of persuadability existed with some Veterans on the side of always going to file, some would never file, and a limited number of the persuadable middle participants in between. This reinforces the idea that there is a limited number of persuadable middle participants to work with when it comes to influencing behavior around this benefit, limiting the potential scope of our impact.

**Always File**

_“You always file. You never quit, that’s all. If you don’t get it, try something else. There’s a million things you could try.” (P4)_

_“[Chances] don’t seem good, but P1 never gives up!” (P1)_ 

**Persuadable Middle**

_“It’s rare that you get that… but something to shoot for.” (P3)_

**Never File**

_“I would not click on Tinnitus because it says that I’m at the maximum rating for this thing.” (P5)_

While some expressed hope of getting more benefits after reading the educational text, others felt pessimistic despite their determined attitude to file at any cost. We heard difficult stories about Veterans struggling for years to get the benefits they were owed, and that past history with the VA seemed to have a big impact on their current expectations of success.

**Disheartened by the process…**

_“They’ve already decided that [tinnitus] is rated at 10%... They don’t care ... These raters don’t give a damn about you; they’re only interested in saving the government money... They give you a little bit and then pray that sooner or later you’re going to quit and stop bothering them” (P9)_

_“‘You’re already at the maximum’... give me a break... The only disability that is maxed out is Tinnitus which drives me crazy…” (P4)_

**…But still plan to submit**

_“They’re going to make you fight tooth and nail to get it… [but in the end], you request it and see what happens.” (P9)_

Overall, the content related to extra-schedular ratings seemed to make Veterans believe that their chances of approval were higher than what they actually are. By leading our educational efforts with a focus on the benefits they are least likely to receive, we are setting up Veterans for disappointment even if the content itself attempts to discourage them from applying and getting denied.

#### Recommendations
- Educational content seems to provide a certain amount of hope for getting more benefits. With that in mind, we should pivot our direction on the type of educational content we provide so that if Veterans are encouraged to continue pursuing more benefits, they will do so using avenues that are more likely to be successful, such as from:
  - secondary conditions
  - special monthly compensation
  - individual unemployability

### Finding 2: Organizing the educational content in multiple accordions instead of a single clickable link significantly improved content discoverability and usability for participants.

Participants found the accordions intuitive to use and would start by reading each headline, then clicking either the gray box or the “+” to read more information. Participants preferred the accordions as they were centrally located on the screen and didn’t open a new window. This design also proved to be more accessible for our AT participant. 

When the clickable link opened a new tab, some participants struggled to return to the application flow. To return to the main application, some were trying to use the “back button” or talked about how they would use the “back button” if it were possible. One participant did successfully navigate back to the form using the link in the breadcrumbs, but that left the original form page still open in another tab.

**Centrally located**

(AT participant) _“I really like this plus and minus drop-down… with the screen magnified, you can’t go away much from your central vision… It stays concentrated… Going to another link - that means you need to go up, down, and all around.” (P4)_

(non-AT participant) _“[I like the yellow more] because it’s right here... I don’t have to click links... If it’s right here, I click it, and then I keep moving.” (P6)_

**Using the “back button”**

_"If it’s possible, I would click the back button” (P9)_

#### Recommendations
- The educational content should be presented using an accordion component. This format  breaks up long-form text into smaller and more digestible chunks of text. Accordions are also more accessible for both assistive-tech participants and non-assistive-tech participants, keeping the key information centrally located on the screen.

### Finding 3: Participants seemed to have an aversion to long-form text when interacting with the educational content. Participants focused more on headers and would often skip details in the full text.

When interacting with the educational content, most participants read all of the headings but did not always read all of the supporting content on the page. As a result, some participants did not fully grasp the idea that if you have a maximum rating for Tinnitus, you are not likely to receive an increase in benefits. Instead, participants focused on the idea that you can still submit a CFI. We think this idea was reinforced by the last heading giving instructions on how to apply.

While we are not including feedback from our last interview in this research with an AT user, it is worth noting that this session was terminated right after the participant opened the link to the educational content (purple prototype) and saw the long-form text.

**Doesn’t want to read long-form text**

_“There is a link here, so I should probably read up, but I’m not a fan of reading” (P4)_

**Content encouraging to apply**

_“Reading ‘you’re at the maximum rating’ would discourage me from reapplying, then clicking on the boxes (accordion) would make me say that I can still apply for it if I submitted more evidence.” (P10)_

**Misinterpreting content**

_“For me, this confirms I should apply” (P5)_

#### Recommendations
- When possible, educational content should be presented in small, digestible bodies of text. We should be careful with headings that might encourage applying, and recency bias should be considered when crafting the last question on the page so as to help direct the user in how best to proceed.

### Finding 4: When participants realized one condition was at the max rating, some would submit a CFI for other conditions with the hope of receiving a higher rating.

Participants were consistently disheartened by the fact that 10% was the highest rating they could receive for Tinnitus. Many participants felt strongly that if their condition had gotten worse, even when at the maximum rating, they should receive an increase in benefits regardless. Some participants felt this so strongly that it led them to submit a CFI for Tinnitus, even after learning that their chance of receiving an increase was low. 

**Feels they deserve an increase**

_“If I felt strongly that if I had documentation that my migraines and tinnitus had gotten worse... I would go ahead and continue” (P5)_

_“I would select migraines and tinnitus if I feel that I should get more for that” (P10)_

**It’s worth trying**

_“If you got it and you’re entitled to it, go for it” (P9)_

_“It’s rare that you get [an increase]... but it’s something to shoot for... I can take a chance on that rare case, or I can take a chance on staying at 100%...” (P6)_

While these participants did acknowledge that they were at the maximum rating for tinnitus, some thought they still might be eligible for an increase if their tinnitus caused their other conditions to worsen. As a result some participants applied for an increase in other conditions, instead of tinnitus. 

**One condition affects other conditions** 

_“I think 10% seems kind of low. If you’ve got ringing in your ears all the time, and you can’t go to sleep, which probably causes migraines, and probably other related stuff…” (P10)_

**Applies for an increase in other conditions**

_"I would apply for everything and then make an appointment with the VSO." (P6)_

_"Basically, after reading this, it would discourage me from applying for tinnitus, but I still might apply for more for migraines... because it says you’re at the max... you’re not going to get any more [for tinnitus]." (P10)_

#### Recommendation

Further research with Veterans could be helpful to explore how often being at the max for one condition may lead them to apply for a CFI on other conditions as a result. This will help us understand Veteran behavior when faced with trying to get benefits for worsening conditions.

## Recommendations

**Focus content on other avenues to receive benefits.**

Educational content seems to provide a certain amount of hope for getting more benefits. With that in mind, we should pivot our direction on the type of educational content we provide so that if Veterans are encouraged to continue pursuing more benefits, they will do so using avenues that are more likely to be successful such as:
- secondary conditions
- special monthly compensation
- individual unemployability

**The educational content should be presented using an accordion component.** 

This format breaks up long-form text into smaller and more digestible chunks of text. Accordions are also more accessible for both assistive-tech participants and non-assistive-tech participants, keeping the key information centrally located on the screen.

**Make content more scannable and be thoughtful of final impressions.** 

When possible, educational content should be presented in small, digestible bodies of text. We should be careful with headings that might encourage applying, and recency bias should be considered when crafting the last question on the page so as to help direct the user in how best to proceed.

**Explore what happens when Veterans understand their alternate options for benefits.**

Further research with Veterans could be helpful to explore how often being at the max for one condition may lead them to apply for a CFI on other conditions as a result. This will help us understand Veteran behavior when faced with trying to get benefits for worsening conditions.

## Next Steps

Based on our findings, we will conduct additional research with VSRs/RVSRs to understand more about secondary conditions, auxiliary benefits, and individual unemployability. We’ll work with the Content team to create better educational information, and then test the content again with Veterans. 

## Appendix

[Research plan]()

[Conversation guide]() 

[Interview transcripts]() 

### Tools used for Synthesis

[Synthesis]()

[Research Repository]()

### Pages and applications used

[Codepen Prototype - Yellow]()

[Codepen Prototype - Purple]()

### Secondary research

[Initial Max CFI Research Report]()

[Secondary Max CFI Explorations Report]()

### Who we talked to

#### Recruitment criteria

We talked to 6 participants.

**Audience segment:**

- Veterans: 6
- Caregivers: 0
- Family members of a Veteran: 0

**Gender:**

- Male: 5
- Female: 1

**LGBTQ+:**

- Transgender: _unknown_
- Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: _unknown_
- Gay, lesbian, or bisexual: _unknown_

**Devices used during study:**

- Desktop: 4
- Tablet: 0
- Smart phone: 1
- Assistive Technology: 1

**Age:**
- 25-34: 0
- 35-44: 0
- 45-54: 1
- 55-64: 3
- 65+: 1
- Unknown: 1

**Education:**
- High school degree or equivalent: 1
- Some college (no degree): 0
- Associate's degree, trade certificate or vocational training: 1
- Bachelor's degree: 1
- Master's degree: 3
- Doctorate degree: 0
- Unknown: 0

**Geographic location:**
- Urban: unknown
- Rural: unknown
- Unknown: unknown

**Race:**
- White: 4
- Black: 1
- Hispanic: 0
- Biracial: 0
- Asian: 0
- Native: 1

**Disability and Assistive Technology (AT):**
- Cognitive: 1
- AT beginner: 0
- AT advanced user: 2
- Desktop screen reader: 1
- Mobile screen reader: 0
- Magnification/Zoom: 1
- Speech Input Technology like Siri/Dragon Naturally Speaking: 0
- Hearing aids: 0
- Sighted keyboard: 0
- Captions: 0

**Underserved groups we haven’t talked to**

This research does not include the perspectives of the following marginalized Veteran groups: 
We did not recruit for rural participants, those without a college degree, those with other than honorable discharges, of immigrant origin, expats or for members of the LGBTQIA+ community. In the future, we will attempt to run an AT only study to try and find more success recruiting AT users.

| Figure 4 - VA Recruitment Checker |
| --- |
| ![Figure 4 - VA Recruitment Checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2024-01-Max-CFI-Refinements/Images/Recruitment%20Checker.png) | 

