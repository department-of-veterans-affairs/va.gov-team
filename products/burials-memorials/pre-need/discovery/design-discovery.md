# Pre-need Burial Form Design Discovery

## Proposed UX improvements

- Ask relationship to the Veteran at the beginning to place the applicant in a tailored path and eliminate redundant questions
  - If self-filing, present applicant/Veteran info as one unified set of questions
  - If a spouse/dependent, ask for applicant info before sponsor Veteran info
  - Address the applicant in third-person (in case someone else is filling out the form on behalf of the applicant, because that person's relationship is not what's being asked)
- Intelligently present questions that adress whether the Veteran is alive or deceased:
  - 10/11 - Deceased Y/N and Date of death — only ask these if the applicant has indicated they are *not* the Veteran
  - 3 - Veteran mailing address — only ask these if the applicant is the Veteran, or has indicated the Veteran is not deceased
- 19 - State (Nat'l guard only) — show this conditionally based on Branch = National Guard
- Investigate adding multiple applicants (which we'd submit as separate applications on the backend) — how does this play out with the proposed user flow?
- Group questions related to burial benefits together
  - 20/21 - anyone currently buried under this benefit
  - 29 - Your desired VA National Cemetery

## Questions for stakeholders

### Unanswered:

- 31 - Signature / checkbox
  - How can we shorten the certification language?
  - See example on education form: https://www.vets.gov/education/apply-for-education-benefits/application/1990/review-and-submit
- Attaching supporting documents
  - What guidance can we give on helpful vs. unnecessary documents?
- What expectations can we set for after a Veteran has received their letter?
  - What's the process for burial once they die?

### Answered (6/16 and 6/21 stakeholder meetings with Dan, et. al.):

- 2 - Name used during military service
    > Back in WWII lots of persecuted jews and poles, irish, fled europe and came to US, in order to assimilate they changed their names and served in the military to expedite citizenship, served under given name but go by new name; sometimes transgendered folks, they would be under the name they served under, female service members who changed their names
- 5 - Military service number (isn't used in edu/hca forms)
    > Any individual who served before 1970 and was born before 1952 served with service number not SSN, SSN wasn't put on discharge papers before 1962.
- 7 - Gender (Veteran only)
    > Asked so that VA can give the proper gendered salutation when communicating with the Veteran.
- 17 - Discharge character of service
  - What's the general rate of accuracy in responses? Will it need more helper text?
    > Pretty accurate, generally discharged under honorable conditions, other than honorable is an option, very rarely is it dishonorable
- 18 - Highest rank attained
    > Doesn’t pertain to eligibility. Have to capture this for cemeteries to show correct highest rank attained on the decedent’s monument
- 23D - Claimant relationship to Veteran is "other" with text field to specify
  - Is this response common, and if so what do people specify?
    > Almost never used; sometimes someone fills out on behalf of the Veteran so they check that
    > - Ineligible people like ex-wives
    > - Other does cover minor children

- 25,30 - Email address & phone number
    > Yes they are used:
    > - Phone: reach out for additional info on their case, e.g. mailing address was wrong and letter was returned to sender
    > - Email: used for marketing purposes, allows for email blasts for relevant content. Not used in relation to their case application
- 33-37 - Information about an individual signing for the claimant
  - We don't require disclosing this information on any other forms on Vets.gov. Is there a nuance that necessitates it here?
    > - Don't have a definitive answer now, some legal nuance here on authorized representatives like VSOs
    > - Funeral directors are not supposed to fill this out; conflict of interest

- Why do you ask people to fill out service history in the form, and then provide documentation with service history?
    > We don’t count solely on the form. Reservists for example don’t always get complete service history from documentation.

- What percentage of applicants upload supporting documents?
    > Over 80%

- What kinds of documents besides the DD-214 do they provide?
    > Birth certificates, marriage licenses, VA hospital cards, marriage announcements, anything they think will help prove a status - they aren’t necessary usually, if a veteran calls into contact center to get someone buried, if both are deceased they need to see death certificate with the next of kin as spouse listed
    > There are 130 different forms to verify your service
    > - Pre-1950 there are no DD-214s
    > - WDAGO
    > - NAVY NAVPERS

- What are the biggest problems when people fill this form out?
    > - People assume one application can cover two bodies (e.g. Vet + spouse), but each claimant requires a separate form
    > - Incorrect person filling out the claimant section
    > - People put claimant information in Vet section
    > - Claimant block is #1 place people make mistakes

- Eligibility copy - how much should we provide? (https://www.vets.gov/burials-and-memorials/eligibility/) 
  - What are the biggest dealbreakers that make someone ineligible?
    > - Divorced from Veteran
    > - Dishonorable discharge - but not straightforward if they served multiple stints and only one was dishonorable
    > - They're wary of including disqualifiers up front. Want everyone to apply anyway regardless of perceived eligibility. Don’t want to discourage anyone who wore a uniform from applying.
    
- How to best help veterans look up the right cemetery for them - https://www.cem.va.gov/cem/grants/veterans_cemeteries.asp - where does this data come from? Is it complete? Who owns it? Is it just state or national, too?
    > - There are 140 nat’l / 105 state cems
    > - Dan’s office supports state cems to an extent for time-of-need burial, but not pre-need
    > - Most states have residency requirements for burial
    > - **NCA doesn't currently make the call on burial at a state cem, only nat’l cemeteries**
    >   - If an application comes in with a request for a state cem = VA sends a form letter back to the applicant, they have to contact the state cem directly
    > - If I know I want to be buried in state cem, I should not use this form
    > - This form may support state cem approval in the future, currently ballparking for 2021-2022

- Can we provide information on how long it typically takes to get the pre-need decision letter after applying?
    > - EOAS doesn’t have this data yet, supposed to get a report in a week
    > - Happy path: 1 day processing time on VA side for easy cases
    > - Today they are currently processing applications from mid-April (60 days out)
    > - They’ve been telling people 60-90 days now, hoping database enhancements will help them improve turnaround time
    > - Should the estimate factor in request for more info? Gives 30 days to respond 
    >   - No response = denial
    > - Have ~16,000 pending applications right now that need to be entered manually, they approve 200-250 a day

- Can we include information on how to submit an appeal if denied this benefit (info would be based on: https://www.cem.va.gov/cem/pre-need/FAQ/)? 
    > - Appeals unit has asked not to discuss timelines, judicial proceedings because we’re not directly involved in that process. Don’t want to give phone numbers
    > - Dan would want to talk with Mick Stevens (Appeals) to see if we can mention appeals process or point link to the VA form 4107
    > - Denial letter includes:
    >   - A notice that gives particular reason for denial
    >   - Copy of the appeals form (4107)

- Stakeholders' language concerns:
    > - Veteran/servicemember - they like this language vs. reservist, nat’l guardsman
    > - Need to run all language changes by them, concerns about PL updates losing some of the specificity and accuracy they feel is needed

## Form design tips from Alex T.

- Flow:
  - Order questions to get to the dealbreakers first
  - Ask the smallest amount possible at the beginning
  - Checkout type stuff (address, financial info, etc) at the end
- See Alex's [Google doc](https://docs.google.com/spreadsheets/d/1BaNQFvLuF5TyGNb-YZ3sPmb8PrjA498TJE1a8-BmpaU/edit#gid=0) for form labeling conventions, add preneed question inventory
- Wording: "Applicant" instead of claimant. For claiming a Veteran's benefit, "Sponsor Veteran" has resonated well in feedback
- Showing longer explanatory copy — info or warning box appears upon selecting an option to help users validate their choice
- Write down specifics on why you changed questions to back up decisions with stakeholders
- Think about static content entry/exit points, and places to link into the form from Vets.gov
- Map out flow of questions, conditional logic. Alex has a good system that has been well-received as handoff artifacts for development

See also [Form design process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-resources/form-design-process.md)
