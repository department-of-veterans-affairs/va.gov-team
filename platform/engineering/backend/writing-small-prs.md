----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Writing-Small-PRs.1885798516.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Tips for creating small pull requests

Code reviews are an integral part of developing high quality software in an agile process. But it can be nearly impossible to review a pull request with thousands of lines of changes. On VA.gov, we try to limit pull requests to 400-500 lines, because that's roughly the upper limit of what a reviewer can effectively review in an hour. That can be difficult on its own, but our development process also requires that any code that is merged works in production or is hidden behind a flag. So, we've put together some tips on how to get your PRs down to a reviewable size.

## Take time to break down tasks up front

You're probably already working on a project that has work broken into separate user stories or tickets, but you can often break them down further once you start diving into the technical details.

For example, maybe you have a ticket to write a new page on your application. One ticket for a single page might seem like a reasonable breakdown of work, but as you start investigating you might find that there are components on the page that are more complex than others. So you might be able to take a ticket for one new page and break it down like:

1. Create scaffolding for the new page
2. Implement component X on the new page
3. Implement component Y and Z on the new page

This is similar to what we do when we build a new form on VA.gov, for example. Once we get a mockup of the form from designers, we have a standard set of tickets that are created:

1. Create empty form config and scaffolding
2. Build intro page
3. Build page 1
4. Build page 2
5. Build page 3 (etc)
6. Connect form submission to API
7. Build confirmation page

Then, for each of the tickets for building a new page, developers look for ones that have particularly complex fields or new types of fields and break those into separate tickets.

Similarly, when you have some refactoring you're attempting to do, you can often make small, incremental changes instead of one big application wide change.

## Always be looking for ways to break up work more

The above guidance is all well and good, but you still may get into working on a ticket and have it unexpectedly explode in complexity. As painful as it can be, continually looking for ways to break down the changes into pieces that can be done later while you're writing code can be useful. Just because you've picked up a single ticket to work on doesn't mean it has to come through in a single PR. One way to make this easier is to create another branch off your feature branch and create a PR for that branch, using your original feature branch as the base, instead of main. This will let people review smaller chunks of your PR without you having to merge code into production, since you can just merge back into your feature branch.

## Separate refactoring from feature changes

One other useful tip is to try to keep refactoring changes separate from feature or bug fixes. It's easy for a PR to grow in size when in addition to fixing a bug you decide to refactor the component as well.

## Stay focused on completing the tasks in your ticket

Similar to the above tip, focusing on addressing only the issues in one ticket can be a helpful rule to follow. Sometimes code reviews can feel like a checkpoint that takes time away from coding and you might be tempted to build up several changes and get them into a single PR. This often results in a code review that's convenient for the PR author, but harder on reviewers who have to follow multiple changes and their justifications to understand a PR.

## Provide extra support to reviewers when a small PR isn't possible

Sometimes you just won't be able to get your changes down to 400 or 500 lines. When that happens, you should do your best to provide extra support to reviewers, as well as accounting for the increase in turnaround time that a large PR will need. Some things to think about doing:

- Make comments in the PR pointing to particular important changes that need reviews
- Offer to talk through changes on a video call, so reviewers can ask questions quickly
- Write more in depth descriptions of the changes and point out repetative changes that a reviewer can skim
