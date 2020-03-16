# Prototype: Introduction screen

Navigation: <br>
**Default:** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-introduction-screen.md#description) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-introduction-screen.md#content)<br>
**Use case - Veteran is deceased:** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-introduction-screen.md#description-1) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-introduction-screen.md#content-1) <br>
**Use case - No items are eligible for resupply:** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-introduction-screen.md#description-2) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-introduction-screen.md#content-2)<br>
**Use case - Veteran is not eligible for the benefit:** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-introduction-screen.md#description-3) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-introduction-screen.md#content-3)<br>

## Default 

Relevant links: Invision prototype [(Desktop)](https://vsateams.invisionapp.com/share/6CVSW1NTJB4) [(Mobile)](https://vsateams.invisionapp.com/share/TKVSW1W9C3G) | [Github issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5250)

### Description 
This is the default introduction screen for the MDT form. All veterans must log in before navigating to the order form, so the only alert that needs to be displayed is the _authenticated pre-fill and save form_ info alert. 

### Content
**Note:** Content still needs to be reviewed by content team. Utility classes need to be reviewed by A11Y team. 

```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Info alert] Note: Since you’re signed in to your account, we can prefill part of your application based on your account details. You can also save your order in progress and come back later to finish placing it.

[Primary green button] Order hearing aid batteries and accessories

## Follow the steps below to order hearing aid batteries and accessories. (h4 utility)

[Subway map]
1. Prepare (h5 utility) 
To place an order, you’ll need your:
- Shipping address
- Email address
- Hearing aid information

What if I need help with my order?
If you need help ordering hearing aid batteries and accessories, you can contact the Denver Logistics Center (DLC) at 303-273-6200.

2. Place your order (h5 utility)
Complete this hearing aid batteries and accessories order form. 
These are the steps you can expect when placing an order:
- Confirm your personal information 
- Confirm or edit your shipping address and email address
- Select any hearing aids that need batteries
- Select any hearing aid accessories you need
- Review and submit order
After submitting the order form, you’ll get a confirmation message. You can print this for your records.

3. Track your order (h5 utility)
You will receive an email with an order tracking number 1-2 days after your order is submitted.

4. Receive your order (h5 utility) 
You should receive your order within the timeframe indicated by the order tracking number.

What if I have questions about my order?
If you have questions about your order, you can contact the Denver Logistics Center (DLC) at 303-273-6200.

[Primary green button] Order hearing aid batteries and accessories

Respondent burden: 00 minutes
OMB Control #: 0000-0000
Expiration date: MM/DD/YYYY
Privacy Act Statement

Need help? (h2 utility)
For help placing an order, or if the order form isn’t working right, please call VA Benefits and Services at 800-827-1000.
If you have hearing loss, call TTY: 711.
```

## Use case - Veteran is deceased 

Relevant links: Invision prototype [(Desktop)](https://vsateams.invisionapp.com/share/P5WDY316YEC) | [Github issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6693)

### Description 
If a Veteran's record displays that they are deceased, they should not be able to place an order for hearing aid batteries or accessories. However, we want to provide an alert indicating why they cannot place an order and who to contact if their record is incorrectly displaying that they're deceased.  

### Content
**Note:** Content still needs to be reviewed by content team. Utility classes need to be reviewed by A11Y team. 

```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Warning alert] Our records show that this Veteran is deceased (H4 utility)
 We can't fulfill an order for this Veteran.
 If this information is incorrect, please call Veterans Benefits Assistance at 800-827-1000, Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.
```

## Use case - No items are available for resupply 

Relevant links: Invision prototype [(Desktop)](https://vsateams.invisionapp.com/share/YHWEKTC2AXQ) | [Github issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6694)

### Description 
If the Veteran has no hearing aid batteries or accessories available for resupply, they they should be restricted from entering the form. This design follows the pattern used on the 10-10CG's _Deceased veteran_ state to provide consistency across VA.gov. 

### Content
**Note:** Content still needs to be reviewed by content team. Utility classes need to be reviewed by A11Y team. 

```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Warning alert] You can’t place an order until MM/DD/YYYY (H4 utility)
Our records show that none of your items are available for resupply until MM/DD/YYYY.
If you need an item sooner, contact the DLC Customer Service Section at 303-273-6200 or email dalc.css@va.gov.
```

## Use case - Veteran is not eligible for the benefit

Relevant links: Invision prototype [(Desktop)](https://vsateams.invisionapp.com/share/KVWFFMP97YU) | [Github issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6275)

## Description 
This is an error state for if an ineligible, authenticated Veteran navigates to the form. It is important to provide information for who the Veteran should contact if they should be eligible to order resupply. This design follows the pattern used on the 10-10CG's _Deceased veteran_ state to provide consistency across VA.gov. 

### Content
**Note:** Content still needs to be reviewed by content team. Utility classes need to be reviewed by A11Y team. 

```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories
Equal to VA Form 2346 (Request for Batteries and Accessories)

[Warning alert] You cannot place an order for hearing aid batteries and accessories
Our records show that you aren’t eligible to order hearing aid batteries and accessories.
If this information is incorrect, contact your audiologist to update your record.
[Find contact information for your VAMC with the facility locator.](https://www.va.gov/find-locations/)
```
