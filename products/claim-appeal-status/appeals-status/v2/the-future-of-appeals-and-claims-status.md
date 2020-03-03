# The Future of Appeals and Claims Status

While the team was building Appeal Status V2, we put together a list of use cases that got deprioritized for V2 and will be needed once the new Appeals Modernization Act is in effect.

Here is the list of use cases the V2 team put together for the future of appeals and claims status:
- As a claimant/ appellant, I want to know what good evidence looks like (i.e. What is a good example of a nexus?) 
- As an claimant/ appellant, I want to know all event history since my original claim.
- As an claimant who just received a claim decision letter, I want to know what are the new Appeals Modernization lanes to continue my claim. 
- As an claimant/ appellant, I want to be able to track my claim after I've chosen an AMA lane. 
- As an claimant/ appellant, I want to know the difference ways I can continue my claim (i.e. filing for reconsideration).
- As an claimant/ appellant, I want to be able to download my board decision
- As a non-veteran appellant, I want to check my claim/appeal
- As an claimant/ appellant, I want to get a notification for when my appeal changed so that I don't have to check my status everyday. 
- As a Veteran who uses [Vets.gov] to track and manage my benefits, I want a quick and easy way to understand my claim status on a dashboard.

Most of these scenarios call for a case where a Veteran-facing tool needs to [connect the appeals and claims endpoints](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/appeals-status/v2/future-of-claims-and-appeals-status.key), creating a single story of a Veteran's claim and providing a better understanding of the Appeals Modernization Act.


Wireframes for an AMA world. 

![image](https://user-images.githubusercontent.com/13420618/38226696-f29e99d2-36c8-11e8-92e3-fd5314da74ce.png)

![image](https://user-images.githubusercontent.com/13420618/38226728-10b2cba0-36c9-11e8-9912-edcd21d009d5.png)

In a perfect world, Veterans can pick a lane in one click. (One can only dream...)
![image](https://user-images.githubusercontent.com/13420618/38226755-2d66bb30-36c9-11e8-8125-63acdeb7d592.png)

If we continue down a path of showing AMA in status, we hope to show consistently throughout each lane when the claim has been assigned to a reviewer. 

![image](https://user-images.githubusercontent.com/13420618/38226895-c2d06c5c-36c9-11e8-909d-c5f6d1423b70.png)


## We need to do discovery around claims process

The new Appeals Modernization Act, which will be in effect in February of 2019, allows Veterans to continue their claims or appeals from the legacy process in 3 different lanes, which requires different types of reviews. Whether Veterans choose lanes at VBA or at the Board, everything is now a claim and the Digital Service team, in partnership with VA have an opportunity to shape this infomration and language so that it is easy to understand.

### What we know from Claims modernization team 

#### What Veterans want to know 
- Is my claim moving? (Similar to "is there progress?)
- When is my claim in the hands of a Veteran Service Representative?

### Areas of pain points we should investigate

#### Evidence gathering
- Evidence gathering process takes the most time and can be confusing for both Veterans and representatives.
- This is an area the VBA is also trying to improve. One way they are going about this is through Decision Ready Claims.

**Concerns**

A Veteran once asked me, "why do we need to go through a 3rd party to get something done? Why isn't VA doing this?
This makes me really concerned about how we talk about self-service tools. Whilst there are many Veterans who are technically savy and able to search for their benefits, we run with the assumption that this is something they want to do. 

If we as a team acknowledge that evidence gathering is a very confusing and complex part of the claims process, why are we making Veterans do that on their own? We're giving them to hard part to work on when we haven't investigated why things like scheduling is currently not clear. 

DRC is a concept that the VA clock doesn't start until a Veteran has gatherred the evidence and then filed the claim. But we haven't asked Veterans when do their clocks start?

**Questions we should be asking**
- What does the evidence gathering workflow look like?
- How are Veterans currently understanding evidence gathering?
- Are there any bottle necks during this process and if so, where are they happening?
- Do Veterans understand what a nexus is and how they should be submitting evidence for one?
- Has our team gone through an interactive interview? What is the current Veteran experience?
- Are there steps in the process where Veterans should stop submitting evidence (i.e. in the appeals process, when a Veteran submits evidence after an Statement of the Case or Supplemental Statement of the Case, decision review officers need to write another supplemental statement of the case, which takes more time)?

#### Scheduling 
- What I've heard from VSOs is that the problem is that Veterans and VSOs do not know when they are scheduled for their C&P exams and where they will take place. 

**Questions we should be asking**
- When is it that Veterans figure out when and where they will be having their C&P exams? 
- Who is in charge of scheduling? 
- What does the scheduling process look like?
- Why is it that this information is hard to get?

#### eFolder access
- There has been discussions about giving Veterans full access to their eFolders. 

**Concern**
The appeals team has watched attorneys at the Board go through Veterans' eFolders and it is very messy and hard to go through everything. The document types are very clear and even VA professional have a hard time finding distinguishing what each document is.

**Questions we should be asking**
- What information are Veterans looking for in their eFolders?
- At what point in the process are Veterans asking for eFolder access?
- What do Veterans think their eFolders look like?


## We need to go into the belly of the beast...

Most of the claims status data comes from VBMS + VBMSr and we need to find out if we can track the following information: 


### Can we get this information in the data?

- What are all the information we can gather about scheduling an exam?
- What are the AOJs during the claims process?
- Do we know when a claim is assigned to a particular reviewer (i.e. VSR? RVSR?)?
- What causes claims to close out? Do they stay in the system or are they closed out when things aren't submitted on time?
- Could we show what the decision is before a Veteran receives their claims decision letter in the mail?
- The claims process is a 90-125 day process, where as 1 round of appeals from NOD to Board decision takes on average about 5-7 years. Do Veterans need to know the wait time between each stage of the claims process? Is this information available?

## AMA

What does choice look like for Veterans?

After talking to VSOs (including VSO trainers), they believe that Veterans will have a new set of questions about their claims and appeals.

- What are the deadlines to continue my [AMA lane(s)]?
- Which options allow me to submit new evidence?
- Which options allow me to have a hearing?

### Assumptions


#### 1. Veterans have enough information to know which lanes to choose from

How does a Veteran choose to submit or not submit new evidence when they don't which of the two are good for their situation?

We need to allow Veterans to make **informed decisions** and right now, we are not providing the information that helps Veterans understand when these various options are good for their appeal. 


#### 2. Veterans understand the current appeals process.

This is an assumption that VA and DS are making (I'm really speaking on behalf of myself). There is no way of proving that the AMA experience is better than the legacy appeals process or that the legacy process is better than AMA. The key to success is for the Digital Service team to shape policy as much as we can and build AMA with users so that they have a seamless experience. 

## Why this matters to VA

- Based on our currently technology, VA is not ready for a lot of these changes. Things are moving quickly and new changes need to be ready for Veterans. 
- As of now, the VA does not have any plans to allow Veterans to track or manage AMA status online. That right, eBenefits is not planning to have this on their site. This is an opportunity for DS to provide Veterans something that nobody at VA provides. 
- DS appeals team is currently working with the Board to make informed decisions on the paper forms Veterans will need to fill out for the AMA lanes. Paper forms are prone to error and we can help VA stir towards 1. a single form and 2. create digital forms
- If we provide Veterans with the right information about their status and set them up so they know what they, we can prevent a lot of bottlenecks during the process such as intake. The legacy process includes a lot of duplicative mistakes and we can see this potentially happening. Every time a Veteran submits something new, we've learned that this requires VA employees to review the appellent's information again. We can inform Veterans when and when not to submit evidence so that VA isn't receiving and reviewing more than they need to. 
- There are ~20 Veterans without representation in the appeals process. Veterans will be looking for information and VA needs to be ready to prepare Veterans with the right information
- The more information we can provide Veterans about their claims and appeals status, we can decrease a lot of contact center volume, saving VA money. We are still testing this theory with Appeals status V2

## Research Champions

Over the years, we have grown subject matter experts on the DS who can answer some questions, connect us to the right people or help us ask the right questions. 

- **Alex Taylor** - Claims modernization sprint, 526 form, increased rating form
- **Melissa Schaff** - Claims modernization sprint
- **Annie Nyugen** - Board pilot, AMA forms
- **Chris Given** - Board pilot, Appeals status
- **Shane Russell** - VA claims and appeals intake, VBMS, VBMSr





