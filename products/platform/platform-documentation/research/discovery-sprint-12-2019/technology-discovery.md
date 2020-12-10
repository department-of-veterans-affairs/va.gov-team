## Team Recommendation: Algolia + Custom Landing Page

---

### Background
*Why did we decide to start researching the tools that we did? (like what we learned from Gatsby owner and 18F people about tooling options)*
- When one of the authors of our Gatsby implementation was asked what he would do differently, he said he would go with an off the shelf solution because it would be supported by the company that offers the service; not an internal engineer(s). A custom solution requires maintenance, is at risk of not being prioritized above other work, and requires an engineer to publish changes.
- Recommendations from peers
- Recommendations from conference talk/slides

*What were we initially looking for in those features when we started researching?*
- Search
- Single Source of Truth
- Link to edit page
- Syncs with GitHub
- History
- Content type/label
- Table of contents/navigation
- Ability to favorite a page
- Ability to comment/ask questions
- Publicly accessible (don't always need to login)
- Insights
- Is accessible on VA Network

*What did we learn that helped us further narrow our research?*
- Multi-repo search was a deal-breaker.
- File history was a deal-breaker
- Navigation/Table of Contents is a deal-breaker
- Most, but not all, of survey respondents are comfortable using Markdown
- Our recommendation should not hinge on price, and/or accessibility on the VA network. While that may factor in the decision, that is not our decision to make. 

---

# Technical Discovery Notes

## Bill's Initial Recommendation: [Slab](https://slab.com/)

**TLDR**: The author of our existing custom solution said he would go with an off the shelf solution, Slab seems to addresses all of our pain points out of the box, and Slab's core competency is building documentation software, whereas building documentation software is not one of our core competencies. 

**Justification of Slab's high price tag**: Dev time is expensive, and can quickly match/exceed Slab's price.

**Reason for not choosing GitBook**: If GitBook supported multi-repo search, I'd recommend GitBook. 

**Reason for not choosing updating/building custom solution**: Any custom solution will be subject to opportunity cost and/or maintence risk. 

**Potential Experiment**: Slab has a [14-day free trial](https://slab.com/pricing/). 
>**Can I try Slab for free?**
>
>Yes! Slab is free to try for 14 days. We think you'll love it. We will only ask for payment details once your trial is over.

Context: 
* When asked ["If you had the chance to create that ecosystem again, what would you do differently?"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/documentation-site/research/discovery-sprint-12-2019/interview-notes.md#if-you-had-the-chance-to-create-that-ecosystem-again-what-would-you-do-differently-1) the author of our current Gatsby site said they would choose a 3rd party option. 
* >once we had to move on to higher proprieties there's no one to fix it…if its 3rd party you have a whole company that can fix it…after the infrastructure was done, dev was moved off to work on other things and now it’s a prioritization exercise
* >its not only the upkeep, it’s the type of resource…it’s a developer needed not a non-technical person

Methodology: After looking at all of the potential features we'd like to have, I chose to take a depth-first approach to validate what features a 3rd party option (GitBook) has, and attempt to test out how well those features work. - BF

## Options
### GitHub
 * Pros
   * Tracks and displays who made the last edit, and when
   * Hsa search across multiple repos
   * Has link to edit file
   * Has link to file history
   * Is accessible without logging in (if repo is public)
   * Is accessible on VA network
 * Cons
   * Doesn't track who the content owner is
   * Doesn't display last reviewed at (because files don't need to be reviewed to be created/edited)
   * Doesn't directly track content type/label
   * Doesn't have filtered/advanced search
   * Doesn't have home page with content from all repos
   * Doesn't have sufficient navigation
   * Doesn't have submit WYSIWYG
   * Doesn't have submit question/feedback
   * Doesn't have complex insights
   * Doesn't integrate with Google Analytics

### [GitHub Pages](https://pages.github.com/)
 * Pros
   * COMING SOON
 * Cons
   * COMING SOON
   
### [Slab](http://slab.com/)
 * Pros
   * Search multiple repos
   * Homepage
   * Pulls `.md` files from GitHub, and creates posts for those files
   * Shows who made last change and when
   * Has content type/label
   * Has search with filters
   * Has home page with content from multiple repos
   * Has navigation
   * Has Link to Edit Page
   * Has Post history
   * Has comments/questions
   * Has publicly shareable post links
   * Has some insights
   * Is accessible on VA Network
 * Cons
   * Price (~$24k per year for 300 people)
   * Doesn't integrate with Google Analytics

### [GitBook](https://www.gitbook.com/)
 * Pros
   * Collaborate asynchronously with your team comment and review drafts before publishing.
   * Share your knowledge publicly or privately with anyone or use a secret link to allow non-GitBook users to access your private content.
   * Enjoy a living documentation thanks to an elegant WYSIWYG* editor, where you have both rich-content and rich-text.
   * Add value to your documentation by customizing your space to match your branding.
   * GitBook has multi-file drag and drop uploads. I tested with `.pdf`, `.jpg`, `.gif`.
   * GitBook shows who made the last edit, and when.
   * I'm using an unauthenticated private window in another browser, and I can view my GitBook without logging in.
   * GitBook is free for open-source & non-profit teams
   * Search visually distinguishes between page names and page contents
   * Rich Embeds: Embed external web content: videos, code snippets and more
   * GitHub Sync: Keep your workflow and sync your docs with GitHub.
   * You can use the `/gitbook [search query]` command in Slack to search for a specific term in your documentation.
   * You can use Google Analytics to track your project's traffic and page views!
   * A bi-directional GitHub integration. The integration with GitHub is very easy to use: if you change your content on GitBook, your edits are pushed to a GitHub repository. Conversely, commits pushed to a GitHub repository are imported.
   * Has repo-level navigation on the left
   * Has file level navigation (table of contents/sections) on the right
   * Has a Edit this File button
   * Has page ratings for all users, including unauthenticated users
   * Has comments from writers
   * Has WYSIWYG/Drag and Drop file upload
   * Has file changelog (because GitHub) has file changelog
 * Cons
   * Not currently accessible on VA network
   * There are repo-level books, but there doesn't seem to be organizational level books (no search across multiple repos)
   * Doesn't track content owner (because GitHub doesn't track content owner)
   * Doesn't display last reviewed at (because GitHub doesn't require files to be reviewed to be created/edited)
   * Doesn't have content type labels
   * Doesn't have advanced search AKA search with filters
   * Doesn't have an organization home page with content from all repos
   * Doesn't have a submit feedback feature
   * Doesn't display edits over time/edits per page/etc insights

 * References
   * https://docs.gitbook.com/#with-gitbook-you-can
   * https://www.gitbook.com/pricing
   * https://docs.gitbook.com/integrations/slack
   * https://docs.gitbook.com/integrations/google-analytics
   * https://docs.gitbook.com/integrations/github

### [Algolia](https://www.algolia.com/)
 * Pros
   * Does search really well
   * Autocomplete 
   * Has "building blocks" for creating a search users expect
   * Drowpdown menues in search that "know you"
   * Dashboard and analytics to help you fine tune algolia
   * Allows you to integrate your own analytics tools
   * Typo tolerant
   * Scalable
   * DocSearch - Will crawl and index existing documentation and has library to handle search
   * TalkSearch - Will index videos and video content to make searchable. Will link users to moment in video referenced.
   * Configureable search attributes
   * Configurable custom rankings
 * Cons
   * COMING SOON

### Conflence
 * Pros
   * COMING SOON
 * Cons
   * COMING SOON

### Gatsby (current implementation)
 * Pros
   * COMING SOON
 * Cons
   * COMING SOON

### Gatsby (new implementation)
 * Pros
   * COMING SOON
 * Cons
   * COMING SOON

___

## Potential Features
* Edit this page
* Ask a question
* Submit a bug
* Documentation added to ticket's definition of done, and/or PR template
* FAQ Slackbot
* Current/stale message
* Contributor Badges
* Global search
* Insights Dashboard (page views, edits per page, pages that haven't been changed in a long time)
* Richly linked
* Links to insights
* Advanced Search
* Point of Contact
* Send Feedback
* Confluence-esque watching/favoriting
* Rich text in content
* Metadata (last updated date, last reviewed at, timestamps, source, edit link, bug link, etc)
* Related pages
* Simple Source (lives in repo)
* Version switcher
* How vs Why Docs
* Expiration Date
* Simple Getting Started section
* Feedback loops
* Table of Contents
* Navigation
* WYSIWYG
* History/Changelog
* Chat Bubble/Intercom
