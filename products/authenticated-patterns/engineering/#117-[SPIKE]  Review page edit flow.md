## TOPIC: Investigate how the edit flow might change from the Review Page to return to previous corresponding form sections

Currently, users are able to edit and update information within the same Review page section.

New proposed user flow --> When we click “edit,” we want to return to that specific section’s page in the form.

### Initial understandings of new Review Page designs:
- Each form section is considered a “step”.
- Each page in a section is considered a “sub-step”.

## Changes Needed

`platform/forms-system/src/js/review/ObjectField.jsx`
- **`defaultEditButton`** – [line 162](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/ObjectField.jsx#L162)

  Edit button in the collapsible chapters on the Review page lives here

### 1. Changes in `platform/forms-system/src/js/review/ReviewChapters`
- **`handleEdit`** - [line 47](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/ReviewChapters.jsx#L47-L53)
  - No longer need the `handleEdit` function in this component. Can delete.
  - Do not need to pass the prop `onEdit` to the `ReviewCollapsibleChapter` component since `handleEdit` will be deleted. [line 87](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/ReviewChapters.jsx#L87)

- In the function `mapStateToProps` [line 102](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/ReviewChapters.jsx#L102):
  - Create a constant: 
    ```javascript
    const pagePaths = getPagePaths(pages, formData);
    ```
  - `pagePaths` will be passed into each `page` object from the `expandedPages` array [line 129](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/ReviewChapters.jsx#L129-L140).

- In the `return` [line 78](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/ReviewChapters.jsx#L78-L96):
  - Pass the prop `pagePaths` into the `ReviewCollapsibleChapter` component: 
    ```javascript
    pagePaths={chapter.pagePaths}
    ```


### 2. Changes in [platform/forms-system/src/js/helpers](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/helpers.js)
- Create a function similar to `getPageKeys` called `getPagePaths`:
  ```javascript
  export function getPagePaths(pages, formData) {
    const expandedPageList = getActiveExpandedPages(pages, formData);
    
    return expandedPageList.map(page => {
      let { path } = page; // Extract the path instead of pageKey
      if (typeof page.index !== 'undefined') {
        path += page.index; // Append index if it exists
      }
      return path; // Return the modified path
    });
  }

### 3. Changes in `platform/forms-system/src/js/review/ReviewCollapsibleChapter`
- In the `handleEdit` function [line 39](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/ReviewCollapsibleChapter.jsx#L39), change to something like:
  ```javascript
  handleEdit(path) {
    this.goToPath(`/1/ezr/${path}`);
  }

- In the `return`, inside the `SchemaForm` component [line 245](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/ReviewCollapsibleChapter.jsx#L245), update the `onEdit` prop:
   ```javascript
   onEdit={() => this.handleEdit(page.path)}


## Perceived Issues with This New Functionality

1) If the Edit button takes the user back to that section’s original page, the user will be forced to click through the entire form again just to return to the Review page. Previously filled-out information will still be there though, which is at least good.
2) We’ll need to modify files within the platform/forms-system. How do we approach this? Would it be feasible to test this feature solely in our mock form app? Can we make copies of the necessary platform files and transfer them into our mock app folder as we’ve done previously with the other pattern?
   
    a) We could make a prototype in another branch and host this on Codespaces since we do not need to be on main.

### Other resources
- [Slack thread](https://dsva.slack.com/archives/C5HP4GN3F/p1727724185315819) talking about a similar functionality. 10-10 team has a custom review component that when clicking edit sends the user back to the form page with a query param of review=true.
On their custom page, look for that search param and if true, tell it to go back to /review-and-submit else go to the next desired path.
