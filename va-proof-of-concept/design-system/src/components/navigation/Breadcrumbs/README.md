## Intent

Breadcrumbs are intended to provide users an understanding of where their are located in a rich information structure. They work well in situations where users may have clicked several layers deep, and would want to move back toward the top in linear steps.

## Optional Attributes

### aria-current (attribute)

Passing an `ariaCurrent: true` key-value pair into the last `crumbs` object will trigger the `a[aria-current="page"]` CSS selector. This will make the last breadcrumb link bold, remove the underline, and change to a black text color. Current [WAI-ARIA authoring practices](https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/breadcrumb/index.html) recommend an `aria-current="page"` attribute for screen reader context.

### Id (prop)

Passing a prop `id='STRING'` into the `<Breadcrumb>` component will append that ID to the `<nav>` element, and concatenate the ID plus `-list` to the `<ol>` element.

### mobile link (CSS)

If you want to provide a mobile-first, one-step at a time breadcrumb for smaller screens, you can apply the class `.va-nav-breadcrumbs-list__mobile-link` to a secondary breadcrumb link. This mobile-first experience will require a custom script to either hide the desktop breadcrumb, or replace it with a list tailored to mobile screens.