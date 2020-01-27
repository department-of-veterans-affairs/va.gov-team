# VSP design intent check-in

## Attendees: 
01/21/2020: Rebecca Walsh, Riley Orr, Shawna Hein, Mikki Northuis, Crystabel Reiter, Kevin Hoffman, Emily Waggoner
01/22/2020: Rebecca Walsh, Riley Orr, Jennifer Strickland, Trevor Pierce
01/24/2020: Rebecca Walsh, Riley Orr, Nick Wygoink, Matt Self, Peggy Gannon

## Background:
Our team, Benefits & Memorials 2, is working on modernizing the digital mechanism Veterans use to order medical devices. Practically, this means working with Veterans to design and launch a new ordering mechanism on the VA.gov platform.

## Purpose:
The design team working on the MDT is syncing with the VSP design team to go over the problem space, the work that we have completed thus far, and the team's next steps. The VSP design team will provide feedback about our current work and guidance on components from the design system to implement, other work that could impact ours, other teams to followup with, etc. 

## Outcomes:
The design team will take action on any feedback or suggestions. 

## Structure:
- The design team will provide an overview of the project and problem space and present the current work completed (15 min)
- Open discussion with questions, feedback, next steps, etc (15 min)

## Notes
**Note:** This document will be updated with additional feedback from the [associated ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4963) when applicable.

### 01/21/2020

**Notes from meeting**<br>
- Kevin Hoffman: Mentions to check out Ryan’s sketch file with interactive cards (Crystabel has sent us the updated Sketch file)
- Shawna: Should schedule a sync about checkout experience with Samara's and Jim's teams (Authenticated experience & e-benefits) 
- Emily: What communications do they receive with this? Do they get communications from eBen? Are we able to contribute to how that communication is written? 
- Hoffman: Confirm the email address that you want it sent to on the confirmation page. In the larger scale, accurate emails is a big concern so we may want to create a pattern around this issue.
- Emily: Samara’s team has worked on address management, connect with them on that portion of our flow. Flag that with the development team on whether or not that will be possible.
- Shawna: DLC is syncing with Vets360, according to the slack threads she read (She has tagged us in this thread!)

**Shawna's notes from ticket**
- I'm wondering about the broader topic of where "ordering status" might live on logged in VA.gov, and if it makes sense to have it not directly tied to medical devices. I'm going to take a todo to schedule a meeting with Samara/Tressa/Jim and Becca/Riley to talk about this topic. @emilywaggoner @KevinMHoffmanUSDS I'll add you as optional.
- I liked Kevin's idea of confirming email address at the end of the flow, with context. Like "we will send updates to your order status at this email address. If this isn't the correct address, change it here"

### 01/22/2020

**Notes from meeting**<br>
Jennifer:<br> 
- Accessibility team will need to talk to devs about semantic markup
- Focus management needs to be taken into account for designers’ handoff

Trevor:<br>
- Editing on address: flipping it over to editable is no good. We need to set focus on a heading that reaffirms what is being edited, so that intent is communicated through the screen reader. If you change something and press save, set focus to a saved/successful message. If edit is cancelled, then that status will need to be communicated again.
- Order confirmation page: do you imagine that having a receipt / print out? If we can do that with CSS/print styles, that would be best. (Reach goal)
Jennifer: <br>
-Do we have print styles in our components? [No]
- I implemented print styles at my last job, and it isn’t so straightforward. Browser differences. Attach a unique ID to this particular form confirmation so that we have defined print styles defined.
Riley: <br>
- If we have the bandwidth for [print styling receipts], how do we do this? What are the next steps?

Jennifer: <br>
- I can talk you through that, designers should have a design for what it will look like when it’s printed. Strip out images, colors, and make it fit on one page. I can talk to developers about how to create the styles.
- Print styles are a long term goal with a lot of hurdles.
- Make sure the helper text is short
- Adjust the contrast on the subway map bubbles

Trevor: <br>
- Left/Right/Left and Right confusion.

Additional notes:<br>
- If going with the third content page option (with accordions & redirect button): 
   - Split order by mail and order by phone (for tracking purposes), put the content below the FAQ accordions and have no smooth scrolling.
- Need to consider focus points in our mockups, even with interactive components 
- A11Y team needs to sync with the dev team for semantic markup

**Jennifer's notes from ticket**<br>
- have devs connect with Jennifer before building, in order to get the semantics right (especially for deafblind use case)
- confirmation screen - possibility of print styles? happy to help with this
- there is a known bug in the subway numbers color contrast
- great job of starting with mobile, and extending learning to the desktop view! Thank you!
- if the info in the accordion items is short, consider not using the accordion.
- an anchor link can't open an accordion
- On this page component may be helpful vs the accordions for tracking clicks. [Example](https://www.va.gov/pittsburgh-health-care/health-services/)

**Trevor's notes from the ticket**<br>
- Focus management for the inline edits will be important
- When users press Edit, do they know what they're editing
- Where does focus go when users press Edit? Is there a heading to hook into?
- Where does focus go when users press Cancel? Probably back to Edit at that point.
- Is there a confirmation message if the edit was successful? Does that receive focus?
- Print CSS for the order confirmation page
   - [CSS Design: Going to Print](https://alistapart.com/article/goingtoprint/)
   - [Print It Your Way](https://alistapart.com/article/printyourway/)

### 01/24/2020

**Notes from meeting**<br>
- Peggy says most of the vital SEO elements would be towards the top of the page 
   - Isn't concerned about implementing accordions on the content page 
- Reach out to Jen Lee & public websites team after a more comprehensive mockup is created
   - Can create two options: 1 with accordions and 1 without accordions and then meet to discuss
- Create collaborative doc for content and share with Peggy 

## Next steps 
- Reach out to both Samara and Jim
- Review feedback from VSP team and incorporate into our mockups
