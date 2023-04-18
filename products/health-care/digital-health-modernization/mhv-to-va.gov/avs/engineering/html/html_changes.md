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