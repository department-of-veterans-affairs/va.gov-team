

<h1>Sprint 0: Submit Feedback</h1>


[Epic #6572](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6752)

<h3>Problem Statement</h3>


As a veteran, I want to be able to communicate problems I encounter during use of the VA Health and Benefits app in a manner that my feedback will be heard by relevant parties and acted on to improve the experience for myself and other veterans.

**Current Experience**



* There is no clear mechanism for veterans to submit feedback–it is entirely on the veterans to determine their method which include but are not limited to:
    * Leaving a review in the Apple App Store/Google Play
    * Posting in the one of several VA-related Subreddits
    * Reaching out to general VA support via phone or email and hoping the feedback is passed along
    * Posting on VA news/blog posts
        * For example, [comments from frustrated veterans on the news announcement of Rx Refill going wide release](https://news.va.gov/117508/prescription-refill-now-available-mobile-app/)
* All current methods are all just going into a void with no clear line to even being reviewed, let alone yield results/changes desired
* The lack of a clear mechanism for feedback decreases the likelihood of veterans bothering to share their experiences which in turn reduces our capacity to improve serving them
* Both research sessions and feedback we have been passed from the VA highlight how confusing “VA mobile app” terminology is: many “mobile app users” actually use other VA apps, are referring to text messaging utilities VA offers, or even just are using VA.gov or MHV via their phone’s mobile browser

**Desired Outcomes**



* We should have a direct channel that allows veterans to submit feedback to us from within the app and is propagated to some repository accessible to the team
    * All feedback is assuredly coming from our app without any “VA mobile app” ambiguity
    * For the veteran, this would be bringing up a screen with simple form submission containing at least a textbox for them to enter details, potentially also containing a dropdown for categories (e.g. feedback on Secure Messaging, Rx Refill, etc.) or other pieces of information deemed valuable
    * This would allow end user bug reporting of issues we may not have caught and wasn’t invasive enough for them to have posted elsewhere about
    * Maybe not MVP, but could look into allowing sending of anonymous state data and device information to allow troubleshooting–in app store reviews, veterans sometimes mention app crashes which could potentially be reproduced if we could emulate their data/device and investigate fixes for
* This feature should likely be accessible both: 
    * Prior to login where we know many veterans encounter problems and potentially can pass along feedback to login teams to enhance their services
    * After login so veterans can give feedback on any general feature issues they encounter or suggestions they have
* In terms of high level metrics, offering this outlet may attract veterans to communicate frustrations with us instead of leaving 1-star reviews
    * Maybe not MVP, but longer term could allow veterans to give contact information that would allow the VA to follow-up with them directly to work with them to resolve specific issues–a call you back support type option
    * Over time, if we can resolve issues with more detailed feedback we can ideally improve net reviews/app satisfaction
* One notable point of feedback during the initial Sprint 0 was adding prompting for feedback–so we could target individual workflows (e.g. first time completing an Rx Refill, first time engaging with a new feature or significant update to an existing feature) to ask for additional feedback from users
    * This was tagged as plausibly out of scope for an MVP, but otherwise significantly interesting for data/research purposes

<h3>Assumptions and Level of Confidence</h3>




1. Assuming that veterans are willing to give us actionable feedback as opposed to simply “venting frustrations” feedback
    1. We are confident that veterans hold strong opinions about their VA interactions (including with our app) and will be receptive to providing us helpful guidance if we offer an avenue that gives them confidence we are listening
    2. We strongly believe that veterans are selfless to a degree that while fixing their problems is helpful, they also care that it is fixed for other veterans poised to follow in their steps and want it to be a better experience for them

<h3>Risks</h3>




1. Open us up to receiving very unfriendly feedback that is not helpful/is offensive
    1. Attempt to mitigate via copy reminding it’s going to humans on the other side
    2. Potentially have the ready ability to delete unhelpful feedback/file it away to where we won’t see it without looking
2. We can’t ensure that veterans won’t send us PII or other sensitive data
    3. Attempt to mitigate via copy reminding them not to
    4. Ensure our backend receiving the data is limited to authorized access by invite-only means controlled by the team/VA

<h3>Business Goals</h3>




* How would this benefit VA?
    * Allow direct veteran feedback on the app available in real time without the need to scrub proxy avenues for feedback maybe not truly about our app
    * Reduce need for VA support to take in and route feedback for us freeing up time for other issues
    * Increase feedback fidelity to help focus on improving veteran’s experience by decreasing barriers of communication
* Which OCTO and Program goals does this tie to?


---

<h3>Roadmap</h3>


**V1**



* What scope would be included in the v1/MVP?  

**V2 and beyond**



* What would we save for later iterations?

<h3>Technical Approach</h3>


At a cursory discussion with Narin, it may be feasible to to use [Firestore](https://console.firebase.google.com/project/va-mobile-app/firestore) within our existing Firebase configuration which would make it exclusively a front end engineering task with no outside dependencies and also plug in nicely alongside existing analytics collection.

Are there other VA groups or tools we need to work with?

APIs that this is dependent on

QA strategy

Launch strategy

<h3>Measuring success </h3>


	What metrics can we watch to see if our efforts are reaching the desired outcomes?

<h3>Stakeholders</h3>




* Who within VA do we need to ensure we work with?  Who has ‘veto’ power?

<h3>Open Questions</h3>




* What do we need to learn before moving forward?

<h3>Important Links</h3>



---

<h3>Incoming Amazon Box (What we want)</h3>


Understanding of scope



* What does success look like

Past Research

Link to existing tools with test users, or video demo

Other teams within VA that have implemented this feature or something adjacent



* How Mobile will be different from other integrations, i.e. accessibility
* Original Designs of other implementations with comments, context
    * Component maps
* Roadmaps for upcoming iterations of the feature
    * Are they working on changes now?
* Metrics and KPIs other teams use
* Customer feedback data
* What % of user base use this feature (do they use it on their devices now?)
* Contact Center coverage - how does it work for current implementations, what feedback are they hearing about current implementations?

Available Data and how to access it



* API documentation
* Data lineage/biography (how is the data gathered?  Where does it come from? Conditional logic)
* How does test data work?

Existing Challenges



* What bumps did other teams encounter?
* Where can Mobile make a difference?

Stakeholders



* Comprehensive list of **all** stakeholders
    * Core - decision-makers, they have veto power, they need to be onboard with decisions
    * Resources - they have helpful information
* How to communicate with stakeholders 
    * Slack/Teams/email/meetings

Marketing



* Who would be coordinate with for communications about the feature

<h3>Outgoing Amazon Box (What we should provide for others)</h3>


Our Roadmap



* Other priorities we have that could affect delivery of this thing

Primer for working with Flagship Mobile



* Expectations for working on mobile projects, what makes Mobile different
* Our Release Cadence and how that affects timelines
* Versioning, backwards compatibility
* 

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.jpg). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.jpg "image_tooltip")


What do we need changed in order for this feature to be successful on Mobile?



* Data/API updates

What Resources we have already found



* Questions we have from looking at existing resources

Our QA system/process



* Video demo

Proactive access to demo mode
