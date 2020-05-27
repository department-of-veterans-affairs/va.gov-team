# DMC Interview: Noah and Chris
May 27, 2020<br>
**Rebecca Walsh & Riley Orr**


## Notes

### About the documents sent last week:

**For first demand letters, 102 was not included in the document sent -- what is this letter type?**

N: It’s just another variation of a first demand letter.

R: I understood the 100 letters to be benefits to deduct, 101 to not be benefits to deduct

N: It’s for a specific debt type. I’m trying to wrack my brain. I can get that to you. It’s for a specific debt type. First demand letter for a specific debt type. 

**When might we get our hands on the rest of the letter breakdowns for 100, 101, 102, 117, 123, and 130? If breaking down the variables on each form is the blocker here, we’d be happy to just get the letters themselves (titles and descriptions?)**

N: Chris can you get those out?

TJ: We can have an offline conversation about something Joe said. 

N: I’ll shoot you an email later today?

C: Which ones?

R: 100, 101, 102, 117, 123, and 130. Across the spectrum. And the variations. And if breakdowns aren’t possible, titles and descriptions would be alright as well. 

**Would it be possible to get a list of all of the letter codes, statuses, and descriptions for Comp&Pen, Edu, and LGY debts?**

N: Yeah, we can put that together. 

**In the mock data, we see that some of the ‘letterCodes’ don’t seem to correspond to letters sent to the Veteran. For example, bad address (212). Can you tell us more about the letterCode variable and how it’s used? Any gotchas you can see us running into if we use these letterCodes to display debt history?**

N: So those are just random numbers associated to the different letters. We can get you a description but there’s no real meaning associated. 

R: We saw one of the users got a second notice and then they had a bad address (212) and another notice

N: So that’s a status saying that a letter was returned. 

R: So that doesn’t correspond to a letter going out to the veteran?

N: Correct

R: Is there funkiness with those codes?

N: Depending on how deep we’re getting. Initially we were just looking at 30, it should be fine. The funkiness comes in cuz those numbers are also statuses. So the status without letters could cause problems.

**In the mock data, we also noticed that letterCode 100 appears, but not the variations (100abc+), are these variations distinct or are all variations returned as a letterCode 100?**

N: We probably wouldn’t want to display codes because they’re not actual letters, just internal status codes. 

N: They’re all distinct. 

R: They just weren’t included as the mock data. 

N: Yup.

### About debts:

**Are there any distinctions between Compensation and Pension debts, as far as causes for the debts and the letters that get sent out?**

N: As far as the letters, they’re the same letters. But there is a distinction. Compensation is where you’re injured while on active duty, pension is an income-based program for veterans. Basically like social security. So most people eligible for social security aren’t eligible for pension. 


**Can you give us those debt causes?**
   
   N: We can put together some of the more frequent causes, but I mean there’s kind of an almost infinite number of causes of debt. Our letters don’t include the reasoning. The reasoning is included in the initial letters.

**One of the reps we spoke to mentioned that Home Guaranty debts fall under Comp & Pension -- is this true?**

N: They don’t fall under comp & pen. We offset benefits from comp & pen to pay back the home loan. I think that might be where the confusion came from. It’s all separate debt type.

**Since Loan Guaranty is an old/discontinued program, what sort of letters are they receiving, if any?**

N: They don’t set up any new debts. These are just older debts. So, basically they pretty much aren’t receiving letters anymore. All the letters have been issued. Pretty much those are just where there’s a remaining debt amount and those are still on the books being collected on. 

**I just want to confirm that you CAN withhold C&P benefits for Edu debts, but not Edu benefits for C&P debts.**

N: That is correct.

**Which debts are referred to CAIVRS and when are Veterans informed of that?**

N: All the debt types are referred to CAIVRS. You can think about CAIVRS how you think about a delinquent debt being referred to credit reporting agencies. It’s just a tool that VA and all government agencies use for debts so that you can’t get a mortgage if you have a delinquent government debt. 

R: When are they referred?

N: I’ll have to double-check the day number for you. And another thing to keep in mind, so… and I have to double-check, potentially someone could have been on a payment plan for a year and making payments but their debt goes to delinquent. So you can be referred to CAIVRS a year and a half down the road. These kinds of delinquency letters.. there’s a path where if you don’t intervene at all it can go. But there’s all these different paths. If you’re disputing a debt, asking for forgiveness, paying on a debt but you stop. 

R: So that’s what happens when someone doesn’t have benefits to debit so they’re paying out of pocket and stop?

N: Right, but it it could be with benefits too. Folks getting benefits and they stop getting benefits. 

**Which debts are referred to Government-wide Cross-Servicing instead of TOP? Why?**

N: The treasury offset program is an older program the government uses to offset any federal and now some state payments. the cross-servicing program is new and encompasses treasury offset. TOP is a tool within the cross-servicing program. We initially have them going to the Top first, we still send them there as a referral, but we also send them to the cross-servicing program because they have more tools than TOP. We are working on only referring to cross-servicing and  cross-servicing uses TOP as a tool. We do refer all the debts to both.

R: When you do refer to both, are there subsequent correspondence sent to the veteran?

N: Correct. We put the notice about the TOP and cross-servicing in the 117 and 123 letters. Then the TOP has own letters and subcontractors that have their own set of communications as well. 

### About the letters:

**Under the ‘What are your options’ sections, letters 100, 100c, and 101 state to pay back in full within 30 days, letter 100a says 90 days, and 100b and 101a don’t specify a timeline to pay back in full - are the timelines for these debts different?**

N: They’re really not. Unfortunately, our letters were created at different time periods and they’re tough to update and haven’t been a priority. I know the goal is to get them standardizes but all debts have the same timeline. There are some differences because, ya know when you have benefits we don’t start offsetting right away. So that’s why we say 90 days. One of the letters may say that because it just includes the month, not a day number, because we don’t set up an offset for a while due to our system. 

R: So those say 30 days and then you’ll get another letter to pay within 30 more days? 

N: Yeah, and some of the ones for offset say we’re going to take your check in 60 days or beginning in X month. Those ones don’t get delinquent because we didn’t offset in the 30 days. 

**About letter 100:**
    
**Can you describe the cases when this letter might be used?**
    
**What’s different about Ch34 and 35 that gives them a letter separate from the other education debts?**
    
N: 34 and 35 are education debt types for spouses and dependents, not veterans themselves. There are situations where spouses or dependents can get benefits, so it’s for those cases. 
    
**Do interest and admin fees only apply to Ch34 and Ch35 debts? None of the other benefits’ letters mentioned these fees.**
    
N: Interest and admin fees are a grey area in the VA, but one of the debt types where it’s black and white is 34 and 35, we do charge interest. There’s some laws and regulations and executive memos for charging interest and admin for charging veterans. Right now we’re not charging interest on the other debt types besides home loan. It’s a grey area as far as what the law says we should do. 
    
**Leah: How do the letters get selected with the meta data and taxonomy?**
    
N: Chris, do you know how they’re uploaded into VBMS?
    
L: How they get selected.
    
N: The letters that have been selected are a select group that the benefits administration said they want to make available. 
    
**The following questions were not asked due to time and were later sent to Noah and Chris**

```3. About letter 100a: 
    1. We wrote a description: "This letter is sent when the Veteran has incurred a Compensation & Pension debt and doesn’t have active C&P benefits to withhold for repayment.” Is this right? 
    2. Would the next collection letter be 117 or a specific variation? 
4. About letter 100b: 
    1. We wrote a description: “This letter is sent when the Veteran’s benefits are adjusted (down), and the VA must recoup, from the Veteran, funds that were sent directly to the Veteran’s school.” 
    2. Currently, this letter does not mention paying the debt in full like the others. Is this an option and how many days do they have? 
    3. How are students meant to get the funds back from the school? Are there directions? 
    4. The letter says that the Veteran may contest the existence or amount of the debt “in writing” - what does this mean? 5655? 
    5. The letter says that if the debt remains unpaid, you could be referred to TOP, but it doesn’t give a timeline like the others. How many days do they have? 
    6. The letter also says that the Vet has the right to inspect VA records - how do they do this? 
    7. Would the next collection letter be 117 or a specific variation? 
5. About letter 100c: 
    1. About Chapter 1607 - how are debts created for this program, given that it’s not active anymore? 
    2. What is 71B Debt?  
    3. This letter notes that the Vet should pay the debt in full within 30 days as an option - why is it 30? 
    4. This letter has an <Overpay Reason> variable - do you have a list of these reasons? Do you know why this variable is unique to this particular letter? 
    5. Would the next collection letter be 117 or a specific variation? 
6. About letter 101: 
    1. This letter says that “we plan to withhold your full benefit amount until the debt is paid” -- are these debts not put on automatic 12-month repayment? 
    2. The letter also says that “it’s important to pay this debt within 90 days of the date of this letter or tell us which option you choose.” - If these benefits are being withheld already, why must they pay within 90 days? 
    3. Why are Ch 34 and 35 separated from the rest of the edu debts here? Where is the equivalent letter for the rest of the edu debts? 
7. About letter 101a: 
    1.  This letter doesn’t note whether or no the benefits will be held in full or partially over a 12-month plan. Which is it? 
8. About letter 117: 
    1. In the data being sent to us, we see a ‘Description’ for the 117 Letter, which notes that a ‘Second collections letter sent to schools’ -- can you expand on this? 
9. About letter 123:
```

### About Debt Referrals:

**After an account is sent to the Department of Treasury, are there further letters sent to the Veteran?**

N: Yeah, once… if it’s just at TOP, which is rare, there’s a potential that they could get more letters. When it’s at cross-servicing it’s at a status where we don’t send anymore letters. Once it’s sent to cross-servicing, Treasury is in charge of that debt. In some cases, they could potentially get a letter if the debt was returned to us. But in most cases when debts are returned it’s either paid or we write them off. 

R: So in those cases, the debt history would sometimes end in ‘Referred to cross-servicing’? And that will be the end of the history sent to us through the API?

N: Yup. It’ll go in that status. It goes into the treasury status, and when it comes back from treasury there’s a couple different statuses they can go in that are not connected to a letter. More than likely you wouldn’t see it because there isn’t a letter associated. 

### About Debtman

**Who owns the content from Debtman?**

N: VA has an enterprise website team that owns all the VA websites, but they use Team Site. So we can make all the updates to our website. So we kind of own the content, but as far as the backend there’s an enterprise group. 

**Are there analytics we can access? (e.g. Google Analytics)**

N: So, there is… I know they use Google Analytics at the General Services Administration. As far as getting you access, I can check into that. 
