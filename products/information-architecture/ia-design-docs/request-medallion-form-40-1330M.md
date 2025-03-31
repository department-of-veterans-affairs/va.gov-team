# IA Design for Request Medallion form 40-1330M
**STATUS: In review**
- 3/31/2025 - MN: Updated to reflect most recent proposed IA.  Waiting for partner review and approval. 

**Team:** Memorials self service
OCTO product owner: Matt Self
Product name: Apply for a medallion in a private cemetery (includes cemetery review process)
Product manager: Catherine Hughes
Slack channel: #sitewide-content-accessibility-ia
designer: Charlie Barron

**IA Request:** [85541](https://github.com/department-of-veterans-affairs/va.gov-team/issues/85541)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map) 
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)


## <a name="flows"></a>User/page flows <br>
_Illustration and/or description of how users will navigate to and flow through the experience for all impacted visitors typies. This helps identify key entry points and findability requirements, user flow scenarios, and content/messaging needs across various scenarios._

![image](https://github.com/user-attachments/assets/9cfe87ed-4e22-436a-bb65-de35cc327208)


![image](https://github.com/user-attachments/assets/d524ac50-c106-436d-9ab8-63595c8847ba)



## <a name="map"></a>Page structure<br>
_Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site._

- The existing [Headstones, markers, medallions, plaques and urns page](https://www.va.gov/burials-memorials/memorial-items/headstones-markers-medallions/) will be archived and the information will be split across 3 new pages:
  - Headstones and markers page
  - Plaques and urns page
  - Medallions for private cemetery page
- Dividing the current page simplifies the content and naming of the page and allows content to speak specifically to those that are eligible.
- The links to the existing TeamSite pages - Emblems of belief, Inscriptions, Historic headstones and markers, Unmarked graves, and discharg documents needed - will move to a related links section on the new headstones and markers page
- While the form flow for the cemetery representative review process will live as a child to the new medallions content page - there will not be a link to that form flow within the experience.  That form flow will essentially be "orphaned" within the structure.  An email that is triggered when a medallion application is submitted, will be sent to a representative at the cemetery and will serve as the only way to access it. 

![image](https://github.com/user-attachments/assets/b1f113b0-200d-475f-8acb-b05940fe878b)




## <a name="url"></a>URLs and breadcrumbs

**1) Headstones and markers unauth content page - New**
- URL: va.gov/burials-memorials/memorial-items/headstones-markers/
- Breadcrumb: VA.gov home > [Burials and memorials hub page H1] > [Memorial items page H1] > [Headstones page H1] 
  - All breadcrumb segments must exactly match the H1 of their corresponding page
  - Example breadcrumb: VA.gov home > VA burials benefits and memorials items > Memorial items for Veterans > Headstones and markers 
- Title tag: [Form H1] | Veterans Affairs
  - Title tags are all displayed in title case
  - Example of title tag: Headstones And Markers | Veterans Affairs

**2)Plaques and urns unauth content page - New**
- URL: va.gov/burials-memorials/memorial-items/plaques-urns/
- Breadcrumb: VA.gov home > [Burials and memorials hub page H1] > [Memorial items page H1] > [Plaques and urns page H1] 
  - All breadcrumb segments must exactly match the H1 of their corresponding page
  - Example breadcrumb: VA.gov home > VA burials benefits and memorials items > Memorial items for Veterans > Plaques and urns
- Title tag: [Form H1] | Veterans Affairs
  - Title tags are all displayed in title case
  - Example of title tag: Plaques And Urns | Veterans Affairs

**3) Medallions for private cemeteries unauth content page - New**
- URL: va.gov/burials-memorials/memorial-items/medallions/
- Breadcrumb: VA.gov home > [Burials and memorials hub page H1] > [Memorial items page H1] > [Medallians page H1] 
  - All breadcrumb segments must exactly match the H1 of their corresponding page
  - Example breadcrumb: VA.gov home > VA burials benefits and memorials items > Memorial items for Veterans > Medallions for private cemeteries 
- Title tag: [Form H1] | Veterans Affairs
  - Title tags are all displayed in title case
  - Example of title tag: Medallions For Private Cemeteries | Veterans Affairs

**4) Request medallion form 40-1330M online form flow  - New**
- URL: va.gov/burials-memorials/memorial-items/medallions/request-medallion-form-40-1330m
- Breadcrumb: VA.gov home > [Burials and memorials hub page H1] > [Memorial items page H1] > [Medallians page H1] > [Form H1]
  - All breadcrumb segments must exactly match the H1 of their corresponding page
  - Example breadcrumb: VA.gov home > VA burials benefits and memorials items > Memorial items for Veterans > Medallions for private cemeteries > Apply for a medallion in a private cemetery VA Form 40-1330M
- Title tag: [Form H1] | Veterans Affairs
  - Title tags are all displayed in title case

**5) Cemetery representative review online form flow - New**
- URL: va.gov/burials-memorials/memorial-items/medallions/review-medallion-request/
- Breadcrumb: This form flow will will not have a breadcrumb
  - This form flow will live isolated within the Veteran burials and memorials structure.  The parent pages of the structure will not provide links to this form flow, users must access it via an email.
  - A breadcrumb is not necessary for this flow because the context of where you are in the site is irrelevant since it is only accessible from an email.
- Title tag: [Form H1] | Veterans Affairs
  - Title tags are all displayed in title case
  - Example of title tag:  Review | Veterans Affairs

## <a name="nav"></a>Entry points <br>
_Teams must launch with at least one entry point that allows site visitors to navigate via a page or menu to the new content or feature. That entry point is listed as "required" in this section._

### Entry points required for launch
- These are the entry points needed to support both the new content pages, the applicant flow, and the cemetery representative flow.

**1. [Memorial items landing page](https://www.va.gov/burials-memorials/memorial-items/)**
  - This page serves as a navigational page to the various memorial items available and will provide the primary entry point to the new pages.
  - Options/pages should be ordered on the page as follows:
    - Headstones and markers
    - Plaques and urns
    - Medallions for private cemeteries
    - Burial flags
    - Presidential Memorial Certificates
  - Link labels are TBD and based on final H1s of the new pages

**2. [Medallions for private cemeteries page](https://www.va.gov/burials-memorials/memorial-items/)**
  - This page will provide the primary entry point to the medallion request form flow. 
  - If a sign in widget or flipper is required, it will be placed on this page.
  - Page placement will be determined by the content team.

**3. Signor/Cemetery representative email**
  - This is the email that is generated and sent to a cemetery representative when an applicant submits their application form for a medallion.
  - This is the only way a cemetery representative can access the reviewal flow.
  - Email content and link will be determine by the content team.

### Post-launch entry points
- These are the entry points to be added once the pages are live.

**4.[Memorial items landing page](https://www.va.gov/burials-memorials/memorial-items/) secondary (side) navigation**
  - The link label for the existing "Memorial items" option in the secondary nav should updated to match the H1 of the page
  - Child options should be ordered as follows:
    - Headstones and markers
    - Plaques and urns
    - Medallions for private cemeteries
    - Burial flags
    - Presidential Memorial Certificates
  - Link labels are TBD and based on final H1s of the new pages
  - This can be added anytime after the online form flow is available to 100% of site visitors. 

**5. [Burials and memorials benefit hub page](https://www.va.gov/burials-memorials)**
  - The link label for the existing "Benefits for burial or memorialization" should be updated to coincide with the H1 update of the resulting page.

**6. [About VA Form VA40-1330 detail page](https://www.va.gov/find-forms/about-form-40-1330m/)**
  - The content of this page should be reviewed and expanded on to include supporting information and a CTA to go to the online form.
  - Content and placment of the CTA is determined by the standard structure and approach to the about form detail pages.
  - This can be added anytime after the online form flow is available to 100% of site visitors. 

**7. [Find a VA form](https://www.va.gov/find-forms/?q=1330) search results pages**
  - Placement of a CTA to go to the online form under form 40-1330M when it appears in search results.
  - Link label and placement will be done per standard guidance and direction for the find a form tool. 
  - This can be added anytime after the online form flow is available to 100% of site visitors. 

 

## <a name="redirects"></a>Redirects <br>

Existing URL | Redirect to (new URL) | Notes
--- | --- | ---
https://www.va.gov/burials-memorials/memorial-items/headstones-markers-medallions/ | TBD | Need to determine most relevant redirect destination

## <a name="bestbets"></a>Best Bets<br>








<hr>
<hr>
