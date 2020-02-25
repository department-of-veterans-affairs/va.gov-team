
# RFC: Update Documentation Process

- Date: 2020/2/25

## Background
Our documentation is in a woeful state with three main issues - First our documentation is not easy for developers to update. A separate pull request needs to be made to a separate repo to update documentation, this leads our documentation to not get updated as often as we should be. Second our documentation is not well organized, this leads it to not be the first place folks look for help as it is a much more direct path to simply ask in a Slack channel for help. Third our documentation does not include troubleshooting steps for most items. Our documentation tells you how to set things up but it doesn't tell you anything you can do when things do work the way they are expected to, which is often. 


## Motivation
Our developers spend a lot of time researching issues with our codebase that could easily be documented in our own documentation. This is time that we are not able to spend in pursuit of our mission, helping provide value to Vets.

## Design
To solve these three issues we need a documentation process that is easy for developers to update, is much better organized, and includes troubleshooting steps for when things go wrong. To address these three issues we should -

1. To fix our documentation not being easy to update we should impliment a documentation engine, such as [JSDoc](https://jsdoc.app/), these documentation engines use comments in specific formatting inside our code to generate a documentation site. This means that engineers can write comments that document the code right along side the code itself. In order for this to work we will most likely need to also impliment standards and conventions for commenting, and thus documenting, our code.

2. To fix our documentation not being well organized we should enforce a plan to organize our documentation like a book, with a table of contents and chapters. This allows us to not only utilize a format that everyone understands but also makes it easy for us to organize documentation around specific topics, like onboarding or troubleshooting. This type of organization can be achieved with documentation engines mentioned above in #1.

3. To fix our documentation not having troubleshooting steps we should organize both our comments, and thus the documentation around a feature, and some chapters around troubleshooting steps for when things go wrong. These troubleshooting steps should be a requirement in the standards and conventions for commenting we impliment.



## Risks
There is a risk with implimenting a documentation engine that is owned and maintained by the developers that it could be an added burdern on developers. This risk should be minimal and taken as the same amount of risk that would come with any other dependency in our build system.

There is also a risk that if we do not use this new documentation process that it could become a documentation 'graveyard' like our current documentation is. We would need to adhere to actually using this new documentation to minimize this risk.

## Alternatives
We could stick with the current documentation process and organization we have, this worked in the past and could potentially work in the future if we took a long hard look at how we can patch the current process to work better in the areas outlined above.

We could create markdown files within our codebase, this is actually used here and there in our codebase already. These could potentially get very large and become very hard to organize so if we wanted to go this route I still reccomend we go with #2 and #3 on the list above.


