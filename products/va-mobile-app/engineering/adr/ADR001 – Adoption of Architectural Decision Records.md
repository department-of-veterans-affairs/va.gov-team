# ADR001 - Adoption of Architectural Decision Records

### Status
Adopted

### Decider(s)
* Travis Newby
* Leanna Miller

### Context
As we transition VA's flagship mobile app from a small, scrappy MVP to a more mature, long-lived product, 
it's increasingly important to document significant architectural decisions in a way that we – or those 
that come after us – can study and reference those decisions. Having documented decisions can help us 
understand...

* the context in which previous decisions were made,
* the consequences of those decisions,
* the analysis that took place to reach those decisions, and 
* the motivations of those making the decisions at the point in which they were made. 
 
In other words, writing down our decisions is a lot better than keeping them in the heads of a few people
for a lot of pretty obvious reasons. The only real question is how.

### Decision
We will use Architectural Decision Records (ADRs) to capture our _major_ architectural and engineering
design decisions. These decisions will be documented based on a standard template and stored in GitHub.
We will revisit our decisions when appropriate, and remove or replace them when necessary.

### Consequences
There are a few consequences, both positive and negative.

Positive
* We'll be able to get critical project information out of the heads of individuals and into the realm of shared knowledge
* Writing down decisions will help us clarify our thoughts
* Shared documentation will make sure we're all on the same page in terms of understanding the context 
and the decision
* We'll have a record of the alternatives we considered, and be able revisit them when and if appropriate
* Folks onboarding to the project – and our future selves – will be able to go to one place to understand
the project's most critical engineering decisions

Negative
* Writing down decisions will take extra time
* We'll be exposing our decisions to scrutiny
* Some documentation-averse team members may push back

### Options Considered
There were multiple options considered:

0. Adopt ADRs. 

1. *Don't bother documenting significant decisions* – Some people view any documentation as going 
against agile principles. But the benefits of lightweight documentation often outweigh the negatives 
cited by anti-documentation folks.

2. *Use Significant Decisions for both engineering and product* – We have a way to document decisions 
now. However, architectural and engineering decisions are different from product-level decisions; there are
different motivations and the information captured can differ. So it's important – in our estimation 
– to keep those decisions separate. We do acknowledge that there is sometimes overlap between engineering
decisions and product decisions, and recognize that the team must use their best judgement about where to
place those decisions.

3. *Use a heavier-weight framework for documenting decisions* – There are many heavier weight frameworks
(such as design docs) that project often use to document critical design decisions. However, heavier weight 
frameworks have less of a chance of being read or updated. Larger documents often go stale. We want a system
that is lightweight and easy to use, in the hope that if those things are true it will be followed.

4. *Put decisions in the code as comments* – We wanted to expose these decisions to a wider audience, so code
isn't an option. It also goes against established coding patterns.
