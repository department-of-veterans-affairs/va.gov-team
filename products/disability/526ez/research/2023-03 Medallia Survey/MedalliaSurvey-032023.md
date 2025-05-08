**Find Zenhub ticket here: [vets.gov-team repo](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Disability/Disability%20526EZ)**

----

# 526 Medallia Survey Feedback Data White Paper 

- Purpose: to summarize insights gained from written survey data captured from feedback survey on Introduction/Start pages by Contact Center and discover pain points
- Data collection date: 1/1/23 - 3/15/23
- Number of total responses for Introduction/Start pages: 

---

## Results 

### Many (68) users mentioned receiving an error when attempting to start the form that doesn't allow them to continue. This may be related to filing ITF and missing a BIRLS ID, EDIPI ID, or some other credential. The error message is as follows:

  >  "We need more information from you before you can file a Benefits Delivery at Discharge claim with VA Form 21-526EZ. Please call Veterans Benefits Assistance at 800-827-1000 (TTY: 711), Monday through Friday, 8:00 a.m. to 9:00 p.m. ET to update your account"
  
- Upon calling the provided number, these users experience long hold times and become frustrated. 

       > a way to repro this in the dev environment is as such:
        sign in to dev.va.gov as id.me user vets.gov.user+226@gmail.com
        browse to https://dev.va.gov/disability/file-disability-claim-form-21-526ez/introduction
        if it puts you back to "[...]/start", click on "If you know VA Form 21-526EZ is right, apply now"
        the aforementioned error shows up
        a user that this does not show up for is vets.gov.user+228@gmail.com

## Recommendations

- Discovery to define the problem: conversation with Aurora, Kyle, Robin, vsp-identity.
  - [Link to Slack thread here](https://dsva.slack.com/archives/CSFV4QTKN/p1680720909972049)
  - [Link to Zenhub ticket here](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/55283)
- Discovery to determine whether there are UI/content changes that can be impactful but low lift for dev. For example:
  - Provided number does not route users directly to the department needed; Meet with Contact center to discuss whether to surface a different number, e.g. Help Desk number or DEERS number instead. User quote:
  
  
  > "Website stated, "more ID information was needed for my account. Please call 800-827-1000. Tell representative that you may be missing your EDIPI number or BRLS ID." I called as directed multiple times and was transferred to DEERS. I was given my EDIPI number by DEERS and told that I must call back VA and provide this number so VA can update my account. I have now spoken to numerous reps at VA through 5 separate phone calls and have nobody has been able to help me to update this information so I can begin a BDD claim."

   - Another possible solution is including content on the form landing page(s) that set expectations around errors 
   - Or linking to [the VA page that details how vets can change their profile/account information themselves](https://www.va.gov/resources/managing-your-vagov-profile/) for smaller errors - address, service, discharge dates etc. info that is prefilled into the form
   - Discovery with profile team/Robin about this issue 
       

## Other findings 
- Veterans have trouble updating account information (address, service, discharge dates etc.) in general, this account information is pulled into the form and not usually entered into the form manually and can also cause error messages to pop up
- Several users who tried to complete/update/submit form too close to ITF  expiration get a "something went wrong error"
- A few users mentioned wanting to be returned to the exact spot where they were when they return to the form instead of the beginning or pre-submission edit page. In general, several users had trouble returning to the form they had begun. 
- Veterans may not understand that ancilliary forms are contained within the 526 digital form. There is a link embedded on the introduction page that explains this but they may not be clicking that link
- This report previously stated that the 526 does not support international vets but it does. Vets can establish their location, however, they are not able to enter foreign numbers into the form. 


## User quotes

> "I started a form 21-526ez. That fact is acknowledged on my MyVA page; however, the resume link (https://www.va.gov/disability/file-disability-claim-form-21-526ez/resume) defaults to the start link (https://www.va.gov/disability/file-disability-claim-form-21-526ez/start) and I am unable to resume."

> "File for TDIU online but I could not find a way to complete the application online (21-8940) despite being told I could do so."

> "Complete my in-progress Application for VA Disability Compensation. I logged in repeatedly and selected "Continue Application...." then I repeatedly got an error message saying "Oops, Something went wrong on our end. Today was the deadline to file before my Intent to File Expired. I tried two different devices and two browsers." 

> "Apply for the BDD program for my va disability claims. When I click the information for my separation date it goes to a screen where it says my account needs to be updated. Would have done it sooner had I knew that would happen. Todays the last day I’m eligible for the program and the site was down the day before when I tried to file."

> "I tried to sign up for disabilities. However because I live in England the site asked for a U.S. driver license to prove who I was. I have not lived in America since 1990 so don't have a State License. I'm shocked the system not designed to serve veterans who live outside America"

> "When clicking the "continue my application" button, it reset my intent to file date to today. I lost 8 months."

> "Why does the form ask if you want to continue your application and then takes you to the start to re-enter questions instead of going to where you left off, or an index of pages that can be edited."

> "Submit a claim for disability from burn pit registry. Was denied claim in 2013. Don’t have supporting docs that were used in 2013"

       
       

