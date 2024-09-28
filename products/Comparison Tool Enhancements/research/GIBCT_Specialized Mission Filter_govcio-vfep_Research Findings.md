# GI Bill Comparison Tool, Specialized Mission Filter Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), GI Bill Comparison Tool, Specialized Mission Filter, Team Name: govcio-vfep**

Date: 09/25 - 09/29/2023

Garry Forbes (garry.forbes@va.gov), Ariana Adili (ariana.adili@va.gov / @govcio.com)

<!-- _Once you've presented your research readout to your team, if you have a deck, insert a link to it here_ [Research readout](link here) -->

<br>

**Jump to:**

[Hypotheses and conclusions](#hypotheses-and-conclusions)

[Key findings](#key-findings)

[Recommendations](#recommendations)

[Who we talked to](#who-we-talked-to)

[Further research needed](#further-research-needed)

<br>

## Research Goals
The GI Bill Comparison Tool serves as an essential interface for Veterans and users, providing a platform to explore and assess higher education institutions. This is particularly valuable when individuals are actively engaged in searching or investigating various educational opportunities.
The Comparison Tool integrates filters to aid users and Veterans in refining searches for institutions or programs of interest. This study specifically aimed to assess the relevance and significance of filters, with a particular focus on the Specialized Mission Filter, in aligning with participants' search criteria.
<br>
<ol>
  <li>
    <p><strong>Evaluate usability</strong></p>
    <p>Assess the usability of the Comparison Tool interface by analyzing how easily participants can navigate, apply filters, and retrieve relevant information. This could include evaluating the clarity of filter options and the overall user experience.</p>
  </li>
  
  <li>
    <p><strong>User feedback</strong></p>
    <p>Gather feedback from participants regarding their experience with the comparison tool, including any challenges encountered or suggestions for improvement. Understand user preferences in terms of filter customization and the presentation of search results.</p>
  </li>
  
  <li>
    <p><strong>Effectiveness of filters</strong></p>
    <p>Evaluate the effectiveness of various filters in refining search results to meet participants' specific criteria. This can involve analyzing the precision and recall of the filters, indicating how well they match users' expectations.</p>
  </li>
</ol>


<!-- _First, set the context of this research by explaining how it fits into the Veteran’s journey. Explain what a Veteran might do before and after using this tool. What moments does this tool live in? Are there moments that matter to keep in mind? What are Veteran’s familiarity with tools like this? (do they use tools like this, or is this something new)._
_[See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)_

_Then, describe your goals for this research_

_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#research-goals)_ -->



## Research Questions

* What is the thought process users go through when considering their search criteria prior to initiating a search?
    - Do users have a clear idea of the institution or program they intend to search for when initiating their search?
    - Prior to selecting filters, which button do users choose to initiate their search: 'Search' button or the 'Apply Filters' button?
* Do users encounter challenges when selecting the filters they wish to use in their search?
    - Do users have difficulty locating the search results?
* Do users experience confusion regarding the meaning of each filter and how they could be beneficial to their search criteria?
* Do users realize they can select any filter to refine their search and deselect pre-selected filters?
* Are there any difficulties in locating the accordion component that contains all of the definitions for the specialized mission filters?
    - To what extent does the information within this component prove useful?

## Methodology 

We conducted 30-minute remote usability sessions via Zoom from 9/25 - 9/29/2023. Participants tested the GI Bill Comparison Tool using the design provided in the staging environment: https://staging.va.gov/education/gi-bill-comparison-tool
<br>
The tasks participants were instructed to test included:
<ol>
  <li>Enter search criteria 
    <ul>
      <li>Users can explore eligible institutions or programs by utilizing the 'search by name' or 'search by location' tabs available within the search panel of the comparison tool.</li>
    </ul>
  </li>

  <li>Refine your search
    <ul>
      <li>The filters are categorized into distinct groups: 'school types,' 'about the school,' 'other,' and 'specialized mission.' Users can enhance their search results by applying these filters.</li>
      <li>The filters under 'school types' and 'other' come pre-selected.</li>
      <li>'Search' button: changes search parameter</li>
      <li>'Apply filters' button: changes anything at all in the filters</li>
      <li>'Clear filters' button: starts from scratch. Clears everything except the search parameter</li>
      <li>Refreshing screen: reapplies filters before they were cleared</li>
    </ul>
  </li>

  <li>Locate the accordion component (definitions of each specialized mission)
    <ul>
      <li>The accordion component provides users with concise explanations of each specialized mission filter, allowing them to explore and satisfy their curiosity about each mission.</li>
      <li>Located under all filters.</li>
    </ul>
  </li>
</ol>


## Hypotheses and Conclusions
<ol>
  <li>
    <strong>Transferring all filters, with a particular emphasis on the specialized mission filters, to CT homepage will likely encourage users to utilize and apply them in refining their search criteria: MAYBE TRUE</strong>
    <ul>
    <li>Most participants found themselves unsure about which institution to search for because they either lacked knowledge of specific school names or were uncertain about which filters to apply, even if they did know a school's name. Consequently, these participants opted to explore the 'search by location' tab as a means to discover institutions in their residential area, with the hope of obtaining relevant search results.</li>
    <li>Numerous participants expressed the need of having a clear idea of what they were searching for before initiating a search for an institution, particularly when using the 'search by name' tab. 2/9 participants specifically aimed to search solely using a program name they were interested in, such as "Computer Science" and "Cyber Security." These searches did not produce any results for the participants, as the system mandates the use of a school name, employer, or training provider in the search criteria under the 'search by name' tab.</li>
    </ul>
  </li>
  <li>
    <strong>Results will be displayed for users regardless of the criteria they input: DEFINITELY FALSE</strong>
    <ul>
      <li>The GI Bill Comparison Tool will display results exclusively for institutions and programs that have been actively monitored and documented by those entities. If an institution has not recorded its information, users will not receive results for that specific institution. Users are unable to anticipate this lack of information in advance.</li>
    </ul>
  </li>
  
  <li>
    <strong>Users will possess a partial understanding of which filters they should choose when searching or refining their results: MAYBE TRUE</strong>
    <ul>
      <li>The majority of participants believed that the pre-selected filters were mandatory for their search criteria and, as a result, did not consider deselecting those filters. Additionally, most participants were unclear about the significance of specific filters, such as the 'is accredited' filter, for example.</li>
    </ul>
  </li>
  <li>
    <strong>Users will recognize that the specialized mission filters play a crucial role in determining the institutions or programs they wish to search for: LIKELY FALSE</strong>
    <ul>
      <li>The majority of participants tended to disregard the filters, either bypassing them entirely or showing limited to no interest in applying the specialized misison filters to their search criteria.</li>
    </ul>
  </li>
</ol>

<!-- _Hypotheses or tasks for this research along with the conclusions you found If you conducted a usability test, list the success or task completion rate._

_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#hypotheses-and-conclusions)_

_Hypothesis statement_

_("Maybe True", “Likely True”, “Definitely True”, “Likely False”, “Definitely False” or “Not enough information”) Why?_ -->


## Key Findings

* All nine respondents indicated that they were interested in exploring educational opportunities.
* All had some degree of difficulty finding what they wanted, and many pressed filtering options that appeared to be at cross-purposes with their initial search string (on either the Search by name or Search by location tabs). One user, for example, cleared all filters and entered “Harvard”. After pressing Search, the user was met with a “Please select at least one filter” message, to which he checked the “Public” school type filter. When there were still no results, the user added the “For profit” filter, and again received no results. Results did appear on the third try, though, by rechecking the “Private” school type.
* Three users recognized the value of the Specialized Mission Filter group, but felt using it might limit their results.
* The SMF descriptions component (which required pressing a link below the SMF filter group) was found and reviewed without prompting by several users.
* One user selected the “Hispanic-serving institutions” filter and pressed the “Apply filters” button; the user was expecting all matches (country-wide) for the selected filter, but none were returned because the Search field was left blank.
* After conducting searches that produced acceptable results, eight of nine users tapped the result card heading link to move away from the home results page and open the institution details page, requiring, after a few minutes of exploration of the details page contents, moderator intervention to guide the users back to the results page using the breadcrumb links or back button.
* One user entered a school acronym in the Search field, which produced no results, then corrected the search by entering a partial school name and making a selection from the autocomplete dropdown list.  
* One user found, unprompted, that a word or phrase can be entered in the Search field instead of an institution name; the user entered “forensic”, which produced five unsatisfactory results, then changed the search to “criminal”, which provided 31 results, including the school the user sought.
* A small number of users failed to use the “Apply filters” button after modifying filters, assuming filter selection was enough to refresh the results.
* The “Search by location” (map) option was at least as popular as the default name search; most users entered a zip code or municipality name on entry, though results were more often than not clearly disappointing to the users. At least three users were disappointed that the map provides no indication of distance between selected institutions and their location.   
### Participant comments
#### On Specialized Mission Filters and definitions of SMFs
*  “I didn’t find many schools available to me but I didn’t expect to. I didn’t notice the little ‘+’ thing at first until you pointed it out but I think that was just an error on my part—it’s not always easy to find that but it was helpful. It does work for me.”
* “This is different, the specialized missions…this is actually pretty good. I’ve never seen it in a questionnaire before, only when they ask about demographics at the end. This is pretty good because now someone who is Asian American and wants to try to search schools [can do it].”
* “I don’t think I’d use [SMF buttons], but I’ll click a couple of them.”
* “I thought I would find my selections right at the top – it doesn’t look like it is telling me that this is a ‘women’s-only’ [institution].”
* “What this tool is supposed to do, it is doing it – it is supposed to tell you how to get more information about the school. If I am looking for a woman-only school, or a Black university, it gives me the information I need. It is up to me to gather further information.”
* “This [specialized mission definitions] helped narrow it down for me.”
* “If I want to know where all of the HBCUs are - I assume that these are only eligible schools [GI eligible].” 
* “Specialized missions were helpful.”
### Other filtering options and features
* “You know when you select a location, it will provide options nearby – I was just curious how far I would have to go.” 
* [When filtering by location] “I would like to know the distance between the institution and my area of residence.”
* “I can’t expand the search for more than 75 miles – maybe expand the options to the entire US.”
* “I would prefer to search something with the filters itself – if I don’t know what the name of the institution [is], I just want to see options [benefit programs] that are available.”
* “This was helpful – especially for veterans. But when the search field is blank, I would still like to see any universities that are applicable to the filters I apply.” 
* “One of the things I look for are overall ratings for schools.”
* “I have tried to use the CT before but I had to retry my searches when I tried to compare different schools; so I would say that I am more aware of CT, as opposed to have actually have used it.”
* “Did I miss something? I was thinking that if I applied the filters and clicked the search button that I would still get results.”
* “If I search by location...I wonder if I can find more results as to what is available in my area.” 
* “Quite satisfied, provides everything I’d need to know.” 
* “Navigation [was] very, very easy.”
* “[Tool] and filters were useful and the interface is user-friendly.” “[you would] need to know what you’re looking for to get most use out of [the application].”
* “I wish I had this when I was looking for another school to go to way back when--this works for me.”
* Like the tool and filters “100%”.
* “I see that there are many GI Bill students [at a selected school], so I know I am not the only one.” 
* “I didn’t notice you can filter by location.”
* “I always forget there is a [GI Bill Comparison] button on the VA home page, so I like the way that you presented the filters today. I feel like it will be much more valuable to veterans.”
* “I think it’s backwards--you would have to know what you want to search for and what [filters] would apply to them.” 
* “I don’t know the names of these schools, that is what I am trying to find out.” 
* “You see now results come up, after I pressed these [filters], you could get 4 search results or 50.”
### Other findings
* When looking in the 'search by name' field, people might know a name but won’t know further details such as if it is accredited, private, etc. so when those results appear, they'll have to go back and refine their search even more.
* Search by location tab makes more sense for SMF.
* How often do people interact with the SMF's versus 'school types' and 'other'? 
### Previous experience with the GI Bill Comparison Tool
* Have never visited the GI Bill Comparison Tool site before this study: 4 users
* Were aware of the site but never or only briefly used it: 3 users
* Have used the site, but not to the point of applying to an institution: 2 users
* Used the site to select and apply to an institution: 0 users


## Details of Findings 


**3/9 users recognized the value of the Specialized Mission Filter group, but felt using it might limit their results.**


> “I don't think I would use the Specialized Mission Filters, but I will click on a couple of them.”

> “I didn’t find many schools available to me but I didn’t expect to. I didn’t notice the little ‘+’ thing at first until you pointed it out but I think that was just an error on my part—it’s not always easy to find that but it was helpful. It does work for me.” 


**All had some degree of difficulty finding what they wanted, and many pressed filtering options that appeared to be at cross-purposes with their initial search string (on either the Search by name or Search by location tabs).**


> One user, for example, cleared all filters and entered “Harvard”. After pressing Search, the user was met with a “Please select at least one filter” message, to which he checked the “Public” school type filter. When there were still no results, the user added the “For profit” filter, and again received no results. Results did appear on the third try, though, by rechecking the “Private” school type.

>“I don’t know the names of these schools, that is what I am trying to find out.” 


**At least one user was under the impression that selecting a Specialized Mission Filter would provide them with all schools that they could select from to support that filter**

> _One user selected the “Hispanic-serving institutions” filter and pressed the “Apply filters” button; the user was expecting all matches (country-wide) for the selected filter, but none were returned because the Search field was left blank._



<!-- ## Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._ -->


## Recommendations

* Investigate methods that would allow users to search with an empty search field 
    * "If I want to know where all of the HBCU’s are - I assume that these are only eligible schools [GI eligible] > “I don’t know the names of these schools, that is what I am trying to find out”
    * “I can’t expand the search for more than 75 miles – <b>maybe expand the options to the entire US”</b>
* Search tips above search tabs and accordion drop-down
    * Most users in the study struggled with finding the right combination of filters and search parameters and would benefit from basic search tips.


<!-- ## Next Steps

_Next steps here. Include owners if appropriate. -->


## Further research needed
None at this time.


<!-- ## Appendix

[Research plan](link here)

[Conversation guide](link here)

[Interview transcripts](link here)


## Tools used for Synthesis

e.g. mural boards, etc.  


## Pages and applications used

Link to prototypes or pages that were tested


## Other supporting documents created

e.g. user flows, personas, etc.


## Secondary research

Include any secondary research you may have. 

E.g. web analytics, ForeSee data, SME interviews, competitive analysis, or other relevant research studies. --> 


## Who we talked to 
<!-- _Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#who-we-talked-to)_ -->

<!-- **Recruitment criteria**

_If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants._ -->

We conducted our studies with a group of 9 Veterans actively pursuing educational opportunities, all of whom have attained a minimum of a high school education or higher.

Audience segment:
* Veterans: 9 (initially requested 10-15)
* Caregivers: 0
* Family members of a Veteran: 0


Gender:
* Male: 6
* Female: 3 


LGBTQ+:
* Transgender: 0
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman:0
* Gay, lesbian, or bisexual: 0


Devices used during study: 
* Desktop: 7
* Tablet: 1
* Smart phone: 0
* Assistive Technology: 1


Age:
* 25-34: 2
* 35-44: 0
* 45-54: 3
* 55-64: 3
* 65+: 1
* Unknown: x


Education:
* High school degree or equivalent: 1
* Some college (no degree): 3
* Associate's degree, trade certificate or vocational training: 3
* Bachelor's degree: 2
* Master's degree: 0
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 0
* Rural: 0
* Unknown: 9


Race:
* White: 2
* Black: 5
* Hispanic: 1
* Biracial: 0
* Asian: 1
* Native: 0


<!-- Disability and Assistive Technology (AT):
* Cognitive: x
* AT beginner: x
* AT advanced user: x
* Desktop screen reader: x
* Mobile screen reader: x
* Magnification/Zoom: x
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: x
* Hearing aids: x
* Sighted keyboard: x
* Captions: x -->


<!-- ## Underserved groups we haven’t talked to 

_[Complete the VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)_

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Group 1
* Group 2
* Group 3

_[insert screenshot of completed recruitment checker]_
![VA-recruitment-checker](link - add image to github folder and link here with .png) -->
