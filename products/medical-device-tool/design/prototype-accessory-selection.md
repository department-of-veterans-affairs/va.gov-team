# Prototype: C2 P2: Accessory selection 

Navigation: <br>
**Select accessories (Default):** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#description) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#feedback) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#content)<br>
**Use case - All accessories are ineligible:** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#description-1) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#feedback-1) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#content-1)<br>

## Use case - Select accessories (Default)
Relevant links: <br>
**1.** Invision Prototype: Default state - unselected [(Desktop)](https://vsateams.invisionapp.com/share/GMW8RW5BXAF) <br>
**2.** Invision Prototype: 'No Accessories' selected [(Desktop)](https://vsateams.invisionapp.com/share/4QW8RX5V6UT)<br>
**3.** Invision Prototype: 'Yes Accessories' selected [(Desktop)](https://vsateams.invisionapp.com/share/TFW8RYERW8G) | [(Mobile)](https://vsateams.invisionapp.com/share/D6W8WOU7WS4)<br>
**4.** [Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5797)

### Description
This is the default flow allowing veterans to add additional accessories to their order. Similar to the pattern on the [Battery selection](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-battery-selection.md#description) flow, the veteran will be prompted with radio buttons asking if they would like to add accessories or not. If they 'Yes, I need to order hearing aid accessories.' then progressive disclosure will reveal the items they have ordered in the past two years. **Note:** The items should be displayed chronologically with the most recently available item for reorder displayed first. This will allow veterans to be presented with their eligible items first in the case of having some ineligible items on record. <br><br>
The initial focus point for each screen: <br>
**Default page - unselected:** H1 _Order hearing aid batteries and accessories_<br>
**Default page - 'no' selected:** The radio button _No, I don't need to order hearing aid accessories._<br>
**Default page - 'yes' selected:** The radio button _Yes, I need to order hearing aid accessories._<br>

## Feedback
Our team initially used a checkbox styled as a button containing iconography and content that changed as the veteran selected items, but we received feedback from the A11Y team that this made it seem like the item was ordered when selected. We have updated our design to replace the iconography with a checkbox that will toggle when selected. 

## Content 
**Note:** Content still needs to be reviewed by content team. Utility classes need to be reviewed by A11Y team.<br>
<br>
**If the veteran select 'No, I don't need to order hearing aid accessories.**

```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Chapter title] 2 of 3 Select your supplies

[Title] Add hearing aid accessories to your order (h4 utility) 

Do you need to order accessories for any of your hearing aids? (*Required)
[Radio button] Yes, I need to order hearing aid accessories.
[Radio button] No, I don't need to order hearing aid accessories. 

[Secondary button] Back
[Primary blue button] Continue

[Link to exit the form] Finish this application later.

Need help? (h2 utility)
For help placing an order, or if the order form isn’t working right, please call VA Benefits and Services at 800-827-1000.
If you have hearing loss, call TTY: 711.
```

**If the veteran selects 'Yes, I need to order hearing aid accessories.' then additional content will be displayed as progressive disclosure. This content applies if the veteran has eligible items**

```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Chapter title] 2 of 3 Select your supplies

[Title] Add hearing aid accessories to your order (h4 utility) 

Do you need to order batteries for any of your hearing aids? (*Required)
[Radio button] Yes, I need to order hearing aid batteries.
[Radio button] No, I don't need to order hearing aid batteries. 

Which hearing aid accessories do you need? (h4 utility)
You will be sent a 6 month supply of each item you select below. 

[Interactive card component]
Accessory name (h4 utility)
**Quantity:** ## (Approximately 6 months supply)
**Last order date:** MM/DD/YYYY
(If unselected)[unselected checkbox button) Order this accessory 
(If selected)[selected checkbox button) Order this accessory

[Additional info component] What if I don't see the accessories I need?
(content inside the 'Additional info' component)If you need a different hearing aid accessory or an adjustment to an available item, call the DLC at 555-555-5555.

[Secondary button] Back
[Primary blue button] Continue

[Link to exit the form] Finish this application later.

Need help? (h2 utility)
For help placing an order, or if the order form isn’t working right, please call VA Benefits and Services at 800-827-1000.
If you have hearing loss, call TTY: 711.
```

## Use case - All accessories are ineligible 
Relevant links: TBD

## Description
TBD

## Feedback
TBD

## Content 
 ```
 TBD
 ```
