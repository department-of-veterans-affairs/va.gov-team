
# Sprint 0 Product Brief: Reducing Barriers in Form Inputs 
### Profile/Contact information Form Pattern Improvements
# 
[Reducing Barriers in Form Inputs: Profile/Contact information Form Pattern Improvements #4494](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/4494)
 
## Problem Statement
The Profile/Contact information section on the VA mobile app falls short of the [best practices for collecting personal information presented in Oct 2022 by USWDS](https://digital.gov/event/2022/10/20/october-2022-uswds-monthly-call/) . Per USWDS, the VA mobile app should “Reduce barriers to participation through every interaction.” 

Currently, the app is not leveraging native mobile capabilities (such as autofill) or other time-saving capabilities (including but not limited to autocomplete) to make it less painful to fill out forms on a mobile device. Some of these gaps make the app less accessible, andviolate WCAG and USWDS guidelines. 

Beyond that, the VA mobile app (and VA.gov in some instances) forms are not providing the kind of flexibility with data input that allows users to accurately update their personal information easily and instantly.

> **USWDS:** *“Many of the digital solutions we create rely on collecting personal information (like name, address, and phone number), allowing programs and services to connect with people who need assistance. Some of these people may be impacted by housing insecurity, homelessness, or displacement due to disaster.*

> *When what we ask for doesn’t allow users to confidently and accurately communicate their answers — or allow them to update this information as their circumstances change — we may have created a poor user experience and eroded trust from the start.”*

## Current Experience 
### Flagship App
The Flagship App’s Profile section has a screen called “Contact information.” It includes individual forms for the following pieces of common Profile information:  
* Addresses
    * Mailing address
    * Home address
* Phone numbers
    * Home phone number
    * Work phone number
    * Mobile phone number
* Email addresses
    * Contact email address

The app requires users to input information into each of these forms separately by typing or native dictation. It does not make native device autofill available or allow users to move between input fields using arrows above the native keyboard. It also does not allow the user to easily carry information over from one field set to another or leverage an [autocomplete service](https://developers.google.com/maps/documentation/javascript/place-autocomplete) to predictively populate addresses. 

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/form%20inputs/images/form-contact-info.png" width=200>  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/form%20inputs/images/form-home-address.png" width=200>  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/form%20inputs/images/form-address-fields.png" width=200>  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/form%20inputs/images/form-street-address-field.png" width=200>
   

### VA.gov (desktop & mobile)
The VA.gov website’s Contact information section contains the same forms and fields, but on one long screen with expanding sections. It does not leverage an [autocomplete service](https://developers.google.com/maps/documentation/javascript/place-autocomplete) to predictively populate addresses. However, it does include time-saving features to reduce typing when completing/updating the forms that the mobile app does not currently include. 

**Examples:**
1. On both desktop & mobile, users can check a box in the Mailing address form to “Use my mailing address for my home address.”
1. When available in the browser (desktop & mobile), it triggers browser autofill to complete address fields. When I attempted the same in the Firefox mobile browser, neither device autofill or browser autofill were triggered. Phone and email did not trigger any kind of autofill on any platform or browser (despite these pieces of information being available & working in other apps and websites).
1. Tapping into a multi-field form on mobile calls up arrow keys to move easily between input fields.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/form%20inputs/images/form-use-address-web.png" width=400>  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/form%20inputs/images/form-use-address.jpeg" width=200>

###### 1. “Use my mailing address for my home address” checkbox in Chrome desktop & Firefox mobile
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/form%20inputs/images/from-address-autocomplete.png" width=400>  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/form%20inputs/images/form-street-address-field2.png" width=200>  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/form%20inputs/images/form-phone-number-field2.jpeg" width=200>
###### 2. Browser form field autofill in Chrome & Firefox desktop, Chrome mobile. 
###### 3. Arrow keys appear above native keyboard to move between fields on Chrome & Firefox mobile.



### Pain Points
These are examples observed with a quick look at the VA Mobile app’s Personal information forms. A more thorough review (including validation rules, field requirements, input types, and errors) is recommended to assess the size of the work and before making a UX recommendation. **Indicates an issue that also exists on VA.gov*

#### 1. Filling out contact information forms on the VA mobile app is more cumbersome than industry standard (and less accessible for users with cognitive disabilities) because we don’t leverage native mobile capabilities to reduce the amount of manual typing.
1. Tapping into a street address or email field in the form doesn’t call up my device’s autofill options. Tapping into a phone number field calls up my device’s autofill option, but when I populate the field, it pastes & quickly disappears (a bug).
    * **USWDS:** [Consider using the device autocomplete attribute on address input fields ](https://digital.gov/event/2022/10/20/october-2022-uswds-monthly-call/)(slide 52); [Email address - allow autofill](https://digital.gov/event/2022/10/20/october-2022-uswds-monthly-call/) (slide 59)
    * **W3C:** [Understanding Success Criterion 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)
    * **NNG:** [A Checklist for Designing Mobile Input Fields - Filling it in for the user](https://www.nngroup.com/articles/mobile-input-checklist/) 
1. Tapping into a field in a multi-field form doesn’t call up arrow keys above native keyboard to move easily between input fields.
    * **NNG:** [A Checklist for Designing Mobile Input Fields - Filling it in for the user](https://www.nngroup.com/articles/mobile-input-checklist/)

 <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/form%20inputs/images/form-street-address-field.png" width=200>  <img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/form%20inputs/images/form-phone-number-field.png" width=200>

###### 1a: Tapping into street address doesn’t call up autofill or show arrow keys above keyboard.


#### 2. Filling out contact information forms on the VA mobile app is more cumbersome than it could be (and less accessible for users with cognitive disabilities) because we don’t leverage non-mobile specific capabilities to reduce the amount of manual typing.
  1. We don’t leverage an address autocomplete service to predictively populate addresses based on typing.*
     * **NNG:** [A Checklist for Designing Mobile Input Fields - Filling it in for the user](https://www.nngroup.com/articles/mobile-input-checklist/)
     * **W3C:** [Understanding Success Criterion 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)
1. We force people to type information when we could compute things based on other info (ex: state based on ZIP code).
    * **NNG:** [A Checklist for Designing Mobile Input Fields - Filling it in for the user](https://www.nngroup.com/articles/mobile-input-checklist/)

#### 3. We’re using form conventions that are not recommended by USWDS and excluding others that are recommended.*
1. We require users to type their mailing and home address separately.
    * **USWDS:** [If you need both physical address and mailing address, provide a checkbox for “same as physical address” to auto-populate the mailing address if they are the same ](https://digital.gov/event/2022/10/20/october-2022-uswds-monthly-call/)(slide 53)
    * **W3C:** [Understanding Success Criterion 3.3.7: Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry)
    * **NNG:** [A Checklist for Designing Mobile Input Fields - Filling it in for the user](https://www.nngroup.com/articles/mobile-input-checklist/)
1. We limit many fields to 35 characters (example: address)*
    * **USWDS:** [Support long text fields](https://digital.gov/event/2022/10/20/october-2022-uswds-monthly-call/)(slide 53)
1. We use dropdown menus when fields may be faster (example: state)*
    * **USWDS:** [Avoid dropdowns: If possible, let users type their state’s abbreviation when they reach the state drop-down menu.](https://digital.gov/event/2022/10/20/october-2022-uswds-monthly-call/)(slide 53)
1. Field doesn’t accept all needed types (ex: We only support 5 digit ZIP codes)*
    * **USWDS:** [Support both five and nine-digit ZIP codes. Some addresses require a nine-digit ZIP code.](https://digital.gov/event/2022/10/20/october-2022-uswds-monthly-call/)(slide 53)
1. Our address form allows users to choose Puerto Rico as a state, but doesn’t allow users to enter an Urbanization code or name (but many Puerto Rican addresses require an Urbanization code)*
    * **USWDS:** [Provide a field for Urbanization code](https://digital.gov/event/2022/10/20/october-2022-uswds-monthly-call/)(slide 53)


## Assumptions and Level of Confidence
1. Making it easier and quicker for Veterans to fill out forms using their mobile device will positively impact user satisfaction.
1. Designing form fields to allow users to accurately input their contact information, inclusive of many individual circumstances (for example, Veterans who live in rural areas, who live in Puerto Rico, who are impacted by housing insecurity, homelessness, or displacement due to disaster) will allow VA to serve more Veterans.
1. That leveraging address autocomplete will not violate HIPAA rules.

## Risks
1. Some of these conventions may be due to VA requirements, and changing them will be difficult or involve changing them at VA-level (not just mobile).

## Business Goals
* Relates to OCTO-DE goals:
    * Logged-in users can update their personal information easily and instantly.
        * **Increase the number of Veterans who are able to accurately enter their contact information into the mobile app on their own.**
    * Logged-in users have a personalized experience, with relevant and time-saving features.
        *** Decrease the amount of time it takes to complete/edit contact information.**
* **Increase user satisfaction & confidence in the accuracy of contact information in the VA mobile app (and beyond?).**

## Roadmap


V1



V2 and beyond



## Technical Approach
* Per Jon Bindbeutel Discovery spike to understand why native device autofill & keyboard arrows aren’t there now and what we'd have to do to get them there (may not be an auto-include with react-native code).
* Discovery spike to investigate leveraging an address autocomplete service (including HIPAA compliance in this area).

## Measuring success 
* Time to fill out forms decreases.
* Improved customer satisfaction. 
	
## Stakeholders
* VA Mobile Product Owners
* Authenticated Experience team (if we decide to pursue modifications that affect VA.gov) ? 


## Important Links
* [USWDS Monthly Call - October - 2022](https://digital.gov/event/2022/10/20/october-2022-uswds-monthly-call/)
* [A Checklist for Designing Mobile Input Fields - NNG](https://docs.google.com/document/d/1D3TkbTQ3sOpMrnERB2zGPT--islOW5qEw-sK0iHK1Rc/edit#:~:text=8-,A%20Checklist%20for%20Designing%20Mobile%20Input%20Fields,-nngroup.com) 
* [Best Practices For Mobile Form Design — Smashing Magazine](https://docs.google.com/document/d/1D3TkbTQ3sOpMrnERB2zGPT--islOW5qEw-sK0iHK1Rc/edit#:~:text=Best%20Practices%20For%20Mobile%20Form%20Design%20%E2%80%94%20Smashing%20Magazine) 
* [Understanding Success Criterion 1.3.5: Identify Input Purpose | WAI | W3C](https://docs.google.com/document/d/1D3TkbTQ3sOpMrnERB2zGPT--islOW5qEw-sK0iHK1Rc/edit#:~:text=Understanding%20Success%20Criterion%201.3.5%3A%20Identify%20Input%20Purpose%20%7C%20WAI%20%7C%20W3C)
* [Understanding Success Criterion 3.3.7: Redundant Entry | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry)  
 
