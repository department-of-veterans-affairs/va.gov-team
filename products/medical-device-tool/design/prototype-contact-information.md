# Prototype: C1 P2: Contact information 

Navigation: <br>
**Use case - Pre-filled information:** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#description) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#feedback) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#content)<br>
**Use case - Manually entered information:** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#description-1) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#feedback-1) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#content-1)<br>
**Use case - Updated Email:** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#description-2) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#feedback-2) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#content-2) <br>
**Use case - Error handling:** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#description-3) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#feedback-3) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#content-3)<br>

## Use case - Pre-filled information

Related links: [Invision prototype (Desktop)](https://vsateams.invisionapp.com/share/Q7VVWGZUG4N) | [Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5162)

### Description 
Since qualified veterans need to be logged in to place an order, the default state can be assumed to pre-fill the veteran's contact information. <br>
Initial focus point should be on the H1: _Order hearing aid batteries and accessories_

### Feedback 
**VSP Office hours in early February**
* Use either full state name or state abbreviation + state name 
* Reference: Pension form has every address field stacked
    * Some fields are shorter (such as postal code)
    * All others are same width
* Stack all the address input fields
* Input field labeling: _Street address 1_; _Street address 2_
    * Review w/ content
* Add helper text to _Street address 2_ to provide clarity about what part of the address the veteran should input 

### Content
**Note:** Content still needs to be reviewed by content team. Utility classes need to be reviewed by A11Y team. 

```
Home > Health care > Order hearing aid batteries and accessories 

# Order hearing aid batteries and accessories (h1)
Form 2346

[Chapter title] 1 of 3 Veteran Information

[Blue info alert box]
We’ve prefilled some of your information from your account. If you need to correct anything, you can edit the form fields below.

## Shipping address (h4 utility)
Your order will ship to this address. Orders typically arrive within 7-10 business days. 

[Dropdown component]
Country

[Text input]
Address line 1

[Text input]
Address line 2 (Apartment, building, suite, etc.)

[Text input] 
City

[Dropdown component]
State

[Text input]
Postal code

## Email address (h4 utility)
We will send an order confirmation email with a tracking number to this email address.

[Text input]
Email address (optional)

[Secondary blue button] Back
[Primary blue buttom] Continue

[Link to exit application] Finish this application later.
```

## Use case - Manually entered information 

Invision Prototype: [Desktop](https://vsateams.invisionapp.com/share/RJVXC02MS3W)

### Description 
TBD

### Feedback 
TBD

### Content
**Note:** Content still needs to be reviewed by content team. Utility classes need to be reviewed by A11Y team. 

```
TBD
```

## Use case - Updated email 

Invision Prototype: [Desktop](https://vsateams.invisionapp.com/share/JVVXCA1W3GA)

### Description 
TBD

### Feedback 
TBD

### Content
**Note:** Content still needs to be reviewed by content team. Utility classes need to be reviewed by A11Y team. 

```
TBD
```

## Use case - Error handling 

Related links: [Invision prototype (Desktop)](https://vsateams.invisionapp.com/share/CMW1O5S9ZQN) | [Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5791)

### Description 
This design shows an example of how error messages should be displayed in the form's UI for the _Contact information_ screen. <br><br>
Initial focus point depends on the action the user is taking. For example, if a user selects & deselects _Street address line 1_, then the focus would be on _Street address line 2_. The design team needs to double-check with the A11Y team to determine where the focus point would be if a user attempted to proceed to the next screen without completing all required fields. 

### Feedback 
TBD

### Content
**Note:** The content for this screen contains all error messages. Content still needs to be reviewed by content team. 

```
[Country]
(There shouldn’t need to be an error message because they will automatically have United States selected - referencing 10-10CG)

[Street address line 1]
Please enter a street address (User presses Continue button without entering an address)
Please enter a street address (User selects and deselects text input box with no input value)

[City]
Please enter a city (User presses Continue button without entering a city)
Please enter a city (User selects and deselects text input box with no input value)

[State]
Please select a state (User presses Continue button without selecting a state)
Please select a state (User selects and deselects dropdown with no state selected)

[Postal code]
Please enter a zip code (User presses Continue button without entering an address)
Please enter a zip code (User selects and deselects text input box with no input value)
Please enter a valid zip code (User types less than 5 digit postal code or more than 5 digit postal code with United States selected for country)
```
