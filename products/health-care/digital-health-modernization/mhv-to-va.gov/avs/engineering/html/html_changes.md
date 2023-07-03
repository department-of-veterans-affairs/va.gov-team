# Changes

## Header

- move `<div style="font-size:1.8em;font-weight:bold;">After Visit Summary</div>` to top
- remove inline styles
- change `div` to `h1`

## Footer

- change `<div id="pageFooter">` to `<footer id="pageFooter">`
- move to bottom of page

## Sheet Header

- change `<div id="sheet-header" class="normalFont" style="height:1.725in;">` to `<section id="sheet-header" class="normalFont">`
- change patient name div to h2 and remove inline styling
- DOB, visit date, etc: wrap in `<p>` element, remove `<div>` wrappers and add a `<br />` to the end of each line

## Address

- change `<div id="group-address" class="group">` to `<section>` element
- no other changes (will be hidden on va.gov)

## Today's visit section

- change enclosing `<div>` to `<section>` element

### Enclosed sections (diagnoses, vitals, etc)

- change enclosing `<div>` to `<section>` element
- remove `<br>`s in h3 element
- remove div wrapper below h3 element, leaving content
- remove wrapping single column `<table>`s, leaving just unordered lists
- (if possible) remove wrapping `<a>` elements (like for clinic names)

## My treatment plan section

- change enclosing `<div>` to `<section>` element

### Enclosed sections (new orders, health reminders, etc)

- change enclosing `<div>` to `<section>` element
- remove `<br>`s in h3 element
- remove wrapping single column `<table>`s and consolidate multiple `<ul>` lists into one list
- (if possible) remove wrapping `<a>` elements (like for clinic names)
- "Patient education" and "Other instructions" both have the id `section-instructions`, one should be changed so they are unique.
