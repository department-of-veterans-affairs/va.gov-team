2:30-3:30PMET

# Access

* https://zoom.us/j/722853312
* +16465588656,,722853312# US (New York)
* +17207072699,,722853312# US (Denver)

# Agenda / notes

* [Andrew] Welcome VFS teams!
  * Eng meeting overview + introductions (15m)
  * By Light, VSA, VAOS
* [Keifer] Open discussion: Sentry tagging (10-15m)
  * [Sentry tagging standards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/sentry-tagging-standards.md)
  * [PR for refactoring automatic error reporting](https://github.com/department-of-veterans-affairs/vets-api/pull/3206/files)
  * Issue ownership: divide up by file location or URL
    * What's "URL"? website --> browser URL, backend --> API endpoint
    * How does this get outside of Sentry? --> not yet, currently just tagged in Sentry, no integration to GitHub/Slack yet.
      * Need newer Sentry version to make this happen --> currently stalled
