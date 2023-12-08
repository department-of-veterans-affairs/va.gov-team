# IA Design for new 10-10ezr form for updating personal info that impacts health benefit
**STATUS: Decided, but open for review/comments**

**Team:** 10-10 Health Apps

Designer: Hieu Vo
Accessibility: David Kennedy
UX/Research: Jessica Stump
UX/Research: Katelyn Caillouet


**IA Request:** [#65919](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65919)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)


## <a name="flows"></a>User/page flows <br>
You can see the up-to-date user flow in this [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1694187967183/741f1aae088c1fa5892c6ee53eccec2e4c0342b5?wid=0-1695830102057).
![user journey of updating personal info](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/142fcd14-eac5-4370-83aa-d81ef12b0dd6)


## <a name="map"></a>Page structure<br>
The new online form will live under /my-health/, and be crosslinked from the 'Update my health info' static page.

![Diagram showing Home > my health > the new form](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/57e8794f-486f-42f5-a513-9d7991ac7fb5)


## <a name="url"></a>URLs and breadcrumbs

**1) Static Page**
- URL: va.gov/health-care/update-health-information
- Breadcrumb: Home > Health care > How to update health benefits information
- Left Nav: Update health benefits information
- Notes: The url is not changing, but the breadcrumb and left nav need to have the ‘info’ acronym changed to ‘information’ to align with standards (no acronyms!). The left nav can be slightly shorter (dropping the ‘how to’) given the more limited space in that component

**2) New online form under My-Health**
- URL: va.gov/my-health/update-benefits-information-form-10-10ezr
- Breadcrumb: Home > My Health > Update your VA health benefits information


## <a name="nav"></a>Entry points <br>

1. **Add online form to [existing static page](https://www.va.gov/health-care/update-health-information/)**
  - Add entry point to online form

2. **Update link on ‘My Health’ landing page**
   ![My-health landing page showing the new placement circled in pink](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/56e72b19-0e3f-4285-a7c7-e02bb940c7e5)

  - Placement description: There is an existing link to the static page. We want to update the link label and the link destination so that it goes to the new online form, instead of the static page
  - New Link label: Update health benefits information
  - New link destination: va.gov/my-health/update-benefits-information-form-10-10ezr
  - Notes: 1010ezr team will need to coordinate with Sara Sterkenberger on MHV team to make this update.

3. **Update Health care hub Left Nav**
  - Placement: not changing - still between ‘Get medical records’ and ‘Pay your VA copay bill’
  - Link label: Update health benefits information
  - Link destination: not changing - still goes to static page, same url
![The left nav with the unchanging placement](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/fdc5724f-3b13-4f03-a300-4a8e3d534491)

4. **Update ‘Find a Form’ page for 1010ezr to include online form**
  - We will also need to add the link to the online form to the [‘find a form page’ for the 1010ezr](https://www.va.gov/find-forms/about-form-10-10ezr/). 
  - The CAIA content team can make these changes in Drupal, and they just need to loop in Jill from public websites, the team that owns these pages.

## <a name="redirects"></a>Redirects <br>
I considered whether we should update the static page URL to reflect the different H1, but I don’t think it’s really worth it. It’s descriptive enough as-is, and distinguished enough from the url of the actual form by the inclusion of ‘form-XXXX’

## <a name="bestbets"></a>Best Bets <br>
‘Best bets’ are recommended search results when a user searches from va.gov. Ex: when I search for 1010ezr, the static page pops up under “top recommendations for you”. I think that’s probably sufficient – probably better to not have 2 diff links to puzzle through.
![top search result for 1010ezr shows the static page](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/75692f57-c187-4465-814e-b14a508f719a)


<hr>
<hr>
