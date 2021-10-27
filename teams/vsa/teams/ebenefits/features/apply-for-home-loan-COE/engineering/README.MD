# COE Design Doc

Table of Contents
- [Background](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/apply-for-home-loan-COE/engineering#background) 
- [High Level Engineering Spec](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-for-home-loan-COE/engineering/README.MD#high-level-engineering-spec)
- [Detailed Design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-for-home-loan-COE/engineering/README.MD#detailed-design)

**Author(s):** Jesse Cohn 
**Last Updated:** 10/27/21 
**Status:** Draft

**Approvers:** 
- Jason Wolf [ ]
- Jesse Cohn [ ]
- Jerek Shoemaker [ ]
- Jim Adams [ ]
- Kathleen Crawford [ ]

_The intended audience for this document are software engineers, but it should make sense to anyone familiar with software development._

## Background
When Veterans need asssistance in getting a home loan the first step is to check for eligibility to get one through the VA. Ideally they should be able to get one online and find out quickly what their next steps are based on their specific information. This eligibility is provided through a Certificate of Eligibility, otherwise known as a COE.

### Where we come in
Since the Veteran's process for viewing thier COE currently depends on the eBenefits platform, we need to build the functionality for the Veteran to view and download their COE on VA.gov. We intend to build this using the specs contained in this document.

### Objectives
- If they have been approved, allow Veterans to download their fully filled out COE as a PDF
- If they have not been approved, tell the Veteran why they were not approved for a COE
- If they have not been approved based on missing information, allow the Veteran to fill out a form to submit the missing information


## High Level Engineering Spec
To build the COE applicaiton and achieve the objectives mentioned above we need a few distict pieces of functionality which will be shown in greater detail later. Let's go objective by objective.

<details><summary>If they have been approved, allow Veterans to download their fully filled out COE as a PDF</summary>

> We need to be able to check if the Veteran is approved for a COE and then allow them to download a PDF version of that COE. Thankfully the LGY team has provided us with an endpoint that can handle all of the checking as well as handle creation of the PDF, we just need to build the back end and UI needed to utilize them.

### Back End

> Since an endpoint exists already that handles much of the logic for deciding approval status we simply need to create an endpoint for the front end to hit that will
  - receive the call from the front end
  - using the profile data make a call to the LGY service
  - pass the returned data from the LGY service to the front end
  
> Initial api call from VA.gov to LGY requires ICN and EDIPI, and returns a status of `eligible`, `ineligible`, or `unable to determine`.


### Front End

> We need to build a UI that will alow the user to see if they have been approved for a COE AND also download tht COE in a PDF. The front end will
  
- send a call to the back end
- based on the data returned from the back end tell the user if they are eligible for a COE
- If the user IS approved for a COE, give them a link to download it
  
</details>
      
<details><summary>If they have not been approved, tell the Veteran why they were not approved for a COE</summary>
  
> Once the LGY service returns data that the Veteran is either `ineligible` or `unable to determine` we need to tell the Veteran this.
  
> It would also be nice if we can tell the Veteran why they were determined to be `ineligible` or `unable to determine` but we are not sure if the LGY service can do this
  
### Back End
> If the LGY service can tell us why the Veteran was `ineligible` or `unable to determine then the back end will need to pass that data to the front end, hopefully in the same call made in the previous objective.
  
### Front End
> If the LGY service can tell us why the Veteran was `ineligible` or `unable to determine then we will need to show the user this reason in an AlertBox as well as what they can do about it.

</details>

<details><summary>If they have not been approved based on missing information, allow the Veteran to fill out a form to submit the missing information</summary>

> Once we have informed the Veteran that they were determined to be `inelibilbe` or `unable to determine` based on LGY not having some information, we need to show the Veteran a form that allows us to provide LGY with the missing information.
  
### Back End
  
> An endpoint will need to be set up to
  
- Recieve a form submission from the Front End
- Send the data to LGY
  
### Front End
> We will use the Form System to create a form that hides and shows fields based on the data returned from LGY on what infromation they are missing. That form will then pass the data on submit to the back end to be sent to LGY.
</details>

## Detailed Design

### Assumptions
- The LGY service will return to us WHY the Veteran was determined to be `ineligible`
- If the Veteran was determined to be `ineligible` or `unable to determine` because of missing information, the LGY service will return to us what data is missing

### Code Location
[vets-website/src/applications/lgy/coe](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/lgy/coe)

### Testing Plan
As with other applications on VA.gov we will unit test each state of each component as well as e2e test each path through the application

### Logging
We will used Google Analytics to monitor the application as well as install Sentry events for any mission critical event

### Back End


### Front End

Since we develop our apps in React and Redux our application will be built using React components in a composition pattern and using Redux for state management. We have a couple general guidelines that we have used in the past and have served us well so we will continue using them here, those guidelines are -

- **Use as simple of a component as we can for the task at hand** - We try to mainly use functional components and keep stateful components to a minimum
- **Use a container component to manage data flow** - Placing most logic in parent components seems to simplify the architecture


 








