# <a id="using"></a>Using the va.gov-team Repo
Determine where your file should go and how to name them...

- [Where to put your files](#where)
  - About each area of the this repo
  - Public versus private repo
- [Guidelines for creating and naming files and folders](#naming-guidelines)
  - Naming conventions
  - Creating new folders
  - README.md files
  - Uploading large files
- [Maintaining this repo](#maintainance)
  - Governance of usage
  - Archiving files
- [Questions](#questions)


## <a id="where"></a>Where to put your files

### About the /platform, /products and /teams folders
There are 3 areas of the va.gov-teams repo that you will be working with - `platform`, `products` and `teams`.  

**/platform** <br>
This area includes all platform-level products and services that support va.gov product development. 
- All documentation and artifacts created by the platform teams (VSP teams) that support and help teams working on the platform and va.gov.
- Examples of content you will find in this area include best practices, how to request reviews with different practice areas, onboarding materials for all VFS teams, and documentation on tools and services provided by VSP. 
- The primary contributor to this area is the VSP team. 

**/product**<br>
This area includes documentation on all va.gov user-facing products.  This includes any tool, content page or piece of functionality that a va.gov visitor interacts with directly. 
- All documentation and artifacts created as part of the product development process should be stored here. 
- Examples of content/files you will find in this area include product outlines, design comps, content decks, discovery docs, user research files, etc. 
- The primary contributor to this area are the VFS teams. 

**/teams**<br>
This area includes information on all teams working on the platform.  
- Teams can utilize this space to manage their teams and workflow.
- Examples of content/files for this area include team charters, org charts, project planning information, workflow documents, etc. 
- All teams and team members will contribute to this area. 

### Public versus Private
- All content related to development on VA.gov belongs in the public `va.gov-team repository`. 
- However, **content that is sensitive to individuals or VA, for privacy and/or security reasons, should be stored in the `va.gov-team-sensitive`** repo.
- Sensitive content generally includes:
  - PII and personal contact info
  - System credentials/test users
  - Information/issues related to security risks
  - Postmortems
  - Vendor selection info
- [See guidelines on using public versus private repos](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/sensitive-guidance.md)


## <a id="naming-guidelines"></a>Guidelines for Creating and Naming Folders and Files

### Folder and File Naming Conventions
When  naming a new folder or markdown file in this repo, please adhere to the guidelines below.  This helps to keep our repo file URLs short and readable as well as ensure the repo can be cloned easily without errors. <br>

*While these are specific to GitHub folders and markdown files, these guidelines are good rules to follow with any file uploaded to the repo as well.*

- lower case words separated by dashes (i.e. "repo-guidelines.md"  not "Repo Guidelines")
  - The only exception to this rule is the README.md file that should exist in every folder.  This file should be all capital letters for visibility.
- do not use spaces or special characters (i.e. &, :, %, etc.) in file or folder names
- omit unnecessary words (i.e. the, a, and, etc.) when it makes sense  (i.e. content-ia versus content-and-ia)
- If multiple versions of a file exist, name consistently and include versioning info (i.e. date, v1, etc) at the end of the file name

*Bad folder and file structure:*  
- va.gov-team/Products/Burials & Memorials /Phase 1 mtg notes & next steps.md
- Creates a URL that looks like this: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/Products%20/Burials%20&amp%20Memorials/Phase%201%201%20mtg%20notes%20%amp%20next%20steps.md

*Good folder and file structure:* 
- va.gov-team/products/burials-memorials/mtg-notes-phase-1-09042019.md
- Creates a good URL: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/burials-memorials/mtg-notes-phase-1-09042019.md 

**Tips for naming files**
- Name your files so that they are easily findable in a list and make sense to anyone who may be looking for them.  Include key descriptive words. 
- Be consistent when naming files that are similar types and use dates or version info to make unique - i.e. all research notes are named "research-notes-participant-1.md"
- Consider how the files may sort within a long list - do you want to see similar types of files together, or do you want to see them by date?
  - Start broad and end with specifics to group similar things together - i.e. mtg-notes-retro-20190901.md
  - Start with a date to order things chronologically - i.e. 20190901-retro-notes.md
- When using dates in your file name, best practice is to use YYYYMMDD format for chronological sorting. 
  

### When to Create Child Folders
When you are managing and organizing your files, you may be tempted to create sub-folders for every different type of file you have in order to sort and organize them.  Sometimes this can be a good solution, but it can also create a situation where content is more difficult to find.  

***If you feel you need a new folder directly below /platform, /products/ or /teams, please reach out for guidance in the #vfs-product-support or #vsp-content-ia channels.***

**Guidelines**
-  Keep your structure as flat/shallow as possible by avoiding creating multiple levels of folders when you can. Deep structures, with many levels to click through, makes content harder to find - shallow structures expose content quicker, with fewer clicks, and keep URLs shorter. 
- When deciding whether to create a new sub-folder, here's a few things to consider:
  - How many files will go in this new folder?  Try not to create folders for just a few files. 
  - Is there a clear definition of what will go in the new folder? If the grouping is not clear, it will be hard for team members to understand what should go where. 
  - Could file naming be used rather than a folder to separate and easily find these files?  For a few files on one topic, start their file names the same and follow with a date or version to make them distinct. 
  - Could the README.md file on the parent folder be used to segment out these files?  The README.md files allow you to make groups and evolve them as more files and different types are added. They also help users quickly find files by providing easy navigation and descriptions. 
- If you do create a new folder, follow the file and folder naming conventions provided.  Do not repeat descriptive words in child folders.  For example, if you want a folder for all design files under your `health-care/application` product, it does not need to be named `health-care-application-design`, just `design` is sufficient. 


### File Storage and Large Files
- If you are uploading files such as jpegs, xls, pdf, etc, which are large in size, please utilize [git-lfs](https://git-lfs.github.com/), do not upload through the windows GH interface. 
- If you will be uploading a lot of external files, it can be helpful to create a `files` folder in your area to keep your key folders clean and keep key documentation findable.  The files can then be linked to from a markdown file so they are easily findable. 


## <a id="maintainance"></a>Maintaining this repo
To ensure this repo provides clean and helpful documentation, a process for ongoing maintenance and review  will be needed.  This may include implementing a standard archiving process, general governance to maintain the repo's integrity, reviews/audits for look for sensitive info, etc.  

## <a id="questions"></a>Questions
If you have any questions about using this repo, please don't hesitate to reach out to the VSP team through `#vfs-platform-support` or `#vsp-content-ia`. 
