# Address Change Messaging Discovery

DRAFT

## Background

Based on design feedback from office hours, solutions for Content/IA changes address change modals were updated to meet suggestions that will allow us to move forward with modal solution. Their suggestions included changes to modal content/IA, as well as other questions to address surrounding the entire address update flow. In addition, a one-per-page solution was suggested, which we will not be exploring for Profile at this time.

Our team then held a workshop/brainstorming session to discuss the following:
-   The proposed modal mockups with updates to content/IA (see [#35582](https://github.com/department-of-veterans-affairs/va.gov-team/issues/35582))

-   Additional questions surrounding the entire address update process on the Contact information page: user flow, multiple alerts, edge cases -- see [#35985](https://github.com/department-of-veterans-affairs/va.gov-team/issues/35985).

Based on this group discussion, the modal content/IA was then updated and reviewed by Danielle (see [#35987](https://github.com/department-of-veterans-affairs/va.gov-team/issues/35987)). The resulting modal solution ([Sketch file](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/EL2Kvm2)) clears the concerns proposed at office hours and follows all design system guidance.

This discovery is a follow-up task addressing point 2 above -- to answer questions our team had that were separate from the modal content/IA. This includes questions regarding the "Use mailing address for home address" checkbox, how to handle multiple in line alerts, and other possible changes discussed during the session.

## Activities

-   Review the product outline

-   Team workshop to discuss edge cases and address change-related questions.

-   Researched answers to questions discussed in team workshop. 

-   [Discovery review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/meeting-notes/discovery_review_2022-02-16.md) with team

## Questions:

-   How many in-line alerts should appear and where?

-   Should we replicate checkbox and modal in reverse as well?
-   How to help avoid confusion between the two addresses?
-   Confirm what happens to the checkboxes in different scenarios.
-   Where would in-line alerts appears depending on errors for one or both of the addresses?
-   How to handle scenarios where address entered is not in the USPS database? I believe this pertains to what Liz had already mocked up for the new versions of the alerts (prompts to look at and re-edit address)
-   Could we (long term) remove the USPS address validation step if we did validation on the fly while someone inputs an address into the form fields?
-   Questions surrounding military address checkbox behavior.

## Explorations:

[Mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1644509317557/f8d97fbd5e4ec6c7f8c135f1fa29f077fe05e603?sender=u28f508d646c449cc1afe4873)

### In-Line Alerts

**How many alerts should appear and where?**
-   If home address cannot be updated, alert will appear on page.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/discovery/images/home_address_error_alert_on_page.png" />

-   If mailing address cannot be updated during modal flow, in-line error message will appear above the modal buttons - and follow the regular design system guidelines as if this were a page. Following these patterns, this can be retried a few times (guidelines should be in design system) and then at some point close becomes the only option.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/discovery/images/mailing_address_error_alert_in_modal.png" />

-   If both home and mailing are successfully updated after modal flow, two success alerts are shown on the Contact info page. **Why two?** Discussed that having the two alerts does best follow alert guidelines in the design system and logic used elsewhere "after something happens." Best follows user's mental model at this point.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/discovery/images/double_success_alert.png" />

### Checkbox and modal use
**Why not include the checkbox in the mailing field as well as the home field?** 
-   A constant checkbox in mailing could pose a problem because this would be reliant on there being a home address, which there might not be (home address is not required).
-   Could create room for error if Veterans quickly check this checkbox instead of more thoroughly evaluate mailing address. Our goal is to slow them down and prevent errors in the case of mailing address, not provide faster ways to answer that could lead to similar mistakes as those we are working to remedy.

**Why not include the modal in reverse as well - to prompt for home address update after the mailing is updated?** 
-   Because home address is not required, and this problem was presented to us for Mailing address only, for which it is important that updates are made and correct.
-   Could also open up more possibility of error by speeding things up with Mailing address - whereas our goal is to slow the user down so they thoroughly check their mailing address. 

### How to help avoid confusion between the two addresses?

Hint text will help users distinguish between home & mailing address and will be added to this project.

### Checkbox behavior

-   If checkbox is checked, auto populates with address and user still needs to press save/update 
-   Unchecking the box removes everything from the fields/completely wipes it
-   Editing the fields unchecks the checkbox

### How to handle scenarios where address entered is not in the USPS database? 

In previous discovery, Liz mocked up new modal versions of the alerts that prompt Veterans to double-check and either re-edit or confirm their address if the database does not recognize it. We won't implment the address confirmation modal design at this time because it could cause use cases in which three modals would be shown back to back. We will explore ways to use her solution in a non-modal format. 

### Could we (long term) remove the USPS address validation step if we did validation on the fly while someone inputs an address into the form fields?

Address validation changes are out of scope for this.

### Military base checkbox

There is a scenario where someone could have a military address for their mailing address, but does NOT have the "I live on a United States military base. Discovery around this has been added to the backlog for further exploration at a later date.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/discovery/images/military_base_checkbox.png" />

[Mural board](https://app.mural.co/t/vsa8243/m/vsa8243/1644509317557/f8d97fbd5e4ec6c7f8c135f1fa29f077fe05e603?sender=u28f508d646c449cc1afe4873)

## Discovery Review:

[Notes from Discovery Review with team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/meeting-notes/discovery_review_2022-02-16.md)

