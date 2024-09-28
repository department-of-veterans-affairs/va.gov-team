<!-- markdownlint-disable  MD024 -->

# BTSSS API SoP By the Numbers

A summary of expected numbers vs. ideal numbers to help guide priorities and provide a barometer for if the API is running smoothly

Numbers taken from a 1 hr window on May 31st 2024

## TL;DR

Error rates and  timeouts are currently fine, response times are unacceptable.

## Expected Error rate

These are standard Business logic errors.

### Currently

3%

### Expected

2-3%

NOTE: this is based historical usage of the PCI app day to day

### Tolerance

< 5%

## Timeouts

These are calls taking more than 120 secs to return a respond. These don't mean a failure.

### Currently

1%

### Expected

0%

### Tolerance

2%

## Avg Request Time

Have the p95 response times be reasonable

### Currently

34.9 seconds

### Expected

2-5 seconds.

### Tolerance

< 10 secs
