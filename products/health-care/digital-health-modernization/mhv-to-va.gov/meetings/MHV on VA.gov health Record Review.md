# MHV on VA.gov health Record Review

# Meeting Details
 - Meeting Date: 4/3/2023 07:00 AM Pacific
 - Location: Microsoft Teams Meeting
 - Participants (8)
	 - [Josephs, Meredith S. (she/her/hers)](mailto:Meredith.Josephs@va.gov)
	 - [Alexia Wunder](mailto:alexia.wunder@bylight.com)
	 - [Bobby M Bailey](mailto:robert.m.bailey@bylight.com)
	 - [Bunney, Coulton A.](mailto:Coulton.Bunney@va.gov)
	 - [Shah, Nilesh H. (he/him/his)](mailto:Nilesh.Shah@va.gov)
	 - [Hancock, Theresa M. (she/her/hers)](mailto:Theresa.Hancock@va.gov)
	 - [Lipscomb, Bresha T.](mailto:Bresha.Lipscomb@va.gov)
	 - [Sanders-Brooks, Deborar M. (VHAJAC)](mailto:Deborar.Sanders-Brooks@va.gov)

## Notes


-   Coulton: We've been working with Bresha on the business side; Lexi and Bobby are leading the design. We want to talk about the clinical side today and get your feedback/critique of this before we take it elsewhere.
-   Dr. Josephs: How many clinicians have seen the product so far?

	-   Coulton: Dr. Evans in the beginning, and we have been referencing USCDI V1 and V2 to understand the standard and the minimum amount of information. We recognize the more we align to that, the smoother it will be including Cerner data later.

-   Coulton: We wanted to start by explaining how MHV works today, and then dive in to Labs and Tests and other areas if time permits. How familiar are you all with MHV?

	-   Dr. Josephs:  I got access last week, I've been reviewing it, and I have it open now.
	-   Dr. Shah: I'm pretty familiar. I use it frequently to message patients. I've also started playing around with the patient side.

-   [Coulton walks through legacy]

	-   Coulton: BB is the OG way to display data
	-   Dr. Josephs confirms that BB is a PDF not a CCDA (Coulton confirms) She has downloaded a BB report saved and did her homework for this meeting.

-   [Coulton walks through the prototype]

	-   Dr. Josephs: What do you mean that landing page will go away?

		-   Coulton: Eventually, there will be a new landing page that encompasses all of the domains so we won't need this, but for right now, medical records is an island for phase 0.
		-   Dr. Josephs: Ok, light bulbs are going off. Everything is going through Phase 0 to 5 but everything will be launching will be at separate times; the whitelisted cohort may or may not overlap; there is no connection between Phase 0 for SM and MR. Is there any easy way for users to get to SM if they wanted?
		-   Coulton: There will be links to legacy eventually. We will connect everything, but we need to give each one the space it needs to move at different speeds.
		-   Dr. Josephs: Will they all connect at Phase 4?
		-   Coulton: We're still working out the details, but in Phase 2, we can start connecting them. We will probably start getting feedback asking for the tools to work together better and that will prompt us to work faster.

-   Coulton: Framing Labs and Tests like this because it will include non-lab and non-imaging tests, like EKGs. Right now MHV doesn’t include any other non-lab and non-imaging tests other than EKGs, but we are unsure what the other possibilities are. For the first iteration, we want to get the data in, and then add the optimizations in later.
	-   Dr. Josephs: For phase 0 it will be in reverse chronological order and it goes back as far as they have records for?
	-   Coulton: Yes. One of the issues with current MHV is that they have to load everything at once, but now were going to load 10 at a time and paginate them so we are able to offer them all at once.
	-   Dr. Shah: There can be other procedures that have results, like endoscopies.
	-   Dr. Josephs: You say hem or chem, but there should be a lot of others, like ESRs (?). We'd need to check with lab to see if antibodies are laboratory for example.
	-   Dr. Shah: The national director of Labs should be your SME for this.
	-   Dr. Josephs: There are procedures like echos, Holters, stress tests, etc., we should talk about where we're putting procedures.
	-   Coulton: I wanted to talk about notes too, which includes procedures, but later.

-   [Coulton continues walking through prototype] Health History tested sort of ok. I don’t love it. We're going to do further testing. The IA might flatten out, and all the categories will appear on the left.
-   'Share your medical record' includes functionality that compensates for the primary functionality of what MHV has today, but we want to encourage going to the HTML version instead of this section because it's faster, more accessible, etc.
-   Care summaries and notes: Mystifying.

	-   Dr. Shah: I'm curious when you interview patients, what they say about this topic. 'Care summaries and notes' sounds clear to me, but most other portals say 'visit notes'. Like my own patient portal does this.
	-   Dr. Josephs: I had an amazing time this weekend playing around in my husbands MedStar Cerner portal. What jumped out to me, was that I think care summaries vs. notes vs. consults are all things we are pulling from USCDI.
	-   Coulton: Yes, there will be some in V1 and others in 2.
	-   Dr. Josephs: What also jumped out to me was how radically different it was from the last time I saw his portal. So by the end of this coming year all health system need to be compliant. OINC requires that we all have the tech ready by the end of 2023.  There is a business aspect where private health systems don’t want to share data though. There is now an entire new section in this portal with a filter for AVS, which I could never get. In the private sector, it was what the doc was comfortable sharing, but it didn’t have the detailed notes, but with VA you're sharing everything. I think Dr. Shah's question is great and we can ask the patients what they want to name them but at the end of the day, OINC will be the guide.
	-   Dr. Josephs: I can ask my husband to walk us through his portal for you if you'd like.

		-   Coulton: Yes and I would love your commentary on it about what you like and what you don’t.
		-   Coulton: There are all the categories, and the titles of the notes vary wildly across all the Medical centers. The type of note can be very different from the title. This can be an issue. We are limited by the data.
		-   Dr. Josephs: I use Cerner to provide patient care. They've standardized what you're calling your notes, but then I amend it. For example, the main one is "Office Visit" but then I put a suffix on it to say what type of visit it is. For me as a clinician, I want that suffix so I can easily search through all of the lists.
		-   Coulton: There is a delta between what we have and what we want to offer. Procedure information (note and record) are not in BB but they are in the CCD/Health Summary. VAOS presents the appointment, but not the notes.
		-   Dr. Josephs: USCDI requires it so we want to go in that direction. But getting it from Vista is going to be the challenge right?
		-   Coulton: Correct. We want to get all the data we can for now, but then we will continue to add more and more to follow what needs to be included. Ultimately, a Veteran can submit an official records request where they can submit something to get all that information.

-   [Continues walkthrough for Vaccines/allergies/health conditions]

	-   Regarding Health Conditions, we've been told getting this information is going to be a mess because there could be multiple entries for back pain or asthma, etc.

		-   Dr. Shah agrees.
		-   Coulton: And we know it's not at the top of every doctors list…
		-   Dr. Josephs:  It is at the top of my own OCD list, but most of the charts I open and see, it’s a mess.
		-   Dr. Shah: People put in things like "general exam" and that shows up on the problems list. A lot of things get repeated.
		-   Dr. Josephs: With Cerner, you need to enter something in your problem list in order to make your plan, and there is a box to toggle and you choose if it is a visit thing or a chronic things.
	-   Coulton: What is SCT?

		-   Dr. Josephs: SNOMED CT (Systemized Nomenclature of Medicine - Clinical Terms). Epic, athena, Cerner, all use these codes. It's a problem because they're used to ICD 10 (International Classification of Diseases, Tenth Revision (ICD-10) is a system used by physicians to classify and code all diagnoses, symptoms and procedures for claims processing.). There isn't an easy way to convert SNOMED to ICD and back. You need to learn SNOMED.
		-   Dr. Shah: To enter something into a problem list, you need to search the SNOMED code. Then the ICD.
		-   Dr. Josephs:  The same goes for Cerner.
		-   Dr. Shah: This is a pain point for clinicians because you have to search for the code twice. But this probably won't be a problem for you.
		-   Dr. Josephs: Your pain point is going to be that the Veterans are going to hate it because its pulling in that data that's irrelevant to them.

-   [Continues walkthrough for Vitals]

	-   Coulton: We don’t a couple get measurements, but one is for infants.
	-   Dr. Josephs: You also need to include BMI.
	-   Coulton: Pain level is in MHV today, but isn't in USCDI. So do we want to continue making pain level available? We have some things that are available in MHV but are not part of the USCDI standard.
	-   Coulton: I think there is a consistent scale across the VA for pain levels [Dr. Shah nods in agreement].
	-   Dr. Josephs: USCDI doesn’t even have pain level in the draft Version 4 which I'm surprised by.
	-   Dr. Shah: Pain was added as the fifth vital sign by The Joint Commission in 1994 partially in response to the opioid crisis, so it's somewhat controversial. I personally don’t think it's very necessary to keep it, but I'm not the decision maker for this.
	-   Dr. Josephs: We need to figure out what fields we want to include by asking the right SMEs. By only making the decision on the program level, we risk excluding the field clinician input and expanding the timeline when they do ultimately provide feedback. And if we only include field agents, then we risk straying from policy standards. We need to strategically put together the sweet spot of SMEs.
	-   Coulton: Yes and we would love your guidance on that. We could have this conversation for an endless amount of time, so it's imperative that we get the right folks involved now.

		-   Theresa: The process to date, we would get a group of physicians together, they provide a recommendation, we take their recommendation to the Primary Care Field Advisory Board, and they make the ultimate decision. So we need to gather the clinical champions to get the recommendation. In the last 20 years, I've gotten a decision the same day. It is a board that says yay or nay. However, we are stuck with that decision that gets made. We've never done rework.
		-   Coulton: So how do we get there? Who are the SMEs? What are we including and not?
		-   Theresa: I gave a list of SMEs to Lauren.
		-   Coulton: We will alter that list based on Dr. Josephs' and Dr. Shah's feedback.
		-   Dr. Josephs: It is OUR office that hosts the team
		-   Theresa: It is all our office making decisions. We last tapped into this group 5 years ago. The primary care field list needs to be looked at. My team will look into it.

-   [Theresa's questions from the chat:]

	-   Are Allergies also listed under medications/pharmacy?

		-   Coulton: Yes. We will include those when we get to medications. Dr. Spahn and Dr. Layden outlined those requirements for what needs to be presented.
		-   We aren't including medications in MR - That is our next vertical. We have SM, MR 9MR is a weird name because it is all technically a medical record…) and then we have Medications.

	-   Can sort on these by dates/providers?

		-   Coulton: eventually yes. Our first iteration is to put all the data on the page in reverse chronological order, and then once we get that out, we will test it to see what users want. There may be different types of sort and filter functionality for different parts of all the domains.

		-   Dr. Josephs: For your ideas for later iterations: For Cerner, Athena, Epic: you can see all your CBCs in one place, and you can see them in a graph format.
			-   Coulton: I assume we will be able to do that eventually because we can link all the CBCs together. But that's a question still…
			-   Dr. Josephs: There has been a push to get all labs to adopt LOINC coding, but they may not have.
			-   Coulton: My hope is that will be possible in the majority of cases.

	-   Is there a way to see by encounter not by all BPs only?

		-   Coulton: We did some initial tree testing and asked folks to find a specific note, and we found that more folks ended up going to care summaries and notes rather than their last visit list. Our idea here is that eventually you can see the flat list of all your domains, and link them to where they originally were ordered. I.e., Here is my appointment, the notes, and the labs from that visit - all together.
		-   Dr. Shah: The lab part would be harder because the lab might have been ordered after the fact. But yeah having them all linked together would be great. Dual functionality.
		-   Coulton: The official "home" would be here, but then link it all later.

	-   Are you including Vista and Self-entered data?

		-   Bresha answers: no, not in Phase 0

-   [Continues the walkthrough of the Lab/tests domain Brief]

	-   Coulton: I wrote a description of that data in OUR words so that you can correct us from a clinical perspective. Wanted to do this selfishly so you can check us.
	-   Coulton explained our data understanding of the difference between how the data is mapped. The fields we are getting today. What we receive in MHV today, and what is/isn't included in USCDI.

-   Dr. Josephs: I have no questions, but we need to land on next steps. When I look at USCDI V1 and V2, what jumps out to me is that it is just called "Laboratory" and that USCDI has a descriptor for each category. I call things like EDGs(?) and colonoscopies 'procedures,' but USCDI calls them clinical tests?
-   Dr. Josephs: What do you need for next steps?

	-   Coulton: To understand what data we have to get together to feel confident in presenting it to the next SMEs, like for labs. Who do we need to talk to get that SMEs stamp of approval; and how we want to present this to them. And then coming up with that process for all the domains.
	-   Theresa: You have the lab list of POCs.
	-   Coulton: Yes, we want to make sure this work is in a good enough place before we reach out to that team.
	-   Dr. Josephs: Our office will get that group together to get you want you need.
	-   Coulton: Yes we want to get that list of POCs together, send YOU what we have to get your feedback, and then schedule that SME meeting.
	-   Dr. Josephs: From a technical perspective, do you have to name everything the same? We absolutely have to comply with USCDI. So you need to figure out if we have technical wiggle room to check the compliant box but with our different names, or do we HAVE to use all the exact names per the standards. I want to know the level of flexibility we have.
	-   Coulton: How it is represented in FHIR will be able to help us get that understanding. I will sync with our new FHIR expert to understand that better and get their input.

		-   Theresa: John Moehrke is available from MHV technical team if needed.
		-   Dr. Josephs: Are our Lab SMEs ready to go?
		-   Theresa: Yes. Bresha will also help gather them.
		-   Dr. Josephs: Do any of them include lab informatics work?
		-   Theresa: I think so yes. There are 5 people.
		-   Dr. Josephs: Will you verify that and make sure we have somebody with that background?
		-   Theresa: Yes.

-   [Coulton reiterates next steps/action items]

	-   Coulton: Will focus on labs and tests only first. I will put this all into a format that can be presented to that group of SMES;
	-   Coulton: I will research the USCDI vs. FHIR vs. MHV data question to make sure we can speak to it;
	-   Coulton: Will resurface the list of POCs and send it along, and Theresa can correct it and add anyone else;
	-   Then when we are aligned with this group internally, we can schedule the next SME group meeting;
	-   Then we can focus on and repeat the process for the rest of the domains.
