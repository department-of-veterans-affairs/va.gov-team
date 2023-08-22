# Date Picker Research
[Github ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61211)


## Current Experience
On both the 10-10CG and the 10-10EZ, we currently use the **Date Input component**. A few folks on Slack have anecdotally mentioned that screen reader users prefer this component, as dropdowns are easier to use.


### VA Date Input Pattern
**Quote from screen reader research participant:**
*“The birthdate - it acts like it wants me to type in numbers but most of the time there’s date pickers so right now until I actually start I won’t know what it wants me to do. Other than get my date in there, but how I get my date in there...well, it just hasn’t told me yet.”*

But the existing Date Input pattern has had shortcomings. It overflows on small screen sizes and thus isn’t always mobile-friendly. There’s also reports of the dropdown “jumping” from one selection to another (cited in the ticket).


## Potential Experience
**VA Experimental Memorable Date Component**

Looking into the Memorable Date component, it does appear to be quicker to complete for a memorable personal date (typing and tabbing does the job, rather than thinking and carefully making a selection from a dropdown).

**Bugs related to the Memorable Date component**

The v3 Memorable Date component is styled like the USWDS Memorable Date component, with a drop down to choose the month by name (followed by day and year numerical fields). If this version is approved and implemented, it might be a happy medium solution—improving the experience for sighted users giving the more recognizable month name, while keeping the strong experience for screen-reader users.


## Other Alternatives
USWDS recommends using a Memorable Date component of their own when the day-of-the-week isn’t important, or for when users are selecting a familiar date, like their birthdate. The USWDS pattern differs from the VA experimental pattern, using both the numeric representation of the month and the month name.


## Date Component Comparison
- As a reminder, in the context of these forms users are:
  - Recalling a singular memorable date (ex: birth date(s) for self and/or dependents, discharge date)
  - Selecting or typing that date
  - Moving onto the next field of a longer form


### Date Input (currently in use as of August 2023)
**Pros**
1. Selection from list of named months, reducing friction from dyscalculia
2. Dropdowns can reduce potential for user error by constraining options to those of the list
   
**Cons**
1. Reported usability issues around selection - dropdown will “jump” to select something else
2. Two dropdowns slows users down, making the form longer to complete
3. [Bug: overflowing on small screen sizes](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1548)
   
### Memorable Date 2.0
**Pros**
1. Text fields are often the quickest, easiest way for users to complete fields - no clicking or scrolling necessary
2. More versatile, as numeric date works well for remembering various dates

**Cons**
1. Text fields can be more difficult from an accessibility perspective
2. Potential bug: error message refers to numeric months, which isn’t helpful or accurate

### Memorable Date 3.0
**Pros**
1. Alignment with USDWS standards
2. Allows typing the month number OR the month name

**Cons**
1. Not yet tested with Veterans; experimental pattern. We’d be the guinea pigs. Though this could change soon - as announced in the 08/14/2023, we can use the 3.0 experimental component library.


## Conclusion
Switching from Date Input to the Memorable Date input would alleviate the “jumping” concerns/reports, since only typing is required for the current version (no dropdown). I’m not sure if there will otherwise be usability improvements.
I’m hesitant to suggest switching over the Memorable Date component for all forms. It might be valuable to try on the 10-10EZ as a pilot, or to wait until the newest version of the experimental pattern is approved for use. This version would be in better alignment with the USWDS and might alleviate some of the concerns with the current Date Input component.


## References
[Accessibility ticket on memorable date](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1550)

[Thread on plans for future date picker components](https://dsva.slack.com/archives/C01DBGX4P45/p1687544483716189)
- Screen reader user in previous research mentioned they’d prefer a date picker over the memorable date component

[Ticket about possible experimental date picker (calendar) component](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/684)

