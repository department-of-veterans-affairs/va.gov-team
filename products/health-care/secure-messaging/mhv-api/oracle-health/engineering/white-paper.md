# VA SM Plan

Target: Create a path forward to ship something this year and build out long term solution for VA SM 

## Situation

We are using a MHV first solution to trying to solve integration with OH

### Integration with OH data

OH is 

- a different data structured, less feature full messaging platform
- rumored to have performance and reliability issues
- A black box that is really hard to work with

Core idea is currently a MHV first and that we should be shoving OH data into MHV

### What we gain

- Leverage existing infrastructure. Even though its good/bad/ugly, it still mostly works
- By in from leadership

## Complication

After implementing a prototype we are uncovering a bunch of risks and warning flags

Ideally, MHV knows nothing about OH, but as we are digging into the problem, we are slowly becoming more tightly coupled with OH. 

Why this is bad: When looking at this on a `years` level, its going to be hard to maintain. 

### More specific problems/risks

> In no specific order

- Big Data synchronization is going to be a Problem,  
  - The ATOM *only* does new message, not deleted or any other status updates  (such as if the message is read or deleted)
- two sources of truth (SoT) for information
  - Veterans message SoT is MHV, a Clinicians SoT is OH
- MHV has 2 decades of technical debt
  - including performance issues, downtown, sub-par monitoring, and slow release and planning cycles
- MHV is knowing a bunch about OH and becoming tightly coupled


## Solution

> We create a system that is the source of truth for all messaging data and treat MHV and OH as message providers

### VA Messaging System (VAMS) 

-> Insert new diagram

The VAMS becomes the SoT for all things. Messages, meta-data (such as status, folders, tags, threading) is stored here and we provide interfaces that client systems (such as OH and MHV) can send messages

Messaging system agonistic

could also be used to provide APIs solve Pooling problems (such who can a Veteran message, and naming)

### Noted Constraints

- Unified Experience is a must, the Veteran **must** not know about what EHR they are using
- Ship something to production by End of Summer 2024

###  What we gain

> In no specific order


- OCTO has more control over the full stack and UX
- ability to not be contrained to MHV for messaging features and iterations
- Modern tech stacks

### Known Risks

> In no specific order

- Building something greenfield is a Big Non-trivial risk
   - Are *just* rebuilding MHV without the current MHV baggage? 
- The political/contracting landscape might make this a hard sell
- Again, new thing === big risk. 

## How we get there

> Iteration is key

We need to solve the integration problem first with the MHV team. This will let us do some work around API development and getting into OH to solve these problems 

For Oct 24, we help MHV build out the current plan, with the accepted risks and constraints. This will help solve the integration problems with OH. And its built in such a way that we can pivot to the. 

Once we  we hit an MVP of 

- Sending a messaging to OH from MHV
- Sending a messaging to MHV from OH

using the current design, we can start to potentially iterate towards this new solution. 

This round trip MVP will allow to solve/mitigate/learn some of the integration problems

If things aren't working (we don't think they will) We start to pivot to this new architecture

#### Just to say it out loud

There is a world in which the existing MHV SM API iterates into SMExI and that might be the long term play :shruggie:

### Concrete next steps

- Get buy in from leadership that SMExI is a good long term solution
  - Id risks with the current 
- Finish the Toy Prototype and that to the MHV team and walk through what we learned
- Work with the the MHV team on next PI of tasks
- OCTO engineers could be prototyping what this looks like while the MHV team works on the current implementation

