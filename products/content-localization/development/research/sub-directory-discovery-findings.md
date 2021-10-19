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
