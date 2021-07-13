# Spike

## Description

There is a strong chance we will pioneering the new forms system based on Formik. We need to get smart on how we can use formik and what the new Form system will be able to do.

## Questions to Answer

> Can we create a form based on an FHIR questionnaire
Yes we can, at least with Formik. Found here: <https://github.com/mdewey/formik-research>

> Can we create a large dynamic form

Yes, this should be a new form system. All of forms should be possible.

> Can we create a todo list with many small forms

Yes. With the routing, this todo list will be an extra page in the app. We can locally store the data in redux. The data for completion needs to be stored somewhere. This can stored using QuestionnaireResponses, the same we did for the Clipboard project.

> Understand the differences between Formik and Formulate

Formulate is a new form system. Formik is an existing system that Formulate is built on top of. Formulate  wraps Formik and provides VA design system components. As a back, we could "just" use Formik if Formulate is not ready.

## Tasks

But did create a rough prototype of FHIR + formik here: <https://github.com/mdewey/formik-research>
