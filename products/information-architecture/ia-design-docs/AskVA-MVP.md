# IA Design for Ask VA Integration MVP
**STATUS: In Progress**

**Team:** Ask VA Integration

**IA Request:** [#60696](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60696)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)


## <a name="flows"></a>User/page flows <br>
The team created their user flows in this [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689629683164/ed237e8c59a4c0c9fb4ef9ced7e923297d7a3af6?wid=0-1690926738664)

## <a name="map"></a>Page structure<br>
![Placement under contact-us](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/09764edc-0dab-4bdd-b260-f5640da17370)

The page will live under /contact-us, as a sibling to the chatbot.

## <a name="url"></a>URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site.*


**1) Ask VA Home - New**
- URL: va.gov/contact-us/ask-va
- Breadcrumb: Home > Contact us > Ask VA
- Notes: We’re recommending that we embed the ask va flow within contact us, because that’s how the chatbot is structured. 

**2) Form flow questions - New**
- URL: va.gov/contact-us/ask-va/[step]
- Breadcrumb: Home > Contact us > Ask VA > New question
- Notes: You can follow the [url standards](https://design.va.gov/content-style-guide/url-standards) to choose urls for each question in the form flow. I just wanted to note here the breadcrumb will stay the same for all steps in the flow. 


## <a name="nav"></a>Entry points <br>
We are not adding any new entry points that require IA work (like adding to main nav or left nav, header/footer, or hub pages). But we want to flag the following pages for the content team to update the links on.

1. Contact Us Page - Update Link
Notes: The content team will update this, but wanted to note here that for the MVP, we are linking from the existing location on the Contact Us page. 
![Contact us page with askVA link circled in pink](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/8dd519f7-3710-4aea-99e9-e3d412d23d8f)

2. MyVA Dashboard - add link
3. Other pages on VA.gov that link to AskVA


## <a name="redirects"></a>Redirects <br>

| Current URL               | Redirect to              | Notes                                                                                       |
|---------------------------|--------------------------|---------------------------------------------------------------------------------------------|
| Ask.va.gov + all sub-urls | va.gov/contact-us/ask-va | If your sub-urls were redirecting anyway to ask.va.gov, you don’t need to worry about those |

## <a name="bestbets"></a>Best bets <br>
Search “best bets” are suggested pages that appear in the “Our top recommendations for you” section when you perform a search on VA.gov. These suggestions are selected for specific terms and are intended to help veterans and their beneficiaries find relevant results quickly. We want to make sure that best bets are not linking to the deprecated page.

I propose we add a best bet for Ask VA for the keyword "Ask VA" for users that know what they're looking for and go to search to find it.

<hr>
<hr>
