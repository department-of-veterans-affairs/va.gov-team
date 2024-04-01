# Compare Ask VA (AVA) to My HealtheVet (MHV) Secure Messaging (SM)

Ask VA VA.gov

Last updated by @tygindraux on March 13, 2024

Jump to:
- [What we reviewed](#what-we-reviewed)
- [Key task comparison](#key-task-comparison)
- [Next steps](#next-steps)

## Background

We recognize that there are similaries between My HealtheVet's Secure Messaging platform and Ask VA, which are both migrating to VA.gov. There are also some distinct differences in how they are used and current functionality.

We wanted to explore their research and designs to help inform how we understand Ask VA and which updates we make in order to make these products as consistent as possible, for the benefit of Veterans and other users.

## What we reviewed

We reviewed the following documentation to inform our next steps:
- **Research studies**
  - [2022-06 Secure Messaging Desktop and Mobile Usability (Round 1)](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/142#top)
  - [2022-10 Secure Messaging Usability (Round 2)](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/187)
- **Product documentation**
  - [2023-11 Secure Messaging Phase 1 Release Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product/phase1launch/Messages.Phase_1.overview.Before.After.pdf)
- **Designs in Figma**
  - [Phase 1 - SM (Nov 30th 2023 version)](https://www.figma.com/file/s1lAPraSoTHsevgl84SDoo/Phase-1---SM-(Nov-30th-2023-version)-%5BFigma-migration%5D?type=design&node-id=881-173601&mode=design)
 
## Takeaways

### Key task comparison

First, we compared key tasks that a user can do in Ask VA vs. Secure Messaging to help us understand similarities and differences:

![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Notes/Images/Key-task-comparison.png)

Then, we reviewed and annotated their documentation. You can explore our review in [this Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1707502811113/5ed5c3c6cb9f26595cb7d4fb62a8bebc598972f3?wid=0-1710184305056).

### Next steps

These are our next steps based on our review:

#### 1. Add messaging to direct people in an emergency

Secure Messaging and the chatbot both include more messaging about emergencies. We should include messaging up front that directs people in an emergency. We may also want to reinforce this messaging when someone chooses the health care category.

#### 2. Use similar language for similar links, buttons and headings

There are certain buttons and links we can make even more consistent with Secure Messaging, for example, 'Send.' Also, Secure Messaging calls their "dashboard" the 'Inbox' (which research supported) so we should remove this term from the 'Question details' page to avoid confusion.

#### 3. Test card view in Round 1 and consider adding list view later on

Although Secure Messaging uses a list view to support better scanning, we hypothesize that Ask VA users with few questions may prefer card view. We should test card view (without list view) in Round 1 of research before we decide whether to build list view in place of or as well as cards.

#### 4. Styling to help distinguish between read and unread messages

Secure Messaging uses styling and an icon (dot) to distinguish read and unread messages. We're not sure how this will work yet, with read receipt functionality etc., but we want to explore including style differences for read, unread and unread/hover that are consistent with SM. We don't think it's necessary to signal when there's an attachment in Ask VA.

#### 5. Newest to oldest order

We should match Secure Messaging's order in threads, which is newest to oldest message. Newest will come first and oldest will be last on the page. This means drafting a reply will sit above the rest of the conversation.

#### 6. Lead with date on messages and make it easier to distinguish sender

We think it should be easier to distinguish between messages in a thread. We will lead with date and time to match Secure Messaging, and because we think submitters are focused on how quickly something is resolved. Unlike Secure Messaging, we can't add a sender yet, but we could make this clearer by saying, "From VA" and "Your reply."

#### After Phase 1 Launch

We might explore:
- More advanced filters
- Ability to draft messages
- List view (if it's not already added before launch)
- Adding a sender (which may be a team or department name)

You can explore our key takeaways (including examples) in [this Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1707502811113/5ed5c3c6cb9f26595cb7d4fb62a8bebc598972f3?wid=0-1710272528770).
