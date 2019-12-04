# SCO Page Key Decisions

## In this document:
* [The use of the Hub Page pattern](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/sco-migration-key-decisions.md#the-use-of-the-hub-page-pattern)
* [The use of accordions within spokes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/sco-migration-key-decisions.md#the-use-of-accordions-within-spokes)
* [Inclusion of announcements at the top](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/sco-migration-key-decisions.md#inclusion-of-announcements-at-the-top)
* [Key Resources for SCOs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/sco-migration-key-decisions.md#key-resources-for-scos)
* [Resources to support students](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/office-administration/vba/sco-migration/design/sco-migration-key-decisions.md#resources-to-support-students)

## The use of the Hub Page pattern:

### Background and problem to solve
The VBA GI Bill School Resource Page was composed of three pages that existed on benefits.va.gov.  These pages provided necessary resource links and documents for School Certifying Officials (SCOs) and administrators to complete required training and certification.  The pages provided links to resources that schools can use as they support students. We were tasked with migrating those three pages of content to VA.gov into a single, centralized page of resources. VA.gov consists of Veteran facing-content, yet the content we were working with is intended for non-Veteran audiences. As some of the first content on VA.gov not intended for Veterans, it is considered Tier 2 content, and our work would set the tone for other future non-Veteran content. 

### Constraints
No specific guidelines existed for the integration of non-Veteran facing content on VA.gov.

### Decision made
Due to the nature of the content and the task at hand, we decided to implement the use of the hub page pattern as the purpose of the new School Resources page was to provide a centralized resource for School Certifying Officials and school administrators. The original purpose of the hub page pattern is that it serves as a key landing page for a benefit area and provides content and links to help users understand what information is available in that section. The hub page can also act as a target landing page for outreach materials. Since hub pages are essentially key landing pages for content and links, that aligned most closely to our project precedent.

### Other designs considered
One of our other designs expanded the hub page model to include subpages of content with an accompanying navigation menu, but this strayed from the “one-stop shop” mandate. 

### Deciding factor(s) for our decision
* The hub page model permitted us to adapt the original purpose of the pattern to create a centralized, one-page repository of links and resources.
* The hub page pattern was an existing VA.gov pattern, and its familiarity allowed for more seamless integration of non-Veteran content.  

### Deciders 
Kevin Hoffman, DSVA. VA Education Team.

### When to revisit this decision
As more Tier 2 content is migrated to VA.gov, it may be necessary to revisit the design if DSVA chooses a different path for the integration of non-Veteran content.

 

## The use of accordions within spokes:

### Background and problem to solve:
We took three pages worth of content from the School Resources pages on benefits.va.gov and were tasked with migrating all of this content to one page, to a “one-stop shop”. The challenge for us was to create a new page that felt fairly short and light without seeming cluttered despite the large quantity of content we were incorporating.

### Constraints
The hub page pattern for VA.gov is limited to sections (spokes) that use links and optional descriptive text for each link. Since we had a large amount of content to migrate, we needed to find a way of displaying all of our content while still maintaining the general look and feel of a hub page.

### Decision made
Incorporating accordions within several of our spokes provided a viable solution to organizing that amount of content into smaller areas that didn’t take up much vertical real estate on the page. In addition to helping condense the content into smaller areas, the accordions provide a clear structure for the available resources for certifying officials within each spoke. Users can choose to view the content that’s relevant to them since we’ve broken out the resources into various categories, such as the three categories that are listed in the Training and Guides section.
The use of accordions to create subsections of topics within each of our “spokes” provided the right solution for the particular needs of our content. It allowed us to compartmentalize and organize all 3 pages of the benefits.va.gov content that we were tasked with migrating so that resources are easier to find for School Certifying Officials within the new Resources for Schools page. 

### Other designs considered
N/A

### Deciding factor for our decision
*	Accordions allowed for the discrete compartmentalization of plenty of content that the user can choose to reveal or not if they choose while creating the feel of a light and uncluttered page. 
*	Accordions permitted us to create subtopics of content to improve the navigation and findability of content for users in a familiar way.

### Deciders
Booz Allen UX Team. 

### When to revisit this decision
If DSVA decides to take the migration of Tier 2 content in a different direction, it may be necessary to revisit the use of this pattern.


## Inclusion of announcements at the top:

### Background and problem to solve:
One of the project mandates was to include a prominent announcements area with updates related to new programs, forms, legislation, and other relevant VA education announcements that School Certifying Officials need to be aware of. Our stakeholders wanted this content to be highly visible on the page as users came into it, and for it to be continuously maintained with fresh content.

### Constraints
No real design pattern exists on VA.gov to properly address the needs of this type of content.

### Decision made
The closest design pattern we could find was the light blue featured content component with a couple of modifications to accommodate the nature of the content, which is essentially a list of headlines with dates. This announcements area was placed below the jump links and the “Key Resources for SCOs” areas in order to maintain its prominence on the page.


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
We wanted to create an area of resources on the Resources for Schools page where School Certifying Officials could access quick links based on their most-utilized resources. This section would be comprised of the most valuable resources for School Certifying Officials. We identified these resources during our discovery interviews as we spoke to various SCOs. Our challenge was to find a way to display these quick links on our new hub page that seamlessly integrated with the other design elements on the page.

### Constraints
No quick links area existed on the hub page pattern that suited the needs of our content.

### Decision made
We created an area of quick links that are each separated by a vertical bar. They are placed beneath the “On this page” jump links and are highly visible as users first come on the page. These are quick links that the officials can access right away above the fold, reducing any challenges that they may have with finding what they need when they need it. Since the links are fairly small and concise, SCOs can immediately see what is available to them. When we conducted usability testing, SCOs expressed how these resources were very helpful to them, and they appreciated how prominent they are on the page.

### Other designs considered
*	Listing these quick links as an unordered list similar to the “On this page” jump links.

### Deciding factor for our decision
*	Distributing the quick links in a horizontal format increases left-to-right scannability with users.
*	The horizontal format of the links reduces vertical length on the page.

### Deciders
Booz Allen UX Team.

### When to revisit this decision
This design tested well, so, unless an issue becomes apparent in the future that we are not aware of, it’s not necessary to revisit. The only other reason would be to revisit it if DSVA takes Tier 2 content in a different direction.


## Resources to support students:

### Background and problem to solve:
The final section of the Resources for Schools page is dedicated to a group of additional links that SCOs can use to support military-connected students that is outside of the standard content on the page. It is based on the Related Links pattern found at the end of many of VA.gov’s hub pages. We wanted to find a way to display additional resources that was outside of using the spoke pattern, as hub pages are typically limited to 3 spokes. 

### Constraints
We wanted to find a concise and simple way of displaying additional resources to support students that didn’t involve using another spoke, as that meant increasing the vertical length of the page and exceeding DSVA’s recommended limit of 3 spokes on hub pages.

### Decision made
We determined using the Related Links pattern that is found at the end of many hub pages on VA.gov was the best solution for this particular problem. Despite being the last section on the page, during testing, School Certifying Officials easily navigated to this content, and they expressed how helpful these links would be to them in addition to having access to the rest of the content on the page. Since this proved quite valuable to SCOs during testing, we decided to ease access to this section by including it in the jump links navigation at the top of the page.

### Other designs considered
*	Potentially using an additional spoke on our hub page to house these additional resources.

### Deciding factor for our decision
*	Related links pattern provided a concise and simple format for housing additional links
*	The pattern integrates seamlessly with the other hub pages on VA.gov, as it is used on many of them.

### Deciders
Booz Allen UX Team.

### When to revisit this decision
If the list of links in this section grows to 8 or more, the look and feel of this section can be updated to match the other spokes on the page, such as the “Training and guides”.







