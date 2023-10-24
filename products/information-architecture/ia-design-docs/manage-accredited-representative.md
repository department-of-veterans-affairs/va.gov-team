# IA Design for Manage Accredited Representative
**STATUS: In Progress pending research + content updates**

**Team:** 
Team name: Accredited Representation Management
OCTO-DE product owner: Zach Goldfine
Product manager: Lindsay Li-Smith
Designer: Michael Tri (starting 9/25)
Accessibility specialist: n/a
Content writer: n/a
Slack channel: benefits-representation-management

**IA Request:** [65809](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65809)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)


## <a name="flows"></a>User/page flows <br>
Up-to-date user flow found in mural here: https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692888741111/2474c0612887653142ab991d234898b6968dbf0e?wid=1-1696370591178

Google analytics SEO Info:
![SEO Info](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/c65f8312-3f34-441b-a17a-e9fece13e797)

Also available here as a [google doc](https://docs.google.com/spreadsheets/d/1Kdn9S7UvAzhGUylHzffDCVVAj3j_bLz-PTKsqaj8Is8/edit#gid=0) -- need to request access, sorry! And shared with the team as an excel file in their slack channel.

## <a name="map"></a>Page structure<br>
![Page structure from mural](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/c5f8fbc3-513e-4c33-805b-c425f5e7f12e)
The up-to-date page structure can be viewed in [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692888741111/2474c0612887653142ab991d234898b6968dbf0e?wid=0-1697145057961).

The new tool will live under ROOT since it supports all benefit types. 
- It will have a tool landing page with it’s own URL (va.gov/manage-accredited-rep/ above, though that URL is TBD and may change based on content recs. See URL stuff below for final version). 
- It will also have a base URL for the tool itself, starting from the search screen (va.gov/manage-accredited-rep/find-and-appoint-a-representative/ above, though same not. That may change. We’re hoping the structure itself wont change).
- The pages within the flow (blue stickies above) may change depending on what steps the team decides to include. The team can change those ‘step’ urls themselves, but try to make them plain language!
- Rationale: This 2-url structure is how other tools are structured on va.gov. Ex: claim status tool. 


## <a name="url"></a>URLs and breadcrumbs
**1) R+S Page - MOVE**
- URL: TBD depending on H1 that content lands on.
- Breadcrumb: Home > Resources and support > [H1 TBD by content]
- Notes:  We will migrate an existing disability page (va.gov/disability/get-help-filing-claim) to resources and support, because it applied to all benefits, not just disability. The entry point in the disability left nav and hub pages will remain, they will just need to be edited in Drupal to point to the new R+S url.

**2) Tool Landing Page - NEW**
- URL: TBD based on H1, but potential option just to illustrate the point is va.gov/**manage-accredited-representative**
- Breadcrumb: Home > [H1 TBD by content]
- Notes: This is the unauth landing page for the tool, similar to this one for claim status tool: https://www.va.gov/claim-or-appeal-status/

**3) Tool Base URL - NEW**
- URL: TBD based on H1, but potential option just to illustrate the point is va.gov/manage-accredited-representative/**find-and-appoint-a-representative/search**
- Breadcrumb:  Home > [H1 of unauth tool landing page TBD by content] > [H1 TBD by content]
- Notes: Note that the ‘find-and-appoint-a-representative’ slug is an empty directory, but this is how the other tools work, so this is what we’re going with. So when implementing, devs will need to redirect /find-and-appoint-a-rep to /find-and-appoint-a-rep/search

## <a name="nav"></a>Entry points <br>
- The main entry point to the tool is the R+S landing page
- Aside from that, there are MANY crosslinking opportunities across va.gov. These opportunities are fleshed out in this [mural here](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692888741111/2474c0612887653142ab991d234898b6968dbf0e?wid=3-1696370591178). All of these different entry points will point to the R+S page, which explains more about what accredited reps are and when to use them. The R+S page will point to the tool landing page, which describes how to use the tool. And then the tool is the tool!
- Closer to implementation, the content team will work to update the relevant entry points with updated link labels and urls.  

![user journey with multiple entry points circled](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/1ea147ae-8b2e-4ab8-9b46-8b7926559611)

Additionally, we identified a need for entry points potentially in the Profile (where a veteran may go to view current rep), and MyVA (where they might see an application for appointing a rep in progress). 

![User journey with 'view my current rep' task](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/f146286a-70ae-4baf-af60-bb45097684d4)


## <a name="redirects"></a>Redirects <br>
| Current URL                                                             | Redirect to                                       | Notes                                                                   |   |   |
|-------------------------------------------------------------------------|---------------------------------------------------|-------------------------------------------------------------------------|---|---|
| https://www.va.gov/ogc/apps/accreditation/index.asp and all child pages | Tool landing page, url TBD                        | The ‘current URL’ is the existing find a rep tool in eBenefits. We will |   |   |
| https://benefits.va.gov/vso/index.asp                                   | Relocated accredit rep info page in R+S (url TBD) | Not sure if we want this redirect or not, need to check with content    |   |   |
| https://www.va.gov/disability/get-help-filing-claim/                    | Relocated accredit rep info page in R+S (url TBD) |                                                                         |   |   |
| All existing entry points in drupal and product pages                   | Relocated accredit rep info page in R+S (url TBD) |                                                                         |   |   |

**PRODUCT TEAM!**! You need to submit a [redirect ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jennymayoco%2C+jilladams%2C+RLHecht&labels=sitewide+CAIA%2C+Sitewide+IA%2C+Public+Websites%2C+VA.gov+frontend%2C+Redirect+request&projects=&template=redirect-request.md&title=Redirect+Request) once go-live approaches. Follow the instructions here. Basically the process is I check that they're accurate, and then pass over to the public websites team to actually implement the redirect. This is a frequent sticking point in the process, so pls ask if you're confused!

## <a name="bestbets"></a>Best Bets
Search “best bets” are suggested pages that appear in the “Our top recommendations for you” section when you perform a search on VA.gov. These suggestions are selected for specific terms and are intended to help veterans and their beneficiaries find relevant results quickly. We want to make sure that best bets are not linking to the deprecated page.

There are currently 4 best bets set up around this project

| Best Bet                                             | Changes needed?                                                              | What changes                                                                   |   |   |
|------------------------------------------------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------|---|---|
| https://benefits.va.gov/vso/index.asp                | Yes                                                                          | Remove this best bet and set up an identical one for the new tool landing page |   |   |
| https://www.va.gov/disability/get-help-filing-claim/ | Yes                                                                          | Remove this best bet and set up an identical one for the new R+S page          |   |   |
| va.gov/find-forms/about-form-21-22/                  | No - the form isn’t changing with the MVP, so no need to change the best bet | NA                                                                             |   |   |
| va.gov/find-forms/about-form-21-22a/                 | No - the form isn’t changing with the MVP, so no need to change the best bet | NA                                                                             |   |   |


