New OS test plan
Each year in the fall, both iOS and Android release new versions.

In order to maintain compatibility, the teams will need to test against release candidates of the new versions and raise any issues to be fixed prior to the new OS rolling out.
We should test the new iOS and Android beta builds when they become available.
For testing on iOS: minimum 1 iPad, 2 iPhones (1 newer, 1 of the older, but still supported versions)
For testing on Android: minimum 1 tablet, 1 Samsung, 1 newer Google Pixel

Process timeline:
New Beta OS becomes available
FE Reviews new OS, decides if app changes are needed to support new OS
QA DL’s and runs an automated RC test pass  
Based on FE review QA performs additional tests from the "Standard test cases" testrail folder that may not normally be included in the RC, that interact with the OS directly:
	EG: 
add to calendar, 
test links to external sites, 
links to phone call, 
links to text, 
claims file attachment(camera, file folder, etc), 
Message file attachments
Sign in while app switching to simulate 2FA,
Directions to location using maps
Push notifications(if possible)
Downloading verification letter
Downloading claims decision letter
