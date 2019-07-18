## Development team onboarding meeting 

Date: 07/18/2019, 1:30 p.m. ET

Moderator: Bill John Tran

Notetaker: Layla Soileau

### Introductions
(Who are you? Name, role, if you couldn't be a dev, what would you be?)

* Kenneth E. (aka Elwood), Sr. Developer
* Michael T., Developer
* Brittany C., Web Developer
* Dorothy B., Team Support (Scrum master)
* Dan H., Java developer - backend web services
* Clarice, PIF under CTO
* Bill S.
      
### General presentation notes
* Double-check for typos
* Difficult to gauge if attendees are engaged when cameras are off. Encourage cameras to be on, find out what blockers there are (technical limitations, discomfort?)
* Set expectations on how to ask questions - come off mute, it's okay to interrupt, or whether they should wait until the end.

#### Questions
Brittany: What are you using for FE testing?

Bill: Mocha Chai with Enzyme for React components. Nightwatch for end-to-end testing. Axe Core for accessibilty.

### Wrap up
Bill sends survey link.

Bill S: Just chiming in to remind everyone that it's tempting to be nice in giving this feedback but I imagine it will be more useful to the DS team if we are honest... I think they have a thick skin, so give your honest feedback.

### Questions

Michael T.: Enviroment flags -- are those used when you have a work in progress?

Bill: Normally when you're working on a FE feature, we have a feature flag mechanism so that it doesn't get into production until it needs to. We used those to make sure Vets don't get that feature until it's good.

Michael T.: I need to come up to speed on how you're doing a pull request. If it's in progress it could be breaking things.

Bill: The work in progress is really for visibility. We'll be working on a feature that's taking longer than we thought it would and we want to engage with other developers to it. I'll create a PR and assign some developers to look at it while it's in progress. It's a way to get help and for other developers to see it and make sure you're working in the right approach.

---

Dan H.: I'm not familiar with VA.gov. I worked with a team awhile ago and they used a CMS. Do y'all have a CMS to publish content.

Bill: On the FE, we have a static generator. At first we were using it as a CMS and writing markdown. Now, we're integrating with a CMS system and moving markdown pages into that. It goes into the pipeline with the static generator and published there.

Dan H.: Is it Drupal?

Bill: Yes. It's Drupal. It's still a work in process. The system is integrated and we're working to move it over. We use it like an API. 

---

Bill: Question for the By Light team. I want to find out more about what you use for development. Do you use government computers?

Team: Yes. They are Windows machines.

Bill: Is there a way to get a virtual machine?

Team: We use Vagrant.

Bill: This is new to us. We all use our personal computers. 

Team: Extensions in Chrome are locked down and turned off. Trying to get some of this stuff to work. 

By Light gives us a computer as well.

Some of this stuff is impossible on a GIC.

Bill: We've all used company provided computers because of that limitation. That may be an option for y'all to use. Our stuff is open source. I don't use my computer issued by the government because of that. I kept having to go back to the VA to get stuff set up. Working on your company computer might be the way to go.

Are your company computers Windows also?

Team: Yes.

Bill: I'm working on Linux and working on documentation. 

Team: Bill, you want to send them some Macs?

Bill S.: Ad Hoc and other DS team do development on Mac environments. I'm on it, Elwood.
