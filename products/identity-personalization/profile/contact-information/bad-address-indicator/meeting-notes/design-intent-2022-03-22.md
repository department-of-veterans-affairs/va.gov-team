# Personal Information Revision Design Intent, 3/22/2022
  
  ## Notes  
  - Marci gave an overview of the problem we are trying to solve
	- Christina showed her Mural boards and explained the discussions, then presented her low-fi mockups
	- Design Feedback
		- Does the confirm alert stay forever? Unless they confirm or change, the alerts stay
	- IA Feedback
		- Mikki had no major feedback.  She's looking at the relationship between the buttons and the buttons being split
		- Christina explained that we had concerns about people accidentally confirming their address, and then having no way to undo that, and we are curious what will happen in testing too.
		- Jim - one pattern that he's seen is to use two buttons and one says "Is this mailing address correct" with a Yes, and a No this is not correct.
		- Jim liked the first Mural board and he appreciated the progression.  If we could break the user flows into swim lanes.
		- Likely will not be any IA work on this
		- Jim asked when we would start user testing.  It would be after we incorporate this feedback; no exact dates yet.
		- Alert style is approved, but is not mobile friendly.  There is an alert style in the experimental design system that is mobile-friendly - https://design.va.gov/experimental-design/expandable-alert.
		- There was a question about the yellow alert - it's an input message alert in the experimental design system.
		- Martha asked if they are stuck in a loop after they click to confirm.  
		- They do make a good point that confirming the address appears to be the primary action, when in fact it is the secondary action.  We may consider making the heading something like "Update or Confirm your address"
		- It might make sense to add update the address button to the modal
	- Accessibility
		- Include aria live light warning notification
		- We could also use aria describe by
		- Use aria required for the fields and aria invalid to indicate any fields that are invalid.
		- We might be able to section these off in terms of headings.
		- Focus management is going to be important in the design to development
	- Research Feedback
    - If there are two valid patterns, always feel free to do A/B testing.  Test the mobile design as well.
    
  ## Next steps
    - All feedback will be provided by EOD tomorrow
