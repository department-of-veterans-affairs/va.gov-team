# Profile Hub Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Profile Hub, Authenticated Experience Profile**

Date: 11/06/2023

Pam Drouin, pamela.drouin@a1msolutions.com

[Research readout](https://docs.google.com/presentation/d/1mhwXBpO1xas5kg9Y8jENZAnFpxKMjvdhfOt2kM1wj_A/edit#slide=id.g116ddecbd0a_0_634)

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)

## Research Goals

The Profile hub is a new page in a veteran’s profile account that gives veterans an overview of each profile section, addressing a longstanding [“hubless spoke”](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41697) issue. This work applies to any life stage in the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from `Starting Up` through `Aging`. 

![profile-hub-desktop](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/session-notes/profile-hub-desktop.png)

The purpose of this research is to get feedback on the structure and navigability of the hub by:

- Evaluating the effectiveness of the Profile Hub page in helping people complete common tasks.
- Evaluating how well the proposed navigation changes perform across participant types (sighted and AT) and screen sizes (desktop and mobile).

What we learn will inform the direction of this proposed design concept: we will either move forward with this design, making iterations as needed, or choose not to pursue this direction.

## Research Questions

Regarding overall structure:

- How effective is the structure and hierarchy of the hub page?
    - Is the hub page scannable/consumable by sighted and AT participants?
- How effective are the section overviews in giving users the gist of what’s within each one?
    - Do participants resort to using Search to complete any tasks?
    - How useful are the deep links? Are they confusing?

Regarding the side navigation menu:

- How well does the proposed navigation concept perform across all users and screen sizes (i.e., a menu-less hub page with navigable sections)?
    - Is it disorienting to sighted and/or AT participants to go from an overview-style page with no nav menu to an individual section with side navigation menu? Is the left navigation menu needed on hub page?
    - Does it introduce friction for mobile users to scroll the hub page’s section overviews without the benefit of a menu?
    - Are there any differences in usability between large and small screens?

Additionally, as time permitted:

- What, if any, additional information might be helpful to add to veterans' military information section?
	- This will help inform the [enhanced military info project](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/2023-enhanced-military-information/README.md).
- To what extent would veterans look in their authenticated menu for links to dependents and letters?
	- This will help inform the [project that added links to dependents and letters within the authenticated menu](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/authenticated-menu/add-dependents-letter).
- Where within their profile would veterans expect to find emergency contact and next of kin information?
	- This will help inform the [personal health care contacts project](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/personal-health-care-contacts).


## Methodology 

We conducted **remote usability testing** over Zoom from October 11-18, 2023 to get feedback from research participants using the profile hub feature behind a feature toggle. Participants were asked to complete a series of tasks, as well as some open-ended questions around additional personal information.

Perigean recruited the participants. **We talked to 9 Veterans**.

- 7 veterans used desktop computers
	- 2 of those desktop participants used a screen reader (NVDA and VoiceOver)
- 2 veterans used mobile devices
	- 1 Android, 1 iPhone

For more details, see see [Who we talked to](#who-we-talked-to)

## Hypotheses and Conclusions

We hypothesized that the Profile Hub will resolve the structural and organization issues detailed in the background section in the following ways:

- Providing short overviews (accompanied by key deep links) of each section will reduce the need for people to search from any profile section for content that lives within their Profile.
	- DEFINITELY TRUE – No participants attempted to search for content that was already within their profile sections. Search only came up when asking how people would look for letters.
- Improving the page hierarchy will make the Profile content more more scannable for sighted mobile users.
	- DEFINITELY TRUE – Participants who tested with their mobile devices had no issues finding answers to their tasks.
- Creating a true landing page for Profile will give people who use screen readers the context they need to understand what’s in their Profile and resolve the confusing experience of landing on a page (`Personal information`) that doesn’t match the label on the link they clicked to get there (`Profile`).
	- LIKELY TRUE – With only 2 screen reader participants, we did not reach our target of 3, however, both participants were able to get a sense of what was on the page based on where they came from. (1 screenreader user used the My VA profile link, the other used the authenticated menu profile link.)

We also assumed the following:

- All participants will be fine without a sidebar nav menu on the hub page and they won’t be confused by having a sidebar nav menu appear within the sections.
	- LIKELY TRUE – No participants mentioned the fact that the sidebar nav appeared alongside sections, but went away after returning to the profile hub. Interestingly, participants didn’t use the sidebar nav for navigation 100% of the time – some participants used the back button, breadcrumbs, or even authenticated menu to return to the profile hub.
- AT participants in particular will find the hub’s structure clear, and are able to understand the contents within the Profile.
	- NOT ENOUGH INFORMATION – As mentioned above, with only 2 screen reader participants, we did not reach our target of 3. One screen reader participant (P7) navigated via mouse with NVDA as a supplement and the other screen reader participant (P13) navigated via keyboard with VoiceOver, but used a combination of “skip to content” and VoiceOver’s Item Chooser for quick searching, but skipped over the sidebar nav. 
		- P7 used the authenticated menu for 3 out of 4 tasks, only using the side menu once to switch from one section (Contact information) to another section (Direct Deposit). 
		- P13 understood the card’s contents, but found the card description and link text repetitive and confusing.
- Participants using a mobile device will not find it inconvenient to scroll in order to see the hub’s overviews of each section.
	- LIKELY TRUE – Participants who tested with their mobile devices had no issues with the amount of scrolling required to complete tasks.

### Task success
- _See [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/conversation-guide.md) for task details._
  
| **P#**                                    | T1 auth | T2 Nav | T3 Contact | T4 Switch | T5 Nav back | T6 Deep link | T7 Pers. info | T8 Depts/Letters |
| ----------------------------------------- | ------- | ------ | ---------- | --------- | ----------- | ------------ | ---------------- | --------------------- |
| **P1 desktop**                            | Pass    | Pass   | Pass       | Pass      | Pass        | Pass         | Pass             | Pass                  |
| **P2 desktop**                            | Pass    | Pass   | Pass       | Pass      | Pass        | Pass         | Pass             | Redirected            |
| **P3 desktop; mag**                       | Pass    | Pass   | Pass       | Pass      | Pass        | Pass         | Pass             | Redirected            |
| **P4 desktop**                            | Pass    | Pass   | Pass       | Pass      | Pass        | Pass         | Pass             | Redirected            |
| **P5 mobile**                             | Pass    | Pass   | Pass       | Pass      | Pass        | Pass         | Pass             | Redirected            |
| **P6 mobile**                             | Pass    | Pass   | Pass       | Pass      | Pass        | Pass         | Pass             | Redirected            |
| **P7 desktop; NVDA mouse-over**           | Pass    | Pass   | Pass       | Pass      | Pass        | Pass         | Skipped          | Redirected            | 
| **P11 desktop; mag; tech issues**         | Fail    | Pass   | Pass       | Pass       | Pass        | Pass         | Pass             | Pass                  |
| **P13 desktop; VO keyboard; tech issues** | Pass    | Pass   | Pass       | Pass      | Pass        | Pass         | Skipped          | Pass                  |

## Key Findings

1. Nearly all participants were able to complete tasks effectively using the Profile Hub. [Jump to finding 1 details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/research-findings.md#finding-1)
2. Participants were effectively split in how they navigated to their Profile. 4/9 participants used the authenticated menu, and 5/9 participants used the profile link on My VA. [Jump to finding 2 details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/research-findings.md#finding-2)
3. Participants used a variety of methods for switching from one Profile section to another and navigating back to the Profile hub page. [Jump to finding 3 details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/research-findings.md#finding-3)
4. Deep links such as the DD214 link are useful. [Jump to finding 4 details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/research-findings.md#finding-4)
5. Participants also mentioned a few things that would be helpful in enhancing their Military information. Duty stations, duty status (active, reserves), and deployment locations – ultimately anything that’s asked for on a claim form should be here. [Jump to finding 5 details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/research-findings.md#finding-5)
6. Participants that used their authenticated menu for navigation had more success in finding links to dependents and/or letters than participants who weren't aware of their authenticated menu until prompted by the moderator. [Jump to finding 6 details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/research-findings.md#finding-6)
7. Participants associated dependents and letters with their profile. 5/9 participants thought letters belonged in their profile, since letters are associated with them, and while not all participants had dependents, at least one participant expected to see that information in their profile. [Jump to finding 7 details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/research-findings.md#finding-7)
8. One screen reader participant encountered difficulty with the body and link text within the cards, the result of a combination of screen reader issues and repetitive word choices. [Jump to finding 8 details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/research-findings.md#finding-8)
9. Participants expected their emergency contact and next of kin information to be in their profile. [Jump to finding 9 details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/research-findings.md#finding-9)

## Details of Findings 

### Finding 1

Label: [PRDT: VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/PRDT%3A%20VA.gov%20Profile)

The vast majority of participants were able to complete tasks effectively using the Profile Hub and had positive things to share about their experience with it.

> I'd say my profile was pretty clean. It took me pretty much everywhere I needed to go. The only thing that we couldn't do was the emergency contact that's not built in yet. So, I'd say the profile was my one stop shop for most things. Honestly, I think it's pretty like smooth and self-explanatory for the most part. I'll be honest, I'm biased because I like tech stuff and I, for the most part, keep up with a lot of that stuff. So for me it's relatively easy because it's within the realms of most websites that store information. It's relatively straightforward and things are a big enough font for folk that I think it's pretty common sense like. So for me it's relatively easy, again, seeing how it used to be – and even seeing what the army had it long ago. Like, this is way better by a long shot. My goodness. So it's good to see that. And like, I, I have no qualms. I think this is a very clean website because it could be a lot more cluttered. (P2)

> I guess smooth – like, it wasn’t crazy… You have the personal information, contact, it's kind of broken down. And then you can see underneath it the little… I guess it says “review your name” and then all that and then “manage your address.” So it has information in it, what you should expect to see in there, which is a help. (P4)

> I thought it was good. I didn't have any issue with it. (P5)

> I mean, it's okay. I go in and do pretty pinpointed stuff and I do, like I said, I do use it, I communicate a lot with my provider. I mean, on a scale of one to 10, how I would rate my experience, I would say, I would say it's an 8, but I do like the fact that we took a kind of deeper look today. (P6)

> I would say it's just a matter of – it's good to kind of navigate, because it's very repetitive in motion. So once you figure out where everything is, you kind of go to it. But in the beginning, it can be a little bit tricky to figure where things are. But once you get the hang of it, then as long as things don't change, you know where everything is. (P7)

### Finding 2

Label: [PRDT: VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/PRDT%3A%20VA.gov%20Profile)

**Participants were effectively split in how they chose to navigate to their Profile**. 4 participants used the authenticated menu, and 5 participants used the profile link on My VA. While’ My VA’s profile link treatment is very simple, it is very effective. 

![profile-link-options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/session-notes/profile-link-options.png)

>I think what helps that one is because [My VA’s Profile link is] right dead center of the screen. It's dead center of where you're looking. Yeah. Right. So, and we're naturally inclined to look at things in the center of anything. (P2)

> So I would probably go to my name and click the arrow down, because in my experience, that's where most of your account, your personal information is stored at. Yep, so I would select profile. Now that's seems more logical to me. (P6)

### Finding 3

Label: [PRDT: VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/PRDT%3A%20VA.gov%20Profile)

**Participants used a variety of methods for switching from one Profile section to another and navigating back to the Profile hub page**.

- Participants switched **from one Profile section to another** using mostly side navigation links, but also breadcrumbs and even the authenticated menu profile link.
- Participants navigated **back to the Profile hub from a given section** with breadcrumbs, the back button, the authenticated menu profile link, or a keyboard shortcut to the previous page.

Given the usage of breadcrumbs and the authenticated menu's profile link, is it possible that the sidebar navigation is not needed?

> I usually don't use the back button, because a lot of times it can get you logged out. (P1)

> My first instinct is just click up here at the profile link, the… what’s it called, the breadcrumb?… and that should yep… take me right back. Otherwise, I'd say that like my other instincts would've been to click here possibly [P2 mouses over the sidebar nav heading, which says `Profile`]. But my first instinct is up there, up there at the breadcrumb section or I guess the, my, my VA [main navigation link] as well. Got a couple avenues. 

> It's just a matter of like habit and where I know things are, if that makes sense. If I click where the, where the, my profile is, [where, auth menu?] it just seems like those links are for some reason a little bit stronger where if I click on these [bread]crumbs, they may or may not work. (P7)

### Finding 4

Label: [PRDT: VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/PRDT%3A%20VA.gov%20Profile)

Deep links, such as the `Learn how to request your DD214 and other military records` link are useful. The original question the moderator asked participants did not include the term “DD214”, so most reactions to this question involved navigating to the Military information section. Wanting to pull the focus back to deep links on the hub page, the moderator pivoted a few sessions into the study, and switched to asking directly how they’d go about requesting their DD214. Participants used the Profile hub deep link right away. None of the participants who returned to the profile hub after clicking on the DD214 deep link were confused.

### Finding 5

Once on their Military information section, participants were prompted to think of things that would be useful to include on this page, and a few items emerged: **duty stations, duty status, deployment locations – ultimately, anything that’s asked on a claim form should be here**.

> **Any information, any military information that's asked on the claims form – they should have in here, that kind of stuff.** That kind of military information, like your dates of service, which they have here, your duties, you know, your duty stations, things like that. (P1)

> You know, maybe it would be nice beyond like periods of service. Because that's still important, especially for a vet looking for a job. Oftentimes they'll ask for certain things, especially in the federal sector, right? Federal resumes are very particular, right? So, especially if you have any military service, you gotta be really precise with what you have … I think this is a good spot to have stuff where it says military information because that was my first instinct –  it's vague enough where if I don't know if someone's having a request to be like, “Hey, we need your duty station info” – “Oh, let me check here real quick. Lemme check my military info.” We never know how granular things will actually need to be. Right. So I'd argue the old ‘Army side of me’ says more information is better than less. But yeah, more information also requires extra stuff too, you know. (P2)

> Say for instance, I wanted a veteran's car tag and you had to be in Georgia. You have to be a veteran during a active war. Well, this put me outside of an active war by about three months. But according to this, I was in an active war, which would've qualified for that tag. Okay. So I don't know if they look at a different database or different records or thing or where they're pulling their information from. But the actual days I was active was from 87 to 90. (P3)

> Military information kind of goes hand in hand with a statement of service letter, and maybe even your disability rating letter, your dates, type of discharge… Statement of service letter would be good here, and there may be any disability rating letter that you actually have. Which I know these things are on this site. **It’s just military information to means kind of a little bit more than just my period of service**. (P6)

### Finding 6

Label: [PRDT: VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/PRDT%3A%20VA.gov%20Profile)

Participants that used their authenticated menu for navigation had more success in finding links to dependents and/or letters than participants who weren't aware of their authenticated menu until prompted by the moderator.

We asked participants questions around dependents and letters to see whether they looked in the authenticated menu: 
- 2/9 participants went to the authenticated menu to look for those links – both of these participants had previously used the authenticated menu to navigate to their profile at the beginning of the session 
- 5/9 participants needed their attention directed by the moderator to interact with the authenticated menu
- 1/9 participants used VoiceOver’s Item Chooser 

### Finding 7

Label: [PRDT: VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/PRDT%3A%20VA.gov%20Profile)

Both dependents and letters were associated with a veteran’s profile.

Not all participants had dependents, but when asked where P4 would expect to add their forthcoming spouse as their dependent, they initially said they didn’t know. When the moderator probed a little more, they said their profile, since:

> I would assume since everything else is kind of on here… because I'm sure other people have children and wives and husbands and whatnot and wanna add or subtract or whatever. Because it [Profile] has my disability rating and stuff on here. (P4)

5/9 participants thought letters belonged in their profile, since letters are associated with them.

> I figured this would’ve been directly under profile if I were looking for things like this. (P3)

> The Letters tool looked like “a bunch of random stuff” and it “would be the last place I go look for them” – he expected health-related letters to be in a health-related area, and anything having to do with his service history would be in profile. (P4)

> [Participant wanted to look in profile because] those types of things [letters] are associated with me specifically. To me it's kind of like military information – the showing your percentage percentages and, and you know, the breakdown of things. To me, that's kind of profile-driven in my mind. (P5)

### Finding 8

Labels: [PRDT: VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/PRDT%3A%20VA.gov%20Profile); [AST: Screen readers](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/AST%3A%20Screen%20readers); [SFTW: Screenreader](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/SFTW%3A%20Screenreader)

One screen reader participant (P13) encountered difficulty with the body and link text within the cards, the result of a combination of screen reader issues and repetitive word choices. Using ‘manage’ at the beginning of the description gives the impression that it might be a link, and when navigating to the next item (the link) sounds like a repetition. In addition, P13 did not always hear VoiceOver say “link” after the link text.

> [Moderator: it sounded like you were, you were expecting to click on the description as the link] Yeah. Because that's where it's saying “manage it” and because you got two of 'em that says manage, one is giving you a *description*, one is giving you the *ability*. But it's the same word… The first one would be where I do it or what's involved and or what's affected. And then the second one is how to affect it, and that would be the edit. (P13)

> The same word for two different things is a bit confusing. (P13)

### Finding 9

Label: [PRDT: VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels/PRDT%3A%20VA.gov%20Profile)

8/9 expected their emergency contact and next of kin information to be in their Profile (1/9 ran out of time). Participants said it would make sense in personal or contact information, or a special section. 
- Participants listed a number of reasons why they would expect VA to reach out: primarily for medical reasons, although one participant mentioned he would expect VA to reach out if compensation deposits were being rejected by his bank. 
- When probing around possible reasons VA might reach out for reasons outside of medical reasons, people said for things related to death benefits (burial), life insurance, or if any benefits would go to a beneficiary.

> If I went to the urgent care there and my wife wasn't able to go if – if they determined they had to do a procedure of some sort and I couldn't reach [her], you know, [they’d] go into that and, and contact her through that. (P5)

> I guess it would just make sense for personal contact information as well as for dependents or next of kin. It would just be helpful to have it all in the same space.

> I guess it would just make sense for personal contact information as well as for dependents or next of kin. It would just be helpful to have it all in the same space.

> Yeah, so let's say if you're a hundred percent disabled, you get $3,000. But if you have a dependent, then you get $3,100. And if you have your partner, but then you have a child, then you get 3,200. But the VA requests that we submit paperwork, identifying either a partner or our dependent. And so we have to go through a process. But let's say if there was a divorce or you know, kid turned 18 plus, then you would have to change that. So, you know, kind of navigating that space. So for either benefits raising the amount that you're being compensated, or if you know you wanna update life insurance information or something, then it would be a lot easier to access versus calling or faxing information in. (P7)

## Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._

### Some authenticated menu links feel redundant

P4 didn’t use the authenticated menu to complete any tasks, but upon being directed to interact with it to look for dependents, he shared his impression that some of the links were redundant. When he opened the authenticated menu, it opens right over the navigation links for My VA and My HealtheVet. He moused over the My HealtheVet authentication link and then the My HealtheVet navigation bar, then did the same for My VA:

![links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/session-notes/repetitive-auth-nav-links.gif)

> And then seeing like, we're clicking on here [the authenticated menu], it's kind of, those are right there, but the VA and health are both right here and here … [it’s] kind of redundant because it's literally right there. Almost like extra steps for no reason. (P4)

### Breadcrumb home should be My VA

When navigating away from the profile hub to the records page, P2 recommended that the "`home` in the breadcrumbs be changed from the VA.gov homepage to My VA. 

![breadcrumbs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/session-notes/breadcrumb-link-suggestion.gif)

> Now if I were to make a suggestion, I guess this is appropriate time to do it. I'd argue that like my first inclination is that my home would take me back to My VA, but that's probably not right. Right. It's probably the home where it put me originally – this stuff [the VA.gov home page]. Right. 'cause it's the VA homepage. So if anything, I'd maybe say like an addition that could be adding an extra breadcrumb section, just saying My VA in that section there or whatever. Because that could make it seem more obvious for so for folk to even pay attention to that. Some don't even do that. (P2)

### Everything in one place

P11 expressed a desire to have everything in one place to make it simpler and easier for everyone to use. 

> [While on the Dependents page] This is just all about who's dependent in relationship to you. That would be a great thing if you could do that as well. If you had one place where you could access your emergency contact, maybe that's under your MyHealtheVet, you know, because it's, that's dealing with your health and things that, of that nature. 

> I think it would be easier if you have everything in one place. I mean, you shouldn't have to go to MyHealtheVet and then come back to my profile, then go back to MyHealtheVet and then come back to my profile. If everything was here under your profile, then you could do it all with one click. It's trying to make things as simple as possible because, not me per se, but I know elderly people, they don't wanna see where they have to go to 15 websites because they already can't remember about the 1 website that they're going to. So if you could make it simpler and, and add everything there, you know, make it compact, it makes it easier for the person. That's one thing I noticed about when I teach computers to people, the more steps and things that they have to do, the more that they become bored with doing it. 

## Recommendations

* **Recommendation 1**: Iterate on the Profile hub’s card content to make it easier for screen reader users to identify what is actionable/clickable.
	- Given that 1/2 screen reader participants encountered difficulty with the same words being used for both the card description and the link, they should be iterated upon so it’s more clear to screen reader users what is clickable. 
	- _See finding 7 for all supporting evidence_
* **Recommendation 2**: Given that all participants who were asked about where they’d expect to find their next of kin and emergency contact information specified their profile, it is logical to move forward with plans to bring that information into veteran profiles.
	- 8/9 participants (the session ran out of time for the lone participant) expected their information to be in their profile.
	- _See finding 8 for all supporting evidence_
* **Recommendation 3**: Do further research into incorporating dependents and letters in some fashion into veteran profiles beyond the existing links to those pages.
	- 5/9 participants thought letters belonged in their profile, and of the participants we were able to ask about dependents, one participant thought that information should be in their profile.
	- _See finding 6 for all supporting evidence_

## Next Steps

We will discuss this as a team, and then update this section with additional next steps.

## Further research needed

_If there are demographics that were not included in this study or you discovered that more research should be done, make note of that here._

## Appendix

- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/conversation-guide.md)
- [Topline summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/topline-summary.md)
## Tools used for Synthesis

- [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1696351120913/09ee09c0f6042e254cb75f7671ab213f356b3c49?sender=uba9bdb782b0d1026e46b0140) (notes and some synthesis)
- [EnjoyHQ](https://app.enjoyhq.com/projects/woG4nKAnZ/plan) (includes transcripts)
## Pages and applications used

Profile Hub on production behind a feature toggle
## Other supporting documents created

none

## Secondary research

none

## Who we talked to 

**Recruitment criteria**

We talked to **9 participants.**

Audience segment:
* Veterans: 9 
* Caregivers: 0 
* Family members of a Veteran: 0  

Gender:
* Male: 8 
* Female: 1 

LGBTQ+:
* Transgender: 0 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 0
* Gay, lesbian, or bisexual: unknown

Devices used during study: 
* Desktop: 7 
* Tablet: 0 
* Smart phone: 2 
* Assistive Technology: 2 screen reader users, 2 magnification users

Age:
* 25-34: 1
* 35-44: 2
* 45-54: 3
* 55-64: 3
* 65+: 0
* Unknown: 0

Education:
* High school degree or equivalent: 1
* Some college (no degree): 1
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 3
* Master's degree: 3
* Doctorate degree: 0
* Unknown: 0

Geographic location:
* Urban: 4
* Rural: 5
* Unknown: 0

Race:
* White: 5
* Black: 2
* Hispanic: 2
* Biracial: 0
* Asian: 0
* Native: 0

Disability and Assistive Technology (AT):
* Cognitive: 3
* AT beginner: 1
* AT advanced user: 1
* Desktop screen reader: 2
* Mobile screen reader: 0
* Magnification/Zoom: 2
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: ?
* Captions: 0

## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Veterans with no degrees
* Discharge that's other than honorable
* Immigrant origin
* Expats
* Biracial, Asian, or Native veterans
* LGBTQ+ veterans
* Mobile Screen reader
* Speech Input Tech
* Hearing Aids
* Sighted Keyboard
* Captions
* Switch Device
* Braille Reader

![recruitment-tracker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/session-notes/recruitment-tracker.png)
