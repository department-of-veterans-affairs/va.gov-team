# Claims for Increase form outline

## Introduction

**Goal**: Give the Veteran the information they need to be prepared for the application process and an understanding of the timeline and how their choices might impact that.

**Obstacle**: There is a large volume of information in the existing preamble:

- Claim types (FDC, DRC, etc.)
- Evidence Tables
- How VA determines...
  - Effective date
  - Rating 




## Choose claim type

**Goal**: Ask understandable and decisive questions to get the Veteran on the right path. We want to get those we can serve directly into the form here on Vets.gov, and provide helpful instructions to those we cannot.

**Obstacle**: Veterans will arrive with a wide range of understanding about process and terminology. Some cases are genuinely confusing. Increase only claims are only about 10% of overall traffic, so many people would be handed off (or back) to eBenefits

```
Please select all that apply

[ ] **This is my first time filing a Disability Compensation claim.**

[ ] **I have new or worsening conditions to add to my current disability rating**

    [ ] I have new conditions to add to my rated disabilities.

    [ ] One or more of my rated conditions have gotten worse.

[ ] **I want to appeal the VA rating decision for an existing claim**

[ Back | Continue ]
```



## Retrieve your information  

**Goal**: Either begin the application process here on Vets.gov or know where to go on eBenefits with a high degree of confidence that they will not get bounced around again.

**Obstacle**: Most people will get redirected to eBenefits. The redirect “no, you need to go somewhere else instead” is a “VA” experience that can trigger frustration.

{ if increase only }

```
Please sign in to your Vets.gov account so we can get your current Disability Compensation claim.

[ Sign in with DS Logon ] { button }
[ Sign in with MyHealtheVet ] { button }
[ Sign in with ID.me ] { button }

Once you sign in, you’ll be able to select the conditions you want to claim an increase for and request any necessary exams.
```



{ if **original claim** }

```
We currently aren't able to file an original claim on Vets.gov. Please go to eBenefits to apply.
[ Go to eBenefits ] { external }
```



{ if **new conditions** }

```
Because you’re adding new conditions, you’ll need to apply using eBenefits.
[ Go to eBenefits ] { external }
```



{ if **new and increase** }

```
Because you have both new and worsening conditions, you’ll need to apply using eBenefits.

[ Go to eBenefits ] { external }
```



## Special Circumstances

**Goal**: To understand any Veteran attested factors that might require additional questions or affect their claim priority.

**Obstacle**: Ambiguity about what qualifies. Action might not match expectation

```markdown
Please let us know if you need any additional help applying. 

Are you… { checkboxes }
- In crisis or having thoughts of suicide (process impact: crisis line)
- Homeless or in danger of being homeless (form impact: collect secondary contact details) There are qualifications than need to be communicated for homelessness 
- Suffering from extreme financial hardship (queue impact: higher priority)
- Blind or sight impaired (process impact: letters get bigger type and calls)

[ Back | Continue ]
```



## Veteran Information Review

**Goal**: Confirm that VA records are up to date for the applicant

**Obstacle**: Some data should be updatable and some should not. This will complicate the UI

```markdown
We've retrieved your information from your previous claim, does this all look up to date?

Name { name }
SSN { ssn }
DOB { date }

--- screen break?

Address(es) { address }
Phone(s) { phone}
Email(s) { email }
[Edit]

[ Back | Continue ]
```



## Service History Review

**Goal**: Make sure that service record is up to date. Collect additional information that may not be part of the original record

**Obstacle**: Still working to understand need and priority of flash related questions 

```Markdown
Is this service history up to date?
> - Branch { text:type-ahead }
> - Dates { date range }
> - Type of duty { radio }
> - Character of discharge { radio }
_Repeats as necessary_

[] Have you served in combat?
[] Are you a former prisoner of war?
[] Have you been awarded a Medal of Honor?

[ Back | Continue ]
```



## Rated Conditions

**Goal**: Narrow the list (for increase) of conditions to just those that have gotten worse.

**Obstacle**: Some conditions may have already “maxed” their rating potential.  Veterans may not understand how the ratings add up.

```markdown
Which conditions have gotten worse? { checkbox cards }
> - Condition description
> - Current rating
_Repeats as necessary_

[ Back | Continue ]
```



## Claims for Increase

**Goal**: Collect information about how to document the worsened condition

**Obstacle**: Records only collected for prior year. _unless records predate March 23, 2015_ then they are also considered. This will be complicated to communicate.

```markdown
## Condition name

Where have you been treated for $condition since you received your rating? { radio }
- VA Medical Center
- Private doctor

Name of VA medical center where you were treated { text }

We will look for treatment records from the last year at $VAMC.

You may add any additional documentation showing how your $condition has gotten worse.

[ Upload Document] { file upload button }

[ Back | Continue ]
```

*Repeats as necessary*



## Request Exams

**Goal**: For both VA and Veteran to understand what exams are needed.

**Obstacle**: Complexity (reduced for increase only) of knowing which exams are appropriate. Factoring in private medical care.

```Markdown
Do you believe that you need further exams for your worsening conditions?

$condition { radio }
() Yes, I need to schedule an exam {default yes}
() No, I've already provided a DBQ for this

_Repeats as necessary_
```



## Attend Exams

**Goal**: Make it clear what further action is required of the Veteran to set up and complete the exams.

**Obstacle**: There is an air gap here where we don’t have any real information to pass back to the Veteran. This part of the process will take place by phone and we can’t tell when it has happened.

```
## Exams requested and your progress is saved

### What is next?

1. We will call you at $phone-number to schedule exams. If we are unable to reach you by phone after two attempts, we will schedule exams for you and notify you by mail.

2. After you go to your exams, the results will show up here. Sign in to check on your progress. 

3. Once all your evidence is in place, submit your claim for increase here. 

{ If first run }
    [ Save and Exit ]
{ endif }

{ if returning }
    [ I am ready to file ] or [ I have more evidence to add ] 
    { if adding }
    	{ list conditions. select to add docs }
    { endif}
{endif}
```



## Review Exams

**Goal**: Confirm that no further action is needed related to exams.

**Obstacle**: Non-VA exams sometimes need to be re-done, even if it appears that they are complete.

```markdown
> ## $condition
> {n} documents attached
> Exam complete|Results pending
> [ View exam ]

_Repeats as necessary_

[ Continue ]
```



## Additional claims

**Goal**: Prompt Veterans to fill out relevant separate forms for related benefits.

**Obstacle**: Some forms are filled out by other people. It is hard to know how relevant each form is to this particular Veteran. Some forms have their own eligibility standards that need to be communicated. For example:

- Auto allowance
- Specially adapted housing
- Helpless child




## Payment Details

**Goal**: Collect information required to be able to make direct deposit payments to the Veteran.

**Obstacle**: Some Veterans have already given this information for other benefits? Will this change those too? What does this affect?

```Markdown
Where should we deposit benefit payments? { radio }
() Checking
() Savings
() I don’t have a bank account { triggers disclaimer }

Account number {text}

Routing number {text}

[ Back | Continue ] 
```



## Review Application

**Goal**: Give the Veteran the opportunity to review what will be submitted and the opportunity to update anything they want to.

**Obstacle**: Presentation of a large amount of information on a single page.

```markdown
You are almost ready to submit your application. Please review your application.

_Review cards for each section_

[] Agree to privacy policy

[ Submit ]
```



## Confirmation

**Goal**: Veterans should understand that they have successfully completed the application and what claims were submitted. They should either be shown or linked to “what happens next” content.

**Obstacle**: What is the right amount of claim summary to show here? 

```markdown
## Summary of claim
Success message.
- Person
- Conditions claimed (?)
- Effective date (?)

What happens next?
```



