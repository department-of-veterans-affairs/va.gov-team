# Adding or Removing Dependents associated with Disability Compensation Basic Product Evaluation

The goal of this project is to better understand what the online tool is and estimate how much design work will be needed if/when we move this tool to vets.gov. 

This tool on eBenefits allows Veterans to apply to have a new spouse or child added to, or removed from, their disability compensation award. This only applies to disability compensation. It says other award types may be added at a future date. For example, pension benefits. Parents are not part of the online process right now ([Form 21-509](http://www.vba.va.gov/pubs/forms/VBA-21-509-ARE.pdf)). 

__Why is this important?__

Veterans may be eligible to receive a higher compensation rate __if they are rated at 30 percent or higher and have one or more dependents, including a spouse, child, or a parent in their care__. Veterans with a service-connected disability rating of 20 percent or lower are not generally eligible for additional payments, except in limited circumstances.

From Josh Q: "For a few years the emphasis was put on rating claims (sevice connected and such) and so these claim types that were non-rating were put on the back burner."

The burden is on the Veteran to let the VA know about these changes. These changes in dependents can impact your compensation: a birth, adoption, or death, marriage or divorce, a child no longer being eligible due to age restrictions, marriage, or other restrictions, adding a parent to your claim, etc. If you do not notify the VA, and you continue to receive overpayment, you will be liable for this overpayment + additional interest on that overpayment. The sooner you notify the VA, the better. Or, the reverse, you could be eligible to receive more compensation. Based on that data point from Josh Q, the Veteran would need to wait two years to get that payment, albeit it would include backpay. 

__Paper Forms__

|Number|Description|Online Form |
|---|---|---|
|Form 21-686c|The VA Form 21-686C, known as a Declaration of Status of Dependents, is used by the United States Department of Veterans Affairs to ensure that a dependent is still eligible for benefits.|[Online Form](http://www.vba.va.gov/pubs/forms/VBA-21-686c-ARE.pdf)|
|Form 21-674|A VA Form 21-674 is known as a Request for Approval of School Attendance. This form is used in order to request that a veteran's child between the ages of 18 and 23 continue receiving benefits due enrollment in school.|[Online Form](http://www.vba.va.gov/pubs/forms/VBA-21-674-ARE.pdf)|

__Considerations__

- The backend system called RBPS (Rules Based Processing System) can actually handle roughly 50 percent of these claims coming in automated from start to finish (award). 
- Most of these claims are two years old so 50 percent of those claims is a lot and "any type of automation on that we should keep," Josh Q advises.
- Parents are not part of the online process right now ([Form 21-509](http://www.vba.va.gov/pubs/forms/VBA-21-509-ARE.pdf)). 
- The eBenefits application would need to be updated to include parents.
- The RBPS system would also need to be updated to handle parents. 
- This eBenefits application only applies to disability compensation awards. 

#### Existing Experience

- Dashboard
- Dependents (ebenefits/dependents)
- Add or Remove Dependents (ebenefits/vdc?target=/wssweb/wss-686-webparts/dependent.do)

|Step|Screen|
|---|---|
|Personal Information|![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/personal-information.png)|
|---|---|---|
|Getting Started|![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/getting-started.png)|
|---|---|---|
|Manage Dependents|![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/manage-dependents.png) |
|---|---|---|
|Upload Documents|![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/upload-documents.png)|
|---|---|---|
|Error Check|![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/error-check.png)|
|---|---|---|
|Validation|![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/final-validation.png)|
|---|---|---|
|Certification|![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/certification.png)|

* Additional screens under manage benefits can be found in the [screen folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/declare-dependent/discovery/ebenefits-screens).
   - Update Marital Status (6 screens)
   - Update Previous Marital Information
   - Children (4 screens)
   
<br>
<br>
<br>
<br>

### Rating System for Heuristic Categories

- Poor
- Average
- Good

## Visibility of system status -- Good

The system should always keep users informed about what is going on, through appropriate feedback within reasonable time.

- Shows open and completed applications.
- Shows pending actions on in progress applications.
- Alerts you that you have an in progress application.
- Shows steps in the process without showing *all* the steps in a single step which would cause cognitive overload, unlike the disability compensation application that has the top and left "workflow."

|Example Type|Example|
|---|---|
| After hitting apply it tells you that you have an open application.|![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/open-application.png)|
| Shows open applications on dashboard.|![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/open-applications.png)|
| Shows completed applications on dashboard.|![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/completed-applications.png)<br>![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/completed-applications-list.png)|
| Tells you when you've updated dependents successfully and the status is pending. |![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/manage-dependents-updated.png)|

<br>
<br>
<br>
<br>


## Match between system and the real world -- Good

The system should speak the users' language, with words, phrases and concepts familiar to the user, rather than system-oriented terms. Follow real-world conventions, making information appear in a natural and logical order.

- One area that is confusing is "Only dependents on your compensation benefits are shown. Other award types may be added at a future date." What "compensation benefits" means to the VA is disability compensation. What compensation means to people in the real world is money being given to you. So, for example, pension compensation is not included here. How would I know that as a Veteran?

<br>
<br>
<br>
<br>

## User control and freedom -- Poor

Users often choose system functions by mistake and will need a clearly marked "emergency exit" to leave the unwanted state without having to go through an extended dialogue. Support undo and redo.

- You cannot exit the application once you start. 
- You cannot skip forward in the "workflow" and must follow the steps set by the system.
- No clear way to "save for later" during the application, particularly troubling at the upload documents stage. 
- No clear way to find previously uploaded documents the VA already has. 
- No clear way to upload documents or send documents via mobile (email, text, upload to efolder).


|Example Type|Example|
|---|---|
| Clear continue or cancel when hitting "apply."|![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/continue-cancel-open-application.png)|
|Does not give you an option to exit once you begin the application.|![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/personal-information.png)|
|The system does not recognize or acknowledge that you will need to go find documents that are physically located elsewhere.|![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/save-for-later.png)|




<br>
<br>
<br>
<br>

## Consistency and standards -- Good

Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions.

<br>
<br>
<br>
<br>

## Recognition rather than recall -- Good

Minimize the user's memory load by making objects, actions, and options visible. The user should not have to remember information from one part of the dialogue to another. Instructions for use of the system should be visible or easily retrievable whenever appropriate.

<br>
<br>
<br>
<br>

## Flexibility and efficiency of use -- Poor

Accelerators — unseen by the novice user — may often speed up the interaction for the expert user such that the system can cater to both inexperienced and experienced users. Allow users to tailor frequent actions.

- You cannot skip forward in the "workflow" and must follow the steps set by the system.
- The default user flow does not show you your open or pending applications immediately. You would have to know to go to the dashboard and find them. So, if you were unsure of the status of an application, your default action might be to duplicate the application here.

<br>
<br>
<br>
<br>

## Aesthetic and minimalist design -- Average

Dialogues should not contain information which is irrelevant or rarely needed. Every extra unit of information in a dialogue competes with the relevant units of information and diminishes their relative visibility.

<br>
<br>
<br>
<br>

## Help users recognize, diagnose, and recover from errors and error prevention. -- Average

Error messages should be expressed in plain language (no codes), precisely indicate the problem, and constructively suggest a solution.

Even better than good error messages is a careful design which prevents a problem from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.

- Validation message after hitting save. 
   - Seems random messages, not specific to fields.
   - Sometimes validation when typing, sometimes only when you save.
   - Character counts are 30 or 50. Maybe others?
   - Allowed me to put in a SSN 000-000-0000
   - Allowed me to add a kid older than me
   
|Example Type|Example|
|---|---|
|Validation after save| ![Validation Message](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/validation.png)|
|Typing numbers in alpha field|![Alpha versus numeral](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/validation-alpha-versus-numerical.png)|
|Country name as numbers and required 50 characters|![country](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/country-50-characters.png)|
|Basic Required Fields|![Required Field Validation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/validation-required-fields.png)|
|SSN and Age Validation|![SSN and Age](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/social-000-age-78.png)|

<br>
<br>
<br>
<br>

## Help and documentation -- Average

Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation. Any such information should be easy to search, focused on the user's task, list concrete steps to be carried out, and not be too large.

The FAQ section seems to address most scenarios, although I came up with a quick list of questions even as a non-SME.

- Why are parents handled differently?
- What other award types are missing? Where and how do I manage this information?  
- Why is it only compensation right now?
- How long will it take for an open application to move to completed?
- Where do I find already completed applications?

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/declare-dependent/discovery/ebenefits-screens/faq.png)




