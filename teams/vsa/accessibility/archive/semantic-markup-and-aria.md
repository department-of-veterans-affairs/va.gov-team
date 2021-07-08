# Semantic Markup and ARIA — In-progress

## Recommended Reading

[Why, how, and when to use semantic HTML and ARIA](https://css-tricks.com/why-how-and-when-to-use-semantic-html-and-aria/)

[WAI-ARIA basics](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)

[ARIA support and enhancements](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

> Provide a glossary of semantic HTML elements.

## For Designers

1. Designers need to understand HTML enough to markup decisions and indicate the semantic structure of designs.

    1. What item is the `<main>` content area?
    1. What is the main content and what is complementary?
    1. What is the `<aside>`, if there is one? This might be referred to as a sidebar, subnav, sidenav, or a right or left version of those.
    1. What is the `<header>` and `<footer>`?
    1. Mark up the heading levels, respecting heading order, `<h1>`, `<h2>`, `<h3>`, `<h4>`. It isn’t necessary to have all of those on the page, but an `<h1>` must be followed by an `<h2>`, and there must not be an `<h3>` if there isn’t a preceding `<h2>`.
    1. Additionally, be sure to document the reading order.

## For Developers

