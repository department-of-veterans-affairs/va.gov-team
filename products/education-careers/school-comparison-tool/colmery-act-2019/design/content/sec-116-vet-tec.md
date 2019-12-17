# Sec 116 - VET TEC Integration in GI Bill Comparison Tool #

### Landing Page Screen No. { to come } 

Breadcrumb: [Home]() > [Education and Training]() > GI Bill Comparison Tool

## GI Bill Comparison Tool

Learn about education programs and compare benefits by school.

What's your military status? { Dropdown }  
 * Veteran { Default selection }
 * Active Duty
 * National Guard / Reserves
 * Spouse
 * Child


Which GI Bill benefit do you want to use? { Dropdown }  [(Learn More)]() { REUSE Existing help link modal }
 * Post-9/11 GI Bill (Ch 33) { Default selection }
 * Montgomery GI Bill (Ch 30)
 * Select Reserve GI Bill (Ch 1606)
 * REAP GI Bill (Ch 1607)
 * Vocational Rehabilitation & Employment (VR&E)
 * Dependents Educational Assistance (DEA)
 
Cumulative Post-9/11 active-duty service [(Learn More)]() { REUSE Existing help link modal }
 * 36+ months: 100% (includes BASIC) { Default selection }
 * 30 months: 90% (includes BASIC) 
 * 24 months: 80% (includes BASIC)
 * 18 months: 70% (excludes BASIC)
 * 12 months: 60% (excludes BASIC)
 * 6 months: 50% (excludes BASIC)
 * 90 days: 40% (excludes BASIC)
 * Less than 90 days: 0% (excludes BASIC)
 * GYSGT Fry Scholarship: 100%
 * Service-Connected Discharge: 100%
 * Purple Heart Service: 100%

{ If “Veteran” AND "Post-9/11 GI Bill (Ch 33)" are selected above, display "Type of institution" filter with VET TEC as an option below; otherwise suppress the "Type of institution" filter }

Type of institution { Radio }  
 * Schools { Default selection }
 * Employers (On-the-job training [OJT], apprenticeships)
 * VET TEC training providers [(Learn More)](){ help link } 

{ help text modal }
 
**VET TEC**

Veteran Employment Through Technology Education Courses (VET TEC) is a 5-year pilot program that matches Veterans with high-tech training providers. Veterans can start or advance their career in the high-tech industry with a training program that’ll take months—or just weeks—to complete.

[Learn more about VET TEC](https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/)

{ end help text modal }

{ If “VET TEC training providers” is selected above, display VET TEC logo, suppress the "How do you want to take classes" question and the search text field below. }

How do you want to take classes? { Radio }  
 * Online only
 * In person only { Default selection }
 * In person and online
 
Enter a city, school, or employer name { Search / filter text field }

[ Search Schools ] { button } 

[About this tool]() ||  [Download data on all schools (Excel)]()

________________________________________


### VET TEC Search Results Page Screen No. { to come } 

Breadcrumb: [Home]() > [Education and Training]() > [GI Bill Comparison Tool]()  > Search results

{ display VET TEC logo in upper right corner on medium & large displays, left aligned below page title on smaller displays }

## { NN }  Search Results

{Left column - filters}

### Refine search

City, VET TEC program or training provider { Search / filter text field }  

Country { Dropdown, default selection = "ALL" }

State { Dropdown, default selection = "ALL" }

{ checkbox } 
* Preferred providers { star icon } { default selection = none } [(Learn more)]() { help link } 

{ help text modal }

**Preferred training providers**

A provider is “preferred” if the training facility agrees to refund tuition and fees to VA if the student completes the program and doesn't find meaningful employment within 180 days. 

{ end help text modal }

Filter by provider { Checkboxes }
* Provider list items 

{ 1. Display up to 40 providers, alphabetically. Include # of programs in parentheses to the right of provider name. 

2. Counts beside Provider name will update based on application of search parameters / selected filters }

{ Right column: Search Results Display.  Results set containing 0 to N cards - display 10 results per screen with pagination, per GIBCT standard }


#### PROGRAM RESULT CARD 

{ left column } 

{ Alert / Caution labels display, as relevant } 

##### { Title of VET TEC Program - display all caps }

{ VET TEC PROVIDER NAME from Provider record - display in all caps }

{ Location from Provider Record - Display in all caps CITY, ST }

{ length of program label }

[View Details]()

{ right column } 

{ Preferred provider - display icon, as relevant } 

##### You may be eligible for up to:

###### { Icon } Tuition:          { MVP Default "TBD", display Tuition amount when available }

###### { Icon } Housing: (monthly)    { Default "$825-$(BAH based on provider zip)"/mo }

{ If no data, display "TBD" }

{ end right column }

[About this tool]() ||  [Download data on all schools (Excel)]()

________________________________________
 
### Provider Profile Screen No. { to come } 

Breadcrumb: [Home]() > [Education and Training]() > [GI Bill Comparison Tool]()  > [Search results]() > School details

{ display VET TEC logo in upper right corner on medium & large displays, left aligned below page title on smaller displays }

## { display VET TEC PROVIDER NAME – all caps }

{ Preferred provider if appropriate: Display Star Icon } Preferred provider [Learn more]( ) { help link } 

{ help text in modal }

**Preferred training providers**

A provider is “preferred” if the training facility agrees to refund tuition and fees to VA if the student completes the program and doesn't find meaningful employment within 180 days. 

{ end help text modal }

{ display, left col: Location Pin Icon & CITY, ST Text }

{ display, left col: Provider website Icon & URL, if available } 

{ display, center col: Provider phone Icon & Number, if available }

{ display, center col: Provider locale Icon & designation, if available }

{ right column } 

#### Additional resources

[Get started with CareerScope](https://va.careerscope.net/gibill) 

[Learn more about VET TEC](https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/)

[Apply for VET TEC]( https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994) 

[Submit a complaint through our Feedback System]( https://www.va.gov/education/submit-school-feedback)

{ end right column }

{ begin Accordion }

### Approved programs { Accordion Panel }

Select a program below to view your estimated benefits.  

{ Display all programs for the relevant provider at the location. }

{ Program user clicked through on will be selected. }

{ For each program, display Program name, program length (in weeks), Tuition & fees }

{ All initial financial calculations for tuition & housing, when possible, will be based on selected program }  

{ If no program data, display "Program data will be available for this provider soon. [Learn more about VET TEC programs](https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/)"  


### Estimate your benefits { Accordion Panel }

{ Left column }

Use the fields below to update your tuition and fees or to add a scholarship.

Tuition and fees for program ([Learn more]()) { help link }

{ help text in modal }

**Tuition and fees**

VA pays all tuition and fees for the VET TEC program directly to the training provider. 

If you're participating in a VET TEC program, you'll have the same annual tuition and fees cap as students attending a private institution under the Post-9/11 GI Bill. If your tuition and fees exceed that cap, you'll be responsible for paying those. 

Preferred Provider training programs aren't subject to a cap on tuition and fees.

{ end help text }

{ text field. Default display based on Tuition & fees of program user clicked through to view profile page.  Field updates when user changes program selection.  User is able to edit contents, input drives calculations within “Your estimated benefits” panel } 

Scholarships (excluding Pell) ([Learn more]()) { help link }

{ help text in modal }

**Scholarships** 

Are you receiving any scholarships or grants that go directly to pay your tuition or fees for this program? If so, add that number here.

{ end help text }

{ text field. Default display: $   0.  User is able to edit contents, input drives calculations within “Your estimated benefits” panel} 

{ end left column } 

{ Right column }

## Your estimated benefits ##

*{ display name of selected program }*  

### Tuition and fees: ###   

{ left align display }

{ Scholarships conditional content - display only if user inputs amount into Scholarships box in left column }

**Your scholarships**  { Display amount entered in Scholarships text field; right aligned }

{ end Scholarships conditional content }

VA pays to provider: ([Learn more]()) { help link } { Display tuition & fees amount; right aligned }

{ help text in modal }

**VA pays to provider** 

To help ensure that Veterans find jobs, VA pays VET TEC training providers in 3 installments based on the progress and success of their Veteran students.

Training providers receive:
 * An initial 25 percent of tuition and fees when the Veteran enrolls and begins attending the program
 * Another 25 percent when the Veteran completes their training
 * The remaining 50 percent once the Veteran secures meaningful employment in their field of study

{ end help text }
 
Upon enrollment in program (25%): { update with calculation based Tuition & fees amount, as appropriate }

Upon completion of program (25%): { update with calculation based Tuition & fees amount, as appropriate }

Upon employment (50%): { update with calculation based Tuition & fees amount, as appropriate }

**Out of pocket tuition:** { update with calculated balance, as appropriate }

{ right aligned display / calculation of program fees.  Display TBD if no amount available. }  

{ hr } 

**Housing allowance** ([Learn more]()) { help link }

{ help text in modal }

**Housing allowance**

If you attend your training program in person, your housing stipend will be equal to the monthly military Basic Allowance for Housing (BAH) for an E-5 with dependents. This is based on the zip code where you attend your training.

If you participate in an online program, your stipend will be half of the BAH national average for an E-5 with dependents.

**Note:** If you don’t attend a training for a full month, we’ll prorate your housing payment for the days you train.

{ end help text }

In-person monthly rate: ${display variable housing amount based on provider zip, right aligned}

Online monthly rate: ${display standard online housing amount, right aligned}

{ end benefits panel }

**Note:** Your VET TEC training won’t count against your GI Bill entitlement.

{ end right column }

### Veteran programs { Accordion Panel }

**Available at this campus**

{ Display: [Student Veteran Group (Site)](), with link to corresponding website if relevant } 

{ Display: [VetSuccess on Campus (Email Fname Lname)](), with VetSuccess on Campus emailto: link to if relevant } 

### Application process { Accordion Panel }

**How do I apply for VET TEC?**   

**To apply for the VET TEC program, you'll need to:**

1) Fill out an Application for Veteran Employment Through Technology Education Courses (VA Form 22-0994). If we approve your application, you’ll get a Certificate of Eligibility (COE) in the mail.

  [Apply for VET TEC (VA Form 22-0994)]( https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994)

2) After you’ve been approved for VET TEC, you can then apply to the VA-approved training program you’d like to attend.

  To learn more about available programs, [visit the training provider's website](). { link to provider URL if available.  If not, no link. }  

**What if I have questions about the VET TEC program?**

* Call us at 888-GIBILL-1 [(888-442-4551)](). We're here Monday through Friday, 8:00a.m. to 7:00 p.m. ET. If you have hearing loss, call TYY: 711, **or**
* Email us at VETTEC.VBABUF@va.gov



### Contact details { Accordion Panel }

**Physical address** { display label in left column }

{ physical address of VET TEC training provider, display in right column } 

**Mailing address** { display label in left column }

{ display mailing address of VET TEC training provider, display in right column }   

**Email address** { display label in left column }

{ email address of VET TEC training provider, display in right column } 

**Phone number** { display label in left column }

{ Phone number of VET TEC training provider, display in right column } 

 

#### School certifying officials ####

**Primary** { display label in left column }

{ display records for PRIMARY SCOs in right column - Fname Lname, Title, Email, Phone } 

**Secondary** { display label in left column }

{ display records for SECONDARY SCOs in right column - Fname Lname, Title, Email, Phone } 


### Additional information { Accordion Panel }

**Institution codes**

[VA facility code](){ help link }: { display institution code from VET TEC data file }  { help link }

{ help text in modal }

**VA facility code**

Unique identifier for VA-approved facilities.

{ end help text }

{ end Accordion }

[About this tool]() ||  [Download data on all schools (Excel)]()

________________________________________




