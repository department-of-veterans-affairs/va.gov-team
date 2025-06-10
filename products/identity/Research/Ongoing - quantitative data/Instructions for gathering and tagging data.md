# Instructions for gathering and process for tagging data

## Base setup  
  * Medallia A11 questions are via intercept (ie popup)  
    * This questionnaire includes: experience, understanding, trust on 1-5 scale, and open field  
    * includes data like OS, browser, screen, and URL where survey started  
  * Medallia VFS questionnaire are from using the “feedback” button on each page   
    * This one includes open field questions about current task on VA.gov and overall satisfaction 1-5 scale  
    * includes data like OS, browser, screen, and URL where survey started  
  * My VA411 data is from veteran help/support calls  
    * We get the Case Type and Case category, which are preset options.  
    * There is also a Subject that the call center agent puts in, and it tends to be clear of PII but occasionally something slips in, so best to either keep this col in VA secure space or not copy it over when exporting other data.  
    * They don’t give us the details of each case/ticket, so a lot of times this data can feel very vague, and we’re just making a best guess at how to tag it.  
* Request dataset from Contact Center team via ticket  
  * Request both types of survey data and contact center data with same ticket template  
    * [https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jwoodman5%2C+ianMcCullough-ob\&labels=VSP-contact-center%2Ccc-data-request\&template=qualitative-data-request.yml\&title=Qualitative+Data+Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jwoodman5%2C+ianMcCullough-ob&labels=VSP-contact-center%2Ccc-data-request&template=qualitative-data-request.yml&title=Qualitative+Data+Request)   

### Requesting Medallia 'A11' intercept survey and Medallia 'VFS' feedback button survey - these types are requested on the same ticket
* Example request ticket: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/98616](https://github.com/department-of-veterans-affairs/va.gov-team/issues/98616)
* Data Type Requested \- `User Surveys`  
* Data Source Type \- `Medallia` 
* Date Range Start \- `Select range`  
* Date Range End \- `Select range`
* Product Name(s) \- `Identity, authentication, sign in, terms of use `
* Product Description  
   * ```Identity team products cover authentication. We connect sign-in credentials (from ID.me, Login.gov, MHV, and DSLogon) to both VA.gov and the VA mobile app. We also own the universal sign-in page and modal, Terms of Use page, and all sign in flows from any page on VA.gov, like sign in widgets. Our major initiatives currently include deprecating MHV and DS Logon sign-in methods and working on a delegate access or caregiver access solution```
   * Survey URL(s), key term(s), case category or type  
   > * URLs - can really be anything across the site, since sign in is initiated from many different pages and the sign in modal appends to the end of most pages as  `/?next=loginModal` We’d like to see feedback from all pages around the site where folks mention sign-in related products. That said, URLs of particular interest:
   >- Pages our team owns:
   >   - https://www.va.gov/sign-in/ 
   >      - please include all variations under this path
   >   - https://www.va.gov/terms-of-use
   >- We'd also like to see resources pages that relate to sign in and verify especially the following:
   >   - https://www.va.gov/resources/creating-an-account-for-vagov/
   >   - https://www.va.gov/resources/signing-in-to-vagov
   >   - https://www.va.gov/resources/how-to-create-an-idme-account-for-va/
   >   - https://www.va.gov/resources/how-to-create-a-logingov-account-for-va/
   >   - https://www.va.gov/initiatives/prepare-for-vas-secure-sign-in-changes/
   >   - https://www.va.gov/resources/should-i-create-a-logingov-or-idme-account-to-sign-in-to-vagov/
   >   - https://www.va.gov/resources/support-for-common-logingov-and-idme-issues/
   >   - https://www.va.gov/resources/tag/sign-in/  
   >   - https://www.va.gov/resources/what-if-i-cant-sign-in-to-vagov-because-my-password-doesnt-work/
   >   - https://www.va.gov/resources/what-to-bring-to-create-your-online-sign-in-account/
   >   - https://www.va.gov/resources/what-to-do-if-you-havent-switched-to-logingov-or-idme-yet/
   >   - https://www.va.gov/resources/verifying-your-identity-on-vagov/
   >   - https://www.va.gov/resources/videos-for-how-to-set-up-your-online-va-sign-in-account/
   >   - https://www.va.gov/resources/what-if-i-cant-sign-in-to-vagov-because-my-password-doesnt-work/
   >
   >- key terms - sign in, signin, sign on, signon, signing in, signing on, log in, login, log on, logon, logging in, logging on, sign out, sign off, signing out, signing off, log out, log off, logging out, logging off, password, pass word, account, username, user name, mfa, multifactor auth, 2 factor auth, two factor auth, two factor, text code, authenticate, authentication, verify, verification, terms of use, terms of service, hacked, locked out, security, ID.me, IDme, ID me, Login.gov, Login gov
    * Sub URLs - ``Yes``  
    * File Delivery Format - ``One file`` 

 
### Requesting MyVA411 call center tickets   
* Example request ticket: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/98615\#event-15586521363](https://github.com/department-of-veterans-affairs/va.gov-team/issues/98615#event-15586521363)   
* Data Type Requested \- ``Support`` 
* Data Source Type \- ``MyVA.411`` 
* Date Range Start \- ``Select range``
* Date Range End \- ``Select range``
* Product Name(s) \- ``Identity, authentication, sign in, terms of use`` 
* Product Description  
   * ``Identity products cover authentication. We connect sign in credentials (from ID.me, Login.gov, DSLogon, and formerly MHV) to both VA.gov and the VA mobile app. We own the universal sign in page and modal, Terms of Use page, and all sign in flows starting from any page on VA.gov, like sign in alert widgets.``  
   * Survey URL(s), key term(s), case category or type  
     * Navigation Issues | Account Sign In  
     * Navigation Issues | Identity  
     * Inability to Sign In | Two-factor authentication  
     * Inability to Sign In | Confirmation Email Issue  
     * Inability to Sign In | EVSS Errors  
     * Identity Verification Issues | ID.me  
     * Identity Verification Issues | DS Logon  
     * Identity Verification Issues | My HealtheVet  
     * Identity Verification Issues | Login.gov  
     * Forgot Password | DS Logon  
     * Forgot Password | ID.me  
     * Forgot Password | My HealtheVet  
     * Forgot Password | Login.gov  
     * Unable to Update Information | Profile - Contact Information  
     * Unable to Update Information | Profile - Direct Deposit Information
     * Unable to Update Information | Profile - Personal Information
   * Sub URLs \- ``Yes``  
   * File Delivery Format \- ``One file``  
  

## Setting up survey data  

* They’ll notify via you VA email with an Excel link  
* They don’t remove PII/PHI \!\!  
* You’ll have to make a copy of the file they send - it's read only 
* I suggest working via VA CAG in Excel through the first part, then export data with no PII, to do formulas in Google docs.
  * See prior sheet tabs here: [Quantitative - sign in 2024](https://docs.google.com/spreadsheets/d/1NHPx9oYcSGDt_1PrF1q5acVdSD4_8SVBA7jvN7fp32g/edit?gid=0#gid=0)[Quantitative - sign in 2024](https://docs.google.com/spreadsheets/d/1NHPx9oYcSGDt_1PrF1q5acVdSD4_8SVBA7jvN7fp32g/edit?gid=1118591188#gid=1118591188)   
  * I like to first split data onto one tab for feedback survey, and one tab for intercept. I noticed I tend to get all data on one tab for the surveys.  
  * Several columns are only used for one survey or the other. So if data comes together, once you split into 2 tabs, you can delete columns that are not needed for that survey.  
* Work on feedback data tab   
  * First add 3 new columns: tags, sentiment, and another for notes  
  * For tags, use existing tags found [Quantitative - sign in 2024](https://docs.google.com/spreadsheets/d/1NHPx9oYcSGDt_1PrF1q5acVdSD4_8SVBA7jvN7fp32g/edit?gid=976351844#gid=976351844). Carefully consider if a new one is needed. Tag each survey based on the written feedback in the open field.  
  * For sentiment, first look at the “VA.gov experience” column   
    * Generally a score of 4 or 5 will be positive  
    * Generally a score of 3 will be neutral  
    * Generally a score of 1 or 2 will be negative  
    * Then finesse if needed using judgment, since the goal is to capture sentiment of sign in products. More specific data, like open field data, can be weighed slightly higher than the 1-5 score   
      * Example, if a score of 4 is given but the open field is generally negative about sign in products, adjust down to neutral or negative  
      * Example, if a score of 1 is given but the open field is negative of other parts of the site, but positive of sign in products, adjust up to neutral or positive.  
      * Example, no rating left for VA experience, but understanding and trust ratings are negative and open field seems negative to sign in products, classify as negative  
  * For context/notes column \- if important data gets lost by pairing down to just tags and sentiment, capture here, **without PII.** Copy over any quotes from the open field that really speak to the topic.  
  * Along the way, if you have time, you can redact any PII in the open response field. We’ll never need personal details. Best to remove it while you’re working with it.  
* Working on the intercept data tab  
  * First add 2 new columns: tags, and another for other notes  
    * I haven’t been doing sentiment on this survey, but it’s something we could consider adding  
  * For tags, use existing tags found [Quantitative - sign in 2024](https://docs.google.com/spreadsheets/d/1NHPx9oYcSGDt_1PrF1q5acVdSD4_8SVBA7jvN7fp32g/edit?gid=976351844#gid=976351844). Carefully consider if a new one is needed. Tag each survey based on the written feedback in the open field.  
  * For context/notes column \- if important data gets lost by pairing down to just tags and sentiment, capture here, **without PII.** Copy over any quotes from the open field that really speak to the topic.  
  * Along the way, if you have time, you can redact any PII in the open response field. We’ll never need personal details. Best to remove it while you’re working with it.  
* I then move data over to Google Sheets outside of the CAG environment  \- take extra precaution to not include PII  
  * I recommend don’t copy over any open field answers  
  * I find it easiest while in CAG to copy over data to a new PII clean Excel file.  
  * Copy over only columns that for sure won’t have PII \- in other words leave off user input open answer data  
  * Once the PII free file is saved, email that to your contactor email.   
  * Then pull up that PII free file in Google Sheets for further data manipulation  
* Working on Call Center, My VA 411 data  
  * First add 2 new columns: tags, and another for other notes  
    * I don’t recommend tracking sentiment on this data, because it’s very likely that folks calling have some immediate issue or displeasure. It’s also too much data to comb through individually in this way.  
  * For tags \- first add filters, so it’s easier to tag by like data.  
    * Case Category and Types are added by the help desk agent  
    * Some Case Category and Types can be researcher tagged en masse.  
      * Unable to Update Information \> Profile \- Contact Information  
        * Tag all of these “issue \- personal info”  
      * Unable to Update Information \> Profile \- Direct Deposit Information  
        * Tag all of these “issue \- personal info”  
      * Unable to Update Information \> Profile \- Personal Information   
        * Tag all of these “issue \- personal info”  
      * Unable to Update Information \> Profile \- Military Information  
        * Sometimes they send this with the other data from this Category, but we don’t need it. It can all be deleted.
  * Other Case Category and Type combos are more nuanced  
    * Filter by Category and Type and then sort by Subject so that you can easily tag large groups of similar items at one time  
    * It seems that many help desk agents use the same phrases in the Subject column  
      * This is helpful like for the Category is Identity Verification with Subject that mentions verification. This is a clear tag for “verify”  
      * This can also help sort out mislabeled Categories or Types, for example if the subject says “forgot password” or “locked out of account” instead  
      * Where it’s unclear what the Subject means, tag based on Category and Type  
  * Context/notes field  
    * The Subject field has some risk of PII, where the call center adds open field data. There are thousands of entries on this data so it’s best to not copy this column outside of CAG  
    * I would recommend copying over any context or quotes that stand out to you from the Subject field over to the column you added for context/notes. This way there is no PII data to the new context/notes column.

* Once over in Sheets  
  * Make sure tags match drop downs  
    * To do this, on the sentiment column, copy the dropdown for sentiment and paste special \> data validation
