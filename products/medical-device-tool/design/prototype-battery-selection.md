# Prototype: C2 P1: Battery selection 

Navigation: <br>
**Select supplies (Default):** [Description](TBD) | [Feedback](TBD) | [Content](TBD)<br>
**Use case - Rechargeable hearing aids only:** [Description](TBD) | [Feedback](TBD) | [Content](TBD)
**Use case - All devices are ineligible:** [Description](TBD) | [Feedback](TBD) | [Content](TBD)

## Select Supplies (Default)
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
Hearing aid name (h4 utility)
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

## Use case - Select supplies (Rechargeable only)
Relevant links: [Invision prototype (Desktop)](https://vsateams.invisionapp.com/share/Y3W5YKE4P87) | [Github issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5796)

### Description
It is possible that a veteran may only have rechargeable hearing aids on their record. There is no gating question for this use case; it is not good user experience to ask the veteran if they want to order batteries only to tell them that they cannot. However, it's important to still display the rechargeable hearing aids in case the veteran's record is not correctly updated and they expect to see a hearing aid that they can order batteries for. <br>
Initial focus point should be on the H1: _Order hearing aid batteries and accessories_.

## Feedback
TBD

## Content 
```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Chapter title] 2 of 3 Select your supplies

[Title] Add batteries to your order (h4 utility)

[Informational alert] 
None of your devices are eligible for battery resupply
You’re only eligible for rechargeable hearing aids. Contact the Denver Logistics Center  if you are experiencing issues with your device. 

**These are the hearing aids we have on file for you:**

[Card component]
Hearing aid name [h4 utility]
Prescribed MM/DD/YYYY
**Rechargeable**
[Warning alert inside card component] 
You cannot order batteries for this device
This device does not need battery resupply because it’s rechargeable.

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

## Use case - All devices are ineligible 
Relevant links: [Invision prototype: Default (Desktop)](https://vsateams.invisionapp.com/share/RAW5ZTDT4M3) | [Invision prototype: Additional info expanded (Desktop)](https://vsateams.invisionapp.com/share/C4W5ZTX8KBD) | [Github issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5794)

## Description
This use case covers if a veteran does not have any devices that are currently eligible for resupply. Additionally, the card components in this design can be applied to other combinations of eligible/ineligible device layouts. Even though none of the hearing aids are eligible for resupply, it's important to display the hearing aids in case a veteran is expecting to be able to order for an aid or if they don't see an expected aid. 
Initial focus point should be on h1:  Order hearing aid batteries and accessories

## Feedback
TBD

## Content 
 ```
 Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Chapter title] 2 of 3 Select your supplies

[Title] Add batteries to your order (h4 utility)

[Informational alert] 
None of your devices are eligible for battery resupply
You can't currently order batteries for your devices because they either don't require batteries or have had batteries supplied too recently.

**These are the hearing aids we have on file for you:**

[Card component]
Hearing aid name [h4 utility]
Prescribed MM/DD/YYYY
**Rechargeable**
[Warning alert inside card component] 
You cannot order batteries for this device because it's rechargeable
[Additional info component inside warning alert] Why can't I order batteries for this device?
(content inside the 'Additional info' component)Rechargeable hearing aids do not use disposable batteries and must be recharged instead. If you are having trouble with charging your hearing aids, call the Denver Logistics Center at (303)273-6200.

[Card component]
Hearing aid name [h4 utility]
Prescribed MM/DD/YYYY
[Blue bar component inside interactive card component]
**Battery:** Battery name 
**Quantity:** ## (Approximately 6 months supply)
**Last order date:** MM/DD/YYYY
[Warning alert inside card component] 
You cannot order batteries for this device online until MM/DD/YYYY
[Additional info component inside warning alert] Why can't I order batteries for this device?
(content inside the 'Additional info' component)You can only order batteries for each device once every 5 months. Each order comes with enough batteries for approximately 6 months. If you need batteries sooner, call the Denver Logistics Center at (303)273-6200.

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
