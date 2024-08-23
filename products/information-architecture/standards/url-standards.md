# URL Standards and Guidance

### Current URL standards

The design system documentation includes standards for 
- [unauthenticated URLs (manually curated)](https://design.va.gov/components/url-standards/)
- [anchor tags](https://design.va.gov/components/url-standards/#guidelines-for-anchor-tags-ie-jump-links)
- [paramters in URLs](https://design.va.gov/components/url-standards/#guidelines-for-parameters-in-urls)
- [vanity URLs (manually curated)](https://design.va.gov/components/url-standards/#vanity-urls)
- [redirect guidance](https://design.va.gov/components/url-standards/redirects)

### Additional URL guidance needed
- [ ] URL structure and standards for form flows - [#88407 - in progress](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/88407)
- [ ] URL structure for authenticated URLs
- [ ] URL guidance and standards for automatically generated URLs (i.e. Resources and support)
- [ ] URL guidance for temporary pages (i.e. for purposes of testing in staging, or temporary production pages)
- [x] Guidance for using parameters in URLs

## Notes and draft guidance

The information below will be moved to the design system once it is finalized. 


### URL guidance for automatically generated URLs

**Scenarios**
- Pages that utilize the H1 as the URL (i.e. Resources and support pages)


### URL guidance for temporary pages

**Use case: Launching a page in staging for purposes of user testing**
  - A team may want to launch a new page/tool in staging for purposes of user testing.  The page/tool is intended to eventually be released to production.
  - Considerations:
    - Do we know the what the final product URL will be?  If so, we should utilize that URL when possible
    - Will this page/tool eventually replace a page/tool already in production at the intended URL?
    - What measures need to be put in place in case the page/tool is accidentally pushed to production?


**Use case: Launching a new version of a page in production along side the current version**
  - This was done for the home page redesign.  The new version of the home page was launched to production at a different URL, and traffic was slowly directed to it.  Once it was ready to replace the existing home page, the temporary URL was redirected and the core home page was replaced with the new design.
