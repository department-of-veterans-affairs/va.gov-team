# Mobile-only API Layer
[working thinking as of 6/22/2020]
## TL;DR: A mobile-only API (presentation layer) within the vets-api may be the most effective API architecutre. 

## Pros
- We foresee having to make modifications to a number of endpoints to optimize them for mobile; by creating a mobile-only API layer, these optimized endpoints can live in their own namespace
- A separate namespace will de-risk the possibility of the API changing (ie, we will be decoupled from VA.gov).
- By doing this in the vets-api presentation layer, we can still use the same integrations from the vets-api integration layer without duplication
- By doing this from the start and managing versioning, we can ensure older versions of the app don’t break later on
- This approach will give the mobile team more control over its endpoints and will reduce dependencies
- Authorization for mobile app consumers will be isolated to this area of vets-api - rather than having to add mobile authorization to shared endpoints (this would be great if we choose SSOe for OAuth because token verification would be centralized rather than spread throughout vets-api)


## Cons
- A separate namespace and Rails engine will be additional software to maintain
- Duplicating the existing APIs initially may seem duplicative, but we expect the mobile API's footprints to drift over time
- Governance could get tricky because there is more to maintain - though arguably less tricky than keeping the APIs in place while also modifying them for mobile

<img width="525" alt="Screen Shot 2020-06-23 at 4 08 18 PM" src="https://user-images.githubusercontent.com/58053619/85463114-e2d59e00-b56b-11ea-97f1-063b9b9c6af9.png">
