# Questions for MHV | 10.1.20

## What we know so far

This is an email between Lenae/Carnetta Scrugs on 9.16.20:

> Hi Carnetta,
>
> We're considering implementing a feature similar to MHV's 'My VA Treating Facility" that exists on the "My Profile" page on MHV. Example below:
>
> Could you answer the following questions, or help direct our questions to the appropriate person?
>
> In the MHV implementation - when a user checks a box for a facility - what does that mean? How is it used?
> Currently: 
>
> [Carnetta's answer] **VA Patients may select one or more VAMCs they are actively being treated at as many Veterans are medically treated at more than one VAMC.
> VA staff: MHV Administrators and Help Desk staff can see what the user selected as to where they receive treatment at for support and trouble-shooting purposes
> Future: MHV will pull VA Health data just from those facilities. Then under Blue Button Customize Report allow Veterans to select from a list of all their affiliated VAMCs to see VA Health data.**
>
> Where is MHV pulling/surfacing facility information for Veteran for this feature? [Carnetta's answer] **From MVI upon authentication**
> Where does MHV currently store these Veteran's preferences for this feature? [Carnetta's answer] **In their MHV account**


So, TL;DR

- MHV pulls in all facilities a person is registered at into their MHV profile. Someone can be registered at a facility for a number of reasons, not all of which involve receiving medical care there.
- People can then select which facilities they currently receive care at. This is only saved in MHV and has no effect on what is in MVI.

## What we need to know

- Who is a technical POC we can work with for this project?
- When we say something is "saved in MHV", what does that mean? Does MHV have its own database?
- Are there examples of other features or settings that exist both on MHV and another website?
- Is it safe to assume that if we add this to VA.gov, preferred facilities will also continue to exist on MHV?

### Additional questions for our team

- How can we integrate with MHV to get this piece of information?
- How can we save back to MHV so that what is in our profile is synced with what is in their profile?
