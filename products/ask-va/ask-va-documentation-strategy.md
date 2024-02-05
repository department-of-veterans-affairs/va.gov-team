# Ask VA documentation strategy
Last updated by @beckyphung on 12/11/2023 

This strategy offers guidelines, not hard-and-fast rules, on where Ask VA integration team documentation lives. We aim to align internally on when and where to work and store documents. 
Our goal is to work in the open as much as possible to foster knowledge transfer across VA, OCTO, and the public. 
We also recognize there will be situations where it won’t be appropriate to share sensitive information ([outlined in the VA platform guidelines](https://depo-platform-documentation.scrollhelp.site/developer-docs/sensitive-documentation-guidance)).

Our plan to test this strategy: 
- October 2023 - Meet as a team and make adjustments as needed
- October to December 2023 - Moving forward, the team starts following the strategy
  - Create tickets for Engineering, Design, and Product to review current documentation and move files around as needed
- January 2024 - Meet as a team during Jan 9 retro on first three months of using the strategy
<br>

We’ll follow this strategy by: 
- Referring to this document if we’re unsure of where a document should go
- Asking questions in one of our Ask VA Slack channels if we’re unsure of where a document should go
- Moving documents if you see something’s in the wrong place and notifying the file owner
  - Especially if the document has sensitive information ([outlined in the VA platform guidelines](https://depo-platform-documentation.scrollhelp.site/developer-docs/sensitive-documentation-guidance))
<br>

Before creating any file, ask yourself: 
- Does this need frequent collaboration with:
  - Internally (just the Integration team)? 
  - The CRM and/or Infrastructure team? 
  - VA staff outside of OCTO?
- Do I need to move this file to another place after it’s “done”?
- When is my file “done”?
<br>

Here are some document clean-up examples by the team:
- Engineering: 
  - Move to GitHub: [VA Profile Spike](https://docs.google.com/document/d/1b3wGzMXjk3XrWHAS5bnKg9T2-syh1e1X/edit) This document is mostly done and needs minimal collaboration/editing in the future. Added [Moved] to the title. Add a link to the new document in the body of the doc.
  - Keep in Google: [AVA CRM Kick-Off Session Planning](https://docs.google.com/document/d/1PPRaGpaPrmRLDnrE069OyoymAvjhwpULM0Ai-co4k0A/edit#heading=h.hi8e1lkv568e) This document contains general notes and isn’t updated anymore.
- Design: 
  - Move to GitHub: [Medallia surveys](https://docs.google.com/document/d/1obesi4mtVzXclviFWoIthaxZ-xw0PAmV8FznBlAXMgI/edit#heading=h.whd3wlz79wnb): This document is mostly done and needs minimal collaboration/editing in the future. Added [Moved] to the title. Add a link to the new document in the body of the doc.
  - Keep in Google: [Category, topic and subtopic proposed names](https://docs.google.com/spreadsheets/d/1aCei8pmLBBkWPeDye4YSmUqRkD0yCfTeLEqwdL-329M/edit#gid=0) This document needs frequent updates.
- Product: 
  - Move to GitHub: [KPIs](https://docs.google.com/document/d/1ZPY_v-sEnRm3eY7DVcmjmPW8CnEY_KQmrmOFBv3cDOs/edit) This document is mostly done and needs minimal collaboration/editing in the future. Added [Moved] to the title. Add a link to the new document in the body of the doc.
  - Keep in Google: [[Profile Discovery] See profile details on VA.gov](https://docs.google.com/document/d/1J6pEbWgJR6O7owkQWD51GxNNcVE-caedPfuaEJQAAkw/edit#heading=h.b2sahm5lcdeh) This document hasn’t been updated in a while. Key takeaways from this are summarized already in the [Phase 1 MVP- Front-End Redesign](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/Phase%201%20MVP%20Must%20Have%20%2B%20Nice%20to%20Have.md#phase-1-mvp---front-end-redesign) doc in GitHub.

## Documentation hubs
- [Google Drive - Ask VA Integration](https://drive.google.com/drive/u/0/folders/1cqAU-lG5ULDQzYvMDsIeheKaxnu7VqFP) 
- [SharePoint Team site - Ask VA (Internal)](https://dvagov.sharepoint.com/sites/AskVA)
- [GitHub Repository (Public) - va.gov-team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va) 
- [GitHub Repository (Internal) - ask-va](https://github.com/department-of-veterans-affairs/ask-va)
- [GitHub Repository (Private) - va.gov-team-sensitive](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master) (Note: We’ll create a folder for Ask VA when/if we need to)
- [Sketch - Ask VA folder](https://www.sketch.com/workspace/c99d3e96-7c23-4210-b173-92a2b73a8788/p/618e342d-e90e-48d9-8457-d2c08deae9aa)
- [Mural - Ask VA folder](https://app.mural.co/t/departmentofveteransaffairs9999/r/1686859097688)

## [Google Drive - Ask VA Integration](https://drive.google.com/drive/u/0/folders/1cqAU-lG5ULDQzYvMDsIeheKaxnu7VqFP) 

### Considerations
VA employees can’t access Google Suite while connected to the VA network. This limits VA employees’ ability to interact with Google Docs, Slides, Sheets, and other Google products.
On the other hand, new contractors may not have access to the VA network for months. Even after accessing the VA network through a virtual desktop, accessing and working in is slow. A physical government-issued laptop (GFE) can take anywhere from 2 weeks to a month to get based on regional availability. We have 5 GFEs under the Ask VA Performance Work Statement (PWS). We can always request additional GFEs through our COR, but these aren’t guaranteed. GFEs may also take a while to obtain. It is especially difficult for designers to obtain a MacBook GFE, which designers need to work in Sketch.

### Strategy
For ease of collaboration, **working documents** belong in Google. Working documents need frequent collaboration via comments and edits.

We’ll move Google documents into SharePoint or GitHub once they’re more complete. If a ticket in Zenhub includes a Google doc, we'll add a task to: 
- keep the doc in Google,
- move to the doc to SharePoint, or
- move the doc to GitHub

### Examples of working documents
- Meeting notes
- Technical spikes
- Research plans

## [SharePoint Team site - Ask VA (Internal)](https://dvagov.sharepoint.com/sites/AskVA)

### Considerations
Every time a Teams group is created, a SharePoint Team site is created that’s linked to the Teams group. We have to be connected to the VA network to access SharePoint. Real-time collaboration may be more difficult for contractors. 

However, VA staff can more easily access and share files in SharePoint.

### Strategy
Therefore, we’ll use this space for **Ask VA team-only documents**. These are files that we need to collaborate and share with the CRM and Dynamics Infrastructure teams. These teams can also share internal documents with us. Leadership from VA, Thoughtworks, and Oddball can also be included in this group.

If we need to share documents with VA staff (ex: staff in business lines) outside of these teams, we can still create them in the SharePoint site first. Then, we can generate a link that allows any VA staff person to view the document even though it’s in a private Teams group.

### Examples of Ask VA team-only documents
- Business process documentation 
- Ask VA sanitized data
- Raw feedback from business lines
- Contact options and military service fields spreadsheets

## [GitHub Repository (Public) - va.gov-team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va) 

### Considerations
This repository is public to everyone, including those outside of the VA. GitHub is best suited for more completed files.

### Strategy

We’ll use this space for **public documents** that are ready to be shared publicly and need less frequent updates. We can create markdown documents for Word docs and upload other types of files (ex: pdfs, screenshots, etc.) as needed. 

### Examples of public documents
- [See guidance from the Platform team here](https://depo-platform-documentation.scrollhelp.site/developer-docs/github-repos)
- Meeting notes
- Research readouts
- Product outline
- Documented decisions

## [GitHub Repository (Internal) - ask-va](https://github.com/department-of-veterans-affairs/ask-va)

### Considerations
Internal repositories are accessible to all enterprise members ([see documentation from GitHub](https://docs.github.com/en/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)). 

### Strategy
We’ll use this space primarily for **tracking issues** because it’s also connected to our [Zenhub board](https://app.zenhub.com/workspaces/askva-647a476551689d06655cc815/board). The Engineering team will also add future **custom code** as needed.

### Examples
- Tracking issues
- Custom code
- Some working documents (Some folks on the team prefer working in markdown)

## [GitHub Repository (Private) - va.gov-team-sensitive](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master)

### Considerations
Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members ([see documentation from GitHub](https://docs.github.com/en/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).
Strategy

As of 9/26/23, we don’t have a folder in this repository since we haven’t identified a need to use it. We could use this repository to store sensitive documentation.

### Examples
- [See guidance from the Platform team here](https://depo-platform-documentation.scrollhelp.site/developer-docs/github-repos). 
- Some examples might include files that contain Veteran PII, issues related to security issues in production, and postmortems

## [Sketch - Ask VA folder](https://www.sketch.com/workspace/c99d3e96-7c23-4210-b173-92a2b73a8788/p/618e342d-e90e-48d9-8457-d2c08deae9aa)

### Strategy
We design in Sketch in the VA.gov Design workspace.

### Examples
- For all UI design flows.
- Note: We’re tentatively set to transition to Figma in 2024. More details to come.

## [Mural - Ask VA folder](https://app.mural.co/t/departmentofveteransaffairs9999/r/1686859097688)

### Strategy
We use Mural as a whiteboarding space in the Department of Veterans Affairs workspace. Log into Mural every 2 weeks, so your account doesn’t get deactivated due to inactivity. If you do get deactivated, tag Naomi Marcussen and Kevin Hoffman in the #design Slack channel to request access again. See instructions from the Platform team here to request Mural access.

### Examples
- User flows
- Research synthesis
- Other whiteboarding needs

## Special considerations for docs
Some documents require special considerations that are outlined.

### Meeting notes
- Internal meeting notes: Google Drive
- Notes that need to be shared with Ask VA CRM/Infrastructure team: GitHub (ex: notes from each CRM sync)
- Notes that need to be shared with teams outside of Ask VA: GitHub or Ask VA SharePoint (ex: ad hoc meetings with other product teams)

### Secrets
- [See guidance from the Platform team](https://depo-platform-documentation.scrollhelp.site/developer-docs/store-a-secret-in-parameter-store).

### Large files
- GitHub limits the size of files that we can upload via the browser. 
- For larger files (such as pdfs, videos, etc.), we’ll upload them to the Ask VA SharePoint site or upload them to GitHub via [Git Large File Storage](https://docs.github.com/en/repositories/working-with-files/managing-large-files).
