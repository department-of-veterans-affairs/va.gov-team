# Other Product FAQs

NOTE: THE MODERNIZED CHECK-IN TEAM NO LONGER MAINTAINS FAQ DOCUMENTS FOR STAFF OR VETERANS

Created: September 25, 2023 <br/>

- [Documentation Guidance](#documentation-guidance) <br/>
- [General](#general) <br/><br/>

## Documentation Guidance 

- Common Veteran-facing or staff-facing FAQs should be documented in the [Product Guides](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/product/product-guides).
- **Other Product FAQs** should be used to document more nuanced scenarios or code-specific information that comes up on occassion, but might be too in-the-weeds for external communication.
- Include general application, connections to other applications or internal speak knowledge that might be useful for internal team members.  


## General 

| Question &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Answer &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
| ------------------- | ----------  | 
| **Can a family member or caregiver complete eCheck-in?** | VEText checks the Cell and Home Phone field in VSE GUI. VSE GUI only lets users (e.g., MSAs) update the Home and Work phone field; not Cell field. They can edit the Home Phone to be the patient's cell phone number which is fairly typical these days with less people having traditional landlines. Otherwise, they'd have to use an appropriate VistA menu to update the Cell phone field. E.g., Pre-Register a Patient menu would be one such menu that they could use but they might not have access to it and is a lengthy menu to navigate just to edit one value.<br/><br/>So, for checking in, VEText checks the cell and home phone fields, and if either of those matches the one the Veteran (or their caregiver) is using to text "check in," then it will work. So, yes, eCheck-in can support a caregiver checking in, i.e., only from the standpoint of if the caregiver's number is listed as the Veteran's home or cell number in VistA. |
| **Does eCheck-in work if the same phone number is associated with more than 1 Veteran?** | Yes, it does work, but only if the two or more Veterans don't both have appointments on the same day. If they do, VEText will error out and they will be told via VEText upon texting "check in" to 53079 to check in at the desk with an MSA. |
| **How are Pre-Check-in & Check-in links associated with an appointment?** | Pre-check-in links are associated with a specific appt or appt group, but check-in links do not have a specific appt association, there just has to be at least one appt eligible for check-in for a uuid/link to be created under the current business rules |
| **What do you 3-digit & 5-digit station codes mean?** | Station with 3 digits would mean a VAMC and all sites that fall under that VAMC; Station with 5 digits is the unique facility either just the VAMC or a specific CBOC. |

