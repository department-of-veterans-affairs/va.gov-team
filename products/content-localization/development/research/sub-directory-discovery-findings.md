# Sub Directory URL Discovery Findings

### Description of discovery work done

Using a sandbox tugboat cms instance, the follow urls were set up with a language sub directory:

**Spanish**
https://web-nwlghnqkwe3ftxcgy830jkfejcxjswak.demo.cms.va.gov/es/health-care/covid-19-vaccine-esp/
https://web-nwlghnqkwe3ftxcgy830jkfejcxjswak.demo.cms.va.gov/es/health-care/covid-19-vaccine/about-covid-19-vaccine-esp
https://web-nwlghnqkwe3ftxcgy830jkfejcxjswak.demo.cms.va.gov/es/health-care/covid-19-vaccine-esp/booster-shots-and-additional-doses-esp
https://web-nwlghnqkwe3ftxcgy830jkfejcxjswak.demo.cms.va.gov/es/health-care/covid-19-vaccine-esp/vaccine-record-esp

**Tagalog**
https://web-nwlghnqkwe3ftxcgy830jkfejcxjswak.demo.cms.va.gov/tl/health-care/covid-19-vaccine-tag
https://web-nwlghnqkwe3ftxcgy830jkfejcxjswak.demo.cms.va.gov/tl/health-care/covid-19-vaccine/about-covid-19-vaccine-tag
https://web-nwlghnqkwe3ftxcgy830jkfejcxjswak.demo.cms.va.gov/tl/health-care/covid-19-vaccine-tag/booster-shots-and-additional-doses-tag
https://web-nwlghnqkwe3ftxcgy830jkfejcxjswak.demo.cms.va.gov/tl/health-care/covid-19-vaccine-tag/vaccine-record-tag

After the new url alias were published, the frontend of the website was rebuilt to reflect the url changes.

### Conclusions

* Url structure in general does not affect the pages getting built correctly, and they are displaying as expected
* Breadcrumbs are displayed correctly and remain appropriately structured
* The sidebar also displays appropriately and looks no different from when the original url structures were in place.
* 301 redirects would need to be in place for these types of url structure changes
* The i18select React widget would need to be updated to support this type of URL structure so that it displays on new urls.

Overall the changes to the url structures did not appear to be a blocker in any way. The urls can be changed, but need to be uniform for information architecture considerations.

Having language content live in a sub-directory of the language code ('/tl/', '/es/', etc) is the way that a typical Multi-lingual Drupal site would set up it's url structures, so moving to this type of a url schema would potentially make moving to a more traditional Drupal api driven application more seamless. That being said, there is no immediate need to change the url structure at this time, and 301 redirects will be needed regardless when we decided to move to sub-directories.
