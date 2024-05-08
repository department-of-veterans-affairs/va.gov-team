# Traumatic Brain Injury Guide
- Josh Kim ([originally on Confluence](https://vfs.atlassian.net/wiki/spaces/ACP/pages/2177892586/Traumatic+Brain+Injury+TBI))

## Introduction

[A traumatic brain injury, or TBI, is an injury that affects how the brain works (CDC)](https://www.cdc.gov/traumaticbraininjury/index.html). It can be caused by a:

-   Bump, blow, or jolt to the head, or
-   Penetrating injury (such as from a gunshot) to the head

**TBIs can be short-term to long-term.** For example:

-   Mild TBI or concussion may experience short-term symptoms and feel better within a couple of weeks or months
-   Moderate or severe TBI may have long-term or life-long effects from the injury.

[**TBIs can have many different symptoms ranging from mild to severe**](https://www.cdc.gov/traumaticbraininjury/pdf/Report_to_Congress_on_Traumatic_Brain_Injury_2013-a.pdf)**.** For example:

-   **Physical**: headache, nausea, vomiting, dizziness, blurred vision, sleep disturbance, weakness, paralysis, sensory loss, spasticity, disorders of speech or language, swallowing disorders, balance disorders, disorders of coordination, seizure disorder;
-   **Cognitive**: attention, concentration, memory, speed of processing, new learning, planning, reasoning, judgment, executive control, self-awareness, language, abstract thinking;
-   **Behavioral/emotional**: depression, anxiety, agitation, irritability, impulsivity, aggression and violence, acting out, noncompliance, social inappropriateness, emotional outbursts, childish behavior, impaired self-control, impaired self-awareness, inability to take responsibility or accept criticism, or alcohol or drug abuse/addiction. 
-   **Additional neuropsychiatric problems** associated with TBI include: apathy, paranoia, confusion, frustration, agitation, sleep problems, or mood swings

### Why does this matter?

[More than 430,000 U.S. service members were diagnosed with a TBI from 2000 to 2020 (CDC)](https://www.cdc.gov/traumaticbraininjury/military/index.html). 

### Staff Sgt. Brian Pearce's Story

[SSG Pearce lost his vision and much of his hearing](https://visionaware.org/emotional-support/personal-stories/veterans-personal-stories/staff-sgt-brian-pearce-usa-ret/) due to a **traumatic brain injury**. Pearce was struck in the back of his skull by a piece of shrapnel, and during a craniotomy to remove the fragments, nerves related to his sight and hearing were severed.

Brian's partner, Angie, commented:

-   "Brian needs help with managing his medications and sometimes with his clothing. It is a day-by-day situation."
-   "Brian is OK at home when I am gone a short time but I would not want to be gone overnight."
-   **"It has been hard for me and our children (ages 13 and 14). They have had a difficult time understanding what is going on with their father as he changes from day to day.** I have no family in this area."

## How do we design for TBI?

The [Web Cognitive Accessibility Working Group (WCAG COGA)](https://www.w3.org/TR/coga-usable/#kwame-scenario-1-using-speech-recognition-to-navigate-the-web) outlines 6 scenarios to consider when designing for TBI:

1.  Using speech recognition to navigate the web
2.  Finding the right words to use for searching
3.  Being confident they understand the content
4.  Understanding where information is in a hierarchical structure
5.  Cognitive overload
6.  Struggling with directions

### Scenario: Using speech recognition to navigate the web

Some folks with TBI have dexterity difficulties and use speech recognition to work through web pages and enter text. They may find this method the least tiring of all the possible input options.

**For speech recognition, the main tip we'll be covering is material honesty.** That means making your semantic HTML match your visual CSS styling. let's check out an example.

![Three buttons. Find a VA health facility, regional office, or cemetery, with a map icon. Talk to a Veterans Crisis Line Responder now, with a flag icon. Sign in or create an account to use more tools, with a person icon.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/19079af2-412f-4bdc-90c4-748f13f81318)


Consider a speech recognition user with TBI. Knowing what's a link and what's a button at a glance would help these users navigate the web faster... but are these all buttons, or is an imposter afoot?

![On the left, right-clicking on the Find a VA health facility button shows a link context menu. On the left, Fred from Scooby Doo takes a mask off of a perported 'ghost,' to reveal that he's a man.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/d64ae86a-43e0-4160-ae9c-da078aac9f39)


Like in the scooby doo episodes where they peel off the mask of a criminal, right clicking on the find a va health facility button reveals that this is in fact a link. 

The link was pretending to look like the other buttons, and that's material dishonesty.

More practically speaking, if a speech recognition user says, "Click button," only the last two here will appear as interactive because only the HTML code, not the styling, is interpreted by the speech recognition tool.

![Three UI elements that look like buttons. The Talk to a Veterans Crisis Line and Sign in buttons are selectable, but Find a VA health facility isn't, since it's actually a link.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/c0b90d83-d0be-46a8-92cd-2be7500f1f2b)


The Veteran doesn't know that though, and may need to process:

-   Why can't I click on the VA health facility button? The other two buttons work just fine.
-   Is it broken? Or do I need to try something else?

**This is still section 508 compliant though, so what's the big deal?**

You may ask.

Can't they use the other links in the header or footer? Isn't there a mouse grid too? You may also ask.

Well sure, they could think to find the other two find a VA location links on the page.

But that also means we're operating on the assumption that a Veteran at the intersection of using speech recognition technology with moderate or more severe case of TBI would be able to:

1.  Realize that a similar link exists elsewhere
2.  Scroll all the way up or down to the header or footer past overwhelming content
3.  Understand that "location" is equivalent to "health facility, regional office, or cemetery"

The little lies we tell for decorative purposes can force Veterans who already struggle with cognition to *think more* than Veterans who don't.

**And that just isn't fair.**

#### But how about the mouse grid!

...But they don't need to search for another link! You might say. They can use the mouse grid which cuts up the page into 9 boxes for them to click on until they reach where they need to go.

*Let's try that out:*
![A page on VA.gov, overlayed with a mousegrid. There are 9 separate squares, labeled by numbers 1 through 9, that the user can select.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/8684657a-ba89-41ec-9d33-d9cfc85e1c32)

A user may say “4” to start the mousegrid process to get to the button:
![A smaller mousegrid, after the user narrowed down the field.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/65334a78-0842-4f97-bd8d-4ace65f27081)

"3"
![The same page with a smaller mousegrid, after the user has narrowed down the selection. The Find a VA health facility link is now selectable.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/9b2e41d2-d397-424d-ab94-70f43a2e89d8)


Although this is technically accessible by all legal standards, the experience can be completely different depending on the Veteran's disability or preferred technology:

**Experience A**

1.  Use mouse to click on the "Find a VA facility" link button thing

**Experience B**

1.  "Click find a VA facility button"
2.  [Think about why it didn't work]
3.  "Mouse grid"
4.  "4"
5.  "3"
6.  "Click 3"

That's a strong reminder to us that we can create things that are completely accessible by all legal standards...but still fail to create equivalent experiences, like a 100% accessible entrance behind the building next to the trash.

![A ramp leading to a building entrance, next to trash cans.](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135633989/df2b7f70-8b18-49b2-a75d-45fe261fdb55)


### Wrapping up on material honesty

And that's why we *all* win with material honesty:

-   We don't have to paint concrete to look like bricks. Styling links as links removes the need for decorative utility classes and reduces engineering lift.
-   It encourages us to use existing components within the VA design system (as opposed to creating new ones).
-   Keyboard users will have an easy and predictable experience when they can use a space bar for buttons and the enter button for links
-   It becomes clear to everyone if they can open something in a new tab or not
-   And most importantly, we're making it easier for the most underserved Veterans like Brian Pierce and his family by providing an equivalent and inclusive user experience that isn't made more complicated than it has to be for our convenience or due to a focus on legal compliance instead of the experiences of disabled people. 

## Summary

-   TBI, and disability as a whole, is *complex*. If you meet one Veteran with TBI, you've met one Veteran with TBI.
    -   TBIs can be short-term to long-term and mild to severe
    -   Symptoms can be physical, cognitive, or behavioral 
-   TBIs can impact a Veteran's family and caretakers too
-   [Learn more about TBIs at the CDC](https://www.cdc.gov/traumaticbraininjury/index.html)
-   Boring before magic. Use plain language and focus on simple, materially honest experiences.
-   Section 508 compliance does not guarantee a good, or even equivalent, experience. 
-   Prioritize Veterans with the greatest need. It will make things easier for everyone.
