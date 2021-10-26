# Background
When a Veteran wants to get a VA backed home loan the VA can provide them with a Certificate of Eligibility, or COE for short. This certificate is does not guarantee approval for a loan or specify any details like loan amounts, it is simply a document that says that the VA says they are eligible for a VA backed home loan. There is a form at the VA designated the 26-1880 that the Veteran can use to apply for a COE however in many cases the VA already has all of the information they need to determine if a veteran is eligible for a COE. This means that our app has to server a few different purposes -

1. If the Veteran is eligible for a COE and the VA already knows this we need to do everything in our power to make the Veteran aware of this and give them access to the COE document.
2. If the Veteran is not eligible for an automatically approved COE then we need to provide them with a form to fill out so that they can manually apply for a COE.
3. If the Veteran is not eligible for an automatically approved COE AND they already applied for a COE using the form we provide we then need to let them know some status details of the application as well as provide them with all of the documents that have corresponded between the Veteran and the VA.
4. If the Veteran was denied for a a COE we need to provide them with some information about how to appeal this decision.

This document is meant to provide a general walkthrough of the application as well as details about the code.

[Folder for the code](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/lgy/coe)

## How the form works for the Veteran

If the Veteran does have a COE or is eligible for an automatically approved COE then we want to tell them that up front. When the Veteran starts out they are meant to start out in an "Eligibility App" of sorts that will tell them if they already have a COE or if they are automatically approved for a COE. This app currenty resides at `/housing-assistance/home-loans/apply-for-coe-form-26-1880/eligibility`. In the code the eligibility app resides [here](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/lgy/coe/containers/EligibilityApp.jsx). When the Veteran arrives at this page we make a call in Redux to attempt to see if the Veteran has a COE or is eligible for an automatic COE. That code is contained [here](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/lgy/coe/actions/index.js).
