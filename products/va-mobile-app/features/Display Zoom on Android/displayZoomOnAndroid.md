

<h1>Sprint 0: Display Zoom on Android</h1>

[Epic #]

Based on :[BUG - Sev-4 - All - Screen title should wrap before back button label #4936](https://app.zenhub.com/workspaces/va-mobile-frontend-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/4936)

<h3>Problem Statement</h3>


**Current Experience**



* On Android devices, there are settings for both font size and display size. The font size setting works as expected (when we prevent fonts from scaling, those fonts are unaffected by the font size setting). However, the display size setting scales everything on the screen, including fonts which shouldn't scale, like in the header.
* This issue is isolated to Android devices specifically and can result in word breaks that have the potential to cause accessibility issues due to broken words, dates, etc.



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")
     

<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")


**Desired Outcomes**



* Ideally, we would like to find a solution for preventing the display zoom from increasing the font size on areas that we are trying to prevent from font scaling. 
* However, if that is not possible, alternate solutions may include:
    * Altering the back button label to simply say “back” for longer labels (i.e. “Appointments” – see screenshot above). This is what iOS currently does (they replace longer labels with “back” or simply rely on the chevron icon rather than including the longer label).
        * Alternatively, we could change longer labels to something shorter.
    * For dates that are currently being dropped to a second line (see screenshot below), we could consider left-aligning the dates and giving them their own dedicated line / row.



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")


<h3>Assumptions and Level of Confidence</h3>




1. 

<h3>Risks</h3>




1. Additional updates / expanded features by Android developers that may alter the way that display zoom currently functions could pose challenges if altered in the future.
    1. To help circumvent this issue, we could continue to research potential changes made to Material Design so that these challenges are anticipated prior to implementation into the Android OS.

<h3>Business Goals</h3>




* A more usable experience for veterans with low vision who would be utilizing display zoom features on their Android mobile device.


---

<h3>Roadmap</h3>


**V1**



* 

**V2 and beyond**



* 

<h3>Measuring success </h3>




* Less cognitive load for Veterans
* Better usability / legibility
* Improved customer satisfaction

<h3>Stakeholders</h3>




* VA Mobile Product Owners

<h3>Open Questions</h3>




* How are other apps handling this issue when display zoom is at the maximum setting?
* Are there any ways to override display zoom?
* Is there any information within [Material Design](https://m3.material.io/) or in conversations amongst developers about this issue?

<h3>Important Links</h3>




* [Github ticket #4936](https://app.zenhub.com/workspaces/va-mobile-frontend-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/4936)
* [Slack thread pertaining to this issue](https://adhoc.slack.com/archives/C0212B872MT/p1678123871103429)
* [How iOS display zoom issues manifest](https://app.zenhub.com/workspaces/va-mobile-qa-638781293f91d46e66b4a935/issues/gh/department-of-veterans-affairs/va-mobile-app/5106) (different than how it impacts Android)
