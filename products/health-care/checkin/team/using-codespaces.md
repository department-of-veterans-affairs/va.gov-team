	1. Set up SOCKS access
	[Internal tools access via SOCKS proxy](https://depo-platform-documentation.scrollhelp.site/getting-started/Internal-tools-access-via-SOCKS-proxy.1821081710.html)
	2. Open Ubuntu
		a. Type this at the $ prompt
			i. vtk socks on
	3. Set up or start your codespace
		a. Reference: [Using GitHub Codespaces](https://depo-platform-documentation.scrollhelp.site/developer-docs/Using-GitHub-Codespaces.1909063762.html)
		b. Go to: [department-of-veterans-affairs/vets-website: Frontend for VA.gov (github.com)](https://github.com/department-of-veterans-affairs/vets-website)
		c. Drop down "Code" button
		d. Click "Create codespace on main"
			i. Or start your codespace if you already have one set up
	4. Open Codespace
		○ Set this to false: checkInExperienceEditingPreCheckInEnabled
		○ Set this to false: checkInExperienceTranslationDayOfEnabled
	5. Go to the Terminal Window
		a. Pre Check in
			i. Type this at the $ prompt
				1) yarn watch --env api="https://${CODESPACE_NAME}-3000.githubpreview.dev" --env entry=pre-check-in
		○ Check in 
			§ Type this at the $ prompt
				□ yarn watch --env api="https://${CODESPACE_NAME}-3000.githubpreview.dev" --env entry=check-in
	6. Create another terminal node 
		a. Click the + in the Terminal window to create another node
		b. Type this at the $ prompt to start the mock API
			i. yarn mock-api --responses src/applications/check-in/api/local-mock-api/index.js
	7. Make 3000 and 3001 ports public
		a. Go to the Ports window
		b. Right click on the 3000 (or 3001) port
		c. Click Port Visibility
		d. Click Public
	8. Open website 
		a. Right click on port 3001 line and click Open in Browser
	9. Add this to the end of the website
		a. Pre-check-in
			i. /health-care/appointment-pre-check-in/?id=24c4bfaa-9094-4cdf-941a-a446f1eabdd2
		b. Check in
			i. /health-care/appointment-check-in/?id=46bebc0a-b99c-464f-a5c5-560bc9eae287
	10. Login as
		- Username = Smith 
		- Password = 1234

