# IA Review and Recommendations
**STATUS: COMPLETE**

**Team:**  CTO COVID Vaccine Trials 

**Product/Featue:** Research volunteer sign-up

**Background/Context:**  Deliver a successful COVID-19 vaccine trial experience for Veterans, with a priority focus on encouraging participation from communities that are historically underrepresented in government-run clinical trials

**IA Request:** 

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

**Approach:**

- This work effort includes a static landing page to describe the research and provide supporting information on eligibility and how to volunteer, as well as FAQs
- The volunteer sign-up form is not intended to be indexed by search engines and all traffic will be referred through the static landing page to ensure visitors understand what they are signing up for


Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Research static page | www.va.gov/coronavirus-research/ | ~Home > Participating in coronavirus research at VA~ <br> Home > Volunteer for coronavirus research at VA| Breadcrumb updated 9/28 per issue #13900
Sign up page | www.va.gov/coronavirus-research/volunteer/ | ~Home > Participating in coronavirus research at VA > Sign up to volunteer~ <br> Home > Volunteer for coronavirus research at VA > Sign up to volunteer | This page should not be listed in the XML site map and should also be set to 'noindex'.  <br> Breadcrumb updated 9/28 per issue #13900


<hr>

### Navigation Changes and Entry and Exit Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Traffic to this page will primarily come from outside communication efforts that drive users directly to the landing page. No entry points will be added to global navigation components. 

Priority | Placement | Link to | Description
--- | --- | --- | ---
Must | [Coronavirus FAQ page](https://www.va.gov/coronavirus-veteran-frequently-asked-questions/) | www.va.gov/coronavirus-research/ | Placement within content tbd by public websites. One option is to create a section on research to provide the high level recruiting info and link to the the research static page. 
Should | [Coronavirus chatbot](https://www.va.gov/coronavirus-chatbot/) | www.va.gov/coronavirus-research/ | Placement within content tbd by public websites. One option is to create a section on research to provide the high level recruiting info and link to the the research static page. 
Should | [Coronavirus research page](www.va.gov/coronavirus-research/) | https://www.va.gov/coronavirus-veteran-frequently-asked-questions/ | Link back to the Coronavirus FAQ page for general questions.
Consider| [Office of Research & Development COVID page](https://www.research.va.gov/covid-19.cfm) | www.va.gov/coronavirus-research/ | High level content and link to coronavirus research static page along with all the other research options.
Consider | [Coronavirus research page](www.va.gov/coronavirus-research/) | https://www.research.va.gov/covid-19.cfm | Link back to the Research and Development site for additional research info and supporting research content





***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- None known at this time

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>

### Additional Details/Recommendations

<hr>
<hr>

### Meetings Notes and Background Info

8/4/2020 - mtg on content strategy
- still an open question with team on whether users should come through landing page or can go directly to registration form
- faq page is the same as the landing page
- want the landing page to be in drupal
- in discussion, it seems as though the best option would be to route users through a static landing page to ensure they understand what they are registering for and what happens after they register - need to continue to evaluate that and determine content structure and URLs
- static page includes: intro, can I do it bullets, register CTA, faqs
- H1 draft "Coronavirus research at VA", CTA draft "Join the volunteer registry"

8/4/2020 - Design intent
- Questions
  - Is there a landing page in addition to the registration page? Yes
  - FAQ page separate from landing page? follow up with Danielle
  - Search optimized or hidden? can users go straight to form or do they need to read/understand anything on the landing page? preferred landing page first
  - Cross-linking from any other va.gov content?
- will be reaching people through text, social media, etc...varied ways...want to keep a simple URL in case it needs to be typed
- Feedback
  - MUST mobile breadcrumb only shows the previous page


7/30/2020 - kick-off meeting
- exception for usability testing collab point
- help getting veterans in the door to participate in covid19 related clinical research - potential vaccines, therapuetics, plasma, etc.
- VA is well positioned to be big contributor of this research, largest health network and large patient population, but not fully prepared to jump in
- looking for assistance on building awareness, providing information on opportunities and giving a digital mechanism to participate
- plan is to use evergreen content to reach a large population, point to a research landing page, main CTA to submit limited info to "register interest" in one or more studies
- info is then delivered to research facilitators and they take from there in terms of contacting and getting consent
- this is national level research, different from local facilities, possible cross-linking but viewed as national registration single front door and then sent out
- MHV newsletter, VETtext, will be fairly large campaign
- crosslinking on va.gov - covid faqs, chatbot, other places that users are reading/learning about covid
- interested in reaching communities underserved in research
- looking for participants that haven't been diagnosed, currently in treatment, people who have recovered
- PW/Danielle writing content, focused on high level research type, not specific initiatives
- MVP is unauthenticated users
- research is next week, talking with million veteran program


