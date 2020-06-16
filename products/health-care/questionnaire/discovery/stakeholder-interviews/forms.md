# Meeting Notes
Forms - Matt Self, Steve Kovacs, C.C. Gong | Tuesday 6/16 2pm-3pm EST

eBenefits (Steve K. and Jason Wolf)
Caregiver (CC Gong and Alayna Abel)
B&M 2 (Matt Self and Leah Keeler)

**General Questions**
- Content of questions -Forms content creation?
- Tool for creating the form - Forms tool builder?
- Notifications to send to veteran to fill-out/download
- Any of these discrete fields or only pdf?
  - Design standard for form fields (ie. toolkit)
- Test sites we can view?
- Are they authenticated any unauth?
- Any bi-directional API/interface into the EHR 
  - pdf or discrete
- Conditional logic?
- Where are the forms stored or data captured? 


- Forms system- va.gov platform- tools common veteran services - front end of the form.  
	- challenges - in engineering  
	- PM- platform kevin hauffman
	- ryan thurwell - design lead.
-- staging.cv test account - document in staging as a user- to view any of these products

## e-Bennefits
- discrete and flat file into benefits API-Lighthouse
-	6 forms - personalization - update address in profile- (excused from information collection) 
	- Their forms are static (2 years)
- mix of unauth and authenticated depending on what you do. 
- Va.gov site enables for pre-fill (save in place comes out of the box) when user starts the app and attempt to prefill address, name and phone from VA profile service, Gender,  MPI service. 
- Future strategy to add notifications 
- content- static from paper form.
	- plain language to translate and leave out
	- information collection act (should review) 


## Caregiver
- 10 10 CG vets and caregivers fill out to get benefits
- multiple authors - and potentially up to 3 authors 
- unauthenticated model - assume in same room and pass keyboard and to fill out
- discrete form they fill out
- CMS- it saving 


## B&M 2
- 3 or 4 generate pds and submit - pension, pre-need, 530, 534 
- send through central
- take data and flatten to a pdf - Api
	- discrete form then flatten the doc for sending back to source system
-  content- static from paper form.
- no notifications yet? email is in plan but not defined strategy
