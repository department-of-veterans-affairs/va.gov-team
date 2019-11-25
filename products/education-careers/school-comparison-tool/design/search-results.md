# GIBCT User Stories for testing: Search results

## General goals

As a Veteran, I want to see search results based on what I entered into the search query on the landing page, so that I can review the schools/programs/benefits that are applicable to me

As a Veteran, I want to refine my search by certain filters, so that I can see more specific results based on my preferences

As a Veteran, I want to be able to update the information I entered about my benefit, how I want to take classes, and search keyword on the search results page, and see an updated list of results based on these changes

As a Veteran, I want to have anything I input update my search results in real time	show me the search results that are correct given the filters/info I entered

## Results list

As a Veteran, I want to see a number indicating how many search results I have, so that I can know how may institutions match my preferences

- [ ] Number in the heading matches the number of results in the list
- [ ] Updating any search / filtering criteria updates the number in the heading

As a Veteran, I want to see basic information about each institution in the search results

- [ ] Institution name
- [ ] Location shown as City, ST (if US) or City, Country (if outside US)
- [ ] Number of GI Bill students

As a Veteran, I want to see if an institution has cautionary information so that I can be more informed about the school

- [ ] "Caution" label appears on the institution
- [ ] Profile page for the institution also indicates caution and lists reason and student complaints

As a Veteran, for each institution in the search results I want to see information about the GI Bill benefits I may be eligible to receive at that school

- [ ] Annual tuition benefit
- [ ] Monthly housing benefit
- [ ] Annual books benefit

## Search filters

As a Veteran, I want to be able to change my search keyword so that I can find schools matching different search terms

- [ ] Modify search term in the search field
- [ ] Autocomplete dropdown appears
- [ ] Update search in one of two ways:
  - [ ] Select a term from the dropdown, **or**
  - [ ] Press 'enter' key
- [ ] Search results update to match the new search term

As a Veteran, I want to be able to refine my results by broad types of institutions

- [ ] See filter options for type of institution
  - All `(default selection)`
  - Schools only
  - Employers only
- [ ] If "Schools only" is selected, search results update in real time to show only schools
- [ ] If "Employers only" is selected, search results update in real time to show only employers

As a Veteran, I want to select a country to narrow down my search to those matching my choice of country in realtime

- [ ] See filter options to select country
- [ ] Select a country from the dropdown
- [ ] Search results are updated in real time to show only institutions in the selected country

As a Veteran looking for schools in the US, I want to select a state to narrow down my search to those matching my choice of state in realtime

- [ ] See filter options to select state
- [ ] Select a state from the dropdown
- [ ] Search results are updated in real time to show only institutions in the selected state

As a Veteran, I want to select programs I'm interested in to narrow down my search to these matches in realtime

- [ ] See options to select programs:
  - Student Vet Group
  - Yellow Ribbon
  - Principles of Excellence
  - 8 Keys to Vet Successs
- [ ] Select one or more options
- [ ] Search results are updated in real time to show only institutions that support all of the program(s) selected
- [ ] Profile page for each institution listed shows that the institutions support all selected programs

As a Veteran, I want to select a school type to narrow down my search to these matches in realtime

- [ ] See options to select type of school:
  - All `(default selection)`
  - For profit
  - OJT
  - Public
  - Private
  - Flight
- [ ] Select an option
- [ ] Search results are updated in real time to show only institutions that match the type selected
- [ ] Profile page for each institution listed shows that the institution matches the type selected

## Eligibility information

As a Veteran, I want to see my the eligibilty information I entered on the previous landing page carry over to the search results page

- [ ] All eligibility options I selected on the landing page appear on the search results page
- [ ] All acceptance criteria in [Landing page form](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Education/GIBCT/2017%20Q1%20Design%20Updates/User%20stories/landing-page.md#form) pass
- [ ] Search results are updated in real time to show GI Bill benefits particular to the entered information
