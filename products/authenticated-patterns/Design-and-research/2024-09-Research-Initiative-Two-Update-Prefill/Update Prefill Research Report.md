# Research findings for AEDP Update Prefill Study

Authenticated Experience Design Patterns Team

Last updated by @christinerosesteiffer Thurs Dec 12th, 2024

Christine Rose Steiffer [[christine.steiffer@agile6.com](mailto:christine.steiffer@agile6.com) | [christine.steiffer@va.gov](mailto:christine.steiffer@va.gov)]

Kristen Faiferlick [[kristen.faiferlick@adhocteam.us](mailto:kristen.faiferlick@adhocteam.us) | [kristen.faiferlick@va.gov](mailto:kristen.faiferlick@va.gov)]

**Jump to:**
* [Methodology](#methodology)
* [Hypotheses and conclusions](#hypotheses-and-conclusions)
* [Key findings](#key-findings)
* [Additional Findings](#additional-findings)
* [Recommendations](#recommendations)
* [Next Steps](#next-steps)
* [Further research needed](#further-research-needed)
* [Appendix](#appendix)

## Research goals

The key goals of this study were to:

Primary
* Understand how users expect their prefilled data to be displayed across a given form.
* Understand user expectations around what the prefill alert should look like across different pages.
* Understand how users expect the edit process to work and where they expect their edits to get saved.
* Understand user expectations around why certain data can be edited within their profile and other data cannot.

Additional
* Understand user expectations of a confirmation step before submitting forms with prefilled data.
* Determine if the current unauthenticated prefill alert entices users to sign in.
* Learn more about user understanding of the source of their prefilled data.
* Determine the best way to display the last 4 digits of a user’s SSN.


## Research questions

*Goal 1: Understand how users expect their prefilled data to be displayed across a given form.*
* What do each of the 3 display options (“review style” versus gray or white card) communicate to users?
* Which of the 3 display options is most clear?
* Which option enables them to most easily edit their prefilled data?

*Goal 2: Understand user expectations around what the prefill alert should look like across different pages.*
* Does including a header in the alert or bolding where the updates will save impact perception or comprehension of the alert?
* Which pages within the form flow make the most sense to display this alert?

*Goal 3: Understand how users expect the edit process to work and where they expect their edits to get saved.*
* Where do they think the new information gets saved (profile versus form)?
* Would they ever want to choose where this information gets saved?
* Does the confirmation message make it clear where the updates have been saved?

*Goal 4: Understand users’ expectations around why certain data can be edited within their profile and other data cannot.*
* How do they feel about the ability to edit some data but not others?
* Do they expect to see a different style of prefill data depending on if it is editable or not?
* Does the explanation for why we limit edits to some user data increase user trust in VA?
* Do they understand the steps they’d need to take to update their uneditable data?

*Additional Research Questions*
* Do users expect to see uneditable prefill data and the Additional info component explaining why they can’t update this data on the review page?
* Does the prefill alert on unauthenticated intro form pages entice users to sign in?
* Do users understand the source of their prefilled data?
* What is the best way to display a prefilled Social Security number (SSN)?


## Methodology

This was a moderated usability study conducted remotely over Zoom. We used a Codespace prototype for enhanced interactivity that featured 3 different tasks across 3 different forms. At the end of the session, we also showed participants a side-by-side comparison of the specific variations in alerts and locked data display. 

We conducted 9 out of 12 scheduled sessions, with 1 user utilizing a screenreader and 3 others with visual difficulties using pinch to zoom to make the test more accessible to them. While we recruited for a 50/50 split on mobile/desktop users, we had 3 sessions conducted on a mobile phone, 3 on a desktop computer, and 3 on an iPad.  


## Hypotheses and conclusions


<table>
  <tr>
   <td>Hypothesis
   </td>
   <td>Conclusion
   </td>
   <td>Explanation
   </td>
   <td>Scope
   </td>
  </tr>
  <tr>
   <td>The gray and white card combination will be the preferred style of reviewing prefilled information.
   </td>
   <td>Somewhat true
   </td>
   <td>While the gray card was slightly preferred over the white one, the design system is moving away from using the gray card.We are recommending only using the white card.
   </td>
   <td>5/9 support the hypothesis
   </td>
  </tr>
  <tr>
   <td>Users will want to save updates made to their profile, but will appreciate the choice.
   </td>
   <td>Somewhat true
   </td>
   <td>Most users expected and wanted information to save to their profile, but some offered use cases in which this approach would be problematic.
   </td>
   <td>7/9 support the hypothesis, and 3/9 wanted the option to choose where to save
   </td>
  </tr>
  <tr>
   <td>Clarifying how to edit uneditable data will make users feel confident in knowing how to do so.
   </td>
   <td>Definitely true
   </td>
   <td>Most users were confident in how they would edit uneditable data, but some expressed frustration in needing to call.  
   </td>
   <td>7/9 support the hypothesis
   </td>
  </tr>
  <tr>
   <td>Users won’t want to see uneditable prefill data on the review page.
   </td>
   <td>Definitely false
   </td>
   <td>Most users want to see all of their information on the review page. 
   </td>
   <td>7/9 doesn't support the hypothesis
   </td>
  </tr>
  <tr>
   <td>The unauthenticated prefill alert will entice users to sign in to complete their form. 
   </td>
   <td>Definitely true
   </td>
   <td>This alert was well understood and commonly noticed by users.
   </td>
   <td>9/9 support the hypothesis
   </td>
  </tr>
</table>



## Key findings

Primary
1. There was a slight preference for the gray card over the white card, but it was clear that users preferred the card style over the review style for prefilled data pages.
2. Users appear to experience alert fatigue from repeated alerts across multiple form pages, and they tended to only read text that was bolded in alerts.
3. Most users wanted to see updates saved to their profile, but some could name instances where they may want to save to the form only. Many liked the option to choose between the two.
4. When reviewing how to update their uneditable data, a slight majority of participants preferred seeing the text string over the Additional info component. This is because they didn’t want to make an extra click to see the information behind the Additional info component.

Additional

5. Users preferred seeing all their information on the review screen, regardless of whether it could be edited or not. 
6. Most users read and understood the benefits explained in the unauthenticated prefill alert.
7. Most users understood that their data was coming from their VA profile, but there was still some confusion about the distinction between the VA profile and Login.gov or their ID.me accounts.
8. Users didn’t organically notice the difference between how the Social Security number was displayed between tasks. When reviewed side-by-side, there was a slight preference for the “Last 4 digits...” format.


## Details of findings


### Finding 1: There was a slight preference for the gray card over the white card, but it was clear that the card style was preferred over the review style for prefilled data pages.

**Labels: ‘AEDP: Update prefilled information’ ‘DSC: Card’ ‘DSP: Help users know how their information is updated’**

In our [previous research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-07-Research-Initiative-One-Prefill/Prefill%20Research%20Report%2009_2024.md), we tested gray and white card variations that presented prefilled data in a form. Both tested well, with users showing a slight preference for the gray card.

This round, we wanted to test them both again to see if we could get a clearer answer between the two styles, as well as testing the concept of styling them like the review page. 

We again saw a similar split among those who liked the gray card slightly more than the white, but overwhelmingly, users preferred to see the card style over the review style.

> "My eye went right to that shadowed box… my brain just sees it better." - P5

> "I think the gray is useful because you’re highlighting the bold print name, last four digits, date of birth, gender. So your eyes gravitate right to that. So you know exactly, you know what you’re looking at here. [It has a] kind of a clean, professional look, too.” - P6

> "I kind of like these three boxes because you specifically point out exactly what you want to edit and it’s in a box rather than on the previous application we did where it was just across from the header. Yeah, I think this, this really makes these three areas stand out for editing." - P6 for the white box


### Finding 2: Users appear to experience alert fatigue from repeated alerts across multiple form pages, and they tended to only read text that was bolded in alerts.

**Labels: ‘AEDP: Update prefilled information’ ‘DSC: Alert boxes ‘DSP: Help users know how their information is updated’**

The prefill alert is currently implemented in a variety of ways across VA.gov. We wanted to test different styles of the alert that included headers and bolded text to see which would catch the user’s attention best.

However, in general, participants tended to disregard alerts, especially after having seen them already. We saw the greatest numbers of participants read the alerts on the form intro pages, as well as on the edit prefilled data pages. 

> "Maybe it’s different, but it seems like the same alert that I just got on page 1, so I just disregarded it and my eyes went directly to the bold printing for mailing addresses. I didn’t look at that alert." - P6 on the Editable Prefilled Info page

> "It’s repetitive but it’s OK… It already said it on the first page, but in case you glanced over and… I guess it’s OK that you say it again." - P5

For those that did read the alerts, they usually either read the header or the bolded text while skipping the rest of the content. 

> “Task gray is my choice because it has some bold text in there whereas other ones don't have that full text down on the bottom.” -P9


### Finding 3: Most users wanted to see updates saved to their profile, but they could name instances where they may want to save to the form only and many liked the option to choose between the two.

**Labels: ‘AEDP: Update prefilled information’ ‘DSC: Form - Radio button’ ‘DSP: Help users know how their information is updated’**

Currently on VA.gov, some forms save updates made to prefilled information to the profile, some save to the form only, and some don’t inform users where changes will be saved. This has created an inconsistent experience across VA.gov and led to confusion for users around where their changes would actually save and what impact that might have in other areas of their account.

During this round of testing, each of the 3 tasks presented to users saved changes in a different way:
1. Saving changes to the form only
2. Saving changes to the form *and* their VA.gov profile
3. Allowing users to choose if they wanted save to the form only or also save changes to their VA.gov profile

7 out of 9 participants thought that their changes would always save to their profile, and 6 felt they wouldn’t need to be asked this question because they assumed it would always go to their profile. 

> "The information that’s stored is either correct or incorrect… If it’s incorrect, it needs to be changed and it should be changed now and not later. I think you’re making something that’s rather simple, complicated and it doesn’t need to be complicated.” - P3

However, many could come up with examples of when they might need to save an address to the form only and liked seeing the option to choose where to save as a result.

> "I may say ‘No’ [to saving my changes to the profile as well] because this is a temporary address that I only want… for the time being or that particular document to go to me overseas, but not my home." - P5


### Finding 4: When reviewing how to update their uneditable data, a slight majority of participants preferred seeing the text string, citing not wanting to make the extra click needed to see the information behind the additional info component.

**Labels: ‘AEDP: Update prefilled information’ ‘DSC: Additional info’ ‘DSP: Help users know how their information is updated’**

On pages with uneditable information, we need to provide an explanation of how to fix incorrect information. 

During our last round of research, we learned that Veterans appreciated the language that explained why we do not allow changes to certain data on VA.gov. 

In this round, we worked with CAIA to develop language that can be used across all forms to provide this information to make our pattern recommendation consistent. We also tested putting the text about how to change uneditable data behind an additional info component so see if users preferred one format over the other.

We found that users slightly preferred seeing the text displayed outside of the component, as they did not want to have an extra click in order to see that information. Those that preferred the component mentioned that very few people would need that information, so it should be hidden unless someone elects to see it. AT users expressed no significant opinion on the difference between these two options.  

> "But I don’t want to do another click to death hell, you know?" - P5

> “I would just prefer that just that one sentence [in the additional information component]... instead of showing it all to you… I don’t need to change anything so I wouldn’t even need to click on that.” - P7

> "I’ve seen in my ‘mom test’... she’s not going to know that you can hit the caret and expand it out. She’s not going to know that additional detail and I’m going to get a phone call [from her, asking for help]." - P11


## Additional Findings

### Finding 5: Users preferred seeing all their information on the review screen, regardless of whether it could be edited or not.

**Label:‘DSP: Help users to check answers’**

Across the current VA.gov ecosystem, there are two ways the review screen is shown:
1. With only editable data shown
2. With both uneditable and editable data shown

We wanted to understand if users expected to see their uneditable information on a review page. We tested with a new review page styling, which another OCTO team has been working on and will have in production soon.

Users told us they preferred to see the full set of data available to them, even if some of it is not editable. Because users can sometimes take a long time from when they see the first form page with uneditable profile data and the last review page that has that same data, we need to inform users on the review page how to change that information if it is incorrect. 

> “The name and the date of birth aren’t listed on the summary page, and it should be part of the whole thing. I like that idea of just having everything on the summary page.” - P6

> “Yeah, I guess in hindsight I would want to have one final look to make sure that everything was correct as far as my name, address and the contact information.” - P7


### Finding 6: Most users read and understand the benefits explained in the unauthenticated prefill alert.

**Labels: ‘DSC: Form - Prefill’ ‘DSP: Help users know when their info is prefilled’ ‘DSC: Alert - Sign-In’**

During this round of testing, we wanted to test the variation of the prefill alert shown on the unauthenticated intro page of forms that allow users to complete them without signing in first. We wanted to see if users understood the benefits of signing in to complete the form and if they would sign in after reading the alert. 

We found that most users (5 of 9) noticed the alert unprompted and understood the contents describing the benefits of signing in. When asked about the benefits of signing in, 3 of 9 said that the main benefit would be saving the form and coming back later. However, 3 specifically mentioned the prefill feature as a desired benefit to signing in. All users said they would sign in to complete the form.

> “This is what you could do, right? You can go through this and sign in as a guest, or login. So we can save your information. We can pre-populate it. We can help you.” - P11

> “Also, it's gonna have all your personal information prefilled into the form as well, right.” - P11

> “Well, I believe if you sign in and it knows your data so you don't have to answer questions that they may already know about you, such as discharge date and you know when you came into service and they'll be qualified.” - P9


### Finding 7: Most users understood that their data was coming from their VA profile, but there was still some confusion with Login.gov or their ID.me accounts.

**Labels: ‘PRDT: Login.gov’ ‘PRDT: Single-Sign-On (SSO)’ ‘DSP: Help users to sign in’**

Our [previous study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-07-Research-Initiative-One-Prefill/Prefill%20Research%20Report%2009_2024.md) showed significant confusion with where prefilled data comes from, with a sizable minority of users conflating their VA.gov accounts with either Login.gov, ID.me, or MyHealtheVet. 

In this study, 5 of 9 users immediately seemed to understand that data was coming from their VA.gov profile, although the terms they used to describe this concept varied.

While only 1 participant this round thought their data came from Login.gov or ID.me, they believed similarly to participants from last round that changes made on VA.gov would update their authentication application as well. 

> "I would assume it came from the fact that I signed in and the software knows who I am." - P3

> "It somehow knew my personal information for me logging in if I use MyHealtheVet to get in. So MyHealtheVet has this information, and I guess I’m fine with that.” - P10

> "[The information] came from the information input to the VA. It’s shared across the VA website. I mean, they have the information." - P9


### Finding 8: While users didn’t organically notice the difference between how the Social Security number was displayed between tasks, when reviewed side-by-side, there was a slight preference for the “Last 4 digits..” format.

**Labels: ‘DSP: Social security number or VA file number’ ‘DSC: Labels’**

When looking for guidance on the best way to display SSNs, our team noticed a gap in the guidance on both the VADS and USWDS recommendations. While they both share similar recommendations for how to have users input SSNs, neither provide guidance on the best way to display prefilled SSN within their respective patterns. 

We also learned from CAIA that, unless coded properly, oftentimes screenreaders will read out the circles and dashes used when concealing the start of the SSN. The best practice for accessibility standards is for screenreaders to say, “Last 4 digits of Social Security number: 1234”. 

With that in mind, we tested two variations of displaying the SSN: 
1. A phrasing commonly found across VA.gov, in which the label is “Social Security number” and the data is displayed as five masked digits followed by the final 4 digits
2. The phrasing “Last 4 digits of Social Security number” followed by the last 4 digits.

While no user commented on the style difference in SSN during the tasks themselves, during the final comparison, we saw a slight preference for the second style, which matches screenreader best practice.

> “I like the last four digits better because everywhere I go to the VA, [they’re asking] what's your last four?” - P6

> “I just like the last four because that's what they go by. And I know that a Social Security has three dots and a whatever. That doesn't help me.” - P5


## Recommendations

Primary
1. Utilize the white card to display both uneditable and editable prefilled information.
2. Remove the prefill alert from pages with editable data in white cards.
3. Recommend changes save to profile in most cases, but provide an alternative UI for teams that want to allow the choice for changes to save only to the form.
    a. On forms that save changes to profile, display a simplified alert with a clear header indicating the changes will save to both the form and their profile.
    b. On forms that allow the user to choose where changes will save, display the question with a radio button under the card and do not display an alert.
4. Display instructions to update editable information as a text string.

Additional

5. Include both editable and uneditable information on the review page, along with an additional information component that, when expanded, explains why certain information is not editable on VA.gov.
6. Maintain the current unauthenticated intro page alert as-is and include it in our recommendations in the Prefill pattern.
7. Help solidify Veteran understanding of what their profile contains, and further disambiguate the various authentication platforms from VA.gov profile information. 
8. Update guidance for SSN field text to display as ‘Last 4 digits of Social Security number’.


## Next steps
- [ ] Update VADS with the new Update Prefill pattern guidance
- [ ] Update the Prefill pattern with latest guidance
- [ ] Update the Social Security number pattern with the latest guidance
- [ ] Present Update Prefill & Social Security number findings to USWDS for potential inclusion in their design system
- [ ] Send additional feedback to the Profile and Veteran Facing Forms teams for their awareness


## Further research needed

One additional use case that emerged from our collaboration with other teams is one where the user’s profile has incomplete data and the cards showing prefilled data need to indicate that an update is required.

We are working through this issue in our next sprint (ticket [#252](https://github.com/orgs/department-of-veterans-affairs/projects/1314/views/4?sliceBy%5Bvalue%5D=Sprint+14&pane=issue&itemId=89547403&issue=department-of-veterans-affairs%7Ctmf-auth-exp-design-patterns%7C252)) and will update the guidance to include our recommendations for this use case. 

## Appendix

### Important research links

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-09-Research-Initiative-Two-Update-Prefill/Update%20Prefill%20Research%20Plan.md) 

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-09-Research-Initiative-Two-Update-Prefill/Update%20Prefill%20Research%20Conversation%20Guide.md)

[EnjoyHQ Project](https://app.enjoyhq.com/projects/pdMxq2PRp/inbox/documents?documentId=6f7bfb6e-35d8-413b-a46c-2e7c0b9aa4f5&highlightId=&page=0&query=&sortBy=original_created_at&stats=eyJ0eXBlIjoiIiwicHJvcGVydHkiOiIiLCJuZXN0ZWRQcm9wZXJ0eSI6IiIsImJyZWFrZG93biI6IiIsImNoYXJ0IjoiIiwic2l6ZSI6IjEwIiwic2VyaWVzIjpudWxsLCJyZXBvcnRJZCI6bnVsbH0%253D&statsEnabled=false)

[Mural Synthesis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1730481895805/5231cd0d11ef78f239b4d6d548c99d0b4f73b277)

[Prototype](https://noxious-monster-gjxjrxqrrgfqvw-3001.app.github.dev/mock-form-ae-design-patterns/2) (This link may not work - please tag Adam or Belle or if you need to review this - they can get it spun up and working for you)

[Figma file](https://www.figma.com/design/1z3bAkQl4uR1IvAxmtyqZi/AE-Design-Patterns---Update-Prefill?node-id=3-127&t=o7FVkUxnrShwWaG1-1) 


### Secondary research

[Prefill research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/authenticated-patterns/Design-and-research/2024-07-Research-Initiative-One-Prefill) 

[Previous Update Prefill research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/2024-09-Research-Initiative-Two-Update-Prefill/Previous%20Update%20Prefill%20Research%20Synthesis.md) 


### Who we talked to

We talked to **9 participants**

Audience segment:
* Veterans: 9

Gender:
* Male: 8
* Female: 1
* Unknown: 0 

Devices used during study:
* Desktop: 3
* Tablet: 3
* Smart phone: 3
* Assistive Technology: 2

Age:
* 25-34: 0
* 35-44: 0
* 45-54: 1
* 55-64: 3
* 65+: 4
* Unknown: 1  

Education:
* High school degree or equivalent: 1 
* Some college (no degree): 1  
* Associate's degree, trade certificate or vocational training: 0
* Bachelor's degree: 4 
* Master's degree: 2
* Doctorate degree: 0
* Unknown: 1 

Geographic location:
* Urban: 0
* Rural: 0
* Unknown: 9

Race:
* White: 2 
* Black: 1 
* Hispanic: 
* Biracial: 2 
* Asian: 1 
* Native: 1 
* Unknown: 2

Assistive Technology (AT):
* AT beginner: 0
* AT advanced user: 4
* Desktop screen reader: 1
* Mobile screen reader: 0
* Magnification/Zoom: 2
* Speech Input Technology like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0

![Equality-checker-for-Update-Prefill](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Design-and-research/Screenshots/Equality%20Tracker%20for%20Update%20Prefill%20Study.png)
[VA-recruitment-checker](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?gid=1312574022#gid=1312574022)
