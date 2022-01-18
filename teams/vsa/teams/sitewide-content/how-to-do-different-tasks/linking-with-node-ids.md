# How to use node IDs to link to other pages within Drupal

When you want to link to another page within Drupal, you must use a Node ID instead of the page's url. This ensures that if the url ever changes, it won't affect the link.

Follow these steps to link to a page using a Node ID.

## If the link is in a rich text field
1. Highlight the text to be linked.
2. Select the link button.
3. Start typing the H1 of the page to be linked. A list will pop up showing all pages with those words in the H1. 
4. Select the page you want to link to.
5. Select **Save**. 

## If the link is in its own component 
Start typing the H1 of the page to be linked where you need to add the url. A list will pop up showing all pages with words in the H1. 

## How to add jump links with Node IDs

When you want to link to a specific section on another page within Drupal, you must use a Node ID with the header ID of the section.

Follow these steps to link to a specific part of a page using a Node ID.

1. Find the H2 or the H3 of the section of the page you want to link to.
2. Highlight the H2 or H3 and right click to pull up a menu.
3. Select **Inspect**.
4. Copy the H2 or H3 ID. (This will be the first 28 characters of the H2 or H3 with dashes instead of spaces in bewteen each word.)
5. In Drupal, add a link following the steps above for linking in a rich text field.
6. After the Node ID, enter /# and paste the H2 or H3 ID after it. Example: /node/3003/#how-do-i-request-a-higher-le
7. Select **Save**.
**Note:** Link any pages not built in Drupal or not on VA.gov using the full url.
