# Discovery Research Report 


## Pattern - Ask users for Marital status


## Authenticated Experience Design Patterns Team - April, 2025

Christine Steiffer - Design and Research Lead

Kristen Faiferlick - Senior UX Designer

Lynn Stahl - Former Product Manager

Fran Cross - Current Product Manager

[Figma Files](https://www.figma.com/design/Ie3VE755qGlK7ONjKGQpNd/AE-Design-Patterns---Marital-Status?node-id=22-10986&t=VGgseNb0w18gKV8y-0) | [Design System Guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/VADS%20documentation%20for%20marital%20status%20pattern.md)  


Jump links

* [About the pattern](#About-the-pattern)

* [Overview of previous research](#Overview-of-previous-research)

* [Summary of the audit of current VA forms](#Summary-of-the-audit-of-current-VA-forms) 

* [Final pattern recommendations](#Final-pattern-recommendations)

* [Research recommendations](#Research-recommendations)


### About the pattern

The VA regularly needs to assess the marital status of benefit applicants in different forms, and the way the information is collected across each form. A consistent pattern asking for this information will lower the cognitive load of users and help them better anticipate how information will be collected across different forms at the VA. 

We kicked off our discovery work by creating a [Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1742843561511/4f5e5e77a91df7e061628888f10dfb7b10309183) to help collect information about how the VA currently addresses this issue. This board was built off the work of the VA Facing Forms team (specifically Jeana Clark, Beth Pandone, and Jaci Wilkinson) and the initial audit they started. We have completed this research alongside our process of creating a pattern flexible enough to address most form needs while still providing a consistent experience for users across many forms.


### Overview of previous research

The team reviewed the VA research repository in order to pull out any relevant insights from previous studies that looked at marital status. We conducted keyword searches including the following terms:



* Marital
* Marriage
* Spouse/spousal
* Wife
* Husband
* Partner

From these efforts, one study[^1] was located that had results specific to marital status. VA research teams studied form 21-686c which is the application to add or remove dependents from a Veteran’s benefits. Their related finding states that providing information about past marriages is painful for users. 75% of their respondents reported various levels of unease when asked for information about previous spouses and marriages, and they are unclear as to why the VA needs this information. 


###### 
    “There are Veterans that would rather shoot their ex than mention their names because it has been a very bitter situation.” - Participant quote

While this finding stood alone among past research, it gave our team important indications from the beginning that we would need to take a trauma-informed approach to creating this pattern and specifically the language we use around why we ask these questions. 

Outside of our own usage, we also wanted to look at how other design systems handle this question. We looked at guidance from the US Census Bureau[^2] as well as Gov.UK[^3] to ensure that our pattern guidance wasn’t missing anything important that other agencies and governments had already addressed. Aside from some variations in the UK for the response options, our pattern guidance is in alignment with these alternative sources.  


### Summary of the audit of current VA forms

A thorough review was completed across all forms (both digitized and undigitized) to understand how VA currently collects marital information. A summary of research questions and the data we compiled in response is provided below.


#### How many forms at the VA currently ask questions related to marriage or spouses? 



* 23 total forms 
    * 10 digital[^4] 


    * 13 PDFs


#### What are the different ways we ask the initial question about current marital status?



* Some ask "What is your current marital status" with the list of responses in either a
    * Select Field (aka Dropdown menu), or
    * Radio buttons
* Some ask "Are you married?” with a simple Yes/No response
* Others combine asking "Are you married?" and "Do you live together?" questions on the same page


#### What are the most common response options provided to the marital status question?



* 5 forms: 
    * *Question*: What is your marital status?
    * *Response options*: Married, separated, divorced, widowed, or never married (in various orders)
        * Some response options for this question include divorced and annulled as two different options, while others only reference divorce 
* 5 forms: 
    * *Question:* Are you married?
    * *Response options:* Yes or No
* Other forms have individually unique questions providing variation across the types of responses, including some that also ask about living arrangements.


#### What are the different ways we ask how they got married? 



* Form 527EZ 
    * *Question:* “How did you get married?”
    * *Response options: *In a civil or religious ceremony with an officiant who signed my marriage license, or Some other way (explain)
* Form 21-686c 
    * *Question:* “How did you get married?”
    * *Response options:* In a religious ceremony with a clergyperson who signed my marriage, In a civil ceremony with an officiant who signed my marriage license, By common law, By proxy, In a tribal ceremony, or Some other way (enter other type of marriage)


#### What other data do we collect about spouses and previous marriages? 



* 17 forms include questions about the spouse's personal information (name, DOB, and/or SSN)
    * 6 digital
    * 11 PDFs 
* 13 forms include questions about marital date and/or place
    * 6 digital
    * 7 PDFs 
* 11 forms include questions about living arrangements
    * 4 digital 
    * 7 PDFs 
* 8 forms include questions about marriage termination date and/or place
    * 2 digital
    * 6 PDFs
* 6 forms include questions about marriage termination reason (e.g. divorce or death)
    * 2 digital
    * 4 PDFs
* 4 forms include questions about the type of marriage
    * 2 digital 
    * 2 PDFs


#### Which forms ask the most complex set of marriage-related questions?

Forms[ 21-686c](https://www.va.gov/find-forms/about-form-21-686c/) and[ 21p-527EZ](https://www.va.gov/find-forms/about-form-21p-527ez/) (both digitized):



* 21-686c asks about:
    * Spouse's personal details
    * Living arrangement and why you live separately from your spouse (if applicable)
    * Your marriage logistics (when, where, type of marriage)
    * Any former marriages, including marriage logistics
    * Any former marriages of your current spouse, including marriage logistics
* 21p-527EZ asks about:
    * Spouse's personal details
    * Any former marriages of your current spouse, including marriage logistics
    * Your marriage logistics (when, where, type of marriage)
    * Any former marriages, including marriage logistics


#### What are some examples of how forms nest marital status questions within chapters?



* 21-686c 
    * All marital-related questions are in a single chapter called "Information needed to [remove a dependent who has died/add a spouse/etc]."
* 527EZ 
    * All marital status questions are under a single chapter called "Household information".
* 10-10EZ 
    * All marital status questions are in a single chapter called "Household financial information". 


#### Which forms did we choose to exclude from consideration?



* 2 forms ([21-4170](https://www.va.gov/find-forms/about-form-21-4170/) and[ 21p-4171](https://www.va.gov/find-forms/about-form-21p-4171/), both undigitized) are used to share supporting statements regarding marriages. They pose questions such as "Were/are the Veteran and the claimed spouse generally known as married?" They also ask some of the same questions that we are building into our pattern, but the forms are distinct enough that we are not considering them core use cases for the pattern.


### Final pattern recommendations

After reviewing the current forms asking for marital status as well as previous research on the topic, our team has come to design the pattern around the following principles:



* The pattern requires asking the primary question:
    * What is your current marital status?
        * Married
        * Separated
        * Divorced or annulled
        * Widowed
        * Never married
    * The page with this question will also include: 
        * Hint text that helps define how to best answer this question.
        * Trauma-informed additional info component that will let users know why we ask this information in the first place.
* All other potential questions fall into a few possible categories listed below and are optionally available for teams to pick and choose as they need them:
    * (Former) spouse personal and contact information
    * Living situation
    * Marriage/Termination details
    * Document upload
    * (Former) spouse’s former marriage information 
* Some of the above pages display differently depending on a user’s former answers. For example, if the user indicates that their former spouse is deceased, we will use past tense when discussing them on subsequent pages, as well as hide some of the questions such as requests for contact information. 
* Although product teams can include many pages and fields from this pattern, they should *only* include the questions that are required by their form. This helps ensure that we reduce the trauma that can come with discussing past marriages and even deceased spouses. This fact will be emphasized in our pattern documentation. 


### Research recommendations

While our team is able to review previous research in order to best inform our patterns as we create them, we are not able to conduct user research sessions ourselves. The following research questions remain from our team that we recommend others ask users as they implement the pattern and test how user friendly it is. 



* Does the additional info component provide useful information? Is this something users would read through? 
* Do users with less common or more complex marital status (e.g. domestic partnerships) understand how to answer the question?
    * Do they open the Additional info component to find guidance?
    * How do they respond to the page we link to in the guidance?
* Do users who have experienced relationship trauma understand why we need to ask this question? 
    * Do they read the text about why we need to ask this question?
* When asking about a current spouse’s former marriages, is it clear who we are asking about? 
    * Do they have any feedback on how we phrase that relationship? 

<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:
     [686 Usability Research Round 2](https://github.com/orgs/department-of-veterans-affairs/projects/880/views/1?filterQuery=686&pane=issue&itemId=97986358&issue=department-of-veterans-affairs%7Cva.gov-research-repository%7C808) - June 2018

[^2]:
     [https://www.census.gov/acs/www/about/why-we-ask-each-question/marital/](https://www.census.gov/acs/www/about/why-we-ask-each-question/marital/) 

[^3]:
     [https://design-system.service.gov.uk/patterns/equality-information/](https://design-system.service.gov.uk/patterns/equality-information/) 

[^4]:

     See the[ Overview of forms that include questions about marital status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Engineering/%23333-Marital-status-code-references.md) for a more detailed breakdown from an engineering perspective of the digitized forms.
