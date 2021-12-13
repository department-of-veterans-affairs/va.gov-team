
# Login.gov Mobile App Integration Test Plan
12/2/21


## Objective/Summary 


**What to test** 

We need to verify, in pre-prod and prod, that the introspect service is creating sessions and user data end points are sending the correct data, and that the IAM SAML requests to login.gov are working correctly. 

We will test this using the following scenarios:


1. Users with an existing LOA3 login.gov account should be able to successfully log in to our app using the login.gov credential
2. Users who do not already have a login.gov account, and register a new account for login.gov via the app should be:
    1. Directed to the verify stage (like id.me already does). 
    2. Able to successfully log in via login.gov on the app after being verified
3. Users that created an LOA1/IAL1 login.gov account on the web and then try to log in on the app should be:
    3. Sent through the verify step (again, like id.me) 
    4. Able to successfully log in via login.gov on the app after being verified

**Who can do this testing and how?**



* In pre-prod, the mobile app team will be conducting testing internally
    * Dev Unit Testing
    * QA Validation
    * QA Regression (testing basic functionality of features)
* In total we will recruit 12 participants (between known contacts and Perigean recruits), who are a mix of:

<table>
  <tr>
   <td>
<strong>Test Population</strong>
   </td>
   <td><strong>Who</strong>
   </td>
  </tr>
  <tr>
   <td>4-5 users with no existing Login.gov credentials
   </td>
   <td>Recruits through Perigean
   </td>
  </tr>
  <tr>
   <td>Four (4) existing users with LOA1 Login.gov credentials
   </td>
   <td>Ad Hoc and OCTO Veterans	
   </td>
  </tr>
  <tr>
   <td>Four (4) existing users with LOA3 Login.gov credentials
   </td>
   <td>Ad Hoc and OCTO Veterans
   </td>
  </tr>
</table>



## Timeline 

Note: VA.gov Production Go Live 12/8 

**Pre-Production**



* Engineering Dev Start/Complete: 12/1/21  - 12/7/21
* Unit Testing Start/End:  12/8/21 - 12/14/21
* QA Testing Start/End: 12/8/21 -12/14/21
* Testing Sign Off:  12/15/21

**Production**



* Perigean production test users begin testing 12/8/21
* Friendlies production test users begin testing 12/8/21

**Release**



* Tentatively, 12/21 release

**Post Production**



* Monitoring 12/15-12/22

## Assumptions:

* Test accounts are available
* We will be able to find users with each type of credential
* IAM team is available to update the CSP page given any major speedbumps
* In post-production, team will have support from IAM and other external teams

## Risk Analysis


<table>
  <tr>
   <td>
<strong>Risk Type</strong>
   </td>
   <td><strong>Details</strong>
   </td>
   <td><strong>Impact</strong>
   </td>
  </tr>
  <tr>
   <td>Low uptake of Login.gov credentials
   </td>
   <td>There is a possibility that there are very few users who will use the Login.gov credential.
   </td>
   <td>Low volume of data to track success of implementation
   </td>
  </tr>
  <tr>
   <td>IAM outages or external blockers
   </td>
   <td>If there are IAM outages or other external blockers there may be a slowdown in implementation.
   </td>
   <td>Delay in implementation on mobile
   </td>
  </tr>
  <tr>
   <td>Team identifies major bugs during testing
   </td>
   <td>If we uncover new and sizeable bugs during testing, we may have to delay launch.
   </td>
   <td>Delay in implementation on mobile
   </td>
  </tr>
  <tr>
   <td>VA.gov implementation not as expected
   </td>
   <td>If developers on VA.gov identify an issue with the Login.gov implementation, this could raise flags and prevent mobile implementation.
   </td>
   <td>Delay in implementation on mobile
   </td>
  </tr>
</table>



## Key Points of Contact


<table>
  <tr>
   <td><strong>Role</strong>
   </td>
   <td><strong>Name</strong>
   </td>
  </tr>
  <tr>
   <td>Product Manager, Ad Hoc
   </td>
   <td>Ayush Chakravarty
   </td>
  </tr>
  <tr>
   <td>Engineering Manager, Ad Hoc
   </td>
   <td>Patrick Saxton*
   </td>
  </tr>
  <tr>
   <td>Engineering Lead, Ad Hoc
   </td>
   <td>Alastair Dawson
   </td>
  </tr>
  <tr>
   <td>Back-end Engineer, Ad Hoc
   </td>
   <td>Jayson Perkins
   </td>
  </tr>
  <tr>
   <td>Product Owner, VA
   </td>
   <td>Leanna Miller*
   </td>
  </tr>
  <tr>
   <td>Engineering Manager, VA
   </td>
   <td>Travis Newby*
   </td>
  </tr>
  <tr>
   <td>Engineering POC IAM
   </td>
   <td>Damien D’Antonio
   </td>
  </tr>
</table>


*Responsible for sign-off
