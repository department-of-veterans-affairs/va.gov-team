# Enhanced Military Information Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Profile: Military Information, Authenticated Experience Profile team**

Date: 03/08/2024

Pam Drouin, Researcher/Designer | [email](mailto:pamela.drouin@a1msolutions.com)

_If there’s a deck:_ [Research readout](link here)

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)

## Research Goals

Currently within a veteran’s authenticated Profile, veterans can read minimal information about their service details: namely, which branch(es) they served in and dates of service. Recently, VEO asked the VA.gov profile team to enhance the military history section of the profile in order to aid veterans applying for benefits (especially disability claims). As a result of this request, we're looking into the feasibility of adding duty status, military occupation specialties (MOS), and occupation start/end dates to Profile as an MVP, since these data elements have the best quality at the moment.

**Goal 1**: Gain a better understanding of veteran mental models regarding their service occupations in order to inform how we present military information data, depending on data completeness and quality.

**Goal 2**: Review data pulled from VADIR with veterans to get a sense of accuracy, completeness, and utility.

**Goal 3**: Gather feedback on our team’s proposed design mock-up for enhancing a veteran’s military information section with the data available to us currently (duty status, dates, and military occupation specialties).

The research applies at any stage from `Starting Up` through `Aging`.

## Research Questions

- How have veterans used their MOS data?
- How accurate and complete is the data pulled from VADIR (Veterans Affairs/Department of Defense Identity Repository)?
- How do veterans conceptualize their service history?
- How effective is this current design mock-up in displaying MOS data?

## Methodology 

We recruited across all 6 branches with a variety of ages and service lengths to get a broad picture of peoples’ histories, military data, and mental models.

This research study mixes the generative and evaluative methods of interviewing and concept testing in order to facilitate our goals.

**Background questions**: The session started with some generative questions around veterans’ service history (with a specific focus on their occupations) and for what reasons they use their military history. 

**Data walk-through**: The Profile team’s backend engineer ran database queries using each participant’s unique identifier in order to pull data from VADIR. We had participants walk through the data with us to gain insights into accuracy of the populated data values.

<details>

<summary>(Expand to learn more about VADIR)</summary>

The Veterans Affairs/Department of Defense Identity Repository (VADIR) database is an electronic repository of military personnel's military history,  provided to VA by the Department of Defense's Defense Manpower Data Center (DMDC) using the Defense Enrollment Eligibility Reporting System (DEERS). VA applications use the VDR database to retrieve profile data, as well as address, military history, and information on compensation and benefits, disabilities, and dependents.

</details>

**Mental model activity**: The next section was a short sorting exercise to learn around how veterans conceptualize their history.

**Mockup feedback**: Last there was an opportunity to get veteran feedback in order to evaluate the effectiveness of the proposed military information design.

## Hypotheses and Conclusions

- We will observe similarities and differences between branches, lengths of service, and rank. ***Maybe True:*** This is hard to say, we collected a large amount of data and feedback from veterans, but it is no where near representative of the population across branches.
- We will gain insight into veteran mental models around organizing information. ***Definitely True:*** We learned that most of the veterans we talked to tended to think about where they were vs what they were doing when asked about their military history.
- We will gather actionable feedback for making iterations on the design mock-up. ***Definitely True:*** We received a great amount of feedback about what is missing, what could be added, and how a veteran might go about correcting incomplete or inaccurate data.
- We may hear feedback that the military information section is too long or has too much content. ***Likely True:*** 2 veterans commented on this, though they were in the minority.

## Key Findings

*Research question: How have veterans used their MOS data?*

1. FINDING 1: Veterans use their records to acquire promotions while in service, use vocational training transition benefits, apply to jobs after separation, and gain medical/disability benefits. 

2. FINDING 2: MOS is helpful for correlating medical issues to service, but including location data is likely more helpful to veterans when providing context to health care providers and claims adjudicators.

*Research question: How accurate and complete is the data pulled from VADIR?*

3. FINDING 3: Regarding `service-episodes`, `branchOfServiceText` and `periodOfServiceTypeText` (active/reserves/etc.) were the most reliably accurate data values according to participants. `periodOfServiceBeginDate` and `periodOfServiceEndDate` were mostly accurate, but some were wrong by a few months or days. `characterOfDischargeText`  values were mostly accurate, expect for a few null values. `narrativeReasonForSeparationText` were mostly correct, except for 1 unavailable value and 2 incorrect values according to participants.

4. FINDING 4: Regarding `militaryOccupations`, `occupationTypeText` (duty/primary/secondary) wasn’t something most veterans found particularly useful. `dodOccupationText` was inconsistent – some veterans had partial data, others had none. For veterans that had data populated, they had different understandings of what those values meant. Only a handful of veterans said their service specific occupation code/text values were accurate. For most veterans effective dates were incorrect or they had no idea where the dates were coming from.

5. FINDING 5: Regarding `deployments` and `deploymentLocations`, dates and missing locations were the biggest issues that the 5/15 veterans saw in their deployment data. There appeared to be duplicate rows for deployments, dates that didn’t match up with participants’ recollections, and missing country data.

6. FINDING 6: Both available sets of data were accurate for for `academies`.

*Research question: How do veterans conceptualize their service history?*

7. FINDING 7: When doing a mapping activity to help understand how veterans conceptualizing their military history, 7/9 participants thought of their location first, rather than what they were doing (MOS).

*Research question: How effective is the current design mock-up in displaying MOS?*

8. FINDING 8: Veterans did find value in displaying `active duty` and `inactive reserves` in the Military Information profile section mockup.

9. FINDING 9: Veterans were mostly fine with `militaryOccupations` as the section heading, however P5 expected to see a personalized heading (AFSC instead of MOS). P9 thought that “Job Title” was generic enough to work for everyone.

10. FINDING 10: 2 veterans commented on the proof of veteran status card (without facilitator prompting), and both stated their affinity for the card.

11. FINDING 11: A few veterans had suggestions for additional information that might be included in user profiles: 1 suggested battlefield promotions (P13) and another suggested a link to a location finder for getting a veteran ID card in person.

12. FINDING 12: When asked what information is missing or could be useful to include in their Military Information profile section, veterans offered multiple suggestions, including awards, dates, rank, locations (duty station, deployments, training), and unit assignments.

13. FINDING 13: While 9/13 veterans noted missing information in the mockup, a few veterans expressed concern about the amount of information, which included repetitive or extraneous information.

14. FINDING 14: Only a small number of veterans noticed the additional information component, but most veterans had a clear idea of how they would go about correcting incorrect or incomplete data, should that be the case in their Military Information profile section. 

15. FINDING 15: 2 participants expressed a strong preference for the VA serving as a one-stop shop or clearinghouse for records.

## Details of Findings 

### *Research question: How have veterans used their MOS data?*

#### FINDING 1
Veterans use their records to acquire promotions while in service, use vocational training transition benefits, apply to jobs after separation, and gain medical/disability benefits. 

7 veterans relayed examples of **sharing their MOS for career progression while serving and after separation**. 

P5 on using MOS for career progression in and out of service:
>The only time I could think [of sharing MOS] would maybe be for promotion boards or applying to a school or the next job. And so a couple times like I went to a couple different survival schools or additional training types of things. And then I would have to pull my record history and then send those data and the Air Force calls them SURF, I don't know what it stands for, it's like S-U-R-F. It's an overall summary of where you've been based, what qualifications you have. (P5: Air Force)

P13 on using MOS for vocational readiness
>I also had to share my information when I did the VA chapter 31, the VR&E program. So I had to share my MOS then because with the VR&E, the [Vocational Readiness & Employment](https://www.benefits.va.gov/vocrehab/index.asp) program, if you are trying to do employment, they look and see what you did in the army, what your disabilities are and if you can still do that on the civilian side for jobs. (P13: Army)

#### FINDING 2
MOS is helpful for correlating medical issues to service, but including location data is likely more helpful to veterans when providing context to health care providers and claims adjudicators.

6 veterans talked about **sharing records for connecting their service to medical issues**, however, including location was key for providing adequate context for service connection.

>I had to share [MOS] prior to me transitioning out. Even when you look at doing my claims and everything, talking to the providers that was doing my appointment or my history or whatever, I had to do the same thing: explain to them what I did in the military, how it impacts me. Unfortunately, I deal with tinnitus, and if you go by the matrix that the VA use for tinnitus, it's usually based on the MOSs that deal with a lot of noise like your combat MOSs and [if] you look at nutrition care specialists at 16M, we're kind of low on that spectrum with that. However, what they don't take in consideration is when we're in what they call a *garrison environment* – the hospital – and we are around patients, we are not exposed too much nor to too much noise, I understand, unless you're in the kitchen or something. But however, when we're in the *field environment*, we do the cooking side of our MOS. So we cook the meals, we deal with the generators, we deal with the containerized kitchens, also known as CKs. They're very loud. We go through the range. So I had explained that a lot being in nutrition care. (P13: Army)

When prompted to remark on the lack of locations in the mockup, P8 alluded that locations are more impactful in correlating medical issues to service than MOS alone:

>I think [including locations] would be even more helpful than [MOS]. I don't know what I was exposed to on my ship or like where I deployed to and, I mean hopefully something doesn't happen to me one day but I definitely hear stories of people like getting cancer from certain things. So I think that would even be more valuable than this. I could see how this ***might*** be helpful. Like, maybe if you have hearing or eye issues and you could like correlate it to wearing communications equipment or something of that nature, or being around radars. But again, does the person reading it or adjudicating your claim understand that? I guess that's the part I'm missing or don't know about.

### *Research question: How accurate and complete is the data pulled from VADIR?*

We spoke with 16 veterans. P8, who served in the Coast Guard in the 1960s, had no data available whatsoever, so that participant is not reflected in the numbers.

#### FINDING 3 
Regarding `militaryServiceEpisodes`, `branchOfServiceText` and `periodOfServiceTypeText` (active/reserves/etc.) were the most reliably accurate data values according to participants. `periodOfServiceBeginDate` and `periodOfServiceEndDate` were mostly accurate, but some were wrong by a few months or days. `characterOfDischargeText` values were mostly accurate, expect for a few null values. `narrativeReasonForSeparationText` were mostly correct, except for 1 unavailable value and 2 incorrect values according to participants. The two latter incorrect values are covered below:

Before walking through the data together, P7 (Marine Corps) explained their lengthy process for trying to get accurate medical records to support their claim: 
>When they finally gave me a 20% rating, it took them seven years to give the first check because they said that I owed them severance pay. But when you look on my DD214, I got 0 for servants pay. They haven't gave me back that at all. They haven't gave me back any back pay from my first claims. I've filed multiple times with nothing.

When we reached the `narrativeReasonForSeparationText`, P7’s data value was “DISABILITY, SEVERANCE PAY”. P7 reacted strongly to seeing this:
>That is not accurate because again, if you bring up my DD214, I got no severance pay – definitely no severance pay for them to keep thousands of dollars from me. I get nothing! I have my DD214 right here, right now. I can grab it and like read through it and it says “severance pay: none”. And and why would they hold… I mean, it was only like $204 a month, but they held seven years’ worth.

Another veteran (P12: Army) also had inaccurate data around their separation as well (regarding a type of Military Policy Violation). They said:
>The narrative reason for separation… is that random? Because that’s not what I got out as. […] Military policy violation? No… I never got in trouble. Ever. 


<details>

<summary>(Expand to view granular amounts)</summary>

- `branchOfServiceText`
	- 15 of 15 participants had correct branch data, including two participants that served in two branches (Air Force initially, then transfer to Space Force)
- `periodOfServiceTypeText`
	- 15 of 15 participants had correct service type data (active duty/reserves/etc.)
- `periodOfServiceBeginDate` and `periodOfServiceEndDate`
	- 10 of 15 participants had correct service dates
	- 2 participants (both Marine Corps veterans) had service dates that were off by a few days
	- 1 participant (Navy veteran) had service dates that were off by a few months
	- 1 participant (Air Force veteran) had dates that needed to be flipped to be chronological 
	- 1 Air Force/Space Force veteran had service dates that were incomplete (likely due to not separating yet)
- `characterOfDischargeText`
	- 13 of 15 participants had correct discharge types
	- 2 participants had discharge types that were unavailable (P16, Air Force/Space Force; P10, Marine Corps)
- `narrativeReasonForSeparationText`
	- 12 of 15 participants had separation reasons that were correct
	- 1 participant’s separation reason was unavailable (P16, Air Force/Space Force)
	- 2 participants’ reason was incorrect (P12, Army; P7 Marine Corps)
- `enlistedServiceYears`
	- 15 participants had incorrect enlisted service years
		- Some participants showed a value of `99`. According to P17, their years are counted differently than enlisted members and they typically see large numbers, so this may indicate that they were officers.
- `selectedReservesYears`
	- 10 participants said their reserves data seemed accurate
	- 3 participant said their reserves data was incorrect
	- 2 participants had reserves data that was unavailable (null)

</details>

#### FINDING 4 
Regarding `militaryOccupations`: `occupationTypeText` (duty/primary/secondary) wasn’t something most veterans found particularly useful. DoD occupation text coverage was inconsistent. Some veterans had partial data, others had none. For veterans that had data populated, they had different understandings of what they meant. Only a handful of veterans said their service specific occupation code/text values were accurate. For most veterans effective dates were incorrect or they had no idea where the dates were coming from.

<details>

<summary>(Expand for granular amounts)</summary>

- `occupationTypeText`
	- Most veterans didn’t talk about occupation type. One veteran (P6: Marine Corps) said that data was meaningful, while another (P5: Air Force) said it was not.
- `dodOccupationText`
	- Most veterans had a mix of no data populated here, or only some data populated. One participant (P5: Air Force) said this was a general description for their MOS. Another participant (P6: Marine Corps) said this is related to the unit they were in, and not related to their MOS. [may need to check this]
- `serviceSpecificOccupationCode` and `serviceSpecificOccupationText`
	- Only a handful of veterans said their codes/titles were accurate. 
	- One participant (P13: Army) said the occupations were actually correspondence courses, and that their dod occupation text was more reflective of their occupation.
	- Two participants said their occupation history was out of order (P6: Marine Corps; P11: Coast Guard).
- `effectiveDate`
	- For most veterans, the effective dates were weird: either off by days, months, or years – or, the dates were inexplicably triggered by something but they couldn’t figure out what. 

</details>

#### FINDING 5 
Regarding `deployments` and `deploymentLocations`, dates and missing locations were the biggest issues that the 5/15 veterans saw in their deployment data. There appeared to be duplicate rows for deployments, dates that didn’t match up with participants’ recollections, and missing country data.

- 9 out of 15 veterans did not deploy, and as such, did not have deployment history to discuss. 1 veteran (P9: Air Force) did deploy, but no data was returned.
- 5 veterans did have deployment data, and all 5 participants commented on the state of their data. 
	- 3 veterans (P3: Navy; P5: Air Force; P16: Air Force/Space Force) commented on there being duplicate rows for some deployments.
	- 1 veteran (P6: Marine Corps) said their deployment dates didn’t match.
	- 3 veterans (P3: Navy; P12: Army; P13: Army)said their deployment dates were weird.
	- 1 veteran (P5: Air Force) expected to see multiple TDYs (Temporary Duty Assignment or Temporary Duty Travel), but only saw one.
	- 4 veterans (P3: Navy; P6: Marine Corps; P12: Army; P13: Army) commented on countries being missing from their data.

#### FINDING 6 
For `academies`: Both available sets of data were accurate.

- Two participants had data that encompassed their academy records, and both data sets were accurate (P4, Navy; P17 Air Force/Space Force)

### *Research question: How do veterans conceptualize their service history?*

Unsurprisingly, veterans had varied conceptualizations when it came to thinking about and explaining their military history. We were able to do a short ranking exercise with 9/16 participant that we spoke with. We presented the participants with 5 stock terms (in randomized order) and invited them to use their own words in describing how they think of their history, with 1 being the top organizing position.

#### FINDING 7
When doing a mapping activity to help understand how veterans conceptualizing their military history, **7/9 participants** (P17, P5, P9, P10, P14, P1, P2) **thought of their location first, rather than what they were doing (MOS)**. This is due to the fact that Duty Station, Unit Assignments, Deployments, Command, and Bootcamp all serve as examples of significant locations within their military histories.

Military Occupational Specialties (MOS) was in the 1st spot for 3 veterans (P4, P6, P17), the 2nd spot for 1 veteran (P5), and MOS was based in the bottom 3 places for 4 veterans (P2, P10, P14, P9). 

<details>

<summary>(Expand for table of full results)</summary>

| **P#**  | **Branch**        | **1**                                                      | **2**                                   | **3**                                             | **4**                                                      | **5**            | **6**                |
| ------- | ----------------- | ---------------------------------------------------------- | --------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------- | ---------------- | -------------------- |
| **P4**  | Navy              | MOS                                                        | Unit Assignments                        | Deployments                                       | Deployment Locations                                       | Duty Station     |                      |
| **P6**  | Marines           | MOS                                                        | Deployment Locations                    | Deployments                                       | Duty Station                                               | Unit Assignments |                      |
| **P17** | Space Force (+AF) | MOS (AFSC), Duty Station                                   | Unit Assignments                        |                                                   |                                                            |                  |                      |
| **P5**  | Air Force         | Duty Station                                               | MOS (AFSC)                              | Unit Assignments                                  | Duty title (training officer student pilot bomber pilot)   | Deployments      | Deployment Locations |
| **P9**  | Air Force         | Duty Station                                               | friends from duty station               | which aircraft I worked on                        | medical conditions I incurred, where my children were born | Deployments      | MOS                  |
| **P10** | Marines           | Unit Assignments                                           | Deployment Locations                    | Duty Station                                      | Deployments                                                | MOS              |                      |
| **P14** | Army              | Deployments                                                | Deployment Locations                    | Duty Station                                      | Unit Assignments                                           | MOS              |                      |
| **P1**  | Air Force         | Umbrella: Air Force Security Service (one of the Commands) | Locations: Yale Goodfellow AFB in Texas | Permanent: AFB in Japan                           | Deployments                                                |                  |                      |
| **P2**  | Navy              | Boot camp                                                  | A School                                | Duty Station, Shore duty (AIMD), Unit Assignments | MOS                                                        |                  |                      |

</details>

![Mental model activity example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2024-01-military-info-enhancement-mvp/images/mental-model-activity.png)

### *Research question: How effective is the current design mock-up in displaying MOS?*

#### FINDING 8 
Veterans did find value in displaying `active duty` and `inactive reserves` in the Military Information profile section mockup.

3 veterans commented on appreciating the inclusion of this data. P17 specifically said that:

>I love the active duty dates displayed and then the reserve details displayed if it applies. (P17: Air Force/Space Force)

#### FINDING 9
Veterans were mostly fine with `Military Occupational Specialties` as the section heading, however P5 expected to see a personalized heading (AFSC instead of MOS). P9 thought that “Job Title” was generic enough to work for everyone.

#### FINDING 10
Two veterans commented on the proof of veteran status card (without facilitator prompting), and both stated their affinity for the card.

P6 immediately mentally linked what they saw on the Military Information profile section page with what they were already familiar with: the VA mobile app.

>I definitely like the ID the veteran's ID card availability. Because you can get it mobile on mobile device. So that, that's great. So that if you don't have it with you and you forget, you can hopefully the internet you can pull it down. Sounds good.

P13 commented on the card right away, however they didn’t get a chance to notice the disclaimer copy around it’s purpose being for discounts.

>Ooh, I like this. I like the card. I like the fact that you can print it, because I know even us for veterans sometimes we go and look for the letter to show our proof of service, if it's needed for certain things like loans or something like that. And this card helps. Because you can just go here and print out the card. If you need to show proof, you can keep it on you instead of trying to fold a printout of your benefits letter or proof of service letter. So I like this. I like the card. It's small, it's convenient. (P13: Army)

#### FINDING 11
A handful of veterans had suggestions for additional information that might be included in user profiles: one suggested battlefield promotions and another suggested a link to a location finder for getting a veteran ID card in person.

- [battlefield promotion](https://en.wikipedia.org/wiki/Battlefield_promotion) (P13)
	- “Sometimes… some soldiers have received what they call battlefield promotions, which means they did not go in front of a board, like a formal board. So if, if there's nothing recorded, it sits up to HR for that promotion. There's no record of it.” (P13)
- location finder for veteran ID card (P5)
	- “I need to get my veteran ID card and I think you get them through the VA – like locally – you go and have your picture taken or something. If there's a link and maybe there is that link there, a link to like where you select your state and then it has a website that says you're in the state of Connecticut, go to this place and get your ID card.”

#### FINDING 12
When asked what information is missing or could be useful to include in their Military Information profile section, veterans offered multiple suggestions, including awards, dates, rank, deployments and training locations, and unit assignments.

- awards, metals, ribbons
	- So basically if, without stating too much of where they've been because – and god forbid anything gets hacked or somebody gets into their login information (you don't want to reveal too much) – these are some of the specialized things that you have done and … anything they've won special accommodations, you know, like we've had any medals or something like that. (P7)
- dates and date ranges
	- dates/ranges missing (P1, P2, P5, P12, P13, P17)
		- “It, it definitely would be helpful to have the dates… Probably a date range. So you know, in case you had to like actually put down on paper or say like how long you did a certain job, then you would kind of know. Or [for] a job that you may be applying for, or I guess just like general knowledge for you to know how long you, you did something or in comparison to maybe another job you might want to, if you are applying for a job, you might wanna go for the MOS that you did the longest.” (P12)
	- dates/date ranges unnecessary (P13, P14)
		- “I don't have an issue with not being any dates there. If you add dates, then you're gonna end up taking up more space, which is going to, in turn, make that longer. So if you have soldiers that had different occupations under them and you go by each date, especially when you come to a case like you've seen under my record where I went from a 10 series to a 20 to a 30 and then you put those dates in, it's gonna be long.” (P13)
- deployment information (P13)
	- “It would not be under your MOS because the deployment is not your MOS. So I wouldn't expect it to be under the MOS tab. I would expect it to be under like a service tab… So if you do a separate service tab, then you can put any deployments. Sometimes soldiers go overseas, like they'll go to Korea, Germany… Alaska [is] considered overseas. So that would go under your service as well.” (P13)
- district (Coast Guard terminology for [Atlantic](https://www.atlanticarea.uscg.mil/Units/) and [Pacific](https://www.pacificarea.uscg.mil/) areas) (P8)
	- “Well, the Coast Guard has different districts. People would be interested to see if you were in the same district, you know, if you were in Alaska when they were in Alaska or Hawaii or wherever they might be.”
- duty station (P9, P12 ,P17)
	- “I think personally I would wish [duty station] was there. I think it does make sense that it's occupational specialties that are listed. I think that's what the majority of people kind of think about when they think about their military career. But yeah, just me personally, I also tie in duty station hand to hand a little bit.” (P17)
- MOS code (P5, P6, P13)
	- Why does it show the title but not the actual MOS… it's good because it gives you [an] idea of what jobs they did by their MOS and it can give can give you an idea what rank they might have achieved.” (P6)
- medical records/reports (P5)
	- “So my initial thought was, and this is probably well beyond the scope of what you guys are looking for, if there would be any way to have […] like we were just talking about in the date range of the bases, it had where you could click on that. So it had from 2010 to 2012 and when you clicked on it, then it opened up all of the documents for medical. Or if you could load documents in there. Let's say I really wanted to save my medical documents, I could tie them to when I was at this base in Oklahoma and then tie it to there. I could load up any documents, whether it's performance reports or something else, different reports. So if you could load or even have like where you where you can submit a document that stays on that tab.”
	- When asked to elaborate: “I would say solely because it's so difficult for us to filter through medical documents. I mean think about, I don't know if you have kids, you try to take your kids and enroll them in school and they're like, oh, do you have the shot record? It's like I do somewhere, I don't know. Is there an easy button to go back and find the record of when I broke my leg because you know, a tractor ran over it type thing. When a military, you know, vehicle hit me, like I don't know where those records are, but I might need those records at some point to prove it to a disability or a case.” 
- rank (P2, P8, P13)
	- “I could see [rank] being up there where our date is, like our date of service. I could see it being there or I can even see it being up there with our name.” (p13)
- separation information (P6, P12, P13)
	- When asked about the utility of including separation information in their VA.gov profile: “That would be pretty helpful too. Especially so you don't have to like maybe dig out your DD214 to, you know, that might be somewhere in some files.” (P12)
- training locations (P7)
	- “I don't think it there's any harm with putting where a person did their training at because there's a lot of pride in every veteran on where they trained… I get why you don't wanna put that in, but where they first put they boots on. Every veteran will, if you have a conversation and they feel comfortable with that person that they're talking with, they immediately ask… especially Marines because there's that tug and pull: east coast, west coast, you know, because we only have the two places. (P7)”
- unit assignment (P8)
	- When asked whether anything felt missing on the mockup: “Well, probably the units. Everybody wants to know if you've served on the same bases or vessels or things. And that's kinda how you find your buddies.”

#### FINDING 13
While 9/13 veterans noted missing information in the mockup, a few veterans expressed concern about the amount of information, which included repetitive or extraneous information.

P5’s impression on the lack of dates led to an observation that the job titles listed in the mockup were repetitive.

>I don’t know what you would use the different occupational specialties or AFSC codes [for] because they're not hyperlinked to anything. And typically somebody's job is all gonna be pretty much [be] the same. You know, if you're a a maintainer it's probably just going to be a bunch of maintenance jargon, or if you're an Intel troop, a bunch of intel stuff that’s about the same stuff. But I don't know what you really gain from having the big list of apprenticeship, craftsmanship, journeyman. (P5) 

When asked about what they would expect upon clicking “show details” in the mockup, P13 already anticipated needing a lot of space to accommodate someone’s history.

>Show details? I'm expecting to see if it would show how did I complete my tour? Did I complete an honorable, dishonorable or whatever case our status is (it would depend on the veteran). Because as we've seen, if you look at someone that's been in 20 years to show every single duty station, that's gonna take a lot of space.

>[Moderator asked P13’s thoughts about a lack of deployment history in the mockup.] Your deployment history? It would not be under your MOS 'cause the deployment is not your MOS, so I wouldn't expect it to be under the MOS tab. I would expect it to be under a service tab. Like a separate service tab. So if you do a separate service tab, then you can put any deployments. Sometimes soldiers go overseas, like they'll go to Korea, Germany, Alaska considered overseas. So that would go under your service as well.

P17 offered their impression after looking at the design mockup:

>It's a little bit cluttered for me because there's no dates too. And then I know that it's different for the enlisted side as well because they go through all of these [MOS types]. We don't have as much different titles or “apprentice, journeyman, craftsman” titles either, but I think it's just there's no dates.

#### FINDING 14
Only a small number of veterans did notice the additional information component, but most veterans had a clear idea of how they would go about correcting incorrect or incomplete data, should that be the case in their Military Information profile section. 

- P2 thought they would see a phone number if they clicked on the “military information is not correct” additional info component.
- Without noticing the additional info component, P5 expected there would be a button or other way to submit corrections with supporting documents. Once they noticed the link, they thought it could be worked more simply and clearly.
- P6 noticed the additional info component and said they figured that was there they would get more information on how to correct the information.
- P9 would find a contact email and assume that they’d have to send in some documentation to verify it.
- P9 would look for a way to contact the website, and noted they would still need to provide official documentation (due to concerns of fraud).
- P11 would have to figure out how to get something changed, and that it would be helpful to have a number to call, but “there’s so much red tape to any stuff like this … I don't think people should be able to go in there themselves and just write whatever – I think that's a bad idea – but to contact with the DoD or the VA, whoever, and say, hey look, you know this, this ain't right.”
- P12 noticed the additional information component and said they hoped to find an email or phone number to correct any issues.
- P13 did not notice the additional information component and said they would reach out to the National Archives to correct a data issue.
- P14, who thought the VA should serve as an information clearinghouse, said “if the VA's gonna be the designated clearinghouse, then … there'd be a form available I could send back and ask them to get with the military records and get it corrected again, letting them do all the legwork instead of me having to call four or five different government agencies and go through the phone trees and all that stuff.”
- P16 thought that the VA.gov website should provide an organization to contact in order to get data corrected.
- P17 said they would think they’d have to go through Air Force personnel to get the information corrected, because what VA.gov shows would reflect what they’re providing: “I would be like, well it's gonna be a pain to get this fixed.”

#### FINDING 15
Two participants expressed a strong preference for the VA serving as a one-stop shop or clearinghouse for records.

P13 saw VA.gov as having potential for being a one-stop shop:
>I know MilConnect tends to have a lot of information and it also lets you know how to retrieve your, your DD214. Because even if we log in into VA and you go to My VA (or whatever the case may be on the site), if you go to records and you how to request my DD214, when you click that link, it's gonna take you to MilConnect to request it. **So if there is a way to [have] where it's a one stop where you can retrieve it from your VA.gov, I believe it'll help us, it'll help the veterans.**

P14 wanted VA to be a clearinghouse for all military information for similar reasons as P13:
I think the va.gov ought to be the clearinghouse for all the military information from all the different branches – the central location or clearinghouse for all of it. Because you have guys that did some time in the Army. Like my brother-in-law was in the National Guard and he went in the Marines. So he ought to be able to go to just one spot and see all of it.[It would be helpful] if for instance, if you need to look back and see a certain time where they were at. Well, [the mockup] doesn't have the dates on it though. I just still think so you're not chasing it over two or three different entities, you know, like in his case, he wouldn't need to go to the Army to look at the National Guard records and then go to the Marines and look at his Marine records. He'd just go to the VA and there they all are.

Below: example of one veteran’s feedback (stickies added by the moderator)

![Mockup feedback example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2024-01-military-info-enhancement-mvp/images/mockup-feedback.png)

## Additional Insights

P3, a subject matter expert on personnel data, shared misgivings about the project, stating a belief that you can’t use VA data to file claims with the VA.

<details>

<summary>(Expand for more details about P3’s expertise)</summary>

Way back when, when we actually put stuff into databases in the Navy, I was part of all of that. So we transferred data off microfilm, microfiche and physically entered that in (it was before we had OCR, it was before we had recognition, before we had computers) – it was the big computers in the room. So you'd walk into a room and you'd take this thing and you'd make a copy, so to speak. And then the OCR would read that data. It was so completely early in the system that a `1` and an `l` were always the same. So you had people translating all of that and people manually fat fingering data in and people are fallible… I actually managed the contractors that did that data for the defunct personnel specialists and yeomen, et cetera.

</details>

<details>

<summary>(Expand for more details about P3’s misgivings)</summary>

>I've done my claims several times and had them reevaluated, and I would not trust the data set that I was looking at. So I can pull in my military service data with my blue button report and I've looked at those and they're not helpful to me because then I still would have to go verify them. So I can't take that data and rely on it from the VA. I've gotta go to the source. In my case, obviously I'm a bureaucrat. So I’ve got paper on paper on paper. So I was able to put that together rather easily. Most people are going to go back to wherever, St. Louis Records Center or something like that and get their CD, their DVD, their whatever they have. In my case, it was way back when, so I had microfiche. So all of that information has to come from either Army, Navy, Air Force, Marine Corps as opposed to any contractor or subcontractor or the VA for that matter. You can't take the VA data, use the VA data, then file with the VA. That doesn't work because you can't cite somebody to themselves. 
>So even if it ***was*** a hundred percent accurate… That's only going to be accurate for one snapshot in time. It's going to be accurate for five minutes or one hour or one day or however long that update takes to refresh and repopulate with additional data with updated people that got out of the military today and the effort and energy behind that. You're replicating and duplicating effort for very little reward because you can't reliably know what that is. You can say, well, this is what we've got provided by the Navy. Well then why wouldn't I just go back to the Navy? Because why would I say, hey, the contractor gave me the data that's in my record. Well, where did they get it from? The Navy? Well, why didn't you go to the Navy?

</details>

## Recommendations

- Recommendation 1: Consider incorporating `periodOfServiceTypeText` (active/reserves/etc.) into veteran profiles. 
	- All participants reported seeing accurate data, and there seemed to be genuine appreciation in the specificity of service types. 
	- If incorporating service type, investigate data around the natural guard.

![Service type mockup example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2024-01-military-info-enhancement-mvp/images/service%20type%20example.png)

- Recommendation 2: Consider incorporating `characterOfDischargeText`.
	- The values were accurate for most participants, expect for a few null values. (Incorporating this data type may require including a key to explain what `null` means.)
- Recommendation 3: Discuss the viability and utility of including `narrativeReasonForSeparationText`. 
	- While values were mostly correct for participants, 1 value was unavailable value, and 2 incorrect values were upsetting or confusing to participants. 
- Recommendation 4: Consider not pursing including `militaryOccupations` in veteran profiles, given the inconsistencies in data coverage and its limited utility. 
	- Veterans already have records such as branch reports (like the Air Force’s SURF) and DD214 to share with medical providers and the VA. 
	- The other use case – helping with jobs – may at this point be out of scope for the profile.

## Further research needed

- Consider investigating why  `periodOfServiceBeginDate` and `periodOfServiceEndDate` dates are sometimes off by a few days or months. 
	- This information may still be useful as it was accurate for 10/15 participants.
- Consider continuing to monitor `deployments` and `deploymentLocations` to see if coverage improves.
- Consider investigating duty station location data, since locations were the organizing principle for 7 out of 9 participants.

## Next Steps

Discuss, as a team, which finding (if any) to incorporate into the profile. Determine what further research is worth doing at this time.

Team decisions will be recorded here once direction has been determined.

## Appendix

- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2024-01-military-info-enhancement-mvp/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2024-01-military-info-enhancement-mvp/conversation-guide.md)
- Interview transcripts are not available 
	- Given the amount of personal military history participants shared during each session, we will be destroying transcripts along with video/audio recordings once next steps have been determined.

## Tools used for Synthesis

- Mural
	- [Interview notes](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1707510070544/62fdd391cb178ce02072fc2f504bdda2d0ccb6bd?sender=uba9bdb782b0d1026e46b0140)
	- Data walk-through (will be deleted soon since it has some sensitive information)
- EnjoyHQ for transcribing the audio recording (will be deleted soon since the bulk of the content is around personal military history)
- Notion database for analyzing data, using sorting/filtering to determine count breakdowns

## Pages and applications used

- [Figma mockups](https://www.figma.com/file/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?type=design&node-id=10%3A6355&mode=design&t=O9XylTLhhmVzqtOC-1)

## Secondary research

2023 [Military Info, Profile Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-military-info-discovery/findings-summary.md)

## Who we talked to 

**Recruitment criteria**

We talked to **16 participants.**

Audience segment:
* Veterans: 16 
* Caregivers: 0
* Family members of a Veteran: 0  

Gender:
* Male: 8 
* Female: 8 

LGBTQ+:
* Transgender: 0 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
* Gay, lesbian, or bisexual: unknown/not asked

Devices used during study: 
* Desktop: 16 
* Tablet: 0 
* Smart phone: 0 
* Assistive Technology: 0

Age:
* 25-34: 2
* 35-44: 4
* 45-54: 4
* 55-64: 1
* 65+: 5
* Unknown: 0

Education:
* High school degree or equivalent: 1
* Some college (no degree): 4
* Associate's degree, trade certificate or vocational training: 2
* Bachelor's degree: 4
* Master's degree: 4
* Doctorate degree: 1
* Unknown: 0

Geographic location:
* Urban: 5
* Rural: 11
* Unknown: 0

Race:
* White: 10
* Black: 3
* Hispanic: 4
* Biracial: 0
* Asian: 3
* Native: 1

Disability and Assistive Technology (AT):
* Cognitive: unknown
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: unknown
* Sighted keyboard: 0
* Captions: unknown

## Underserved groups we haven’t talked to 

> [!warning]
> The section needs updating:

_[Complete the VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)_

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Group 1
* Group 2
* Group 3

_[insert screenshot of completed recruitment checker]_
! [VA-recruitment-checker](link - add image to github folder and link here with .png)
