# Useful Links

1. General Research Process Things

    1. [Research Lead Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/lead-researcher-checklist.md)

    2. [Research Planning Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md)

2. For This Project

    5. [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/mar-2018/conversation-guide.md)

# Agenda

1. Fill in Recruitment issue with project criteria

2. Walk through design as it stands

3. Anything else?

# Discussion Notes

1. Testing prep

    1. Looking at having sessions week of 3/19

    2. Concern about getting an end to end clickable prototype together in time - might be testing piecemeal rather than the whole thing

        1. Form functionality in live code definitely won’t be ready

    3. interested in starting from the homepage of vets.gov, information architecture, etc.

    4. Content updates

2. The design - can reference [this prototype](https://adhoc.invisionapp.com/share/9MFXXQTUGDK) (but note it’s only for claims for increase, not new claims) 

    5. Different claim types

        2. Original claim

        3. Supplemental claim = anything later, assuming you got approved for something in the first claim

            1. New condition

            2. Secondary condition - based on one of your already established conditions

            3. Increase claim > our first MVP, some rated claim has gotten worse

                1. 10% of the claims fall into this

                2. It was simpler for us to start from and build this

    6. Now

        4. Building full form, capturing new and secondary claims

        5. Triage at the front - "what kind of claim are you making?"

            4. We only have one type in scope

            5. Want to only show people questions relevant to what they want to do

            6. Will point people to the right place on vets.gov

    7. Flow

        6. People come to us with one scenario

        7. Can they get to the right place via static content, then eligibility wizard?

        8. ITF (intent to file) at the beginning

            7. Sets the initial date as the effective date to which you will get back-paid for the disability

            8. Expires after a year (if you don’t submit your form within a year, it expires)

            9. Communicating this is key

        9. Applying - different scenarios

            10. Increase

                3. We already know a lot of detail about the person

                    1. Address

                    2. How they are getting compensated for their disability already

                    3. Military service history

                    4. Rated disabilities already in the system

            11. Original claim

                4. Need to collect a lot of information that we don’t have

                    5. What disabilities do they have?

                        1. Is it service connected?

                        2. Is it connected to another disability?

                        3. (probably build a list and then loop through)

                    6. Trying to get some from other backend systems, but might not be available

                    7. Lots of forms

        10. "Personal flash" questions - in crisis or thoughts of suicide, danger of homelessness

            12. Still trying to find out from stakeholders whether we can provide more proactive help if someone answers yes

        11. Moving address 

            13. Most communication from VA is done by mail, can take a long time, and if someone moves, they can miss info

            14. Currently low compliance at VA with adding future addresses for a person moving - seeing if they can improve their processes, because it’s useful if VA follows through with it

        12. Collecting evidence for the disabilities

            15. Some upcoming stakeholder conversations will inform it

            16. Choice of how to provide medical records

                5. Upload your own copies (of medical records)

                6. VA gets medical records for you

        13. Associated forms

            17. Modifications to car or home for disability?

            18. Institutionalized in a care facility, confined to home where caretakers come - separate forms to get benefits for that

                7. Initially just pointing to those forms

                8. How do we get people to the right forms to fill out and get the info back into our system?

        14. Exam scheduling (to assess level of disability): will work differently

            19. With increase claim: they schedule exams for things that are supported by your statements

                9. Vendor will call you - try twice

                    8. If they don’t reach you, they just pick a date

                    9. If you can’t make that time, there’s not a good channel to communicate back to VA

                    10. If you miss the appointment, it has a negative impact on claim, tagged as a no-show, and claim can get bounced

                    11. *Can we get availability from the applicant in the form beforehand?*

                        4. Decided to be too big of a lift for now

                        5. Other initiative for 60 day claims

            20. With original claim: need to deal with a pause. Make a submission saying "I need these exams", VA makes a decision (pause - maybe, need to clarify with stakeholders), you go to the exams, need to do something before you submit

        15. Claim received screen

            21. Can print it

            22. Can’t get back to it after you leave it

            23. Links to a general "after you apply" page

                10. Shows current expected time to respond

3. Task flow diagram to visualize the steps - Alex working on it

4. Recruitment

    8. Can participants use their mobile phones for this (laptop hugging style)?

        16. Could do it, but might complicate logistics since they’d need a laptop with a webcam to do laptop hugging

        17. We can send a mobile prototype

        18. Alternately, could use GoToMeeting as usual

    9. People to recruit

        19. Mix of people who have experience with disability compensation and people who don’t

            24. We talked with people who had at least started a claim last time

        20. Do we want people with actual disabilities?

            25. Probably yes. We would learn about their scenarios

        21. What percentage of people who have disabilities have not filed claims?

            26. One person we know about didn’t apply until going into the reserves because he didn’t want to get denied for being able to do his job

        22. Some people who have used eBenefits and can speak to the difference between this process on Vets.gov and eBenefits

    10. DS Logon?

        23. We are going to test in prototype form, so not necessary

5. Research goals

    11. eBenefits works, but it’s frustrating. High stakes questions. Worried their answer may damage their prospects

    12. Want to provide understandable and supportive interface

        24. Where do people get confused?

        25. Do people end up in the place we think they should end up?

    13. Understand how people get to the benefit when they come to vets.gov

        26. When they get to the section, are they able to get the information they need

        27. Can people find out if they’re eligible?

        28. Understanding what happens next after the application - how much do they understand the overall picture?

    14. Note that we did some testing on increase flow

        29. New claims haven’t been tested yet

    15. Compare the experience to eBenefits

        30. Feelings of being overwhelmed

    16. People might have a mix of new and increase claims: what is their experience with a complicated situation?

        31. Primary & Secondary claims

            27. Secondary: not directly service connected

                11. A condition that comes up as a result of an injury received in the service (a knee injury as a result of walking with a limp for a number of years)

            28. Residual claims

                12. Exposure to agent orange makes you more likely to develop diabetes

    17. Nomenclature: how do we clearly communicate? How much should we plain-language? Does it make it less clear if we’re using non-VA terms but the VA terms are important elsewhere? 

6. Universe of possibilities

    18. Claims for increase not likely to change since we are far along in building it, we did a round of testing on it already, and we can learn more once we release it

    19. First flow (new claims): just about everything is on the table

        32. Scheduling: it’s a real and perceived pain point, but technically and politically, we can’t do much to change it in the short term

            29. However, feedback will still be useful, maybe long term

7. Next steps:

    20. Mike & Kristin can regroup 

