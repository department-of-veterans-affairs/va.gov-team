# Overview

### General Findings

+ Healthcare is perceived as a benefit (all participants went to the "benefits" drop-down first, then "health") 
+ Left menu was the go-to for way-finding 
+ It is unclear what is REQUIRED and what is OPTIONAL:
  + Financial Disclosure
  + Insurance 
  + 
+ There is a lot of nervousness and hesitation to provide information to the VA that could potentially jeopordize eligibility (private insurance info, HH income)
+ Eligibility criteria was not clear (e.g., if I'm a purple heart, do I still have to provide financial information?)

### WANTS 
+ Review + edit screen 
+ Clickable left nav
+ No financial disclosure (is this even an option?)  

### Participants

#### 1. woman in her mid-30s 
_african-american, married, 1 child, low-mid income, 100% disability, navy_

_persona: Forging Ahead_ 
 - Session took place in her home in MD
 - Works at home, uses a PC in her home office
 - Used DS @ VA MacBook for usability test
 
#### 2. man in his 50s
_african-american, low-mid income, uses VA healthcare, marines_

_persona: Day-by-Day_
 - Session took place in his home in MD
 - Uses a PC laptop as well as a mobile device
 - Used PC laptop + IE for usability test
 
#### 3. man in his mid-30s
_african-american, divorced, 4 children, formerly homeless, unable to qualify for anything_

_persona: Day-by-Day_ 
 - Session took place outdoors at a Starbucks in Alexandra, VA
 - Uses phone, tablet, laptop, and sometimes library to go online
 - Used DS @ VA MacBook for usability test


# What Worked Well 
- All participants got through the whole healthcare application without errors
- All made comments that the improved form was **clean**, **straight forward**, **easy**, **simple**, etc. 
- All looked to the left menu for wayfinding//progress indication
- All were able to click forward and back through the form using back and continue buttons
- 2 participants wanted to skip pages of the form, and did that successfully using the continue button
- Information saved in the form as all participants clicked back through previous pages
- Form field verification prompts worked as expected for all participants (all participants associated red = incorrect/error)  



# Needs Improvemet 

### **Bugs/Typos**
- Typo "Lantino" vs Latino on demographics page  
![image](https://cloud.githubusercontent.com/assets/12674895/14084772/6c922f9c-f4ea-11e5-963c-e8b535bfe0b3.png) 
- Country drop-down has United and then United (no United States)  

### **UI/UX (In order of Priority)**

1. All participants expected to be able to review the form, on one final screen all together. They also expected to be able to edit fields from the last "review" page before submitting ("like amazon") 
 - **Recommendation:** *Add a review state for the end with "edit" buttons in the top right of each panel (user should be able to edit right on that page)*  
 
![image](https://cloud.githubusercontent.com/assets/12674895/14084708/0cf370dc-f4ea-11e5-8e39-000c5ed38e43.png) 

  
2. SSN field only accepts if dashes are included (error if you don't use a dash)
 - **Recommendation:** *Remove this requirement*

3. All participants attempted to enter "0" into the "month" field in dates like the example, and then the field didn't accept it. 
 - **Recommendation:** *Adjust this field -- either allow users to enter zero, or consider something else (drop-down of text month?* 

4. On Personal>Additional Info, all participants confused by clinic codes (wanted to see label, not value)  
![image](https://cloud.githubusercontent.com/assets/12674895/14084728/38efffca-f4ea-11e5-8e44-021eeacadc37.png) 
  - **Recommendation:** *Adjust so that the VALUE is what's shown* 

5. Participants wanted to click on the left menu to navigate back to previous pages.
 - **Recommendation:** *Once a user has seen a page, allow them to click back through the menu.* 

6. All participants experienced a form validation error as soon as they put their cursor in the box (typing info into bright red scary field!)
 - **Recommendation:** *Adjust so that error only displays if they try to advance to the next field.*
 
7. Participants were confused by a few form fields that should have conditional logic. For example:
 - Veteran Address panel - state should disappear if selecting country other than U.S.; county should populate based on state selection
 - Marriage field & spouse content 
 - **Recommendation**: *Review this and consider setting conditional logic to these fields* 
 
8. All participants were able to see the "add" button on the General Insurance panel before selecting the box that they had insurance (and found this to be confusing) 
 - **Recommendation:** *Adjust this field so that if you select that you have other insurance, all information fields display automatically. At the end could be an "Add Another" button if they have more than one to add.  
![image](https://cloud.githubusercontent.com/assets/12674895/14084917/16268e9a-f4eb-11e5-8ec7-fb0ac2d2a801.png)  
 
9. Participants filled out most form fields // didn't realize that all were not necessarily required
 - **Recommendation:** *Consider making it more clear when a field is optional, and why you would want to provide the information (one way: using content; another way: adding "Optional" next to optional fields*
 
10. Only 1 participant selected that they would provide their financial information (checkbox on Financial Disclosure panel)
> It makes me feel nervous... like they will cut me off + send me on my way... this is the page you want to be careful on... I don't know... this is a tricky page... 

![image](https://cloud.githubusercontent.com/assets/12674895/14085014/7adf79be-f4eb-11e5-8b3f-8ef492d59733.png) 
 - **Recommendation:** *Short term: Use **bullets**. Long term: Use content to explain purpose better -- explain who needs to submit, and why. Consider making the case that it's for dependents and spouses (if that's true).*
 
11. Calculating net/gross income amounts as well as medical expense deduction is a burden ("This feels like i'm doing my taxes now.")  
 - **Recommendation:** *Look into linking IRS info with the income panel (FAFSA does this), OR Consider a net/gross income calculation tool*
 
- [LOW PRIORITY] Return and backspace buttons advanced page forward and back
 - **Recommendation:** *Not sure if this is an OS/Chrome thing -- can the team explore?* 

- [LOW PRIORITY] 1 participant was able to enter the same amount of money in gross and net on the Annual Income panel
 - **Recommendation:** *Add error logic to these fields.*
 



### **Content**
1. All participants wanted a number to call in case they had questions or got stuck
 - **Recommendation:** *Add the correct number to call somewhere on the form (like on the top right).*
 
2. All participants clicked on "benefits" on va.gov first to find healthcare. (Thought of healthcare as a benefit)
 
3. All participants were unsure of what was needed to fill out the form, and who was or was not eligible before they filled it out (Need to set expectations much better)

4. All participants were hesitant to provide insurance info for fear of it jeopordizing eligibility
 - **Recommendation:** *Clarify expectations better. If you're collecting information, say why. Explain how the information that a user provides could change their application. This should be done up front with an introduction page, and it should be done througout the application.*

5. All participants expected a message at the end about next steps ("We recieved your application, you will hear back from us in 7 to 10 days.) 
 - **Recommendation:** *Add a page at the end once a user has finished. "thanks for filling out the form, this is what you can expect next....*

6. All participants were confused by the question on General Insurance about minimum coverage for ACA "*Why would I want minimum coverage? I want the most coverage.*"

7. All participants were confused by the financial disclosure page and what it meant. Call to action is not clear. (Exactly who needs to provide financial info, and when?)   

8. All were **very** nervous/hesitant about providing financial information to the VA on this form. They were concerned that disclosing too much or too little would mean they were not eligible. The ROI of providing this information was not clear. 

9. Participants were confused by a field on the "Child" panel asking about the expenses that the dependent has paid for college, etc. (thought it was -- How much has VA paid for your dependent)

10. 2 participants were confused by the field on the "Child" panel asking about "date they became a dependent" vs. "DOB" ("It's the same date, I don't know why they would ask this twice.") 
 - **Recommendation:** *Re-write to clarify.*



