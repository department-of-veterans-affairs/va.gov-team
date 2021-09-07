# CT Search Content Document



# GI Bill Comparison Tool

Learn about and compare your GI Bill benefits at approved schools, employers, and VET TEC providers.

## Search Controls

"Search by name" / "Search by location" { tab options }

{ Search by name }

{ controls }

     School, employer, or training provider (* Required) { alphanumeric text input field, helper text "school, employer or training provider" } 

     Search { button with magnifying glass icon }
{ end controls }

{ end Search by name }

{ Search by location controls }

     City, state, or postal code (* Required ) { alphanumeric text input field, helper text "city, state or postal code" } 

     { radius dropdown, default is "within 25 miles" }
     
     { link, GPS icon + "Use my location" }

     Search { button with magnifying glass icon }
     
{ left side bar helper content }

Please enter a location (street, city, state, or postal code) then click search above to find institutions. 

{ end Search by location }


## Filters

Update tuition and housing estimates { accordion }

{ Update tuition and housing contents }

What's your military status? {dropdown, Veteran selected by default}


Which GI Bill benefit do you want to use? ([Learn more]()) {dropdown, Post-9/11 GI Bill (Ch 33) selected by default}

     {Learn more modal content, Learn more aria label: "Learn more about VA education and training programs" }

     #### Which GI Bill benefit do you want to use?

     You may be eligible for multiple types of education and training programs. Different programs offer different benefits, so it’s important to choose the program that will best meet your needs. Use this tool to compare programs and schools.

     Learn more about [GI Bill program benefits and eligibility requirements](https://www.va.gov/education/eligibility/).

     { end modal }

Cumulative Post-9/11 active-duty service ([Learn more]()) {dropdown, 36+ months: 100% selected by default}

     {Learn more modal content, Learn more aria label: "Learn more about Cumulative Post-9/11 service" }

     #### Cumulative Post-9/11 service

     The Post-9/11 GI Bill provides financial support for education and a housing allowance. To qualify for this program, you must have served after September 10, 2001 for at least 90 days or, if you were discharged with a service-connected disability, for at least 30 days. The service period for these benefits doesn't include your entry and initial skill training. You also need to have received an honorable discharge.

     { end modal }


{ if  Ch30 }
#### Selection of Ch30 Benefit results in this dropdown: Completed an enlistment of: ([Learn more]())

     {Learn more modal content, Learn more aria label: "Learn more about how the length of Montgomery GI Bill active-duty service affects your benefits" }

     #### Completed an enlistment of (MGIB):

     The Montgomery GI Bill – Active Duty provides education benefits to Veterans and service members who have served at least two years of active duty. The amount of time you served (2 year enlistment vs. 3 or more years) impacts your monthly payment amount when using the Montgomery GI Bill. 

     Select the length of your original active-duty enlistment to get an estimate of your monthly benefit. 

     [Visit the MGIB site to learn more](http://www.benefits.va.gov/gibill/mgib_ad.asp)

     { end modal content}
     
     { end if Ch30 }
  
  Will you be taking any classes in person?   {Learn more modal content, Learn more aria label: "Learn more about how we calculate your housing allowance based on where you take classes" }
  
  #### Your housing allowance is determined by where you take classes

Under the GI Bill you’re eligible to receive a monthly housing allowance. We calculate this monthly housing allowance based on where you take classes.

If you use Post-9/11 GI Bill benefits to take at least 1 in-person class, your housing allowance is based on where you do most of your coursework. If you take online courses only, your housing allowance is based on 50% of the national average.

Through Dec. 21, 2021, current and new students can receive in-person allowance rates if their school’s approved program changed from in-person to online learning due to COVID-19.

[View the current housing allowance payment rates](https://www.benefits.va.gov/gibill/resources/benefits_resources/rate_tables.asp?_ga=2.144591223.39405460.1542131207-1582256389.1508352376)

{ end modal }
     
Update results { button }

{ end Update tuition and housing accordion  }

Filter your results { accordion }

### Type of institution

Schools { checkbox, selected by default }
- Exclude these school types:
   - Public { checkbox }
   - For profit { checkbox }
   - Private { checkbox }
   - Foreign { checkbox }

See more... { hyperlink, when clicked "Flight" and "Correspondence" are added to checkbox list along with "See less..." hyperlink }


## About "the" school in sandbox. find out where "this" came from and fix it there 
- About this school
   - Has no cautionary warnings ([Learn more]) { checkbox }
   - Is accredited ([Learn more]) { checkbox }
   - Has a Student Veteran Group { checkbox }
   - Offers Yellow Ribbon Program { checkbox }

          { Has no cautionary warnings modal, aria label = "Learn more about cautionary warnings" }

          ### Cautionary warnings and school closings

          VA applies caution flags when we, or another federal agency, have increased regulatory or legal scrutiny of an educational program. We recommend students consider these warnings before enrolling in flagged programs.

          When VA receives notice that a school or campus location will be closing, we add a school closing flag to that profile. Once the closing date passes, we remove the institution from the Comparison Tool during the next system update.

          To learn more about caution flags, [visit the About this Tool page](https://www.benefits.va.gov/gibill/comparison_tool/about_this_tool.asp#CF).

          { end Has no cautionary warnings modal }

          { Is accredited modal, aria label = "Learn more about accreditation and how it can affect you" }

          ### Accreditation and why it matters

          The goal of accreditation is to ensure that the education provided by institutions of higher education meets acceptable levels of quality. Schools can be accredited by private educational associations of regional or national scope.

          Accreditation matters if you plan to start school at one institution and transfer to another to complete your degree. Be sure to ask any potential school about their credit transfer policy.

          { end Is accredited modal }
          
- Specialized mission (i.e., Single-gender, Religious affiliation, HBCU) { dropdown, default is "All" }

On-the-job training and apprenticeships { checkbox, selected by default }

VET TEC providers { checkbox, selected by default }
- Preferred providers { checkbox, not selected  }

### Location

Country { dropdown, default is All }
State { dropdown, default is All }

Update results { button }

{ end Filter your results }

## Search Results

{ Search by name }

Showing XXX search results for "**search term**" { appears above accordions }

{ search cards are listed in two columns to the right of the accordions on desktop and in single file below the accordions in mobile, order is determined by closest match }

## Content for error messages?

{ end Search by name }

{ Search by location }

Showing XXX search results for "**search term**" { appears above accordions }

{ search cards appear in single column list beneath accordions, map appears to the right of the accordions, order is determined by closest distance }

{ end Search by location }

{ if no results are found in location search }

We didn't find any institutions based on your search. **For better results*:*
- **Zoom in or out** of the map, or
- **Move the map** to a different area

Then click the **"Search this area of map"** button.

If we still haven't found any facilities near you, **please enter a different search term** (street, city, state, or postal code)

{ end if no results are found in location search }

{ if the user tries to select more than 3 institutions, display modal contents }

### You've reached the comparison limit

You can compare up to 3 institutions. You'll have to remove one of your selections before you can add another to the comparison.

{ end if user tries to select more than 3 institutions }

## Search cards

{ black circle with identifying number } { Distance from location appears above each card in 'Search by location' as **NN.NN miles**}

## IHL Cards

{ blue header } School: { Include all  special mission headings }  { end blue header }

### NAME OF IHL { hyperlink to profile page }

CITY, ST

{ When rating functionality launches, display overall star rating } **(X.X of 5) by XXX Veterans** 
{ if IHL has <5 ratings, display } **"Not yet rated by Veterans"**

{ If applicable, "This school has 1 cautionary warning" or "This school has X+1 cautionary warnings", expandable dropdown, closed by default }

**You may be eligible for up to:**

Tuition benefit:----------------------Housing benefit:

{display $X,XXX or 100% in-state } ------------- $X,XXX / month

**Accreditation:----------------------GI Bill students:**

{ applicable accreditation or N/A)----X,XXX

Compare { checkbox }


#### On-the-job training / Apprenticeship Cards

{ green header } On-the-job training / Apprenticeship  { end green header }

### NAME OF EMPLOYER { hyperlink to profile page }

CITY, ST


**You may be eligible for up to:**

Tuition benefit:----------------------Housing benefit:

N/A----------------------------------$X,XXX / month*

* Housing rate and the amount of entitlement used decrease every 6 months as training progresses

**Accreditation:----------------------GI Bill students:**

N/A----------------------------------XX

Compare { checkbox }


#### VET TEC Cards

{ red header } VET TEC  { end red header }

### NAME OF VET TEC PROVIDER { hyperlink to profile page }

CITY, STATE

{ If applicable, star icon + "**Preferred Provider**" }

{ If applicable, "This school has 1 cautionary warning" or "This school has X+1 cautionary warnings", expandable dropdown, closed by default }

**You may be eligible for up to:**

Tuition benefit:----------------------Housing benefit:

{ Display $X,XXX or TBD }------------------------$X,XXX / month

**Approved programs:-----------------------Program length:**

{ No of approved programs}---------------{ range of program lengths offered by provider, e.g. 480-576 hours }

Compare { checkbox }
