# Heuristic Analysis: Ask a Pharmacist
## App Background
This is an informational web app. Mobile.va.gov lists the features as:
Find out what services My HealtheVet Pharmacy offers
Learn how to read prescription labels and identify pills by sight
Read information from VA trusted medication resources
Find out how VA Pharmacies operate and locate a nearby facility
Veterans are pointed to MHV to manage prescriptions on mobile (native mobile interface for the Rx Refill feature of MHV). A Veteran might use Ask a Pharmacist to access information before using Rx Refill/MHV, or at any point in managing their prescriptions when a question arises.
## Strive for consistency
### Does this experience feel like it is one thing, made by one team? 
No - this app is a collection of links to other places, with a limited amount of info accessible in the app.
### Do patterns feel like they all came from the same set? 
While the app UI itself feels consistent, most interactions direct users out to other places (and users don’t know where they’re going until they get there). Also, some destinations aren’t mobile friendly. 
### Are controls in similar places, is behavior easy to predict? 
Pretty soon after interacting with the app, users will likely understand that click of a link will direct them away from the app. There are some patterns about where links go (e.g. most links in the ‘Drugs’ section go to FDA, all links in the ‘Medication Articles on MHV’ section go to MHV), but there are still a lot of different places the app directs to lots of different places, including: 
Medication Disposal links to pbm.va.gov
Pill identification links to pillbox.nlm.nih.gov
Track Adverse Drug Events at FDA, Drugs with Dietary Supplements, Drugs with other Drugs, Drugs with Food and Beverages link to fda.gov
Drug Interactions Checker links to drugs.com
Rx Refill links to myhealth.va.gov

## Keep users in control
### Do people feel like they are in charge, or the technology? Can they bail out of interactions whenever they want? 
The app notifies users when they are leaving the Ask a Pharmacist app to go to another place, and users can choose to cancel to stay in the app. However, the experience of the app is essentially to access information elsewhere.
 
## Reduce users’ minimum steps
### How complex are interactions? How is the balance between number of steps, and clarity of next action? 
Interactions are not complex - the main UI pattern used is a list of links. Some categories nest more links & when this is the case, clear ‘next’ and ‘back’ arrows are present to help users navigate around. Once a user navigates outside the app, they need to use their browser’s back button to get back to the web app, which could be a complicated interaction for a user if they don’t understand that’s the route back.
## Users should know where they are
### Is it easy to understand where to find things? 
It’s fairly easy to find things - all screens of the app use the same UI except for detail pages of content. So users don’t need to learn how to move around any areas of the app that feel different. There are also small information icons next to every section to explain what the resource is, however some information tooltips are useful in explaining what’s behind the click, others are not.

## Use plain language
### Clear labels, simple instructions, minimize jargon. 
Yes, the language is super clear. For example, in the ‘Mediation articles on My HealtheVet’ section, all links are the titles of the articles. Some of the titles include what the resource is and where it is (ex: ‘Safe Disposal of Medicines on FDA’). The app also make it clear when you are leaving Ask a Pharmacist to go to an external website, and when the purpose of that website is to take an action - like reporting something (adverse drug event, medication error) - to a non-VA site.
## Make the ui aesthetically appropriate
### Does the feel of the experience feel like it is tonally appropriate to its context? 
I think so - the purpose of the app is to provide a super clear guide of where to go to get information related to a bunch of different types of pharmacy needs. However, it’s also jarring and tedious to have to go around to a bunch of different places to get information. The UI of the app is super bare bones and informational and mostly serves to organize links clearly. It feels like reddit or other apps that are purposefully pared down to organize information. The blue and gray colors feel somewhat in line with the VA universe of design. 
Present new information with meaningful aids to interpretation
## Does the experience scaffold new ideas for people?
## Other notes
I ran into 2 broken links (Rx refill guide and so this app might not be being maintained.
I didn’t use any credentials here - users can use creds to get into Rx management tools, but I didn’t see anything else where logging in would be necessary. 

