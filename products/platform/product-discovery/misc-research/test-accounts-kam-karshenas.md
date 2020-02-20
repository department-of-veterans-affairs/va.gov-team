# Discussion with Kam Karshenas



##### Participants on call

- Kam Karshenas - Engineering Lead, VAOS
- James Chasia - Product Mgr, VSP
- Naomi Marcussen - UX Designer, VSP
- Kiefer Furzland - Engineer, VSP
- Peter Hill - QA Lead, VSP



##### Area of focus in work

- Works on identity

**Scenarios in PROD**

- MyHealtheVet, and ID.me, DSLogin have different experiences

- MHV - can only queer MVI and only has certain info if no MVI credential don’t know first name

- ID.me 

- - first name

  - last name

  - gender

  - date of birth

  - SS#

  - - info is manually keyed

    - can then query MVI - gives best match that it can find

  - use SAML solution as verified as opposed to MVI

- DSLOGON

- - get trust worthy SAML, but query MVI differently
  - get EDIPI query in a higher probably match as opposed to user attribute lookup

- 50% of vets use DSLOGON with lots of inconsistensty

- Users are then using ID.me for a better experience, but it’s not consistent

*Kiefer recorded conversation from here*



##### Staging

Uses lower environment called STAGE1A

- used by MyHealthyVet
- MVI

It’s going to be very difficult to have 1 account to test all scenarios



##### What would be cool is...

- Have a test account solely for continuous integration purposes

- Recording cassettes is a tremendous pain point

- Write VCR cassettes

- Aren’t going to be able to easily RESET account

**Problem**

The test accounts we’re using are the ones our clients use and it’s set up in downstream services.

<!--**Maybe test account users per team is more effective solution**-->
