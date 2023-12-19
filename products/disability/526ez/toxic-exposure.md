# Toxic Exposure

## Keywords

Disability compensation, disability benefits, toxic exposure, PACT Act, 526 ez

## Resources

1. Sketch file: [526 toxic exposure](https://www.sketch.com/s/c353146f-eceb-4626-9918-7603c693417f) (will soon be migrated to Figma)
2. Epic: [Toxic Exposure - 526ez](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64536) (also contains other key project documents)
3. Documentation ticket: [Toxic Exposure - clean up documentation](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/71950)

## Team

1. Design: [@Kate-allbee](https://github.com/Kate-allbee),  [@mengA6](https://github.com/mengA6)
2. Front end engineering: [@christinec-fftc](https://github.com/christinec-fftc) 
3. Research: [@evelynhilbrichdavis](https://github.com/evelynhilbrichdavis)
4. Product: [@RakshindaAslam](https://github.com/RakshindaAslam) 

## Current design

We are adding a toxic exposure section to the 526 ez disability benefits claim form, allowing Veterans to specify some aspects of their service history that might qualify them for additional disability benefits related to toxic exposure. This brings the digital form into parity with the paper 526 ez form on these exposure questions. 

For our initial release, we will include this toxic exposure section only for new conditions (not already-rated conditions), as an MVP.

See Sketch file: [526 toxic exposure](https://www.sketch.com/s/c353146f-eceb-4626-9918-7603c693417f) (will soon be migrated to Figma) and the annotations within it for details.

## Project background

[@evelynhilbrichdavis](https://github.com/evelynhilbrichdavis) led usability research in August 2023. See [research findings](https://docs.google.com/presentation/d/1VLqXexB72C_fPjUyw1MwL2Pjznvsg_q_UYbg16xk-iM/edit#).  

## Outstanding questions and next steps

1. Accessibility-focused usability testing
   We have introduced some new variations on form components that we have accessibility questions about. For example, we are including a "not sure" checkbox that sets other fields to null when checked. We want to ensure this interaction between fields is apparent, consistent with user expectations, and does not cause confusion, particularly to screen reader users.
2. Measure usage in production
   What might we learn from how people are using the form / where they are dropping off / error logs?
3. Seek feedback / user data from support teams
4. Seek feedback from VSRs on real-world usage
   How useful is the toxic exposure data received from the digital form? What might not be useful and could be worth eliminating or formatting differently?
5. Expand the toxic exposure section to other disability claims (extending beyond new conditions)

## Background on decisions

### Entry point to toxic exposure questions

The current approach is to keep the "How is your condition related to your service" question unchanged.

<img width="306" alt="How is your condition related to your service question, showing 4 radio button options" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/b0ea39bc-5c35-49d5-ae24-d0e5872cd31c">


Later, we ask if any conditions are related to toxic exposure and list all newly entered conditions in checkboxes. The Veteran can check which, if any, of these conditions are related to toxic exposure.

<img width="280" alt="Are any of your conditions related to toxic exxposure question, showing a checkbox for each newly entered condition and a final checkbox of 'I am not claiming any conditions related to toxic exposure' " src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/abee8798-0a25-4627-8150-b76bcbd9142a">
