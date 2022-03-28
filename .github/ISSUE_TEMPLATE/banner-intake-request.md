---
name: Public Website Banner Intake Request Form
about: To file request with the VSA Public Websites
title: "<Type of Request> from <Team>"
labels: needs-grooming, vsa, vsa-public-websites, vsa-public-websites-intake
assignees: ''

---

# Public Websites Banner Intake Request Form

## Description

[Provide a brief description for this request. Please add any additional details here that will help our team understand the request]

## What do you need?

Choose one of the following and make sure you fill out at least the required details for it.

- [ ] Homepage banner
  **Required Details:**
  - `startsAt`: [What is the exact time we should show it? (Remember to include the timezone) e.g. '2020-06-09T14:00:00.014Z' or 'Immediately']
  - `expiresAt`: [What is the exact time we should stop showing it? e.g. 24 hours AFTER it starts showing]
  - `title`: [What will the title of the homepage banner be?]
  - `content`: [What will the content of the homepage banner be? Feel free to use HTML if desired.]
 
Visual Example:
![image](https://user-images.githubusercontent.com/70410912/119869662-be054b80-bedd-11eb-98dc-11ec71032670.png)

  
- [ ] Maintenance Banner
  **Required Details:**
  - `startsAt`: [What is the exact time we should show it? (Remember to include the timezone) e.g. '2020-06-09T14:00:00.014Z']
  - `expiresAt`: [What is the exact time we should stop showing it? e.g. 24 hours AFTER it starts showing]
  - `title`: [What is the title? _Default_: 'Site maintenance']
  - `content`: [What is the content? _Default_: "We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience."]
 
Visual Example:
![image (2)](https://user-images.githubusercontent.com/70410912/119874350-bbf1bb80-bee2-11eb-80a3-a21991c9e8a8.png)

 
  __Optional Details:__
  - `warning startsAt`: [Do you want to show a warning before the downtime happens? If so, how much time before we show the maintenance banner should we show the warning? e.g. 12 hours BEFORE it starts showing]
  - `warning title`: [What should the warning title be? _Default_: 'Upcoming site maintenance']
  - `warning content`: [What should the warning content be? _Default_: 'We’ll be doing some work on VA.gov. The maintenance will last x hours. During that time, you won’t be able to sign in or use tools.']

- [ ] Promo Banner
  **Required Details:**
  - `startsAt`: [What is the exact time we should show it? (Remember to include the timezone) e.g. '2020-06-09T14:00:00.014Z' or 'Immediately']
  - `expiresAt`: [What is the exact time we should stop showing it? e.g. 24 hours AFTER it starts showing]
  - `link url`: [The URL where a user is navigated to if they click the promo banner.]
  - `content`: [The text on the promo banner announcement.]
 
Visual Example:
![image (1)](https://user-images.githubusercontent.com/70410912/119869734-d2494880-bedd-11eb-9b0b-8bce727ec7a1.png)


## Stakeholders

Who specifically should we communicate with when building + deploying the banner?  Please provide relevant contact details and desired slack details for forward communication.
