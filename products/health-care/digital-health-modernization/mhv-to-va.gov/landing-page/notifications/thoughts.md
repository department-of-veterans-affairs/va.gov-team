# Notification Thoughts

### Some background
[The Nielsen Norman Group](https://www.nngroup.com/) are world-renowned leaders within the topics of user experience research and design. Nielsen Norman Group's [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/) are widely accepted in the world of UX; these are attributes every website or web app must excel in to provide a user-centered experience. My hope is that we can agree that these Usability Heuristics are important aspects of any web design, and that we can use them as common ground for critiquing existing VA.gov design decisions (as I do below). 

## The problem

At VA.gov I see a design problem that might be called, "putting everything we think is most important to the Veteran at the top of the screen" combined with another related problem that might be called, "rarely or never assessing if what we put at the top of the screen is actually aligned with Veteran needs."

A good example of this problem in action is the nametag banner featured on My VA and Profile pages.

### The nametag banner

Despite lacking any evidence that it is needed by Veterans when they log in, the My VA and Profile pages feature a "nametag": a blue banner right under the VA.gov header menu with the Veteran's full name, the last military branch they served in, the insignia of that military branch (all very likely known to the Veteran) plus the Veteran's disability status (a numerical percentage that rarely changes). Meanwhile, the banner displaces potentially actionable content further down the page, and eventually out of the users' sight. 

Until we see evidence that the nametag banner is delivering needed and visit-relevant information to Veterans, its existence is antithetical to user-centered design.

<img width="736" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/106624475/0de81998-c4cb-4529-856b-5e78b57e7f24">



The Nielsen Norman Group's heuristics #4 and #7 are helpful in explaining why this design presents a problem: 

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


#### [#8) Aesthetic and Minimalist Design](https://www.nngroup.com/articles/aesthetic-minimalist-design/)

When discussing notification needs with accessibility consultant Angela Fowler, I asked her how she typically would come across notifications on other websites (using her screenreader). Angela said that she actively seeks out notifications when she wants to read them (or happens upon the section when scanning through a page). When I asked her how it would feel if her screenreader started to read off notifications before she was actively looking for them she said, "that would be really annoying." 

Angela's expectation is not limited to visually impaired users. Noise and distractions unrelated to the task the Veteran is trying to complete will always be ignored at best or problematic at worst. Why not continue with a commonly used website pattern that limits noise, but still manages to communicate to users that new notifications are ready to be viewed?


### Conclusion

We have evidence from [VA.gov-conducted user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-readout-full.pdf) among other studies that VA.gov suffers from an unfortunate user behavior of our own making: some call it "banner blindness." Because VA.gov has such a strong habit of "putting everything we think is most important to the Veteran at the top of the screen" Veterans simply do not read banners, often failing to notice their existence during VA.gov-run usability tests.

If we are to reclaim Veteran users' attention and improve their ability to access the content and personalized information offered on VA.gov, we must intentionally do the following with every design:
1. For any content that we feel an urge to put at the top of the screen, pause and consider: what if Veterans do not need this content when the log in? If they ended up needing it, where might users actively search for this information?
2. Closely related to number 1, invest in an effective IA that allows users to find the information pertinent to them when they need to see it.
3. Learn from user research both what users need when they log on, and whether or not they are able to effectively navigate the site to fulfill that need. If they are not able to effectively navigate the site, refer to number 2 above.

It is important for VA.gov to shift away from this pattern of "putting everything we think is most important to the Veteran at the top of the screen." Not only does this pattern quickly get out of control and start to cause other related problems, it also takes power away from the user to decide for themselves: what information do I need right now? And what do I want to leave for some other time? 
