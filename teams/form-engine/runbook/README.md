# Form Engine Runbook

## Introduction

This runbook is intended to help the user navigate the steps required to digitize a VA form using the Form Engine platform. The runbook should take users step by step through the process of creating a `vets-website` application for the new form, designing the form using the Form Builder tool inside the VA CMS, and mapping the form submission data back to the original PDF using the Simple Forms API module within `vets-api`.

While this runbook is intended to be read from top to bottom, each section is self-contained and can be read in isolation if desired. Many steps do not necessarily need to be done in the order specified below. However, this order is proven and reduces the need for rework later on down the line.

## Creating the VA.gov Application

Every form created using the Form Engine platform requires its own application within the `vets-website` repo & associated entry in `content-build`'s `registry.json`. 

The easiest way to do this is using the yeoman form generator in vets-website, via `yarn new:app`. Answer the prompted questions, keeping in mind these specific things:

- Include the `/simple-forms-form-engine/` directory as part of the app folder!
- When it asks `Which form template would you like to start with?`, select `FORM_ENGINE: A form from Drupal using the shared Form Engine`
- The only file you need to overwrite at this time is `../content-build/src/applications/registry.json`. Other overwrite questions should be skipped.

Once the yeoman task has completed, you should have a new Form Engine app scaffolded and ready to deploy.
  

## Using the Form Builder

Forms are designed using the Form Builder tool inside of the VA CMS. For more information, refer to the [Collaborator's guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/form-engine/runbook/Collaborator-Guide.md).

## Handling Form Submissions

All Form Engine forms send form submissions to the Simple Forms API module within `vets-api`. In order for the Simple Forms API to properly handle a new form's submission data, the following must happen:

- An ERB template must be generated from the form's original, interactive PDF.
- A Ruby model must be created to take in the digital form submission data and transform it into a format that maps back onto the original PDF.
- The PDF must be electronically stamped to verify the digital signature and the data contained on the form.
- Email notifications must be set up through VA Notify.
