# Find Forms FAQ
<hr> 

### A form is added to the forms database, when will it be available on the frontend?
The content management system (CMS) syncs with the database during the nightly migration at 12:00AM EST, so it becomes aware of the new form once this is complete. 

<hr> 

### A newly added form was uploaded to the forms database, but the form details page is not available. Where is it?
The new form is initially set as a draft in the CMS system. Once the form has been reviewed and is set to *Published*, the forms details page will be able to be statically generated. Until then, the result may show in *Find VA Forms* search, but the hyperlink to the details page will not be available. The form may available to be downloaded via the *Download* link.

<hr> 

### In the CMS dashboard, a form title was edited. How long until the change is reflected on the frontend?
The `content-build` repository is built for production once an hour(ish) between 9:00AM EST and 5:00PM EST, Monday through Friday. Changes to the CMS are applied during each of these builds. 

#### Example 1) 
  - A form title was edited in the CMS at 1:24PM EST on Tuesday. The change will be applied and reflected in the frontend around 2:00PM EST Tuesday.

#### Example 2) 
  - A form title was edited in the CMS at 11:47PM EST on Thursday. The change will be applied and reflected in the frontend around 9:00AM EST Friday.

#### Example 3)
  - A form title was edited in the CMS at 9:10AM EST on Saturday. The change will be applied and reflected in the frontend around 9:00AM EST Monday.

<hr> 

### A form name was changed upstream in the database. Will this cause an outage?
No, a form name update in the database should NOT cause an outage. The RowID is the unique identifier across the forms database, the CMS, and Lighthouse.

<hr>

### A form filename was changed upstream in the database. Will this cause an outage?
Yes, a form filename update in the database WILL cause an outage. The length of the outage depends on what time the file name was changed. 

**Note**: *The filenames of forms should NOT to be edited by the forms database team, but they are fairly often.*

#### Example 1) Short outage
  - A form filename was changed from [VBA-22-1990t-ARE](https://www.vba.va.gov/pubs/forms/VBA-22-1990t-ARE.pdf) was changed to [VBA-22-1990t-ARE-ZZZ](https://www.vba.va.gov/pubs/forms/VBA-22-1990t-ARE-ZZZ.pdf) in the database at 11:15PM EST on Monday. The CMS will not know about the change until the nightly migration at 12:00AM EST on Tuesday. Lighthouse will not know about the change until it's nightly pull at 3:00AM EST Tuesday. Then it will not appear correctly until the first `content-build` build at 9:00AM EST on Tuesday, thus resulting in an outage of this form for ~9.75 hours.

#### Example 2) Medium outage
  - A form filename was changed from [VBA-22-1990t-ARE](https://www.vba.va.gov/pubs/forms/VBA-22-1990t-ARE.pdf) was changed to [VBA-22-1990t-ARE-ZZZ](https://www.vba.va.gov/pubs/forms/VBA-22-1990t-ARE-ZZZ.pdf) in the database at 2:00PM EST on Tuesday. The CMS will not know about the change until the nightly migration at 12:00AM EST on Wednesday. Lighthouse will not know about the change until it's nightly pull at 3:00AM EST Wednesday. Then it will not appear correctly until the first `content-build` build at 9:00AM EST on Wednesday, thus resulting in an outage of this form for ~19 hours.

#### Example 3) Long outage
  - A form filename was changed from [VBA-22-1990t-ARE](https://www.vba.va.gov/pubs/forms/VBA-22-1990t-ARE.pdf) was changed to [VBA-22-1990t-ARE-ZZZ](https://www.vba.va.gov/pubs/forms/VBA-22-1990t-ARE-ZZZ.pdf) in the database at 3:00PM EST on Friday. The CMS will not know about the change until the nightly migration at 12:00AM EST on Saturday. Lighthouse will not know about the change until it's nightly pull at 3:00AM EST Saturday. Then it will not appear correctly until the first `content-build` build at 9:00AM EST on Monday, thus resulting in an outage of this form for ~66 hours.

<hr>
