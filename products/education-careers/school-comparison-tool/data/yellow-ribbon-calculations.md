# Input fields
![Screen Shot 2021-03-01 at 10 17 06 AM](https://user-images.githubusercontent.com/1094999/109517479-52931580-7a77-11eb-9c9f-e7ce58c620ae.png)

Data in YellowRibbonProgramSource CSV is related to Weams rows by `facility_code`

"Degree Level" is populated from the `degree_level` column in related rows in YellowRibbonProgramSource

If "Enter an amount" is selected

- then "Yellow Ribbon amount from school per year" is shown with a default value of $0

if a degree level value is selected 

- then the "Division or school" and the "Yellow Ribbon amount from school per year" appear
- The "Division or school" is populated with each unique `division_professional_school` found for the institutions
- The "Yellow Ribbon amount from school per year" is populated with the contribution amount for the selected program based on 

# Affected Output fields
"Yellow Ribbon amount from school per year" amount can affect these values

![image](https://user-images.githubusercontent.com/1094999/109347886-cfd54500-7841-11eb-8e96-f45c90233c5d.png)
### Number of terms
[See calculation definitions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/data/calculation-definitions.md#number_of_terms)

### Total per year
The yellow ribbon benefit total of each "paid by school" term is used to determine displayed value

### GI Bill pays to school
"Yellow Ribbon: Total per year" is added to "Tuition and fees: Total per year"

### Out of pocket tuition
"GI Bill pays to school" and total scholarships is subtracted from "Tuition and fees per year"

### "paid by VA" vs "paid by School"
All amounts with `paid by VA` are the same as the corresponding `paid by school` amount. In the code the respective Yellow Ribbon Benefit for term is divided by 2.

# Calculations

[Code for yellow ribbon calculations](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/gi/selectors/calculator.js#L388)

### Determine Yellow Ribbon Benefit for first term
If any of the following below then set the yellow ribbon benefit term to 0
 - the amount entered into "Yellow Ribbon amount from school per year" (`yellowRibbonAmount`) equals 0
 - [tier](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/data/calculation-definitions.md#tier) is less than 1
 - institution field `yr` is false
 - "Will you be a Yellow Ribbon recipient?" is no
 -  `militaryStatus === 'active duty'`
 -  is OJT or Flight or Correspondence
 -  giBillChapter is 30, 31, 1606, or 35
 -  [tuition fees per term](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/data/calculation-definitions.md#tuition_fees_per_term) is equal to `tuition fees for term 1`

Otherwise select minimum value from
- [tuition fees per term](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/data/calculation-definitions.md#tuition_fees_per_term) - tuitionFeesTerm1,
- tuitionNetPrice - tuitionFeesTerm1,
- yellowRibbonAmount * 2,

### Determine Yellow Ribbon Benefit for second term
If any of the following below then set the yellow ribbon benefit term to 0
 - the amount entered into "Yellow Ribbon amount from school per year" (`yellowRibbonAmount`) equals 0
 - [tier](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/data/calculation-definitions.md#tier) is less than 1
 - institution field `yr` is false
 - "Will you be a Yellow Ribbon recipient?" is no
 -  `militaryStatus === 'active duty'`
 -  is OJT or Flight or Correspondence
 -  giBillChapter is 30, 31, 1606, or 35
 -  [tuition fees per term](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/data/calculation-definitions.md#tuition_fees_per_term) is equal to `tuition fees for term 2`
 -  if calendar is nontraditional and [number of terms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/data/calculation-definitions.md#number_of_terms) is 1

Otherwise select minimum value from
- [tuition fees per term](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/data/calculation-definitions.md#tuition_fees_per_term) - tuitionFeesTerm2,
- tuitionNetPrice - tuitionFeesTerm1 - tuitionFeesTerm2 - [yrBenTerm1](#Determine-Yellow-Ribbon-Benefit-for-first-term),
- yellowRibbonAmount * 2 - [yrBenTerm1](#Determine-Yellow-Ribbon-Benefit-for-first-term),


### Determine Yellow Ribbon Benefit for third term
If any of the following below then set the yellow ribbon benefit term to 0
 - the amount entered into "Yellow Ribbon amount from school per year" (`yellowRibbonAmount`) equals 0
 - [tier](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/data/calculation-definitions.md#tier) is less than 1
 - institution field `yr` is false
 - "Will you be a Yellow Ribbon recipient?" is no
 -  `militaryStatus === 'active duty'`
 -  is OJT or Flight or Correspondence
 -  giBillChapter is 30, 31, 1606, or 35
 -  [tuition fees per term](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/data/calculation-definitions.md#tuition_fees_per_term) is equal to `tuition fees for term 3`
 -  if calendar is semester
 -  if calendar is nontraditional and [number of terms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/data/calculation-definitions.md#number_of_terms) is less than 3



Otherwise select minimum value from
- [tuition fees per term](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/data/calculation-definitions.md#tuition_fees_per_term) - tuitionFeesTerm3,
- tuitionNetPrice - tuitionFeesTerm1 - tuitionFeesTerm2 - tuitionFeesTerm2 - [yrBenTerm1](#Determine-Yellow-Ribbon-Benefit-for-first-term) - [yrBenTerm2](#Determine-Yellow-Ribbon-Benefit-for-second-term),
- yellowRibbonAmount * 2 - [yrBenTerm1](#Determine-Yellow-Ribbon-Benefit-for-first-term) - [yrBenTerm2](#Determine-Yellow-Ribbon-Benefit-for-second-term),
