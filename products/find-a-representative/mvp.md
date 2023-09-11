# Find a Rep MVP

Find a Rep MVP will include desktop & mobile experiences

## MVP

1. Search
    a. If authenticated: display existing rep (if available) and how to change the rep
    b. Required fields
        i. Location 
            1. Single consolidated field that accepts address 1, city, state, zip code
                a. user can also "use my location" to populate this location field
            2. Default to a radius (50mi?)
                a. allow user to adjust search area through the map
        ii. Type of Rep, including information about types of reps
2. Display search results
    a. Map display
    b. List display 
        i. sorted from closest to furthest
    c. Authenticated view (especially if we display the veteran’s existing representative)
3. Selection
    a. Search results will have a button to “Select” the representative
4. 21-22
    a. Pre-fill form on the back end
        i. Authenticated: both rep and personal information
        ii. Unauthenticated: rep information, no personal information
    b. Present missing form fields to the user
        i. If logged in: additional  authorization information
            1. 19: Authorization for representative’s access to records protected by Section 7332, Title 38, U.S.C
                a. Authorization checkbox
            2. Limitation of consent
                a. Checkboxes: drug abuse, alcoholism or alcohol abuse, infection with HIV, sickle cell anemia
            3. Authorization to change claimant’s address
                a. Authorization checkbox
        ii. Unauthenticated: personal information and additional authorization information 
            1. Section I: Veteran’s information (9 fields)
            2. Section II: Claimants information (5 fields) — optional, only if the claimant is not the veteran
            3. Authorization — same as 4.b.i above
    c. Present option to download filled-out form
        i. Just missing signatures
    d. Set expectations and guide to next steps
    e. Download to desktop (avoid opening in the browser)
5. Feedback page
    a. Update profile to display selected representative (pending request with link to next steps)

Profile Updates

1. If the user is logged in and has an existing representative, surface the status and the representative information

## Post-MVP

1. 21-22
    a. Allow folks not logged in to pre-fill personal information
    b. Allow folks logged in to pre-fill any remaining information (not personal/rep information)
2. Future search fields to investigate
    a. Rep name
    b. Organization
3. Submission
    a. Requires signatures
4. Notifications
    a. Representative approved request
    b. Representative rejected request
5. Manage requests (can the vet cancel a request)
6. Manage rep (can the vet cancel an existing rep)
7. Link/integrate with other, related experiences
