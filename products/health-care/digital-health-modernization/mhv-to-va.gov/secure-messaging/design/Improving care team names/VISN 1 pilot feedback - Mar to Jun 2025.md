# Mar to Jun 2025: VISN 1 Pilot feedback
This doc summarizes MHV coorindator feedback from [this Excel file](https://dvagov.sharepoint.com/:x:/r/sites/PlainLanguageCareTeamNamespilot/Shared%20Documents/Plain%20Language%20Care%20Team%20Names%20pilot%20feedback/Feedback.xlsx?d=w983d377621b342e5bde9c1af311aa9f5&csf=1&web=1&e=rk8X0w) so far. Tracey and Kathy mostly contributed this feedback.

Jump to: 
- [Feedback](#feedback)
- [Recommendations](#recommendations)

## Feedback
These are the main types of feedback we got:
- **Staff process**: Related to business processes to create, update, and delete triage group names
- **Data**: Related to current PowerBI reports that rely on legacy naming conventions
- **Character limit**: Related to triage group names exceeding the character limit 
- **Group and subgroup options**: Related to options in the `Group Type:` and `Sub-Group Type:` fields
- **Facility options**: Related to options in the `Medical Center or Clinic (location):` field

### Staff process
Takeaway: SM admins (MHV coordinators) who create, update, and delete triage group names need to transition to new business processes

New processes include: 
- Cleaning up existing triage group names
   - It's difficult to edit a triage group name and not fix inactivated clinics at the same time.
- Deleting triage groups after lead providers leave a position/facility
   - SM admins need a workaround to avoid impacting future triage groups with the same name
      - Consider: Adding `-XX` to the end of the name, similar to the current process to inactivate network IDs
- Removing providers from triage groups after providers leave a position/facility
   - This is peak season for staffing changes at medical centers
   - SM admins will delete or edit the triage groups
   - The activated staff list is long and includes staff that could/should be inactivated
- Creating names using sentence case
- Not adding hyphens or underscores to team names

### Data
Takeaway: Current data reports created in PowerBI won't work with the new naming convention

### Character limit
Takeaway: SM admins can't always spell out acronyms because then the triage group name will exceed the character limit.

Here's an example:
- Name with spelled-out acronym: Providence VA Medical Center | Mental health | Mental health Intensive case management (MHICM)/Community Residential Care Program (CRC)/Veterans Justice  Outreach (VJ0)
- Name with acronym: Providence VA Medical Center | Mental health | MHICM/CRC/VJO

Other notes: 
- Many teams have long program names
- During this interim phase, triage group names are limited to only 50 characters. SM admins have had to edit names that might not reflect the future state.
  
### Facility options
Takeaway: SM admins don't always find the facility they're looking for.

SM admins have worked around this issue by adding more details to the free-text team name. Here's an example:
- Ideal name: Bedford VA Clinic | Gastroenterology
- Workaround: VA Boston Health Care | Gastroenterology | at Bedford VA

Takeaway: SM admins must use the Congressional name, which patients may be less familiar with. 

Here's an example: 
- Congressional name: Jackie Walorski VA Clinic
- More familiar name: St. Joseph County VA Clinic

### Group and subgroup options
Takeaway: SM admins don't always find a group or subgroup that fits. 

Here are some examples: 
- [Subgroup] Audiology and Speech Pathology: Audiology and speech are two different teams.
   - Suggestion: split into two subgroups.
- [Subgroup] MOVE! Weight Management Program for Veterans: This is a common program at multiple facilities.
   - Suggestion: Add subgroup under the `Health promotion & whole health` group.
- [Group or subgroup] Clinical resource hub (CRH): This exists at multiple facilities. SM admins are entering this inconsistently in the free-text team name right now.
   - Suggestion: Add group or subgroup
 
Takeaway: SM admins are concerned the display name will be confusing for patients. 

Here's an example: 
- What an SM admin sees: Clinic pharmacy
- What a patient sees: Pharmacy 


## Recommendations
- **Staff process**:
   - Make documentation for SM admins to reference when they're working with the triage group names
   - Develop business processes to support SM admins through onboarding or troubleshootin
   - Develop business processes for deleting triage groups, so future triage groups aren't impacted by existing rules.
- **Data**: Update PowerBI reports for new naming conventions
- **Character limit**: Allow use of acronyms when necessary. If using acronyms, pair with other identifier in the free text team name (like provider name). Then patients can search for the triage group name with another keyword.
- **Group and subgroup options**: Develop intake process for new options or to update existing options.
- **Facility options**: Continue to allow free text team name field in case the VA Facilities API doesn't display the correct facilities.
