# **TMF Form Builder Product Outline**

---

## **Overview**

Our team aims to address the current burdensome, inconsistent, costly, and time-consuming process of maintaining PDF forms by providing a low-code digital solution for non-technical users.

## **Problem Statement**

Currently VFS staff responsible for paper forms do not have the capacity or experience in designing or developing moving a PDF form online or making updates to existing digitized forms.

* How might we establish a baseline for VA staff to make updates to forms using a digital no/low code tool?  
* How might we standardize the user interface of this digital tool using higher level form patterns so that an Editor will not need to make any design decisions, while exploring customization of forms in Drupal?  
* How might we improve the experience for VA staff with faster, easier form completion?

## **Desired User Outcomes**

As a VFS staff member, I can utilize the digital form builder to:

* Make updates to existing digitized forms faster and easier  
* Create and edit forms using existing libraries of pre-designed, standardized form components and patterns  
* Create and update a digital form without needing technical or design expertise  
* Leverage existing data without having to re-enter known information

## **Undesired User Outcomes**

* Inconsistency in the form user experience for Editors  
* Tool does not function as anticipated

## **Desired Business Outcomes**

* Reducing the time and cost of maintaining paper forms  
* Reduction in average time to form step completion  
* Reduction in costs to digitize a form (custom development and maintenance costs)  
* Increased deployment speed

## **Undesired Business Outcomes**

* Tool inserts differences between the paper form and the online digital experience representation of the form causing an increase in the time it takes to process form submissions for both.  
  * Would result in poor Veteran outcomes in receiving services and benefits

---

## **Measuring Success**

* Reduction in time to launch a new form from creation to deployment  
* Reduction in time to deploy an iteration on an existing digitized form (pilot goal to be able to ship a change within 1 week, after that 24 hours)  
* Reduction in total cost to digitize a form

---

## **Assumptions**

* We will provide an escape hatch from form renderer:  
  * Providing a React JSON schema form config object will save developers on the Forms Team from having to write schema by hand when creating a new form application

## **Solution Approach**

We are currently in our MVP build phase which includes:

* Technical POC (Due date August 20th \- sprint 5\)  
1. Add digital form content type in Drupal  
2. Add basic form fields  
3. Implement Form-renderer App in Vets website  
4. Implement KISS static file generation

## **Implementation Plan**

* Phase 1: MVP and Prototype Development:  
  * Develop a working prototype with one form.  
  * Test with selected VA staff  
* Phase 2: Feedback and Iteration:  
  * Gather user feedback and refine the tool.  
  * Expand functionality based on MVP results.
