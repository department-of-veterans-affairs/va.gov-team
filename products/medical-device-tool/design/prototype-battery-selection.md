# Prototype: C2 P1: Battery selection 

Navigation: <br>
**Use case - Select supplies (Default):** [Description](TBD) | [Feedback](TBD) | [Content](TBD)


## Use case - Select Supplies (Default)
Related links: [Invision prototype: Default page, unselected (Desktop)](https://vsateams.invisionapp.com/share/PYW5VLL32XU) | [Invision prototype: Default page, 'no' selected (Desktop)](https://vsateams.invisionapp.com/share/NZW5VMKMUE9) | [Invision prototype: Default page, 'yes' selected, hearing aids for both ears only](https://vsateams.invisionapp.com/share/C5W5VNGNBPY) | Invision prototype: Default page, 'yes' selected, mix of hearing aids [(Desktop)](https://vsateams.invisionapp.com/share/QVW5VPDMK3B) [(Mobile)](https://vsateams.invisionapp.com/share/8YW5VRVWRUS) | [Github Issue: Default state v.01](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5793)

### Description 
This is the flow for the default state allowing the veteran to select the hearing aid(s) they would like to place batteries for. The flow contains multiple screens for various use cases. <br><br>
The initial focus point per screen: <br>
**Default page, unselected** - H1 _Order hearing aid batteries and accessories_<br>
**Default page, 'no' selected** - The radio button _No, I don't need to order hearing aid batteries._<br>
**Default page, 'yes' selected, hearing aids for both ears only** - The radio button _Yes, I need to order hearing aid batteries._<br>
**Default page, 'yes' selected, mix of hearing aids** -  Since one of the cards is selected, the focus point should be on that card. We may need to provide styling references to the front-end engineers. <br>

### Feedback 
TBD

### Content
**Note:** Content still needs to be reviewed by content team. Utility classes need to be reviewed by A11Y team. 

```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Chapter title] 1 of 3 Veteran Information

This is the personal information we have on file for you. 

[Personal information blue bar component]
HECTOR SMITH
Social Security number: *** - ** - 6789
Date of birth: 01/10/1980
Gender: Male 

Note: If you need to update your personal information, please call Veterans Benefits Assistance at 800-827-1000, Monday through Friday, 8:00 a.m. to 9:00 p.m. ET. 

[Secondary button] Back
[Primary blue button] Continue

[Link to exit the form] Finish this application later.

Need help? (h2 utility)
For help placing an order, or if the order form isn’t working right, please call VA Benefits and Services at 800-827-1000.
If you have hearing loss, call TTY: 711.
```
