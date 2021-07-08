Discussion re: URL Structure for Translated Pages

•	Today we use the following URL structure for our Corona FAQ and Covid-19 pages:
- https://www.va.gov/coronavirus-veteran-frequently-asked-uestions-esp/
-	https://www.va.gov/coronavirus-veteran-frequently-asked-questions-tag/ 
-	https://www.va.gov/health-care/covid-19-vaccine-esp/ 
-	https://www.va.gov/health-care/covid-19-vaccine-tag/ 

•	Some options for Language Assistance and Resource Pages include (note: “support” is now “assistance”)
- www.va.gov/spanish-language-assistance-and-resources
- www.va.gov/espanol-language-assistance-and-resources/
-	www.va.gov/apoyo-y-recursos-en-espanol/ (would need translation validation)
- Mozilla guidelines uses international language codes (“es” for Spanish)
     -	www.va.gov/es-support-and-resources/
     -	www.va.gov/support-and-resources-es/ 
     
•	Guiding principles:
- URLs should closely match H1s
- Use plain language
- Be in-language

•	Other considerations:
- Pages are not fully translated (chrome of site – header, footer, navigation is English) and likely to remain this way for 1+ years. Need approach for 2 scenarios:
     - Scenario 1: fully translated
     - Scenario 2: only content portion of a page is translated
     
- Special characters are not supported in a URL so a URL generated from an H1 in would need to be modified (i.e. create a rule that replaces "ñ" with "n")
- Next supported language likely Chinese
- Will “Other Languages” page be in English or multiple languages?
     - TBD

•	Draft Language/Resource Page:

[h1] VA Spanish language support assistance and resources

[introduction]
We’re working to help make it easier for Veterans, caregivers, and family members to access information about their benefits and services in Spanish. On this page, you’ll find information about how to get free language assistance and how to resolve problems or file a discrimination complaint with VA. You’ll also find links to VA health care and benefits applications and resources available in Spanish. We’ll continue to add more resources in the coming months.

[on this page component] On this page
How to get language assistance
VA applications and resources available in Spanish
How to get help to resolve problems or file a discrimination complaint

•	May 12, 2021 Meeting Attendees: Danielle, Meg P, Mikki, Sharon
- The preference was to move forward using translated URLs (eg www.va.gov/apoyo-y-recursos-en-espanol/ )
- Need to check whether special characters can be supported in Github (which is where the landing pages are being created) 
- Revisit updating existing Covid-19 and Corona FAQ pages in future phase (and check whether Drupal supports special characters and how it’s handled. If not supported does it just drop the special character or the letter along with the character?).


