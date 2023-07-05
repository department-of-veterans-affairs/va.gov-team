# Notification Thoughts

### Some background
[The Nielsen Norman Group](https://www.nngroup.com/) are world-renowned leaders within the topics of user experience research and design. Nielsen Norman Group's [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/) are widely accepted in the world of UX; these are attributes every website or web app must excel in to provide a user-centered experience. My hope is that we can agree that these Usability Heuristics are important aspects of any web design, and that we can use them as common ground for critiquing existing VA.gov design decisions (as I do below). 

## The problem

At VA.gov I see a design problem that might be called, "putting everything we think is most important to the Veteran at the top of the screen" combined with another related problem that might be called, "rarely or never assessing if what we put at the top of the screen is actually aligned with Veteran needs."

A good example is on the authenticated My VA page: 

### The nametag banner

Despite lacking any evidence that it is needed by Veterans when they log in, the My VA and Profile pages feature a "nametag": a blue banner right under the VA.gov header menu with the Veteran's full name, the last military branch they served in, the insignia of that military branch (all 3 pieces of information is already known to the Veteran) plus the Veteran's disability status (a numerical percentage that rarely changes). In other words, on desktop, we take up over an inch of prime real estate to provide information the Veteran almost certainly knows, plus one piece of information that the Veteran is not necessarily seeking. Meanwhile, the banner displaces potentially actionable content further down the page, and eventually out of the users' sight. 

Until we see evidence that the nametag banner is delivering information to Veterans that is needed at least most of the time Veterans are logged in and on the My VA and Profile pages, its existence is antithetical to user-centered design.

<img width="736" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/106624475/0de81998-c4cb-4529-856b-5e78b57e7f24">



Here is where the Nielsen Norman Groups heuristics come into play: the nametag banner is not in accordance with two of Nielsen Norman Group's heuristics:


#### [#4) Consistency & Standards](https://www.nngroup.com/articles/consistency-and-standards/), which states, "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know. Design for patterns for which users are accustomed."

I can't recall a website or webapp (besides VA.gov) that - when I've logged in - I see both my name in the upper right corner of the screen and I see a banner across the screen under the header with my full name and other information about me. I think the nametag banner is the first of it's kind I've seen in the wild.

#### [#8) Aesthetic and Minimalist Design](https://www.nngroup.com/articles/aesthetic-minimalist-design/), which states, "A minimalist design, according to this heuristic, is one that limits the amount of 'noise' an interface has in order to emphasize necessary information; it is a design that seeks to simplify interfaces by removing unnecessary elements or content that does not support user tasks."

Besides participants occasionally commenting that they like the nametag, no research has been done to understand whether the nametag helps Veterans accomplish a task they were seeking to complete by visiting VA.gov. And, by putting it at the top of the screen, we are directing Veteran attention from other elements in the design (such as actionable links and content the Veterans potentially logged in to see). 

Instead of following the well-trod (and problematic) path at VA.gov of "putting everything we think is most important to the Veteran at the top of the screen," we could be relying on the Information Architecture of the site and/or other common patterns used across the internet to surface this information when Veterans are seeking it.


---


### Notification cards

The new notification cards that have recently been added to the design system continue the VA.gov pattern of "putting everything we think is most important to the Veteran at the top of the screen." The notification cards also defy Usability Heuristics  #4 and #8. 

<img width="736" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/106624475/9b0c3690-d3c0-4f4f-b68a-fb6ae04dd013">



#### [#4) Consistency & Standards](https://www.nngroup.com/articles/consistency-and-standards/)

I can't recall a website or webapp (besides VA.gov) that shows notifications at the top of the screen similar to the notification card component. I think if we did research we would find that users expect to find notifications in the top right corner of their screen. I think we would also find this typical notification placement allows users to seek out notifications when they want to see them, as well as allowing them to effectively ignore notifications and leave them "unread" for later (this is an important positive aspect of relying on Information Architecture, not banners/cards at the top of a screen). At this point, I am unaware of any reasons why we would deviate from this internet-wide norm.

However, that being said, due to the ubiquitous nature of the VA.gov pattern, "putting everything we think is most important to the Veteran at the top of the screen," there is so much content crammed into the top of pages that Veterans are unable to see both the page's contents and the VA.gov header (and therefore the notification bell and/or badge) at the same time. In other words, we've officially entered a territory of putting so much at the top of the screen that our top-of-the-screen items are starting to compete with one another, which makes us want to add more, bigger and louder content at the top of the screen to make sure that the Veteran cannot possibly miss it. 

#### [#8) Aesthetic and Minimalist Design](https://www.nngroup.com/articles/aesthetic-minimalist-design/)

When discussing notification needs with accessibility consultant Angela Fowler, I asked her how she typically would come across notifications on other websites (using her screenreader). Angela said that she actively seeks out notifications when she wants to read them (or happens upon the section when scanning through a page). When I asked her how it would feel if her screenreader started to read off notifications before she was actively looking for them she said, "that would be really annoying." The same is potentially true for users who are not visually impaired. As just stated, users are accustomed to seeking out notifications when they want them as well as being able to effectively ignore them and leave them "unread" for later. To be in accordance with this Usability Heuristic, I think we should allow users this power they experience on other sites to limit the noise they are seeing, complete the tasks that brought them to VA.gov, and interact with content when they are ready.


I think we have created designs in the past on VA.gov that have engendered unfortunate user behavior that we must then contend with later. An example of this is the way VA.gov combined personal and general information on content pages (another miss according to heuristic #4). As a result, when users want to find information about their own military history or reset email notifications, they rarely think to go to authenticated parts of the site, but rather start with the primary nav dropdown, search, or clicking around on the unauthenticated site. If we continue to go against internet standards in the context of notifications, I am concerned that we will encourage our users to develop behaviors that include: expecting to see all notifications at the top of their My VA and My Health screens and potentially not searching for notifications where they would otherwise look before we encouraged them to change behaviors. 

### Conclusion

We have evidence from [VA.gov-conducted user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-readout-full.pdf) that we suffer from an unfortunate user behavior of our own making: "banner blindness." Because VA.gov has such a strong habit of "putting everything we think is most important to the Veteran at the top of the screen" combined with another related problem: "never really understanding if what we decided is important actually aligns with Veterans' needs," Veterans do not read banners, and seem to even fail to notice banners at the top of their screen. 

If we are to reclaim Veteran users' attention and improve their ability to access the content and personalized information offered on VA.gov, we must intentionally do the following with every design:
1. Instead of putting "important" content at the top of the screen, invest in an effective IA that allows users to find the information pertinent to them when they need to see it.
2. Learn from user research both what users need when they log on, and whether or not they are able to effectively navigate the site to fulfill that need. If they are not able to effectively navigate the site, refer to number 1 above.
