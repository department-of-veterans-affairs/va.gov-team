# Interview 8
- Date: 12/20/19
- Participant initials: RF, JB
- Participant role: FE eng

### Notes

DS: We're diving into documentation, looking at lots of different solutions, finding out what we can learn from old things, etc

JB: Not sure where to stat! 

RF: Current state of Gatsby is that sometimes it breaks and because we're not actively working on it, there's no resource dedicated to it, so if it breaks we have to prioritize that fix against other things going on. That's not a technology thing, that's the organizational choice. I don't have anyone to put on it and I don't have time to fix it. It's a lower priority than other things going on. 

BF: If we decided to recommend continuing with Gatsby, how much of a dedicated resource would it need? 

RF: 1 FEE? We wanted to add more features to it. Diagraming, support is spotty ... there was more we wanted to add, which increases the maintenance cost. 

JB: We started with Gatsby and we made it to the point where we were reasonable comfortable making changes in there and kind of had an understanding of how it works. We hadn't made it to the point of understanding the full site, there was a leveling up that we didn't get to with the Gatsby stuff. We had struggles making sure it built consistently, Gatsby has a bunch of dependenccies, it tries to manage those and can get out of date. It needs someone working on it regularly, it's not a ton of work it's just having it in your head and being able to understand what's going on quickly. 

BF: Rian, what about multi-repo search? 

RF: We were working on something to allow us to import from documentation from mutliple repos. Search was manually controlled inside of markdown files, we were also looking at algolia which would have indexed the website. We were thinking of pulling it out of multiple repos bc that would give us the option of having documentation close to the source code, but ... we also had a lot of old documentation inside of the team repo that we wanted to pull out. IDk if we got to a point where we were using that... we didn't use that a lot. 

BF: At the other end of the spectrum, if we didn't go forward with Gatsby, what should we do with what's there? 

JB: I think most of the documentation there exists in the tools repo, the pulling from other repos ... a page or two maybe did that but we may have turned that off. There's a lot of documentation in there that's ueful, all of the forms system documentation is in there, that's out of date but is complex, and the other main thing is the component library piece which pre-dates the Gatsby site. You go look at what the react components you have available to match what's in the design system. There's a lot of other front end docs in tehre that's all useful I think. 

RF: It's all markdown so ... we can migrate it to whatever ... it would be pretty easy to migrate that to another system.

BF: How do you find documentation? On your local editor, on GH, where? 

JB: It depends on what I'm looking for. If it's FE docs I"ll go to the FS docs bc I know how that's organized and I can search it. THat's the place I start for any FE docs at this point, and it's where I pointed the devs on VAOS to. 

RF: I don't look inside the repo for docs. I know where all the docs are bc we spent 6 months editing it. I'm not a good example for how to find documentation. I don't like looking inside my code editor, if there's a lot of docs in the repo it can make it harder to find code-related stuff depending on how well it's written. Generally I just use the FE docs we have now in Gatsby bc I built it and know how to use it. 

JB: The stuff I normally look up on that site and as a person who contributed a lot to building it, the stuff I do now on VAOS is look up react components, the alert box, I can never remember what the props are for that. I'll look up forms system documentation to look for patterns that I know we have. There's a bunch of workflow info. 

BF: One of the features that has come up has been favorites. Would that be helpful? 

JB: Sure ... I've bookmarked stuff in the github repo. Sometimes it's hard to get to the right info. I know where the FE stuff is that I need. 

BF: Rian I think you had mentioned that you just search google sometimes. 

RF: Yeah I don't bookmark stuff. I know where I need to go or I just use search. 

BF: Another thing that's been coming up ... we've been discussing a solution for technical and non-technical. Do you think it makes sense to solve for both use cases?

JB: To me it would be a big win to have all of the stuff in the same place. At least the way you get to it is there's one thing to go to, one starting point, I can go there and search and that's my one entry point. I think it's hard to integrate that in one site bc especially for the technical stuff there are things that aren't just "render markdown as html" - component library is custom react code. At one point we thought about putting ... pulling js doc comments, that kind of documentation out of vets-website and putting it on the site. Also mermaid JS diagrams on some of the pages. There's defintiely some custom stuff that's hard to do that you have to do for the frontend stuff. But it would be nice to have everything in one spot, a single entry point. 

We did a very small amount of research asking developers what their issues were with the site and finding documentation was the thing. A single place for this audience (FE devs) was a good thing to have. 

RF: I like the idea of a single entry point. My main thing is with search, we need to be able to filter it. I don't care about prod management, I want to be able to find technical information. I want to be able to filter large categories out of my search results. THat's why we didn't use GH bc everyone puts their meeting notes in GH. 

DS: Why did you look at algolia? 

RF: From my perspective it was UX. I like react search, they do that. Idk how they do indexing and how they weight stuff. It would depend on how it would work with our stuff. 

MK: Why did you choose gatsby? 

JB: The dev who did most of the research isn't here anymore. I think our process was that we looked at tools that were just documentation generators or that were focused on documentation and generally found that those were a bit limiting for what we wanted to do. We knew we wanted to have MD files but we also wanted a component library and maybe js doc style documentation later on. That moved us away from the documentation type tools. Gatsby felt like a good choice out of the static site generators, it was react based and we knew react, it seemed like that would make building a mini component library better. We had a lot of problems with fractal for that bc it wasn't made for react, that was incredibly painful, we wanted to make sure it was easy to integrate that. Gatsby has a lot of plugins, a pretty strong community, it felt like it would be easy for us to take on and build stuff with. That was the main logic. We talked about using the stack that vetswebsite uses (metalsmith and node) but that was less out of the box than gatsby so it was going to be even more work. 

MK: what about your comment that we should go off the shelf, rian?

RF: Mostly bc of the maintenance issue and the issues we're having right now - it's broken and we don't have anyone to fix it. I don't want us to get into that situation again. We need something right now and the gatsby stuff might take another month or two of work and that's another month or two that we don't have a documentation site 

JB: A lot of what generated the switch to gatsby was how awful fractal was for us. the ability to build something like that was pretty important to us. it pushed us away from more off-the-shelf stuff. If you just want documentation in a site, I imagine there are tools that are better than gatsby. We looked at stuff like docusaurus, still static site generators that had more stuff on top of them. I don't know how much less maintenance that is than gatsby, especially if you start customizing it. We didn't look at gitbook, we knew we wanted something that we could control a bit more than that. 

BF: One thing about gitbook is that it has bidirectional sync on markdown files, we've seen other ones where it's really one-dimensional. 

JB: To me, I would be fine editing stuff in github, that's what I'm used to doing for docs. 

RF: I don't have any feedback on that. 

MK: Can you update the Gatsby site without an engineer? Not right now 

JB: You could get it to a point where you could update without an engineer but the build is broken right now. 

RF: I think it's broken bc someone added something to a MD file that's not supported and it's hard to troubleshoot. 

JB: Someonoe made changes that weren't supported on the versino of Node that we had. 



# Interview 7
- Date: 12/20/19
- Participant initials: JHL
- Participant role: 

### Notes: 

#### You mentioned that you've been involved in managing documentation at the National Library of Medicine. Can you explain more about that? 
- Sure, so my bg, i have a diff bg from most of the ppl working at va. im at training a chemist, a chemistry major that decided not to become a chemist, so I'm a medical librarian by training. a reference librarian and a lot of online information, finding articles, books, websites all that kind of self. I started at nlom as an intern and came back a federal employee. we alos did a lot of hleping ppl find info online, some thing online was...after 3 years, i became in charge of the web team, 100 web editors, we were the oversight board for it. all the published websites have gone through our team, i also was heavily involved with search implementation. so i didn't do all of that but also used it a lot as a professional. we had doc for customer relationship management software, contact a form on steroids and because the NLOM hosts the main database for biomedical liteture in the world there was info on how to use that. librarians general in profession ahve a lot of shared rules and approaches on how we do things as a professional. system of how to do thing with catalog entries. standards and that kind of thing. concrete example we had a really robust wiki, had a design pattern library, doc on how to edit pages, pieces of designs on how you can implement this little piece on the wbesite, doc on how to use a wiki, we used that as a core of doc in a lot of ways. we also had doc on super boarding, we had a massive system called citing medicine in the public, written in xml talking of how to cite and trace in medicine. how do i cite a journal article how do i cite research proceedings. we also had, really old things you were searched a lot. cataloguing and publication. beginning of a card catalog entry in the book. there was this big thing that we would search, it was a doc system back in the day, had page after page after page. designed i did doc 10 years ago...other thing was we also had doc online as users of our systems. there's all these different lexicons in medicine, so there was another product figured out how to make our website, let them put docs online that users would use. trying to look for a good example of this...medical system will have different elements..examples of how to use, there's that. that's the best summary i can give at the top of my head

#### What information did the documentation provide? 


#### What tools and processes have you found effective in the past? 
- so for a not huge group of ppl a few hundred, my favorite was the wiki, most flexible most modern, let us comment, suggest changes, be flexible, we were using it mostly for things that had flexibility to them. interpretation to them. we found it failed in areas where this is the rule and this how we're not changing it. policies that were formal we kept to the intranet, we lost our authority somehow with the wiki. it's really strange pyschologolligcally what we experienced. if there was something that was a rule rule, we put it in a more formal place. another thing we loved about it is that you can collaboratively edit it. it worked well when we tried to create information, write it up in the wiki, make tweaks, make it easier to understand. me as the boss, of a small web team. yup im gonna make a couple of other tinkers and it would be complete-ish till the next time. the idea was we would make ...questions, comments, and tips, maybe blog comments at the bottom or something? we could answer and maybe delete it. we were a small team so it was easy for us to have a governance process among a 5 person team. in a wiki, each area was responsible for its own thing. for example, if someone wanted to do doc for their team. now far as super formal doc, it would go through more formal clearances, not like va, but email clearances or views or something like tht. email or perhaps a sharepoint sign off. this person had a sign off, and this person, but we didn;t have 15 ppl just like 3. short answer is how much weight you want this to have, vs. ppl trying to find it useful

- in terms of that wiki that was confluence for the wiki?
we used confluence for the wiki...the bug tracking for j...jira. we used jira and confluence at my old agency and associated tools with atlassian

#### What tools and processes have you found ineffective in the past? 
- here i find many of the clearance tools ineffective but thats va. i would say a flip side of having to agree on things, is that it takes forever to get updated. it'll take forever for the standard to exist, to use it nationwide and worldwide, certainly as a profession that's a challenge. certain kinds of docs can be updated. annually, vocabs had to be updated. at least back then you would update certain vocab annually, freeze this for a while go to the next thing. the other thing i would say if we wanted them to take it seriously we had to take it out of the wiki, we had pretty modern ppl working there compared to ppl i work with. they think a static webpage is more official than a wiki. idk if that's pyschologically proved today but it was then. 

#### We have talked a lot about culture and how that plays into a doc system. What processes did you use to set standards across different teams who were contributing to the documentation?
- maybe, possibly. i think we had an advantage where i was. ppl we worked most often were librarians. we all had a shared professional grounding/outlook. We're trying to build...i must confess i took your user testing thing you had, and it got me thinking about it. you're trying to make systems that make sense to a designer, engineer, developer, we didn't have a challenge with tht because we have a shared professional grounding. ims aying that we have ppl working at va as people from a ton of mental models. we found that they all don't hear va, might not have the same context same flavor as ppl here. a hournalist if a very diff person than a librarian 

-you don't go into that if we kind of don't a repeatable way 

#### How did you ensure that the information stayed up to date? 
- in federal govnt, you put it in their swim lane, other way we did it, we have an update date, and a shared agreement that this must be reviewed every year and there would be a person named in metadata of who owned it, person gets an email, this is overdue for review because it's been over a year since that person has been updated. on the flipside, sometimes if they didn't find them annoying enough. it's been more in this timeframe, i want to find someone to do it. Other thing is that we tied them to releases, part of the release process was reviewing the documentation, if it got tied to that, part of that upgrade process was reviewing content management system.

- the weakness we had a only one policy, annual review, when you think more thoroughly was prob every 3 months or if a link breaks 

#### Did you maintain a culture that valued documentation? If so, how? If not, what do you think prevented that?
- the way i try to do that is starting with certain things. it's worth writing down things were all gonna do so we can write consistently, if we get different answers to the field and to our colleagues we need to write things down. that one's been pretty agreed to, that one we make a good argument for. another thing writing this down, we need to rehash, or relitigiate something every 6 months, that's less convincing to some of my colleagues, they think it's too hard to go find the consistent answer, higher up the org chart i go, the other flipside people i work with, if we write it down we're never going to rethink it in a day or 2 that's the challenge, for me i have to write things out to come up with the energy for the same answer 15 times it's stupid in my opinion. we have to be consistent, and that's resignated with colleagues. the other thing i will say is..it's been my experience working with digital services, your stakeholder business partners have experienced the rehashing issue again and again. sometimes its for good reason, we got a whole new thing and user feedback, sometimes it feels as if, new ppl don't know what we've already talked about which is exhausting

#### What do you think VSP, the platform team, can learn from this example? 
- i think the last question didn't make sense, the last 2 questions said to ...how do i answer a comment, i saw nothing in that image that corresponded to that task. i think thats right at least, something about the comment, it was code, you were testing the wyswig or the markdown, maybe thats how you answer a comment, but it didnt make sense to me whatsoever.

-oh the biggest ? i had was your homepage of the documentation, was it different entry points, was it different models of the content, think of content as coordinates and coordinates. does your document has multiple metadata in it, or can i find it the way it's about? 

-the answer is currently, our docs is just everywhere and everything, there is tech doc in gh repositiories for the code for that app. there's tech and non tech in a shared repository. there design system. there's no standard for how it is, there's no tooling standard, so when we show that homepage and the last question on the surbey we showed you a homepage where all docs are presented/accessed from 1 homepage, does that help you find what you need, do you think of it a a doc bucket or does it hurt find what you need.

- Right but i guess what my thing is having a multifilter thing, why can't docs be engineering docs, and locator documentation, and authored by joe, that it can be sliced or diced in certain ways depending on how you label it

- what have you described would be great and amazing, we don't disagree that would be the ideal to have everything in one place with standard metadata on certain filters, but we are not sure whether it's...

- realistic

- well technically impossible.

- anything is possible. we valued metadata and metadata matters. we're probably a community menable for documentation than most humans. you had a bit of a step up from us. you know gerneally the problem we're examining

- what do you think we can learn

- ability to enter tags, and tags are consitsent with documentation so you can make sense of it. anything super authorative, lock it down, if it's flexible make people engage you dont want people using engineer, engineering, engineers, it'll probably use same thing, terms.another thing is dont worry about coming up with rules right now, get tags and see how people would fix it in a year, a lot of ways we came up with health taxonomy, open text copy stuff, and then backward engineering it to something more formalized. you don't want to make your rules so strict that no one can learn or use them. don't become old fashioned librarians, we had binders and binders. that's way tooo far away. 

#### If you had the chance to create that ecosystem again, what would you do differently?
- i would do more user testing than i did, we kinda built things and did stuff, no verification. that's the biggest mistake. verifying what you create, we would get feedback about whether you're working it. i wish we had done a bit more of that. community as a whole, profession, we take took too long to come up with things. we're looking for a agreement from everyone. sometimes 95% SOLUTION is good enough, what's the impact if you mess it up, the impact with medical information is a much higher risk. we did measure the usage of our documetnation and see what to work on, i prob wish we had groups, and focused ob launching it with us. it would help to talk to the slow adopters 

- sometimes i dont think we're as nimble as you think we are

#### If you had to choose 3 things that you think were critical to your success, what would you say those were?
- choosing a system that most ppl could use, we could tell that most ppl could use it was a success
- i shared valueing of docs as itself, futility and life, critical to our success. 
- flexibility and growth over time. we took feedback and changed based on feedback, we did change and evolve overtime

#### this is great and what we're trying to do, that's really helpful, that's the end of my list of questions, if there are other things you wanna ask? 

- the other things i would add if yall have a really a shared onboarding experience for your contractors that's different would be helpful

- onboarding experience for new business stakeholders, hey you're now working with DEPO, here are the things we hope you understnd aobut us and how we work and we can work effectively. 

- that would be very helpful. part of what we wanna do is identify what docs are missing

- when I have someone new working on my team, it'd be nice if there's a primer they can see. instead of me being the interpreter of who you all are. 

- you all have changed from the years.

# Interview 6
- Date: 12/17/19
- Participant initials: KL
- Participant role: PM 

### Notes:

#### I know last week you walked me through docs that the api team uses in particular. Have you ever contributed to a document site other than that? 
- Before working at the lighthouse team, I kinda worked at the other end of the spectrum so it was an atlassian/microsfot shop. So we used confluence, so for me technical documentation as well. we used confluence as a wiki. when i came to the lighthouse program, we used GH, google docs for a while and then publish to GH. It was a different type of practice. Confluence has a lot more wiki functonalitly. On the ligthouse side, we have UX disccovery research and powerpoint slides in GH. When we do something based in one of those, but definitely has limitations, we relatively recently turned on wiki functionality in GH. We're thinkin of moving text based documentaiton into that. There's pros and cons. Can I show you my screen and show you some examples?

*shares screen*

- This is a good example of a text based application. this is my product outline, I'm a PM. This goes through all the documentation, services around what it is we're building. I'm able to put images in here, but its a MD file. GH is not great for that. If you want to search for a file, when I go "app" it doesn't search the document or anything like that. We've been looking for wiki GH functionality. You can search through the pages, but this doesn't search for content in the docs either so it's a bummer. When you create a page, it adds it to the repo, but you can add a custom side bar to give it an illusion of organization. You can see here this is text based documentation, a glossary. When I search for authorization, it doesn't find anything. These are the options we're using in lighthouse. I don't know what questions you guys have abiut that and how well it's working


#### What tools and processes have you found effective in the past? (What have you found works)
- Wiki a shared ownership sense, it's really nice, but it also keeps a history of changes, comments so that you don't have to change a document. GH when there's a pull request, it's a hurdle for people to contribute so to have something as is easy as possible as shared ownership. wikis are the other edge of that, get a little unruly so you have to have a little bit of governance, so you can organize correctly. Sometimes it can get a little bit crazy but it's a managaeable problem

#### What tools and processes have you found ineffective in the past?
- Coming to the lighthuse program and using GH for product documentation was an eye opener for me. GH is not meant for product or gerneal documentation, it's meant for code. it's not great. yeah...

#### Do you think too many ppl can have access, setting standards not setting standards...What processes did you use to set standards across different teams who were contributing to the documentation?
- It was nice having a process in place, but each team had their own little sandbox. under this directory or this folder, if you're having a discussion with your team, whatever is a helpful for the teams. You can do whatever you want in this area. this is your area, so people dont stop putting things everywhere. At my last job we restricted delete access. 

#### Why did you lock down delete accesss?
- I don't know, there were probably afraid of people deleting important things. I didn't know in confluence if the delete was an actual delete. 

#### Interesting, I never heard of that being a particular concern. How can you tell when  documentation is good? What are signs that are positive?

- Speaking in the realm of internal documentation. Findability is pretty important. If you have a new team member and their team is talking about a specific topic. Having a powerful search where they can say. What's kong? Why do my team talk about kong. they can talk about kong. This is what kong is and this is what role it plays

#### How did you ensure that the information stayed up to date?
- That one is tough. it depends because there's defiitely stuff that wont be up to date. in 6 months a year, that page is prob gonna still live there and it might be fine, so the team is in charge of making their area as tidy as it's supposed to be. when it's not team specific, you have to have ppl in charge of that.te nature of having a living thing

#### What do you think VSP, the platform team, can learn from this example?
- I would say from lighthoue side, I dont think we've figured it out either. It's hard and you guys have an even bigger program than us. We went with a solution because our program is a little over a year old, and now we're coming to a point where we're scaling so we need to restructure with scalability in mind

#### I was thinking how yall are trying to start something out. If you had the chance to create that ecosystem again, what would you do differently?
- The reason we had chosed GH for documentation, we have restriction of what our VA product owners can actually access. That's why we went with that. I think we'd really look what our options are and what access our product owners have and go from there

#### Could you talk a bit about who the users are for (API doc)
- Since lighthouse is a API platform we're a platform that sit on top, authentification, authorizaiton. a lot of what we do is provide docs for APIs, a lot of this is external. This is one of the products of our platform. This is for developers who are working on tools that will be veteran facing. This is our dev site, so this is not live. This is my teams's API that is still going to work through. This is a completely different audience. The GH stuff is all internal. Developers, product owners who want to access the how we do things we are doing. This is externally public facing, for ppl wo want to use apis

#### How was this built? I know it has swagger intergrated here?
- I think it was custom, I don't think we used something completely out of the box. when we build a new page, everything is just custom. all these with collapsible chunks, we have swagger.

#### Wtith the differences between the two, what is the rough guess of people use it or contribute to it (API and internal)

- I don't know about API because you dont need a API key when you use it, you can use all the documentations without a key. 100s at least. the GH stuff is all internal, I think our program is..people. When we're working with external teams, I work with benefits team so I'll link it

#### Do you know the number of people that maintain these?

- Each team manages their own APIs, part of our definition of done, is that your developer portal documentation is up to date. so everyone maintains their own. Same for internal documentation. 

#### for developer documentation, you really caught my ear for definition of done, that's something we've been talking about.  How do you set that standard that something cant be considered done till its documneted. Have you had any difficult getting people to priortize that ?
- I'm thinking of the developer portal. This is part...its like building something and not pushing to the introduction. That's because this is externally facing. I would say for our internal stuff, we have to have product outlines, those are harder because it's internally consumed. if it's something that's mostly underway or done. I know you have to go back and do an initial break for it. going between the 2 audiences that's the definition between the 2. The user base is externally facing which is an incentive to stay up to date, wonder if that's a model, take the more accessible it is on ppl using it, the more people will have up to date 


#### Talk me through a time when you've had a really successful experience using documentation to get something done.
- When I first came on the platform I had to get up to speed on waht the world is like. there's multiple government groups in chrge of this stuff. there was a mural board that were super helpful. on the other side of that it was hard to find them. Um..yeah.

#### What info did that documentation provide? Was it just technical specs about APIs, was it "how-to" and onboarding, was it philosophical "why" documentation?
- For that one, it was a step by step, whan an appeal, what happens to an appeal. it was essentially a process flow. There's 3 different types of appeals. there's types within types. There's different outcomes. 

#### Did you rely solely on those docs, or did you use that and also fill in gaps by asking a bunch of questions elsewhere or using another method?
- Yes that has been one of those things. I had a UX lead start a little after me as well. this is known information, but we have to go to different people to get different parts of this process. there has to be somewhere that lays out what the process is. Someone might know this process end to end. took us a while to find the right people to talk to. it's a contact from AMO. It's a group within the VA called appeals management process. their process doesn't exist on GH repo. 

#### Did they have any access to ya'lls documentation? is taht anything ya'll trying to improve?

-Their documentation probably lives in process manuals, not even in a form of what we're doing. We're building out a process of how this appeal happens. We took a screenshot of how this process is made, sent it to her, and said this is mostly wrong let's talk about it.


#### What would you say is your biggest pain point today with VSP documentation?
- I have not. We work really closely with benefits and memorials team. (pain: not specificially, not different from GH repo of documentation)

#### Have you ever asked you a question, have they linked you to...guess main places would be vets gov team repo or va team repo, have you ever looked at these thngs
- They had a release plan, they linked to me. I thought this was awesome/great



# Interview 5
- Date: 12/17/19
- Participant initials: BR
- Participant role: Product Manager

### Notes

#### Have you contributed/created documnetation before?
- Yea. Working for small startups. Working on internal/external documentation. 

#### Good experience with documentation?
- Don't know what I'm looking for. Intuitive enough to point him in the direction he was headed. Epic's Open API documentation. Points and directs you where to go, and find next steps (one year ago).

#### What info did that documentation provide? Was it just technical specs about APIs, was it "how-to" and onboarding, was it philosophical "why" documentation?
- 

#### How did you know it was successful (or not)? What were the results? What behavior were you seeing to indicate that?
- Wanted to learn more about API options. I wanted to see all available options. I didn't know what I was looking for. High level view. 

#### What tools and processes have you found effective in the past?
- People involved is the most important. The documentation is only good if it's up to date, and accurate, and you can find it. The tool is not the most important. Previous job, uses ZenDesk for external, and Jira/Confluence for internal. Using Notion for team documentation. Ease of Confluence was nice. ZenDesk editor was little bit harder to work with. You don't have as many options to embed objects/widgets. I liked Notion the most. It was the simplest. It doesn't do antything fancy. It does a little bit of everything. It was flexible enough to handle everything we wanted to throw at it. All of the tools were sufficient. They were all effective. 

#### What tools and processes have you found ineffective in the past?
- 

#### What processes did you use to set standards across different teams who were contributing to the documentation?
- Nobody else really contributed. The reason why it was up to date was because project management owned it. We were the gatekeepers of info. We were the single source. We also knew that as things changed, we had to update everything. It was part of our daily workflow. The development team had their own little wiki in Confluence. They were responsible for that. Other than that, it was just us. 

#### Can you talk more about what that documentation was? 
- External: release notes, help guides. 
- Internal: Everything from hey if you're a sales person, here's the top 40 questions we get everyday. For example: Here's our approved video cameras. It could very technical and FAQ-y. Very detailed info for CS team. Used it for a little bit of everything. It was useful for creating bigger links. Creating portals. If I'm a salesperson, then I start here. Using labels. "Sales cares about this." "Sales doesn't care about this." Without labels, people would just DM people for answers. 

#### About how many people were on the team that were maintaining it? How many users did you have digesting?
- Two of us on the PM team. ~50 development/sales/etc. Not as large of an audience. But still time consuming when you get 25 requests on Slack. 

#### How did you ensure that the information stayed up to date?
- 

#### What do you think VSP, the platform team, can learn from this example?
- You need to be able to search and find what you're looking for. Joked that search in confluence was bad. It sucked really bad. Exact match didn't work, but fuzzy match did confusingly work sometimes. 
- It should be contextual. 9 times out of 10, these users are looking for those types of documents. If you try to make something for everyone, it gets too difficult for people to use. As soon as it becomes too difficult to find, it becomes to easy to ask somebody via Slack. We leverage a lot of Slackbots for common questions. A lot of it was based on our own tracking of common questions. Prioritize content based on requests. 

#### If you had the chance to create that ecosystem again, what would you do differently?
- Probably not use Confluence. It worked fine, other than the searching algorithm was really bad. We had to navigate through a tree because search didn't work. It only worked well if you filtered the search to certain pages. If you were searching the site, it was impossible to find what you were looking for. Notion would have been easier. Talk of using ZenDesk internally. 

#### If you had to choose 3 things that you think were critical to your success, what would you say those were?
- Ease of searching. Needs to be contextually relevant to the user. They don't want to see things they don't to see. They want the info they see to be relevant to what they care about. It needs to be somewhat integration with Slack and other tools we use. There needs to be something that lets them get from what they're using regularly (for example, Slackbot). It needs to be easy enough where people will use it. 

#### In what ways do you think engineering documentation differs from non-technical documentation? Where is there overlap in the problem space? Where do they diverge?
- 

#### Talk me through a time when you've had a really successful experience using documentation to get something done.
- There was a translation tool that we leveraged called OneSky. It was supposed to help us translate our documentation into multiple languages. It didn't involve a lot to get into the documentation. Once I logged in once, I was able to download the docs. If there was a chance, there was a notification to download the updated docs. It was intuitive. It walked me through steps 1 and 2. It was simple enough and used simple enough language. If I don't have to google how to use it, it's doing something right. I don't think I had to do any searching. 

#### Was there an ability to contribute or ask questions? Were there any other attributes that were particularly useful?
- For each section, there were an ability to see the most common questions for a certain section. As they get feedback, they link  people with that section. I was wondering how something linked to another part of the application. 

#### What info did that documentation provide? Was it just technical specs about APIs, was it "how-to" and onboarding, was it philosophical "why" documentation?
- 

#### Was it paired with any tools or interaction? (Examples: search, sandbox, ability to contribute or ask questions) Did it look a certain way? Were there any other attributes that were particularly useful? What did those tools, interactions, or attributes allow you to accomplish?
- 

#### Did you rely solely on those docs, or did you use that and also fill in gaps by asking a bunch of questions elsewhere or using another method?
- 

#### What would you say is your biggest pain point today with VSP documentation?
- I cannot tell where to go to find a specific piece of documentation. Without a reliable search, it's impossible. If I can't find it through the tree structure, I just give up. If I spend too much time, I just go and ask somebody. I have a lot of bookmarks to documenation. 

#### If you're looking for info for how to do your job, where do you go?
- Slack. There's no place where you can go to see our roadmaps, meetings notes, action notes, discussions. It's all in Slack. 

#### If you're direction a FVS team member, and you're directing a team member, where would you tell them to go?
- Depends on the question. If it's about how to use certain products, I have links to those, and keep track of it myself, and send it to them directly. The docs we have is fairly good. The issue is knowing where the most up to date article is. 

#### Do you see yourself as responsible for keeping the info uptodate?
- Yea. I feel like I should be the champion of that. My job is to eliminate the blockers for my developers to do great work. One of those blockers is them asking where something lives. Making sure things are uptodate. Making sure there is docs when we finish things. 

#### If you had a magic wand, what would you expect to see in a VSP dcumentation site? 
- As a creator, I could very easily go in and create documentation. And link to ZenHub, threads in Slack. Ability to inclde graphics/videos. We're capturing info in many ways. Diagrams. Recorded Zoom calls. It if's relevant, it'd be nice to link to a video. Having options to how we publish data from a creator perspective. Having it be pretty simple. I don't want to need a dev to help me push content. I want to be a key owner of that stuff. 
- As a user, I want to be able to come in and search and find what I'm looking for. Clear navigation. Have those options be clear and well-organized. 

#### One of our assumptions is that teams are responsible for docs about their product. Do you have experience with a more dispersed responsibility model? How can you make sure things are up to date when you're not an engineer? 
- I have to choose whether it's more important for devs to work on docs or move on to the next ticket. For people that are not as technical, I will have a conversation, and synthesize that down for a general audience. It's good that it lets them focus on code. It's bad because it makes me feel like my time is not as valuable as others. With disparate owners, it's fine as long as it's understood that the value of other people owning that comes at a cost. 

#### Do you think there's to create a culture of documentation? 
- Yes. We're trying to track questions for product support. And to track those, we have to create a ticket, which is friction. The more people use documentation as they trust that it's up to date. If you don't have a culture of documenting things, then I'm going to assume that other people didn't document it. Maybe they did, but I still might have to ask them in Slack to find. Having people accountability to find documentation. Incentivizing them to go here first. Having less people as the gatekeepers helps keep a centralized tone and style. The more people you have providing content, the more ways they're providing it. It depends on the audience. 

#### If you're looking at docs, how do you know if it's correct? 
- Right now, you don't. The hope is that there's a new home, and everything lives there. 

#### Does it make sense to have a Slackbot tool that queues up documentation questions?
- Previously, we would make a documentation ticket, and clear those tickets. We treated it like a codebase, and track it accordingly. I think it would be helpful if there was a way to flag outdated docs. I think it would be easy if I had a tool in Slack for questions people ask all the time. "How do I set up a GFE?" 

- 

# Interview 4
- Date: 12/17/19
- Participant initials: 18F
- Participant role: creators of 18F's "handbook"

### Notes

- Technology director at TTS. My team is the defacto owners of the TTS handbook. 

#### Tell us about 18F's handbook
- So the background there is that it was created by 18F but it was conjoined by other teams in TTS. Most of the things in the handbook were applicable across the board. The software 18F was using was what TTS was using. That was years ago, so content still has references for 18F when it's TTS. The domain is still 18F for example. The handbook is where we put internal facing documentation that is generally applicable. We use google docs a lot as well. The idea is evergreen in any content that needs to stick around and be a source of truth. Team specific documentation is in other places like a GH repository or in google docs. We use google docs for access control. 

#### I know Leah had mentioned that you started off with a whole lot of user research. Do you know anything about or what problems yall were trying to solve with the handbook?
- I can't speak to any past user research i'm welcome to dig it up and share it with you if I found it. I can say things taht came up a lot. A lot of people dont know how to use md in GH. Doesn't come up a lot bcuz people don't know how to update the handbook
- That's one thing 
- Content architecture is a constant problem. there's a reorg and now all the strucute is wrong. there's no real reponsboility for anyone to fix that consistently
- Someone will make an edit and they delete something like an anchor wthin a page that then breaks the build because it's a static site so it's built with every change. they don't know how to fix it so the pull request sits there. someone pulls a change and no one ever addresses it 
- I'd sum it up as a problem that was recently identified. A lot of people update the handbook which is great but no one makes sure it's updated. build problem gets fixxed, styling issue gets fixed. Meta level things no one was really responsible for. That was a recent learning

#### What tools and processes have you found successful with the handbook? What outcomes did those tools and processes generate?
- As a personal opinion. It's rare that any change someone makes is going to be negative. Any change someone makes is improving the content in some way. they may be introducing a new problem bt the net is always positive. So the more you can reduce that friction the better. for example, we haven't formalized this. three's an open source model called C4 and it basically the principle that anytime someone proposes a change, it's valid a real user need so just accept it unless it's actively breaking things. It's a constatnt forward model process. not like we can't have someone accept this sentence till it's gramatically perfect. That mindset has shifted and we wanna formalize that

#### can you talk about that shift, that's an interesting concept that we don't currently embody
- There's basically a problem if someone's change can be ripped arpart then they're discouragd from changing it. the sooner you can get the update out the better. It should be better than before. There's 2 aspects of reducing friction. Making sure the content is subjugated. Feedback is a form of friction

#### Sounds like the ownership model is pretty dispersed. Have yall had success dispersing that ownership and how?
- Yes, maybe the definition of ownership is nuanced, not all content changes need to go through my team. My team makes sure the concept is sustained. There the ones that should be updating that content, unless someone else sees the guide is unclear That's better than us just sitting in a high tower. it's not distributing formal ownership, it's distributing empowerment. its bascially making people feel like they have a vested interest in updating the content. I see something that's wrong let me fix it, vs. something's wrong I don't tust this anymore

#### How do you do that? does your team say, ok now you're responsible for this apge, make sure it stays up to date, how do you empower people?
- We have like an intranet site called insight, we have knowledge base for more technical stuff.you gotta sign in order to see them. 18F handobok will come up in google searches by virtue of being public on insight, if I see a problem with the content, there's no easy way to suggest that change. at best it'll give someon'es contact info, but you can email them, but they don't have permission to update it directly. so that controlled model of content access and ability to edit was very detrimental and keeps content from being updated. the visibility and that every page has an edit the page button. I'm curious tactically I noticed the notes you sent over. Pushing out this model of having. The ownership in that sense is...ownership is ours and you can't touch. I think of it as who is responsible for this. If there's discrepnacy on who do you ask? or team. We found referenced to individuals was not desirable. We think teams because that's less likely to go out of date 


#### I would love to talk to you about tools you use
- So it's a jekyll site, that uses a theme that includes the us web design system. The code is on GH and is actually deployed using 5us. 

#### That's what gives you that preview option right?
- It's like a more flexible of GH pages. it's a TTS product so we're dog fooding is all 

#### Did ya'll start with GH pahes or used federalist right off the bat
- I dont think we ever usd GH pages bcuz we weren't allowed.
- There was definitely a time where we used GH pages for stuff maybe that's a lot earlier than the handbook

#### Interesting here, that you weren't allowed to use GH but google docs
- The important thing is that these are collaborative docs, again reducing the friction, anyone can change it kinda thing.

#### It's interesting to see private docs in google docs is more easier to type
- Definitely easier to change things in google docs, thought about it as a cntent management system. MD is not that hard to learn. it can be intimidating to people when you walk them through it's not a huge deal. also WYSIWIG editors rich text that you can highlight a press bold. That's something that federalist just added and is just processed with adding. I've never had experience with that. I'm sure that's better than the native GH editing.

#### Are there any tools that you have found particularly effective, in general or idea of reducing friction?
- Google docs are the smallest because it'sa mini pull request we use suggest mode. we encourage ppl to do that. Instead of making update directly, you turn on suggestions. essentially a pull request? what was the ?
*repeats question*
- Those are all the tools we use for site building,, because it's a static site we don't have to worry about time. it's not really a problem. the sites can always be fast. don' t have to worry aobut index of search engine. if i were in your shoes, where we have a site that uses content management already. we dont have that so we use static mini websites for everythig
- I should also mention one advantage for a static site is that we can always scan it for broken links like references between pages. 

#### Leah metnioend you have a preview function? 
- it's not live as your editing, you can do that if you wanna run the site locally whihc isn't harder if you have ruby or docker installed. that's if you want a live preview or real time preview. if you're editing, ppl have a lot of development experience with handbook. a lot of people are using GH interface. so GH will allow you to preview md format but not out of the house. Federalist will build that and make a preview URL as soon as you make the changes you can see the site live. exposed on the internet

#### How do you gauge success with a documentation site? What behaviors have you seen to indicate that you've been successful?
- It's kinda the only game in town. That's where the info is. it could be better well maybe. We havent checked to see if its successful. things that come up are reassuring. that's not just a select few. I fear about other teams referencing it. I see wow that's so much easier than my agency's documentation. It's plain language pretty good and it's public.as soon as somethings not public it's harder to find. So that's huge. I guess if people are or someone asks a question in slack and someone responds in a handbook that's a good sign. 
- Hey i was looking at the handbook and....
- I hear more people like it and it's getting updated

#### On this thought of updating, when you were first made it, was there an initial push to get all the cotent up there. say a select few people. or was it the initial team created the IA and handed it to people? to fill in your stuff
- I don't know if I could look back at the git history
- I think there were folks who didn't have projects. we were looking for ppl for tings to do. There was a discoer team that built it. they were building all the content from scratch. 
- If I were doing it from scratch i would strongly suggest not overthinking it. you're creating friction for yourselve do. you need to put stuff in a way to contribute in a certain way, I would worry about organizing once there's more content added in. 3 pages more than 300. 

#### Don't make the perfect make the good
- exactly

#### How you know how many pages are in the hadnbook?
- I can find it. 159 no..140

#### Hon a related scale question, how many users would you estimate are using the handbook? how many ppl have updated it in the last month?
- TTS has about 300 staff members, everyone gets pointed to it in onboarding. PPl dont have ahcoice but to access it
- so other parts of GSA look at it too, I can pull up google analytics, should be in there. I could do that in the bg in just a sec, in terms of how many are updating...let me see. 
*shares screen*
- last month, 24 people have made changes.

#### The reason I ask is that we've been talking about you guys have had success with the updating responsibility.
- I would be surprised if someone has not access the handbook every month.Idk if i have access for the analytics for it. So...over the past month we've had 9,000 users. I think we have a surprise number outside of TTS, idk if there's a good way to measure that. 

#### HThere's a lot of new users!
- I don'tknow google anayltics on how people find it. oh whatever, you can try accessing this. yeah it's a lot.
- Direct is 2,600 that's wild

#### What do yall do for your technical documentation
- The handbook is for things that are tts wide. we have very little technical things for tts wide. I would say the common ways that teams document. Google docs, files in md. GH wiki pages and sometimes they will make they're own federalist site. Login.gov doc is a federalist site.
- click.gov is similar, it's a huge project contributing to an infrastructure

#### is there a standard tooli or proceses across teams? 
- I don't know if it's explicit, there's no explicit requirement, if there are usng a static site, then use federalist. if you're creating documents. google drive is a part of that. it's easier to do that than word docs around. 

#### there's a strong preference to open, is that a rule for all?
- There's a policy that code will be open, it encourages open documentation as well. google doc is the easiest to update, but it's not an easy way to make theat public. that's the limitation of google doc the way that GSA sets that up. we have the jekyll template that lays things out looking like the handbook. It's available but it's not pushed on people. 

#### Have you had any pain points?
- I'm a little more extreme on this, not everyone from tts will agree with me. we have just a lot of random little sites that aren't maintained. some ppl are bothered by that, I am not. where there is a problem. we'll build a site for a partner, because we're working with other agencies. we're continuing to host it. if there's a security vulnerability or whatever. We should have transferred domain, acess, repository, it's not quite doc specific, it's more disconnected. I prefer microsite because it reduces the friction, but project teams won't put their doc on there. It's meant for things that have a TTS wide audience

#### that's quite interesting, we have a phrase of culture of documentation, a culture of keeping things documented and well maintained. I see the handbook sees that you have built that. sounds like a free for all, sounds less like a formalized culture. have you built a culture of documentation or the technical documentation successful?

- I think teams are generally...the way it's done diverses greatly. I think when ppl show up and see the handbook and google docs. in onboarding we say, if you see something fix something. say something or even better fix it. I see that sort of settng that precedent will cause teams to set expectations for them individually. I'm more on the end where I'm okay with that. it doesn't bother me, it bothers me if there's a security issue. Providing the tools to do it well. I'm not going to tell them to do the documentation. By making google docs better for everybody. They have all the tools they need to do that properly. I don't know how I would force documentation on certain teams if i wanted to. maybe sort of subgroups of TTS, people are pretty heterogenously, some people work with partners some platform some...there's different sort of ways of working. What am I trying to say? They might have formalization. 18F might have formalization on product documentation. I see some examples of a google docs template that formats headings so they make heading blue so it looks 18F. I don't know if this is super formalized but there's a meta data block, who's contributing to it, what's the intended audience. that's the sort of like..totally formalized. there's a 18F slide deck template 


#### that metadate block sounds interesting sounds applicable to doc trustworthiness

- yeah I think so.

 


# Interview 3
- Date: 12/17/19
- Participant Initials: KW
- Participant Role: Drupal developer

### Notes

#### Before we get into the specifics of using Drupal for documentation, I'd like to talk a bit about your experience with documentation in general. Have you ever created documentation or contributed to documentation before for others to use?
Yes.

#### [If yes] What info did that documentation provide? Was it just technical specs about APIs, was it "how-to" and onboarding, was it philosophical "why" documentation?
I've done documentation for every project I've been involved in. It's been everything from writing comments in code to information for other team members to information for people who are installing the product for the first time, for users, everything. 

User research kinds of stuff as well. I like the format that VA use for that. Project documentation, historical, so that people don't have to come and do too much archaeology to figure out why things are the way they are.

#### Was this documentation that you contributed to "good"? How did you know it was good or bad? What made it successful (or not)? What were the results? What behavior were you seeing to indicate that?
Sometimes, sometimes it was horrible! If people aren't asking me questions directly via email or Slack, that's how I know it's good. On some documentation, for example at my company's handbook we have Google Analytics. THat doesn't necessarily tell us if it's good or not, it just tells us if it's popular. Honestly I've never spent that much time with metrics for documentation, but it could be good to do. 

#### What tools and processes have you found effective in the past?
One thing that's really useful is changelogs. That can take lots of different forms. For example, in my company's documentation we have pull requests — everyone sees that. THat's not very loud. But when something gets merged in, there's a log that goes out to the team to say "here's what's changed in the company handbook this week." Let robots do the heavy lifting there but make sure it's not too much noise for people. 

How to organize it is the biggest challege - hierarchy. I know there's a lot of work that's been done on VA stuff recently, I havent' followed it that closely. Theres just a lot of hard problems to solve. It has to be done well bc if it's not, if the IA isnt right, then no one can find anything. 

Short pages, I like short pages. The people who are writing documentation for the CMS, I'd rather have shorter pages. 

Search is the other things.

For our company handbook, we use GitHub and then it's all published in Read the Docs. For me that's hard bc it emphasizes these really long pages. I get lost. I'd rather have shorter ones.

#### What tools and processes have you found ineffective in the past?

I don't know why, but our team, the CMS team, started using Jira and Confluence. I found COnfluence OK at first, but it felt far away from everything after a while. And then the chagelogs were not very useful or central bc of all the noise within Jira and COnfluence. no one knew what was chanigng. So I don't think I'm a big fan of COnfluence any more. I also think openness is great, which is one of the best things about anything git-related. 

Having documentation as close as possible to the context in which people are working is great. For CMS documentation, it makes sense to have documentation in the CMS. Then we can do things like pull content in the CMS ... it's in a database ... we can pull things around into different places. It's a bit more dynamic, we can structure it in different places and reuse it, which it harder to do in the Git Pages world. Both from a documentation maintaining perspective and I think for consumption, having it as close as possible to where you're working helps ensure that it's maintained more and read more. 

#### Were there different teams contributing to the documentation? If so, what processes did you use to set standards across different teams?

As of now, not for the CMS documentation. We try to refer out to the style guide wherever we can. In code, where you've got code commenting, in the CMS we want to have the documentation live as close as possile to where content editors are working. If you're editing a certain field we want to have certain help text. That's a type of documentation that's as close as possible to where someone's doing the work. In those places we also refer out to the content style guide and the design system as much as we can. Just remembering what is the concern for the CMS and what's the broader concern.

#### How did you ensure that the information stayed up to date?

We assign someone to be responsible for making sure it's up to date, it's in their job description and we can hold them accountable to it. THe other thing I'd like to do more of is build it into our release management sort of stuff. So that at the end of the sprint or whenever a release happens, one of the acceptance criteria is for everything in that repo there's a documentation criteria for this. Just reinforcing that things need to get updated. 

The other thing is documentation sprints now and then. There's a documentation debt and maybe even we could track that as its own component in our ... if it's an issue, an issue label. And then now and then, every few sprints, take a pause and make sure it's all up to date. 

#### What do you think we can learn from this example?

I don't think we're doing it right right now. We - CMS team - have a week left on our contract and there's a big push to move things out of COnfluence. We're doing stuf fbut it's not going to be ther right way. I can't point to any specific things. 

Mikki — When you say, we're not doing things right, what do you mean? 

K - The way we've written documentation specifically, it's not great yet. We're maintaining a product that's going to be used by a lot of different teams. IT's got a lot of different products within it. I would like to see us write our documentation more from a product perspective ("this product is designed to do this, this is why"). With the overall purpose. RIght now our documentation is currently very technical "in order to do this, do this and this and this." 

It misses the big picture a bit, it misses the forest for the trees. Trying to write higher level prodcut descriptions in a user story way ... we should write it as if we're selling the product, to remind users why they're doing things. We also need to address the decisions that are baked into the product. Sometimes we've made decisions that privilege the end users over the editors. I'd like the opportunity to explain that — we've made this decision to support this for end users, that's why editors need to deal with this weird feature. 

For example, FAQs in drupal. THe editing experience for them is kind of annoying, but we've done that bc we want a really amazing schema and markup on the front end. We've structured certain content in certain ways in order to make it easier for VVeterans to get their benefits, and in order to edit those there's lots of different fields to fill out. 

ALso, more videos! Short videos. I think our documentation is really different than the documentation VPS is doing. Platform is doing documentation for other engineers, we're doing documentation for content editors.

Loom as a video service, or GIFs. A 10 second GIF can sometimes accomplish more than 3-4 paragraphs of texxt.

#### If you had the chance to work in that ecosystem again, what would you do differently?

#### Thinking beyond documentation that you've contributed to, have you ever used documetation that you thought was really good?

I think so, yes.

#### What info did that documentation provide?

Onboarding at VA is a real PITA. There's certain documentation that helped and some that was really bad. 

The SOCKS proxy was good in places. IT's an alternative to CAG, and CAG sucks. You're not using your native OS, etc. A lot of us have used the SOCKS proxy documentation, which I'm pretty sure is in the platform team's area. SOme of it is great and some of it is less great. IT's written for a specific audience, and now other audiences are trying to use it. 

It had lots of numbered steps, that was good. Good formatting. As a developer, code blocks are really good. Bash commands that I can copy/paste into my terminal that explain what they do ... and maybe they even do 10 or 15 commands at once. 

Short pages are good and strucured headings, all of that stuff, etc. With tabels of contents that provide jump links if it does get too long. I like GIFs and I like videos as long as they're short. I like to know why I'm doing something. 

#### Was it paired with any tools or interaction? (Examples: search, sandbox, ability to contribute or ask questions) Did it look a certain way? Were there any other attributes that were particularly useful? What did those tools, interactions, or attributes allow you to accomplish?

#### Did you rely solely on those docs, or did you use that and also fill in gaps by asking a bunch of questions elsewhere or using another method?

I think for example with the SOCKS proxy, it didn't all apply to our team. You had to do a few steps, get approval, and do a few more steps. You had to make a merge request with ... your SSH key or something. I think our team developed our own way of interpreting it. We had a Slack post that was like "you have to do this part of it and then this". We had our own documentation for the documentatino. Ideally, you don't want that. 

I wonder if there had been a message at the bottom that said "hey can you help us improve this documentation?" I bet one of us would have done this. That's a good thing to provide reminders and prompts about how can we improve this. 

WIth GItHub, a lto of people aren't super familiar with editing markdown. There hsould be different ways for people to contribute. I don't think most people are ... especially if it's not your documentation, people don't feel comfporatable just editing themarkdown and creating a merge request. 

#### [If Drupal was not discussed] OK, great! Thanks for that information. Now, it is my understanding that you wanted to talk a bit about Drupal as a technical solution for documentation. Can you tell us more about that?

They've been working on it in the last couple days, I've been out, so I don't know what state it's in ... [troubleshooting Internet problems]. 

This could be published on VA. gov in the future

THe content viewing experience in Drupal has never been very good. THere's a lot more work to do to make this ... for example, Q/As, they have a label question and then ... 

[Go to benefit hub to FAQ] A lot of this is structured in Q/A. FAQ can be structured as accordians or not accordians. Our ediitng experience in Drupal, you can have WYSIWYG blogs or you can have Q/As. We can reuse some of these formats in our documentation as well. So a process list can be used for the documentation. So I'll show you the other content blocks ... these are the ones we've enabled so far. We can expand this to include videos, table of contents. When you're editing a piece, this is potentially nice ... 

We don't have a documentation user role yet. Once nice thing, I think, about editing a menu in Drupal vs in Github is you can move things around pretty quickly. You can add new pages, while you're adding a page you can put it anywhere, but after that you can move it around. 

Right now the menu is collapsed. Potentially this would be multiple documentation homes. In the future, it would be cool if we were using the front end sidebar approach when you're in drupal. 

The change management is not the same as GitHub. This is an empty README. In GItHub you have to add a readme for a directory to eist, so ppl just have empty readmes usually. When I created this early on it was just a proof of concept, it just has lorem ipsum in it and stuff. WHen you edit it, say I wanted to move this image ... it's currently in draft, it's rare that we would have draft documentation pages. Well, it will happen. For example for VAMC - soon there will be, say, 500 VAMC editors. If we're going to make a change in the CMS we can save those as a draft and then once the code goes live we can publish the new documentation. IT's not quite as ... if you're a developer and you're used to the vagov-content "CMS" they were used to editing in branches and editing 20 pages at once. This can't do that as much, you can still do bulk changes though. Hopefully for documentation that wouldn't be as big of a deal. 

The infrastructure is there to push this to VA.gov, but currently this documentation will just be served in Drupal. At the very least we could preview, but it wouldn't be a big lift to put this on the front end. We could add any of our existing content types to the documentation. Including downloads.

MK — I've read that tools like gatsby can render content from drupal, have you ever heard anything like that? 

Gatsby is a popular way to do decoupled durpal pages. For this it would kind of be reinventing the wheel. For something like this, there probably wouldn't be a huge advantage to using gatsby, just using our existing front end seems natural. 

#### What outcomes does Drupal support?



#### Have you ever used VSP - the platform team's - documentation?


# Interview 2
- Date: 12/16/19
- Participant initials: VSP FE Tools team
- Participant role: VSP FE Tools team

### Notes:

#### Talk me through a time when you’ve had a really good experience with documentation.
- Rf - Reacts doc is really good, easy to find, well indexed, follows domain language consistently
- What made it successful
- Rf - Searchability of it, full featured search
- Experience with bad documentation
- Rf - the worst doc is missing doc, and that's a problem on vsp a lot is being able to find the most up to date or even to know it exists…

#### What info did that documentation provide? Was it just technical specs about APIs, was it "how-to" and onboarding, was it philosophical "why" documentation?

#### How did you know it was successful (or not)? What were the results? What behavior were you seeing to indicate that?

#### What tools and processes have you found effective in the past?
- Rf - no, never been part of good doc culture, I've read about other companies that have good doc culture like gitlab, I think it sounds cool but I don't know how to get to that level of discipline

#### What tools and processes have you found ineffective in the past?
- Rf wikis don't work, because there's no central governance, there's no editor, when you don't have consistent editors you get diff dialects…in a larger org its important to have the same domain language across, because it gets very confusing…if its not being reviewed or having any controls over it

#### What processes did you use to set standards across different teams who were contributing to the documentation?
- Rf we didn't …the gatsby site is the offer of 3 people pulling together and coalesce it into one voice over 3 months

#### How did you ensure that the information stayed up to date?
- Rf we didn't [laughs]

#### What do you think VSP, the platform team, can learn from this example?
- Rf our priority was to get as much doc done as possible, so tradeoffs we didn't build the infrastructure to maintain…its easy to make but hard to publish…being able to see the changes updated on the doc site is important…if they don't see the updates quickly it removes the incentive

#### If you had the chance to create that ecosystem again, what would you do differently?
- Rf would have looked at 3rd party tools, could have used that instead of building something ourselves…(megan: is there any in particular?)…there's a pm doc management tool, we didn't evaluate any tools, I know they're out there, not a big fan of confluence, I know it could work, it didn't work where I used it before…the search tool is a plug in…algolia
- Br the tool was notion.io, notion is pretty dope…it’s a productivity tool does a little bit of everything, project, product, documentation a little bit of everything
- Megan: I'm surprised you wanted to look at other tools…my understanding is that gatsby can render md files and tech doc can live close to the code, thought that's where gatsby would have advantage
	• Rf yeah that was one of our goals - to pull doc out of multiple repos - one idea is that you could put a readme on an app and then pull that out and put it on the documentation site…so if we want to update it its in proximity of the code…we didn't finish it, the doc update process is broken, so if we fixed it that would be great…once we had to move on to higher proprieties there's no one to fix it…if its 3rd party you have a whole company that can fix it…after the infrastructure was done, dev was moved off to work on other things and now it’s a prioritization exercise
	• Br - its not only the upkeep, it’s the type of resource…it’s a developer needed not a non-technical person
	• Rf - it might be that we hve an overly complicated set up and maybe we should stick to the standard set up and not use plugins…simplify the approach…use default gatsby install

#### If you had to choose 3 things that you think were critical to your success, what would you say those were?

#### Talk me through a time when you've had a really successful experience using documentation to get something done.
- Cv - end of last week, trying to comb through 17 mill json files using jq, going to their documentation, they have all the things you can do with examples for each, so that was nice

#### What info did that documentation provide? Was it just technical specs about APIs, was it "how-to" and onboarding, was it philosophical "why" documentation?
- Cv - it was technical…you feed it a bunch of commands, it had all the commands, description of each one, how you would use each one in put and output
- Bf - do you feel like you learn about new stuff from documentation, or use it as a reference if you already know 
- Cv - I did learn new stuff when I was looking at that one,…I don't know, maybe not typically…what I was trying wasn't working so I was poking around how I might else solve this problem
- Rf- if I need something as a reference, I use google and hit mdn
- Cv - I use mdn but I never use their search, I use google
- Bf - don’t' think I would even browse on mdn
- Cv that works great for them because they are like the first or second hit…but…

#### Was it paired with any tools or interaction? (Examples: search, sandbox, ability to contribute or ask questions) Did it look a certain way? Were there any other attributes that were particularly useful? What did those tools, interactions, or attributes allow you to accomplish?

#### Did you rely solely on those docs, or did you use that and also fill in gaps by asking a bunch of questions elsewhere or using another method?

#### What would you say is your biggest pain point today with VSP documentation?
- Cv - no idea what's there, if someone asked me a question…
- Rf - we don't have a good documentation culture and we keep a lot of stuff in our heads and in slack…end up having the same convo multiple times because we don't document…the doc we do have its inconsistent voice, its hard to scan to find info you need…sometimes there's just blocks of text and you have to stop everything…its not easy to read
- Megan: talk a bit more about documentation culture…what do you think characteristics make up a strong culture
- Rf - primarily communication things through documentation…we are more socially oriented where we communicate through conversations through slack and use documentation as kind of a h elper…someone asked me for help in stalling site rather than using documentation and updating it, we had conversation and I should update it…but yeah
- Megan: why the slack call?
- Rf- the slack call was to identify that it was inaccurate, now I need to update it, but that's like a multi-step process…I have to go to the file, write it out, validate, go through approval process where someone else has to review…it’s a multiple step process…I have other things to work on…I guess I should make it a priority and set an example….that's on the gatsby website
- Megan: if you were - can you think of any other things that would help you prioritize
- Rf - if I could go and annotate documentation and then go back, then I could go through it when I had time…some feedback loop..
- Megan: do you feel you have time to do that
- Rf- probably not…even if I had a list of things that were outdated I personally wouldn't have time…it would take some time to write up…there are other things that are higher priority 
- Megan: how might we fix that
- Rf - never communicate over slack, if its important enough to explain, stop the convo and document…if that's too rigid find a middle ground
- Cv - if we went that approach we would need to make it lower overhead to make those changes…I may have updated the doc once upon a time but I couldn't tell you how to do it now
Ds - which area is this documentation around
- Cv - I've updated the readme, but maybe I've updated the gatsby site but I don't remember how
- Rf - I know I said I don't like wikis but I do like the interactions of a wiki…be able to edit right on the page
- Megan: what other the barriers (besides not knowing how, taking time)
- Cv there are a few hurdles, first I need to find do we have this doc, is it up to date, how is it not up to date, how can I fix it in a voice consistent with everything else, how do I fix it…there's a lot to go through rather than just answer the question
- Megan - if you don't, who should update the doc
- Cv I think especially for things like…yeah, exactly…I think it depends on the kind of documentation, if it’s the onboarding process we leave it to the team, if its technical  docu of a thing I built, then its me, if I'm adding a feature than I should add the documentation to include that thing…I guess if I know how to update then it should be responsibility to at least flag someone down…I'm in the middle of doing something completely different, someone asks something out out of the blue, should I spend an hour updating the documentation or continue what I'm doing…depends on what needs to be updated and when

#### If you’re looking for information related to how to do your job, where do you go to find it?
- Rf slack…
- Do you search in slack?  Rf - yeah…that's how I remember that someone explained that to me months ago…I use dm to index lots of information…I don't encourage that but that's the way I've been doing it for now
- Cv - it depends on what part of my job…I often search slack…I think my trouble is I just have a bunch of stuff in my head and I kind of remember what it was before we had documentation so that's what I fall back to…when we first stated the whole platform and we had documentation around the like PRs…someone was looking for it and its not there anymore because it was updated…I do search github but mostly I fall back on memory
- Rf - I very often go to the old team repo…I probably use the old one more than the new, because sometimes stuff has not migrated over or its in the state that I rmeember it was in more consistently….I found it one way before so I know that I can find it that way in that repo…the new one I don’t search for it, I navigate the director structure…often it works if I know something is there

#### If you’re directing a VFS team member to information related to their job, where do you go to find it/where do you tell them to go?
- Rf - I'll tell them to go to the new team repo if it’s a doc that I know is there…sometimes to the client document repo because its better than what's inside the new repo…I'm not familiar with the new team repo…I don't know where the docs are and what state they are in…
- 

#### Do you see yourselves as responsible for keeping any of the above information up to date? How do you ensure that it is accurate?
What would you expect see on a successful VSP documentation site?
- Cv - lots of words
- Rf - search and code examples and diagrams

#### Other questions
- Megan: can technical and non-technical documentation can live together well, or what are the differences and overlaps
- Rf- probably not…it depends on the volume and how we do the indexing…we tried that and people were putting meeting notes in the repo and it killed the indexing and you couldn't find anything…also not sure what an example of non-technical documentation is (megan: things like IA best practices, SEO best practices, design comps, content, etc)
- Rf - I would say probably not…again it depends on how we can search through that…as an engineer I would not want ux design and copy results showing up in my results…just as if you were a content writer you wouldn't want to see 
- Cv - when we are looking in the documentation for a thing we know what kind of thing it is…when we are searching for one everything else kinda doesn't matter…siloing them out would be fine and may lead to a better user experience…gatsby for example could have menus with different categories that are specific to the kind of thing you are looking for
- Megan: have you encountered any tools that provide a hybrid of functionality that they can render md files near the code but also the hosting platform benefits…or is something else more important
- Cv - I got nothing
- Megan: that's fair
- Crystabel: any other questions
- Bf: how much should we rely on the code to be self documenting
- Rf - self documenting code, sure you can have micro level…we don't have a lot of that…what people need is a higher level understanding of the app…I don't know how we could do that with just the code…example, apple ios doc is a good example where if you have a component they will list all the common ways to compose…looking to solve a problem, not 
- Specification doc versus procedure docs
- Rf - [nods]
- Megan: if you were looking for documentation for a specific product or template, where would you find that …agile 5 metalsmith templates for example…do we think that vfs teams are documenting their prod
- Rf - maybe on the back end but I don't think on the front end…definitely not on the front end because I've had to maintain a lot of these apps and none of them have documentation for fe
- Megan: should we?
- Rf - my understanding is that we have swagger for be, I don't know where those are
- Megan - [hypothetical pr scenario] how does this need to have more info in pr requests might play into documentation for context
- Cv - looking for what's the purpose of the pr, I can see the code is fine but why is it here…if the pr description is blank I'm not going to go hunting for it…this needs to be done, great, why though…that's where I've been most opinionated…documenting decisions, there's probably a balance there, we probably don't need documentation for every pr, but for the general approach…
- Megan: what level of granularity would we expect to see on technical documentation, also my assumption is that any project will have weird decisions made…do you all encounter that engineers 
- Rf - usually I document decisions if something is contentions, that's a good litmus test…the other thing if a lot of useful research is done, then I'll try and encourage people to extract that and document that because it could be 40 hrs of work and I don't want to lose that…
- Cv - I think technology decisions fall into that as well…for example, I have no idea we are still using metalsmith
- Megan: have you encountered here or anywhere else standards for what level/point of things that should be documented
- Rf: sent link https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/documentation-guide/documentation-style-guide
- Megan: doesn't talk about when to document things
- Rf - we just didn't get to it…most of our effort was spent on effort…there's a lot of different approaches to how people write, some people write very flowery which I hate its hard to read and scan…maybe we can teach people how to write

- Bf -  how often do you use tests as source of documentation
- Rf - never
- Cv - I never look at the tests, if I need to know how a thing works because its not a guarantee that all the functionality is tested
Rf - usually tests as documentation only work when you have a good, strong unified engineering culture…we have 1/2 doz diff javascript dialects, you never know what you're gonna get into

# Interview 1
- Date: 12/16/19
- Participant initials: VSP BE Tools team
- Participant role: VSP BE Tools team

### Notes:

#### As engineers, I'm willing to bet that y'all have been involved in creating or managing documentation or documentation tools before. Is that correct?
- *nods*
Creating ecosystems or wokring within various types of ecosystem
either
then sure

#### Talk me through a time when you’ve had a really successful experience with documentation. Anything that has been successful or seem to work in the past

K: Anecodel evidence I have in my career have had various experiences, using being part of shepherding good documentation as adeveloper. I have found that our approach of markdown docs or self organizing GH repositiory as incredibly flexible. I've woked that way in a smaller startup. I also used heavy dependencies such as confleunece, knowledge based type of things. Difficulty there is discoverability. yes or no format That realm can cause difficulties in discoverability

#### What info did that documentation provide? Was it just technical specs about APIs, was it "how-to" and onboarding, was it philosophical "why" documentation?
- I personaly mostly been involved in technical documentations. API docs and such not so much onboarding 

#### How did you know it was successful (or not)? What were the results? What behavior were you seeing to indicate that?
- Yeah one being in the negative, questions have to be reasked. I noticed that behavior happening when documentation isn't working. answers to questions exist in documentation. People answer the question in slack after having search and having not found it is detrimental. 

#### Measurments of success might be the oppositve of that. Can yo think of any other measurements that binds documentation?
This weekend I worked on a project, building out some things in terra form, resuing features i never used before. I spend quite a bit of time in their documentation. I wouldn't say success or faulture but I can say somethings i liked and didnt like. I was working through a new concept for me using the tool and i found places where they documentated 2 different components but never how they interacted. I had to experiment almost a hour, figuriing out how these 2 interplay. That was not great but I would say things I do like about their documentation, is if you know what you're looking for it's very easy to find it. If i know something I'm looking for i don't even have to search just the URL. I like that predicability it's been a long time since I didn't know the prdouct asa whole and their onboarding expereince

- Documentation...when I'm working with an isolated component but when I'm wokring on a project but having documentation on all how those things worke together. Reminds me of how muhc I miss not having documentation on depedent systems 

#### What tools and processes have you found effective in the past ensuring those stay up to date, designinating owners, or who is to keep developer docs up to date, anything that has worked?
- in the past and in this porejct, but from a bare tech level. API end point doc can be generated given the correct set of specifications we have a fiel for what the endpoints should respond with. We have a single sorurce of truth, that elimnates need to update doc in paralell. Thats on a bare level Ive done quite a bit, pretty standard process from the program specific. When working in code that spans more systems. it's much more benefit for the engineer for a narrator driven, outline, tutorial base, this is a recipe rather than those who have straight doc of this method. Maintaining that..Ive never found a good way to do that, but just manuallly. Doc first

- do you think it'd be accurate to specification vs. procedural

- perfect way to say it

- ive seen a blog post on why doc vs how doc. Why doesn't change very often but how changes a lot. lITERALLY just pointint to code so someone doesn't have to figure it out. 

- I think I know what blog post you're talkig about. is that the one recommending a FAQ channel

- Did you ever go hrough the FAQ channel

- I didn't get to go through that but liked the idea of the why vs how

- agreed

#### technical vs. non technical how do these things differ. on the line of why vs. how or different?
I think to me that's probably the line. I also found a lot of value in, when I first started the va.gov, there was a techical decisions folder whch helped some bg for what's going on. Those are super helpful for those decisions to be made in public and a stamp of approval

- I second that. the document decisions folder was imperative me for to understand the overall stuff 

#### Logistically, the why and the how, technical and nontechnical, if you wree looking for a decisions folder or documentat where would you expect or want to see one?

- In the code as comments, next to confusing methods. Beyond that, central. I don't want to go to 4 different journeys to find where that can be. Even if it's linking out from a central documenet. 



#### Was it paired with any tools or interaction? (Examples: search, sandbox, ability to contribute or ask questions) Did it look a certain way? Were there any other attributes that were particularly useful? What did those tools, interactions, or attributes allow you to accomplish?
- Worked ona script this weekend for fun and i used google developer apis for their sheets app. obviously google is the big player in the world, but they have some of the best api docs. but what really stands out is a slide out drawer, it's got 3 sections that you can send api requests live. Being able to add the doc site, test out the request, is a killer feature for a developer


#### Do you think that really applys to developer documentation or do you see parallels in nont tech doc?

- I can imagine them, but not really. I can come up with ideas all days

#### When you were using the sheets doc did you find everything you needed to but did you have to search elsewhere?

- So I found all atomic and linked. google is really good at that because they have an army of people to do it. They have tiers of documentation and tis looks back to scneairo based approach. they have a referece manual or samples but guides for getting started. Less of a devlper thing or how do we provide multiple facets to access this infomraton and perceive it


#### What would you say is your biggest pain point today with VSP documentation?
- I don't if this is the biggest but a big one for me is the duplication of content. We have taken on a number of issues to reorganize the repositiories and push them around, I went to update on how to respond to incidents docu. but I found 5 diff documentations to address the same exact thing. Someone took the old one, wrote a new one and didn't delete the old one. Theres a good deal of that which also leads it to be outdated. lots of outdated information and the reorg of the resource did not help but there's 100s and 1000s of dev links, 

#### Have you ever seen a standard who is responsible for keeping documentation up to date, or is that something that's not really done?

-  I think it's hard because the target is diferent at times a bit. there's product outlines, the tool that builds the feature for 3 months and we go build somethig else. people leave and then people don't know the structure of what's to date. I do't think Ive seen an attempt of something so far, but I think I'm just blidn to it

#### What are other pain points with VSP doc system?

LF. large files being uploaded, when teams need large files. since w erely on git we have a process with that, but getting sfiles over 25mb into doc. Uusually a sketch file or doc. separating design assets and docs, decisions, I will just thoughtof one. I'm a rails engineer and being pretty fmailar with rails doc. the process there since it's an open surce repositiroy anyone can contribute. 100s of thousands of devs can contribute back. in that regard, encouraging amendments if you think amendments is necessary. Headlining hey this is a team effort. ive seen that it works in the past in the right ecosystem

#### can you tell me a lot more about how that works and what it accomplishes

- docs are updated by those who you use it, in the trenches vs. in command. lends it self to more accuracy in granularity. It also proivides ownership and when you give owenership to your team, it helps with overall qality of work. we have so many users of docs.

- I'll say something, when we were transitioning vets. gov we went through a big doc push that had the idea of something good, but everything that just got transitioned to a new repo and links got broken. Here's a spreadsheet of everything, there's a storytelling aspect of it. a good encompassing view of what becomes products. I don't know who came up with that. As someone new coming on, that would be realy helpful, we only did it because the powers needed it but it got thrown away 

- I think it worked for me, because I was a new person and I got a deep dive about everything. everything was kinda linked to that one document and made it easy for someone to see. as someone in porduct, you can kinda deep dive into it. It also had the owners too, so it had more technical questions 

- I agree that was a uuseful thing to go down the bullet list, this is how I use things. I'm interested in bill have you encountered any of that doc? as you were onvoarding

- I think thebiggest thing, is I realize with vets website, I ahd trobule getting it to build. I needed vets content as well getting it a sibling to make it work 

#### For context, I think what TJ was talking about was the transtiion readiness factor. kinda a table of contents situation

- This was done out of requirements, people kinda suffered to a degree because this was a mandatory thing and i do think we got a lot from this but it disappeared to my knowledge. 

- I know culturally K said, giving people ownership, this seems the oppsote of that

- I thinkt his was a handoff methods. I do recall a lot of...maybe not suffering, but a flurry activity in the last couple sprints. I think that they're...the opnion is not warranted.


#### If you’re directing a VFS team member to information related to their job, where do you go to find it/where do you tell them to go?
- the VAGOV repo, specifically the engineering subsection on their particular role. Generall y I found good success in that repo now. I've directed her to that repo with success. as a BE engineer we spend a good amount of time in the devops folders. It sort of has a source of truth for things, I think that doc should exist in devops for several reasons. 

- Yeah I tried to put..are we talking about onboarding. 

- new VFS member asking you about backend or ops doc. Where are you going to direct them? maybe the answre is nowehre?

- I think that its about what they're asking about. We're in vets gov, now in va gov. depending on the level that they're at that's a good one. if they're wondering about ops in gerneal. there's a va gov team repo. 

#### Do you see yourselves as responsible for keeping any of the above information up to date? How do you ensure that it is accurate?
- yeah I prersnally wouldn be rsponsible the genreal policies and norms. We'd be repsonseible for BE tools folder, maybe the onboarding expiernee for VAgov. Devops repo I would refer to ops person. They would have to merge the change i think 

#### What about *name or name* do you see yourselves repsonsible?

- I'm prob the wrong person to ask becase I get myself in everyhtig

- there's certain documentation to keep up to date that falls on our tea? there's blurry lines on what falls in infrastrcuture, and what can't be touches by backend, there's prob some stuff that's more in our plate. 

- If you saw a document that is out of date, how would you determine who should update that document?
i dont know

- I guess it kind depends, that i know endough to know that it's wrong, but I'll try to correct it in a pull request and hwo might know more about that. we do't have an owener of docs

- i look at the git blame. Kid of like throwing into a wishing well. I'd update it if it needs an update. see who's responsible r mght know about this if there's no clear answer




#### What would you expect see on a successful VSP documentation site?
- I would expect to see, putting my hat as new person, i'd understand the documentation right away. it should be intuitive enough so that id' be able to navigate it. new person would come in saying, ok i can figure this out. At least find where things are at. 

- Any other things? whether that's any ifno or tools/features to be expecting?

- this is maybe a left outfield pitch? cant find what i'm looking for maybe a chat button, or send you directly to slack. That way we can capture that lack of success somehow. Automatiable and you can click a button on what im looking for and be able to write a little on what im trying to find

- specific changer on uses can be useful. Checking on links. doesn't help we have 3 different repos thatit can be and other repos that it can be in. Basic sanity checkin might be useful. 

#### Going off on these features and tools? either something youve contributed to or just used What tools or processes have experience using contributing to? Have you used any in terms of contributing or using that worked or didn't

- I'll profess my love for gitbook till the days end. right now it provides a world calss platform for collaborating. you still have to organize the contetn on archtiectue that makes sense. Not adding overhead that unnecessary I like gitbook a lot. I'd like to investigate more on stack overflow for teams

- have any of ya'll used postman collection?

- yes super helful for devs absolutely. can hearkedn back about speccificaitons we've heard earlier. 

 - I've used gitbook for my personal knowledge wiki but not in a professional environemnt. 

- Any other tools or platforms anyone used?

- Not so much backend side but I've used storybook for FE code. 

- I got mixed reviews on storybook from a remote FE in a react-y world. Esp when a lot of react is optomization. Very much allows you to click the prototype 

- one thing I really enjoy is when people tie in codepends to their documentation. side by side you have actual code running in browser of documentation

- the materual UI react library 

- to add to that, there's something like jupiter notebooks but it's inlining running the code in the doc. acts like a scratch pad. If you're talking about more of an onboarding or technical perspective. Inline code or scratch pads are awesome

- I have one question that i forgot to ask that we were just chatting about as a team, where is the docs know for vets api?

- I know lighthouse team is devlopers va gov

- No, that's sort of separate. We have swagger docs and should be accessible and link. last time I checked it was broken though, developers can handle locally. beyond that the readme in the reposiitory is prob the best doc beyond the code. I velieve that's the case. I think that covers our corners

- Using something like swagger, code having document vs writing it yourself is something to think about. 

- What do you mean by self document?I always get weary when I hear the term

- essentially willt ap into api endpoints based on model of endpoints. Actually generating the etnire webiste, url swagger, test and run things. you dont have to worry about building and maintainng

- this is something we tosed around before to, making sure our API isOAS3, compliant that way we have a suite of tools. We can test, mock servers. Work might be underway in some way or the other 

#### Why do you get wary when you hear the phrase self documenting code?

- Well, idk, it's a kinda like "read the source code dummy" A lot of times i hear it, well go read the soruce code it'll be obvious what it does. that's so not the case, people don't know whatthat hting is. In this case it is awesome but is it as self documenting as you think it is. Writing why docs is not something automated. Oh it's self documented so that's good

- if documenation is includedin well written code, that would be why doc not how doc

- if you're writing doc in code, is doc, not self doc. 

#### does anyone think that works or doesn't work well writen code? would you need spearate doc

- if I don't know language, i could get caught on some things. there's certainly a balance, Comments are necessary when codeis absoutley on baseline level. Comments are part of self documenting code. Codelines tell you what you do. Then there'd be writing english and we don't need code programmers. 
