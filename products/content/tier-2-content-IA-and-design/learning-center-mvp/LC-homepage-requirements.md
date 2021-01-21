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
- FE: Audiences are listed alphabetically.
- FE: Audience labels are based on the {beneficiary} and {non-beneficiary} audience tag meta data in the CMS.
- FE: Display the audience link on the RS homepage only when the tag has been checked "Promoted to homepage" in the CMS by content author. _{updated 12/9 per CMS weekly 12/9 check-in}_
  -  I.e., __If NO articles are using that audience tag__, content author should not enable it for RS homepage "Browse by audience" section. {This is manual content process for now.} 
- FE: On default show up to 5 audience lables. 
- FE: When there are more than 5, display the "Show more" expander link. On clicking "Show more," display all of the remaining audiences that articles have enabled in the CMS. 
- FE: When a user clicks on an audience lable in this section, they should go to the "All articles tagged: {tag lable}" page. 

### For Content Editor/Publisher: CMS process + FE logic on the `Browse by audience` section

When the content team is ready to publish browse-by-audience links on the RS homepage, the content editor/publisher will need to:
- 1/ "Promote" the audience tag to the RS homepage from the CMS > Taxonomy > Audience section. 
- 2/ Then, go into the RS homepage edit view, and manually add a section header called __Browse by audience__. There is no need to manually enter audience links themselves. 
- 3/ The FE template will recognize the CMS __Browse by audience__ header text as an ID and dynamically display the audiences that have been `promoted` in the CMS. 


## Browse by topics section
- Always display "VA account and profile" as the first category in the section. 
- Display benefit categories alphabetically, after "VA account and profile."  
- Always display "Other topics and questions" as the last category in the section. 
- Category topics pull from the {Articles category} fields (primary and other) in the CMS.
- On default show up to 2 rows (6 categories). 
- When there are more than 6 categories with live content, display "Show all topics" button/link. Clicking it should display everything remaining that has live content. 
- When a category has only 5 or fewer articles, do not show the "Go to all articles" link. 
  
## Desktop and mobile 1.1 mockups  

[See ticket #15649](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15649)

