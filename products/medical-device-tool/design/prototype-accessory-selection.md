
# Prototype: C2 P2: Accessory selection 

Navigation: <br>
**Select accessories (Default):** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#description) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#feedback) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#content)<br>
**Use case - All accessories are ineligible:** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#description-1) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#feedback-1) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#content-1)<br>
**Use case - Veteran has no accessories on record:** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#description-3) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#feedback-3) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-accessory-selection.md#content-3)<br>

## Use case - Select accessories
Relevant links: <br>
**1.** Invision Prototype: Select accessories (eligible) [(Desktop)](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/416259608_C2P2-_Accessories_V-02) <br>
**2.** [Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5797)

### Description
This is the default flow allowing veterans to add additional accessories to their order. Similar to the pattern on the [Battery selection](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-battery-selection.md#description). <br/>
**Note:** The items should be displayed chronologically with the most recently available item for reorder displayed first. This will allow veterans to be presented with their eligible items first in the case of having some ineligible items on record. <br><br>
The initial focus point for each screen: <br>
**All accessory cases:** H1 _Order hearing aid batteries and accessories_<br>

## Content 
```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Chapter title] 2 of 3 Select your supplies

[Title] Accessories (hidden)

Select the hearing aid accessories you need (h4 utility) 
You'll be sent a 6-month supply for each accessory you choose below. You can only order each hearing aid accessory once every 5 months.

Accessory name (h4 utility)
**Quantity:** ## (Approximately 6 months supply)
**Last order date:** MM/DD/YYYY
(If unselected)[unselected checkbox button) Order this accessory 
(If selected)[selected checkbox button) Order this accessory

[Additional info component] What if I don't see the accessories I need?
(content inside the 'Additional info' component)If you need a different hearing aid accessory or an adjustment to an available item, call the DLC Customer Service Section at 303-273-6200 or email dalc.css@va.gov.

[Secondary button] Back
[Primary blue button] Continue

[Link to exit the form] Finish this application later.

Need help? (h2 utility)
For help placing an order, or if the order form isn’t working right, please call VA Benefits and Services at 800-827-1000.
If you have hearing loss, call TTY: 711.
```

## Use case - All accessories are ineligible 
Relevant links:<br>
**1.** Invision prototype [(Desktop)](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/407889090_C2_P2-_Select_Supplies_-_Accessories_-_Ineligible) <br>
**2.** [Github Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5798)

## Description
This use case covers if a veteran does not have any accessories that are currently eligible for resupply. Additionally, the card components in this design can be applied to other combinations of eligible/ineligible accessory layouts. Even though none of the hearing aid accessories are eligible for resupply, it's important to display the items in case either a veteran is expecting to be able to order one or they don't see an expected accessory.<br/>
The initial focus point for this screen: H1 - _Order hearing aid batteries and accessories_

## Content 
```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Chapter title] 2 of 3 Select your supplies

[Title] Accessories (hidden)

[Informational alert] 
You can't add accessories to your order at this time(h4 utility)
Our records show that your accessories aren't available for reorder until [date]. You can only order items once every 5 months.
If you need items sooner, call the DLC at 303-273-6200 or email dalc.css@va.gov.

**These are the hearing aid accessories we have on file for you:**

[Card component]
Accessory item name [h4 utility]
**Quantity:** ## (Approximately 6 months supply)
**Last order date:** MM/DD/YYYY
[Warning alert inside card component] 
You cannot reorder this item until MM/DD/YYYY.
[Additional info component inside warning alert] Why can't I order this item?
(content inside the 'Additional info' component)You can only order a hearing aid accessory once every 5 months. Each order comes with enough items for approximately 6 months. If you need an item sooner, call the DLC Customer Service Section at 303-273-6200 or email dalc.css@va.gov.

[Additional info component] What if I don't see the accessories I need?
(content inside the 'Additional info' component)If you need a different hearing aid accessory or an adjustment to an available item, call the DLC Customer Service Section at 303-273-6200 or email dalc.css@va.gov.

[Secondary button] Back
[Primary blue button] Continue

[Link to exit the form] Finish this application later.

Need help? (h2 utility)
For help placing an order, or if the order form isn’t working right, please call VA Benefits and Services at 800-827-1000.
If you have hearing loss, call TTY: 711.
```

## Use case - Veteran has no accessories on record
Relevant links:<br>
**1.** Invision prototype [(Desktop)](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/411094793_C2_P2-_Select_Supplies_-_Accessories_-_No_Accessories_On_Record) <br>
**2.** [Github Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7134)

## Description
This use case covers if a veteran has no accessories on their record for the last two years. We leave this page in the flow as we want to ensure that Veterans know they are eligible to order accessories and how to do it in lieu of being able to order online.
The initial focus point for this screen: H1 - _Order hearing aid batteries and accessories_

## Content 
```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Chapter title] 2 of 3 Select your supplies

[Title] Accessories (hidden)

[Informational alert] 
You can't add accessories to your order at this time.(h4 utility)
You can only order accessories online that you've received in the past two years. 
If you need accessories like domes, wax guards, cleaning supplies, or desiccant, call the DLC Customer Service Section at 303-273-6200 or email dalc.css@va.gov.

[Secondary button] Back
[Primary blue button] Continue

[Link to exit the form] Finish this application later.

Need help? (h2 utility)
For help placing an order, or if the order form isn’t working right, please call VA Benefits and Services at 800-827-1000.
If you have hearing loss, call TTY: 711.
```
