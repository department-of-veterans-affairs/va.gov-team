# DS @ VA Prescriptions Discovery 


## The Current State of Prescriptions (What We Know)

#### About the Teams and In-Progress Work
The two main teams that own MyHealtheVet are:
 1. The Veterans/Consumers Health Informatics Office (VCHIO) owns the business side of MyHealtheVet (MHV).
 2. The VA Office of Information and Technology - Product Development (OIT/PD) owns the MHV technology.

Currently, the site is undergoing a number of changes. It is being "re-engineered and re-designed at the same time". This work is reflected in 5 contracts, but the main work that is happening related to prescriptions is: 

1. **Complete look and feel redesign** — owned by the business side. As of right now nothing has gone live. The look and feel changes will be implemented on a rolling basis, beginning with the dashboard (homepage). The launch of the dashboard is dependent on the Liferay migration. To date, the redesign has not really been in sync with PD's work on the migration — the contracts seem to operate in silos (they do have weekly coordination meetings) . 
1. **Liferay migration** — also owned by the business side, but implemented by PD. The teams identified a need for a CMS to manage content within MyHealtheVet. (Currently there are about 800 pages of content — user guides, FAQs, health promotion news articles, etc.) The business side wanted to be able to edit this content without having to use development resources. They ultimately went with Liferay CMS because it has open source components, and because they could keep dynamic code separate from content. [DSVA believes there is a lot of content with little value to users.]
1. **Cleaning up the back-end code** Patchy from 13 years of different contractors -- trying to clean it up. This is being deployed at the same time as Liferay, but it is a different contract (we think). 
1. **Prescription Refills Mobile "App" Development** - There is a team that is developing a mobile website that is 4 to 6 months from deployment. The site uses the MHV API. Because this is not a native app, it will be in the VA "app" store (but not the apple or droid app stores). **The good news?** There is a working API in production (DSVA has not assessed it yet). 
1. **Credential Service Provider (CSP)**: MHV is working towards using a CSP for aggregating different logins under a common umbrella. While the system has had lots of problems, it sounds like most issues have been resolved.
 
#### Other things we learned:
- The VA **pharmacy contact center** has little impact on the workflow of online Rx refills. This system is centralized, and each medical center integrates it into their phone system. (So, a veteran might call Kansas City, but they'll talk to someone somewhere else.)
- MHV as a whole has a lot of **content**, and the maintenance of the content has taken a back seat due to shifting priorities and a lack of resources. Much of this content seems unecessary (meaning: it will not help veterans accomplish what they came to the site to do)
- MHV has APIs in production, but there are no current consumers aside from an in development Rx Refill "Mobile App" (actually, just _another_ responsive/mobile-friendly site...not an iOS/Android app). The MHV team has some concerns around API management. PD has a tool that helps with API inventory, but they don't have anything a system to manage who uses the API (it sounds like this is manually done right now).
- The system architecture looks like [_this_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/prescription-refills/product/2016/report-and-recommendations/arch-current.jpg). (Possible wrong assumptions here, but mostly accurate)
 
#### Areas for Opportunity

- The MHV redesign (from a UX perpsective) is a huge improvement over the current experience — they have done a lot of good usability research

#### Analysis of Analytics
- Prescriptions is the most used area of MyHealthevet. From the homepage, prescriptions accounts for 20% of traffic. The next closest feature is Blue Button at 5.9%.
- Over a six month period (October - March) Prescriptions had 3.4M page views.
- Within prescription, the Refill Prescription page accounts for nearly 80% of traffic. The remaining traffic goes to prescription tracking (2.1%), prescription history (11%) and Meds, OTCs, Herbs & Supplements (0.3%).
- Error messages related to account are not tracked, but appear to occur frequently.
- More details available in the [pre-discovery analytics review] ().

#### Feedback from Veterans
(more detail [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/prescription-refills/research/2016)) 
- Veterans are generally happy with MyHealtheVet. It's a highly used feature, and prescriptions is the most important feature. 
- The biggest barrier to refilling a prescription is the login experience - *"Once you're logged in, it's easy."*
- Filling an Rx on MHV can take 7-10 (one person said up to 21) days. Prescripitions are only sent to veteran's homes -- if you fill a prescription online, you can't pick it up at a VA medical center
- Secure messaging is often used to ask questions about a prescription or to get refills  





## DS @ VA Recommendation
We recommend that DSVA build the front-end of the prescriptions experience on vets.gov, along with any dependent features.

After assessing various options to ensure the best veteran experience, there were three options that warranted the most discussion (these options have been simplified for discussion purposes):

1. On Platform and Centralized: Rebuild the front end using the vets.gov platform, tools and team. [(Possible Architecture)](arch_option_1.jpg)
2. Decentralized: Provide guidance to existing teams to roll out vets.gov branding on the Liferay platform. [(Possible Architecture)](arch_option_2.jpg)
3. Hold: Delay work on prescriptions to ensure other key veteran-improving experiences are built first

While all of these options are viable in different  environments, the key factors that went into making this recommendation are:

1. Prescriptions is a highly-used feature among veterans. To stay true to the goal of vets.gov, we need to ensure important features are all in one place.
2. There is significant value to the VA and to veterans in having a single platform and team building the veteran web experience. Establishing and reinforcing that model is a key goal.
3. There isn't an exsting team to embed with or provide guidance to that we can be assured will be available and consistent over time.
4. Additional resources will be onboarded shortly to the vets.gov team, creating additional output and velocity that will allow us to work on both prescriptions and other high-value features.

With this in mind, we will move forward with the next phase of work:

Dependencies & Feasibility: The intent of this phase will be to identify any dependencies we have within the VA (e.g., APIs, test environments) and determine if they are available. Additionally, we will identify any other feature dependencies and their impact to this work (e.g., identity, secure messaging). With that information, we will make a determination of feasibility. If we are well positioned to be successful after this phase, we will stop duplicative work and move forward with full implementation. 

## Concerns and Risks
- Given our current/recent velocity, there is a risk vets.gov wouldn't be able to deliver a substantial product improvement (versus the current experience) for RX refills to Veterans within 2016
- That users won't be receptive to a new experience given the widespread adoption and general satisfaction with the current offering
- There appears to be no good option within the VA of a team to embed with for production or maintanence, and after a successful launch we may find our team cannot disengage. This means we'd need to have a permanent team for continuing work on MHV/Rx Refills.
- That we cannot launch RX Refills alone without technical and UX dependencies on other MHV features: Secure messaging, Blue Button, etc
- That we are not providing a significant improvement to Veterans given the size of the project, and could in fact make a worse experience due to have RX Refills in a different place than other features of MHV
- Federal login system is not likely to get used for long, given the vets.gov login plans. Rolling this out could be confusing to users.
- Content: MHV current approach to content is not in line w/ industry best practices and has the majority of their 800 pages of content (health related "articles") has relatively low usage (110,000 page views per day); moreover the driving decision criteria for Liferay platform selection was content management requirements. Changing MHV approach / view of content will be difficult. How do we communicate our recommended way forward and still maintain good relationship with this team.
- Sunsetting MHV pharmacy features on VA.gov; need to define our strategy.
- Ongoing maintenance and operations; what's our vets.gov role? what's MHV team role? What support do we need from Contact Center?
- Message delivery to MHV team: i don't think the MHV team is going to be happy with this recommendation given their redesign work for more than a year and sunk costs to date on Liferay:( what's our message to them re Liferay--just keep going w/ what they are doing but just focus on the content?  i think this is best recommendation!  but need some help thinking about how we package this to MHV so we can maintain a good working relationship w/ them. I like Stacey idea of not pushing back on things until we have to, but wondering how long we have if they are planning on trying to deploy something w/ IAM and Liferay for July?


## Outstanding Questions
- What dependencies exist for Rx refill (to make sure there is no lost functionality or worse UX than there is now)? Current operating assumptions:
 - Rx is dependent on secure messaging
 - Blue button and Rx refill are not dependent on each other (on a level we need to worry about)
- How usable and reliable are the APIs? (We are in process of getting credentials) 
- Content? Do we need to publish the content that they are “managing” in Liferay CMS? How much is actually necessary?
- How will we set up development and test environment if we use the APIs?
- What is the impact to Veterans having MHV content launched on VA.gov, but not vets.gov?
- Can we get google analytics on MHV content pages on VA.gov to be sure that traffic numbers are low?
- What will happen with the MyHealtheVet brand (naming) when merged with vets.gov? (Will we change the name, co-brand, etc.)

## Next Steps

- Schedule meeting with Theresa
- Document decision for external audiences
- Put together a sprint team to answer questions (above)
