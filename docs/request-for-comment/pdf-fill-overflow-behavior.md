# RFC: PDF Fill Overflow Behavior

- Date: 2018-12-28
- Related Issue: https://github.com/department-of-veterans-affairs/vets-contrib/issues/831

## Background
A request was made that essentially would alter the overflow behavior on on the PDF filling process.

Currently whenever the number of submitted records exceeds the number of fields/area that are available the data is then pushed to an additional info page (the field is filled with `See add'l info page`)

This becomes an issue in certain areas (such as the 527EZ where fields require entries and are only pushed onto the additional info if they add too many "Other" / "Additional Sources" and then it doesn't fill out any of the non "other" fields):

![image](https://user-images.githubusercontent.com/5629145/50563725-6868ec80-0ced-11e9-9ce5-ab05b2a6aa47.png)


Additionally it causes issues in some areas where information seems to be often / always pushed off to the additional info section:

![image](https://user-images.githubusercontent.com/5629145/50563746-a239f300-0ced-11e9-86ee-11964a57a0ce.png)



## Motivation
To make processing of the forms easier for the reciever (Often forms are unprocessable whenever they are recieved)

## Design
- Update the behavior of the overflow on a per-field basis
- Update the additional information page with a design to be determined by someone with UX experience

## Risks
Potential to affect something that I imagine is very high volume.

- The risk is minimalized by making the change on per field basis.

## Alternatives
Implement a filler for just the forms requested, 527 and 530. Didn't jump straight to that, because given that the problem exists across these two forms, I assume that a more broad solution could help in other areas as well. 


## Aside
The question has been raised as to whether or not we could find a better way outside of the pdf forms, especially if it will require human intervention anyways. We're definitely aware of this, and want to improve it (in a way that works best for the processors) in the future, but there is a lot of discovery and learning that needs to happen before such a step happens, and is outside of the scope of this work.
