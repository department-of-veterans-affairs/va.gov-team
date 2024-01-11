# [Deprecated] VA SM Plan


[Check out the latest iteration](./planning/README.md)


===== Old version
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
   - Are we *just* rebuilding MHV without the current MHV baggage? 
- The political/contracting landscape might make this a hard sell
- Again, new thing === big risk. 

## How we get there

> Iteration is key

We need to solve the integration problem first with the MHV team. This will let us do some work around API development and getting into OH to solve these problems 

For Oct 24, we help MHV build out the current plan, with the accepted risks and constraints. This will help solve the integration problems with OH. And its built in such a way that we can pivot to the new thing. 

Once we hit an MVP of 

- Sending a messaging to OH from MHV
- Sending a messaging to MHV from OH

using the current design, we can start to potentially iterate towards this new solution. 

This round trip MVP will allow to solve/mitigate/learn some of the integration problems

If things aren't working (we don't think they will) We start to pivot to this new architecture

#### Just to say it out loud

There is a world in which the existing MHV SM API iterates into SMExI and that might be the long term play :shruggie:

### Concrete next steps

- Get buy in from leadership that SMExI is a good long term solution
  - ID risks with the current solution
- Finish the Toy Prototype and show that to the MHV team and walk through what we learned
- Work with the the MHV team on next PI of tasks
- OCTO engineers could be prototyping what this looks like while the MHV team works on the current implementation

