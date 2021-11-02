# Profile: address validation overrides

Specs for Q4 2021 UX improvements to address validation

## Summary of changes

- Move address validation UX from profile edit mode into [modal component](https://design.va.gov/storybook/?path=/docs/components-modal--default) from design system
- Remove warning alert component
- Copy updates

## Address override with suggestions

**Accessibility note**

We'll need to use `aria-describedby` to ensure screenreaders read the bold text. For example, the screenreader should read out "811 Vermont Ave NW Washington, DC 20571 Suggested address" when it reads the second radio option.

**Copy**

> [title] Confirm your address
>
> [body] We can’t confirm the address you entered with the U.S. Postal Service. 
>
> [Legend] Tell us which of these addresses you’d like us to use.
>
> **You entered:**
>
> {user entered address}
>
> **Suggested address(es**):
>
> {suggested addresses}
>
> [button] Use this address
>
> [button] Cancel

**Mock-ups**

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/designs/2021-alert-updates/address-override-with-suggestions.png)

## Address override without suggestions

**Copy**

> [title] Confirm your address
>
> [body] We can’t confirm the address you entered with the U.S. Postal Service. Confirm that the address you entered is correct, or cancel to edit it.
>
> **You entered:**
>
> {user entered address}

**Mock-ups**

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/designs/2021-alert-updates/address-override-without-suggestions.png)

## Bad unit number

**Copy**

> [title] Confirm your address
>
> [body] U.S. Postal Service records show that there may be a problem with the unit number for this address. Confirm that you want us to use this address as you entered it. Or, cancel to edit the address.
>
> **You entered:**
>
> {user entered address}
>
> [button] Use this address
>
> [button] Cancel

**Mock-ups**

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/designs/2021-alert-updates/bad-unit-number.png)

## Missing unit number

**Copy**

> [title] Confirm your address
>
> [body] U.S. Postal Service records show this address may need a unit number. Confirm that you want us to use this address as you entered it. Or, cancel to go back and add a unit number.
>
> **You entered:**
>
> {user entered address}
>
> [button] Use this address
>
> [button] Cancel

**Mock-ups**

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/designs/2021-alert-updates/missing-unit-number.png)



