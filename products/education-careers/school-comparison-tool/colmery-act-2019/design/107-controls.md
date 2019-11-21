### 107 Control


#### Institutions based in the U.S.

Question: 

Where will you take the majority of your classes? ([Learn more]()) { radio buttons }
* { display page title, e.g., COLLEGE OF CHARLESTON }
* { conditional, if there are extensions } An extension campus 
* { else, if there are no extensions } Other location 

{ if "An extension campus" selected and current record has children (extension campuses), display:}

Choose the location where you’ll take your classes { dropdown contains all children ( extension campuses) and "Other..."  option }
* {child item N: Title, City, ST - e.g., Santa Barbara Extension (Santa Barbara, CA) }
* {child item N+1: Title, City, ST - e.g., Santa Barbara Extension (Santa Barbara, CA) }
* Other…

{ if "Other location..." selected and current record has no children, OR if "Other..." selected in drop-down, display zip code question & text field, and "outside the U.S." checkbox }

Please enter the zip code where you'll take your classes { text field for zip code entry }

I'll be taking classes outside of the U.S. and U.S. territories {checkbox - if selected, remove text field for zip code entry }

{ Display confirmation for valid zip code entry: corresponding City, ST from zip code look up }

{ Error message when no valid record is found: "No rates for this zip code found. Try another zip code." }


#### Institutions based outside the U.S.

Question: 

Where will you take the majority of your classes? ([Learn more]()) { radio buttons }
* { display page title, e.g., COLLEGE OF CHARLESTON }
* { conditional, if there are extensions } An extension campus 
* { else, if there are no extensions } Other location 

{ if "An extension campus" selected and current record has children (extension campuses), display question }

Choose the location where you’ll take your classes { dropdown contains all children ( extension campuses) and "Other..."  option }
* {child item N: Title, City, ST - e.g., Santa Barbara Extension (Santa Barbara, CA) }
* {child item N+1: Title, City, ST - e.g., Santa Barbara Extension (Santa Barbara, CA) }
* Other…

{ if "Other location..." selected and current record has no children, OR if "Other..." selected in drop-down, display zip code question & text field, and "outside the U.S." checkbox }

If you're taking classes in the U.S., enter the location's zip code { text field for zip code entry }

I'll be taking classes outside of the U.S. and U.S. territories {checkbox - if selected, remove text field for zip code entry }

{ Display confirmation for valid zip code entry: corresponding City, ST from zip code look up }

{ Error message when no valid record is found: "No rates for this zip code found. Try another zip code." }


### School Locations Panel

{ suppressed if there are no branches or extensions to display } 

#### School Locations 

Below are locations for { conditional content: MAIN CAMPUS NAME }. The housing estimates shown here are based on the Department of Defense E-5 with dependents rate. The estimates are for a full-time student taking in-person classes. { conditional content to display when links are present in School locations panel: "Select a link to view another location and calculate the benefits you'd receive there." }  
