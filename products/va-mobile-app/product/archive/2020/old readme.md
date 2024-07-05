"If VA were a company, it would have a flagship mobile app." - Charles Worthington

As of the beginning of 2018, that's not the case. As of the beginning of 2020, that's still not the case.

This folder is a conglomeration of documents about a VA mobile app, and our 2020 reinvestigation on "project hummingbird"

---

## Background
Our 2020 reinvestigation started with a four-week [discovery sprint](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/discovery-sprint) to explore whether Veterans desire an app and if it would be technically feasible for VA to build one. The outcome of the sprint was a hypothesis that we are continuing to validate through [ux-research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/ux-research-overview.md), [tech-research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/tech-research) as well as [quant-analysis](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/reporting/initial-quant-analysis/README.md).

In addition to our research, students from Harvard Kennedy School (HKS) did their own exploration, which included a landscape survey, interviews, prototyping and final recommendations. Their extensive research materials can be found in the [HKS-research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/HKS-research) folder. 

## Guiding Questions
Our research derives from three guiding questions:
1. What features should a VA mobile app include?
2. How should a VA mobile app be built?
3. Why should VA build a mobile app?

## Hypothesis
In our discovery sprint, we conducted research to try and answer those guiding questions and ultimately, developed a hypothesis:

*An authenticated app built on React Native provides more value to Veterans than mobile VA.gov*

## Bets
Within the hypothesis are a series of bets that we are making about what, why and how VA could build a mobile app. 


| Guiding Question  | Bets|
| ------------- | ------------- |
| What features should a VA mobile app include?  | Authenticated features are more valuable to Veterans than unauthenticated features  |
| How should a VA mobile app be built?  | (1) React Native provides the best balance between organizational viability and technical feasibility (2) Login can be accomplished by enabling the VA.gov-centric part of vets-api to accept OAuth (3) Versioning the existing vets-api is the most sustainable strategy to ensure reuse by mobile clients|
| Why should VA build a mobile app?  | A Mobile App provides more value to Veterans than mobile web VA.gov  |

NOTE: Our bets evolve as we learn from our research. What is documented here are the bets that came out of the discovery sprint.

## Activites and Output
To validate or invalidate these bets, we are conducting both UX and technical research. While the UX research aims to answer the *what* and *why* guiding questions, the technical research is focused on the *how* question. Each track of research has a set of activites to test the bets and corresponding outputs that will communicate the findings. 

## Outcome
Using these findings we will determine whether the bet was right and if not, use what we learned to pivot. The goal is to conduct these activites in a way that gets us closer to answering our guiding questions and determining if 2020 is the year VA builds an app!
