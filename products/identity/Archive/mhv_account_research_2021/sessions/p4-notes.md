# Session Notes: MHV Upgrade flow #9084

Participant #4

4/4/18, 4:30 Eastern

## Warm-up Questions (Optional) - 5 minutes

Before we look at the website, let’s start with a few warm-up questions.
- Have you used Vets.gov before? 
  - **I have.**
- What online tools do you use for your VA benefits?
  - **Only thing is service related disabilities. Recenty I was searching on applying for benefits because I was trying to enroll in an online class, both on va.gov**
  - **Have done TriWest because of TriCare and have done Centura Health, basically the HMO I use with TriWest. To find doctors, I go on ZocDoc for reviews on providers. **
  - **I go on VA.gov to help other people get their benefits**
- Do you have a MHV account?
  - **[Mentioned when scheduling she didn't have an account]**
  - Do you know what level your MHV account is (Basic / Advanced / Premium)?
  - What tools do you use on MHV?
    - Prescriptions
    - Secure messaging
    - Downloading health records
    - **Have not done any of this**
- IF participant doesn't have MHV or doesn't use VA online tools:
  - Have you used any online health tools/services, e.g., health insurance or health provider

## Task 1 - Sign In or Sign Up (8 minutes)

**Scenario: In this first scenario, I'll ask you to sign in to the Vets.gov site and talk through the screens you see. Please click the Sign In/Up link in the upper right corner.**

*Screens*
1. **DS Logon because I have an account. My husband would do ID.me because he has an ID.me account. I don't have one.**
    - If you didn't have a DS Logon account, and you didn't have an ID.me account, what would you expect to have to do next if you wanted to set one up?
      - **Would sign in with MHV**
      - **Hm, I don't have a username or password. I guess I have to go over here (register link on MHV) and register for an account.**
    - We won't spend too much time on that. Pretend you did have a username and password and go ahead and log in.
2. [Step 1 of 2: We've connected to your MHV account]
  - **"connect your account… Can I go back to the very first page: sign in to vets.gov? Is there anything here about signing in as a new person? Don't have those accounts… So you're forced to do this (create an ID.me account) if you don't have any of those accounts. You're forced to do this account. And if someone doesn't have email, Google, or Facebook, they would have to create an account if they didn't have the association. Is the goal to set up a new ID.me, I mean MHV account? How do you set that up? "**
  - [back to sign in to vets.gov screen]
  - Sounds as though you'd like to set up an MHV account rather than setting up a MHV account?
    - **Yeah. Because a lot of people don't go on Facebook. They may not know Google or have a Google account. Especially with Facebook having all the recent happenings going on. But I guess you're forced to do this (create an ID.me account), but if you go on here (sign in with MHV), you can create one (a new MHV account), right? I'll go back (to sign in with MHV). **
3. [Back to Step 1 of 2: we've connected to your MHV account]
  - **reading "Uses ID.me for added security and verification, to finish securing your vets.gov account, an ID.me account will be created with the email you enter below…."**
  - What do you think would happen if you hit continue? 
    - **I would go to my personal information. Profile, that kind of stuff. Name, phone number, address, password stuff**
4. [2 factor setup]
  - **[reading through options and descriptions] hm. I don't know what a FIDO U2F Security Key is. Is it like a USB? It says USB port. but like a memory stick or what? My first choice - I'd do a text message just for ease. I don't know if anybody would know this one (FIDO). Authenticator? Where does that come from? Where does that go to?Single use code for signing in… Where do you get the code at?**
  - **Even if someone guesses your password, they won't be able to sign in as you...**
  - **If I set this (Google Authenticator) as a code generator, and it's a one time deal, does it go to my phone? does it go my email? is that where the second layer is? **
  - Explanation of how Google Authenticator works
    - **Oh, so that's like a text message code.**
5. Enter your code
6. Your account is now secure
  - **(reading) "your account is now secure. You completed 2 factor setup" So what does that mean? It's not secure if I… How secure is it now?**
  - Why do you think you were just prompted to do those steps, and what effect do you think that's going to have going forward?
    - **I'm assuming that on the VA site, there's already measures in there to secure it for personal information, what you do on a normal basis. So I don't know if SSL or certificates and stuff. Is that I'm going further into that level? Is that what 2 factor authentication allows me to do? I just assume that if I were to come in anyway, my information would be secure without having to have another level of authentication. If I don't do it, what am I compromising?**
  - [Moderator navigated back to 2 factor setup page]
    - **"I don't want to secure my account." Does that mean that ID.me is not protecting me? I guess I wouldn't even go in if… Why would you not want to secure your account? Why wouldn't it be secure if you're doing stuff anyway? What is this guaranteeing me compared to if I didn't do it? What am I compromising?**
      - See any info about that here?
      - **"Even if someone guesses your password, they won't be able to sign in as you" - True, but if they have my phone, they could.**

## Task 2 - Verify Identity and Discuss FAQs (15 minutes total)

*Goals: Understand success and pain points from the current design of the Identity Verification flow AND Determine usefulness / usability of the FAQ content*

**Scenario: [participant is on the home page now] Imagine you want to send a message to your doctor using the Vets.gov website. I'm going to ask you to navigate to the secure messaging section of Vets.gov and talk through the screens you see. Please click "Manage Your Health and Benefits link in the top blue section of the page. Then click the "Message Your Health Care Team" link.**

*Screens*
1. **Verify screen** - probe for understanding of why identity verification is needed and what will happen during the process
    - Why do you think you're seeing this screen?
      - **[reading] "Need to verify…" because if someone got my password and my phone.**
      - So you think this is a security warning?
        - **Yeah. It's just another layer. You did the verify with ID.me and verify with the app prior to that, so it could be redundant to some people. The thing is if you're not doing it secure, this does make you do it secure, right? This comes up if you don't go through the secure method, right? I would assume that if I didn't go three pages back and do the secure method, I'd still have this show up.**
        - Do you think you would see this if you *did* set up a 2 factor code?
          - **Yes, I think I would always see it**
          - Why would you see it?
            - **Because it's just a different page. I assume that every single one of these is going to have a verify page. If I went to another benefit, I'd see this verify page again. because if I *didn't* set up 2 factor, this is your safe… I'd assume that.**
    - What would you do first on this screen? Why?
      - **Click Verify with ID.me**
    - What do you think will happen if you click "Verify your identity" button?
    - ***On the Verify screen, ask participant to click the Why Verify? link***
2. **FAQs - Why verify section** - probe for whether or not this section provides additional helpful information
    - What is this (FAQ) telling you?
      - **This is stating the privacy and security aspects of vets.gov, why we should feel secure with our info on this site (laughs). It's the fine print that's not fine print.**
    - Now that you've read it, what do you think about the identify verification process? 
    - Did you learn anything new? If so, what?
      - **No**
    - What info would you want to see here?
      - **This is the one I've always questioned (what is ID.me and why should I trust them). [reading] No, I just think that ID.me has gotten really big. I don't have one, but my husband uses it for military discounts. My only thing with ID.me when I set it up the last time we were doing it, it was asking for banking info, and online, I question having to do that kind of stuff. Obviously when I'm shopping online, I'm taking a risk, so when I do this online, I'm taking a risk. The thing is with ID.me having so much connection with other retail business… It's just like Facebook. Look at them. They had a compromise. And people take advantage of it when they get that big.**
    - Does anything here address your concerns?
      - **[clicks what info does ID.me collect, and do they share it with anyone else?] The credit report, that's a big thing. Especially those of us who have been compromised with the government already with our information. We'd actually have to open up. we have our credit locked down. If I have to… I obviously have to open up that window [credit report] for ID.me to finish the account setup?**
    - Any info you're not seeing here that might be helpful?
      - **Nope.**
    - Do you have questions about the identity verification process that aren't answered here?
    - ***Ask user to scroll up to the Verifying Your Identity on Vets.gov section of FAQs***
3. **FAQs - Verifying Your Identity on Vets.gov** - probe for whether or not this section provides additional helpful information
    - Please open and read through "How do I verify my identity online" section. What do you think about the identify verification process? 
    - Did you learn anything new? If so, what?
    - Do you have questions about the identity verification process that aren't answered here?
    - ***Navigate for participant back to Verify screen + have them click the Verify Me button***
4. **Let's Verify Identity screen**
    - Which option would you choose? Why?
      - **Driver's license or passport. since I have my license with me all the time. I'd assume I'd be taking a snapshot of it. But if I have a laptop, it just goes off my laptop camera, right?**
    - What kind of questions would you expected to be asked?
      - **I would pick one of these [driver's license, verify by answering questions, passport]. [reading] you only have to do it once. Picture of your passport.**
      - **If I were an older person, how would these people take pictures (of driver's license, passport). I'm assuming this is going to be… can you do this all on a smartphone?**
    - SSN
      - **And it's asking for all the digits of your SSN, not just the last 4?** 
    - Phone
      - **[reading - what type of phone do you have]**
5. **Is Your Information Correct screen**
    - So you've provided your personal information, address, social security, and phone number. How do you think Vets.gov will use this information to verify your identity? 
      - **Checks "i attest the info is correct" box**
6. **Answer Your Verification Questions screen**
    - **See, this is what I don't like. Obviously, if I don't do the secure authentication thing, and I'm going through this, and I haven't gone through true identification, and now I'm going through a verification process, this (information) is all accessible then.**
    - Does it seem ID.me would be storing this info after your answer?
      - **Yes. I even talked to my husband about this part, and he was like "I don't know why I would need to do this". When he set up his account on ID.me he didn't have to do these steps. Why do I have to do it on vets.gov?**
    - **current or previous employer - I don't have a problem with that. Credit profile - bank of america credit card. That would mean it's accessing my banking...**
    - Where do you think this information came from?
      - **I don't know. Obviously this (mortgage) would be open with a lender. It would be with a credit profile. I would have to open up my credit profile to access this part. If someone were to do a credit report on me, I'd have to go and tell the different ID protection agencies to open up that capability. I had them all locked because I was compromised by the government. That was just recently.**
    - Are any surprising to you? Why?
7. **We've Verified Your Identity**
    - **[reading] "before we send you back to vets.gov, we need your permission to share your verified identity with vets.gov. Vets.gov will receive.." So vets.gov doesn't have this information already?**
      - Do you think they should have it already?
        - **I just assume that they have it. I mean va.gov has it, so… Are you creating your own database? You're not data mining any of the VA.gov database.**
          - No, vets.gov is a different site, so you would be able to grant vets.gov access to your information, but it's up to you to do that.
    - **So are vets.gov and va.gov going to both exist, or is one going to be going away?**
      - [stock answer]
    - What do you think will happen if you click Allow and Continue?
    - What do you think will happen if you click Deny?
    - Any questions or thoughts about the process you went through to verify your identity?
      - **That was a lot of steps I have to do to send a message to my healthcare team.**


## Task 3 - Accept Terms and Conditions (8 minutes)

*Goal: Understand success and pain points from the design of the Terms & Conditions flow*

**Scenario: [participant is on the We've Verified Your Identity screen] Now you'll continue navigating to the secure messaging section of the Vets.gov website. Please click the "Allow and Continue" button.**

1. **T&Cs screen** - probe for understanding of why T&Cs are needed and what will happen after accepting them
    - Why do you think you're seeing this screen?
      - **[reading T&C details] just telling you pretty much privacy of your medical information.**
      - **So you can do this on va.gov too, right? So is somebody going to… Are the same providers using both of them so they have to check both of them? Does it all feed into one? I'm just talking about the provider. Will it be answered? I guess I'll get a notification that an answer has been given, and it will link to this site rather than va.gov? **
        - How would you expect that notification to come?
          - **either by my phone or email, or both**
    - What would you do first on this screen? Why?
      - **[Tried to click the agree checkbox without scrolling] - not working**
      - **[reading details of T&C again]. I'm having a hard time with this cursor (scrolling inside the box)**
    - What do you think you're agreeing to here?
      - **That I have to go through these steps again to retrieve my messages**
      - **"when you use secure messaging, you are expected to follow certain standards of conduct. violations may result in being blocked from using secure messaging". So I assume this is saying if you screw up three times (like you forget your password), you're going to be blocked from accessing your messages. And you'll get a reset. so your account is going to be locked.**
    - What do you think will happen if you click "Submit" button?
    - ***Have participant click the Submit button***
2. **Messaging Inbox screen** - probe for understanding of the process the participant just went through
    - ***Remind user of the steps they've done to get to the Messaging Inbox - Signed in, Verified their identity, and Accepted the T&Cs***
    - Now that you're in the messageing area, think back to the process you just went through. Was there anything unexpected or surprising about that process?
      - **It was long. But it should be one time, right? Or was that a single time?**
        - What would you expect next time you wanted to access secure messaging?
          - **The only thing I would have to do is go into "verify" and [pause, laugh]. My personal thing would be to send a code, and then you type it in, and then you get to this page [message your healthcare team]. **
            - **2 factor code, verify my identity screen, then next thing I should see would be something of verifying what is your social security number and birthdate, just like the DS Logon's, and then you get to your messages, like a username / password.**
          - Explanation of what would happen: log in with username and password, then enter code from your phone
            - **That works, except for people who don't have a smartphone, you'll have to figure out how to bypass that.**
    - What parts of the process were easiest to complete?  Why?
    - Which parts were difficult or challenging to complete? Why?
    - Any questions or other thoughts about the overall process?


## Task 4 - Discuss MHV upgrade (8 minutes)

*Goals: Understand what kind of context we should provide to the user about the upgrade process. How much is too much? How much is too little? What is important to know going in?*

**Scenario: [participant is on the Messaging Inbox screen] Now I have a few questions about the process you just went through.**

* Do you normally read T&Cs? Why or why not?
    * **I usually do once. I guess it's because I'm new. I would just read them once. I'd assume nothing's changed. Does it say on here "every single time" - did I misss that? Do I need to go through all that pain?**
* When you accepted the terms and conditions, you allowed Vets.gov to retrieve your health records and display them to you on the Vets.gov site. 
    - Was that what you expected? Why or why not?
      - **yes**

***Next section is ONLY for participants with MHV account***
* When you accepted the terms and conditions, we gave you to access to all the health tools on Vets.gov. We also upgraded your MHV account to Premium, which means you now have access to all the health tools on MHV (download health records and message your doctor).
    - Was that what you expected? Why or why not?
* When you went through this process we didn't explain to you that your MHV account would be upgraded, what do you think about that? (probe to see if doing it w/o their knowledge is disconcerting).
  * If disconcerting: 
    - What could we have done to make that more clear on the terms and conditions? 
    - What info would you want to know in the beginning? 
    - If we explained that in the beginning, would you be more likely to complete the process?
* Now that you know your MHV account has been upgraded, what would you expect to see when you go to MHV next time? 
    - Would anything be different?
    - Is a Premium account of interest/worthwhile to you? 
    - What do you think you would do on MHV if your account was upgraded to Premium?
    

## Post-Task Interview - 5 minutes
* Think back to the entire process (sign in, identity verification, terms and conditions) you just went through. Why did you need to go through it?
* Was it worth it?
  * **Well, I think it's just an accepted thing from anybody that if you're starting a new system, you'll have to put your info in at least once, but after that it should be transparent and fluid, just username and password. I had to do it when I signed up for Centura Health.**
  * **I'm assuming "my healthcare team" is with a VA clinic. is that correct? Is there an option that if you were going to go into a facility for your appointment, they could input your data for you so that when you go home, all you would have to do would be put in your username and password? That's basically what happened with Centura Health. I filled out information and they put it in. They gave you a way to sign up with a username and password with a link with sent by email. And then there you go, it's all in there. But I know VA is short staffed...**
* What did you like about it?
* What surprised you?
  * **nothing**
* Any questions for me?
  * **Nope.**


## Thank-You and Closing - 5 minutes

We appreciate you taking the time to share your thoughts with us. Your feedback is helpful as we continue to work on the site and make sure it works for Veterans.

As a thank you for your participation, we'd like to offer you a $25 gift either as an Amazon Gift Card or through Paypal. Do you have a preference?

*Confirm email address to send the gift to.*

Would you be willing to share this feedback opportunity with other Veterans or Veteran groups you're a part of? If so, I can send you an email with a blurb that you can pass on.

*Thanks and bye!*

