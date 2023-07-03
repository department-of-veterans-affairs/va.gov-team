# IA Design and Recommendations
**STATUS: COMPLETE**

**Team:** Office of the CTO

**Product/Featue:** Translation of Covid-19 content to spanish

**Background/Context:** This will be a short term implementation for translated content. Product outline is here: https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/11599


**IA Request:** https://app.zenhub.com/workspaces/vsp---product-support-5f85b91c14d8df0018fac414/issues/department-of-veterans-affairs/va.gov-team/16825

**On this page:**
- [IA structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

- The Spanish content pages will exist at their own URLs, as siblings to the English versions within the structure.
- The Spanish content page URL will have an "esp" appended to it to differentiate the two URLs
- URLs should not be translated.
- Show translated title of current page in breadcrumb to reinforce. While this does not provide a full translated experience, it further indicates that the user is on a translated page within an English experience. 


![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/8d3e1dd0-e3b9-4965-bc03-900bcfecc073)

**Page** | **URL** | **Breadcrumb** | **Notes**
--- | --- | --- | ---
Spanish Covid vaccine page | www.va.gov/health-care/covid-19-vaccine-esp/  | Home > Health care > Vacunas Covid-19 en VA |  Final segment of the breadcrumb will match the H1 of the page, which will be in Spanish
Spanish Covid Veteran FAQ page | www.va.gov/coronavirus-veteran-frequently-asked-questions-esp/ | Home > Preguntas frecuentes sobre el coronavirus: lo que los veteranos deben saber | Final segment of the breadcrumb will match the H1 of the page, which will be in Spanish
Spanish Covid research page  | www.va.gov/coronavirus-research-esp/ | Home > Voluntario para la investigación del coronavirus en VA | Final segment of the breadcrumb will match the H1 of the page, which will be in Spanish


## <a name="nav"></a>Navigation and Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Approach/recommendations:
- Each content page needs to provide a link to the alternative language version - i.e. English links to Spanish and Spanish links to English. 
- Tools need to provide a link back to both the English and Spanish content pages
- The CTA on the Spanish content page should include a note that tool is only available in English. 
- The health care left nav will show both the English and Spanish option so that the left nav can correctly indicate where the user is when they are on the Spanish content page and reinforce where the user is within the experience.


**Priority** | **Placement** | **Link to/Destination** | **Notes**
--- | --- | --- | ---
Must | Health care hub left nav |  www.va.gov/health-care/covid-19-vaccine-esp/ | Link should be placed directly after/below the English Covid vaccine option, and at the same level as the English page (not a child/indented). 


## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  No redirects or vanity URLs identified/needed at this time

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

12/14/2020 - Conversation with Danielle
- Planning to translate 3 current Coronavirus content pages: FAQs page, vaccine research page, and Covid vaccine page under health care
- At this time the assumption is that the research volunteer sign up and vaccine stay informed sign up tools will not be translated. 
- Left nav challenge: If we hide/suppress the Spanish content page from the left nav, the health care left nav will still display in its default state (i.e. "Get benefits" spoke defaults to expanded, other spokes collapsed, no page is highlighted in the left nav). 
- Considerations:
  - How much of our follow up is in the user's preferred/selected language?
    - Our understanding is that very little follow up is translated, so need to consider how helpful it is to provide a communication sign up in spanish when follow up communications from it will be in englis - is this misleading?
  - How much of the experience should we/can we translate...at this time (i.e. URL, breadcrumb, global nav, tools, etc)?
    - For the short term, we are not making any technical changes, and therefore limited to the current capabilities of the site/Drupal.
  - How do we balance providing translation of the needed information and the technical limitations of this short term solution? 
    - Maintain transparency that we are providing a limited translation and not a full immersive experience.

11/24/2020 - Kick-off for greater translation work
- Begin helping VA understand needs for localization
- VA doesn't provide a lot in translated content, its scattered, nor do they have an understanding of the audience and what they need..we have learned that caregivers are a big audience
- Congress would like all content translated, but focused on covid content
- Goals
	- Essential covid content translated
	- Demonstrated progress in spanish content
	- Gather data and user feedback to inform a longer term localization plan
- Original approach was to explore the google translate widget; this is likely not the optimal solution, so we backed up into more of a discovery mode
- UI toggle as short term solution?
- https://www.va.gov/coronavirus-veteran-frequently-asked-questions/
- https://www.va.gov/coronavirus-research
