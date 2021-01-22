# IA Design and Recommendations
**STATUS: NOT STARTED**

**Team:** Facilities <br>
**Product/Featue:** Vet Center pages <br>
**IA Request:** https://app.zenhub.com/workspaces/vsp---product-support-5f85b91c14d8df0018fac414/issues/department-of-veterans-affairs/va.gov-team/15819

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

- Each Vet Center will have its own page, along with a child "Locations" page that will list related locations.   The "Locations" page will link to another Vet Center page if there is a page for it.  There will be no child locations in the intitial launch. 
- The Vet Center name will be pulled from VAST for the URL and breadcrumb
  - The breadcrumb will display the name as is
  - The URL will replace spaces with dashes and lower case all words; all special characters will be stripped except dashes
  - Drupal rules will manage when/if the URL should change if the data changes in source (VAST)


![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/64e34b9e-ec87-4d3b-aca5-3ac5787e7f8c)


Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Vet Center page | www.va.gov/[vet-center-name]/ | Home > [Vet center name] | - The vet center name will be pulled from VAST, rules in managing the name and corresponding H1 and URL are yet TBD <br> - The team is testing a variation of the label for "Home" in the breadcrumb. Recommendations will be based on those findings. 
Vet Center locations page |www.va.gov/[vet-center-name]/locations/ | Home > [Vet center name] > Locations |


<hr>

### Navigation and Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

- No left nav will be used within these pages at this time.  The team will include testing to ensure users can find a clear navigation paths between the vet center page and the locations page.  
- A modified breadcrumb will be tested that will include a link to VA.gov home but will a different label. 
- Users will link to these new pages via the Facility Locator tool


<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- The Facilities Team will need to identify any legacy vet center pages within VA.gov that should be "retired" and submit a redirect ticket to ensure user traffic is routed to the new Vet Center pages where applicable. 
- Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>

### Additional Details/Recommendations

<hr>
**Closure or changes to locations**
- Community Access Points (CAPs) and mobile locations are not permanent vet centers and can move between primary locations or be closed temporarily or permanently. 
- A process will need to be determined on how to handle locations that are closed/changed to ensure that pages/links are properly taken down and/or traffic is redirected as needed.
- CAPs and mobile locations will not have individual pages in the intitial launch.

<hr>

### Meetings Notes and Background Info

1/22/2021 - Regroup meeting with CMS and Facilities team
- Brick and mortar vet centers will have a page that will be linked to from the Facility Locator
  - Team will identify legacy pages that need to be redirected after launch
- Vet center pages will have a single child "Locations" page showing other locations and linking to those pages, but they are not hierarchichal
- There will be no left nav
- Need to finalize naming conv for H1 and URL? vet centers and outstations are good, CAP aren't totally locked in but wouldn't have their own page, driven from VAST
how do they go away? Need to know how to handle...
- FL will link to them
- legacy pages need retiring/redirect, no dual state
- vet centers static page still a separte conversation
- "va.gov home" in breadcrumb - will need to test


**11/17/2020 - Usability testing prep**
- Veterans are confused about vet center vs va clinic
- Awareness is the biggest thing we are trying to solve
- Are we striking the right tone for messaging, then circling back to where does that messaging live.
- Potential separate campaign landing page to help
- These will be individual sites, not sure if they will live as part of facility locator. They are technically equivalents to medical centers. 
IA feedback documented here: https://app.zenhub.com/workspaces/vsp---product-support-5f85b91c14d8df0018fac414/issues/department-of-veterans-affairs/va.gov-team/16235

**9/18/20 - Design intent**

Questions
- Breadcrumb?
- A left nav is not included in the wireframe, will there be child pages to this landing page?
- Will services descriptions be custom for each vet center? Or will it be more like VAMCs where there is service taxonomy and national descriptions with the option of adding local information on a separate page?
- Are "Highlight" blocks clickable into a detail page of some sort?  If so, does that page live elsewhere on the site or as part of this facility?
- Do we need an operating status page?
- Will these pages live independently of the FL or inside the FL? Do we want these to have clear and short URLs for direct access or will users primarily access via FL?
		○ www.va.gov/vet-center-location-name 
		○ www.va.gov/vet-centers/location-name
- mobile

Meeting notes
- Dave C - working on changing the health services taxonomy into a more general services taxonomy that is more inclusive
- This may be a single page in some instances or multiple pages depending on the size and breadth of the services offered

IA feedback issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/13745

**9/3/20 - Vet center kick off**

- Vet centers are part of VHA, community based centers that offer many services for Veterans and families, frequently the first touch point a Veteran has with VA, integral with the transition into VA, do help with full journey, help with major adjustments after Veterans return from combat
- Relationships with the vet center can be long term/life long
- There is no online presence except basic page facility locator
- Started services taxonomy, looking to shift into the page design and then shift back to taxonomy to fine tune
- Drupal managed content and authoring experience, basic information through API
- Pages should look like VA but look like a Vet Center
- Ryan T - there was work done on this earlier; Michelle - we decided to start from scratch to hear what it is they need and to not start biased, will reference
- They have a lot of events
- Success measures - increasing utilization of services (not sure how to get at that), traffic to pages, consider focusing in on behaviors we can drive from these page (i.e. the CTAs we have)
- 300 stand alone facilities, a handful of outstations, many informal access points, mobile vet centers.  Will likely focus on the primary vet centers, not as formal as a network as VAMCs, this structure is a bit TBD yet, sent earlier IA work to Meg
