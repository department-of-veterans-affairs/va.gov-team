# VA Health and Benefits Mobile App - Travel Pay Feature

## Responsibilities and Ownership

This document is intended to outline the different components of building out the travel pay feature on the VA Health and Benefits Mobile App (VAHB). Each team is charged with ownership (the lead) and consulting (offering input) on each item.
NOTE: This is a preliminary document outlining discussions between teams as a proposal. At this time, this does not reflect an agreement
Own: The team owning is the key party responsible for delivering that item 
Consult and final approval: Has final approval to ensure that the experience is consistent (including content, IA, etc.)


<table>
  <tr>
   <td>
   </td>
   <td><strong>Mobile (VAHB POs and Contractor Team)</strong>
   </td>
   <td><strong>Experience (VA.gov POs and Contractor Team)</strong>
   </td>
   <td><strong>Notes</strong>
   </td>
  </tr>
  <tr>
   <td><strong><span style="text-decoration:underline;">Consulting with POs on Prioritization - what goes on the mobile app? Which functionality is supported and when?</span></strong>
   </td>
   <td colspan="2" >Co-own
   </td>
   <td>This is ultimately owned by the POs. While the Experience team can manage feature construction and provide input, the VAHB team owns which components are prioritized given that they have broader context. Mobile team needs to confirm that they even have the resources to consult on this.
   </td>
  </tr>
  <tr>
   <td><strong>Release Strategy</strong>
   </td>
   <td colspan="2" >Co-own
   </td>
   <td>There is a list of questions that we will need to go through; we will want to look through these items together. Understand what the release / rollout process would be like within mobile
   </td>
  </tr>
  <tr>
   <td><strong>Research and Feature Testing</strong>
   </td>
   <td>Consult and final approval
   </td>
   <td>Own
   </td>
   <td>Key question: determining if research is needed. Then, who is responsible for testing and monitoring any of the experiences that we might want to bring into mobile?  <em>Note: this would be for features beyond SMOC.</em>
   </td>
  </tr>
  <tr>
   <td><strong>Design</strong>
   </td>
   <td>Own
   </td>
   <td>Consult and final approval
   </td>
   <td>Mobile has different design patterns; we’d be grateful for mobile to own this and we would consult; <em>Mobile would build the figma files</em>
   </td>
  </tr>
  <tr>
   <td><strong><span style="text-decoration:underline;">Analytics - build</span></strong>
<ul>

<li>Feedback mechanism?

<li>Datadog?

<li>Firebase/GA?
</li>
</ul>
   </td>
   <td colspan="2" >Co-own
   </td>
   <td>Building the analytics for travel pay on mobile. The Experience team will be responsible for implementing the analytics on both the front and back end, but with heavy consultation from the mobile team’s side.
   </td>
  </tr>
  <tr>
   <td><strong>Creating the test plan for QA</strong>
   </td>
   <td>Consult and final approval
   </td>
   <td>Own
   </td>
   <td>Whoever designs or experience team should own this; QA team should consult on whether these seem correct; *identify test accounts*
   </td>
  </tr>
  <tr>
   <td><strong>Mobile Back End</strong>
   </td>
   <td>Consult and final approval - (Kristen: We originally discussed that there was a part of the backend that a mobile team engineer would do, but we can discuss if Liz could take on that work)
   </td>
   <td>Own
   </td>
   <td>Mobile has its own module; how much does our eng need to rewrite and/or reach out to their module (?) - how strict is the API separation for mobile?
<p>
What is their process on this? If Liz owns, could she pair program here?
   </td>
  </tr>
  <tr>
   <td><strong>Mobile Front End </strong>
   </td>
   <td>Consult and final approval
   </td>
   <td>Own
   </td>
   <td>We anticipate Liz will be building the front end
   </td>
  </tr>
  <tr>
   <td><strong>Integration</strong>
   </td>
   <td>Consult and final approval
   </td>
   <td>Own
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td><strong>QA</strong>
   </td>
   <td>Own
   </td>
   <td>Consult
   </td>
   <td>We understand (based on <a href="https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/mobile-app/mobile-and-web-collaboration.md">this doc</a>) that Mobile will own QA
<ul>

<li>Need to understand QA expectations and lead time in support
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Approvals</strong>
   </td>
   <td>Co-own (Mobile POs must approve)
   </td>
   <td>Co-own (Kristen: VA.gov POs must approve)
   </td>
   <td>Based on our reading of the doc, VAHB will always own approvals
<ul>

<li>No collab cycle included; by the time the feature is developed/implemented, all of the VA.gov team should have it approved by this point

<li>What is an engineer’s involvement in the approval process for VAHB?

<li>Approvals and VA internal approvals; anything else?
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong><span style="text-decoration:underline;">Release monitoring and analytics - track</span></strong>
   </td>
   <td colspan="2" >Co-own
   </td>
   <td>Both teams responsible for alerts and monitoring. The mobile team is likely to receive initial alert if there is an issue, but the experience team will assist in resolution.
   </td>
  </tr>
  <tr>
   <td><strong><span style="text-decoration:underline;">Updating designs and content on mobile app (Kristen: Design and content can shift to the experience team as well. It will be a discuss on future releases regarding capacity at the time from both the mobile and experience teams. Experience teams will need to learn the mobile patterns in the future and design there as well.)</span></strong>
   </td>
   <td>Co-Own (case-by-case basis)
   </td>
   <td>Co-Own (case-by-case basis)
   </td>
   <td>We believe that mobile app is best positioned to update the designs given awareness of overall patterns, etc. At the same time, the experience team will be involved in the content and design updates and provide input as needed.
   </td>
  </tr>
</table>

