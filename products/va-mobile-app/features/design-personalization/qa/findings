# VA Mobile App - Personalized Home Screen: QA Summary of Findings 
July 2, 2024

## Project Details
- **Epic Ticket:**
  - [Zenhub/internal link: 3542](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/3542)
  - [Public/github link: 3542](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/3542) (github will be missing a lot of the epic functionality).
- **QA Representative:** Therese
- **Testing Narrative:**
  - QA work on home screen personalization spanned ~14 sprints, with 71 tickets requiring QA work of roughly ~132 story points. (Total pointing/estimates are a little fuzzy, as both the QA and FE teams changed how we handle estimates midway through the project; the FE team mostly dropping them, and the QA team adding them more formally. Overall takeaway here is that HSP was a LARGE project.)
  - The factors that introduced the most risk into this project were the long timespan in feature branch (during which other significant features were implemented, notably the React Query migration and appointments componentization), as well as the complexity of the home screen UI. 
    - Risk mitigation for the time in XL/complicated dev merges included keeping the feature branch in sync with develop, communication & regression-testing around merge conflicts, and sequencing some portions of personalization work to come after React Query (to avoid rework).
    - Risk mitigation for home screen UI included extensive & proactive cross-team [error mapping](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1704381519703/cd6d78c5824a5fb0cc8b26597f0ad271072df8f2?sender=ua1b5a2ce4f32e881fea53492), some side-by-side sessions with QA and Eng for some UI fixes, and per-ticket visual QA from UX (rather than just end-of-feature visual QA).
  - Remaining area of perceived/project risk for feature release is outside of mobile team control: screen loading times (mitigated as much as possible by [API sequencing](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/8143) and [further analytics to monitor](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/8570)).

## Other Testing Info 
- **Manual test execution documentation:** In addition to testing documented in epic tickets, there were several TestRail runs. In rough chronological order:
    - [Veterans Crisis Line component](https://dsvavsp.testrail.io/index.php?/runs/view/5217&group_by=cases:section_id&group_order=asc)
    - [Deeplink button component](https://dsvavsp.testrail.io/index.php?/runs/view/5241&group_by=cases:section_id&group_order=asc)
    - [About you section happy path](https://dsvavsp.testrail.io/index.php?/runs/view/5289&group_by=cases:section_id&group_order=asc)
    - [About you section unhappy path empty](https://dsvavsp.testrail.io/index.php?/runs/view/5299&group_by=cases:section_id&group_order=asc)
    - [Activity section happy path](https://dsvavsp.testrail.io/index.php?/runs/view/5291&group_by=cases:section_id&group_order=asc)
    - [Announcements banner](https://dsvavsp.testrail.io/index.php?/runs/view/5300&group_by=cases:section_id&group_order=asc)
    - [VA Resources section](https://dsvavsp.testrail.io/index.php?/runs/view/5315&group_by=cases:section_id&group_order=asc)
    - [Health category screen happy path and skeleton loading component](https://dsvavsp.testrail.io/index.php?/runs/view/5361&group_by=cases:section_id&group_order=asc)
    - [Benefits category screen happy path and large nav button component](https://dsvavsp.testrail.io/index.php?/runs/view/5366&group_by=cases:section_id&group_order=asc)
    - [Benefits category screen unhappy path](https://dsvavsp.testrail.io/index.php?/runs/view/5425&group_by=cases:section_id&group_order=asc)
    - [Oracle Health (Cerner) handling](https://dsvavsp.testrail.io/index.php?/runs/view/5433&group_by=cases:section_id&group_order=asc)
    - [Activity section unhappy path](https://dsvavsp.testrail.io/index.php?/runs/view/5503&group_by=cases:section_id&group_order=asc)
    - [About you section unhappy path error](https://dsvavsp.testrail.io/index.php?/runs/view/5426&group_by=cases:section_id&group_order=asc)
    - [Health category screen unhappy path](https://dsvavsp.testrail.io/index.php?/runs/view/5504&group_by=cases:section_id&group_order=asc)
    - [Final pre-develop regression testing](https://dsvavsp.testrail.io/index.php?/runs/view/5653&group_by=cases:section_id&group_order=asc)
- **Automated test execution documentation:** Passing detox runs for all scripts, Android and iOS.
- **Bugs found & resolved:**
  - Bugs found were primarily documented as comments on original implementation tickets (example). Documenting as comments on implementation tickets and keeping those tickets in PR until bugs are resolved cuts down on documentation overhead needed to fix problems.
  - Additionally, there were a couple 'omnibus'-esque bug collection tickets, which give a good sense of the kinds of bugs found mid-implementation ([8537](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/8537), [8578](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/8578)) and end of implementation ([8963](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/8963))
- **Bugs being released into production:** Product has OK'd to release these sev-3 issues with MVP:
  - No veteran will ever see 'enroll in VA Healthcare' banner - [8672](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/8672)
  - Users without access to claims/appeals will always trigger a misleading loading state on home screen - [8752](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/8752)
  - Long pause during onboarding leads to temporary weird state on home during first login - [8811](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/8811)
  - Should update some link announcements to 'external link' for screen readers - [8671](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/8671)
- **Testing limitations:**
- **Other testing notes:**
  - UAT completed by other roles (see [UAT documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/features/design-personalization/uat)). Product (in consultation with Engineering, QA and UX) decided that no changes needed to be made to MVP, coming out of UAT.
   - Work on the [React Query migration (zenhub epic link)](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6729) occuring in develop (before, during & after home screen personalization work) impacted the implementation and testing of this feature


