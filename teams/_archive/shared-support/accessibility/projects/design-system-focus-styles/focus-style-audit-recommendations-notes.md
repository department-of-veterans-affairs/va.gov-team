# Focus Style Audit Recommendations and Notes

The [focus styles audit](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1663602034370/03497f8dc7ef4caf0b5677b6260188cfe594c5ae?wid=0-1669920646432&sender=ud899eb01a8bd7352dc213970) showed mostly what we expected:

1. A double box shadow outline focus style would likely work for most of the use cases gathered in the audit.
2. Some cases exist where links wrap to the next line and could create visual issues for a double box shadow outline. That visual issue would be an overlapping outline, which wouldn't look appealing to site visitors.

# Recommendations

1. Create two different focus styles: One style for the majority of interactive elements - a double box shadow outline. And one for interactive elements (mostly links) that wrap to two lines and would cause a double outline style to overlap.
2. Explore possible ways within the implementation to have the styles be easily removed or added to interactive elements since some may wrap unexpectedly.
3. Write guidance around when to use each style.

# Existing color

| Color                                       | meets 4:5.1 on white | meets 3.1 on white | Contrast ratio |
| ------------------------------------------- | -------------------- | ------------------ | -------------- |
| Current focus color: Gold Light - `#f9c642` | ❌ No                | ❌ No              | 1.6:1          |

# Possible new colors

These colors were selected based largely on standing out against the existing VA.gov color palette. They still need to be tested further to see how they perform in low vision and color blindness situations.

# Color explorations

These aren't recommendations yet, but starting points for further exploration.

| Color                           | meets 4:5.1 on white | meets 3.1 on white | Contrast ratio | Notes                                                                                                                |
| ------------------------------- | -------------------- | ------------------ | -------------- | -------------------------------------------------------------------------------------------------------------------- |
| Orange Warm Vivid 50v - `#cf4900` | ✅ Yes                | ✅ Yes              | 4.6:1          |                                                                                                                      |
| Mint Cool Vivid 50v - `#008480`   | ✅ Yes                | ✅ Yes              | 4.6:1          | Generally, this is green-ish, and using green in combination with red isn't ideal for some kinds of color blindness.|
| Violet 50 - `#8168b3`              | ✅ Yes                | ✅ Yes              | 4.6:1          | We use a purple shade for visited links. Would this conflict or standout enough there?                            |
| Violet Warm 50v - `#be32d0`       | ✅ Yes                | ✅ Yes              | 4.6:1          |                                                                                                                  |
| Magenta Vivid 50v - `#d72d79`     | ✅ Yes                | ✅ Yes              | 4.6:1          | This one feels a bit too much like red, and may not stand out next to error messages.                                |


Some overall notes:
- All of the possible colors fall in the 50 range and have a contrast ratio of 4.6:1 on white. This means there's room for contrast to still be solid on other backgrounds, like our Alerts.
- Because this is an interface element and not text, contrast needs to be at least 3:1.