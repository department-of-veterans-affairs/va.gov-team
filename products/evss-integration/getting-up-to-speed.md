# Getting Up to Speed with EVSS Integration

*Julie wrote this in late-April 2017 when a new team formed and people needed to get up to speed pretty quickly. It is not meant to be comprehensive.*

**Background Info**
* In early 2016, folks did some discovery work regarding Veterans Benefit information that is currently surfaced to Veterans via eBenefits (https://ebenefits.va.gov).  There are ~70 line items  – ranging from super small like content to big like everything related to filing a disability claim – that were identified as features Veterans should be able to get via Vets.gov, with the intention of eventually decommissioning eBenefits entirely.
  * You can find technical and administrative documents [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/evss-integration/discovery): 
  * Please note that they are _historical_ and do not reflect the current work streams.  They are important to understand in terms of background, but please please do not take anything in them as direct guidance for the work today.
* Similarly, in early 2016 a research & design firm called frog did a ton of UX research/flow/mockups, and you can find those documents [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/evss-integration/discovery): 
  * Suzanne can provide more insight into conversations she might have had with people since that time, including things frog proposed that she considers nonstarters, and those that are pretty spot on. There’s a range there.  
  * Consider the frog stuff a jump start, but a LOT has changed since then as regards product direction and implementation  The research is still solid, though.
* Flash forward to March 2017 when conversations restarted.  The first steps were to look at the technical underpinnings of EVSS, which powers eBenefits.  
    *  Check out [Loren’s presentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/evss-integration/reference-documents/evss-dsva-api-proposal-mar2017.pptx)
* The folks who do EVSS are CSRA, a super huge contracting firm.  The people we work with (project managers, engineers, architects) are really good. They are super collaborative all around. Josh Lindsey is the primary architect. We had a F2F kickoff meeting in April when we spent 8 hours trying to figure out the world of EVSS and eBenefits and how it relates to Vets.gov.  
    * The meeting kicked off a lot of meta discovery action items between the teams, which we [track here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/evss-integration/reference-documents/evss-vets.gov-collaboration-kickoff-action-item-tracker-20170503.xlsx) and update weekly.
* After this, Julie gave a brief presentation to Stacey on [near-term product vision](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/evss-integration/vets.gov-ebenefits-intro-2017.pptx)
    * 	We negotiated some stuff after this, which is why some of the conclusions in that PPT are not the first things we’re working on.  This is partially because of the work in progress on the EVSS side.  That’s cool – we’re Agile.

**Where We Are Today (late April 2017)**
* We are focusing on near-term wins, and setting up a foundation for success.  
* We selected 2 features to move from eBenefits to Vets.gov that are high traffic/valuable and also actually technically possible in the near term.
    * Post-9/11 GI Bill Enrollment Status: this is literally a status.  Rather, it is a page of information.  In tech terms, it’s a pure GET request.  
    * VA Letters: also some GET requests.  In brief, there are 1 or more letters that a Veteran can get from the VA; we’ll get a list of those letters.  Click on a link, generate the letter.  GET, GET, GET.  Yay.
        * Ok there are a couple that have some POST options.
* Then there’s the 526 – this is going to be a shit ton of discovery, but _a lot_ has already been done and can be reviewed. 

**So How Do I Look at eBenefits?**
* Great question.  We have some [test accounts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-ebenefits.md)
* To look at Post 9/11 Status, you can go directly to it when logged in: https://pint.eauth.va.gov/ebenefits/Chapter33Enrollment 
* To look at VA letters, you can go directly to it when logged in: https://pint.eauth.va.gov/ebenefits/download-letters
* Feel free to poke around all of eBenefits, because over time we’ll be integrating just about everything in there into Vets.gov _in a meaningful way_ -- not just picking up eBenefits and plopping it into Vets.gov
