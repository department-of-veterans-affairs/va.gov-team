# Checklist for Reviewing Staged Content Errors

### Things to check when you get an error

**Check to make sure the meta data includes a template:**
The most typical templates used are “L2-section-landing” (forsection landing pages) and “1-topic-landing” (for section subpages). If neitherof these templates fit the pages’ needs, check with design re: finding a moreappropriate template. See meta data below for example:

![img](/img/docs/content-errors/content-1.png)

**Check that Related Links (Piano Keys) are formatted properly:**

**Code Lines:**
Each `links` should have 3 lines:
```
	- url: /healthcare/
	 title: Health Care
  	 description: Learn about VA health care benefits.
```

**URLs:**
All Related Links are internal URLs:

- For Internal URLs, copy and paste each URL directly from GitHub, not from the copy deck (eg, if you are working in pensions, copy only through forward slash before “pension” [**vets-website**](https://github.com/department-of-veterans-affairs/vets-website/tree/content/wip/pensions)/[content](https://github.com/department-of-veterans-affairs/vets-website/tree/content/wip/pensions/content)/[pages](https://github.com/department-of-veterans-affairs/vets-website/tree/content/wip/pensions/content/pages)/[pension](https://github.com/department-of-veterans-affairs/vets-website/tree/content/wip/pensions/content/pages/pension)/**eligibility.md** then change `.md` to `/`)
- Be sure that there is a backslash before your url in github (eg, `/pensions/eligibility/`)

**Spacing:**
- The `– url:` line should be 2 spaces in from the left (so that the “–“ aligns vertically with the first “l” in “relatedlinks:”
- The `title:` and `description:` lines should have **no** space between lines, while
  the first letter of each line should align vertically with the “u” in "url"
- There should be 1 space after the `:` in each of the lines (url, title, and description)
- There should be **no** line space at the top of the links (between `relatedlinks:` and
  the first url) or at the bottom of the links (between the last description and the `---` line)

See example below:

![img](/img/docs/content-errors/content-2.png)

One helpful way to check to see if you have your Related Links (Piano Keys) formatted properly is to preview the page:

*If your Related Links look like this in preview, you likely have the format correct:*

![img](/img/docs/content-errors/content-3.png)

*If your Related Links look like this in preview, something is likely wrong:*

![img](/img/docs/content-errors/content-4.png)


**Check spacing in main text area:**

- **Between coding lines:**

  - There should be 1 blank line between each line of code and its surrounding text in most cases. See example below:

![img](/img/docs/content-errors/content-5.png)

**Note that there are some exceptions. Please refer to the html guide and/or similar pages for specific coding.**

- **Inbulleted lists:** Sometimes copied text spacing between the beginning of the line and first letter of text doesn’t translate – backspace to line number and then spacebar forward to where text should begin:

  - 1 space before the `-` for main bullets
  - 2 spaces before the `-` for sub bullets

See example below:
![img](/img/docs/content-errors/content-6.png)

-  Verify all **external** URLS:
  -   `[Text to link inside brackets](ENTIRE.url.GOES.here)`
  -   No space between brackets and parentheses
  -   Enter the external URL into your browser andcopy it to make sure you have the correct URL.
  -   Double check that you’ve included the `http://`or `https://` in the URL coding. Links that begin only with `www` will not work.

-  Verify all **internal** URLS (non-piano keys)

   -  `[Text to link](/pension/apply/)` <- not entire url for internal links

   -  Internal URLs should be copied directly fromGitHub, not from copy deck

      (eg: if you are working in pensions, copy only through forward slash before “pension” [**vets-website**](https://github.com/department-of-veterans-affairs/vets-website/tree/content/wip/pensions)/[content](https://github.com/department-of-veterans-affairs/vets-website/tree/content/wip/pensions/content)/[pages](https://github.com/department-of-veterans-affairs/vets-website/tree/content/wip/pensions/content/pages)/[pension](https://github.com/department-of-veterans-affairs/vets-website/tree/content/wip/pensions/content/pages/pension)/**eligibility.md** then change `.md` to `/`)

   - Double check that there is a `/` before and after each link (eg, `/pension/apply/`). Links without the `/` will not work.

-  **Check for any extraordinary code:**
   - Bulleted text
   - Accordion links
   - Tables

See GH cheat sheet to verify code: <https://github.com/department-of-veterans-affairs/vets.gov-content/blob/master/templates-and-guides/guides/md-and-html-style.md>

- Review format for basics:
  - Subheads
  - Bulleted lists
  - Links
- And check basic formatting errors:
  - Missing forward slashes
  - Missing spaces
  - Missing break tag
  - Missing address block component
  - Full link instead of relative link for internal vs. external destination
