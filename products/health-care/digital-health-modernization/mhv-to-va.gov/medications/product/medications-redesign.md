# My HealtheVet - Meds Management Improvements / Initiative Brief
January 2026

## On this page
* [Overview](#overview)
* [Problem statement](#problem)
* [User outcomes](#user)
* [Business outcomes](#business)
* [Measuring success](#metrics)
* [Discovery](#discovery)
* [Technical](#technical)
* [Solution approach](#solution)
* [Communications](#communications)


## <a name="overview"></a>Overview
Medications on My HealtheVet is a critical health tool that allows users to 1.) get more of the medications they need (through refills and renewals), 2.) get important directions and instructions related to managing those medications (instructions for use, dosage, etc.), 3.) check the status of requested mediations that are in-progress, and 4.) review, print, or download a list of their medications (whether "active" medications or a fuller, more comprehensive list of them). 

Related/Associated product(s) [Medications product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications#mhv-on-vagov-medications-product-outline)

## <a name="problem"></a>Problem statement

Today, users are experiencing significant findability issues and struggling to accomplish key medication management tasks. These problems have been consistently reported for over 18 months in the product, and despite small changes, we are not seeing marked improvements as reported by users.

**User pain points:**
* Users regularly report difficulty figuring out what they need to "do" to get more of their medication (renewal v. refill) and where to do that,
* Finding status information on refills after they've been requested,
* Understanding the refill process and what various statuses in this process mean,
* Being overwhelmed by the full list of medications,
* Frequent reports about users not wanting to see a full list of all meds they've ever taken,
* How to view/print/download a list of their "current" or "active" medications to share with providers at appointments

These problems cross several medications tasks, touch most objects in the data model, impact the majority of users, and have been known for a long time. This has led us to take on "blue sky" design discovery ideation to explore changing (expanding) the footprint of the existing Medications tool. 

## <a name="user"></a>User outcomes
### Desired user outcomes
* A more personalized, task-driven landing page will point users to the most important actions, increase findability, and help users meet most of their needs
* The top task in medications (prescription refill) will be easier for users to complete when it is on the landing page
* Adding a new medications “in-process” page will help users understand the refill process and easily track the status of their in-progress medication refills
* Simplifying the meds list to be an inventory of “recent” or “comprehensive” medications history will reduce cognitive load and make more sense to users, allowing them to self-serve the information they need.

### Undesired user outcomes
* Users are still confused about what they can do in the medications tool
* Users continue to struggle with wayfinding - they don't know where to go to do common tasks
* The in-progress mediations page does not help users identify the status of their recently requested meds, or understand the process/timeline to get their medications
* Users still struggle with the medications history list, and can't figure out how to use sort/filter components to see what they need

## <a name="business"></a>Business outcomes

### Desired business outcomes
* Improvements to the landing page allow Veterans to both 1.) understand what they can do in the medications tool, and 2.) easily get to the most important medications-related tasks and pages
* Fewer findability challenges are reported from users via Medallia, Call Centers/Help Desk
* More transparency around the refill process (solved by a new "medications in-progress" page) in language that users can understand will increase customer satisfaction with the product
* Veterans can self-serve information and tasks more easily, reducing burden on the Veteran (and on call centers)

### Undesired business outcomes
* Significant findability problems are still being reported, and a high burden on call centers still exists
* The "in-progress" page doesn't noticeably improve user confusion around the refill process
* The medications history list is harder for users to understand
  
## <a name="metrics"></a>Measuring success

### Post-launch metrics monitoring plan
* TBD

### KPIs

* Reduce call center volume of Rx related issues | Baseline | Target | Link to data source (e.g. GA, Domo) - TBD: verifying we have access to this information
* Reduce Medallia volume of Rx related issues | Baseline | Target | Link to data source (e.g. GA) - TBD: verifying information
* Improve CSAT scores for the medications app | Baseline | Target | Link to data source (e.g. Domo) - TBD: verifying information


## <a name="discovery"></a>Discovery

### Assumptions/Risks

### What you're building
We are making several front-end architectural changes to the medications product (**WEB only for now**) with this initiative (pending user research results, which could change some planned approaches): 
1. Updating the Medications landing page (entry point) to be action-oriented. Page hierarchy will prioritize top-tasks in the tool 
2. Moving refill functionality to the landing page and removing the dedicated `/medications/refill` page from the product
3. Building a new  `/medications/in-progress` page to surface status and shipping information for in-progress refills
4. De-prioritizing the medications history list, which was formerly the entrypoint to the tool. This content will move off of the `/medications` landing page and to a new `/medications/history` page in the tool that we route users to for specific tasks only, including: (a) Viewing / printing / downloading a list of their medications (can be filtered/sorted); and (b) linking users to medications that require renewals (we'll pre-filter this list to only display meds that need renewals)

**Diagram: planned sitemap changes:**
<img width="1460" height="776" alt="Screenshot 2026-01-10 at 3 05 54 PM" src="https://github.com/user-attachments/assets/0adb459a-0979-4e05-9a7c-d6891911527a" />


## <a name="technical"></a>Technical Decisions

### Technical Decisions & Architectural Changes
* 


## <a name="solution"></a>Solution approach

### Collaboration Cycle
* Kickoff ticket: [linked](https://github.com/department-of-veterans-affairs/va.gov-team/issues/129699)
* PO sync: [Date TBD]
* Architecture review: [Date TBD]
* Midpoint review: [Date TBD]
* Staging review: [Date TBD]

### Launch plan
* [Release plan documented here] - [_make copy of this .md file and draft release plan_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

**Timeline for release**
* **Target launch date**: March 31, 2026
* **Actual launch date**: TBD

## Additional resources
* Figma Designs: [linked](https://www.figma.com/design/VunyfNQ9x7Bt58D9B2qnW5/%F0%9F%92%A1-Working-file--MHV-Medications---Devices-?node-id=6299-8780&p=f&t=pKPeR79R5PbD23z0-0)
* Research Kickoff Figjam: [linked](https://www.figma.com/board/GFsQQlHtXdjF06nz6B7ZAo/Research-Kickoff--Meds-Order-History-page?t=pKPeR79R5PbD23z0-0)
* "Blue Sky" Discovery Artifacts from 2025: [linked](https://github.com/orgs/department-of-veterans-affairs/projects/1727/views/1?filterQuery=is%3Aclosed%2C+status%3AEpic+&pane=issue&itemId=120834844&issue=department-of-veterans-affairs%7Cva.gov-team%7C114110)

## <a name="communications"></a>Communications
### Medications team
* Team name: My HealtheVet Medications
* Product PoCs: Kay Lawyer (PO), Robyn Singleton (UX Lead)
* Github Label(s): `mhv-medications`
* Slack channel(s): `#mhv-medications-rx` and `#mhv-medications-devs`
### Stakeholders
* OCC: Dr. Eric Spahn (Pharmacy)
