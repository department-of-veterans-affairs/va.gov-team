# **ITF Baseline Audit - Findings**

In order to ensure that Pension’s solutions for intent to file (ITF) fulfill Veteran needs in their larger claims journey, we need a baseline understanding of how Veterans might experience intent to file by examining where they might encounter ITF on VA.gov, and by synthesizing the learnings and pain points that other product teams have gathered.

## About the Audit

### Questions

- Where does intent to file appear in the Veteran claims journey?
- How is intent to file framed throughout each claims stage?
    - How is intent to file explained and understood on social media, between Veterans?
    - What inconsistencies exist?
- What pain points have been identified and validated by previous teams?
    - Based on knowledge gaps, where might we investigate further?

### Methodology

526 conducted [an initial audit of ITF](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1702916468731/19c22e5ea181ee7c1f49bc13676aab370dc3664b?sender=ue38619e047bf99f80f232455) as of December 2023, collecting Slack threads, journeys, and additional research from other teams. We built upon this audit with a focus on mapping ITF touchpoints in the context of the steps Veterans take in their claims process:

- Learn about claims
- Start a claim
- Complete a claim
- Track a submitted claim
- Interpret decision

This included filling in gaps from the work completed since December 2023: the Veteran Facing Forms team releasing the ITF standalone form, their respective CAIA reviews, and the latest error messaging from 526.

[https://lh7-us.googleusercontent.com/docsz/AD_4nXdf-Eg9C6lSZ0Mmga5NlCllzNYxBo4tV6jqsyqH15OnKCslwsC4jewOJ76mkfDOiAGVA4daXERNgzOfHJjYBDlJu7IopFMqbGkAbZjLv-sWggBb8JslINo5VmggMNi_WXavAnzlWrTzKAFeKtZU66_mRX51?key=98qmflxlym9K307fCRe4_w](https://lh7-us.googleusercontent.com/docsz/AD_4nXdf-Eg9C6lSZ0Mmga5NlCllzNYxBo4tV6jqsyqH15OnKCslwsC4jewOJ76mkfDOiAGVA4daXERNgzOfHJjYBDlJu7IopFMqbGkAbZjLv-sWggBb8JslINo5VmggMNi_WXavAnzlWrTzKAFeKtZU66_mRX51?key=98qmflxlym9K307fCRe4_w)

[See mural for reference.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1713384778236/cb7811f7fc7d62be8ebfcf962519f055c9df98e6?sender=ue38619e047bf99f80f232455)

### Related artifacts

- [526] [ITF Research MURAL](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1702916468731/19c22e5ea181ee7c1f49bc13676aab370dc3664b?sender=ue38619e047bf99f80f232455)
    - [Research Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/Intent%20to%20file%20Research/ITF%20Research%20Summary.md#findings-and-recommendations)
- [Veteran Facing Forms Team] [21-0966 Repo](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/tree/main/Forms/21-0966)
    - [CAIA] [IA Design for Forms Digitization](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/ia-design-docs/form-digitization-supporting-forms.md)
    - [CAIA] [ITF Findability](https://docs.google.com/spreadsheets/d/1b1CdCjWyn4ToYOigHzOf5zDHQ_IPcHIgaNvBwTtoj8s/edit?usp=sharing)

## Key Findings

The findings below were derived from the page audits referenced above and will inform hypotheses and questions to be answered with further research.

1. Entrypoints to pages that explain intent to file, including the intent to file online form, are buried within [VA.gov](http://va.gov/) navigation.
2. The benefits of intent to file are obfuscated by inconsistent descriptions of the process.
3. Intent to file dates aren’t referenced on [VA.gov](http://va.gov/) after submission.
4. *The lifecycle of an intent to file is not disambiguated from an application lifecycle.*

## Key Findings – Detailed

1. Entrypoints to pages that explain intent to file, including the intent to file online form, are buried within [VA.gov](http://va.gov/) navigation.
    - Entrypoints to the ITF standalone form include:
        - *Disability → How to File → Supporting Forms*
        - *Find a VA Form → About VA Form 21-0966*
        - *Resources: Your intent to file a VA claim*
    - Because none of these entrypoints can be directly found through the navigation menu, this implies that a Veteran has to be actively seeking out the intent to file form with an existing awareness of the intent to file process.
    - The invisibility of ITF at this stage also suggests that a Veteran may be learning about Intent to File for the first time when:
        - Reading the disclaimer below “Start the Disability Compensation application”:
            - ”By clicking the button to start the disability application, you’ll declare your intent to file. This will reserve a potential effective date for when you could start getting benefits. You have 1 year from the day you submit your intent to file to complete your application.”
        - Or after clicking “Start the Disability Compensation application” and encountering the page that displays the state of their ITF.
2. The benefits of intent to file are obfuscated by inconsistent descriptions of the process.
    - The intent to file process is described as both optional and required. An infographic from [benefits.va.gov](http://benefits.va.gov/) is entitled, Optional “Intent to File” process. Meanwhile, a [VA news article](https://news.va.gov/32368/successfully-file-va-compensation-claim/) states “The Intent to File is required…”
    - The About page for 0966 and an FAQ for disability claims suggests intent to file is only relevant for Veterans who want more time to gather evidence.
        - Benefits Infographic: “For Veterans and Survivors who need additional time to gather their claim information…”
        - About VA Form 21-0966: “Use this form if you're still gathering information to support your claim..”
        - Filing a Disability Claim FAQ: “If you plan to file your claim using a paper form, but do not have all your evidence ready to submit your claim…”
    - The automatic submission of intent to file for disability and supplemental claims is not indicated obviously across all touch points; the mention of automation may be buried or omitted entirely. This risks the Veteran wading through paragraphs to learn about what the intent process is, before learning that they do not need to submit it as a separate form.
    - The date that an intent to file sets has many labels and may lack context.
        - Resources, Supporting Forms, Disability → How to File, ITF check: “potential start date (or effective date) for your benefits”
        - Disability introduction page: “potential effective date”
        - Active ITF notification letter: “intent to file date”
        - Decision letter: “payment start date” or “effective date”
        - Compensation and Pension Manual: “effective date of entitlement”
3. Intent to file dates **are not available** on [VA.gov](http://va.gov/) after submission.
    - If a Veteran submits an intent to file through the standalone form, their confirmation page enables the user to print the page for future records. The introduction page states, “We’ll let you know what your potential effective date is after we process your intent to file,” but does not indicate how the Veteran will be notified or when.
    - If a Veteran submits an intent to file through any channel, they will receive a letter confirming that they now have an active ITF and detailing the date. However, if a Veteran submits an intent to file online (either through automatic submission or in a separate form), we do not inform them on VA.gov if or when they will receive one.
    - Neither ITF submission dates, nor expiration dates, are available in the Claims Status Tool or in My VA. “*Where can I find my intent to file?*” is a common ITF question among Veterans on Reddit, who have directed each other to eBenefits, which has historically listed active and inactive intents to files. Veterans on social media have noted difficulty with recalling their intent to file date, in order to ensure that they file their claim on time to receive their "back pay”, as well as difficulty with even recalling whether they submitted an intent to file at all.
4. The lifecycle of an intent to file is not disambiguated from an application lifecycle.
    - While all pages about ITF mention the possibility of retroactive payments, some omit how an intent to file works, specifically its timeline – that it sets a potential effective date for one year, and if the Veteran does not complete and file their claim within that year, their potential effective date expires.
    - Application expiry dates can be found on the introduction pages for claims and on My VA, under “Benefit application drafts”. Intent to file expiry dates are only detailed in the ITF check messaging when a Veteran has:
        - Started a disability application
        - Returned to their in- progress disability application
        - Submitted an intent to file through the standalone form
    - However, there are no other touchpoints where application expiry is explicitly differentiated from intent to file expiry, their potential consequences:
        - When an in-progress application expires, VA will erase their draft.
            - And their intent to file remains active, so Veterans can still apply for benefits with an earlier effective date.
        - When an intent to file expires, their potential effective date expires.
            - And their in-progress application may remain active. Once the Veteran returns to their application or starts a new one, a new intent to file is created.
    - Veterans who encounter one date point or another risk conflating the two expiry dates or continuing the application without certainty of when their intent to file expires, when they might lose their “back pay”, or whether or not they are still eligible to apply for benefits.

## Hypotheses

The inconsistencies we uncovered further validate the pain point [identified by Proactive Benefits research](https://arc.net/l/quote/qwjnywth): "Even for Veterans who have filed an intent to file in the past, there is still confusion about the purpose, how to do it, and what to expect.”

The Pension team has an overarching hypothesis that **if Veterans are equipped with an understanding of the intent to file process, that they will start their Pension application journey earlier and with more confidence.**

More specifically, we hypothesize that:

- Leading messaging with the benefits of intent to file will encourage Veterans to start their application.
    - **Why?** Because if the benefits are clear, Veterans will want to reserve an earlier effective date.
- Veterans want to know how intent to file expiry may impact their benefits, but may be overwhelmed if they are provided all relevant dates and their impact (intent to file expiry date, application expiry date, potential effective date).
    - **Why?** Because Veterans value maximizing their payments, not maximizing their understanding of claims processes.
- Veterans may hesitate to continue their application if they are first introduced to intent to file immediately after clicking “*Start the Pension application*”.
    - **Why?** Because Veterans may expect to start filling out an application after clicking “*Start the Pension application*”, not to be introduced to a new process.

These hypotheses have informed the next steps below and are intended to serve as assumptions to test in the future.

## Next Steps for Pension

While there are opportunities to explore and refine the ideal intent to file UX sitewide, the Pension team has identified three touchpoints to start designing improvements for:

1. **The Pension introduction page**
    
    How might we set expectations around intent to file earlier, so that Veterans are not hindered or blocked from continuing their application?
    
- **Next step:** Collaborate with Michael Tri and CAIA to clarify intent to file benefits on the introduction page
1. **The ITF status page**
    
    How might we clarify how ITF expiry impacts Veterans’ benefits?
    
    - **Next step:** Re-engage with Julie Pedtke (526) and Katherine Fung (CAIA) to redefine messaging goals on the ITF status page
2. **Step 5: Financial information → Care Expenses, Medical Expenses**
    
    How might we ensure Veterans' claims utilize ITF dates where appropriate in their application?
    
    - **Next step: Identify inconsistencies between the paper and online Pension form, where an intent to file date should be utilized, and opportunities for further guidance in-form.**

Because these iterations will not directly validate or invalidate our hypotheses on veterans' understanding or experience with intent to file, we have identified research goals and initial questions for future activities below.

[A draft of our roadmap for ITF V1 can be found in MURAL here.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1697736525149/26590ab628618a5e2b86232397286eab8e7f8a1d?wid=0-1718667719481)

### **Internal Desk Research / VBA**

**Complete a claim**

Goal: Ensure Veterans' claims utilize ITF dates where relevant in their application

- Where might the ITF date be utilized in the Pension application, besides *Unreimbursed Medical Expenses*?
- What guidance might we provide to ensure the Veteran is equipping their claim with the right amount of information?
- What usability hurdles or blockers might be created if the Pension form automatically utilizes ITF in crucial moments of the form?

### **VSO Research**

**Learn about claims**

Goal: Understand Veterans' mental model of ITF and their barriers to action

- Are Veterans familiar with the intent to file process?
    - What are Veterans' perceptions of the ITF process?
    - How might this impact Veterans’ response?
- How do VSOs interact with Veterans regarding their intent to file, in person or over the phone?
    - What language do VSOs use to describe intent to file?
    - Do they complete a paper form or use SEP?
    - How long does it take for this to get into the system, and what expiration date do they tell the Veteran?

Goal: Validate Veterans’ comprehension of intent to file’s benefits

- Do Veterans understand how the intent to file process impacts their potential benefits?
- What questions or concerns do Veterans have about intent to file?

**Follow a claim**

Goal: Understand Veterans’ expectations after an ITF is created

- **Where do Veterans expect ITF information to live after notifying VA?**
- What information would they look for, and why?
    - How might they troubleshoot if that information is not available?

### **Veteran-Facing Research**

**Learn about claims**

Goal: Validate the effectiveness of the Pension introduction page based on Veterans’ needs

- Do Veterans understand if this is the right form for them?
    - That it is not a military pension form?
- Do Veterans understand the requirements for submitting a Pension claim?
- What information is missing, in order to have confidence to start the application?
- Are expectations properly set for what (records, forms, general effort) needed to complete the form?
- What is the effect of introducing some eligibility information in the definition of the form?
- Does messaging about intent to file disrupt/distract from the goal of the introduction page?

**Initiate a claim**

Goal: Learn whether intent to file messaging is more effective after starting an application

- What does a Veteran expect to see after starting their application [clicks *Start the Pension application*]?
- How might an ITF check support or hinder their experience?
    - How might Veterans respond to information about an expired ITF?
        - Does providing information about an expired ITF hinder Veterans from continuing their application?
    - How might Veterans respond to an error state? [*We’re not able to check if you have an existing intent to file at this time.*]

## Open Questions for the Benefits Portfolio

**Learn about claims**
I want to understand what claims I might be eligible for, so that I can maximize my benefits.

- How might we describe the benefits that the intent to file process provides consistently across [](http://va.gov/)VA channels (webpages, email, VA Notify, letters) so that Veterans are confident in the next steps for their claims?
- How might we provide a predictable digital experience with intent to file, regardless of the claim type, so that Veterans can have a seamless claims journey without the burden of relearning a process?

**Follow a claim**
I want to know the status of my submitted claim, so that I can have reassurance of when I might receive payments.

- How might we support tracking of non-claim submissions like ITF so that Veterans can identify action items with more certainty and speed, without needing to request additional information from VA?
    - [In this Slack thread,](https://dsva.slack.com/archives/C044AGZFG2W/p1717690481458969) the Veteran Facing Forms team indicated they have started a joint effort with the My VA team to track forms that are not supported on the Claims Status Tool today. [Link to Github Issue](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1170)
