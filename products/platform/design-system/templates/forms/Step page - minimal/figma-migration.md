# Migrating existing forms to use the new form page template

It is recommended that teams use the new minimal form flow for new forms. The updated page template uses the minimal header and footer components in a form flow. The header and footer are simpler and don’t show navigation elements. This frees up space on the page and allows the form submitter to focus on the task. 

**Note:** The introduction and confirmation pages are not changing. The review page will also use the minimal header and footer. But this form page template focuses on only the question page.

Unfortunately for Designers and Engineers, migrating to use the new form page layout is not as easy as changing some components or importing the new header. Some key decisions have to be made in the process.

More recent forms may have an easier time adjusting as forms that employ an H3 on the form pages can use that H3 as the H1 on the page. If your forms do not use H3’s you will need to write H1s for each of your form pages. You also should not need to rewrite, restructure, change any conditionals for your form pages. The biggest lift will be determining what the new H1 is on the page.

## Checklist for migrating existing forms
1. Each page has a unique H1
2. The form title and subtitle are not structured as headers
3. There's a back link under the header, instead of a breadcrumb
4. After the question, there's a single button to continue instead of a "back/continue" button pair
5. The intro and confirmation pages have the form title as the H1 and do not use the minimal header and footer

**NOTE To consider:** Migrating the form may cause you to re-chunk the form

## Figma
Add the "VADS Templates, Patterns, and Forms" library. The specific component you’re looking for is with in `🔒 Form template components` and `Form template/Step with Minimal Flow`.

Pull that into your form

<img width="552" height="331" alt="image" src="https://github.com/user-attachments/assets/bbff9d13-ff30-40fa-91a9-ed3565a16726" />


**The template comes with these toggable features:**
1. **Mobile:** this converts the template to be in the mobile configuration with the proper spacing
2. **Authenticated:** This updates the header to show the authenticated flow as well as, toggles save in progress markers on or off.
3. **Layout:** Allows you to toggle between minimal form flow and the current default layout pages
4. **SiP Stepper:** hides/shows the "We’ll save your application on every change. Your application ID number is 24757." that displays underneath the stepper
6. **Page header:** toggles on or off the "Page header" lable. I built this in because there may be times where that page header is a part of a local component, and other times where you may need to just slot in an existing component (that doesn’t have a form label). I also wanted to leave the page header visible in the template to help us remember that each page now needs a page header.
7. **Content/Form step:** This works to control the page question information as it works in our current templates, you can use this to load in existing components. 

