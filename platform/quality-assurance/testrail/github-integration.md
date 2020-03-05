# Integrate TestRail with GitHub

*Preconditions: You have a GitHub account and a TestRail account.*

1. Navigate to your GitHub [personal access tokens page](https://github.com/settings/tokens).
1. Use the "Generate new token" button to create a new access token for personal TestRail integration.
1. Add a meaningful note for the token.
![TestRail token note][testrail-token-note]
1. Select an appropriate scope for the token.  Since defects and user stories should be stored in **va.gov-team** which is a public repository, it is sufficient to select the "public_repo" scope.
![TestRail token scope][testrail-token-scope]
1. Use the copy button next to your token to store it in your clipboard.
![TestRail token copy][testrail-token-copy]
1. Navigate to your [TestRail My Settings](https://dsvavsp.testrail.io/index.php?/mysettings) page.
1. Click the Settings tab at the top of the page.
1. Populate the GitHub User input box with your GitHub username.
1. Populate the GitHub Password input box with the GitHub token stored in your clipboard. 
![TestRail token my settings][testrail-token-mysettings]
1. Click the Save Settings button.
1. Done!

[testrail-token-note]: ../images/testrail-tutorials/token-note.png
[testrail-token-scope]: ../images/testrail-tutorials/token-scope.png
[testrail-token-copy]: ../images/testrail-tutorials/token-copy.png
[testrail-token-mysettings]: ../images/testrail-tutorials/token-mysettings.png