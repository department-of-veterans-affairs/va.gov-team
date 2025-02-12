# Locative / search rules used in Facility Locator
LAST UPDATED: November 2019

**TODO: 2023-12-18: Update for modern age or deprecate**

## Location NOT detected, NOT entered:

- Zoom - All US, No Points
- Driving Directions - No from - Redirect to google maps with start blank

## Location NOT detected, IS entered:

### State

- Zoom - zoom to contain state
- Driving Directions - No from - Redirect to google maps with start blank

### City

- Zoom - 50 miles (Nice to have: Zip Boundary Highlighted somehow)
- Driving Directions - From Geographic Center of City.


### Zip

- Zoom - 50 miles (Nice to have: Zip Boundary Highlighted somehow)
- Driving Directions - From Geographic Center of Zip.

### Full Address

- Zoom - 50 Miles
- Driving Directions - From address

## Location IS detected, NOT entered:

- Zoom - 50 miles
- Driving Directions - always from detected location

## Location IS detected, PLUS entered partial:

- Zoom - 50 miles
- Driving Directions - always from detected location

## Location IS detected, PLUS entered full:

- Zoom - 50 miles
- Driving Directions from entered address
