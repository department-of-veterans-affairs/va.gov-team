# Mobile API Strategy
[working thinking as of 7/23/2020]


## Option 1: mobile-only API (presentation layer) within the vets-api

Build new API endpoints inside of vets-api.

<img width="525" alt="Diagram of mobile API within vets-api" src="https://user-images.githubusercontent.com/58053619/85463114-e2d59e00-b56b-11ea-97f1-063b9b9c6af9.png">

### Pros
- We foresee having to make modifications to a number of endpoints to optimize them for mobile; by creating a mobile-only API layer, these optimized endpoints can live in their own namespace
- A separate namespace will de-risk the possibility of the API changing (ie, we will be decoupled from VA.gov).
- By doing this in the vets-api presentation layer, we can still use the same integrations from the vets-api integration layer without duplication
- By doing this from the start and managing versioning, we can ensure older versions of the app don’t break later on
- This approach will give the mobile team more control over its endpoints and will reduce dependencies
- Authorization for mobile app consumers will be isolated to this area of vets-api - rather than having to add mobile authorization to shared endpoints (this would be great if we choose SSOe for OAuth because token verification would be centralized rather than spread throughout vets-api)


### Cons
- this is additional software to maintain by the VSP team
- A separate namespace and Rails engine will be additional software to maintain
- Duplicating the existing APIs initially may seem duplicative, but we expect the mobile API's footprints to drift over time
- Governance could get tricky because there is more to maintain - though arguably less tricky than keeping the APIs in place while also modifying them for mobile

## Option 2: mobile-only API running in front of vets-api

Build an entirely new API that proxies requests to vets-api.

<img width="525" alt="Diagram of mobile API in front of vets-api" src="https://user-images.githubusercontent.com/7627/86256777-b979cb00-bb86-11ea-98d8-8fc72789281f.png">

### Pros
- mobile-only optimized endpoints live in their own project/repo
- integrations from the vets-api integration layer are reused without duplication
- can be versioned from the start, ensuring older versions of the app don’t break later on
- This approach gives the mobile team full control over its endpoints and the shape of responses
- Authorization for mobile app consumers will be isolated to this project - rather than having to add mobile authorization to shared endpoints (this would be great if we choose SSOe for OAuth because token verification would be centralized rather than spread throughout vets-api)
- VSP plans on supporting a container-based runtine, which would allow for this project to be deployed alongside vets-api, decreasing latency and avoiding separate VPCs and ATOs (future, 3-6mo)
- Mobile team can choose its own stack (does not need to be Ruby on Rails)
- Does not add any extra weight to vets-api and VSP team
- Positions the mobile app to break off from vets-api more easily in the future, if needed (like Lighthouse is doing)
- The mobile app would also be in front of Lighthouse and therefore could pick and choose APIs from vets-api and Lighthouse as needed


### Cons
- this is additional software to maintain (but not by the VSP team)
- vets-api endpoint changes to support VA.gov (rare) will require update work
- perceived duplication: are the use cases for VA.gov and VA Mobile that different?
- needs a strong test suite to quickly identify regressions and changes to vets-api
- additional network latency for requests, mitigated by deploying to the vets-api container-based runtime


## Option 3: use existing endpoints in-place within the vets-api

Use API endpoints inside of vets-api. Improve as needed.

### Pros
- vets-api is designated as "the place" for veteran-facing APIs
- easy re-use of existing back-end integrations
- allows access to VA.gov and Lighthouse integrations all at once
- fast speed of development - many endpoints will Just Work
- mobile-only optimizations will be shared with the VA.gov team
- no additional software to maintain by the VSP team
- use a separate namespace and Rails engine for mobile-only (new) endpoints
- mobile api can be integrated into Lighthouse easily, if desired

### Cons
- we will need to add versioning to ensure older versions of the app don’t break later on
- authorization for mobile app consumers will need to be added across various parts of vets-api
- adds some extra weight to vets-api and VSP team
- potential governance issues: an unknown risk
