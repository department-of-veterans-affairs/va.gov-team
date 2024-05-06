# My VA Claims and Appeals Frontend Documentation
Last updated: August 1, 2023

## When to show the ‘Claims and appeals’ section
We show this section for every LOA3 user.

## UX Specs
### Claims and appeals status card
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/6DE35B58-BF5A-45A8-9122-33C99486954A)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/E2F919C4-1E23-432E-82EC-11B4DC1424FA)

**Show card**

- If a user has an open claim or appeal, or their claim or appeal has been closed in the last 60 days.

**Do NOT show card**

- If a user has not had an open claim or appeal in the last 60 days.

**Visual specs**

- Use the [claims and appeals version of the card component](https://design.va.gov/components/card#claims-and-appeals) in the VA design system.

#### **Content**

Title

Date

Status

Review details (link)

**Content specs**

- Title: (Type of claim) received (date) - pulled from the claim details link. The claim details link is specific to the claim card. It is in the following format and the ###### is the claim number. https://va.gov/track-claims/your-claims/########/status
- Date: Latest update date, also pulled from the claim details link above 
- Status: Most recent completed status step in the "Status" table of the claim details link above
- Review details: Links to the claim details which is in the following format and the ###### is the claim number. https://va.gov/track-claims/your-claims/########/status

---

### If a user does not have an open claim or appeal, or a claim or appeal closed in the last 60 days

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/E6ADDE2C-0D24-484F-A829-CEA239BD56E6)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/2E99F689-11DF-4216-A2AE-6DA7F21A09CC)

**Show**

- If a user does not have any open claims or appeals, or they had a claim or appeal that closed over 60 days ago.

#### **Content**

You have no claims or appeals to show.

---

### If a user has multiple claims or appeals that are open or have been closed in the last 60 days

We only show a status card in this section for the claim or appeal that has been updated most recently. 

A max of **one** status card should be showing at any given time for a user.

---

### Learn how to file a claim link

![Screen Shot 2022-09-29 at 2 27 18 PM](https://user-images.githubusercontent.com/97965610/193113475-9ecfbcb2-8a04-4e83-8959-4c1c9e4af9df.png)

Use VA-icon `description` (as of 5/2024)

**Show**
- For all LOA3 users.

**Positioning**
- This link should appear on the lefthand side on desktop as the first link in the list, above "Manage all claims and appeals".

#### Content

[Learn how to file a claim](https://www.va.gov/disability/how-to-file-claim/)

---

### Manage all claims and appeals link

![Screen Shot 2022-09-29 at 2 27 18 PM](https://user-images.githubusercontent.com/97965610/193113475-9ecfbcb2-8a04-4e83-8959-4c1c9e4af9df.png)

- Use VA-icon `assignment_turned_in` (as of 5/2024)

**Show**
- For all LOA3 users.

**Positioning**
- This link should appear on the lefthand side on desktop, below the "Learn how to file a claim" link.

#### Content
[Manage all claims and appeals](https://www.va.gov/claim-or-appeal-status/)

---

## Error States

### Error State 1: The claims API call fails

#### Visual specs
- Use the [warning alert component](https://design.va.gov/components/alert#warning-alert) for the error message.
>**We can't access your claims or appeals information**
>
>We're sorry. Something went wrong on our end. If you have any claims and appeals, you won't be able to access your claims and appeals information right now. Please refresh or try again later.

**Positioning**
- This should appear under the 'Claims and appeals' header on the lefthand side on desktop.

#### Mock-ups
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/D44E3932-6985-48FF-AEDA-BC2D85065B04)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/D61859AD-13DE-473E-8914-990CED053569)
