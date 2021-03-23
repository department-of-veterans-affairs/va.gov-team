# Date Library: Momentjs vs. Date-fns Discovery

The purpose of this document to is to evaluate the advantages or limitations of switching momentjs to date-fns.
Using this information, we can determine which library to within VAOS and potentially other applications for date operations. 

### Research Findings 

According to the the momentjs documentation [Project Status](https://momentjs.com/docs/):

> Recently, Chrome Dev Tools started showing recommendations for replacing Moment for the size alone. We generally support this move.

> We recognize that many existing projects may continue to use Moment, but we would like to discourage Moment from being used in new projects going forward.

> We now generally consider Moment to be a legacy project in maintenance mode. It is not dead, but it is indeed done.

Momentjs has recommendations for [alternative](https://momentjs.com/docs/#/-project-status/recommendations/) libries of which date-fns is included.

Based on moments own recommendation we should migrate to another package at the very least when building out new functionality. 
Overall the effort is low, the reward is high and there is only one potential issue with the clone functionality in momentjs (see the clone note below).
Before we settle on just the date-fns library we may want to look at the even smaller and lighter packge Dayjs. 
[Dimitriy Kovalenko](https://dev.to/dmtrkovalenko/you-might-not-need-date-fns-23f7) writes: 

> Date-fns is not lightweight library for date/time management. There are underrated alternatives – e.g. Dayjs is much smaller when using around the same functionality.

### How much effort would it take to convert our existing timezone related logic to use date-fns?

The effort in conversion is relatively low and actual development efforts are straight forward. 
There are currently `519 occurances` of moment in VAOS and most are as simple as changing the import/naming to date-fns. 

#### Clone Note
There doesn't appear to be a one to one for the `clone()` functionality being used currently. See [Moment.js Documentation: Clone()](https://momentjs.com/docs/#/parsing/moment-clone/)

Leveraging the [ESLint plugin](https://github.com/you-dont-need/You-Dont-Need-Momentjs#eslint-plugin) provided a simple method of date-fns or native alternatives.

### What is the bundle size impact of using just date-fns (i.e. is date-fns + moment less than moment/moment-tz).

Date-fns is significantly smaller `~18K gzip` when compared to momentjs `66K gzip` but bundle size alone.
Date-fns utilizes tree-shaking which could help reduce size even more based on usage. 
