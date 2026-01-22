# Email verification use cases

Last updated: December 2025

* Product documentation  
* [User flow](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=426-3819&t=N30vgrQI9DxPBK5E-1)  
* [Figma files](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-13933&t=N30vgrQI9DxPBK5E-1)

# Jump to

[Overview](#overview)

- [About Contact emails](#about-contact-emails)

- [To reproduce](#to-reproduce)

[Use cases](#use-cases)

- [No email verification required](#no-email-verification-required)

- [Email verification required](#email-verification-required)

   - [Verification emails](#verification-emails)

   - [Verification email landing pages](#verification-email-landing-pages)

   - [Interstitials](#interstitials)

   - [Alerts](#alerts)

   - [Contact email tag](#contact-email-tag)

# Overview

Email verification is part of the zero-silent failure initiative to ensure that user **Contact emails** are correct and monitored. To trigger the email verification process users must:

* Be ID-verified (LOA3);  
* Have a **Contact email** on file.

The experience will automatically verify **Contact emails** that match **verified** **Identity emails** to reduce user interruptions. When a user's emails do not match they will be prompted through a mix of emails, alerts, and interstitials to quickly verify their email.


## About Contact emails

**Contact email** is an **optional** field that \~71% of verified accounts have. **Contact email** is the communication method for email notifications on VA.gov. **Contact email** and **Identity email** are not the same, and do not interact in any way at this time.


## To reproduce

### Launch and follow-up

1. Sign-in with **any ID-verified staging account that is not [blocked](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)**.  
2. Navigate to Profile › Contact information.  
3. Scroll to the Contact email section and select the **Edit** button.  
4. Input a valid email address you can receive emails to that **does not match** the accounts Identity sign-in email. Select the **Save** button.  
5. **Do NOT confirm the email.** Confirmation email will send, modal will trigger, and alerts will show.  
6. Sign-out of the account. Then sign back in.  
7. Interstitial will trigger for review.

### Add or edit a Contact email

1. Sign-in with **any ID-verified staging account that is not [blocked](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)**.  
2. Navigate to Profile › Contact information.  
3. Scroll to the Contact email section and select the **Edit** button.  
4. Input a valid email address you can receive emails to that **does not match** the accounts Identity sign-in email. Select the **Save** button.  
5. Confirmation email will send, modal will trigger, and alerts will show.


# Use cases

## No email verification required 

If a user’s **Identity email** is verified, and matches their **Contact email,** the system will automatically verify their **Contact email**. If the user’s **Contact email** is automatically verified, they do not receive an email, or see the interstitials and alerts.

Once verified, the tag in the **Contact email** card updates to the email confirmed state. [Link to confirmed tag.](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-23312&t=M8ZlWxuzqe9EmKbV-1)



## Email verification required 

### Verification emails 

The **verification emails** trigger **once per session** when:

* A user is identity verified (LOA3);  
* A user has a **Contact email** on file;  
* A users **verified** **Identity email** and **Contact email** do not match;  
* A user navigates to the **My VA**, **Contact information**, or **Email and text notifications** page.  
  * OR the user **adds** or **updates** their Contact email that does not meet the above criteria.

No more than one email should trigger per session. If the user starts a new session, and meets the criteria, another email will trigger.

#### Launch and follow-up 

[Link to designs](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22694&t=bi4nwZ7eIU7SOX8f-1)

When the user triggers the interstitial, an email automatically sends to their **Contact email**. The email allows them to **confirm** or **edit** their email address. The confirmation link lasts 30 minutes. If expired, users can request a new link to be sent on the **Confirmation link expired** landing page while being unauthenticated.

#### Confirmation required, user adds or edits Contact email 

[Link to designs](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22736&t=bi4nwZ7eIU7SOX8f-1)

Email sends when a user **adds** or **edits** their **Contact email**, and they **need to verify their email address**. The email allows them to **confirm** their email address. The confirmation link lasts 30 minutes. If expired, users can request a new link to be sent on the **Confirmation link expired** landing page while being unauthenticated.

#### Confirmed email address 

[Link to designs](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22717&t=bi4nwZ7eIU7SOX8f-1)

Email sends when a user successfully confirms their Contact email. There are **no actions** on this email.

#### Confirmation not required, user adds or edits Contact email 

[Link to designs](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-36503&t=N30vgrQI9DxPBK5E-1)

Email sends when a user **adds** or **edits** their **Contact** **email**, and they **do not need to verify their email address.** There are **no actions** on this email.



### Verification email landing pages 

Email landing pages show when a user selects the **Confirm your email address** link from their email. The landing pages show for unauthenticated and authenticated users.

#### Confirmation success landing page

[Link to designs](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22671&t=N30vgrQI9DxPBK5E-1)

Shows when a user successfully confirms their Contact email. The user can navigate to the **homepage** or the **Email and text notifications** page from the landing page.

#### Confirmation link expired landing page 

[Link to designs](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22661&t=N30vgrQI9DxPBK5E-1)

Shows when a user selects an expired confirmation link. The only action is to **Resend confirmation link**.

#### Email already confirmed landing page 

[Link to designs](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22651&t=N30vgrQI9DxPBK5E-1)

Shows when a user selects a link that already confirmed their **Contact email**. The user can navigate to the **homepage** or the **Email and text notifications** page from the landing page.



### Interstitials 

The interstitials trigger **once per session** when:

* A user is identity verified (LOA3);  
* A user has a **Contact email** on file;  
* A users verified **Identity email** and **Contact email** do not match;  
* A user navigates to the **My VA**, **Contact information**, or **Email and text notifications** page.

There are three actions available on the interstitials:

* **Resend confirmation link**: Sends a new confirmation email.  
* **Edit your email address**: Triggers the edit as a subtask flow.  
* **Skip confirming your email address**: Allows the user to skip the task for a **single** session. If the user starts a new session, and meets the interstitial trigger criteria, the interstitial will show again.

#### Email sent interstitial 

[Link to designs](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22794&t=bi4nwZ7eIU7SOX8f-1)

The interstitial shows if the confirmation email successfully sends. The user can **resend** the link, **edit** their email, or **skip** confirming. Once the email is confirmed the page automatically updates to the **Email confirmed** interstitial.

#### Email confirmed interstitial 

[Link to designs](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22749&t=bi4nwZ7eIU7SOX8f-1)

The interstitial automatically shows when the email is successfully confirmed. The user can only **Continue to VA.gov**, which directs them to their original destination (either My VA, Contact information, or Email and text notifications).

#### Temporary email send failure interstitial 

[Link to designs](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22779&t=bi4nwZ7eIU7SOX8f-1)

The interstitial shows if the confirmation email has a temporary send failure. This could be due to the user's mailbox being full or the system is down. There is no way for us to know the exact cause of the temporary send failure.

The user can **resend** the link, **edit** their email, or **skip** confirming. If the user **resends** the confirmation link, and the email successfully sends, the page automatically updates to the **Email sent** interstitial.

#### Permanent email send failure interstitial 

[Link to designs](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22764&t=bi4nwZ7eIU7SOX8f-1)

The interstitial shows if the confirmation email has a permanent send failure. This could be due to the user's email being incorrect or if they blocked VA emails from their email provider. There is no way for us to know the exact cause of the permanent send failure.

The user can only **edit** their email, or **skip** confirming. They cannot attempt to resend the confirmation email.



### Alerts 

The **alerts** **appear** when:

* A user is identity verified (LOA3);  
* A user has a **Contact email** on file;  
* A users **verified** **Identity email** and **Contact email** do not match;  
* A user has an outstanding action to verify their **Contact email**.

The **alerts** **disappear** when the user's **Contact email** has been confirmed.

Slim vs. standard alert

* **Slim alerts** should only be used inline with the **Contact email** section on the **Contact information** page.  
* **Standard alerts** should appear below the page header on **My VA** and the **Email and text notifications** pages.

There are two actions available on the alerts:

* **Resend confirmation link**: Sends a new confirmation email. When the user selects the button a modal appears informing the email has sent ([link to modal](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22806&t=N30vgrQI9DxPBK5E-1)). Alerts appear and function the same between standard and slim alerts.  
* **Edit your email address**: Prompts user to edit their **Contact email**.  
  * The standard alert appears as a **link**, and directs the user to the edit as a subtask flow.  
  * The slim alert appears as a **button**, and directs the user to edit their information inline on the **Contact information** page.

#### Resend confirmation link alert 

[Link to designs](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22820&t=N30vgrQI9DxPBK5E-1)

The alert shows if the confirmation email successfully sent, and the user has not confirmed their email. The user can **Resend confirmation link** or **Edit your email address**.

#### Temporary email send failure alert 

[Link to designs](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22813&t=N30vgrQI9DxPBK5E-1)

The alert shows if the confirmation email has a temporary send failure. This could be due to the user's mailbox being full or the system is down. There is no way for us to know the exact cause of the temporary send failure. The user can **Resend confirmation link** or **Edit your email address**.

#### Permanent email send failure alert 

[Link to designs](https://www.figma.com/design/qe0ByBX1Ou5PFmVgeayzMG/Email-Verification?node-id=338-22802&t=N30vgrQI9DxPBK5E-1)

The alert shows if the confirmation email has a permanent send failure. This could be due to the user's email being incorrect or if they blocked VA emails from their email provider. There is no way for us to know the exact cause of the permanent send failure. The user can only **Edit your email address**. They cannot attempt to resend the confirmation email.


### Contact email tag 

Within the **Contact email** card on the **Contact information** page, a tag appears informing the user if their email is confirmed or not.

* Display **EMAIL NOT CONFIRMED** when the email is not verified.  
* Display **EMAIL CONFIRMED** when the email is verified.
