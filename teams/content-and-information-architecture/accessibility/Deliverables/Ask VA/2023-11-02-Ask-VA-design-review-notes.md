# 2023-11-02 Ask VA feedback

## CAIA Reviewers
- Eli
- Jamie

## Ticket reference
- [#60696](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60696)

**NOTE:** Because of the limited time available to CAIA accessibility specialists, this review wasn't able to thoroughly examine all aspects of the provided [sketch file](https://www.sketch.com/s/6a75d0a2-e484-4f1e-8675-ad5747a1a871/p/4E7790A9-059D-4A3B-A184-45F1E9434CDB/canvas#Comment). If you have any further questions about anything we've reviewed or missed, please don't hesitate to reach out.

Also, because this is an initial design review, where we've only had access to a Sketch file consider this feedback preliminary. 

## General considerations

- Whenever possible lean on existing components and patterns from the design system
- Consider focus management: when someone navigates from one step to the next what new element will be in focus? If possible, include this information in your designs
- Page headings must always decrease by single steps, e.g. don't jump from `h1` to `h3`
	- This may be difficult with the "need help?" Section heading. Note that the form system may be updated soon to alleviate this issue. This will be worth our keeping in mind moving forward

## Specific feedback and questions

### Ask VA Homepage

- [Per the design system](https://design.va.gov/components/alert#how-to-use-alerts), cannot use 2 stacked alerts
- Question: In the version with just 1 alert, why is the text under the heading "Sign in for the best experience" presented in a list, instead of as single-line paragraphs, each wrapped in a `p` tag? 


### Authenticated dashboard

- The "create new question" button is far outside of the "stack," this may be difficult for some folks to find, and will make it more complicated to ensure that the button is easily reachable from the keyboard/by a screen reader. Suggest moving that button into the "stack," e.g. directly above or below the "questions" heading
- A suggested page hierarchy for the card view

```
⁃ "Ask VA" `H1`
	⁃ "Your questions" `H2`
		⁃ "[title of each card]" `H3`
			- "[Card content]" `P`
	⁃ "Need help?" `H2`
```

- Questions: 
	- Are the cards in the card view using filler content, or will they all have identical titles? For these to be easily navigable we suggest giving each card a unique title
	- In the list view on the authenticated dashboard what is the distinction between "business" and "personal?" 
	- Is there an existing tabbed component?
	- If there isn't an existing tabbed pattern within the VA design system or USWDS would headers for each section work instead, combining the info to a single page?
	- The "list" view appears to be using an interactive table. The [existing table component](https://design.va.gov/components/table) is not well set up for interactive content as your design suggests. We caution you from proceeding here without further research. Tables, generally, aren't used across VA.gov like this. If you do proceed with a table, we suggest that you test it with VERY long question text, as that may help to highlight any issues on mobile and with screenreaders

### Chapter 01

- Our assumption is that the backend of the Ask VA system requires that you ask a number of conditional questions to help properly answer a question -- it may be helpful to provide an explanation for why information, especially personal information, is being requested before allowing someone to enter a question

## Next steps

CAIA is happy to continue to support ya'll as you see fit. We are available to briefly embed or consult with your team to provide more direct assistance with tasks like testing and design feedback. [Here is more info on how we can help](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/README.md).
