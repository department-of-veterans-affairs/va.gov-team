# How we use Github and Zenhub

## Table of contents 

 1. [Github Issue labels](#labels)
 1. [Github Milestones](#milestones)  
 1. [Zenhub practice](#zenhub)
 1. [Backlog refinement](#backlog)
 1. [Defect triage](#defect-triage)

<a name="labels">

## Issue labels 

We have about [50 pre-defined labels](https://github.com/department-of-veterans-affairs/va.gov-cms/labels) in the va.gov-cms repo, which should help us to:

* Groom backlog, prioritize epics and stories, and triage bugs by theme.
* Track progress towards objectives (eg how many enhancements delivered). 
* Develop and leadership and ownership over our various workstreams products, subsystems, and practice areas. 
* Encourage cross-disciplinary epics
* Help users of CMS managed products, and product design teams, collaborate on our backlog. 
* Align with certain practices already in use on VSP and VFS teams. 
* Discern bot-driven issues (dependabot, primarily) from human issues.

![VA.gov CMS team github labels](vagov-cms-team-github-labels.png)


**Issue type (red):** Issue type is the first label that's added, and typically it's added automatically by which [issue template you choose](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/new/choose). (Each of these issues types have an [associated issue template](https://github.com/department-of-veterans-affairs/va.gov-cms/tree/master/.github/ISSUE_TEMPLATE)). 

* Epics contain enhancements or tasks. 
* Enhancements issues may "contain" tasks.
* Defects issues stand alone.
* "CMS discovery request" and "Support or training request" will typically be created by members other product teams. 

**Issue status (light blue):** These labels (groomed or not groomed) will help us prepare for grooming. 

**CMS program objectives (orange):** These labels will help us track progress towards our [program objectives](https://va-gov.atlassian.net/wiki/spaces/VAGOV/pages/96698383/Product+CMS). 

**CMS team practice area (green):** This should help us to encourage cross-disciplinary planning and ownership.

**CMS subsystem (blue):** This helps us to find related work and dependencies.

**CMS managed products (black)** These help us prioritize and plan support for product teams, and find related work and dependencies.

**Teams we work with (yellow):** These labels help other teams find CMS-related specific to their team. 

<a name="milestones">

 ## Github Milestones

Each issue can be tagged with a milestone. We leverage milestones to track which sprint an issue is associated with (e.g. CMS Sprint 42 - Platform Team). It is the responsibility of the delivery manager will ensure to ensure completed work has associated milestones. 

<a name="milestones">

## Code Review Process

The code review process in Github is stored on the [va.gov-cms repostory](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/master/READMES/code-review.md).


---- Everything below this is still in draft ----

## Zenhub

 <a name="backlog">

## Backlog management

### Refinement sessions

- Every other Monday at 3:30pm: Helpdesk and support backlog refinement 
- Every other Tuesday at 1:30pm ET: Devops refinement 
- Every other Wednesday at 2pm ET: Design pod refinement
- Every other Friday at 12:30pm: Cross-disciplinary refinement. The agenda will usually be a few epics, and participation may depend on what epics we’re refining. 

It is the responsibility of the product manager to facilitate these activities.

<a name="backlog">

### Defect triage

Critical defects are defined as something that prevents users from accomplishing their work in the CMS, without a known workaround. These will be labeled as "critical defect" and prioritized immediately with the goal of resolving within 2 business days.

Non-critical defects will be triaged and prioritized against the current backlog of issues with the collbaoration of the stakeholder(s) affected and the VFS-CMS DEPO PO.

On a weekly basis 
