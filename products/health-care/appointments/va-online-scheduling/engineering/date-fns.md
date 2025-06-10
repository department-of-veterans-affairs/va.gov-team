## Findings & Recommendations
I am proposing that all dates be in UTC format. That is  ISO 8601 format, YYYY-MM-DDTHH:mm:ssZ.

### Why?
The date-fns and date-fns-tz functions work best when the date is in this format. 

## Constructing dates using 'new Date(format string)'.
Use caution when contructing dates with new Date("format string").

### Why?
It works as expected when the date string is in UTC format but not as expected when the date string is not.
Ex. Contructing a date like this:

```
new Date('2025-06-01');
```

Will result in "Sat May 31 2025 19:00:00 GMT-0500". The appointments list (grouped by date) views represent this usecase. This is because the missing time information from the date string is substitued with "00:00:00:00" by default. This is 12am UTC time but when converted to local time (CST), gives "19:00:00:00" or 5pm yesterday.

Quote from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date:
Given at least a year and month, this form of Date() returns a Date object whose component values (year, month, day, hour, minute, second, and millisecond) all come from the following parameters. Any missing fields are given the lowest possible value (1 for day and 0 for every other component). The parameter values are all evaluated against the local time zone, rather than UTC. Date.UTC() accepts similar parameters but interprets the components as UTC and returns a timestamp.

## Use 'date-fns' parseISO function
So, how should you construct a date object when the date string is not in UTC format? You could use the approach suggested above, Date.UTC or you could use the Date contructor that takes date tokens:

```
const tokens = '2025-06-01'.split('-')
// Unexpected!!!!
date1 = new Date(Date.UTC(tokens[0], tokens[1]-1, tokens[2])) // Outputs: Sat May 31 2025 19:00:00 GMT-0500 (Central Daylight Time)
// What??? I don't understand the '10' for hours
date2 = new Date(Date.UTC(tokens[0], tokens[1]-1, tokens[2], 10)) // Outputs: Sun Jun 01 2025 05:00:00 GMT-0500 (Central Daylight Time)(Central Daylight Time)
```

**OR**

```
const tokens = '2025-06-01'.split('-')
date = new Date(tokens[0], tokens[1] - 1, tokens[2]); // Outputs: Tue Jun 01 2025 00:00:00 GMT-0500 (Central Daylight Time) 
```

This will create a properly contructed UTC date object. You can also use 'parseISO' from date-fns.

```
date = parseISO('2025-06-01'); // Outputs: 2025-06-01T05:00:00.000Z
```

Note the differences here. The first and second appoach have to account for the month being 'zero' based hence the '-1' and the output is in local time. The third approach is in UTC time, which is what we want.

There is a Javascript 'Date.parse' function but I think date-fns parseISO is the better choice.

## Which format function should I use?
There are multiple format functions.

Javascript
- toISOString

date-fns
- format
- formatISO

date-fns-tz
- format
- formatInTimeZone

Since I am proposing that all dates are in UTC format, the date-fns-tz format variants should be used.

### Why?
VAOS requires that dates be displayed in the timezone of the facility when scheduling an appointment.
Since the Javascript Date object doesn't contain any timezone information (momentjs maintained timezone information), I think the various format functions from date-fns-tz should be used since it allows for timezone information to be specified when formatting dates. Ex.

```
    formatInTimeZone(
      zonedTimeToUtc(new Date(selectedDate), 'America/Denver'),
      'America/Denver',
      "yyyy-MM-dd'T'HH:mm:ssXXX",
    ),
```

**OR**

```
// Using 'format' function from date-fns-tz
format(
  zonedTimeToUtc(new Date(selectedDate), 'America/Denver'),
  "yyyy-MM-dd'T'HH:mm:ssXXX",
  {
    timeZone: 'America/Denver'
  }
)
```

In this example, the user is scheduling an appointment at a facility in Denver. So a new Date object is constructed (date string is in UTC format) and converted to an UTC date in the given timezone. Then the date is formatted in the given timezone.

NOTE: I am still in the process of verifying if this is the pattern going forward but it looks promising.

## Things to be Aware Of
When viewing the date-fns and date-fns-tz documentation, change the version number to date-fns@2.24.0, data-fns-tz@2.0.0.
