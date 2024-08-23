# New Year Banner

Each year new income thresholds are added into the VES database and pulled into vets-api for the Income Limits API.

When this occurs, we may want to display a banner to the Veteran to inform them of the newly added data.

Example:

<img width="938" alt="Screenshot 2024-01-02 at 3 48 03 PM" src="https://github.com/department-of-veterans-affairs/va.gov-cms/assets/19175324/184c7707-84ad-4e02-8a8c-56cd112fc25a">

## Creating a New Banner
In HomePage.jsx, below the H1, add a `<va-alert>` component. Remove the alert when you no longer want to show the banner.

Example for 2024:

```js
<h1>{H1}</h1>
<va-alert
    class="vads-u-margin-top--1 vads-u-margin-bottom--3"
    close-btn-aria-label="Close notification"
    status="info"
    visible
>
  <h2 slot="headline">
    We’ve updated this tool to check 2024 income limits
  </h2>
  <p className="vads-u-margin-bottom--0">
    You can check your income limits for 2024 now.
  </p>
</va-alert>
```