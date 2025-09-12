## VES Data learnings
- Last updated: September 2025

### What we have learned about VES data, and how we addressed it
- EC/NOK
     - During 8/26/2025 launch of the Emergency Contact/Next of kin work on the EZR form, some Veterans encountered validation errors when trying to submit.
     - Errors from DataDog
          - "10-10EZR update associations failed: The request could not be properly read.  Please check the information before trying again."
          - "10-10EZR reconciling and updating associations failed: The request could not be properly read.  Please check the information before trying again."
- Initial issue:
     - When VES pulls old EC/NOK is can be invalid because it is missing role (primary vs secondary), name, and relationship.
          - Our ideal approach is to indicate to the user that the data is incomplete and they must fill it out to submit (List & Loop's save-in-progress/incomplete status)
          - If the use chooses to delete the EC/NOK dataset instead, Dev will put default data (uknown name, unrelated friend) before setting it back to VES for deletion.

<details>
  <Summary>08/27/2025 Slack conversation with Derrick Ellerbie and Joshua Faulkner on the first round of Associations API errors</Summary>

>**Heather Justice**
>Aug 27th at 6:15 AM
>
>Joshua Faulkner when you have a moment, we've seen 2 different errors with the associations api and wondered if there is anything on VES side that indicates an error in updating the associations data?
>first issue was a 500 error "Error transforming VES association: VES association is missing the following field(s): relationship"
>second issue was 400 error "10-10EZR update associations failed: The request could not be properly read.  Please check the information before trying again."
>
>**Joshua Faulkner**
>  Aug 27th at 7:06 AM
>
>i don't see the 500, is that coming from the read or the update? Need the timestamp and/or the icn if you have it.
>
>**Heather Justice**
> Aug 27th at 7:11 AM
>
>The timestamp is 4:49p ET.  Derrick Ellerbie was looking into the log yesterday, may be able to get the ICN
>
>**Joshua Faulkner**
>  Aug 27th at 7:58 AM
>
>not one of the values accepted for Enum class: [BROTHER, CHILDINLAW, MOTHER, SISTER, DAUGHTER, UNRELATED_FRIEND, EXTENDED_FAMILY_MEMBER, STEPCHILD, WIFE, SON, NIECE_NEPHEW, HUSBAND, FATHER, GRANDCHILD, WARD]
>
>`fluentbit.@timestamp Aug 26, 2025 @ 23:46:06.814`
>
>what time was the 400?
>
>that timestamp above i put is UTC btw
>
>**Heather Justice**
>Aug 27th at 8:03 AM
>
>the 400 error timestamp is 1:46:05am ET
>
>**Joshua Faulkner**
>  Aug 27th at 8:51 AM
>
>yep so the 400 is the invalid relationship submitted in the update, appears there is a disconnect on allowed values
>
>**Heather Justice**
>  Aug 27th at 8:52 AM
>
>Derrick Ellerbie can you confirm the allowed values for both EC and NOK?
>
>**Joshua Faulkner**
>  Aug 27th at 8:54 AM
>
>the 500 appears to be a retrieve of a record that has no relationship currently defined on existing associate, which we do have some of those in the older data, it should not fail though ideally, can it be displayed as unpopulated/null then the user have to provide >the relationship when they update it?
>
>**Derrick Ellerbie**
>  Aug 27th at 8:59 AM
>
>Yes, the first error is after we get the association data from VES, we see that there isn't a value for the attributes relationship or relationType in the payload and we throw an error
>
>As for the enums, I think the way we are formatting the enum values looks incompatible with how VES is expecting them:
>https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/10-10EZR-schema.json#L1237-L1252
>
>
>Best guess is that we're not converting CHILD-IN-LAW or NIECE/NEPHEW into CHILDINLAW and NIECE_NEPHEW
>
>**Derrick Ellerbie**
>  Aug 27th at 11:28 AM
>
>Joshua Faulkner Is it possible for the name or the role to ever be blank in the get_associations API response?
>
>**Joshua Faulkner**
>  Aug 27th at 11:56 AM
>
>the name should not ever be completely blank, but there is some very old data where the role may not be populated, i am not sure if we filter them out before it gets sent back though, in general it should be unexpected that you get it as blank.
>
>**Derrick Ellerbie**
>  Aug 27th at 1:54 PM
>
>Joshua Faulkner for the error involving the enum, are you able to tell me what value was submitted that caused that specific error?
>
>**Joshua Faulkner**
>  Aug 27th at 1:56 PM
>
>i cannot, the raw payloads aren't enabled to be logged, but even if it were they don't get logged until after the failed binding up front anyways. Our error message should really be updated to capture which one it is when this happens, is what we should do for future.
>
>**Derrick Ellerbie**
>  Aug 27th at 1:58 PM
>
>Thank you. If a blank or nil value was submitted for the relationship, would we see this enum error or would it say something like "relationship is required"
>
>**Joshua Faulkner**
>  Aug 27th at 2:04 PM
>
>its just a generic 400 message for failed mapping, but that'll happen only for invalid value, if its blank value it'll be a different message as a 200. So whatever value it is is provided, but is not one of the valid ones.
><img width="596" height="242" alt="image" src="https://github.com/user-attachments/assets/a622db00-9ee0-4c2a-ba80-308f02cf8119" />

>
>for a null/missing relationship it is:
>
><img width="586" height="130" alt="image" src="https://github.com/user-attachments/assets/543e3573-0b2d-44f2-8681-36c285dcc4d9" />
>    
</details>

- TL;DR - backstory of this, is that it used to be all free text, we converted them to standard values a few years ago, and that free text field remained there static, but some of them could not be converted to a standard value and we left it there for historical purposes.

<details> 
<Summary>09/10/2025 Slack Conversation with Derrick Ellerbie and Joshua Faulkner on the second round of Associations API errors</Summary>

>**Derrick Ellerbie**
>  Wednesday at 12:48 PM
>
>Joshua Faulkner We received a 400 Bad Request at Sep 10 12:42:14.729. Are you able to give us some details on what the error could be?
>
>**Derrick Ellerbie**
>  Wednesday at 12:49 PM
>
>This is from the associations api response
>
>**Derrick Ellerbie**
>  Wednesday at 12:51 PM
>
>DD Trace for reference
>
>**Joshua Faulkner**
>  Wednesday at 12:57 PM
>
>from String \"SPOUSE\": not one of the values accepted for Enum class:
>
>**Joshua Faulkner**
>  Wednesday at 12:58 PM
>
>same thing as before, there is disconnect on allowed values of relationship
>
>**Joshua Faulkner**
>  Wednesday at 12:58 PM
>
>it needs to be husband or wife, not spouse
>
>**Joshua Faulkner**
>  Wednesday at 12:58 PM
>
>[BROTHER, CHILDINLAW, MOTHER, SISTER, DAUGHTER, UNRELATED_FRIEND, EXTENDED_FAMILY_MEMBER, STEPCHILD, WIFE, SON, NIECE_NEPHEW, HUSBAND, FATHER, GRANDCHILD, WARD]
>
>**Derrick Ellerbie**
>  Wednesday at 12:59 PM
>
>We do not allow the user to choose "SPOUSE" in our application: https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/10-10EZR-schema.json#L1235-L1254
>
>**Derrick Ellerbie**
>  Wednesday at 12:59 PM
>
>Is it possible that this value was set on VES side when we call get_associations api?
>
>**Joshua Faulkner**
>  Wednesday at 1:00 PM
>
>that is possible
>
>**Joshua Faulkner**
>  Wednesday at 1:00 PM
>
>let me see if i can find the identifier for that person
>
>**Derrick Ellerbie**
>  Wednesday at 1:00 PM
>Most likely when we prefilled the form for the user, this is the value that was set already in VES
>
>**Joshua Faulkner**
>  Wednesday at 1:04 PM
>
>its set to extended_family_member currently, not sure where spouse is coming from
>
>**Derrick Ellerbie**
>  Wednesday at 1:08 PM
>
>Is this on their emergency contacts or next of kins?
>
>**Joshua Faulkner**
>  Wednesday at 1:08 PM
>
>i see what the problem is, there is a mismatch between old and new relationship values
>
><img width="501" height="334" alt="image" src="https://github.com/user-attachments/assets/25d4b3d2-17c5-42a3-b10f-f13641774f6f" />
>
>**Joshua Faulkner**
>  Wednesday at 1:10 PM
>
>seems like its taking relationship but putting it back into the relationType on its way back in
>
>**Derrick Ellerbie**
>  Wednesday at 1:10 PM
>
>ahh I see. We send back relationType to the update API and not relationship
>
>**Joshua Faulkner**
>  Wednesday at 1:12 PM
>
>the relationship is the old 'free text' field, before these were standardized into enum restriction a few years ago
>
>**Derrick Ellerbie**
>  Wednesday at 1:12 PM
>
>Can you tell if this was marked for deletion when we called the update API? (edited) 
>
>**Joshua Faulkner**
>  Wednesday at 1:13 PM
>
>it did not delete anything, it was rejected at the validation at the front door, the associates on that record are unchanged, last updated in 2022.
>
>**Derrick Ellerbie**
>  Wednesday at 1:13 PM
>
>But in the request data that we sent to the update API, are you able to see if we sent the deleteIndicator attribute with this relationship (edited) 
>
>**Joshua Faulkner**
>  Wednesday at 1:17 PM
>
>no, i can just see the reason of the error, it won't log the full request until it gets past that part of it
>
>**Derrick Ellerbie**
>  Wednesday at 1:24 PM
>
>Okay thank you. I'm not sure what we can do on our side to fix these fundamental data validation issues. We released a patch to set default values for relationType name and role when those data points are missing when we call get_associations API. But now it looks >like we have to choose a relationType for the user if it's not in the enum. Heather Justice I will need some input on how we should handle this
>
>**Derrick Ellerbie**
>  Wednesday at 1:26 PM
>
>It looks like that wouldn't resolve this issue either, since we are not sending SPOUSE to VES, this looks like something VES is doing @Joshua Faulkner?
>
>**Joshua Faulkner**
>  Wednesday at 1:42 PM
>
>it is sending SPOUSE, its getting it from the wrong place in the GET it appears
>
>**Joshua Faulkner**
>  Wednesday at 1:43 PM
>
>the relationship value that is sent from the retrieve should not be used, just the relationType
>
>**Derrick Ellerbie**
>  Wednesday at 1:43 PM
>
>Okay yes we do check for the relationship value first, and then relationType , and then we set a default value if all of those are blank
>
>**Derrick Ellerbie**
>  Wednesday at 1:44 PM
>
>So you're saying to completely ignore the relationship values from now on? (edited) 
>
>**Joshua Faulkner**
>  Wednesday at 1:45 PM
>
>right, that free text field is provided in the api in case the relationtype is null, it would provide some info on what it is meant to be, but it should not be used directly back in, in this case it probably should not be read at all and just left for the user to >provide it if there is not currently a relationType set.
>
>**Derrick Ellerbie**
>  Wednesday at 1:45 PM
>
>Code for reference https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/form1010_ezr/veteran_enrollment_system/associations/reconciler.rb#L93
>
>**Derrick Ellerbie**
>  Wednesday at 1:45 PM
>
>Okay, I will make an adjustment to not read this relationship value
>
>**Joshua Faulkner**
>  Wednesday at 1:46 PM
>
>backstory of this, is that it used to be all free text, we converted them to standard values a few years ago, and that free text field remained there static, but some of them could not be converted to a standard value and we left it there for historical purposes.
>
>**Derrick Ellerbie**
>  Wednesday at 1:46 PM
>
>Is it still possible that relationType will have values that aren't in the enum?
>
>**Joshua Faulkner**
>  Wednesday at 1:47 PM
>
>no, that should be impossible, but it is possible it could be null.
>
>**Derrick Ellerbie**
>  Wednesday at 1:47 PM
>
>Thank you, I will get this fixed
>
</details>
