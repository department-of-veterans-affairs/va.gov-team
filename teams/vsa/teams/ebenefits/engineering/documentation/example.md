## Overview



<details>
<summary>API Refernce</summary>
<br>
<details>
<summary>Form.js</summary>
<br>
The Form System is organized around a few key concepts that are helpful to understand if you want to use the public facing API.
The first concept is a config file - Each form uses a central configuration file that contains JSON that is responsible for
indicating how you want your form set up as well as how you want it to look. This form.js file contains mostly JSON and the most important portion of the file is form config object that assigned as `const formConfig` and will contain lots of JSON -
  
 ```
 const formConfig = {
  ...lots of code
 }
 ```
This config object contains many options - 

<details>
<summary>`urlPrefix: '/'`</summary>
<br>
This does something but I don't know what it is.
</details>
  
  This central config file also contains a set of
chapters & pages for your form, chapters can be though of as sections of you form and pages are the individual pages of your
form. A chapter can contain multiple pages, for instance if you want to have one section of your form that contains all of a
person's personal information and then inside that chapter you could have a separate page for name and basic information like
social security number, then a separate page for the person's address. These two pages of information can conceptually both be
a person's information so they make sense to put in a `person-information` chapter ( or something like it ).
</details>
</details>
