# VA.gov Post-Launch Check-in #1
## Nov 7, 2018

---

_`*` = person responsible for poll response, though others are welcome to provide input_

## Product + WBC Implementation
- Chris Johnston`*`
- David Bao
- Ryan Luu
- Andy Lewandowski
- Jeff Barnes
- Steve Kovacs
- Lauren Alexanderson
- Rachael Roueche
- Mina Farzad

Any concerns?

**Handful of things reported, nothing terribly concerning, will fix them throughout the course of the next day.**

## Engineering
- James Kassemi`*`
- Alex Loehr`*`
- Nick Sullivan

Any concerns?

**No systems on fire, will continue investigating as things pop up. Some minor MHV and 526 issues working on tonight.**

## Analytics
- Tony Whittaker`*`
- Ryan Luu

Any concerns?

**Data is flowing in. Some social media mentions going. Traffic is slowing down. 800 around launch, now around 680 for new pages on the new stack (excluding eBenefits and MHV etc). Mostly getting tweets from us and other folks we already know, as well as a positive tweet(s) from AMVETS. Transactions are occuring from the website, folks are filling out forms and using the tools. GI Bill Comparison Tool, VIC Submissions, Health Care Applications. Real test will be what happens between tonight and tmrw in terms of volume. Traffic peaks around 12-3 PM ET, so during and after that we'll have a good read on the relative volume.**

## Marketing and Communications

- Clare Martorana`*`
- Noreen Hecmanczuk

Any concerns?

**None at this time**
    
## DevOps

- Wyatt Walter`*`

Any concerns?

**No concerns - everything is stable. Performance characteristics in line with what Vets.gov had prior, so all good.**

## NSOC / ITOPS

- Kevin Williams`*`

Any concerns?

**Some reverse proxies (but not all) have high latency on the path proxying back to EWIS. Not everything is hosted on our site, still proxying some paths back to EWIS. They seem to only be the ones that have odd-numbered IP addresses. Working with NSOC to track, probably a routing or load balancing issue with the network between us and EWIS. User impact pretty low, something like 5% of users will have slow load times for the particular paths that go back to EWIS.**

## EWIS

- Tom Phillips`*`

Any concerns?

**Same as NSOC update above **

## ID.me

- Mere Work`*`

Any concerns?

**Nope, everything is going fine. Tanel and team have reported that metrics and monitoring showed slight uptick and then plateaured off. In past 2 hours, 120 LOA3 issued licenses created.**

## Contact Center

- Denise Kitts`*`

Any concerns?

**No escalations from VBA or HRC contact centers**

## VA311

- Pete Smith`*`

Any concerns?

**Tracking call volume on VA311 tollfree number, no significant changes. Looks normal.**
      
## OPIA (and TeamSite)

- Josh Tuscher`*`

Any concerns?

**Nothing aside from latency, which is already being worked on.**

## MHV / WBC Implementation Team

- Carnetta Scruggs

- Lanny Derby

- David Bao

Any concerns?

**On MHV in IE on GFE she gets a "page moved" message in the tab at the top and the page is completely white. Not logged in. For Vets.gov and for Vets.gov Facility Locator. In Chrome it works fine. There's also an issue with users who don't have an MHV account getting logged out when they click on a health tool from the website. We are actively working on this together.**

## AWS

- Shawn Arnwine: sarnwine@amazon.com`*`

Any concerns?

**No problems or issues**
 
## Stakeholders

- Charles Worthington
- Marcy Jacobs
- Steve Walker
- Andrew Hughey
- Elizabeth Lewis

Any concerns?

**We did it!**
