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

## Comparing dates with isBefore and isAfter
Use caution when comparing dates using isBefore and isAfter.

### Why
The dates must be in the same format to compare correctly. Ex.

```
mappedSlots = fetchedSlots.filter(slot => {
          return isAfter(
            startOfMinute(new Date(slot.start)),
            startOfMinute(new Date(new Date().toISOString())),
          );
        });
```

In this example, we want to determine if the available slot date is after the current date. The slot start date is in UTC format. So, the current date must be converted to UTC.

**NOTE:** The date-fns library's isAfter and isBefore function comparison is precise down to the millisecond. So, to control the granularity of the comparison, use functions like startOfYear, startOfMonth, startOfDay, etc., to truncate dates to the desired level before comparison.


## Use 'date-fns' parseISO function
How should you construct a date object when the date string is not in UTC format? You could use the approach suggested above, Date.UTC or you could use the Date contructor that takes date tokens:

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
// Date in UTC format
formatInTimeZone(
  new Date(selectedDate),
  'America/Denver',
  "yyyy-MM-dd'T'HH:mm:ssXXX",
)

// Date not in UTC format
formatInTimeZone(
   parseISO(selectedDate),
  'America/Denver',
  "yyyy-MM-dd'T'HH:mm:ssXXX",
)
```

**OR**

```
// Using 'format' function from date-fns-tz
format(
  new Date(selectedDate),
  "yyyy-MM-dd'T'HH:mm:ssXXX",
  {
    timeZone: 'America/Denver'
  }
)

// Date not in UTC format
format(
   parseISO(selectedDate),
  'America/Denver',
  "yyyy-MM-dd'T'HH:mm:ssXXX",
) 
```

In this example, the user is scheduling an appointment at a facility in Denver. So a new Date object is constructed (date string is in UTC format) and converted to an UTC date in the given timezone. Then the date is formatted in the given timezone.

## How should you format a UTC date?
I am recommending this format, "yyyy-MM-dd'T'HH:mm:ssXXX". So if you need to create a formatted UTC date string:

```
format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX", { timeZone: 'UTC' }),
```

### Why?
We currently have the following format strings defined "./vaos/utils/constants.js":

```
export const DATE_FORMATS = {
  // Friendly formats for displaying dates to users
  // e.g. January 1, 2023
  friendlyDate: 'MMMM d, yyyy',
  // ISO 8601
  // e.g. 2025-05-06T21:00:00
  ISODateTime: "yyyy-MM-dd'T'HH:mm:ss",
  // e.g. 2025-05-06T21:00:00Z
  ISODateTimeUTC: "yyyy-MM-dd'T'HH:mm:ss'Z'",
  // e.g. 2025-05-06T21:00:00-05:00"
  ISODateTimeLocal: "yyyy-MM-dd'T'HH:mm:ssxxx",
  // iCalendar RFC 5545
  // e.g. 20250506T225403Z
  iCalDateTimeUTC: "yyyyMMdd'T'HHmmss'Z'",
  // Internal formats for use in source code
  // e.g. 2025-05
  yearMonth: 'yyyy-MM',
  // e.g. 2025-05-21
  yearMonthDay: 'yyyy-MM-dd',
};
```

The DATE_FORMATS.ISODateTimeLocal format string ("yyyy-MM-dd'T'HH:mm:ssxxx") is using the lowercase 'x's which the date-fns documentation states, 'Timezone (ISO-8601 w/o Z)' vs. the uppercase 'X' having documenation stating, 'Timezone (ISO-8601 w/ Z)'. 

**NOTE:** I am still in the process of verifying if this is the pattern going forward but it looks promising.

## Why not use Date.toISOString?
It sounds intuitive and ISO date strings are what we want right? Well using to Date.toISOString outputs this:

```
new Date().toISOString() // Outputs: '2025-06-10T18:36:04.237Z'
```

Notice the '.237Z'. We get the milliseconds which we don't need.

## endOfMonth vs. lastDayOfMonth
Use caution when using the endOfMonth function. It may not produce the results you are expecting. In this example from production code:

```
const prefDateObj = new Date(preferredDate); // ✅ 2025-10-17
const startDateObj = startOfMonth(prefDateObj); // ✅ 2025-10-01T05:00:00.000Z local time
const endDateObj = endOfMonth(addMonths(prefDateObj, 1)); // 💣 2025-12-01T05:59:59.999Z local time but not expecting '2025-12-01'
```

The expectation is '2025-11-30T05:59:59.999Z' (not sure about what the time portion should be). Using the 'lastDayOfMonth' produces the expected results.

```
lastDayOfMonth(addMonths(prefDateObj, 1)) // ✅ 2025-11-30T06:00:00.000Z
```

### Why
In the date-fns library, the endOfMonth and lastDayOfMonth functions are very similar but have a key difference in their handling of the time component. The 'endOfMonth' function returns a new date that is the last millisecond of the month for the given date. For example,

```
endOfMonth(new Date(2014, 8, 2, 11, 55, 0)) (which represents September 2, 2014, at 11:55 AM) will return Tue Sep 30 2014 23:59:59.999.
```

The 'lastDayOfMonth' function returns a new date that is the last day of the month for the given date, but it preserves the time component of the original date. For example,

```
lastDayOfMonth(new Date(2023, 10, 15, 10, 30, 0)) (representing November 15, 2023, at 10:30 AM) would return a date object for November 30, 2023, at 10:30 AM.
```

In essence:
- endOfMonth is useful when you need to calculate the absolute end of the month, including the latest possible time.
- lastDayOfMonth is useful when you want to find the date of the last day of the month while keeping the original time of day. 

## Things to be Aware Of
- When viewing the date-fns and date-fns-tz documentation, change the version number to date-fns@2.24.0, data-fns-tz@2.0.0. These are the versions of the libraries used in VAOS.
- When viewing date strings such as '2025-06-10T18:36:04Z' and '2025-06-10T18:36:04-0500' they are not the same. The 1st is UTC and must be converted to local time by subtracting the UTC offset and the 2nd is local time. So in this example, The 1st date string would be 1:36pm CST local time (18 - 5 CST offset = 13 - 12 = 1) 
