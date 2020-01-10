## Findings and Observations

### Section I - Veteran Identification Information
1. VA File number is _usually_ the same as a veteran's SSN.
    * The VA only started using SSNs as file numbers in the 70s, so any veterans before that may have differing SSNs and File Numbers.
    * More info [here](https://www.archives.gov/personnel-records-center/social-security-numbers)
1. Generally, a veteran will know if their service number is applicaple. This field should be treated as optional.
    * Service Number (7) needs to be added as a field to the form.
    * Service Number is a string containing between 5 and 8 numbers with an alphabetical prefix of up to 2 letters.
1. Telephone Number (8) is part of the schema already but not used in the digital form. It only supports a USA number currently. This needs to be added as a field.
### Section II - Information Needed To Add A Spouse
1. Place of Marriage (11E) currently uses a definition on the frontend that doesn't matchup with the defintion created in the schema file for location. This needs to be fixed.   
    * Place of Marriage on the paper form asks for one of three options: City and State, County and State, OR City and Country.
    * County is not currently present as a field on the digital version.
    * For more information on the schema discrepancy [check this document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/engineering/3506-summary.md)
1. How were you married (11F) needs to be added to the digital form as a field.
    * This has been used elsewhere in vets-website and should be re-used for the 686 if possible. [Use case here](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/pensions/config/form.js#L975).
1. Spouse SSN (11C) is currently present in the digital form, but does not address the possibility that a spouse has no SSN.
   * A field already exists inside the schema.json file for the form, it just needs to be added to the frontend.
   * An unused field exists for stating the reason a spouse has no SSN [here](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/src/schemas/21-686C/schema.js#L368). This can be implemented in a similar way no ssn is implemented for veteran information.
1. Do you live together and Reason for Separation (13A, 13B) while present on the digital form do not function as expected. It's possible for a person to be currently married, but separated and not living with their spouse. This needs to be fixed to reflect this case as these are only handled for past marriages.
### Section III - Information Needed To Add Child(ren)
1. Child Status (16G) is present but somewhat incomplete in the digital form.
    * It has an option stating 'Child was seriously disabled before 18' but it's unclear if this maps to the paper form option of 'Child incapable of self-support'.
    * The field 'Child Previously Married' maps 1-1 between paper and digital form, but if checked then a veteran needs to fill out How and When Marriage Ended (16H). 16H is not present on the digital form and needs to be added as a field.
1. Per the note in Section II - If you are a veteran with a stepchild and no longer live with the stepchild's biological or adoptive parent, complete section V:
    * The digital form has fields that cover required information for (21A, C-E) name of child, and whether or not the child lives with you and if not then their address and the name of the person they live with.
    * The digital form needs fields for:
        * 21B - Are you still supporting your stepchild(ren)?
        * 21F - Date stepchild left veteran's household
        * 21G - Financial support provided - [ ] more than half, [ ] half, [ ] less than half.
    * It's possible a veteran answers YES to 21A, but does not support all of the children they listed. If this is the case, then additional functionality needs to be added to the digital form to support this.
### Section IV - Veteran Reporting Divorce From Former Spouse
1. There's a note at the top of the section stating if the marriage ended as an annulment or declared void, use section IX to explain.
    * In the digital form, a veteran can select 'Other' with a field that expands underneath, providing them a space for this explanation. Maybe 'Other' needs to be clarified a little more to reflect the note above.
### Section V - Veteran Reporting On Stephchild(ren)
- See comment at section 3.2
### Section VI - Veteran Reporting Death Of A Dependent
1. This workflow isn't currently present in the digital form, but could potentially be added re-using existing fields. 
### Section VII - Veteran Reporting Marriage Of Child
1. This workflow isn't currently present in the digital form, but could potentially be added re-using existing fields.
### Section VIII - Veteran Reporting A Schoolchild Over 18 Has Stopped Attending School
1. This workflow isn't currently present in the digital form, but could potentially be added re-using existing fields.
### Section IX - Remarks
- This section exists as smaller, independent text fields in the digital form. However, some fields may need to be updated to add these.
    * i.e. Comment at section 2.3 regarding field 11C.
### Section X - Beneficiary Signature
- Handled internally
### Section XI - Additional Children (Addendum) 
- The digital form currently supports the addition of up to 4 children. This section of the paper form is for adding more, with the instructions to print out and use additional pages of this section if they require more space.
- A decision needs to be made around how many additional children should be supported by the digital form. Is the current number of 4 sufficient? 
