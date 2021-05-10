**<span style="text-decoration:underline;">Improving Veterans’ Experience on VA.gov / VFS Reporting</span>**

**Summary**

Our team is working to identify the best solution(s) we can implement to help reduce the amount of problems Veterans experience while trying to complete tasks on VA.gov. We used this as an opportunity to practice “managing to outcomes”, starting with our key problem statement as noted below and working our way backwards towards viable solutions. We then took to task validating which solutions were feasible now, soon, later, or likely not in our distant future.

We focused on the <span style="text-decoration:underline;">outcom</span>e of _VFS Teams better understand where they should be improving the Veteran experience_ along with the key <span style="text-decoration:underline;">opportunity</span> to deliver on that outcome by way of _as a VFS team, I want to see the data for support issues related to my product._ We arrived at the 3 most effective and plausible solutions listed here in no particular order:



*   DOMO - Support Reporting Dashboard(s)
    *   Achievable - Yes (5)
    *   Difficulty - High/**Mid**/Low
*   Monthly Salesforce Support Report for VFS teams (Automated Export delivered in some fashion)
    *   Achievable - Yes (5)
    *   Difficulty - High/Mid/**Low** (depending on data fields needed)
*   Salesforce - Support Dashboards (within SF)
    *   Achievable - Yes (5)
    *   Difficulty - **High**/Mid/Low (due to SF access)

Based on our due diligence around which of these we can and/or should go after, our best short/mid-term bet is DOMO Support Reporting Dashboard. Here’s why, along with an explanation of how that might look.

Why DOMO seems to be the best option:



*   VFS teams have access to DOMO
*   Existing VFS reporting lives in DOMO
*   We can create cards and dashboards in DOMO which can be mapped to and connect to a data set we upload
*   We can upload a data set exported from Salesforce
*   This will be manual, however, less manual than other _possible_ options
*   Opportunity to automate delivery of Salesforce data export to DOMO connector, which can automatically update data set and DOMO dashboard
*   If we gained Salesforce API access, we could fully automate this option.
*   Good short, mid, and long-term options

Why Salesforce reporting _<span style="text-decoration:underline;">does not</span>_ seem to be the best option:



*   Salesforce options in general
    *   Our salesforce instance is managed and controlled by folks outside of our program, which forces us to inherit functionality and restrictions that don’t necessarily meet our needs in data and reporting. This has proven to be a challenge with some basic and more complex requests already.
*   Salesforce - Monthly Support Report 
    *   Excel Doc, possibly with pre-built charts, is extremely manual, not very intuitive, and would likely require work from the VFS teams to filter and create views that were meaningful to them. This could be prohibitive for adoption.
*   Salesforce - Support Dashboard:
    *   At this point, we do not have the ability to create dashboards in Salesforce in our instance and it would be extremely difficult if not impossible to get those abilities.
    *   It would also be extremely difficult if not impossible to provision Salesforce access to VFS personnel who would be needing to view reports (they already have DOMO access)

----

**<span style="text-decoration:underline;">Managing to Outcomes</span>**

**Problem**

Veterans experience too many problems while trying to complete tasks on VA.gov

**Outcomes**



*   VFS Teams care about the Veteran experience while using their products
*   VFS Teams better understand what they are doing well
*   VFS Teams better understand where they should be improving the Veteran experience

**Focused Outcome #1**



*   VFS Teams better understand where they should be improving the Veteran experience

**Opportunities (#1)**



*   **As a VFS team, I want to see the data for support issues related to my product**
*   As a VFS team, I want the problem points for my product outlined
*   As a VFS team, I want to have the data around support issues contextualized
*   As a VFS team, I want my tasks and/or directions easily understood
*   As a VFS team, I want to understand and track growth/progress around problem areas
*   _As the Contact Center Team, we want to empower VFS teams to appropriately improve targeted areas_
*   _As the Contact Center team, we want to understand what VFS teams need in order to improve_

**Solutions to deliver on opportunity - _As a VFS team, I want to see the data for support issues related to my product_**



*   Self-service reporting dashboard (DOMO)
    *   Providing all relevant support information to VFS teams
    *   We ensure support issues are appropriately tagged with keywords, categories, etc.
    *   Training for agents
    *   Automation is a barrier
        *   How manual would the process be?
    *   Provide ability to get the data to teams more directly than other options.
    *   Achievable - Yes (5)
    *   Difficulty - High/**Mid**/Low
*   Monthly report for VFS teams with necessary data (Automated Export delivered in some fashion)
    *   Having information baked into their existing processes
    *   Is there a report or other medium they are already using, which we could piggyback on
    *   How does this get into their planning processes
    *   Automated? Delivered via slack integration?
    *   Achievable - Yes (5)
    *   Difficulty - High/Mid/**Low** (depending on data fields needed)
*   SF dashboards
    *   SF reporting access for VFS teams
    *   Confluence documentation on how to access/build reports
    *   Integrate SF -->Confluence
    *   How can folks access?
    *   Achievable - Yes (5)
    *   Difficulty - **High**/Mid/Low (due to SF access)
*   VEO creates/had integration with PowerBI and their SF CRM data
    *   Can make this available to view by users
