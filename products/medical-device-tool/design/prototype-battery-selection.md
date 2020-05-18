
# Prototype: C2 P1: Battery selection 

Navigation: <br>
**Use case - Select batteries (eligible):** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-battery-selection.md#description) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-battery-selection.md#feedback) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-battery-selection.md#content)<br>
**Use case - Select batteries (ineligible, no items shown):** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-battery-selection.md#description-1) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-battery-selection.md#feedback-1) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-battery-selection.md#content-1)<br>
**Use case - Select batteries (ineligible, items shown:** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-battery-selection.md#description-2) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-battery-selection.md#feedback-2) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-battery-selection.md#content-2)

## Use case - Select batteries (eligible)
Related links:<br>
**1.** Invision prototype: Eligible products [(Desktop)](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/416259607_C2P1-_Batteries_V-02) <br>
**2.** Invision prototype: Ineligible products, items shown [(Desktop)](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/418131332_C2_P1-_Select_Supplies_-_All_Devices_Ineligible_-items_Shown-) <br>
**3.** Invision prototype: Ineligible products, no items shown [(Desktop)](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/418131333_C2_P1-_Select_Supplies_-_All_Devices_Ineligible_-no_Items_Shown-) <br>

### Description 
This is the flow for the default state allowing the veteran to select the hearing aid(s) they would like to place batteries for, if they are eligible.

The initial focus point per screen: <br>
**All battery selection pages** - H1 _Order hearing aid batteries and accessories_<br>

### Content

```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Chapter title] 2 of 3 Select your supplies

[Title] Batteries (hidden)

Add batteries to your order (h4 utility) 
You'll be sent a 6-month supply of batteries for each device you choose below. You can only order batteries for each device once every 5 months.

[Interactive card component]
Hearing aid name (h4 utility)
Prescribed DD/MM/YYYY
[Blue bar component inside interactive card component]
**Battery:** Battery name 
**Quantity:** ## 
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

## Use case - Select batteries (ineligible, no items shown)
Relevant links: [Invision prototype (Desktop)](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/418131332_C2_P1-_Select_Supplies_-_All_Devices_Ineligible_-items_Shown-) | [Github issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5796)

### Description
If a Veteran is ineligible for any batteries and we cannot show any devices due to rechargeable-only devices or lack of orders within 2 years, we'll show them an alert explaining why they can't add batteries to their order.<br>
Initial focus point should be on the H1: _Order hearing aid batteries and accessories_.

## Content 
```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Chapter title] 2 of 3 Select your supplies

[Title] Batteries (hidden)

Info alert
You can't add batteries to your order at this time (h4 utility)
You can't order batteries for your hearing aids because:
- They don't require batteries, **or**
- You haven't placed an order for hearing aid batteries within the past 2 years.
If you need to place an order for hearing aid batteries, call the DLC Customer Service Station at 303-273-6200 or email dlc.css@va.gov

[Secondary button] Back
[Primary blue button] Continue

[Link to exit the form] Finish this application later.

Need help? (h2 utility)
For help placing an order, or if the order form isn’t working right, please call VA Benefits and Services at 800-827-1000.
If you have hearing loss, call TTY: 711.
```

## Use case - Select batteries (ineligible, items shown)
Relevant links: [Invision prototype (Desktop)](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/418131332_C2_P1-_Select_Supplies_-_All_Devices_Ineligible_-items_Shown-) | [Github issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5796)

### Description
If a Veteran is ineligible to order any of their assigned batteries at a given time due to ordering too recently, we'll show them the alert and their product cards with last order date and next available order date.<br>
Initial focus point should be on the H1: _Order hearing aid batteries and accessories_.

## Content 
```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Chapter title] 2 of 3 Select your supplies

[Title] Batteries (hidden)

Info alert
You can't add batteries to your order at this time (h4 utility)
You can't order batteries for your hearing aids because:
- They don't require batteries, **or**
- You recently ordered batteries for this device. You can only reorder batteries for each device once every 5 months.

[Interactive card component]
Hearing aid name (h4 utility)
Prescribed DD/MM/YYYY
[Blue bar component inside interactive card component]
**Battery:** Battery name 
**Quantity:** ## 
**Last order date:** MM/DD/YYYY
[Warning alert component]
You can't reorder batteries for this device until [Last order date + 5 months](h5 utility)
You can only order batteries for each device once every 5 months. Each battery order comes with a 6-month supply. 
If you need batteries sooner, please call the DLC Customer Service Station at 303-273-6200 or email dlc.css@va.gov.

[Secondary button] Back
[Primary blue button] Continue

[Link to exit the form] Finish this application later.

Need help? (h2 utility)
For help placing an order, or if the order form isn’t working right, please call VA Benefits and Services at 800-827-1000.
If you have hearing loss, call TTY: 711.
```
