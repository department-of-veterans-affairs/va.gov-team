# Outstanding input from VSP Midpoint Review, 4/12/21
https://github.com/department-of-veterans-affairs/va.gov-team/issues/22836

**Should** and **Consider** input.  All **Must** input was incorporated

## Content

### Should

Confirmation page: I recommend updating this line to match the edit that was made on the intro page:
We usually process claims within 30 days. TO: We usually make a decision within 30 days.


## Accessibility https://github.com/department-of-veterans-affairs/va.gov-team/issues/23067

### Should

- Start the education application should be a primary action link.
- SSN should use the ***-**-9191 pattern to match our production component.
- Break the form into smaller chapters. There's a lot of information here on one page that could be a high cognitive load.
- The Direct Deposit Information should be its own section like "Banking" or something similar.
- "Go back to VA.gov" on the confirmation page should be a link. The action link style might be a good one here.

### Consider

- Tracking users who prefer to click the first "Start the education application" vs. the second one. There's a lot of information in the subway map that could be useful, but may be ignored if users can shortcut skimming/reading it before starting their application.
- Additional research sessions with assistive tech users when code is stable in staging or production.



## Design https://github.com/department-of-veterans-affairs/va.gov-team/issues/23005

### Should
- Break form content into smaller chapters 

### Consider 
- Put "Confirm you're eligible for VRRAP" content on form confirmation screen in blue, info alert box 

## IA

- Regarding the button on the confirmation page for "Go back to VA.gov"...wondering if it would be more helpful to return them to the static page for the program, so they can review any additional information rather than the home page?


## QA

### Should:

TestRail test cases should be tested on multiple platforms in order to ensure feature functionality works as expected with different browsers and different OSes.

### Consider:

Consider writing automated end-to-end tests for test cases defined in TestRail. TestRail cases should have their Automation Type changed to Cypress once this is implemented.
