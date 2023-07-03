# Login.gov Grandfathering IA Spec Doc
**STATUS: Draft**
- Edit history:
  - 3/7/23 - KO draft
  - 3/22/23 - KO revision 

**Team:** [Login.gov Adoption](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption)

**IA Request:** [Link to Sitewide Content and IA intake request](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/52754)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Risks](#risks)
- [Redirects](#redirects)
- [Open Questions](#openQs)


## <a name="flows"></a>User/page flows <br>

Latest at this mural: https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1676397151510/f4cf4f4187a3d0fd5f2d6d56c9bd2ba3a4376e7a?sender=ua67f17f1c416a96ea04d2476

![User voluntarily starts account transfer process online](https://user-images.githubusercontent.com/122126772/227029813-02a4b7dd-709d-41bd-be38-a5d67eaa77d7.png)

![User interrupted during online task to do optional account transfer](https://user-images.githubusercontent.com/122126772/227029830-f54c5b19-4bd0-49f0-9c7d-7cfb9e53ff55.png)


## <a name="url"></a>Page structure
- any new pages for this flow will be under the Root, and will not be indexable by search engines (at least for this grandfathering flow)


## <a name="url"></a>URLs and breadcrumbs


**1) Redirecting Away from VA Page - New**
- URL:  TBD pending content, but an idea is (va.gov/leaving-website) or (va.gov/continue-to-create-account)
- Notes: Becaused we don't want this page discoverable by search engines, we also need to tag the page as 'no index', and make sure it doesn't go into the xml sitemap. Your engineers should know what this means, but let us know if you have any Qs. 

**2) Account Linking Error Page - New**
- URL:  TBD pending content
- Breadcrumb: none needed
- Notes: Becaused we don't want this page discoverable by search enginers, we also need to tag the page as 'no index', and make sure it doesn't go into the xml sitemap. Your engineers should know what this means, but let us know if you have any Qs.


## <a name="nav"></a>Entry points <br>

1.  TBD, but probably not --> we might need to add something to the SSO page as the Sept 30th deadline approaches.

## <a name="risks"></a>Risks
The biggest risk we should consider is how the post-login modals will work with one another and other products as the login.gov transition becomes more complex. 

If there are multiple modals being triggered off of login (ex: grandafthering, organic adoption, accepting unififed terms and conditions, retiring MHV login...), we need to figure out how they should be prioritized over one another.

We should also make sure to think about how users could become blind to the post-login modal if it is a constant presence for several years while the login.gov transition work is complete. How can we either make sure that doesn't happen, or mitigate the risk?

![Communication plan by login types](https://user-images.githubusercontent.com/122126772/227040218-51d040ed-b360-49f3-b297-697c9d5b3bfc.png)


## <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  

Current URL | Redirect to | Notes

TBD

<hr>

## <a name="OpenQs"></a>Open Questions
1. Ask the other auth team: whether we can send the user directly to the DSL sign-in page, rather than the SSO modal, so that the user doesn't accidentally exit the flow. Also recognition vs recall --> if we send them to SSO from the email, we're asking them to remember what they were supposed to do on this page. Sending them directly from the email to the DSL login page could prevent workflow dropout.
2. User test: experience of going directly to DSL sign-in vs SSO modal --> if we do the above, are there any risks for the user?
3. Figure out: What should we do if the user is logged out of VA.gov while they are on Login.gov/ID.me?
4. Figure out: What do we do if the user arrives at this workflow but they've already done the linking?
5. Figure out: For the interrupted flow, how do we make sure the user can return to the task they were originally trying to do?
6. Map: post-september 30th flows for veterans that did NOT do the bind in time
