For each pull request that involves markup we want to make sure that a few basic accessibility requirements are met. This is not meant to be an exaustive accessibility checkpoint but rather to help us mitigate some of the accessibility burden as well as to write code that improves our codebase.

1. `aria-label`  tags on links - These label tags need to be added to links where the text of the link may not be descriptive enough for a screen reader OR if you are adding a tel: link. Also, if you are adding a tel: link the number inside the label should follow this format `0 0 0. 0 0 0. 0 0 0 0.`
