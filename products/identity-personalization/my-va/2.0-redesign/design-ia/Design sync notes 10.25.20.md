# Design Sync notes from 10.25.20
Following last meeting, we have narrowed down the approach to two primary options. Listed here as "Simplified" and "Detailed".
This document will discuss some of the proposed changes to each option, general feedback, questions to be answered, and next steps.

## Option 1: Simplified
### Feedback
Change "View updates" or "View" anything to to "Go to". (Accessibility reasons)

Potentially change "You have 3 new updates" to "Your recent activity"

Potentially consolidate "Dashboard" and "Overview" into one heading "Dashboard"

If user has none of something (ex:healthcare related actions), instead of saying 0, we can say 
"You are not enrolled in healthcare" or "Enroll in healthcare".

If user has some of a section (ex: healthcare, they have 0 messages but 2 appointments), we can have CTAs that say "Send your doctor a message".

Ryan prefers this approach
- It will be great once we turn on notifications/other types of notifications
- Believes this will scale better

### Questions to be answered

Will we rank subcategories by importance? Ex: # of actions
Ex: Within healthcare, if we have no messages, no appointments, but 1 prescription…do we move prescription to the top? 
- Ask Lauren Alexanderson (MyHealthyVet structure). 
- Investigate using some of the same UX icons. 

What does the empty state look like?

Will messages go away once user views them? 
How do we want to handle this?

[Insert mock]

## Option 2: Detailed
### Feedback

This is the accordion option.

Appointments: View list chronologically by status

We don’t need the “Go to recent activity/updates at the very top”.
- Test w/o it first. If Vets request it, test the option with it.

Pros
- Don’t have to go to the tool to see your stuff
- Detailed: 1 click to get to detailed info

Cons: 
- Becomes a problem when you have a lot of stuff
- Feels less like a dashboard

[Insert mock]

## Next Steps
- Make recommended changes
- Start working on all states
- What does the news feed section look like?
- Get answers to questions listed above
- Think about the journey, start on non-logged in VA page, what does the flow look like?
- Ryan believes testing both options is not necessary and we should focus on the Simplified option.
- Determine if we will test both options first before moving forward.













