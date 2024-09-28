# Clear Input - Facility Locator Design Enhancement

## Goal:
Incorporate a “Clear input” button on Facility locator’s location input field.

## **Problem to be solved:** 
Today, if a user wants to change an inputted location, then the user must manually highlight all the text in the field. This happens when a user is geolocated. Geolocated addressed are very long so it’s cumbersome to highlight or delete all the text within the field. 

![image.png](https://images.zenhubusercontent.com/5c4895778d88074ab2c6ad18/ffde7a06-1050-4765-b949-47e9a0162cd4)

## Solution:
A clear input button would allow clearing the input with clicking of an icon.
![image.png](https://images.zenhubusercontent.com/5c4895778d88074ab2c6ad18/0051b4cc-6141-4a4a-9011-799217b1ce50)

## Research:
- [Mural board with reference examples](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/design/clear-input-Mar-2020/Clear-Input.pdf) 
- [Comparative analysis spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2021-map-enhancements/map-comparative-analysis/map-comparative-analysis-spreadsheet.pdf)

## PROPOSED DESIGN

Before interaction

![Before interaction.png](https://images.zenhubusercontent.com/5c4895778d88074ab2c6ad18/3bae1af4-eac9-4ab2-bbc4-a1ba45d00128)

Clear input button appears after first character is inputted
![After first character is inputted.png](https://images.zenhubusercontent.com/5c4895778d88074ab2c6ad18/d9db78c1-c491-4dbb-8cb7-c85fe52fd15b)

While text is being inputted and exceeds the input's width, the text moves left. Text area is never overlapped by clear input button.
![Text exceeds input width.png](https://images.zenhubusercontent.com/5c4895778d88074ab2c6ad18/d097fc88-e786-49cd-bd67-e4a977e28c16)

When user exits input (no longer in focus) the inputted text displays left to right. Overflow text (at the end of the text string) is overlapped by clear input button. When clear button is clicked, input is cleared and design matches "Before interaction" state.
![After entry when not in focus.png](https://images.zenhubusercontent.com/5c4895778d88074ab2c6ad18/f9f02eca-3b1b-4a2a-b812-7fa1829b51c2)

### Specs
![Specs.png](https://images.zenhubusercontent.com/5c4895778d88074ab2c6ad18/06b6770e-573f-4da6-9a15-7f001123d73c)
