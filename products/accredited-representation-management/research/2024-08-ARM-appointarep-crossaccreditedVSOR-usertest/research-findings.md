# **Research Findings for ARM Team, Appoint a Representative - Cross-Accredited VSOR - User Test, 08/2024**

**Office of the CTO - Digital Experience (OCTO-DE)**

Janelle Finnerty, janelle.finnerty\@oddball.io

[Research readout](https://dvagov.sharepoint.com/:p:/s/vaabdvro/EcL5hrBm2EJMiUPwkwXQx3ABwEGAhzs6H0IM1dpnYSa8Xw?e=WjakHx)

Jump to:

[Research Goals](#research-goals)

[Research Questions](#research-questions)

[Methodology](#methodology)

[Key Findings](#key-findings)

[Details of Findings](#details-of-findings)

[Additional Insights](#additional-insights)

[Recommendations](#recommendations)

[Next Steps](#next-steps)

[Appendix](#appendix)


## **Research Goals**<a id="research-goals"></a>

### **Veteran Journey**

Veterans can get the help of a representative at any point in the journey where they are submitting benefits. Such as; starting up, taking care of myself, retiring, and aging.

[Full Veteran journey for reference.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)


### **Goals**

- Understand how cross-accredited Veterans Service Organization Representatives (VSORs) process power of attorney (POA).

- Understand usability, understandability, and desirability of Appoint a Representative (digital 21-22 form) with VSORs.

- Gather feedback on Find a Representative from VSORs.


### **Outcome**

- Information on how cross-accredited VSORs process POA will inform how Find and Appoint a Representative tools will present VSOs for Veteran selection as well as the Accredited Representative Portal (ARP).

- User testing will inform adjustments to the Find and Appoint a Representative flows to improve usability.


## **Research Questions**<a id="research-questions"></a>

### **General**

1. How and why do VSORs decide to become cross-accredited?

2. How does cross-accreditation impact their Veteran interactions and day-to-day activities?

3. What is their preferred contact method?

   1. How do they keep their information up to date?

4. How do VSORs interpret VA processes and terms such as certifying officials and OGC?

### **POA specific**

1. How do VSORs fill out the 21-22?

   1. Are there any specific needs being a cross-accredited VSOR?

   2. How is the form processed once it’s submitted?

2. Are there any challenges with the 21-22?

3. Are POA requests ever declined? Why or why not?

4. What technology do VSORs use to process POA?

### **Find a Representative prototype**

1. Would the VSOR adopt the search tool? Why or why not?

2. Is there any information missing or confusing in the experience?

3. Any missing features they’d like to see included?

4. How would the VSOR expect outdated information managed?

### **Appoint a Representative prototype**

1. Would the VSOR adopt the digital form? Why or why not?

2. How does the form compare to their current experience?

3. Is there any information missing or confusing in the experience?

4. Any feedback on the representative search and selection process? Including organization selection.


## **Methodology**<a id="methodology"></a>

- **Interview /** The moderator asked the VSOR a short series of questions to understand processes related to being cross-accredited, with a special focus on POA.

- **Concept testing** / VSORs were shown a prototype to test understandability of content and desirability of features.


## **Key Findings**<a id="key-findings"></a>

1. **VSOR workflows and policies change state to state and county to county.** Including which VSOs they can be accredited with, who they can support, engagement with VA and Veterans, what technology they use, and more. This variation in process could have impacts on permissions and features in ARP.

   1. _See sections VSOR Cross Accreditation, VSOR Contact Information, and POA Process for more details._

2. **Processes within and outside of VA are poorly documented and circulated.** There were several VA and state processes VSORs, some of which had been in their role for many years, did not know of or understand. Lack of this knowledge could keep Veterans from getting the support they need in filing their claims.

   1. One example is the use of VA Form 21-0972, which allows for non-Veterans to sign on behalf of Veterans. Some VSORs were unaware of the form, and would deny POA requests without Veteran signatures. Causing the Veteran to be unable to obtain support.

   2. _See sections VSOR Cross Accreditation, VSOR Contact Information, and POA Process for more details._

3. **Unified processes were praised by VSORs as a time saver, and allows them to support Veterans more efficiently.**

   1. Two examples were NACVSO Continuous Education Unit (CEU) training and states affiliating with national VSOs for easy accreditation and training. The central training allowed VSORs to reduce redundant training efforts and obtain their CEUs quicker. And their states affiliations allowed for easier accreditation with national VSOs.

   2. _See section VSOR Cross Accreditation for more details._

4. **VSORs had mostly positive feedback about ARM features other than two key components.**

   1. Must have: The ability to only show VSOs they support POA with, as many are accredited with VSOs they are unable to support POA through.

   2. Nice to have: The ability to organize representatives by office, rather than individual. Including having office level contact information.

   3. _See sections ARM Shared Design Elements and Appoint a Representative for more details._

5. **VSORs saw value in instant POA submission from VA.gov, but have a continued need for the ability to start POA from ARP.** They saw the tools on VA.gov to be the biggest help to Veterans who are willing and capable of filling out forms online, which was 20 - 70% of their audience depending on location. For Veterans who were older or less tech savvy they would prefer to continue managing the POA process themselves.

   1. _See section ARM Tool Adoption for more details._


## **Details of Findings**<a id="details-of-findings"></a>

### **POA Process**

**How do VSORs discuss POA with a Veteran?**

- VSORs had very similar processes for discussing POA with Veterans. Typically consisting of the following steps:

  1. Verifying the Veterans identity with ID cards or the DD-214.

     - If the Veteran does not have a copy of the DD-214, some VSORs will request a copy through the National Archives or using form SF-180.

  2. Validating if the Veteran is in their CMS system or VBMS.

     - If the Veteran is found with a valid POA on file, the POA process is complete.

     - If the Veteran is not in their system, VSORs will enter the Veterans information into their CMS, typically to pre-populate forms.

  3. Discussing topics that could impact whether they’ll accept or decline POA, including checking if a Veteran:

     - Has an existing POA;

     - has an existing claim or decision review in process;

     - wants to move forward with available VSOs.

  4. Once all criteria is met, the VSOR will complete and submit VA Form 21-22.

     - One VSOR sets expectations by providing an advocacy agreement to the claimant that has explanations of roles and responsibilities.

  5. Many will submit VA Form 21-0966: Intent to File a Claim for Compensation and/or Pension, or Survivors Pension and/or DIC along with VA Form 21-22.

**What can impact the Veterans 21-22?**

- If a Veteran has a POA already on file VSORs may have additional tasks, including:

  - The Veteran has a POA with an attorney. VSORs do not want to overwrite an attorney's POA or interfere with fee agreements.

  - Renew POA if it was submitted longer than 4 years ago.

  - Updating POA if the organization on file is no longer accredited.

    - Example provided was Military Order of the Purple Heart is no longer accredited so they’re in process of updating POAs.

- There are instances where VSORs **decline** a Veteran’s POA request, including:

  - The Veteran has an active POA with an attorney. VSORs do not want to overwrite an attorney's POA or interfere with fee agreements.

    - >_“If a veteran comes in and says, I was working with a lawyer down in Florida and I'm in the middle of an appeal and I just want you to go in and see what's going on with my appeal, we can look at it and if we can see their file, that means that they're accredited with the VFW or the American Legion somehow, and we can see their file. But if they're working with a, like, a law firm or something like that, we can't even see their file. And we will not take power of attorney unless we have been, unless it's verified that they have essentially fired their power of attorney and they no longer have that in place. We're not gonna take power of attorney, even if the veteran wants us to, we're not gonna take power of attorney without having that done first. It can be harmful to the veteran if we were to do that because the current power of attorney may have a lot more information about their case that we would not be able to have, be privy to. And we don't wanna harm the veteran by doing something like that.“ P2_

    - >_“So then we'll have to have a discussion with you if you have a lawyer, you need to go back to the lawyer because those claims I do not touch because of course, the lawyer's getting paid to take care of your claim. So if they don't have a POA like that, then I'll fill one out and send it in, unless it's a lawyer.” P4_

  - The Veteran has an in progress claim or decision review.

    - Most VSORs were concerned that updating a Veterans POA would greatly delay the Veterans claim process by ‘putting them at the end of the line’.

    - One VSOR was concerned about ‘claim jumpers’ who come to their office ‘so they can get told what they want to hear.’

  - The Veteran is not in their supported area. Some VSORs can only support Veterans in their county or state, or who served in their state's National Guard.

    - >_“I've gotten several phone calls from folks in Virginia, North Carolina and Ohio asking if I could be their VSO, you know, and as a state employee I can only work with state residents.” P3_

  - The Veteran requests POA with an organization the representative is accredited with, but cannot accept POA with. More details provided below.

  - One VSOR would not accept POA if they cannot get a signature directly from the Veteran.

  - One VSOR mentioned declining POA during cases of non-Veterans attempting to file for the Veteran during a divorce.

- There was only one instance we heard of revoking POA, and it was due to claimants being non responsive or negative conduct. Revocation of POA was only completed if it didn’t impact the Veterans active claim or decision review.

**How do Veterans select which organization to put on the 21-22?**

- VSORs commented that Veterans don’t typically know or have a preference for which organization they’d like to request POA with. Only that they need help with VA benefits.

- When making recommendations on which organization the Veteran should select, half of VSOR participants recommended American Legion (AL) or Veterans of Foreign Wars (VFW) as they provide prompt responses and legal support.

  - Some VSORs were not allowed to provide opinions, and the Veteran had to select an organization unbiased from the VSOR.

  - Some VSORs have challenges with Veterans assuming they have to be a member of a VSO to request POA.

  - >_“Sometimes the veterans will come in and be like, well, I'm not a part of that club and I don't want to be a part of that club. You might want to say something along the lines, you don't have to be a member of the Legion or the VFW. You can pick any of these and not have to be part of it, that it won't affect it either way.” P4_

- For Veterans with a VA POA, so long as the POA is with an organization the representative can support, none asked the Veteran to change POA.

- _Note:_ More than half of participants had limitations on which organizations they could accept POA through, typically due to state regulations or limitations with Veteran support during appeals.

  - So while they are accredited with several organizations, it does not mean they can support Veterans with POA at those organizations. The three most common scenarios were:

    - I can only accept and support Veterans with POA through my state.

    - I can only accept and support Veterans with national organizations I am accredited with, but not my state.

    - I can support Veterans with any organization I’m accredited with, other than NACVSO.

**How do VSORs use technology to complete and submit the 21-22?**

- VSORs who used the same tools had similar uses and processes for POA.

|                                                                        |                                                           |                                                        |                |                                |
| ---------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------ | -------------- | ------------------------------ |
| **Tool**                                                               | **21-22 completion**                                      | **Signature**                                          | **Submission** | **Processing time**            |
| Share (1 VSOR)                                                         | Unknown                                                   | Digital signature using signature pad                  | AccessVA       | 24 hours                       |
| [Tyler Technologies](https://www.tylertech.com/) (VetraSpec) (5 VSORs) | Pre-fills PDF using CMS information. PDF is then editable | Digital signature using signature padPrint, sign, scan | AccessVAD2D    | AccessVA \~3 daysD2D \~15 mins |
| [VetPro](https://vetpro.us/) (2 VSORs)                                 | Unknown                                                   | Secure websiteIndividually generated links             | AccessVA       | 2 - 3 days                     |

- All VSORs had an option to accept paper forms, and would submit either through fax or AccessVA. This was typically for Veterans who couldn’t come in person, such as those incarcerated, out of state, or homebound.

- Some VSORs had to submit their POA through a regional or state review process prior to submitting to VA, but this was not the norm.

  - While this was not the norm, we did have a high number of director and supervisor level VSORs which could have skewed this result.

- Some VSORs voiced concern on using Tyler Technologies, due to the storage of signatures. These VSORs had recently switched to VetPro to avoid those security risks.

  - >_“When I first started, I was using VetraSpec, a good program. I was having some other issues, but they required me to use a document pad to sign on local. It was attached to my computer. The problem we had with that, that came out later is I was able to store signatures, which means I could essentially have them sign one thing, I can sign a whole bunch of things for 'em. I think that's a security issue. This way with VetPro, every document gets signed by the veteran, you know, and there's a secure method to make sure that they get that signature done.“ P6_

- One VSOR liked the POA confirmation email that Tyler Technologies provided.

**What happens if a non-Veteran has to sign on behalf of the Veteran?**

- For all VSORs, non-Veteran signatures on behalf of Veterans were rare, and they always attempted to get the Veterans signature or mark (typically an X) on the form first.

  - For those who captured an X, they’d mark down two witnesses in the margins of the form following patterns set by [VA Form 21-526EZ Application for Disability Compensation and Related Compensation Benefits](https://www.va.gov/find-forms/about-form-21-526ez/). There were requests to include witness signatures on VA Form 21-22.

  - >_“If you look at the VAs forms across the spectrum, the 527EZ, 534EZ, 526EZ, those allow for, if the veteran places the X, there's two signature blocks below that. Somebody witnessed X, the 21-22 don't have that. Don't you think it ought to have that? No, we have to write on the side of the form, print the person's name, write their address and then sign it. It looks stupid.” P8_

- If VSORs could not get a Veterans signature or mark on the form their next steps varied:

  - Some used [VA Form 21-0972 Alternate Signer Certification](https://www.va.gov/find-forms/about-form-21-0972/) to validate the signature of the non-Veteran signee;

  - two VSORs declined the POA due to lack of Veteran signature;

  - one VSOR requested a copy of the non-Veterans legal power of attorney to save in their CMS system for future reference, then accepted the signature.

  - >_“If a spouse comes in wanting to do stuff, I demand that they let me talk to the veteran. So I get approval from them. I can't just deal with everybody or anybody, you know.“ P6_

  - >_“My understanding of it is if someone has to, if someone has a legal power of attorney for that veteran, my understanding is the veteran still has to make some type of mark on it. And then the other person can sign it but they have to make some type of mark so that the VA knows it's them.“ P7_

**Are there any other pain points or confusion in the POA process?**

- Almost all VSORs stated that POA terminology caused the most confusion with Veterans, but they were easily able to explain that it’s a limited POA and only allows them VA benefits access.

  - >_“I make it clear that the VA cannot reach into your bank account. We as the power of attorney, we can't reach into your bank account, we can't make medical decisions, we can't do anything except help you do claims processing with the va. And we're to advise you the best we can.” P2_

  - >_“I always explain the first one first because that's the limited power of attorney. It's really the nuts and bolts of what they're authorizing me to do. I generally tell 'em that I can't sell their house or give away their cat. It's pretty limited.” P3_

- Some other points of confusion with Veterans mentioned were:

  - Veterans unaware of what fee agreements are and that they have one;

  - Veterans unaware they have POA on file;

  - Veterans unaware they needed a VSOR signature to submit the 21-22.

  - >_“We have on occasion had veterans who did get an attorney. We immediately stopped. I then asked one, I need to get a release of representation as well as their fee agreement and a couple of times they've been like a fee agreement. Well, what's that? I said, well, that's what she agreed to pay the attorney … If you're awarded any funds they get, you know, 23%, whatever it is, 16%, whatever you've agreed to in that fee agreement, they can come back and get a portion of what your retro pay could be. So we just need to make sure that that's not written in there and that, you know, if you're awarded 100% and it's back pay for two years, 100,000 isn't gonna go to, you know, \[attorney name] attorney and, and you're like, oh \*\*\*\* what just happened?” P1_

  - >_“They used to mail out blank POAs and people would fill 'em out and send them back. And what was happening was our admin staff was just faxing those in with those \[the Veterans] signatures … So we weren't really taking POA on all these people. So now they don't fax them in unless one of the VSOs, you know, already signed their name to it.” P3_

- One VSOR wanted notifications when representation had been requested but denied by the VSO, or when representation changed. As it causes disruptions in communications with the Veteran.

  - >_“A place for improvement with the POA. As far as notification, and we were actually just discussing this morning because one of the new people sent it in without their signature. And I understand they screwed up, they didn't do the POA correctly, but when the VA notifies, they notify the veteran and because we don't have POA, they don't notify us. So we have no idea that we didn't take POA and I think I understand why they're not mailing us all of that person's mail. But in the scope of an incomplete POA, it would be helpful if they notified the VSOs that they didn't do it complete.” P3_

- One VSOR had recently submitted a 21-22a that was declined, and was confused why, as they wanted to be the sole representative of the Veteran.

  - >_“But there's actually a 21-22A whereas appointment of individual as a claimant's representative. So that means usually I don't know if you're familiar with that as well, a veteran can appoint an individual me as an accredited service officer with the numerous different accreditations to represent that individual. I sent that into the state. The state denied it and said that we've never seen a 21-22 alpha. We can't process it. We don't know what this is.” P1_

- One VSOR had a pain point with local VSO outreach groups in their community. Who would fill out a POA, collect VSO membership fees, and never follow-up with the Veteran. All so they can ‘count ‘em on their list whenever they’re lobbying to Congress.’

  - >_“There are organizations that basically they put people in mobile vehicles that go around to different towns just for the purpose of collecting powers of attorney and fees for joining their, whatever you call it, their organization. And there were oftentimes veterans that would go and talk to them. They would say, I haven't gotten my claim, decided whether they were happy or not happy with the VSO or VSR. And they say, well, if you sign up with us and pay your dues, then we can get you a power of attorney and we can see everything that you have. And then they would leave town, they would not ever hear of the representative again and I would have to go in and not be able to see their stuff and I'd have to, they wouldn't do anything but sign a power of attorney and, and collect the dues for the organization. Basically what it meant is that they could count 'em on their list whenever they're lobbying to Congress.” P2_


### **ARM Shared Design Elements**

**Representative Status Widget**

- All VSORs had positive reactions to the widget, and saw it as an easy way to check if and who Veterans have POA with.

- Some VSORs wanted the widget to show the closest representative or office in the Veterans area next to the headquarters information.

- One VSOR wanted the widget to say ‘Your current VSO’ as the current wording references an individual, not an organization.

- One VSOR wanted the VSOs national website listed.

- >_“No, I think that's fantastic because sometimes I get veterans who, you know, they know they worked with a guy once, they don't know, you know, they don't know his organization, they don't remember his name. So I think having that information would be fantastic because one, maybe they really liked working with the guy and they just can't remember who he was or where he worked and they can always reach out. So you may have helped them reconnect to somebody that had helped them in the past. So I think this is fantastic.” P3_

- >_“Well, I know that's the one that's in DC since I would see if there is one that you could be, like right now I'm in \[state] and I live in, you know, I'm in \[county name] County. Is there possible to have the, whoever's accredited in that county where they live also pop up next to whatever they choose? Probably a lot of coding. But I, that's my suggestion is to see if the local accredited veteran service officer could pop up next to the, the, the national accreditation too, 'cause they're gonna be like, well, where do I go?” P4_

- >_“The word representative to me would indicate a single person, your current accredited representative here is an organization. Is there a way to distinguish that or is that the current term within the VA as accredited representative? When you talk about the VFW, American Legion, whatever.“ P6_

- >_“Well that actually, that is wonderful 'cause majority of the time, and I would say 98% of the time, even though you explain what the POA is and when you've done the 21-22 and who the POA is going to be, they forget about it. And heck, half of I've seen a good majority of 'em don't even, they don't remember signing the 21-22. So for them, for the veteran getting on and being able to see that would, you know, especially if they call us and we ask, you know, them to know and then that way we can, we can know how we can proceed also. So yeah, I think that is very beneficial for 'em or for us.“ P7_

**Representative Information Cards**

- Most VSORs had positive feedback on the information provided in the representative cards on both Find and Appoint a Representative tools.

- VSORs largest request was to have their cards organized by office, rather than individuals, and to show their office hours, phone number, email, and fax number. As well as a dedicated scheduling phone line.

  - [Good example of this is on the Michigan Veterans Affairs Agency website.](https://www.michigan.gov/mvaa/county-filter-search-locations#g=42.731940000000066%7C-84.55224999999996\&o=Distance%2CAscending)

- No VSORs had any reason they would not want to be listed.

- Only one VSOR wanted to mark a preferred contact method.

- One VSOR stated they never wanted to see websites, as they vary county to county, which can cause confusion.

- One VSOR wanted to include specialties around support with MST and PTSD.

- One VSOR had confusion on what ‘remote’ meant.

- One VSOR wanted to remove their organizations, as they can only accept POA through their state VSO. By showing their current list of all accreditations, which is more than their peers due to having worked in other states, they’re getting an unsustainable influx of representation requests.

  - They also had frustrations with the current FAR experience as Veterans were finding every representative in their office and emailing them causing frustration from the Veteran and confusion from the office.

- >_“I'm just saying I don't think would you know, if well, again, it goes back to the none of these organizations, even if I have all six of those, am I gonna do anything with? I'm only going to process it under \[state] Division of Veteran Affairs. So it doesn't do me any good.” P5_

- >_“I know that we're on find a VSO and we're, we're getting more and more people doing that to try and find us. The hard part for us is that it shows, I know that when people look into the VA and find us, it just shows them a list. So then they mail, e-mail all of us and say hey, we want to VSO and then they get frustrated when they don't get 6 responses within 24 hours.” P5_

- >_“I just don't think that's useful information for the veteran. And if it is, it's unfortunately, I think it's wrong, wrongfully useful to the veteran because then that's when people start asking for me specifically for all of their claims because I'm the most accredited in our office. Does that make sense? They see me as a person with the power and they want to work with that person. So I don't think it helps them or us because I can't, I can't use that information to make their claim any better and they can't use that information to get a better claim, if that makes sense.” P5_

- >_“I've learned over six years of working with veterans, too much information. It's just too much. If you keep it short and sweet to the point for 'em, they're more apt to follow through with things. If you get a, if you get a little bit too much, they just, it, it just goes off the rails and you're explaining the same thing three different ways between four different people to get the same answer to them … Honestly too much, and this is very simple in this too much was would be listing, say listing their website, the VSOs website … Because that could, you know, every VSO has has their own, at least in \[state], every service office has their own, most of 'em have their own website.“ P7_

- >_“Well, let's see. How should I answer that? It's remote like over the phone or is that in person? How do you consider that remote?” P8_


### **Find a Representative**

**FAR Informational Content**

- All participants missed the additional information dropdowns. Once expanded, no participants had any additional feedback.

- One VSOR interpreted that the user had to sign in prior to search due to the placement of the widget.

- >_“I would expect them to have to \[sign-in], but I wouldn't think they should have to specifically because older veterans would have a family member help them then find a VSO.” P5_

**FAR Filters**

- The organization filter had the only feedback, which included:

  - Concern if organizations are listed in a state where the organizations are not supported;

  - Concern of Veterans missing representatives if they search by an organization not in their state;

  - Wondering if the filter should even be included, as many Veterans do not have affiliations with organizations.

- >_“I think that telling them all the different organizations. It can be overwhelming because especially like the state of \[state] only uses the state of \[state] and I would imagine there's there's a dozen others in the state. The regional office has American Legion DAV, VFW, but like click the list again one more time, but like right there. I don't think any of those organizations would be operating in the state of \[state]. So to have them pop up first doesn't help.” P5_

**FAR Details Pages**

- All participants liked the flag feature, and wanted to be notified if their information was flagged.

  - One participant noted that they hoped it would speed up updating information, as one person in their office hadn’t been updated in months.

- One participant wanted the mention of the 21-22 to be replaced with ‘limited power of attorney’ and an explanation of what that means.

- >_“The veteran doesn't care if it's 21-22 or not, I don't think. I think we talk too much lingo more often than we need to. I think that the my only advice on this one would be again, what is that veteran saying give this VSO my power of attorney or don't give this VSO my power of attorney instead of saying they can accept a form 21-22. I don't think we that veteran cares and then he's got to learn what the form 21-22 is and that stuff. If it's allow this veteran to represent me or this VSO to represent me or don't allow this VSO to represent me would make more sense.” P5_


### **Appoint a Representative**

**Appoint a Representative concept**

- Since VSORs have existing digital systems that submit the 21-22 to VA they had a difficult time understanding the concept of Appoint a Representative without being able to see the representative tool. With that said, most feedback was positive with minimal concern on the overall flow and content.

- The largest concern VSORs had was the uncertainty of where the requests would go. With a preference that they be sent to their office email, so they were aware of the Veterans request.

- Some VSORs requested the ability to start the form from VBMS, rather than VA.gov.

- One VSOR was concerned about security, and preferred that only those with PIV access be able to review POA requests.

- One VSOR wanted to see the form as they went, so they could fix any mistakes real time, rather than reviewing at the end.

- >_“I'm veteran X, I'm sitting in my house in location Y and I start filling this out. Once I hit send, does this mean that it's going to go to like a national service queue? It's going to see that I am in Michigan filling this form out and then it's going to send it to the state level to then to ping a county where that individual lives. Or is it automatically going to go directly to the, to a county office or to an email pinging a, a service officer that hey, you've got a, a veteran that just filed a 21-22 … If it goes through the state here in Michigan, I will never see it.” P1_

- >_“I've used two different databases and the first database was like yours where it had the questions and then filled the form out at the very end. And for me, that was difficult to learn because I didn't see the finished product until the end. And I didn't see my mistakes until the VA kicked it back and I saw my mistakes. Whereas now I see the form and I see it filled out and I can fix it as we're going. But that's just a me thing.” P4_

- >_“I see that he is going to be talking with you guys next week. He doesn't really do claims, but he's accredited in my office. So if somebody randomly chooses him as a CVSO, he might not get the email until a week later and not see it. Most of these things, you know, I fill the thing out and send it directly to the VA. So we know it's done and, and accepted and submitted and it's not getting lost in the system.” P4_

- >_“​​Well, like the you guys had talked about digitizing the 21-22 and we were just wondering if there was a way to do that to where like especially on the VBMS side for us, if we most of these people, they want to meet with you before they do a 21-22. We were just wondering if what would be really helpful would be a button in VBMS where it says, you know, we've looked them up and they said, oh, we want POA. Is it OK if we request POA? And instead of filling out a form, all you really have to do anymore is you could click a button that says ask request. So kind of exactly what you're talking about, but backwards.” P5_

**Form landing page**

- No feedback on the landing page.

  - >_“I mean it’s a basic form … you’ve kept the process as basic as the form.” P3_

**1 of 4 Accredited representative information**

- Representative search

  - Almost all participants preferred searching by organization, so the Veteran had access to anyone in the office, but had concerns that the Veteran wouldn’t know organizations to search. So they were also okay with individual search.

  - One VSOR wanted to only show representatives in their state to users who have residency in their state.

  - One VSOR liked that the list was from OGC, so they know everyone is accredited with VA.

- Contact the accredited representative

  - No feedback on this step.

- Organization selection

  - Almost all VSORs needed a way to hide VSOs from organization selection, and assumed the VSOs would manage those settings.

  - One VSOR wanted more information that the Veteran does not need to be a member of the VSO to select the VSO on this step as it’s a common misconception.

- Replace your current accredited representative

  - No feedback on this step.

- >_“We wouldn't want the NACVSO selection to appear because we don't actually do POA under NACVSO because that requires a different submittal process that we don't use as affiliates. We go direct with everything. So we would only want the Office of Veterans Affairs for the state of \[state] to be that selection, which is probably a huge pain for you.“ P3_

- >_“You know, you have to ask \[my state VSO] when, when you're finally putting these things together because I'm not 100% sure. I'm definitely probably not the one to ask on that one if \[my state VSO] should be up there or not.”_ Would you expect them to make the rules around that? _“Yes. I do what they tell me to do.”_ P4

**2 of 4 Your information**

- No feedback on step 2.

**3 of 4 Accredited representative authorizations**

- Most VSORs had no feedback on the representative authorizations pages.

- One VSOR wanted content that informs Veterans that by saying ‘No’ to medical authorizations their form might be rejected.

  - >_“I would put a side note that yes needs to be checked or it's possible their 21-22 could be rejected if it's not checked. So it needs to be yes, they have to access all of the records … They gotta have all the access to be able to do the claims. It's part of the appeals process. So if they don't have full access, they're not, they're probably not going to accept it.” P4_

**4 of 4 Review**

- No feedback on step 4.

**Download a copy of your form**

- No feedback on the download page.

**Confirmation page**

- One VSOR wanted the content to clarify that the representative will confirm **or** deny their request.

- One VSOR wanted VA Form 21-0966: Intent to File a Claim for Compensation and/or Pension, or Survivors Pension and/or DIC at the end of the form if the Veteran did not have a claim or decision review currently in process.

- >_“If they have not started a claim and they are doing this form and then they got to find me and it's the end of the month, they might lose that month of effective date. So you would usually, if it's a brand new claim, I'm doing this form and an intent to file on the same day while I'm gathering the the evidence that they need to to finish the claim.” P4_


### **ARM Tool Adoption**

- All VSORs said they would use the Find and Appoint a Representative tools with Veterans who have VA.gov accounts, and are comfortable with technology, which ranged anywhere from 20 - 70% of their audience depending on the location.

- For Veterans who are less comfortable with technology or older, especially from the Vietnam or Korean War era, VSORs would prefer to continue completing the 21-22 process in person.

- >_“I like the idea of the 21-22 being available to veterans to have them sign remotely and be able to access their data much quicker than we could if we were sending it through the mail or faxing everything in or whatever. The idea of having the veterans fill out their own power of attorney online, I am okay with, as long as they're competent and feel adequate to be able to do that. If they're not then I don't want them doing it at all because I don't want 'em sending in something that is inaccurate to the VA and, and again essentially lock out their VSO from being able to help 'em.“ P2_

- >_“We struggle with that here a little bit. You know, we're pretty rural. We've got an older population. The younger vets are fantastic. They're all over it, you know, most of them have it before I mention it. I'd say probably at least 30 to 40% of our veterans here don't have va.gov. Some of them don't even have the ability, you know, whether it be a computer internet.“ P3_

- >_“So I would say yes, having a tool on there that says help me find representation or I need guidance on what I'm looking for would help.” P5_

- >_“I'll use it when I can. The area of the country I'm in right now, it's probably a 50 50 mix of veterans who don't care about the internet. 50% that do, you know, so to those were they care about and they want to use it, I, I certainly could point it to 'em. Other than that, I'm not gonna waste my breath on a Korean vet who doesn't care about the, doesn't have a computer.“ P6_

- >_“Like I said I short, simple to the point forum 'cause we're still dealing with a lot of veterans that are not very tech savvy. So if it’s simple and kinda step by step, for 'em so they can follow along. I know the VA gives instructions on how to fill out everything, but if they don't have that instruction, if it's too techy for 'em, they'll just quit on it.“ P7_


## **Additional Insights**<a id="additional-insights"></a>

### **VSOR Cross Accreditation**

**Why are VSORs accredited with multiple organizations?**

- VSORs wanted to be accredited with more organizations so they could quickly and easily access the Veterans files in VBMS.

  - >_“The more accreditations that I have, depending on who comes in front of me, it allows me more access to be able to see the different things with VBMS.” P4_

- VSORs accredited by a state VSO, typically had a list of organizations that their state allows or encourages them to become cross accredited with.

  - >_“None of my VSOs can get American Legion or DAV or American Legion or VFW here in \[state] anymore.” P5_

  - >_“Since I work in \[state], when I become accredited with the \[state] Department of Veteran Services, they encourage cross accreditation with the, our main ones, which is the AmVets and the VVA and the VFW and the DAV and the Legion.” P4_

**What was the process to become accredited with multiple organizations?**

- Representatives either pursued accreditation through each individual VSO;

- or acquired cross accreditation through their state or NACVSO.

  - Some state organizations were affiliated with national VSOs such as American Legion (AL), Disabled American Veterans (DAV), or Veterans of Foreign Wars (VFW) which allowed for quicker accreditation processes.

    - >_“So what was the process like to become accredited with all of those organizations? Pain in the \*\*\* just because there's the what is it? Was it … SF 21? There's like 3 or 4 forms per organization and then you're required to go to their training session. So for instance, American Legion, there's normally is up at \[city] for the state of \[state]. It's between three or four days of training. Once you get done, you get your certificate and your CEUs for OGC accreditation through the American Legion and then VFW has their own training, let's see here, DAV and so on and so forth.” P1_

    - >_“The state of \[state] has a different relationship with the VA. We are actually affiliates. So we have PIV cards, we have direct access to VBMS. We can go and pull-out files. So our process is we have to do the training through the NACVSO. We have to get signed off by them first.” P3_

- Most spoken to were recruited during the NACVSO conference and rely on NACVSOs training program to keep their Continuous Education Units (CEUs) up to date.

  - >_“OGC has worked with that organization (NACVSO) and said as long as you adhere to, I believe it's the 16 CEUs each year to maintain your accreditation and you have to have a yearly test to make sure your skill set is good. If an individual passes that, then they can maintain their accreditation. NACVSO has then gotten with those other organizations and they said, … we'll develop CEUs or whatever it was that they developed with those other veteran organizations to then utilize their accreditation. Because you went to a national organization, you spent a week in training, you got way more than 16 CEUs … So therefore NACVSO is now kind of the, as I said, the mothership for the accreditation portion to OGC.” P1_

**Are there any variations in work processes between organizations?**

- Day-to-day, no. VSORs typically had a main VSO, usually their state, and would only reach out to the other VSOs for CEUs training or legal support.

  - >_“Not really, no. If they need information from our agency we primarily work with them both the same. It doesn't, the name doesn't matter. It's  what they need that matters.” P2_

**What is VSORs understanding of their ‘primary’ organization?**

- VSORs who can support POA with multiple VSOs said their primary VSO was the one that offered the most support and expertise.

- VSORs who can only support POAs through their state said their main VSO was their state organization.

- One VSOR stated they do not have a primary VSO.

  - >_“I'd say the American Legion, just because I've gotten to know the director at the regional office. He's been doing it for I think since Jesus Christ wore combat boots … So he is extremely knowledgeable. And so some of the the more difficult cases or cases where I know that they're either have a judicial precedent based upon case law or the potential of, I don't know, different issues that just aren't typical, if you will, I'll call American Legion.” P1_

  - >_“I don't have one that is my primary.” P2_

  - >_“Well, the state of \[state] is the primary because that's where we submit everything through. All of our POAs are held by the state of \[state] due to the affiliation that we have with the VA.” P3_


### **VSOR Contact Information**

**What is VSORs preferred contact method?**

- Most VSORs preferred in-person interactions due to discussing complex and ‘sensitive matters’ or if their audience is not ‘tech savvy’.

  - >_“Definitely in person, I think in person is the best way to go. Only because we're discussing sensitive matters. And I personally have had, you know, behavioral help team meetings like this and it's, you really lose a lot of that personal connection and it seems really inhuman. And I just, I, I think most people like to communicate face-to-face, and you can really truly get more out of it, because I can see what's making you nervous, you know, when you shift in your seat, I can see that, you know, and, and maybe that's a subject we either don't go into in depth today, or maybe that's something that, you know, based on how you are reacting, maybe that's something we really need to push. You know, I've had a lot of guys come in that have never talked to behavioral health. They don't wanna, you know, sit on the couch and with a box of tissues, you know, but that old misconception of what behavioral health appointments looks like, you know, can be sometimes put to bed based on seeing those reactions in the body language. So I do prefer in person.” P3_

  - >_“During COVID we shut down for maybe two months and then we continued on cause most of my veterans are in the Vietnam era. So they are not tech savvy. So it's in person.” P4_

- Many VSORs had been driven to expand to more hybrid approaches during COVID. Including incorporation of Zoom and phone processes as well as online form submission and signatures. For some these new processes were so successful that they never went back.

  - These improvements also improved their ability to better support Veterans who were homebound, incarcerated, or homeless.

  - >_“And so in the COVID time period, I became very well adept at doing claims over the phone. And so now with the skills that I was able to have with that, I can do face-to-face, I can do via video camera, I can do however I need to to make sure that the veterans were taken care of … They were able to set up a video conference between the incarcerated veteran and, and myself in my office. So we were able to work through claims that way as well.” P2_

  - >_“It expanded our parameters in order to do our jobs when COVID hit and then we shut down publicly by county order. And they called me the night before, 'cause this county government loves veterans and asked how would it inhibit what we do. And I said, well, you're just taking out the public piece. I said we do claims through US mail, over the phone, e-mail, fax and or drop off. We had a drop off box outside that veterans or survivors could lead claim information. We would retrieve it with a course of masks and gloves and it was sitting in our conference room for 48 hours and then we were processed the paperwork. So we did that through the entire shutdown of this county and now, but prior to COVID, it was a rarity to do a claim over the phone. Today it's a rarity not to do one over the phone. So it is really enhanced how we do it.” P8_

**How do VSORs update their contact information with VA OGC?**

- VSOR methods of updating their information with VA OGC were inconsistent and varied person to person. Methods included:

  - Updating with OGC directly;

  - Updating with each VSO they’re accredited with;

  - Updating with their state;

  - Updating on VA Form 21-22;

  - Unaware that there was a need to update their information with VA OGC.

    - >_“When we turn in our forms for 21-22s, or something like that, then we will put the new updated information filling in on the form at that point … I don't specifically send anything to the VA whenever we have an update to our agency email … I don't know how that process would work.” P2_

    - >_“Well we don't have a supervisor here. Yeah. That was one of the people that retired and they haven't filled the slot yet … But once I got in here and started looking in our shared drives and everything else, I realized that the former supervisor was the one communicating with OGC. And she had letters that she wrote to update those addresses or to have people added, you know, accreditation wise or removed. So I kind of just started doing that for the director so that we stayed on top of it. So I do all the correspondence to OGC.” P3_

    - >_“I send it to \[state VSO], they're supposed to take care of most of the anytime anything gets changed. But I notify them, I notify the VA directly, and I also notify NACVSO. So between all three of them, it's supposed to get uploaded and corrected.” P4_

- No VSORs mentioned a certifying official when discussing updating their contact information with VA OGC.

- Two VSORs of director level updated information for their states documentation, but were unaware of the need to send the information to VA OGC.

  - >_“Here you notify the state VA office of any changes like that. In this office, that's who we notify. We don't notify the federal VA. I don't think that's really a requirement. If we change addresses, which we never have, then yes, I would notify the Bureau about that also” P8_

- One VSOR mentioned when changing information, keeping the same phone and email is critical in ensuring they do not lose contact with current supported Veterans.

  - >_“I know luckily every time we've moved, I have been very, very adamant to leave our phone number and our e-mail the same because that's the one thing that has not changed. So I don't lose anybody. That's always been very, very, very important to keep our phone number the same and we have kept it the same actually in four different moves.” P4_

- One VSOR mentioned challenges in updating information, acknowledging that OGC might not ‘have the the capability or manpower or the capacity to’ update information.

  - >_“I still have one person showing up on the OGC website that we've notified them two or three times and the person's no longer a VSO in the state of \[state] … My suspicion is they don't have the capability or the manpower or the capacity to do that. I think that's why we still have problems getting stuff off of their websites.” P5_


### **VSOR Recruitment Feedback**

- VSORs are solicited frequently for research, and trained extensively on email phishing. There are some tactics they recommended to increase adoption of future studies:

  - Avoid mass emails as they frequently go to spam.

  - Use direct VA employee emails, as mention of contractor company in VA email caused hesitation.

  - Attend more VSO conferences to increase awareness.


## **Recommendations**<a id="recommendations"></a>

### **POA Process**

ARF Team

- Consider notifying representatives in ARP if a Veterans POA changes.

- Consider including Veterans representative status with POA requests.

  - Consider providing direction to representatives on how to manage changing a Veterans POA, with a special focus on paid representation.

- Consider including Veterans claim status with POA requests if accepting will negatively impact the Veterans claim.

### **ARM Representative Status Widget**

- CAIA content update: Recommend changing ‘Your current accredited representative’ to ‘Your current VSO’ or ‘Your current accredited organization’.

- Future idea: Show the VSOR closest to the Veteran associated with the organization they have POA with in the widget.

### **ARM Representative Information Cards**

- Future idea: Group cards in find and appoint a representative by location, and provide office information for those locations.

- Future idea: Provide VSOR specialties around mental health conditions for Veterans (such as specialties in PTSD or MST).

### **Find a Representative**

ARM & ARF Teams

- ARM + ARF discussion needed: VSOs have regional and state limitations on who they can support. Are there any actions we want to take to address this concern, or do we leave it up to the representatives to manage those expectations?

- ARM + ARF discussion needed: Show ‘Flag incorrect information’ button for representatives who have an ARP account, and notify them if their information is flagged. This feature would require a data point that would allow FAR to know which representatives have ARP accounts.

### **Appoint a Representative**

ARM & ARF Teams

- CAIA content update: Provide information on what the VA power of attorney does and doesn’t do in the representative FAQ.

- CAIA content update: Provide information in appoint a representative and representative FAQ informing Veterans they do not need to be a VSO member or pay member due to request POA with a VSO.

- CAIA content update: Update copy on confirmation page to say ‘confirm or deny your request’ to provide clarity on next steps.

- ARM + ARF discussion needed: Only show organizations a VSOR can accept POA with within appoint a representative.

- ARM + ARF discussion needed: Consider notifying representatives when they lose POA in ARP.

- Future idea: Provide VSORs a way to fill out and submit the 21-22 in a way to grant them instant access to a Veterans files.

- Future idea: Provide common next step forms at the end of the 21-22/21-22a submission flow, such as Intent to File.

- Future idea: Consider incorporating VA Form 21-0972 into the non-Veteran claimant signing on behalf of the Veteran form flow.

### **VSOR Cross Accreditation**

ARF Team

- ‘Primary VSO’ is not a common concept for VSORs. If ARP is relying on VSORs knowing their primary VSO, consider providing content or automation to help VSORs find their primary VSO.

### **VSOR Contact Information** 

ARF Team

- Consider providing documentation on how VSORs can update their information within and outside of ARP.

  - If certifying officials are referenced in materials, provide information on how to find their certifying official and what their roles and responsibilities are.


## **Next Steps**<a id="next-steps"></a>

1. Meeting to ideate on next steps and priorities with the team.

2. Conduct user testing with Veterans on the Find a Representative experience with digital submit.


## **Appendix**<a id="appendix"></a>

- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2024-08-ARM-appointarep-crossaccreditedVSOR-usertest/research-plan.md)

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/research/2024-08-ARM-appointarep-crossaccreditedVSOR-usertest/conversation-guide.md)


### **Tools used for Synthesis**

- [EnjoyHQ](https://app.enjoyhq.com/sh/pj/23cd56b0-3bf6-403b-bc06-e59934d171ae)

- [Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722440729070/9bd6a61855614f0f6010ad4f95f4a7c79a0bb10d?sender=u36b374887f74c9a3de2d0750)


### **Pages and Applications Used**

- [Mobile prototype](https://www.figma.com/proto/bzbwObT9hiItve0q3cQX9c/Find-and-Appoint-a-Representative?page-id=5138%3A420728\&node-id=3717-80885\&viewport=5767%2C-727%2C0.25\&t=Fn7TVItVwho3bTQC-8\&scaling=min-zoom\&content-scaling=fixed\&starting-point-node-id=3717%3A80893\&hide-ui=1)

- [Desktop prototype](https://www.figma.com/proto/bzbwObT9hiItve0q3cQX9c/Find-and-Appoint-a-Representative?page-id=5138%3A420728\&node-id=3717-80753\&viewport=-1626%2C-663%2C0.25\&t=VntcwmSH5Src32pt-8\&scaling=min-zoom\&content-scaling=fixed\&starting-point-node-id=3717%3A80744\&hide-ui=1)


### **Other Supporting Documents Created**

- None


### **Secondary Research**

- [GitHub research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/research)


### **Terminology**

- [DD-214: Certificate of Release or Discharge from Active Duty](https://www.cem.va.gov/hmm/discharge_documents.asp)

- Fee Agreement

- [Fully Developed Claims program](https://www.va.gov/disability/how-to-file-claim/evidence-needed/fully-developed-claims/)

- [NVLSP: National Veterans Legal Services Program](https://www.nvlsp.org/)

- Release of Representation

- Training, Responsibility, Involvement, and Preparation of Claims (TRIPS) training

  - [Congressional Research Service. Veterans Accredited Representatives: Frequently Asked Questions. June 25, 2020](https://crsreports.congress.gov/product/pdf/R/R46428/4)

- [VA Form 21-0966: Intent to File a Claim for Compensation and/or Pension, or Survivors Pension and/or DIC](https://www.va.gov/find-forms/about-form-21-0966/)

- [VA Form 21-0972: Alternate Signer Certification](https://www.va.gov/find-forms/about-form-21-0972/)

- [VA Form 21-22](https://www.va.gov/find-forms/about-form-21-22/)

- [VA Form 4138: Statement in Support of Claim](https://www.va.gov/find-forms/about-form-21-4138/)

- [VA Form SF180: Request Pertaining to Military Records](https://www.va.gov/find-forms/about-form-sf180/)

- VBMS


## **Who we Talked To**

### **Recruitment Criteria**

Participants had to be VSORs who were accredited with multiple organizations, and engage with the 21-22 on a regular basis.


### **Meet our Participants**

- 8 Veterans Service Organization Representatives (VSORs)

- 7 States across 4 US regions

  - 5 Midwest

  - 1 Northeast

  - 1 Southeast

  - 1 West

  - 0 Southwest

- 4 Directors, 1 Manager, 3 Officers

- Titles included:

  - 3 (County) Veterans Service Officers (VSO)

  - 1 Director / Veterans Service Officer (VSO)

  - 1 Director of Veterans Affairs

  - 1 Executive Director / CVSO

  - 1  IT Director/Veterans Service Representative (VSR)

  - 1 Veterans Services Supervisor

- Years of experience

  - 2 with 0 - 4 years

  - 3 with 5 - 9 years

  - 3 with 10+ years

- Number of accreditations

  - 2 with 2 accreditations

    - Typically their state and NACVSO

  - 3 with 3 - 4 accreditations

    - Typically their state, NACVSO, and a mix of AL, DAV, or VFW

  - 3 with 6 accreditations

    - Typically their state, NACVSO, AL, DAV, VFW, +1 additional

- Primary location

  - 5 in-person

  - 2 hybrid

  - 1 remote
