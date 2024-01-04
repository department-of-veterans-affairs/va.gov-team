# EVSS - PCIU Migration Discovery

**PCIU**, or **P**ersonal **C**ontact **I**nformation **U**pdate, is an external API service within EVSS which is used by vets-api to manage a particular users (you guessed it) personal contact information such as addresses, emails and phone numbers. Since the goal is to eventually sunset EVSS, all calls in vets-api to PCIU must be removed and (possibly) replaced by another source- most likely [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-profile). 

Although the initial focus of the [investigation](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64189) was for migration within the 526ez application, it became apparent that PCIU was being used by most, if not ALL applications within vets-api, via the [prefill](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-work-with-pre-fill#VAFormsLibrary-HowtoworkwithPre-Fill-Vets-APIWork) functionality. Additionally, some applications appear to call out to PCIU *directly* from vets-website, albeit *not* 526ez (as far as we can tell). 

Below is a breakdown of PCIU usage within vets-api, in this general order:
1. "global" prefill usage
2. 526ez-specific prefill usage
3. PCIU_Address usage (and its front-end tie-ins)
4. TBD - some other stuff

**WORK IN PROGRESS - more to follow**
