# Ways to build upon what has been learned in the past: Challenges and some ways around them

- We need to know what's come before us and what has been learned
- Currently we have the [VA.gov research repo](https://github.com/department-of-veterans-affairs/va.gov-research-repository/projects/1) to do this from an OCTO perspective; it is not comprehensive and for the most part, doesn't include learning from VES or VEO. Efforts are in route to resolve this by piloting the use of Enjoy HQ, however it is not available to us yet

## In the meantime, here are some suggestions for ways to look for insights that are most relevant for your work: 

### Using the research repo
Searching through the research repo can be a little challenging (though it has been a big leap forward from life before the repo). There are a couple ways to search the repo, all of which _may_ produce different results: 

#### 1. Use the card labels _(Easiest but least comprehensive)_
-  All studies should be tagged with different cards. You can use the "filter" functionality at the top of the page. [Instructions can be found here.](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/145)
<img width="938" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/100814257/478a991d-6055-452f-a7c9-013750b260ff">

-  Generic card labels that intersect with MHV on VA.gov work include (but are not limited to): 
      -  BNFT: Healthcare
      - Any MHV label
      - PRDT: health-care-apartment
      - PRDT: health-care-patient-portal
      - PRDT: Medical-records
      - PRDT: MHV integration to VA.gov

#### 2. Search using GitHub Desktop and Visual Studio (VS) Code _(More difficult but most comprehensive)_

There are two ways to search GitHub using VS Code. You can either search with or without downloading VS Code onto your computer. Searching with VS Code downloaded onto your computer produces more results than using it solely integrated into GitHub - it is unknown why this is. One approach could be to search without downloading VS Code as a preliminary sweep, then perhaps with VS Code downloaded for deeper dives

**Not downloading VS Code**
- Go to VA GitHub
- Press the period button. This will allow you to use VS Code without having to download it. See VS Code's [Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks) for insights on how to do keyword searches
- Download the full GitHub repo: a pop up box will appear - click "Download full contents". This will take a while. 
<img width="908" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/100814257/182d53fd-9770-4268-a5c8-062c950346dd">

- Search using the search function (represented by magnifier glass icon in top lefthand corner

**Downloading VS Code**
- Download GitHub Desktop and set up following [these instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/documentation/how-to-use-git-lfs-with-github-desktop-app.md)
- Download VS Code by following [these instructions](https://code.visualstudio.com/download)
- Once you have GitHub Desktop and VS Code set up locally, use the search icon and follow the code format below, altering the search terms as needed. 

<img width="712" alt="VS code open to the file search options. Options are filled out as follows in the article body." src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/2536801/fc51e526-ac91-442c-bbe1-4a94c11dd183">

How to fill out the options:

**Search**
- Searches for a term across all files in the repo
- Enter the term you want to search for
- Optional: Choose the `.*` option to search using [regular expressions](https://learn.microsoft.com/en-us/visualstudio/ide/using-regular-expressions-in-visual-studio?view=vs-2022).

**Replace**
- Optional (and **not recommended** for this purpose): If you want to replace all instance of the search term, you can enter that here
- Replacements don't happen until the replace all icon next to the replace input is clicked

**files to include**
- Filters down to specific files to fit a pattern
- If you want to search across research findings in the the va.gov-team repo, use this pattern or modify as needed:

`./products/**/research/**/*finding*,*report*,*readout*`

Here's what this means:
`./products` - Look for search term(s) under the products directory,
`/**/research` - any number of sub-directories deep until you find a folder named "research",
`/**/*finding*,*report*,*readout*` - any number of directories deep in files where the name includes "finding", "report", or "readout"

**files to exclude**
- Optional
- Inverse of "files to include"

**Open in editor**
- Search results will show in a summary view below the search fields
- Click "open in editor" to see a more expansive view of the summary. This includes lines around the search terms which can be helpful for context
- Click any of the links to open the file referenced

This approach typically pulls up the most results. You search through all content within the search parameters and VA.gov repository, not just titles and key findings.

#### 3. Use the Repo Search functionality _(Easier but less comprehensive)_

This process searches within studies found on the [research repository](https://github.com/department-of-veterans-affairs/va.gov-research-repository/projects/1). While it does not pull in any content elsewhere on VA.gov GitHub but does surface all content found in issues located on the research repo. These issues typically contain titles, research questions, hypotheses, findings, and/or tags. This will not search content located in research folders located elsewhere on VA.gov. 

- Go to the research repository
- Click the Search bar and type in your "search term" using quotation marks. You can also change your paramters to search within the larger VA GitHub organization. 
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/100814257/7fe0ed36-8841-41e8-a72b-2377a8c6ef01)


### Other strategies

1. Make sure you're "in the know" about what other teams are doing
- Attend the Veteran Digital User Experience Weekly Design Sync every Monday
- Participate in syncs with other teams as needed (e.g., cross-team syncs with others working on related projects)
- Review the GitHub folders of teams that you know overlap with your product (such as Mobile)

2. Google

This approach usually produces more foundational knowledge that isn't immediately relevant but still worth knowing. For example, googling can produce insights around [Veteran population demographics](https://www.pewresearch.org/short-reads/2021/04/05/the-changing-face-of-americas-veteran-population/) or VA-specific sites related to the [burden of vision disabilities](https://www.prosthetics.va.gov/blindrehab/About_Blind_Rehabilitation_Service.asp) amongst current and future users of VA.gov. 
