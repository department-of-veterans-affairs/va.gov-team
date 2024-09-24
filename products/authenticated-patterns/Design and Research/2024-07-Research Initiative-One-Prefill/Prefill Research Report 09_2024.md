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

1. Veterans don’t understand what is meant by ‘profile data’ and some conflate VA.gov data with their method of authentication (Login.gov, ID.me or MHV).
2. Veterans want to see the prefill alert at the top of the Intro page, on the prefill confirm page, and on the edit prefilled data page.
3. Bolding the word ‘Note’ at the beginning of an important text block draws more attention to the information.
4. There was a slight preference of the gray card style over the address component style, but the results are not conclusive.
5. Understanding why they can’t update certain information on the site helps Veterans to build trust with the VA. 


## Update Prefill pattern findings

1. While most people expected their updates to save to their profile, many could think of examples of when they might want to choose whether the update saves to the just form or to their profile as well.
2. While some people wanted the ability to edit on the same page, most people expected the ‘Edit’ button to take them to a new page.
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


### Finding 2: Veterans want to see the prefill alert at the top of the Intro page, on the prefill confirm page, and on the edit prefilled data page.

_Labels: `Pattern: Know when their information is prefilled`_

We asked Veterans about the prefill alert on every page we looked at together. The general consensus was that they want to see the alert on all three of the previously mentioned pages, but not any others within the form. This was because the intro page gives them an idea what to expect, the prefill confirm page shows them their prefilled information and allows them to edit, and then the edit screen provides that old data within the form fields - all places that made sense to Veterans to show the prefill alert.

They also preferred to see the alert at the top of the form intro page.

> "The more [alerts] the merrier." P3

> "[The page with locked data doesn’t need an alert because] it seems obvious that the info has been prefilled here." P5


### Finding 3: Bolding the word ‘Note’ at the beginning of an important text block draws more attention to the information.


_Labels: `Pattern: Know when their information is prefilled`_

Most Veterans felt that bold text made them pay more attention to the information that followed. Some used bold text and headers as they scanned the page to get an idea of what it was talking about before reading more in depth.

Caution should be taken in overusing this pattern, however, as there are sometimes instances of forms or pages where multiple text blocks start with the word ‘Note’ which compete for attention with each other.

> "I look down and do a quick glance over the bold titles." P2

> "[The alert icon] actually felt more eye-catching than the word ‘Note’ especially because there is another bolded ‘Note’ right above it. [It is unclear which] is the most significant part of it." P1


### Finding 4: There was a slight preference of the gray card style over the address component style, but the results are not conclusive.

_Labels: `Pattern: Know when their information is prefilled`_

We saw a wide range of reactions to the two style variations of showing the prefilled data. While most preferred the gray card, one participant didn’t notice it until it was pointed out to them. Others preferred the address component or expressed no clear opinion on the matter.

> "I like the gray box better - it stands out more." P10

> "[The address component] looks cleaner" P9


### Finding 5: Understanding why they can’t update certain information on the site helps Veterans to build trust with the VA. 


_Labels: `Pattern: Know when their information is prefilled`_

Many Veterans have experienced issues with identity theft, and with recent news of many Americans SSNs getting leaked, this issue was a hot topic during the research sessions. Some Veterans did not see any added value of knowing this information and felt that it should be inherent that the VA is protecting their data. However, more expressed that they felt it was important and felt the messaging helped them gain deeper trust with the VA.

One participant did express concern at the instruction to change your name or other personal information over the phone. They had worked in cyber security for decades and stated that it is much easier to socially engineer someone into allowing a data update over the phone than it is to hack into someone’s account to change it there. 

> "I appreciate [this messaging] in today’s world of data breaches." P2

> "It’s going to be more likely that Veterans are going to trust and use the site [after reading this message]." P9

## Update Prefill Findings

### Finding 1: While most people expected their updates to save to their profile, many could think of examples of when they might want to choose whether the update saves to the just form or to their profile as well.

_Labels: `Pattern: Update their prefilled information`_

A common example we heard Veterans discuss was that of snow birds (people who live in the north during the summer and vacation in the south during the winter) - they could imagine those folks might want to have a different address saved to specific forms rather than to their profile if, for instance, they needed prescriptions mailed to their vacation home address. For this reason, a majority of people said they would want the choice of where to save their updates.

There was still confusion about what these updates meant. While one participant clearly read and understood that their updates would only save to the form in one of the tasks, they then stated they assumed eventually their updates will “dump out” into their profile data. Another read the sign in alert and thought it meant that by signing in, their updates would automatically go to their profile and not just the form itself.

> "If I’m gunna take the time to update my information, I would like it to be updated in the whole system because… if I need to change my information, I need to change my information." P9

> “I would like for [the form and profile data updates] to coordinate [with] one another.” P8

### Finding 2: While some people wanted the ability to edit on the same page, most people expected the ‘Edit’ button to take them to a new page.

_Labels: `Pattern: Update their prefilled information`_

It was clear to most participants that editing their information would happen on a different page, but some mentioned wishing it could happen on the same page in order to cut down on page load times. Some mentioned concern that the system might give them an error if they didn’t have the proper number format (including dashes or periods), but were pleasantly surprised when the update went through. 

> "It would definitely take me to the edit page [to update my information]." P4

> "The more [pages] I have to click through, the more I’m worried that maybe I took a misstep somewhere." P1



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

### Finding 3: Sharing a prototype on mobile is hard.

_Labels: `test`_ 

We specifically recruited participants to join from a mobile device so that we could be mobile-first in our approach to testing this design pattern. The average time it took for participants to share the prototype on their mobile device was just under seven minutes. There were three participants that took longer than ten minutes to share the prototype from their phone, and for one participant we decided it would be easier if the moderator just shared their screen. 

> "I use DuckDuckGo [a browser which doesn’t like sharing things]. Let me try something else." P6


### Finding 4: The process of signing in is difficult and confusing.


_Labels: `test`_

We heard from a variety of people that they struggle with the sign in process. One mentioned selecting the wrong authentication service and having a lot of difficulties before realizing what they had done wrong. Others mentioned confusion between the authentication services and information connected to their REAL ID.

> "I have to tell you, this sign in to VA - it’s one of the things I really do hate." P10

> "It would be a lot simpler for me and everybody else if there was only one place to go to get a verified account. And with the REAL ID coming about next year and all this Login.gov and ID.me... I mean, why are there three of them?!" P5



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

- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-07-Research%20Initiative-One-Prefill/Prefill%20Research%20Plan%2008_19_2024.md)
-[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-07-Research%20Initiative-One-Prefill/Prefill%20Research%20Conversation%20Guide%2008_19_24.md)
-[Transcripts](https://dvagov.sharepoint.com/:f:/r/sites/TMFAuthenticatedExperienceDesignPatterns/Shared%20Documents/General/Research%20and%20Design/Research%20Artifacts/Prefill%20Research%20Study/Recordings%20and%20Transcripts?csf=1&web=1&e=mvYXf9)

## Tools used for synthesis

- [EnjoyHQ](https://app.enjoyhq.com/projects/2XaWM5J6Q/plan)
-[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1724781626434/81bcfbf107fa7ca5f229d3b8406d9da6bd3acab3?wid=0-1725474764608)

## Pages and applications used
- [Codespaces Prototype]()


## Secondary research

All of our research can be found [in this folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/authenticated-patterns/Design%20and%20Research/2024-07-Research%20Initiative-One-Prefill).

## Who we talked to

**Recruitment criteria**

We talked to **10 participants.**

Gender:
* Male: 7
* Female: 3
* Unknown: 0

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
* 25-34: 1
* 35-44: 1
* 45-54: 1
* 55-64: 1 
* 65+: 6  
* Unknown: 0

Education:
* High school degree or equivalent: 0
* Some college (no degree): 3  
* Associate's degree, trade certificate or vocational training: 1 
* Bachelor's degree: 2
* Master's degree: 4 
* Doctorate degree: 0
* Unknown: 0

Geographic location:
* Urban: 2 
* Rural: 8 
* Unknown: 0

Race:
* White: 9 
* Black: 1 
* Hispanic: 0
* Biracial: 0 
* Asian: 0
* Native: 0
* Unknown: 0

Disability and Assistive Technology (AT):
* Cognitive: 2
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

We have completed the [VA Recruitment Checker for Equality](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?gid=650805732#gid=650805732)

![VA-recruitment-checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design%20and%20Research/2024-09%20Research%20Initiative%202%20-%20Update%20Prefill/Images/VA%20Recruitment%20Checker%20for%20Equality.png)
