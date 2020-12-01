# Learning center (global) homepage requirements

This is WIP and may evolve based on user research and technical findings.

- Final name: Resources and support. 
- H1: Resources and support
- Lc homepage will include search option prominently. It will include both LC and 'all va' options. 
- Must enable search error messages and standard system error messages.
- LC homepage must allow full width banner alert component
- LC homepage must allow in-body alert component (reusable or non-reusable) - TBD ux recommendation: below the search bar
- LC homepage CMS governance - owned and managed by PW. - Up to 5 articles can be displayed per category and then a link to see all of the articles in that category - 'Go to all articles' (in this category). 
- On 1.0 and 1.1 launch, the PW content team should have the ability to curate which 5 articles to surface on the homepage under each category. (In the future, we'd like this curation to be automated based on analytics, such as what article users view most often each month or X timeframe TBD.) 
- The categories in the 'Browse ~Find articles~ by topics' should appear alphabetically by the category name, with the exception of the 'Other' category which should always be the last category. 
- The audience labels under the beneficiary vs. non-beneficiary boxes should appear in alpha list. Up to 5, and then expand link to show more. 
- Must enable default analytics tracking

# Learning center homepage 1.1 FE logic and UX

1.1 design has been updated to reflect interim, continuous content publishing mode. (Note: once all audiences, etc. are available, the RS homepage design may need to be updated again.)

## Browse by audience section
- Audiences are listed alphabetically.
- Audience labels are based on the {beneficiary} and {non-beneficiary} audience tag meta data in the CMS.
- Display audience only when RS content in the CMS has that audience checked. 
  -  I.e., __If NO articles are using that audience tag__, do not display as an audience in the Browse by audience section.
- On default show up to 5 audience lables. 
- When there are more than 5, display the "Show more" expander link. On clicking "Show more," display all of the remaining audiences that articles have enabled in the CMS. 
- When a user clicks on an audience lable in this section, they should go to the "All articles tagged: {tag lable}" page. 
  

## Browse by topics section
- Display categories in the FE only when articles in the CMS has it selected as a __PRIMARY category__. 
- Always display "VA account and profile" as the first category in the section. 
- Display benefit categories alphabetically, after "VA account and profile."  
- Always display "Other topics and questions" as the last category in the section. 
- Category topics pull from the {Articles primary category} field in the CMS.
- On default show up to 2 rows (6 categories). 
- When there are more than 6 categories with live content, display "Show all topics" button/link. Clicking it should display everything remaining that has live content. 

  
## Desktop and mobile 1.1 mockups  

[See ticket #15649](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15649)

