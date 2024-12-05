## Approach 1: importing content statically from an in-repo location

Background

We were referred to the design system documentation repo to look at how they import yml content into the site: https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/main/src/_data

The design docs repo doesn’t pull in any data from outside sources. Instead, the _data folder is simply imported and utilized within other Jekyll templates. This process is quite similar to how we could include a _data folder in our app and import a JSON file for a content component  
  
A source for static content could be used like https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/static-data
 and a json file or static component for content could be used to provide a single source of truth for this data.

Pros
- the content is easily imported into the components and available when the application source code is bundled

- the only overhead is the import cost that is present getting the string from the json file, is minimal, and is the same as importing a utility function or any other piece of platform shared code

- no external data loading is required, no race conditions, and the content will always render as expected

- the content could still be used in other places _within_ vets-website when needed.

Cons
- the management of this content couldn't happen in the CMS at this time

- the content will require a PR to update

- adds to the bundle size, although the size increase is negligible 


## Approach 2: dynamic content loading from CMS via json file

Background

The current list of VA Medical Centers is maintained in the CMS and when the content build is run, a json file is created and dumped into an AWS S3 bucket. This object storage solution is usually used for other static content like images and videos, but in this case it was deemed usable for 'publishing' the VAMC list as a json file. The file lives at the url https://staging.va.gov/data/cms/vamc-ehr.json and this location is used when React applications require the data via a Redux action. Existing documentation for this are available at https://depo-platform-documentation.scrollhelp.site/developer-docs/how-to-opt-in-to-drupal-as-the-source-of-truth-for#Howtoopt-intoDrupalasthesourceoftruthforOracleHealth-relatedappsandwidgets-So,howdoIuseDrupalasthesourceoftruth

Other static content could be managed in a similar way in that a json file could be created and uploaded to the S3 bucket for use on the frontend when needed.

Pros 
- the information is maintained in the Drupal cms and can be versioned there in a unified way
- the content lives separately from the component it is used in and could allow it to be used in more than one place if needed
- there is an established way to accomplish this already

Cons
- loading data via json and then parsing that json is technical overhead compared to just importing a file from within an existing repo

- loading this information means that a check needs to be done to make sure the page renders only after this content has loaded. This will slow down the page to some extent. It could introduce multiple loading indicators if the checks weren't done appropriately.

- we would want to minimize the size of this file, and also minimize the amount of files that are created like this to prevent multiple api calls or longer loading times on low bandwidth devices

- there are technical implications to loading static content via a fetch call and then rendering it in a component. What happens if the fetch call fails? What is the fallback content if the fetch call fails? How do we standardize the way that we request this data across components and make sure it is not requested multiple times? Where does this content live once it is retrieved? It could live in local state or it could live in the Redux global state, although storing multiple static content strings in Redux is not best practice and overall not the purpose of Redux in React applications.


## Approach 3: Hybrid / Flexible loading (hypothetical)

We build a component that loads in some static data, but can be triggered to instead load external data and that could be used to fill either scenario?
Use static data in cases where real-time data isn’t necessary, but also have the option to fetch live data when the situation requires it.
We kind of have the pros and cons of both approaches, and we aren’t really sure how that would work with loading data and preventing loading spinners when external data is requested. This probably is not a good idea, but it is an idea lol


## Verdict
Approach 1: This approach is ideal for scenarios where content changes infrequently and fast load times are crucial. It’s best for static content that doesn’t need frequent updates, which is what we are primarily using this for (ex. language in alerts). Approach 1 seems the most straightforward and efficient option as it provides simpler implementation without the complexities and potential performance issues related to dynamic data loading.

