----

# We're moving our docs! 
### Find [more information about this topic](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/Analytics-customer-support-guide.1586823275.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----
## Request an Analytics Review

### Analytics Overview
VA.gov utilizes the premium version of Google Analytics (also known as Google Analytics 360) and Google Tag Manager, a tag management platform, to measure and provide insights on the site’s attribution, behavior, and conversion. 

Collaboration between the Analytics-Insights VFS teams is important for ensuring that key site transactions and other user interactions are defined, implemented, and quality checked prior to launch. This data is pulled into Google Analytics by pushing a set of dataLayer events via the front-end code. This code is then translated by Google Tag Manager into a readable format for end-users of Google Analytics. 

### When to Request an Analytics Review

#### Discovery Phase: 
We encourage you to engage with the Analytics-Insights team as early as possible. There are two key events where you’ll engage with us during this phase.

1.	KPI Workshop - We will guide you through a KPI Workshop to identify KPIs and baseline metrics for your product and/or identify gaps in measuring your product’s success. To facilitate the Discovery Process, your team should:
- Prepare the KPI Workshop Pre-Planning document
- Attend and participate in the 2-hour KPI workshop with your full team
- Provide the product’s objectives 

2.	Analytics Implementation Request - Outlined in more detail below, VFS teams should complete the GitHub Analytics Implementation request ticket. To facilitate the ticket, VFS teams should first: 
- Review the Analytics-Insights data dictionary
- Identify what action(s) within the product is considered “success”
- Share wireframes if they are ready, so we can discuss other user interactions that might be beneficial in tracking
- Identify deadlines for your product

------

### Next Steps

**Step 1: Complete an Analytics Implementation Request**

To kickoff the Discovery Phase, you can request assistance using the Analytics Implementation request ticket on GitHub. We ask that you input the objectives and definition of success, wireframes, and information architecture. We will review, and if further clarification is necessary, we will establish a :30-session discovery kickoff call.

**Step 2: Engage with the Analytics-Insights Team during the Build**

After the Discovery implementation request, we will proceed with a set of dataLayer requirements that your VFS team’s front-end engineers will implement. You can expect these requirements within 5 business days, unless there are further items that need clarification. During this step, VFS teams should provide:
- Confirm the action(s) (e.g. a specific user interaction or final URL) that is deemed as success for the product
- Authenticated user logins for testing, when applicable
- The URL(s) for your product including any unauthenticated landing pages that precede the start of the tool; for example, if your product is a multi-step veteran facing tool, please provide the full path of URLs along noting any conditional logic that would take users to a different branch of URLs for the tool

In parallel, VSP Analytics & Insights will configure Google Tag Manager so that it will translate the code into a readable format for Google Analytics reporting. We will also use these URLs to build goal funnels and a conversion with the Modernized View(s) for your Products.

**Step 3: Request QA**

When analytics code is ready for review on staging, please alert us within the same ticket you used to begin the implementation request. We will also provide your VFS front-end engineers with access to Google Tag Manager, so they can test how the analytics data will appear. We need the code deployed to staging so we can appropriately test the settings within Google Tag Manager to see if the Analytics-Insights team needs to reconfigure settings or sees an issue with the dataLayer events within the code.

We will provide feedback within 3 business days. During this review, VFS teams can expect that:
- VSP Analytics & Insights will inspect that analytics is working for the conversion(s) and key user interactions that were identified in the Build phase 
- We will ensure that these actions are not over or underreported
- We will provide feedback on any alterations that the front-end team must make before launch

If changes are made, please continue to update the Git ticket with each round of fixes. 

**Step 4: Review Post-Launch Data**
After launch, it is a collaborative effort between VSP Analytics & Insights, DSVA Product Owners, VFS Project Managers, and VFS front-end engineers to monitor data after launch and throughout the product’s lifecycle. During the product lifecycle, VFS teams can expect to:
- Use Google Analytics annotations to mark the data of your product’s launch, including dates when it was released in beta to a portion of visitors and to 100% of the audience; denote any critical legislative, marketing & public relations dates that can impact your product
- Continue to monitor the data and report on the KPIs you identified in the KPI workshop

Look for any issues or outages in data and report them to the VSP Analytics-Insights team. Potential discrepancies include:

- A steep increase in metrics not related to outreach efforts
- A steep decrease or zeroing of metrics

Notify VSP Analytics & Insights on future iterations. Changes might include:

- New success or error states
- New URL structure
- Additional features for your product, including new steps within the flow
