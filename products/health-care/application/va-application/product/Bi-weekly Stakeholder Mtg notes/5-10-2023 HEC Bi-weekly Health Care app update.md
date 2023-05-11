# May 10, 2023 HEC Bi-weekly Health Care application update

### 5/10/23 Notes
- Online-Paper-System comparison
     - Completed review by HEC team
     - Pending another review from another group & then will be shared
          - **side note** - I thought our team would be part of this review. Perhaps they were doing some pre-work?

- Process flow for when things are changed
     - Separate meeting will be scheduled to discuss 

- Discharge character
     - Temporary solution in Production
     - **Patrick** - Second part of email conversation: Do we need this info from the Veteran?  Is this a duplication in efforts?
     - **Jennifer** - HEC Leadership says it should not be removed
     - **Neshelle** - Jobs are run to pull this data already
     - **Neshelle** - If system is working as designed, the Veteran wouldn’t have any negative experiences due to mismatching information.  It doesn’t matter what they put on the application, it is being verified.
     - **Patrick** - If we prefilled, Veteran changes what is prefilled, triggers a review by processing team
     - **Nichelle** - Yes
     - **Josh** - No, reported service data is disregarded.  If no documentation is provided or cannot be confirmed, then the Veteran is contacted.  Work items created for special circumstances
     - **Patrick & Josh** - Veteran submits service dates that are different that could impact eligibility, that data is discarded (still shows on application but doesn’t show up - only on the submission itself). If Service History cannot be verified, would go in status in pending eligibility (30 days) and would receive letter requesting proof of service (happens mostly in earlier years’ service).  Data entered is only used when Veteran has to be contacted to provide proof
     - **Patrick** - Paper form doesn't have the enhanced ability to prefill.  Online we may have the ability to provide a path to dispute prefilled military history or service connected disability rating

- EZR
     - Not used for contact info updates, usually for Insurance, Next of Kin, Financials, Dependents
     - Put in place before tech solutions - why do we even need this?
          - **Rebecca Kessler** - good to use as proof of changes (Ins, financials, dependents, etc)
     - In Person process - Enter in VES, print EZR and have Veteran sign it
          - **Josh** - Digitized is alot easier to find/follow than Paper proof of change          
          - But not all Veterans use computers/cell phones
          - Need to keep in person process as well
     - **Patrick** - question on the table: If we provided a way to update financials without having to complete a full form would be beneficial for both Veterans and staff?


---

### Info from Teams Chat
#### From Neshelle
>topic that should have been added to the agenda from Patrick. 
>Background
>
>Quick summary issue (as I understand it) for newcomers: the originator of this thread reported that the web-based 10-10EZ prefilled an "Other than Honorable" discharge status when completing the military service section of the application, which was not the character of their discharge. Understandably that was a surprise and jarring to the user. The primary question is how did this user end up with the wrong discharge status pre-filled on their 10-10EZ; and the secondary question from the ensuing thread is why we are even asking for military service information.
>
>Update on primary question
>
>We looked at logic on the Veteran-facing digital 10-10EZ form and found that, as suspected, when the form encounters military service pre-fill value of null or unknown value, it populates the value to other which is then interpreted as "Other than Honorable" and appears in the user's browser. We believe this is what happened in this case.
>
>We're making updates to the logic immediately so that null or unknown values are handled properly and ensuring that the there is no conflation of other and an Other than Honorable discharge status in the frontend or backend code. I expect this change to be completed within a day or two.
>
>Discussion on secondary question
>
>While I believe we addressed the primary question above, the discussion on this thread suggests that maybe we don't need to collect military service history at all (including on the paper form). The reasoning is that the Enrollment System (ES) and/or HEC research staff will gather military service information independently of any data submitted by the user, thus making user submitted military service data redundant.
>
>I'd ask that @Mdoe, Jennifer, HEC and @Soza, Jessica MS chime in here from a HEC/business perspective, as well as @Faulkner, Joshua I. from an ES technical perspective.Is it worth discussing removal of the military service questions entirely from the 10-10EZ (digital and/or paper)?

#### From Jennifer
>An individual’s eligibility for VA health care is based on Veteran status (military service and character of discharge). Individuals applying for enrollment in VA healthcare must provide their military service information (Section II of the 10-10EZ). Additional information is gathered from the DD 214. If required military information need to determine eligibility is not listed on the DD 214, Enrollment and Eligibility staff will then access authorized verification systems to obtain the required military information.
>
>Proof of Military Service (va.gov)
