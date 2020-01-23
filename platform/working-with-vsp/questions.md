# Managing External Contractors - Strategic Challenges and Questions

<hr/>

## To Dos
- [ ] Melissa C will see if there's anything else we can automate wrt code reviews - will reach out to experts across Ad Hoc to collaborate
- [ ] Define baseline expecation for how much time to spend supporting, define who that group is...
- [x] Rachael to figure out how we can get Mary and Elizabeth's input on some of the items below
- [ ] Liz and James will work on [upfront info / intake process](#access-to-va-services) (tbd but lower priority than other things)
- [ ] Rachael, Mary, Elizabeth: make sure we're on same page around maintaining the code that BAH and Community Care are building, and how far that support goes
- [x] Liz, Mary, Marcy: how to structure future contracts so ppl can maintain what they build, and (related to above) what to do about current contracts that don't align to that. **This is completed insofar as DSVA is working on it.**
- [x] Who can review PRs? Melissa is in that group, who else? Need ppl familiar w/the code.
  - [ ] Melissa: as a result of ^ to determine if we need to adjust how many ppl review, whether it's ok contractually etc
- [ ] James and Liz: to talk through some of the technical parts of the deploy puzzle, so Liz can write it up


<hr/>

## How do we improve code isolation, so it's clear who's responsible for what features?

#### Current approach

* Have BAH build on separate rails engine (ruby engine model), while Rainbows works on separate error logging and stats, as well as separate code libary to house common code. 
* Status: Melissa has updated BAH engineering lead and got the thumbs-up. We will monitor to see how it goes, and then see if there are other enhancements that need to be added for this to be effective and scalable.
* This is good for keeping things clear for the first iteration, we'll learn from it and see if more work is needed to be able to have the necessary level of clarity in future instances.
* **QUESTION** Seems like we've answered this for the short term. If we have, move to [Decisions](README.md).
  * If people are working on the future state, [put it here](in-progress-povs).



## Who will maintain products/features once live? VA? Platform-creators? Feature-creators?

#### Current - Community Care and BAH

- BAH - How do we ensure the features they launch can be maintained after they're gone (end of year?)? 
  * Pause convo further until Elizabeth and Mary are able to join.

- Community Care: their intent is to keep maintaining (at least until June 2019 for now...), so different teams will have different arrangements in this beginning phase.
  * [ ] Liz to confirm with Larry G (VA OIT)


## Code quality

#### How do we govern code quality at scale?

* If one contractor reviews anothers PRs, do they need guidance language so that it doesn't turn into one contractor assigning work to another?

- Might be driven by documentation and code reviews
- Any commercially available tools that could help? Code Climate? Or anything that could set benchmarks for code quality? So there are automated checks, to reduce/support burden of manual code reviews.
- Currently: have automated coverage, linting, and style checks in place. If a certain % isn't met, then the build fails.
- Back-end code needs more thought...
- Benchmarks required before someone can hit a PR?
  - PR itself will fail checks and refuse to merge PR
  - But technicall you can have anything you want in the PR, and if it's good it'll go through
  - Code isolation and responsibility will help this too, bc the more logging, instrumentation, metrics can be separated and code quality doesn't quite matter as much bc it's easier to see what impact it'll have to the application
- **Defining for documentation, what do we expect -- what % of code needs to be covered? Etc so we can tell ppl up front.**



  
## Expectations around response time

#### Seems like we need a service level agreement, so if we get into a tricky situation w/the new teams, there's an expectation for how another team should respond. Do we need to be available to unblock immediately? What if it takes 20 hours of work? Need some limits.
- Can we establish some baseline, and if it's going beyond that, some group of people need to decide what's most important and where time should be spent
- Define baseline expecation, define who that group is...



## Access to VA services

#### What's the process for how new teams get access to VA services (like BGS)
- As a part of onboarding, should each team be handling that independently of "this process"? This entails:
  - PIV card
  - Access to VA network
  - VA email address
  - Having system with connection to allow for local development
- For services that aren't already exposed through the API already
- If they need to do API development, or connect to a new endpoint on a VA service, they'll need this
- Consider handling as a part of Intake, pre-work before starting project together
- Documentation on this would be useful in general: here's the network access you can be granted, here's direction on how to access them, here's what to do if your account expires. We do have documentation for how to set up encrypted email, but outside of that it's not very transparent.
- Explanation of why you need this access - what you can do with a PIV vs without. Or maybe what extra stuff you need a PIV for. So ppl can determine what bucket their project falls into. <- Future Path
- Immediate need for BAH: seems like it has been resolved.



## Providing support

#### Probably doesn't make sense for Rainbows to be the long term System Integrator Support team (interactions in channel, helping ppl build), how do we plan for long term support?

- Right now, hasn't seemed overly burdensome
- But it might get more time intensive as they get closer to code reviews and launch
- Continue tracking in real time here, open notes, FAQs, etc.
- Let's do a retro at the end of PI9 to get team's perspective
- Then strategy meeting / prioritization exercise for DSVA as to how to continue a longer term vision of providing System Integration support - does it need new contracting? is that part of the vision for what DSVA does? etc
- **Need to prioritize "time tracking" for DSVA/AdHoc team.** How/who will do this?



## ATO / system liability

#### Establishes authority for system to operate and also liability. So anyone who introduces changes to the pp that aren't compatible w/ATO or cause security problems, are accountable and liable for damages. So if changes aren't easily attributed to a certain party, who's accountable for them, and for owning resolution?

- Not much precedent for this within VA
- Distilled simplisticly: who owns the errors?
- Example: 2 systems depend on a library and the library changes, abut one of the systems wasn't aware of the changes coming and breaks/causes issues, 
- First thing: need to figure out what Ad Hoc is liable for
- Second thing: what mechanisms keep liability fair and attributable?
- One idea: include security reviews as a part of build/launch process
- Status: need to put some info together (per first thing above) and come back for much larger discussion / workshop
- Related issues around security review - see [decision made here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/security/security-review-process.md)
- Urgent thing: people have a lot of questions around the deployment and UAT and other processes leading up to launch, and we don't have e2e documentation of it. How can we make time for that, when teams are heads down on other priorities?



