# Inclusive Recruitment Strategies

## Table of Contents
- [5 participants are not enough](#user-content-5-Participants-Are-Not-Enough)
- [Maximum variation sampling](#user-content-Maximum-Variation-Sampling-mvs)
- [Lean MVS strategy](#user-content-Lean-MVS-Strategy)
- [Deviant case (outlier) sampling](#user-content-Deviant-Case-Sampling)
- [Critical case sampling](#user-content-Critical-Case-Sampling)
- [Key informant sampling](#user-content-Key-informant-sampling)

<br aria-hidden="true"/>

## 5 Participants Are Not Enough
For most VA services, we recommend not referencing the Nielsen Norman article [“Why you only need to test with 5 users”](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/) as a reason to test with only 5 users before launch. 

### 1. The NN group article recommends multiple, lean studies.
One study with only 5 participants that introduces new design changes will not be able to validate the future performance of those changes. 

> “After creating the new design, you need to test again… there is no guarantee that the new design does in fact fix the problems. A second test will discover whether the fixes worked or whether they didn’t. The ultimate user experience is improved much more by 3 studies with 5 users each than by a single monster study with 15 users.” - NN Group

### 2. Veterans are not a homogenous set of users. 
[According to the Voices of the Veteran study, Veterans are a highly diverse group with many unique needs](https://digital.gov/2016/09/29/voices-of-veterans-introducing-personas-to-better-understand-our-customers/). We shouldn't limit the scope of our services to a specific group of people amongst Veterans.

> “You need to test additional users when a website has several highly distinct groups of users. The formula only holds for comparable users who will be using the site in fairly similar ways.” - NN Group

### 3. The NN group article is outdated and does not discuss device or user diversity in detail. 
The article was written on March 18, 2000. That’s two decades before testing on multiple devices, AT, and for inclusion was the norm. An update was released on June 03, 2021, but it is still a decade old. For context, the concept of responsive web design was introduced in 2010 by Ethan Marcotte. We now know that behavior on mobile and desktop can significantly vary, so findings for one cannot be universally applicable for the other.

> “If, however, you are simply attempting to expose as many usability problems as possible in the shortest amount of time, then **test at least four to five participants of each user or audience cell**.” - Handbook of Usability Testing

## How many participants should I recruit then?
How many users you recruit depends on a number of different factors including, but not limited to:

- The degree of confidence in the results that you require
- The number of available resources to set up and conduct the test
- The availability of the type of participants you require
- The duration of the test session

That being said, **a good rule of thumb is to recruit 4-6 participants users per user group**, or until the point you stop hearing new responses (**saturation**). For example, since novice screen reader users are a separate group from advanced screen reader users, a researcher should aim to recruit 4 of each in an assistive tech study.

For more, read page 125 of [Dana Chisnell's Handbook of Usability Testing](https://www.wiley.com/en-au/Handbook+of+Usability+Testing:+How+to+Plan,+Design,+and+Conduct+Effective+Tests,+2nd+Edition-p-9780470185483).

<br aria-hidden="true"/>

## Maximum Variation Sampling (MVS)
Purposefully selecting Veterans with a wide range of social identity categories (like race or disability) will enable your findings to include diversity of needs, behaviors, and patterns.

Try to achieve the following proportions (based on VA statistics) in the participants in your study or across multiple studies:
- [50% aged 55-64+](https://www.va.gov/VETDATA/docs/SurveysAndStudies/VETPOP.pdf)
- [50% with an identified cognitive disability](https://www.census.gov/content/dam/Census/library/working-papers/2016/demo/Holder-2016-01.pdf)
- [50% primarily mobile users](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6125614/#:~:text=The%20rate%20of%20smartphone%20ownership,low%20levels%20of%20current%20engagement.)
- [30% people of color](https://www.va.gov/HEALTHEQUITY/Race_Ethnicity.asp)
- [25% in a rural area](https://www.ruralhealth.va.gov/aboutus/ruralvets.asp) (anecdotally [quoted at 45% by David Shulkin)](https://ldi.upenn.edu/news/david-shulkin-looks-back-his-tenure-veterans-affairs-secretary)
- [25% without a degree](https://www.luminafoundation.org/wp-content/uploads/2019/10/veterans-without-degrees.pdf)
- [17% with immigrant origins](https://www.google.com/url?q=https://www.migrationpolicy.org/article/immigrant-veterans-united-states-2018&sa=D&source=editors&ust=1625685989316000&usg=AOvVaw3BUzLAZ-kcn0HyefpbWihq)
- [10% women](https://www.womenshealth.va.gov/womenshealth/latestinformation/facts.asp#:~:text=Women%20Veterans%20Health%20Care,-Facts%20and%20Statistics&text=The%20current%20projected%20percentage%20of,years%20for%20their%20male%20counterparts.)

You might want to also include a participant from some of the following underserved communities:
- Native American Veterans, who have the [highest per-capita involvement of any population to serve in the U.S. military](https://www.nicoa.org/american-indian-veterans-have-highest-record-of-military-service/#:~:text=American%20Indians%20and%20Alaska%20Natives,conflict%20for%20over%20200%20years.&text=Nearly%2020%20percent%20of%20American,all%20other%20servicemembers%20were%20women).
- Veterans in the LGTBQ+ community, given past direction from the VA secretary for a review of [VA policies to ensure that transgender Veterans and employees do not face discrimination](https://blogs.va.gov/VAntage/85152/secretary-orders-review-vas-transgender-policies/) on the basis of their gender identity and expression.
- Veterans with other than honorable discharge.
- Immigrant Veterans or Veterans from immigrant families.
- Veterans living abroad.
- Non-English speakers.

We also recommend testing with some Veterans who use the following assistive technologies (ideally several from each group in your study or across iterative studies):
- Screen reader (mobile and desktop, beginner and advanced)
- Magnification 
- Voice command/speech recognition apps 

If relevant to your study, you may also want to include
- Family members of Veterans
- Caregivers of Veterans
- Veteran Service Officers (VSOs)

When planning your study, to figure out **how many people from various categories to recruit**, use the [VA recruitment checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/accessibility/research/RecruitmentCheckerSpreadsheet.xlsx). Enter the total number of people you plan to recruit, and the tool suggests target numbers for the recruitment criteria in your research plan.

You will need to download your own copy of the [VA recruitment checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/accessibility/research/RecruitmentCheckerSpreadsheet.xlsx) (an Excel spreadsheet) and use the tool locally on your own computer.

After your study, use the [VA recruitment checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/accessibility/research/RecruitmentCheckerSpreadsheet.xlsx) to tally and **share how many participants you talked to from each of the underserved groups**. Take a screenshot of the resulting table and use Github Copilot to generate an accessible version for your research findings report. 

<img width="600" alt="Screen Shot of the VA recruitment checker spreadsheet filled out for a study with 11 research participants that shows the representation of each underserved group" src="https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/refs/heads/master/teams/digital-experience/accessibility/images/recruitment-checker.png">

> Example: VA recruitment checker from a study with 11 Veteran participants, 6 of whom used assistive tech. 

<br aria-hidden="true"/>

## Lean MVS Strategy
In most cases, you will be unable to achieve maximum variation in just one study let alone recruit enough participants to begin with due to too many variables to consider during recruitment.

A lean MVS strategy involves setting up multiple cohorts that isolate key variables. This will make it easier to find participants while still maintaining a diversity of age, gender, education, location, and more. 

The VA recruitment checker should be used to keep track of which underserved communities have been included in research across several cohorts; and to help determine what variables future cohorts should have.

### Use lean MVS strategy when you’re:
- Unable to recruit a high volume of participants. 
- Experiencing a large volume of no shows.
- Looking to iterate on findings or need to validate new changes in a design throughout a study.

<br aria-hidden="true"/>

## Deviant Case Sampling
Deviant case sampling involves investigating cases that highlight notable outcomes, failures, or successes to unveil critical reasons for failure and future best practices.

### Use deviant case sampling when:
- Your product has a large amount of failed submissions or drop offs. Purposefully recruiting folks who have failed to use your product and comparing them against successful cases can help glean findings from the differences in behavior, environment, goals, and privilege between them.

<br aria-hidden="true"/>

## Critical Case Sampling
Critical case sampling is useful in exploratory qualitative research, research with limited resources, as well as research where a single case (or small number of cases) can be decisive in explaining the phenomenon of interest.

### Use critical case sampling when:
- You don’t have the resources to test with many participants. Recruiting a smaller number of Veterans who make up the most complex cases will likely cover less complex cases in your study. For example, testing with one low vision Veteran who uses browser magnification tools and a screen reader could cover the needs of older age groups, screen reader users, mobile users (reflow), and more.

For more, watch [Veronica Lewis’ talk at i24: Why Everyone Should Design For Chiari Malformation](https://www.youtube.com/watch?v=IEnmA4NPjP4) where she explains how designing for her complex condition can cover many other types of disabilities.

<br aria-hidden="true"/>

## Key Informant Sampling
Key informant sampling involves recruiting SMEs or people with great knowledge and/or influence who can shed light on complicated or delicate issues. 

### Use key informant sampling when:
- Your product touches complex or delicate subjects like health, trauma, identity,  finance, or accessibility. Let experts review your research first before you conduct a study to avoid compromising the health and safety of our Veterans.
- You need more evidence or support for research findings. Having experts confirm or deny your hypothesis can help increase the credibility and validity of your findings (also known as practitioner triangulation).
- You don’t know where to start. Reaching out to an expert can accelerate your understanding of the product and its users.

### Pairing with Snowball Sampling
Snowball sampling is where recruited participants help recruit new participants for a study. Pairing this with key informant sampling, can be a great way of discovering and obtaining access to more experts.

Use snowball sampling when working with VSOs or VA employees. At the end of your study:
- Ask your key informant if there’s anyone else they know that they would recommend you to talk to.
- Ask if they can introduce you to them or if you can CC them on an email for credibility on contact.
- Be sure to thank them for their time.

> Case study: During PTSD discovery research, the benefits team was able to gather interviews with VSOs across the country using snowball sampling. This led to being introduced to a specialist on MST which gleaned key insights on the subject.
