# MyVA Test Cases 
[Staging user reference doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/product/readme.md)

### Test cases for "LOA1 user"
|Test case|Intended outcome|Staging User|
|----|----|----|
|LOA1 user has not verified their identity|User is shown a prompt to verify their identity [[Screenshot - desktop]](https://camo.githubusercontent.com/beea6e9caf042e9355845344ee77ff41d9f74e9eccafd90cd7841431dafba9e5/68747470733a2f2f696d616765732e7a656e68756275736572636f6e74656e742e636f6d2f3564666136356262626430373864313639396535323239342f39326332356131622d353836342d346566382d393466342d393164346265323436303439)|TBD|
|LOA1 user has not verified their identity but has an application in progress on VA.gov|User is shown a prompt to verify their identity but also shown "Application in progress" [[Screenshot - desktop]](https://camo.githubusercontent.com/0d1b609baefca1b787879baae53e63442a12fe14ae44800a1f51fd1dc95c971d/68747470733a2f2f696d616765732e7a656e68756275736572636f6e74656e742e636f6d2f3564666136356262626430373864313639396535323239342f32653462346332612d666535332d343466662d613232362d626530623037306464343638)|TBD|
|LOA1 user has not verfed their identity and does not have anything in-progress|User is shown a prompt to verfy their identity and CTAs related to filing a claim, applying for healthcare, and applying for education benefits [[Screenshot - desktop]](https://camo.githubusercontent.com/beea6e9caf042e9355845344ee77ff41d9f74e9eccafd90cd7841431dafba9e5/68747470733a2f2f696d616765732e7a656e68756275736572636f6e74656e742e636f6d2f3564666136356262626430373864313639396535323239342f39326332356131622d353836342d346566382d393466342d393164346265323436303439)|TBD|


### Test cases for "First-time user experience"
|Test case|Intended outcome|Staging User|
|----|----|----|
|LOA1 user has logged-in for the first time after verifying their identity |User is shown CTA's related to filing a claim, applying for healthcare, and applying for education benefits " [[Screenshot - desktop]](https://camo.githubusercontent.com/41fe574a88719a4246e8cfad0d0fc285553bea1db5ce7016b44b176e8c9576ee/68747470733a2f2f696d616765732e7a656e68756275736572636f6e74656e742e636f6d2f3564666136356262626430373864313639396535323239342f62333263616566322d393132622d343162382d393034312d383932393861303734633632)[[Screenshot - mobile]](https://camo.githubusercontent.com/353eb938c0c8ce0932c54436ba31040022972a81cbf6d2ff355bb80cde3fad13/68747470733a2f2f696d616765732e7a656e68756275736572636f6e74656e742e636f6d2f3564666136356262626430373864313639396535323239342f61663036396137632d616633372d343335372d383330622d653031666637666363633333)|TBD|


### Test cases for "LOA3 users"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User has signed up for something|User sees relevant information/statuses for the section(s) that apply to them [[Screenshot - desktop]](https://camo.githubusercontent.com/fd7a32179fd84f94441a86e6e6bccb909f481c1b5696710238797f81687893c7/68747470733a2f2f696d616765732e7a656e68756275736572636f6e74656e742e636f6d2f3564666136356262626430373864313639396535323239342f61393836356333342d393031642d346234662d626362652d633833663931633463326162)|TBD|
|User has signed up for nothing (first time user experience)|User is shown CTA's related to filing a claim, applying for healthcare, and applying for education benefits " [[Screenshot - desktop]](https://camo.githubusercontent.com/41fe574a88719a4246e8cfad0d0fc285553bea1db5ce7016b44b176e8c9576ee/68747470733a2f2f696d616765732e7a656e68756275736572636f6e74656e742e636f6d2f3564666136356262626430373864313639396535323239342f62333263616566322d393132622d343162382d393034312d383932393861303734633632)|TBD|

### Test cases for "Education"
This is not dynamic, the card and CTA remain the same regardless ***

### Test cases for "Claims and Appeals"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User's application status is "In Progress"|User sees an application status of "In-Progress"|TBD|
|User's application status is "Deceased"|User sees an application status of "Deceased"|374:Deceased|
|User's application status is "Enrolled"|User sees an application status of "Enrolled"|363:Enrolled|
|User's application status is "Decision"|User sees an application status of "Decision"|369:We determined that you don’t qualify for VA health care, 366:Canceled or declined health care|
|User's application status is "Update"|User sees an application status of "Update"|365:Update: We need more information, 367:Update: We're reviewing your application|

### Test cases for "Healthcare"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have secure messages|User sees latest message info ("From" "Date" "Subject")[[Screenshot - desktop]](https://camo.githubusercontent.com/fd7a32179fd84f94441a86e6e6bccb909f481c1b5696710238797f81687893c7/68747470733a2f2f696d616765732e7a656e68756275736572636f6e74656e742e636f6d2f3564666136356262626430373864313639396535323239342f61393836356333342d393031642d346234662d626362652d633833663931633463326162)|TBD|
|User DOES NOT have secure messages|TBD *************** |TBD|
|User DOES have prescriptions|User sees most recent prescription update ("Medication" "Status")[[Screenshot - desktop]](https://camo.githubusercontent.com/fd7a32179fd84f94441a86e6e6bccb909f481c1b5696710238797f81687893c7/68747470733a2f2f696d616765732e7a656e68756275736572636f6e74656e742e636f6d2f3564666136356262626430373864313639396535323239342f61393836356333342d393031642d346234662d626362652d633833663931633463326162)|TBD|
|User DOES NOT have prescriptions|TBD ************* |TBD|
|User DOES have appointments|User is shown next appointment ("Date" "Time" "Location/VA Video Connect")|judy.morrison@id.me|
|User DOES NOT have appointments|TBD ************* |judy.morrison@id.me|

**Lab results:** Any user with healthcare will show static "View your lab and test results" link**

**Get your VA medical records:** Any user with healthcare will show static "Get your VA medical records" link**

### Test cases for "Claims"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have a disability rating|User will see their disability rating|38,228|
|User DOES not have a disability rating|this section will not appear|10,17|
|User DOES have a pension/disability claim|User will see claim information|**LUKE M to provide**|
|User DOES NOT have a pension/disability claim|User will see a link how to file a claim|**LUKE M to provide**|


### Test cases for "Records"
**This will be a list of static links**

### Test cases for "Applications in Progress"
|Test case|Intended outcome|Staging User|
|----|----|----|
|User DOES have an application in progress|User will see application information, status, last saved date, application expiration date, form number, and applicatoin title|**LUKE M to provide**|
|User DOES NOT have an application in progress|This section will not appear|**LUKE M to provide**|



