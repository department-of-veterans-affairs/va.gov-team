# Using the va.gov-team Repo
Determine where your file should go and how to name them...

## Platform, Products and Teams oh my! (Where Does My File Belong?)
- define each area and provide example files types


## Folder and File Naming
When  naming a new folder or markdown file in this repo, please adhere to the guidelines below.  This helps to keep our repo file URLs short and readable as well as ensure the repo can be cloned easily without errors. While these are specific to GitHub folders and markdown files, we recommend following these for all files that are uploaded. 

- lower case words separated by dashes
  - The only exception to this rule is the README.md file that should exist in every folder.  This file should be all capital letters for visibility.
- do not use spaces or special characters (i.e. &, :, %, etc.) if file or folder names
- omit unnecessary words (i.e. the, a, and, etc.) when it makes sense
- If multiple versions of a file exist, name consistently and include versioning info (i.e. date, v1, etc) at the end of the file name

*Bad folder and file structure:*  
- va.gov-team/Products/Burials & Memorials /Phase 1 mtg notes & next steps.md
- Creates a URL that looks like this: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/Products%20/Burials%20&amp%20Memorials/Phase%201%201%20mtg%20notes%20%amp%20next%20steps.md

*Good folder and file structure:* 
- va.gov-team/products/burials-memorials/mtg-notes-phase-1-09042019.md
- Creates a good URL: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/burials-memorials/mtg-notes-phase-1-09042019.md 

**Tips for naming files**
- Name your files so that they are easily findable in a list and make sense to anyone who may be looking for them.  Include key descriptive words and a date (if applicable).  
- Be consistent when naming files that are similar types - like meeting notes, retro notes, etc. 
- Consider how the files may sort within a long list - do you want to see similar types of files together, or do you want to see them by date?
  - Start broad and end with specifics to group similar things together - i.e. mtg-notes-retro-09012019.md
  - Start with a date to order things chronologically - i.e. 09012019-mtg-notes-retro

## When to Create Child Folders
When you are managing and organizing your files, you may be tempted to create a sub-folders for every different type of file you have in order to sort them.  Sometimes this can be a good solution, but it can also create a situation where content is more difficult to find do to all the levels and folders create.
- Keep your structure as flat/shallow as possible - in other words, avoid creating multiple levels of folders , this makes all content easily findable without requiring users to drill down several levels to find something and keeps URLs shorter. 
- Only create new folders when there is a clear grouping that makes sense to segregate, and when the grouping will help users more easily find a specific content.
- use a folder's README.md file to help users find their files rather than creating more folders - read me files allow you to group things and change those groupings as your files grow and change
- How you name your files can also play a big part in how your files sort


## Public versus Private
- All content related to development on VA.gov belongs in the public `va.gov-team repository`. 
- However, content that is sensitive to individuals or VA, for privacy and/or security reasons, should be stored in `va.gov-team-sensitive` repo.
- Sensitive content generally includes:
  - PII and personal contact info
  - System credentials/test users
  - Information/issues related to security risks
  - Postmortems
  - Vendor selection info
- [See guidelines on using public versus private repos](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/sensitive-guidance.md)

## File Storage and Large Files
- If you are uploading files such as jpegs, xls, pdf, etc, it can be helpful to create a `files` folder in your area to keep your key folders clean and keep key documentation findable.  The files can then be linked to from a markdown file so they are easily findable. 
- Try to avoid uploading large files whenever possible. 


