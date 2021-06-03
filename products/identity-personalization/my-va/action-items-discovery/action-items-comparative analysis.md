# My VA action items: Comparative analysis
Tressa Furner, Authenticated Experience, May 24, 2021

- [Action items questions doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/action-items-discovery-questions.md)
- [Audit of VA Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/va.gov-action%20item-audit.md)

## Background

In previous research for My VA/Logged-in homepage, users have mentioned wanting to be alerted on their dashboard of any time-sensitive action items that they need to complete. We need to explore the best way of doing this. 

This study focused primarily on sites in the banking and insurance industries since they serve as a good model for the VA.gov use case (manage benefits, claims, payments, transactions, view history, etc). We explored a couple of companies outside of these industries as well to make sure we have a firm understanding of how various sites handle action items.

Screenshots were solicited for sites of interest since accounts are required to view the authenticated experience. We primarily requested desktop views.

## Goals

This comparative analysis aimed to observe the following:

- What are the types of action items that that sites show?
- How do sites display action items? Where do they live in relation to the rest of the content on the page (in navigation, in sections or in a 'hub')?
- How do sites let/help users resolve action items? Is there an action item log? 
- How do sites visually prioritize action items?
- How can users take action on important action items?
- What happens if there are NO action items?

## Sites reviewed

- [Bank of America](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/action-items-comparative%20analysis.md#bank-of-america)
- [Carefirst](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/action-items-comparative%20analysis.md#carefirst)
- [Chase](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/action-items-comparative%20analysis.md#chase)
- [Facebook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/action-items-comparative%20analysis.md#facebook)
- [FAFSA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/action-items-comparative%20analysis.md#fafsa)
- [Fedloan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/action-items-comparative%20analysis.md#fedloan)
- [Gov.uk](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/action-items-comparative%20analysis.md#govuk)
- [My Chart](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/action-items-comparative%20analysis.md#my-chart)
- [State Farm](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/action-items-comparative%20analysis.md#state-farm)
- [USAA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/action-items-comparative%20analysis.md#usaa)
- [Zions Bank](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/action-items-comparative%20analysis.md#zions-bank)

## Takeaways breakdown

This comparative analysis aimed to observe the following:

### What are the types of action items that sites show?

The content of the action items and how the action items were displayed varied by site, but all of the action items on the sites observed fell into 4 main categories.

1. If something is due (time-sensitive)
2. Missing information
3. Status changes
4. Things the company/site wanted the user to know

Most sites had a designated section for 'upcoming events' that were not included in the notification/checklist section. 

### How do sites display action items? Where do they live in relation to the rest of the content on the page (in navigation, in sections or in a 'hub')?

There was a variety of ways that action items were highlighted. They are listed below.  

- Right-hand tiled 'activity center'.  This has numerous blocks with various different types of alerts. This approach also utilized an alert icon with a number.  
- Integrated into the nametag/header. This was shown as an alert icon with either a number or indicator (i.e. a red dot). When clicked on it would open a dropdown with a list of alerts/action items.
  - *Question: Is this approach accessible?*    
- Integrated into the page using an indicator (red dot/icon) in a specific section. (this was often in addition to the alert icon in the header)
- Alerts section. This was either a section on-page or separate page on the site with its own dedicated 'tab' in the navigation. This would open up the alerts 'hub'. This 'hub' was often tied with messages as well.
- Checklist approach. This approach had a separate section for action items, broken into dropdown sections with links. Some sites made this personalized (gov.uk), some made the checklist as more of a generic list of links grouped by different use cases (Federal Student Aid).
- All sections broken out into a side navigation with specific alerts living in each specific section.
- Within a message bot. Fidelity had a message bot open on the page with notification information. Notifications did not live anywhere else on the page. 

#### Takeaways

- The most common implementation was tied between a dedicated alerts section (either on-page at the top of the page or in its own separate page) OR an alerts icon with a dropdown listing action items. Either of the approaches would likely work for My VA - but I am unsure if the alerts icon/dropdown combo is accessible. 
- Most approaches utilize either an icon or number to indicate users action/attention is needed
- If messaging is available, then almost always the sites observed separated out messaging and alerts. I'd like to do a little more research aroudn what constitutes as a message and what constitutes as a notification. 
- Often time in financial institutions, 'Bill pay' was also separated out into it's own section. 
- The financial institutions almost always combined alerts AND messaging. This was interesting because often the messaging centers weren't actually for correspondence, but typically that is where financial statements lived. Thinking of My VA, it might be difficult to have an alerts AND messages section since currently we only have messaging in health care, but it might be something to consider when we implement some financial information on My VA. 


### How do sites let/help users resolve action items? Is there an action item log? 

Overall, most sites didn't have a way to resolve the action items on the page. 

The one exception to this is specific to banks - if something is due and gets paid then the red dot/indicator/alert will disappear from that specific section.  Depending on the page structure, if there is a notification center, the actual notification about the debt will also disappear if the debt has been paid. Most banks had a dedicated 'bill pay' section, separate from an alert center. There was always a log of transactions available. 

A few sites did allow notifications to be dismissed with an 'X' in the corner of the notification to remove it from the dashboard.

For sites like Carefirst with a notification icon that opens in a left hand nav, if a notification is clicked then the information about that notification automatically populates in the main portion of the page. *Note: Carefirst uses a 'view details' link to view information - which is likely more accessible*

In the sites observed, if a user wanted to take action on a notification, they could click directly on the notification and it would take them directly to a screen to resolve whatever action needed to happen. If a user returned to the notification, there was an indication that they had already viewed that specific notification. For example in Carefirst - if a user clicks on 'View details' then the color of the link changes from blue to purple. 

#### Takeaways

- All approaches (except the checklist approach) utilize either an icon or number to indicate users action/attention is needed. 
- It's important to have a way to 'view all' or view an action item log. Most commonly this lived on a separate page. 

### How do sites visually prioritize action items?

In the sites observed the type of action item that is always prioritized is any that are time sensitive. For example, if something is due at Bank of America, there is a large 'Payment due' on the dashboard with some details about the payment IN ADDITION to that due payment showing up in the notification center under 'bill pay'. 

If there is a notification center, all action items are the same 'visual weight' except for time sensitive ones. If it's really important it's brought to the top with a different color/icon to elevate its importance.

Many sites only showed 2-4 notifications at at time, if a user wanted to see all notifications they would need to click 'View all'

#### Takeaways

- Action items are prioritized by time-sensitivity. If something is due, that goes to the top and has more visual weight using color and (sometimes) an icon.
- If an action item is very important, there are reminders in multiple places on the page, including 1-2 that are not buried in a notification center.
- Users don't have access to a log immediately, if they want to see all notificationst they need to click 'view all'. 

### How can users take action on important action items?

All sites observed made it clear that a user could click on a link in the notification to take action.  Some sites made the link the content of the notification (Bank of America), others had the link separate from the actual notification information (Bank of America Bill Pay). If it was a bill, or something was due they used more actionable language in the links like 'Pay bill now'. If it was a notification that did not need immediate reaction then the language was a bit more passive, like 'View details'

#### Takeaways

- Language is important when helping users take action - if it's time sensitive then the language needs to be more actionable. 


### What happens if there are NO action items?

The observed sites all handled fairly similarly. A simple message stating that there are no action items, paired with no red dot/indicator present on the page. 

## Site examples

### Bank of America

Bank of America handles action items with an activiy center that lives on the right-rail of the screen. It's broken up into sections, and any section that has an action item has an indicator + number.  If any of these blocks are clicked on, it opens within the right rail menu with 1-2 action items, and in order to see all the action items a user must click 'view all'.

Though clunky, this design works well to quickly elevate action items as well as advertise things that Bank of America wants to get in front of the user. 

Bank or America has another way to time sensitive action items - specifically if a payment is due. There is a large red statement with a few details about the payment on the dashboard, in addition to the indicator next to 'bill pay' in the activity center.

Overall, this design works pretty well for elevating action items. There isn't really a clear hierarchy within the activity center - but the large 'payment due' does add weight to paying bills. 

![Bank of america dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/dashboard-action-items/Bank-of-america-dashboard.png)

![Bank of america dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/dashboard-action-items/Bank-of-america-alerts.png)

### Carefirst

Carefirst utilized the alert bell icon within the navigation. They have also separated messages from notifications. If the icon is clicked, it opens a dropdown with a list of notifications, each with a link to 'view details' or the option to delete the notification. They also include the date within the notification.

This is a simple and clean way to handle notifications. However, there does not seem to be a way to elevate time-sensitive notifications - which may be because of the limited way we observed carefirst. 

![Carefirst notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/dashboard-action-items/carefirst-notifications.png)

### Chase

Chase has a much more sophisticated approach. The indicators that they used are much smaller, almost easy to miss. The notification icon is a flag within the navigation with a small indicator - when clicked on, it opens a panel displaying payments that are due. They are similar to Bank of America in the fact that they elevate payments that are due on the dashboard (in two places, in the an alert at the top as well as in the box about credit card information) as well as in the notifications center

Using multiple places to elevate a time sensitive and important action seems to be an effective way to get a users attention.

![Chase bank dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/chase-dashboard.png)

![Chase bank notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/chase-widget-pay-card.png)

### Facebook

Facebook is an extremely different use case than the other sites observed, but they have a couple interesting things that I'd like to point out. 

All of their notifications live in one notification hub. The important parts of the notification are bolded, like names/dates/suggestions for things to do. 

Overall, I don't think how facebook handles notifications can directly translate to My VA, but maybe some of the language around their notifications could be mimicked. 

![Facebook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/dashboard-action-items/facebook-notifications.png)

### FAFSA

FAFSA is a much less personalized approach to action items. They have all use cases broken out into check lists, a user could select which one they are and see a list of links to help them make sure they have everything done. This seems fairly vague, and not that helpful when it comes to action items that are time-sensitive. However, this might be an interesting way to approach a first-time user experience.

![FAFSA checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/dashboard-action-items/FAFSA-dashboard-home.png)

![FAFSA checklist expanded](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/dashboard-action-items/FAFSA-dashboard-to-do-expanded.png)

![FAFSA other to do items](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/dashboard-action-items/FAFSA-what-you-can-do-while-status-pending.png)

### Fedloan

Fedloan has a dedicated alerts section that lives at the top of the page. They have also combined alerts and messages into one 'hub', with the total number of alerts at the top of the section. It seems the most important thing has been called out in a large yellow box - this does not seem to be time sensitive, rather something that is more in the interest of Fedloan. 

Overall, this seems a bit confusing to me - there were three things listed in the section, but due to the lack of hierarchy and layout I was unsure if what was displayed were the notifications or if those were just messages from Fedloan.

![Fedloan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/dashboard-action-items/Fedloan.png)

### Gov.uk

Gov.uk has done a very interesting job of managing a to-do list. It's clear, clean, concise and has tested well with users. The healthcare team is looking at using something along these lines. This exact design may not be best used in My VA, but there are definitely aspects that could be followed. Making sure the user knows exactly what is done and what is due is very important, and Gov.uk has done a great job of that. 

![gov.uk](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/dashboard-action-items/gov.uk.png)

### My Chart

The landing page/dashboard of My Chart is just a running list of action items/reminders all in one place. This seems like a very simple and effective approach, and also seems like something that could work really well on My VA. Each action item/reminder is given hierarchy by the icon associated with it and the language used (this is not shown in the screenshot - this is based of my experience). This is the only site that did not utilize a 'view all' type of functionality - it's unclear when the running list stops.

If a user wants a screenshot of a specific part of their health care, they can open the menu and go to a specific page with more information. There is no alerts or indicators anywhere on the page, if a user is on the 'homepage' then they can easily see all of their action items. 

![mychart dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/dashboard-action-items/My%20chart%20dashboard.png)

![mychart menu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/dashboard-action-items/My-chart-menu.png)

![mychart upcoming appointments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/dashboard-action-items/my-chart-upcoming-visits.png)

### State Farm

State farm has an interesting 'user navigation' that is separate from the main navigation. This seems like a very clear way to elevate top tasks while also elevating action items (the alert bell icon + red dot indicator) If clicked, it opens a right hand menu with a list of action items for the user. 

State farm has also implemented showing time-sensitive action items in multiple places on the dashboard. Their approach is easy to understand very clean and simple, while elevating time sensitive items.

![State farm](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/state-farm-desktop-dashboard.png)


### USAA

USAA approached alerts in a very interesting way. They do not have a dedicated alerts center or hub - however they do have a messages icon with a red dot indicator. They also have indicators within the menu so users will know to go check that specific section.

This doesn't lend itself well to any time-sensitive action items (again, they may have something like this but we just didn't capture it in our research). 

![USAA- messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/USAA-Desktop-Auth-Home.png)

![USAA notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/dashboard-action-items/usaa-user-has-notifications.png)


### Zions bank

Zions bank has also combined alerts and messages into a singular separate page within the main navigation. Unfortunately in the screenshot provided for Zions Bank, there are no new alerts or messages- but this is a great example of how to handle if there are no new updates for a user.

![Zions bank alerts and messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/screenshots/dashboard-action-items/zions-bank-alerts-messages.png)



