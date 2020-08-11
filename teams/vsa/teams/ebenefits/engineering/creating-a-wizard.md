# Background
There is some scattered documentation that can be peiced together to fill in most of the steps for creating a wizard but since there are big gaps in the existing documentation we decided to create a document that simply lays out all of the steps.

The process to create a wizard can be broken down into two sections, 1. Build a widget and 2. Use the existing wizard component to build a wizard in your widget.

## Step 1 - Build a widget

- Add a static page to vetsgov-content/pages - This static page will house your widget while you are developing it. Ensure that when you set up your static page that you set it up with the `layout: page.html`. MAKE SURE YOU DO NOT INCLUDE `entryname` IN YOUR CONFIG FOR YOUR STATIC PAGE AS IT WILL CONFLICT WITH YOUR WIDGET

- Add a mounting point for your widget on the static page you created - Add an HTML mounting point for your wiget on your static page. In this mount point make sure that what you use for the `data-widget-type` is something descriptive of your widget.

```
<div data-widget-type="my-new-widget" id="someId"></div>
```

- Add a startup function in the folder structure you are using to build your widget - Inside the folder structure where you are building your widget (wherever that makes sense for you) create a file named for a function that will create your widget ie something like `createSomeWidget.js` but make sure it describes what your wizard is for. Inside the file you created you need to create a function that creates your widget, here is an example -

```javascript

import React from 'react';
import ReactDOM from 'react-dom';

export default function createSomeWidget(
  store,
  widgetType,
) {
  const root = document.querySelector(`[data-widget-type="${widgetType}"]`);
  if (root) {
    import(/* webpackChunkName: "createSomeWidget" */
    './SomeWidget.jsx').then(module => {
      const { ApplicationStatus, Wizard, pages } = module.default;
      ReactDOM.render(
        <SomeWidget />,
        root,
      );
    });
  }
}

```

- Call the startup function for your widget in `src/applications/static-pages/static-pages-entry.js` - This will be the function that 
