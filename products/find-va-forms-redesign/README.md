This is the folder for all background, historical, discovery documents for this product. 

Things like: 
- Anaylytics
- Design files
- Content files
- Requirements
- Ongoing discussions and outcomes with VA stakeholders

VA forms stakeholder working group includes:

- Huber, Diane <Diane.Huber@va.gov>; 
- Walker, Stephen <Stephen.Walker4@va.gov>; 
- Ranes, Michelle M. <michelle.ranes@va.gov>
- Reid, Kevin <Kevin.Reid@va.gov>
- McCarthy, Brian <Brian.McCarthy4@va.gov>; 
- Smith, Jeremy <Jeremy.Smith@va.gov>; 
- Tuscher, Joshua (joshua.tuscher@va.gov); 
- VAVBAWAS/CO/PCO <PCO.VBACO@va.gov>; 
- Vaccaro-Palomaki, Missie <Missie.Vaccaro@va.gov>; 
- Smith, Gail T. (VACO) <gail.smith@va.gov>



## Status/Decisions:

__01/14/2020__

__Notes from Mikki re IA, URLs, canonicals, and redirects__
Recap from to our discussion with Michael Bastos, @ncksllvn @kelsonic and @jenniferlee-dsva on 1/14/20:

We will move forward with Option A above with some additional details.

__Option A__

The core search form URLs listed below will be permanently redirected (301) to the new URL: www.va.gov/find-forms/

https://www.va.gov/vaforms/
https://www.va.gov/vaforms/default.asp
https://www.va.gov/vaforms/search_action.asp
https://www.va.gov/vaforms/search_action.asp[all-parameter-variations]
To support the technical implementation/API work, a duplicate version https://www.va.gov/vaforms/search_action.asp will be created for the API to hit and collect data.

URL: www.va.gov/find-form-data
This new duplicate page must have a "noindex" tag and be excluded from the xml sitemap. [JL note: this duplicate page can be removed once the API can point directly to the forms database, per Michael.] 
The many child URLs that act as search landing pages for specific forms – i.e. https://www.va.gov/vaforms/form_detail.asp?FormNo=22-1990 - will not be impacted by this form search work. Each individual variation/URL will be redirected to a specific new URL. This will be mapped out as part of the form search landing page work.

__mm/dd/yyyy__
