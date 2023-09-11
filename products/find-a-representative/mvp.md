# Find a Rep MVP

Find a Rep MVP will include desktop & mobile experiences

## MVP

1. Search
    1. If authenticated: display existing rep (if available) and how to change the rep
    1. Required fields
        1. Location 
            1. Single consolidated field that accepts address 1, city, state, zip code
                1. user can also "use my location" to populate this location field
            1. Default to a radius (50mi?)
                1. allow user to adjust search area through the map
        1. Type of Rep, including information about types of reps
1. Display search results
    1. Map display
    1. List display 
        1. sorted from closest to furthest
    c. Authenticated view (especially if we display the veteran’s existing representative)
1. Selection
    1. Search results will have a button to “Select” the representative
1. 21-22
    1. Pre-fill form on the back end
        1. Authenticated: both rep and personal information
        1. Unauthenticated: rep information, no personal information
    1. Present missing form fields to the user
        1. If logged in: additional  authorization information
            1. 19: Authorization for representative’s access to records protected by Section 7332, Title 38, U.S.C
                1. Authorization checkbox
            1. Limitation of consent
                1. Checkboxes: drug abuse, alcoholism or alcohol abuse, infection with HIV, sickle cell anemia
            1. Authorization to change claimant’s address
                1. Authorization checkbox
        1. Unauthenticated: personal information and additional authorization information 
            1. Section I: Veteran’s information (9 fields)
            1. Section II: Claimants information (5 fields) — optional, only if the claimant is not the veteran
            1. Authorization — same as 4.b.i above
    c. Present option to download filled-out form
        1. Just missing signatures
    d. Set expectations and guide to next steps
    e. Download to desktop (avoid opening in the browser)
1. Feedback page
    1. Update profile to display selected representative (pending request with link to next steps)

Profile Updates

1. If the user is logged in and has an existing representative, surface the status and the representative information

## Post-MVP

1. 21-22
    1. Allow folks not logged in to pre-fill personal information
    1. Allow folks logged in to pre-fill any remaining information (not personal/rep information)
1. Future search fields to investigate
    1. Rep name
    1. Organization
1. Submission
    1. Requires signatures
1. Notifications
    1. Representative approved request
    1. Representative rejected request
1. Manage requests (can the vet cancel a request)
1. Manage rep (can the vet cancel an existing rep)
1. Link/integrate with other, related experiences
