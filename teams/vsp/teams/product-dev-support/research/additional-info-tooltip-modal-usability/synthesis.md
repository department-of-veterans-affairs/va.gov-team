# Synthesis/Insights from Learn More Component User Testing

We had a total of 7 participants in our research on the "Learn more" component. We learned how some prefer to digest more information about a question. After the interviews, we gathered 5 people to create an affinity map. We divided up the columns into the three patterns: modal, accordion, and tool tip. Along with those columns, we made one with observations and recommendations. https://funretro.io/publicboard/KzKcXZa4Foel3OcV6MzvTAeCerz1/8435f207-1895-4c73-b34e-9bd311d278cd

Links tested:

* https://staging.va.gov/gi-bill-comparison-tool/
 
* https://codepen.io/tpierce_402/full/PoYVKKa

## Insights and Recommendations

* Accordion works well if you have links off to deeper content. 
* Tooltips are nice if you need a parenthetical aside to your label. 
* People had trouble remembering the content of the modal component once they closed out of it. 
* Traumatic brain injuries are the most common injury among veterans. People have issues with cognition/attention. 
* After each component interaction, we asked the question, "How well were you able to remember what it said in the "Learn more" when you made the selection on the form page?" Almost half of participants mentioned outright that they were unable to remember the information they just read in the modal.
  - "I just briefly looked at it, so I don’t remember looking at it, but I’d probably go back and read again. If I have several places to look at, I’ll take notes myself."
  - "Just reading it one time, I wouldn’t remember it very well, but I'll probably go back and reread it"
  - "How well could they remember the modal? Not that much, to be honest."

* Designers need to be more aware of content design. Designers may think more of what is displayed on the page and what is hidden. Ask, "why are you hiding this? Why not just show it?" Minimalism is a big design trend, but we need to keep in mind that things that are hidden are not as findable. 

* A maximum length/character count for "Learn more" tool tips. For screen reader purposes, have linked text and not a URL. It's awful to hear a url read out by a screen reader.

* Javascript tool tips were very difficult to use and broke users' expectations. Many users were not able to click on the tool tip which further confused them because previous "Learn more" were clickable. In the future we should stick with CSS tooltips that activate on tap or hover. 

* There should be some differentiation between "Learn more" accordion and "Learn more" tool tip — accordion could have a carat. Tool tip could have different language, such as the "What's this?" that is used on [calc.gsa.gov](https://calc.gsa.gov/).
