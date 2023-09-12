# Find a Rep MVP

Find a Rep MVP will include desktop & mobile experiences

## MVP

1. Search
    1. If authenticated and if veteran has an existing rep, display existing rep and how to change the rep
    1. Required fields
        1. Location 
            1. Single consolidated field that accepts address 1, city, state, zip code
            1. 'use my location' feature to populate this location field
            1. Default to a radius (e.g. 50 miles)
        1. Select type of rep
            1. Veteran Service Organization (VS0)
            1. Representative in a Veteran Service Organization
            1. Attorney (Lawyer)
            1. Claims agent
        1. Rep definitions
            1. Veteran Service Organization (VS0)
            1. Representative in a Veteran Service Organization
            1. Attorney (Lawyer)
            1. Claims agent
1. Display search results
    1. Map display
    1. List display 
    1. If authenticated and if veteran has an existing rep, display existing rep
1. Selection
    1. Search results will have a button to 'Select' the representative
1. Form 21-22
    1. Pre-fill the form for PDF download
        1. Authenticated: both rep and personal information
        1. Unauthenticated: rep information, no personal information
    1. Present missing form fields to the user
        1. Authenticated: Capture additional authorization information
            1. Section 19: Authorization for representative’s access to records protected by Section 7332, Title 38, U.S.C. _(checkbox)_
            1. Section 20: Limitation of consent _(checkboxes)_
                1. Drug abuse
                1. Alcoholism or alcohol use problems
                1. Human immunodeficiency virus
                1. Sickle cell anemia
            1. Section 21: Authorization to change claimant’s address _(checkbox)_
        1. Unauthenticated: Capture personal information and additional authorization information 
            1. Section I: Veteran’s information (9 fields)
            1. Section II: (If other than veteran) Claimants information (5 fields)
            1. Authorization (same as sections 19-21 listed above):
            1. Section 19: Authorization for representative’s access to records protected by Section 7332, Title 38, U.S.C. _(checkbox)_
            1. Section 20: Limitation of consent _(checkboxes)_
                1. Drug abuse
                1. Alcoholism or alcohol use problems
                1. Human immunodeficiency virus
                1. Sickle cell anemia
            1. Section 21: Authorization to change claimant’s address _(checkbox)_
    1. Present option to download pre-filled PDF form (without signatures)
    1. Set expectations and guide to next steps
    1. Download to PDF desktop (do not open PDF in browser)
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
