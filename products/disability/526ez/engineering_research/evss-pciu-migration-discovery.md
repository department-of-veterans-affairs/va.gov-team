# EVSS - PCIU Migration Discovery

**PCIU**, or **P**ersonal **C**ontact **I**nformation **U**pdate, is an external API service within EVSS which is used by vets-api to manage a particular users (you guessed it) personal contact information such as addresses, emails and phone numbers. Since the goal is to eventually sunset EVSS, all calls in vets-api to PCIU must be removed and (possibly) replaced by another source- most likely [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-profile). 

Although the initial focus of the [investigation](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64189) was for migration within the 526ez application, it became apparent that PCIU was being used by most, if not ALL applications within vets-api, via the [prefill](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-work-with-pre-fill#VAFormsLibrary-HowtoworkwithPre-Fill-Vets-APIWork) functionality. Additionally, some applications appear to call out to PCIU *directly* from vets-website, albeit *not* 526ez (as far as we can tell). 

Below is a breakdown of PCIU usage within vets-api, in this general order:
1. "global" prefill usage
2. 526ez-specific prefill usage
3. PCIU_Address usage (and its front-end tie-ins)
4. TBD - some other stuff

# Prefill

[some context on how prefill is hooked into]

## Global

This [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1704228836578/aad7d6a83429dcc089f8d6e7d6a764f0aea4536f?sender=u0fedae1437598fcbe2f47409) describes how the default (or base-class) prefill gathers contact information. Starting with an empty JSON tree, it
1. Calls out to the VA Profile API via the ContactInformation service (via get_person) and populates the JSON tree from the "bio" section of the response
2. Calls out to the MVI SOAP service and adds in *address* info
3. Calls out to **EVSS PCIU API** (via GET /emailAddress) and adds in *email address* info
4. Calls out to **EVSS PCIU API** (via GET /primaryPhoneNumber) and adds in *phone number* info

The main takeaways here are that
1. VA Profile is already being used to populate as much contact info as that system has for the user (given the way it's currently being called)
2. The user must have a "vet360 id" in order to use that fetch that contact info from VA Profile (formerly known as Vet360)
3. Calls are being made to EVSS by default for ***all vets-api applications*** using prefill (about 30)
