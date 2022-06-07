# View Payments: Discovery Synthesis

*Nick Wygonik, UX Designer/Researcher*

*DRAFT: last updated 3/9/2020*

[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/payment-history)


## Problem Statement 
I am a Veteran who needs to review my payment history so that I can ensure they are correct, I haven't missed any and am informed about each in case I need to make a change affecting the benefits I deserve.

## Tickets
[Migrate "View Payment History" from eBenefits to VA.gov (#1397)]( https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/1397) contains 
(Epic)

### Zenhub Board (3/9/2020)
**Backlog**
-    [#5643 Conduct Discovery Session for "My Payment History"](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/5643)
-    [#5647 Create a Research Plan for "My Payment History"](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/5647)
-    [#5649 Create a Conversation Guide for "My Payment History"](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/5649)
-    [#5651 Conduct Usability Session for "My Payment History"](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/5651)

**Current Sprint**
-    [#5642 Product Documentation for "My Payment History"](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/5642)
-    [#5644 Competitive Analysis of "My Payment History"](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/5644)
    
**In Progress**
-    [#5646 Create initial design mockup for "My Payment History"](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/5646)
-    [#6205 Prepare for Discovery Session of "My Payment History"](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/6205)

**Closed**
-    [#5645 Create Workflow Diagram of Existing Application ("My Payment History")](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/5645)


## Discovery Goals

In this stage of discovery, I seek to understand:

- Users expectation of current market features [Competitive Analysis]( https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-payment-history/research-design/payment-history-comp-analysis.md)
- Gather current metrics to better understand how Veterans are using the “My Payment History” features
- Define stakeholders 
- Discover similar UI and functionality within the VA.gov site.
- Document product’s features

## Relevant Meetings

-    Introduction to View Payments *Date TBD*
-    Project kick-off meeting *Date TBD*
-    Design Intent Collaboration *Date TBD*
-    Information Architecture Request *Date TBD*
-    Content Center Review *Date TBD*
-    Full Accessibility and 508 office Audit *Date TBD*

## Findings

### Initial questions
+ What service does the tool provided?
+ What is the typical veteran viewing 
   - Is it also the default view? 
+ How many payments do they see now?
   - How many payments do they want to see on average?
   - How many payments should we display on average?
   - How many do we need to show in total?
   - How many should we display per device?
+ Does time determine the number of payments to show?
+ What task will the user need to be able to utilize to complete a task
   - Filter
   - Sort
   - Print
   - Error prevention
+ "Veteran didn't get a payment and doesn't know why. They want to check if the VA has said their payment has been sent"
+ Is there veteran feedback documented in GH or elsewhere?
   - Other areas in VA to look?
   - Do we currently know the veteran's feedback?
+ What are the top task users trying to complete using this tool?
- How are the veterans presently using this tool?
   - How are the veterans using this information? Example: Taxes, Update Documentation
       - Does the UI information reflect that of other institutions? Our table should mirror other bank tables to manage user expectations
- When are the veterans using this information? At a VA office, at their desk, on the go.
- Do you veterans need to print this data off?
- What features are used the most/least?
- Do we have metrics on the current page?
    - If so what are they
    - Average time on page
    - Devices used
    - Quince users total
    - Returning users
    - Exit page
    - Entry page
- Who are the stakeholders of this tool?
    - What are their goals or objectives with the tool?
- What systems are needed for this tool?
    - Are there known user issues with the current systems?  
- Are there similar features on the VA.gov
- Why does the My Payment History reside on the current page?
    - Does that match the user's mental model?
    - What is proposed for the new home?
        - [User flow & inbound links]( https://images.zenhubusercontent.com/5d6ec7967521390001c3e794/88ea6b54-e51b-4938-b72f-29c7ef6d5aa5)
        -  [Thumbnail diagram]( https://xd.adobe.com/view/44399930-6143-4192-6e80-99a0566c4092-3208/)
- Are there other homes the tool can reside in?
- If the user can not find the information they are looking at what do they do?
    - Do we know what information is lacking?
    - Who do what talk to about that
    - What may be some of the reasons it is lacking.

### Answers to initial questions

### Current Features
 
![screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-payment-history/images/payments-list-1.png)
 
![screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-payment-history/images/payments-list-2.png)
 
![screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-payment-history/images/payments-detail.png)

- Headers
    - Payments
    - Returned Payments
- Filter button (functionality is more similar to an "enter" button)
- Display options: 3 months, six months, one year, All
    - When no data is available
    > No returned payment information is available to display. Try increasing the display date range to see more details.
- Print This Page
- About-Payments
    > About Returned Payments
    > Disclaimer: Detailed information about some benefits payments may not be available online. For example, payments made in amounts less than $1 for direct deposit or $5 for mailed checks will not be displayed in your online payment history. Gross payments and modifications will display only for recurring and irregular compensation payments. If you have questions about payments made by VA, please call the VA Help Desk at 1-800-827-1000.

    > Six Years Available: Returned payment information is available for six years from the date the payment was issued.

    > Before Reporting Non-Receipt: Please wait at least three business days (Monday-Friday) before reporting non-receipt of payment as check tracing cannot be initiated before that period. To report non-receipt after three business days, call 1-800-827-1000 with your Social Security Number or VA Claim Number, your address, and (for direct deposit payments) your account information.

    > If Check is Found: If the original check is found or received, you must return the original check to the Treasury Department and await receipt of the replacement check. If both checks are negotiated, then you will be responsible for the duplicate payment. You will receive a letter from the Debt Management Center with instructions concerning collection.

### Task and Data
1. User Task- User filters table by header 
    - "Payment Type" filter
        - If you’re a Veteran, you’ll see a history of your past VA payments for:
        - Disability compensation
        - Pension benefits
        - Education benefits
        - Survivors pension benefits
        - Survivors and Dependents Educational Assistance (Chapter 35 benefits)
        - Dependency and Indemnity Compensation (DIC)
    - "Method"
        - Direct Deposit
        - Check
2. User Task- User sorts table by:
    - Date
        - Newest
        - Oldest
     - Amount
        - Largest
        - Smallest
3. User task Print off tables
    - User click the Print screen button
    - CSS print styles
4. User Task- Review Return Payments
    - Header splitting Return Payments and Payments 
    - Pagination of tables
5. User Task- Review Payments
    - Header splitting Return Payments and Payments 
    - Pagination of tables 

### Feature improvements
- Combine the Main table with Additional information card
- Designing a responsive table
- Other TBD
- Structuring the UI so that there is one table with two headers 
    1. Payments
    2. Return payments
- A table should be displayed when the page is opened, or DOM is rendered
- Allowing the users to choose a date range over set time periods (currently 3 to 6 months, one year, all)
- A default setting for the table,(presently the user needs to click filter to display results)

## Next Steps
- Create a Research Plan
- Create a Conversation Guide
- Conduct Usability Session
- Discuss initial solution ideas
- Create two design interactions 
    1. Tables 
    2. Cards

sk
