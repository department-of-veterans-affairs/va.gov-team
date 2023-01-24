# Background
When a Veteran wants to get a VA backed home loan the VA can provide them with a Certificate of Eligibility, or COE for short. This certificate is does not guarantee approval for a loan or specify any details like loan amounts, it is simply a document that says that the VA says they are eligible for a VA backed home loan. There is a form at the VA designated the 26-1880 that the Veteran can use to apply for a COE however in many cases the VA already has all of the information they need to determine if a veteran is eligible for a COE. This means that our app has to server a few different purposes -

1. If the Veteran is eligible for a COE and the VA already knows this we need to do everything in our power to make the Veteran aware of this and give them access to the COE document.
2. If the Veteran is not eligible for an automatically approved COE then we need to provide them with a form to fill out so that they can manually apply for a COE.
3. If the Veteran is not eligible for an automatically approved COE AND they already applied for a COE using the form we provide we then need to let them know some status details of the application as well as provide them with all of the documents that have corresponded between the Veteran and the VA.
4. If the Veteran was denied for a a COE we need to provide them with some information about how to appeal this decision.

This document is meant to provide a general walkthrough of the application as well as details about the code.

[Folder for the code](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/lgy/coe)

## How the form works for the Veteran

If the Veteran does have a COE or is eligible for an automatically approved COE then we want to tell them that up front. When the Veteran starts out they are meant to start out in an "Eligibility App" of sorts that will tell them if they already have a COE or if they are automatically approved for a COE. This app currenty resides at `/housing-assistance/home-loans/apply-for-coe-form-26-1880/eligibility`. In the code the eligibility app resides [here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/lgy/coe/containers/EligibilityApp.jsx). When the Veteran arrives at this page we make a call in Redux to attempt to see if the Veteran has a COE or is eligible for an automatic COE. That code is contained [here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/lgy/coe/actions/index.js). Once we get a response from the endpoint to determine if the Veteran has a COE or is eligible for an automatic COE there are a few different possible states -

1. `The Veteran has a COE already (available)`
2. `The Veteran is eligible for an automatic COE (eligible)`
3. `The Veteran is not eligible for an automatic COE but can fill out a form to manually apply for one (ineligible)`
4. `The Veteran already manually applied for a COE but the application is still pending (pending)`
5. `The Veteran already manually applied for a COE but the application is still pending AND the VA requires more documents or correspondance from the Veteran (pending-upload)`
6. `We were unable to determine if the Veteran was eligible for an automatic COE (unable-to-determine-eligibility)`
7. `The Veteran was denied for a COE (denied)`

Once the Veteran has seen thier status in some of these instances they can then fill out the form and we provide them a link to the form inside the content.

## The Front End code

### The Eligibility App

In the code inside the eligibility app we have a switch statement that reads the `coe.status` and then renders one of the components [here](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/lgy/coe/components) based on the status. Most of the code for rendering the eligibility app and its statuses is pretty straightforward with just a few callouts -

#### Pending
If the Veteran has already filled out an application for a COE with the VA then they may need to upload documents and submit them to the VA. We provide an interface for doing this on the eligibility app when the API call returns a `pending-upload` status. The code for this document upload interface is inside the COE pending component located [here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/lgy/coe/components/CoePending.jsx) and is atually it's own component located [here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/lgy/coe/components/CoeDocumentUpload.jsx).


### The Form

The form resides at /housing-assistance/home-loans/apply-for-coe-form-26-1880/eligibility

If the Veteran wants to fill out the form 26-1880 they can either click one of the links in the content based on the status returned to us from the API call if the content contains a link OR they can visit the form URL directly. The stakeholders wanted to make sure that if the Veteran did come directly to the form and they DID have a COE already or were eligible for an automatic COE that we let them know and so on the Introduction page of the form we also call the same endpoint that we do in the eligibility app and display content based on the status that gets returned. Since this is the introduction page of the form and not the full eligibility app this is intended to be a limited version of the same functionality so in some cases rather than having lots of details we simply provide the user with a link to the eligibility app to view more information.

On the introduction page we first determine if the Veteran is logged in or not and if they are NOT then we show them some basic content stating that they need to log in to fill out the form. Then if they are logged in we show them the status of their COE and either allow them to continue with filling out the form or not based on that status (for instance if they were denied then the VA doesn't want them filling out the form again and instead wants them to appeal the original application). 

As a best practice we tend to break up the front end code for our forms into small files. We have found that favoring smaller files makes things generally easier to maintain. Inside the folder structure for the form there is a `/config` folder that houses most of the form code. Inside that folder is a folder labeled `/chapters` which houses each chapter of the form, and inside each chapter folder is a file corresponding to each page within each chapter. All of these files are imported into an `index.js` file and then exported so that they can be imported into the main form config file called `form.js` in the `/config` folder. We also have a file in the `/comfig` folder called `schemaImports.js` which imports all of the schemas from the `vets-json-schema` repo to then be used in each individual page file for the form.




