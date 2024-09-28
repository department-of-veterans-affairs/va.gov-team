

## Locative / search rules used in Facility Locator
LAST UPDATED: November 2019

**TODO: 2023-12-18: Update for modern age or deprecate**

Location NOT detected, not entered:

- Zoom - All US, No Points
- Driving Directions - No from - Redirect to google maps with start blank

Location Not Detected, Is Entered:

     State

- Zoom - zoom to contain state
- Driving Directions - No from - Redirect to google maps with start blank

     City

- Zoom - 50 miles (Nice to have: Zip Boundary Highlighted somehow)
- Driving Directions - From Geographic Center of City.


      Zip

- Zoom - 50 miles (Nice to have: Zip Boundary Highlighted somehow)
- Driving Directions - From Geographic Center of Zip.

     Full Address

- Zoom - 50 Miles
- Driving Directions - From address

Location is detected, not entered:

- Zoom - 50 miles
- Driving Directions - always from detected location

Location is detected, plus entered partial:

- Zoom - 50 miles
- Driving Directions - always from detected location

Location is detected, plus entered full:

- Zoom - 50 miles
- Driving Directions from entered address
