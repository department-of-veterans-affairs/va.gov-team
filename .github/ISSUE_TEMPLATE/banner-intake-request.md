---
name: Public Website Banner Intake Request Form
about: To file request with the VSA Public Websites
title: <Type of Request> from <Team>
labels: vsa-public-websites, vsa, vsa-public-websites-intake, needs-grooming
assignees: Public Websites, brianalloyd

---


# Banner intake request template

## Description

[Write a brief description with the context of the request. Feel free to add any additional info here if you need to.]

## What do you need?

Choose one of the following and make sure you fill out at least the required details for it.

- [ ] Homepage banner
  **Required Details:**
  - `startsAt`: [What is the exact time we should show it? (Remember to include the timezone) e.g. '2020-06-09T14:00:00.014Z' or 'Immediately']
  - `expiresAt`: [What is the exact time we should stop showing it? e.g. 24 hours AFTER it starts showing]
  - `title`: [What will the title of the homepage banner be?]
  - `content`: [What will the content of the homepage banner be? Feel free to use HTML if desired.]
  
- [ ] Maintenance Banner
  **Required Details:**
  - `startsAt`: [What is the exact time we should show it? (Remember to include the timezone) e.g. '2020-06-09T14:00:00.014Z']
  - `expiresAt`: [What is the exact time we should stop showing it? e.g. 24 hours AFTER it starts showing]
  - `title`: [What is the title? _Default_: 'Site maintenance']
  - `content`: [What is the content? _Default_: "We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience."]

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

## Stakeholders

Who specifically should we communicate with when building + deploying the banner?
