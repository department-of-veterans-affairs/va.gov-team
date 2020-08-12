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

- Add your `data-widget-type` to src/applications/static-pages/widgetTypes.js - In order for you to use your mounting point you will need to add the `data-widget-type` that you put in your mounting point in your static file to the object inside widgetTypes.js.

- Call the startup function for your widget in `src/applications/static-pages/static-pages-entry.js` - Now we need to call your startup function and pass in the `data-widget-type` we added inside widgetTypes.js so that our widget will get created and added to the page. Inside `static-pages-entry.js` import and call your startup function and use your `data-widget-type` like this - 

```javascript

createSomeWidget(store, widgetTypes.YOUR_DATA_WIDGET_TYPE);
```

- Add our widget code - Now at this point you will probably notice that we haven't actually created a React component for our widget, now we need to do that. You will notice in our startup function we have this line that is inside an if statement- 

```javascript
import(/* webpackChunkName: "createSomeWidget" */
    './SomeWidget.jsx').then(module => {
      const { ApplicationStatus, Wizard, pages } = module.default;
      ReactDOM.render(
        <SomeWidget />,
        root,
      )
```
We need to create that `./SomeWidget.jsx` file and export our component from it. Here is just an example component -

```javascript
import React from 'react'

const SomeWidget = () => {
  return <p>Hey There</p>;
}

export default SomeWidget;
```

Now if you run `yarn watch` in `vets-website` and load up your static page you should see your widget there.


## Step 2 - Add a wizard to your widget

- Import and add the Wizard component - Once you have a widget you can import the `<Wizard />` component from `src/applications/static-pages/wizard and begin filling it with pages -

```javascript
import React from 'react';
import Wizard from '../../../static-pages/wizard/index';
import pages from './pages/index';

const SomeCoolWizard = () => {
  return <Wizard pages={pages} expander buttonText="Let's get started" />;
};

export default SomeCoolWizard;

```

- Create a pages file that will import all of your page components and export them inside an array - You can see when we imported the wizard we also imported and used `pages`. When you are ready to start adding pages you will need to create each page as a React component. These React components will need to be imported into a file and then exported in an array like this -

```javascript
import page1 from './page1.jsx';
import page2 from './page2.jsx';

export default [page1, page2];

```

- Add a page list file - When you create your page components you also need to create a page list file that exports an object that accounts for each of your page components, like this - 

```javascript
export const myPages = {
  page1: 'page1',
  page2: 'page2',
};

```

- Add pages to your wizard - Each form field is treated as a 'page' in the wizard component, it is reccomended that you create a `/pages` folder in your folder structure for your wizard and put your page files in there - 

```javascript
import React from 'react';
import {
  myPages,
} from './pageList';


const page1 = ({ setPageState, state = {} }) => (
  <div className="feature">
    <p>
      here is some content
    </p>
  </div>
);

export default {
  name: myPages.page1,
  component: page1,
};


```
That should add a page to our wizard component
