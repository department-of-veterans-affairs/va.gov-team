# Health Facility Data Sourcing

## Description
The CRM team relies on health care facility ids and names to route inquiries.  Currently they keep a manual listing of health care facilities that gets updated on demand and get published to the form in a release cycle.  

The VA has the Lighthouse API which is supposed to be the definitive source of VA information.  [Lighthouse has a Facilities API](https://developer.va.gov/explore/api/va-facilities/docs?version=current) for retrieving facility information.  

## Task
We need to determine if Lighthouse can be used to retrieve health care facility information.  The primary considerations for this decision are: 
1.  Would there be any gap in data elements if we switched from CRM Manual list to Lighthouse?
2.  If we transitioned, will there be any impact to routing of inquiries?

## Data 
Pulled records from CxDW and Ligthouse and did a comparison to see if all the CRM records are in the Lighthouse.  

[Comparison between facilities Document](https://github.com/department-of-veterans-affairs/ask-va/files/13251702/compare_records_manual_update.xlsx)

Of the 141 health facilities the CRM team passed us: 
* 128 of them matched on facility id and name
* 11 matched on ID but not name
* 2 didn't match on name or id

For the 2 that didn't match on id or name: 
* Northern California Health Care System
  * This is actually a large health care system with multiple medical facilities.
  * Lighthouse breaks the system down into multiple sub facilities that each denote NCHCS as their respective parent.
  * For the CRM perspective: The web shows NCHCS as two VAMCs - we wouldn't include the 'parent' as a facility since there are no PATSR users associated to it
* VHACO
  * VHACO is a CRM only facility (not used in Portal).  It is a default routing location if the AVA agent cant determine what facility to send a request to

## Recommendation
The recommendation would be to use the Lighthouse API for HealthCare facilities but to limit the results to only those facilities that have routing rules specified for them (the 140 listed in the comparison document). The data from there should be the most up to date information available and would remove any need for a manual updating of the list availble. 

Any health facilities that we allow for selection in the form that are not currently used by the CRM team, will get defaulted to the 101 VHACO facility id.  

For the NCHCS use case, we can either:
  1. Replace the 14 medical centers that belong to NCHCS from the pick list on the form and only show NCHCS
  2. Show the 14 medical centers and remove NCHCS as an option.  **Note:**  In order to avoid any impact to the routing rules on the back end, our form would convert the facility id's returned by selecting one of these 14 facilities to the current NCHCS facility id of "612"

For the NCHCS use case, my recommendation is option 1. 

## Decision
1.  We are going to pull data for the 140 Medical Centers from Lighthouse.  
2.  We will use the names provided by Lighthouse as the names to show to users on the front end
3.  Instead of showing the two VAMCs under the Northern California Health Care System, Sacramento and Martinez Medical Centers, we will show Northern California Health Care System with a facility id of 612.


## Full Facility List
|facility_type|lighthouse_site_name|lighthouse_facility_id|lighthouse_parent_facility_id|cxdw_site_name|cxdw_facility_id|direct_match|
|---|---|---|---|---|---|---|
|VA Medical Center (VAMC)|Aleda E. Lutz Department of Veterans Affairs Medical Center|vha_655|vha_655|Aleda E. Lutz Department of Veterans Affairs Medical Center|655|True|
|VA Medical Center (VAMC)|Alexandria VA Medical Center|vha_502|vha_502|Alexandria VA Medical Center|502|True
|VA Medical Center (VAMC)|Colonel Mary Louise Rasmuson Campus of the Alaska VA Healthcare System|vha_463|vha_463|Anchorage VA Medical Center|463|True
|VA Medical Center (VAMC)|Lieutenant Colonel Charles S. Kettles VA Medical Center|vha_506|vha_506|Ann Arbor VA Medical Center|506|True
|VA Medical Center (VAMC)|Joseph Maxwell Cleland Atlanta VA Medical Center|vha_508|vha_508|Atlanta VA Medical Center|508|True
|VA Medical Center (VAMC)|Audie L. Murphy Memorial Veterans' Hospital|vha_671|vha_671|Audie L. Murphy Memorial Veterans' Hospital|671|True
|VA Medical Center (VAMC)|Baltimore VA Medical Center|vha_512|vha_512|Baltimore VA Medical Center|512|True
|VA Medical Center (VAMC)|Canandaigua VA Medical Center|vha_528A5|vha_528A6|Bath VA Medical Center|528A6|True
|VA Medical Center (VAMC)|Battle Creek VA Medical Center|vha_515|vha_515|Battle Creek VA Medical Center|515|True
|VA Medical Center (VAMC)|Beckley VA Medical Center|vha_517|vha_517|Beckley VA Medical Center|517|True
|VA Medical Center (VAMC)|Biloxi VA Medical Center|vha_520|vha_520|Biloxi VA Medical Center|520|True
|VA Medical Center (VAMC)|Birmingham VA Medical Center|vha_521|vha_521|Birmingham VA Medical Center|521|True
|VA Medical Center (VAMC)|Bob Stump Department of Veterans Affairs Medical Center|vha_649|vha_649|Bob Stump Department of Veterans Affairs Medical Center|649|True
|VA Medical Center (VAMC)|Boise VA Medical Center|vha_531|vha_531|Boise VA Medical Center|531|True
|VA Medical Center (VAMC)|Bruce W. Carter Department of Veterans Affairs Medical Center|vha_546|vha_546|Bruce W. Carter Department of Veterans Affairs Medical Center|546|True
|VA Medical Center (VAMC)|Buffalo VA Medical Center|vha_528|vha_528|Buffalo VA Medical Center|528|True
|Multi-Specialty CBOC|Abie Abraham VA Clinic|vha_529|vha_529|Butler VA HCS|529|True
|VA Medical Center (VAMC)|C.W. Bill Young Department of Veterans Affairs Medical Center|vha_516|vha_516|C.W. Bill Young Department of Veterans Affairs Medical Center|516|True
|VA Medical Center (VAMC)|Captain James A. Lovell Federal Health Care Center|vha_556|vha_556|Captain James A. Lovell Federal Health Care Center|556|True
|VA Medical Center (VAMC)|Carl T. Hayden Veterans' Administration Medical Center|vha_644|vha_644|Carl T. Hayden Veterans' Administration Medical Center|644|True
|VA Medical Center (VAMC)|Carl Vinson Veterans' Administration Medical Center|vha_557|vha_557|Carl Vinson Veterans' Administration Medical Center|557|True
|VA Medical Center (VAMC)|Central Alabama VA Medical Center-Montgomery|vha_619|vha_619|Central Alabama VA Medical Center-Montgomery|619|True
|Health Care Center (HCC)|Chalmers P. Wylie Veterans Outpatient Clinic|vha_757|vha_757|Chalmers P. Wylie Veterans Outpatient Clinic|757|True
|VA Medical Center (VAMC)|Charles George Department of Veterans Affairs Medical Center|vha_637|vha_637|Charles George Department of Veterans Affairs Medical Center|637|True
|VA Medical Center (VAMC)|Charlie Norwood Department of Veterans Affairs Medical Center|vha_509|vha_509|Charlie Norwood Department of Veterans Affairs Medical Center|509|True
|VA Medical Center (VAMC)|Cheyenne VA Medical Center|vha_442|vha_442|Cheyenne VA Medical Center|442|True
|VA Medical Center (VAMC)|Chillicothe VA Medical Center|vha_538|vha_538|Chillicothe VA Medical Center|538|True
|VA Medical Center (VAMC)|Cincinnati VA Medical Center|vha_539|vha_539|Cincinnati VA Medical Center|539|True
|VA Medical Center (VAMC)|Clement J. Zablocki Veterans' Administration Medical Center|vha_695|vha_695|Clement J. Zablocki Veterans' Administration Medical Center|695|True
|VA Medical Center (VAMC)|Coatesville VA Medical Center|vha_542|vha_542|Coatesville VA Medical Center|542|True
|VA Medical Center (VAMC)|Colmery-O'Neil Veterans' Administration Medical Center|vha_589A5|vha_589A5|Colmery-O'Neil Veterans' Administration Medical Center|589A5|True
|VA Medical Center (VAMC)|Corporal Michael J. Crescenz Department of Veterans Affairs Medical Center|vha_642|vha_642|Corporal Michael J. Crescenz Department of Veterans Affairs Medical Center|642|True
|VA Medical Center (VAMC)|Dallas VA Medical Center|vha_549|vha_549|Dallas VA Medical Center|549|True
|VA Medical Center (VAMC)|Danville VA Medical Center|vha_550|vha_550|Danville VA Medical Center|550|True
|VA Medical Center (VAMC)|Dayton VA Medical Center|vha_552|vha_552|Dayton VA Medical Center|552|True
|VA Medical Center (VAMC)|Des Moines VA Medical Center|vha_636A6|vha_636A6|Des Moines VA Medical Center|636A6|True
|VA Medical Center (VAMC)|Durham VA Medical Center|vha_558|vha_558|Durham VA Medical Center|558|True
|VA Medical Center (VAMC)|East Orange VA Medical Center|vha_561|vha_561|East Orange VA Medical Center|561|True
|VA Medical Center (VAMC)|Edith Nourse Rogers Memorial Veterans' Hospital|vha_518|vha_518|Edith Nourse Rogers Memorial Veterans' Hospital|518|True
|VA Medical Center (VAMC)|Edward Hines Junior Hospital|vha_578|vha_578|Edward Hines Junior Hospital|578|True
|VA Medical Center (VAMC)|Edward P. Boland Department of Veterans Affairs Medical Center|vha_631|vha_631|Edward P. Boland Department of Veterans Affairs Medical Center|631|True
|Health Care Center (HCC)|El Paso VA Clinic|vha_756|vha_756|El Paso VA Clinic|756|True
|VA Medical Center (VAMC)|Erie VA Medical Center|vha_562|vha_562|Erie VA Medical Center|562|True
|VA Medical Center (VAMC)|Fargo VA Medical Center|vha_437|vha_437|Fargo VA Medical Center|437|True
|VA Medical Center (VAMC)|Fayetteville VA Medical Center|vha_564|vha_564|Fayetteville VA Medical Center|564|True
|VA Medical Center (VAMC)|Fayetteville VA Medical Center|vha_565|vha_565|Fayetteville VA Medical Center|565|True
|VA Medical Center (VAMC)|Fort Harrison VA Medical Center|vha_436|vha_436|Fort Harrison VA Medical Center|436|True
|VA Medical Center (VAMC)|Fort Meade VA Medical Center|vha_568|vha_568|Fort Meade VA Medical Center|568|True
|VA Medical Center (VAMC)|Franklin Delano Roosevelt Hospital|vha_620|vha_620|Franklin Delano Roosevelt Hospital|620|True
|VA Medical Center (VAMC)|Fresno VA Medical Center|vha_570|vha_570|Fresno VA Medical Center|570|True
|VA Medical Center (VAMC)|G.V. (Sonny) Montgomery Department of Veterans Affairs Medical Center|vha_586|vha_586|G.V. (Sonny) Montgomery Department of Veterans Affairs Medical Center|586|True
|VA Medical Center (VAMC)|George E. Wahlen Department of Veterans Affairs Medical Center|vha_660|vha_660|George E. Wahlen Department of Veterans Affairs Medical Center|660|True
|VA Medical Center (VAMC)|"George H. O'Brien, Jr., Department of Veterans Affairs Medical Center"|vha_519|vha_519|"George H. O'Brien| Jr.| Department of Veterans Affairs Medical Center"|519|True
|VA Medical Center (VAMC)|Grand Junction VA Medical Center|vha_575|vha_575|Grand Junction VA Medical Center|575|True
|VA Medical Center (VAMC)|Hampton VA Medical Center|vha_590|vha_590|Hampton VA Medical Center|590|True
|Health Care Center (HCC)|Harlingen VA Clinic|vha_740|vha_740|Harlingen VA Clinic|740|True
|VA Medical Center (VAMC)|Harry S. Truman Memorial Veterans' Hospital|vha_589A4|vha_589A4|Harry S. Truman Memorial Veterans' Hospital|589A4|True
|VA Medical Center (VAMC)|"Hershel ""Woody"" Williams VA Medical Center"|vha_581|vha_581|"Hershel ""Woody"" Williams VA Medical Center"|581|True
|VA Medical Center (VAMC)|Richmond VA Medical Center|vha_652|vha_652|Hunter Holmes McGuire Hospital|652|True
|VA Medical Center (VAMC)|Ioannis A. Lougaris Veterans' Administration Medical Center|vha_654|vha_654|Ioannis A. Lougaris Veterans' Administration Medical Center|654|True
|VA Medical Center (VAMC)|Iowa City VA Medical Center|vha_636A8|vha_636A8|Iowa City VA Medical Center|636A8|True
|VA Medical Center (VAMC)|Jack C. Montgomery Department of Veterans Affairs Medical Center|vha_623|vha_623|Jack C. Montgomery Department of Veterans Affairs Medical Center|623|True
|VA Medical Center (VAMC)|Jamaica Plain VA Medical Center|vha_523|vha_523|Jamaica Plain VA Medical Center|523|True
|VA Medical Center (VAMC)|James A. Haley Veterans' Hospital|vha_673|vha_673|James A. Haley Veterans' Hospital|673|True
|VA Medical Center (VAMC)|James E. Van Zandt Veterans' Administration Medical Center|vha_503|vha_503|James E. Van Zandt Veterans' Administration Medical Center|503|True
|VA Medical Center (VAMC)|James H. Quillen Department of Veterans Affairs Medical Center|vha_621|vha_621|James H. Quillen Department of Veterans Affairs Medical Center|621|True
|VA Medical Center (VAMC)|James J. Peters Department of Veterans Affairs Medical Center|vha_526|vha_526|James J. Peters Department of Veterans Affairs Medical Center|526|True
|VA Medical Center (VAMC)|Jerry L. Pettis Memorial Veterans' Hospital|vha_605|vha_605|Jerry L. Pettis Memorial Veterans' Hospital|605|True
|VA Medical Center (VAMC)|Jesse Brown Department of Veterans Affairs Medical Center|vha_537|vha_537|Jesse Brown Department of Veterans Affairs Medical Center|537|True
|VA Medical Center (VAMC)|John J. Cochran Veterans Hospital|vha_657|vha_657|John Cochran Veterans Hospital|657|True
|VA Medical Center (VAMC)|John D. Dingell Department of Veterans Affairs Medical Center|vha_553|vha_553|John D. Dingell Department of Veterans Affairs Medical Center|553|True
|VA Medical Center (VAMC)|John J. Pershing Veterans' Administration Medical Center|vha_657A4|vha_657A4|John J. Pershing Veterans' Administration Medical Center|657A4|True
|VA Medical Center (VAMC)|John L. McClellan Memorial Veterans' Hospital|vha_598|vha_598|John L. McClellan Memorial Veterans' Hospital|598|True
|VA Medical Center (VAMC)|Jonathan M. Wainwright Memorial VA Medical Center|vha_687|vha_687|Jonathan M. Wainwright Memorial VA Medical Center|687|True
|VA Medical Center (VAMC)|Kansas City VA Medical Center|vha_589|vha_589|Kansas City VA Medical Center|589|True
|VA Medical Center (VAMC)|Lebanon VA Medical Center|vha_595|vha_595|Lebanon VA Medical Center|595|True
|VA Medical Center (VAMC)|Franklin R. Sousley Campus|vha_596|vha_596|Lexington VA Medical Center-Leestown|596|True
|VA Medical Center (VAMC)|Tibor Rubin VA Medical Center|vha_600|vha_600|Long Beach VA Medical Center|600|True
|VA Medical Center (VAMC)|Louis A. Johnson Veterans' Administration Medical Center|vha_540|vha_540|Louis A. Johnson Veterans' Administration Medical Center|540|True
|VA Medical Center (VAMC)|Louis Stokes Cleveland Department of Veterans Affairs Medical Center|vha_541|vha_541|Louis Stokes Cleveland Department of Veterans Affairs Medical Center|541|True
|VA Medical Center (VAMC)|Malcom Randall Department of Veterans Affairs Medical Center|vha_573|vha_573|Malcom Randall Department of Veterans Affairs Medical Center|573|True
|VA Medical Center (VAMC)|Manchester VA Medical Center|vha_608|vha_608|Manchester VA Medical Center|608|True
|VA Medical Center (VAMC)|Margaret Cochran Corbin VA Campus|vha_630|vha_630|Manhattan VA Medical Center|630|True
|Other Outpatient Services (OOS)|Manila VA Clinic|vha_358|vha_358|Manila VA Clinic|358|True
|VA Medical Center (VAMC)|Mann-Grandstaff Department of Veterans Affairs Medical Center|vha_668|vha_668|Mann-Grandstaff Department of Veterans Affairs Medical Center|668|True
|VA Medical Center (VAMC)|Marion VA Medical Center|vha_657A5|vha_657A5|Marion VA Medical Center|657A5|True
|VA Medical Center (VAMC)|Marion VA Medical Center|vha_610|vha_610|Marion VA Medical Center|610|True
|VA Medical Center (VAMC)|Martinsburg VA Medical Center|vha_613|vha_613|Martinsburg VA Medical Center|613|True
|VA Medical Center (VAMC)|"Lt. Col. Luke Weathers| Jr. VA Medical Center"|vha_614|vha_614|Memphis VA Medical Center|614|True
|VA Medical Center (VAMC)|Michael E. DeBakey Department of Veterans Affairs Medical Center|vha_580|vha_580|Michael E. DeBakey Department of Veterans Affairs Medical Center|580|True
|VA Medical Center (VAMC)|Minneapolis VA Medical Center|vha_618|vha_618|Minneapolis VA Medical Center|618|True
|VA Medical Center (VAMC)|Nashville VA Medical Center|vha_626|vha_626|Nashville VA Medical Center|626|True
|VA Medical Center (VAMC)|New Orleans VA Medical Center|vha_629|vha_629|New Orleans VA Medical Center|629|True
|VA Medical Center (VAMC)|North Las Vegas VA Medical Center|vha_593|vha_593|North Las Vegas VA Medical Center|593|True
|VA Medical Center (VAMC)|Northport VA Medical Center|vha_632|vha_632|Northport VA Medical Center|632|True
|VA Medical Center (VAMC)|Oklahoma City VA Medical Center|vha_635|vha_635|Oklahoma City VA Medical Center|635|True
|VA Medical Center (VAMC)|Olin E. Teague Veterans' Center|vha_674|vha_674|Olin E. Teague Veterans' Center|674|True
|VA Medical Center (VAMC)|Omaha VA Medical Center|vha_636|vha_636|Omaha VA Medical Center|636|True
|VA Medical Center (VAMC)|Orlando VA Medical Center|vha_675|vha_675|Orlando VA Medical Center|675|True
|VA Medical Center (VAMC)|Oscar G. Johnson Department of Veterans Affairs Medical Facility|vha_585|vha_585|Oscar G. Johnson Department of Veterans Affairs Medical Facility|585|True
|VA Medical Center (VAMC)|Overton Brooks Veterans' Administration Medical Center|vha_667|vha_667|Overton Brooks Veterans' Administration Medical Center|667|True
|VA Medical Center (VAMC)|Palo Alto VA Medical Center|vha_640|vha_640|Palo Alto VA Medical Center|640|True
|VA Medical Center (VAMC)|Pittsburgh VA Medical Center-University Drive|vha_646|vha_646|Pittsburgh VA Medical Center-University Drive|646|True
|VA Medical Center (VAMC)|Portland VA Medical Center|vha_648|vha_648|Portland VA Medical Center|648|True
|VA Medical Center (VAMC)|Providence VA Medical Center|vha_650|vha_650|Providence VA Medical Center|650|True
|VA Medical Center (VAMC)|Ralph H. Johnson Department of Veterans Affairs Medical Center|vha_534|vha_534|Ralph H. Johnson Department of Veterans Affairs Medical Center|534|True
|VA Medical Center (VAMC)|Raymond G. Murphy Department of Veterans Affairs Medical Center|vha_501|vha_501|Raymond G. Murphy Department of Veterans Affairs Medical Center|501|True
|VA Medical Center (VAMC)|Richard L. Roudebush Veterans' Administration Medical Center|vha_583|vha_583|Richard L. Roudebush Veterans' Administration Medical Center|583|True
|VA Medical Center (VAMC)|Robert J. Dole Department of Veterans Affairs Medical and Regional Office Center|vha_589A7|vha_589A7|Robert J. Dole Department of Veterans Affairs Medical and Regional Office Center|589A7|True
|VA Medical Center (VAMC)|Robley Rex Department of Veterans Affairs Medical Center|vha_603|vha_603|Robley Rex Department of Veterans Affairs Medical Center|603|True
|VA Medical Center (VAMC)|Rocky Mountain Regional VA Medical Center|vha_554|vha_554|Rocky Mountain Regional VA Medical Center|554|True
|VA Medical Center (VAMC)|Roseburg VA Medical Center|vha_653|vha_653|Roseburg VA Medical Center|653|True
|VA Medical Center (VAMC)|Royal C. Johnson Veterans' Memorial Hospital|vha_438|vha_438|Royal C. Johnson Veterans' Memorial Hospital|438|True
|VA Medical Center (VAMC)|Salem VA Medical Center|vha_658|vha_658|Salem VA Medical Center|658|True
|VA Medical Center (VAMC)|Samuel S. Stratton Department of Veterans Affairs Medical Center|vha_528A8|vha_528A8|Samuel S. Stratton Department of Veterans Affairs Medical Center|528A8|True
|VA Medical Center (VAMC)|Jennifer Moreno Department of Veterans Affairs Medical Center|vha_664|vha_664|San Diego VA Medical Center|664|True
|VA Medical Center (VAMC)|San Francisco VA Medical Center|vha_662|vha_662|San Francisco VA Medical Center|662|True
|VA Medical Center (VAMC)|San Juan VA Medical Center|vha_672|vha_672|San Juan VA Medical Center|672|True
|VA Medical Center (VAMC)|Seattle VA Medical Center|vha_663|vha_663|Seattle VA Medical Center|663|True
|VA Medical Center (VAMC)|Sheridan VA Medical Center|vha_666|vha_666|Sheridan VA Medical Center|666|True
|VA Medical Center (VAMC)|Spark M. Matsunaga Department of Veterans Affairs Medical Center|vha_459|vha_459|Spark M. Matsunaga Department of Veterans Affairs Medical Center|459|True
|VA Medical Center (VAMC)|St. Cloud VA Medical Center|vha_656|vha_656|St. Cloud VA Medical Center|656|True
|VA Medical Center (VAMC)|Syracuse VA Medical Center|vha_528A7|vha_528A7|Syracuse VA Medical Center|528A7|True
|VA Medical Center (VAMC)|Thomas E. Creek Department of Veterans Affairs Medical Center|vha_504|vha_504|Thomas E. Creek Department of Veterans Affairs Medical Center|504|True
|VA Medical Center (VAMC)|Togus VA Medical Center|vha_402|vha_402|Togus VA Medical Center|402|True
|VA Medical Center (VAMC)|Tomah VA Medical Center|vha_676|vha_676|Tomah VA Medical Center|676|True
|VA Medical Center (VAMC)|Tucson VA Medical Center|vha_678|vha_678|Tucson VA Medical Center|678|True
|VA Medical Center (VAMC)|Tuscaloosa VA Medical Center|vha_679|vha_679|Tuscaloosa VA Medical Center|679|True
|VA Medical Center (VAMC)|W.G. (Bill) Hefner Salisbury Department of Veterans Affairs Medical Center|vha_659|vha_659|W.G. (Bill) Hefner Salisbury Department of Veterans Affairs Medical Center|659|True
|VA Medical Center (VAMC)|Washington VA Medical Center|vha_688|vha_688|Washington VA Medical Center|688|True
|VA Medical Center (VAMC)|West Haven VA Medical Center|vha_689|vha_689|West Haven VA Medical Center|689|True
|VA Medical Center (VAMC)|West Los Angeles VA Medical Center|vha_691|vha_691|West Los Angeles VA Medical Center|691|True
|VA Medical Center (VAMC)|West Palm Beach VA Medical Center|vha_548|vha_548|West Palm Beach VA Medical Center|548|True
|VA Medical Center (VAMC)|White City VA Medical Center|vha_692|vha_692|White City VA Medical Center|692|True
|VA Medical Center (VAMC)|White River Junction VA Medical Center|vha_405|vha_405|White River Junction VA Medical Center|405|True
|VA Medical Center (VAMC)|Wilkes-Barre VA Medical Center|vha_693|vha_693|Wilkes-Barre VA Medical Center|693|True
|VA Medical Center (VAMC)|William S. Middleton Memorial Veterans' Hospital|vha_607|vha_607|William S. Middleton Memorial Veterans' Hospital|607|True
|VA Medical Center (VAMC)|Wilmington VA Medical Center|vha_460|vha_460|Wilmington VA Medical Center|460|True
|VA Medical Center (VAMC)|Wm. Jennings Bryan Dorn Department of Veterans Affairs Medical Center|vha_544|vha_544|Wm. Jennings Bryan Dorn Department of Veterans Affairs Medical Center|544|True
|VA Medical Center (VAMC)|Sacramento VA Medical Center|vha_612A4|vha_612A4|Northern California Health Care System|612|False
|VA Medical Center (VAMC)|Martinez VA Medical Center|vha_612GF|vha_612A4|Northern California Health Care System|612|False
