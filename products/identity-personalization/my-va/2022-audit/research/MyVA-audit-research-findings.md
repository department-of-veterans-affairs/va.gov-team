# My VA 2023 Audit Usability Testing - Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Authenticated Experience, My VA**

Last updated: 1/23/2023

[Angela Agosto - email](angela.agosto@adhocteam.us)

[Research readout](link TK)

<br>

**Jump to:**

[Hypotheses and conclusions](#hypotheses-and-conclusions)

[Key findings](#key-findings)

[Recommendations](#recommendations)

[Who we talked to](#who-we-talked-to)

[Further research needed](#further-research-needed)

<br>

## Research Goals
Since Veterans can apply for and manage their benefits any time after getting out of the military, this work impacts the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from Starting Up and beyond.

Our goals for this research were:

* Determine if the updated information architecture of My VA still aligns with Veterans' mental model.
* Determine if showing all sections all the time on My VA has made the page more, less, or equally usable compared to its current state.


## Research Questions
* Are Veterans able to find their top tasks on My VA and act on them if applicable? 
* Is there any important information about top tasks or any categories missing on My VA?
* Is the new education section in a good place on the page for Veterans who are interested in those benefits? What about Veterans who are not interested?
* Is it clear what "saved applications" are and are they in a good place at the bottom of My VA?
* For users who do not have claims, health care, debt, payments, education, or saved applications, how do they feel about seeing those sections presented on My VA?
* Do users know how to find out more about benefits they are not currently enrolled in?
* Do empty sections get in the way of Veterans trying to find out information about their current benefits or bring attention to benefits that Veterans may be interested in?

## Methodology 

We conducted remote moderated usability testing on Zoom using real Veteran data behind a feature flag in production. We used this method because:

* We wanted to recruit an audience who was using a range of benefits and see their real data in testing so we could get accurate feedback that is specific to their use cases and does not require any hypothetical scenarios.
* We were able to test with assistive technology users in code. This was important to do early on in usability testing rather than later in UAT because we did not want to make any significant changes coming out of UAT and wanted to know if there are any accessibility issues with this pattern sooner than later.
* We didn't anticipate a lot of changes to the implementation or anything that would be very time-consuming to alter based on usability testing.
* We had the research method conversation as a team early enough that the timeline allowed for coding and testing in production.


## Hypotheses and Conclusions

1. We expect that in the new design Veterans will still be able to find what they're looking for upon login and act on it as needed.
   * **Definitely true.** We started the research session by asking what benefits each Veteran had throigh VA and what online tools they use to manage them. All Veterans were able to find information on My VA that was relevant to the benefits they had and perform all actions thye would normally do with other online tools like My HealtheVet, eBenefits, and the mobile app.
  
2. We expect that showing all sections all the time to LOA3 users will not be distracting and will help highlight benefits that Veterans may be interested in if they are not currently enrolled.
   * **Definitely true.** When questioned about empty sections, no one said that these sections were distracting to them or negatively impacted the experience at all. Several participants said that it was nice to see those empty sections on My VA to be reminded that those benefits might be of interest to them.
   
3. We expect that most important top tasks will be present and have all important details on My VA, possibly with the exception of military records.
    * **Definitely true.** We heard 1 Veteran say they would like to see a link to important documents and 1 Veteran say they would like to see contact information for VSOs. Other than these 2 participants, we did not hear Veterans say that any important tasks or information was missing from My VA. 
  
4. We hypothesize that based on analytics we have presented the sections on My VA in such a way that the most popular actions and links will be closest to the top.
    * **Maybe true.** We heard 4 out of 13 Veterans say that they would like the ability to reorganize My VA so that their top categories were listed first and sections that they would be least likely to use would be at the bottom, or they would like to be able to collapse empty sections. It's worth noting that this feedback was only elicited by asking "Is there anything you would change about this page if you could?" No specific questions around the order of the sections were asked.
    

## Key Findings

1. **All participants had positive reactions to seeing My VA immediately upon login.**

2. **My VA encompasses all top tasks for Veterans.** 

3. **Veterans generally don't mind seeing empty sections on My VA and some find them helpful to have on the page.**

4. **The "Saved Applications" section is confusing to Veterans.**

5. **The "Education and Training" section is positioned well on the page and important to have present on My VA, but some of the terminology in the links is unfamiliar to Veterans, and for Veterans who have education benefits, they would like to see dynamic content here about their remaining benefits.**

6. **Accessibility: My VA is highly accessible to disabled Veterans using assistive technology, but the smallest font is still a little too small for some Veterans.**


## Details of Findings 

**Finding 1**

**All participants had positive reactions to seeing My VA immediately upon login.** Many seemed that they had not logged into VA.gov since the [recent redirect](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-redirect) and they preferred seeing My VA to the homepage because it was more personalized and showed them "their stuff." 

> _"I have not seen this page but I like it. It's a summary of all my various systems that they have. My health benefits, next appointment...I have not seen this but I love it." - P5_

> _"This is nice. My disability rating is up here. I can log in really quick and see everything. ...Now that I've seen this I actually prefer this over eBenefits." - P2_


**Finding 2**

**My VA encompasses all top tasks for Veterans.** We started each session by asking Veterans about their VA benefits and how they like to manage them online and/or manually. Once logged in, 100% of Veterans were able to find information and/or actions to manage the benefits that they mentioned they manage online. 

When asked if there was anything Veterans were expecting to see on My VA that they did not, 11 out of 13 participants said no. 1 Veteran said they would like to see a section for documents and 1 Veteran said they would like to see contact information or communication for VSOs (Veteran Service Organizations).

Considering that the overwhelming amount of participants did not feel anything was missing from My VA, it's safe to say that all **top tasks** are included, but there may be some nice-to-have additions to consider, like VA documents.

> _"No, it seems like it has the information that I'd be interested in." - P6_

> _"No, I think it's pretty comprehensive." - P9_


**Finding 3**

**Veterans generally don't mind seeing empty sections on My VA and some find them helpful to have on the page.** Some Veterans (4 out of 13) expressed wanting to either reorder the sections or collapse empty sections to suit their needs but the majority did not mind the empty sections or the ordering as it currently is on My VA. Some Veterans even said that they appreciate seeing empty sections to remember that those benefits are available to them or for reassurance of the current state, like having no debt to VA.

_Example: If a user doesn't have any claims or appeals to show, they'll still see the section with "nothing to show" text and a couple secondary links._

![Screenshot 2023-02-03 at 4 31 57 PM](https://user-images.githubusercontent.com/97965610/216714689-ebff5f6a-67f2-47e1-927e-3d5247e42e97.png)

_Image of the Claims and appeals section for a user who does not have any to show, so they have text in this section that says "You have no claims or appeals to show" and links to "Learn how to file and claim" and "Manage all claims and appeals."_

> _"I don't mind this at all because I can just skip right past it because I know it doesn't apply to me." - P7_

> _"I like it because I have in the past had a debt so I definitely don't mind it. I like to see that I don't have any debts or copays to show." ... "I like it being there personally because I like knowing that I don't owe the VA anything." ... "I've never dismissed the idea of going back to school and I like that being there [The education and training section] as a reminder." - P5_

> _"It'd be nice to have - and again this would just be nice - if you could turn it into modules where you could click and drag the sections so it's more customizable to your experience." - P2_

**Finding 4**

**The "Saved Applications" section is confusing to Veterans.** 11 out of 13 participants thought that both submitted and in-progress applications would appear in this section. There was also confusion around the term "applications" and several participants thought of a computer application rather than a benefit application initially.

![Screenshot 2023-02-03 at 4 33 56 PM](https://user-images.githubusercontent.com/97965610/216714961-6a32712d-da81-4300-9466-13f350fb595a.png)

_Image of the saved applications section, which has a header titled "Saved Applications", a "more info" dropdown that lists all VA benefits and links to their landing pages, and a card for any drafted applications where the user can access and continue their application._

> _"'Applications' is kind of misleading because when we think of applications, we think of 'apps', like Google Chrome is an app." - P6_

> _"That could be a little confusing. When I first looked at it, I thought about computer apps." - P9_

> _"I don't know if my submitted applications would be here. I guess I'd have to get used to the page because it's new to know if my pending applications would show up here." - P4_


**Finding 5**

**The "Education and Training" section is positioned well on the page and important to have present on My VA, but some of the terminology in the links is unfamiliar to Veterans, and for Veterans who have education benefits, they would like to see dynamic content here about their remaining benefits.**

![Screenshot 2023-02-03 at 4 34 52 PM](https://user-images.githubusercontent.com/97965610/216715109-2866021a-da96-4de9-9023-3042441b9925.png)

_Image of the Education and Training section, which has links for "Learn how to apply for VA education benefits", "Compare GI bill benefits by school", and "Check your GI Bill Statement of Benefits."

> _"I'm not familiar with the term [GI Bill Statement of Benefits]. Maybe it's where I could see what benefits I'm getting through the GI bill. I'd want to see what's getting paid to me and what's getting paid to the school, and I don't have any way of doing that." - P2_

> _"I think I still have some GI bill benefits. I would love for it to be here the same way, similar to what you guys are providing here [gestures to Benefits Payments]. This is very good information when I log into my landing page. I don't see why you wouldn't have it here. I've never heard that before though, GI Bill Statement of Benefits. I can guess what it is but I've never heard it before." - P12_


**Finding 6**

**Accessibility: My VA is highly accessible to disabled Veterans using assistive technology, but the smallest font is still a little too small for some Veterans.** The 1 screen reader user that we tested My VA with was able to navigate easily using headings and was able to dive into specific sections and access all links. They had very positive overall feedback about the page. 2 Veterans mentioned that the smallest text on the page was a bit too small and hard to read for users who are older or who have low vision.

> _"I like its simplicity. I understand why this page may be very basic, I don't know how pretty it is. When I use bells and whistles out in the commercial world, they attract people's eye so that's why a lot of pages are aggravating for me but I know why because with screen readers we like industrial stuff that doesn't have a lot of extra stuff. People coming here are probably coming here for a reason. It's not like they have to compete with other retailers so there's probably not a lot of wizz bang." ... "If people would just think about accessibility in the beginning, everything would be so much easier for them and for us. I like this page very much. I wish more web pages were like it." - P7_

> _"The headers are very readable for old tired eyes but it drops off pretty quickly from that to this [points at body text]. I can see it but I have to kind of zoom in and get my trifocals." -P9_

![Screenshot 2023-02-03 at 4 36 51 PM](https://user-images.githubusercontent.com/97965610/216715426-5afdf3bb-a06e-41b1-86fd-1d5214b50048.png)

_Example of difference between H2 text and body text which are significantly different sizes_


## Additional Insights

* When we asked if anything was missing from My VA, 2 participants mentioned wanting to see information online about mental health services, especially for PTSD. 1 of these participants noticed there were links in the footer of the page for this, and the other said they were not able to find any information about it online. 
  * This finding has been shared in the [DSVA Slack](https://dsva.slack.com/archives/C033ZS9E7EW/p1674588384107679) and there are efforts underway to surface mental health services in the main benefits navigation, as well as updating the link to take users to the modernized mental health services page.


## Recommendations

* Rethink the "Saved Applications" section to be more clear that only in-progress applications will show there, and more clear what "applications" are.
    * _Supporting evidence: See finding 4_
* Reconsider the link currently called "Check your GI Bill Statement of Benefits" in the "Education and Training" section, as the term is not familiar to Veterans and is an important link for Veterans using GI bill benefits.
    * _Supporting evidence: See finding 5_
    * At this time, we're not able to show dynamic content in this section for remaining education benefits due to data limitations. Based on the feedback we received in this study, Veterans who are using GI bill benefits would be interested in that feature and it should stay on our radar as a future feature if it becomes feasible.
* As of now, we would not recommend reordering the sections on My VA or allowing for additional customization like moveable modules or collapsible sections, since one of the main goals of this study was to simplify the code logic and come up with an ordering of sections that works best for the _most_ users. We didn't hear any Veterans say the order of sections was impeding on their ability to find information relevant to them. We may want to consider further customization of My VA in the future if we continue to hear similar feedback or see significant changes in analytics.


## Next Steps

We will make design updates according to the recommendations in this research summary, have our FE engineer implement the changes in production, and then test the updates in UAT using a feature flipper in production as we did for this usability study.


## Further research needed

After making changes to the Saved Applications and Education and Training sections, we recommend testing these updates in UAT to determine if there is still any confusion.

## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/research/MyVA-audit-research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/research/audit-conversation-guide.md)

[Observation notes](https://docs.google.com/spreadsheets/d/1ItavEGFODFAO6h5wbiPpllrlNFxHCLIN54j775gnB3o/edit#gid=0)


## Tools used for Synthesis

Google Sheets, Zoom transcription and recordings


## Pages and applications used

VA.gov/my-va/


## Who we talked to 

**Recruitment criteria**

We talked to **13 participants.**

Audience segment:
* Veterans: 13
* Caregivers: 1 
* Family members of a Veteran: 0  


Gender:
* Male: 7 
* Female: 6


LGBTQ+:
* Transgender: 0 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 1
* Gay, lesbian, or bisexual: 0/?


Devices used during study: 
* Desktop: 9 
* Tablet: 2 
* Smart phone: 2 
* Assistive Technology: 1


Age:
* 25-34: 3
* 35-44: 3
* 45-54: 1
* 55-64: 1
* 65+: 5
* Unknown: 0


Education:
* High school degree or equivalent: 0
* Some college (no degree): 0
* Associate's degree, trade certificate or vocational training: 6
* Bachelor's degree: 2
* Master's degree: 5
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: ?
* Rural: ?
* Unknown: 13 (Did not outline this criteria in research plan)


Race:
* White: 5
* Black: 2
* Hispanic: 2
* Biracial: 0
* Asian: 2
* Native: 2


Disability and Assistive Technology (AT):
* Cognitive: 5
* AT beginner: 0
* AT advanced user: 1
* Desktop screen reader: 1
* Mobile screen reader: 0
* Magnification/Zoom: 2
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: ?
* Sighted keyboard: 0
* Captions: ?


## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:
* No degree
* Expat
* Biracial
* Gay, lesbian, or bisexual
* Transgender
* Beginner AT users

![Screenshot 2023-01-25 at 12 34 13 PM](https://user-images.githubusercontent.com/97965610/214639060-b3dc5364-c1de-4062-b4c6-de0c8de86960.png)
