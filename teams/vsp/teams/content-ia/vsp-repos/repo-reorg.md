# Va.gov-team Repo Reorganization

**Primary Contacts:** Mikki Northuis, Matt Johnson

**Slack Channel(s):**  #vsp-platform-support,  #vsp-content-ia (internal vsp channel)

**Epic:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/538

### Background ###
Currently documentation and working artifacts are stored in a number of different repos within GitHub.  Many of these repos are also private repos, which doesn't follow DSVA's desire to be open and transparent regarding the va.gov work.  
This work effort includes identifying what GH repo(s) to use, defining a structure to the documentation to be included/created, and moving content into its home with in the revised structure.  

### Goals ###
- Implement a user-centered IA for VFS Team resources within GitHub
- User Store: - As a member of any team building on or with VSP, I need to be able to easily navigate platform documentation so I can quickly find what I need to do my job.

### Benefits ###
- Single place for teams to find information at any point during the project
- Allows all teams to have visibility into all current and past, platform level and project level information as they work
- Project information is readily available when teams roll-off allowing VSP team to feed project level changes back into platform level documentation and have visibility into any unfinished work

### Approach/Decisions ###

- Two repos will be used to for VSP and VFS documentation
  - va.gov-team repo - A public repo that will be primary repo for all documentation and artifacts for all teams building on and with the platform. 
  - va.gov-team-sensitive - A private repo that will be used to store information and documents that should not be publicly visible for privacy and security reasons.
  
- Established folder/file Naming Standards
  - All folders and md files should use lower case letters separated with dashes, example  `burials-memorials`
  - Do not use special characters or spaces in names (i.e. ampersands, quotes, asterisks, ect)
  - Keep names short and succint, eliminate unnecessary stop words when possible (i.e. the, and, ect)
    - Incorrect:   va.gov-team/Products /Burials & Memorials
    - Correct: va.gov-team/products/burials-memorials

- Move vs Copying
  - For files that exist in vets.gov-team repo, we will take the approach of copying the content into the new repo rather than moving it.
  - This will ensure that the vets.gov-team repo maintains all context and historical information related to that phase of work, rather than taking the repo apart and leaving it full of holes. 
  - Files can be fully moved if it makes sense, but the initial approach will be to copy.
  - Content and a link will be placed at the top of pages on vets.gov-team directing any users to the newest version of the page.
  
  
  


  
