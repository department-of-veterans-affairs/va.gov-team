# Using a Subdomain for Translated Content

An option to maintain translated content for va.gov is to use a subdomain like espanol.va.gov,  or to use a new .gov domain altogether. In order to register a new .gov domain you must follow these procedures: https://home.dotgov.gov/registration

## Potential subdomain solutions
2 potential options: route requests via reverse proxy type implementation, or set up a seperate CMS instance for running language subdomains.

**Reverse Proxy via Nginx or Apache**

Considerations
 - How would requests get routed and what determines if they are routed and how does the CMS know that a page belongs to a subdomain?
- Would additional functionality be needed to add some sort of specifier in the CMS to indicate that a particular page is on the subdomain instead of main domain?
-  Who would maintain a reverse proxy and what additional infrastructure costs are involved?

**Separate CMS deployment to manage language content.**

Considerations
- How do the CMS instances talk to each other when new content is created?
- Does the content build then have to run on all instances of the CMS every hour? What cost is that going to add?
- User management is that unified across all cms instances?
- When a new language wants to be added then is a whole new CMS spun up
- What is a migration path if we want to use the Drupal multilingual modules in the future?

**General considerations:**
There are already existing subdomains:
benefits.va.gov
ptsd.va.gov
mobile.va.gov
etc

How are all these subdomains going to differentiate between themselves, future multilingual work potentially on their domains (sub-sub-domains?), and the language sub domains for the main va.gov site?

How would we maintain a single 'experience' while sending users to various subdomains, and how would the english version of the site provide links to the other language versions of a particular page?



#### Benefits
* The CMS can be a fresh installation and would not be limited by current Drupal modules and restrictions
* Translators can access a single point of entry for managing content

#### Drawbacks
* The content will be seperate from the main CMS used for va.gov and would need to maintained in parallel
* Registering a new subdomain or .gov domain name requires authorization and a process must be followed first
* There are other subdomains already present and adding translated subdomains may cause confusion
