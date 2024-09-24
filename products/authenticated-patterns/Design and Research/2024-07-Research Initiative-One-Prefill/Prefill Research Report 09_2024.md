# Research findings for AEDP Prefill Study

Authenticated Experience Design Patterns

Last updated by @christinerosesteiffer Sept 23, 2024

Christine Rose Steiffer [christine.steiffer@agile6.com | christine.steiffer@va.gov]

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key Prefill pattern findings](#key-prefill-pattern-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)

## Research goals

The key goals of this study are to:

* Understand where and when users need the prefill alert to appear.
* Understand how users expect the prefilled data to display.
* Understand users' expectations around why certain data can be edited within their profile and other data cannot.
* Understand how users expect the edit process to work, look like, where they expect their edits to get saved, and if they want to be asked where to save their data.
 
## Research questions

Understand where and when users need the prefill alert to appear.
- Does the prefill alert in the unauthenticated experience entice them to sign in to complete the form?
- Where do they expect the prefill alert message to be located once they are authenticated?
- In what variation do they notice the prefill alert? Top of page? On the step pages?
- Does bolding the word ‘note’ make an impact on whether they will read the information?

Understand how users expect the prefilled data to display.
- Which version of the data display (address block vs gray card component) helps users to more quickly understand that it contains prefilled data?
- Do they notice the prefilled data where it is located on the page in either the address block or gray card component?

Understand users' expectations around why certain data can be edited within their profile and other data cannot.
- How do they feel about the ability to edit some data but not others?
- Is it clear how to edit data within the form? Is it clear how to edit data that is not editable on VA.gov?
- Does the user understand why some data is not editable?
- Does the explanation for why we limit edits to some user data increase user trust in VA?

Understand how users expect the edit process to work, look like, where they expect their edits to get saved, and if they want to be asked where to save their data.
- Where do they think the new information gets saved? (profile vs form)
- Would they ever want to choose where this information gets saved?
- Which type of prefilled data display do they prefer to see on the edit page? (in-field vs gray box)
- What content do users expect to see in the confirmation message after they have saved their data?


## Methodology

This was a moderated usability study conducted remotely over Zoom. We used a Codespace prototype for enhanced interactivity.

We presented scenarios testing the following variations:
- Location of the prefill alert on the page
- Location of the prefill alert within the form flow
- Bolding the word ‘Note’ or not
- Style of the component that housed the prefilled data
- Language describing why some data is uneditable on the site itself
- Edit process
- Location of ‘old’ data in the edit state
- Location updates saved 

## Hypotheses and conclusions

|Hypothesis|Conclusion|Explanation|
|:--|:--|:--|
|Bolding ‘note’ in the prefill alert messaging will help users to see a block of text quicker|Somewhat True|This was true except in cases where there were multiple blocks of text starting with the word ‘Note’.|
|Users will more easily notice the intro prefill alert when it’s at the top of the page. |Definitely True|Users preferred to see it at the top of the page.|
|We will learn that the user only needs the prefill alert on the Intro page|Definitely False|Users want to see the alert on the Intro page, but they also want to see it on the page with prefilled, editable information and the Edit screen as well|
|The users will prefer the address component over the gray box for the locked data|Likely False|There was a slight preference for the gray box over the address component, with one user specifically associating the color gray with ‘uneditable’ information.|
|Users understand why we limit in screen edits for some types of data and find the messaging around the reason to be sufficient|Definitely True|Most users understood why this information could not be edited online and appreciated the messaging around protecting their data|
|As long as the data is going back to their profile, they will not want to be asked if it is ok to update their profile|Likely False|Many participants expressed an interest in being able to choose where they want their changes to save.|
|Users will prefer to see in the field data instead of the locked gray box displaying their current data while they are editing. |Definitely True|8 out of 10 users preferred the inline text edit to the gray box.|
|Users want to be informed if their data is not updating to their profile.|Definitely True|Users cared a lot about being very clear on where their data and updates were saving|
|The confirmation alert will help users understand when their data has been updated. |Definitely True|Most participants read the alert text the first time and understood where their data would save.|

## Key Prefill pattern findings

1. Users have no concept of what ‘profile data’ is
2. Users want to see the prefill alert at the top of the Intro page, as well as on the page with editable prefilled data, and the page where they edit that data
3. Users want to see the word ‘Note’ bolded to draw their attention to important information
4. Users preferred to see the gray card over the address component
5. Users appreciated understanding why some of their data is uneditable on the site

## Update Prefill pattern findings

1. Users most often want to see their updates saved to their profile, but some wanted the chance to select whether their changes would save to just the form or to the profile as well
2. Users expect to go to another page to edit their data and come back into the form flow afterwards
3. Users expect to see their ‘old’ data within the form fields themselves on the edit page

## Additional findings

1. There is confusion between the autosave feature and the edit process. 
2. Users find calling the VA to be a pain and avoid it if  possible, sometimes opting to drive a long distance to see someone in person rather than trying to solve their problem over the phone
3. Sharing on mobile is hard
4. Signing in is difficult for users

## Details of findings

### Finding 1: Veterans don’t understand what is meant by ‘profile data’ and some conflate VA.gov data with their method of authentication (Login.gov, ID.me or MHV).

_Labels: `Pattern: Know when their information is prefilled`_ 

Veterans used a variety of words to describe where they thought their data was pulled from to display in the prototype. This includes words such as account, information, profile, records, permanent record, and in the cloud among others. 

Many of our participants expressed confusion around their data and it’s association, or lack thereof, with whichever authentication service they used to login to VA.gov (such as Login.gov, ID.me and MyHealtheVet). They thought that if they made changes to their VA.gov profile data, it would update their authentication platform data as well. One even thought that it would update any other platforms that were connected to their Login.gov account, such as SSA.gov.

> " I would think [my records are pulled] from login.gov like when you're you sign in 'cause login.gov is also SSA and… it's also your medical records." P13

> "[My prefilled data] comes from a blackhole somewhere" P3


### Finding 2: Users want to see the prefill alert at the top of the Intro page, as well as on the page with editable prefilled data, and the page where they edit that data

_Labels: `Pattern: Know when their information is prefilled`_

The general consensus was that Veterans want to see the alert on all three of the previously mentioned pages, but not any others within the form. They also preferred to see the alert at the top of the Intro page.

> "The more [alerts] the merrier." P3

> "[The page with locked data doesn’t need an alert because] it seems obvious that the info has been prefilled here." P5


### Finding 3: Users want to see the word ‘Note’ bolded to draw their attention to important information


_Labels: `Pattern: Know when their information is prefilled`_

Finding content

> "Quote" P[#]

> "Quote" P[#]


### Finding 4: Users preferred to see the gray card over the address component

_Labels: `Pattern: Know when their information is prefilled`_

The results are pretty split, with 4 Veterans voting directly for the gray box and 3 for the Address component. The other participant responses were inconclusive.

> "I like the gray box better - it stands out more." P10

> "[The address component] looks cleaner" P9


### Finding 5: Users appreciated understanding why some of their data is uneditable on the site


_Labels: `Pattern: Know when their information is prefilled`_

Many Veterans have experienced issues with identity theft, and with recent news of many Americans SSNs getting leaked, this issue was a hot topic during our sessions. While some Veterans did not see any added value of knowing this information, others did feel it was important and felt the messaging helped them gain deeper trust with the VA.

> "I appreciate [this messaging] in today’s world of data breaches." P2


## Update Prefill Findings

### Finding 1: Users most often want to see their updates saved to their profile, but some wanted the chance to select whether their changes would save to just the form or to the profile as well


_Labels: `Pattern: Update their prefilled information`_

P2
they hope that updates in purple task would update their profile as well 
P5
Cannot imagine a scenario where they would save to a form but not to their profile
P6
Wants to see a version history of changes to personal information
Understood that the changes would only save to the form in Purple, but still expected the update to ‘dump into the system’ and update the profile as well
P8
Understand in purple task that updates only happen in the form
Wants the ability to choose where to save, but also thinks they would normally save to both places
Missed that the updates in Yellow task made to profile - only confirm after further probing when they read the confirmation message
P9
understands that purple updates only go to the form 
P10
“I feel conflicted [about not being able to choose where to save updates]”
they can imagine a time where they may want to only update their form with this information.

> "Quote" P[#]

> "Quote" P[#]

### Finding 2: Users expect to go to another page to edit their data and come back into the form flow afterwards


_Labels: `Pattern: Update their prefilled information`_

P#



> "Quote" P[#]

> "Quote" P[#]


### Finding 3: Users expect to see their ‘old’ data within the form fields themselves on the edit page

_Labels: `Pattern: Update their prefilled information`_

P#



> "Quote" P[#]

> "Quote" P[#]

## Additional insights

### Finding 1: There is confusion between the autosave feature and the edit process.

_Labels: `test`_ 

P#



> "Quote" P[#]

> "Quote" P[#]

“I know the save has been updated with this application (based on reading the autosave alert) but it doesn’t say they’ve updated my VA with this info” (P9)


### Finding 2: Users find calling the VA to be a pain and avoid it if  possible, sometimes opting to drive a long distance to see someone in person rather than trying to solve their problem over the phone

_Labels: `test`_ 

P#



> "Quote" P[#]

> "Quote" P[#]

### Finding 3: Sharing on mobile is hard


_Labels: `test`_ 

P#



> "Quote" P[#]

> "Quote" P[#]

### Finding 4: Signing in is difficult for users


_Labels: `test`_

P#



> "Quote" P[#]

> "Quote" P[#]


## Recommendations

1. Create guidance advising pattern users to include the alert at the top of their first form page, as well as including it on pages with relevant editable prefilled information. The alert should also be found on the page that allows users to edit prefilled information, but NOT on pages where data is not prefilled or where prefilled data cannot be edited.
2. One general comment that a participant made was that they expected to see the data that is editable in a different style component from the data that is locked. We should explore this idea in our next research study to see if we can get any further conclusive results.
3. We should work with CAIA to make the language around where prefill data comes from and is saved very clear and understandable, then test those variations in our next round of research.
4. Work with CAIA to confirm our instructions are correct, and include content recommendations the focus on the ‘why’ of not allowing updates directly on the site.
5. Test inline editing with AT users during our next study to ensure this pattern is accessible
6. Include a task where users can choose where their data saves in our next round of testing

## Next steps

- [ ] Item – [#ticket]()

## Further research needed


## Appendix

- [Research plan]()
- [Conversation guide]()
- [Transcripts]()

## Tools used for synthesis


## Pages and applications used


## Secondary research

All of our research can be found [in this folder]().

## Who we talked to

**Recruitment criteria**

We talked to **10 participants.**

Gender:
* Male:
* Female:
* Unknown:

LGBTQ+:
* LGBTQ+ (Details unknown):
* Transgender: 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 
* Gay, lesbian, or bisexual: 
* Unknown: 10

Devices used during study:
* Desktop: 2
* Tablet: 0
* Smart phone: 8
* Assistive Technology: 0

Age:
* 25-34:
* 35-44:
* 45-54:
* 55-64:
* 65+: 0
* Unknown:

Education:
* High school degree or equivalent:
* Some college (no degree):
* Associate's degree, trade certificate or vocational training:
* Bachelor's degree: 0
* Master's degree:
* Doctorate degree:
* Unknown:

Geographic location:
* Urban:
* Rural:
* Unknown:

Race:
* White:
* Black:
* Hispanic:
* Biracial:
* Asian: 0
* Native:
* Unknown:

Disability and Assistive Technology (AT):
* Cognitive:
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0

## Underserved groups we haven’t talked to

We have completed the [VA Recruitment Checker for marginalized Veteran groups]()


![VA-recruitment-checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/07-2024-Research-equality-checker.png)
