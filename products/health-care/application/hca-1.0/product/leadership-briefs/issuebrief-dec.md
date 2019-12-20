# OVERVIEW
The Veterans Online Application (VOA) is a tool that allows Veterans to apply for healthcare benefits online through an interactive PDF. VOA is a high-priority product and will be the first VA form to migrate to vets.gov. 

The original plan was to migrate VOA to vets.gov in two phases:

+ PHASE 1: Migrate VOA to vets.gov in its existing form (2 log-in options that pull up the PDF application), making vets.gov the go-to access point for VOA.  

+ PHASE 2: Convert VOA into an HTML form, embedded in vets.gov for improved user experience that does not require leaving the page and connects to the HEC database (as the PDF currently does).  

Through our work on Phase 1 (originally planned for November 2015), we made a discovery that led us to postpone Phase 1 launch. To move forward we recommend slightly changing Phase 1 from “migrating VOA to vets.gov” to creating a VOA landing page that links to the current VOA access page:

+ PHASE 1: Create a content-only VOA landing page on vets.gov that links to the Access VOA page.   

+ PHASE 2: Convert VOA into an HTML form, embedded in vets.gov for improved user experience that does not require leaving the page and connects to the HEC database (as the PDF currently does).  

Below is a description of the problem, along with further detail about our proposed solution.

# THE PROBLEM
In short: the PDF does not open for a majority of users. 

This issue is not new. It has been known by the product team that the PDF returns an error message when using Firefox, Chrome, and Safari. According to analytics.gov, these three browsers make up 71% of government web traffic. This means that up to ¾ of users trying to apply for health care via VOA may be getting an error message. 

The error occurs largely because modern browsers no longer default to Adobe to open a PDF—modern browsers have new tools for PDFs. This means that for a user to access and fill out the VOA form, they must (1) change settings within their browser, and (2) have Adobe 8 or above. These steps should not be necessary for a Veteran to apply for healthcare. 

The issue is currently described by the product team as a “problem with the browser, not with the PDF.” While it is true that the problem is a result of browser incompatibility, it is not true that the problem lies with the browser—the PDF is simply not compatible with modern browsers. VA products should be compatible with modern browsers, especially those used by the vast majority (71%) of our customers—the 10-10EZ / VOA is not. The product was created at a time that Adobe was the default PDF reader of all browsers, and since then that has changed. In other words: the assumptions that this product was built on are no longer true. 

While it is a top priority for VOA to be migrated to vets.gov, we cannot fully migrate VOA in its current state because it does not work for a majority of users and we cannot introduce a bad user experience to vets.gov. 

# THE CURRENT SOLUTION
The remediation of the problem to-date is to describe to users how to go into their browsers and change the settings to allow the download. This is a bad user experience. No good product should require this much action on the part of a user for it to function.

While the problem can be addressed to a degree by content that explains how to open the PDF, it is not truly fixable—anything done to the PDF is a bandaid. The solution to the problem is to change the product from a PDF to HTML.  

# THE RECOMMENDED SOLUTION

We recommend the following:

### Near-Term (between now and January 1st) 

+ Create a VOA page on vets.gov that includes only content describing the application, and linking to the Access VOA page to download the form. 
+ Work with the VOA program office to make valuable adjustments to the PDF in order to improve the user experience as much as possible in the current state. 

### Medium-Long Term (January to March) 
+ Do a discovery and design sprint to create an HTML form that does all the same things as VOA but is designed to better meet the needs of users. 
+ Build, test, and launch the HTML form on vets.gov in early March **this is contingent on ATO approval and authentication.

# OTHER OPTIONS
We weighed 4 options to come to our recommended solution. Options 2 + 3 made up our recommended solution. Options 1 + 4 were not recommended. Below we list our reasoning. 

### OPTION 1: Vets.gov, download prompt
Landing page on vets.gov that prompts users to DOWNLOAD the PDF (as opposed to the current prompt). This is the closest option to the current plan—replacing the two “apply” buttons with “download” prompts that clearly describe what to expect. 

#### PROs 
+ VOA is on vets.gov 
+ VOA gains vets.gov traffic

#### CONs  
+ Introduces a VERY broken UX to vets.gov, and will damage vets.gov image of a better experience and a different VA

*We do not recommend this, as it would introduce a broken product to vets.gov, which will damage the credibility of vets.gov as a new experience.*

### OPTION 2: Vets.gov, content only, point offsite
Landing page on vets.gov that describes VOA and points offsite to the current VOA page. This is also relatively close to the current plan, pulling VOA into vets.gov, but without functionality, and keeping the broken UX mostly offsite.

#### PROs 
+ VOA is on vets.gov 
+ VOA gains vets.gov traffic

#### CONs  
+ No real value to users 
+ Bad UX (though less bad than option 1) 

*This is included in our recommendation.*  

### OPTION 3: Leapfrog to HTML through a phased approach 
Do not move VOA to vets.gov yet. Instead of spending time and energy patching up the PDF that can actually never be fixed, and leapfrog directly to the real solution to the problem: HTML. This was always part of the plan, just scheduled for later in 2016. This could be bumped up to March, using December and January for research and design, and February for development of the form. 

#### PROs 
+ Great UX
+ Most responsible way to develop the form (user research, user-centered design, and testing) 
+ Actually solves the problem long-term

#### CONs  
+ The timeline is longer — March delivery
+ There is a risk that ATO approvals and authentication needs will extend the timeline even further (which is why this was originally scheduled for the end of 2016)

*This is included in our recommendation.*  

### OPTION 4: Leapfrog to HTML now
Do not move VOA to vets.gov yet. Instead of spending time and energy patching up the PDF that can actually never be fixed, and leapfrog directly to the real solution to the problem: HTML. This was always part of the plan, just scheduled for later in 2016. While this is technically feasible, if past is prologue, there is a very high (almost certain) risk of external dependencies (ATO and authentication) that could delay deployment as it did with Caseflow.

#### PROs 
+ Great UX
+ Most responsible way to develop the form (user research, user-centered design, and testing) 
+ Actually solves the problem long-term

#### CONs  
+ Resources would have to be moved away from other high-level priorities on vets.gov.
+ There is a very high risk that ATO approvals and authentication needs will extend the timeline and we actually won’t be able to get it on vets.gov (this is a very likely scenario so early on) 

*We do not recommend this, as it is a near-certainty that we will not get ATO or authentication in time. This would also require pulling resources away from other high-level priorities.*   
