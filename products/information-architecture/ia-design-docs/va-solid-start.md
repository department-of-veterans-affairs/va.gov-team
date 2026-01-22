# LoRota scheduling for VA Solid Start (VASS) phone calls in the Transitioning Service Member Hub
* **STATUS: In progress**
* **Last updated**: November 4, 2025

* **Team:** Online LoRota scheduling being built by My HealtheVet/Appointments team
  * **Designers**: Steven Strailey, Jenny Wang
  * **OCTO**: Kristen McConnell
    
**IA Request:** Routed to Sara Sterkenburg, but also involves Joni Chan for work on new Drupal page / best bets. 

**On this page:**
- [Background](#background)
- [Next steps](#next)
- [Entry point](#entry)
- [User/page flows](#flows)
- [Redirects](#redirects)
- [Best Bets](#bestbets)


## <a name="background"></a>Background <br>
VA.gov needs to build a scheduling capability that allows transitioning service-memebers to schedule a phone-call with a representative from the VA Solid Start Program. During this call, a representative will help to walk current military service-members through the process of how to learn about and apply for benefits with VA.gov once they transition from the service. The call scheduling is being built by the appointments team in a LoRota environmen, which means that the service-members do NOT need to have sign-in credentials in order to access the flow and schedule a time.

While most "appointment" scheduling capabilities live with the appointments team in the My HealtheVet on VA.gov portal, this VASS project is distinct from appointments and cannot live in the health portal for a few reasons: 
1.) It is not health-related in concept; 2.) due to the nature of LoRota being a low level of authentication environment, this tool cannot live in the health portal, which requires gating criteria that can't be accommodated: a.) LOA3 level authentication and b.) at least one healthcare facility in the user's profile.

So, where _should_ it live? 
* We determined that it should be associated with the Transitioning Service-Member "hub." Hub is a strong word, since this is really a single hub landing page with multiple cross-links to other benefits and static pages.
* This work is supporting a branded program known as "VA Solid Start" which has its own web pages. The language has already been established and we need to lean-into this branding. 
* Based on that, we will create a child page under the Transitioning Service-Member hub for VA Solid Start. There is an open ticket with the Content & IA team to take on the work to create this page. This helps us have a searchable result on VA.gov for the program, which will build SEO for the program in its relationship with VA.gov.
* This also allows us to build out a URL for scheduling at: `va.gov/service-member-benefits/solid-start/schedule/*` where `/solid-start` is not an empty directory, but is a static page on VA.gov.
* [Relevant slack thread](https://dsva.slack.com/archives/C01K37HRUAH/p1761678697628269) with decision on sitewide placement & approval from Danielle Thierry, Kristen McConnell 

## <a name="next"></a>Next Steps <br>
* Content & IA to build a VA Solid Start page under the Service Member hub at: `va.gov/service-member-benefits/solid-start/` - [intake ticket here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123537)
* Danielle to work with the folks who are responsible for [this web page](https://discover.va.gov/transition-programs/) & change some of the incorrect information on the page about needing to create an account & sign-in credential on VA.gov to use VASS.
* Appointments team to build the scheduling flow at: `va.gov/service-member/benefits/solid-start/schedule/*`
* External team (? unsure who this is) to create e-mails that explain the VASS phone-call scheduling and provide a link to the program where the URL is: `va.gov/service-member/benefits/solid-start/schedule/` - this will be disseminated to transitioning service-members off email lists that are not owned by OCTO.

## <a name="entry"></a>Entry point <br>
* Entry point to LoRota scheduling flow: e-mails sent to transitioning service-members. 
* The page for VA Solid Start on VA.gov **will not have a link** or other access to the LoRota scheduling flow for now, it is just a content page that prevents an empty directory where we want to build the flow, and connects VA.gov with SEO for this program so that it is findable both in site-search and in organic search via search engines. 

## <a name="flows"></a>User/page flows <br> 
* [Figma designs](https://www.figma.com/design/Z96Oy8JRzQNXQueV0LcNBR/Solid-Start-Scheduling--VASS--%7C-Appointments?node-id=3-931&p=f&t=p2XO7WlE40z3vO2J-0)
* [Product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/initiatives/solid-start-scheduling)

## <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jennymayoco%2C+kristinoletmuskat%2C+strelichl%2C+FranECross&labels=sitewide+CAIA%2C+Sitewide+IA%2C+Public+Websites%2C+VA.gov+frontend%2C+Redirect+request&projects=&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  

N/A at this time

## <a name="bestbets"></a>Best Bets<br>
*Search “best bets” are suggested pages that appear in the “Our top recommendations for you” section when you perform a search on VA.gov. These suggestions are selected for specific terms and are intended to help veterans and their beneficiaries find relevant results quickly. We want to make sure that best bets are not linking to the deprecated page.*

The following keywords should pull up the new page at `va.gov/service-member-hub/solid-start` once it is in production. 
* VASS
* Solid Start





<hr>
<hr>
