## TOPIC: Investigate how the edit flow might change from the Review Page to return to previous corresponding form sections
Tickets [#117](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/117)
[#127](https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/127)

## Table of Contents
- [General overview and initial changes](#overview)
- [Option 1](#option-1)
- [Option 2](#option-2)
- [Decision](#decision)
- [Open questions](#open-questions)

## Overview

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

### Other resources
- [Slack thread](https://dsva.slack.com/archives/C5HP4GN3F/p1727724185315819) talking about a similar functionality. 10-10 team has a custom review component that when clicking edit sends the user back to the form page with a query param of review=true.
On their custom page, look for that search param and if true, tell it to go back to /review-and-submit else go to the next desired path.


# Possible options on how to implement 

## Option 1
Using sessionStorage and adding a conditional Save & Return button 

[Branch](https://github.com/department-of-veterans-affairs/vets-website/tree/bp-117-spike-review-page-edit-functionality)

Used "/1/ezr" form to test. 

### Steps
`platform/forms-system/src/js/review/ReviewCollapsibleChapter`
1) In the `handleEdit` function [line 35](https://github.com/department-of-veterans-affairs/vets-website/blob/bp-117-spike-review-page-edit-functionality/src/platform/forms-system/src/js/review/ReviewCollapsibleChapter.jsx#L35), add functionality to set a `sessionStorage` item called `review` to `true` and take the user to the relevant form page.

```javascript
window.sessionStorage.setItem('review', 'true');   
const basePath = window.location.pathname
     .split('/')
     .slice(2, 4)
     .join('/');
this.goToPath(`/${basePath}/${path}`);
```

2) `platform/forms-system/src/js/containers/FormPage`
 a) Under `onContinue` function, add function `returnToReviewPage`, which takes the user back to the review page after they edited the relevant form section and remove the `review` sessionStorage item. [Line 248](https://github.com/department-of-veterans-affairs/vets-website/blob/bp-117-spike-review-page-edit-functionality/src/platform/forms-system/src/js/containers/FormPage.jsx#L248)

```javascript
returnToReviewPage = isReview => {    
    if (isReview) {
        const basePath = window.location.pathname
            .split('/')
            .slice(2, 4)
            .join('/');
        this.goToPath(`/${basePath}/review-and-submit`);
        sessionStorage.removeItem('review');
    } 
};
```
b) In the `render`, set `const isReview = sessionStorage.getItem('review') === 'true';`
[Line 270](https://github.com/department-of-veterans-affairs/vets-website/blob/bp-117-spike-review-page-edit-functionality/src/platform/forms-system/src/js/containers/FormPage.jsx#L270)

c) Add conditional in the `goForward` prop in the `NavButtons` component stating that if `isReview` is true, then run the function `returnToReviewPage(isReview)`. Otherwise, use the `onContinue` function
[Line 404](https://github.com/department-of-veterans-affairs/vets-website/blob/bp-117-spike-review-page-edit-functionality/src/platform/forms-system/src/js/containers/FormPage.jsx#L404)

```javascript
goForward={
    isReview
        ? () => this.returnToReviewPage(isReview)
        : this.onContinue
}
```

3) `platform/forms-system/src/js/components/FormNavButtons`
   Add conditional in the `buttonText` prop in the `FormNavButtons` component, stating if there is a sessionStorage item of `review` then the button text should be “Save & Return”. Otherwise, it will be “Continue”.
   [Line 31](https://github.com/department-of-veterans-affairs/vets-website/blob/bp-117-spike-review-page-edit-functionality/src/platform/forms-system/src/js/components/FormNavButtons.jsx#L31)
   
`buttonText={sessionStorage.review ? 'Save & Return' : 'Continue'}`


## Option 2
Setting query string "review" in URL & adding conditional Save & Return button

[Branch](https://github.com/department-of-veterans-affairs/vets-website/tree/bp-121-spike-review-edit-flow-query)

Used "/1/ezr" form to test this.

### Steps

1) `platform/forms-system/src/js/review/ReviewCollapsibleChapter`
   
In `handleEdit` function [Line 35](https://github.com/department-of-veterans-affairs/vets-website/blob/bp-121-spike-review-edit-flow-query/src/platform/forms-system/src/js/review/ReviewCollapsibleChapter.jsx#L35), add functionality to add a query string to the URL such as `review=true` and take the user to the relevant form page.

```javascript
 handleEdit(path) {
   const basePath = window.location.pathname
     .split('/')
     .slice(2, 4)
     .join('/');
   this.goToPath(`/${basePath}/${path}?review=true`);
 }
```

2) `platform/forms-system/src/js/containers/FormPage`
   
   a) Line [253](https://github.com/department-of-veterans-affairs/vets-website/blob/bp-121-spike-review-edit-flow-query/src/platform/forms-system/src/js/containers/FormPage.jsx#L253) Under `onContinue` function, 
Add function `returnToReviewPage`, which takes the user back to the review page after they edited the relevant form section and remove the `review` query string from URL.
```javascript
 returnToReviewPage = () => {
   const isReviewTrue = this.isReview();


   if (isReviewTrue) {
     const basePath = window.location.pathname
       .split('/')
       .slice(2, 4)
       .join('/');
     this.goToPath(`/${basePath}/review-and-submit`);


     const url = new URL(window.location);
     url.searchParams.delete('review');
   }
 };
```

b) [Line 89](https://github.com/department-of-veterans-affairs/vets-website/blob/bp-121-spike-review-edit-flow-query/src/platform/forms-system/src/js/containers/FormPage.jsx#L89) → Add `isReview` function that checks if there is a review query string and if it is equal to true
```javascript
 isReview = () => {
   const urlParams = new URLSearchParams(window.location.search);
   return urlParams.get('review') === 'true';
 };
```

c)  [Line 411](https://github.com/department-of-veterans-affairs/vets-website/blob/bp-121-spike-review-edit-flow-query/src/platform/forms-system/src/js/containers/FormPage.jsx#L411)
Add conditional in the `goForward` prop in the `NavButtons` component stating that if `isReview` is true, then run the function `returnToReviewPage`. Otherwise, use the `onContinue` function
```javascript
 goForward={
                 this.isReview() ? this.returnToReviewPage : this.onContinue
               }
```

d) [Line 414](https://github.com/department-of-veterans-affairs/vets-website/blob/bp-121-spike-review-edit-flow-query/src/platform/forms-system/src/js/containers/FormPage.jsx#L411) Pass a new prop `isReview={this.isReview()`  in the `NavButtons` component 


3) `platform/forms-system/src/js/components/FormNavButtons`
[Line 31](https://github.com/department-of-veterans-affairs/vets-website/blob/bp-121-spike-review-edit-flow-query/src/platform/forms-system/src/js/components/FormNavButtons.jsx#L31)
Pass `isReview` prop in. 
Add conditional in the `buttonText` prop in the `FormNavButtons` component, stating if `isReview` prop is true then the button text should be “Save & Return”. Otherwise, it will be “Continue”

## Screenshot

<img width="468" alt="Screenshot 2024-10-10 at 2 03 47 PM" src="https://github.com/user-attachments/assets/1dd55030-91fd-498d-8d78-e5a32776287c">

## Decision

We are going with Option 1 (sessionStorage) for this pattern. 

### Option 1
Pros 
- sessionStorage is straightforward and doesn't clutter the URL
- Doesn't require modifying the URL, which adds more work including additional string parsing

Cons
- sessionStorage items need to be removed by JavaScript during navigation or other interactions. Thus, need to account for this and make sure no edge cases get missed so that the user isn't accidentally redirected
- sessionStorage keys need to be maintained by the app or the engineers building the app. Is the session key app specific, or is it for any app? Could having one session key 'to rule them all' introduce a source of bugs? Adds a little complexity.

### Option 2
Pros 
- User can revisit the page since the state is n the URL
- User can see that they're in review mode in the URL

Cons
- Slightly more complex to implement since it involves URL manipulation and parsing.
- Cluttered URL
  
**Possible future fix for this: The formConfig could be used to identify the available URLs within the app, which could allow for smarter redirection and sensible fallbacks.


## Open Questions 
### Next steps/thoughts to consider

1) We’ll need to modify files within the platform/forms-system. How do we approach this? Would it be feasible to test this feature solely in our mock form app? Can we make copies of the necessary platform files and transfer them into our mock app folder as we’ve done previously with the other pattern?
   
    a) We could make a prototype in another branch and host this on Codespaces since we do not need to be on main.
2) Will this new review page edit implementation be adopted by other teams, or will it remain confined to this mock application? 
3) Will this new review page be incorporated into future patterns? If it is, we’ll need to carefully consider edge cases of each option.



