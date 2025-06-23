# P6 Notes: VA Mobile Forms Exp. Team Interviews

## Intro - 5 minutes
Thanks for joining us today! My name is Christine Julian. Today we're going to talk about the VA mobile docs site.
Before we start, I have a few things that I want to go over with you:
This entire session should take about 30 minutes. I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
In this session, we want to hear your honest opinions. There are no right or wrong answers; we are not testing your knowledge or abilities. I welcome any and all of your feedback, and I won't be offended by any opinions you express.
Your participation in this interview is completely voluntary. You do not have to participate if you don't want to. If you would like to stop the session or do not want to answer a question for any reason at any time, that's no problem. Please let me know.
Are you ok if I record this session for internal review?
1. Are you ready to begin?

## Warm up questions - 5 minutes
1. What is your role at the VA? 
Software architect/engineer


2. How familiar are you with the VA Mobile doc site? 
Very, at this point

3. How frequently do you interact with the site?
Prior to last month, multiple times per week. Probably once a week. Started remembering how to do stuff, didn’t need to reference it any longer.

## Interview - 20 minutes
1. How did you first become aware of the VA Mobile Docs site?
- Ryan sent the link to it, I didn’t go find it organically but believe I probably could have. 

2. At what points in the mobile build process did you find yourself referencing the site?
- A lot during the initial local dev set up, spent a lot of time looking at the feature toggle and as we are going to deploy trying to understand how we can enable for specific users, how we can do roll outs.
- Testing with post man, decent amount of time when I was doing that.
- Learning about the authentication as well.
- Other things I probably should have read

3. Can you describe your experience with the site?
- Mixed, 100%
- Good parts are the shorter engineer focused parts. This is just how my brain works. The things that are not so much opinion vs. here is concrete how you get things done and here are some diagrams cause we know you’re not going to read all of this.
- Parts I did not read 100%, how we work and opinions on how to do things. Can’t remember, I was like oh my god this is going to be horrible documentation when I first looked at it. Then was like, well, this is actually pretty good.
- Part of me loves it, most of me does not.
- Top page of engineering is how we work, I think this is good to have. I don’t know anybody that is going to read all of this. 
- Make it a one-pager
- General, it has been easy for me to find the information that I need.

4. What are the main challenges you face when using the site?
- There has been outdated information, documentation in general. Hopefully robots will fix that for us.
- It’s probably in there somewhere but if we don’t we should call out that any engineer, or anybody that is using the site and sees something out of date or should be added to is free to submit PRs and here’s how we do it.
- First thing I did was put in a PR for out of date post-man selection and I don’t know if it ever got merged. 

5. What additional questions, if any, did you have after visiting the site?
- In the set up docs, there is no call out for specific versions of the dependencies. 
- What version of Java? There is a link was the answer, the link brings you to the latest version but the link says Java 8 or whatever it is. I was able to ascertain that looking at the link but if you follow the link it takes you to the latest version no matter what.
- Calling out the required versions would be a great thing to do.
- Even before starting, I’ve set up mobile engineering before and it’s a pain because it’s always picky about versions. 
- Information around feature flagging vs. availability framework is a bit confusing, I’m still not entirely sure I’m using it correctly? 

6. How do you think the site can be improved to better support your needs?
- There’s likely a way that we can have robots generate a lot of content and keep it up to date based on approved PRs. A workflow that looks at code and flags that the documentation is out of date. Here is a suggested update. I think that would be cool.
- I don’t have specific examples, is there some benefit where we could provide canned prompts for robots. Trying to think of a use case, a nebulous thought for me. At this point in the paradigm evolution, a lot of people are not taking full advantage of our robot overlords. Providing a framework like here is (probably bigger than the mobile app repo), maybe there is something specific, if you and team started a prompt with this it would include all of the different documentation.
- Over the past 3 months, the first work I did I’m writing it,using the auto complete, using the robot as the last step to refine.
- Now I’m starting with the robot, me filling in the back and it’s 10 times faster.
- It’s working, Adrian Mark and I are 100% doing that, it’s wild how fast things are happening. 
- I can’t believe how far the models have come in 3 months, things are happening so fast. 

7. Are there other sites you reference when building for mobile in your product?
- Lighthouse API docs
- VETS API codebase
- Making robots explain things to me
- Github browser: bring up copilot, you can’t select what model you’re using there. I will also go to the VS code (VETS API) use copilot from there to get me to explain things about the codebase, works better if you can use the more advanced models. 


8. Anything additional to share?
- The work that Mark Adrien and I have done for the last 3 or 4 months is a good example of how teams can work really well.
- We went too far off the rails a little, there should probably be some ticketing but we in general as the VA and team supporting VA are way too granular with our tickets. Us basically moving fast, using deployment as a strategy and understanding how veterans use stuff has allowed us to move very fast.
- Frustrating, when you discover a problem and say here’s a small thing. Teams create the ticket for that. In the amount of time you work on the ticket and refine it the work would be done. Adrien, Patrick, Mark and I are trying to figure out what is that line. IF it’s this easy just do it, vs. creating a ticket to think about it.
- Empowering a contract team to take that risk, its something about delivery.
- Doc site has totally worked. We’ve been able to use it to get up and running pretty quickly.
- Right now we are doing product launches for labs and test, that’s a pretty amazing thing. 


## Thank-You and Closing - 1 minutes
Well we really appreciate you taking the time to share your thoughts with us today. Your feedback is so helpful to us as we continue to work on the site and make sure it really works for our experience team members.
Thank you so much again, and enjoy the rest of your day!



