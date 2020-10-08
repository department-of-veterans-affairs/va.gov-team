# Samara's design feedback

## Feedback 10.8.20

**General**

- Don't forget to add "My VA" back into the main nav!!
- My VA has a breadcrumb (you can check how we handle that in staging), so you'll want to add that back into this page.

**Name tag**

- Since this page will now have a breadcrumb and therefore whitespace between the name tag and navigation, I think we should make the nametag area dark gray again. It pops more and looks more refined/finished.

**Health care overview**

- This looks so good. I love it!!

**Appointments**

- This was mentioned in the platform team meeting, but please replace the CTAs here with "View all appointments." However, if there are no appointments I think the CTA should remain "Schedule an appointment." That should be no problem for Erik and Sandra to handle conditionally.
- I realize we talked a ton about tables in the platform team meeting, but could I see a treatment here where the appointment data appears stacked and not across a row? This is what I mean:

> **Next appointment**
>
> Dr. Shakatullah Shah Ansari
> Wednesday, October 1, 2020
> 2:00 pm EST

To me, it would be much more natural to view this information like so (whereas I think we're used to seeing emails/messages in a table-like view, so that makes sense). I realize I'm not the user, and we should validate everything, but I would love to at least see how you might handle this in a mockup.

## Feedback 10.7.20

**Overview area**

*Enrolled view*

- Thank you for removing the information I asked you to remove. 
- I think you can handle this area more elegantly. You're repeating a lot of information. With the large "Health care" heading, "Your VA Health Care" and "You are enrolled in VA health care" become redundant. By this section being there, the user knows they are enrolled in VA health care. How can you clean up this section? This pattern does not need to be reused for people whose applications are incomplete, rejected, or closed or people who haven't applied.

*Not enrolled*

- This feels like the information is floating out in the middle of nowhere. I realize this changes some things in the data spreadsheet, but this is how I think we should handle this section:
  - If a peron has not applied, **do not show this section**. We can include messaging on how to apply elsewhere on the page.
  - If a user has applied but their application is either incomplete, rejected, or closed, we **should** show this section with that application status.
  
**Appointments**

- I'd like to see how you would handle multiple appointments.

## Feedback 10.6.20

### Section: Health care

First, things look GREAT so far. I'm so excited to see this work, and I think it's off to a great start. Overall, I LOVE how streamlined everything looks. It is a way more efficient presentation than what we have on My VA. You both should be so proud!!

**Overview area**

Overall, I'd like to simplify this section and have it take up less real estate. Here are some thoughts that might get us there:

- I thought we had talked about **not** including preferred facility for now. We are currently pulling it from the HCA, which often has out-of-date information since it does not account for facility updates that happened after someone filled out the health care application. We **are** going to eventually have preferred facilities in the VA.gov profile, but we don't yet, so I'm inclined to say take it out and we can figure out how to handle that data later.
- I am questioning whether we need "applied on" date for people who have enrolled. I know I told you to keep that from the My VA dashboard, but on second thought, it doesn't seem very helpful for people who are already in the health care program. However, I do want to keep the date someone enrolled on. 
- I also think we can remove the "find your nearest facility" link since the Facility Locator tool is very prominently placed in the main navigation.

So, with those suggestions, that would leave us with this section including:
- Someone is enrolled in VA healthcare since X date.
- A link to more info on VA health benefits.

As a result, this overview area might look a little different than the other cards, or not be a card at all, and I think that's OK.

**Appointments**

- What happens if someone has more than one appointment, or too many to list on this page?
- Why did you choose "view previous appointments" as the secondary CTA? Why not "Schedule an appointment"? 
- On that note, we **do** need a "Schedule an appointment" CTA, and I personally think that's more important than viewing previous appointments, but we can discuss.
- I realize you haven't worked with copy yet, but the code can accomodate singular/plural instances for the status of "You have one new appointment" or "You have two new appointments."
- For time, do we need to show timezone? If you haven't already, could you confirm how the data is shown in VAOS? Feel free to ignore if you already have checked.

**Prescriptions**

- I love how succinct this block is!
- Don't forget you need to show the submission date if a prescription has not yet been filled.
- What happens if a medication has a really long name?
- Probably an accident, but the "View your prescriptions" button should be aligned with the prescription names.

**Lab and test results**

- Let's leave this as-is for now. Depending on other changes to this page, I could see us changing how we treat this area, but I think we can adapt based on what we need to do with the other more critical content.

**Secure messages**

- Did you talk to Erik/Sandra about if there is a way to indicate which messages are new or not? We should confirm if we can show that.
- If we **can** determine which messages are new, we should determine whether unread messages should look different. I don't have a strong opinion on that, just something to think about.

**Other visual design feedback**

I really, really appreciate that you focused on the layout and interaction aspects of this section, and all of this was exactly what I expected to see. However, now that the meat is mostly here, I do think there are some opportunities to add a little more visual interest. None of this is mandatory, just suggestions to consider:

- On the logged-out homepage and on all the benefit landing pages, we have icons for all the major benefit categories. Can/Should those be incorporated here? 
- The status-y messages on this page, eg. "You have 1 new appointment", "You have 3 active prescriptions," etc, look like headings right now. Could we style them information in a way that calls them out a little bit more? I think this could be a place where we have a little fun a bring the design system forward.

Please feel free to hold off on these kind of details until you're ready for them. No rush, but wanted to make sure you had these thoughts for when you're ready to consider this level of detail.
