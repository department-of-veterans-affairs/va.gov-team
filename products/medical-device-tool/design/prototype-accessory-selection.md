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
This is the default flow allowing veterans to add additional accessories to their order. Similar to the pattern on the [Battery selection](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-battery-selection.md#description) flow, the veteran will be prompted with radio buttons asking if they would like to add accessories or not. If they select 'Yes, I need to order hearing aid accessories.' then progressive disclosure will reveal the items they have ordered in the past two years. <br>
**Note:** The items should be displayed chronologically with the most recently available item for reorder displayed first. This will allow veterans to be presented with their eligible items first in the case of having some ineligible items on record. <br><br>
The initial focus point for each screen: <br>
**Default page - unselected:** H1 _Order hearing aid batteries and accessories_<br>
**Default page - 'no' selected:** The radio button _No, I don't need to order hearing aid accessories._<br>
**Default page - 'yes' selected:** The radio button _Yes, I need to order hearing aid accessories._<br>

## Feedback
**Internal slack thread 03/03/2020**<br>
There was a discussion thread around the checkbox button styling. The design was originally using a plus icon to visually represent adding an item to the Veteran's order and a checkmark icon when the item was added to the order. However, this pattern posed accessibility concerns surrounding how a screenreader would read out that content. The design was updated to show checkboxes that toggle instead of iconography. 

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
Relevant links:<br>
**1.** Invision prototype [(Desktop)](https://vsateams.invisionapp.com/share/G6W9N8F4TH7). <br>
**2.** [Github Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5798)

## Description
This use case covers if a veteran does not have any accessories that are currently eligible for resupply. Additionally, the card components in this design can be applied to other combinations of eligible/ineligible accessory layouts. Even though none of the hearing aid accessories are eligible for resupply, it's important to display the items in case either a veteran is expecting to be able to order one or they don't see an expected accessory. Initial focus point should be on h1: Order hearing aid batteries and accessories 

## Feedback
TBD

## Content 
 ```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Chapter title] 2 of 3 Select your supplies

[Title] Add hearing aid accessories to your order (h4 utility)

[Informational alert] 
None of your hearing aid accessories are eligible for battery resupply
If you need to order resupply for your hearing aid accessories, call the DLC at 555-555-5555.

**These are the hearing aid accessories we have on file for you:**

[Card component]
Accessory item name [h4 utility]
**Quantity:** ## (Approximately 6 months supply)
**Last order date:** MM/DD/YYYY
[Warning alert inside card component] 
You cannot reorder this item until MM/DD/YYYY.
[Additional info component inside warning alert] Why can't I order this item?
(content inside the 'Additional info' component)You can only order a hearing aid accessory once every 5 months. Each order comes with enough items for approximately 6 months. If you need an item sooner, call the DLC at 303-273-6200.

[Additional info component] What if I don't see the accessories I need?
(content inside the 'Additional info' component)If you need a different hearing aid accessory or an adjustment to an available item, call the DLC at 555-555-5555.

[Secondary button] Back
[Primary blue button] Continue

[Link to exit the form] Finish this application later.

Need help? (h2 utility)
For help placing an order, or if the order form isn’t working right, please call VA Benefits and Services at 800-827-1000.
If you have hearing loss, call TTY: 711.
 ```
