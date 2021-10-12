----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----
# Measuring Goals in Google Analytics

*Objective*: Product teams should be able to identify the key performance indicators they would like to measure using the KPIs defined in the KPI workshop. Some of these goals can be tracked within Google Analytics>Conversions within the view for your Product Area. 

*Audience for this Resource*: Product Owners

## Helpful Resources for Defining, Implementing, and Measuring Goals in Google Analytics

#### Defining Goals
1. What is a goal in Google Analytics?

      - A goal is a user transaction on VA.gov--like a form completion or saving a profile section--that is defined as a success for your product(s). These can be defined as when a user reaches a distinct URL or completes a key event. 

2. What is an event in Google Analytics?

      - An event is an interaction that can be tracked independently from a pageview (or a screenview in an app). 

3. What is a funnel in Google Analytics?

      - A funnel is a series of URLs that lead up to a goal completion, like the steps in an application before the confirmation page.

#### Implementing Goals

1. How many goals can each view have?
Each view can only have 20 goals, which is the same for standard (free) Google Analytics and VA.gov’s premium GA360 license. Since there is a limit to goals, the “WBC - Modernized View” will not be able to contain all modernized forms or other conversions. Anything not captured in the WBC Modernized-View will be located in its Product Modernized View.

2. How many steps can each goal funnel have?
There is a limit to 20 steps for each funnel, but we can use Regular Expressions to combine like-pages into one step. 

3. Are funnels available retroactively?
No, goals and funnels will only report data from their time of creation. 

4. Why are some transactions counted as an Event and why are some counted as a funnel?
For transactions that contain multiple steps, like the HCA 1010EZ form, each page URL can be measured as a step in the funnel. The final confirmation page will be measured as a goal completion. In other instances where multiple pages do not lead to a goal completion, like saving a Recommendation in a user’s My VA dashboard, it is better to use an Event. 

5. Where do I find the goals for my product area?
Each product area has a dedicated View, with the format “<Product Area Name> - Modernized View”. Goals for all product areas can also be found in the “WBC - Modernized View”, which consolidates all of the modernized content. See above for limitations on the number of goals in a view.

6. Can I mix events and URLs to form a goal funnel?
In setting up the core Conversion reports, you can’t mix events and URLs to form a goal funnel. However, there is a beta reporting featured called Custom Funnels that can be used to mix events and URLs. A few limitations of Custom Funnels are:

      - Limited to 5 stages, so some granularity is lost; however, you can use RegEx to combine steps in a phase
      - You’ll have to share the custom funnel that you’ve built. It does not appear automatically in others’ reports. 
      - Please engage the Analytics-Insights team for further assistance.

7. From a technical implementation, what happens when a user finishes their form? For modernized VA.gov forms, several events are triggered:

      - `<product>--submission`: Measures initial submission; Successes and failures are measured as separate events 
      - `<product>--submission-successful` or `<product>--submission-failed` occurs: One of two events will occur to indicate succcessful submission or failed submission. (e.g.“hca--submission-successful”)

Next, the page URL ending in `/confirmation/` is counted as a successful completion. For example, when a user reaches a page like `/burials-and-memorials/application/530/confirmation/`, Google Analytics finds this Goal in the View(s) and counts the conversion.

8. Should I make my first step required? 
Since the modernized forms can be saved and completed at a later date, it’s best to leave this setting unchecked. If the first step is set to required, Google Analytics will only count conversions when the first step AND the confirmation page have been viewed. 

#### Analyzing Conversion Reports
1. What happens if a person refreshes their confirmation page in the same session?
A goal is only incremented once a session; if a user refreshes their page in the same session, it is only counted once as a goal. The page will receive a second pageview. Use case--I submit a form successfully and then I hit refresh 1 minute later. Google Analytics records this as:

      - 1 Goal Completion
      - 2 Pageviews

2. Why do I see entrances in the funnel straight to the confirmation page? Does this increment a conversion?
Users may return to the /confirmation page for your product area for various reasons, and so you will see this in the funnel steps. If this happens in a new session (e.g. they completed their form in their first session and then come back 2 hours later), this will increment a new goal for that form. Product owners should review their forms to see if they have a high rate of entrances to the confirmation page.

3. What are other limitations of the goal funnel I should keep in mind for product decisions?

      - Skipped steps in the goal funnel are backfilled. 

Use case: Jane Smith completes the 526EZ form. There are some optional steps for PTSD she didn’t see because she didn’t select the option(s) to complete the 21-0781/21-0781a.

How GA records in the Funnel: Even though Jane did not see these pages, Google Analytics will backfill these steps and consider them completed.

 - Funnel visualization reports can't be segmented.
      
Use case: As a product manager, I want to segment the funnel visualization report by mobile vs. desktop.

How GA Records Funnel Visualizations: In the Funnel Visualization report, it is not possible to apply a segment to the report. However, the Goal Flow report will allow you to segment by preconfigured or custom segments (navigate to Conversions>Goals>Goal Flow). 
