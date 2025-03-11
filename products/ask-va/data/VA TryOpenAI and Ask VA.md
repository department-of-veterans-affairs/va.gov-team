# Identifying top questions in Ask VA using VA TryOpenAI
Last updated by @beckyphung: March 10, 2025 

This doc describes using VA TryOpenAI to identify top VA customer support questions submitted through Ask VA. VA TryOpenAI is a pilot VA-internal generative AI chat.
 
**Key takeaways**
-	**Quicker results**: This was a lot faster than manual tagging.
-	**Less trustworthy**: We don’t know how the LLM determined the results. I followed up with questions and checked the original dataset if an answer seemed inaccurate. 
-	**Limited data input**: I originally tried to input a full day’s worth of questions, but it stopped generating a response when I did this. 
-	**Overall**: This process can be more useful for smaller datasets. You should take steps to double-check results as much as you can.
 
In this doc: 
-	[Potential use case](#potential-use-case)
-	[Dataset details](#dataset-details)
-	[Prompt](#prompt)
-	[Top questions](#top-questions)
-	[Connecting top questions to VA.gov pages](#connecting-top-questions-to-vagov-pages)
-	[Other takeaways](#other-takeaways)
 
## Potential use case
### Add links that answer top questions to VA.gov support pages
-	**Problem**: We can only categorize questions by the Category, Topic, and Subtopic submitters choose for each question. See the Power BI report that shows this. People also may spend days waiting for a response rather than getting the answer directly from VA.gov
-	**Opportunity**: By identify specific top questions, we can identify top VA.gov content pages that answer those questions. Then we can add links to those content pages on places where people seek customer support. Pages could include the Ask VA landing page or VA.gov Contact us page.
 
### Update content on VA.gov pages and digital tools 
-	**Problem**: Content on VA.gov pages or digital tools might not always easily answer people’s questions. 
-	**Opportunity**: If we can determine common recurring questions, we can organize content more effectively and help people find answers quicker. 

## Dataset details
- Date: 3/5/2025
- Rows of data/Questions submitted: 1000
- Character count: 316618

This is only a subset of data from 3/5/2025. The chatbot stopped generating a response when I tried to input questions from the entire day (2023 questions/582109 characters).

I also very minimally cleaned the data. This included removing line breaks and added a number to the start of each question. In retrospect, I could have appended the original inquiry number to each question. The inquiry number contains 17 characters and would have added more length to the question though.
 
## Prompt
Identify the top 5 questions people ask VA based on this dataset of questions people have sent to VA in the following format. The Question ID is the number in front of the question (ex: 1.).
 
1. [Top question formatted as a question]
- Estimated number of questions: [Number of questions]
- [Example question] [Question ID]
- [Example question] [Question ID]
- [Example question] [Question ID]

## Top questions
These were the top questions people asked: 
- When will I receive my benefits or payments?
- How can I check the status of my application or claim?
- How do I update my information (e.g., name, address, direct deposit)?
- How do I get a copy of my Certificate of Eligibility (COE)?
- What are the benefits and eligibility criteria for dependents?
   -  Note: I don't trust this last theme around dependents as much because the example questions don't match the top-level question.

Please see the VA TryOpenAI's output below.

1.	When will I receive my benefits or payments?
-	**Estimated number of questions**: 200
-	**Example question**: "I was wondering when I would get my compensation for the Chap 35 benefits?" [Question ID: 1]
-	**Example question**: "I have not yet received my MHA or my stipends/kicker, and it has been 5 days. So you know when the funds will be released," [Question ID: 12]
-	**Example question**: "When will I receive my BAH for the month of February?" [Question ID: 143]

2. How can I check the status of my application or claim?
-	**Estimated number of questions**: 180
-	**Example question**: "I submitted my application for CHAMPVA for my family I would like to know how do i find out the status of the application?" [Question ID: 8]
-	**Example question**: "I wanted to check on the status of a claim that has been open since [date]." [Question ID: 34]
-	**Example question**: "I submitted a claim to FMP via fax last week and I wanted to verify that it was received. Thank you!" [Question ID: 15]
 
3. How do I update my information (e.g., name, address, direct deposit)?
-	**Estimated number of questions**: 160
-	**Example question**: "I need to update my information to reflect my new last name so that my Certificate of Eligibility will reflect the new name." [Question ID: 5]
-	**Example question**: "I am trying to change the direct deposit on my account and I keep getting a message that says it can't update." [Question ID: 35]
-	**Example question**: "I need to update my contact phone number." [Question ID: 132]
 
4. How do I get a copy of my Certificate of Eligibility (COE)?
- **Estimated number of questions**: 150
- **Example question**: "I need a certificate of eligibility or statement of benefits for the [college], [location] that i just applied for." [Question ID: 4]
- **Example question**: "Can I please get a copy of my MGIB-AD COE that was recently created after my Rudisill decision came back?" [Question ID: 30]
- **Example question**: "I am requesting a copy of my GI Bill Certificate of Eligibility be emailed to me." [Question ID: 137]

5.	What are the benefits and eligibility criteria for dependents?
- **Estimated number of questions**: 140
- **Example question**: "My son is the dependent of 2 100% P/T disabled parents. Is he entitled to the ch 35 benefits from both parents or just one?" [Question ID: 26]
- **Example question**: "I see the dependent claim finally processed, which is good. However, it ends [date] and he will not complete his undergrad until [date]." [Question ID: 59]
- **Example question**: "I submitted a claim for compensation while my son completed high school." [Question ID: 873]
 
## Connecting top questions to VA.gov pages
I’m omitting the last theme because some of the example questions didn’t match the theme. So I don’t trust it as much.

### When will I receive my benefits or payments?
[Apply for education benefits as an eligible dependent](https://www.va.gov/family-and-caregiver-benefits/education-and-careers/apply-for-dea-fry-form-22-5490/introduction)
> After you apply, you may get an automatic decision.

> Note: In some cases, we may need more time to make a decision. If you don’t get an 
automatic decision right after you apply, you’ll receive a decision letter in the mail in about 
30 days. And we’ll contact you if we need more information.
   - This content is hidden within an Additional information component though.

[GI Bill enrollment verification FAQs](https://www.va.gov/resources/gi-bill-enrollment-verification-faqs/)
> We process your benefit payment on the first day of every month. It can take up to 5 days to arrive.

[Post-9/11 GI Bill (Chapter 33) rates](https://www.va.gov/education/benefit-rates/post-9-11-gi-bill-rates/)
> You may be eligible for money to help pay for your housing while you’re studying. If you’re eligible for monthly housing allowance (MHA), we’ll pay you at the end of each month.

### How can I check the status of my application or claim?
[CHAMPVA benefits: After you apply](https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/#after-you-apply)
> If you have questions about the status of your application, call us at 800-733-8387 (TTY: 711). We’re here Monday through Friday, 8:05 a.m. to 7:30 p.m. ET.

[Check your VA claim, decision review, or appeal status](https://www.va.gov/claim-or-appeal-status/)
> You can use this tool to check the status of a VA claim, decision review, or appeal for these types of benefits: …

### How do I update my information (e.g., name, address, direct deposit)?
[Managing your VA.gov profile](https://www.va.gov/resources/managing-your-vagov-profile/)
> You can change your address, phone number, or email address online from your VA.gov profile. Use the edit button that’s next to the information you want to change.

> Please note: If you change your address in your VA.gov profile, you may still need to contact some benefits offices directly to make sure they have your current information on file.

[How to change your legal name on file with VA](https://www.va.gov/resources/how-to-change-your-legal-name-on-file-with-va/)
> You must contact your VA medical center, each VA program office that you receive direct benefit payments from, and the DEERS support office. Keep reading to find out how to change your name with each of these offices.

[Change your direct deposit information](https://www.va.gov/change-direct-deposit/)
> Follow our step-by-step instructions for changing your VA direct deposit information for VA disability compensation, pension, or education benefit payments. We’ll show you how to sign in and make changes online.

### How do I get a copy of my Certificate of Eligibility (COE)?
[Request a VA home loan Certificate of Eligibility (COE)](https://www.va.gov/housing-assistance/home-loans/request-coe-form-26-1880/introduction)
> If we have all the information we need when you sign in, you may get a COE automatically. If we don’t have enough information to create your COE automatically, we’ll ask you to request a COE by completing a Request for a Certificate of Eligibility.

[Check your remaining Post-9/11 GI Bill benefits](https://www.va.gov/education/check-remaining-post-9-11-gi-bill-benefits/)
> If we awarded you Post-9/11 GI Bill education benefits, your GI Bill Statement of Benefits will show you how much of your benefits you’ve used and how much you have remaining. You can also check how much time you have left to use your benefits.

## Other takeaways
### Stopped generating answer when asking for too much in the prompt.
-	Original prompts included: 
   - “Provide a complete list of question IDs that apply to each top question
   - “Provide 3 example questions exactly as provided from the dataset for each top question and their corresponding ID. Do not change these example questions in any way. Also provide an estimate of the number of questions that apply to each top question.”
### Provide a response, but didn’t include everything in the prompt
- Original prompt: 
   - “Identify the top 5 questions people ask VA based on this dataset of questions people have sent to VA. Format the top 5 questions as a question. Each question starts with a Question ID (ex: 366.). Provide 3 example questions for each top question and their corresponding Question ID. Also provide an estimate of the number of questions that apply to each top question. Order the top questions from most frequently asked to least frequently asked”
