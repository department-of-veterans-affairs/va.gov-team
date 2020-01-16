# Personalization 2.0 Discovery: Summary and Strategy

## Background

The MVPs of the My VA dashboard, Profile, and Account page launched in the spring of 2018. In June 2019, the Personalization team decided to revisit these products to evaluate what was going well and what could be improved, removed, added, or reorganized. 

### Discovery Goals

1. Evaluate the My VA dashboard, its utility, and its relationship to the VA.gov homepage.
2. Determine whether we should combine the Profile and Account pages.
3. Determine whether we should combine My VA into one mega section with Profile and Account.
4. Understand how the service member experience differs from the veteran experience, and how this may affect our work.
5. Learn more about our blind spots — what do we not know that we don't know? What are our blind spots?

### Discovery Activities

- [Analytics review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/analytics/analytics.md)
- [Dashboard 2.0 interview and testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/dashboard-interviews/research-summary.md)
- [Personalization 2.0 card sort](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/card-sort/research-summary.md)
- [Service member interviews]()
- [Comparative analysis]()
- [My VA/Profile/Account content analysis]()
- Conversations with Andy and Lauren to understand proposed IA changes and health care needs

## Observations: The My VA dashboard

### People don't use — or even know about — the My VA dashboard

Qualitatively, most of the people we spoke with [in user interviews](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/dashboard-interviews/research-summary.md#people-dont-use--or-even-know-about--the-my-va-dashboard) had never used the My VA dashboard, and those who had used it were not using it readily and reported they did not have much of a need for it. 

Quantitatively, [we confirmed this with analytics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/analytics/analytics.md). From 1/1/19 - 7/14/19, there were 160,010,637 page views on VA.gov as a whole. Of that, the homepage had 25,286,165 (15%) views, and My VA had 4,127,632 (2%) views. 

### We don't guide people to the My VA dashboard

It's likely that My VA has lower usage than we'd like in part because we don't guide people to that page. While it is [easily accessible in the navigation](), there's nothing besides its prominence in the navigation that communicates it's an important destination from either the logged out or logged in state. 

### The My VA dashboard is too duplicative of the homepage

The My VA dashboard was created for Vets.gov when there was essentially no logged in experience. It was a huge win at the time — it aggregated personalized features that were on Vets.gov and made them easy to find, and it routed people to many of the top tasks.

However, with the launch of VA.gov and the VA.gov homepage, the [My VA dashboard has become largely duplicative and obsolete](). Of the top 20 tasks that appear on the VA.gov homepage, the following also appear on the My VA dashboard:

1. Apply for VA health care
2. File a claim
3. Claims and appeals status
4. Secure messages
5. Refill prescriptions
6. Schedule a VA appointment
7. Check your post-9/11 GI Bill benefits
8. Get your medical records
9. Download VA letters

While there is some information on the My VA dashboard that does not currently appear on the VA.gov homepage — namely in progress applications and the Find VA Benefits tool — this funtionality on its own isn't enough to make the My VA dashboard a uniquely useful destination.

### People prefer the homepage over the My VA dashboard

In user testing, [there were mixed feelings on the My VA dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/dashboard-interviews/research-summary.md#some-people-reported-liking-the-dashboard-and-some-even-said-it-would-be-helpful-to-merge-it-with-the-homepage-but-all-of-the-participants-still-said-they-preferred-the-homepage-over-my-va). Some people liked it and thought it was helpful even if they hadn't really used it before, while others actively disliked it. However, even for people who reporting liking the My VA dashboard and finding it to be helpful, all participants reported they preferred the homepage over My VA because of its design and clarity, specifically around elevating an easy to scan list of top tasks. This begs the question — how useful is it to bubble up previews of information like we do now on the My VA dashboard (eg. showing recent claims, messages, and prescriptions)? How can we better balance previewing information and getting people where they need to go?

## Observations: Profile/Account

### People don't know the difference between Profile and Account

During [user testing for the upcoming direct deposit feature](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/usability-research/research-summary.md#we-need-to-make-it-easier-to-find-the-direct-deposit-tool), it became clear that there was confusion between what should go on the Profile and Account pages. We had placed direct deposit functionality in Profile and thought this was the most clear and intuitive path. However, participants were split as to whether this functionality belonged in the Profile or made more sense on the Account page. 

This prompted us to look into the relationship between the Profile and Account pages as part of this discovery effort. First, we conducted a [comparative analysis](), during which we looked at how other sites used the terms "profile" and "account." We found that "profile" was primarily used to mean "personal information," while "account" was used either for settings that affect an entire site experience or for things that had to do with money (eg. paid subscriptions or eCommerce). While this aligned with how we were using these terms on VA.gov, this didn't erase users' confusion. 

For further clarity, we conducted a [card sort](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/card-sort/research-summary.md#takeaways) in hopes that we'd get more insight into this issue. The results of this study made it clear that there indeed was a problem with how we had things structured on VA.gov. Participants overwhelmingly put features we currently have separated between the Profile and Account pages into one "Personal Information" section, showing us that the conceptual difference between the terms "profile" and "account" that is so clear to us may be less clear — or less important — to them.

## Observations: Visual design

### The current visual design approach for My VA, Profile, and Account isn't scalable

In the last year and a half since the My VA dashboard, Profile, and Account have launched, we have had a hard time figuring out how to add new features to these pages without making them lengthy and overwhelming. This is because these pages are designed like content pages — everything is shown in a single column view. This approach worked great for our initial MVP, but it has scaled terribly.

#### More thoughts on My VA

The dashboard's visual design does not lend itself well to a page that is supposed to be an overview/router. A single column view with large fonts and large content blocks makes it hard to see very much at one time. It's no surprise that people find the top 20 tasks on the homepage to be much more accessible.


#### More thoughts on the Profile

The Profile has scannable headings, but because the page is so long, [people complained in direct deposit user testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/usability-research/research-summary.md#veterans-want-to-be-able-to-see-whats-available-on-a-page-without-scrolling-their-browser-window) that they wanted to be able to see what was included in the profile from the top of the page. We've added jump links, but this is likely not a long term solution, as there's potential for the list of jump links to get too long itself.


## Observations: On personalization in general

### VA.gov users are task oriented

VA.gov users are task oriented. They don't come to VA.gov to browse; they come to get a very specific task done. While this is something we knew long before [user testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/dashboard-interviews/research-summary.md#vagov-users-are-task-oriented-and-they-dont-come-to-the-site-to-browse-or-check-in-without-a-reason), this was further reinforced in these sessions.

### No matter where people are, they expect an experience tailored to them

This was a more subtle observation that we made when evaluating the [card sort](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/card-sort/research-summary.md#takeaways-3). We saw patterns that made it clear that people were organizing items in the sort based on what *they* wanted to see on VA.gov, not based on how information could be organized for all veterans. This is worth mentioning as a reminder to us that the ultimate goal for our team is to serve individual needs, and the flows and interactions we design going forward should be flexible enough to account for these individual needs.

### We need an onboarding experience

After we [spoke with veterans](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/dashboard-interviews/research-summary.md), we realized we couldn't move forward with this discovery without [talking to separating service members]() to learn more about how their needs differ. We're glad we did. While onboarding to benefits is a common challenge for both seasoned and new veterans, separating service members have the additional stress of getting to know the VA for the first time and figuring out how to settle into their lives outside of the military. 

While there are many ways we could better address the needs of separating service members on VA.gov, one of the biggest ones is creating an onboarding experience for first time users at the VA. Separating service members need more help with wayfinding so they can more easily answer the question — "How the heck do I navigate the VA?"

## Key Takeaway: We need to revisit our My VA/ logged in homepage approach

Right now, our homepage/My VA dashboard approach makes two assumptions:

1. People need to have access to both their dashboard *and* the VA.gov homepage in the logged in experience.
2. The VA.gov logged out homepage can not change when a user is logged in.

We should question these assumptions.

First, why do people need both the dashboard and the homepage when they are logged in if they're largely redundant? Wouldn't one or the other get the job done?

Second, why can't the homepage change from a logged out to a logged in state? Will users really be that confused if the homepage changes to be personally relevant to them?

To be clear, one assumption that we make and stand by is this: people *do* need a landing pad when they sign in to VA.gov. They should feel oriented and welcome, and they should see their own personal use case reflected in this experience. But as we've outlined above, our current approach isn't doing this well and we need to revisit the current designs.
    
### Goals

We need to:

1. **Reduce redundancy** — Specifically, we should reduce redundancy between the My VA dashboard and the VA.gov homepage.
2. **Get users where they need to go** — We should balance bubbling up content with showing a succinct list of links to quickly route people to tools.
3. **Elevate personally relevant information** — Users should see themselves in these updates.
4. **Scale gracefully** — Our designs should allow for future updates and expansion. 
5. **Prioritize wayfinding** — We should make it easy for users to find information that is relevant to them, and we should guide users accordingly depending on where they are in their journey at the VA.
6. **Effectively use visual space** — We should avoid a single-column, "content page" approach. Design updates should more effectively employ [the design system](https://design.va.gov/) and update it as needed.

### Option 1: Get Rid of My VA

#### Step one: Add in-app notifications

Adding in-app notifications may sound unrelated to getting rid of My VA, but it is the essential first step. One of the main purposes of My VA is to show users when their information is updated. If we were to add a centralized, in-app notification center, we'd drastically reduce the need for people to go to My VA because we'd be proactively telling people about updates instead of relying on them to scan their dashboard for those updates.

The MVP for this might look like:

- Get rid of the current My VA
- Light updates to the homepage.
- MVP of in-app notification functionality.

#### Step two: Update the homepage so it is a personalized, logged in dashboard

After adding notifications, we would further customize the logged in homepage so it's more personally relevant. At first, we may want to continue treating the homepage primarily as a router. We can make some personalized updates to the homepage while keeping the bulk of personal information on interior pages (eg. The claim status tool, the user profile, etc.), as shown below. Over time, we can figure out if and when it makes sense to add more information (eg. upcoming appointments, your VAMC, etc) to the homepage.

The MVP for this might look like:

- A new visual approach.
- Figuring out what personal information we want to add to the logged in homepage.
- Figuring out how and when to guide people to the logged in homepage.

### Option 2: Redesign My VA, and have it continue to coexist with the homepage

We know that having My VA and the homepage coexist right now isn't working for the reasons outlined above, but we may decide that we want to keep My VA nonetheless. The biggest wins would be a visual overhaul and a reimagining of what's currently on the page to make it more easily digestible. The biggest downside would be the inevitable redundancy with the homepage. Should we take this approach, emphasizing updates/notifications will be as essential as it is in option 1. 

The MVP approach would involve:

- Full visual redesign of My VA.
- Figuring out how and when to guide people to My VA.

## Key Takeaway: We should combine Profile and Account

To our users, content currently split across Profile and Account belongs together. This is likely because veterans don't make the same differentiations between information that we do. To them, everything affects their personal experience with the VA — whether that is making sure their address is correct, updating direct deposit information, or changing their login password. Splitting this content across two pages creates a dichotomy that doesn't match users' mental models.

### Goals

1. **Scale gracefully** — Our design approach should allow for future updates and expansion. 
2. **Prioritize wayfinding** — We should make it easy for users to navigate to their personal information/settings, and we should make it easy find specific pieces of information within this section. 
3. **Effectively use visual space** — We need to prioritize scanability by using secondary navigation and more effectively employing [the design system](https://design.va.gov/).

### MVP approach

We would combine Profile and Account into one section, and use secondary subnavigation to make the entire section easier to scan and able to accomodate growth.

The MVP approach would involve:

- Figuring out new IA for this combined section.
- Renaming this section.
- Figuring out what links we want to elevate in the personalized menu.
- A new visual approach.
- Figuring out how and when to guide people to the Profile.

#### Incorporating additional benefit information

Regardless of how we handle the homepage and My VA, we'll need a place for additional benefit information that either does not fit or make sense on those pages. We can incorporate this information into the the profile/account section as it makes sense, providing a fully comprehensive view of what the VA knows about a user.

## Next steps

### Get buy-in from the larger team

This approach isn't just up to the personalization team — we need to work across teams to figure out what makes the most sense given the current roadmap for VA.gov.

### Think beyond MVP

Not only do we need to pick a direction that will scale over time, but we should have a plan on how we might scale it. We should know what the MVP looks like and also have a plan for how we'll grow this functionality over time. We want to get out of the habit of launching a thing only to move on immediately to the next project.

### Technical discovery

We can't settle on an approach without technical discovery. We want to make sure what we come up with works from both a design and technical perspective.

Once technical discovery is complete, we can get into design, testing, and build!
