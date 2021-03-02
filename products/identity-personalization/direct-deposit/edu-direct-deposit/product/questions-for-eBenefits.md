# Product questions and answers for VBA/eBenefits/BGS

## Ebenefits

**Can you add direct deposit information if you are eligible but have not yet set up direct deposit (eg. You currently receive payment via checks, or didn’t give bank info on a benefit application)?**

**TL;DR**: As of 12/2020, we can not find and endpoint in the code that allows for people who receive paper checks to add direct deposit info, and the eBenefits team has not been able to prove that this exists in eBenefits.

Melissa Rebstock on 10.22.20 via email:

> If you’re asking whether a person in receipt of a paper check can go online to change it to and establish DD/EFT, then, yes, they can. 

However, [in Slack on 11.30.20](https://dsva.slack.com/archives/C1VBAHWQL/p1606772515099000), Mahesh Raparti said:

> Looked up requirements, couldn't find anything around it!

And BGS has otherwise *not* been able to provide guidance on this in the code.

As of 12.7.20 over email, Melissa Rebstock changed her initial answer and said the following:

> I don’t ever recall even testing this piece in eBen and was thinking it was the same as C&P, but going through what I can find, I don’t think we do allow EDU user to switch from paper check to DD/EFT online.  I have someone on my team going through our test accounts to see if we have any in receipt of EDU benefits that we could check. 

We never heard back, so I am assuming they never found anything.

**How much traffic should we expect weekly/monthly for this feature?**

Michael Harlow on 10.22.20 via email:

> Here’s the activity for eBenefits users who have updated their DDEFT info for CH33 within the past two weeks. The chart shows we get between 79-228 successful requests per day. 

The information they sent was in a line graph that was hard to read just from the image (exact values weren't shown per day), so my best approximation is to take the range — 79-228 — and take the average, which is about 150 updates per day. So, this is about 1000 direct deposit for edu updates per week.

## VBA

**Can people still use VA Form 29-0309 to enroll in direct deposit, or is this being phased out like form 0296?**

Answered by Luke Tickner.

Even though this form appears to be for direct deposit for any benefit, it's not. This form is actually for direct deposit for insurance purposes only. It is not an edu direct deposit form.

**Is there a list of exactly which education benefits use the education direct deposit information? Since we know there is some weirdness around some education benefits using the comp & pen direct deposit information, we wanted to see If there is a list somewhere of what benefit uses which direct deposit info.**

Jeffrey Pomietlarz on 10.21.20 via Teams:

- Direct deposit for comp & pen use a payment system called FAS, which stands for something like "Financial accounting system." However, direct deposit for edu mostly uses a system called BDN — "Benefits delivery network." STEM and VETTEC also use FAS, so they are exceptions to the edu rule.

## BGS

- BGS has confirmed that there should be no restriction on non-veteran dependents accessing direct deposit for edu info if they're eligible to view it. This was confirmed on 10/19/20 by Mahesh Raparti from CSRA.

## Adam Kinder from the fraud team

Via email on 10.23.20:

**Do you all monitor direct deposit for education payments in the same way you monitor direct deposit for comp & pen payments, or do you not differentiate?**

> Not currently, but we have plans to do so.

**If you do monitor direct deposit for edu payments, do you all differentiate whether fraudsters go after comp & pen or edu payments? I’m trying to understand if we should expect to see a further reduction in fraud numbers after we move the direct deposit for edu functionality to our site, or if fraud primarily affects comp & pen payments only.**

> See above. We don’t have a good understanding right now on the fraud that occurs in EDU space.  This is on our radar though.
 
