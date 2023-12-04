This file will likely be absorbed into a process file (or somewhere else describing the functionality) in the future.

Notes on how the availability framework works, that future folks making decisions on turning one on may want to know:
* Address (Contact Info) and Phone Number (Contact Info) are collective sets - turning on the waygate for address applies to both home and mailing address, and phone number impacts home, work and cell.
* The login waygate will only ever function as use case 3 (the buttons to log in are available, and an informational alert appears onscreen)
* Similarly, screens that do not have use case 1 functionality (attempting to set up UC1 on these screens will result in a Use-Case-2-and-Use-Case-3 hybrid UI) are: developer screen, home screen, all category screens, and the veterans crisis line.
* We do not have the ability to add waygates to webviews (such as the privacy policy, VA location finder, VA COVID-19 updates, etc)
* In "Personal Information", the "How to update or fix an error in your legal name" and "How to fix an error in your date of birth" large panels are the same screen, so any AF alerts for either of those will be applied to both
* WG_Claims doesn't exist as a toggleable screen as it is just a navigation holding screen with no external requirements and including it compounding testing and nav logic requirements unnecessarily.
* We get use case 2 and 3 "for free" whenever a new feature is created, as long as it uses the screen templates (aka no additional code needed, and we can use AF for those use cases with firebase and it works appropriately - tested during initial implementation). We do *not* get use case 1 for free, we always need to remember & make code changes to get that functionality.
