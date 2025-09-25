# COIVD-19 Screener Customization RFC

This request for comment (RFC) attempts to solve the problem of lots of facilities wanting to have lots of control over their COVID-19 screener questions.

## Goal
COVID-19 screener questions are easily customizable at multiple levels (e.g. VISN, system, facility) and can be accessed by a user through a common entry point.

## Constraints
- We don't want users to have to type in a long, hard to read/remember URL
- Different VISNs/systems/facilities will want different levels of control. For example, one VISN might want to standardize across all facilities in the VISN (and have the buy-in to do so), whereas another VISN might leave it up to individual facilities to customize their own questions based on a default set
- There are default national questions that should be used if there are not more specific questions

## Hypothesis
Customization will be based on branches from a single entry point. Theoretically, we could have a branch for every single facility. Our hypothesis is that by branching as close to the user as possible will result in the greatest control over and accuracy of the experience.

## Flow
1. User sees sign alerting them to the digital screener and decides to use it rather than waiting in line for a verbal screen
2. User sees SMS shortcode on sign instructing them to text a keyword to a five digit number
3. User sends keyword as instructed
4. The VEText application responds to the keyword with a greeting and URL that has a direct relationship with the keyword
5. The user follows the URL and is presented with a set of questions that have a direct relationship with the URL (and back to the SMS keyword)

## Architecture
### VEText application
The VEText application (Java runtime) identifies any incoming texts with the string "screen" in it as possible screener keywords. It strips the text body of the string "screen" and uses the remaining string (with whitespaced removed) to generate a URL using https://www.va.gov/covid19screen/ as a base.  The VEText application then formats a template greeting with the generated URL and initiates a response text to the user.

For example, if the user texted screen459 to the VEText shortcode, they would receive back a text message with a standard greeting and the url https://www.va.gov/covid19screen/459 in the body.

### VA.gov FE application
#### Routing
Using React Router, strip the :id parameter from all incoming traffic to /covid19screen/:id and feed that value as an argument into the exist React app. That argument is used as a key/attribute to look up a specific question set value that is predefined in JSON. If no matching question set value is found, default back to the national question set.

For example, if the user arrived at /covid19screen/459, and there was a question set with a facility id of 459 in a JSON blob somewhere, the question set would be returned and used to generate the screener components that are rendered for the user.

For a not-happy-path example, if the user texted back screenfoobar and arrived at /covid19screen/foobar and there was not a question set with the facility id of foobar in a JSON blob somewhere, the user would still receive a screener, but it would be the national one.

#### Question set location
To decouple code and data further, move the data in `config/questions.jsx` into a JSON blob stored in the `vagov-content` repo and restructure the blob to allow for multiple levels of VISN/system/facility hierarchy, ideally matching the hierarchy of the Facilities API and/or the CMS for forward compatibility.

The benefit of maintaining this as JSON outside of the code and the vets-website build processes is that we can point to the blob directly from the app at client runtime so that any changes we make to question content will be immediately implemented. The alternative is to keep the question content alongside (but decoupled from) the code in `vets-website` and deliver it alongside all of the other assets at page load. Downside here is that we only get one shot per day to update content when the site is built and deployed (and not on weekends/holidays).

## Question set management
The people are the hard part. Managing dozens of different question sets will be difficult no matter what. Two possible strategies to deal with this are: (1) utilize the existing facility --> system --> VISN hierarchy to channel all change requests through, at most, the 23 VISN area managers; and (2) empower as many of the VISN area managers to implement their own changes in the JSON question set data store (might be a limited number, but even a handful of area managers managing their own question sets would be helpful).




