# 1095-B release plan

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)


### Planning:

We’re planning for our MVP to be launched August 2022. It will launch ‘dark’: not announced to Veterans or linked to from other VA.gov pages.  

Because this product is a React widget on a Drupal page, it can not be tested in Staging. To mitigate this we will conduct two rounds of UAT testing in production. 

#### First round of moderated testing
First, we’ll test with Veterans in VFS and with other CEDAR contractors in an informal smoke test. 

- Desired date range or test duration: 8/22/22 – 8/24/22

- Desired number of users: 5 - 8

- How you'll recruit the right production test users:
  - Guerilla testing through Veterans with health care on existing VFS teams.
 
- How you'll conduct the testing:
  - We’ll observe users download the form, and have them verify that the data in the form is correct. We’ll do this for the PDF and text versions of the form.
  - We’ll observe users download the text version of the form and verify that the data is correct.
  - We'll ask some users to download the text version of the form and use a screen reader to ensure accessibility

- How you'll give the test users access to the product in production w/o making it live on VA.gov
  - We’re implementing a feature toggle that will allow us to allowlist specific users since they’ll need to authenticate. 

#### Second round of moderated testing

We’ll also do moderated UAT testing.

- Desired date range or test duration: 8/25/22 – 8/26/22

- Desired number of users: 8 - 12

- How you'll recruit the right production test users:

  - We’ll use Perigean to recruit Veterans and dependents

- How you'll conduct the testing:

  - We’ll observe users download the form, and have them verify that the data in the form is correct. We’ll do this for the PDF and text versions of the form
  - We’ll observe users download the text version of the form and verify that the data is correct
  - We'll ask some users to download the text version of the form and use a screen reader to ensure accessibility

- How you'll give the test users access to the product in production w/o making it live on VA.gov

  - We’re implementing a feature toggle that will allow us to allowlist specific users since they’ll need to authenticate. 


### Results:

*(Instructions: This section to be completed after Phase I is done)*

- Number of users: x
- Number of bugs identified / fixed: x/x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no
- If yes, what: lorem ipsum


## Phase II: Staged Rollout (also known as unmoderated production testing)

### Planning

* Desired date range: 
* How will you make the product available in production while limiting the number of users who can find/access it? 
    * This MVP is launching dark. There will be no links on VA.gov pointing to the 1095-B page, and we're not otherwise broadcasting that the page is avaiable. We will use feature toggles to manage traffic. 
    * This form is only relevant during tax season (and most users don't need it to file their taxes). Since we're not launching during tax season, we expect traffic to the page to be low. 

### Stage A: Canary

Length of time: 8/26/2022 - 8/30/2022

Percentage of users: 25%

It is not possible to predict how many users we'll have for the 1095-B. We expect organic traffic to be extremely low, but we'll monitor for any major errors. If we see no major errors, we'll proceed to Stage B. To understand the traffic patterns for 1095-B, see this [Google Trends data](https://trends.google.com/trends/explore?geo=US&q=1095-B) 

### Stage B: Moderate

Length of time: 8/30/2022 - 9/6/2022

Percentage of users: 50%
 
It's not possible to predict how many users we'll have for the 1095-B. We expect organic traffic to be extremely low, but we'll monitor for any major errors. If we see no major errors, we'll proceed to Go Live.

## Go Live!

### Planning:

- Desired date: 09/6/22 

We’re launching well ahead of tax season when users would even potentially need the 1095-B form. There’s no driver to drive users to the 1095-B page. There are no KPIs for this MVP. We’ll have KPIs established once we’re ready to release the paperless delivery opt-in.  

All users during the next tax season (2022) are likely to still receive the physical mail version, so we don’t imagine demand is going to be high. 

Go / No Go: (ready / not ready)\[<https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md>]

The 1-week and 1-month results will be more relevant once we have paperless delivery built out. 


### 1-week results:


*(Instructions: Fill out this section when we actually have results)*

- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no
- If yes, what: lorem ipsum


### 1-month results:

*(Instructions: Fill out this section when we actually have results)*

- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no
- If yes, what: lorem ipsum


## Post-launch Questions

*(Instructions: Fill out this section when we actually have results)*

_To be completed once you have gathered your initial set of data, as outlined above._

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders, if any?
3. Which of the assumptions you listed in your product outline were/were not validated?
4. How might your product evolve now or in the future based on these results?
