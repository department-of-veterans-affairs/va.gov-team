Erik Hansen was the previous front end engineer on the form 686 project and he took notes on what issues the form had when he left the project. Here are those notes.

# 686 schema change recommendations
I discovered some issues with getting the 686 schema to play nicely with the intended UX flow of the form. The crux of the issue is that having a previousMarriages array as well as a currentMarriage object doesn't work with the way the form functions. We need to have a single array to hold all the basic info about all marriages, both previous and a potential current marriage.
A couple options:
1. I can work with the schema as it is, but you'll need to do a transformation of the data on the backend. At a high level the transformation would need to check to see if the applicant is married (is maritalStatus === 'MARRIED || maritalStatus === 'SEPARATED') and if so the last object in the previousMarriages array would need to be popped off and merged with the data in the currentMarriage object. That would be merging an object with spouseFullName, dateOfMarriage and locationOfMarriage with everything in the currentMarriage object.
2. A slightly better option that would potentially reduce confusion would be to rename previousMarriages to marriages, and still do the transformation I described above.
Both of these options do not deal with some changes that would need to be made to the required attributes of both the previousMarriages objects and the currentMarriage object.
As I'm writing this out I'm thinking of some other ways to make revise the schema to better work with the desired form flow. Maybe the best thing would be for me to make a PR with my proposed changes?
Claire shared a bit of wisdom with me on Wednesday that had somehow eluded me before:
"the schema should follow the UI, rather than the submission shape."
I also had this note for myself that was born out of 686 struggles
The problem was that the schema provided an array for previous marriages and an object for current marriage. But in the UI, you got a page for each marriage. The crux of the problem was that you were asked for the number of marriages (including the current one) up front. Basic info for all marriages was treated and input the same way. First input basic data for the previous marriages, including separation info.
finally I made this note for myself:
lesson learned - arrays should live on the root of the schema
if you want to use the form system's ability to show you a page per item in an array (using the showPagePerItem page property), the array you are showing pages for must live on the top of the form schema. this is due to how the arrayPath page property is used internally by the form system. it is used both as a way to access the property on the schema and also the key to access the data in Redux.
the example I ran into was the following:
at the top level of the schema I had a currentMarriage object that had a child spouseMarriages array. I then wanted to show a page for each object in the spouseMarriages array. so my arrayPath property looked like: arrayPath: 'currentMarriage.properties.spouseMarriages'. This path would prevent the form system library from blowing up as it tried to access currentMarriage.properties.spouseMarriages.items. But this path doesn't work because the data in the redux store actualy lives at currentMarriage.spouseMarriages.
If instead you used the correct path to access the redux data, the form library would blow up because it couldn't access currentMarriage.spouseMarriages.items on the schema because spouseMarriages is actually a child of properties, its not a direct child of currentMarriage.
So the solution is to add the array to the top level of the schema. In this case I'm moving spouseMarriages off of the currentMarriage and placing it directly on the root of the schema. The backend will have to do a translation/transformation after submission to move the spouseMarriages on to the currentMarriage object.
