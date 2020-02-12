Gabe's notes:

### Anonymous vs ID’ed applications:
- No change is needed from how we send these at present; change is simply how HEC routes the anonymous apps. Lihan sees where this is in the code.
- I will write to the business owners momentarily to get our overall scope of work approved once again, and get this requirement formally submitted.

_From our side_: no additional research needed here
 
### DD-214 Attachment:
- VOA already accepts attachments.
- Below, Josh sent documentation on this, which looks sufficient to me.

_From our side_: anything else needed?
 
### Understanding eligibility decisions from E&E:

Ok, here my notes from earlier seem to a little contradict what Josh said below. Please jump in if you think you understand 
what’s going on here, and if not, I will write to Josh to clarify.

Notes from earlier:

- There is a field called EnrollmentStatus, which takes the values:
  - Pending: this will come with pending reason in the same field. ‘MT required’ (means test required) or ‘eligibility unverified’
  - Rejected: this person is an eligible Veteran, but not a high enough priority group. That is, they have no special military record reason to be eligible, no disability to be eligible, and no means test satisfactory to be eligible.
  - Ineligible: not an eligible Veteran. Josh said there is a list of reasons he will send. But… the below seems to suggest there is not a standard list, but rather a free text field. Also unclear from the below is whether this is a separate field, or the same field.
  - Verified = Enrolled
  - Not Applicable = still active duty, or was not applying for health care as a Veteran Affairs
  - Deceased
  - Canceled/Declined = was determined eligible, but wrote to turn down coverage b/c has other coverage, most likely.

_Further research_: Unless I’m missing something, this all doesn’t quite map to the below. Please jump in if you understand the apparent discrepancies.
 
### Editable fields:

- Cannot edit: military service, service-connection percentage, special factors (e.g. Agent Orange, Camp Lejeune), and identifiers from MVI
- These all display from E&E, but if they are wrong, would have to go back to the source
- Special factors: would want to call the call center
- Disability info: call VBA
- Can edit: contact information, financial disclosure, insurance, dependents
- Currently, if they edit non-editable fields, it creates a work item for staff… which probably works out fine. Thus we are not prioritizing this.
 
### Deceased:
- What do we do if E&E says someone is dead? Need to architect a solution.
