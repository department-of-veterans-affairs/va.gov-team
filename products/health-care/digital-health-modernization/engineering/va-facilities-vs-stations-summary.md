# VA Facility IDs vs. Station IDs: Understanding the Station Numbering System

## Station Numbers and Station IDs Explained
- Station Number (Facility ID): a “station number” is a three-digit code identifying a unique VA point of service 
(typically a VA medical center or parent facility). This 3-digit code (often called STA3N in internal data) serves 
as the primary facility identifier without any suffix. 
- Station ID (Station Identifier): A “station ID” usually refers to the full code including the station number plus 
a suffix (one to three characters) that denotes a sub-facility or division. In databases this is often called STA5A 
or STA6A (a 5-character station code, though some can be 4–6 characters). The suffix is an alphanumeric modifier 
appended to the parent’s 3-digit number to uniquely identify subordinate sites (e.g. satellite clinics, divisions, 
or specialized units) attached to that parent station. In other words, the facility ID (3-digit) represents the 
overall medical center or system, while the station IDs (3-digit + suffix) represent the individual campuses, 
clinics, or units under that facility. 

Example: “657” (no suffix) corresponds to the St. Louis VA Medical Center 
– John Cochran Division (the parent hospital), while 657A0 is the Jefferson Barracks Division, 657BU is a VA 
Domiciliary, and 657GA is a community clinic in St. Clair County

## Hierarchy of Parent Facilities and Sub-Stations
VA station numbers are hierarchical. The parent facility (often a VA Medical Center or Health Care System) is assigned 
the base 3-digit station number (no suffix). Any distinct sites of care under that facility are given suffix 
modifiers attached to the parent’s number.
 - Parent Station (No Suffix): The primary medical center or healthcare system headquarters. By definition, a primary
facility’s station number has no suffix. For example, “657” alone identifies the St. Louis VA HCS’s main location.
- Division or Sub-Station (With Suffix): Any separate campus, clinic, or unit associated with the parent. These have
station IDs like “657A0,” “657GX,” etc. The suffix uniquely identifies each subordinate site while still tying it
to the parent’s 3-digit code. In our example, St. Louis’s Jefferson Barracks campus is 657A0 (a division of the
657 facility), and various outpatient clinics carry suffixes like “GA,” “GB,” etc., all beginning with 657.

This hierarchy is managed through VA’s Site Tracking (VAST) system. VAST and the VA Financial Services Center 
oversee assignment of new station numbers and suffixes to ensure each site of care has a unique identifier. A suffix 
is only granted when needed to distinguish a separate site or division; routine departments within a single campus 
don’t get their own station codes. Essentially, if a new outpatient clinic or campus opens under an existing 
medical center, the VA assigns a suffix to the parent’s number to create a new station ID for that site. Conversely, 
if a facility stands alone (not a subdivision of another), it will use a standalone 3-digit station number with 
no suffix. In internal VA data systems, you’ll often see fields for both the 3-digit parent (STA3N) and the full 
station identifier (STA5A or STA6A) that indicate the hierarchical level of the record.

## Station Suffix Codes and Facility Types
The suffix portion of a station ID often gives a clue to the type of site. VA assigns suffixes from specific alphabetic 
ranges to denote facility categories. Some common patterns and acronyms include:
- VAMC (VA Medical Center): Suffixes A4–A9 often indicate a division of a VA Medical Center. For example, “A0” or “A4”
appended to a number typically signifies an additional medical center campus or major division of a complex.
(E.g., 640A0 Menlo Park Division of Palo Alto HCS is a secondary campus of station 640 Palo Alto VAMC.) Primary VAMCs
themselves may use just the base number or sometimes an “A0” for one of the divisions.
- CBOC (Community-Based Outpatient Clinic): These outpatient clinics usually have suffixes in the “G” series.
The VA reserves “GA–GZ” (and sometimes G1–G9, J-series) for clinics. For example, 657GA denotes a St. Louis-area
community clinic (in St. Clair County, IL), and 657GD is a clinic in St. Charles County, MO. Smaller outpatient
facilities or multi-specialty clinics might also use “G” or “J” prefixes.
- HCC (Health Care Center): These larger outpatient centers (often offering specialty care but not full inpatient services)
are considered VA Clinics too. Some may fall in the “B” series (e.g., BY–BZ) or share the “G” series depending on how they’re
classified.
- OOS (Other Outpatient Services) & Mobile Clinics: Suffixes in the “Q” range (QA–QZ) are used for other outpatient service
sites, which include mobile clinics, telehealth outreach, or other special-purpose clinics. For instance, 657QA might be a
mobile clinic or an outreach clinic (e.g., an “Olive Street” clinic in St. Louis). The single “Q” or combined letters in
this range indicate facilities that aren’t standard brick-and-mortar clinics – often mobile units or unique service sites.
- DOM or PRRTP (Domiciliary / Residential Rehab): VA domiciliaries or residential rehab programs often use suffixes
starting with “B” followed by another letter, especially BT–BZ. 657BU is labeled as a VA Domiciliary (noted “VADOM”) under
the St. Louis system. These letter codes in the B-series signified a residential care division.
- Other Suffixes: Many other suffix ranges exist for specific purposes (as defined in VA policy). For example, “9xx” codes
can denote VA Community Living Centers or state nursing homes (e.g., 583BU for an Indianapolis Domiciliary), “M” codes denote
DoD joint ventures or sharing agreements (DES clinics), etc. Vet Centers (readjustment counseling centers) are generally
not in the same numbering system – they have separate 4-digit identifiers and aren’t “VHA station codes” per se (for example,
a Vet Center might appear as 0400, distinct from VAMC stations).

VA employees often refer to these codes with acronyms. For instance, they might call the 3-digit base code the “Station 3N” 
or STA3N, and the full code the “Station 5A/6A.” They also use terms like “parent station” for the base facility and 
“division” or “substation” for the suffixed entries. The facility types themselves are abbreviated as well: 
VAMC (medical center with inpatient care), CBOC (community clinic), HCC (health care center), CLC (community living center 
nursing home), DOM or PRRTP (domiciliary/residential rehab), etc.

## Useful links
- [VA Facilities API / Facility Locator](https://api.va.gov/internal/docs/facilities/v1/openapi.json): Developer docs: https://developer.va.gov/explore/api/va-facilities/docs?version=current
- [Nov 2024 Facility List](https://www.va.gov/COMMUNITYCARE/docs/RO/Facility-List-v5-25.pdf) that includes stations
