# 1095-B Release Plan


## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)


### Planning:

We’re planning for our MVP to be launched August 2022. It will launch ‘dark’: not announced to Veterans or linked to from other VA.gov pages.  

Because this product is a React widget on a Drupal page, it can not be tested in Staging. To mitigate this we will conduct two rounds of UAT testing in production. 

First, we’ll test with Veterans in VFS and with other CEDAR contractors in an informal smoke test. 

- Desired date range or test duration: 8/22/22 – 8/25/22

- Desired number of users: 5 - 8 

- How you'll recruit the right production test users:

  - Guerilla testing through Veterans with health care on existing VFS teams.
  - We’ll use Perigean to

- How you'll conduct the testing:

  - We’ll observe users download the form, and have them verify that the data in the form is correct. We’ll do this for the PDF and text versions of the form.
  - We’ll observe users download the text version of the form, use a screen reader, and verify that the data is correct.

- How you'll give the test users access to the product in production w/o making it live on VA.gov

  - We’re implementing a feature toggle that will allow us to allowlist specific users since they’ll need to authenticate. 

We’ll also do moderated UAT testing.

- Desired date range or test duration: 8/25/22 – 9/1/22

- Desired number of users: 8 - 12

- How you'll recruit the right production test users:

  - We’ll use Perigean to recruit Veterans and dependents

- How you'll conduct the testing:

  - We’ll observe users download the form, and have them verify that the data in the form is correct. We’ll do this for the PDF and text versions of the form
  - We’ll observe users download the text version of the form, use a screen reader, and verify that the data is correct

- How you'll give the test users access to the product in production w/o making it live on VA.gov

  - We’re implementing a feature toggle that will allow us to allowlist specific users since they’ll need to authenticate. 


### Results:

(_Instructions: _This section to be completed after Phase I is done)

- Number of users: x
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no
- If yes, what: lorem ipsum


## Phase II: Staged Rollout (also known as unmoderated production testing)

### Do I need a staged rollout?

### We’re requesting an exception from a staged rollout at this time. Here’s why:

- We’re launching dark. There will be no links on VA.gov pointing to the 1095-B page, and we’re not broadcasting that the page is available. 
- This form is only relevant during tax season (and most users don’t need it to file their taxes)
- Once we launch the ability to opt-in to paperless delivery (which is not a part of this MVP), we’ll consider a staged rollout at that time. We’ll be communicating the availability of the 1095-B form at that time. 
- It’s a relatively simple page. 


## Go Live!


### Planning:

- Desired date: 09/01/22 (we’re launching dark, so would already be in production)

We’re launching well ahead of tax season when users would even potentially need the 1095-B form. There’s no driver to drive users to the 1095-B page. There are no KPIs for this MVP. We’ll have KPIs established once we’re ready to release the paperless delivery opt-in.  

All users during the next tax season (2022) are likely to still receive the physical mail version, so we don’t imagine demand is going to be high. 

Go / No Go: (ready / not ready)\[<https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md>]

The 1-week and 1-month results will be more relevant once we have paperless delivery built out. 


### 1-week results:


### _(Instructions: Fill out this section when we actually have results) _

- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no
- If yes, what: lorem ipsum


### 1-month results:

(Instructions: Fill out this section when we actually have results) 

- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no
- If yes, what: lorem ipsum


## Post-launch Questions

(Instructions: Fill out this section when we actually have results) 

_To be completed once you have gathered your initial set of data, as outlined above._

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders, if any?
3. Which of the assumptions you listed in your product outline were/were not validated?
4. How might your product evolve now or in the future based on these results?
