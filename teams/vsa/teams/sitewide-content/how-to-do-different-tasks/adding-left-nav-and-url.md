## How to add a Drupal benefits page to the left nav

1. Go to the Edit mode of a Drupal file. 
2. In Menu Settings, check the "Provide a menu link" box.
3. Type in the menu link title.
4. Choose the parent link from the drop-down menu. 
5. **If this is a child page,** confirm that the section listed in "Section settings" of the Drupal file is the same as the section listed for the parent page.
6. Change the file from "Draft" to "Published" and select **Save**.

**Note:** Adding a Drupal page to the left nav can only be done when changing the current state of the Drupal page from "Draft" to "Published." If you change the left nav before publishing the page it will create a broken link on the nav. 

## How to add a resources and support page to the left nav
1. Select the **Menus** button in Drupal.
2. Select the **Add link** button at the top of the page.
3. In the Menu link title box, type in the text that will appear in the left nav.
4. In the Link box, start typing the H1 of the page to find the Drupal Node ID.
5. In the Parent link box, select what page this R&S page will nest under in the left nav. 
6. Select **Save** at the bottom of the page.
7. If you need to change the order of this page in relation to other child pages, follow the steps below for "How to change the order of pages in the left nav." 

## How to change the order of pages in the left nav
1. Select the **Menus** button in Drupal.
2. Find the section or hub the page is in and select **Edit menu**.
3. Find the page you want to move and drag and drop it to the correct place in the left nav.
4. Scroll to the bottom of the page and select **Save**.
 
## How to add a Drupal page to the top nav (also called the header mega menu)
1. Select the **Menus** button in Drupal.
2. Find the Header mega menu and select **Edit menu**.
3. Select the **Add link** button at the top of the page.
4. Fill in all the required boxes and select **Save**.

## How to change the order of pages in the top nav (also called the header mega menu)
1. Select the **Menus** button in Drupal. 
2. Find the Header mega menu and select **Edit menu**.
3. Find the page you want to move and drag and drop it to the correct place in the top nav.
4. Scroll to the bottom of the page and select **Save**.

## How to remove a Drupal page from the left nav
1. Select the **Menus** button in Drupal.
2. Find the section or hub the page is in and select **Edit menu**.
3. Find the page you want to remove in the list and uncheck the **Enabled** button.
4. Scroll to the bottom of the page and select **Save**.

**Note:** This hides the page from appearing in the left nav. It doesn't delete it. To add the page back to the left nav, you can check the **Enabled** button.

## How to add a new left nav (sidebar)
Creating a new left nav requires coordinating content changes (menu links) with frontend and Drupal development in order to prevent unwanted or broken left nav links.

Overall process
1. Create a Drupal menu in code
2. Create links in the Drupal menu according to the structure below and wait for or issue a content release
3. Implement frontend changes

### Create the Drupal menu in code
The fist step in creating a new left nav is to create the corresponding Drupal menu. Menus in Drupal require a code change in order to make them permanent, so coordination with Drupal developers is needed here.

### Create links in the Drupal menu
To realize a left nav for a benefit hub page, links need to be added to the new menu in a way that is expected by the frontend. The structure is as follows:

**Level 1** - Primary benefit landing page. All other links are children of this landing page, and there should only be one item at this level.

**Level 2** - Nav heading label. In Drupal this link should be entered using a <nolink> url. This level is required.

**Level 3** - Nav links

**Level 4+** - Child links

<img width="1427" alt="sidebar-menu-structure" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/221539/47bcf0a6-6290-4414-832e-3897e78cfdea">

### Implement frontent changes
These changes will cause the left nav to be visible on the frontend:

- (frontend) Adding the menu (machine name) to hubNavNames.json
- (frontend) Adding the GraphQL query for the menu in Sidebar.nav.graphql.js
- (frontend) Adding the sidebar to the page template data in src/site/stages/build/drupal/individual-queries.js
- (frontend) Adding the sidebar template to the base page template, if not already present.

## How to set the url for a Drupal page

For root-level and benefit pages, a content author needs to manually add the url. Do this is in the "URL alias" section of the Drupal node. 
The url must start with a / and contain each section after VA.gov. 

For example, the url for [Eligibility for disability benefits](https://www.va.gov/disability/eligibility/) would be written in Drupal as /disability/eligibility

**Note:** In Resources and Support, the url is automatically created from the H1. Content authors should never change this.
