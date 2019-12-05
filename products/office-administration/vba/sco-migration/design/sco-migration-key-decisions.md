# SCO Page Key Decisions

## In this document:
* [The use of the Hub Page pattern](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/sco-migration-key-decisions.md#the-use-of-the-hub-page-pattern)
* [The use of accordions within spokes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/sco-migration-key-decisions.md#the-use-of-accordions-within-spokes)
* [Key Resources for SCOs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/sco-migration-key-decisions.md#key-resources-for-scos)
* [Inclusion of announcements at the top](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/sco-migration-key-decisions.md#inclusion-of-announcements-at-the-top)
* [Resources to support students](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/sco-migration-key-decisions.md#resources-to-support-students)

## The use of the Hub Page pattern:

### Background and problem to solve
The original VBA GI Bill School Resource section was composed of 3 pages on benefits.va.gov.  These pages provided resource links and documents for School Certifying Officials (SCOs) and administrators to complete required training and certification.  The pages provided links to resources that schools use as they support students. The redesign team was tasked with migrating those 3 pages of content to VA.gov into a single, centralized page. 

Further complicating the issue, VA.gov consists of Veteran facing-content, yet the content we were working with is intended for non-Veteran audiences. As some of the first non-Veteran content on VA.gov, our work helped blaze trails for other future non-Veteran content. 

### Constraints
No specific guidelines existed for the integration of non-Veteran facing content on VA.gov.

### Decision made
Due to the nature of the content and the task at hand, we decided to use of the hub page pattern. The new School Resources page was to provide a centralized resource for School Certifying Officials and school administrators. The original purpose of the hub page pattern is to serve as a key landing page for a benefit area and provide content and links to help users understand what information is available in that section. The hub page can also act as a target landing page for outreach materials. Since hub pages are essentially key landing pages for content and links, that pattern aligned most closely to our project.

### Other designs considered
One of the designs we didn't use included several subpages of content with an accompanying navigation menu. This strayed from the “one-stop shop” mandate so we abandoned the idea. 

### Deciding factor(s) for our decision
* The adapated hub page model allowed for the creation of a centralized, one-page repository of links and resources.
* The hub page pattern was an existing VA.gov pattern, and its familiarity allowed for more seamless integration of non-Veteran content.  

### Deciders 
Kevin Hoffman, DSVA. VA Education Team.

### When to revisit this decision
As more Tier 2 content is migrated to VA.gov, it may be necessary to revisit the design as the plan for integrating non-Veteran content evolves.

 

## The use of accordions within spokes:

### Background and problem to solve:
We were tasked with migrating 3 pages of content from the school resources pages on benefits.va.gov to a single “one-stop shop”. The challenge for us was to create a new page that felt fairly light and short (per our stakeholder's request) without seeming cluttered. Given the large quantity of content we were incorporating into the page, this was a significant challenge.

### Constraints
The hub page pattern for VA.gov is limited to sections (spokes) that use links and optional descriptive text for each link. Since we had a large amount of content to migrate, we needed to find a way of displaying all the content while still maintaining the general look and feel of a hub page.

### Decision made
Incorporating accordions within several of our spokes provided a viable solution to organizing the content into smaller areas which didn’t take up much vertical real estate. In addition to helping condense the content, the accordions provide a clear structure for the available resources within each spoke. Users can choose to view just the content that’s relevant to them since it's broken into various categories, such as those listed in the Training and Guides section.

Using accordions to create subsections within each “spoke” provided the right solution for the particular needs of the content. It allowed us to compartmentalize and organize all 3 pages of the benefits.va.gov content so that resources are easier to find for School Certifying Officials within the new Resources for Schools page. 

### Other designs considered
N/A

### Deciding factor for our decision
*	Accordions allowed for the discrete compartmentalization of content that the user can choose to reveal or not if they choose while creating a light and uncluttered page. 
*	Accordions permitted us to create subtopics of content to improve the navigation and findability of content for users in a familiar way.

### Deciders
Booz Allen UX Team. 

### When to revisit this decision
If DSVA decides to take the migration of Tier 2 content in a different direction, it may be necessary to revisit the use of this pattern.


## Inclusion of announcements at the top:

### Background and problem to solve:
One of the project mandates was to include a prominent announcements area with updates related to new programs, forms, legislation, and other relevant, timely information School Certifying Officials need. Our stakeholders wanted this content to be highly visible on the page and to be maintained with fresh content.

### Constraints
No real design pattern exists on VA.gov to properly address this type of content.

### Decision made
The closest design pattern we could find was the light blue featured content component.  We used this with a couple of modifications to accommodate the nature of the content, essentially a list of headlines with dates. This announcements area was placed high on the page (below the jump links and the “Key Resources for SCOs” areas) to maintain its prominence on the page.


### Other designs considered
N/A

### Deciding factor for our decision
*	The featured content pattern, with some modifications, allowed us to properly display announcements headlines in a prominent manner on the page.

### Deciders
Booz Allen UX Team.

### When to revisit this decision
If the current pattern and design aren’t drawing enough attention to the announcements headlines based on analytics data, then it may be necessary to reexamine how announcements are displayed on the page.

## Key Resources for SCOs:

### Background and problem to solve:
We wanted to create an area on the page where School Certifying Officials could quickly access their most-utilized resources. We identified these resources during our discovery interviews as we spoke to various SCOs. Our challenge was to find a way to display these quick links on our new hub page that integrated effectively with the other design elements on the page.

### Constraints
No quick links area existed on the hub page pattern that suited the needs of our content.

### Decision made
We created an area of quick links that are each separated by a vertical bar. They are placed beneath the “On this page” jump links and are highly visible as users first come on the page. These are links that the officials can access right away above the fold, reducing any challenges that they may have with finding what they need, when they need it. Since the links are compact and concise, SCOs can immediately see what is available to them. 

During usability testing, SCOs expressed how these resources were very helpful to them, and they appreciated how prominent they are on the page.

### Other designs considered
*	Listing these quick links as an unordered list similar to the “On this page” jump links.

### Deciding factor for our decision
*	Distributing the quick links in a horizontal format increases left-to-right scannability with users.
*	The horizontal format of the links reduces vertical length on the page.

### Deciders
Booz Allen UX Team.

### When to revisit this decision
This design tested well, so, unless an unexpected issue arises, it’s not necessary to revisit. The only other reason would be to revisit it if DSVA takes Tier 2 content in a different direction.


## Resources to support students:

### Background and problem to solve:
The final section of the Resources for Schools page is dedicated to resources SCOs can use to support military-connected students that are outside of their work "certifying" students. The section is based on the Related Links pattern found at the end of many of VA.gov’s hub pages. We wanted to find a way to display these additional resources that was different than the spoke pattern, as hub pages are typically limited to 3 spokes and since the links in this section were "bonus" content.

### Constraints
We wanted to find a simple way to display additional resources to support students that didn’t involve using another spoke, as that meant increasing the vertical length of the page and exceeding DSVA’s recommended limit of 3 spokes on hub pages.

### Decision made
We determined using the Related Links pattern that is found at the end of many hub pages on VA.gov was the best solution for this particular problem. Despite being the last section on the page, during testing, School Certifying Officials easily navigated to this content. They also expressed how helpful the resource to support students would be to them. Since the section proved so valuable to SCOs during testing, we included a link to the section in the jump links navigation at the top of the page to further increase its visibility and improve ease of access.

### Other designs considered
*	Potentially using an additional spoke on our hub page for these additional resources.

### Deciding factor for our decision
*	Related Links pattern provided a concise and simple format for the additional links.
*	The pattern integrates seamlessly with the other hub pages on VA.gov, as it is used on many of them.

### Deciders
Booz Allen UX Team.

### When to revisit this decision
If the list of links in this section grows to 8 or more, the look and feel of this section can be updated to match the other spokes on the page, such as the “Training and guides”.







