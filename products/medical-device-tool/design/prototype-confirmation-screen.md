# Prototype: Confirmation screen 

Navigation: <br>
**Default** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-confirmation-screen.md#description) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-confirmation-screen.md#content)<br>
**Submission error** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-confirmation-screen.md#description-1) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-confirmation-screen.md#content-1)<br>
**Empty order submission** [Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-confirmation-screen.md#description-2) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-confirmation-screen.md#content-2)<br>

## Use case - Default

Related links: Invision prototype: [(Desktop)](https://vsateams.invisionapp.com/share/MYVTQ79UGNP) [(Mobile)](https://vsateams.invisionapp.com/share/NCVTQ81RDH7) | [Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6712)

### Description 
The confirmation screen follows the submission of every form to both inform the veteran that their order has been submitted and to provide next steps while they wait for their order to be delivered.<br>
The initial focus point should be at the top of the page "Skip to content" link (normal, no dynamic focus management).
Once "Skip to content" is selected, the focus should be on h1: Order hearing aid batteries and accessories

### Content
**Note:** Content still needs to be reviewed by content team. Utility classes need to be reviewed by A11Y team. 

```
Home > Health care > Order hearing aid batteries and accessories

# Order hearing aid batteries and accessories [h1]
Equal to VA Form 2346 (Request for Batteries and Accessories)

**Please print this page for your records.**

This is the personal information we have on file for you. 

[Alert component]
Your order has been submitted
We’ll send you an email confirming your order to email@gmail.com

[Blue card component]
Request for Batteries and Accessories (Form 2346) (h4 utility)
for John Doe
**Items ordered**(h5 utility)
<ul>
<li>Battery name (Quantity: ##)</li>
<li>Accessory name (Quantity: ##)</li>
</ul>
**Shipping address**(h5 utility)
1234 S Street St
Tampa, FL 33616
**Date submitted**(h5 utility)
November 7, 2019
**Confirmation number**(h5 utility)
#00000000

How long will it take to receive my order? (h3 utility)
You will receive an email containing an order tracking number within 1-2 business days.

What if I have questions about my order? (h3 utility)
If you have any questions about your order please call the DLC Customer Service Section at 303-273-6200 or email dalc.css@va.gov.
```

## Use case - Submission error

Related links: Invision prototype: [(Desktop)](https://vsateams.invisionapp.com/share/STXMOEPZ3W4) | [Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9783)

### Description 
If an order is submitted and is unable to be passed through the API to the DLC, we will need to notify the user that their order was not submitted and provide next steps to place an order. 

### Content
**Note:** Content still needs to be reviewed by content team.

This is the content for the error alert.
```
We’re sorry. Your order wasn’t submitted. (Bitter Bold 20pt)
Your order for hearing aid supplies wasn’t submitted because something went wrong on our end.

What you can do (Bitter Bold 15pt)
For help ordering hearing aid batteries and accessories, please call the DLC Customer Service Section at 303-273-6200 or email dalc.css@va.gov.
```

## Use Case - Empty order submission

Related links: Invisionn prototype: [Desktop](https://vsateams.invisionapp.com/share/6MVTG94WNH5#/422126004_Empty_Order_Submission) | [Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10373)

### Description
Due to the form system's limitations, we are unable to catch empty orders prior to submission. We need to notify the user that their order didn't submit because no items were selected and provide next steps to place an order. 

### Content

This is the content for the error alert. 
```
We're sorry. Your order wasn't submitted (Bitter Bold 20pt)
Your order for hearing aid supplies wasn’t submitted because you didn’t select any items.

What you can do (Bitter Bold 15pt)
If you want to (place an order online)[https://va.gov/hearing-aid-batteries-and-accessories/introduction], please select at least one item before submitting your order. For help ordering hearing aid batteries and accessories, please call the DLC Customer Service Section at 303-273-6200 or email dalc.css@va.gov.
```
