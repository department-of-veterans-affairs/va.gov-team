# **Initiative: Court-Appointed Guardian VA.gov Access** 

## **Product Requirements**

### **Overview** – 

Court Appointed Guardians are legally designated individuals responsible for managing the care or personal affairs of Veterans who are unable to do so for themselves due to incapacity or disability. This initiative ensures that both short-term and long-term solutions enable guardian access to VA services.

### **Problem Statement** – 

Currently, these guardians are unable to create new accounts to manage their Veteran’s affairs ***and*** existing users will lose access to their MHV accounts where they currently manage the Veteran affairs once MHV is deprecated Jan 31, 2025\. There is no pathway to create an account for guardians through the modern credentialing systems (Login.gov and ID.me).

### **High-Level Requirements**

**Short-term:**

* Court-appointed guardians must access Veterans' services through VA.gov.  
* MHV will remain operational until a sustainable long-term solution is implemented.  
* VA staff need clear processes to assist guardians across all facilities efficiently.

### **Out of Scope:**

* Providing a pathway for new guardians to create accounts via VA.gov or other credentialing systems.

**Long-term:**

* Way to track sign in  
* Limited access based on guardianship  
* Identifying guardians who need to have access  
* Clear process  to transition from MHV to [login.gov/id.me](http://login.gov/id.me)  
* VA staff needs to understand processes to assist

### **Outcomes** – 

* Desired:  
  * Short-term:  
  * Existing guardians are able to access their Veteran’s Affairs through VA.gov.  
  * VA staff can efficiently support guardians in accessing services.  
* Undesired:  
  * Guardians lose access after January 31, 2025, disrupting care for Veterans.   
  * Unauthorized access compromises data integrity and trust, making it difficult to prioritize legitimate guardians.  
  * VA staff are overwhelmed by manual processes, leading to delays and inconsistent service.  
  * Inconsistent service across facilities causes confusion and frustration for guardians.  
  * Possible public backlash may arise if misuse or unfair access is perceived.  
  * Legal disputes could occur from unverified or expired guardianship status.  
  * Over-reliance on temporary solutions complicates the transition to sustainable long-term plans.

### **Success Metrics** – 

* Volume of MHV logins after reopen  
  * This could be an (indirect) indicator of guardian participation but will likely capture some non-guardian use  
* Reduction in guardian complaints   
  * Fewer complaints would suggest guardians are able to create an account and sign in  
* Time to access for guardian  
  * Currently, they’re waiting for a solution  
* Feedback from VA staff and guardians

## **High-level Solution:**

* Short-term Solution:
  * Retain MHV functionality for existing guardians.
  * Update the VA.gov sign-in page to:
    * Remove the MHV button.
    * Add a link for court-appointed guardians to access their existing accounts.

* Out of Scope:
  * Developing or implementing a process for new guardians to create accounts.

### **Assumptions, Bets, & Decision Log** – 

* Only court-appointed guardians are included; fiduciaries, caregivers, and others are excluded.  
  * We cannot reliably identify who the guardians are.  
* Compliance requirements, including OGC review, are deferred to meet the January 31, 2025, deadline. This creates future risks of policy challenges and non-compliance that must be addressed later.  
* Outreach efforts depend on each facility’s staffing and readiness, causing potential delays.  
* Login.gov and ID.me will not be integrated in this phase, MHV sign-in method will remain open beyond Jan 31, 2025 and until a long-term solution is in place  
  * Access Options:  
    * “Public” link on VA.gov: Ensures availability but risks unauthorized access, complicating tracking legitimate guardians
* DS Logon will not be used as an alternative since it is deprecating September 2025\.  
* The focus is on continuity for existing guardians and establishing access easily for new guardians.  
* Guardianship status may not always be current or verified, creating risks of expired or misused access.

### **Risks & Dependencies** – 

* Risks:
  * Excluding a solution for new guardians could lead to public criticism, legal challenges, or  dissatisfaction from advocacy groups.
  * The public-facing link for existing guardians risks misuse by individuals without legitimate credentials, compromising data security.
  * If MHV experiences technical issues or outages, existing guardians may lose access before the long-term solution is ready.

* Dependencies:
  * VA staff availability and readiness are required to support guardian access requests.  
  * MHV infrastructure must remain functional through the January 31, 2025 transition.  
  * Local VA facilities are responsible for outreach and access setup.  
  * Temporary solutions must not prevent progress toward a sustainable long-term plan.

### **Implementation Strategy** – 

* Stakeholder alignment  
  * VA POs and leadership must agree to the technical solution.
  * Processes
    * Authentication and Login Management:  
    * Existing guardians continue logging in through MHV (accessed through either private URL or on sign-in page)  
  * Access Auditing and Data Tracking:  
    * Track logins, account creation, and usage patterns\* for future transition planning.

### **Use Cases & User Stories** – 

* Use Case 1: Existing Guardian Maintaining Access  
  * Existing guardian continues to manage a veteran’s records through MHV using the MHV sign-in method to ensure there is no disruption in care.  
    * *As an existing court-appointed guardian, I need uninterrupted access to my veteran’s records through MHV so that I can continue providing care without delays.*  
* (Out of scope for short-term solution) Use Case 2: New Guardian Onboarding through MHV Account Creation  
  * A new guardian completes the MHV account creation process to gain access to the veteran’s records and begin managing their care.  
    * *As a new court-appointed guardian**,** I need a way to create an MHV account and access the veteran’s record so that I can begin managing their care promptly and without delays.*

## **Other**

### **Open Questions** – 

| \# | Status | Question | Contact | Response |
| :---- | :---- | :---- | :---- | :---- |
|  | In progress | How many guardians are currently out there? How many are waiting to sign up? | Erinn Dean, HIMS Office |  |
|  |  | How many users will be impacted, and what is the expected monthly support volume? |  |  |
|  |  | What roles need support? |  |  |
|  |  | How is access added, removed, or updated? |  |  |
|  |  | Can a manual process confirm account linking? |  |  |
|  |  | How will guardians receive the URL? |  |  |
|  |  | If a veteran is also a guardian, can they access their own account through the new dedicated URL? |  |  |
|  |  | Which user group filed the recent complaint about guardians, and can we access the complaint? |  |  |
|  |  | Can we interview guardians to understand their needs better? |  |  |
|  |  | Which services in MO’s scope are relevant to guardians? |  |  |

### 

### **Relevant Documents** – 

* [PRD Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1728567025996/c7aa4c6e7f12d07f4022add10004227195f06084?sender=u9f7e82a60e42d4bf31769726)  
* [Technical Solution Doc](https://docs.google.com/document/d/1SLJ2GPSc9mvDEb7nxZjayeDUJPHBEeRlcOQgG7V06gM/edit)

