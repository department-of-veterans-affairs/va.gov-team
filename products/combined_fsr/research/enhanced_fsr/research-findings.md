# Enhanced Financial Status Report (VA Form 5655) Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Enhanced Financial Status Report, Debt Resolution Team**

Date: 06/01/2023

**Jump to:**

[Hypotheses and conclusions](#hypotheses-and-conclusions)

[Key findings](#key-findings)

[Recommendations](#recommendations)

[Who we talked to](#who-we-talked-to)

[Further research needed](#further-research-needed)

<br>

## Research Goals

There are multiple resolution pathways a Veteran can select when resolving their benefit debt and now copay payments, including: requesting an extended payment plan, submitting a compromise offer, or asking for a waiver. All of these options require the submission of a Financial Status Report (VA Form 5655), which captures a monthly snapshot of the Veteran's household income and expenses. Veterans often struggle to include all the information needed to accurately represent their financial situation, including duplicating information.

The Enhanced FSR addresses issues that were mainly found during the last usability study and since the initial VBA launch on November 16, 2021 include the following:

-   Switching from card format to a more minimalist and easy to understand format when presenting debt/copay bills to users.  
    -   [Select debt/copay: after | before](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_fsr/research/enhanced_fsr/images/debt-cards-update.png?raw=true)
    
-   Allow Veterans to update phone number and address in addition to mailing address.  
    -   [Contact info: after | before](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_fsr/research/enhanced_fsr/images/contact-info-update.png?raw=true)
    
-   Improvements were made to list loops as the previous usability study showcased how Veterans had difficulty utilizing the list loop when it was presented as a dropdown. The updates also address accessibility issues that the dropdown version of the list loop had. List loops appear when entering employment and other income for themselves and their spouse, dependents, household assets, household expenses.  
      
    -   [Employment: after | before](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_fsr/research/enhanced_fsr/images/job-listloops-update.png?raw=true)
    
    -   [Dependents: after | before](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_fsr/research/enhanced_fsr/images/dependents-update.png?raw=true)
    
-   Ensure resolution options are easier for Veterans to understand.  
	-   [Resolution options: after | before](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_fsr/research/enhanced_fsr/images/resolution-updates.png?raw=true)

Previous Research:  [Financial Status Report MVP Usability Test Readout - March 2021](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Financial-Status-Report/research/mar-2021/readout.md) 

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Financial-Status-Report/FSR-Product-Outline.md)

### OCTO Objectives 

This research supports these main [OCTO objectives and goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):

-   Veterans can manage their health services online
    
-   Veterans and their families can find a single, authoritative source of information
    
-   Logged-in users have a personalized experience, with relevant and time-saving features
    

This research supports increasing these measures:

-   Usage of digital, self-service tools
    
-   Number of VA.gov users as a function of total Veteran population
    

This research supports decreasing these measures:

-   Call center volume, wait time, and time to resolution

### Veteran Journey
Where does your product fit into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)?
Are there moments that matter? 

Debt can happen at any stage in [the Veteran’s journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) after the ‘Getting out’ stage. However, certain types of debt, such as Post-9/11 GI Bill debt, is more likely to occur at the ‘Finding something to do’ stage.

Other key moments this research touches in the Veteran journey are:

-   Attending to health needs
    
-   Taking care of myself
    
-   Managing my declining health

## Research Goals	
What are you trying to learn from this research? 

*Pro tip: Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.* 

- **Confirm that enhanced FSR updates are easy to use:**
	-   Are Veterans able to easily edit their contact information on FSR?

	-   Are Veterans able to easily select a debt/copay bill?

	-   Are Veterans able to update their VA Benefits information?
    
	-   Do Veterans understand the resolution options?
    
	-   **Is the [new list & loop](https://app.zenhub.com/workspaces/vsa---debt-607736a6c8b7e2001084e3ab/issues/department-of-veterans-affairs/va.gov-team/25881) design easy for Veterans to utilize?**
    
		##### Definition: List loops as we are defining them:

		The selection process by which a Veteran selects sub-categories of an overall category and sees screens that reflect their selection.

### Secondary research goals:

-   Understand Veterans subjective experience with the form and the amount of effort (satisfaction)

-   Veterans feel confident and comfortable with the form (subjective experience)


## Research Questions


*Consider bucketing research questions under research goals. For each question, think about:*
- *What will I do with what I learn from this question?*
- *Does this question serve the goals of my study?*
- *Do not write out all questions you plan to ask participants -- that should go in the [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)*

1.  Do Veterans know what this form is for – do they understand it is for benefits overpayment and medical copays?  (comprehension)
    
2.  Do Veterans understand each resolution option? (comprehension)
    
3.  What do Veterans expect to happen after they submit/complete their request? (comprehension)
    	-   What communications do Veterans expect to receive about their request?

4.  Do Veterans understand what assets and expenses to include in each section? (comprehension)
    	-   Does clarifying content in the “Real Estate” and “Vehicle” section help Veterans understand what kind of property and vehicles to include?
    
5.  How understandable is the new list loop format, UI, and UX? (usability)
    	-   How learnable is it?
    
	-   What do Veterans think of the options (presented as checkmarks) on the new list loop?
    
	-   Are Veterans able to add custom items using the “Add additional …” action link?
    
6.  How understandable are other non-list loop specific changes (contact info, resolution options)? (usability)

7.  How do Veterans feel about the amount of effort this form requires? (satisfaction)
    
	-   Are Veterans overwhelmed by the amount of pages on this form?

## Methodology 

We conducted 75-minute to 90 minute long remote moderated research sessions via Zoom on  **May 17-24, 2023**. Participants were asked to sign in to their MyVA accounts and fill out the enhanced [Financial Status Report](https://staging.va.gov/manage-va-debt/request-debt-help-form-5655/introduction) on VA.gov after their accounts had been whitelisted. One user filled out the form on staging after the moderator gave remote access and several filled out the form or were shown the form on [UXPin](https://preview.uxpin.com/f43733391f52c409c4d3152e9a4b101a392e29df#/pages/161460690/simulate/sitemap).


## Hypotheses and Conclusions

*Primary Hypothesis*

Veterans will be able to easily understand and fill out the form given the new list & loop pattern, be able to edit their contact information, view and edit their VA benefits, and easily view and understand the resolution options. 

*Secondary Hypothesis*

The enhanced FSR format and language will be easy to digest, and most will be able to fill out the form independently (accessibility). 


_("Maybe True", “Likely True”, “Definitely True”, “Likely False”, “Definitely False” or “Not enough information”) Why?_

## Key Findings

_The 5-10 top findings from your study should be listed here. Write your findings so that if someone reads only these bullets they can leave feeling they got useful information and the study was worthwhile. Examples might be "Most participants used the Search field to find the form, and searched for the term 'veteran health'" or "Most participants struggled with the secondary caregiver section on the form"._

_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#key-findings)_

1. Finding one

2. Finding two

3. Finding three

4. Finding four

5. Finding five

6. Finding six

7. Finding seven


## Details of Findings 

_For each finding, list details with supporting quotes and images when possible. Please **add relevant keywords/labels to your findings** selected from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc). Adding keywords/labels to your findings will help others find research relevant to their work._


_To add images: ![text](link - add image to github folder and link here with .png)_


**Finding 1**

Labels: label 1, label 2 

_List all labels that apply to this finding from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc)._

Brief description

> _Supporting data: Quote here_

> _Supporting data: Quote here_

## Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._


## Recommendations


* Add more "additional information" sections. When a participant was unsure about a question, they looked for this component. 
 
* Provide reassurance and create a cohesive explanation throughout the FSR form that clearly states why the VA asks for this information, what will be done with it, and the limits.
    
* Provide more instruction on what the VA is looking for on the "Personal statement" section
    * _"This is where you will lose your audience because you are asking me for all my financial business and now you want a statement on why. You see that I am paying out more in debt than I make in a month. That should be obvious. I would put down something like I don’t make enough money to cover my monthly bills. Again, my thought behind it is I already gave you all the information to show I am not making enough money and I am quickly going into debt. The statement is far too open-ended."_ -P10
    
* Remove "overdue" input field on Credit Card section if possible. Many fields have been removed from the Credit Card section since the last study but it was still confusing to see an input field for "past due" amount as well as "overdue" amount.

* Pull information from user's MyVA Profile. (example: Spouse's name)

* Refine wording for Resolution options. Include "Debt forgiveness" with the term "waiver"

* Adding the word "average" to monthly deductions (and other sections)

* The Streamlined Waiver (shorter form and automatic approval) will help with Veterans experiencing financial hardship with copay debt. However, as copay debt tends to be smaller and benefit overpayment tends to be a larger amount, it is important that the Streamlined Waiver be expanded to benefit overpayments.


## Next Steps

- Investigate what information can be pulled from users' MyVA profile.


## Further research needed
- Recruit specifically for those we did not speak to in the next study (see: Underserved groups we haven’t talked to section).
- Card sorting study for common lists of expenses and assets.



## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_fsr/research/enhanced_fsr/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_fsr/research/enhanced_fsr/conversation-guide.md)

[Interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/combined_fsr/research/enhanced_fsr/transcripts)


## Tools used for Synthesis

- [Mural](https://app.mural.co/invitation/mural/departmentofveteransaffairs9999/1676650307306?sender=ua78f969c4cddcbfe56b27885&key=2234b0b9-b026-4cf4-a49d-669ce1e7c45c) 
- [Note taking spreadsheet](https://docs.google.com/spreadsheets/d/1x8zKY2JwU_3xnmcp6icBsw_yTAknPy0u/edit?usp=sharing&ouid=100649599312437405482&rtpof=true&sd=true)

## Pages and applications used

 - [Financial Status Report (VA Form 5655) (Production)](https://va.gov/manage-va-debt/request-debt-help-form-5655/introduction)
 - [Financial Status Report (VA Form 5655) (Staging: user 228)](https://staging.va.gov/manage-va-debt/request-debt-help-form-5655/introduction)
 - [UXPin Prototype](https://preview.uxpin.com/f43733391f52c409c4d3152e9a4b101a392e29df#/pages/161460690/simulate/sitemap)


## Secondary research

Previous Research:  [Financial Status Report MVP Usability Test Readout - March 2021](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Financial-Status-Report/research/mar-2021/readout.md) 


## Who we talked to 


**Recruitment criteria**

We talked to 7 Veterans. One Veteran was also a Family member of another Veteran and a Caregiver. Additional screening questions that were added included whether the participant is currently or has experienced financial hardship and their current income.

We talked to **7 participants.**

Audience segment:
* Veterans: 7 
* Caregivers: 1 
* Family members of a Veteran: 1  


Gender:
* Male: 5 
* Female: 2 


Identifies as LGBTQ+: 2


Devices used during study: 
* Desktop: 3 
* Tablet: 1 
* Smart phone: 3 
* Assistive Technology: 0


Age:
* 25-34: 1
* 35-44: 2
* 45-54: 4
* 55-64: 0
* 65+: 0
* Unknown: 0


Education:
* High school degree or equivalent: 1
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 1
* Master's degree: 2
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 7
* Rural: 0
* Unknown: 0

Race:
* White: 4
* Black: 3
* Hispanic: x
* Biracial: x
* Asian: x
* Native: x

Income:
* $0 - $25K: 1
* $25K - $49.9K: 2
* $50K - $74.9K: 1
* $75K - $99.9K: 1
* $100K - $149.9K: 2

Disability and Assistive Technology (AT):
* Cognitive: 4
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

_[Complete the VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)_

This research does not include the perspectives of the following marginalized Veteran groups:
* Age 55-64+
* Rural
* Other than honorable discharge
* Immigrant origin
* Expat 
* Hispanic
* Biracial
* Asian
* Native
* Veterans who use assistive technology 

_[insert screenshot of completed recruitment checker]_
![VA-recruitment-checker](link - add image to github folder and link here with .png)
