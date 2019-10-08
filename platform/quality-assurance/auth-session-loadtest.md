# Using authenticated sessions for load testing

## Things you need
1. [Access to internal tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/onboarding/request-access-to-tools.md) (specifically Jenkins, but if you have access to one then you tend to have access to all)
1. [SOCKS proxy access](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/Internal%20Tools.md#configure-the-socks-proxy)
1. Access to [`devops`](https://github.com/department-of-veterans-affairs/devops) repository
1. A terminal (For example: Bash, [GitBash](https://gitforwindows.org/), [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10), MacOS terminal)

## Steps to create authenticated sessions
1. Start up the SOCKS proxy
1. Navigate to the [vets-api-load-test-sessions](http://jenkins.vfs.va.gov/job/rake_tasks/job/vets-api-load-test-sessions/) Jenkins task in a browser
1. Log in to Jenkins  
    ![Jenkins log in example][jenkins-login]
1. Click "Build with Parameters" from the left side of the site  
    ![Jenkins build with parameters example][jenkins-build-with-parameters]
1. Click "Build"
    ![Jenkins build example][jenkins-build]
1. Click the new build in the list of builds to the left  
    ![Jenkins click the build example][jenkins-click-the-build]  
1. Select "Console Output" from the menu  
    ![Jenkins console output example][jenkins-console-output]
1. Scroll through the output until you see an array of hashes with keys "uuid" and "cookie_header"  
    ![Jenkins session cookie output example][jenkins-session-cookie-output]
1. Trim unecessary characters such as escaping until you end up with something like the below  
    ![Jenkins trimmed session cookies example][jenkins-trimmed-session-cookies]
1. Save the trimmed array to a file named `sessions.json`
1. Use the array of sessions in `sessions.json` with Python's [json library](https://docs.python.org/3/library/json.html)
1. Run your load test

[jenkins-login]: images/jenkins-login.png
[jenkins-build-with-parameters]: images/jenkins-build-with-parameters.png
[jenkins-build]: images/jenkins-build.png
[jenkins-click-the-build]: images/jenkins-click-the-build.png
[jenkins-console-output]: images/jenkins-console-output.png
[jenkins-session-cookie-output]: images/jenkins-session-cookie-output.png
[jenkins-trimmed-session-cookies]: images/jenkins-trimmed-session-cookies.png
