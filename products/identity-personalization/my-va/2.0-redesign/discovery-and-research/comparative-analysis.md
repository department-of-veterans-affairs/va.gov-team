Logged-in Homepage Redesign: Comparative Analysis
================================================

Background
----------

As part of the [larger discovery effort to redesign the VA.gov logged-in homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/research-plan.md), a comparative analysis was conducted to see how other sites handle personalization and content organization on a logged-in homepage.

This study focused primarily on sites in the banking and insurance industries since they serve as a good model for the VA.gov use case (manage benefits, claims, payments, transactions, view history, etc). We explored a couple of companies outside of these industries based on recommendations in stakeholder interviews.

Screenshots were solicited for sites of interest since accounts are required to view the authenticated experience. We primarily requested desktop views.

### Sites Reviewed

- [Bank of America](#bank-of-america)

- [Chase](#chase)

- [Fidelity Investments](#fidelity-investments) 

- [Schwab](#schwab)

- [Geico](#geico)

- [State Farm](#state-farm)

- [USAA](#usaa)

- [Quality Payment Program (QPP)](#quality-payment-program-qpp)

- [Delta](#delta)

- [Google](#google)

- [HR dashboard](#hr-dashboard)

Goals
-----------------

This comparative analysis aimed to observe the following:

- How do sites signify to the user that they're providing a personalized experience upon logging in?
- How do sites organize different types of content within a single logged-in homepage/dashboard view
- What appears as a widget vs text link vs something else?
- How are sites implementing alerts and notifications?
- How does an authenticated toolbar/menu fit into the overall site navigation?

## Takeaways

### How do sites signify to the user that they're providing a personalized experience upon logging in?

Almost every site we looked at (Delta and Google being exceptions) predominantly display content related only to the user upon logging in. The sites typically included very little, if any, generic marketing or promotional content in the main body upon login.

USAA and Fidelity also had options to customize the view, which further signifies to the user that the experience is tailored just for them. The people who shared those screenshots stated they could not recall ever using the customization options.

Most sites also welcomed the user with a large greeting that includes their name. Oftentimes, the user's name is also used as a link in the navigation to access their profile. On many sites, the words "My" and "Your" were used to label sections and contributed to a sense of personalization.

**Takeaways** 

-   A logged-in homepage clearly signifies personalization when it reflects what is known about the user and little else.  

-   Using personalized language, including the users name and indicating that content is theirs, also signifies that the experience is tailored to them. 

-   Allowing users to customize their homepage isn't necessary to create a sense of personalization.

### How do sites organize different types of content within a single logged-in homepage/dashboard view?

A common page structure was observed:

1\. Welcome message

2\. Alerts or notifications

   - Many sites used an alert to tell the user about an "important" new feature that was generic for all users

3\. Body

-   Content in the body was grouped by service type (e.g. an "accounts" section and a "payments" section).

-   These groupings included a snapshot of info (e.g. account number, balance, insured person(s)), and link to access more detailed information.

-   The body was frequently displayed in a two column layout with one column larger than the other.  

-   When present, the smaller column frequently contained alerts, and access to common tasks (e.g. pay bill). If any marketing info was displayed on the site, it was commonly here.

-   The service type groups were frequently within a container the user could expand and collapse. 

-   Some sites had alert badges on the groupings themselves if there was something important about that particular item.

-   Most sites did not include any kind of personal or profile information on the logged-in homepage itself.

**Takeaways**

-   The prevalence of the pattern described above suggests that it is a successful model in the private sector we can leverage for VA.gov.  

-   Clear and logical grouping will help users navigate the various services they have with the VA. 

-   Our groupings should be informed by user research since they're not as clear cut as banking (accounts, transactions) and insurance sites (benefits, claims).  

-   Allowing users to collapse containers may help with cognitive load and increase their sense of control.

### What appears as a widget vs text link vs something else?

Text links were common across all the sites, with the dashboard routing users to complete their tasks. In the section groupings described above, sites tended to link 1-3 primary actions (e.g. "Pay insurance" or "View claims") which took the user to another page offering a more detailed view.  Several sites had a dropdown menu within the section that offered more options as text links.

Some sites styled links to look like buttons, which was most effective when there was one primary action for the user to take.

There were a couple of sites that used widgets where the user could complete a task right on the page or triggered a modal with a text link to complete an action.  Those felt unnecessarily complicated and cluttered compared to the simpler approach. An exception to this was Chase, which opened a panel upon clicking "pay card".  This was more effective in drawing focus to the action compared to other approaches due to the darkening/blurring of the background, and the size of the panel.

**Takeaways**

-   Text links are a common and effective way for users to complete tasks from a logged-in homepage; styling the link as a button can help draw the users attention to the primary action.  

-   If there are many actions to offer a user, placing them in a menu is an effective way to reduce clutter and route users directly to where they want to go.  

-   Allowing a user to perform an action directly on the page can be convenient, but it's important to properly shift focus to the task at hand.

### How are sites implementing alerts and notifications?

This was challenging to evaluate consistently across the sites as many of our screenshot contributors didn't have personal alerts or notifications that needed to be addressed.

When they were available, there was a clear distinction between alerts and notifications.

- Alerts were commonly displayed immediately under the `h1` and frequently not dismissible. Some sites put them in a collapsible container.  Many were not actionable and contained a generic message the company wanted to relay to the user (e.g. an upcoming change). There were some examples where a user-specific alert was placed above a company message alert.

- Notifications were accessible via an icon in the navigation (bell or envelope), with a badge used to indicate something needed to be read.  Many sites directed users to a dedicated center for these.  An outlier was State Farm, which leveraged a panel overlay to display the message where a user could click to take the desired action.  This felt smoother to me than having to first go to a message center to see the message, and then take action.

- Some sites used a message center for notifications, which felt like overkill considering the content. "A statement is available." "Your payment has cleared".

**Takeaways** 

-   There should be a clear distinction between important alerts and less important  notifications.  

-   A dedicated message center isn't necessarily the right approach for simple messages - it's more important to empower the user to take action quickly and directly. The private sector has taught users to look for these alerts at the top of their page.

### How does an authenticated toolbar/menu fit into the overall site navigation?

This was handled differently across sites.  Banking sites tended to have more actions for users to take on each service, and swapped the navigation completely from the overall site navigation.  An exception was Chase, which has an unauthenticated "hamburger nav", so they are easily able to preserve that while adding an authenticated toolbar.  Insurance sites typically had only fewer sections in the unauthenticated nav, which made it easy to add authenticated items.

The most common items added were "my accounts/policies", profile, and messages.  Most sites had drop down menus for these items and/or a secondary navigation once the user moved away from the dashboard into a deeper section of the site.  The secondary navigation was a nice way to allow users to drill down further into the site.

State Farm allowed users to toggle between the overall site nav and the authenticated navigation, which felt intuitive and easy to use.  Although it is not a common pattern, this could provide a great user experience with a solid IA foundation.

Geico's navigation was minimal, and utterly confusing.  Navigating away from the dashboard to almost any part of the site revealed a different navigation pattern, and the user was prompted to log in again repeatedly.

**Takeaways**  

-   Users will expect to see some authenticated items incorporated into the main navigation after logging in. 

-   A secondary navigation is an effective way to guide users as they express intent to get into more specific content without overwhelming them; but caution should be used not to make the main navigation so minimal that it's hard to navigate.

### Other Observations

#### Tiles

A few sites employed the use of a tile grid to organize content.  While this was effective to get a lot of content above the fold, the execution could feel dated (BofA, Delta) and cluttered without sufficient breathing room.

#### Scalability

We kept scalability in mind as sites were evaluated, and felt that the collapsible containers lent themselves nicely to being able to add more sections to the site if needed, and give the user the ability to minimize sections if they wanted.

USAA took the liberty of adding containers for services the user did not already have in their larger "My Summary" container, with a "learn more" call to action. This sets them up nicely for scaling up as users add services.

#### The Creepy Factor

Geico's navigation was convoluted and hard to follow - the user kept getting lost in the site. At one point, they were presented with a page that said "Good morning, [name]" above log in fields.  "If it knows who I am, why do I need to log in?" This was unsettling.

## Site examples

### Bank of America

Bank of America's dashboard is straightforward, providing the user a clear list of accounts and a balance snapshot.  Clicking "Quick View" expands information about the account and reveals more links; this could be more useful to users if it was styled to look interactive.

The activity center on the left contains a variety of actions that could be performed directly on the homepage, though the design looks cluttered and feels clunky to navigate.

![Bofa dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/bofa-dashboard.png)

![bofa-dashboard-quickview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/bofa-dashboard-quickview.png)

### Chase

Chase took a unique approach to a few things:

-   They provide an overall snapshot of the card at the top of the page, with clear actions (likely the most common) at the bottom of the container.

-   The "pay card" link in that summary triggered a panel that slides in to pay. This felt more effective than BofA's approach because it gave me more visual breathing room and it's styling largely eliminated the distraction of content behind the panel.

-   Their overall navigation is a hamburger nav, so it doesn't have to change drastically once logged in. Navigation consistency helps users feel rooted, and there is plenty of room to add authenticated nav items without feeling too cluttered.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/chase-unauth-menu.png)

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/chase-dashboard.png)

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/chase-widget-pay-card.png)

### Fidelity Investments

Fidelity had a unique "welcome" screen upon logging in that screenshot contributors said they never use.  The text-heavy welcome pushes down the main actions far down the page, and has a different look and feel than the rest of the logged in experience once you get into the site. The amount of real estate dedicated to news and other content not specific to the user was surprising.

Folks mentioned they prefer the app when asked for screenshots. The mobile app provides a more personalized experience with direct access to common tasks via the horizontal app menu across the bottom of the screen.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/01-fidelity-post-login.png)

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/02-fidelity-all-accounts.png)

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/03-fidelity-mobile-logged-in-feed.png)

### Schwab

Schwab's logged in experience was more modern than the other investment-focused site evaluated (Fidelity), but required more cognitive effort to understand all the information and options on the page.

Their approach to navigation was complex- a top level navigation, where each item triggered a sectioned megamenu.  When you were in a top level section, a secondary navigation with those sections as navigation points appeared below the main navigation.  While complicated, it appears to be an effective way to help users understand their options without necessarily having to parse through the entire mega menu every time.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/Schwab-Accounts-MegaMenu.png)

### Geico

Geico's unique logged-in homepage is a hyper focused, two column view dedicated to the users policies and actions.  Even the navigation is mostly hidden.  Alerts appear above the two columns, along a large welcome message.  This approach is effective in providing the user with direct access to tasks. However, navigating away from the dashboard turned out to be messy  without a consistent visual approach, and navigation changing throughout the experience.  The user was also repeatedly asked to log in again, even though his name was reflected back to him. Geico's site demonstrated the important role navigation plays in orienting the user and building trust.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/geico-desktop-dashboard-welcome.png)
![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/GEICO.3-Logged-In_Dashboard2.jpeg)
![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/geico-desktop-logged-in-go-to-geico.com.png)

### State Farm

State Farm's logged in homepage was one of the easiest to navigate, largely due to their clean and sparse design.  The large clear section headings, and generous use of white space is effective at guiding the user's eye through the content.  When more than two actions were available for a section, a "More" link was available for the users to see additional options, so the sections stayed uncluttered.

The way users navigated from authenticated to unauthenticated content was particularly interesting - they had two small links above the overall navigation that allowed users to toggle between the two experiences.  Although subtle, the labeling is clear once noticed, and from there it's effortless to go between the two options.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/state-farm-desktop-dashboard.png)

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/state-farm-main-menu-active.png)

*(second screenshot shows navigation when "main menu" is clicked from the "my account" view shown in first screenshot)*

### USAA

USAA did a good job of splitting different offerings (Insurance, Services, Banking), but putting them in a larger "My Accounts Summary" container adds unnecessary complexity to their logged-in homepage.  The content would be easier to quickly digest if there were fewer font weights and colors used.

USAA added sections for offerings the user hasn't signed up for yet (see Services and Banking sections) with "learn more" calls to action.  While it adds to clutter on the page, the approach could inform how we help Veterans learn about benefits they are eligible for, but haven't applied for yet. The way it's presented here feels a little tricky since it is seamlessly integrated with the items the user did sign up for, but it also doesn't feel like marketing noise.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/USAA-Desktop-Auth-Home.png)

### Quality Payment Program (QPP)

QPP's logged-in experience was most notably distinct from many of the other sites due to the vertical sidebar navigation for authenticated menu options. That approach communicates that the experience is personalized for the user, and makes it easy to navigate the unauthenticated and authenticated content.  The available vertical space suggests this approach could scale well as more sections need to be added.

The vertical navigation creates more of a "dashboard" vs "homepage" feeling, which is important to take under consideration as we get closer to determining our approach.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/QPP-dash.png)

### Delta

Delta's logged-in experience was the most subtle of them all, with the homepage staying exactly the same. Upon logging in, the user's name and mileage was reflected in the navigation.  For an airline, this approach is probably very effective because there is a singular primary focus across the majority of users (book travel).

Their approach to alerts and accessing personalized content in the site was interesting - clicking on the user name or the notification icon triggered the same tabbed modal, with a different tab active depending on what you clicked on.  While this can't replace a logged-in homepage, the approach is effective at providing personalized information quickly from anywhere in the site.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/delta-menu-user.png)

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/delta-menu-feed-notifications.png)

### Google

Google's use case is quite different from VA.gov, but it was worth evaluating their approach to personalization given their presence in the online space. Their personalized experience is rooted in a consistent, sparse navigation that drives users to their profile information or Google apps.

The account dashboard felt like the most relevant area to evaluate for this research. Despite the different use cases, similar patterns such as content groupings and text links to complete tasks are used on Google's dashboard. Like State Farm, it was easy to scan the content on the page thanks to lots of white space and clean typography.  This is another example  of left-hand vertical navigation, which was easy to navigate and distinct from the overall navigation.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/google-account-dashboard.png)

### HR dashboard

**Note: This is a late addition and was not part of Liz's original research**

One of the members of the DEPO team shared this as an example of an effective dashboard. This general HR dashboard has to account for a bunch of different pieces of information, and does this well by chunking them into distinct blocks and using large headings to make the page easy to scan.

![HR dashboard home](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/HR-dashboard-home.png)
![HR dashboard_My benefits tab](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/HR-dashboard-my-benefits.png)
![HR dashboard_My benefits tab continued](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/images/HR-dashboard-my-benefits-2.png)
