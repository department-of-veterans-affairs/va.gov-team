# Using authenticated sessions for load testing

## Things you need
1. SOCKS proxy access
2. Access to internal tools (specifically Jenkins, but if you have access to one then you tend to have access to all)
3. Access to Devops repository
4. A terminal (For example: Bash, GitBash, WSL, MacOS terminal)

## Steps to create authenticated sessions
1. Navigate to this Jenkins task in a browser
2. Log in to Jenkins
3. Click "Build with Parameters" from the left side of the site
4. Click "Build" (you do not need to enter any rake_params)
5. Click the build
6. Select "Console Output"
7. Scroll through the output until you see an array of hashes with keys "uuid" and "cookie_header"
