# DS Logon Research Brief
October 22, 2019

## Methodology
We conducted user interviews with 9 participants over a one week period during October 1-7, 2019. Users were recruited through the DSVA’s recruitment contract with Perigean. Sessions were conducted remotely recorded via Zoom. 
Participant breakdown:
* 5 veterans (various branches of service)
* 4 caregivers

Transcripts and notes are available in the DSVA GitHub Repo [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/ds-logon/research). 

## Summary
The research revealed six themes that impact the user experience of DS Logon. 
1. **DS Logon is a barrier to access**. Both veterans and caregivers are concerned and frustrated by the difficulty they experience in accessing the critical information they need. Instead of being able to quickly get into their accounts and execute important tasks, they find themselves blocked by complex password requirements, stringent password resets, account lockouts, and the instability of DS Logon itself. In particular, caregivers have difficulty accessing their veterans’ accounts due to frequent password changes and security questions that caregivers may be unable to answer. DS Logon creates a barrier to veterans and caregivers accessing the resources that they need.
2. **Password requirements are burdensome.** Nearly everyone we talked to had a list of usernames and passwords saved as a note on their phone, in a spreadsheet, or in a paper notebook. Many people cited the complexity of the DS Logon password requirements as a major hurdle. If they can’t remember their password when they’re trying to access crucial benefits, they have another step of pulling up that spreadsheet or tool to access it. In addition, the passwords are reset so often (either due to the system requirements or because it is forgotten) that it is difficult for veterans and caregivers to keep their written password lists up-to-date.
3. **Veterans and caregivers desire a single, better system.** Many veterans and caregivers are so overwhelmed with the number of login credentials they must keep up with that they use spreadsheets and third party tools to store their account information and stay organized. Veterans and caregivers alike mentioned confusion over which account they need to use for which site. Repeatedly, we heard that a single, simple credentialing system would save them time and frustration.
4. **Veterans want secure, trustworthy systems.** Veterans understand and agree with the need for security. In some cases, veterans actively choose one login account over the other because of perceived security. For example, some chose ID.me over DS Logon when using a public computer, because they perceive that credential to be more secure. Some users mentioned their information had been stolen in data breaches, making them even more aware of the need for a secure system. Both Veterans and caregivers expect a login process that is easy to use and aligns with their experiences of other secure systems. Alternate login and identity verification processes, like two-factor authentication, are desirable to users.
5. **Caregivers lack the access they need.** Caregivers do not have access to their own DS Logon accounts, forcing them to login with their veteran’s account instead. Family members find it difficult to easily sync updated passwords, and in the case of account lock-outs, might not have the information needed to reset passwords. Caregivers feel that their reliance on their veteran’s account is a single point of failure. This creates a high stakes environment for caregivers, who express a deep fear of losing access to VA resources because of their inability to access their veteran’s account.
6. **DS Logon is perceived as outdated and dysfunctional.** Users expect the DS Logon experience to align with their experiences of private sector websites, and are disappointed when it does not meet expectations. Users find the overall design of the login flow and extensive disclaimer text clunky and unnecessary. It’s unclear to users why they needed to upgrade to a Premium account after originally creating their DS Logon account. Users anticipate that DS Logon will not work, and are surprised when it does. The outage calendar or maintenance announcements are seen as a blanket excuse for lack of stability, which furthers the perception that the process is outdated and unreliable. 

In addition to these themes, the team uncovered some additional findings worth noting:
+  **Login support.** Caregivers and veterans aren’t sure how to get help if they have trouble logging in. Some noted the White House hotline as a potential resource, but remarked that most of the time the hotline employees could only refer them to others for help. There’s a desire for more support and assistance, especially in resetting or recovering accounts.
+ **Mobile access.** Many users prefer accessing their VA resources via their mobile devices due to the convenience of accessing their accounts, forms, or letters on the go. For many users this is the preferred way to access their accounts as they save their login credentials on their Apple ID accounts or in a notes document saved on their device. 
+ **Veterans have little memory of account set-up.** Veterans had a hard time recalling their experience identity proofing or setting up their account after their service ended. We were not able to learn much about account set-up for that reason, other than to learn that veterans felt ambivalent about that process.

## Recommendations
Based on this research, the team recommends the following changes to improve the DS Logon user experience:  
+ Update password requirements to meet best practices (see NIST standards on Digital Identity Guidelines).
+ Eliminate or reduce required periodic password resets.
+ Enable alternate methods of identity proofing and security questions, such as integrating authenticator apps and other forms of two-factor authentication.
+ In line with the move to consolidate VA resources on VA.gov, explore consolidating multiple VA account credentials into a single login process.
+ Allow caregivers to set up their own account that is linked to their veteran’s account.
+ Drastically reduce the content on DS Logon disclaimer pages.
+ Require a user to consent to monitoring only the first time a user has logged on, or if logging in on a new computer.
+ Ensure that eBenefits is mobile friendly.
+ Upgrade all existing accounts to Premium and remove the distinction between the two accounts. If that is not possible, consider changing the term “Premium” to more accurately reflect the additional verification that is required and signal to users why they should consider upgrading. 

## Conclusion
DS Logon in its current form is a serious barrier to the health and benefit resources that veterans and caregivers rely on. It causes a significant amount of frustration and damages the trust that veterans and their families have in the VA. We strongly urge decision makers to consider the impact that implementing our recommendations could have on veterans’ and caregivers’ experiences with VA login processes. 

# Addendum I
## Research Themes and Quotes

### DS Logon is a barrier to access
+ **Account recovery process is difficult**
  - [Veteran] and I met in 2016, so a lot of the questions that they ask, the recovery questions, like what’s your sister’s middle name, or what town did you get your first job in, we think we're answering the questions correctly but we’re not, so we get locked out.
  - Instead of doing recovery questions, you guys could send a code to [...] an approved phone and make it much simpler. Cause otherwise you get locked out, and what if you’re having an emergency or you need to get in? What if [name] was in the hospital and I needed to access his information but I couldn’t because I didn’t know [his sister’s] middle name?
+ **Barriers to access**
  -I feel like I need to have a bachelor's degree in computer sciences in order to be able to access the DS Logon. If you gave me a scale of zero to organic chem, this is about organic chem. 
  - It just seems like everytime we go to login to [stuff] that has to do with military, and especially the DS Logon, it’s always a chore. It’s like, argh, we have to do this today, great. 
  - As a caretaker and a caregiver, it’s important for me to be able to access his information quickly, and if this website is going to mess around and not allow me to, it’s frustrating to me. It actually pisses me off. 
  -His background is in computers, so is mine, we’re all online for everything. Almost all our bills and so forth are paperless, so we’re not you know in our 70s and kind of hunting, pecking, and not computer savvy. We’re pretty good. So when we struggle with that, we really kind of feel like, jeez, this seems like it’s not keeping up with the times.
+ **Logging in takes multiple tries/steps**
  - P: Let’s see if [this password] works! Nope! See, this is what we do…
    - M: When this would happen, you get this [password incorrect] error, what do you do next?
    - P: Um..Well I would go back up and click the Consent box and try again. And maybe I would go to…[asks husband about username]...Ok, let’s try that one. Ok.
    - Husband: No, just use the password [the autosaved password on the browser]
    - P: Ok let’s try that, and then we would go down and it would say…. No, “did you forget your password”. Then I would that one [tries another saved password], and I would try this one up here..and then...but is it the [password option]?
    - Husband: I don’t know, try that
  - Um, I think it’s three steps too many. I was fortunate, though. I have my ID.me stuff saved, so I didn’t have to try to go through my copious amounts of passwords to look for it. But...again, through the eyes of someone with a brain injury or, you know, who hasn’t slept in since their first deployment, um, this would be too much.
  - So I shouldn’t have to login multiple times … Once I’m logged in I should be logged in, period. And I shouldn’t have to login repeatedly. And uh, it’s just a jumble of information.
+ **Access critical to benefits/information**
  - But if those passcodes aren’t up to date or the DS Logon is acting up, they’re not going to be able to get into this information for me. You know, it needs to be streamlined and it needs to be a sure thing. Otherwise, why does it even exist, you know? 
  - P2: Who’s to say I don’t get in a really bad car accident.
    - P1: Exactly, oh my gosh, yes. And then where am I left? I’m left with nothing and the inability to login with anything, and I’m screwed. 
  - [once logged in] I’m so pissed off and thank god I got in. I hope my computer doesn’t die, I just want to get in and get out. I don’t ever just sit and browse. I get in, get out, and get what I need and move on. We also have four kids. I don’t have time to sit here and mess around. Sometimes we need letters, we need information, I need to see when appointments are happening. It’s just like, it’s hard.
+  **Access as active vs. discharged**
+  
  - I think towards the end of active duty, but I still had a CAC card, so I could get in with my CAC card. And then it was only, you know I could just use an old phone number on my CAC card as a password. So that was all I needed to do.
  - I don’t know if this is something maybe the VA could use also like the 2-factor authentication and all that. If...if the VA could have a VA version of this. Of the CAC card. To be able to login to stuff. I think maybe that could make sense. I’m not sure but uh, since we have this over here...it’s, if you’re actually active duty, maybe something for Veterans would also be helpful. Um, that they could elsewhere.
 
### Password requirements are burdensome
+ **Password management**
  - So when I go in and I log in on stuff for my husband’s account, I’ll go to my iPhone and I go to my passwords, I usually have all of my passwords in my notes, ok.
  - So that’s probably the biggest difficulty we’ve had with that one: getting the login and getting it something he can remember. So I take over all of this now … I do a spreadsheet where I put in like the start and the finish of it and I can remember the middles. But usually I try to pick something that’s relevant to us. But you have to do so many characters, so many symbols, so many numbers, so it’s usually something that’s not easy to remember.
  - Yeah, my husband used to write it down on pieces of paper and he would lose them or he has multiple notebooks that he uses for memory, but even with those he loses them often. 
  - ...I have them in a spreadsheet that basically is broken down to what website I use.  I have the web address, the username and password, which site, and what each one of them is meant to accomplish, built into a spreadsheet. So if I didn’t have that, I would be pretty lost.
  - M: So it seems like you have a lot of accounts...how do you keep track of all your passwords?
    - P: It’s all the same password. [laughs]
  - I have like a whole vault of passwords that I keep. ‘Cause I used to be able to track them all and [now] I can’t. I use OneNote [for that vault]. And that way it’s on my phone, it’s on my computer. It’s everywhere I need.
  - Well, [if there’s a password error] I...see if there’s another password that my Mac has automatically saved. I hope so. Because if not, then I have to go and find my password-protected file and look it up in there. And hopefully I remembered to save it. Like many combat Veterans, I have cognitive and some memory issues with multiple TBIs.
  - Remembering passwords, even if it’s simple, is not going to happen with me.
+ **Password changes**
  - I think that DS Logon is pretty easy to use, except for the password. Trying to remember it is not all that easy sometimes. And you have to remember it, and they don’t tell you have to remember it until you’ve already forgot it. 
  - It’ll make him change the login and the password, but he’ll have to get on the phone and call somebody. Most of the time he doesn’t feel up for doing that, so it just dangles there until the next time I catch wind that we need to be using it for something.
  - It’s extremely frustrating. In particular, the requirement I thought everyone stopped doing 15 years ago of having to change your password every however often. So every time I login, I have to change and the requirements for having a password are ridiculous. You know, these long things.
  - So we’re not going to be able to login today because I’m, you know, I don’t have my password and my password is auto-generated because of...the crazy rules of it. Like I was mentioning before. So, um, and having to change it all of the time, which is, I mean, in a word: stupid. 
  - I’ve got to pull up the 25-digit user password BS combo this requires you to have.

### Veterans and caregivers desire a single, better system
+ **Alternate login processes**
  - ...Making it so it’s not just a cluster-[expletive] of crazy would be so incredible. And I think that you guys would see a lot more utilization of this particular...and I don’t know if people do utilize this as much as they could or would if it were just simpler.
  - ...I think that CAC card thing is a really...awesome idea. It might not be as cost-efficient as a code that could be sent out, but just simplicity, simplifying the process. ...Veterans are not like civilian people. They come back from war, they come back from being enlisted, and they have issues. They have limitations.
  - Sometimes there’s a code generation, like a code generator app...they automatically verify you. Even that, just something, to make it a shorter process, would be amazing.
  - I would change it so that that login could be accessed even if I forgot the login name and username...I could put in a phone number that could be a trusted number, and you could send me a code that would automatically let me access the information and change the information.
  - ...If there would be another way to pre-verify someone, as being, “yes, they’re on my list” and “yes, you can send them a code,” ...that would trump all the other stuff and they could get in.
  - The VA really should go to a CAC card system, rather than what they have now. And then people have CAC card readers or whatever for their computers. And then you can get on. And then the dependents should have a CAC card as well.
+ **Account consolidation**
  - I would just change it so that there’s one type of login, not a million different kinds.
  - Why isn’t myhealthevet and eBenefits the same thing? [referring to login accounts across the two systems]...... So it’s like, ok, now I gotta remember two user names and two passwords.
  - If we could streamline all this into one spot to see everything, so there’s not you know seven different logins or seven different portals that you have to go through to see everything. Because at this point, I get a little confused [about] which one I’m supposed to be working on and that takes up a lot of time trying to figure out which one to use for which problem. ...If we could streamline that all to have one central location for everything, I think that would make it much easier to see what part of the process we’re in.
  - It would be better if they were just in one system already, it would be better if you could do everything in one system. You know, it would be better...my understanding is they want to migrate everything over, they want to skip everything over. Now I understand in like eBenefits, you can go over and get into the DEERS account. I understand that that is a DoD system, but it would be better if you could do everything in like va.gov already, instead of going back and forth.
  - Too many websites get confusing to people and if you have something like major PTSD and you’re trying to do all this stuff, it can get frustrating. If the VA had just one website with the menu of different possibilities, like, “I want to increase my VA compensation,” or “I want to debate it.” [And] that automatically sent you to the other website, rather than having to go and log in all over again.
  - Veteran: Well the logins are completely different. They don’t even talk as a system. you can’t go from one system to the other. So it’s like, ok, now I gotta remember two user names and two passwords.
  - I think the takeaway is make one password, one sign-on that goes through all this stuff.

  - ..Why is there more than one login to do VA stuff? It should just be one.

  - One login. One VA, one login. Everything accessible from right there, from a single button, and everything’s super clear.

+ **Veteran Frustration**
  - And I don’t want to go to my vet, my warrior, and bother him. He doesn’t want to be bothered. So do I go to him— is today the day I can ask him or not? Cause some days are better than others, too... It’s just really hard.
  - Quite frankly, I don’t want to deal with it at any time. ‘Cause I know how much of a headache it is, and it puts me in a bad mood.
  - And then the fact that suddenly you get an email, and you have to reset your email, [inaudible], password after so long, and then you know. I don’t remember anything, quite frankly [suffered TBI].
  - Like if you’re to the point where you’re already thinking of ways out and you go to login to try to make an appointment or to do some basic things and you can’t even get in. And you’re tired, and you’re exhausted, and you’re...you know. ...Not everyone’s healthy, mentally or physically.
Veterans want secure, trustworthy systems
+ **Trust**
  - I like DS Logon. When I do log on to DS Logon, I’m logging on through a different website, so that means my password and username are not protected by the VA, they’re protected by DS. The VA, as far as they’re concerned, doesn’t even have a password for me. So the only time they know when I logged on is when they track me through my usage of the website. ...It makes me feel better that I’m logging on through the DS Logon rather than MyHealtheVet. 
  - He’s like “I don’t know if I really want my stuff in here.” And I’m like “yeah but we have to use it. They expect us to use it.” … [eBenefits] is not one that we are super trusting of.
  - ...It’s nice to be able to have the 2FA just in case...I was involved in an OPM breach. I’m sure someone, somewhere has all my information. Uh, so adding that second level of security, one that’s between my own hands because I’m the one that has access. At least in theory.
+ **Security**
  - I have three levels of security on my system, so I’m pretty sure I’m safe with that. I use a VPN, and I also use internal security…
  - So I feel better about it. He’s not too concerned because he thinks his information is already out there. I try to protect it as much as possible, so I like that extra added security. 
  - But there have been issues where he could see other people’s information and was worried that people could see-- I mean there are some issues with this … I mean another veteran’s information came up when he entered his logon. 
  - I appreciate the security aspect of it. I’m a little bit worried about why there are the anomalies that there are, and certainly at one point we also had a letter that kind of said his data had been breached. I think he has a lot of anxiety about that. ...Other people can get access to it faster than we can with nefarious means and we struggle to use it as it’s supposed to be used.
  - I don’t feel like people hack me to get in here. There’s no financial gain at all.
  - Let’s see which [password] is the magic ticket. I get the need for security...I really do. But there’s got to be an easier way.
  - M: So I noticed you have an authenticator app set up for both of your accounts. And I’m wondering if you could talk me through why you chose to do that and what that process was like?
    - P: Uh, so I chose this for security purposes. You know, honestly, I’ve used the same laptop about 6 years too. Um, and you know, it’s a better safe than sorry thing...I need a password and just in case there’s some sort of breach. So I prefer to just have the authenticator.

  - In theory, it [facial recognition] would just be probably more secure. I think, I’m not sure, but seems to me it would be a little more secure, that you’re the person behind the computer. Versus a password or say just 2FA.
  - Let’s say I lose my VA ID. Someone who maybe looks like me can go in and fake that they’re me and try to get benefits. Of some sort. I don’t know if they can, but...this is just my extra paranoid self talking.

+ **Tradeoff between security and convenience**
  - I would honestly probably click out of this and go back to the way I normally log in. Because at this point, being a VA website, I tend to feel that it’s more secure and I know my computer is secure. Maybe I would feel differently if I was using...a public computer at a library or something.
  - It seems kind of pointless. You should know me. This is my computer. ..I could understand if...he was logging in from his phone for the first time, or my phone, but if it’s the same computer that we don’t share, it’s our personal computer, seeing this every day … I don’t need that additional security. 
  - So it seems like this is um another security step, which if it does this to me every time...I will get very annoyed with it. ...Maybe since this is the first time I’ve used it or it’s a long time I’m okay with it, but if it becomes a weekly thing I would probably be very irritated.
  - ...I already have this saved and I’m lazy. And I have like 9 million other things to do as a caregiver besides worry about if the DS Logon...

+ **Identity proofing**
  - But like lately, we were trying to login the other day and they were doing a whole, like thorough, they were having to authenticate each veteran
  - ...Recently I forgot my password, and it made me go in...it was just like if you’re setting up an online checking account. They ask you what house you lived in, things you get from public records. Like what mortgage you have or what car loan or whatever.
  - For us it was challenging. ...My husband’s account kept having to get, what do they call it, authorized? So we weren’t able to see all of this or on the MyHealtheVet, where it says Premium here? You have to be authorized to get the Premium, which then allows you further access into everything else, and it took probably two years to get his account finally authorized, and having to go into the office multiple times to get it authorized, and they would say that was completed but we’d go to log in again and we’d run into the same wall. We finally had to go down to...the medical records office and he was able to just push a button right there in his office, he had access to everything.
  - This is MyHealtheVet that you have to be authorized for the Premium in order to be Premium on this page, the VA DoD eBenefits. So if you’re not Premium on MyHealtheVet, you will not be Premium on the DoD, and you cannot access all of the medical history. Which then makes it difficult to...submit compensation claims.
  - We are at 94 days today since we started this. So if we had had the ability to connect properly with her and put this information in there in a place she could get it...and work on it...and send it along in real time, it probably would have been done in three weeks. But all of these other people got involved, all of these other things, his pain is through the roof, and he’s like just “get it, just get it, please just get it!” And I’m struggling to reach people in their offices to connect the dots and get it to the right place so the order can be placed and it can be sent.
+ **VA image/trust in VA**
  - Supposedly a kinder, softer side of the VA is being created to be less paper-ful. And uh...it’s just taking a while.
  - I’ll put it in really simple terms: using DS Logon is one of the worst online experiences I have. Period.

+ **Two factor authentication**
  - That’s one of the great things about the two part authentication, right? You don’t need to worry so much about the password.
  - So if I were on a public computer and I would go to MHV, I would use ID.me for the two part authentication, even if it is a bit laborious. 
  - ...You only get a choice between text message or phone call, you don't get a choice of having it sent to your email. Whereas like...IRS, they give you a choice. If you don’t have your phone with you or whatever, that restricts you... But I don’t mind that two part authentication. I mean, there are probably what a million people out there trying to steal your data, so.
+ **Login choices/decisions**
  - I usually sign in with the DS Logon because that’s the one I have saved in my phone.
  - My password for MyHealtheVet never works, and when I try to recover it they tell me they can’t find my account. Don’t know why, don’t care, because I can log on with my DS Logon so I don’t feel like messing with it.
  - [I use My HealtheVet to login] because it’s just front and center for me. I’ve never used any of the others before. I just click the login. I honestly didn’t notice that there was another way to do it.
  - [With] a public internet, I would always want to use my ID.me account.
  - One of the great things about the ID.me, too, is you get the two part authentication.
  - If [I’m on] a public computer, I’ll use ID.me because it uses your email address, not your username.
  - My boss at the time told me to use my CAC card to set [a premium account] up. Essentially it was authenticated. I did that and I’ve been using that ever since.  I used that one for everything for a few years.
  - I tried signing in, at one point, using ID.me. It was just kind of difficult. I never managed to figure out how to do it, for whatever reason. I don’t know if that’s because it crashed. I think at one point, I got confused between the DS Logon and the ID.me and I wasn’t sure which was which. Maybe it would be helpful to just say “use this if you have this, use this if you have this.”
  - I don’t think there’d be reason for me to use one over another. It doesn’t seem there’s a difference. Is there supposed to be a difference between the two?
  - ...I’d just use this [ID.me]. Cause it seems a little more straightforward, cause I can just sign in and use my authenticator app. Versus DS Logon which seems a little more...seems a little more archaic. Cause I get this page, I get all this extra stuff. [inaudible] Looking at it now, it seems that ID.me is just a little tiny bit more straightforward.
  - DS Logon is that frustrating password experience, so, yeah I would much rather login like this directly to MyHealtheVet...

### Caregivers lack the access they need
+ **Caregiver burden**
  - That frustration that you heard in [name’s] voice... that’s the trenches of trying to deal with this online stuff. Especially with your veteran. Like, I love that man to death, and he gets frustrated with it, and then it creates frustration between our relationship....we’re just trying to help out and they’re frustrated.
  - ...You have to have a masters or PhD in DS Logon even just to use it. So caregivers are the ones having to do all this, but we don’t know half the history of our vets sometimes, and we get locked out. And it’s like, well [expletive], we can’t use the DS Logon, and the vets get upset because have to change the username and passcode, and it just becomes this circle jerk of anger.
  - Because being, you know, a mom, a caregiver, usually if I’m logging in I need to see something immediately or send a message, you know I don’t have a whole lot of time on my hands and if it takes up to ten minutes to receive this email, in ten minutes I may be outside or up the road, you know?
  - By the time I get home, everything that hasn’t been done around the house logistically, let alone paperwork, um...you name it. It’s gotta be done. And why do I wanna mess with trying a bunch of different login passwords only to have frustration, which [laughs] there’s already a lot of frustration in my day.
+ **Caregiver account access**
  - Being a caregiver, it would be nice to have my own login to see message sending, who he’s talking to, the doctors, whatever he’s saying. Because memory loss is terrible, so a lot of times I have to ask him, ‘Have you done this? Have you done this?’ So that I can see what the doctors are saying or doing. And then the information, kind of like my own little VA website for caregivers that has information for us that we can take advantage of.
  - [Caregivers], we’re supposed to have our own access and we don’t ….He’s supposed to be able to log in and look but I’m supposed to be able to log in under my own logon name and password to be able to see, too.
+ **Caregiver frustration**
  - I don’t deal with any of this nonsense over here [gesturing towards the sign-in partner options on MyHealtheVet].
  - I’m all about self-preservation of energy and time.
  - And in the caregiver world, something that’s done is more precious than gold.

### DS Logon is perceived as outdated and dysfunctional
+ **Users find the DS Logon disclaimers unnecessary**
  - So this is some craziness. I don’t know what this is all about. We have a premium DS Logon, so..and let’s just see if this works. Ok. [enters username/password]. Yep, it’s saying it’s not [error 11 on screen]
  - The first page I come to is where you [inaudible] sign in partner, which is this one. And then when I click that, the page says I have to accept their terms, and then it goes to the next page when I accept, and that’s where it gives me the opportunity to log in. So yeah, it’s a three-step process.
  - [Looking at the long page of disclaimers] Alright, why am I getting this crap? Just log me in. Now that you’ve gone through all this wonderful stuff, you have to click there. Which I have to scroll down to. Let’s see if it’s picked, saved the right one.
  - I mean, I’ve got all this stuff to get through every single time. It’s, you know, come on, let’s just login.
  - Scrolling through all this, this tiny little box down here. I have to wear my glasses to be able to see this. And it’s by selecting the check box and all of this. Every single time I login. Is that really necessary? Or can’t we just do it the very first time  that I sign up for DS Logon?

+ **Information is hard to find**
  - Very little information has actually come from the VA itself. I use a lot of forums, um Facebook groups, that helps me learn how to navigate, how to find certain things, YouTube videos.
  - I know that there are a lot of programs out there, there’s a lot of information out there, like in regards to assistance, different research programs, or even like telehealth, but it’s so spread out, you know you have to go to this website to see if you can talk to someone, or you have to go to this website you know to sign up for retreats or … it would be nice if there was a website that kind of compiled all of that, um instead of us trying to research it or you know a friend, another caregiver saying oh hey here’s this on this website, you know this is a great organization, call them email them text them you know kind of thing. It would be nice if it was just all in a website just for caregivers. And as far as I know that’s not available to us yet.
  - I’m in a wonderful wonderful facebook group and they have years and years of knowledge. Um and the one lady who I talked with, she actually referred me to you guys and she caregives for her dad and he’s a World War II veteran, and she’s just a plethora of knowledge. I can just pick her brain anytime, but I also know that she has to take care of her dad so she’s not available 24/7 even though she tries to be -- she’s super sweet. So it would be nice to log in at night and be able to talk to somebody and be like I can’t sleep because I’m so worried about this, you know, where can I go what can I do, so I usually just utilize the facebook group honestly for all of that.
  - And then I use to look for research and things that I can ask the VA specifically to provide us treatment options for my husband because they tend to put that information up for the nation before our local VA has the information.
  - You know, a lot of times I’ll use Google. You know, what form do I need to apply for, uh, the clothing allowance, you know, from prosthetics. And boom, the form number will pop up and I’ll go on here under forms and make sure I’ve got the current form.
  - And also make the search terms actually work cause you saw when I was looking for that letter you know proof of eligibility it didn’t really pull anything that was relevant. It pulled a bunch of other stuff that had some of the same words in it.
  - I usually, it takes me kind of a minute if not longer to find...let’s say I’m trying to take a look at my disability rating. After I get to the landing page here. There’s no direct place if for example i’m just trying to find the disability rating I just have to kind of go through a convoluted process of getting my VA medical records.
  - But it’s when I needed information that I needed, I couldn’t get it. And that’s not, you know...that’s..that’s just unacceptable.
+ **Insufficient information**
  - Once I saw the little prompt saying, “Hey, you can just login using a user and password” if you’ve been verified...you I don’t know, verified as an A-lister? Frequent flier at the VA hospital? I don’t know what it really stood for, um. But they just said, “Hey when you’re at the hospital, bring this. Print this out and someone will do something administratively and get you connected.” So that’s what I did.
  - What is a Premium account? I don’t care. What is a Premium account? Either I can login or I can’t. You know and I don’t need to know about that up front. If I can’t access something then I should have a message that pops up and says “you can’t access this because and here’s what you need to do in order to be able to access that.” But I don’t need to be told up front I’m, you know, here’s stuff about a premium account. Who cares? That’s not relevant to my experience.
+ **Outdated system**
  - This doesn’t happen in the rest of the world. This is a VA-unique thing, but that’s the story of my 15 years with the VA. That’s where this needs to work; it really really needs to work, and not be this difficult.
  - It doesn’t feel like it’s even close to any of the other things we’re doing for our kids’ medical records or to be able to look up e-records for any of our other activities or medical care in other places.
  - I see it work for others. Very large hospital systems, I mean maybe they’re not as large as the VA but they’re pretty huge, and it’s very helpful. I’m not sure why this is frustrating than that would be. But it is.
+ **DS Logon instability**
  - ...It takes us like an hour to get [expletive] done. And occasionally, like, occasionally, maybe twice a year, it’ll work right. But all the rest of it, it just seems like it’s a headache. We take the same steps every time, and sometimes it’s like welcome, here’s all your information. And other times, it’s like [expletive] you, I’m going to make it a 72 hour process and you’re going to have to give up your firstborn in order to get into the DS Logon website.
    - M: How often are you folks trying to login? You said twice a year it’ll work and the rest of the time it doesn’t? 
    - P: We try to log in probably four times a month, maybe?
  - I don’t use [eBenefits] as often, but sometimes you know an error times out or something, the website is down, and then I’ll just wait and come back the next day and try again kind of thing. It seems like I was trying to get on a couple weeks ago, or maybe a week ago, and it did that to me like all day long, and he was even having problems logging in from his phone, so we just kind of gave up for the day.
  - Usually they have the outage calendar, it says you can link it at the bottom…. You can see it started February 13 this year, and it’s scheduled to go to January 1st of next year. So it’s kind of a blanket excuse on why the webpage isn’t working, in my opinion.
  - It just happens. I’ll tell you, especially on a weekend, they seem to be doing a lot of updates. So you’ll see it a lot on a Monday morning, which I think is leftover from the updates they had over the weekend.
  - You know, I think it’s been ebenefits where I’ve had the most problems. But the thing about ebenefits is though it’s a VA DoD system, so I think that probably has something to do with it. Also I think ebenefits has the most usage. 
  - And then finally, trying to get in there and uh, get those letters, this was only...I don’t know, 2 weeks ago, maybe, trying to get those letters. And the system was down at one point, it was during the night. 
  - Things don’t work right, whether it be, you know, VA or social security or accessing my thrift savings account the other day, and they’re all broken. And frankly, it’s extremely frustrating.
  - And it’s for outage events. There shouldn’t be an outage event. Why in the world is there an outage event? And...I’ve experienced a number of those. And there shouldn’t be any, ever.

## Additional Findings
+ **Login support**
  - So if they have to access this information, they would need a caregiver to help them do that. They would need someone to walk them through this process. So maybe even a hotline that they could call easily, with big numbers, and someone would pick up the phone right away and help them, like, yes, let me help you do this, let me send you a code, let’s get into your account, that would be incredible. 
+ **Mobile access**
  - We try to do everything electronically with our phone
  - For me, I do a lot of stuff, almost everything from my phone cause I hate computers. 
  - Typically I am on my phone, so I don’t have to do this one too often … I have the log in to my phone already. I do most of the checking in off my phone.
  - My phone’s faster than my computer.

+ **Veterans have little memory of account set-up**
  - I don’t know, I was still just barely out of the hospital when these were set up.
  - That was a long time ago, I did that in person in Maryland...Oh golly, that was 7, 8, 9, 10, 15 years ago. I don’t know. Yeah, they looked at my VA card. I think I had to provide a DD214, or they had one. And they, somebody came along and validated it wherever I signed up. They validated it. I don’t think they required any further information because I was already receiving benefits and I was already in the system.
  - If I remember correctly they may have had to mail something to us with a code because it was so long ago I don’t know if you know cell phones, if they were using them to send codes. It seems like we had to wait to receive something in the mail so it could take some time.
  - ...You see down here if you need an account, upgrade to premium, see I did that years ago, but I can’t remember when.
  - For some reason I’m thinking with eBenefits I had to request a login and they mailed it to me. It’s entirely possible, it’s been a while. I first got service connected over 6 years ago. It’s entirely possible, when they said ok you’re service connected now you can go ahead and set up this ebenefits account. I can’t remember for sure.
