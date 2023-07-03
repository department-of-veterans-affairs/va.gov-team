# Secondary header and footer

These components help unify VA's web ecosystem by applying consistent branding, look and feel, and user experience design to the header and footer of websites that are not part of the primary VA.gov domain.

## Design principles and rules for when a user is on a VA website that is not VA.gov
* Users should know they are on an official VA website
* Users should have a way to get to VA.gov
* Users should have a way to get to the Veterans Crisis Line
* Users should have access to federally required links in the footer

## Design and development
* The secondary header and footer is maintained by the VA.gov Platform team
* The secondary header and footer is dynamically applied/updated (i.e., if we update something in the source file, then it automatically updates on all VA websites that are using the secondary header and footer) 

---

## 2019 Work
Here is something to start with. The below content should get moved into an epic and expanded on (and then deleted from this page).

### Design problems for users on a VA website that is not VA.gov
* VA logo branding and functionality is inconsistant. Clicking on some logos takes a user to that website's homepage, while clicking on other logos takes a user to the VA.gov homepage.
* The Veterans Crisis Line branding and functionality is inconsistent. Some are links to the VCL website while others are an adaptation of the VA.gov VCL modal.
* Site search is inconsistent. Some search utilities search content on that website, while others search the VA.gov website and take the user to the VA.gov search results page.

#### Some examples of other VA websites
* https://www.ebenefits.va.gov/ebenefits/homepage
* https://www.myhealth.va.gov/mhv-portal-web/home
* https://www.research.va.gov/
* https://www.va.gov/web/
* https://www.design.va.gov/
* https://maketheconnection.net/
* https://mobile.va.gov/app/act-coach (an example of a mobile application, there are 40+ similar apps)

#### Some examples of sites that have attempted to add the va.gov branding without us

* https://mobile.va.gov/
* https://www.innovation.va.gov/
* https://connectedcare.va.gov/innovation
* https://www.oit.va.gov/

### Implementation notes
We need to provide guidance on how to implement subdomain search functionality:
* If a subdomain wants to provide a search box and functionality for their site, then they need to use the VA.gov's search.gov instance (the search engine that powers VA.gov search)
* Subdomains should not be using their own search technology for site search
* Subdomain search results pages should have header/footer consistent with the source of the search
* Subdomain search results should show results for the subdomain first

We need to create a new section on design.va.gov that includes the following:
* Self-serve instructions on how to apply the secondary header and footer to a VA website
* Source files for the header and footer (or links to them on GitHub)
* Guidelines on different options for implementation (e.g., which VA logo to use)
* Design guidelines on all elements in secondary header and footer (e.g., footer links, search, etc.)
