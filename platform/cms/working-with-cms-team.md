[Work in progress]

# Working with CMS team - Rules of Engagement (ROE)

This document will help all teams working on VA.gov understand when you should engage CMS team resources for collaboration and support.

- [When to check-in/collaborate with CMS team](#whentorequest)
   - For product designers 
   - For CMS developers
   - For front end developers
- [The CMS scoping exercise](#cms-scoping-exercise)
   - [How to request](#howtorequest)
- [Questions/How to contact us](#questions)


## How to engage with the CMS team on Slack

General/support: #cms-general (to be renamed #cms-support?)
For engineers: #cms-engineering

CMS product team members are also present in some product teams, including #vsa-public-websites and #vsa-vamc-upgrade. You can ping us there for product-specific questions. 

## <a id="whentorequest"></a>When to check-in/collaborate with CMS team

CMS support is available anytime you have questions or want to collaborate on your work, so don't hesitate to reach out at any time. 

### For product designers and managers

**At project kick-off** 
- If your project involves non-authenticated (public) content, it is helpful to get a high level overview of the CMS and its products. 
- Schedule a 30 minute <a href="#vagov-intro">VA.gov CMS intro</a> by <a href="mailto:VACMSSupport@va.gov?subject=Scheduling+a+VA.gov+intro>">sending an email to VACMSSupport@va.gov</a> (or opening an issue?). 

**During Discovery** 
- If your product's content may be managed within the CMS, schedule a <a href="#cms-scoping-exercise">CMS scoping exercise</a>, around the same time as the <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md#design-intent-check-in">design intent review</a>. 

**During Design** 
- If your product involves additions to the content model and/or the editorial experience, please involve (who?) from the CMS team on a regular basis.  

**During Development** 


### For developers 

**Onboarding**

- needs writing

**During Development** 
- Back end (CMS) development.
- Front end development



## <a id="cms-scoping-exercise"></a>What is a CMS scoping exercise?

If you expect content in your product to be managed from within the CMS, we recommend a CMS scoping exercise, before any high-fidelity designing takes place. The purpose of this meeting is for the product design team to evaluate CMS support for this product, and for the CMS team to understand where your product fits within the pipleine of products that will be supported by the CMS.  This is the chance to lay out the problem space with the CMS team and get guidance on how the existing content model and FE components supported by the CMS

Much like in the design intent checkin, your designs should be in the early stages, like low-fidelity whiteboard or pencil sketches and/or wireframes. Everything doesn’t need to be perfect. We have an iterative design culture and encourage feedback early and often.


**Here are the key things evaluated in CMS scoping exercise**

1. Content model implications of a new product
2. Content governance 
3. Training and documentation requirements
4. Navigation and IA

### <a id="howtorequest"></a>How to request a CMS scoping exercicse

Please be sure to make requests ahead of time - ideally a sprint ahead of time. 

1. Please open a CMS scoping issue in ```va.gov-cms repo```. 
1. Choose standard issue template.
1. Title for the issue: ```CMS scoping: [title of tool/app/page]```
1. Please include the following as applicable:
 - Links to the design intent issue and/or IA Reviews, and any notes or outcomes that. 
 - A description of the problem you solving
 - A rough Product timeline.
 - A couple sentences describing who will own and manage this content, and who the stakeholders are. If you are not sure yet, that's fine.
  - Helpful, but not required:
    - A rough wireframe, extra low-fidelity is fine.
    - Any IA documentation you/your team has created
    - Links to any applicable research

5. Please tag the issue with:
- Your team (```vsa-public-website``` or ```vsa-facilities```, etc)
- Assign issue to @kevwalsh

### What happens next? 

Depending on the product and availability, CMS discovery may lead to
* rapid prototyping in the CMS
* a CMS design spec including content modeling
* Stakeholder research
* Author/editor user research 


## <a id="questions"></a>Questions?
If you have any questions, please reach out via slack in #cms-support, tag `@kevin walsh`
