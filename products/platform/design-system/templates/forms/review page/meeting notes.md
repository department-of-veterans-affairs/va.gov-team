# Meeting notes

- [Figma](https://www.figma.com/design/kBH2U6bfC6sA9Fim3gcnuc/WIP---Review-Page---Edit-by-page?node-id=311-16256&t=z7eKVHApiZcbNdVs-11)
- [Mural user flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717682397715/9fa45c5ed6119646a8bd192cde055ffdfc246731?wid=0-1717771223511&outline=open)

## 08/20/24
Jeana met with Engineers & UX to preview the current state of the review page. 

Here are concerns that came up in the meeting:
1. Engineers are concerned about providing "not provided" for empty answers. No questions on the review page are marked as optional or required. Is there another or better way to display this. Maybe grey out the 'not provided' answer.
    - UX to explore this in research
      
2. For single checkboxes, instead of showing "Checked" or "Not Checked" Maybe it could be "Yes/No". However UX still has concerns that the more important thing is in the Label of the key/value pair.
    - UX to explore this in research
      
3. Engineering concerns about the page being too long and maybe wanting items in collapsible accordions
    - UX wants to test without accordions, and then if we encounter issues we can go back into accordions later
      
4. For form pages that have a checkbox/radio group where the label is doing double duty of form label and page title/h3, we may need to allow for customization of how this content is displayed on the review page
    - UX Sync discussed that perhaps this indicates the form question page needs to be updated/changed instead.
    - For now, we will work within the scope of the review page and explore customization on the review page.
  
5. Jeana is considering *not* changing any of the buttons/navigation when going into an edit flow. The reason being
     - The "continue" button now does "save and continue" already in a form flow, so that doesn't add any new meaning; and "save and return to the review page" isn't always going to be accurate, as we want to go to new conditional pages instead of the review page if any are encountered. This leads me to believe that back / Continue as they are now would be fine.
     - We can verify this in research.  Ask users when they click "continue" what do they expect or want to have happen next.
  
6. When editing a question, instead of having an interstitial page, any edited page will have an expandable alert on the page letting users know that "Changing your answer may lead to a new set of questions.". This becomes an interactive element that all screen readers wll encounter, and reduces the need for an extra page with no action on it (Thanks to the sitewide team for this idea)
      
7. UX Sync discussed moving the "Edit Link" below the keyvalue pairs that the edit link covers.

   <img width="450" alt="image" src="https://github.com/user-attachments/assets/4a2249d3-c1da-4f51-8378-e6349fbaf5e1">

8. Engineering concerns about entering into an edit flow and knowing that a question change has triggered conditionals.
    - More conversations to come
    - This sort of happens know in review page. See video below (With audio)

https://github.com/user-attachments/assets/eb5d5d5c-b502-4d66-a454-fb2337c0da59

