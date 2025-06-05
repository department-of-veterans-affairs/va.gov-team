Ask users for…

# Marital status

Use with caution: Available

Follow this pattern to ask a user for their marital status and information about their current and previous marriages. 

### Resources

[Research](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues?q=state%3Aopen%20label%3A%22DSP%3A%20Help%20users%20to%20manage%20benefits%20and%20tools%22) | [Figma](https://www.figma.com/design/ZIGDfSb8D5YLBdJavzDdqi/AE-Design-Patterns---Benefits-Card?node-id=1-129&p=f&t=FYZaidBZC5z1Xnts-0) | Code

### Contributors

- Lynn Stahl (Agile Six)
- Fran Cross (Agile Six)
- Adam Whitlock (Ad Hoc)
- Belle Poopongpanit (Agile Six)
- Christine Rose Steiffer (Agile Six)
- Kristen Faiferlick (Ad Hoc)
- Jeana Clark (Ad Hoc)
- Beth Pandone (Pluribus)
- Jaci Wilkinson (Ad Hoc)

### On this page

- [Usage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/VADS%20documentation%20for%20marital%20status%20pattern.md#usage)
- [How to design and build](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/VADS%20documentation%20for%20marital%20status%20pattern.md#how-to-design-and-build)
- [Code usage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/VADS%20documentation%20for%20marital%20status%20pattern.md#code-usage)
- [Content considerations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/VADS%20documentation%20for%20marital%20status%20pattern.md#content-considerations)
- [Accessibility considerations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/VADS%20documentation%20for%20marital%20status%20pattern.md#accessibility-considerations)
- [Research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/VADS%20documentation%20for%20marital%20status%20pattern.md#research-findings)


## Usage

### When to use this pattern

* **When you need to collect a person’s marital status or information about their current and previous marriages.** This applies when you need information from a Veteran, spouse, or dependent.

### Design principles

* **Take a trauma-informed approach.** Although commonly asked, questions about marital status and previous marriages can bring up complex feelings and memories in respondents. Explain why we ask the question with an [Additional info](https://design.va.gov/components/additional-info) component. 

* **Only ask for what you really need.** While this pattern includes multiple follow-up questions, only collect the specific data that your forms requires. 


## How to design and build

### How this pattern works

#### “What is your marital status?” question

* **This question is the foundational part of this pattern.** If your form needs additional information, you can include questions from the question bank in this guidance.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Images/Standard.png" alt="Standard Marital Status" width="50%" />

[Alt text: A display of the standard Marital Status question with reponses available with radio buttons and an additional info component that provides more information on why we ask this information.]

[Caption: The standard Marital Status question to be used in most forms. Always provide a detailed explanation in the additional info component that tells the user why you need this information.]


* **If your form doesn't need this level of detail, simply ask "Are you married?".** Include "Yes/No" radio button options for a response. Map those to the "Married/Never Married" workflows.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Images/Simple.png" alt="Simple Marital Status" width="65%" />

[Alt text: An annotated display of the simplified version of the Marital Status question with reponses available with radio buttons and an additional info component that provides more information on why we ask this information.]

[Caption: Use the simplified Marital Status question in forms that don't need to collect detailed information on the user's marital status. Use when your form only needs a yes/no answer to the question.]

* **Include an explanation for why we ask this question.** Place this explanation in an [Additional info](https://design.va.gov/components/additional-info) component for questions that may feel particularly invasive or difficult for users to answer. 

Only use the following questions in this pattern if your form needs more information. 

#### Spouse personal information and identification
This optional section includes questions about the spouse, including:

* Name
* Date of birth
* Social Security number
* If they are a Veteran
* Their VA file number and military service number if they are a Veteran

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Images/Spouse%20Personal%20Info.jpg?raw=true" alt="Spouse Personal Info" width="50%" />

[Alt text: A display of the page asking for spouse name and date of birth.]

[Caption: The first of two pages that allow forms to ask for the spouse's personal information.]

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Images/Spouse%20Identity.jpg?raw=true" alt="Spouse Identity" width="60%" />

[Alt text: An annotated display of the page asking for spouse social security number and Veteran status.]

[Caption: The second of two pages that allow forms to ask for the spouse's identity information.]


#### Living arrangement information

This optional section asks if the user lives with their spouse. If not, it also asks why and how much financial support the user provided their spouse over the past 12 months. 

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Images/Spouse%20Living%20Situation2.jpg?raw=true" alt="Spouse Living Situation2" width="50%" />

[Alt text: A display of the page asking if the user lives with their spouse.]

[Caption: The first of two pages that allow forms to ask living arrangement questions.]

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Images/Spouse%20Additional%20Living%20Situation.jpg?raw=true" alt="Spouse Additional Living Situation" width="50%" />

[Alt text: A display of the page asking for additional information about their living arrangements.]

[Caption: The second of two pages that allow forms to ask more information about the spouse's living arrangements.]

#### Marriage information

This optional section includes questions about the marriage, such as:

* Date and place of marriage

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Images/Place%20Date%20of%20Marriage.jpg?raw=true" alt="Place Date of Marriage" width="50%" />

[Alt text: A display of the page asking for the place and date of the marriage.]

[Caption: The page that asks for the place and date of the marriage.]

* Type of marriage

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Images/How%20Married.jpg?raw=true" alt="How Married" width="50%" />

[Alt text: A display of the page asking how the couple was married.]

[Caption: The page that asks for the type of marriage ceremony.]

* Reason for termination, if applicable

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Images/How%20Marriage%20Ended.png?raw=true" alt="How Marriage Ended" width="60%" />

[Alt text: A display of the page asking how the marriage ended.]

[Caption: The page that asks for how the marriage ended.]

* Date and place of termination or spouse’s death, if applicable
  
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Images/Date%20Place%20Marriage%20Ended.jpg?raw=true" alt="Date Place Marriage Ended" width="50%" />

[Alt text: A display of the page asking for the date and place of the marriage termination.]

[Caption: The page that asks for the date and place of the marriage termination.]


#### Previous marriage information

This optional section features the [Multiple responses](https://design.va.gov/patterns/ask-users-for/multiple-responses) (also known as: List & Loop) pattern to ask questions about previous marriages, including:

* Name(s) of former spouse(s)

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Images/Previous%20Spouse%20Personal%20Info.jpg?raw=true" alt="Previous Spouse Personal Info" width="65%" />

[Alt text: A display of the page asking for the previous spouse's personal information.]

[Caption: The page that asks for the previous spouse's personal information.]

* Veteran status of former spouse(s)

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Images/Previous%20Spouse%20Identity%20Info.jpg?raw=true" alt="Previous Spouse Identity Info" width="50%" />

[Alt text: A display of the page asking for the previous spouse's identity information including Veteran status.]

[Caption: The page that asks for the previous spouse's identity information including Veteran status.]
  
* Date and place of marriage(s)

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Images/Previous%20Spouse%20Date%20Place%20of%20Marriage.jpg?raw=true" alt="Previous Spouse Date Place of Marriage" width="50%" />

[Alt text: A display of the page asking for the date and place of the previous marriage.]

[Caption: The page that asks for the date and place of the previous marriage.]

* Date and place of marriage termination(s) - See reference image under 'Marriage Information' section.
* Method of marriage termination(s) - See reference image under 'Marriage Information' section.


### Patterns and components used in this pattern

* [Radio button](https://design.va.gov/components/form/radio-button)
* [Select](https://design.va.gov/components/form/select)
* [Multiple responses](https://design.va.gov/patterns/ask-users-for/multiple-responses)
* [Additional info](https://design.va.gov/components/additional-info)

### Additional considerations

* If a form requires file uploads (for example, a marriage certificate or divorce decree), state that these files are needed on the form introduction page.
* As the user moves through the form, if they provide a response that triggers conditionally-required file uploads, explain why the file upload is needed. For example, if a user indicates that they were married in a way that is not among the standard responses, include text like this: "Based on your answer, you'll need to provide supporting documents to help us understand your marital status. We'll ask you to upload these documents on the next screen [or on the final screen of the form, depending on your form's situation]."
* If you are asking only one question on a page, the question label should be an h3, as shown in the [Ask Users For... A Single Response](https://design.va.gov/patterns/ask-users-for/a-single-response#annotated) pattern. However, if you are asking multiple questions per page, give the page a descriptive page title as an h3 and use standard (non-header) labels for questions.


## Code usage

(Link to the page.code-link, when available)

## Content considerations

### Respondent role

Veterans, their spouse, or a dependent can complete forms. Depending on who is completing the form, some slight alterations to the text content may need to shift. Update content as needed. For example…


## Accessibility considerations

### Radio button accessibility considerations

**VoiceOver on Safari has accessibility issues.** VoiceOver on Safari reads out the fieldset legend for each radio item. It should only read out the legend at the end of the first radio option. Theres no workaround right now. Learn more in the [Radio button component](https://design.va.gov/components/form/radio-button) page.


## Research findings

A [secondary research report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Discovery%20Research%20Report.md) from April 2025 explores which VA forms ask questions related to an applicant's marital status and how they phrase these questions. It also provides recommendations that influenced the creation of this pattern. Learn more in the [research report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Discovery%20Research%20Report.md).

This pattern would benefit from additional research. Some areas that were identified as potentially high-impact include learning:
* How users respond to trauma-informed language throughout the pattern
* How users respond to the information inside the Additional Information components
* If users have any confusion about whose information is needed in the portion of the pattern asking for information on their current spouse's previous partner(s)
* The best location for both optional and required file uploads (either in the context of the marital information pattern/step, or at the end of the form flow)
