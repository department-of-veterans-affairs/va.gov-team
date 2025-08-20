# Using the va.gov-team repo

Determine where your file should go and how to name them...

- [Where to put your files](#where-to-put-your-files)
  - About each area of the this repo
  - [Public versus private repo](#public-vs-private)
- [Guidelines for creating and naming files and folders](#guidelines-for-creating-and-naming-folders-and-files)
  - [Naming conventions](#naming-conventions)
  - [Creating new folders](#create-folders)
  - README.md files
  - [Uploading large files](#large-files)
- [Maintaining this repo](#maintainance)
  - Governance of usage
  - Archiving files
- [Questions](#questions)

## Where to put your files

### About the /products and /teams folders

There are 2 main areas of the va.gov-teams repo that you will be working with - `products` and `teams`.  

#### Products

This area includes documentation on all VA.gov and VA Health and Benefits mobile application user-facing products. This includes any tool, content page or piece of functionality that a VA.gov visitor interacts with directly.

- This area should include information and files related to the product you are working on and NOT include information specific to your team.
- Documentation and artifacts created as part of the product development process may be stored here.
- Examples of content/files you will find in this area include product outlines, design comps, content decks, discovery docs, user research files, etc.
- The primary contributor to this area are the Veteran-facing Service (VFS) teams. For historical and tracking purposes, your team should store its project documents in your assigned /products folder.
- Each product you own should contain a details YAML file that provides some important information about your product for our Team and Product Manifest.

#### Teams

This area includes information on all teams working on the platform.  

- Teams are organized by portfolios:
  - [Benefits](teams/benefits-portfolio/)
  - [Health](teams/health-portfolio/)
  - [Digital Experience](teams/digital-experience/)
  - [BAM](teams/bam-portfolio)
- This area of the repo should include team information only! Do not put information about the products you are working on in your team folder. Instead put product information that may extend past the duration of your team's contract in the appropriate directory for the product.
- Examples of content/files for this area include team charters, org charts, workflow documents, etc.
- All teams and team members will contribute to this area.

We encourage you to browse content in other /products and /teams folders to see how other teams have organized their content or presented their findings. This is especially important if your team is working on adding a feature to an existing application. You'll want to learn the history of the application by seeing what's happened so far. Your project may be slightly different, so you don't need to exactly copy what other teams have done. Use your best judgement about what works for your project.

## Public versus Private

- All content related to development on VA.gov belongs in the public `va.gov-team repository`.
- However, **content that is sensitive to individuals or VA, for privacy and/or security reasons, should be stored in the `va.gov-team-sensitive`** repo.
- Sensitive content generally includes:
  - PII and personal contact info
  - System credentials/test users
  - Information/issues related to security risks
  - Postmortems
  - Vendor selection info
- [See guidelines on using public versus private repos](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/sensitive-guidance.md)

## Guidelines for creating and naming folders and files

### Folder and file naming conventions

When naming a new folder or markdown file in this repo, please adhere to the guidelines below. This helps to keep our repo file URLs short and readable as well as ensure the repo can be cloned easily without errors.

*While these are specific to GitHub folders and markdown files, these guidelines are good rules to follow with any file uploaded to the repo as well.*

- Lower case words separated by dashes (i.e. "repo-guidelines.md"  not "Repo Guidelines")
  - The only exception to this rule is the README.md file that should exist in every folder.  This file should be all capital letters for visibility.
- Do not use spaces or special characters (i.e. &, :, %, etc.) in file or folder names
- Omit unnecessary words (i.e. the, a, and, etc.) when it makes sense  (i.e. content-ia versus content-and-ia)
- If multiple versions of a file exist, name consistently and include versioning info (i.e. date, v1, etc) at the end of the file name

#### Bad folder and file structure

- va.gov-team/Products/Burials & Memorials /Phase 1 mtg notes & next steps.md
- Creates a URL that looks like this: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/Products%20/Burials%20&amp%20Memorials/Phase%201%201%20mtg%20notes%20%amp%20next%20steps.md

#### Good folder and file structure

- va.gov-team/products/burials-memorials/mtg-notes-phase-1-09042019.md
- Creates a good URL: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/burials-memorials/mtg-notes-phase-1-09042019.md 

#### Tips for naming files

- Name your files so that they are easily findable in a list and make sense to anyone who may be looking for them. Include key descriptive words.
- Be consistent when naming files that are similar types and use dates or version info to make unique - i.e. all research notes are named "research-notes-participant-1.md"
- Consider how the files may sort within a long list - do you want to see similar types of files together, or do you want to see them by date?
  - Start broad and end with specifics to group similar things together - i.e. mtg-notes-retro-20190901.md
  - Start with a date to order things chronologically - i.e. 20190901-retro-notes.md
- When using dates in your file name, best practice is to use YYYYMMDD format for chronological sorting.
  
### When to create child folders

When you are managing and organizing your files, you may be tempted to create sub-folders for every different type of file you have in order to sort and organize them. Sometimes this can be a good solution, but it can also create a situation where content is more difficult to find.  

***If you feel you need a new folder directly below /products/ or /teams, please follow the guidance for [creating a folder](https://stackoverflow.com/questions/12258399/how-do-i-create-a-folder-in-a-github-repository) and [folder naming conventions](#folder-and-file-naming-conventions).

Reach out for guidance in the [#vfs-product-support](https://dsva.slack.com/channels/vfs-product-support).

#### Guidelines

- Keep your structure as flat/shallow as possible by avoiding creating multiple levels of folders when you can. Deep structures, with many levels to click through, makes content harder to find - shallow structures expose content quicker, with fewer clicks, and keep URLs shorter.
- When deciding whether to create a new sub-folder, here's a few things to consider:
  - How many files will go in this new folder?  Try not to create folders for just a few files.
  - Is there a clear definition of what will go in the new folder? If the grouping is not clear, it will be hard for team members to understand what should go where.
  - Could file naming be used rather than a folder to separate and easily find these files?  For a few files on one topic, start their file names the same and follow with a date or version to make them distinct.
  - Could the README.md file on the parent folder be used to segment out these files?  The README.md files allow you to make groups and evolve them as more files and different types are added. They also help users quickly find files by providing easy navigation and descriptions.
- If you do create a new folder, follow the file and folder naming conventions provided.  Do not repeat descriptive words in child folders.  For example, if you want a folder for all design files under your `health-care/application` product, it does not need to be named `health-care-application-design`, just `design` is sufficient.

## File storage and large files

To improve site performance and conserve storage space, Platform requires that certain file types (which have a tendency to be large files) be uploaded to the va.gov-team repository only via the [Git Large File Storage (LFS) extension](https://git-lfs.github.com/). Git LFS replaces these files with text pointers inside team and product folders, while storing the file contents on a remote server.

The following 6 file types must be uploaded via Git LFS:

- Formatted documents, including PowerPoint (.pptx) or PDFs (.pdf)
- Video files (.m4v)

Your development resource should be able to upload large files to LFS using the GitHub command line or desktop app on the team’s behalf.

**Please do not upload the file types listed above via the web interface**

If you have questions about how to upload files via Git LFS, we recommend consulting this [tutorial for the command line](https://github.com/git-lfs/git-lfs/wiki/Tutorial) or this [tutorial for the GitHub desktop app](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/documentation/how-to-use-git-lfs-with-github-desktop-app.md). The VSP Content & Information Architecture team can connect your team with additional support if needed.

If your team will be uploading a lot of external files, it can be helpful to create a ‘files’ folder in your team or product area to keep your key folders free of clutter. The files can then be linked to from a Markdown file so they are easily findable.

If you find that your team is uploading large files (greater than 3 MB) of a file type not listed above, please reach out to the VSP Content & Information Architecture team.

## Maintaining this repo

To ensure this repo provides clean and helpful documentation, a process for ongoing maintenance and review will be needed. This may include implementing a standard archiving process, general governance to maintain the repo's integrity, reviews/audits for look for sensitive info, etc.  

## Questions

If you have any questions about using this repo, please don't hesitate to reach out to the Platform Support team through [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support).
