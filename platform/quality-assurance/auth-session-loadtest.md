# Using authenticated sessions for load testing

## Things you need
1. [SOCKS proxy access](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/internal-tools/)
2. [Access to internal tools](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/internal-tools/) (specifically Jenkins, but if you have access to one then you tend to have access to all)
3. Access to [`devops`](https://github.com/department-of-veterans-affairs/devops) repository
4. A terminal (For example: Bash, [GitBash](https://gitforwindows.org/), [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10), MacOS terminal)

## Steps to create authenticated sessions
1. Start up the SOCKS proxy
2. Navigate to [this](http://jenkins.vfs.va.gov/job/rake_tasks/job/vets-api-load-test-sessions/) Jenkins task in a browser
3. Log in to Jenkins  
    ![Jenkins log in example][jenkins-login]
4. Click "Build with Parameters" from the left side of the site  
    ![Jenkins build with parameters example][jenkins-build-with-parameters]
5. Click "Build"
    ![Jenkins build example][jenkins-build]
6. Click the new build in the list of builds to the left  
    ![Jenkins click the build example][jenkins-click-the-build]  
7. Select "Console Output" from the menu  
    ![Jenkins console output example][jenkins-console-output]
8. Scroll through the output until you see an array of hashes with keys "uuid" and "cookie_header"  
    ![Jenkins session cookie output example][jenkins-session-cookie-output]
9. Trim unecessary characters such as escaping until you end up with something like the below  
    ![Jenkins trimmed session cookies example][jenkins-trimmed-session-cookies]
10. Save the trimmed array to a file named `sessions.json`
11. Use the array of sessions in `sessions.json` with Python's [json library](https://docs.python.org/3/library/json.html)
12. Run your load test

[jenkins-login]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/peter-qa/platform/quality-assurance/images/jenkins-login.png
[jenkins-build-with-parameters]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/peter-qa/platform/quality-assurance/images/jenkins-build-with-parameters.png
[jenkins-build]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/peter-qa/platform/quality-assurance/images/jenkins-build.png
[jenkins-click-the-build]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/peter-qa/platform/quality-assurance/images/jenkins-click-the-build.png
[jenkins-console-output]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/peter-qa/platform/quality-assurance/images/jenkins-console-output.png
[jenkins-session-cookie-output]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/peter-qa/platform/quality-assurance/images/jenkins-session-cookie-output.png
[jenkins-trimmed-session-cookies]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/peter-qa/platform/quality-assurance/images/jenkins-trimmed-session-cookies.png
