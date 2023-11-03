`[WIP]`

# 2023-11-02 Ask VA feedback

REMINDER: Ask about search result pattern, why radio buttons?

## General considerations

- Whenever possible lean on existing components and patterns from the design system
- Consider focus management: when someone navigates from one step to the next what new element will be in focus? If possible, include this information in your designs
- Page headings must always decrease by single steps, e.g. don't jump from `h1` to `h3`
	- This may difficult with the "need help?" Section heading. Note that the form system may be updated soon to alleviate this issue. This will be worth our keeping in mind moving forward

## Specific feedback and questions

### Ask VA Homepage

- [Per the design system](https://design.va.gov/components/alert#how-to-use-alerts), cannot use 2 stacked alerts
- Question: In the version with just 1 alert, why is the text under the heading "Sign in for the best experience" presented in a list, instead of as single-line paragraphs, each wrapped in a `p` tag? 


### Authenticated dashboard

- The "create new question" button is far outside of the "stack," this may be difficult for some folks to find, and will make it more complicated to ensure that the button is easily reachable from keyboard/by screenreader. Suggest moving that button into the "stack," e.g. directly above or below the "questions" heading
- A suggested page hierarchy for the card view

```
⁃ "Ask VA" `H1`
	⁃ "Your questions" `H2`
		⁃ "[title of each card]" `H3`
			- "[Card content]" `P`
	⁃ "Need help?" `H2`
```

- Question: are the cards in the card view using filler content, or will they all have identical titles? For these to be easily navigable we suggest giving each card a unique title
- Question: in the list view on the authenticated dashboard what is the distinction between "business" and "personal?" 
	- Is there an existing tabbed component?
	- If there isn't an existing tabbed pattern within the VA design system or USWDS would headers for each section work instead, combining the info to a single page?
	- The [existing table component](https://design.va.gov/components/table) is not well set up for interactive content as your design suggests. We caution you from proceeding here without further research
	- If you do proceed with a table, we suggest that you test it with VERY long question text, as that may help to highlight any issues on mobile and with screenreaders
