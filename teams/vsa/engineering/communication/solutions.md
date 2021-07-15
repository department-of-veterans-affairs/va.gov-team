# Background
Now that we have done initial research into the pain points surrounding communication between VSA and VSP we have developed a few potential solutions to address the pain points. This document details the potential solutions. Each solution will begin with the initial root cause, followed by a description of the pain point, then the insights that were provided by our research. Then the potential solution will be detailed.

## Root Cause - Lack of a clearly defined root problem

> There is not enough communication before a large initiative is undertaken where VSP defines a clear problem statement then involves VSA in the clarifying of that problem statement. This leads to solutions that solve a symptom of a problem, not the root problem itself. A perfect example of this is the expirimental design system,  which solves a symptom of a problem but not the root problem.`

**Insights**
- "VSP always seem to choose a nuclear option without explanation of what the problem they are trying to solve or why they chose this particular solution"


Solution
<hr>
An asyncronous document or a syncrounous meeting should be provided before a VSP project starts where VSP clearly presents the problem, not the solution, and then are able to ask VSA engineers questions about the nature of the problem. This will also be a time for VSA engineers to explore the problem and potential solutions before both VSP and VSA choose a potential solution together. This meeting or document should be collaberative workshop, not a presentation, that is provided in a very public forum and everyone has the ability to ask questions and provide input.


## Root Cause - Solutions from VSP are over-engineered

> Almost every technical solution that is provided by VSP is over-engineered and much more complex than needed. This leds to sloppy implimentations of solutions that are much more far reaching than they need to be.

**Insights**
- "VSP always seem to choose a nuclear option without explanation of what the problem they are trying to solve or why they chose this particular solution"
- "Many solutions seem to be knee-jerk reactions"

Solution
<hr>
VSA needs to build solutions based on an MVP approach and thus an asyncronous document or a syncrounous meeting should be provided once VSP is trying to determine the best solution for a root problem where VSA can help VSP to isolate the smallest possible MVP to solve a problem. VSA then needs to build that MVP and have measurable KPI's which are mapped in the MVP rollout to determine if the MVP solves the root problem. These KPIs should come from VSA, not VSP, since the engineers on VSA have a greater understanding of the nature of the problem.

## Root Cause - Lack of transparency

> There is not enough transparency around the current priorities of VSP. There is also no clear reason provided for the discrepancy between VSP and VSA priorities.

**Insights**
- "I think (The priority) is to keep the lights on but I don’t know other than that
- "It's pretty opaque"

Solution 
<hr>
VSP should give VSA access to it's Kanban board as well as produce a very, very simple document once per month where they simply list their priorities with a one line explanation of why that priority is where it is in the list.

## Root Cause - Lack of a coherent rollout plan

> VSA engineers are not consulted on the announcement or release  of a larger initiative. The current communication generally takes place over Slack and it is missed. This causes major time losses and a critical loss of trust in VSP.

**Insights**
- "Alert Boxes getting deprecated are a good example, instead of blocking people from merging have the linter show a warning until people get used to them being deprecated and then block them from being merged"
- "Typically VSP struggles with rolling things out, it would be better if they have phased rollouts instead of all at once"
- "when we use the solution it is just rolled out like 'here you go' and we can’t do anything about it and we get completely blocked"
- "it seems like their responsibility is to make siloed technology to throw over the fence to us for us to maintain"

Solution
<hr>
A meeting or document designated for VSA engineers to detail how a solution should be rolled out. A set of guidelines should also be created with guidelines for progressive rollouts on VSP projects. VSP projects must also be required to be progressively rolled out, just like any other software.



