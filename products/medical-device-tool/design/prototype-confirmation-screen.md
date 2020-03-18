# Prototype: Confirmation screen 

Navigation: <br>
[Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-confirmation-screen.md#description) | [Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-confirmation-screen.md#feedback) | [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/prototype-confirmation-screen.md#content)

Related links: Invision prototype: [(Desktop)](https://vsateams.invisionapp.com/share/MYVTQ79UGNP) [(Mobile)](https://vsateams.invisionapp.com/share/NCVTQ81RDH7) | [Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/5295)

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
Your order details (h3 utility)
**Order date:** Month DD, YYYY
Items ordered (h4 utility)
**Battery name**
Qty: ##
**Accessory name**
Qty: ##

How long will it take to receive my order? (h3 utility)
You will receive an email containing an order tracking number within 1-2 business days.
You are able to view both the status of your order and your order history any time.  

[Primary blue button] View your order history

What if I have questions about my order? (h3 utility)
If you have any questions about your order please call the DLC Customer Service Section at 303-273-6200 or email dalc.css@va.gov.
```
