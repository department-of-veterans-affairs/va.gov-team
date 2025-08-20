## Overview



<details>
<summary>API Refernce</summary>
<br>

<details>
<summary>Form.js</summary>
<br>
The Form System is organized around a few key concepts that are helpful to understand if you want to use the public facing API.
One of those concepts is a config file - Each form uses a central configuration file that contains JSON that is responsible for
indicating how you want your form set up as well as how you want it to look. This form.js file contains mostly JSON and the most important portion of the file is form config object that assigned as `const formConfig` and will contain lots of JSON -
  
 ```
 const formConfig = {
  ...lots of code
 }
 ```
This config object contains many name/ value pairs - 

* `urlPrefix:` - This does something but I don't know what it is. 

  Example
  ```
  trackingPrefix: 'complex-form-',
  ```

* `trackingPrefix` - This is the analytics tracking prefix that your form will use by default ( it is assigned a value when you run the yeoman generator ). This tracking prefix will be used for the default events that come with the form system out of the box which you can read more about [here](/)

  Example
  ```
  trackingPrefix: 'complex-form-',
  ```

* `introduction` - This is a React component that is passed in as the introduction page for your form and appears when the user goes to the root URL for your form in your manifest.json file. The introduction page component is a regular React component and thus has access to and behaves just like any other React component you have ever used. 

  Example
  ```
  import IntroductionPage from '../containers/IntroductionPage';
  
  ...
  introduction: IntroductionPage,
  ...
  
  ```
  
* `confirmation` - This is a React component that is passed in as the confirmatio page for your form and appears once your form is submitted. This component is a regular React component and thus has access to and behaves just like any other React component you have ever used. You can do things like connecting it to Redux if you need access to our Redux store.

  Example
  ```
  import ConfirmationPage from '../containers/ConfirmationPage';
  
  ...
  confirmation: ConfirmationPage,
  ...
  
  ```

* `formId` - This should be the same form ID that is on the paper form you are basing your form on.

  Example
  ```
  trackingPrefix: 'complex-form-',
  ```

* `prefillEnabled` - Our forms can make use of data we already have access to, such as the veteran's name, and can prefill this data in the form when the form loads. In order to take advantage of this prefill you will need to set the `prefillEnabled:` name to a value of `true`. As a side note the back end also needs to be set up to send you the data you will be prefilling so that will need to be set up for prefill to work end to end.
  | Value     | Description |
  | ----------- | ----------- |
  | true      | when set to true the form will attempt a call to the back end to get the prefill data and fill the form based on the nesting of the data returned      |
  | false   | disables prefill on the front end for this form       |
  
  Example -
  ```
  prefillEnabled: true,
  ```

</details>
</details>

