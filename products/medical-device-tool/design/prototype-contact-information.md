# Prototype: C1 P2: Contact information 

Navigation: <br>
**Use case - Both addresses passed:** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#description) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#feedback) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#content)<br>

**Use case - Permanent address only passed:**  [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#description) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#feedback) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-contact-information.md#content)<br>

## Use case - Both addresses passed

**Related links:**
[Invision prototype (Desktop - Default, Unselected)](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/408098735_C1_P2-_Both_Address_Passed_-_Unselected)

[Invision prototype - Default, Selected](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/screens/407910007)

[Invision prototype (Desktop - No selection error](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/408098736_C1_P2-_Both_Address_Passed_-_Error)

[Invision prototype - Edit address](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/screens/407910003)

[Invision prototype - Edit address, military selected](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/screens/409266593)

[Invision prototype - Edit address, errors](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/screens/407910002)

[Github Issue](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/6274)

### Description 
Since qualified veterans need to be logged in to place an order, the default state can be assumed to pre-fill the veteran's contact information. <br>
Initial focus point should be on the H1: _Order hearing aid batteries and accessories_

### Feedback 


### Content
**Note:** Content still needs to be reviewed by content team. Utility classes need to be reviewed by A11Y team. 

```
Home > Health care > Order hearing aid batteries and accessories 

# Order hearing aid batteries and accessories (h1)
Form 2346

[Chapter title] 1 of 3 Veteran information

## Shipping address (h4 utility)
Your order will ship to this address. Orders typically arrive within 7-10 business days. 

Select the address you would like your order sent to: (*Required)

[Interactive card component]
### Permanent Address (h5 utility)

[Blue bar component]
Address line 1 data
Address line 2 data
City, State ZIP
United States

[Link] Edit permanent address

[Radio button] Send to this address

[Interactive card component]
### Temporary Address (h5 utility)

[Blue bar component]
Address line 1 data
Address line 2 data
City, State ZIP
United States

[Link] Edit temporary address

[Radio button] Send to this address

## Email address (h4 utility)
We will send an order confirmation email with a tracking number to this email address.

[Text input]
Email address (optional)

[Secondary blue button] Back
[Primary blue buttom] Continue

[Link to exit application] Finish this application later.
```

## Use case - Permanent address only passed

**Related links:**
[Invision prototype - Default](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/screens/407910005)

[Invision prototype - Add a temporary address](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/screens/407910004)

[Github Issue](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/6274)

### Description 
Since qualified veterans need to be logged in to place an order, the default state can be assumed to pre-fill the veteran's contact information. <br>
Initial focus point should be on the H1: _Order hearing aid batteries and accessories_

### Feedback 


### Content
**Note:** Content still needs to be reviewed by content team. Utility classes need to be reviewed by A11Y team. 

```
Home > Health care > Order hearing aid batteries and accessories 

# Order hearing aid batteries and accessories (h1)
Form 2346

[Chapter title] 1 of 3 Veteran information

## Shipping address (h4 utility)
Your order will ship to this address. Orders typically arrive within 7-10 business days. 

Select the address you would like your order sent to: (*Required)

[Interactive card component]
### Permanent Address (h5 utility)

[Blue bar component]
Address line 1 data
Address line 2 data
City, State ZIP
United States

[Link] Edit permanent address

[Radio button] Send to this address

[Interactive card component]
### Temporary Address (h5 utility)

[Link] Add a temporary address

## Email address (h4 utility)
We will send an order confirmation email with a tracking number to this email address.

[Text input]
Email address (optional)

[Secondary blue button] Back
[Primary blue buttom] Continue

[Link to exit application] Finish this application later.
```

## Use case - Error handling 

Related links: [Invision prototype (Desktop)](https://vsateams.invisionapp.com/share/CMW1O5S9ZQN) | [Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5791)

### Description 
This design shows an example of how error messages should be displayed in the form's UI for the _Contact information_ screen. <br><br>
Initial focus point depends on the action the user is taking. For example, if a user selects & deselects _Street address line 1_, then the focus would be on _Street address line 2_. The design team needs to double-check with the A11Y team to determine where the focus point would be if a user attempted to proceed to the next screen without completing all required fields. 

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
