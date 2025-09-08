## Sep 2, 2025 Meeting - Kickoff | MFS & IIR | Vet Status Eligibility Logic Updates

This kickoff meeting is to prepare for a handoff of the Vet Status work. We should align on: 1) scope of work 2) how we want to do the handoff 3) what each team needs to prepare 4) what kind of support there should be post handoff.

**Scope: What work will be handed off to MFS?**

1. We need to store all logic within one place that web and mobile can access. - **MFS will own**

   1. Needs to work so that if logic ever needs updating again, it will update on web and mobile at the same time - only one update required.

   2. Needs to work so that if we were to update the content in error/ineligibility messages, it will update on web and mobile at the same time - only one update required.

2. Update the logic based on [adjustments from August 11th meeting](https://dsva.slack.com/archives/C05RJS5DANT/p1754932534857309) - **MFS will own but datasource for logic is TBD right now. Hoping to hear back from LH late next week. Michelle will keep us posted on what we hear back. Note: error/ineligibility messages will need to be changed to.** 

   1. Check VA Profile API service history

      1. If a person ONLY has National Guard service > don’t show the card. What message should they get? An existing one? A new one?

      2. If a person has some or no National Guard service > proceed to next check

   2. Check Veteran Service History & Eligibility API

      1. If Confirmed > show card

      2. If Not Confirmed > proceed to next check

      3. If System error (can’t determine if confirmed or not confirmed) > show error message “Something went wrong”

   3. Check VA Profile API character of discharge

      1. If they have ANY of these characters > show card

         1. Honorable

         2. Under honorable conditions (general)

         3. Bad conduct

         4. Under other than honorable conditions

         5. Honorable (Assumed) - GRAS periods only

         6. Honorable for VA purposes

         7. Dishonorable for VA purposes

      2. If they don’t have any of the above characters and have one of these characters > show ineligibility message #1 “You’re not eligible for a Veteran Status Card”

         1. Dishonorable

      3. If they ONLY have one of these characters > show ineligibility message #2 “There’s a problem with your discharge status records”

         1. Uncharacterized

         2. Unknown

         3. DoD provided a NULL of blank value

         4. DoD provided a value not in the reference table

         5. Value is calculated but created a invalid value

         6. Value is not applicable for this record type

      4. If System error (can’t determine character of discharge) > show error message “Something went wrong”

3. Consume new shared service on mobile app - **MFS will own but shouldn’t go live right away**

4. Consume new shared service on web - **IIR will own**

5. We need to be able to measure the impact of the logic changes - **MFS to own**. How should we do it? Should we keep the current [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/ech-i5z-egy/veteran-status-card?fromUser=false\&refresh_mode=sliding\&from_ts=1741025395434\&to_ts=1741630195434\&live=true) we have to continue monitoring the “Before” and then create a new one for this “After”? If yes, we would need to know:

   1. Keep latency the same: 1) the LH API /status endpoint 2) VA Profile /service-history endpoint

   2. Number of responses that give the user access to their card

      1. LH > Confirmed OR LH > Not Confirmed but VA Profile > Y

   3. Number of responses that don’t give the user their card because they are ineligible

      1. LH > Not Confirmed and VA Profile > N

   4. Number of responses that don’t give the user their card because they are unknown

      1. LH > Not Confirmed and VA Profile > Z

   5. Keep error rate for the LH API, and VA Profile API (if any error, we show the user the system error message)

   6. Continue showing traffic

   7. Keep download PDF download errors on dashboard

   8. Different/additional monitors going to the Slack channel

6. Update documentation: [ineligibility documentation](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/veteran-status/v2-IIR/ineligibility-error-messaging-logic.md), Swagger docs, endpoint monitoring playbook, shared service process, etc. - **MFS to own**

7. Take this through “collab cycle” but retrofit to work for us - **MFS to own**

   1. Idea: maybe we ask to do a one-off Architecture Intent without having to go through the entire kickoff process?

8. How do we approach monitoring? Slack? Mobile and web? - **MFS to own**

9. Clean up work post release of shared service and logic update - ??

10. Supporting Content/IA team in updating the Veteran ID Card page - ?? **MFS to own but will need to engage with VEO** 

11. Product Guide for mobile app - **MFS to own**

12. Remove Vet Status alert/link from the military-information page (enough time has passed that we think it can be removed) - **IIR to own and do much later**

**Support:** 

- IIR does not need to be reviewers on PRs

**Timeline:**

- Dave said December 20th for new logic going live?

**Handoff Next Steps:**

-
