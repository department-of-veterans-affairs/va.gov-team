# headers

`#` h1

`##` h2

`###` h3

`####` h4

`#####` h5

# font styles

`*` for *italics*

`**` for **bold**

# lists

`-` bullets

- one
- two
- three

`1.` numbers

1. one
2. two
3. three

Two-column bulleted list

_Hint: only change the content between the `<li>` tags, and add additional list items as needed_

```
<div class="small-12 medium-6 usa-width-five-twelfths columns">
<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>
</div>

<div class="small-12 medium-6 usa-width-five-twelfths columns">
<ul>
<li>four</li>
<li>five</li>
<li>six</li>
</ul>
</div>
```

# phone numbers

`<a href="tel:+1phonenumber">phone number</a>`

<a href="tel:+12222222222">+1 222-222-2222</a>

# email addresses

`[someone@yoursite.com](mailto:someone@yoursite.com)` for markdown

[someone@yoursite.com](mailto:someone@yoursite.com)

`<a href="mailto:someone@yoursite.com">someone@yoursite.com</a>` for html

<a href="mailto:someone@yoursite.com">someone@yoursite.com</a>

# address block
Create additional address lines by starting a new line and putting the content between`<dd>` and `</dd>` tags

```
<p class="va-address-block">
Address line 1<br>
Address line 2<br>
City, ST 00000<br>
</p>
```

<dl class="va-address-block">
<dd>Address line 1</dd>
<dd>Address line 2</dd>
<dd>City, ST 00000</dd>
</dl>

# table
See [GitHub's guide](https://help.github.com/articles/organizing-information-with-tables/) for more information on formatting and editing markdown tables

```
| Column 1 heading | Column 2 heading | Column 3 heading |
| --- | --- | --- |
| Content | Content | Content |
| Content | Content | Content |
| Content | Content | Content |
```

| Column 1 heading | Column 2 heading | Column 3 heading |
| --- | --- | --- |
| Content | Content | Content |
| Content | Content | Content |
| Content | Content | Content |

# literal formatting
Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown’s formatting syntax.

\*Fine print

`\*Fine print`

Markdown provides backslash escapes for the following characters:

```
\ backslash
` backtick
* asterisk
_ underscore
{} curly braces
[] square brackets
() parentheses
# hash mark
+ plus sign
- minus sign (hyphen)
```

# large dark blue intro text

`<div class="va-introtext">intro copy</div>`

<div class="va-introtext">intro copy</div>


# featured blue box sections

`<div class="feature" markdown=“1”>featured copy</div>`

<div class="feature" markdown=“1”>
featured copy
</div>

# links

`[linktext](/filepath/)` for markdown

[linktext](http://www.google.com)

`<a href="/filepath/">link text</a>` for html

<a href="http://www.google.com">link text</a>

# buttons

Solid green button

`<a class=“usa-button-primary va-button-primary” href=“paste URL here”>button text</a>`

Solid blue button

`<a class=“usa-button-primary” href=“paste URL here”>button text</a>`

Outline blue button

`<a class=“usa-button-primary usa-button-outline” href=“paste URL here”>button text</a>`

# line breaks

Insert a `<br>` tag on its own line to add more space between two elements

```
First line of text

<br>

Second line of text
```

# subway maps

```
<ol class="process">
  <li class="process-step list-one">text</li>
  <li class="process-step list-two">text</li>
  <li class="process-step list-three">text</li>
</ol>
```

# anchor links

1. Insert this line of code above the text the anchor link should jump down to, replacing the text between the "" with a name to identify it (no spaces):

`<span id="name-of-anchor-link"></span>`

2. Create the anchor link like so, where the text after the `#` matches the id given in the span code above:

`[Link text](#name-of-anchor-link)`

Note: If you need to link between two pages rather than within one page, you'll add the relative url for the page you want the user to jump to in front of the #name-of-anchor-link, like this, for example:

`[Link text](/life-insurance/disabled-and-terminally-ill/#waiver)`

The code that sits above the text the anchor link should jump to is the same structure whether you need to jump between pages or within a page, for example:

`<span id="waiver"></span>`

# YAML elements

See the guide to [working with templates](/templates-and-guides/guides/Working_with_Templates.md)
