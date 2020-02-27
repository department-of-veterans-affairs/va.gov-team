# Languages and Tech Stack

| | | | |
| --- | --- | --- | --- |
|**Last Decision Made:**|Yes| **Decision Date:** | 05/2016 |
|**Revisit Decision:**| Yes | **Revisit Date:** | 05/2017 |

**Revisit Criteria:** The technical choices that were made inhibit writing maintainable code in a timely fashion, and/or an inability to hire new developers because the tech stack is out-of-date or not mainstream enough.

**July 2017 Update:** The technical decisions in this document are working effectively for the team at this time. This should likely be revisited again in another year (5/2018) to see if this is still the case. 

## Summary

For building web applications, the team has made the following decision for building stuff:

- **Backend Language**: Ruby
- **Backend Web Framework**: Rails
- **Frontend / Component Library Framework**: React
- **Content Management**: Metal Smith

The below describes how we got to the decision. The nutshell of why ultimately feel to Ruby having a slight edge in the team already using it, vendor being hired to work in that stack, and maintaining a common stack across Appeals and Vets.gov.

## History

Prior to August 2015, USDS @ VA had a handful of application stacks in play across several applications:

- Connect VBMS: Ruby + Java
- Appeals Database: Python (Django Framework)
- Caseflow: Ruby (Rails Framework, running on JRuby) + Angular JS Framework
- Veteran Employment Center: Ruby (Rails Framework)
- eFolder Express: Python (Twisted Framework) + Connect VBMS (Ruby + Java)

For a team with less than 10 developers (including contractors), there was clearly tech stack sprawl. This made it hard for developers to move from project-to-project, requiring them to often learn one or more ecosystems each time.

To alleviate this, the DSVA team made the decision to standardize around a few things:

- **Language**: Ruby
- **Web Framework**: Rails
- **Single Page App Framework**: React
  - To be used only for high traffic pages, otherwise just use ERBs

The biggest reason for choosing the above was that the majority of our existing applications were in Ruby and that it seemed to be a prevalent stack within the civic tech community (i.e. 18F and civic tech organizations seemed to use it more than other languages).

**__NOTE: The remainder of this document is more vets.gov specific, when that side of the team was re-evaluating its stance on the decision above__**

When 2016 began, the vets.gov team began exploring how to build its platform. The platform included two key things:

- Make it easy to build forms via a re-usable component library
- Be able to provide a consistent API layer capable of communicating with internal systems (and provide an SLA consistent with industry web application)

The first point led us to building reusable components with React, and this hypothesis was tested in building HCA (Healthcare Application). This technology was settled on unanimously by developers involved that this is the approach we should continue to use.

However, it wasn't clear what to use to build the API parts of the vets.gov Platform. The team could either stick to building things in Ruby (possibly, but not necessarily, in the Rails Framework) or experiment with Node.js (a stack used for server-side Javascript that is known for good asynchronous I/O performance). The HCA team opted to experiment with Node.js to see if it reduced learning overhead (i.e. front and backend developers only needed to know Javascript), share build architecture (use webpack), improve performance (Node.js is reportedly hyper fast for building APIs in terms of performance), and be able to re-use JS code (example: validation code shared between the front and backend). While the experiment was given the "green light" to build the first version of the HCA backend in Node.js, the expectation was set that if we decided as a team to use Ruby, we would eventually have to port the second version into Ruby at a later point.

The experiment left us with the following results:

- It did not reduce learning overhead in our case. Frontend developers avoided involvement in the backend. Despite the shared language, frontend JS is not the same as backend JS, and conceptually different things happen at each tier.
- Builds did become similar between the front and the backend, both using Webpack. This simplifies knowledge around build systems (not needing to know both Webpack and Ruby Gems).
- The application will not experience high enough volumes such that performance gains by using Node.js over Ruby are noticeable.
- Isomorphic JS (JS used between both the front and the backend) did not provide noteworthy time/cost savings.

As a result of the experiment, it was not a "no brainer" that the team change its direction of building things in Ruby, but rather left the question open. It's clear that Node.js would be an equally good choice to Ruby, but not overwhelming such that it mandated a change in direction. Despite this, a decision wasn't clearly decided upon by the team's tech lead and the door to the decision remained open.

With the vets.gov contract getting signed, it became necessary to make a decision on the language ecosystem in order to hire contract staff. Large parts of the contract, being that they were written ahead of the Node.js experiment, requested Ruby/Rails developers and a contracting firm that is familiar with this ecosystem was selected. Simultaneously, two new vets.gov team members were hired for the Platform team that are experienced and knowledgeable with the Node.js ecosystem.

The contractor is leaning towards Ruby due to their organization being proficient in this ecosystem. The vets.gov Platform team members have similar reasoning for their experience with Node.js.

## Decision Meeting - May 10, 2016

The meeting included several folks:

- Jeff Maher (vets.gov Tech Lead)
- Albert Wong (vets.gov HCA and Platform Teams)
- Alex Ose (vets.gov Platform Team Lead)
- Robbie Holmes (vets.gov Platform Team)
- Greg Gershman (Ad Hoc Co-Lead)
- Paul Smith (Ad Hoc Co-Lead)

The team settled on the following criteria for making a decision:

- Good for APIs
- Good performance for I/O
- Ecosystem is stable and active
- Operational complexity for DevOps is low
- Maintainable
- Can we afford to retrain folks?

The discussion bounced around across several topics, but addressed our criteria in the following ways:

- **Good for APIs**: Both can easily be utilized to build APIs.
- **Good performance for I/O**: Node.js is slightly faster in terms of runtime performance, but speed benefits negligible for our use case.
- **Ecosystem is stable and active**: Both ecosystems are active, with ample documentation, libraries, and build systems. Problems that impact one ecosystem, impact the other. Node.js's ecosystem moves more rapidly, making it slightly less stable, but this concern is alleviated due to LTS releases.
- **Operational complexity for DevOps is low**: Same for both languages.
- **Maintainable**: Both inherently have the same maintainability levels
- **Can we afford to retrain folks?**: If we chose Node.js, Ad Hoc would have to change its hiring criteria and might make folks that have received offers no longer eligible. If we chose Ruby, Alex Ose and Robbie Holmes on the Platform team would have to adjust to using Ruby.

Based on our criteria, the team essentially winds up back at a crossroads, with one language not being the obvious choice over the other.

## Other Factors

With the stacks being equal, what are reasons to choose one language over the other? What will get us to functioning products the quickest over the next six months?

### Why Ruby?

- Team has existing applications in this stack already
- We've already figured out tools needed to comply with VA processes (security compliance, 508 accessibility, unit testing)
- Maintains parity with the Appeals team's tech stack (Makes ATO paperwork similar, and team members can transition teams easily)
- Ad Hoc can use existing hires to send to vets.gov team

### Why Node.js

- Alex Ose and Robbie Holmes are already onboard and can start building the Platform in a stack they are familiar with
  - USDS's hiring process hones in on polyglot developers that are able to learn new things, so this might be a non-point
- According to the Stack Overflow Annual Developer Survey, this ecosystem has already gained a popularity that has surpassed Ruby (might be easier to hire folks)

### Content Management Decision

The initial decision around tech stack include [Jekyll](https://jekyllrb.com/) for content management. However, when the decision was made to combine all frontend React applications into a [single repo](https://github.com/department-of-veterans-affairs/vets-website), it made sense to move to a content management system driven by Node.js. The content management system chosen is [Metal Smith](http://www.metalsmith.io/).  The driving factor was to simplify and streamline our build process for the vets-website content and dynamic front-end components to a single process. We were using [Webpack](https://webpack.js.org/) for to bundle and transpile our [React.js](https://facebook.github.io/react/) components into code that could be consumed by web browsers, and the content was in Jekyll and required Ruby, and a seperate build process.  By moving to Metalsmith we were able to align our build process to one language, and because the build script for the content was just Node.js we could call Webpack from within that script.

## The Decision

For building web applications, the team has made the following decision for building stuff:

- **Backend Language**: Ruby
- **Backend Web Framework**: Undefined (Rails is preferred, but other frameworks acceptable too based on use cases)
- **Frontend / Component Library Framework**: React
- **Content Management**: Metal Smith

In the short term, standardizing on these languages and frameworks enables our small team to have a consistent tech stack to learn and hire against. In the long term, we'll aim to utilize API-driven development (i.e. REST/JSON) such that it is easy for the future version of our team to pivot to newer technologies as becomes needed.
