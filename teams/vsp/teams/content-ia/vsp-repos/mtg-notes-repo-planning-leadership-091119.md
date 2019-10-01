# Va.gov-team repo reorg leadership mtg

## Date
9/11/19

## Meeting Purpose
To discuss strategies for what content and how much content to move into the va.gov-team repo. 

## Next Steps
- Andrew to sync with Bill re: best practices for the actual copying of content into va.gov-team repo. Specific instrux for large files will be needed but probably not immediately. 
- Mikki to work with Lauren on updating anything in Lauren’s research doc spreadsheet that needs updated before the move. 
- Megan to sync with Andrea re: needing Bill’s time for this.
- Mikki to create instructions for VFS teams re: how they should fill out the excel spreadsheet — naming conventions, selecting which folder in the new architecture it should go into. Also to create instructions for how to add disclaimer to old stuff in vets.gov-team repo. Megan to assist!

## Other key points
- TBD: Archival process and recommendations.
- Timeline is to attempt to tackle 1 practice area per sprint, with products folders more dependent on applicable VFS team’s needs and priorities.
- We can look at [insights page on github](https://github.com/department-of-veterans-affairs/vets.gov-team/pulse) to get a hint at what people are still using in vets.gov-team repo. 

## Meeting notes & transcript
Rachael: Why do we not want to bring everything over into the va.gov-team repo? What are the concerns, other than sensitive info? There already was a cleanup effort of the vets.gov-team repo, what if we just move over everything and then deal with it then (realize it’s not quite that easy …) 

Andrew: We have a pristine repo today, but we have so much content to bring over that the pristine repo is unsustainable (unless we give it MONTHS of work to keep it perfect). Recognizes the tradeoffs of how much there is to bring over. 

Mikki: Can we just change the vets.gov-team repo from private to public and change its name? 

Andrew: We should not, there is too much private content in that repo that should not be public. In GH, deleting content will not remove it. This is a firm decision. 

Mikki: What are concerns about large file storage? 

Andrew: I wish there was an answer … that needs to be its own conversation. 

Mikki: If we’re moving towards the idea that we’re moving a lot of content into the va.gov-team repo, there are a few things we need to figure out. One is large file storage, one is archival process. When is something archive worthy, how should it be archived, etc? We will also need better structure for sensitive repo. 

Andrew: Can we just delete files and leave them in the Git history re: archive? Are things going in archive bc no one needs them anymore? 

Rachael: We’re not sure if things are still being used (that’s why they’re archived, not deleted). Was an effort to retain all the documentation for if/when things need to be handed over to a new thing. We’re not going to spend months rebuilding all of the content and folders, we’re aiming for critical stuff and we moved things to archive that we were unsure of to get it out of the visual space. Do we do this whole conversation now with things in the vets.gov-team repo, or do we move stuff and then try to have this conversation? 

Andrew: Let’s move stuff to the public repo and then figure it out, if we’re comfortable with it being public. 

Patrick: What specifically are we talking about? When we move it all to the public repo, what is all? 

Mikki: The product folder for sure, most of the stuff in the practice folder will also be copied over. A few misc folders in programs. Also, va.gov 2018 relaunch content needs a thorough scrubbing for sensitive info. 

Rachael: Spreadsheet for everything that needs to be migrated? I have previously exported the site map to excel. For top level folders we could go through audit. 

Patrick: If we bring it over and then ask people to clean it up, there won't be any reason for teams to actually do it. We should tell people that they have to audit their stuff before it gets moved over. (Mikki agrees). For early access problem, what content is that an issue with? 

Mikki: Onboarding and practice area documentation. Example, Lauren’s research documentation. Quickly that will also apply to practice area things, teams will want historical data on research, designs, etc. 

Rachael: Patrick, would VFS teams clean up their product folders and moving it over? 

Patrick: Yes, teams that are actually using the folders are the ones who should clean it up and move it over. If there’s a folder on 526, then the team that’s working on the 526 should go through and audit, and then VSP can move it or they can move it themselves. 

Rachael: Initial pain points were around team charters. Those may have been solved! If we make teams responsible for auditing and moving their own content, it can happen more incrementally. 

Patrick: Let’s keep an eye on commits on vets.gov-team to figure out who’s still using that to store things. 

Mikki: Future “goal”/plan to archive vets.gov-team? 

Patrick: I don’t know, what do people think? 

Rachael: What’s the benefit of archiving? 

Mikki: Not sure, it’s been mentioned before. Maybe to keep people from continuing to use it? 

Patrick: We can at minimum restrict write access to it, start there, and mark it as deprecated/no longer in use. But that will be months away. 

Mikki: Just to clarify, we’re not actually moving files over to va.gov-team, we’re copying them. In doing that they will lose their history, but it does mean we can/will have duplicate content out. We need to make sure that every page on the vets.gov-team repo refers people back to the va.gov-team repo. 

Patrick: What is the decision to copy? 

Andrew: There isn’t really a move feature between repos. It’s really difficult to keep commit history moving across repos, so I’m not worried about keeping it. 

Rachael: Moving would create a bunch of broken links. 

Andrew: It’s actually a copy either way, it’s just a question of whether we delete the old content. 

Rachael: We’re aligned on: we have good structure in place on va.gov-team repo. Main pain point is that ppl are going to vets.gov-team to access resources, and some people don’t have access to that early on. We need to have instructions in place for how to move stuff. Mikki, should people run it by you before they commit the new files into va.gov-team? 

Things we need to do: explicitly tell teams what we want them to do. Find who’s committing to vets.gov-team still and have convo with them about why/can they change. And work on practice area stuff from VSP side, clean them up before we bring them over. 

Mikki: I will need to talk to someone about how these moves actually happen. 

Nancy: Do you have to be an admin or have some other privilege to be able to move stuff? 

Patrick: No, we’re just copying. We should offer to help and do it for them. 

Mikki: Onboarding documentation is important, such as Lauren’s stuff on how to do research. 

Rachael: Do other teams have similar documentation? 

Mikki: The other team’s onboarding documentation is scattered around. I’ve sent an excel template to product dev support. 

Megan: How do we actually do the moving? Who is going to own this? Can C&IA do this, or does it need to be assigned to an engineer? 

Andrew: It’s going to be easier to just have an engineer do it. 

Rachael: So let’s have C&IA do as much prep as possible, and then hand off to an engineer to do the actual copying. Maybe Product Support is who will end up helping with this. We can find out if this is in JP or Bill’s wheelhouse? One gap to fill is the instructions before and after. Tell people how to name their files, tell people we can’t bring over staging credentials or large files, tell people that after we do the move, they need to go into their old repo and update it to say it’s out of date (and clarify how we want that documentation to look). 

Are we moving large files, or no? Can we bring over critical large files? 

Andrew: It depends on how we’re bring them over and how people are working with them. One catch is that you can’t upload large files through the web interface. What are they, mostly sketch files? 

Mikki: Yes mostly sketch files, maybe some powerpoints. 

Rachael: 
- How VFS teams should fill out the excel spreadsheet (instrux) — naming conventions, selecting which folder in the new architecture it should go into. Instrux for how to add disclaimer to old stuff in vets.gov-team repo.
- How Bill should do the moving, set expectations. He’s going to get excel files submitted to him, he’s going to be in charge of copying things to va.gov-team repo, there’s a special workflow for large files. 

Megan: Any ideas for an interim solution for Lauren? 

Rachael: Can we ask her to prioritize more? Narrow down what is highest priority to move over? 

Mikki: I want to map out a plan for how we can get all this stuff moved over. What are people thinking about timing on all this? 

Rachael: What if we try to tackle out one practice area each sprint? For product stuff, that’s whenever a product team is ready to move their stuff over, that can be reactive. After that we can do another audit to see what’s left. 

Patrick: Look at insights page on github to get a hint at what people are still using in vets.gov-team repo. https://github.com/department-of-veterans-affairs/vets.gov-team/pulse

Megan: Is there anything else we need from Andrew before he goes out? 

Mikki: Nope, should be fine. 

Andrew to sync with Bill on best practices for file moving so that can start while Andrew is out next week.
