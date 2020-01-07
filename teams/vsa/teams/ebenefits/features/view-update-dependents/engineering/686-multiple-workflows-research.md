## Exploring multiple workflows within the 686c
The 686c has several distinct workflows it can be used for including but not limited to: Adding a spouse, adding a child, removing a child, reporting a death, and reporting a divorce. 
Depending on what one wishes to achieve, not all sections (chapters) of the form are required. As it exists today (1/7/2020), the 686c in staging supports one, linear workflow where
a user is required to enter all of their veteran information, then traverse sections around spouse, marriage history, and children.

Ideally, a user should have the ability to fill out only what they need to, without having to spend extra time working through sections they didn't want to fill out in the first place.
A possible solution for conditionally rendering form sections based on what a user may want to do is to use a wizard that collects user preferences and then builds the form based off that data.

There are two potential options to implement this functionality:
1. Add the `depends` property to each page of a form chapter.
- This is the path of least resistance, and most likely the simplest way forward. Helpers can be passed in as the values for `depends` which can read from the formData object what the user preferences are for the 686.
- A prototype of this idea can be seen [here](https://github.com/department-of-veterans-affairs/vets-website/blob/4508-686-multiple-workflows-discovery/src/applications/disability-benefits/686/config/form.js#L351).
2. Use the form system to some extent, but derive branching workflows based on application state.
- This option is more complex, and requires more investigation in its own right, but is probably more flexible and scalable in the long run because it operates outside of the 
constraints of the form system. 
- A functional application that illustrates this idea can be viewed [here](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/vaos/newAppointmentFlow.js).
