# Overview
We do quite a bit of research for the apps we build on VA.gov. The research that directly involves Veterans we do is moderated research where we show the Veteran something and ask them a series of questions about it to see what their thoughts are on it ( generally we show the Veteran a mockup of an app or an app in some stage of being built ). While moderated testing offers many insights it is limited in what types of insights it can offer in a couple critical ways; 1. Since the moderated testing is being done in a controlled environment, generally on a Zoom call with no distractions, the Veteran is not using the app we are testing in a real-world environment and all scenarios are hypothetical. This means that many of the insights end up not reflecting real-world use but rather reflect hypothetical dynamics and are less than ideal if we want real-world insights. 2. When users, any users, are asked questions in a controlled environment they tend to give answers that contain [response bias](https://en.wikipedia.org/wiki/Response_bias#Social_desirability_bias). This makes their answers only partially valuable, so to speak.

To paint a more clear picture of the Veterans that use VA.gov we should bolster the moderated research we do with A/B testing apps in the field with real users that are unaware that they are being tested. This allows us to get research on an app being used in the real-world and does not introduce response bias.


## Test folders
Each test we create will be tied to a certain app and will thus live in a folder named for that app. Within that folder for the app you will find - 

1. The overall testing plan for that app
2. Folders for each test to be run on that app

Within each folder for each test inside an app folder you will find -

1. The plan for that individual test
2. An implimentation plan for how the test will be run from a technical standpoint
3. The test results ( if the test has been run already )
