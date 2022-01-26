# ADR001 - Adoption of Architectural Decision Records

### Status
Adopted

### Decider(s)
* Travis Newby
* Leanna Miller

### Context
As we transition VA's flagship mobile app from a small, scrappy MVP to a more mature, long-lived product, 
it's increasingly important to document significant architectural decisions in a way that we – or those 
that come after us – can study and reference those decisions. Having decisions in an easy to find place 
helps us understand the context under which they were made, the analysis that took place to reach those 
decisions, and the motivations of those making the decisions at the point in which they were made. In 
other words, it's useful to have these things around in a place we can find them.

### Decision
We will use Architectural Decision Records (ADRs) to capture our _major_ architectural and engineering
design decisions. These decisions will be documented based on a standard template and stored in GitHub.
We will revisit our decisions when necessary.

### Consequences
There are a few consequences, both positive and negative.

Positive
* We'll be able to get information out of the heads of individuals and into the realm of shared knowledge
* Writing down decisions will help clarify our thoughts
* Shared documentation will make sure we're all on the same page in terms of understanding the context 
and the decision
* We'll be able to remember the alternatives we considered and revist them when and if appropriate
* Folks onboarding to the project – and our future selves – will be able to go to one place to understand
many of the critical engineering decisions

Negative
* Writing down decisions will take extra time
* We'll be exposing our decisions to scrutiny
* Some documentation-averse team members may push back

### Options Considered
There were multiple options considered:

0. Adopt ADRs. 

1. *Don't bother documenting significant decisions* – Some people view any documentation as against agile 
principles. But the benefits of lightweight documentationoften outweighs the negatives often cited by 
anti-documentation folks.

2. *Use Significant Decisions for both engineering and product* – We have a way to document decisions 
now. However, architectural and engineering decisions are different from product-level decisions. So it's
important – in our estimation – to keep them separate.

3. *Use a heavier-weight framework for documenting decisions* – There are many, but heavier weight frameworks
have less of a chance of being followed. Larger documents often go stale. We want something lightweight
and easy to use.

4. *Put decisions in the code as comments* – We wanted to expose these decisions to a wider audience, so code
isn't an option. It also goes against established coding patterns.
