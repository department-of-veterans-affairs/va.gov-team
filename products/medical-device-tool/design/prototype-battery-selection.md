# Prototype: C2 P1: Battery selection 

Navigation: <br>
**Use case - Select supplies (Default):** [Description](TBD) | [Feedback](TBD) | [Content](TBD)


## Use case - Select Supplies (Default)
Related links: [Invision prototype: Default page, unselected (Desktop)](https://vsateams.invisionapp.com/share/PYW5VLL32XU) | [Invision prototype: Default page, 'no' selected (Desktop)](https://vsateams.invisionapp.com/share/NZW5VMKMUE9) | [Invision prototype: Default page, 'yes' selected, hearing aids for both ears only](https://vsateams.invisionapp.com/share/C5W5VNGNBPY) | Invision prototype: Default page, 'yes' selected, mix of hearing aids [(Desktop)](https://vsateams.invisionapp.com/share/QVW5VPDMK3B) [(Mobile)](https://vsateams.invisionapp.com/share/8YW5VRVWRUS) | [Github Issue: Default state v.01](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5793)

### Description 
This is the flow for the default state allowing the veteran to select the hearing aid(s) they would like to place batteries for. The flow contains multiple screens for various use cases. <br><br>
Note: if the veteran _only_ has hearing aids for both ears on their record, they do not need a header indicating hearing aids for both ears. However, we will need to include headers if the veteran has hearing aids for either left or right ears, or left and right ears in addition to hearing aids for both ears. 

The initial focus point per screen: <br>
**Default page, unselected** - H1 _Order hearing aid batteries and accessories_<br>
**Default page, 'no' selected** - The radio button _No, I don't need to order hearing aid batteries._<br>
**Default page, 'yes' selected, hearing aids for both ears only** - The radio button _Yes, I need to order hearing aid batteries._<br>
**Default page, 'yes' selected, mix of hearing aids** -  Since one of the cards is selected, the focus point should be on that card. We may need to provide styling references to the front-end engineers. <br>

### Feedback 
TBD

### Content
**Note:** Content still needs to be reviewed by content team. Utility classes need to be reviewed by A11Y team. 

**If the veteran selects 'No, I don't need to order hearing aid batteries.' then the following content will be displayed**
```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Chapter title] 2 of 3 Select your supplies

[Title] Add batteries to your order (h4 utility) 

Do you need to order batteries for any of your hearing aids? (*Required)
[Radio button] Yes, I need to order hearing aid batteries.
[Radio button] No, I don't need to order hearing aid batteries. 

[Secondary button] Back
[Primary blue button] Continue

[Link to exit the form] Finish this application later.

Need help? (h2 utility)
For help placing an order, or if the order form isn’t working right, please call VA Benefits and Services at 800-827-1000.
If you have hearing loss, call TTY: 711.
```

**If the veteran selects 'Yes, I need to order hearing aid batteries.' then additional content will be displayed as progressive disclosure. This content applies if the veteran _only_ has hearing aids for both ears.** 

```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Chapter title] 2 of 3 Select your supplies

[Title] Add batteries to your order (h4 utility) 

Do you need to order batteries for any of your hearing aids? (*Required)
[Radio button] Yes, I need to order hearing aid batteries.
[Radio button] No, I don't need to order hearing aid batteries. 

Which hearing aids do you need batteries for? (h4 utility)
You will be sent a 6 month supply of batteries for each device you select below. 

[Interactive card component]
Battery name (h4 utility)
Prescribed DD/MM/YYYY
[Blue bar component inside interactive card component]
**Battery:** Battery name 
**Quantity:** ## (Approximately 6 months supply)
**Last order date:** MM/DD/YYYY
(If unselected)[Secondary blue button containing plus symbol iconography) Order batteries for this device 
(If selected)[Primary blue button containing checkmark iconography) Batteries added to order

[Additional info component] What if I don't see my hearing aid?
(content inside the 'Additional info' component)You'll need to contact your audiologist to update your record with additional devices
[Find contact information for your VAMC with the facility locator](https://www.va.gov/find-locations/)

[Secondary button] Back
[Primary blue button] Continue

[Link to exit the form] Finish this application later.

Need help? (h2 utility)
For help placing an order, or if the order form isn’t working right, please call VA Benefits and Services at 800-827-1000.
If you have hearing loss, call TTY: 711.
```
